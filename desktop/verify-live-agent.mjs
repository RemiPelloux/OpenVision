import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { randomUUID } from 'node:crypto';
import { mkdir, mkdtemp, readFile, writeFile, unlink } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { readdir, readlink } from 'node:fs/promises';
import { connect } from 'node:net';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { createLiveAgentRelay } from './live-agent-relay.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { verifyLiveHistory, verifyPersistedLiveHistory, forkRecallPrompt } from './verify-live-history.mjs';
import { prepareLivePaste, inspectPasteRequest, verifySavedLivePaste } from './verify-live-paste.mjs';
import { createLiveUserRule, inspectRulesRequest } from './verify-live-rules.mjs';
import { approveLiveMemory, inspectLiveMemoryContext } from './verify-live-memory.mjs';
import { verifyLiveStop } from './verify-live-stop.mjs';
import { liveReadPrompt, invalidProbeKey, inspectRetryPrompt, retryAuthenticationFailure, verifyRetryContinuation } from './verify-live-retry.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { retryNativeTimeout, timeoutLimit } from './verify-live-timeout.mjs';
import { createLiveEditFixture } from './verify-live-edits.mjs';
import { createAgentFixtureProvider, fixtureModel } from './agent-fixture-provider.mjs';
import { createLoopbackProxy } from './network-capture.mjs';
import { verifyToolCallErrors } from './verify-agent-tool-calls.mjs';
import { reasoningLabels } from './model-catalog.js';

const fixture = process.argv.includes('--fixture');
if (!process.argv.includes('--live') && !fixture) {
  console.log('Usage: node desktop/verify-live-agent.mjs --live --model SAVED_ID|--fixture [--fork-status 401|503] [--reasoning default|none|low|medium|high|xhigh|max] [--catalog-hints] [--subagent] [--history|--history-failure] [--stop|--retry-auth [--failure-restart]|--timeout headers|body] [--paste|--rules|--memory|--edit] [--capture-payload]\nRuns a native Agent workflow through your saved provider, using real quota and a synthetic disposable project. History checks recall after restart and Fork Chat. History-failure additionally exercises a real 401 and native retry inside the fork, preserving source history. Stop checks real streaming cancellation and same-chat resubmission. Retry-auth sends one deliberately invalid credential, expects a real upstream 401, then retries through the native UI using the saved key; --failure-restart restarts the app before that retry and requires the saved error and Try again to be restored without a request. Timeout stalls the first loopback response at unchanged production deadlines, then retries with real inference; it does not simulate an upstream failure. Paste checks native large clipboard text saved to a file and read on demand. Rules checks persisted user and project rules in the first request after restart. Memory checks real suggestions, approval, restart and on-demand recall. Edit requires real StrReplace calls for two files, review rejection/retry/acceptance, Undo/Redo and restart persistence. Capture saves the first request locally with the transport key redacted. Reasoning selects that level in the native picker and requires it on every request; the loopback catalog offers the effective levels of the saved model, or with --catalog-hints the compatibility hints a provider without declarations shows. --fixture replaces the saved provider with a deterministic loopback OpenAI-compatible fixture (no quota, not live inference) for --history/--history-failure and --timeout; with --timeout, --failure-restart restarts before Try again.');
  process.exit(0);
}
const modelIndex = process.argv.indexOf('--model'), model = fixture ? fixtureModel : process.argv[modelIndex + 1];
assert.ok(fixture ? modelIndex < 0 : modelIndex >= 0 && model && !model.startsWith('--'), fixture ? '--fixture uses its own model' : 'Select an enabled saved model with --model');
const reasoningIndex = process.argv.indexOf('--reasoning');
const reasoning = reasoningIndex < 0 ? 'default' : process.argv[reasoningIndex + 1];
const subagent = process.argv.includes('--subagent');
const historyFailure = process.argv.includes('--history-failure');
const history = process.argv.includes('--history') || historyFailure;
const paste = process.argv.includes('--paste');
const rules = process.argv.includes('--rules');
const memory = process.argv.includes('--memory');
const edit = process.argv.includes('--edit');
const toolCallErrors = process.argv.includes('--tool-call-errors');
const stop = process.argv.includes('--stop');
const failureRestart = process.argv.includes('--failure-restart');
const timeoutIndex = process.argv.indexOf('--timeout');
const timeoutPhase = timeoutIndex < 0 ? undefined : process.argv[timeoutIndex + 1];
// With --timeout, --failure-restart restarts between the timeout and Try again.
const retryAuth = process.argv.includes('--retry-auth') || (failureRestart && !timeoutPhase);
const forkStatusIndex = process.argv.indexOf('--fork-status');
const forkStatus = forkStatusIndex < 0 ? 401 : Number(process.argv[forkStatusIndex + 1]);
assert.ok([401, 503].includes(forkStatus) && (forkStatus === 401 || fixture), '--fork-status 503 is a fixture-only provider failure');
assert.ok(!historyFailure || !subagent, '--history-failure verifies a direct Agent fork');
if (timeoutIndex >= 0) timeoutLimit(timeoutPhase);
assert.ok(!timeoutPhase || (!retryAuth && !stop && !memory && !rules && !paste && !history && !subagent), '--timeout headers|body is a separate controlled stall followed by live retry');
assert.ok(!retryAuth || (!stop && !memory && !rules && !paste && !history && !subagent), '--retry-auth is a separate real authentication failure/manual recovery probe');
assert.ok(!stop || (!memory && !rules && !paste && !history && !subagent), '--stop is a separate live stream cancellation/resubmission probe');
assert.ok(!memory || (!rules && !paste && !history && !subagent), '--memory is a separate suggested-memory approval probe');
assert.ok(!paste || (!history && !subagent), '--paste is a separate clipboard-to-Read probe');
assert.ok(!rules || (!paste && !history && !subagent), '--rules is a separate persisted-rules probe');
assert.ok(!edit || (!rules && !paste && !history && !subagent && !stop && !retryAuth && !timeoutPhase && !memory), '--edit is a separate live multi-file editing probe');
assert.ok(['default', 'none', 'low', 'medium', 'high', 'xhigh', 'max'].includes(reasoning), 'Reasoning must be default or an explicit level');
const catalogHints = process.argv.includes('--catalog-hints');
assert.ok(!toolCallErrors || (fixture && !history && !timeoutPhase), '--tool-call-errors is a separate fixture probe');
assert.ok(!fixture || ((history || timeoutPhase || toolCallErrors) && !subagent && !edit && !stop && !retryAuth && !paste && !rules && !memory && reasoning === 'default'),
  '--fixture covers only the history/Fork Chat, timeout and tool-call error cells');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let provider, encrypted;
if (!fixture) {
const db = new DatabaseSync(join(root, 'data/local/User/globalStorage/state.vscdb'), { readOnly: true });
try {
  const state = JSON.parse(String(db.prepare('SELECT value FROM ItemTable WHERE key = ?').get('openvision.model-providers.v1').value));
  const matches = state.providers.filter(provider => provider.models.some(entry => entry.id === model && entry.enabled));
  assert.equal(matches.length, 1, 'Choose a model with exactly one enabled saved provider');
  provider = matches[0]; encrypted = db.prepare('SELECT value FROM ItemTable WHERE key = ?').get(`secret://openvision.provider.${provider.id}`)?.value;
  assert.ok(encrypted, 'Selected provider has no saved credential');
} finally { db.close(); }
}
let nativeDeadlineHash, nativeDispatchHash, proxyFetchHash;
if (timeoutPhase) {
  nativeDeadlineHash = await fileHash(join(root, 'source/app/extensions/cursor-agent-exec/dist/openvision-provider-deadlines.cjs'));
  assert.equal(nativeDeadlineHash, await fileHash(join(root, 'desktop/provider-request-deadlines.cjs')), 'Native exec production deadlines must match the unmodified policy');
  nativeDispatchHash = await fileHash(join(root, 'desktop/openvision-provider-dispatch.cjs'));
  for (const directory of ['extensions/cursor-agent-exec/dist', 'node_modules/@vscode/proxy-agent/out'])
    assert.equal(await fileHash(join(root, 'source/app', directory, 'openvision-provider-dispatch.cjs')), nativeDispatchHash, 'Deadline marker and final dispatcher must share the source policy');
  proxyFetchHash = await fileHash(join(root, 'source/app/node_modules/@vscode/proxy-agent/out/index.js'));
}
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, fixture ? 'logs/agent-fixture-verification-' : 'logs/live-agent-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never' }));
const marker = `OPENVISION_READ_${randomUUID().replaceAll('-', '')}`;
const ruleFilename = `rule-probe-${randomUUID()}.txt`;
const userRule = `The verification file for this project is ${ruleFilename}. When asked to read the verification file, use Read on this file and answer with its exact first line. Do not use other tools.`;
const projectRule = `OPENVISION_PROJECT_RULE_${randomUUID()}`;
const file = join(project, rules || memory ? ruleFilename : 'probe.txt');
const edits = edit ? await createLiveEditFixture({ directory, project }) : undefined;
if (!paste && !edit) await writeFile(file, marker + '\n');
if (rules) {
  await mkdir(join(project, '.openvision/rules'), { recursive: true });
  await writeFile(join(project, '.openvision/rules/live-check.mdc'),
    `---\ndescription: Native live rule verification\nalwaysApply: true\n---\nProject label: ${projectRule}. Do not include this label in replies unless explicitly asked.\n`);
}
if (process.platform === 'win32' && !fixture) {
  const state = JSON.parse(await readFile(join(root, 'data/local/Local State'), 'utf8'));
  assert.equal(typeof state.os_crypt?.encrypted_key, 'string');
  await writeFile(join(profile, 'Local State'), JSON.stringify({ os_crypt: { encrypted_key: state.os_crypt.encrypted_key } }));
}
const { layout } = await loadRuntime(root);
// The fixture is the relay's upstream provider; relay evidence and assertions are unchanged.
const fixtureProvider = fixture ? await createAgentFixtureProvider({ project }) : undefined;
// Opt-in: route the owned app through an owned loopback-only Chromium proxy (refuses non-loopback).
// --chromium-proxy-loopback also removes Chromium's implicit loopback bypass.
const chromiumProxy = process.argv.some(value => value.startsWith('--chromium-proxy')) ? await createLoopbackProxy() : undefined;
assert.ok(!chromiumProxy || fixture, '--chromium-proxy is a fixture-only connectivity probe');
if (fixture) provider = { name: 'Controlled Agent fixture', url: fixtureProvider.url, models: [{ id: model, enabled: true }] };
const platformLabel = { win32: 'Windows', linux: 'Linux', darwin: 'macOS' }[process.platform] ?? process.platform;
const result = { checkedAt: new Date().toISOString(), fixture, model, reasoning, catalog: catalogHints ? 'compatibility hints' : 'saved effective capabilities', subagent, editRequested: edit, historyRequested: history, stopRequested: stop, retryAuthRequested: retryAuth, failureRestartRequested: failureRestart, provider: { name: provider.name, url: provider.url },
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), platform: process.platform, arch: process.arch,
  scope: edit
    ? `${platformLabel} native Agent selection and real provider multi-file StrReplace, review rejection/retry, acceptance, Undo/Redo and restart persistence in a disposable project. Loopback catalog mirrors saved capability hints; inference bodies are forwarded unchanged to the real provider.`
    : `${platformLabel} native Agent selection, live stream and real ${subagent ? 'Task child Read and parent' : 'Read'} continuation in a disposable project. Loopback catalog mirrors saved capability hints; inference bodies are forwarded unchanged to the real provider.`,
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['agent', join(root, 'source/app/extensions/cursor-agent-exec/dist/main.js')],
    ['agentHost', join(root, 'source/app/extensions/cursor-agent-host/dist/main.js')],
    ['workbench', join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')],
    ['verifier', fileURLToPath(import.meta.url)], ['relay', join(root, 'desktop/live-agent-relay.mjs')],
    ...(fixture ? [['fixtureProvider', join(root, 'desktop/agent-fixture-provider.mjs')]] : []),
    ...(toolCallErrors ? [['toolCallVerifier', join(root, 'desktop/verify-agent-tool-calls.mjs')]] : []),
    ...(edit ? [['editVerifier', join(root, 'desktop/verify-live-edits.mjs')], ['editFixtureBase', join(root, 'desktop/verify-agent-edits.mjs')]] : []),
    ...(stop ? [['stopVerifier', join(root, 'desktop/verify-live-stop.mjs')]] : []),
    ...(retryAuth ? [['retryVerifier', join(root, 'desktop/verify-live-retry.mjs')]] : []),
    ...(history ? [['historyVerifier', join(root, 'desktop/verify-live-history.mjs')]] : []),
    ...(rules ? [['rulesHelper', join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-local-rules.js')],
      ['rulesVerifier', join(root, 'desktop/verify-live-rules.mjs')]] : []),
    ...(memory ? [['memoryHelper', join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-workspace-memory.js')], ['memoryCard', join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-workspace-memory-card.js')],
      ['memoryVerifier', join(root, 'desktop/verify-live-memory.mjs')]] : []),
  ].map(async ([name, path]) => [name, await fileHash(path)]))), success: false };
if (paste) result.paste = {};
if (rules) result.rules = {};
if (memory) result.memory = {};
let inspectMemoryRetrieval = false;
const captureRequest = async body => {
  if (paste) {
    inspectPasteRequest(body, result.paste);
    assert.ok(!body.includes(marker), 'The provider must learn the unique marker only from the file Read');
  }
  if (rules) inspectRulesRequest(body, { userRule, projectRule, marker }, result.rules);
  if (process.argv.includes('--capture-payload')) await writeFile(join(directory, 'native-request.json'), body);
};
if (retryAuth) result.liveRetry = { promptOccurrences: [], scope: 'Real upstream HTTP 401 with a deliberately invalid key, then native Try again using the saved credential. No upstream failure is simulated.' };
if (historyFailure) result.forkFailure = { promptOccurrences: [], status: forkStatus, scope: fixture
  ? `Controlled fixture HTTP ${forkStatus} on the first fork recall, explicit native retry and persisted source/fork isolation. Not live inference.`
  : 'Real upstream 401 on the first fork recall, explicit native retry and persisted source/fork isolation.' };
if (fixture && history) result.scope = 'Native Agent Read, restart recall, Fork Chat and fork-only follow-up against a deterministic loopback OpenAI-compatible fixture behind the verification relay. The fixture answers recall only from the outgoing assistant history. Controlled fixture responses, not live inference.';
if (timeoutPhase) {
  result.scope = 'Native Agent controlled loopback timeout followed by real saved-provider Read continuation. Initial stalled request is not forwarded upstream; subsequent inference bodies are unchanged.';
  result.timeout = { phase: timeoutPhase, productionDeadlineMs: timeoutLimit(timeoutPhase), promptOccurrences: [],
    scope: 'Controlled local transport stall at unchanged production deadlines, then native Try again with real saved-provider inference. The stall is not an upstream provider failure.' };
  if (fixture) {
    result.scope = 'Native Agent controlled loopback timeout at unchanged production deadlines, then native Try again answered by a deterministic loopback fixture with a Read roundtrip. Controlled fixture responses, not live inference.';
    result.timeout.scope = 'Controlled local transport stall at unchanged production deadlines, then native Try again answered by a deterministic fixture. Not an upstream provider failure and not live inference.';
  }
  result.hashes.timeoutVerifier = await fileHash(join(root, 'desktop/verify-live-timeout.mjs'));
  result.hashes.execDeadlines = nativeDeadlineHash;
  result.hashes.dispatcherPolicy = nativeDispatchHash;
  result.hashes.proxyFetch = proxyFetchHash;
  result.hashes.execErrorPolicy = await fileHash(join(root, 'source/app/extensions/cursor-agent-exec/dist/openvision-provider-errors.cjs'));
  result.timeout.packagedUndiciVersion = JSON.parse(await readFile(join(root, 'source/app/node_modules/undici/package.json'), 'utf8')).version;
}
const relay = await createLiveAgentRelay({ provider, model, marker, captureRequest, allowDownstreamCancellation: stop, catalog: catalogHints ? 'hints' : 'saved',
  requestLimit: edit ? 12 : undefined, forwardProviderFailures: retryAuth,
  expectInitialUnauthorized: retryAuth, initialStall: timeoutPhase, inspectRequest: body => {
  if (retryAuth) inspectRetryPrompt(body, result.liveRetry);
  if (timeoutPhase) inspectRetryPrompt(body, result.timeout);
  if (historyFailure) result.forkFailure.promptOccurrences.push(JSON.parse(body).messages
    .filter(message => message.role === 'user')
    .reduce((count, message) => count + JSON.stringify(message.content).split(forkRecallPrompt).length - 1, 0));
  // Private evidence for tool-call errors: the fixture bodies carry no credential.
  if (toolCallErrors) writeFile(join(directory, `request-${relay.requests.length}.json`), body).catch(() => {});
  if (inspectMemoryRetrieval) {
    inspectLiveMemoryContext(body, { filename: ruleFilename, marker }, result.memory);
    inspectMemoryRetrieval = false;
  }
} });
let app, page;
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window', '--disable-updates',
      '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []),
      ...(chromiumProxy ? [`--proxy-server=http://127.0.0.1:${chromiumProxy.port}`,
        ...(process.argv.includes('--chromium-proxy-loopback') ? ['--proxy-bypass-list=<-loopback>'] : [])] : []), project] });
  // Private diagnostics for each owned launch; the run directory is ignored and never published.
  const hostLog = createWriteStream(join(directory, `host-${(result.nativeMainProcesses ?? []).length + 1}.log`));
  app.process().stderr?.pipe(hostLog); app.process().stdout?.pipe(hostLog);
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  // Evaluating in the main process before its first window raced Electron startup on
  // Linux ("Execution context was destroyed"); the window proves the main is up.
  (result.nativeMainProcesses ??= []).push(await app.evaluate(() => ({ pid: process.pid, ppid: process.ppid, executable: process.execPath })));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await page.waitForTimeout(8000);
  return page;
}
// VS Code hands a new launch to any process still accepting on the profile's main
// IPC socket and exits 0. Record who holds it after close and wait (bounded) for its
// release, so a relaunch never silently attaches to a leftover.
// Sockets present before the first owned launch belong to other editors and are ignored.
const runtimeDirectory = process.platform === 'linux' ? process.env.XDG_RUNTIME_DIR : undefined;
const listMainSockets = async () => runtimeDirectory ? (await readdir(runtimeDirectory).catch(() => []))
  .filter(name => name.endsWith('-main.sock')).map(name => join(runtimeDirectory, name)) : [];
const foreignMainSockets = new Set(await listMainSockets());
async function mainSocketHolders() {
  const runtime = runtimeDirectory;
  if (!runtime) return [];
  const sockets = (await listMainSockets()).filter(path => !foreignMainSockets.has(path));
  const accepting = [];
  for (const path of sockets) {
    const accepted = await new Promise(resolve => {
      const socket = connect(path, () => { socket.destroy(); resolve(true); });
      socket.once('error', () => resolve(false));
    });
    if (!accepted) continue;
    const inodes = (await readFile('/proc/net/unix', 'utf8')).split('\n').filter(line => line.endsWith(path)).map(line => line.trim().split(/\s+/)[6]);
    const holders = [];
    for (const pid of (await readdir('/proc')).filter(name => /^\d+$/.test(name))) {
      const fds = await readdir(`/proc/${pid}/fd`).catch(() => []);
      for (const fd of fds) {
        const target = await readlink(`/proc/${pid}/fd/${fd}`).catch(() => '');
        if (inodes.some(inode => target === `socket:[${inode}]`)) {
          holders.push({ pid: Number(pid), command: (await readFile(`/proc/${pid}/cmdline`, 'utf8').catch(() => '')).replaceAll('\0', ' ').trim().slice(0, 200) });
          break;
        }
      }
    }
    accepting.push({ socket: path.slice(runtime.length + 1), holders });
  }
  return accepting;
}
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process(), exited = new Promise(resolve => child.once('exit', resolve));
  const closing = app.close();
  await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 3000 }).catch(() => {});
  await closing; if (child.exitCode === null && child.signalCode === null) await exited;
  result.launcherExit = { exitCode: child.exitCode, signalCode: child.signalCode };
  const releaseStarted = performance.now();
  let holders = await mainSocketHolders();
  if (holders.length) (result.mainSocketHeldAfterClose ??= []).push(holders);
  while (holders.length && performance.now() - releaseStarted < 30000) {
    await new Promise(resolve => setTimeout(resolve, 250));
    holders = await mainSocketHolders();
  }
  (result.mainSocketReleaseMs ??= []).push(Math.round(performance.now() - releaseStarted));
  if (holders.length) throw new Error(`The closed app's main IPC socket is still accepting: ${JSON.stringify(holders)}`);
  if (process.platform === 'linux') (result.survivorsAfterClose ??= []).push(execFileSync('ps', ['-u', String(process.getuid()), '-o', 'pid,ppid,etimes,args', '--no-headers'], { encoding: 'utf8' })
    .split('\n').filter(line => line.trim() && !/\b(ps|node|npm|bash|sh|xvfb-run|Xvfb|dbus-daemon|dbus-run-session|gnome-keyring-daemon)\b/.test(line.trim().split(/\s+/)[3] ?? ''))
    .map(line => line.trim().slice(0, 240)));
  (result.launcherExits ??= []).push(result.launcherExit);
  app = undefined;
}
async function dismissMenu() {
  if (!page || page.isClosed()) return;
  await page.mouse.move(0, 0);
  const backdrop = page.locator('[data-component="menu-backdrop"]').filter({ visible: true });
  for (let attempt = 0; attempt < 4 && await backdrop.count(); attempt++) await page.keyboard.press('Escape');
  await backdrop.waitFor({ state: 'hidden' });
}
try {
  await launch();
  const key = fixture ? fixtureProvider.key
    : await app.evaluate(({ safeStorage }, saved) => safeStorage.decryptString(Buffer.from(JSON.parse(String(saved)).data)), encrypted);
  relay.setKey(retryAuth ? invalidProbeKey : key);
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Native live probe');
  await page.getByLabel('API Base URL', { exact: true }).fill(relay.url);
  await page.getByLabel('API Key', { exact: true }).fill('native-probe-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('ControlOrMeta+w');
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  const menu = page.getByTestId('model-picker-menu').filter({ visible: true });
  const row = menu.locator('[data-model-picker-item-name]').filter({ hasText: model });
  assert.equal(await row.count(), 1, 'Select the unique saved probe model');
  await row.click(); await page.keyboard.press('Escape');
  if (reasoning !== 'default') {
    await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
    const item = menu.getByRole('menuitem').filter({ has: page.locator('[data-model-picker-item-name]').filter({ hasText: model }) });
    await item.focus(); await item.press('ArrowRight');
    await page.getByTestId('parameter-submenu').filter({ visible: true }).first().waitFor();
    await page.getByText('Reasoning', { exact: true }).filter({ visible: true }).last().hover();
    await page.getByText(reasoningLabels[reasoning], { exact: true }).filter({ visible: true }).last().click();
    await page.keyboard.press('Escape');
  }
  await dismissMenu();
  if (rules) {
    await createLiveUserRule(page, userRule);
    await closeOwnedApp();
    await launch();
    result.rules.restartedBeforeFirstRequest = true;
    await page.keyboard.press('ControlOrMeta+Shift+l');
  }
  if (memory) {
    await approveLiveMemory({ page, project, filename: ruleFilename, result: result.memory });
    assert.ok(relay.requests.every(request => !request.responseToolCalls?.length), 'Suggestion must not invoke write or other tools');
    await closeOwnedApp(); await launch();
    await page.keyboard.press('ControlOrMeta+Shift+l');
    inspectMemoryRetrieval = true; result.memory.restartedBeforeRecall = true;
  }
  const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
  if (edit) {
    const waitForReviewOrFailure = () => Promise.race([
      edits.waitForReview(page),
      relay.failure.then(message => { throw new Error(message); }),
    ]);
    const firstStart = relay.requests.length;
    await input.fill(edits.prompt); await input.press('Enter');
    await waitForReviewOrFailure();
    const firstCalls = relay.requests.slice(firstStart).flatMap(request => request.responseToolCalls ?? []);
    assert.equal(firstCalls.filter(call => call.name === 'StrReplace').length, edits.files.length,
      'The live provider must request one StrReplace call for each file in the first edit round');
    await edits.rejectReview(page);
    const secondStart = relay.requests.length;
    await input.fill(`The previous proposal was rejected. Re-apply the same two edits now using exactly one StrReplace call per file. Do not use any other tool. After both succeed, reply with exactly LIVE_EDIT_READY.\n\n${edits.files.map(file => JSON.stringify({ path: file.path, old_string: file.old_string, new_string: file.new_string })).join('\n')}`);
    await input.press('Enter'); await waitForReviewOrFailure();
    const secondCalls = relay.requests.slice(secondStart).flatMap(request => request.responseToolCalls ?? []);
    assert.equal(secondCalls.filter(call => call.name === 'StrReplace').length, edits.files.length,
      'The live provider must request one StrReplace call for each file in the retry round');
    await edits.acceptReview(page);
    await edits.verifyKeptUndo(page);
    await closeOwnedApp(); await launch();
    await edits.assertFiles(true);
    result.edit = {
      requestLimit: 12, firstRoundRequests: firstCalls.length, secondRoundRequests: secondCalls.length,
      toolCalls: relay.requests.flatMap(request => request.responseToolCalls ?? []).map(call => call.name),
      requestedModels: [...new Set(relay.requests.map(request => request.model))],
      reportedModels: [...new Set(relay.requests.map(request => request.responseModel).filter(Boolean))],
      firstReviewRejected: true, secondReviewAccepted: true, undoRedoVerified: true, restarted: true,
      files: edits.files.map(file => file.path), unrelatedFilePreserved: true,
    };
  } else {
    let pasted;
    if (toolCallErrors) {
      result.scope = 'Native Agent tool calls it cannot run (a tool that was never offered; Read with malformed JSON arguments) from a deterministic loopback fixture, then an ordinary Read roundtrip in the same chat. Controlled fixture responses, not live inference.';
      await verifyToolCallErrors({ page, relay, input, result, directory });
    }
    if (paste) pasted = await prepareLivePaste({ app, input, project, marker });
    else {
      await input.fill(memory
      ? 'Use the saved project memory to find the verification file, read it, and reply with exactly its first line. Do not edit files.'
      : rules
      ? 'Read the verification file specified in my saved rule. Reply with exactly its first line.'
      : subagent
      ? 'Use exactly one Task subagent with the inherited model. Ask it to use Read on probe.txt and return exactly the single line in that file. After the Task finishes, reply with exactly the returned line. Do not read the file yourself, edit files, run commands or use other tools.'
      : liveReadPrompt);
      await input.press('Enter');
    }
    if (retryAuth) await retryAuthenticationFailure({ page, relay, restoreCredential: () => relay.setKey(key), result: result.liveRetry,
      restart: failureRestart ? async () => { await closeOwnedApp(); return launch(); } : undefined });
    if (timeoutPhase) await retryNativeTimeout({ page, relay, phase: timeoutPhase, result: result.timeout,
      restart: failureRestart ? async () => { await closeOwnedApp(); return launch(); } : undefined });
    await Promise.race([
      page.getByText(marker, { exact: true }).filter({ visible: true }).first().waitFor({ timeout: subagent ? 180000 : 90000 }),
      relay.failure.then(message => { throw new Error(message); }),
    ]);
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
    assert.ok(relay.requests.some(request => request.actualFileInToolResult), 'Actual file must appear in the tool continuation');
    assert.ok(relay.requests.some(request => request.assistantReturnedMarker), 'Provider must return the actual file marker as assistant text');
    if (retryAuth) await verifyRetryContinuation({ page, relay, result: result.liveRetry });
    if (timeoutPhase) await verifyRetryContinuation({ page, relay, result: result.timeout });
    if (subagent) {
      const calls = relay.requests.flatMap(request => request.responseToolCalls ?? []);
      const task = calls.find(call => call.name === 'Task'), read = calls.find(call => call.name === 'Read');
      assert.ok(task?.id && read?.id, 'The real provider must request Task and Read');
      assert.ok(relay.requests.some(request => request.toolResults?.some(result => result.callId === read.id && result.containsFileMarker)), 'Read must return the actual file marker');
      assert.ok(relay.requests.some(request => request.assistantReturnedMarker &&
        request.toolResults?.some(result => result.callId === task.id && result.containsFileMarker)), 'The parent must receive the Task result and return its marker');
      result.subagentContinuationVerified = true;
    }
    if (history) await verifyLiveHistory({ page, relay, marker, result, retryFork: !historyFailure ? undefined : forkStatus === 401 ? {
      prepare() { relay.expectUnauthorizedOnNextRequest(); relay.setKey(invalidProbeKey); },
      restore() { relay.setKey(key); },
    } : { status: forkStatus,
      prepare() { relay.expectFailureOnNextRequest(forkStatus); fixtureProvider.failNextRequest(forkStatus); },
      restore() {},
    }, restart: async () => {
      await closeOwnedApp(); return launch();
    } });
    if (paste) await verifySavedLivePaste(pasted, result.paste);
    else assert.equal(await readFile(file, 'utf8'), marker + '\n');
    if (stop) await verifyLiveStop({ page, relay, marker, result });
    result.readContinuationVerified = true;
  }
  assert.ok(relay.requests.every(request => reasoning === 'default' ? request.reasoning === undefined :
    (request.reasoning?.effort ?? request.reasoning) === reasoning), 'Wire effort must match the explicit native selection');
  result.success = true;
  await page.screenshot({ path: join(directory, 'native-agent.png') });
} catch (error) {
  result.error = error.message;
  const forwarded = relay.requests.findLast(request => request.forwardedToNative);
  if (forwarded && page && !page.isClosed()) {
    // Record how the native app presents the real provider failure; the run stays failed.
    const retry = page.getByText('Try again', { exact: true }).filter({ visible: true });
    await retry.last().waitFor({ timeout: 15000 }).catch(() => {});
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
    const before = relay.requests.length;
    await page.waitForTimeout(2500);
    const text = await page.locator('body').innerText().catch(() => '');
    let providerMessage;
    try { providerMessage = JSON.parse(forwarded.error).message ?? JSON.parse(forwarded.error).error?.message; } catch {}
    result.nativeProviderFailure = { httpStatus: forwarded.httpStatus, requestId: forwarded.requestId,
      statusVisible: text.includes(String(forwarded.httpStatus)),
      providerMessageVisible: typeof providerMessage === 'string' && text.includes(providerMessage),
      tryAgainVisible: await retry.count() > 0, automaticRequestsAfterFailure: relay.requests.length - before };
  }
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
} finally {
  const cleanupErrors = [];
  try { await relay.close(); } catch { cleanupErrors.push('Relay cleanup failed'); }
  if (chromiumProxy) {
    result.chromiumProxy = { port: chromiumProxy.port, events: chromiumProxy.events.map(({ at, method, host, port, allowed }) => ({ at, method, host, port, allowed })) };
    await chromiumProxy.close().catch(() => cleanupErrors.push('Chromium proxy cleanup failed'));
  }
  if (fixtureProvider) {
    try { await fixtureProvider.close(); } catch { cleanupErrors.push('Fixture provider cleanup failed'); }
    result.fixtureRequests = fixtureProvider.requests;
    // Every inference the relay forwarded reached the fixture exactly once.
    if (fixtureProvider.requests.length !== relay.requests.filter(request => request.httpStatus !== undefined).length) {
      result.success = false; result.fixtureRequestMismatch = true;
    }
  }
  try {
    if (app) {
      try {
        await dismissMenu();
        if (page && !page.isClosed()) {
          const stop = page.locator('.stop-button').filter({ visible: true });
          if (await stop.count()) await stop.first().click();
          await stop.waitFor({ state: 'hidden', timeout: 15000 });
        }
      } catch { cleanupErrors.push('Native Stop or menu cleanup failed'); }
      await closeOwnedApp();
    }
  } catch { cleanupErrors.push('Owned host cleanup failed'); }
  if (!cleanupErrors.length && result.history?.restartAndForkRecallVerified) {
    try { verifyPersistedLiveHistory(profile, result); }
    catch (error) { result.success = false; result.historyError = error.message; }
  }
  if (!cleanupErrors.length && process.platform === 'win32') await unlink(join(profile, 'Local State')).catch(error => {
    if (error.code !== 'ENOENT') cleanupErrors.push('Encrypted profile state cleanup failed');
  });
  if (cleanupErrors.length) { result.success = false; result.cleanupErrors = cleanupErrors; }
  result.requests = relay.requests;
  result.catalogEfforts = relay.catalogEfforts;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
if (!result.success) process.exitCode = 1;
