// Disposable OV-402 matrix driver. It calls the bundled language providers
// through public VS Code commands and never replaces them. The only provider it
// registers is a delayed rename probe for the private `.ovconflict` fixture,
// used to reproduce an external-writer race at the extension-host boundary.
const vscode = require('vscode');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { verifyCrossFile } = require('./cross-file.cjs');

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const digest = text => crypto.createHash('sha256').update(text).digest('hex');
let project, directory, result;

async function until(probe, label, timeout = 60000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    const value = await probe();
    if (value) return value;
    await pause(100);
  }
  throw new Error(`Timed out: ${label}`);
}
const file = name => path.join(project, name);
const read = name => fsp.readFile(file(name), 'utf8');
async function contents(names) { return Object.fromEntries(await Promise.all(names.map(async name => [name, await read(name)]))); }
async function publish(name, value) {
  const destination = path.join(directory, `${name}.json`);
  await fsp.writeFile(`${destination}.tmp`, JSON.stringify(value, null, 2));
  await fsp.rename(`${destination}.tmp`, destination);
}
// Markers are absent paths: the launcher locates them in the syscall trace.
function mark(name) { fs.statSync(path.join(directory, `MARK-${name}`), { throwIfNoEntry: false }); }
async function open(name, column = vscode.ViewColumn.One) {
  const doc = await vscode.workspace.openTextDocument(vscode.Uri.file(file(name)));
  await vscode.window.showTextDocument(doc, column);
  return doc;
}
const diagnosticsFor = (doc, match) => vscode.languages.getDiagnostics(doc.uri).filter(match);
const where = item => ({ file: path.basename((item.targetUri ?? item.uri).fsPath),
  line: (item.targetSelectionRange ?? item.range).start.line });

// Event-loop lag of this extension host, sampled continuously and reported per phase.
const lag = { max: 0, samples: [] };
function sampleLag() {
  let last = performance.now();
  const timer = setInterval(() => { const now = performance.now(), late = now - last - 20; last = now;
    lag.max = Math.max(lag.max, late); lag.samples.push(late); }, 20);
  return () => clearInterval(timer);
}
function lagWindow() { lag.max = 0; lag.samples = []; }
function lagSummary() { const s = [...lag.samples].sort((a, b) => a - b);
  return { max_ms: Math.round(lag.max), p95_ms: Math.round(s[Math.floor(s.length * 0.95)] ?? 0), samples: s.length }; }

async function caseRun(language, name, body) {
  const key = `${language}.${name}`;
  try { result.cases[key] = { status: 'pass', ...(await body() ?? {}) }; }
  catch (error) { result.cases[key] = { status: 'fail', error: error.stack }; }
}
function notProvided(language, name, reason) { result.cases[`${language}.${name}`] = { status: 'not-provided', reason }; }

// Edits with the native editor, waits for a diagnostic transition, then undoes it.
async function incrementalDiagnostic(doc, match, needle, replacement, label) {
  const initial = await until(() => { const found = diagnosticsFor(doc, match); return found.length && found; }, `${label} diagnostic`);
  const original = doc.getText(), offset = original.lastIndexOf(needle);
  assert.ok(offset >= 0, `${label} needle`);
  const changes = [];
  const listener = vscode.workspace.onDidChangeTextDocument(event => { if (event.document === doc)
    changes.push(...event.contentChanges.map(change => ({ offset: change.rangeOffset, removed: change.rangeLength, inserted: change.text.length }))); });
  try {
    const editor = await vscode.window.showTextDocument(doc);
    const started = performance.now();
    assert.equal(await editor.edit(builder => builder.replace(new vscode.Range(doc.positionAt(offset),
      doc.positionAt(offset + needle.length)), replacement)), true);
    await until(() => diagnosticsFor(doc, match).length === 0, `${label} diagnostic cleared`);
    const cleared = Math.round(performance.now() - started), restoreStarted = performance.now();
    await vscode.commands.executeCommand('undo');
    await until(() => diagnosticsFor(doc, match).length > 0, `${label} diagnostic restored`);
    assert.equal(doc.getText(), original, `${label} undo restores exact text`);
    assert.ok(changes.length > 0 && changes.every(change => change.removed < original.length && change.inserted < original.length),
      `${label} edits must be bounded ranges, not full-document replacements`);
    return { diagnostics: initial.map(item => ({ message: item.message, code: typeof item.code === 'object' ? item.code.value : item.code,
      source: item.source, severity: item.severity, line: item.range.start.line })), changes,
      clear_ms: cleared, restore_ms: Math.round(performance.now() - restoreStarted) };
  } finally { listener.dispose(); }
}

async function renameUndoRedo(doc, position, newName, names, expectedTransform) {
  const original = await contents(names);
  const edit = await vscode.commands.executeCommand('vscode.executeDocumentRenameProvider', doc.uri, position, newName);
  assert.ok(edit instanceof vscode.WorkspaceEdit, 'rename edit');
  const affected = edit.entries().map(([uri, edits]) => ({ file: path.basename(uri.fsPath), edits: edits.length }));
  assert.equal(await vscode.workspace.applyEdit(edit), true);
  assert.equal(await vscode.workspace.saveAll(false), true);
  const renamed = await contents(names);
  for (const name of names) assert.equal(renamed[name], expectedTransform(name, original[name]), `${name} renamed bytes`);
  await vscode.commands.executeCommand('undo');
  assert.equal(await vscode.workspace.saveAll(false), true);
  assert.deepEqual(await contents(names), original, 'undo restores every renamed file');
  await vscode.commands.executeCommand('redo');
  assert.equal(await vscode.workspace.saveAll(false), true);
  assert.deepEqual(await contents(names), renamed, 'redo restores every renamed file');
  await vscode.commands.executeCommand('undo');
  assert.equal(await vscode.workspace.saveAll(false), true);
  assert.deepEqual(await contents(names), original, 'fixture restored for later cases');
  return { affected, sha256: Object.fromEntries(names.map(name => [name, digest(renamed[name])])) };
}

async function formatUndoRedo(name, expected) {
  const doc = await open(name), before = doc.getText();
  await vscode.commands.executeCommand('editor.action.formatDocument');
  await until(() => doc.getText() !== before, `${name} formatted`, 15000);
  assert.equal(doc.getText(), expected, `${name} exact formatter output`);
  assert.equal(await doc.save(), true);
  assert.equal(await read(name), expected);
  await vscode.commands.executeCommand('undo');
  assert.equal(await doc.save(), true);
  assert.equal(await read(name), before);
  await vscode.commands.executeCommand('redo');
  assert.equal(await doc.save(), true);
  assert.equal(await read(name), expected);
  return { sha256: digest(expected) };
}

async function definitionAndReferences(doc, position, expectDefinition, expectReferences) {
  const definitions = await until(async () => { const items = await vscode.commands.executeCommand(
    'vscode.executeDefinitionProvider', doc.uri, position); return items?.length && items; }, 'definition');
  const references = await until(async () => { const items = await vscode.commands.executeCommand(
    'vscode.executeReferenceProvider', doc.uri, position); return items?.length >= expectReferences.length && items; }, 'references');
  const defs = definitions.map(where), refs = references.map(where);
  assert.ok(defs.some(item => item.file === expectDefinition.file && item.line === expectDefinition.line),
    `definition ${JSON.stringify(defs)}`);
  assert.deepEqual(refs.map(item => `${item.file}:${item.line}`).sort(), [...expectReferences].sort());
  return { definitions: defs, references: refs };
}

async function largeFile(language, name, match, needle, replacement) {
  await caseRun(language, 'large_file', async () => {
    lagWindow();
    const started = performance.now();
    const doc = await open(name);
    const opened = Math.round(performance.now() - started);
    const symbolsStarted = performance.now();
    const symbols = await until(async () => { const items = await vscode.commands.executeCommand(
      'vscode.executeDocumentSymbolProvider', doc.uri); return items?.length && items; }, `${name} symbols`);
    const symbolMs = Math.round(performance.now() - symbolsStarted);
    // Diagnostic only: a second request for the same version (provider cache).
    const repeatStarted = performance.now();
    await vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', doc.uri);
    const symbolsRepeatMs = Math.round(performance.now() - repeatStarted);
    const firstStarted = performance.now();
    await until(() => diagnosticsFor(doc, match).length, `${name} first diagnostic`, 120000);
    const firstDiagnostic = Math.round(performance.now() - firstStarted);
    const incremental = await incrementalDiagnostic(doc, match, needle, replacement, name);
    assert.equal(await doc.save(), true);
    await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
    return { lines: doc.lineCount, bytes: Buffer.byteLength(doc.getText()), open_ms: opened,
      symbols: symbols.length, symbols_ms: symbolMs, symbols_repeat_ms: symbolsRepeatMs, first_diagnostic_ms: firstDiagnostic,
      edit_clear_ms: incremental.clear_ms, undo_restore_ms: incremental.restore_ms,
      edit_ranges: incremental.changes.length, extension_host_lag: lagSummary() };
  });
}

async function typescript() {
  const L = 'typescript';
  await caseRun(L, 'diagnostics_incremental', async () => incrementalDiagnostic(await open('use.ts'),
    item => item.code === 2322, '"diagnostic fixture"', '42', 'use.ts'));
  await caseRun(L, 'definition_references', async () => {
    const doc = await open('use.ts');
    return definitionAndReferences(doc, doc.positionAt(doc.getText().lastIndexOf('greet')),
      { file: 'lib.ts', line: 0 }, ['lib.ts:0', 'use.ts:0', 'use.ts:2', 'other.ts:0', 'other.ts:1']);
  });
  await caseRun(L, 'rename_undo_redo', async () => {
    const doc = await open('lib.ts');
    return renameUndoRedo(doc, doc.positionAt(doc.getText().indexOf('greet')), 'welcome', ['lib.ts', 'use.ts', 'other.ts'],
      (_, text) => text.replaceAll('greet', 'welcome'));
  });
  await caseRun(L, 'format_undo_redo', () => formatUndoRedo('fmt.ts', 'export const value = { alpha: 1, beta: 2 };\n'));
  await caseRun(L, 'external_change_then_rename', async () => {
    // other.ts is never opened as a document. Shift its lines on disk first; the
    // server must recompute positions from the new bytes rather than stale ones.
    const before = await read('other.ts');
    const shifted = '// external line one\n// external line two\n' + before;
    await fsp.writeFile(file('other.ts'), shifted);
    const doc = await open('lib.ts');
    const position = doc.positionAt(doc.getText().indexOf('greet'));
    // The disk-change guard rejects a rename whose unopened target was modified at
    // or after 50 ms before the provider started, and asks the user to try again.
    // A request issued that soon after the write is rejected by design; only that
    // exact rejection is retried, and the final edit must use the shifted lines.
    let guardRejections = 0;
    const edit = await until(async () => {
      let value;
      try { value = await vscode.commands.executeCommand('vscode.executeDocumentRenameProvider', doc.uri, position, 'welcome'); }
      catch (error) {
        if (!String(error?.message).includes('A file changed on disk while computing the rename. Try again.')) throw error;
        guardRejections++; return false;
      }
      const target = value?.entries().find(([uri]) => uri.fsPath === file('other.ts'));
      return target && target[1].every(item => item.range.start.line >= 2) && value;
    }, 'rename positions reflect external change', 30000);
    assert.equal(await vscode.workspace.applyEdit(edit), true);
    assert.equal(await vscode.workspace.saveAll(false), true);
    assert.equal(await read('other.ts'), shifted.replaceAll('greet', 'welcome'));
    await vscode.commands.executeCommand('undo');
    assert.equal(await vscode.workspace.saveAll(false), true);
    assert.equal(await read('other.ts'), shifted);
    await fsp.writeFile(file('other.ts'), before);
    return { shifted_lines: 2, exact_bytes: true, guard_rejections: guardRejections };
  });
  await largeFile(L, 'large.ts', item => item.code === 2322, '"large diagnostic"', '7');
}

async function javascript() {
  const L = 'javascript';
  await caseRun(L, 'diagnostics_incremental', async () => incrementalDiagnostic(await open('checked.js'),
    item => item.code === 2322, '"JavaScript diagnostic"', '42', 'checked.js'));
  await caseRun(L, 'cross_file_definition_references_rename_undo_redo', async () => {
    const checks = {};
    await verifyCrossFile(project, { language: 'javascript', names: ['js-library.js', 'js-other.js', 'js-consumer.js'],
      symbol: 'jsGreet', renamed: 'jsWelcome' }, checks);
    return checks;
  });
  await caseRun(L, 'format_undo_redo', () => formatUndoRedo('fmt.js', 'export const value = { alpha: 1, beta: 2 };\n'));
}

async function json() {
  const L = 'json';
  await caseRun(L, 'diagnostics_incremental', async () => incrementalDiagnostic(await open('config.json'),
    item => /number/i.test(item.message), '"eighty"', '80', 'config.json schema'));
  await caseRun(L, 'format_undo_redo', () => formatUndoRedo('fmt.json', '{\n  "a": 1,\n  "b": [\n    1,\n    2\n  ]\n}'));
  const doc = await open('config.json'), position = doc.positionAt(doc.getText().indexOf('port'));
  const references = await vscode.commands.executeCommand('vscode.executeReferenceProvider', doc.uri, position);
  const definitions = await vscode.commands.executeCommand('vscode.executeDefinitionProvider', doc.uri, position);
  const rename = await vscode.commands.executeCommand('vscode.executeDocumentRenameProvider', doc.uri, position, 'other')
    .then(value => value?.size ?? 0, error => String(error.message ?? error));
  result.json_negative_probe = { references: references?.length ?? 0, definitions: definitions?.length ?? 0, rename };
  const reason = 'The bundled JSON language server registers no reference, definition or rename provider; probe returned none.';
  if (!references?.length) notProvided(L, 'references', reason);
  if (!definitions?.length) notProvided(L, 'definition', reason);
  if (!rename || typeof rename === 'string') notProvided(L, 'rename', reason);
  await largeFile(L, 'large.json', item => /duplicate/i.test(item.message), '"k0": "duplicate"', '"tail": "unique"');
}

async function css() {
  const L = 'css';
  await caseRun(L, 'diagnostics_incremental', async () => incrementalDiagnostic(await open('styles.css'),
    item => /colr/.test(item.message), 'colr', 'color', 'styles.css'));
  await caseRun(L, 'definition_references', async () => {
    const doc = await open('styles.css');
    return definitionAndReferences(doc, doc.positionAt(doc.getText().lastIndexOf('--brand') + 3),
      { file: 'styles.css', line: 0 }, ['styles.css:0', 'styles.css:1', 'styles.css:2']);
  });
  await caseRun(L, 'rename_undo_redo', async () => {
    const doc = await open('styles.css');
    return renameUndoRedo(doc, doc.positionAt(doc.getText().indexOf('--brand') + 3), '--accent', ['styles.css'],
      (_, text) => text.replaceAll('--brand', '--accent'));
  });
  await caseRun(L, 'format_undo_redo', () => formatUndoRedo('fmt.css', '.x {\n  color: red;\n  margin: 0\n}'));
  await largeFile(L, 'large.css', item => /colr/.test(item.message), 'colr', 'color');
}

async function html() {
  const L = 'html';
  const syntax = item => item.severity === vscode.DiagnosticSeverity.Error;
  await caseRun(L, 'diagnostics_incremental', async () => incrementalDiagnostic(await open('page.html'),
    syntax, 'let = ;', 'let ok = 1;', 'page.html embedded script'));
  await caseRun(L, 'definition_references', async () => {
    const doc = await open('page.html');
    return definitionAndReferences(doc, doc.positionAt(doc.getText().lastIndexOf('hello(')),
      { file: 'page.html', line: 4 }, ['page.html:4', 'page.html:5', 'page.html:6']);
  });
  await caseRun(L, 'rename_undo_redo', async () => {
    const doc = await open('page.html');
    return renameUndoRedo(doc, doc.positionAt(doc.getText().indexOf('hello')), 'greetUser', ['page.html'],
      (_, text) => text.replaceAll('hello(', 'greetUser('));
  });
  await caseRun(L, 'format_undo_redo', () => formatUndoRedo('fmt.html',
    '<div>\n  <p>one</p>\n  <p>two</p>\n</div>\n'));
  await largeFile(L, 'large.html', syntax, 'let = ;', 'let ok = 1;');
}

async function markdown() {
  const L = 'markdown';
  await caseRun(L, 'diagnostics_incremental', async () => incrementalDiagnostic(await open('doc.md'),
    item => /nowhere/.test(item.message) || /nowhere/.test(String(item.relatedInformation?.[0]?.message ?? '')) ||
      (typeof item.code === 'object' ? item.code.value : item.code) === 'link.no-such-header', '#nowhere', '#intro', 'doc.md broken header link'));
  await caseRun(L, 'definition_references', async () => {
    const doc = await open('doc.md');
    const header = doc.positionAt(doc.getText().indexOf('Intro') + 1);
    const references = await until(async () => { const items = await vscode.commands.executeCommand(
      'vscode.executeReferenceProvider', doc.uri, header); return items?.some(item => item.uri.fsPath.endsWith('other.md')) && items; },
    'markdown cross-file header references');
    const link = doc.positionAt(doc.getText().indexOf('#intro') + 2);
    const definitions = await until(async () => { const items = await vscode.commands.executeCommand(
      'vscode.executeDefinitionProvider', doc.uri, link); return items?.length && items; }, 'markdown definition');
    assert.ok(definitions.map(where).some(item => item.file === 'doc.md' && item.line === 0));
    return { definitions: definitions.map(where), references: references.map(where) };
  });
  await caseRun(L, 'rename_undo_redo', async () => {
    const doc = await open('doc.md');
    return renameUndoRedo(doc, doc.positionAt(doc.getText().indexOf('Intro') + 1), 'Overview', ['doc.md', 'other.md'],
      (_, text) => text.replace('# Intro', '# Overview').replaceAll('#intro', '#overview'));
  });
  const fmt = await open('doc.md');
  const formatting = await vscode.commands.executeCommand('vscode.executeFormatDocumentProvider', fmt.uri, { tabSize: 2, insertSpaces: true });
  if (!formatting?.length) notProvided(L, 'format', 'The bundled Markdown extension registers no document formatter; probe returned no edits.');
  await largeFile(L, 'large.md', item => /missing-tail/.test(item.message) ||
    (typeof item.code === 'object' ? item.code.value : item.code) === 'link.no-such-header', '#missing-tail', '#section-0');
}

// Delayed rename probe. The `.ovconflict` provider computes ranges from disk,
// then an external writer prepends a line to the unopened target before the
// provider returns. The native UI must not apply those stale ranges.
async function conflictRename(context) {
  const target = file('target.ovconflict'), sourceName = 'source.ovconflict';
  const sourceText = 'alpha source\n', targetText = 'keep alpha target\n', external = '// external writer\n';
  let calls = 0, mode;
  context.subscriptions.push(vscode.languages.registerRenameProvider({ scheme: 'file', pattern: '**/*.ovconflict' }, {
    prepareRename: () => new vscode.Range(0, 0, 0, 5),
    async provideRenameEdits(document, _position, name) {
      calls++;
      const edit = new vscode.WorkspaceEdit();
      const disk = await fsp.readFile(target, 'utf8'), offset = disk.indexOf('alpha');
      edit.replace(document.uri, new vscode.Range(0, 0, 0, 5), name);
      edit.replace(vscode.Uri.file(target), new vscode.Range(0, offset, 0, offset + 5), name);
      if (mode === 'external') { await fsp.writeFile(target, external + disk); await pause(400); }
      return edit;
    },
  }));
  for (mode of ['external', 'healthy']) {
    await caseRun('conflict', `native_rename_${mode}_unopened_target`, async () => {
      await fsp.writeFile(target, targetText);
      const source = await open(sourceName);
      if (source.getText() !== sourceText) {
        const reset = new vscode.WorkspaceEdit();
        reset.replace(source.uri, new vscode.Range(source.positionAt(0), source.positionAt(source.getText().length)), sourceText);
        assert.equal(await vscode.workspace.applyEdit(reset), true);
      }
      assert.equal(await source.save(), true);
      assert.ok(!vscode.workspace.textDocuments.some(doc => doc.uri.fsPath === target), 'target must stay unopened');
      const editor = await vscode.window.showTextDocument(source);
      editor.selection = new vscode.Selection(0, 2, 0, 2);
      const before = calls;
      await publish('phase', { mode });
      await vscode.commands.executeCommand('editor.action.rename');
      await until(() => calls > before, 'rename provider called', 20000);
      await pause(1200);
      const observed = { source: source.getText(), target_disk: await fsp.readFile(target, 'utf8'),
        target_document: vscode.workspace.textDocuments.find(doc => doc.uri.fsPath === target)?.getText() ?? null };
      const visible = observed.target_document ?? observed.target_disk;
      if (mode === 'external') {
        // Applying `keep alpha` offsets to `// external writer\nkeep alpha` corrupts line 0.
        assert.equal(visible, external + targetText, `stale rename must not change the externally written target: ${JSON.stringify(observed)}`);
        assert.equal(observed.source, sourceText, 'stale rename must be rejected as a whole');
      } else {
        assert.equal(observed.source, sourceText.replace('alpha', 'renamed'));
        assert.equal(visible, targetText.replace('alpha', 'renamed'));
        await vscode.commands.executeCommand('undo');
        assert.equal(source.getText(), sourceText);
        await vscode.commands.executeCommand('redo');
        assert.equal(source.getText(), observed.source);
        await vscode.commands.executeCommand('undo');
      }
      await vscode.workspace.saveAll(false);
      await vscode.commands.executeCommand('workbench.action.closeAllEditors');
      return { observed };
    });
  }
}

// Owner decision (OV-402): Python, Go and Rust are syntax-only, and the UI must
// say that a user-installed language server enables full features. The launcher
// reads the native language status hover for each file; TypeScript is the
// negative control.
async function syntaxOnly() {
  for (const [language, name] of [['python', 'syntax.py'], ['go', 'syntax.go'], ['rust', 'syntax.rs'], ['typescript', 'lib.ts']]) {
    await caseRun('syntax_only', language === 'typescript' ? 'typescript_control' : language, async () => {
      const doc = await open(name);
      assert.equal(doc.languageId, language);
      const answer = path.join(directory, `language-status-${language}.json`);
      await publish('phase', { mode: `language-status-${language}` });
      const seen = await until(async () => JSON.parse(await fsp.readFile(answer, 'utf8').catch(() => 'null')),
        `${language} language status read by the launcher`, 30000);
      if (language === 'typescript') assert.doesNotMatch(seen.text, /Syntax highlighting only/);
      else {
        assert.match(seen.text, /Syntax highlighting only/);
        assert.match(seen.text, new RegExp(`Install a ${{ python: 'Python', go: 'Go', rust: 'Rust' }[language]} language server extension`));
      }
      await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
      return seen;
    });
  }
}

// Same-document edits while a language request is in flight. Each delayed probe
// provider for the private `.ovinflight` fixture snapshots the text when it is
// called, waits until the driver has typed into that document through the native
// `type` command, and then returns ranges computed from the old text, ignoring
// its token. The editor must reject or rebase the stale result without
// corrupting text, and the provider token must be cancelled by the edit.
async function inflightEdits(context) {
  const L = 'inflight', pending = new Map();
  const selector = { scheme: 'file', pattern: '**/*.ovinflight' };
  const calls = {};
  function enter(kind, document, token) {
    const call = { kind, version: document.version, text: document.getText(), cancelled: false, edited: null,
      pre_cancelled: token.isCancellationRequested };
    (calls[kind] ??= []).push(call);
    token.onCancellationRequested(() => { if (call.cancelled) return;
      call.cancelled = true; call.cancelled_after_edit_ms = call.edited === null ? null : Math.round(performance.now() - call.edited); });
    let release;
    call.released = new Promise(resolve => { release = resolve; });
    call.release = release;
    // Only the first request per case is held; retriggered requests answer at once.
    if (!pending.has(kind)) { pending.set(kind, call); return call; }
    call.release();
    return call;
  }
  const word = (text, needle) => { const offset = text.indexOf(needle); return { offset, length: needle.length }; };
  context.subscriptions.push(
    vscode.languages.registerRenameProvider(selector, {
      prepareRename: (document, position) => document.getWordRangeAtPosition(position),
      async provideRenameEdits(document, _position, name, token) {
        const call = enter('rename', document, token); await call.released;
        const edit = new vscode.WorkspaceEdit();
        // Ranges from the snapshot: every `alpha` on every line.
        call.text.split('\n').forEach((line, index) => { const at = line.indexOf('alpha');
          if (at >= 0) edit.replace(document.uri, new vscode.Range(index, at, index, at + 5), name); });
        return edit;
      },
    }),
    vscode.languages.registerDocumentFormattingEditProvider(selector, {
      async provideDocumentFormattingEdits(document, _options, token) {
        const call = enter('format', document, token); await call.released;
        const { offset, length } = word(call.text, '   ');
        if (offset < 0) return [];
        // Offsets from the snapshot, converted without the live document.
        return [vscode.TextEdit.replace(new vscode.Range(0, offset, 0, offset + length), ' ')];
      },
    }),
    vscode.languages.registerCodeActionsProvider(selector, {
      async provideCodeActions(document, _range, _context, token) {
        const call = enter('code_action', document, token); await call.released;
        const action = new vscode.CodeAction('OpenVision in-flight probe', vscode.CodeActionKind.QuickFix);
        action.edit = new vscode.WorkspaceEdit();
        action.edit.replace(document.uri, new vscode.Range(0, 0, 0, 5), 'beta');
        action.isPreferred = true;
        return [action];
      },
    }, { providedCodeActionKinds: [vscode.CodeActionKind.QuickFix] }),
    vscode.languages.registerCompletionItemProvider(selector, {
      async provideCompletionItems(document, position, token) {
        const call = enter('completion', document, token); await call.released;
        const prefix = call.text.split('\n')[position.line].slice(0, position.character).match(/\w*$/)[0];
        const item = new vscode.CompletionItem('alphaCompletion', vscode.CompletionItemKind.Variable);
        // The replace range is the snapshot's word; an edit after the snapshot moves it.
        item.range = new vscode.Range(position.line, position.character - prefix.length, position.line, position.character);
        item.additionalTextEdits = [vscode.TextEdit.insert(new vscode.Position(1, 0), 'import alphaCompletion\n')];
        return [item];
      },
    }));

  async function scenario(kind, name, text, cursor, typed, trigger, outcomes, { label = `${kind}_same_document_edit`, expectCancel = true } = {}) {
    await caseRun(L, label, async () => {
      await fsp.writeFile(file(name), text);
      const doc = await open(name);
      assert.equal(doc.getText(), text, `${name} fixture`);
      const editor = vscode.window.activeTextEditor;
      const changes = [];
      const listener = vscode.workspace.onDidChangeTextDocument(event => { if (event.document === doc)
        changes.push(...event.contentChanges.map(change => ({ offset: change.rangeOffset, removed: change.rangeLength, text: change.text }))); });
      try {
        editor.selection = new vscode.Selection(...cursor.trigger, ...cursor.trigger);
        const command = trigger();
        const call = await until(() => pending.get(kind), `${kind} provider called`, 20000);
        // Type into the same document while the provider is still computing.
        editor.selection = new vscode.Selection(...cursor.type, ...cursor.type);
        call.edited = performance.now();
        await vscode.commands.executeCommand('type', { text: typed });
        assert.notEqual(doc.version, call.version, 'edit landed while the request was pending');
        await until(() => call.cancelled, `${kind} provider token cancelled by the edit`, 3000).catch(() => {});
        const cancelledBeforeRelease = call.cancelled;
        call.release();
        await Promise.resolve(command).catch(error => { call.command_error = String(error?.message ?? error); });
        await pause(1200);
        if (kind === 'completion') {
          await vscode.commands.executeCommand('acceptSelectedSuggestion');
          await pause(500);
        }
        const observed = doc.getText();
        const outcome = Object.entries(outcomes).find(([, expected]) => expected === observed)?.[0];
        result.inflight_detail ??= {};
        result.inflight_detail[label] = { observed, outcome, cancelled_before_release: cancelledBeforeRelease,
          calls: calls[kind].map(({ version, cancelled, cancelled_after_edit_ms, pre_cancelled }) =>
            ({ version, cancelled, cancelled_after_edit_ms, pre_cancelled })) };
        assert.ok(outcome, `${kind}: stale result corrupted or changed text unexpectedly: ${JSON.stringify(observed)}`);
        // Continuing the word being completed keeps the request by upstream design:
        // the result is refiltered and its range rebased to the current word.
        if (expectCancel) assert.equal(cancelledBeforeRelease, true, `${kind}: provider token was not cancelled by the same-document edit`);
        await vscode.commands.executeCommand('workbench.action.files.revert');
        await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
        return { outcome, observed, typed, token_cancel_expected: expectCancel, snapshot_version: call.version, edit_version_after: doc.version,
          token_cancelled_before_result: cancelledBeforeRelease, cancelled_after_edit_ms: call.cancelled_after_edit_ms ?? null,
          command_error: call.command_error ?? null, changes };
      } finally { listener.dispose(); pending.delete(kind); calls[kind] = []; await publish('phase', { mode: `${label}-done` }); }
    });
  }

  await scenario('rename', 'inflight-rename.ovinflight', 'alpha one\nalpha two\n', { trigger: [1, 2], type: [0, 0] }, 'Z', () => {
    void publish('phase', { mode: 'inflight-rename' });
    return vscode.commands.executeCommand('editor.action.rename');
  }, { rejected: 'Zalpha one\nalpha two\n', rebased: 'Zrenamed one\nrenamed two\n' });
  await scenario('format', 'inflight-format.ovinflight', 'alpha   one\n', { trigger: [0, 0], type: [0, 0] }, 'Z',
    () => vscode.commands.executeCommand('editor.action.formatDocument'),
    { rejected: 'Zalpha   one\n', rebased: 'Zalpha one\n' });
  await scenario('code_action', 'inflight-action.ovinflight', 'alpha one\n', { trigger: [0, 2], type: [0, 0] }, 'Z',
    () => vscode.commands.executeCommand('editor.action.codeAction', { kind: vscode.CodeActionKind.QuickFix.value, apply: 'first' }),
    { rejected: 'Zalpha one\n', rebased: 'Zbeta one\n' });
  await scenario('completion', 'inflight-complete.ovinflight', 'al\nend\n', { trigger: [0, 2], type: [0, 2] }, 'p',
    () => vscode.commands.executeCommand('editor.action.triggerSuggest'),
    // Accepting must replace the whole current word and add the import exactly once.
    { rebased: 'alphaCompletion\nimport alphaCompletion\nend\n' }, { label: 'completion_word_continuation', expectCancel: false });
  await scenario('completion', 'inflight-complete.ovinflight', 'al\nend\n', { trigger: [0, 2], type: [1, 0] }, 'Z',
    () => vscode.commands.executeCommand('editor.action.triggerSuggest'),
    // Typing elsewhere ends the session; nothing stale may be inserted on accept.
    { rejected: 'al\nZend\n' }, { label: 'completion_edit_elsewhere' });
}

// Bounded windows bracketed by trace markers. The launcher counts filesystem
// syscalls inside each window to detect whole-project rescans after small edits.
async function scanWindows() {
  const windows = {};
  async function measure(name, body) {
    lagWindow();
    mark(`${name}-start`);
    const started = Date.now();
    await body();
    await pause(4000);
    mark(`${name}-end`);
    windows[name] = { elapsed_ms: Date.now() - started, extension_host_lag: lagSummary() };
  }
  const ts = await open('use.ts'), css = await open('styles.css'), md = await open('doc.md'), jsonDoc = await open('config.json');
  await until(() => diagnosticsFor(ts, item => item.code === 2322).length, 'warm TypeScript');
  await until(() => vscode.languages.getDiagnostics(md.uri).length, 'warm Markdown');
  await pause(6000);
  async function type(doc, needle, text) {
    const editor = await vscode.window.showTextDocument(doc);
    const offset = doc.getText().indexOf(needle);
    assert.equal(await editor.edit(builder => builder.insert(doc.positionAt(offset), text)), true);
  }
  await measure('idle', async () => {});
  await measure('ts-edit-1', () => type(ts, 'OpenVision', 'x'));
  await measure('ts-edit-2', () => type(ts, 'OpenVision', 'y'));
  await measure('ts-save', async () => { assert.equal(await ts.save(), true); });
  await measure('css-edit', () => type(css, 'blue', 'x'));
  await measure('md-edit', () => type(md, 'See', 'x'));
  await measure('json-edit', () => type(jsonDoc, '"eighty"', ' '));
  for (const doc of [ts, css, md, jsonDoc]) {
    await vscode.window.showTextDocument(doc);
    await vscode.commands.executeCommand('workbench.action.files.revert');
  }
  await fsp.writeFile(file('use.ts'), result.fixture_use_ts);
  await until(() => ts.getText() === result.fixture_use_ts && !ts.isDirty, 'use.ts reloaded from disk');
  await vscode.commands.executeCommand('workbench.action.closeAllEditors');
  return windows;
}

// --large-project windows: small edits, a save and dependency/config changes in
// a 5,000-module program. Each window records wall-clock bounds so the launcher
// can attribute CPU/RSS samples to it.
async function largeProjectWindows() {
  const windows = {};
  const missing = item => item.code === 2305 && /depNew/.test(item.message);
  async function measure(name, body, settle = 4000) {
    lagWindow();
    mark(`${name}-start`);
    const started_at = Date.now(), started = performance.now();
    const detail = await body() ?? {};
    await pause(settle);
    mark(`${name}-end`);
    windows[name] = { started_at, ended_at: Date.now(), elapsed_ms: Math.round(performance.now() - started),
      extension_host_lag: lagSummary(), ...detail };
  }
  const warmStarted = performance.now();
  const ts = await open('src/use.ts');
  await until(() => diagnosticsFor(ts, missing).length && diagnosticsFor(ts, item => item.code === 2322).length,
    'large project TypeScript program loaded', 600000);
  result.large_project = { first_diagnostics_ms: Math.round(performance.now() - warmStarted) };
  // tsserver keeps registering per-file watchers after its first diagnostics. The
  // idle window must start after that, so wait until the main process (the
  // extension host's parent) holds a stable inotify watch count for 10 s
  // (registration arrives in bursts several seconds apart).
  const watchCount = () => { let count = 0;
    for (const fd of fs.readdirSync(`/proc/${process.ppid}/fdinfo`))
      try { count += fs.readFileSync(`/proc/${process.ppid}/fdinfo/${fd}`, 'utf8').split('\n').filter(line => line.startsWith('inotify wd:')).length; }
      catch {}
    return count; };
  if (process.platform === 'linux') {
    const settleStarted = performance.now();
    let last = -1, stableSince = performance.now();
    await until(() => { const now = watchCount();
      if (now !== last) { last = now; stableSince = performance.now(); }
      return performance.now() - stableSince >= 10000; }, 'main-process watch registration settled', 300000);
    Object.assign(result.large_project, { watch_registration_settled_ms: Math.round(performance.now() - settleStarted),
      main_watches_settled: last });
  }
  await pause(6000);
  async function type(doc, needle, text) {
    const editor = await vscode.window.showTextDocument(doc);
    const offset = doc.getText().indexOf(needle);
    assert.ok(offset >= 0, needle);
    assert.equal(await editor.edit(builder => builder.insert(doc.positionAt(offset), text)), true);
  }
  await measure('idle', async () => {});
  await measure('ts-edit-1', () => type(ts, 'OpenVision', 'x'));
  await measure('ts-edit-2', () => type(ts, 'OpenVision', 'y'));
  await measure('ts-save', async () => { assert.equal(await ts.save(), true); });
  await measure('dependency-change', async () => {
    // A dependency update rewrites a declaration file under node_modules.
    const started = performance.now();
    await fsp.writeFile(file('node_modules/dep-a/index.d.ts'),
      'export declare function depValue(): number;\nexport declare const depNew: number;\n');
    await until(() => diagnosticsFor(ts, missing).length === 0, 'dependency change observed by tsserver', 120000);
    return { diagnostic_update_ms: Math.round(performance.now() - started) };
  });
  await measure('dependency-install', async () => {
    // An install adds a package tree and a package.json dependency.
    for (let index = 0; index < 50; index++) {
      await fsp.mkdir(file('node_modules/dep-c/lib'), { recursive: true });
      await fsp.writeFile(file(`node_modules/dep-c/lib/file${index}.js`), `module.exports = ${index};\n`);
    }
    await fsp.writeFile(file('node_modules/dep-c/package.json'), JSON.stringify({ name: 'dep-c', version: '3.0.0', main: 'lib/file0.js' }));
    await fsp.writeFile(file('package.json'), result.large_fixture.package_json_changed);
  });
  await measure('tsconfig-change', async () => {
    const started = performance.now();
    await fsp.writeFile(file('tsconfig.json'), result.large_fixture.tsconfig_changed);
    // The project reload re-reads the program; wait until diagnostics are back.
    await pause(500);
    await until(() => diagnosticsFor(ts, item => item.code === 2322).length, 'diagnostics after tsconfig reload', 300000);
    return { diagnostics_after_reload_ms: Math.round(performance.now() - started) };
  }, 8000);
  await measure('ts-edit-after-reload', () => type(ts, 'OpenVision', 'z'));
  // Outside the budgeted windows: an external write to an unopened program file
  // must still reach tsserver through file watching (here, the shared workspace
  // watcher), and so must restoring it.
  const program = file('src/m00/f099.ts'), original = await fsp.readFile(program, 'utf8');
  const wrongs = () => diagnosticsFor(ts, item => item.code === 2322).length;
  const baseline = wrongs(), changed = performance.now();
  await fsp.writeFile(program, 'export const v99 = "now a string";\n');
  await until(() => wrongs() === baseline + 1, 'external program-file change reaches tsserver', 60000);
  const changeMs = Math.round(performance.now() - changed), restored = performance.now();
  await fsp.writeFile(program, original);
  await until(() => wrongs() === baseline, 'external program-file restore reaches tsserver', 60000);
  result.large_project.unopened_program_file_change = { diagnostic_ms: changeMs, restore_ms: Math.round(performance.now() - restored) };
  await vscode.commands.executeCommand('workbench.action.files.revert');
  await vscode.commands.executeCommand('workbench.action.closeAllEditors');
  return windows;
}

async function run(context) {
  project = vscode.workspace.workspaceFolders[0].uri.fsPath; directory = path.dirname(project);
  result = { started_at: new Date().toISOString(), api: vscode.version, extensions: {}, cases: {},
    fixture: 'native public VS Code API driver; bundled language providers; no AI inference' };
  const stop = sampleLag();
  try {
    result.fixture_use_ts = await read('use.ts').catch(() => null);
    for (const id of ['vscode.typescript-language-features', 'vscode.json-language-features', 'vscode.css-language-features',
      'vscode.html-language-features', 'vscode.markdown-language-features']) {
      const extension = vscode.extensions.getExtension(id);
      assert.ok(extension, `${id} must be bundled`);
      await extension.activate();
      result.extensions[id] = { version: extension.packageJSON.version, path: extension.extensionPath };
    }
    result.extension_host_pid = process.pid;
    await publish('driver-ready', { pid: process.pid });
    const mode = JSON.parse(await fsp.readFile(path.join(directory, 'mode.json'), 'utf8'));
    result.mode = mode.mode;
    if (mode.mode === 'large-project') {
      result.large_fixture = mode.fixture;
      result.scan_windows = await largeProjectWindows();
      await publish('scan-complete', {});
    } else {
      result.scan_windows = await scanWindows();
      await publish('scan-complete', {});
      // `only` is a development filter; acceptance runs execute every suite.
      const suites = { typescript, javascript, json, css, html, markdown, conflict: conflictRename, inflight: inflightEdits, syntax: syntaxOnly };
      for (const [name, suite] of Object.entries(suites)) if (!mode.only || mode.only.includes(name)) await suite(context);
    }
    const failures = Object.entries(result.cases).filter(([, value]) => value.status === 'fail').map(([key]) => key);
    result.failures = failures;
    result.success = failures.length === 0;
  } catch (error) { result.success = false; result.failure = error.stack; }
  stop();
  result.finished_at = new Date().toISOString();
  await publish('extension-result', result);
}

exports.activate = context => { void run(context); };
