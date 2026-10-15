import assert from 'node:assert/strict';
import { copyFile, link, mkdir, mkdtemp, readdir, symlink, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { modelDiscoveryFixture } from '../test/fixtures/model-discovery.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { fileHash } from './import-files.mjs';

// Separate from full-workbench acceptance: execute the production IPC adapter
// with actual Electron windows/networking in a disposable minimal host.
const root = resolve(import.meta.dirname, '..');
const { layout, appRoot } = await verificationRuntime(root);
if (process.platform !== 'win32') throw Error('This isolated-host fixture currently supports Windows only.');
const directory = await mkdtemp(join(root, 'logs/discovery-host-'));
const host = join(directory, 'host'), appDirectory = join(host, 'resources/app');
await mkdir(appDirectory, { recursive: true });
await mkdir(join(directory, 'profile'));
for (const entry of await readdir(layout.host, { withFileTypes: true })) {
  if (entry.isDirectory() || entry.name.startsWith('unins')) continue;
  await link(join(layout.host, entry.name), join(host, entry.name));
}
await symlink(join(layout.host, 'locales'), join(host, 'locales'), 'junction');
await copyFile(join(root, 'test/fixtures/discovery-electron-main.mjs'), join(appDirectory, 'main.mjs'));
await writeFile(join(appDirectory, 'package.json'), JSON.stringify({ type: 'module', main: 'main.mjs' }));
const adapter = join(appRoot, 'out/openvision-model-http.js');
const fixture = await modelDiscoveryFixture();
const result = { success: false, checkedAt: new Date().toISOString(),
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  scope: 'Production IPC adapter, Electron net.fetch and real hidden windows; minimal host, not full-workbench/UI or live-provider acceptance.',
  checks: {}, requests: fixture.requests, hashes: Object.fromEntries(await Promise.all([
    ['executable', layout.executable], ['adapter', adapter], ['owner', join(root, 'desktop/model-discovery.mjs')],
    ['main', join(root, 'test/fixtures/discovery-electron-main.mjs')],
    ['verifier', join(root, 'desktop/verify-model-discovery-host.mjs')],
  ].map(async ([name, path]) => [name, await fileHash(path)]))) };
let app, page, child;
const invoke = (mode, target = page) => target.evaluate(configuration => window.discoveryFixture.invoke(configuration), fixture.configuration(mode));
const begin = (mode, target = page) => target.evaluate(configuration => {
  window.pendingDiscovery = window.discoveryFixture.invoke(configuration).catch(() => {});
}, fixture.configuration(mode));
const entry = path => fixture.requests.find(request => request.path === path);
const listenerCounts = () => app.evaluate(({ BrowserWindow }) => {
  const sender = BrowserWindow.getAllWindows()[0].webContents;
  return ['destroyed', 'render-process-gone', 'did-start-navigation'].map(event => sender.listenerCount(event));
});
async function check(name, operation) {
  const started = performance.now();
  try { await operation(); result.checks[name] = { passed: true, elapsedMs: performance.now() - started }; }
  catch (error) { result.checks[name] = { passed: false, error: error.stack }; }
}
try {
  const env = { ...process.env, OPENVISION_DISCOVERY_FIXTURE: JSON.stringify({ adapter,
    profile: join(directory, 'profile'), preload: join(root, 'test/fixtures/discovery-electron-preload.cjs') }) };
  delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: join(host, 'OpenVision.exe'), env, timeout: 30000 });
  child = app.process();
  child.stderr?.on('data', chunk => { result.hostStderr = ((result.hostStderr ?? '') + chunk).slice(-8192); });
  page = await app.firstWindow();
  const initialListeners = await listenerCounts();
  await check('healthyCatalog', async () => {
    const value = await invoke('healthy'); assert.equal(value.ok, true, value.error);
    assert.deepEqual(value.data.map(model => model.id), ['alpha', 'beta']);
  });
  for (const [mode, pattern] of [['invalid', /invalid JSON/], ['catalog', /valid ID/], ['large', /4 MiB/], ['utf8', /UTF-8/]]) {
    await check(mode, async () => {
      const value = await invoke(mode); assert.equal(value.ok, false); assert.match(value.error, pattern);
    });
  }
  await check('errorBodyCloses', async () => {
    const value = await invoke('error'); assert.equal(value.ok, false); assert.match(value.error, /HTTP 503/);
    await fixture.waitFor(() => entry('/error/models')?.closed);
  });
  await check('repeatedRequestsReleaseListeners', async () => {
    for (let index = 0; index < 12; index++) assert.equal((await invoke('healthy')).ok, true);
    assert.deepEqual(await listenerCounts(), initialListeners);
  });
  await check('reloadDisconnectsAndRecovers', async () => {
    await begin('body/reload'); await fixture.waitFor(() => entry('/body/reload/models'));
    await page.reload(); await fixture.waitFor(() => entry('/body/reload/models').closed);
    assert.equal((await invoke('healthy')).ok, true);
  });
  await check('closeOnlyCancelsOwningWindow', async () => {
    const pending = app.waitForEvent('window');
    await app.evaluate(() => globalThis.openDiscoveryWindow());
    const sibling = await pending;
    await begin('body/closing'); await begin('body/sibling', sibling);
    await fixture.waitFor(() => entry('/body/closing/models') && entry('/body/sibling/models'));
    await page.close(); page = sibling;
    await fixture.waitFor(() => entry('/body/closing/models').closed);
    assert.equal(entry('/body/sibling/models').closed, false);
    await page.reload(); await fixture.waitFor(() => entry('/body/sibling/models').closed);
    assert.equal((await invoke('healthy')).ok, true);
  });
  await check('foreignPageCannotDiscover', async () => {
    const count = fixture.requests.length;
    const workbench = page.url();
    await page.goto('data:text/html,<title>Foreign fixture</title>');
    await assert.rejects(invoke('healthy'), /only to the OpenVision workbench/);
    assert.equal(fixture.requests.length, count);
    await page.goto(workbench);
  });
  await check('rendererCrashDisconnectsAndRecovers', async () => {
    await begin('body/crash'); await fixture.waitFor(() => entry('/body/crash/models'));
    const crashed = page.waitForEvent('crash');
    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].webContents.forcefullyCrashRenderer());
    await crashed; await fixture.waitFor(() => entry('/body/crash/models').closed);
    // Playwright permanently marks the old target crashed. Exercise recovery
    // through its surviving WebContents, then invoke real renderer IPC there.
    const recovered = await app.evaluate(async ({ BrowserWindow }, configuration) => {
      const window = BrowserWindow.getAllWindows()[0];
      await window.loadURL(window.webContents.getURL());
      return window.webContents.executeJavaScript(`window.discoveryFixture.invoke(${JSON.stringify(configuration)})`);
    }, fixture.configuration('healthy'));
    assert.equal(recovered.ok, true, recovered.error);
  });
  await check('authorizedRequests', async () => assert.ok(fixture.requests.length && fixture.requests.every(request => request.authorized)));
  result.success = Object.values(result.checks).every(value => value.passed);
  if (!result.success) process.exitCode = 1;
} catch (error) { result.error = error.stack; process.exitCode = 1; }
finally {
  try { if (app) await app.close(); }
  catch (error) { result.cleanupError = error.stack; result.success = false; process.exitCode = 1; }
  result.hostExit = { code: child?.exitCode, signal: child?.signalCode };
  if (child && child.exitCode !== 0) { result.success = false; process.exitCode = 1; }
  await fixture.close();
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ ...result, directory }, null, 2));
}
