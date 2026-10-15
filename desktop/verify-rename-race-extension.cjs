// A deliberately delayed extension provider probes the real rename adapter and
// native bulk-edit transaction. It does not claim TypeScript provider quality.
const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const original = 'alpha source\n', dependent = 'alpha dependent\n';
const concurrent = '// concurrent edit\n';

async function publish(directory, name, value) {
  const destination = path.join(directory, `${name}.json`);
  await fs.writeFile(`${destination}.tmp`, JSON.stringify(value, null, 2));
  await fs.rename(`${destination}.tmp`, destination);
}

async function replace(document, text) {
  const edit = new vscode.WorkspaceEdit();
  edit.replace(document.uri, new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length)), text);
  assert.equal(await vscode.workspace.applyEdit(edit), true);
}

async function run(context) {
  const project = vscode.workspace.workspaceFolders[0].uri.fsPath, directory = path.dirname(project);
  const result = { checks: {}, calls: [], scope: 'Native rename UI and extension-host/bulk-edit boundary with a controlled delayed provider.' };
  let mode = 'dependency';
  try {
    const source = await vscode.workspace.openTextDocument(path.join(project, 'source.ovrace'));
    const other = await vscode.workspace.openTextDocument(path.join(project, 'dependent.ovrace'));
    const unrelated = await vscode.workspace.openTextDocument(path.join(project, 'unrelated.ovrace'));
    context.subscriptions.push(vscode.languages.registerRenameProvider({ scheme: 'file', pattern: '**/*.ovrace' }, {
      prepareRename: () => new vscode.Range(0, 0, 0, 5),
      async provideRenameEdits(document, position, name, token) {
        const edit = new vscode.WorkspaceEdit();
        for (const doc of [source, other]) {
          const offset = doc.getText().indexOf('alpha');
          edit.replace(doc.uri, new vscode.Range(doc.positionAt(offset), doc.positionAt(offset + 5)), name);
        }
        const call = { mode, name, before: [source.version, other.version], cancelled: false };
        result.calls.push(call);
        const subscription = token.onCancellationRequested(() => { call.cancelled = true; });
        try {
          await publish(directory, 'provider-entered', { mode });
          // Simulates a second extension editing a document while this provider
          // retains ranges computed from the old version. Deliberately ignores
          // cancellation to verify the host discards a late result.
          if (mode !== 'healthy') {
            const changed = mode === 'source' ? source : mode === 'unrelated' ? unrelated : other;
            const mutation = new vscode.WorkspaceEdit();
            mutation.insert(changed.uri, new vscode.Position(0, 0), concurrent);
            assert.equal(await vscode.workspace.applyEdit(mutation), true);
          }
          await delay(150);
          call.after = [source.version, other.version];
          return edit;
        } finally { subscription.dispose(); }
      },
    }));
    for (mode of ['dependency', 'source', 'unrelated', 'healthy']) {
      await replace(source, original); await replace(other, dependent); await replace(unrelated, 'Unrelated original\n');
      await vscode.workspace.saveAll(false);
      const editor = await vscode.window.showTextDocument(source);
      editor.selection = new vscode.Selection(0, 2, 0, 2);
      await publish(directory, 'phase', { mode });
      await vscode.commands.executeCommand('editor.action.rename');
      // The recovered command completes before its asynchronous bulk apply.
      // Observe that UI boundary through document state before asserting bytes.
      await delay(500);
      const observed = { source: source.getText(), dependent: other.getText(), unrelated: unrelated.getText() };
      await publish(directory, `observed-${mode}`, observed);
      if (mode === 'dependency' || mode === 'source') {
        assert.equal(observed.source, (mode === 'source' ? concurrent : '') + original);
        assert.equal(observed.dependent, (mode === 'dependency' ? concurrent : '') + dependent);
        result.checks[`${mode}_change_rejects_entire_stale_rename`] = true;
      } else {
        assert.equal(observed.source, original.replace('alpha', 'renamed'));
        assert.equal(observed.dependent, dependent.replace('alpha', 'renamed'));
        await vscode.workspace.saveAll(false);
        await vscode.commands.executeCommand('undo');
        assert.equal(source.getText(), original); assert.equal(other.getText(), dependent);
        await vscode.commands.executeCommand('redo');
        assert.equal(source.getText(), observed.source); assert.equal(other.getText(), observed.dependent);
        result.checks[`${mode}_rename_undo_redo`] = true;
      }
      assert.equal(observed.unrelated, (mode === 'unrelated' ? concurrent : '') + 'Unrelated original\n');
      await vscode.workspace.saveAll(false);
      assert.equal(await fs.readFile(source.uri.fsPath, 'utf8'), source.getText());
      assert.equal(await fs.readFile(other.uri.fsPath, 'utf8'), other.getText());
    }
    result.success = true;
  } catch (error) { result.success = false; result.error = error.stack; }
  await publish(directory, 'extension-result', result);
}
exports.activate = context => { void run(context); };
