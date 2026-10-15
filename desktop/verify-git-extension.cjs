// Uses the shipped Git extension and real Git executable, never a mock provider.
const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

async function until(probe, description) {
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) { if (await probe()) return; await pause(200); }
  throw new Error(`Timed out: ${description}`);
}
async function checkpoint(directory, phase, wait = false) {
  await fs.writeFile(path.join(directory, 'phase.json'), JSON.stringify({ phase }));
  if (wait) await until(() => fs.stat(path.join(directory, `${phase}.continue`)).then(() => true, () => false), phase);
}
async function replace(project, name, text) {
  const document = await vscode.workspace.openTextDocument(vscode.Uri.file(path.join(project, name)));
  // Git rewrites files on checkout; wait for the file watcher to refresh a
  // clean document so the edit cannot race into a save conflict.
  const deadline = Date.now() + 10000;
  while (!document.isDirty && document.getText() !== await fs.readFile(path.join(project, name), 'utf8') && Date.now() < deadline)
    await new Promise(resolve => setTimeout(resolve, 50));
  const editor = await vscode.window.showTextDocument(document);
  assert.equal(await editor.edit(builder => builder.replace(new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length)), text)), true);
  assert.equal(await document.save(), true);
  return document;
}
async function commit(repo, project, text) {
  await repo.add([path.join(project, 'conflict.txt')]); await repo.commit(text);
}
async function preserved(project) {
  assert.equal(await fs.readFile(path.join(project, 'keep.txt'), 'utf8'), 'Dirty retained — café 日本語\n');
  assert.equal(await fs.readFile(path.join(project, 'untracked.txt'), 'utf8'), 'Untracked retained\n');
}

async function branches(repo, api, project, directory, result) {
  await repo.createBranch('codex/feature', true);
  assert.equal(repo.state.HEAD.name, 'codex/feature');
  await replace(project, 'conflict.txt', 'feature version\n'); await commit(repo, project, 'feature fixture');
  await repo.checkout('main');
  await replace(project, 'conflict.txt', 'main version\n'); await commit(repo, project, 'main fixture');
  await replace(project, 'keep.txt', 'Dirty retained — café 日本語\n');
  await fs.writeFile(path.join(project, 'untracked.txt'), 'Untracked retained\n');
  await replace(project, 'conflict.txt', 'Uncommitted conflicting edit\n');
  await assert.rejects(repo.checkout('codex/feature'));
  assert.equal(repo.state.HEAD.name, 'main');
  assert.equal(await fs.readFile(path.join(project, 'conflict.txt'), 'utf8'), 'Uncommitted conflicting edit\n');
  await preserved(project);
  result.checks.checkout_rejection_preserves_dirty_and_untracked = true;
  await replace(project, 'conflict.txt', 'main version\n');
  const keep = vscode.Uri.file(path.join(project, 'keep.txt'));
  const diff = await repo.diffWithHEAD('keep.txt');
  assert.ok(diff.includes('+Dirty retained — café 日本語'));
  await vscode.commands.executeCommand('vscode.diff', api.toGitUri(keep, 'HEAD'), keep, 'OpenVision Git Diff Fixture');
  await checkpoint(directory, 'diff-review', true);
  result.checks.native_diff_review = true;
  const lock = path.join(project, '.git/index.lock');
  await fs.writeFile(lock, 'owned-verification-lock', { flag: 'wx' });
  try {
    await assert.rejects(repo.add([path.join(project, 'keep.txt')]));
    assert.equal(await fs.readFile(lock, 'utf8'), 'owned-verification-lock');
    await preserved(project);
    result.checks.lock_failure_preserves_work = true;
  } finally { await fs.unlink(lock); }
}

async function worktrees(repo, api, project, directory, result) {
  const worktree = path.join(directory, 'owned-worktree');
  await checkpoint(directory, 'create-worktree');
  await vscode.commands.executeCommand('git.createWorktree', repo.rootUri);
  assert.equal(await fs.readFile(path.join(worktree, 'conflict.txt'), 'utf8'), 'feature version\n');
  result.checks.native_worktree_created = true;
  await fs.writeFile(path.join(worktree, 'conflict.txt'), 'feature version\nworktree edit\n');
  await fs.writeFile(path.join(worktree, 'worktree-note.txt'), 'Untracked worktree data\n');
  assert.equal(await fs.readFile(path.join(project, 'conflict.txt'), 'utf8'), 'main version\n');
  await assert.rejects(fs.stat(path.join(project, 'worktree-note.txt')), { code: 'ENOENT' });
  result.checks.worktree_edits_isolated_from_main = true;
  await checkpoint(directory, 'decline-dirty-delete');
  await vscode.commands.executeCommand('git.deleteWorktreeFromPalette', repo.rootUri);
  assert.equal(await fs.readFile(path.join(worktree, 'conflict.txt'), 'utf8'), 'feature version\nworktree edit\n');
  assert.equal(await fs.readFile(path.join(worktree, 'worktree-note.txt'), 'utf8'), 'Untracked worktree data\n');
  result.checks.declined_delete_preserves_dirty_worktree = true;
  const added = new Promise(resolve => {
    const listener = vscode.workspace.onDidChangeWorkspaceFolders(event => {
      if (event.added.some(folder => folder.uri.fsPath === worktree)) { listener.dispose(); resolve(); }
    });
  });
  assert.equal(vscode.workspace.updateWorkspaceFolders(vscode.workspace.workspaceFolders.length, 0,
    { uri: vscode.Uri.file(worktree), name: 'owned-worktree' }), true);
  await added;
  const other = await api.openRepository(vscode.Uri.file(worktree)); assert.ok(other);
  await other.add([path.join(worktree, 'conflict.txt'), path.join(worktree, 'worktree-note.txt')]);
  await other.commit('preserve worktree fixture changes');
  await checkpoint(directory, 'delete-clean-worktree');
  await vscode.commands.executeCommand('git.deleteWorktreeFromPalette', repo.rootUri);
  await assert.rejects(fs.stat(worktree), { code: 'ENOENT' });
  await preserved(project);
  result.checks.clean_selected_worktree_deleted = true;
}

async function conflict(repo, project, directory, result) {
  await assert.rejects(repo.merge('codex/feature'));
  await repo.status(); assert.equal(repo.state.mergeChanges.length, 1);
  const text = await fs.readFile(path.join(project, 'conflict.txt'), 'utf8');
  assert.ok(text.includes('<<<<<<< HEAD') && text.includes('main version') && text.includes('feature version'));
  await preserved(project);
  result.checks.native_merge_conflict = true;
  await fs.writeFile(path.join(directory, 'before-restart.json'), JSON.stringify(result, null, 2));
  await checkpoint(directory, 'restart-unresolved-merge', true);
}

async function resume(repo, project, directory, result) {
  await repo.status(); assert.equal(repo.state.mergeChanges.length, 1);
  await preserved(project);
  result.checks.restart_retains_conflict_dirty_and_untracked = true;
  await vscode.window.showTextDocument(await vscode.workspace.openTextDocument(vscode.Uri.file(path.join(project, 'conflict.txt'))));
  await checkpoint(directory, 'resolve-conflict', true);
  const document = await vscode.workspace.openTextDocument(vscode.Uri.file(path.join(project, 'conflict.txt')));
  assert.equal(await document.save(), true);
  const text = await fs.readFile(document.uri.fsPath, 'utf8');
  assert.equal(text, 'main version\nfeature version\nworktree edit\n');
  await commit(repo, project, 'resolve native conflict');
  await repo.status(); assert.equal(repo.state.mergeChanges.length, 0);
  await assert.rejects(fs.stat(path.join(project, '.git/MERGE_HEAD')), { code: 'ENOENT' });
  await preserved(project);
  result.checks.native_conflict_resolution_committed = true;
}

async function run() {
  const project = vscode.workspace.workspaceFolders[0].uri.fsPath, directory = path.dirname(project);
  let result = { checks: {}, started: new Date().toISOString() };
  try {
    const extension = vscode.extensions.getExtension('vscode.git'); assert.ok(extension);
    await extension.activate(); const api = extension.exports.getAPI(1);
    const repo = await api.openRepository(vscode.Uri.file(project)); assert.ok(repo);
    result.extension = { id: extension.id, version: extension.packageJSON.version, git: api.git.path };
    if (await fs.stat(path.join(directory, 'resume')).then(() => true, () => false)) {
      result = JSON.parse(await fs.readFile(path.join(directory, 'before-restart.json'), 'utf8'));
      await resume(repo, project, directory, result);
    } else {
      await branches(repo, api, project, directory, result);
      await worktrees(repo, api, project, directory, result);
      await conflict(repo, project, directory, result);
    }
    result.success = true;
  } catch (error) { result.success = false; result.failure = error.stack; }
  result.finished = new Date().toISOString();
  await fs.writeFile(path.join(directory, 'extension-result.json'), JSON.stringify(result, null, 2));
}
exports.activate = () => { void run(); };
