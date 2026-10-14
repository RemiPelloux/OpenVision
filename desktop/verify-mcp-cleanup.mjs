import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, symlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { injectMcpCloseFailure } from './verify-mcp-cleanup-injection.mjs';
import { createMcpStdioFixture } from './verify-mcp-stdio.mjs';
import { closeOwnedMcpTransports } from './mcp-attempt-customization.mjs';

assert.equal(process.platform, 'win32', 'This native cleanup verifier currently targets Windows');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/mcp-cleanup-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
const reportPath = join(directory, 'injected-close.jsonl');
const relative = 'resources/app/out/vs/code/electron-utility/mcpProcess/mcpProcessMain.js';
const originalPath = join(root, 'electron-host', relative), originalHash = await fileHash(originalPath);
const original = await readFile(originalPath, 'utf8');
const candidate = process.argv.includes('--candidate');
const persistent = process.argv.includes('--persistent');
const instrumented = injectMcpCloseFailure(candidate ? closeOwnedMcpTransports(original) : original, reportPath, persistent ? 2 : 1);
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'), new Map([[relative, instrumented]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), 'junction');
const transport = await createMcpStdioFixture();
const configPath = join(profile, 'User/mcp.json');
const config = { mcpServers: { 'openvision-verify': transport.configuration } };
const result = { directory, platform: process.platform, candidate, persistent, checkedAt: new Date().toISOString(),
  scope: `Native Windows MCP utility and real STDIO child; ${persistent ? 'two transport close rejections' : 'one transport close rejection'} injected into a disposable runtime copy. No AI inference.`,
  overlay: overlay.records, checks: {}, events: [], connections: transport.connections };
let app, page;
const errors = [];
async function events() {
  const text = await readFile(reportPath, 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
  return text.trim().split('\n').filter(Boolean).map(line => JSON.parse(line));
}
async function until(description, condition, timeout = 45000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { if (await condition()) return; await delay(100); }
  throw new Error(`Timed out waiting for ${description}`);
}
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', project] });
  const childOutput = [];
  for (const stream of [app.process().stdout, app.process().stderr]) stream?.on('data', chunk => childOutput.push(chunk.toString()));
  result.hostOutput = childOutput;
  page = await app.firstWindow({ timeout: 60000 }); page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await writeFile(configPath, JSON.stringify(config));
  await until('native shared MCP discovery', async () => transport.requests.some(request => request.method === 'tools/list') &&
    (await events()).some(event => event.event === 'attempt-committed') &&
    await app.evaluate(({ app }) => app.getAppMetrics().some(metric => metric.name?.startsWith('mcp-process-'))));
  await transport.verifyOneActiveChild();
  const prior = transport.connections.findLast(connection => !connection.closedAt);
  assert.ok(prior);
  result.checks.initialNativeConnection = true;
  await writeFile(configPath, JSON.stringify({ mcpServers: {} }));
  await until('injected native close rejection', async () => (await events()).some(event => event.event === 'close-rejected'));
  assert.equal(prior.closedAt, undefined, 'The injected failure must leave the actual old child alive');
  result.checks.failedCloseLeavesActualChildForRecovery = true;
  const connectionCount = transport.connections.length;
  await writeFile(configPath, JSON.stringify(config));
  if (persistent) {
    await until('second rejection on explicit demand', async () => (await events()).filter(event => event.event === 'close-rejected').length === 2);
    await delay(1500);
    assert.equal(transport.connections.length, connectionCount, 'Failed cleanup must prevent a replacement child');
    assert.equal(prior.closedAt, undefined);
    result.checks.repeatedFailureBlocksReplacement = true;
    const disposedBeforeRemoval = (await events()).filter(event => event.event === 'dispose-request').length;
    await writeFile(configPath, JSON.stringify({ mcpServers: {} }));
    await until('failed replacement lifecycle disposal', async () =>
      (await events()).filter(event => event.event === 'dispose-request').length > disposedBeforeRemoval);
    await writeFile(configPath, JSON.stringify(config));
  }
  await until('native cleanup retry', async () => (await events()).some(event => event.event === 'close-released'));
  await until('old owned child closes and replacement discovers tools', () => prior.closedAt &&
    transport.requests.some(request => request.method === 'tools/list' && request.instance !== prior.instance));
  await transport.verifyOneActiveChild();
  const released = (await events()).find(event => event.event === 'close-released');
  const replacement = transport.connections.find(connection => connection.instance !== prior.instance &&
    Date.parse(connection.connectedAt) >= Date.parse(released.at));
  assert.ok(replacement, 'Replacement starts only after successful close acknowledgement');
  result.checks.retryClosesOldResourceBeforeStableReplacement = true;
  const child = app.process(); await app.close(); app = undefined;
  assert.equal(child.exitCode, 0); result.hostExit = child.exitCode;
  await transport.verifyExited(); result.checks.allNativeChildrenExit = true;
  assert.deepEqual(errors, []); assert.deepEqual(transport.errors, []);
  assert.equal(await fileHash(originalPath), originalHash, 'Normal runtime bytes must remain unchanged');
  result.checks.normalRuntimeUnchanged = true;
  result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) await app.close().catch(error => { result.cleanupError = String(error); process.exitCode = 1; });
  await transport.dispose().catch(error => { result.cleanupError = String(error); result.status = 'failed'; process.exitCode = 1; });
  result.events = await events(); result.pageErrors = errors;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
