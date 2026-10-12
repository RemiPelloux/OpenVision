import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { ImportPreview } from './import-preview.mjs';

function sender() {
  return Object.assign(new EventEmitter(), { isDestroyed: () => false });
}

test('preview lifetime follows cancel, apply, replacement, and renderer ownership', () => {
  const store = new ImportPreview();
  const owner = sender();
  const other = sender();
  const plan = { changes: [{ data: Buffer.alloc(1024) }] };
  const token = store.begin(owner);
  assert.equal(store.complete(owner, token, plan), true);
  store.release(other, token);
  assert.throws(() => store.take(other, token), /Preview/);
  assert.equal(store.take(owner, token), plan);
  assert.equal(owner.listenerCount('destroyed'), 0);
  assert.equal(owner.listenerCount('did-start-navigation'), 0);
  assert.throws(() => store.take(owner, token), /Preview/);
  const canceled = store.begin(owner);
  store.complete(owner, canceled, plan);
  store.release(owner, canceled);
  assert.throws(() => store.take(owner, canceled), /Preview/);
  const replaced = store.begin(owner);
  const replacement = store.begin(other);
  assert.equal(store.complete(owner, replaced, plan), false);
  store.release(owner, replaced);
  assert.equal(store.complete(other, replacement, plan), true);
  assert.equal(store.take(other, replacement), plan);
});

test('reload or destruction during planning cannot retain a completed preview', () => {
  const store = new ImportPreview();
  const owner = sender();
  for (const event of ['destroyed', 'did-start-navigation']) {
    const token = store.begin(owner);
    owner.emit('did-start-navigation', {}, 'subframe', false, false);
    owner.emit('did-start-navigation', {}, '#fragment', true, true);
    assert.equal(store.complete(owner, token, {}), true);
    owner.emit(event, {}, 'reload', false, true);
    assert.equal(store.complete(owner, token, { changes: [] }), false);
    assert.throws(() => store.take(owner, token), /Preview/);
    assert.equal(owner.listenerCount('did-start-navigation'), 0);
    assert.equal(owner.listenerCount('destroyed'), 0);
  }
});
