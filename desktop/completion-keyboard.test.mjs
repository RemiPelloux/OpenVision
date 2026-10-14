import test from 'node:test';
import assert from 'node:assert/strict';
import { cancelPendingCompletionOnEscape } from './completion-keyboard.mjs';

const source = `class Completion {
  constructor() {
    this.handleKeyDownForCppKeys = (event) => {
      if (this.suggestion.value !== undefined) this.rejectAndResetAllCppSuggestions();
      this.otherKeyboardBehavior();
    };
  }
  abortAllCppRequests() { this.abortController.abort(); }
}`;

for (const variant of ['desktop', 'glass']) test(`${variant}: pending Escape cancels without consuming keyboard events`, () => {
  const patched = cancelPendingCompletionOnEscape(source, variant);
  assert.equal(cancelPendingCompletionOnEscape(patched, variant), patched);
  const mode = { localMode: true };
  const Constructor = new Function('zc', 'Rl', `${patched}; return Completion;`)(mode, mode);
  const owner = new Constructor();
  let canceled = 0, continued = 0;
  owner.abortController = { abort: () => canceled++ };
  owner.suggestion = { value: undefined };
  owner.persistentStorage = () => ({ cppEnabled: true });
  owner.otherKeyboardBehavior = () => continued++;
  owner.rejectAndResetAllCppSuggestions = () => {};
  owner.handleKeyDownForCppKeys({ key: 'Escape' });
  assert.equal(canceled, 1); assert.equal(continued, 1);
  for (const event of [{ key: 'Tab' }, ...['ctrlKey', 'altKey', 'metaKey'].map(key => ({ key: 'Escape', [key]: true }))])
    owner.handleKeyDownForCppKeys(event);
  mode.localMode = false; owner.handleKeyDownForCppKeys({ key: 'Escape' });
  mode.localMode = true; owner.suggestion.value = {}; owner.handleKeyDownForCppKeys({ key: 'Escape' });
  owner.suggestion.value = undefined; owner.persistentStorage = () => ({ cppEnabled: false });
  owner.handleKeyDownForCppKeys({ key: 'Escape' });
  assert.equal(canceled, 1); assert.equal(continued, 8);
});

test('unknown and ambiguous native keyboard owners fail closed', () => {
  assert.throws(() => cancelPendingCompletionOnEscape('class Unknown {}', 'desktop'), /owner missing/);
  assert.throws(() => cancelPendingCompletionOnEscape(source + source, 'desktop'), /ambiguous/);
  assert.throws(() => cancelPendingCompletionOnEscape(source.replace('this.abortController.abort()', 'changed()'), 'desktop'), /contract changed/);
});
