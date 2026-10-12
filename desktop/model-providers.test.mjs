import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { ModelProviders, normalizeBaseUrl, parseModels, activeModelIds } from './model-providers.js';
import { customModels } from './custom-models.mjs';

function bridge() {
  const storage = new Map(), secrets = new Map(), settings = {}, selected = [];
  return {
    storage: { get: key => storage.get(key), store: (key, value) => storage.set(key, value), flush: async () => {} },
    secrets: { get: async key => secrets.get(key), set: async (key, value) => secrets.set(key, value), delete: async key => secrets.delete(key) },
    auth: { storeOpenAIKeyAndWait: async key => { settings.key = key; } },
    reactive: { setApplicationUserPersistentStorage: (key, value) => { settings[key] = value; }, manualSave() {} },
    ai: { modelConfigService: { setModelConfig: (...args) => selected.push(args) }, handleAvailableModelsChange() {} },
    request: async (url, key) => { assert.equal(key, 'test-secret'); assert.equal(url, 'https://example.test/v1/models'); return { data: [{ id: 'gpt-test' }, { id: 'gpt-test' }] }; },
    settings, selected, secretsMap: secrets,
  };
}
test('provider discovery, manual names, activation, persistence and deletion share the native gateway', async () => {
  const services = bridge();
  const providers = new ModelProviders(services);
  const a = await providers.save({ name: 'Codex Easy', url: 'https://example.test/v1/', key: 'test-secret' });
  await providers.discover(a.id);
  await providers.updateModels(a.id, [...a.models, { id: 'custom-code', name: 'My Coder', enabled: true, manual: true }]);
  await providers.discover(a.id);
  assert.equal(a.models.length, 2);
  await providers.activate(a.id);
  services.ai.modelConfigService.getModelConfig = () => ({ modelName: 'custom-code' });
  const selectedCount = services.selected.length;
  await providers.discover(a.id);
  assert.equal(services.selected.length, selectedCount, 'Refreshing models must preserve an available selection');
  assert.equal(services.settings.openAIBaseUrl, 'https://example.test/v1');
  assert.equal(services.settings.availableDefaultModels2[1].clientDisplayName, 'My Coder');
  assert.deepEqual(activeModelIds(services.storage), ['gpt-test', 'custom-code']);
  assert.ok(!services.storage.get('openvision.model-providers.v1').includes('test-secret'));
  const restored = new ModelProviders(services);
  assert.equal(restored.state.activeId, a.id);
  const b = await restored.save({ name: 'Local', url: 'http://localhost:1234/v1', key: 'local-key' });
  await restored.activate(b.id);
  assert.equal(services.settings.key, 'local-key');
  assert.deepEqual(services.settings.localProviderModelIds, []);
  await restored.remove(b.id);
  assert.equal(services.settings.useOpenAIKey, false);
  assert.equal(services.secretsMap.has(`openvision.provider.${b.id}`), false);
});
test('malformed discovery leaves configured models available', async () => {
  const services = bridge();
  const providers = new ModelProviders(services);
  const a = await providers.save({ name: 'Local', url: 'http://localhost:1234/v1', key: '' });
  await providers.updateModels(a.id, [{ id: 'coder', name: 'Coder', enabled: true, manual: true }]);
  services.request = async () => ({ data: [{ id: null }] });
  await assert.rejects(providers.discover(a.id), /valid ID/);
  assert.equal(a.models[0].id, 'coder');
  assert.throws(() => normalizeBaseUrl('https://user:secret@example.test/v1'), /without credentials/);
  assert.throws(() => parseModels({ models: [] }), /compatible/);
});
for (const variant of ['desktop', 'glass']) {
  test(`${variant} custom model integration owns settings and polling and is idempotent`, async () => {
    const recovered = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const text = customModels(recovered, variant);
    assert.equal(customModels(text, variant), text);
    assert.ok(text.includes('openvisionMountModels(node, bridge)'));
    assert.ok(text.includes('openvisionActiveModelIds(this.storageService)'));
    assert.ok(text.includes('/* OpenVision local provider ownership */'));
    assert.throws(() => customModels(recovered.replace('children: "Configure gateway"', 'children: "Changed"'), variant), /anchor missing/);
  });
}
