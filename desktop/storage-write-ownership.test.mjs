import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { preserveUnacknowledgedWrites, storageWriteOwner } from './storage-write-ownership.mjs';

const key = 'openvision.model-providers.v1';
const empty = JSON.stringify({ version: 1, activeId: null, providers: [{ id: 'fixture', models: [] }] });
const discovered = JSON.stringify({ version: 1, activeId: null, providers: [{ id: 'fixture', models: [{ id: 'model' }] }] });

function fixture(source) {
  const owner = storageWriteOwner(source);
  const methods = ['set', 'delete', 'acceptExternal', 'flushPending', 'hasPending',
    'openvisionHasUnacknowledgedWrite', 'openvisionMarkAcknowledged',
    'hasUnacknowledgedWrite', 'markAcknowledged'].flatMap(name => {
    const method = owner.body.body.find(node => node.key?.name === name);
    return method ? [source.slice(method.start, method.end)] : [];
  });
  const missing = value => value === undefined || value === null;
  const object = value => value !== null && typeof value === 'object';
  const Storage = runInNewContext(`(class { ${methods.join('\n')} })`, {
    yf: missing, Qk: missing, Tf: missing, Bh: object, Tg: object, dp: object,
    $vc: JSON.stringify, bku: JSON.stringify, QNc: JSON.stringify,
  });
  const events = [];
  const unacknowledged = new Set();
  const storage = Object.assign(new Storage(), { state: 1, cache: new Map([[key, empty]]),
    pendingInserts: new Map(), pendingDeletes: new Set(),
    openvisionUnacknowledgedKeys: unacknowledged, unacknowledgedKeys: unacknowledged, whenFlushedCallbacks: [],
    database: { async updateItems() {} },
    _onDidChangeStorage: { fire: event => events.push(event) }, async doFlush() {},
  });
  return { storage, events };
}

for (const variant of ['desktop', 'glass']) {
  const original = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
  const patched = preserveUnacknowledgedWrites(original);

  test(`${variant}: original stale notification hides discovery; pending owner preserves the newer catalog`, async () => {
    for (const [source, preserved] of [[original, false], [patched, true]]) {
      const { storage, events } = fixture(source);
      await storage.set(key, discovered);
      storage.acceptExternal(key, empty);
      assert.equal(storage.cache.get(key), preserved ? discovered : empty);
      assert.equal(storage.pendingInserts.get(key), discovered);
      assert.equal(events.filter(event => event.external).length, preserved ? 0 : 1);
    }
  });

  test(`${variant}: pending provider removal cannot be resurrected by an earlier notification`, async () => {
    const { storage } = fixture(patched);
    await storage.delete(key);
    storage.acceptExternal(key, empty);
    assert.equal(storage.cache.has(key), false);
    assert.equal(storage.pendingDeletes.has(key), true);
  });

  test(`${variant}: external provider changes and deletions apply when no local write is pending`, () => {
    const { storage, events } = fixture(patched);
    storage.acceptExternal(key, discovered);
    assert.equal(storage.cache.get(key), discovered);
    storage.acceptExternal(key, undefined);
    assert.equal(storage.cache.has(key), false);
    assert.equal(events.length, 2);
  });

  test(`${variant}: pending ownership also protects other local settings`, async () => {
    const { storage } = fixture(patched);
    await storage.set('unrelated', 'local');
    storage.acceptExternal('unrelated', 'external');
    assert.equal(storage.cache.get('unrelated'), 'local');
    storage.pendingInserts.clear();
    storage.acceptExternal('unrelated', 'external');
    assert.equal(storage.cache.get('unrelated'), 'external');
  });

  for (const operation of ['set', 'delete']) test(`${variant}: in-flight ${operation} remains owned until IPC acknowledgment`, async () => {
    for (const [source, protectedWrite] of [[original, false], [patched, true]]) {
      const { storage } = fixture(source), pending = Promise.withResolvers();
      storage.database.updateItems = () => pending.promise;
      if (operation === 'set') await storage.set(key, discovered);
      else await storage.delete(key);
      const flushing = storage.flushPending();
      assert.equal(storage.pendingInserts.size + storage.pendingDeletes.size, 0);
      storage.acceptExternal(key, empty);
      assert.equal(storage.cache.get(key), protectedWrite ? operation === 'set' ? discovered : undefined : empty);
      pending.resolve(); await flushing;
      assert.equal(storage.openvisionUnacknowledgedKeys.size, 0);
      storage.acceptExternal(key, empty);
      assert.equal(storage.cache.get(key), empty);
    }
  });

  test(`${variant}: acknowledged chunks accept later remote changes while remaining keys stay protected`, async () => {
    const { storage } = fixture(patched), pending = Promise.withResolvers();
    let acknowledge;
    storage.database.updateItems = (_batch, callback) => { acknowledge = callback; return pending.promise; };
    await storage.set('first', 'local'); await storage.set('second', 'local');
    const flushing = storage.flushPending();
    acknowledge({ insert: new Map([['first', 'local']]) });
    storage.acceptExternal('first', 'remote'); storage.acceptExternal('second', 'stale');
    assert.equal(storage.cache.get('first'), 'remote');
    assert.equal(storage.cache.get('second'), 'local');
    pending.resolve(); await flushing;
    assert.equal(storage.openvisionUnacknowledgedKeys.size, 0);
  });

  test(`${variant}: failed IPC settles ownership without retaining unbounded key state`, async () => {
    const { storage } = fixture(patched);
    storage.database.updateItems = async () => { throw new Error('injected IPC failure'); };
    await storage.set(key, discovered);
    await assert.rejects(storage.flushPending(), /injected IPC failure/);
    assert.equal(storage.openvisionUnacknowledgedKeys.size, 0);
    storage.acceptExternal(key, empty);
    assert.equal(storage.cache.get(key), empty);
  });

  test(`${variant}: transform is additive, repeatable and rejects producer drift`, () => {
    assert.equal(preserveUnacknowledgedWrites(patched), patched);
    const method = storageWriteOwner(original).body.body.find(node => node.key?.name === 'acceptExternal');
    const source = original.slice(method.start, method.end);
    const mutations = [original.replace(source, source.replace('acceptExternal(', 'changedExternal(')),
      original.replaceAll('this.pendingInserts.set(', 'this.changedInserts.set('),
      original.replace(source, source.replace('external: !0', 'external: !1'))];
    for (const changed of mutations)
      assert.throws(() => preserveUnacknowledgedWrites(changed), /[Pp]rovider storage|Storage write/);
  });
}

test('patched storage and the published 3.24.18 reference preserve the same pending and in-flight ownership', async () => {
  const reference = await readFile(new URL('../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/storage.js', import.meta.url), 'utf8');
  const sources = [reference];
  for (const variant of ['desktop', 'glass']) sources.push(preserveUnacknowledgedWrites(
    await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8')));
  for (const source of sources) {
    const { storage } = fixture(source), pending = Promise.withResolvers();
    storage.database.updateItems = () => pending.promise;
    await storage.set(key, discovered);
    storage.acceptExternal(key, empty);
    assert.equal(storage.cache.get(key), discovered);
    const flushing = storage.flushPending();
    storage.acceptExternal(key, empty);
    assert.equal(storage.cache.get(key), discovered);
    pending.resolve(); await flushing;
    storage.acceptExternal(key, empty);
    assert.equal(storage.cache.get(key), empty);
  }
});
