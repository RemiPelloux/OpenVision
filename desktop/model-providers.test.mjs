import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { ModelProviders, normalizeBaseUrl, normalizeCustomHeaders, parseModels, activeModelIds, allCatalog, modelPreference, modelPreferences, requestProvider, requestAgentProvider } from './model-providers.js';
import { customModels } from './custom-models.mjs';
import { providerDefaultReasoning } from './model-reasoning.js';
import { modelSelectionId } from './model-identity.js';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { readableApp } from './recovered-source.mjs';
import { headerSecretKey } from './provider-headers.js';

const defaultChoice = { value: providerDefaultReasoning, displayName: 'Provider default' };
const variantFor = (model, value) => model.variants.find(item => item.parameterValues[0].value === value);
const catalog = (models, provider = {}) => allCatalog({ get: () => JSON.stringify({ version: 1, activeId: null,
  providers: [{ id: 'fixture', name: '', url: 'https://fixture.test/v1', ...provider, models }] }) });

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
  services.ai.modelConfigService.getModelConfig = () => ({ modelName: modelSelectionId(a.id, 'custom-code') });
  const selectedCount = services.selected.length;
  await providers.discover(a.id);
  assert.equal(services.selected.length, selectedCount, 'Refreshing models must preserve an available selection');
  assert.equal(services.settings.openAIBaseUrl, 'https://example.test/v1');
  assert.equal(services.settings.availableDefaultModels2[1].clientDisplayName, 'Codex Easy · My Coder');
  const ids = ['gpt-test', 'custom-code'].map(id => modelSelectionId(a.id, id));
  assert.deepEqual(activeModelIds(services.storage), ids);
  assert.deepEqual(allCatalog(services.storage).map(model => model.name), ids);
  assert.ok(!services.storage.get('openvision.model-providers.v1').includes('test-secret'));
  const restored = new ModelProviders(services);
  await restored.ready;
  assert.equal(restored.state.activeId, a.id);
  const b = await restored.save({ name: 'Local', url: 'http://localhost:1234/v1', key: 'local-key' });
  await restored.activate(b.id);
  assert.equal(services.settings.key, 'local-key');
  assert.deepEqual(services.settings.localProviderModelIds, ids);
  await restored.remove(b.id);
  assert.equal(services.settings.useOpenAIKey, false);
  assert.equal(services.secretsMap.has(`openvision.provider.${b.id}`), false);
});

test('custom authentication headers stay secret and reach discovery, Agent and request providers', async () => {
  const services = bridge();
  let discovery;
  services.request = async (url, key, headers) => {
    discovery = { url, key, headers };
    return { data: [{ id: 'header-model' }] };
  };
  const providers = new ModelProviders(services);
  const provider = await providers.save({ name: 'Header server', url: 'https://example.test/v1', key: 'test-secret',
    headers: { 'X-API-Key': 'header-secret', 'X-Tenant': 'tenant-a' } });
  const saved = services.storage.get('openvision.model-providers.v1');
  assert.ok(!saved.includes('header-secret') && !saved.includes('tenant-a'));
  const expectedHeaders = { 'x-api-key': 'header-secret', 'x-tenant': 'tenant-a' };
  assert.deepEqual(JSON.parse(saved).providers[0].customHeaderNames, ['x-api-key', 'x-tenant']);
  await providers.discover(provider.id);
  assert.deepEqual(discovery, { url: 'https://example.test/v1/models', key: 'test-secret',
    headers: expectedHeaders });
  assert.deepEqual((await requestProvider(services.storage, services.secrets, modelSelectionId(provider.id, 'header-model'))).customHeaders,
    expectedHeaders);
  const agent = await requestAgentProvider(services.storage, services.secrets, modelSelectionId(provider.id, 'header-model'));
  assert.deepEqual(agent.customHeaders, expectedHeaders);
  assert.deepEqual(agent.openvisionProviders[0].customHeaders, expectedHeaders);
  const changed = await providers.save({ id: provider.id, name: provider.name, url: provider.url, headers: { Authorization: 'Custom token' } });
  assert.deepEqual(JSON.parse(services.secretsMap.get(headerSecretKey(provider.id, changed.customHeaderRevision))), { authorization: 'Custom token' });
  assert.equal(services.secretsMap.has(headerSecretKey(provider.id, provider.customHeaderRevision)), false);
  await providers.save({ id: provider.id, name: provider.name, url: provider.url, clearHeaders: true });
  assert.equal(services.secretsMap.has(headerSecretKey(provider.id, changed.customHeaderRevision)), false);
  assert.throws(() => normalizeCustomHeaders({ 'Content-Type': 'nope' }), /unsupported header/);
  assert.throws(() => normalizeCustomHeaders('{broken'), /valid JSON/);
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
  assert.deepEqual(restarted.allModels().map(model => model.name), ['gpt-test', 'manual'].map(id => modelSelectionId(provider.id, id)));
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

test('successful discovery owns capability replacement; omitted and empty declarations have distinct meanings', async () => {
  const services = bridge(), providers = new ModelProviders(services);
  const provider = await providers.save({ name: 'Codex Easy', url: 'https://codex-easy.ai/v1', key: '' });
  let capabilities = { reasoning_effort: [{ id: 'ultra', value: 'vendor-ultra', label: 'Ultra' }] };
  services.request = async () => ({ data: [{ id: 'gpt-6.1-sol', ...(capabilities ? { capabilities } : {}) }] });
  await providers.discover(provider.id);
  const declared = providers.allModels()[0];
  assert.ok(declared.variants.every(item => item.tooltipData.markdownContent.startsWith('Provider-declared · Unverified')));
  assert.equal(variantFor(declared, 'vendor-ultra').displayName, 'gpt-6.1-sol · Ultra');
  capabilities = undefined;
  await providers.discover(provider.id);
  assert.equal(provider.models[0].capabilities, undefined, 'Omission in the latest listed model clears stale declarations');
  const hinted = providers.allModels()[0];
  assert.ok(hinted.variants.every(item => item.tooltipData.markdownContent.startsWith('Compatibility hints · Unverified')));
  assert.equal(variantFor(hinted, 'vendor-ultra'), undefined);
  capabilities = { reasoning_effort: [] };
  await providers.discover(provider.id);
  assert.deepEqual(providers.allModels()[0].parameterDefinitions[0].parameterType.enumParameter.values, [defaultChoice], 'Explicit empty blocks fallback hints but permits explicit recovery');
  const restored = new ModelProviders(services);
  assert.deepEqual(restored.state.providers[0].models[0].capabilities.reasoningEffortValues, []);
});

test('malformed reasoning discovery fails atomically and keeps the saved catalog through restart', async () => {
  const services = bridge(), providers = new ModelProviders(services);
  const provider = await providers.save({ name: 'Fixture', url: 'https://example.test/v1', key: 'test-secret' });
  services.request = async () => ({ data: [{ id: 'custom', reasoning_effort: ['ultra'] }] });
  await providers.discover(provider.id);
  const before = services.storage.get('openvision.model-providers.v1');
  const invalid = [
    { capabilities: [] }, { capabilities: null }, { reasoning_effort: 'high' }, { reasoning_effort: null },
    { reasoning_effort: ['low', null] }, { reasoning_effort: ['low', { id: 'ultra', value: 7 }] },
    { reasoning_effort: [{ id: 'high', label: false }] }, { reasoning_effort: ['high', 'high'] },
    { reasoning_effort: [{ id: 'a', value: 'high' }, { id: 'b', value: 'high' }] },
    { reasoning_effort: [providerDefaultReasoning] }, { variants: ['high'] },
    { capabilities: { reasoningEffortValues: null }, reasoning_effort: ['high'] },
  ];
  for (const metadata of invalid) {
    services.request = async () => ({ data: [{ id: 'new-valid', reasoning_effort: ['high'] }, { id: 'custom', ...metadata }] });
    await assert.rejects(providers.discover(provider.id), /invalid .*previous model list is retained/);
    assert.equal(services.storage.get('openvision.model-providers.v1'), before);
    const restarted = new ModelProviders(services);
    assert.deepEqual(restarted.state.providers, providers.state.providers);
    assert.deepEqual(restarted.allModels().map(model => model.inputboxShortModelName), ['custom']);
    assert.ok(variantFor(restarted.allModels()[0], 'ultra'));
  }
  assert.deepEqual(parseModels({ data: [{ id: 'custom', variants: { low: {}, ultra: {} } }] })[0].capabilities.reasoningEffortValues,
    [{ id: 'low', value: 'low' }, { id: 'ultra', value: 'ultra' }]);
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
  assert.deepEqual(row.legacySlugs, ['deepseek-test']);
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
    [providerDefaultReasoning, 'none', 'low', 'high', 'max'], [providerDefaultReasoning, 'low', 'medium', 'high', 'xhigh'], [providerDefaultReasoning],
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
  assert.deepEqual(allCatalog(services.storage).map(model => model.name), [modelSelectionId(provider.id, 'plain')]);
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
  assert.deepEqual(models.map(model => model.name), [modelSelectionId(deepseek.id, 'deepseek-v4-pro'), modelSelectionId(grok.id, 'grok-4.7')]);
  assert.deepEqual(models.map(model => model.namedModelSectionIndex), [0, 1]);
  assert.equal(models[0].tagline, 'DeepSeek');
  services.ai.modelConfigService.setModelConfig('composer', { modelName: 'deepseek-v4-pro' });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(services.settings.openAIBaseUrl, 'https://example.test/v1');
  assert.equal(providers.state.activeId, grok.id, 'Selection must not race a global credential switch');
});
for (const variant of ['desktop', 'glass']) {
  test(`${variant} custom model integration owns settings and polling and is idempotent`, async () => {
    const recovered = await readFile(new URL(`out/vs/workbench/workbench.${variant}.main.js`, readableApp), 'utf8');
    const text = customModels(recovered, variant);
    assert.equal(customModels(text, variant), text);
    assert.ok(text.includes('openvisionMountModels(node, bridge)'));
    assert.ok(text.includes('openvisionCatalog(this.storageService)'));
    const start = text.indexOf('computeAvailableDefaultModels() {');
    const method = text.slice(start, text.indexOf('getAvailableDefaultModels() {', start)).trim();
    const mapper = method.match(/openvisionCatalog\(this.storageService\)\.map\(([\w$]+)\)/)[1];
    const compute = new Function(variant === 'desktop' ? 'zc' : 'Rl', 'openvisionCatalog', mapper, 'openvisionWatchAccounts',
      `return function ${method};`)({ localMode: true }, allCatalog, model => model, () => ({ dispose() {} }));
    const services = bridge();
    services.storage.store('openvision.model-providers.v1', JSON.stringify({ version: 1, activeId: 'ce', providers: [
      { id: 'ce', name: 'CE', url: 'https://codex-easy.ai/v1', models: [{ id: 'deepseek-v4-pro', name: 'DeepSeek', enabled: true }] },
    ] }));
    const startupModels = compute.call({ _register: value => value, storageService: services.storage, reactiveStorageService: {
      availableModelsCatalogRevision() {}, applicationUserPersistentStorage: { availableDefaultModels2: [{ name: 'stale' }] },
    } });
    assert.equal(startupModels[0].name, modelSelectionId('ce', 'deepseek-v4-pro'));
    assert.equal(startupModels[0].parameterDefinitions[0].id, 'reasoning');
    const prefKey = modelSelectionId('ce', 'deepseek-v4-pro');
    const saved = { 'deepseek-v4-pro': { modelId: 'deepseek-v4-pro', parameters: [{ id: 'reasoning', value: 'high' }] } };
    const preferences = { reactiveStorageService: { applicationUserPersistentStorage: { aiSettings: { modelParameterPreferences: saved } } },
      storageService: services.storage,
      getAvailableDefaultModels: () => startupModels,
      resolveSelectedModelsForRead: (selected, models) => selected.map(value => ({ ...value,
        modelId: models.find(model => model.legacySlugs.includes(value.modelId))?.name ?? value.modelId })),
      setModelParameterPreferences: (id, parameters) => { saved[id] = { modelId: id, parameters }; } };
    for (const name of ['getAllModelParameterPreferences', 'getModelParameterPreferences', 'clearModelParameterPreferences',
      'deriveSelectedModels', 'getEffectiveModelConfigForComposer']) {
      const source = 'function ' + text.slice(text.search(new RegExp(name + '\\([^)]*\\) \\{')));
      const node = parseExpressionAt(source, 0, { ecmaVersion: 'latest' });
      preferences[name] = new Function(variant === 'desktop' ? 'zc' : 'Rl', 'openvisionModelPreference', 'openvisionModelPreferences',
        `return (${source.slice(0, node.end)});`)({ localMode: true }, modelPreference, modelPreferences);
    }
    assert.equal(preferences.getAllModelParameterPreferences()[prefKey].parameters[0].value, 'high');
    assert.equal(preferences.getModelParameterPreferences(prefKey).modelId, prefKey);
    const oldChat = { data: { modelConfig: { selectedModels: [saved['deepseek-v4-pro']] } } };
    assert.equal(preferences.getEffectiveModelConfigForComposer(oldChat).selectedModels[0].modelId, prefKey);
    assert.equal(oldChat.data.modelConfig.selectedModels[0].modelId, 'deepseek-v4-pro', 'Reading a saved chat preserves its source data');
    assert.equal(saved[prefKey], undefined, 'Reading legacy preferences must not mutate storage');
    preferences.clearModelParameterPreferences(prefKey);
    assert.deepEqual(preferences.getModelParameterPreferences(prefKey).parameters, []);
    assert.equal(saved['deepseek-v4-pro'].parameters[0].value, 'high', 'Keep the legacy value as migration evidence');
    assert.ok(text.includes('/* OpenVision local provider ownership */'));
    assert.throws(() => customModels(recovered.replace('children: "Configure gateway"', 'children: "Changed"'), variant), /anchor missing/);
  });
}

// Models the native split: renderer cache, the main-process queue that keeps
// failed writes, and the SQLite rows that survive restart. `full` rejects commits
// like SQLITE_FULL on a full profile volume.
function durableBridge() {
  const services = bridge(), cache = new Map(), pending = new Map(), queued = new Map(), disk = new Map();
  const state = { full: false };
  const commit = async entries => {
    entries.forEach((value, key) => queued.set(key, value));
    if (state.full) throw new Error('SQLITE_FULL: database or disk is full');
    queued.forEach((value, key) => value === undefined ? disk.delete(key) : disk.set(key, value)); queued.clear();
  };
  const application = { flush: async () => { const batch = new Map(pending); pending.clear(); await commit(batch); },
    database: { updateItems: request => commit(request.insert) } };
  services.storage = { get: key => cache.get(key), store: (key, value) => { cache.set(key, value); pending.set(key, value); },
    flush: async () => { throw new Error('Generic flush cannot report SQLite failures'); }, getStorage: scope => scope === -1 ? application : undefined };
  services.secrets = { get: async key => cache.get(`secret://${key}`), delete: async key => services.storage.store(`secret://${key}`, undefined),
    set: async (key, value) => services.storage.store(`secret://${key}`, value) };
  const restart = () => { cache.clear(); pending.clear(); queued.clear(); disk.forEach((value, key) => cache.set(key, value)); };
  return { services, state, disk, restart };
}
const savedNames = disk => JSON.parse(disk.get('openvision.model-providers.v1') ?? '{"providers":[]}').providers.map(item => item.name);

test('a provider save on a full profile volume is reported, not acknowledged, and succeeds when retried', async () => {
  const { services, state, disk, restart } = durableBridge();
  const providers = new ModelProviders(services);
  await providers.ready;
  state.full = true;
  await assert.rejects(providers.save({ name: 'Full', url: 'https://example.test/v1', key: 'test-secret' }), /SQLITE_FULL/);
  assert.deepEqual(providers.state.providers, []);
  assert.deepEqual(savedNames(disk), []);
  state.full = false;
  const saved = await providers.save({ name: 'Full', url: 'https://example.test/v1', key: 'test-secret' });
  restart();
  const reopened = new ModelProviders(services);
  await reopened.ready;
  assert.deepEqual(reopened.state.providers.map(item => item.name), ['Full']);
  assert.equal(await services.secrets.get(`openvision.provider.${saved.id}`), 'test-secret', 'The API key is durable with its provider');
});

test('a failed edit and rollback is committed before the next change instead of requiring restart', async () => {
  const { services, state, disk, restart } = durableBridge();
  const providers = new ModelProviders(services);
  await providers.ready;
  const saved = await providers.save({ name: 'Original', url: 'https://example.test/v1', key: 'test-secret' });
  state.full = true;
  await assert.rejects(providers.save({ id: saved.id, name: 'Renamed', url: 'https://example.test/v1' }),
    /Provider save failed \(SQLITE_FULL.*restored in this window/);
  assert.deepEqual(providers.state.providers.map(item => item.name), ['Original']);
  await assert.rejects(providers.save({ id: saved.id, name: 'Renamed', url: 'https://example.test/v1' }), /not saved yet: SQLITE_FULL/);
  assert.deepEqual(savedNames(disk), ['Original']);
  state.full = false;
  await providers.save({ id: saved.id, name: 'Renamed', url: 'https://example.test/v1' });
  restart();
  const reopened = new ModelProviders(services);
  await reopened.ready;
  assert.deepEqual(reopened.state.providers.map(item => item.name), ['Renamed']);
  assert.equal(await services.secrets.get(`openvision.provider.${saved.id}`), 'test-secret');
});
