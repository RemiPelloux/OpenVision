import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { modelDiscoveryFixture } from '../test/fixtures/model-discovery.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';

const root = resolve(import.meta.dirname, '..');
const { layout, appRoot } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/model-discovery-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(project, 'hello.js'), '// Disposable discovery verification\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'window.restoreWindows': 'none', 'git.enabled': false }));
const fixture = await modelDiscoveryFixture();
const result = { success: false, checkedAt: new Date().toISOString(), platform: process.platform,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  scope: 'Native workbench IPC and Electron net.fetch with real local HTTP sockets; fixture credentials only; no AI inference.',
  checks: {}, errors: [], requests: fixture.requests, hashes: Object.fromEntries(await Promise.all([
    ['verifier', join(root, 'desktop/verify-model-discovery.mjs')],
    ['fixture', join(root, 'test/fixtures/model-discovery.mjs')],
    ['http', join(appRoot, 'out/openvision-model-http.js')],
    ['owner', join(root, 'desktop/model-discovery.mjs')],
    ['parser', join(root, 'desktop/model-providers.js')],
    ['senderCheck', join(root, 'desktop/workbench-sender.mjs')],
    ['workbench', join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')],
  ].map(async ([name, path]) => [name, await fileHash(path)]))) };
let app, page, child;
const channel = 'vscode:openvision-discover-models';
const invoke = mode => page.evaluate(({ channel, configuration }) =>
  window.vscode.ipcRenderer.invoke(channel, configuration), { channel, configuration: fixture.configuration(mode) });
const listeners = () => app.evaluate(({ BrowserWindow }) => {
  const sender = BrowserWindow.getAllWindows()[0].webContents;
  return Object.fromEntries(['destroyed', 'render-process-gone', 'did-start-navigation'].map(event => [event, sender.listenerCount(event)]));
});
async function ready() {
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
}
async function check(name, operation) {
  const started = performance.now();
  try { await operation(); result.checks[name] = { passed: true, elapsedMs: performance.now() - started }; }
  catch (error) { result.checks[name] = { passed: false, error: error.message, elapsedMs: performance.now() - started }; }
}
const begin = (target, mode) => target.evaluate(({ channel, configuration }) => {
  window.discoveryPending = window.vscode.ipcRenderer.invoke(channel, configuration).catch(() => {});
}, { channel, configuration: fixture.configuration(mode) });
async function newWindow() {
  const pending = app.waitForEvent('window', { timeout: 30000 });
  await page.keyboard.press('ControlOrMeta+Shift+n');
  const sibling = await pending;
  await sibling.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  return sibling;
}
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project] });
  child = app.process();
  child.stderr?.on('data', chunk => { result.hostStderr = ((result.hostStderr ?? '') + chunk).slice(-8192); });
  page = await app.firstWindow(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => result.errors.push(error.message));
  await ready();
  const before = await listeners();
  await check('healthyCatalog', async () => {
    const value = await invoke('healthy'); assert.equal(value.ok, true, value.error);
    assert.deepEqual(value.data.map(model => model.id), ['alpha', 'beta']);
  });
  for (const [mode, pattern] of [['invalid', /invalid JSON/], ['catalog', /valid ID/], ['large', /4 MiB/], ['utf8', /invalid JSON|UTF-8/]]) {
    await check(mode, async () => {
      const value = await invoke(mode); assert.equal(value.ok, false); assert.match(value.error, pattern);
    });
  }
  await check('errorBodyCloses', async () => {
    const value = await invoke('error'); assert.equal(value.ok, false); assert.match(value.error, /HTTP 503/);
    assert.ok(!value.error.includes('discovery-fixture'));
    await fixture.waitFor(() => fixture.requests.find(entry => entry.mode === 'error')?.closed);
  });
  await check('listenersReleasedAfterCompletion', async () => assert.deepEqual(await listeners(), before));
  await check('reloadAbortsPendingRequest', async () => {
    await begin(page, 'body');
    await fixture.waitFor(() => fixture.requests.some(entry => entry.mode === 'body'));
    const started = performance.now();
    await page.reload({ waitUntil: 'domcontentloaded' });
    await fixture.waitFor(() => fixture.requests.find(entry => entry.mode === 'body')?.closed);
    result.reloadDisconnectMs = performance.now() - started;
    await ready();
    assert.equal((await invoke('healthy')).ok, true);
  });
  await check('closingWindowPreservesSiblingRequest', async () => {
    const sibling = await newWindow();
    await begin(page, 'body/closing'); await begin(sibling, 'body/surviving');
    const closing = () => fixture.requests.find(entry => entry.path === '/body/closing/models');
    const surviving = () => fixture.requests.find(entry => entry.path === '/body/surviving/models');
    await fixture.waitFor(() => closing() && surviving());
    await page.close(); page = sibling;
    await fixture.waitFor(() => closing().closed);
    assert.equal(surviving().closed, false);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await fixture.waitFor(() => surviving().closed);
    await ready(); assert.equal((await invoke('healthy')).ok, true);
  });
  await check('allRequestsAuthorized', async () => assert.ok(fixture.requests.every(entry => entry.authorized)));
  await check('noRendererErrors', async () => assert.deepEqual(result.errors, []));
  result.success = Object.values(result.checks).every(check => check.passed);
  if (!result.success) process.exitCode = 1;
} catch (error) { result.error = error.stack; process.exitCode = 1; }
finally {
  if (app) {
    try { await app.close(); }
    catch (error) { result.cleanupError = error.stack; result.success = false; process.exitCode = 1; }
    result.hostExit = { exitCode: child?.exitCode, signal: child?.signalCode };
  }
  await fixture.close();
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
