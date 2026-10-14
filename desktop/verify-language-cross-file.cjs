// Shared native driver for additional JavaScript and C matrix entries.
// Calls the installed provider; never registers replacement language services.
const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');

async function until(probe, label) {
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    const value = await probe();
    if (value) return value;
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error(`Timed out: ${label}`);
}

async function contents(project, names) {
  return Object.fromEntries(await Promise.all(names.map(async name =>
    [name, await fs.readFile(path.join(project, name), 'utf8')])));
}

async function verifyCrossFile(project, spec, checks) {
  const { names, symbol, renamed, language } = spec;
  const documents = await Promise.all(names.map(name =>
    vscode.workspace.openTextDocument(vscode.Uri.file(path.join(project, name)))));
  const before = await contents(project, names);
  const editors = [];
  for (let index = 0; index < 2; index++) editors.push(await vscode.window.showTextDocument(documents[index],
    { viewColumn: index ? vscode.ViewColumn.Two : vscode.ViewColumn.One, preserveFocus: false }));
  const events = [];
  const listener = vscode.workspace.onDidChangeTextDocument(event => {
    if (documents.includes(event.document)) events.push({ file: path.basename(event.document.uri.fsPath),
      version: event.document.version, changes: event.contentChanges.map(change => ({
        offset: change.rangeOffset, removed: change.rangeLength, inserted: change.text.length })) });
  });
  try {
    const insertions = editors.map((editor, index) => editor.edit(builder =>
      builder.insert(new vscode.Position(0, 0), `// concurrent ${language} edit ${index}\n`)));
    assert.deepEqual(await Promise.all(insertions), [true, true]);
    assert.equal(await vscode.workspace.saveAll(false), true);
    const edited = await contents(project, names);
    for (let index = 0; index < names.length; index++) assert.equal(edited[names[index]],
      (index < 2 ? `// concurrent ${language} edit ${index}\n` : '') + before[names[index]]);
    checks[`${language}_concurrent_documents_incremental`] = { events: [...events], exact_saved_bytes: true };
    assert.ok(events.length >= 2 && events.every(event => event.changes.every(change => change.removed === 0)),
      'Concurrent edits must remain insertions rather than full-buffer replacements');
    await navigationAndRename(project, spec, documents, edited, checks);
  } finally { listener.dispose(); }
}

async function navigationAndRename(project, spec, documents, original, checks) {
  const { names, symbol, renamed, language } = spec;
  const doc = documents.at(-1), position = doc.positionAt(doc.getText().lastIndexOf(symbol));
  const definitions = await until(async () => {
    const result = await vscode.commands.executeCommand('vscode.executeDefinitionProvider', doc.uri, position);
    return result?.length && result;
  }, `${language} definition after concurrent edits`);
  const destination = item => path.basename((item.targetUri ?? item.uri).fsPath);
  assert.ok(definitions.some(item => names.slice(0, -1).includes(destination(item))));
  const references = await until(async () => {
    const result = await vscode.commands.executeCommand('vscode.executeReferenceProvider', doc.uri, position);
    return new Set(result?.map(item => path.basename(item.uri.fsPath))).size === names.length && result;
  }, `${language} cross-file references`);
  assert.deepEqual([...new Set(references.map(item => path.basename(item.uri.fsPath)))].sort(), [...names].sort());
  checks[`${language}_cross_file_navigation`] = { definitions: definitions.map(destination),
    references: references.map(item => ({ file: path.basename(item.uri.fsPath), line: item.range.start.line })) };
  const editor = await vscode.window.showTextDocument(doc, vscode.ViewColumn.One);
  editor.selection = new vscode.Selection(position, position);
  await vscode.commands.executeCommand('editor.action.revealDefinition');
  await until(() => names.slice(0, -1).includes(path.basename(vscode.window.activeTextEditor.document.uri.fsPath)),
    `${language} native definition editor`);
  const declaration = documents[0];
  await vscode.window.showTextDocument(declaration, vscode.ViewColumn.One);
  const edit = await vscode.commands.executeCommand('vscode.executeDocumentRenameProvider', declaration.uri,
    declaration.positionAt(declaration.getText().indexOf(symbol)), renamed);
  assert.ok(edit instanceof vscode.WorkspaceEdit);
  assert.deepEqual(edit.entries().map(([uri]) => path.basename(uri.fsPath)).sort(), [...names].sort());
  assert.equal(await vscode.workspace.applyEdit(edit), true);
  assert.equal(await vscode.workspace.saveAll(false), true);
  const after = await contents(project, names);
  for (const name of names) assert.equal(after[name], original[name].replaceAll(symbol, renamed));
  await vscode.commands.executeCommand('undo');
  assert.equal(await vscode.workspace.saveAll(false), true);
  assert.deepEqual(await contents(project, names), original);
  await vscode.commands.executeCommand('redo');
  assert.equal(await vscode.workspace.saveAll(false), true);
  assert.deepEqual(await contents(project, names), after);
  checks[`${language}_cross_file_rename_save_undo_redo`] = { files: names, preserved_concurrent_edits: true };
}

module.exports = { verifyCrossFile };
