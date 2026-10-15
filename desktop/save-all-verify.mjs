import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile, copyFile, symlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { fixWorkspaceSaveAll } from './save-all-customization.mjs';
import { fixSaveAllCommands } from './save-all-commands.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/save-all-verification-'));
const project = join(directory, 'project'), profile = join(directory, 'profile'), driver = join(directory, 'driver');
await Promise.all([mkdir(project), mkdir(join(profile, 'User'), { recursive: true }), mkdir(driver)]);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'files.autoSave': 'off', 'files.eol': '\n' }));
for (const name of ['hidden.txt', 'conflict.txt']) await writeFile(join(project, name), 'original\n');
await writeFile(join(project, 'unrelated.txt'), 'untouched\n');
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'openvision-save-all-verifier', publisher: 'openvision',
  version: '0.0.0', engines: { vscode: '^1.90.0' }, main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/save-all-verification.cjs'), join(driver, 'extension.cjs'));
const candidate = process.argv.includes('--candidate');
const relative = 'resources/app/out/vs/workbench/workbench.desktop.main.js';
const source = join(root, 'electron-host', relative);
const original = await readFile(source, 'utf8'), originalHash = await fileHash(source);
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'),
  new Map([[relative, candidate ? fixSaveAllCommands(fixWorkspaceSaveAll(original)) : original]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), 'junction');
const result = { directory, candidate, overlay: overlay.records, checks: {}, platform: process.platform,
  fixture: 'Native public VS Code workspace API; real local files plus declared writable/denied file-system provider fixture.' };
let app, page;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--extensionDevelopmentPath', driver,
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', project] });
  page = await app.firstWindow();
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  const deadline = Date.now() + 90000;
  while (Date.now() < deadline) {
    try { result.native = JSON.parse(await readFile(join(directory, 'extension-result.json'), 'utf8')); break; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await page.waitForTimeout(250);
  }
  assert.ok(result.native, 'Native Save All fixture must complete');
  assert.equal(result.native.success, true, result.native.failure);
  result.success = true;
} catch (error) { result.success = false; result.failure = error.stack; process.exitCode = 1; }
finally {
  if (page) await page.screenshot({ path: join(directory, 'native-save-all.png') }).catch(() => {});
  if (app) await app.close();
  result.original_unchanged = await fileHash(source) === originalHash;
  assert.equal(result.original_unchanged, true);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
