import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { ModelProviders, normalizeBaseUrl, parseModels, catalog, activeModelIds, allCatalog } from './model-providers.js';
import { customModels } from './custom-models.mjs';
import { providerDefaultReasoning } from './model-reasoning.js';

const defaultChoice = { value: providerDefaultReasoning, displayName: 'Provider default' };
const variantFor = (model, value) => model.variants.find(item => item.parameterValues[0].value === value);

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
  await providers.ready;
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
  assert.equal(services.settings.availableDefaultModels2[1].clientDisplayName, 'Codex Easy · My Coder');
  assert.deepEqual(activeModelIds(services.storage), ['gpt-test', 'custom-code']);
  assert.deepEqual(allCatalog(services.storage).map(model => model.name), ['gpt-test', 'custom-code']);
  assert.ok(!services.storage.get('openvision.model-providers.v1').includes('test-secret'));
  const restored = new ModelProviders(services);
  await restored.ready;
  assert.equal(restored.state.activeId, a.id);
  const b = await restored.save({ name: 'Local', url: 'http://localhost:1234/v1', key: 'local-key' });
  await restored.activate(b.id);
  assert.equal(services.settings.key, 'local-key');
  assert.deepEqual(services.settings.localProviderModelIds, ['gpt-test', 'custom-code']);
  await restored.remove(b.id);
  assert.equal(services.settings.useOpenAIKey, false);
  assert.equal(services.secretsMap.has(`openvision.provider.${b.id}`), false);
});
test('malformed discovery leaves configured models available', async () => {
  const services = bridge();
  const providers = new ModelProviders(services);
  await providers.ready;
  const a = await providers.save({ name: 'Local', url: 'http://localhost:1234/v1', key: '' });
  await providers.updateModels(a.id, [{ id: 'coder', name: 'Coder', enabled: true, manual: true }]);
  services.request = async () => ({ data: [{ id: null }] });
  await assert.rejects(providers.discover(a.id), /valid ID/);
  assert.equal(a.models[0].id, 'coder');
  assert.throws(() => normalizeBaseUrl('https://user:secret@example.test/v1'), /without credentials/);
  assert.throws(() => parseModels({ models: [] }), /compatible/);
});

test('empty and reduced discovery retain saved choices across restart and recover listed status', async () => {
  const services = bridge(), providers = new ModelProviders(services);
  const provider = await providers.save({ name: 'Fixture', url: 'https://example.test/v1', key: 'test-secret' });
  await providers.discover(provider.id);
  await providers.updateModels(provider.id, [
    { ...provider.models[0], name: 'My saved choice' },
    { id: 'disabled', name: 'Disabled', enabled: false },
    { id: 'manual', name: 'Manual', enabled: true, manual: true },
  ]);
  services.request = async () => ({ data: [] });
  await providers.discover(provider.id);
  assert.equal(provider.models.length, 3);
  assert.ok(provider.models.every(model => model.discoveryStatus === 'unlisted'));
  const restarted = new ModelProviders(services);
  await restarted.ready;
  assert.deepEqual(restarted.state.providers[0].models, provider.models);
  assert.deepEqual(restarted.allModels().map(model => model.name), ['gpt-test', 'manual']);
  services.request = async () => ({ data: [{ id: 'gpt-test', name: 'New server label' }, { id: 'new-model' }] });
  await restarted.discover(provider.id);
  const models = restarted.get(provider.id).models;
  assert.deepEqual(models.map(model => [model.id, model.discoveryStatus]),
    [['gpt-test', 'listed'], ['new-model', 'listed'], ['disabled', 'unlisted'], ['manual', 'unlisted']]);
  assert.equal(models[0].name, 'My saved choice');
  assert.equal(models[2].enabled, false);
  assert.equal(models[3].manual, true);
});

test('discovery preserves reasoning capabilities for the model picker', async () => {
  const services = bridge();
  services.request = async () => ({ data: [{ id: 'gpt-6.1-sol', name: 'GPT-6.1 Sol', capabilities: {
    reasoning_effort: ['low', 'medium', 'high'], supports_vision: true,
  } }] });
  const providers = new ModelProviders(services);
  const provider = await providers.save({ name: 'Codex Easy', url: 'https://example.test/v1', key: 'test-secret' });
  await providers.activate(provider.id);
  await providers.discover(provider.id);
  const model = services.settings.availableDefaultModels2[0];
  assert.equal(model.supportsThinking, true);
  assert.deepEqual(model.parameterDefinitions[0].parameterType.enumParameter.values,
    [defaultChoice, { value: 'low', displayName: 'Low' }, { value: 'medium', displayName: 'Medium' }, { value: 'high', displayName: 'High' }]);
  assert.deepEqual(variantFor(model, 'medium').parameterValues, [{ id: 'reasoning', value: 'medium' }]);
  assert.equal(model.supportsImages, true);
  assert.deepEqual(parseModels({ data: [{ id: 'x', capabilities: { reasoning_effort: ['low'] } }] })[0].capabilities.reasoningEffortValues,
    [{ id: 'low', value: 'low' }]);
});

test('Codex Easy GPT models use their configured Cursor-style reasoning variants', () => {
  const model = catalog([{ id: 'gpt-6.1-sol', name: 'GPT-6.1 Sol', enabled: true }],
    { name: 'Codex Easy', url: 'https://codex-easy.ai/v1' })[0];
  assert.equal(model.supportsThinking, true);
  assert.deepEqual(model.parameterDefinitions[0].parameterType.enumParameter.values,
    [defaultChoice, { value: 'low', displayName: 'Low' }, { value: 'medium', displayName: 'Medium' },
      { value: 'high', displayName: 'High' }, { value: 'xhigh', displayName: 'Extra High' }, { value: 'max', displayName: 'Max' }]);
  assert.equal(variantFor(model, 'xhigh').displayName, 'GPT-6.1 Sol · Extra High');
  for (const url of ['https://codex-easy.ai.evil.test/v1', 'https://example.test/codex-easy.ai'])
    assert.equal(catalog([{ id: 'gpt-6.1-sol', name: 'Sol', enabled: true }], { url })[0].supportsThinking, false);
});

test('discovery metadata survives normalization at both IPC boundaries', () => {
  const models = parseModels({ data: [{ id: 'deepseek-test', capabilities: {
    reasoning_effort: [{ id: 'ultra', value: 'provider-ultra', label: 'Ultra' }],
    context_length: 100000, max_output_tokens: 8192, supports_vision: false,
  } }] });
  assert.deepEqual(parseModels({ data: models }), models);
  const row = catalog(models)[0];
  assert.deepEqual(row.parameterDefinitions[0].parameterType.enumParameter.values,
    [defaultChoice, { value: 'provider-ultra', displayName: 'Ultra' }]);
  assert.deepEqual(row.legacySlugs, []);
  const unsupported = parseModels({ data: [{ id: 'gpt-6-astra', capabilities: { reasoning_effort: [] } }] });
  assert.equal(catalog(unsupported, { url: 'https://codex-easy.ai/v1' })[0].supportsThinking, false,
    'An explicit provider declaration overrides the documented fallback');
});

test('known provider models retain different tiers with an explicit provider default', () => {
  const models = ['gpt-6-astra', 'deepseek-flash', 'deepseek-v4-pro', 'grok-4.7', 'unknown']
    .map(id => ({ id, name: id, enabled: true }));
  const rows = catalog(models, { url: 'https://codex-easy.ai/v1' });
  const choices = row => row.parameterDefinitions[0]?.parameterType.enumParameter.values.map(value => value.value) ?? [];
  assert.deepEqual(rows.map(choices), [
    [providerDefaultReasoning, 'low', 'medium', 'high', 'xhigh', 'max'], [providerDefaultReasoning, 'none', 'low', 'high', 'max'],
    [providerDefaultReasoning, 'none', 'low', 'high', 'max'], [providerDefaultReasoning, 'low', 'medium', 'high', 'xhigh'], [],
  ]);
  for (const row of rows.slice(0, -1))
    assert.equal(row.variants.find(variant => variant.isDefaultNonMaxConfig).parameterValues[0].value, providerDefaultReasoning);
});

test('capability refresh preserves disabled models and does not retry known absence', async () => {
  const services = bridge();
  let requests = 0;
  services.request = async () => { requests++; return { data: [{ id: 'plain' }, { id: 'disabled' }] }; };
  const providers = new ModelProviders(services);
  const provider = await providers.save({ name: 'Local', url: 'http://localhost:1234/v1', key: '' });
  await providers.updateModels(provider.id, [{ id: 'plain', name: 'Plain', enabled: true },
    { id: 'disabled', name: 'Disabled', enabled: false }]);
  await providers.discoverMissingCapabilities();
  await providers.discoverMissingCapabilities();
  assert.equal(requests, 1);
  assert.equal(provider.models[1].enabled, false);
  assert.equal(provider.models[1].name, 'Disabled');
  assert.deepEqual(allCatalog(services.storage).map(model => model.name), ['plain']);
});

test('capability refresh reports a provider failure and retains models', async () => {
  const services = bridge();
  services.request = async () => { throw new Error('Model discovery failed (HTTP 503)'); };
  const providers = new ModelProviders(services);
  const provider = await providers.save({ name: 'Local', url: 'http://localhost:1234/v1', key: '' });
  await providers.updateModels(provider.id, [{ id: 'plain', name: 'Plain', enabled: true }]);
  await assert.rejects(providers.discoverMissingCapabilities(), /HTTP 503/);
  assert.equal(provider.models[0].id, 'plain');
  assert.equal(provider.capabilitiesDiscovered, false);
});

test('combined catalog groups providers while retaining the default connection', async () => {
  const services = bridge();
  const providers = new ModelProviders(services);
  await providers.ready;
  const deepseek = await providers.save({ name: 'DeepSeek', url: 'https://example.test/v1', key: 'deepseek-key' });
  await providers.updateModels(deepseek.id, [{ id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', enabled: true }]);
  const grok = await providers.save({ name: 'Grok', url: 'https://example.test/v1', key: 'grok-key' });
  await providers.updateModels(grok.id, [{ id: 'grok-4.7', name: 'Grok 4.7', enabled: true }]);
  await providers.activate(grok.id);
  const models = services.settings.availableDefaultModels2;
  assert.deepEqual(models.map(model => model.name), ['deepseek-v4-pro', 'grok-4.7']);
  assert.deepEqual(models.map(model => model.namedModelSectionIndex), [0, 1]);
  assert.equal(models[0].tagline, 'DeepSeek');
  services.ai.modelConfigService.setModelConfig('composer', { modelName: 'deepseek-v4-pro' });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(services.settings.openAIBaseUrl, 'https://example.test/v1');
  assert.equal(providers.state.activeId, grok.id, 'Selection must not race a global credential switch');
});
for (const variant of ['desktop', 'glass']) {
  test(`${variant} custom model integration owns settings and polling and is idempotent`, async () => {
    const recovered = await readFile(new URL(`../../cursor/readable/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
    const text = customModels(recovered, variant);
    assert.equal(customModels(text, variant), text);
    assert.ok(text.includes('openvisionMountModels(node, bridge)'));
    assert.ok(text.includes('openvisionCatalog(this.storageService)'));
    const start = text.indexOf('computeAvailableDefaultModels() {');
    const method = text.slice(start, text.indexOf('getAvailableDefaultModels() {', start)).trim();
    const mapper = method.match(/openvisionCatalog\(this.storageService\)\.map\(([\w$]+)\)/)[1];
    const compute = new Function(variant === 'desktop' ? 'zc' : 'Rl', 'openvisionCatalog', mapper,
      `return function ${method};`)({ localMode: true }, allCatalog, model => model);
    const services = bridge();
    services.storage.store('openvision.model-providers.v1', JSON.stringify({ version: 1, activeId: 'ce', providers: [
      { id: 'ce', name: 'CE', url: 'https://codex-easy.ai/v1', models: [{ id: 'deepseek-v4-pro', name: 'DeepSeek', enabled: true }] },
    ] }));
    const startupModels = compute.call({ storageService: services.storage, reactiveStorageService: {
      availableModelsCatalogRevision() {}, applicationUserPersistentStorage: { availableDefaultModels2: [{ name: 'stale' }] },
    } });
    assert.equal(startupModels[0].name, 'deepseek-v4-pro');
    assert.equal(startupModels[0].parameterDefinitions[0].id, 'reasoning');
    assert.ok(text.includes('/* OpenVision local provider ownership */'));
    assert.throws(() => customModels(recovered.replace('children: "Configure gateway"', 'children: "Changed"'), variant), /anchor missing/);
  });
}
