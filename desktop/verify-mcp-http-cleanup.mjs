import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, symlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { injectMcpCloseFailure } from './verify-mcp-cleanup-injection.mjs';
import { createMcpServerFixture } from './verify-mcp-server.mjs';
import { closeOwnedMcpTransports } from './mcp-attempt-customization.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { socketOwners } from './linux-socket-owners.mjs';

assert.ok(['win32', 'linux'].includes(process.platform), 'This native HTTP cleanup verifier covers Windows and Linux');
const linux = process.platform === 'linux';
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/mcp-http-cleanup-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
const reportPath = join(directory, 'injected-close.jsonl'), releasePath = join(directory, 'release-close');
const relative = 'resources/app/out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js';
const originalPath = join(root, 'electron-host', relative), originalHash = await fileHash(originalPath);
const candidate = process.argv.includes('--candidate'), pending = process.argv.includes('--pending');
const original = await readFile(originalPath, 'utf8');
let source = candidate ? closeOwnedMcpTransports(original) : original;
if (pending) {
  // Disposable instrumentation of the actual acknowledgement boundary; timeout duration is unchanged.
  const before = 'const timer = setTimeout(() => resolve({';
  const after = '}), acknowledgementDeadlineMs);';
  assert.equal(source.split(before).length, 2); assert.equal(source.split(after).length, 2);
  source = source.replace(before, "const timer = setTimeout(() => (openvisionVerifyReport('cleanup-pending-ack'), resolve({")
    .replace(after, '})), acknowledgementDeadlineMs);');
}
const instrumented = injectMcpCloseFailure(source,
  { reportPath, failures: pending ? 0 : 2, releasePath: pending ? releasePath : undefined });
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'), new Map([[relative, instrumented]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), linux ? 'dir' : 'junction');
const transport = await createMcpServerFixture(), configPath = join(profile, 'User/mcp.json');
const config = { mcpServers: { 'openvision-verify': transport.configuration } };
const serverPort = Number(new URL(transport.configuration.url).port);
const result = { directory, platform: process.platform, checkedAt: new Date().toISOString(), candidate, pending,
  scope: `Native ${process.platform} utility with real loopback HTTP MCP; disposable deterministic close fault injection, no AI inference.`,
  checks: {}, errors: [], overlay: overlay.records, originalHash, requests: transport.requests };
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
// Linux: every client socket to the fixture is held only by descendants of the launched host.
async function sockets(label) {
  if (!linux) return;
  const owners = await socketOwners(serverPort, app.process().pid);
  const names = new Map((await app.evaluate(({ app }) => app.getAppMetrics().map(({ pid, type, name }) => ({ pid, type, name }))))
    .map(metric => [metric.pid, metric.name || metric.type]));
  for (const socket of owners) socket.roles = socket.pids.map(pid => names.get(pid) ?? 'non-Electron descendant');
  (result.sockets ??= []).push({ label, owners });
  assert.ok(owners.every(socket => socket.hostDescendant), `${label}: HTTP MCP sockets must belong to the launched host`);
  return owners;
}
const count = method => transport.requests.filter(request => request.method === method).length;
async function removeAndDemand() {
  const disposed = (await events()).filter(event => event.event === 'dispose-request').length;
  await writeFile(configPath, JSON.stringify({ mcpServers: {} }));
  await until('new native disposal acknowledgement', async () => (await events()).filter(event => event.event === 'dispose-request').length > disposed);
  await writeFile(configPath, JSON.stringify(config));
}

try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(linux ? await linuxSandboxArguments(join(directory, 'host')) : []), project] });
  app.process().stderr?.on('data', chunk => { result.stderrTail = ((result.stderrTail ?? '') + chunk).slice(-16384); });
  page = await app.firstWindow(); page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await writeFile(configPath, JSON.stringify(config));
  await until('real HTTP native discovery', async () => count('tools/list') > 0 &&
    (await events()).some(event => event.event === 'attempt-committed') &&
    await app.evaluate(({ app }) => app.getAppMetrics().some(metric => metric.name?.startsWith('mcp-process-'))));
  await delay(1000);
  const initializations = count('initialize'), tools = count('tools/list');
  result.checks.realHttpDiscovery = true;
  if (linux) { assert.ok((await sockets('after-discovery')).length > 0, 'Discovery must hold a socket to the fixture');
    result.checks.httpSocketsOwnedByLaunchedHost = true; }
  await removeAndDemand();
  await until(pending ? 'bounded pending acknowledgement' : 'two HTTP close rejections', async () =>
    pending ? (await events()).filter(event => event.event === 'cleanup-pending-ack').length === 1 :
      (await events()).filter(event => event.event === 'close-rejected').length === 2);
  await delay(500);
  assert.equal(count('initialize'), initializations, 'No replacement HTTP initialization while cleanup is unresolved');
  assert.equal(count('tools/list'), tools);
  assert.equal((await events()).filter(event => event.event === 'close-attempt').length, pending ? 1 : 2);
  result.checks.unresolvedCleanupBlocksReplacement = true;
  await sockets('while-unresolved');
  if (pending) {
    const history = await events(), held = history.find(event => event.event === 'close-held'), ack = history.find(event => event.event === 'cleanup-pending-ack');
    result.pendingAcknowledgementMs = Date.parse(ack.at) - Date.parse(held.at);
    assert.ok(result.pendingAcknowledgementMs >= 4900 && result.pendingAcknowledgementMs < 8000);
    result.checks.pendingCloseCoalescedAndAcknowledged = true;
    await writeFile(releasePath, 'release');
    await until('actual held close release', async () => (await events()).some(event => event.event === 'close-released'));
  }
  await removeAndDemand();
  await until('cleanup release and replacement HTTP discovery', async () => (await events()).some(event => event.event === 'close-released') && count('tools/list') > tools &&
    (await events()).filter(event => event.event === 'attempt-committed').length >= 2);
  result.checks.explicitDemandRecoversHttpConnection = true;
  const history = await events();
  assert.equal(history.filter(event => event.event === 'close-attempt').length, pending ? 1 : 3);
  const releasedIndex = history.findIndex(event => event.event === 'close-released');
  assert.ok(history.slice(releasedIndex + 1).some(event => event.event === 'attempt-committed'));
  result.checks.replacementCommittedOnlyAfterCloseAcknowledgement = true;
  await sockets('after-replacement');
  const child = app.process(); await app.close(); app = undefined;
  result.hostExit = child.exitCode; assert.equal(child.exitCode, 0);
  if (linux) {
    const deadline = Date.now() + 10000;
    while ((await socketOwners(serverPort, child.pid)).some(socket => socket.pids.length) && Date.now() < deadline) await delay(100);
    const left = (await socketOwners(serverPort, child.pid)).filter(socket => socket.pids.length);
    assert.deepEqual(left, [], 'No process may hold an HTTP MCP socket after host exit');
    result.checks.httpSocketsReleasedAfterExit = true;
  }
  assert.deepEqual(result.errors, []); assert.deepEqual(transport.errors, []);
  assert.equal(await fileHash(originalPath), originalHash);
  result.checks.normalRuntimeUnchanged = true; result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  await writeFile(releasePath, 'release');
  if (app) await app.close().catch(error => { result.cleanupError = String(error); process.exitCode = 1; });
  await transport.dispose();
  result.events = await events();
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, status: result.status, checks: result.checks, error: result.error, hostExit: result.hostExit,
    pendingAcknowledgementMs: result.pendingAcknowledgementMs }, null, 2));
}
