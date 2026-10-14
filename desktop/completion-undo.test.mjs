import test from 'node:test';
import assert from 'node:assert/strict';
import { isolatePartialCompletionUndo } from './completion-undo.mjs';

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
