import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { disposeNodeWatchers, nodeWatcherOwner } from './watcher-dispose-customization.mjs';
import { readableApp } from './recovered-source.mjs';

const original = await readFile(new URL('out/main.js', readableApp), 'utf8');
const patched = disposeNodeWatchers(original);

// The recovered class with its base and helpers stubbed: two active fs.watch instances.
function watcher(text) {
  const owner = nodeWatcherOwner(text), stopped = [];
  class Disposable { constructor() { this.disposed = false; } _register(value) { return value; } dispose() { this.disposed = true; } }
  const Watcher = runInNewContext(`(${text.slice(owner.start, owner.end)})`, {
    DB: Disposable, N: { None: () => {} }, Lt: class {}, c3e: () => ({}), ea: undefined, Map, Set, Array, Object });
  const instance = new Watcher(undefined);
  for (const path of ['/w/b/.openvision', '/w/b']) instance._watchers.set(path, { request: { path }, instance: { dispose: () => stopped.push(path) } });
  instance.requestToWatcherKey = request => request.path;
  instance.trace = () => {};
  return { instance, stopped };
}

test('disposing the main-process Node.js watcher stops its active fs.watch handles', () => {
  const before = watcher(original);
  before.instance.dispose();
  assert.deepEqual(before.stopped, [], 'Recovered disposal leaves both handles open');
  const after = watcher(patched);
  after.instance.dispose();
  assert.deepEqual(after.stopped, ['/w/b/.openvision', '/w/b']);
  assert.equal(after.instance._watchers.size, 0);
  assert.equal(after.instance.disposed, true);
  assert.equal(disposeNodeWatchers(patched), patched, 'idempotent');
});
