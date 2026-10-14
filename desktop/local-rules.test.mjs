import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { LocalRules } from './local-rules.js';
import { localUserRules } from './rules-customization.mjs';

function storageFixture(values = new Map()) {
  const workspace = new Map(), listeners = new Set(), owners = new Map();
  const at = scope => { assert.ok(scope === 0 || scope === 1); return scope === 0 ? values : workspace; };
  const fire = (scope, key) => { for (const item of listeners) if (item.scope === scope) item.callback({key}); };
  for (const scope of [0, 1]) {
    const persisted = new Map(at(scope));
    const profile = scope === 0 ? { id: 'test-profile' } : undefined;
    const project = scope === 1 ? { id: 'test-workspace' } : undefined;
    owners.set(scope, { items: at(scope), persisted,
      database: { profile, workspace: project, channel: {
        async call(command, request) {
          assert.equal(command, 'openvisionRulesUpdate');
          assert.equal(request.profile, profile); assert.equal(request.workspace, project);
          if (request.value === null) persisted.delete(request.key);
          else persisted.set(request.key, request.value);
        },
      } },
      acceptExternal(key, value) {
        if (value === undefined) at(scope).delete(key); else at(scope).set(key, value);
        fire(scope, key);
      },
    });
  }
  return { values, listeners,
    getStorage: scope => owners.get(scope),
    keys: (scope, target) => { assert.equal(target, 1); return [...at(scope).keys()]; },
    get: (key, scope) => at(scope).get(key),
    onDidChangeValue: scope => callback => { const item = {scope, callback}; listeners.add(item); return {dispose: () => listeners.delete(item)}; },
  };
}

test('local rules survive a new owner, preserve unrelated writes and migrate legacy text once', async () => {
  const storage = storageFixture();
  const first = new LocalRules(storage), second = new LocalRules(storage);
  await first.migrateLegacy('Use meaningful names.');
  await second.migrateLegacy('Use meaningful names.');
  const id = await first.add('  Tests ', 'Test changed behavior.');
  await second.add('Docs', 'Document configuration.');
  await first.update(id, 'Tests', 'Test failures too.');
  assert.equal(new LocalRules(storage).read().length, 3);
  assert.equal(second.read().find(item => item.id === id).knowledge, 'Test failures too.');
  await first.clear();
  await second.migrateLegacy('Use meaningful names.');
  assert.deepEqual(second.read(), [], 'Deleted legacy rules must not reappear after restart');
  assert.deepEqual(new LocalRules(storageFixture()).read(), [], 'Another profile is isolated');
});

test('rules survive missing or stale shared key-target metadata', async () => {
  const storage = storageFixture(), rules = new LocalRules(storage);
  await rules.add('Window A', 'Keep first');
  await rules.add('Window B', 'Keep second');
  storage.keys = () => [];
  assert.equal(new LocalRules(storage).read().length, 2);
  storage.getStorage = () => undefined;
  assert.throws(() => rules.read(), /storage is unavailable/);
});

test('user rules follow the profile but generated memories stay in their workspace', async () => {
  const storage = storageFixture(), first = new LocalRules(storage);
  await first.add('User preference', 'Use tests.');
  await first.add('Project note', 'Internal API detail.', 'conversation');
  const otherProject = new LocalRules(storageFixture(storage.values));
  assert.equal(first.read().length, 2);
  assert.equal(otherProject.read().length, 1);
  assert.equal(otherProject.read()[0].isGenerated, false);
});

test('malformed and failed storage writes preserve prior rule data', async () => {
  const storage = storageFixture(), rules = new LocalRules(storage);
  const id = await rules.add('Keep', 'Original');
  const before = new Map(storage.values);
  const { channel } = storage.getStorage(0).database, save = channel.call;
  channel.call = async () => { throw new Error('storage unavailable'); };
  await assert.rejects(rules.update(id, 'Change', 'New'), /storage unavailable/);
  await assert.rejects(rules.remove(id), /storage unavailable/);
  assert.deepEqual(storage.values, before);
  assert.deepEqual(storage.getStorage(0).persisted, before);
  channel.call = save;
  await rules.update(id, 'Recovered', 'Saved after recovery');
  assert.equal(rules.read()[0].knowledge, 'Saved after recovery');
  const key = [...storage.values.keys()][0];
  storage.values.set(key, '{broken');
  assert.throws(() => rules.read(), /invalid JSON/);
  await assert.rejects(rules.add('New', 'Text'), /invalid JSON/);
  await assert.rejects(rules.clear(), /invalid JSON/);
  assert.equal(storage.values.get(key), '{broken');
  storage.values.set(key, JSON.stringify({id:'different', title:'x', knowledge:'y', isGenerated:false}));
  assert.throws(() => rules.read(), /unsupported format/);
});

test('rule cache and completion wait for the native storage acknowledgement', async () => {
  const storage = storageFixture(), rules = new LocalRules(storage);
  const { channel } = storage.getStorage(0).database, save = channel.call;
  const pending = Promise.withResolvers();
  channel.call = async (...args) => { await pending.promise; return save(...args); };
  let completed = false;
  const adding = rules.add('Pending', 'Only show after commit').then(id => { completed = true; return id; });
  await Promise.resolve();
  assert.deepEqual(rules.read(), []);
  assert.equal(completed, false);
  pending.resolve();
  const id = await adding;
  assert.equal(rules.read()[0].id, id);
  assert.equal(storage.getStorage(0).persisted.size, 1);
});

test('interrupted legacy migration retries without duplicating its saved rule', async () => {
  const storage = storageFixture(), rules = new LocalRules(storage);
  const { channel } = storage.getStorage(0).database, save = channel.call;
  channel.call = async (command, request) => {
    if (request.key === 'openvision.user-rules.legacy-migrated.v1') throw new Error('migration marker failure');
    return save(command, request);
  };
  await assert.rejects(rules.migrateLegacy('Legacy instructions'), /migration marker failure/);
  assert.equal(rules.read().length, 1);
  channel.call = save;
  await rules.migrateLegacy('Legacy instructions');
  assert.equal(rules.read().length, 1);
  assert.equal(storage.values.get('openvision.user-rules.legacy-migrated.v1'), 'true');
});

class Disposable {
  constructor() { this.owned = []; this._store = this; }
  _register(value) { this.owned.push(value); return value; }
  dispose() { for (const value of this.owned) value.dispose(); }
}
class Emitter {
  constructor() { this.listeners = new Set(); }
  event = callback => { this.listeners.add(callback); return {dispose: () => this.listeners.delete(callback)}; };
  fire(value) { for (const callback of this.listeners) callback(value); }
  dispose() { this.listeners.clear(); }
}
function atomStore() {
  const values = new Map([['items', []], ['loading', false]]), subscribers = new Map();
  return { get: key => values.get(key),
    set(key, value) { values.set(key, value); for (const callback of subscribers.get(key) ?? []) callback(); },
    sub(key, callback) { const set = subscribers.get(key) ?? new Set(); subscribers.set(key, set); set.add(callback); return () => set.delete(callback); },
  };
}
const signal = value => [() => value, next => { value = next; }];

function extractClass(text, variant) {
  const anchor = variant === 'desktop' ? 'w$i = class extends Se' : 'RWr = class extends ot';
  const start = text.indexOf('class extends', text.indexOf(anchor));
  const node = parseExpressionAt(text, start, {ecmaVersion:'latest'});
  return text.slice(start, node.end);
}

for (const variant of ['desktop', 'glass']) {
  test(`${variant} recovered rules service persists CRUD, synchronizes windows, and feeds native Agent context`, async t => {
    let source;
    try {
      source = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8')
        .catch(error => {
          if (error.code !== 'ENOENT') throw error;
          return readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
        });
    }
    catch (error) { if (error.code === 'ENOENT') return t.skip('Prepared workbench required'); throw error; }
    const patched = localUserRules(source, variant);
    assert.equal(localUserRules(patched, variant), patched);
    const body = extractClass(patched, variant);
    const prior = patched.replace('/* OpenVision local user rules v3 */', '/* OpenVision local user rules v2 */')
      .replace(body, `class extends ${variant === 'desktop' ? 'Se' : 'ot'} { oldService() {} }`);
    const upgraded = localUserRules(prior, variant);
    assert.equal(extractClass(upgraded, variant), body);
    assert.equal(localUserRules(upgraded, variant), upgraded);
    assert.equal([...upgraded.matchAll(/import \{LocalRules as OpenvisionLocalRules\}/g)].length, 1);
    assert.doesNotMatch(body, /knowledgeBase(?:List|Add|Update|Remove)|aiClientService|cursorAuthenticationService/);
    const Service = runInNewContext(`(${body})`, {
      Se:Disposable, ot:Disposable, me:Emitter, Xe:Emitter, tg:atomStore, Wh:atomStore, Lt:signal, Bt:signal,
      en:dispose=>({dispose}), $n:dispose=>({dispose}), g7t:'items', bkn:'items', SDn:'loading', hvi:'loading',
      OpenvisionLocalRules:LocalRules,
    });
    const storage = storageFixture(), errors = [], ai = {getPersonalContext: () => ''};
    const first = new Service(storage, ai, {error: value=>errors.push(value)});
    const second = new Service(storage, ai, {error: value=>errors.push(value)});
    const id = await first.addItem('Style', 'Use descriptive names.');
    assert.equal(second.items[0].id, id);
    await second.updateItem(id, 'Style', 'Prefer clear names.');
    assert.equal(first.items[0].knowledge, 'Prefer clear names.');
    const generated = await first.addItem('Memory', 'Generated note.', 'conversation');
    const name = variant === 'desktop' ? 'FHf' : '_ES';
    const start = patched.indexOf(`function ${name}(`);
    const node = parseExpressionAt(patched, start, {ecmaVersion:'latest'});
    const mapperText = patched.slice(start, node.end);
    // Native protobuf constructors are value carriers at this boundary.
    const constructors = [...mapperText.matchAll(/new ([\w$]+)\(/g)].map(match=>match[1]);
    const sourceEnum = mapperText.match(/source: ([\w$]+)\.USER/)[1];
    const bindings = Object.fromEntries(constructors.map(name=>[name, class {constructor(value){Object.assign(this,value);}}]));
    bindings[sourceEnum] = {USER:'user', TEAM:'team'};
    const map = runInNewContext(`(${mapperText})`, bindings);
    const context = map({userRules:first.items, teamRules:[]});
    assert.equal(context.length, 1, 'Generated memories do not become unconditional user rules');
    assert.equal(context[0].content, 'Prefer clear names.');
    assert.equal(context[0].fullPath, id);
    await second.removeItem(generated);
    first.dispose(); second.dispose();
    assert.equal(storage.listeners.size, 0);
    const restarted = new Service(storage, ai, {error:value=>errors.push(value)});
    assert.equal(restarted.items.length, 1, 'Rules are loaded before the first request');
    await restarted.removeAll();
    assert.equal(restarted.items.length, 0);
    restarted.dispose();
    assert.deepEqual(errors, []);

    const recoveringStorage = storageFixture(), migrationErrors = [];
    const { channel } = recoveringStorage.getStorage(0).database, save = channel.call;
    channel.call = async () => { throw new Error('temporarily unavailable'); };
    const recovering = new Service(recoveringStorage, {getPersonalContext: () => 'Existing legacy rule'},
      {error: value => migrationErrors.push(value)});
    await assert.rejects(recovering.ensureReady(), /temporarily unavailable/);
    await assert.rejects(recovering.addItem('New', 'Wait for persistence'), /temporarily unavailable/);
    assert.equal(recovering.items.length, 0);
    channel.call = save;
    const recoveredId = await recovering.addItem('New', 'Saved after recovery');
    assert.equal(recovering.items.length, 2, 'Migration and CRUD recover without a restart');
    assert.ok(migrationErrors.length > 0, 'Startup migration failures reach the native log');
    channel.call = async () => { throw new Error('temporarily unavailable'); };
    await assert.rejects(recovering.updateItem(recoveredId, 'New', 'Unsaved edit'), /temporarily unavailable/);
    assert.equal(recovering.items.find(item => item.id === recoveredId).knowledge, 'Saved after recovery');
    channel.call = save;
    await recovering.updateItem(recoveredId, 'New', 'Committed edit');
    assert.equal(recovering.items.find(item => item.id === recoveredId).knowledge, 'Committed edit');
    recovering.dispose();
    assert.equal(recoveringStorage.listeners.size, 0);
  });
}
