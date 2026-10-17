import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { isolatePartialCompletionUndo, isolateFullCompletionUndo } from './completion-undo.mjs';

const source = `class Completion {
  makeEditsForNextWordAccept({model: document, editor}) {
    const selections = document.pushEditOperations([], [{text: 'next'}], () => []);
    editor.setSelections(selections);
    return selections;
  }
}`;

for (const variant of ['desktop', 'glass']) test(`${variant}: partial edits retain their result inside separate undo boundaries`, () => {
  const patched = isolatePartialCompletionUndo(source, variant);
  assert.equal(isolatePartialCompletionUndo(patched, variant), patched);
  const mode = {localMode: true};
  const Constructor = new Function('zc', 'Rl', `${patched}; return Completion;`)(mode, mode);
  const calls = [], selections = [{line: 1, column: 5}];
  const model = {pushStackElement: () => calls.push('boundary'), pushEditOperations: () => {
    calls.push('edit'); return selections;
  }};
  const editor = {setSelections: value => assert.equal(value, selections)};
  assert.equal(new Constructor().makeEditsForNextWordAccept({model, editor}), selections);
  assert.deepEqual(calls, ['boundary', 'edit', 'boundary']);
  calls.length = 0; mode.localMode = false;
  new Constructor().makeEditsForNextWordAccept({model, editor});
  assert.deepEqual(calls, ['edit']);
});

test('changed model identity and edit shape fail closed', () => {
  assert.throws(() => isolatePartialCompletionUndo(source.replace('model: document', 'model: other'), 'desktop'), /model owner/);
  assert.throws(() => isolatePartialCompletionUndo(source.replace('const selections = ', 'return '), 'desktop'), /edit owner/);
});

const fullSource = `class Completion {
  updateVisibleSuggestionText(editor, diff, range, document, group, eol, suggestion) {
    const edits = [{text: 'accepted'}];
    if ((this.fire(document.uri, edits), document.pushEditOperations([], edits, () => null, group),
      document.pushStackElement(), edits.length === 1)) return 'shown';
    return 'hidden';
  }
}`;

for (const variant of ['desktop', 'glass']) test(`${variant}: full acceptance opens an undo boundary before its edit`, () => {
  const patched = isolateFullCompletionUndo(fullSource, variant);
  assert.equal(isolateFullCompletionUndo(patched, variant), patched);
  const mode = {localMode: true};
  const Constructor = new Function('zc', 'Rl', `${patched}; return Completion;`)(mode, mode);
  const calls = [], model = {uri: 'file', pushStackElement: () => calls.push('boundary'),
    pushEditOperations: (_, edits, __, group) => calls.push(`edit:${group}`)};
  const instance = Object.assign(new Constructor(), {fire: () => calls.push('fire')});
  assert.equal(instance.updateVisibleSuggestionText(undefined, [], undefined, model, 'g'), 'shown');
  assert.deepEqual(calls, ['fire', 'boundary', 'edit:g', 'boundary']);
  calls.length = 0; mode.localMode = false;
  instance.updateVisibleSuggestionText(undefined, [], undefined, model, 'g');
  assert.deepEqual(calls, ['fire', 'edit:g', 'boundary'], 'Nonlocal behavior is unchanged');
});

test('full acceptance drift fails closed', () => {
  assert.throws(() => isolateFullCompletionUndo('class Missing {}', 'desktop'), /missing/);
  assert.throws(() => isolateFullCompletionUndo(fullSource.replace('document.pushStackElement(), ', ''), 'desktop'),
    /statement changed/);
  assert.throws(() => isolateFullCompletionUndo(fullSource.replace('range, document, group', 'range'), 'desktop'), /changed/);
  const method = fullSource.slice(fullSource.indexOf('  updateVisible'), fullSource.lastIndexOf('}'));
  assert.throws(() => isolateFullCompletionUndo(fullSource.replace(/}$/, `${method}}`), 'desktop'), /ambiguous/);
});

const readable = process.env.OPENVISION_RECOVERY_DIR &&
  new URL(`file://${process.env.OPENVISION_RECOVERY_DIR}/readable/app/out/vs/workbench/`);
for (const variant of ['desktop', 'glass']) test(`${variant}: recovered full-accept owner is patched once`,
  { skip: !readable && 'OPENVISION_RECOVERY_DIR not set' }, async () => {
    const source = await readFile(new URL(`workbench.${variant}.main.js`, readable), 'utf8');
    const patched = isolateFullCompletionUndo(source, variant);
    assert.equal(isolateFullCompletionUndo(patched, variant), patched);
    assert.equal(patched.split('OpenVision full completion undo boundary v1').length, 2);
    assert.match(patched, /\/\* OpenVision full completion undo boundary v1 \*\/ \((zc|Rl)\.localMode && i\.pushStackElement\(\)\), i\.pushEditOperations\(\[\], [\w$]+, \(\) => null, r\)/);
  });
