import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createServer as createNetServer } from 'node:net';
import { randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { lstat, mkdir, mkdtemp, readFile, readdir, realpath, symlink, unlink, utimes, writeFile } from 'node:fs/promises';
import { release } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { agentWriteHelpers, instrumentAgentWrite } from './verify-agent-interruption-overlay.mjs';
import { createMcpStdioFixture } from './verify-mcp-stdio.mjs';

// Interruption while Agent writes or tools are outstanding. Controlled local
// HTTP model fixture; real Agent tools, filesystem, review and restart.
assert.equal(process.platform, 'linux', 'This interruption verifier currently covers Linux process groups');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const only = process.argv.find(argument => argument.startsWith('--cases='))?.slice('--cases='.length).split(',');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/agent-interruption-'));
const project = join(directory, 'project'), probeDirectory = join(directory, 'probe');
await mkdir(project); await mkdir(probeDirectory);
await writeFile(join(project, 'README.md'), '# Interruption fixture\n');
// Each case uses its own disposable profile so restored review state is attributable.
let profile;
async function freshProfile(name) {
  profile = join(directory, `profile-${name}`);
  await mkdir(join(profile, 'User'), { recursive: true });
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.openRepositoryInParentFolders': 'never', 'files.autoSave': 'off' }));
}

// Disposable overlay: a hard-linked tree with real directories, so the app root
// resolves inside it, and every copy of the recovered write helper calls the probe.
// Instrumented files replace their links; nothing is written through a link.
const writers = agentWriteHelpers.map(helper => helper.file);
const overlayHost = join(directory, 'host'), overlayApp = join(overlayHost, 'resources/app');
execFileSync('cp', ['-al', '--', layout.host, overlayHost]);
assert.ok((await lstat(overlayApp)).isSymbolicLink(), 'Expected the source build application link');
await unlink(overlayApp);
execFileSync('cp', ['-al', '--', await realpath(appRoot), overlayApp]);
// Main-process modules import ../../../desktop relative to the application.
await symlink(join(root, 'desktop'), join(overlayHost, 'desktop'), 'dir');
const overlay = { executable: join(overlayHost, 'openvision'), records: [] };
for (const helper of agentWriteHelpers) {
  const path = join(overlayApp, helper.file), text = await readFile(path, 'utf8');
  await unlink(path); await writeFile(path, instrumentAgentWrite(text, helper), { flag: 'wx' });
  overlay.records.push({ path: helper.file, original: await fileHash(join(appRoot, helper.file)), instrumented: await fileHash(path) });
}
// Verification only: expose the inline-diff service of the overlay's workbench copy
// so the review state behind the bar can be recorded after Undo/Confirm and restart.
{
  const workbench = 'out/vs/workbench/workbench.desktop.main.js', path = join(overlayApp, workbench);
  const text = await readFile(path, 'utf8'), anchor = 'getInlineDiffStorageKeyPrefix() {';
  assert.equal(text.split(anchor).length, 2, 'Expected one review-record key owner');
  await unlink(path);
  await writeFile(path, text.replace(anchor, `${anchor}\n            globalThis.__openvisionInlineDiffService = this;`), { flag: 'wx' });
  overlay.records.push({ path: workbench, original: await fileHash(join(appRoot, workbench)), instrumented: await fileHash(path) });
}
const runId = randomUUID();
const probeModule = join(root, 'desktop/verify-agent-interruption-probe.cjs');

const identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  dirty: execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean),
  platform: process.platform, arch: process.arch, osRelease: release(), node: process.version, overlay: overlay.records,
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['verifier', fileURLToPath(import.meta.url)], ['probe', probeModule],
    ['overlayInstrumentation', join(root, 'desktop/verify-agent-interruption-overlay.mjs')],
    ['agentExecProduction', join(appRoot, 'extensions/cursor-agent-exec/dist/main.js')],
    ...writers.map(relative => [relative, join(appRoot, relative)]),
  ].map(async ([name, path]) => [name, { path, sha256: await fileHash(path) }]))) };
await writeFile(join(directory, 'identity.json'), JSON.stringify(identity, null, 2));

// Shell children report to this nonce-authenticated socket. Cleanup instructions
// go only through that connection, never to a PID.
const shellToken = randomUUID(), shells = new Map();
const shellServer = createNetServer(socket => {
  socket.setEncoding('utf8'); let buffer = '';
  socket.on('error', () => {});
  socket.on('data', chunk => {
    buffer += chunk;
    if (buffer.length > 4096) return socket.destroy();
    if (!buffer.includes('\n')) return;
    let message; try { message = JSON.parse(buffer.slice(0, buffer.indexOf('\n'))); } catch { return socket.destroy(); }
    if (message.token !== shellToken || shells.has(message.name)) return socket.destroy();
    const closed = Promise.withResolvers();
    socket.on('close', () => closed.resolve(Date.now()));
    shells.set(message.name, { ...message, socket, closed: closed.promise, connectedAt: Date.now() });
  });
});
await new Promise(resolve => shellServer.listen(0, '127.0.0.1', resolve));
const shellScript = join(project, 'interrupt-command.cjs');
await writeFile(shellScript, [
  "const fs = require('node:fs');",
  "const stat = fs.readFileSync('/proc/self/stat', 'utf8').slice(fs.readFileSync('/proc/self/stat', 'utf8').lastIndexOf(')') + 2).split(' ');",
  `const socket = require('node:net').connect(${shellServer.address().port}, '127.0.0.1');`,
  `socket.on('connect', () => socket.write(JSON.stringify({ token: ${JSON.stringify(shellToken)}, name: process.argv[2], pid: process.pid, ppid: process.ppid, pgid: Number(stat[2]), sid: Number(stat[3]) }) + '\\n'));`,
  "fs.appendFileSync('interrupt-command-' + process.argv[2] + '.log', 'started\\n');",
  "socket.on('data', () => process.exit(0)); socket.on('end', () => process.exit(0)); socket.on('error', () => process.exit(1));",
  "setTimeout(() => process.exit(42), 180000);",
].join('\n'));

const requests = [], errors = [], held = new Set();
let phase = 'reply';
const fileFor = name => join(project, `interrupt-${name}.js`);
const original = name => `export const value = "before ${name}";\n` +
  Array.from({ length: 160 }, (_, index) => `export const filler${index} = "${'x'.repeat(40)}";\n`).join('');
const changed = name => original(name).replace(`"before ${name}"`, `"after ${name}"`);
const continuationHeld = new Map();
const cases = {
  'write-stop': { kind: 'write', interrupt: 'stop' },
  'write-close': { kind: 'write', interrupt: 'close' },
  'write-kill': { kind: 'write', interrupt: 'kill', retry: true },
  'continuation-kill': { kind: 'continuation', interrupt: 'kill' },
  'continuation-late-kill': { kind: 'continuation', interrupt: 'kill', settleMs: 15000 },
  'approval-kill': { kind: 'approval', interrupt: 'kill' },
  'shell-close': { kind: 'shell', interrupt: 'close' },
  'shell-kill': { kind: 'shell', interrupt: 'kill' },
  // Cancellation points without an outstanding write: each must leave the expected
  // files, no owned process and a chat that accepts the next prompt.
  'stream-stop': { kind: 'stream', interrupt: 'stop' },
  'stream-close': { kind: 'stream', interrupt: 'close' },
  'mcp-stop': { kind: 'mcp', interrupt: 'stop' },
  'mcp-close': { kind: 'mcp', interrupt: 'close' },
  'multi-stop': { kind: 'multi', interrupt: 'stop' },
  'multi-close': { kind: 'multi', interrupt: 'close' },
};
const cancelKinds = new Set(['stream', 'mcp', 'multi']);
for (const name of only ?? []) assert.ok(cases[name], `Unknown case ${name}`);
const selected = Object.entries(cases).filter(([name]) => !only || only.includes(name));
// A real STDIO MCP server whose slow call stays pending until cancelled.
const mcpFixture = selected.some(([, spec]) => spec.kind === 'mcp') ? await createMcpStdioFixture() : undefined;
const mcpCalls = () => mcpFixture?.requests.filter(request => request.method === 'tools/call') ?? [];
const streamHeld = new Set();
const messageText = message => typeof message?.content === 'string' ? message.content : JSON.stringify(message?.content ?? '');

const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  const toolResults = payload.messages?.filter(message => message.role === 'tool').map(message => message.tool_call_id) ?? [];
  requests.push({ phase, at: Date.now(), model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key',
    tools: payload.tools?.length ?? 0, messageCount: payload.messages?.length, toolResults });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  const finish = text => { event({ role: 'assistant', content: text }); event({}, 'stop'); response.end('data: [DONE]\n\n'); };
  const spec = cases[phase];
  if (!spec) return finish('OpenVision interruption fixture reply.');
  const id = `ov_interrupt_${phase.replaceAll('-', '_')}`;
  // The follow-up prompt that shows the interrupted chat is still usable.
  if (/Resume interruption fixture/.test(messageText(payload.messages?.findLast(message => message.role === 'user'))))
    return finish(`OpenVision ${phase} resumed.`);
  if (spec.kind === 'stream') {
    // Tool arguments start streaming and the response is held: the call is never complete.
    event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function', function: { name: 'StrReplace',
      arguments: `{"path": ${JSON.stringify(fileFor(phase))}, "old_string": "\\"before ` } }] });
    held.add(response); response.on('close', () => held.delete(response)); streamHeld.add(phase);
    return;
  }
  if (spec.kind === 'mcp') {
    if (toolResults.includes(id)) return finish(`OpenVision ${phase} finished.`);
    event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function', function: { name: 'CallMcpTool',
      arguments: JSON.stringify({ server: 'user-openvision-verify', toolName: 'memory_probe',
        description: `OpenVision ${phase} probe`, arguments: { mode: 'slow' } }) } }] });
    event({}, 'tool_calls'); return response.end('data: [DONE]\n\n');
  }
  if (spec.kind === 'multi') {
    // One assistant turn edits two files; the second write is held by the probe.
    const second = `${id}_b`;
    if (toolResults.includes(id) && toolResults.includes(second)) return finish(`OpenVision ${phase} finished.`);
    for (const [index, [call, file]] of [[id, phase], [second, `${phase}-b`]].entries())
      event({ role: 'assistant', tool_calls: [{ index, id: call, type: 'function', function: { name: 'StrReplace',
        arguments: JSON.stringify({ path: fileFor(file), old_string: `"before ${file}"`, new_string: `"after ${file}"` }) } }] });
    event({}, 'tool_calls'); return response.end('data: [DONE]\n\n');
  }
  if (toolResults.includes(id)) {
    if (spec.kind === 'continuation' && !continuationHeld.has(phase)) {
      held.add(response); response.on('close', () => held.delete(response));
      continuationHeld.set(phase, payload.messages.findLast(message => message.tool_call_id === id));
      return;
    }
    return finish(`OpenVision ${phase} finished.`);
  }
  if (spec.kind === 'write' || spec.kind === 'continuation') {
    event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function', function: { name: 'StrReplace',
      arguments: JSON.stringify({ path: fileFor(phase), old_string: `"before ${phase}"`, new_string: `"after ${phase}"` }) } }] });
  } else {
    event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function', function: { name: 'Shell',
      arguments: JSON.stringify({ command: `node "${shellScript}" ${phase}`, working_directory: project,
        description: `Run interruption fixture ${phase}`, block_until_ms: 120000 }) } }] });
  }
  event({}, 'tool_calls'); response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));

function procStat(pid) {
  try {
    const text = execFileSync('cat', [`/proc/${pid}/stat`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    const fields = text.slice(text.lastIndexOf(')') + 2).split(' ');
    return { pid, comm: text.slice(text.indexOf('(') + 1, text.lastIndexOf(')')), state: fields[0],
      ppid: Number(fields[1]), pgid: Number(fields[2]), sid: Number(fields[3]) };
  } catch { return undefined; }
}
// Read-only inventory of this run's process family: the run nonce is in the
// inherited environment; sandboxed processes with unreadable environments are
// matched by the owned host's process group instead.
async function ownedProcesses(groups = []) {
  const result = [];
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry) || Number(entry) === process.pid) continue;
    const stat = procStat(Number(entry)); if (!stat) continue;
    let environment = '', cmdline = '';
    try { environment = await readFile(`/proc/${entry}/environ`, 'latin1'); } catch {}
    try { cmdline = (await readFile(`/proc/${entry}/cmdline`, 'utf8')).replaceAll('\0', ' ').slice(0, 200); } catch {}
    const byNonce = environment.includes(`OPENVISION_INTERRUPTION_RUN=${runId}`), byGroup = groups.includes(stat.pgid);
    if (byNonce || byGroup) result.push({ ...stat, byNonce, byGroup, cmdline });
  }
  return result;
}

let app, page;
const hostExits = [], caseResults = [];
const result = { checkedAt: new Date().toISOString(), identity, directory, runId, requests, errors, cases: caseResults, hostExits,
  scope: 'Linux x64 native Agent with a controlled local HTTP model fixture. Write interruption is held deterministically by a verification-only probe in a disposable overlay copy of the recovered write helper; abrupt exit is SIGKILL of the owned host process group. Not power loss, not live inference, not Windows/macOS.',
  success: false };

async function launch() {
  const env = { ...process.env, OPENVISION_INTERRUPTION_RUN: runId,
    OPENVISION_INTERRUPTION_PROBE: probeModule, OPENVISION_INTERRUPTION_PROBE_DIR: probeDirectory };
  delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry',
      '--disable-crash-reporter', ...await linuxSandboxArguments(overlayHost), project] });
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (/\[inlineDiff\].*Error/i.test(message.text())) errors.push(message.text()); });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page); await page.waitForTimeout(6000);
  const child = app.process(), stat = procStat(child.pid);
  assert.equal(stat?.pgid, child.pid, 'The owned host must lead its own process group');
  return child;
}

async function closeOwnedApp(stage) {
  if (!app) return;
  const child = app.process(), window = app.windows()[0];
  const exited = child.exitCode === null && child.signalCode === null ? once(child, 'exit') : undefined;
  const closing = app.close();
  // Only this verifier's disposable app is closed; confirm a pending-work quit prompt.
  await window?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closing; if (exited) await exited;
  hostExits.push({ stage, mode: 'graceful close', pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode });
  app = undefined;
}

async function killOwnedFamily(stage) {
  const child = app.process();
  assert.equal(child.exitCode, null, 'Only the live verifier-owned host can be interrupted');
  // The group was created by this verifier's launch (detached spawn) and checked
  // at launch: its leader is the owned child handle. Never a PID selected by name.
  assert.equal(procStat(child.pid)?.pgid, child.pid);
  const family = await ownedProcesses([child.pid]);
  const exited = once(child, 'exit', { signal: AbortSignal.timeout(15000) });
  process.kill(-child.pid, 'SIGKILL');
  const [code, signal] = await exited;
  hostExits.push({ stage, mode: 'SIGKILL owned process group', pid: child.pid, exitCode: code, signalCode: signal, familyBefore: family.length });
  app = undefined;
  return family;
}

async function survivors(groups) {
  let remaining = [];
  for (let attempt = 0; attempt < 40; attempt++) {
    remaining = (await ownedProcesses(groups)).filter(process => process.state !== 'Z');
    if (!remaining.length) break;
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  return remaining;
}

async function probeEvents(target) {
  let text = '';
  try { text = await readFile(join(probeDirectory, 'probe.ndjson'), 'utf8'); } catch {}
  return text.split('\n').filter(Boolean).map(line => JSON.parse(line)).filter(entry => !target || entry.target === target);
}

async function waitFor(check, message, timeout = 45000) {
  const deadline = Date.now() + timeout;
  for (;;) {
    const value = await check(); if (value) return value;
    if (Date.now() > deadline) throw new Error(message);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

async function configure() {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Interruption fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('ControlOrMeta+w');
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click(); await page.keyboard.press('Escape');
}

const visibleComposerId = () => page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first()
  .evaluate(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id'));

// Submits a prompt in a new chat. `avoid` names a chat the prompt must not reach,
// such as the interrupted chat that restart may restore. Whether restart shows that
// chat or an empty one depends on how far its state was persisted before SIGKILL.
// An untitled restored chat is itself labelled "New Agent", so clicking that label
// kept the old chat, and a titled one had no such control at all: the retry then
// went into the restored chat, where the fixture saw the old tool result and
// finished after one request. The prompt is typed only once the visible composer
// is a different chat, opened with the "Open New Agent Chat" command.
async function newChat(prompt, avoid) {
  await openChat(page);
  const fresh = page.getByRole('button', { name: 'New Agent', exact: true }).filter({ visible: true });
  if (avoid) {
    await waitFor(async () => {
      if (await visibleComposerId().catch(() => undefined) !== avoid) return true;
      await page.keyboard.press('ControlOrMeta+Shift+p');
      await page.locator('.quick-input-widget').getByRole('textbox', { name: 'input', exact: true }).fill('>Open New Agent Chat');
      await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'Open New Agent Chat' }).first().click();
      return page.waitForFunction(avoid => [...document.querySelectorAll('.aislash-editor-input[contenteditable=true]')]
        .filter(element => element.getClientRects().length)
        .some(element => element.closest('[data-composer-id]')?.getAttribute('data-composer-id') !== avoid),
      avoid, { timeout: 5000 }).then(() => false, () => false);
    }, 'Open New Agent Chat did not leave the restored chat', 30000);
  } else if (await fresh.count()) await fresh.first().click();
  const input = await openChat(page), composer = await visibleComposerId();
  if (avoid) assert.notEqual(composer, avoid, 'The prompt must not reach the avoided chat');
  await input.fill(prompt); await input.press('Enter');
  return composer;
}

const reviewControls = async () => (await page.locator('button,[role=button],.anysphere-button,.anysphere-text-button').evaluateAll(elements =>
  elements.filter(element => element.offsetParent !== null).map(element => element.textContent.trim())
    .filter(text => /^(Keep( All| File)?|Undo( All| File)?|Reject( All)?|Review|Run|Skip|Stop|Confirm)$/.test(text)))).sort();

// Review state behind the bar: registry descriptors, live handlers and stored records.
const reviewState = () => page.evaluate(async () => {
  const service = globalThis.__openvisionInlineDiffService;
  if (!service) return { available: false };
  const file = value => value?.path?.split('/').at(-1) ?? value?.fsPath?.split('/').at(-1);
  const records = await service.storageService.cursorDiskKVGetPrefix(service.getInlineDiffStorageKeyPrefix()).catch(error => String(error));
  return { available: true,
    diffs: service.inlineDiffs.value.map(diff => ({ id: diff.id, file: file(diff.uri), composer: !!diff.composerMetadata,
      handler: service.diffHandlers.has(diff.id) })),
    handlers: [...service.diffHandlers.keys()],
    parked: (service.getParkedDiffs?.() ?? []).map(entry => entry.diffId ?? entry.id),
    records: Array.isArray(records) ? records.map(([key]) => key) : records };
}).catch(error => ({ available: false, error: error.message }));

async function snapshot(name, label) {
  await page.screenshot({ path: join(directory, `${name}-${label}.png`) }).catch(() => {});
  const text = await page.locator('body').innerText().catch(() => '');
  await writeFile(join(directory, `${name}-${label}.txt`), text);
  return { controls: await reviewControls().catch(() => []), text };
}

async function fileState(name) {
  const path = fileFor(name);
  const temporary = (await readdir(project)).filter(entry => entry.startsWith(`.interrupt-${name}.js.`));
  let bytes; try { bytes = await readFile(path, 'utf8'); } catch (error) { return { exists: false, error: error.code, temporary }; }
  return { exists: true, length: Buffer.byteLength(bytes), sha256: (await fileHash(path)), temporary,
    state: bytes === original(name) ? 'original' : bytes === changed(name) ? 'changed' : 'torn' };
}

// The transcript must not call an unconfirmed edit "Edited"; an interrupted edit
// is labelled as an attempt with the interruption message.
const transcript = text => ({ edited: /\bEdited\b[\s\S]{0,40}interrupt-/.test(text),
  interrupted: /Edit\s+attempted|Edit interrupted before it completed/.test(text) });

async function openChatFromHistory(title) {
  const steps = [];
  try {
    const history = page.locator('[aria-label*="History" i],.codicon-history').filter({ visible: true }).first();
    await history.click(); steps.push('history');
    await page.getByText(title).filter({ visible: true }).first().click({ timeout: 10000 }); steps.push('chat');
    await page.waitForTimeout(2000);
  } catch (error) { steps.push(`failed: ${error.message.split('\n')[0]}`); }
  return steps;
}

async function runCase(name, spec) {
  const record = { name, ...spec, stages: [], violations: [] };
  caseResults.push(record);
  await freshProfile(name); await launch(); phase = 'configure'; await configure();
  phase = name;
  const requestsBefore = requests.length;
  let groupLeader = app.process().pid;
  if (spec.kind === 'write' || spec.kind === 'continuation') {
    await writeFile(fileFor(name), original(name));
    if (spec.kind === 'write') await writeFile(join(probeDirectory, `pause-interrupt-${name}.js`), '');
    await newChat(`Change "before ${name}" to "after ${name}" in interrupt-${name}.js.`);
    if (spec.kind === 'write') {
      await waitFor(async () => (await probeEvents(fileFor(name))).some(entry => entry.event === 'paused'), 'Write probe did not pause');
      record.stages.push({ stage: 'write paused after partial data', file: await fileState(name), probe: await probeEvents(fileFor(name)) });
    } else {
      await waitFor(() => continuationHeld.has(name), 'Continuation request was not held');
      record.toolResultDelivered = continuationHeld.get(name)?.content;
      record.stages.push({ stage: 'write acknowledged; continuation inference outstanding', file: await fileState(name) });
    }
  } else {
    await newChat(`Run the interruption command fixture ${name}.`);
    await page.getByText(`Run interruption fixture ${name}`, { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
    await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor();
    if (spec.kind === 'shell') {
      await page.getByRole('button', { name: 'Run', exact: true }).filter({ visible: true }).click();
      await waitFor(() => shells.has(name), 'Command child did not connect');
      record.child = { ...shells.get(name), socket: undefined, closed: undefined };
    }
  }
  if (spec.settleMs) await page.waitForTimeout(spec.settleMs);
  // The submitted chat's identity: a retry after restart must not be typed into it.
  record.composerId = await visibleComposerId().catch(() => undefined);
  record.before = await snapshot(name, 'before-interrupt');
  record.requestsBeforeInterrupt = requests.length - requestsBefore;
  if (spec.interrupt === 'stop') {
    await page.locator('.stop-button').filter({ visible: true }).first().click();
    await page.waitForTimeout(1500);
    const stopped = await snapshot(name, 'after-stop');
    record.stages.push({ stage: 'after Stop, write still held', file: await fileState(name), ui: stopped, transcript: transcript(stopped.text) });
    await writeFile(join(probeDirectory, `release-interrupt-${name}.js`), '');
    await page.waitForTimeout(3000);
    record.stages.push({ stage: 'after Stop and write release', file: await fileState(name), ui: await snapshot(name, 'after-release') });
    await closeOwnedApp(`${name} after stop`);
  } else if (spec.interrupt === 'close') {
    await closeOwnedApp(name);
  } else {
    record.family = await killOwnedFamily(name);
  }
  record.afterExit = { file: spec.kind === 'shell' || spec.kind === 'approval' ? undefined : await fileState(name),
    survivors: await survivors([groupLeader]) };
  if (spec.kind === 'shell') {
    const shell = shells.get(name);
    const closed = await Promise.race([shell.closed, new Promise(resolve => setTimeout(() => resolve(false), 5000))]);
    record.afterExit.commandExited = closed !== false;
    // Graceful close must end the command itself. After an abrupt exit nothing
    // can run until the next start, which must end the orphan.
    if (!closed && spec.interrupt !== 'kill') { shell.socket.end('exit\n'); record.afterExit.commandCleanup = 'nonce-authenticated socket exit'; await shell.closed; }
  }
  // An interrupted writer's temporary is swept at startup once it is older than
  // 60 s; age it so this restart stands for a later one. A recent temporary of
  // another file must be kept, since a live writer may own it.
  const editCase = spec.kind === 'write' || spec.kind === 'continuation';
  if (editCase) {
    const aged = new Date(Date.now() - 120000);
    for (const entry of record.afterExit.file.temporary) await utimes(join(project, entry), aged, aged);
    record.sweepControl = join(project, `.sweep-control-${name}.js.openvision-${randomUUID()}.tmp`);
    await writeFile(record.sweepControl, 'recent temporary of another writer');
  }
  // Restart into the same profile and inspect what recovery shows.
  const requestsAtRestart = requests.length;
  await launch(); await openChat(page);
  await page.waitForTimeout(4000);
  if (editCase) await waitFor(async () => !(await fileState(name)).temporary.length, 'Startup sweep left the aged temporary', 15000).catch(() => {});
  let restartedUi = await snapshot(name, 'after-restart');
  // Restart may show a new chat; the interrupted one is then opened from chat history.
  if (spec.kind === 'write' && !/\bEdit(ed|\s+attempted)\b/.test(restartedUi.text)) {
    record.openedFromHistory = await openChatFromHistory(new RegExp(`Change Before ${name} To`, 'i'));
    restartedUi = await snapshot(name, 'after-restart-history');
  }
  record.afterRestart = { file: editCase ? await fileState(name) : undefined,
    ui: restartedUi, transcript: transcript(restartedUi.text), restartRequests: requests.length - requestsAtRestart,
    probe: await probeEvents(fileFor(name)) };
  if (editCase) {
    record.afterRestart.sweepControlKept = await lstat(record.sweepControl).then(() => true, () => false);
    await unlink(record.sweepControl).catch(() => {});
  }
  if (spec.kind === 'shell' && !record.afterExit.commandExited && spec.interrupt === 'kill') {
    const shell = shells.get(name);
    const closed = await Promise.race([shell.closed, new Promise(resolve => setTimeout(() => resolve(false), 10000))]);
    record.afterRestart.commandEndedByRestart = closed !== false;
    if (!closed) { shell.socket.end('exit\n'); record.afterRestart.commandCleanup = 'nonce-authenticated socket exit'; await shell.closed; }
  }
  if (record.afterRestart.file?.state === 'changed') record.recovery = await rejectRestored(name);
  if (spec.kind !== 'write' && spec.kind !== 'continuation')
    record.afterRestart.commandLog = await readFile(join(project, `interrupt-command-${name}.log`), 'utf8').catch(() => '');
  record.requestsTotal = requests.length - requestsBefore;
  if (spec.retry) record.retry = await retryAfterInterruption(name, record.composerId);
  judge(record);
  await closeOwnedApp(`${name} after inspection`);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
}

// Stop or close while tool arguments stream, while an MCP call runs, or between the
// two files of one multi-file edit. Each case then sends a follow-up prompt into
// the same chat (after Stop in the same session; after close, after restart).
const cancelPrompt = (name, kind) => kind === 'mcp'
  ? `Probe ${name} with memory_probe on user-openvision-verify in slow mode. I approve it.`
  : kind === 'multi' ? `Change ${name}: "before ${name}" to "after ${name}" in interrupt-${name}.js and "before ${name}-b" to "after ${name}-b" in interrupt-${name}-b.js.`
    : `Change ${name}: "before ${name}" to "after ${name}" in interrupt-${name}.js.`;
const cancelFiles = (name, kind) => kind === 'multi' ? [name, `${name}-b`] : kind === 'stream' ? [name] : [];
async function filesState(name, kind) {
  return Object.fromEntries(await Promise.all(cancelFiles(name, kind).map(async file => [file, await fileState(file)])));
}
async function mcpChildrenExited(connections) {
  // The STDIO child holds its fixture control connection until it exits; the PID
  // probe (signal 0) only reads existence, it never signals the process.
  const deadline = Date.now() + 15000;
  const alive = record => { try { process.kill(record.pid, 0); return true; } catch (error) { return error.code !== 'ESRCH'; } };
  while (connections.some(record => !record.closedAt || alive(record)) && Date.now() < deadline) await new Promise(resolve => setTimeout(resolve, 100));
  return connections.map(record => ({ pid: record.pid, closed: !!record.closedAt, exited: !alive(record) }));
}
async function resumeChat(name, record) {
  const requestsBefore = requests.length;
  let composer = await visibleComposerId().catch(() => undefined), history;
  if (composer !== record.composerId) {
    history = await openChatFromHistory(new RegExp(name, 'i'));
    composer = await visibleComposerId().catch(() => undefined);
  }
  const outcome = { history, composer, sameChat: composer === record.composerId };
  if (!outcome.sameChat) return outcome;
  const input = await openChat(page);
  await input.fill(`Resume interruption fixture ${name}. Reply only.`); await input.press('Enter');
  outcome.replied = await page.getByText(`OpenVision ${name} resumed.`, { exact: true }).first().waitFor({ timeout: 45000 }).then(() => true, () => false);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
  outcome.requests = requests.length - requestsBefore;
  await snapshot(name, 'after-resume');
  return outcome;
}
async function runCancelCase(name, spec) {
  const record = { name, ...spec, stages: [], violations: [] };
  caseResults.push(record);
  await freshProfile(name);
  const connectionsBefore = mcpFixture?.connections.length ?? 0, listsBefore = mcpFixture?.requests.length ?? 0;
  if (spec.kind === 'mcp') await writeFile(join(profile, 'User/mcp.json'), JSON.stringify({ mcpServers: {
    'openvision-verify': mcpFixture.configuration } }, null, 2));
  await launch(); phase = 'configure'; await configure();
  phase = name;
  const requestsBefore = requests.length, groupLeader = app.process().pid, callsBefore = mcpCalls().length;
  for (const file of cancelFiles(name, spec.kind)) await writeFile(fileFor(file), original(file));
  if (spec.kind === 'multi') await writeFile(join(probeDirectory, `pause-interrupt-${name}-b.js`), '');
  if (spec.kind === 'mcp')
    await waitFor(() => mcpFixture.requests.slice(listsBefore).some(request => request.method === 'tools/list'), 'MCP server was not discovered');
  await newChat(cancelPrompt(name, spec.kind));
  if (spec.kind === 'stream') {
    await waitFor(() => streamHeld.has(name), 'Tool-argument stream was not held');
    await page.waitForTimeout(1500);
  } else if (spec.kind === 'mcp') {
    await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
    await page.locator('[data-tool-approval-gate]').filter({ visible: true }).getByRole('button', { name: /^Run(?:\s|$)/ }).click();
    await waitFor(() => mcpCalls().length > callsBefore, 'The MCP call did not start');
    record.call = { id: mcpCalls().at(-1).id, instance: mcpCalls().at(-1).instance };
  } else {
    await waitFor(async () => (await probeEvents(fileFor(`${name}-b`))).some(entry => entry.event === 'paused'), 'Second write did not pause');
    await waitFor(async () => (await fileState(name)).state === 'changed', 'First file was not written before the second');
  }
  record.composerId = await visibleComposerId().catch(() => undefined);
  record.before = { files: await filesState(name, spec.kind), ui: await snapshot(name, 'before-interrupt') };
  record.requestsBeforeInterrupt = requests.length - requestsBefore;
  if (spec.interrupt === 'stop') {
    await page.locator('.stop-button').filter({ visible: true }).first().click();
    await page.waitForTimeout(1500);
    const stopped = await snapshot(name, 'after-stop');
    record.stages.push({ stage: 'after Stop', files: await filesState(name, spec.kind), ui: stopped, transcript: transcript(stopped.text) });
    if (spec.kind === 'multi') {
      await writeFile(join(probeDirectory, `release-interrupt-${name}-b.js`), '');
      await page.waitForTimeout(3000);
      record.stages.push({ stage: 'after Stop and second write release', files: await filesState(name, spec.kind), ui: await snapshot(name, 'after-release') });
    }
    if (spec.kind === 'mcp') {
      record.mcpCancelled = await waitFor(() => mcpFixture.cancellations.some(event => event.requestId === record.call.id &&
        event.instance === record.call.instance), 'Stop did not cancel the MCP call', 10000).then(() => true, () => false);
    }
    record.resume = await resumeChat(name, record);
    await closeOwnedApp(`${name} after stop`);
  } else await closeOwnedApp(name);
  record.afterExit = { files: await filesState(name, spec.kind), survivors: await survivors([groupLeader]) };
  if (spec.kind === 'mcp') record.afterExit.mcpChildren = await mcpChildrenExited(mcpFixture.connections.slice(connectionsBefore));
  const aged = new Date(Date.now() - 120000);
  for (const file of Object.values(record.afterExit.files)) for (const entry of file.temporary) await utimes(join(project, entry), aged, aged);
  const requestsAtRestart = requests.length;
  await launch(); await openChat(page); await page.waitForTimeout(4000);
  await waitFor(async () => Object.values(await filesState(name, spec.kind)).every(file => !file.temporary.length),
    'Startup sweep left an aged temporary', 15000).catch(() => {});
  const restartedUi = await snapshot(name, 'after-restart');
  record.afterRestart = { files: await filesState(name, spec.kind), ui: restartedUi, transcript: transcript(restartedUi.text),
    restartRequests: requests.length - requestsAtRestart, mcpCalls: mcpCalls().length - callsBefore,
    writes: Object.fromEntries(await Promise.all(cancelFiles(name, spec.kind).map(async file =>
      [file, (await probeEvents(fileFor(file))).filter(entry => entry.event === 'write').length]))) };
  if (spec.interrupt === 'close') record.resume = await resumeChat(name, record);
  // A changed file must still be reviewable: Undo restores every file of the turn.
  if (Object.values(record.afterRestart.files).some(file => file.state === 'changed')) {
    const controls = await reviewControls();
    record.recovery = { controls };
    const undo = page.getByText(/^Undo( All)?$/).filter({ visible: true });
    if (await undo.count()) {
      await undo.first().click(); await page.waitForTimeout(500);
      await page.getByText('Confirm', { exact: true }).filter({ visible: true }).click({ timeout: 3000 }).catch(() => {});
      await waitFor(async () => Object.values(await filesState(name, spec.kind)).every(file => file.state === 'original'),
        'Undo did not restore the original files', 10000).catch(() => {});
    }
    record.recovery.files = await filesState(name, spec.kind);
    record.recovery.controlsAfter = await reviewControls();
  }
  record.requestsTotal = requests.length - requestsBefore;
  await closeOwnedApp(`${name} after inspection`);
  record.finalSurvivors = await survivors([]);
  if (spec.kind === 'mcp') record.mcpChildrenAtEnd = await mcpChildrenExited(mcpFixture.connections.slice(connectionsBefore));
  judgeCancel(record);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
}

function judgeCancel(record) {
  const fail = message => record.violations.push(message);
  const { name, kind, interrupt } = record;
  if (record.afterExit.survivors.length) fail(`${record.afterExit.survivors.length} owned processes survived the interruption`);
  if (record.afterRestart.restartRequests !== 0) fail('restart issued inference');
  if (!record.resume?.sameChat || !record.resume.replied || record.resume.requests !== 1)
    fail(`interrupted chat is not resumable: ${JSON.stringify(record.resume)}`);
  if (record.requestsTotal !== 2) fail(`unexpected request count ${record.requestsTotal}`);
  for (const [label, files] of [['after exit', record.afterExit.files], ['after restart', record.afterRestart.files]])
    for (const [file, state] of Object.entries(files)) {
      // The held second write of a stopped multi-file edit completes after Stop; elsewhere nothing is written.
      const expected = kind === 'multi' && (file === name || interrupt === 'stop') ? 'changed' : 'original';
      if (state.state !== expected) fail(`${label}: ${file} is ${state.state}, expected ${expected}`);
      if (label === 'after restart' && state.temporary.length) fail(`temporary remains after restart: ${state.temporary}`);
    }
  // A two-file review offers Keep All/Undo All; one file offers Keep/Undo.
  const controls = record.afterRestart.ui.controls;
  const reviewed = controls.includes('Review') || ['Keep', 'Undo'].every(label => controls.some(control => control.startsWith(label)));
  if (kind === 'multi') {
    if (!reviewed) fail('the applied files have no restorable review after restart');
    if (!record.recovery || Object.values(record.recovery.files).some(file => file.state !== 'original') ||
        record.recovery.controlsAfter.some(control => /^(Keep|Undo)( All| File)?$/.test(control)))
      fail(`Undo after restart did not restore every file: ${JSON.stringify(record.recovery)}`);
  } else if (reviewed) fail('review shown although nothing was written');
  for (const [file, writes] of Object.entries(record.afterRestart.writes)) {
    const expected = kind === 'multi' ? 1 : 0;
    if (writes !== expected) fail(`write helper ran ${writes} times for ${file}, expected ${expected}`);
  }
  if (kind === 'stream') {
    if (record.afterRestart.transcript.edited) fail('incomplete tool call is shown as "Edited"');
  }
  if (kind === 'mcp') {
    if (record.afterRestart.mcpCalls !== 1) fail(`MCP tool ran ${record.afterRestart.mcpCalls} times`);
    if (interrupt === 'stop' && !record.mcpCancelled) fail('Stop did not reach the MCP server');
    const children = record.afterExit.mcpChildren ?? [];
    if (!children.length || children.some(child => !child.closed || !child.exited)) fail(`MCP server outlived the application: ${JSON.stringify(children)}`);
  }
  if (record.finalSurvivors?.length) fail('owned processes remain after the case');
  if ((record.mcpChildrenAtEnd ?? []).some(child => !child.closed || !child.exited)) fail('an MCP server outlived the restarted application');
}

// The same edit after restart: it must apply once with a review, and an interrupted
// write's temporary sibling (aged past the sweep threshold here) must be removed.
async function retryAfterInterruption(name, interruptedComposerId) {
  const before = await fileState(name), aged = new Date(Date.now() - 120000);
  for (const entry of before.temporary) await utimes(join(project, entry), aged, aged);
  const requestsBefore = requests.length;
  assert.ok(interruptedComposerId, 'The interrupted chat identity must be known');
  const composerId = await newChat(`Change "before ${name}" to "after ${name}" in interrupt-${name}.js again.`, interruptedComposerId);
  await page.getByText(`OpenVision ${name} finished.`, { exact: true }).first().waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  const after = await fileState(name), ui = await snapshot(name, 'after-retry');
  return { interruptedComposerId, composerId, temporaryBefore: before.temporary, file: after, controls: ui.controls, requests: requests.length - requestsBefore,
    writes: (await probeEvents(fileFor(name))).filter(entry => entry.event === 'write').length };
}

// A restored change must remain reviewable: reject it through the native review
// controls and require the exact original bytes, without inference.
async function rejectRestored(name) {
  const steps = [], requestsBefore = requests.length, stateBefore = await reviewState();
  const click = async label => {
    const control = page.getByText(label, { exact: true }).filter({ visible: true });
    if (!await control.count()) return false;
    await control.first().click(); steps.push(label); await page.waitForTimeout(1000); return true;
  };
  if (!await click('Undo All') && !await click('Undo')) {
    await click('Review');
    steps.push({ controls: await reviewControls() });
    if (!await click('Undo All') && !await click('Undo File')) await click('Undo');
  }
  await click('Confirm');
  if ((await fileState(name)).state !== 'original') {
    // No review controls: the conversation checkpoint before the prompt is the
    // remaining native restore path.
    await page.getByText(`Change "before ${name}"`, { exact: false }).filter({ visible: true }).first().hover().catch(() => {});
    await page.waitForTimeout(500);
    await writeFile(join(directory, `${name}-restore-accessibility.txt`), await page.locator('body').ariaSnapshot().catch(() => ''));
    const restore = page.locator('[aria-label="Restore Checkpoint"],[title="Restore Checkpoint"]').filter({ visible: true });
    if (await restore.count()) { await restore.first().click(); steps.push('Restore Checkpoint'); await page.waitForTimeout(1000); }
    else await click('Restore Checkpoint');
    steps.push({ afterRestore: await reviewControls(), text: (await page.locator('body').innerText()).match(/.{0,80}(checkpoint|Restore|Continue|Discard).{0,80}/gi)?.slice(0, 6) });
    for (const label of ['Continue', 'Restore', 'Confirm', 'Discard']) if (await click(label)) break;
  }
  let file = await fileState(name);
  for (let attempt = 0; attempt < 50 && file.state !== 'original'; attempt++) { await page.waitForTimeout(100); file = await fileState(name); }
  // Once the bytes are restored, the review bar must be gone, now and after restart.
  let controls = await reviewControls();
  for (let attempt = 0; attempt < 50 && reviewBar(controls); attempt++) { await page.waitForTimeout(100); controls = await reviewControls(); }
  const stateAfter = await reviewState();
  await snapshot(name, 'after-reject');
  await closeOwnedApp(`${name} after reject`);
  await launch(); await openChat(page); await page.waitForTimeout(4000);
  const restarted = { file: await fileState(name), controls: await reviewControls(), state: await reviewState() };
  await snapshot(name, 'after-reject-restart');
  return { steps, file, controls, stateBefore, stateAfter, restarted, requests: requests.length - requestsBefore };
}
const reviewBar = controls => controls.some(control => /^(Keep|Undo)( All| File)?$/.test(control));

// Acceptance: exact original or new bytes, no extra execution or inference after
// restart, a review for every applied change, and no surviving owned processes.
function judge(record) {
  const fail = message => record.violations.push(message);
  const { name, kind, interrupt } = record;
  const executions = record.afterRestart.probe.filter(entry => entry.event === 'write').length;
  if (record.afterRestart.restartRequests !== 0) fail('restart issued inference');
  const orphanEnded = interrupt === 'kill' && record.afterRestart.commandEndedByRestart === true;
  if (record.afterExit.survivors.length && !orphanEnded) fail(`${record.afterExit.survivors.length} owned processes survived the interruption`);
  const reviewed = record.afterRestart.ui.controls.includes('Review') || ['Keep', 'Undo'].every(control => record.afterRestart.ui.controls.includes(control));
  if (kind === 'write' || kind === 'continuation') {
    for (const [label, file] of [['after exit', record.afterExit.file], ['after restart', record.afterRestart.file]])
      if (!['original', 'changed'].includes(file.state)) fail(`${label}: file is ${file.state} (${file.length} bytes)`);
    if (record.afterRestart.file.state === 'changed' && !reviewed) fail('applied change has no restorable review after restart');
    if (record.recovery && (record.recovery.file.state !== 'original' || record.recovery.requests !== 0))
      fail(`rejecting the restored review left ${record.recovery.file.state} bytes after ${record.recovery.requests} requests`);
    if (record.recovery && reviewBar(record.recovery.controls)) fail(`review bar remains after Undo and Confirm: ${record.recovery.controls}`);
    if (record.recovery && (reviewBar(record.recovery.restarted.controls) || record.recovery.restarted.file.state !== 'original'))
      fail(`after Undo, Confirm and restart: ${record.recovery.restarted.file.state} bytes, controls ${record.recovery.restarted.controls}`);
    if (record.afterRestart.file.state === 'original' && reviewed) fail('review shown for a change that was not applied');
    if (kind === 'write' && executions !== 1) fail(`write helper ran ${executions} times`);
    if (record.requestsTotal !== (kind === 'continuation' ? 2 : 1)) fail(`unexpected request count ${record.requestsTotal}`);
    if (interrupt === 'stop' && record.afterRestart.file.state !== 'changed') fail('released write after Stop was not applied');
    if (record.afterRestart.file.temporary.length) fail(`temporary sibling remains after restart: ${record.afterRestart.file.temporary}`);
    if (!record.afterRestart.sweepControlKept) fail('startup sweep removed a recent temporary');
    if (kind === 'write' && interrupt !== 'stop' && record.afterExit.file.temporary.length !== 1)
      fail(`expected one interrupted-writer temporary after exit, found ${record.afterExit.file.temporary.length}`);
    // Bytes were never changed: the transcript must not report the edit as made.
    if (kind === 'write' && interrupt !== 'stop' && record.afterRestart.transcript.edited) fail('unapplied edit is shown as "Edited" after restart');
    if (kind === 'write' && interrupt === 'close' && !record.afterRestart.transcript.interrupted) fail('interrupted edit is not shown as interrupted after restart');
    const stopped = record.stages.find(entry => entry.transcript)?.transcript;
    if (interrupt === 'stop' && (stopped?.edited || !stopped?.interrupted)) fail(`edit held at Stop is not shown as interrupted: ${JSON.stringify(stopped)}`);
    if (record.retry && (record.retry.file.state !== 'changed' || record.retry.file.temporary.length || record.retry.requests !== 2 ||
        record.retry.writes !== 2 || !record.retry.controls.includes('Keep'))) fail(`retry after interruption: ${JSON.stringify(record.retry)}`);
  } else {
    if (kind === 'approval' && record.afterRestart.commandLog) fail('unapproved command ran');
    if (kind === 'shell' && !record.afterExit.commandExited && !orphanEnded) fail('running command survived the application');
    if (kind === 'shell' && (record.afterRestart.commandLog.match(/started/g) ?? []).length !== 1) fail('command did not run exactly once');
    if (record.requestsTotal !== 1) fail(`unexpected request count ${record.requestsTotal}`);
  }
}

try {
  for (const [name, spec] of selected) await (cancelKinds.has(spec.kind) ? runCancelCase : runCase)(name, spec);
  assert.ok(requests.every(request => request.model === 'fixture-agent' && request.authorized), 'Every inference uses the authenticated fixture');
  assert.deepEqual(errors, []);
  const violations = caseResults.flatMap(entry => entry.violations.map(message => `${entry.name}: ${message}`));
  result.violations = violations;
  assert.deepEqual(violations, [], 'Interruption acceptance');
  result.success = true;
} catch (error) {
  result.failure = error.stack;
  if (app) result.familyAtFailure = await ownedProcesses([app.process().pid]).catch(() => undefined);
  if (page) await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  throw error;
} finally {
  for (const response of held) response.destroy();
  for (const shell of shells.values()) if (!shell.socket.destroyed) shell.socket.end('exit\n');
  await closeOwnedApp('final').catch(error => { result.cleanupFailure = error.stack; });
  result.finalSurvivors = await ownedProcesses([]);
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await mcpFixture?.dispose().catch(error => { result.mcpCleanupFailure = error.stack; });
  await new Promise(resolve => shellServer.close(resolve));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, success: result.success, cases: caseResults.map(entry => ({ name: entry.name,
    stages: entry.stages.map(stage => [stage.stage, stage.file?.state]), afterExit: entry.afterExit?.file?.state,
    survivors: entry.afterExit?.survivors?.length, commandExited: entry.afterExit?.commandExited,
    afterRestart: entry.afterRestart?.file?.state, temporary: entry.afterRestart?.file?.temporary?.length,
    controls: entry.afterRestart?.ui?.controls, restartRequests: entry.afterRestart?.restartRequests, violations: entry.violations })) }, null, 2));
}
