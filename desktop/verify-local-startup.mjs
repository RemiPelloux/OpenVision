import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, readdir, readlink, realpath, symlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { createRuntimeOverlay } from './verification-runtime-overlay.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { changeProjectInSameWindow } from './verify-project-window.mjs';
import { fileHash } from './import-files.mjs';
import { linuxSandboxArguments } from './platform.mjs';

assert.ok(['win32', 'linux'].includes(process.platform), 'This verifier covers Windows and Linux');
const root = resolve(import.meta.dirname, '..');
const directory = await mkdtemp(join(root, 'logs/local-startup-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'Startup Project');
const second = join(directory, 'Next Project');
await mkdir(join(profile, 'User'), { recursive: true });
for (const folder of [project, second]) { await mkdir(folder); await writeFile(join(folder, 'startup.txt'), 'Startup probe\n'); }
await writeFile(join(profile, 'User/settings.json'), JSON.stringify(verificationSettings));
const relative = 'resources/app/out/vs/workbench/workbench.desktop.main.js';
const original = join(root, 'electron-host', relative), originalHash = await fileHash(original);
let source = await readFile(original, 'utf8');
const control = process.argv.includes('--blocking-control');
const phase = 'zc.localMode ? _s.AfterRestored : _s.BlockRestore';
assert.equal(source.split(phase).length, 2, 'Expected production local startup lifecycle');
if (control) source = source.replace(phase, '_s.BlockRestore');
const overlay = await createRuntimeOverlay(join(root, 'electron-host'), join(directory, 'host'), new Map([[relative, source]]));
await symlink(join(root, 'desktop'), join(directory, 'host/desktop'), process.platform === 'win32' ? 'junction' : 'dir');
const result = { directory, control, checks: {}, pageErrors: [], success: false,
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    originalHash, overlay: overlay.records, verifierHash: await fileHash(join(root, 'desktop/verify-local-startup.mjs')) },
  scope: `${process.platform} native Explorer, reload and same-window project switching; disposable profile, no AI inference.` };
let app, page;
async function explorer() {
  await enterWorkspace(page);
  await page.locator('.part.sidebar .explorer-folders-view').waitFor({ state: 'visible', timeout: 30000 });
  await page.locator('.part.sidebar').getByRole('treeitem').filter({ hasText: 'startup.txt' }).first().waitFor();
}
async function logs(folder) {
  const output = [];
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = join(folder, entry.name);
    if (entry.isDirectory()) output.push(...await logs(path));
    else if (entry.name === 'renderer.log') output.push({ path, text: await readFile(path, 'utf8') });
  }
  return output;
}
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: overlay.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(join(directory, 'host')) : []), project] });
  result.stderr = '';
  app.process().stderr?.on('data', chunk => { result.stderr = (result.stderr + chunk).slice(-16384); });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.pageErrors.push(error.message));
  await page.locator('.openvision-project-home-button').waitFor({ timeout: 60000 });
  if (!control) {
    await explorer(); result.checks.explorerAfterStartup = true;
    await page.locator('.part.sidebar').getByRole('treeitem').filter({ hasText: 'startup.txt' }).first().dblclick();
    await page.locator('.tabs-container .tab').filter({ hasText: 'startup.txt' }).first().waitFor();
    await page.keyboard.press('Control+Shift+p');
    const command = page.locator('.quick-input-widget input[type="text"]');
    await command.fill('>Developer: Reload Window');
    await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'Developer: Reload Window' }).first().click();
    await page.waitForEvent('domcontentloaded'); await explorer();
    await page.locator('.tabs-container .tab').filter({ hasText: 'startup.txt' }).first().waitFor();
    result.checks.editorRestoresAfterReload = true;
    await page.locator('.openvision-project-home-button').click();
    await app.evaluate(({ dialog }, target) => {
      dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [target] });
    }, second);
    result.checks.projectSwitch = await changeProjectInSameWindow(app, page, () =>
      page.getByRole('region', { name: 'Welcome to OpenVision' }).getByRole('button', { name: 'Open folder', exact: true }).click());
    await explorer(); assert.match(await page.title(), /Next Project/);
    result.checks.explorerAfterSwitch = true;
    await page.screenshot({ path: join(directory, 'explorer.png') });
  }
  // Let the native log writer flush, including the original blocking contribution.
  await page.waitForTimeout(3000);
} catch (error) { result.failure = error.stack; }
finally {
  if (app) {
    const child = app.process();
    try { await app.close(); result.exitCode = child.exitCode; assert.equal(child.exitCode, 0); }
    catch (error) { result.cleanupError = error.stack; }
    // Linux lifecycle: the whole process family of this disposable host ends with the app,
    // identified by executable path rather than PID alone.
    if (process.platform === 'linux') try {
      const executable = await realpath(overlay.executable);
      const survivors = async () => (await Promise.all((await readdir('/proc')).filter(name => /^\d+$/.test(name))
        .map(async name => await readlink(`/proc/${name}/exe`).catch(() => null) === executable ? Number(name) : null))).filter(Boolean);
      for (let attempt = 0; attempt < 50 && (result.survivors = await survivors()).length; attempt++) await new Promise(next => setTimeout(next, 200));
      assert.deepEqual(result.survivors, [], 'No host process may outlive a clean close');
      result.checks.processFamilyEnded = true;
    } catch (error) { result.cleanupError ??= error.stack; }
  }
  const rendererLogs = await logs(join(profile, 'logs')).catch(error => { result.logError = error.message; return []; });
  result.rendererLogs = rendererLogs.map(({ path }) => path);
  result.startupErrors = rendererLogs.flatMap(({ text }) => text.split('\n').filter(line =>
    line.includes("Unable to create workbench contribution 'workbench.contrib.onboarding.onStart.cursor'")));
  try {
    assert.ok(rendererLogs.length, 'Native renderer logs must be inspected');
    if (control) assert.ok(result.startupErrors.length > 0, 'Original blocking lifecycle must reproduce the error');
    else { assert.deepEqual(result.startupErrors, []); assert.deepEqual(result.pageErrors, []); }
    assert.equal(await fileHash(original), originalHash);
    assert.ok(!result.failure && !result.cleanupError && !result.logError);
    result.checks[control ? 'originalErrorReproduced' : 'noOnboardingContributionError'] = true;
    result.success = true;
  } catch (error) { result.failure ??= error.stack; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2)); if (!result.success) process.exitCode = 1;
}
