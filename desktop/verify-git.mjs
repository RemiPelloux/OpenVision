import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile, copyFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

const root = resolve(import.meta.dirname, '..'), { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/git-verification-'));
const abrupt = process.argv.includes('--abrupt');
const project = join(directory, 'project'), profile = join(directory, 'profile'), driver = join(directory, 'driver');
const owned = join(directory, 'owned-worktree'), keeper = join(directory, 'keeper-worktree');
const workspace = join(directory, 'fixture.code-workspace');
await Promise.all([mkdir(project), mkdir(join(profile, 'User'), { recursive: true }), mkdir(driver)]);
await writeFile(workspace, JSON.stringify({ folders: [{ path: project }] }));
const git = (...args) => execFileSync('git', ['-C', project, ...args], { encoding: 'utf8', windowsHide: true });
git('init', '--initial-branch=main');
for (const [key, value] of [['user.name', 'OpenVision Fixture'], ['user.email', 'fixture@example.invalid'],
  ['commit.gpgsign', 'false'], ['core.autocrlf', 'false']]) git('config', '--local', key, value);
await writeFile(join(project, 'conflict.txt'), 'base version\n');
await writeFile(join(project, 'keep.txt'), 'Clean baseline\n');
git('add', '.'); git('commit', '-m', 'initial fixture');
git('worktree', 'add', '-b', 'codex/keeper', keeper);
await writeFile(join(keeper, 'keeper-only.txt'), 'Never delete this other worktree\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'git.autoRepositoryDetection': false,
  'git.autofetch': false, 'git.confirmSync': true, 'git.confirmForcePush': true,
  'git.enableSmartCommit': false, 'git.openDiffOnClick': true, 'git.mergeEditor': false,
  'git.showProgress': false, 'window.dialogStyle': 'custom', 'files.eol': '\n', 'files.autoSave': 'off',
  'merge-conflict.codeLens.enabled': true, 'editor.codeLens': true, 'window.restoreWindows': 'all' }));
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'openvision-git-verifier', publisher: 'openvision-local-verification',
  version: '0.0.0', engines: { vscode: '^1.90.0' }, main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/verify-git-extension.cjs'), join(driver, 'extension.cjs'));
const result = { directory, abrupt, platform: process.platform, git: git('--version').trim(), checks: {}, hostExits: [], errors: [],
  workbench: await fileHash(join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js')),
  gitExtension: await fileHash(join(root, 'source/app/extensions/git/dist/main.js')),
  scope: 'Native Git extension API plus real worktree/diff/conflict UI in disposable local repositories; no remote or AI calls.' };
let app, page;
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--extensionDevelopmentPath', driver,
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', workspace] });
  page = await app.firstWindow(); page.setDefaultTimeout(30000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 }); await enterWorkspace(page);
}
async function close() {
  if (!app) return;
  const child = app.process(); await app.close(); app = undefined;
  result.hostExits.push({ pid: child.pid, code: child.exitCode }); assert.equal(child.exitCode, 0);
}
async function interrupt() {
  if (!abrupt) return close();
  const child = app.process();
  const exited = once(child, 'exit');
  // Exit only the verifier-owned main process through its existing Inspector
  // connection. This bypasses normal application quit handlers and hot-exit saves.
  await app.evaluate(() => process.exit(23)).catch(() => {});
  const [code] = await exited;
  result.hostExits.push({ pid: child.pid, code, abrupt: true });
  app = undefined;
  // Electron (notably on Windows) can terminate with a fail-fast status when Node exits
  // from this callback. Record the actual status; require an abnormal exit.
  assert.ok(Number.isInteger(code) && code !== 0, 'Owned host must exit abnormally');
}
async function phase(expected) {
  const deadline = Date.now() + 90000;
  while (Date.now() < deadline) {
    const completed = await readFile(join(directory, 'extension-result.json'), 'utf8').catch(error => { if (error.code !== 'ENOENT') throw error; });
    if (completed) throw new Error(`Driver stopped before ${expected}: ${completed}`);
    const current = await readFile(join(directory, 'phase.json'), 'utf8').catch(error => { if (error.code !== 'ENOENT') throw error; });
    if (current && JSON.parse(current).phase === expected) return;
    await page.waitForTimeout(200);
  }
  throw new Error(`Timed out waiting for phase ${expected}`);
}
const proceed = name => writeFile(join(directory, `${name}.continue`), 'continue');
async function selectWorktree() {
  const input = page.locator('.quick-input-widget input[type="text"]');
  await input.waitFor(); await input.fill('owned-worktree');
  await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'owned-worktree' }).first().click();
}
async function worktreeUi() {
  await phase('create-worktree');
  const input = page.locator('.quick-input-widget input[type="text"]');
  await input.waitFor(); await input.fill('codex/feature');
  await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'codex/feature' }).first().click();
  await page.getByPlaceholder('Worktree path', { exact: true }).fill(owned);
  await page.getByPlaceholder('Worktree path', { exact: true }).press('Enter');
  await phase('decline-dirty-delete'); await selectWorktree();
  const dialog = page.locator('.monaco-dialog-box');
  await dialog.getByText(/contains modified or untracked files/).waitFor();
  await dialog.getByRole('button', { name: /Cancel/ }).click();
  await phase('delete-clean-worktree'); await selectWorktree();
}
try {
  await launch();
  await phase('diff-review');
  const diff = page.locator('.monaco-diff-editor').filter({ visible: true });
  await diff.waitFor();
  const text = (await diff.innerText()).replaceAll('\u00a0', ' ');
  assert.ok(text.includes('Clean baseline') && text.includes('Dirty retained'));
  await page.screenshot({ path: join(directory, 'native-diff.png') });
  await proceed('diff-review');
  await worktreeUi();
  await phase('restart-unresolved-merge');
  const before = { conflict: await readFile(join(project, 'conflict.txt'), 'utf8'), mergeHead: git('rev-parse', 'MERGE_HEAD').trim() };
  await interrupt();
  assert.equal(await readFile(join(project, 'conflict.txt'), 'utf8'), before.conflict);
  assert.equal(git('rev-parse', 'MERGE_HEAD').trim(), before.mergeHead);
  await writeFile(join(directory, 'resume'), 'resume');
  await launch();
  await phase('resolve-conflict');
  await page.getByText('Accept Both Changes', { exact: true }).first().click();
  await proceed('resolve-conflict');
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    try { result.native = JSON.parse(await readFile(join(directory, 'extension-result.json'), 'utf8')); break; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await page.waitForTimeout(200);
  }
  assert.equal(result.native?.success, true, result.native?.failure);
  assert.equal(await readFile(join(keeper, 'keeper-only.txt'), 'utf8'), 'Never delete this other worktree\n');
  const worktrees = git('worktree', 'list', '--porcelain');
  assert.ok(worktrees.includes(keeper.replaceAll('\\', '/')) && !worktrees.includes(owned.replaceAll('\\', '/')));
  result.checks.unselected_worktree_preserved = true;
  assert.equal(git('rev-list', '--parents', '-n', '1', 'HEAD').trim().split(' ').length, 3);
  result.checks.merge_commit_has_both_parents = true;
  result.finalStatus = git('status', '--porcelain=v1');
  assert.ok(result.finalStatus.includes(' M keep.txt') && result.finalStatus.includes('?? untracked.txt'));
  assert.deepEqual(result.errors, []); result.success = true;
  await page.screenshot({ path: join(directory, 'resolved-merge.png') });
} catch (error) {
  result.success = false; result.failure = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText().catch(() => 'closed'));
} finally {
  await close().catch(error => { result.cleanupError = String(error); result.success = false; process.exitCode = 1; });
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
