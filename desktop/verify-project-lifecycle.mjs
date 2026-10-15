import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, readdir, symlink } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { platformLayout } from './platform.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { denyFixtureWrites } from './verification-write-denial.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..'), layout = platformLayout(root);
const directory = await mkdtemp(join(root, 'logs/project-lifecycle-verification-'));
const profile = join(directory, 'profile'), primary = join(directory, 'primary'), secondary = join(directory, 'secondary');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(primary), mkdir(secondary)]);
await mkdir(join(secondary, 'destination'));
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'files.enableTrash': false, 'explorer.confirmDelete': true,
  'explorer.confirmDragAndDrop': true, 'files.hotExit': 'onExitAndWindowClose', 'window.restoreWindows': 'all',
  'editor.quickSuggestions': false, 'editor.minimap.enabled': false, 'window.dialogStyle': 'custom' }));
const workspace = join(directory, 'fixture.code-workspace');
await writeFile(workspace, JSON.stringify({ folders: [{ path: primary }, { path: secondary }] }));
const original = 'Native project lifecycle — café 日本語\n', file = join(primary, 'operations.txt');
const externalFile = join(primary, 'external.txt'), hotExitFile = join(primary, 'unsaved.txt');
await writeFile(file, original); await writeFile(externalFile, 'Initial external state\n');
await writeFile(hotExitFile, 'Saved baseline\n');
await writeFile(join(secondary, 'linked.txt'), 'Native junction target\n');
await symlink(secondary, join(primary, 'linked-folder'), 'junction');
const result = { checkedAt: new Date().toISOString(), directory, platform: process.platform, node: process.version,
  hashes: { workbench: await fileHash(join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')) },
  checks: {}, hostExits: [], errors: [], scope: `Native ${process.platform} editor and Explorer with two disposable roots; no AI requests.`,
  limitations: ['Directory junction evidence does not establish file-symlink behavior.',
    'Large-project filesystem work, physical full-disk and crash recovery require separate checks.'] };
let app, page;
const editor = () => page.locator('.editor-instance .monaco-editor').filter({ visible: true }).first();
async function until(description, condition, timeout = 15000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { if (await condition()) return; await delay(100); }
  throw new Error(`Timed out waiting for ${description}`);
}
const disk = path => readFile(path, 'utf8').catch(error => { if (error.code === 'ENOENT') return undefined; throw error; });
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--disable-telemetry', '--disable-crash-reporter', '--skip-welcome', '--skip-release-notes', workspace] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('close', () => { (result.windowCloses ??= []).push({ at: new Date().toISOString(), step: result.step }); });
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
  await delay(8000);
}
async function close() {
  if (!app) return;
  const child = app.process(); await app.close(); app = undefined;
  result.hostExits.push({ pid: child.pid, code: child.exitCode }); assert.equal(child.exitCode, 0);
}
async function command(name) {
  await page.keyboard.press('Escape'); await page.keyboard.press('Control+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(`>${name}`);
  await page.locator('.quick-input-widget').getByText(name, { exact: true }).first().click();
}
async function open(path) {
  await page.keyboard.press('Escape'); await page.keyboard.press('Control+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(path);
  await page.locator('.quick-input-widget').getByText(basename(path), { exact: true }).first().waitFor();
  await page.keyboard.press('Enter');
  await page.locator('.tabs-container .tab.active').filter({ hasText: basename(path) }).waitFor();
  await editor().waitFor();
  await delay(300);
}
async function replaceEditor(text) {
  await editor().locator('.inputarea').focus();
  await page.keyboard.press('Control+a'); await page.keyboard.insertText(text);
}
async function editorContains(text) {
  return (await editor().locator('.view-lines').innerText()).replace(/\u00a0/g, ' ').includes(text);
}
async function explorerFile(name) {
  return page.locator('.explorer-folders-view .monaco-list-row').filter({ has: page.locator('.label-name', { hasText: new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`) }) });
}
async function fileOperations() {
  await open(file); await command('File: Reveal Active File in Explorer');
  const row = await explorerFile('operations.txt'); await row.click(); await page.keyboard.press('F2');
  const rename = page.locator('.explorer-folders-view input');
  await rename.fill('renamed.txt'); await rename.press('Enter');
  const renamed = join(primary, 'renamed.txt');
  await until('native rename', async () => await disk(renamed) === original && await disk(file) === undefined);
  result.checks.rename_preserves_bytes = true;
  await (await explorerFile('renamed.txt')).click(); await page.keyboard.press('Control+x');
  const second = page.locator('.explorer-folders-view .monaco-list-row').filter({ has: page.locator('.label-name', { hasText: /^secondary$/ }) });
  await second.click();
  if (await second.getAttribute('aria-expanded') === 'false') await page.keyboard.press('ArrowRight');
  await (await explorerFile('destination')).click(); await page.keyboard.press('Control+v');
  const moved = join(secondary, 'destination/renamed.txt');
  await until('cross-root cut and paste', async () => await disk(moved) === original && await disk(renamed) === undefined);
  result.checks.move_between_roots_preserves_bytes = true;
  await open(moved); await command('File: Reveal Active File in Explorer');
  await (await explorerFile('renamed.txt')).click(); await page.keyboard.press('Delete');
  const dialog = page.locator('.monaco-dialog-box'); await dialog.waitFor();
  await dialog.getByRole('button', { name: /Delete/ }).click();
  await until('confirmed native deletion', async () => await disk(moved) === undefined);
  assert.equal(await disk(join(secondary, 'linked.txt')), 'Native junction target\n');
  result.checks.delete_preserves_unrelated_file = true;
}
async function externalAndLinked() {
  await open(externalFile);
  await writeFile(externalFile, 'External clean reload marker\n');
  await until('external change reloads clean editor', () => editorContains('External clean reload marker'));
  result.checks.external_change_reloads_clean_editor = true;
  await replaceEditor('Unsaved local conflict marker\n');
  await until('local dirty content renders', () => editorContains('Unsaved local conflict marker'));
  await writeFile(externalFile, 'Concurrent external marker\n');
  await page.keyboard.press('Control+s');
  await page.getByText(/The content of the file is newer|Failed to save 'external.txt'/).first().waitFor();
  assert.equal(await disk(externalFile), 'Concurrent external marker\n');
  assert.ok(await editorContains('Unsaved local conflict marker'));
  result.checks.conflicting_external_write_preserves_both_versions = true;
  // The fixture resolves explicitly through the advertised overwrite action.
  await page.getByRole('button', { name: 'Overwrite', exact: true }).click();
  await until('explicit overwrite saves reviewed local content', async () => await disk(externalFile) === 'Unsaved local conflict marker\n');
  result.checks.explicit_conflict_resolution = true;
  await open(join(primary, 'linked-folder/linked.txt'));
  await until('junction file opens', () => editorContains('Native junction target'));
  await replaceEditor('Edited through native junction\n'); await page.keyboard.press('Control+s');
  await until('junction edit reaches target', async () => await disk(join(secondary, 'linked.txt')) === 'Edited through native junction\n');
  result.checks.directory_junction_edit = true;
}
async function hotExit() {
  await open(hotExitFile); await replaceEditor('Unsaved recovery marker\n');
  await page.locator('.tab.dirty').first().waitFor();
  assert.equal(await disk(hotExitFile), 'Saved baseline\n');
  await close();
  assert.equal(await disk(hotExitFile), 'Saved baseline\n');
  await launch();
  await until('unsaved editor restored after restart', () => editorContains('Unsaved recovery marker'));
  assert.equal(await disk(hotExitFile), 'Saved baseline\n');
  await page.keyboard.press('Control+s');
  await until('restored unsaved editor saves', async () => await disk(hotExitFile) === 'Unsaved recovery marker\n');
  result.checks.hot_exit_restores_unsaved_edits = true;
  result.finalFiles = { primary: await readdir(primary), secondary: await readdir(secondary) };
}
async function permissionFailure() {
  const locked = join(primary, 'locked'); await mkdir(locked);
  const protectedFile = join(locked, 'protected.txt');
  await writeFile(protectedFile, 'Protected original\n'); await open(protectedFile);
  await replaceEditor('Reviewed permission retry\n');
  await until('protected editor renders local edit', () => editorContains('Reviewed permission retry'));
  const denial = await denyFixtureWrites({ directory: locked, scope: directory });
  result.aclBackup = denial.backup;
  try {
    await assert.rejects(writeFile(protectedFile, 'Must not reach disk'), error => ['EPERM', 'EACCES'].includes(error.code));
    await page.keyboard.press('Control+s');
    await page.getByText(/Failed to save 'protected.txt'/).first().waitFor();
    assert.equal(await disk(protectedFile), 'Protected original\n');
    assert.ok(await editorContains('Reviewed permission retry'));
    result.checks.native_permission_failure_preserves_disk_and_editor = true;
  } finally { await denial.restore(); result.checks.fixture_acl_restored = true; }
  // Retry the actual editor save after its filesystem permission is restored.
  await editor().locator('.inputarea').focus(); await page.keyboard.press('Control+s');
  await until('save recovers after permission restoration', async () => await disk(protectedFile) === 'Reviewed permission retry\n');
  result.checks.native_permission_retry = true;
}
try {
  result.step = 'launch'; await launch();
  result.step = 'file operations'; await fileOperations();
  result.step = 'external and linked files'; await externalAndLinked();
  result.step = 'permission failure'; await permissionFailure();
  result.step = 'hot exit'; await hotExit();
  assert.deepEqual(result.errors, []); result.status = 'passed';
  await page.screenshot({ path: join(directory, 'restored-project.png') });
} catch (error) {
  result.status = 'failed'; result.error = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page && !page.isClosed()) {
    const body = await page.locator('body').innerText().catch(() => 'Page closed during capture');
    await writeFile(join(directory, 'failure.txt'), body);
  }
} finally {
  await close().catch(error => { result.cleanupError = String(error); result.status = 'failed'; process.exitCode = 1; });
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
