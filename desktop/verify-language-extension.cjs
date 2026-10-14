// Disposable verification extension. Uses the shipped TypeScript service through
// public VS Code commands; it never registers or replaces a language provider.
const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const digest = text => crypto.createHash('sha256').update(text).digest('hex');
async function until(probe, description) {
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    const value = await probe();
    if (value) return value;
    await pause(250);
  }
  throw new Error(`Timed out: ${description}`);
}

async function snapshot(project, names) {
  const entries = await Promise.all(names.map(async name => {
    const content = await fs.readFile(path.join(project, name), 'utf8');
    return [name, { content, sha256: digest(content) }];
  }));
  return Object.fromEntries(entries);
}

function location(item) {
  const uri = item.targetUri || item.uri;
  const range = item.targetSelectionRange || item.range;
  return { path: uri.fsPath, line: range.start.line, character: range.start.character };
}

async function open(project, name) {
  const doc = await vscode.workspace.openTextDocument(vscode.Uri.file(path.join(project, name)));
  await vscode.window.showTextDocument(doc);
  return doc;
}

async function saveAffected() {
  assert.equal(await vscode.workspace.saveAll(false), true);
}

async function diagnostics(project, result) {
  for (const name of ['consumer.ts', 'checked.js']) {
    const doc = await open(project, name);
    const errors = await until(() => {
      const all = vscode.languages.getDiagnostics(doc.uri);
      return all.some(item => item.code === 2322) && all;
    }, `${name} TypeScript diagnostic 2322`);
    result.checks[`${name}_diagnostics`] = errors.map(item => ({ message: item.message,
      code: item.code, source: item.source, severity: item.severity,
      line: item.range.start.line, character: item.range.start.character }));
    assert.ok(errors.some(item => item.source === 'ts' && item.severity === vscode.DiagnosticSeverity.Error));
    const original = doc.getText();
    const literal = name === 'consumer.ts' ? '"diagnostic fixture"' : '"JavaScript diagnostic"';
    const start = original.indexOf(literal);
    const changes = [];
    const listener = vscode.workspace.onDidChangeTextDocument(event => {
      if (event.document === doc) changes.push(...event.contentChanges.map(change => ({
        offset: change.rangeOffset, removed: change.rangeLength, inserted: change.text.length })));
    });
    try {
      assert.equal(await vscode.window.activeTextEditor.edit(builder => builder.replace(
        new vscode.Range(doc.positionAt(start), doc.positionAt(start + literal.length)), '42')), true);
      await until(() => !vscode.languages.getDiagnostics(doc.uri).some(item => item.code === 2322), 'diagnostic cleared after edit');
      assert.equal(await doc.save(), true);
      assert.equal(await fs.readFile(doc.uri.fsPath, 'utf8'), original.replace(literal, '42'));
      await vscode.commands.executeCommand('undo');
      await until(() => vscode.languages.getDiagnostics(doc.uri).some(item => item.code === 2322), 'diagnostic restored after undo');
      assert.equal(await doc.save(), true);
      assert.equal(await fs.readFile(doc.uri.fsPath, 'utf8'), original);
      assert.ok(changes.every(change => change.removed < original.length));
      result.checks[`${name}_incremental_diagnostics`] = { changes, restored_sha256: digest(original) };
    } finally { listener.dispose(); }
  }
}

async function saveConflict(project, result) {
  const doc = await open(project, 'conflict.ts');
  const original = doc.getText();
  assert.equal(await vscode.window.activeTextEditor.edit(builder => builder.insert(new vscode.Position(0, 0),
    '// unsaved local edit\n')), true);
  // Ensure the external version has distinct metadata as well as content.
  await pause(1100);
  const external = '// external writer\n' + original;
  await fs.writeFile(doc.uri.fsPath, external);
  const saved = await doc.save();
  assert.equal(saved, false, 'conflicting save must report failure');
  assert.equal(await fs.readFile(doc.uri.fsPath, 'utf8'), external, 'save must preserve external bytes');
  assert.ok(doc.isDirty && doc.getText().startsWith('// unsaved local edit'));
  result.checks.conflicting_save = { saved, retained_dirty_buffer: true, external_sha256: digest(external) };
  await vscode.commands.executeCommand('workbench.action.files.revert');
  await until(() => !doc.isDirty && doc.getText() === external, 'revert loads preserved external version');
  result.checks.conflict_revert = true;
}

async function navigation(project, result) {
  const doc = await open(project, 'consumer.ts');
  const position = doc.positionAt(doc.getText().lastIndexOf('greet'));
  const definitions = await until(async () => {
    const items = await vscode.commands.executeCommand('vscode.executeDefinitionProvider', doc.uri, position);
    return items?.length && items;
  }, 'cross-file definition');
  const references = await vscode.commands.executeCommand('vscode.executeReferenceProvider', doc.uri, position);
  const expected = path.join(project, 'library.ts');
  assert.ok(definitions.map(location).some(item => item.path === expected && item.line === 0));
  assert.deepEqual([...new Set(references.map(item => path.basename(item.uri.fsPath)))].sort(),
    ['consumer.ts', 'library.ts', 'other.ts']);
  result.checks.definition = definitions.map(location);
  result.checks.references = references.map(location);
  // Exercise the user-facing native navigation command, not just its provider.
  vscode.window.activeTextEditor.selection = new vscode.Selection(position, position);
  await vscode.commands.executeCommand('editor.action.revealDefinition');
  await until(() => vscode.window.activeTextEditor?.document.uri.fsPath === expected, 'definition editor');
  result.checks.definition_editor = vscode.window.activeTextEditor.document.uri.fsPath;
}

async function rename(project, result) {
  const names = ['library.ts', 'consumer.ts', 'other.ts'];
  const original = await snapshot(project, names);
  const doc = await open(project, 'library.ts');
  const position = doc.positionAt(doc.getText().lastIndexOf('greet'));
  const edit = await vscode.commands.executeCommand('vscode.executeDocumentRenameProvider', doc.uri, position, 'welcome');
  assert.ok(edit instanceof vscode.WorkspaceEdit);
  const affected = edit.entries().map(([uri, edits]) => ({ path: uri.fsPath, edits: edits.length }));
  assert.deepEqual(affected.map(item => path.basename(item.path)).sort(), ['consumer.ts', 'library.ts', 'other.ts']);
  assert.equal(await vscode.workspace.applyEdit(edit), true);
  await saveAffected();
  result.checks.rename = { affected, files: await snapshot(project, names) };
  for (const name of names) assert.equal(result.checks.rename.files[name].content,
    original[name].content.replaceAll('greet', 'welcome'));
  await vscode.commands.executeCommand('undo');
  await saveAffected();
  result.checks.rename_undo = await snapshot(project, names);
  assert.deepEqual(result.checks.rename_undo, original);
  await vscode.commands.executeCommand('redo');
  await saveAffected();
  assert.deepEqual(await snapshot(project, names), result.checks.rename.files);
  result.checks.rename_redo = true;
}

async function formatting(project, result) {
  for (const name of ['format.ts', 'format.js']) {
    const doc = await open(project, name);
    const before = doc.getText();
    await vscode.commands.executeCommand('editor.action.formatDocument');
    assert.notEqual(doc.getText(), before, `${name} formatter must change the fixture`);
    assert.ok(doc.getText().includes(' = '), 'formatter must insert operator spacing');
    await doc.save();
    const formatted = await snapshot(project, [name]);
    await vscode.commands.executeCommand('undo');
    await doc.save();
    assert.equal(await fs.readFile(doc.uri.fsPath, 'utf8'), before);
    await vscode.commands.executeCommand('redo');
    await doc.save();
    assert.deepEqual(await snapshot(project, [name]), formatted);
    result.checks[`${name}_format_undo_redo`] = formatted[name];
  }
}

async function largeFile(project, result) {
  const doc = await open(project, 'large.ts');
  const position = doc.positionAt(doc.getText().lastIndexOf('welcome'));
  const started = Date.now();
  const definitions = await until(async () => {
    const items = await vscode.commands.executeCommand('vscode.executeDefinitionProvider', doc.uri, position);
    return items?.length && items;
  }, 'large TypeScript file definition');
  assert.ok(definitions.map(location).some(item => item.path === path.join(project, 'library.ts')));
  result.checks.large_file_definition = { lines: doc.lineCount, bytes: Buffer.byteLength(doc.getText()),
    elapsed_ms: Date.now() - started, definitions: definitions.map(location) };
}

async function run(context) {
  const project = vscode.workspace.workspaceFolders[0].uri.fsPath;
  const destination = path.join(path.dirname(project), 'extension-result.json');
  const result = { started_at: new Date().toISOString(), checks: {}, api: vscode.version,
    fixture: 'native public VS Code API driver; shipped language providers, no mocks' };
  try {
    const ts = vscode.extensions.getExtension('vscode.typescript-language-features');
    assert.ok(ts, 'shipped TypeScript extension must exist');
    await ts.activate();
    result.extension = { id: ts.id, version: ts.packageJSON.version, path: ts.extensionPath };
    await diagnostics(project, result);
    await navigation(project, result);
    await rename(project, result);
    await formatting(project, result);
    await largeFile(project, result);
    await saveConflict(project, result);
    result.success = true;
  } catch (error) {
    result.success = false;
    result.failure = error.stack;
  }
  result.finished_at = new Date().toISOString();
  await fs.writeFile(destination, JSON.stringify(result, null, 2));
}

exports.activate = context => { void run(context); };
