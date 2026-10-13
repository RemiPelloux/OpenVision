import test from 'node:test';
import assert from 'node:assert/strict';
import { ModelProviders, requestProviderRoute, requestProvider, activeModelIds, allCatalog } from './model-providers.js';

const model = id => ({ id, name: id, enabled: true });
const provider = (id, models = [model(id)]) => ({ id, name: id, url: `https://${id}.test/v1`, models });
function fixture(providers) {
  let saved = JSON.stringify({ version: 1, providers, activeId: null });
  const counts = { writes: 0, publications: 0, secrets: 0 };
  const bridge = {
    storage: { get: () => saved, store: (_key, value) => { saved = value; counts.writes++; }, flush: async () => {} },
    secrets: { get: async () => { counts.secrets++; return 'fixture'; }, set: async () => {} },
    reactive: { setApplicationUserPersistentStorage() {}, manualSave() {} },
    ai: { modelConfigService: { setModelConfig() {} }, handleAvailableModelsChange: () => counts.publications++ },
  };
  return { bridge, counts, providers: new ModelProviders(bridge) };
}

test('routing reuses one revision without retaining mutable provider data or credentials', async () => {
  const f = fixture([provider('first', [model('shared')]), provider('second', [model('shared'), model('other')])]);
  const storage = f.bridge.storage;
  const first = requestProviderRoute(storage, 'shared');
  for (let i = 0; i < 100; i++) assert.equal(requestProviderRoute(storage, 'shared'), first);
  assert.deepEqual(activeModelIds(storage), ['shared', 'other']);
  assert.equal(Object.isFrozen(first), true);
  assert.equal(first.providerId, 'first');
  let key = 'one'; f.bridge.secrets.get = async () => key;
  assert.equal((await requestProvider(storage, f.bridge.secrets, 'shared')).apiKey, 'one');
  key = 'two';
  assert.equal((await requestProvider(storage, f.bridge.secrets, 'shared')).apiKey, 'two');
  f.providers.state.providers[0].models[0].enabled = false;
  await f.providers.persist();
  assert.equal(requestProviderRoute(storage, 'shared').providerId, 'second');
  f.providers.state.providers[1].url = 'https://changed.test/v1';
  await f.providers.persist();
  assert.equal(requestProviderRoute(storage, 'other').baseUrl, 'https://changed.test/v1');
  assert.equal(requestProviderRoute(fixture([provider('isolated')]).bridge.storage, 'shared'), undefined);
  storage.store('', '{broken');
  assert.throws(() => requestProviderRoute(storage, 'shared'));
  storage.store('', JSON.stringify({ version: 1, activeId: null, providers: [] }));
  assert.deepEqual(activeModelIds(storage), []);
});

test('completion list materializes only visible summaries, preserving selection, duplicates and all matches', () => {
  const f = fixture([provider('many', Array.from({ length: 10000 }, (_, i) => model(`m${i}`))),
    provider('duplicate', [model('m0')])]);
  for (const p of f.providers.state.providers)
    for (const m of p.models) Object.defineProperty(m, 'capabilities', { get() { assert.fail('Completion must not hydrate reasoning variants'); } });
  const choices = f.providers.completionChoices('', 'm9999', 40);
  assert.equal(choices.count, 10000); assert.equal(choices.models.length, 41);
  assert.equal(choices.models[0].name, 'm9999');
  assert.equal(choices.models[1].providerId, 'many');
  const filtered = f.providers.completionChoices('m9998', 'm9999', 40);
  assert.equal(filtered.count, 1);
  assert.deepEqual(filtered.models.map(m => m.name), ['m9999', 'm9998']);
  f.providers.state.providers[0].models[9999].enabled = false;
  assert.equal(f.providers.completionChoices('m9998', 'm9999', 40).models.length, 1);
});

test('batch discovery bounds active requests, coalesces callers and persists/publishes once', async () => {
  const f = fixture(Array.from({ length: 8 }, (_, i) => provider(`p${i}`)));
  const gates = [], entered = Promise.withResolvers();
  let active = 0, peak = 0, requests = 0;
  f.bridge.request = async url => {
    requests++; active++; peak = Math.max(peak, active);
    const gate = Promise.withResolvers(); gates.push(gate);
    if (gates.length === 3) entered.resolve();
    await gate.promise; active--;
    return { data: [{ id: new URL(url).hostname }] };
  };
  const first = f.providers.discoverMissingCapabilities();
  assert.equal(f.providers.discoverMissingCapabilities(), first);
  await entered.promise;
  assert.equal(requests, 3, 'Unbounded fan-out must not start all providers');
  for (let completed = 0; completed < 8; completed++) {
    while (!gates[completed]) await new Promise(resolve => setImmediate(resolve));
    gates[completed].resolve();
  }
  await first;
  assert.equal(requests, 8); assert.equal(peak, 3);
  assert.equal(f.counts.writes, 1); assert.equal(f.counts.publications, 1); assert.equal(f.counts.secrets, 8);
  assert.equal(activeModelIds(f.bridge.storage).length, 16, 'Discovery retains the eight saved IDs alongside new entries');
  assert.equal(f.providers.state.providers.flatMap(provider => provider.models)
    .filter(model => model.discoveryStatus === 'unlisted').length, 8);
  await f.providers.discoverMissingCapabilities();
  assert.equal(requests, 8); assert.equal(f.counts.writes, 1);
});

test('batch partial failure retains successful models, manual entries and retryability', async () => {
  const f = fixture([provider('ok', [{ ...model('manual'), manual: true }, { ...model('ok'), enabled: false }]), provider('fails')]);
  f.bridge.request = async url => {
    if (url.includes('fails')) throw new Error('HTTP 503');
    return { data: [{ id: 'ok' }] };
  };
  await assert.rejects(f.providers.discoverMissingCapabilities(), /HTTP 503/);
  const restored = JSON.parse(f.bridge.storage.get()).providers;
  assert.deepEqual(restored[0].models.map(m => [m.id, m.enabled]), [['ok', false], ['manual', true]]);
  assert.equal(restored[0].capabilitiesDiscovered, true);
  assert.equal(restored[1].models[0].id, 'fails');
  assert.equal(f.counts.writes, 1); assert.equal(f.counts.publications, 1);
});

test('concurrent explicit discovery shares work and rejects stale provider responses', async () => {
  const f = fixture([provider('p')]), gate = Promise.withResolvers(), entered = Promise.withResolvers();
  await assert.rejects(f.providers.discover('missing'), /no longer exists/);
  let requests = 0;
  f.bridge.request = async () => { requests++; entered.resolve(); return gate.promise; };
  const first = f.providers.discover('p');
  assert.equal(f.providers.discover('p'), first);
  await entered.promise;
  gate.resolve({ data: [{ id: 'new' }] }); await first;
  assert.equal(requests, 1); assert.equal(f.counts.publications, 1); assert.equal(f.counts.writes, 1);
  const changed = Promise.withResolvers(), called = Promise.withResolvers();
  f.bridge.request = async () => { called.resolve(); return changed.promise; };
  const stale = f.providers.discover('p'); await called.promise;
  await f.providers.save({ id: 'p', name: 'Moved', url: 'https://moved.test/v1' });
  changed.resolve({ data: [{ id: 'stale' }] });
  await assert.rejects(stale, /changed during discovery/);
  assert.deepEqual(allCatalog(f.bridge.storage).map(m => m.name), ['new', 'p']);
  assert.equal(f.providers.get('p').models[1].discoveryStatus, 'unlisted');
});

test('provider replacement during secret lookup cannot dispatch to the old endpoint', async () => {
  const f = fixture([provider('p')]), key = Promise.withResolvers();
  f.bridge.secrets.get = () => key.promise;
  f.bridge.request = () => assert.fail('Stale provider must not dispatch');
  const pending = f.providers.discover('p');
  await f.providers.save({ id: 'p', name: 'New', url: 'https://new.test/v1' });
  key.resolve('fixture');
  await assert.rejects(pending, /changed during discovery/);
});
