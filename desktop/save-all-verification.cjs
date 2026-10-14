const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');

async function dirty(uri, content) {
  const doc = await vscode.workspace.openTextDocument(uri);
  const edit = new vscode.WorkspaceEdit();
  edit.insert(uri, new vscode.Position(0, 0), content);
  assert.equal(await vscode.workspace.applyEdit(edit), true);
  assert.equal(doc.isDirty, true);
  assert.ok(!vscode.window.tabGroups.all.some(group => group.tabs.some(tab => tab.input?.uri?.toString() === uri.toString())),
    'Fixture must remain absent from editor tabs');
  return doc;
}

function provider() {
  const data = new Map([['/normal', Buffer.from('original\n')], ['/denied', Buffer.from('original\n')]]);
  const counts = new Map();
  const changed = new vscode.EventEmitter();
  const service = { onDidChangeFile: changed.event, watch: () => new vscode.Disposable(() => {}),
    stat(uri) { return { type: vscode.FileType.File, ctime: 1, mtime: 1, size: data.get(uri.path).length }; },
    readFile: uri => data.get(uri.path),
    writeFile(uri, content) {
      counts.set(uri.path, (counts.get(uri.path) ?? 0) + 1);
      if (uri.path === '/denied') throw vscode.FileSystemError.NoPermissions('Verification denies writes');
      data.set(uri.path, Buffer.from(content));
    },
    readDirectory() { return []; }, createDirectory() {}, delete() {}, rename() {},
  };
  return { service, data, counts, dispose: () => changed.dispose() };
}

async function run() {
  const project = vscode.workspace.workspaceFolders[0].uri.fsPath;
  const result = { checks: {}, started: new Date().toISOString() };
  const counts = new Map();
  const listener = vscode.workspace.onWillSaveTextDocument(event => {
    const uri = event.document.uri.toString(); counts.set(uri, (counts.get(uri) ?? 0) + 1);
  });
  const custom = provider();
  const registered = vscode.workspace.registerFileSystemProvider('ovsave', custom.service);
  try {
    const hiddenUri = vscode.Uri.file(path.join(project, 'hidden.txt'));
    const untitledPath = path.join(project, 'associated.txt');
    const untitledUri = vscode.Uri.file(untitledPath).with({ scheme: 'untitled' });
    const hidden = await dirty(hiddenUri, 'hidden edit\n');
    const untitled = await dirty(untitledUri, 'untitled edit\n');
    const customUri = vscode.Uri.parse('ovsave:/normal');
    const customDoc = await dirty(customUri, 'provider edit\n');
    const first = await vscode.workspace.saveAll(false);
    result.checks.first_call = { returned: first, hidden_dirty: hidden.isDirty, untitled_dirty: untitled.isDirty,
      disk: await fs.readFile(hiddenUri.fsPath, 'utf8'), provider: custom.data.get('/normal').toString() };
    assert.equal(first, true);
    assert.equal(result.checks.first_call.disk, 'hidden edit\noriginal\n');
    assert.equal(result.checks.first_call.provider, 'provider edit\noriginal\n');
    assert.equal(hidden.isDirty || customDoc.isDirty, false);
    assert.equal(untitled.isDirty, true);
    await assert.rejects(fs.stat(untitledPath), { code: 'ENOENT' });
    assert.equal(await vscode.workspace.saveAll(true), true);
    assert.equal(await fs.readFile(untitledPath, 'utf8'), 'untitled edit\n');
    assert.equal(await vscode.workspace.saveAll(true), true);
    assert.equal(counts.get(hiddenUri.toString()), 1);
    assert.equal(custom.counts.get('/normal'), 1);
    result.checks.untitled_inclusion_and_no_duplicate_writes = true;
    await dirty(hiddenUri, 'global command edit\n');
    await vscode.commands.executeCommand('workbench.action.files.saveAll');
    assert.equal(await fs.readFile(hiddenUri.fsPath, 'utf8'), 'global command edit\nhidden edit\noriginal\n');
    assert.equal(hidden.isDirty, false);
    result.checks.global_save_all_command_includes_hidden_files = true;
    assert.equal(await fs.readFile(path.join(project, 'unrelated.txt'), 'utf8'), 'untouched\n');
    const denied = await dirty(vscode.Uri.parse('ovsave:/denied'), 'denied edit\n');
    assert.equal(await vscode.workspace.saveAll(false), false);
    assert.equal(denied.isDirty, true);
    assert.equal(custom.data.get('/denied').toString(), 'original\n');
    assert.equal(custom.counts.get('/denied'), 1);
    result.checks.provider_failure_truthful_and_preserved = true;
    // Revert the synthetic failed buffer so the following false result can
    // only be caused by the external conflict, not the earlier denied write.
    await vscode.window.showTextDocument(denied);
    await vscode.commands.executeCommand('workbench.action.files.revert');
    assert.equal(denied.isDirty, false);
    await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
    const conflictUri = vscode.Uri.file(path.join(project, 'conflict.txt'));
    const conflict = await dirty(conflictUri, 'local dirty edit\n');
    await new Promise(resolve => setTimeout(resolve, 1100));
    await fs.writeFile(conflictUri.fsPath, 'external version\n');
    assert.equal(await vscode.workspace.saveAll(false), false);
    assert.equal(await fs.readFile(conflictUri.fsPath, 'utf8'), 'external version\n');
    assert.equal(conflict.isDirty, true);
    result.checks.external_conflict_not_overwritten = true;
    result.save_events = Object.fromEntries(counts);
    result.success = true;
  } catch (error) { result.success = false; result.failure = error.stack; }
  finally { listener.dispose(); registered.dispose(); custom.dispose(); }
  result.finished = new Date().toISOString();
  await fs.writeFile(path.join(path.dirname(project), 'extension-result.json'), JSON.stringify(result, null, 2));
}

exports.activate = () => { void run(); };
