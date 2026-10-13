import test from 'node:test';
import assert from 'node:assert/strict';
import { modelSelectionId, parseModelSelection, resolveAgentModel } from './model-identity.js';
import { allCatalog, requestProvider, requestAgentProvider } from './model-providers.js';

function fixture() {
  const providers = ['one', 'two'].map(id => ({ id, name: id, url: `https://${id}.test/v1`,
    models: ['shared', id].map(model => ({ id: model, name: model, enabled: true })) }));
  const reads = [];
  return { providers, reads, storage: { get: () => JSON.stringify({ version: 1, activeId: null, providers }) },
    secrets: { get: async key => { reads.push(key); return `${key}-fixture`; } } };
}

test('selection identities preserve escaped IDs and reject malformed canonical values', () => {
  const id = modelSelectionId('a:b%', 'model/日本語, :%');
  assert.deepEqual(parseModelSelection(id), { providerId: 'a:b%', modelId: 'model/日本語, :%' });
  assert.equal(parseModelSelection('legacy-id'), undefined);
  for (const value of ['openvision-model:a:', 'openvision-model:a:b:c', 'openvision-model:a:%broken', 'openvision-model:a:%62'])
    assert.throws(() => parseModelSelection(value), /Invalid saved/);
});

test('duplicate choices retain provider ownership through parent and child request boundaries', async () => {
  const f = fixture(), first = modelSelectionId('one', 'shared'), second = modelSelectionId('two', 'shared');
  assert.deepEqual(allCatalog(f.storage).map(model => model.name), [first, modelSelectionId('one', 'one'), second, modelSelectionId('two', 'two')]);
  assert.deepEqual(allCatalog(f.storage).map(model => model.legacySlugs), [[], ['one'], [], ['two']]);
  await assert.rejects(requestProvider(f.storage, f.secrets, 'shared'), /multiple providers/);
  const agent = await requestAgentProvider(f.storage, f.secrets, first);
  assert.equal(f.reads.length, 2, 'Read each provider secret once per turn');
  const options = { modelId: first, localProvider: { kind: 'http', openvisionProviders: agent.openvisionProviders } };
  const parent = resolveAgentModel(options), child = resolveAgentModel({ ...options, modelId: second });
  assert.equal(parent.modelId, 'shared'); assert.equal(child.modelId, 'shared');
  assert.equal(parent.localProvider.endpoints[0].baseUrl, 'https://one.test/v1');
  assert.equal(child.localProvider.endpoints[0].apiKey, 'openvision.provider.two-fixture');
  assert.equal(options.modelId, first); assert.equal(options.localProvider.endpoints, undefined);
  assert.equal(f.reads.length, 2, 'Child requests use the turn snapshot');
  const completion = await requestProvider(f.storage, f.secrets, second);
  assert.equal(completion.baseUrl, 'https://two.test/v1'); assert.equal(completion.modelId, 'shared');
});

test('disabled or removed selections fail without crossing providers, including legacy children', async () => {
  const f = fixture(), selected = modelSelectionId('one', 'shared');
  f.providers[0].models[0].enabled = false;
  await assert.rejects(requestProvider(f.storage, f.secrets, selected), /unavailable/);
  await assert.rejects(requestProvider(f.storage, f.secrets, 'shared'), /multiple providers/);
  const config = await requestAgentProvider(f.storage, f.secrets, modelSelectionId('two', 'shared'));
  assert.throws(() => resolveAgentModel({ modelId: 'shared', localProvider: config }), /unavailable/);
  f.providers.shift();
  await assert.rejects(requestAgentProvider(f.storage, f.secrets, selected), /unavailable/);
});

for (const request of [requestProvider, requestAgentProvider]) {
  test(`${request.name} rejects changed configuration during secret lookup and never caches secrets`, async () => {
    const f = fixture(), gate = Promise.withResolvers();
    f.secrets.get = () => gate.promise;
    const pending = request(f.storage, f.secrets, modelSelectionId('one', 'one'));
    f.providers[0].url = 'https://changed.test/v1'; gate.resolve('old-fixture');
    await assert.rejects(pending, /settings changed/);
    f.secrets.get = async () => 'new-fixture';
    assert.equal((await request(f.storage, f.secrets, modelSelectionId('one', 'one'))).apiKey, 'new-fixture');
  });
}
