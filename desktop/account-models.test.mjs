import assert from 'node:assert/strict';
import test from 'node:test';
import { refreshAccountModels, allCatalog, requestAgentProvider } from './model-providers.js';
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
