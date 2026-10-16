import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { durableProfileStorage, storageMarker } from './profile-storage-durability-customization.mjs';

const original = await readFile(new URL('out/main.js', readableApp), 'utf8');
const patched = durableProfileStorage(original);
const sqliteFull = () => Object.assign(new Error('SQLITE_FULL: database or disk is full'), { code: 'SQLITE_FULL' });

// Executes the recovered main-process storage class methods (original or
// patched) against a controlled database that fails like a full volume.
function fixture(source) {
  const at = source.indexOf('(JR.DEFAULT_FLUSH_DELAY = 100)');
  const start = source.lastIndexOf('(JR = class', at) + 1;
  const owner = parseExpressionAt(source, start, { ecmaVersion: 'latest' }).right;
  assert.equal(owner.type, 'ClassExpression');
  const methods = owner.body.body.filter(node => node.kind !== 'constructor' && node.type === 'MethodDefinition')
    .map(node => source.slice(node.start, node.end));
  const timers = [];
  const missing = value => value === undefined || value === null;
  const Storage = runInNewContext(`(class { ${methods.join('\n')} })`, {
    or: missing, vn: value => value !== null && typeof value === 'object', g2e: JSON.stringify, Error, Promise, Map, Set,
    setTimeout: (callback, delay) => { const timer = { callback, delay, unref() {} }; timers.push(timer); return timer; },
  });
  const writes = [];
  const database = { fail: false, rows: new Map(), async updateItems(request) {
    writes.push(request);
    if (this.fail) throw sqliteFull();
    request.insert?.forEach((value, key) => this.rows.set(key, value));
    request.delete?.forEach(key => this.rows.delete(key));
  } };
  const storage = Object.assign(new Storage(), { state: 1, options: {}, cache: new Map(),
    pendingInserts: new Map(), pendingDeletes: new Set(), whenFlushedCallbacks: [], database,
    _onDidChangeStorage: { fire() {} }, flushDelayer: { trigger: task => task() } });
  return { storage, database, timers, writes };
}

test('original owner drops a failed batch; the patched owner keeps it queued and writes it later', async () => {
  for (const [source, kept] of [[original, false], [patched, true]]) {
    const { storage, database } = fixture(source);
    database.fail = true;
    await assert.rejects(storage.set('openvision.model-providers.v1', 'saved-while-full'), /SQLITE_FULL/);
    assert.equal(storage.get('openvision.model-providers.v1'), 'saved-while-full', 'The value stays cached either way');
    database.fail = false;
    await storage.set('unrelated', 'later');
    await storage.flush(0);
    assert.equal(database.rows.get('openvision.model-providers.v1'), kept ? 'saved-while-full' : undefined);
    assert.equal(database.rows.get('unrelated'), 'later');
  }
});

test('durable acknowledgement rejects while a key is unsaved and resolves once SQLite accepts it', async () => {
  const { storage, database } = fixture(patched);
  database.fail = true;
  storage.set('secret://openvision.provider.one', 'key').catch(() => {});
  await assert.rejects(storage.openvisionDurable(['secret://openvision.provider.one']), /could not save.*SQLITE_FULL/s);
  // Unrelated keys are not reported as failed.
  await storage.openvisionDurable(['never-written']);
  database.fail = false;
  // An identical value is a cache no-op, yet the queued write is retried and acknowledged.
  storage.set('secret://openvision.provider.one', 'key');
  await storage.openvisionDurable(['secret://openvision.provider.one']);
  assert.equal(database.rows.get('secret://openvision.provider.one'), 'key');
  assert.equal(storage.openvisionFailedKeys.size, 0);
});

test('a failed write never overwrites a newer value or resurrects a deletion', async () => {
  const { storage, database } = fixture(patched);
  database.fail = true;
  const first = storage.flushPending();
  storage.cache.set('k', 'v1'); storage.pendingInserts.set('k', 'v1');
  const failing = storage.flushPending();
  storage.cache.set('k', 'v2'); storage.pendingInserts.set('k', 'v2');
  await first; await assert.rejects(failing);
  assert.equal(storage.pendingInserts.get('k'), 'v2');
  database.fail = false;
  await storage.flushPending();
  assert.equal(database.rows.get('k'), 'v2');
  database.fail = true;
  storage.cache.set('gone', 'x'); storage.pendingInserts.set('gone', 'x');
  const removed = storage.flushPending();
  storage.delete('gone').catch(() => {});
  await assert.rejects(removed);
  assert.equal(storage.pendingInserts.has('gone'), false);
  assert.equal(storage.pendingDeletes.has('gone'), true);
});

test('failed writes retry automatically with bounded backoff, and not after close', async () => {
  const { storage, database, timers } = fixture(patched);
  database.fail = true;
  await assert.rejects(storage.set('k', 'v'));
  assert.equal(timers.length, 1); assert.equal(timers[0].delay, 1000);
  await timers[0].callback(); await new Promise(resolve => setImmediate(resolve));
  assert.equal(timers.length, 2); assert.equal(timers[1].delay, 2000);
  for (let index = 0; index < 8; index++) { await timers.at(-1).callback(); await new Promise(resolve => setImmediate(resolve)); }
  assert.equal(timers.at(-1).delay, 30000, 'Backoff is capped');
  database.fail = false;
  await timers.at(-1).callback(); await new Promise(resolve => setImmediate(resolve));
  assert.equal(database.rows.get('k'), 'v');
  const count = timers.length;
  database.fail = true; storage.state = 2;
  storage.cache.set('late', 'x'); storage.pendingInserts.set('late', 'x');
  await assert.rejects(storage.flushPending());
  assert.equal(timers.length, count, 'No retry is scheduled once storage is closing');
  await storage.openvisionDurable(['late']);
});

test('waiters are released after a failure, as in the original owner', async () => {
  const { storage, database } = fixture(patched);
  database.fail = true;
  storage.cache.set('k', 'v'); storage.pendingInserts.set('k', 'v');
  const waiting = storage.whenFlushed();
  await assert.rejects(storage.flushPending());
  await waiting;
});

test('IPC acknowledgement waits for durability; patch is idempotent and rejects drift', () => {
  assert.equal(patched.split(storageMarker).length, 3);
  assert.match(patched, /return o\.storage\?\.openvisionDurable\?\.\(\[\.\.\.Array\.from\(l\.insert \?\? \[\], \(\[d\]\) => d\), \.\.\.\(l\.delete \?\? \[\]\)\]\);/);
  assert.equal(durableProfileStorage(patched), patched);
  assert.throws(() => durableProfileStorage(original.replace('l.delete?.forEach((d) => o.delete(d));', 'l.delete?.forEach(o.delete);')), /IPC owner changed/);
  assert.throws(() => durableProfileStorage(original.replace('this.database.updateItems(t).finally', 'this.database.updateItems(t, 1).finally')), /flush owner changed/);
  assert.throws(() => durableProfileStorage(patched.replace(storageMarker, '')), /partially applied/);
});
