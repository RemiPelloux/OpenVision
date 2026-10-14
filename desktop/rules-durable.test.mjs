import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { DatabaseSync } from 'node:sqlite';
import { commitRules } from './rules-durable.js';
import { durableRuleIpc } from './rules-durability-customization.mjs';

const prefix = 'openvision.user-rule.v1.';
const migrationKey = 'openvision.user-rules.legacy-migrated.v1';

async function persistentOwner(t) {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-rule-durability-'));
  const db = new DatabaseSync(join(directory, 'state.vscdb'));
  t.after(async () => { db.close(); await rm(directory, { recursive: true, force: true }); });
  db.exec('CREATE TABLE ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB)');
  const cache = new Map(), events = [];
  // The native driver has a callback-based serialization queue; this adapter
  // runs its synchronous enqueue callback around real node:sqlite statements.
  // This does not establish native cross-transaction queue ordering.
  const connection = { isInMemory: false, db: { serialize: callback => callback() } };
  const diskValue = key => db.prepare('SELECT value FROM ItemTable WHERE key = ?').get(key)?.value;
  const owner = { isInMemory: () => false, storage: {
    database: { whenConnected: Promise.resolve(connection),
      async runParams(actual, sql, params) {
        assert.equal(actual, connection);
        return db.prepare(sql).run(...params);
      },
    },
    acceptExternal(key, value) {
      assert.equal(diskValue(key), value, 'The published value must already be committed to SQLite');
      if (value === undefined) cache.delete(key); else cache.set(key, value);
      events.push({ key, value });
    },
  } };
  return { owner, db, cache, events, diskValue };
}

test('durable rule writes publish only committed SQLite values and preserve unrelated records', async t => {
  const { owner, db, cache, events, diskValue } = await persistentOwner(t);
  db.prepare('INSERT INTO ItemTable (key,value) VALUES (?,?)').run('unrelated.setting', 'unchanged');
  const key = prefix + 'first';
  await commitRules(owner, { key, value: 'original' });
  await commitRules(owner, { key, value: 'edited' });
  await commitRules(owner, { key: migrationKey, value: 'true' });
  await commitRules(owner, { key, value: null });
  assert.deepEqual([...cache], [[migrationKey, 'true']]);
  assert.equal(diskValue(key), undefined);
  assert.equal(diskValue('unrelated.setting'), 'unchanged');
  assert.deepEqual(events, [
    { key, value: 'original' }, { key, value: 'edited' },
    { key: migrationKey, value: 'true' }, { key, value: undefined },
  ]);
});

for (const operation of ['INSERT', 'UPDATE', 'DELETE']) {
  test(`SQLite ${operation} failure preserves committed state and permits a later retry`, async t => {
    const { owner, db, cache, events, diskValue } = await persistentOwner(t);
    const key = prefix + 'saved', addedKey = prefix + 'new';
    await commitRules(owner, { key, value: 'original' });
    const beforeCache = new Map(cache), beforeEvents = [...events];
    const row = operation === 'DELETE' ? 'OLD' : 'NEW';
    db.exec(`CREATE TRIGGER reject_rule_write BEFORE ${operation} ON ItemTable
      WHEN ${row}.key LIKE 'openvision.user-rule.v1.%'
      BEGIN SELECT RAISE(ABORT, 'seeded rule statement failure'); END;`);
    const request = { key: operation === 'INSERT' ? addedKey : key,
      value: operation === 'DELETE' ? null : 'new value' };
    await assert.rejects(commitRules(owner, request), /seeded rule statement failure/);
    assert.deepEqual(cache, beforeCache);
    assert.deepEqual(events, beforeEvents, 'Failed statements do not publish storage changes');
    assert.equal(diskValue(key), 'original');
    assert.equal(diskValue(addedKey), undefined);
    db.exec('DROP TRIGGER reject_rule_write');
    await commitRules(owner, request);
    assert.equal(diskValue(request.key), request.value ?? undefined);
    assert.equal(cache.get(request.key), request.value ?? undefined);
    assert.equal(events.length, beforeEvents.length + 1);
  });
}

test('durable writes reject foreign keys, invalid values and nonpersistent storage without changes', async t => {
  const { owner, db, cache, events } = await persistentOwner(t);
  for (const request of [
    null, undefined,
    { key: 'foreign.setting', value: 'no' },
    { key: migrationKey + '.foreign', value: 'no' },
    { key: 7, value: 'no' },
    { key: prefix + 'id', value: {} },
    { key: prefix + 'id', value: undefined },
  ]) await assert.rejects(commitRules(owner, request), /Invalid OpenVision rule write/);
  owner.isInMemory = () => true;
  await assert.rejects(commitRules(owner, { key: prefix + 'id', value: 'no' }), /Persistent.*unavailable/);
  owner.isInMemory = () => false;
  const connection = await owner.storage.database.whenConnected;
  connection.isInMemory = true;
  await assert.rejects(commitRules(owner, { key: prefix + 'id', value: 'no' }), /Persistent.*unavailable/);
  connection.isInMemory = false;
  owner.storage.database.whenConnected = undefined;
  await assert.rejects(commitRules(owner, { key: prefix + 'id', value: 'no' }), /Persistent.*unavailable/);
  assert.equal(db.prepare('SELECT count(*) AS count FROM ItemTable').get().count, 0);
  assert.equal(cache.size, 0);
  assert.deepEqual(events, []);
});

test('database connection failure reaches the caller before any rule cache publication', async t => {
  const { owner, cache, events } = await persistentOwner(t);
  const savedConnection = owner.storage.database.whenConnected;
  owner.storage.database.whenConnected = Promise.reject(new Error('connection unavailable'));
  await assert.rejects(commitRules(owner, { key: prefix + 'retry', value: 'saved' }), /connection unavailable/);
  assert.equal(cache.size, 0);
  assert.deepEqual(events, []);
  owner.storage.database.whenConnected = savedConnection;
  await commitRules(owner, { key: prefix + 'retry', value: 'saved' });
  assert.equal(cache.get(prefix + 'retry'), 'saved');
});

test('native main storage IPC gains an idempotent durable rule operation at its selected storage owner', async t => {
  let source;
  try { source = await readFile(new URL('../../cursor/readable/app/out/main.js', import.meta.url), 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return t.skip('Recovered native main bundle required'); throw error; }
  const patched = durableRuleIpc(source);
  assert.equal(durableRuleIpc(patched), patched);
  assert.match(patched, /import \{commitRules as openvisionCommitRules\} from "\.\/openvision-rules-durable\.js"/);
  assert.equal([...patched.matchAll(/case "openvisionRulesUpdate":/g)].length, 1);
  const at = patched.indexOf('case "openvisionRulesUpdate":');
  assert.match(patched.slice(at - 5000, at), /await this\.withStorageInitialized\(i, a\)/);
  assert.match(patched.slice(at, at + 200), /return openvisionCommitRules\(o, s\);[\s\S]*case "updateItems"/);
  assert.throws(() => durableRuleIpc(source.replace('case "updateItems":', 'case "changedItems":')), /IPC owner changed/);
  assert.throws(() => durableRuleIpc(source + '\n' + source), /IPC owner changed/);
  assert.throws(() => durableRuleIpc(source.replace('await this.withStorageInitialized(i, a)', 'await changedOwner()')), /IPC owner changed/);
});
