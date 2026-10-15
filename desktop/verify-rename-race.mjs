import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, copyFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';

const root = resolve(import.meta.dirname, '..'), { layout, appRoot } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/rename-race-'));
const project = join(directory, 'project'), profile = join(directory, 'profile'), driver = join(directory, 'driver');
for (const folder of [project, join(profile, 'User'), driver]) await mkdir(folder, { recursive: true });
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.enabled': false, 'files.autoSave': 'off', 'editor.rename.enablePreview': false }));
for (const [name, content] of Object.entries({ source: 'alpha source\n', dependent: 'alpha dependent\n', unrelated: 'Unrelated original\n' }))
  await writeFile(join(project, `${name}.ovrace`), content);
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'openvision-rename-race', version: '0.0.0',
  publisher: 'openvision-verification', engines: { vscode: '^1.90.0' }, main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/verify-rename-race-extension.cjs'), join(driver, 'extension.cjs'));
const result = { directory, success: false, platform: process.platform, node: process.version,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), errors: [],
  hashes: Object.fromEntries(await Promise.all(['out/vs/workbench/api/node/extensionHostProcess.js',
    'out/vs/workbench/workbench.desktop.main.js'].map(async name => [name, await fileHash(join(appRoot, name))]))),
  driverHash: await fileHash(join(driver, 'extension.cjs')),
  scope: 'Actual Windows workbench with a deliberately delayed extension rename provider; no AI or real language-server claim.' };
let app, page;
async function optional(name) {
  try { return JSON.parse(await readFile(join(directory, `${name}.json`), 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
}
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--extensionDevelopmentPath', driver,
      '--new-window', '--disable-updates', '--disable-telemetry', '--disable-crash-reporter', '--skip-welcome', '--skip-release-notes', project] });
  page = await app.firstWindow(); page.on('pageerror', error => result.errors.push(error.message));
  await enterWorkspace(page);
  const deadline = Date.now() + 90000, submitted = new Set();
  while (Date.now() < deadline) {
    const native = await optional('extension-result');
    if (native) { result.native = native; break; }
    const phase = await optional('phase');
    if (phase && !submitted.has(phase.mode)) {
      const input = page.locator('.rename-box input').filter({ visible: true });
      if (await input.count()) {
        await input.fill('renamed'); await input.press('Enter'); submitted.add(phase.mode);
      }
    }
    await delay(100);
  }
  assert.ok(result.native, 'Native driver must complete');
  assert.equal(result.native.success, true, result.native.error);
  assert.deepEqual(result.errors, []); result.success = true;
} catch (error) {
  result.error = error.stack; process.exitCode = 1;
} finally {
  if (page && !page.isClosed()) await page.screenshot({ path: join(directory, 'result.png') }).catch(() => {});
  if (app) {
    const child = app.process();
    try { await app.close(); result.exitCode = child.exitCode; assert.equal(child.exitCode, 0); }
    catch (error) { result.cleanupError = String(error); result.success = false; process.exitCode = 1; }
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
