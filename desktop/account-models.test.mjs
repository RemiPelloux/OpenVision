import assert from 'node:assert/strict';
import test from 'node:test';
import { refreshAccountModels, allCatalog, requestAgentProvider, requestProviderRoute } from './model-providers.js';
import { modelSelectionId } from './model-identity.js';
test('signed-in accounts join the picker with ephemeral routing, distinct identity and declared effort', async t => {
  const original = globalThis.window; t.after(() => { globalThis.window = original; });
  let providers = [{ id: 'account-codex-id', name: 'Codex · person@example.invalid', url: 'http://127.0.0.1:12345/v1/codex/id',
    apiKey: 'ephemeral-private-token', models: [{ id: 'gpt-test', name: 'GPT Test', enabled: true,
      capabilities: { reasoningEffortValues: [{ id: 'ultra', value: 'ultra' }], supportsVision: false } }] }];
  globalThis.window = { openvisionProjectHome: { accountCatalog: async () => ({ providers }) } };
  const storage = { get: () => undefined, store: () => assert.fail('Account data must not be persisted') };
  const secrets = { get: () => assert.fail('Account credentials must not use API secret storage') };
  await refreshAccountModels(storage);
  const catalog = allCatalog(storage); assert.equal(catalog.length, 1);
  assert.match(catalog[0].clientDisplayName, /person@example.invalid/);
  assert.equal(JSON.stringify(catalog).includes('ephemeral-private-token'), false);
  const selection = { modelId: modelSelectionId(providers[0].id, 'gpt-test'), parameters: [{ id: 'reasoning', value: 'ultra' }] };
  assert.equal((await requestAgentProvider(storage, secrets, selection)).apiKey, 'ephemeral-private-token');
  providers = []; await refreshAccountModels(storage, true);
  assert.deepEqual(allCatalog(storage), []);
  await assert.rejects(requestAgentProvider(storage, secrets, selection), /unavailable/);
});

test('unchanged account refresh preserves routing; changed tokens and capabilities invalidate it', async t => {
  const original = globalThis.window; t.after(() => { globalThis.window = original; });
  const provider = { id: 'account-test', name: 'Account', url: 'http://127.0.0.1:12345/v1', apiKey: 'first',
    models: [{ id: 'test', name: 'Test', enabled: true, capabilities: { reasoningEffortValues: [{ id: 'high', value: 'high' }] } }] };
  globalThis.window = { openvisionProjectHome: { accountCatalog: async () => ({ providers: [structuredClone(provider)] }) } };
  const storage = { get: () => undefined }, secrets = { get: () => assert.fail('Account key is ephemeral') };
  const id = modelSelectionId(provider.id, 'test');
  assert.equal(await refreshAccountModels(storage, true), true);
  const first = requestProviderRoute(storage, id);
  for (let i = 0; i < 10; i++) {
    assert.equal(await refreshAccountModels(storage, true), false);
    assert.equal(requestProviderRoute(storage, id), first);
  }
  provider.apiKey = 'second';
  assert.equal(await refreshAccountModels(storage, true), true);
  assert.notEqual(requestProviderRoute(storage, id), first);
  assert.equal((await requestAgentProvider(storage, secrets, id)).apiKey, 'second');
  provider.models[0].capabilities.reasoningEffortValues = [];
  await refreshAccountModels(storage, true);
  assert.deepEqual(requestProviderRoute(storage, id).reasoningValues, []);
});

test('failed account refresh clears stale routes and coalesces automatic retries until explicit refresh', async t => {
  const original = globalThis.window; t.after(() => { globalThis.window = original; });
  let now = 1000000;
  t.mock.method(Date, 'now', () => now);
  let attempts = 0, failed = false;
  globalThis.window = { openvisionProjectHome: { accountCatalog: async () => {
    attempts++;
    if (failed) throw Error('Extension host unavailable');
    return { providers: [{ id: 'account-test', name: 'Test', url: 'http://127.0.0.1:12345/v1', apiKey: 'fixture',
      models: [{ id: 'test', name: 'Test', enabled: true }] }] };
  } } };
  const storage = { get: () => undefined }, id = modelSelectionId('account-test', 'test');
  await refreshAccountModels(storage); assert.ok(requestProviderRoute(storage, id));
  failed = true; assert.equal(await refreshAccountModels(storage, true), true);
  assert.equal(requestProviderRoute(storage, id), undefined);
  for (let i = 0; i < 100; i++) assert.equal(await refreshAccountModels(storage), false);
  assert.equal(attempts, 2);
  now += 30001;
  assert.equal(await refreshAccountModels(storage), false); assert.equal(attempts, 3);
  assert.equal(await refreshAccountModels(storage, true), false); assert.equal(attempts, 4);
  failed = false; assert.equal(await refreshAccountModels(storage, true), true);
  assert.ok(requestProviderRoute(storage, id));
});
