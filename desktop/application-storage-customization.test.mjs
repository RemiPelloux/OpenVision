import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { customizeApplicationStorage, localCatalogOwnKey, skipOwnStorageEcho, marker } from './application-storage-customization.mjs';

const variants = Object.fromEntries(await Promise.all(['desktop', 'glass'].map(async variant =>
  [variant, await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8')])));

// Execute the actual recovered (or patched) application-storage change handler
// against a stub service. Free bundle identifiers resolve through a scope whose
// storage key is "app-user"; `this` is the stub reactive storage service.
function changeHandler(text) {
  const anchor = text.indexOf('const s = this.stringifyAvailableModelsCatalogForChangeCheck();');
  const start = text.lastIndexOf(')((', anchor) + 2;
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  assert.equal(node.type, 'ArrowFunctionExpression');
  const source = text.slice(node.start, node.end);
  const keyName = /this\.updatePersistentStorage\(\n(?:\s+[^\n]+\n){4}\s+0,\n\s+([\w$]+),/.exec(source)[1];
  const scope = new Proxy({}, { has: (_, name) => typeof name === 'string' && !['undefined', 'Error'].includes(name),
    get: (_, name) => name === keyName ? 'app-user' : name === Symbol.unscopables ? undefined : `free:${String(name)}` });
  const factory = new Function('scope', `with (scope) { return function () { return (${source}); }; }`)(scope);
  return ({ stored, savedId, event = { key: 'app-user', scope: -1 } }) => {
    const calls = [];
    const service = {
      saveIdsCache: new Map(savedId ? [['app-user-1', savedId]] : []),
      storageService: { get: (key, where) => { calls.push(['get', key, where]); return stored; } },
      applicationUserPersistentStorage: {}, _setApplicationUserPersistentStorage() {},
      stringifyAvailableModelsCatalogForChangeCheck: () => { calls.push(['catalog']); return 'catalog'; },
      updatePersistentStorage: (...args) => calls.push(['update', args[3], args[5]]),
      bumpAvailableModelsCatalogRevision: () => calls.push(['bump']),
    };
    factory.call(service)(event);
    return calls.filter(([name]) => name !== 'get');
  };
}

// Execute the recovered (or patched) gate getter and persisted-path selection.
function persistedPaths(text, variant, localMode) {
  const start = text.indexOf('    get isModelCatalogOwnKeyEnabled() {');
  const next = text.indexOf('    getDoNotPersistPathsForStorageKey(', start);
  const source = text.slice(start, text.indexOf('\n    }\n', next) + 6);
  const key = /if \(([\w$]+) !== ([\w$]+)\) return [\w$]+;/.exec(source);
  const flag = variant === 'desktop' ? 'zc' : 'Rl';
  const scope = new Proxy({}, { has: (_, name) => typeof name === 'string' && name !== 'undefined',
    get: (_, name) => name === flag ? { localMode } : name === key[2] ? 'app-user' : name === Symbol.unscopables ? undefined : [['secret']] });
  const Class = new Function('scope', `with (scope) { return (class { ${source} }); }`)(scope);
  const service = Object.assign(new Class(), { storageService: { getBoolean: (gate, where, fallback) => fallback } });
  return { gate: service.isModelCatalogOwnKeyEnabled, paths: service.getDoNotPersistPathsForStorageKey('app-user', []).map(path => path.join('.')) };
}

for (const [variant, original] of Object.entries(variants)) {
  test(`${variant}: local mode keeps the published catalog out of the application-user object`, () => {
    const patched = localCatalogOwnKey(original, variant);
    assert.deepEqual(persistedPaths(original, variant, true), { gate: false, paths: ['secret'] });
    assert.deepEqual(persistedPaths(patched, variant, true), { gate: true, paths: ['secret', 'availableDefaultModels2', 'privateInferenceCatalog'] });
    assert.deepEqual(persistedPaths(patched, variant, false), persistedPaths(original, variant, false), 'hosted mode keeps the recovered gate');
    assert.equal(localCatalogOwnKey(patched, variant), patched);
    assert.equal(customizeApplicationStorage(customizeApplicationStorage(original, variant), variant), customizeApplicationStorage(original, variant));
    assert.throws(() => localCatalogOwnKey(original.replace('"cursor.modelCatalogOwnKey.gateEnabled"', '"other"'), variant), /gate key changed/);
  });
}

for (const [variant, original] of Object.entries(variants)) {
  const patched = skipOwnStorageEcho(original);
  const before = changeHandler(original), after = changeHandler(patched);
  const own = { stored: '{"a":1,"SPECIAL_KEY_id":"id-7"}', savedId: 'id-7' };
  const external = { stored: '{"a":2,"SPECIAL_KEY_id":"id-other"}', savedId: 'id-7' };

  test(`${variant}: the window's own save skips both catalog serializations`, () => {
    assert.deepEqual(before(own), [['catalog'], ['update', -1, 'app-user'], ['catalog']]);
    assert.deepEqual(after(own), []);
  });

  test(`${variant}: external saves, unknown ids and other events keep the recovered path`, () => {
    const recovered = [['catalog'], ['update', -1, 'app-user'], ['catalog']];
    for (const input of [external, { stored: own.stored }, { savedId: 'id-7' },
      { ...own, event: { key: 'other', scope: -1 } }, { ...own, event: { key: 'app-user', scope: 0 } }]) {
      assert.deepEqual(before(input), recovered);
      assert.deepEqual(after(input), recovered);
    }
  });

  test(`${variant}: the customization is idempotent and guarded`, () => {
    assert.equal(skipOwnStorageEcho(patched), patched);
    assert.equal(patched.split(marker).length, 2);
    assert.throws(() => skipOwnStorageEcho(original.replace('throwIfSavedObjectIsTheSame: !0', 'throwIfSavedObjectIsTheSame: !1')),
      /own-save contract changed: update/);
    assert.throws(() => skipOwnStorageEcho(original.replace('const s = this.stringifyAvailableModelsCatalogForChangeCheck();', 'const s = 0;')),
      /handler owner changed/);
  });
}
