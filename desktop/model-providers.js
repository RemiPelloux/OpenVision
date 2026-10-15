import { catalogModel } from './model-catalog.js';
import { reasoningChoices, unavailableReasoning, providerDefaultReasoning } from './model-reasoning.js';
import { modelSelectionId, parseModelSelection, modelSelectionError } from './model-identity.js';
import { accountProviders, refreshAccountModels } from './account-models.js';
export { refreshAccountModels, watchAccountModels } from './account-models.js';
const storageKey = 'openvision.model-providers.v1';
const secretKey = id => `openvision.provider.${id}`;
const routeSnapshots = new WeakMap();
const concurrentDiscoveries = 3;

export function normalizeBaseUrl(value) {
  const url = new URL(value.trim());
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash)
    throw new Error('Enter an HTTP or HTTPS API base URL without credentials, query or fragment.');
  return url.href.replace(/\/+$/, '');
}

export function parseModels(body) {
  if (!body || !Array.isArray(body.data)) throw new Error('The provider did not return an OpenAI-compatible model list.');
  const seen = new Set();
  return body.data.map(item => {
    if (!item || typeof item.id !== 'string' || !item.id.trim())
      throw new Error('The provider returned a model without a valid ID.');
    const capabilities = parseCapabilities(item);
    return {
      id: item.id, name: typeof item.name === 'string' && item.name.trim() ? item.name : item.id,
      enabled: true, ...(capabilities ? { capabilities } : {}),
    };
  }).filter(model => !seen.has(model.id) && seen.add(model.id));
}

function parseCapabilities(item) {
  if (item.capabilities !== undefined && (!item.capabilities || typeof item.capabilities !== 'object' || Array.isArray(item.capabilities)))
    throw new Error('The provider returned invalid model capabilities. The previous model list is retained.');
  const source = item.capabilities ?? item;
  const values = reasoningDeclaration(source, item);
  const capabilities = {};
  if (values !== undefined) capabilities.reasoningEffortValues = normalizeReasoningValues(values);
  const context = source.contextLength ?? source.context_length ?? item.limit?.context;
  const output = source.maxOutputTokens ?? source.max_output_tokens ?? item.limit?.output;
  const vision = source.supportsVision ?? source.supports_vision;
  if (Number.isFinite(context) && context > 0) capabilities.contextLength = context;
  if (Number.isFinite(output) && output > 0) capabilities.maxOutputTokens = output;
  if (typeof vision === 'boolean') capabilities.supportsVision = vision;
  return Object.keys(capabilities).length ? capabilities : undefined;
}

function reasoningDeclaration(source, item) {
  for (const owner of source === item ? [source] : [source, item])
    for (const name of ['reasoningEffortValues', 'reasoning_effort', 'reasoning_efforts'])
      if (Object.hasOwn(owner, name)) {
        if (!Array.isArray(owner[name])) throw new Error('The provider returned invalid reasoning metadata: expected a list. The previous model list is retained.');
        return owner[name];
      }
  if (!Object.hasOwn(item, 'variants')) return undefined;
  if (!item.variants || typeof item.variants !== 'object' || Array.isArray(item.variants))
    throw new Error('The provider returned invalid reasoning variants. The previous model list is retained.');
  return Object.keys(item.variants);
}

function normalizeReasoningValues(values) {
  const ids = new Set(), wireValues = new Set();
  const validText = value => typeof value === 'string' && value.trim().length > 0;
  return values.map(value => {
    const entry = typeof value === 'string' ? { id: value, value } : value;
    if (!entry || !validText(entry.id) || (Object.hasOwn(entry, 'value') && !validText(entry.value)) ||
        (Object.hasOwn(entry, 'label') && !validText(entry.label)))
      throw new Error('The provider returned invalid reasoning metadata: each level needs a valid ID, wire value and optional label. The previous model list is retained.');
    const wire = entry.value ?? entry.id;
    if (ids.has(entry.id) || wireValues.has(wire) || entry.id === providerDefaultReasoning || wire === providerDefaultReasoning)
      throw new Error('The provider returned invalid reasoning metadata: duplicate or reserved levels. The previous model list is retained.');
    ids.add(entry.id); wireValues.add(wire);
    return { id: entry.id, value: wire, ...(entry.label !== undefined ? { label: entry.label } : {}) };
  });
}

function readState(text) {
  if (!text) return { version: 1, providers: [], activeId: null };
  const state = JSON.parse(text);
  if (state.version !== 1 || !Array.isArray(state.providers)) throw new Error('Invalid provider configuration.');
  const ids = new Set();
  for (const provider of state.providers) {
    if (typeof provider.id !== 'string' || ids.has(provider.id) || typeof provider.name !== 'string' ||
        normalizeBaseUrl(provider.url) !== provider.url || !Array.isArray(provider.models))
      throw new Error('Invalid saved provider.');
    ids.add(provider.id);
    for (const model of provider.models)
      if (typeof model.id !== 'string' || !model.id || typeof model.name !== 'string' || typeof model.enabled !== 'boolean')
        throw new Error('Invalid saved model.');
  }
  if (state.activeId !== null && !ids.has(state.activeId)) throw new Error('Invalid active provider.');
  return state;
}

export class ModelProviders {
  constructor(bridge) {
    this.bridge = bridge;
    this.discovery = new Map();
    this.discoveryUpdates = new Map();
    this.state = readState(bridge.storage.get(storageKey, -1));
    this.ready = this.state.activeId ? this.activate(this.state.activeId).catch(() => {}) : Promise.resolve();
  }

  allModels() {
    return stateCatalog({ ...this.state, providers: [...this.state.providers, ...accountProviders(this.bridge.storage)] });
  }

  completionChoices(query, selected, limit) {
    const models = [];
    let count = 0, active;
    for (const { model, provider } of enabledEntries(this.state)) {
      const selectionId = modelSelectionId(provider.id, model.id);
      const name = provider.name ? `${provider.name} · ${model.name}` : model.name;
      const matches = !query || `${model.id} ${name}`.toLowerCase().includes(query);
      if (matches) count++;
      if (selectionId !== selected && (!matches || models.length >= limit)) continue;
      const row = { name: selectionId, clientDisplayName: name, providerId: provider.id, tagline: provider.name };
      if (selectionId === selected) active = row;
      if (matches && models.length < limit) models.push(row);
    }
    if (active && !models.includes(active)) models.unshift(active);
    return { models, count };
  }

  async persist() {
    this.bridge.storage.store(storageKey, JSON.stringify(this.state), -1, 1);
    await this.bridge.storage.flush();
  }
  async save({ id, name, url, key }) {
    url = normalizeBaseUrl(url);
    name = name.trim() || new URL(url).hostname;
    const previous = this.state.providers.find(provider => provider.id === id);
    const provider = { id: previous?.id ?? crypto.randomUUID(), name, url, models: previous?.models ?? [],
      capabilitiesDiscovered: previous?.url === url && previous.capabilitiesDiscovered === true };
    if (key !== undefined) await this.bridge.secrets.set(secretKey(provider.id), key.trim());
    if (previous) this.state.providers[this.state.providers.indexOf(previous)] = provider;
    else this.state.providers.push(provider);
    await this.persist();
    if (this.state.activeId === provider.id) await this.activate(provider.id);
    return provider;
  }
  discover(id) {
    let provider;
    try { provider = this.get(id); }
    catch (error) { return Promise.reject(error); }
    if (!this.discoveryUpdates.has(provider)) {
      const update = this.loadModels(provider).then(async () => {
        await this.persist(); this.publishModels(); return provider.models;
      }).finally(() => this.discoveryUpdates.delete(provider));
      this.discoveryUpdates.set(provider, update);
    }
    return this.discoveryUpdates.get(provider);
  }
  loadModels(provider) {
    const existing = this.discovery.get(provider);
    if (existing) return existing;
    const pending = this.fetchModels(provider).finally(() => this.discovery.delete(provider));
    this.discovery.set(provider, pending);
    return pending;
  }
  async fetchModels(provider) {
    const id = provider.id;
    const key = await this.bridge.secrets.get(secretKey(id));
    if (!this.state.providers.includes(provider)) throw new Error('Provider changed during discovery. Refresh its new configuration.');
    const response = await this.bridge.request(`${provider.url}/models`, key);
    const discovered = parseModels(response);
    if (!this.state.providers.includes(provider)) throw new Error('Provider changed during discovery. Refresh its new configuration.');
    const old = new Map(provider.models.map(model => [model.id, model]));
    const found = new Set(discovered.map(model => model.id));
    provider.models = discovered.map(model => {
      const previous = old.get(model.id);
      return previous ? { ...previous, ...model, enabled: previous.enabled,
        capabilities: model.capabilities,
        name: previous.name || model.name, manual: previous.manual, discoveryStatus: 'listed' }
        : { ...model, discoveryStatus: 'listed' };
    });
    for (const model of old.values())
      if (!found.has(model.id)) provider.models.push({ ...model, discoveryStatus: 'unlisted' });
    provider.capabilitiesDiscovered = true;
  }
  discoverMissingCapabilities() {
    if (!this.capabilityRefresh) this.capabilityRefresh = this.refreshCapabilities()
      .finally(() => { this.capabilityRefresh = undefined; });
    return this.capabilityRefresh;
  }
  async refreshCapabilities() {
    const providers = this.state.providers.filter(provider =>
      !provider.capabilitiesDiscovered && provider.models.some(model => model.enabled));
    let index = 0, refreshed = 0;
    const failures = [];
    await Promise.all(Array.from({ length: Math.min(concurrentDiscoveries, providers.length) }, async () => {
      while (index < providers.length) {
        const provider = providers[index++];
        try { await this.loadModels(provider); refreshed++; }
        catch (error) { failures.push(error.message); }
      }
    }));
    if (refreshed) { await this.persist(); this.publishModels(); }
    if (failures.length) throw new Error(`${failures.length} provider refresh(es) failed: ${failures.join('; ')}`);
  }
  get(id) {
    const provider = this.state.providers.find(item => item.id === id);
    if (!provider) throw new Error('Provider no longer exists.');
    return provider;
  }
  async updateModels(id, models) {
    this.get(id).models = models;
    await this.persist();
    this.publishModels();
  }
  async activate(id) {
    const provider = id ? this.get(id) : null;
    const key = provider ? await this.bridge.secrets.get(secretKey(id)) ?? '' : '';
    await this.bridge.auth.storeOpenAIKeyAndWait(key);
    const set = (...args) => this.bridge.reactive.setApplicationUserPersistentStorage(...args);
    set('openAIBaseUrl', provider?.url ?? '');
    set('useOpenAIKey', !!provider);
    this.publishModels();
    this.state.activeId = id;
    await this.persist();
  }
  publishModels() {
    const set = (...args) => this.bridge.reactive.setApplicationUserPersistentStorage(...args);
    const models = this.allModels();
    set('availableDefaultModels2', models);
    set('availableAPIKeyModels', models.map(model => model.name));
    set('localProviderModelIds', models.map(model => model.name));
    set('localProviderAgentModelIds', models.map(model => model.name));
    const selected = this.bridge.ai.modelConfigService.getModelConfig?.('composer');
    if (!models.some(model => model.name === selected?.modelName)) {
      const snapshot = routingSnapshot(this.bridge.storage);
      const legacy = snapshot.routes.get(snapshot.aliases.get(selected?.modelName));
      if (legacy || !selected?.modelName || selected.modelName === 'default') {
        const modelName = legacy?.selectionId ?? models[0]?.name ?? 'default';
        this.bridge.ai.modelConfigService.setModelConfig('composer', {
          ...selected, modelName, selectedModels: [{ modelId: modelName,
            parameters: legacy ? selected?.selectedModels?.[0]?.parameters ?? [] : [] }], maxMode: selected?.maxMode ?? false,
        });
      }
    }
    this.bridge.ai.handleAvailableModelsChange();
    this.bridge.reactive.manualSave();
  }
  async remove(id) {
    this.state.providers = this.state.providers.filter(item => item.id !== id);
    if (this.state.activeId === id) this.state.activeId = null;
    await this.persist();
    if (!this.state.activeId) await this.activate(null);
    else this.publishModels();
    await this.persist();
    await this.bridge.secrets.delete(secretKey(id));
  }
}

export function activeModelIds(storage) {
  return [...routingSnapshot(storage).routes.keys()];
}

export function allCatalog(storage) {
  return stateCatalog(combinedState(storage));
}

function combinedState(storage) {
  const state = readState(storage.get(storageKey, -1));
  return { ...state, providers: [...state.providers, ...accountProviders(storage)] };
}

export function modelPreference(storage, preferences, id) {
  if (preferences[id]) return preferences[id];
  const selected = parseModelSelection(id);
  if (!selected || !preferences[selected.modelId]) return undefined;
  const snapshot = routingSnapshot(storage);
  if (snapshot.aliases.get(selected.modelId) !== id || !snapshot.routes.has(id)) return undefined;
  return { ...preferences[selected.modelId], modelId: id };
}

export function modelPreferences(storage, preferences) {
  if (!Object.keys(preferences).length) return preferences;
  const result = { ...preferences }, snapshot = routingSnapshot(storage);
  for (const [id, value] of Object.entries(preferences)) {
    const canonical = snapshot.aliases.get(id);
    if (snapshot.routes.has(canonical) && !result[canonical]) result[canonical] = { ...value, modelId: canonical };
  }
  return result;
}

function stateCatalog(state) {
  const counts = new Map();
  for (const provider of state.providers) for (const model of provider.models)
    counts.set(model.id, (counts.get(model.id) ?? 0) + 1);
  return Array.from(enabledEntries(state), ({ model, provider, section }) => ({
    ...catalogModel(model, provider, section),
    legacySlugs: counts.get(model.id) === 1 ? [model.id] : [],
  }));
}

function* enabledEntries(state) {
  for (const [section, provider] of state.providers.entries()) {
    for (const model of provider.models) {
      if (!model.enabled) continue;
      yield { model, provider, section };
    }
  }
}

function routingSnapshot(storage) {
  const text = storage.get(storageKey, -1);
  const previous = routeSnapshots.get(storage);
  const accounts = accountProviders(storage);
  if (previous && previous.text === text && previous.accounts === accounts) return previous;
  routeSnapshots.delete(storage);
  const state = combinedState(storage), routes = new Map(), aliases = new Map();
  for (const provider of state.providers) {
    for (const model of provider.models) {
      const selectionId = modelSelectionId(provider.id, model.id);
      if (model.enabled) routes.set(selectionId, Object.freeze({ providerId: provider.id,
        baseUrl: provider.url, modelId: model.id, selectionId,
        reasoningValues: reasoningChoices(model, provider).map(item => item.value ?? item.id) }));
      aliases.set(model.id, aliases.has(model.id) ? null : selectionId);
    }
  }
  const snapshot = { text, accounts, routes, aliases };
  routeSnapshots.set(storage, snapshot);
  return snapshot;
}

export function requestProviderRoute(storage, modelId) {
  if (typeof modelId !== 'string' || !modelId) return undefined;
  const { routes, aliases } = routingSnapshot(storage);
  if (parseModelSelection(modelId)) return routes.get(modelId);
  if (aliases.get(modelId) === null)
    throw modelSelectionError('This model is offered by multiple providers. Select its provider in the model picker.');
  return routes.get(aliases.get(modelId));
}

export async function requestProvider(storage, secrets, modelId) {
  await refreshAccountModels(storage);
  const route = requestProviderRoute(storage, modelId);
  if (!route) {
    if (parseModelSelection(modelId) || routingSnapshot(storage).aliases.has(modelId)) throw modelSelectionError('The selected model or provider is unavailable. Select an enabled model in OpenVision settings.');
    return undefined;
  }
  const snapshot = routingSnapshot(storage), apiKey = await routeKey(storage, secrets, route.providerId);
  if (routingSnapshot(storage) !== snapshot) throw modelSelectionError('Provider settings changed before dispatch. Try again.');
  return { baseUrl: route.baseUrl, modelId: route.modelId, apiKey };
}

export async function requestAgentProvider(storage, secrets, selection) {
  await refreshAccountModels(storage);
  const modelId = typeof selection === 'string' ? selection : selection?.modelId;
  const route = requestProviderRoute(storage, modelId);
  if (!route) {
    if (parseModelSelection(modelId) || routingSnapshot(storage).aliases.has(modelId)) throw modelSelectionError('The selected model or provider is unavailable. Select an enabled model in OpenVision settings.');
    return undefined;
  }
  const unavailable = unavailableReasoning(selection?.parameters, route.reasoningValues);
  if (unavailable) throw modelSelectionError(`Reasoning level "${unavailable}" is no longer available for this model. Choose a listed level or Provider default in the model picker.`);
  const snapshot = routingSnapshot(storage), grouped = new Map();
  for (const item of snapshot.routes.values()) {
    if (!grouped.has(item.providerId)) grouped.set(item.providerId, { id: item.providerId, baseUrl: item.baseUrl, modelIds: [], legacyModelIds: [], reasoningValues: Object.create(null) });
    grouped.get(item.providerId).modelIds.push(item.modelId);
    grouped.get(item.providerId).reasoningValues[item.modelId] = item.reasoningValues;
    if (snapshot.aliases.get(item.modelId) === item.selectionId) grouped.get(item.providerId).legacyModelIds.push(item.modelId);
  }
  const openvisionProviders = await Promise.all([...grouped.values()].map(async provider =>
    ({ ...provider, apiKey: await routeKey(storage, secrets, provider.id) })));
  if (routingSnapshot(storage) !== snapshot) throw modelSelectionError('Provider settings changed before dispatch. Try again.');
  const selected = openvisionProviders.find(provider => provider.id === route.providerId);
  return { baseUrl: selected.baseUrl, apiKey: selected.apiKey, modelId: route.modelId, openvisionProviders };
}

async function routeKey(storage, secrets, id) {
  return accountProviders(storage).find(provider => provider.id === id)?.apiKey ?? await secrets.get(secretKey(id)) ?? '';
}
