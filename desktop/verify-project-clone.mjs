import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { changeProjectInSameWindow } from './verify-project-window.mjs';

const root = resolve(import.meta.dirname, '..'), { layout, appRoot } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/project-clone-verification-'));
const profile = join(directory, 'profile'), source = join(directory, 'sample-repository'), destination = join(directory, 'clones');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(source), mkdir(destination)]);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.enabled': true,
  'git.openRepositoryInParentFolders': 'never', 'window.dialogStyle': 'native' }));
const content = '# Real clone — café 日本語\n'; await writeFile(join(source, 'README.md'), content);
await writeFile(join(source, '.gitattributes'), '* text eol=lf\n');
const git = (cwd, args) => execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', windowsHide: true }).trim();
git(source, ['init']); git(source, ['add', 'README.md', '.gitattributes']);
git(source, ['-c', 'user.name=OpenVision Verification', '-c', 'user.email=fixture@example.invalid', 'commit', '-m', 'fixture']);
const head = git(source, ['rev-parse', 'HEAD']);
const result = { directory, checks: {}, errors: [], exits: [],
  workbenchHash: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
  mainHash: await fileHash(join(appRoot, 'out/main.js')),
  homeServiceHash: await fileHash(join(appRoot, 'out/vs/code/electron-sandbox/workbench/openvision-project-home-service.js')),
  scope: 'Native Glass and editor Project Home; actual Git clones from a disposable local repository. Native folder selection and error-dialog dismissal are supplied by the harness. No remote authentication or AI inference.' };
let app, page;
async function until(probe) {
  const end = Date.now() + 60000;
  while (Date.now() < end) { if (await probe()) return; await new Promise(resolve => setTimeout(resolve, 100)); }
  throw Error('Timed out waiting for clone state');
}
const home = () => page.getByRole('region', { name: 'Welcome to OpenVision' });
const form = () => page.getByRole('dialog', { name: 'Clone repository', exact: true });
async function openForm() {
  await home().getByRole('button', { name: 'Clone repository', exact: true }).click();
  await form().getByRole('textbox', { name: 'Repository URL', exact: true }).waitFor();
}
async function submit(url) {
  await openForm(); await form().getByRole('textbox', { name: 'Repository URL', exact: true }).fill(url);
  await form().getByRole('button', { name: 'Choose location & clone' }).click();
}
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--disable-telemetry', '--disable-crash-reporter', '--glass'] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(error.message));
  await home().waitFor({ timeout: 60000 });
  await openForm();
  assert.equal(await form().getByRole('textbox', { name: 'Repository URL', exact: true }).evaluate(node => node === document.activeElement), true);
  await form().getByRole('button', { name: 'Choose location & clone' }).click();
  await form().getByRole('alert').filter({ hasText: 'Enter a repository URL' }).waitFor();
  await page.screenshot({ path: join(directory, 'clone-dialog.png') });
  await page.keyboard.press('Escape'); await form().waitFor({ state: 'hidden' });
  await until(() => home().getByRole('button', { name: 'Clone repository', exact: true })
    .evaluate(node => node === document.activeElement));
  result.checks.urlValidationFocusAndEscape = true;
  await page.setViewportSize({ width: 390, height: 640 }); await openForm();
  const bounds = await form().boundingBox();
  assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= 390);
  assert.ok(bounds.y >= 0 && bounds.y + bounds.height <= 640);
  await page.screenshot({ path: join(directory, 'clone-dialog-compact.png') });
  await page.keyboard.press('Escape'); await page.setViewportSize({ width: 1200, height: 800 });
  result.checks.compactLayout = true;
  await app.evaluate(({ dialog }, destination) => {
    globalThis.clonePicker = { cancel: true, calls: [], messages: [] };
    dialog.showOpenDialog = async (...args) => {
      globalThis.clonePicker.calls.push(args.at(-1));
      return globalThis.clonePicker.cancel ? { canceled: true, filePaths: [] } : { canceled: false, filePaths: [destination] };
    };
    dialog.showMessageBox = async (...args) => {
      const options = args.at(-1); globalThis.clonePicker.messages.push(options);
      return { response: options.cancelId ?? (options.buttons?.length ?? 1) - 1, checkboxChecked: false };
    };
  }, destination);
  await submit(pathToFileURL(source).href);
  await until(() => app.evaluate(() => globalThis.clonePicker.calls.length === 1));
  await home().getByRole('button', { name: 'Clone repository', exact: true }).waitFor({ state: 'visible' });
  await until(() => home().getByRole('button', { name: 'Clone repository', exact: true }).isEnabled());
  assert.deepEqual(await readdir(destination), []); result.checks.destinationCancellationNoWrites = true;
  await app.evaluate(() => { globalThis.clonePicker.cancel = false; });
  await submit(pathToFileURL(join(directory, 'missing-repository')).href);
  await until(() => app.evaluate(() => globalThis.clonePicker.calls.length === 2));
  await until(() => home().getByRole('button', { name: 'Clone repository', exact: true }).isEnabled());
  await until(() => app.evaluate(() => globalThis.clonePicker.messages.length > 0));
  assert.match(await app.evaluate(() => JSON.stringify(globalThis.clonePicker.messages)), /missing-repository/);
  assert.equal(app.windows().length, 1);
  assert.deepEqual(await readdir(destination), []);
  assert.match(await home().locator('.ov-welcome-status').innerText(), /No project was opened|Could not complete/);
  result.checks.failedCloneDoesNotOpenProject = true;
  result.checks.startCloneReusesWindow = await changeProjectInSameWindow(app, page, () => submit(pathToFileURL(source).href));
  const cloned = join(destination, 'sample-repository');
  assert.equal(await readFile(join(cloned, 'README.md'), 'utf8'), content);
  assert.equal(git(cloned, ['rev-parse', 'HEAD']), head);
  assert.equal(git(cloned, ['remote', 'get-url', 'origin']), pathToFileURL(source).href);
  result.checks.glassRealCloneOpensEditor = true;
  await page.locator('.openvision-project-home-button').click();
  result.checks.editorCloneReusesWindow = await changeProjectInSameWindow(app, page, () => submit(pathToFileURL(source).href));
  assert.equal(await readFile(join(destination, 'sample-repository-1/README.md'), 'utf8'), content);
  assert.equal(git(join(destination, 'sample-repository-1'), ['rev-parse', 'HEAD']), head);
  result.checks.editorClonePreservesExistingFolder = true;
  const remoteIndex = process.argv.indexOf('--remote');
  if (remoteIndex >= 0) {
    const url = process.argv[remoteIndex + 1]; assert.ok(url?.startsWith('https://'));
    const remoteHead = git(source, ['ls-remote', url, 'HEAD']).split(/\s/)[0];
    await page.locator('.openvision-project-home-button').click();
    result.checks.remoteCloneReusesWindow = await changeProjectInSameWindow(app, page, () => submit(url));
    const name = new URL(url).pathname.split('/').at(-1).replace(/\.git$/, '');
    assert.equal(git(join(destination, name), ['rev-parse', 'HEAD']), remoteHead);
    assert.equal(git(join(destination, name), ['remote', 'get-url', 'origin']), url);
    result.checks.realPublicHttpsClone = { url, head: remoteHead };
    result.scope += ' Real public HTTPS clone verified against the remote HEAD and origin; private authentication remains unverified.';
  }
  assert.deepEqual(result.errors, []); result.success = true;
} catch (error) {
  result.success = false; result.error = error.stack;
  if (app) result.pickerCalls = await app.evaluate(() => globalThis.clonePicker?.calls).catch(() => []);
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText().catch(() => 'closed'));
} finally {
  if (app) { const child = app.process(); await app.close(); result.exits.push(child.exitCode); if (child.exitCode !== 0) result.success = false; }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2)); if (!result.success) process.exitCode = 1;
}
