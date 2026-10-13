import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { release } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { localSettings } from './import-json.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { createAgentEditFixture } from './verify-agent-edits.mjs';
import { createAgentCommandFixture } from './verify-agent-commands.mjs';
import { memorySample, requestMeasurement, baselineIdentity } from './native-baseline.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, manifest } = await loadRuntime(root);
const measureBaseline = process.argv.includes('--baseline');
if (measureBaseline) assert.equal(process.platform, 'win32', 'The process-memory baseline currently requires Windows');
const baseline = measureBaseline ? { ...await baselineIdentity(manifest), launches: [], samples: [] } : undefined;
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/agent-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...localSettings,
  'git.openRepositoryInParentFolders': 'never' }));
const file = join(project, 'hello.js');
const edits = await createAgentEditFixture({ directory, project });
const commands = await createAgentCommandFixture({ directory, project });
const identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, arch: process.arch, osRelease: release(), node: process.version,
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['workbench', join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')],
    ['verifier', fileURLToPath(import.meta.url)], ['editFixture', join(root, 'desktop/verify-agent-edits.mjs')],
    ['commandFixture', join(root, 'desktop/verify-agent-commands.mjs')],
    ['commandLifecycle', join(root, 'desktop/verify-command-lifecycle.mjs')],
    ['agentExec', join(root, 'source/app/extensions/cursor-agent-exec/dist/main.js')],
    ['agentHost', join(root, 'source/app/extensions/cursor-agent-host/dist/main.js')],
    ['ownedShell', join(root, 'source/app/extensions/cursor-agent-exec/dist/openvision-owned-shell.cjs')],
    ['contextWork', join(root, 'source/app/extensions/cursor-agent-exec/dist/openvision-context-work.cjs')],
    ...(process.platform === 'win32' ? [['nativeManifest', join(root, 'source/app/node_modules/rea-agents/native/windows/build/manifest.json')]] : []),
  ].map(async ([name, path]) => [name, { path, sha256: await fileHash(path) }]))) };
await writeFile(join(directory, 'identity.json'), JSON.stringify(identity, null, 2));
const requests = [], errors = [], canceled = Promise.withResolvers(), entered = Promise.withResolvers();
let phase = 'reply';
let readToolObserved = false;
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const body = Buffer.concat(chunks), payload = JSON.parse(body);
  if (!requests.length) await writeFile(join(directory, 'tool-schemas.json'), JSON.stringify(payload.tools, null, 2));
  requests.push({ phase, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key',
    ...(measureBaseline ? { measurement: requestMeasurement(body, payload) } : {}),
    stream: payload.stream, messageCount: payload.messages?.length, tools: payload.tools?.map(tool => tool.function?.name),
    resumedHistory: phase === 'resume' ? payload.messages?.some(message => message.role === 'user' &&
      JSON.stringify(message.content).includes('Preserve unrelated.txt.')) : undefined,
    auxiliaryPrompt: payload.tools?.length ? undefined : payload.messages });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model,
    choices: [{ index: 0, delta, finish_reason }],
  })}\n\n`);
  if (phase.startsWith('command-')) {
    commands.respond(payload, event, phase.slice('command-'.length));
    response.end('data: [DONE]\n\n'); return;
  }
  if (phase === 'edit') {
    edits.respond(payload, event);
    response.end('data: [DONE]\n\n'); return;
  }
  if (phase === 'read') {
    const toolResult = payload.messages?.findLast(message => message.role === 'tool');
    if (toolResult) {
      readToolObserved = JSON.stringify(toolResult.content).includes('export const answer = 42');
      event({ role: 'assistant', content: 'OpenVision file read verified.' }); event({}, 'stop');
    } else {
      const read = payload.tools?.find(tool => tool.function?.name === 'Read')?.function;
      if (!read?.parameters?.properties?.path) {
        response.end('data: [DONE]\n\n'); return;
      }
      event({ role: 'assistant', tool_calls: [{ index: 0, id: 'call_openvision_read', type: 'function',
        function: { name: 'Read', arguments: JSON.stringify({ path: file }) } }] });
      event({}, 'tool_calls');
    }
    response.end('data: [DONE]\n\n'); return;
  }
  event({ role: 'assistant', content: phase === 'reply' ? 'OpenVision isolated stream verified.' :
    phase === 'resume' ? 'OpenVision restored conversation verified.' : 'OpenVision cancellation pending.' });
  if (phase === 'slow') {
    response.on('close', () => canceled.resolve());
    entered.resolve(); return;
  }
  event({}, 'stop'); response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let app, page;
const ownedHostExits = [];
const result = { checkedAt: new Date().toISOString(), identity, platform: process.platform, requests, errors, success: false };
if (measureBaseline) result.baseline = baseline;
async function sample(label) {
  if (measureBaseline) result.baseline.samples.push(await memorySample(app, label));
}
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process(), window = app.windows()[0];
  const exited = new Promise(resolve => child.once('exit', resolve));
  const closing = app.close();
  // Only this verifier's disposable app can be closed here.
  await window?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closing;
  if (child.exitCode === null && child.signalCode === null) await exited;
  assert.ok(child.exitCode !== null || child.signalCode !== null, 'Owned Electron host must terminate');
  ownedHostExits.push({ pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode });
  app = undefined;
}
async function launch() {
  const started = performance.now();
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project, file] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  if (measureBaseline) result.baseline.launches.push({ kind: ownedHostExits.length ? 'same-profile restart' : 'fresh profile',
    readyMs: Math.round(performance.now() - started), readyDefinition: 'Native local-profile titlebar visible; excludes the subsequent eight-second settle interval' });
  await page.waitForTimeout(8000);
}
try {
  await launch();
  await sample('fresh-idle-after-eight-second-settle');
  if (measureBaseline) {
    await page.waitForTimeout(10000); await sample('fresh-idle-after-eighteen-second-settle');
  }
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  const settings = page.locator('.openvision-model-settings');
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Agent fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click();
  await page.keyboard.press('Escape');
  let input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill('Reply with OpenVision isolated stream verified. Do not use tools.');
  await input.press('Enter');
  await page.getByText('OpenVision isolated stream verified.', { exact: true }).first().waitFor({ timeout: 45000 });
  assert.equal(requests.filter(request => request.tools?.length).length, 1, 'One submit must produce one Agent inference request');
  assert.equal(requests.length, 1, 'Local chat titles must not create an auxiliary inference request');
  await sample('after-first-agent-reply');
  phase = 'read';
  await input.fill('Read hello.js and report its contents. Do not modify files.'); await input.press('Enter');
  await page.getByText('OpenVision file read verified.', { exact: true }).first().waitFor({ timeout: 30000 });
  assert.equal(readToolObserved, true, 'Agent must return the actual fixture file through its tool continuation');
  for (const action of ['Undo All', 'Keep All']) {
    phase = 'edit'; await edits.verifyReview(page, action);
  }
  for (const mode of ['deny', 'allow', 'slow']) {
    phase = `command-${mode}`; await commands.verify(page, mode);
  }
  phase = 'slow';
  await input.fill('Reply slowly. Do not use tools.'); await input.press('Enter');
  await Promise.race([entered.promise, new Promise((_, reject) => {
    const timer = setTimeout(() => reject(new Error('Slow request not observed')), 30000); timer.unref();
  })]);
  await page.getByText('OpenVision cancellation pending.', { exact: true }).first().waitFor();
  await sample('active-provider-stream-before-stop');
  await writeFile(join(directory, 'streaming-controls.json'), JSON.stringify(await page.locator('button,[role=button]').evaluateAll(
    elements => elements.map(element => ({ label: element.getAttribute('aria-label'), title: element.getAttribute('title'), text: element.textContent }))), null, 2));
  const started = performance.now();
  await page.locator('.stop-button').filter({ visible: true }).first().click();
  await Promise.race([canceled.promise, new Promise((_, reject) => {
    const timer = setTimeout(() => reject(new Error('Upstream request was not canceled')), 10000); timer.unref();
  })]);
  const cancellationMs = Math.round(performance.now() - started);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  await sample('after-stop');
  if (measureBaseline) {
    await page.waitForTimeout(10000); await sample('after-stop-idle-ten-seconds');
  }
  await closeOwnedApp();
  await launch();
  await sample('restarted-idle-after-eight-second-settle');
  await page.getByText('OpenVision cancellation pending.', { exact: true }).first().waitFor();
  await edits.assertKeptFiles();
  phase = 'resume';
  input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  await input.fill('Continue the restored conversation with a short confirmation.'); await input.press('Enter');
  await page.getByText('OpenVision restored conversation verified.', { exact: true }).first().waitFor({ timeout: 30000 });
  assert.equal(requests.filter(request => request.phase === 'resume').length, 1);
  assert.equal(requests.at(-1).resumedHistory, true, 'Continued request must retain prior user context after process restart');
  await sample('after-resumed-agent-reply');
  assert.ok(requests.every(request => request.model === 'fixture-agent' && request.authorized));
  assert.deepEqual(errors, []);
  await page.screenshot({ path: join(directory, 'agent.png') });
  Object.assign(result, { success: true,
    authenticatedNativeStream: true, singleAgentSubmitRequest: true, noAuxiliaryTitleRequest: true,
    nativeReadToolContinuation: readToolObserved,
    nativeMultiFileEdits: true, rejectAllRestoresFiles: true, keepAllPreservesEdits: true, unrelatedFilePreserved: true,
    conversationRestartResume: true, keptEditsSurviveRestart: true,
    commandChecks: commands.results,
    upstreamCancellation: true, cancellationMs,
    scope: 'Native PowerShell approval, denial and foreground command cancellation with a local HTTP fixture. External providers, branching, other shells and other platforms remain unverified.' });
} catch (error) {
  result.failure = error.stack;
  const page = app?.windows()[0];
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
  await writeFile(join(directory, 'requests.json'), JSON.stringify({ requests, errors }, null, 2));
  console.error('Agent verification evidence:', directory); throw error;
} finally {
  try {
    const failures = [];
    for (const cleanup of [async () => { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); },
      () => commands.dispose(), closeOwnedApp]) {
      try { await cleanup(); } catch (error) { failures.push(error); }
    }
    if (failures.length) throw new AggregateError(failures, 'Native Agent verification cleanup failed');
  } catch (error) {
    result.success = false; result.cleanupFailure = error.stack; throw error;
  } finally {
    result.ownedHostExits = ownedHostExits;
    await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
    console.log(JSON.stringify({ ...result, directory }, null, 2));
  }
}
