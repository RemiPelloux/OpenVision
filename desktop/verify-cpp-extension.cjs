// Native public API driver. Diagnostics and edits come from the actual clangd provider.
const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');

async function until(probe, label) {
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) { const result = await probe(); if (result) return result;
    await new Promise(resolve => setTimeout(resolve, 250)); }
  throw new Error(`Timed out: ${label}`);
}
async function open(project, name) {
  const doc = await vscode.workspace.openTextDocument(vscode.Uri.file(path.join(project, name)));
  await vscode.window.showTextDocument(doc); return doc;
}
async function diagnostic(project, name, checks) {
  const doc = await open(project, name);
  const errors = await until(() => {
    const values = vscode.languages.getDiagnostics(doc.uri).filter(item => item.severity === 0);
    return values.some(item => /incompatible|cannot initialize/i.test(item.message)) && values;
  }, `${name} diagnostic`);
  checks[`${name}_diagnostic`] = errors.map(item => ({ source: item.source, message: item.message, code: item.code }));
  const before = doc.getText(), offset = before.indexOf('"invalid"');
  const edit = new vscode.WorkspaceEdit();
  edit.replace(doc.uri, new vscode.Range(doc.positionAt(offset), doc.positionAt(offset + 9)), '42');
  assert.equal(await vscode.workspace.applyEdit(edit), true);
  await until(() => !vscode.languages.getDiagnostics(doc.uri).some(item => item.severity === 0), 'diagnostic clears');
  assert.equal(await doc.save(), true);
  assert.equal(await fs.readFile(doc.uri.fsPath, 'utf8'), before.replace('"invalid"', '42'));
  await vscode.commands.executeCommand('undo');
  await until(() => vscode.languages.getDiagnostics(doc.uri).some(item => item.severity === 0), 'undo restores diagnostic');
  await vscode.commands.executeCommand('redo');
  assert.equal(await doc.save(), true);
  checks[`${name}_edit_undo_redo`] = true;
}
async function navigation(project, checks) {
  const doc = await open(project, 'main.cpp');
  const position = doc.positionAt(doc.getText().indexOf('sum'));
  const definitions = await until(async () => {
    const items = await vscode.commands.executeCommand('vscode.executeDefinitionProvider', doc.uri, position);
    return items?.length && items;
  }, 'C++ cross-file definition');
  const destination = item => (item.targetUri ?? item.uri).fsPath;
  assert.ok(definitions.some(item => /math\.(cpp|hpp)$/.test(destination(item))));
  checks.definition = definitions.map(destination);
  vscode.window.activeTextEditor.selection = new vscode.Selection(position, position);
  await vscode.commands.executeCommand('editor.action.revealDefinition');
  await until(() => /math\.(cpp|hpp)$/.test(vscode.window.activeTextEditor.document.uri.fsPath), 'definition editor');
  checks.definition_editor = vscode.window.activeTextEditor.document.uri.fsPath;
  const references = await until(async () => {
    const items = await vscode.commands.executeCommand('vscode.executeReferenceProvider', doc.uri, position);
    return new Set(items?.map(item => item.uri.fsPath)).size >= 3 && items;
  }, 'indexed C++ references');
  checks.references = references.map(item => ({ file: item.uri.fsPath, line: item.range.start.line }));
  const header = await open(project, 'math.hpp');
  const edit = await vscode.commands.executeCommand('vscode.executeDocumentRenameProvider', header.uri,
    header.positionAt(header.getText().indexOf('sum')), 'total');
  assert.ok(edit instanceof vscode.WorkspaceEdit);
  checks.rename_edits = edit.entries().map(([uri, edits]) => ({ uri: uri.toString(), edits }));
  assert.deepEqual(edit.entries().map(([uri]) => path.basename(uri.fsPath)).sort(), ['main.cpp', 'math.cpp', 'math.hpp']);
  const original = Object.fromEntries(await Promise.all(edit.entries().map(async ([uri]) => [uri.fsPath, await fs.readFile(uri.fsPath, 'utf8')])));
  assert.equal(await vscode.workspace.applyEdit(edit), true);
  assert.equal(await vscode.workspace.saveAll(false), true);
  for (const [file, before] of Object.entries(original)) assert.equal(await fs.readFile(file, 'utf8'), before.replaceAll('sum', 'total'));
  checks.three_file_rename_saved = true;
  await vscode.commands.executeCommand('undo');
  assert.equal(await vscode.workspace.saveAll(false), true);
  for (const [file, before] of Object.entries(original)) assert.equal(await fs.readFile(file, 'utf8'), before);
  await vscode.commands.executeCommand('redo');
  assert.equal(await vscode.workspace.saveAll(false), true);
  for (const [file, before] of Object.entries(original)) assert.equal(await fs.readFile(file, 'utf8'), before.replaceAll('sum', 'total'));
  checks.rename_undo_redo = true;
}

async function completion(project, checks) {
  for (const name of ['complete.cpp', 'complete.c']) {
    const doc = await open(project, name);
    const position = doc.positionAt(doc.getText().lastIndexOf('add') + 3);
    const items = await until(async () => {
      const list = await vscode.commands.executeCommand('vscode.executeCompletionItemProvider', doc.uri, position);
      const matches = list?.items.filter(item => (typeof item.label === 'string' ? item.label : item.label.label).includes('addNumbers'));
      return matches?.length && matches;
    }, `${name} completion`);
    checks[`${name}_completion`] = items.map(item => item.label);
  }
}
async function format(project, checks) {
  for (const name of ['format.cpp', 'format.c']) {
    const doc = await open(project, name), before = doc.getText();
    await until(async () => {
      const edits = await vscode.commands.executeCommand('vscode.executeFormatDocumentProvider', doc.uri, { tabSize: 2, insertSpaces: true });
      return edits?.length;
    }, 'formatter ready');
    await vscode.commands.executeCommand('editor.action.formatDocument');
    assert.notEqual(doc.getText(), before);
    assert.equal(await doc.save(), true);
    await vscode.commands.executeCommand('undo');
    assert.equal(doc.getText(), before);
    await vscode.commands.executeCommand('redo');
    assert.equal(await doc.save(), true);
    checks[`${name}_format_undo_redo`] = true;
  }
}
async function run() {
  const project = vscode.workspace.workspaceFolders[0].uri.fsPath;
  const result = { checks: {}, started: new Date().toISOString(), api: vscode.version };
  try {
    const extension = vscode.extensions.getExtension('llvm-vs-code-extensions.vscode-clangd');
    assert.ok(extension); await extension.activate();
    result.extension = { id: extension.id, version: extension.packageJSON.version };
    await diagnostic(project, 'bad.cpp', result.checks);
    await diagnostic(project, 'bad.c', result.checks);
    await navigation(project, result.checks);
    await format(project, result.checks);
    await completion(project, result.checks);
    result.success = true;
  } catch (error) { result.success = false; result.failure = error.stack; }
  result.finished = new Date().toISOString();
  await fs.writeFile(path.join(path.dirname(project), 'extension-result.json'), JSON.stringify(result, null, 2));
}
exports.activate = () => { void run(); };
