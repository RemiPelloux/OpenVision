import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash, optionalFile } from './import-files.mjs';
import { parseConfiguration } from './import-json.mjs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { enterWorkspace } from './verification-workspace.mjs';

// Never attach to desktop-launch.json: every verification launch has a disposable profile.
const root = resolve(import.meta.dirname, '..'), { layout, appRoot, runtimeRoot } = await verificationRuntime(root);
const directory = await mkdtemp(join(root, 'logs/import-verification-'));
const source = await mkdtemp(join(tmpdir(), 'openvision-import-source-'));
const profile = join(directory, 'profile'), extensions = join(directory, 'extensions'), project = join(directory, 'project');
const user = join(profile, 'User'), sourceUser = join(source, 'User'), sourceExtensions = join(source, 'extensions');
const settingsPath = join(user, 'settings.json'), extensionName = 'openvision.import-verification-1.0.0';
const result = { directory, source, checks: {}, errors: [], workbenchHash: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
  scope: 'Native import IPC and settings dialog with disposable profiles and synthetic files. No AI requests.',
  limitations: ['Windows native check; named profile import fails closed until profile resource ownership is supported.',
    'Interrupted process, physical full-disk and multi-file restore I/O failure are not established.'] };
let app, page;
const preserved = new Map();
const normalPaths = [join(root, 'data/local/User/settings.json'), join(root, 'data/local/User/keybindings.json'), join(root, 'data/local-extensions/extensions.json')];
const normalHashes = await Promise.all(normalPaths.map(fileHash));

async function file(path, content) {
  await mkdir(join(path, '..'), { recursive: true }); await writeFile(path, content);
}
const invoke = request => page.evaluate(request => window.vscode.ipcRenderer.invoke('vscode:openvision-cursor-import', request), request);
async function ok(request) {
  const value = await invoke(request); assert.equal(value.ok, true, value.error); return value;
}
async function rejected(request, pattern) {
  const value = await invoke(request); assert.equal(value.ok, false); assert.match(value.error, pattern); return value;
}

async function prepare() {
  await Promise.all([mkdir(user, { recursive: true }), mkdir(extensions), mkdir(project), mkdir(sourceUser), mkdir(sourceExtensions)]);
  await file(settingsPath, '// Byte-exact settings backup — 日本語\r\n' + JSON.stringify({ ...verificationSettings,
    'git.enabled': false, 'editor.fontSize': 13, 'window.restoreWindows': 'none' }, null, 2) + '\r\n');
  await file(join(user, 'keybindings.json'), '// retain comment\r\n[{"key":"ctrl+j","command":"old.command"}]\r\n');
  await file(join(user, 'tasks.json'), '{"version":"2.0.0","tasks":[]}\r\n');
  await file(join(user, 'snippets/import-fixture.code-snippets'), '{"old":{"prefix":"old","body":"original"}}\r\n');
  await file(join(sourceUser, 'settings.json'), '{"editor.fontSize":17,"window.title":"Wrong title","openvision.importVerification":true}');
  await file(join(sourceUser, 'keybindings.json'), '[{"key":"ctrl+j","command":"new.command"}]');
  await file(join(sourceUser, 'tasks.json'), '{"version":"2.0.0","tasks":[{"label":"fixture","type":"shell","command":"echo fixture"}]}');
  await file(join(sourceUser, 'snippets/import-fixture.code-snippets'), '{"new":{"prefix":"new","body":"imported"}}');
  await file(join(sourceExtensions, extensionName, 'package.json'), JSON.stringify({ name: 'import-verification', publisher: 'openvision',
    version: '1.0.0', engines: { vscode: '^1.96.0' }, displayName: 'Import Fixture' }));
  await file(join(sourceExtensions, 'extensions.json'), JSON.stringify([{ identifier: { id: 'openvision.import-verification' }, version: '1.0.0', relativeLocation: extensionName }]));
  await file(join(directory, 'other-profile/User/settings.json'), 'Unrelated profile sentinel');
}

async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', extensions, '--new-window', '--disable-updates',
      '--disable-telemetry', '--disable-crash-reporter', '--skip-welcome', '--skip-release-notes', project] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  result.nativeOwnership = await app.evaluate(() => {
    const owner = globalThis.openvisionImportOwner, window = owner?.windowsMainService.getWindows()[0], profile = window?.profile;
    return { resources: Object.fromEntries(['settingsResource', 'keybindingsResource', 'tasksResource', 'snippetsHome', 'extensionsResource']
      .map(key => [key, { scheme: profile?.[key]?.scheme, fsPath: profile?.[key]?.fsPath }])),
      isDefault: profile?.isDefault, userDataPath: owner?.environmentMainService.userDataPath, extensionsPath: owner?.environmentMainService.extensionsPath };
  });
}

async function dialogPreview(options) {
  const general = page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^General$/ });
  for (let attempt = 0; attempt < 3; attempt++) {
    const tab = page.locator('.tabs-container .tab').filter({ hasText: 'OpenVision Settings' });
    if (await tab.count()) await tab.first().click();
    else await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    try { await general.waitFor({ state: 'attached', timeout: 5000 }); await general.locator('..').click(); break; }
    catch (error) { if (attempt === 2) throw error; }
  }
  await page.getByRole('button', { name: 'Import from Cursor', exact: true }).click();
  const dialog = page.locator('.openvision-import-dialog');
  await dialog.getByLabel('Cursor User directory', { exact: true }).fill(options.user);
  await dialog.getByLabel('Cursor extensions directory', { exact: true }).fill(options.extensions);
  await dialog.getByRole('button', { name: 'Preview Import', exact: true }).click();
  await dialog.getByRole('status').filter({ hasText: '6 files to import' }).waitFor();
  assert.ok((await dialog.locator('pre').innerText()).toLowerCase().includes(user.toLowerCase()));
  await page.screenshot({ path: join(directory, 'preview.png') });
  await dialog.getByRole('button', { name: 'Close', exact: true }).click();
  result.checks.native_dialog_previews_selected_profile = true;
}

async function verify() {
  const options = { user: sourceUser, extensions: sourceExtensions, categories: ['settings', 'keybindings', 'tasks', 'snippets', 'extensions'], overwrite: true };
  const paths = [settingsPath, join(user, 'keybindings.json'), join(user, 'tasks.json'), join(user, 'snippets/import-fixture.code-snippets'),
    join(extensions, 'extensions.json'), join(extensions, extensionName, 'package.json')];
  for (const path of paths) preserved.set(path, await optionalFile(path));
  await dialogPreview(options);
  for (const [path, before] of preserved) assert.deepEqual(await optionalFile(path), before);
  result.checks.preview_read_only = true;
  let preview = await ok({ action: 'preview', options });
  await writeFile(settingsPath, '{"changedAfterPreview":true}');
  await rejected({ action: 'apply', token: preview.token }, /changed since/);
  await writeFile(settingsPath, preserved.get(settingsPath));
  result.checks.stale_preview_rejected = true;
  preview = await ok({ action: 'preview', options });
  const imported = await ok({ action: 'apply', token: preview.token });
  result.backup = imported.backup;
  assert.equal(imported.files, 6);
  assert.ok(imported.backup.startsWith(join(profile, 'Backups/openvision-import')));
  const settings = parseConfiguration(await readFile(settingsPath, 'utf8'));
  assert.equal(settings['editor.fontSize'], 17); assert.equal(settings['openvision.importVerification'], true);
  const registry = JSON.parse(await readFile(join(extensions, 'extensions.json'), 'utf8'));
  assert.ok(registry.some(entry => entry.identifier.id === 'openvision.import-verification'
    && entry.location.path.toLowerCase().includes('/extensions/openvision.import-verification-1.0.0')));
  result.checks.native_import_targets_selected_profile_and_extensions = true;
  const repeated = await ok({ action: 'preview', options }); assert.equal(repeated.files, 0);
  assert.equal((await ok({ action: 'apply', token: repeated.token })).backup, null);
  result.checks.idempotent_import = true;
  const importedSettings = await readFile(settingsPath);
  await writeFile(settingsPath, '{"laterEdit":true}');
  await rejected({ action: 'restore', backup: imported.backup }, /newer edit/);
  assert.equal(await readFile(settingsPath, 'utf8'), '{"laterEdit":true}');
  await writeFile(settingsPath, importedSettings);
  result.checks.stale_restore_rejected = true;
  const manifest = JSON.parse(await readFile(join(imported.backup, 'manifest.json'), 'utf8'));
  const original = join(imported.backup, manifest.records.find(record => record.original).original);
  const originalBytes = await readFile(original); await writeFile(original, 'tampered');
  await rejected({ action: 'restore', backup: imported.backup }, /does not match its digest/);
  await writeFile(original, originalBytes);
  result.checks.backup_tampering_rejected = true;
  assert.equal((await ok({ action: 'restore', backup: imported.backup })).restored, 6);
  for (const [path, before] of preserved) assert.deepEqual(await optionalFile(path), before);
  assert.equal((await ok({ action: 'restore', backup: imported.backup })).restored, 0);
  result.checks.byte_exact_restore_and_idempotent_retry = true;
  assert.deepEqual(await Promise.all(normalPaths.map(fileHash)), normalHashes);
  assert.equal(await readFile(join(directory, 'other-profile/User/settings.json'), 'utf8'), 'Unrelated profile sentinel');
  result.checks.normal_and_other_profiles_untouched = true;
  const recoveryPreview = await ok({ action: 'preview', options });
  result.cliRecoveryBackup = (await ok({ action: 'apply', token: recoveryPreview.token })).backup;
}

async function verifyCliRecovery() {
  const invokeCli = async args => {
    const { stdout } = await promisify(execFile)(process.execPath, [join(runtimeRoot, 'desktop/import-cli.mjs'),
      '--target-user-data', profile, '--target-extensions', extensions, ...args], { timeout: 30000 });
    return JSON.parse(stdout);
  };
  const listing = await invokeCli(['--list-backups']);
  assert.ok(listing.backups.some(entry => entry.backup === result.cliRecoveryBackup && entry.status === 'complete'));
  const before = await Promise.all([...preserved.keys()].map(fileHash));
  assert.equal((await invokeCli(['--preview-restore', result.cliRecoveryBackup])).pending, 6);
  assert.deepEqual(await Promise.all([...preserved.keys()].map(fileHash)), before);
  result.checks.cli_discovers_and_previews_native_backup_after_host_exit = true;
  assert.equal((await invokeCli(['--restore', result.cliRecoveryBackup])).restored, 6);
  for (const [path, bytes] of preserved) assert.deepEqual(await optionalFile(path), bytes);
  assert.equal((await invokeCli(['--restore', result.cliRecoveryBackup])).restored, 0);
  assert.deepEqual(await Promise.all(normalPaths.map(fileHash)), normalHashes);
  result.checks.cli_restores_native_backup_byte_exact_after_host_exit = true;
}

try {
  await prepare(); await launch(); await verify();
  assert.deepEqual(result.errors, []); result.status = 'passed';
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
} finally {
  if (app) {
    const child = app.process();
    await app.close().catch(error => { result.cleanupError = String(error); process.exitCode = 1; });
    result.exitCode = child.exitCode;
    if (child.exitCode !== 0) { result.status = 'failed'; process.exitCode = 1; }
  }
  if (result.status === 'passed') {
    try { await verifyCliRecovery(); }
    catch (error) { result.status = 'failed'; result.error = error.stack; process.exitCode = 1; }
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
