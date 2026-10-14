const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');

async function publish(directory, name, value) {
  const temporary = path.join(directory, `${name}.tmp`);
  await fs.writeFile(temporary, JSON.stringify(value));
  await fs.rename(temporary, path.join(directory, name));
}

// Declared fixture driver: observe the real extension-host watcher, without replacing it.
exports.activate = async context => {
  const directory = path.dirname(context.extensionPath);
  const project = vscode.workspace.workspaceFolders[0].uri;
  const events = [], eventLimit = 1000;
  const watcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(project, '**/*.txt'));
  let pending = Promise.resolve(), failed;
  const record = type => uri => {
    if (events.length >= eventLimit) { failed = 'Native watcher exceeded the fixture event limit'; return; }
    const entry = { type, relative: path.relative(project.fsPath, uri.fsPath), at: Date.now() };
    events.push(entry);
    pending = pending.then(() => fs.appendFile(path.join(directory, 'events.jsonl'), JSON.stringify(entry) + '\n'));
    pending.catch(error => { failed = error.stack; });
  };
  context.subscriptions.push(watcher, watcher.onDidCreate(record('create')),
    watcher.onDidChange(record('change')), watcher.onDidDelete(record('delete')));
  await publish(directory, 'ready.json', { pid: process.pid });
  let busy = false;
  const timer = setInterval(async () => {
    if (busy) return;
    busy = true;
    try {
      const requested = await fs.readFile(path.join(directory, 'finish.json'), 'utf8').catch(error => {
        if (error.code !== 'ENOENT') throw error;
      });
      if (!requested) return;
      clearInterval(timer);
      const config = JSON.parse(requested), result = { events, checks: {} };
      if (config.link) {
        const document = await vscode.workspace.openTextDocument(vscode.Uri.file(config.link));
        await vscode.window.showTextDocument(document);
        assert.equal(document.getText(), 'Original file symlink target\n');
        const edit = new vscode.WorkspaceEdit();
        edit.replace(document.uri, new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length)),
          'Saved through file symlink\n');
        assert.equal(await vscode.workspace.applyEdit(edit), true);
        assert.equal(await document.save(), true);
        assert.equal(await fs.readFile(config.target, 'utf8'), 'Saved through file symlink\n');
        assert.equal((await fs.lstat(config.link)).isSymbolicLink(), true);
        result.checks.native_file_symlink_save_preserves_link_and_target = true;
      }
      watcher.dispose();
      await pending;
      result.error = failed;
      await publish(directory, 'extension-result.json', result);
    } catch (error) {
      clearInterval(timer);
      watcher.dispose();
      await publish(directory, 'extension-result.json', { error: error.stack });
    } finally { busy = false; }
  }, 100);
  context.subscriptions.push({ dispose: () => clearInterval(timer) });
};
