import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, symlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { injectMcpCloseFailure } from './verify-mcp-cleanup-injection.mjs';
import { injectMcpSessionDriver } from './verify-mcp-session-injection.mjs';
import { createMcpSessionFixture } from './verify-mcp-session-fixture.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

assert.ok(['win32', 'linux'].includes(process.platform), 'This native session recovery verifier covers Windows and Linux');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/mcp-session-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
const reportPath = join(directory, 'events.jsonl'), commandPath = join(directory, 'command.json');
const direct = process.argv.includes('--direct');
const closeReason = direct ? 'session reinit' : 'reconnect';
const relative = 'resources/app/out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js';
const originalPath = join(root, 'electron-host', relative), originalHash = await fileHash(originalPath);
const source = await readFile(originalPath, 'utf8');
const instrumented = injectMcpSessionDriver(injectMcpCloseFailure(source,
  { reportPath, failures: 2, reason: closeReason }), commandPath);
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'), new Map([[relative, instrumented]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), process.platform === 'win32' ? 'junction' : 'dir');
const transport = await createMcpSessionFixture(), configPath = join(profile, 'User/mcp.json');
const config = { mcpServers: { 'openvision-session-verify': transport.configuration } };
const result = { directory, direct, checkedAt: new Date().toISOString(), originalHash, overlay: overlay.records,
  scope: `${process.platform} native MCP adapter/SDK and ${direct ? 'direct lifecycle session reinitialization' : 'real HTTP 404 session expiry'}, deterministic close rejection in a disposable overlay. Production-boundary driver; no Agent approval UI or AI inference claim.`,
  checks: {}, errors: [], requests: transport.requests };
let app, page;
async function events() {
  const text = await readFile(reportPath, 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
  return text.split('\n').slice(0, -1).filter(Boolean).map(line => JSON.parse(line));
}
async function until(description, condition, timeout = 45000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { if (await condition()) return; await delay(100); }
  throw Error(`Timed out waiting for ${description}`);
}
const count = method => transport.requests.filter(request => request.method === method).length;
async function removeAndDemand() {
  const disposed = (await events()).filter(event => event.event === 'transport-retirement' && event.reason === 'dispose').length;
  await writeFile(configPath, JSON.stringify({ mcpServers: {} }));
  await until('native disposal acknowledgement', async () => (await events())
    .filter(event => event.event === 'transport-retirement' && event.reason === 'dispose').length > disposed);
  await writeFile(configPath, JSON.stringify(config));
}
async function call(id, operation = 'call') {
  await writeFile(commandPath, JSON.stringify({ id, operation }));
  await until(`native call ${id}`, async () => (await events()).some(event => event.event === 'session-call-result' && event.command === id));
  return (await events()).find(event => event.event === 'session-call-result' && event.command === id);
}

try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', project] });
  app.process().stderr?.on('data', chunk => { result.stderrTail = ((result.stderrTail ?? '') + chunk).slice(-16384); });
  page = await app.firstWindow(); page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page); await writeFile(configPath, JSON.stringify(config));
  await until('session-aware native HTTP discovery', async () => count('tools/list') > 0 &&
    (await events()).some(event => event.event === 'session-driver-attached') &&
    (await events()).some(event => event.event === 'attempt-committed'));
  await delay(1000);
  const before = await call('before-expiry');
  assert.equal(before.result.result.content[0].text, transport.marker);
  result.checks.realSessionToolCall = true;
  const initializations = count('initialize'), calls = count('tools/call');
  if (!direct) transport.expireNextCall();
  const failed = await call('expired-session', direct ? 'reinitialize' : 'call');
  assert.match(failed.result.result.error, /cleanup failed; reconnect to retry/);
  assert.equal(failed.retainedOwners, 1); assert.equal(failed.liveInstance, false);
  assert.equal(failed.retainsInjectedTransport, true);
  assert.equal((await events()).filter(event => event.event === closeReason.replaceAll(' ', '-') + '-request').length, 1);
  const expiredCalls = direct ? 0 : 1;
  assert.equal(transport.requests.filter(request => request.method === 'tools/call' && request.status === 404).length, expiredCalls);
  assert.equal(count('tools/call'), calls + expiredCalls); assert.equal(count('initialize'), initializations);
  result.checks.failedCloseRetainsOwnerWithoutReplay = true;
  await removeAndDemand();
  await until('explicit retry close rejection', async () => (await events()).filter(event => event.event === 'close-rejected').length === 2);
  await delay(500);
  const repeated = await call('after-retry-failure', 'inspect');
  assert.equal(repeated.retainedOwners, 1); assert.equal(repeated.retainsInjectedTransport, true);
  assert.equal(count('initialize'), initializations); assert.equal(count('tools/call'), calls + expiredCalls);
  result.checks.repeatedCloseFailureBlocksReplacement = true;
  await removeAndDemand();
  await until('cleanup release and fresh session discovery', async () => (await events()).some(event => event.event === 'close-released') &&
    count('initialize') > initializations && (await events()).filter(event => event.event === 'session-driver-attached').length >= 2);
  const recovered = await call('after-recovery');
  assert.equal(recovered.result.result.content[0].text, transport.marker);
  assert.equal(recovered.retainedOwners, 0); assert.equal(recovered.liveInstance, true);
  assert.equal(recovered.retainsInjectedTransport, false);
  assert.equal(count('tools/call'), calls + expiredCalls + 1);
  const history = await events(), release = history.findIndex(event => event.event === 'close-released');
  assert.equal(history.filter(event => event.event === 'close-attempt').length, 3);
  assert.ok(history.slice(release + 1).some(event => event.event === 'attempt-committed'));
  assert.equal(history.filter(event => event.event === 'driver-error').length, 0);
  result.checks.explicitDemandRecoversBeforeNewToolCall = true;
  assert.deepEqual(result.errors, []); assert.deepEqual(transport.errors, []);
  const child = app.process(); await app.close(); app = undefined;
  result.hostExit = child.exitCode; assert.equal(child.exitCode, 0);
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) await app.close().catch(error => { result.cleanupError = String(error); process.exitCode = 1; });
  await transport.dispose(); result.events = await events();
  result.checks.normalRuntimeUnchanged = await fileHash(originalPath) === originalHash;
  if (!result.checks.normalRuntimeUnchanged) { result.status = 'failed'; process.exitCode = 1; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, status: result.status, checks: result.checks, error: result.error, hostExit: result.hostExit }, null, 2));
}
