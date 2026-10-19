// OV-704 native probe: npm run verify:modes-probe [-- --portable DIR]
// Launches the built app with a disposable profile behind an owned loopback-only
// proxy (non-loopback requests are recorded and refused), then records which
// specialized modes are visible and what happens when they are invoked:
// - computer use: the Linux explanation is logged and no sidecar is requested;
// - in-app browser / browser automation, image generation: palette entries recorded.
// The static inventory must pass first, so the probe and the scope agree.
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { createLoopbackProxy } from './network-capture.mjs';
import { inventoryModes, decisionFailures } from './specialized-modes.mjs';
import { computerUseExplanation } from './computer-use-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { portable, appRoot, layout } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/modes-probe-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
const result = { directory, success: false, platform: process.platform, ...(portable ? { portable } : {}) };
const inventory = await inventoryModes(appRoot);
result.inventory_failures = decisionFailures(inventory);
assert.deepEqual(result.inventory_failures, [], 'Static inventory facts drifted');

const proxy = await createLoopbackProxy();
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(project, 'README.md'), '# modes probe\n');
// Chromium traffic uses --proxy-server; extension-host Node traffic uses http.proxy.
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'http.proxy': `http://127.0.0.1:${proxy.port}`, 'http.proxySupport': 'override', 'http.proxyStrictSSL': true }));

async function logFiles(folder) {
  const found = [];
  for (const entry of await readdir(folder, { withFileTypes: true }).catch(() => [])) {
    const path = join(folder, entry.name);
    if (entry.isDirectory()) found.push(...await logFiles(path));
    else if (entry.name.endsWith('.log')) found.push(path);
  }
  return found;
}
async function paletteEntries(page, query) {
  await page.keyboard.press('Escape');
  await page.keyboard.press('F1');
  const box = page.locator('.quick-input-widget').getByRole('textbox', { name: 'input', exact: true });
  await box.fill(`>${query}`);
  await page.waitForTimeout(1200);
  const rows = await page.locator('.quick-input-list .monaco-list-row').allInnerTexts();
  await page.keyboard.press('Escape');
  return rows.map(row => row.replace(/\s+/g, ' ').trim()).filter(Boolean);
}

let app;
const errors = [], consoleLines = [];
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter', `--proxy-server=http://127.0.0.1:${proxy.port}`,
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project] });
  const page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => consoleLines.push(message.text()));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  // onStartupFinished extensions (computer use, browser automation) activate after restore.
  await page.waitForTimeout(15000);

  const explanation = `${computerUseExplanation} (${process.platform})`;
  const logs = await logFiles(join(profile, 'logs'));
  const logText = (await Promise.all(logs.map(path => readFile(path, 'utf8')))).join('\n');
  const sources = { log_files: logText.split(explanation).length - 1,
    renderer_console: consoleLines.filter(line => line.includes(explanation)).length };
  const computerPalette = await paletteEntries(page, 'Computer Use');
  const browserPalette = await paletteEntries(page, 'Browser');
  const imagePalette = await paletteEntries(page, 'Generate Image');
  const external = proxy.events.filter(event => !event.allowed);
  const sidecar = proxy.events.filter(event => /(^|\.)cursor\.com$/i.test(event.host) || /computer-use-sidecar/i.test(event.url ?? ''));
  result.computer_use = { explanation, ...sources, palette: computerPalette, sidecar_requests: sidecar };
  result.browser = { palette: browserPalette };
  result.image_generation = { palette: imagePalette };
  result.network = { proxied: proxy.events.length, refused_non_loopback: external.map(({ method, host, port, url }) => ({ method, host, port, url })) };
  await page.screenshot({ path: join(directory, 'probe.png') });

  assert.ok(sources.log_files + sources.renderer_console >= 1, 'Computer use explanation not observed');
  assert.deepEqual(sidecar, [], 'A computer-use sidecar or Cursor download was requested');
  assert.ok(!computerPalette.some(row => /Computer Use.*Permission/i.test(row)), 'Computer-use permission commands are visible on Linux');
  assert.ok(!imagePalette.some(row => /Generate Image/i.test(row)), 'An image generation command is visible');
  assert.deepEqual(errors, []);
  Object.assign(result, { success: true, checked_at: new Date().toISOString(),
    scope: 'Controlled local probe; no provider, account or live inference.' });
} catch (error) {
  const page = app?.windows()[0];
  if (page) await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  result.success = false; result.failure = error.stack; result.errors = errors; process.exitCode = 1;
} finally {
  if (app) {
    const child = app.process();
    try { await app.close(); }
    catch (error) { result.success = false; result.cleanupFailure = error.stack; process.exitCode = 1; }
    result.hostExit = child.exitCode;
    if (child.exitCode !== 0) { result.success = false; result.cleanupFailure ??= `Host exited ${child.exitCode}`; process.exitCode = 1; }
  }
  await proxy.close();
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
}
