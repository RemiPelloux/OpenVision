import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile, realpath } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { localSettings } from './import-json.mjs';
import { linuxSandboxArguments } from './platform.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/telemetry-verification-'));
const profile = join(directory, 'profile');
const project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true });
await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(localSettings));
await writeFile(join(profile, 'argv.json'), '{"enable-crash-reporter":false}');
await writeFile(join(project, 'hello.js'), 'console.log("OpenVision telemetry verification");\n');
const netLog = join(directory, 'chromium-netlog.json');
const env = { ...process.env };
delete env.ELECTRON_RUN_AS_NODE;
const app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
  args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
    '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
    '--disable-telemetry', '--disable-crash-reporter', `--log-net-log=${netLog}`,
    ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []),
    project, join(project, 'hello.js')] });
const errors = [];
const observedUrls = new Set();
const observe = page => {
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => observedUrls.add(request.url()));
};
app.on('window', observe);
for (const page of app.windows()) observe(page);
let result;
try {
  const page = await app.firstWindow();
  await page.locator('.monaco-workbench').waitFor({ state: 'visible', timeout: 60000 });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 30000 });
  const sentry = await page.evaluate(() => {
    const state = globalThis._CURSOR_SENTRY;
    state.enabled = true;
    state.buffer.push({ test: true });
    return { enabled: state.enabled, buffered: state.buffer.length, sampling: state.profilesSampleRate };
  });
  assert.deepEqual(sentry, { enabled: false, buffered: 0, sampling: 0 });
  const main = await app.evaluate(({ app, crashReporter }) => ({
    name: app.getName(), path: app.getAppPath(), uploadToServer: crashReporter.getUploadToServer(),
    sentryEnabled: globalThis._CURSOR_SENTRY?.enabled,
  }));
  assert.equal(main.uploadToServer, false);
  assert.equal(main.sentryEnabled, false);
  assert.equal(await realpath(main.path), await realpath(join(root, 'source/app')));
  // Exercise a real file edit and observe startup/idle network activity.
  await page.keyboard.press('ControlOrMeta+p');
  await page.locator('.quick-input-widget input[type="text"]').fill('hello.js');
  await page.keyboard.press('Enter');
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+End');
  await page.keyboard.insertText('\n// Local edit verified.\n');
  await page.keyboard.press('ControlOrMeta+s');
  await page.waitForTimeout(65000);
  assert.match(await readFile(join(project, 'hello.js'), 'utf8'), /Local edit verified/);
  await page.screenshot({ path: join(directory, 'editor.png') });
  result = { platform: process.platform, checked_at: new Date().toISOString(), main, sentry,
    title: await page.title(), renderer_errors: errors, observation_seconds: 65, edit_saved: true,
    profile_directory: profile, screenshot: join(directory, 'editor.png') };
} finally {
  // Playwright owns this new Electron process; user windows/profiles are untouched.
  await app.close();
}
const log = JSON.parse(await readFile(netLog, 'utf8'));
for (const event of log.events) if (typeof event.params?.url === 'string') observedUrls.add(event.params.url);
const urls = [...observedUrls].filter(url => /^https?:/.test(url));
const telemetry = urls.filter(url => /sentry|statsig|telemetry|metrics\.cursor|vortex|events\.data\.microsoft|appcenter|\/rgstr|SubmitPerformanceEvents|SubmitMetrics|AppendCppTelem|SubmitLogs|TrackEvents|DebuggingDataUpload/i.test(url));
result.network = { http_urls: urls, telemetry_matches: telemetry,
  scope: 'Chromium net log and renderer requests; Node sockets and arbitrary third-party extensions are not exhaustively captured.' };
await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ ...result, profile_directory: undefined }, null, 2));
assert.deepEqual(telemetry, [], 'Telemetry request observed');
assert.deepEqual(errors, [], 'Renderer errors observed');
