import { fallbackReasoningValues, providerDefaultReasoning } from './model-reasoning.js';
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
  const source = item.capabilities && typeof item.capabilities === 'object' ? item.capabilities : item;
  const values = source.reasoningEffortValues ?? source.reasoning_effort ?? source.reasoning_efforts ?? item.reasoning_effort ?? item.reasoning_efforts ??
    (item.variants && typeof item.variants === 'object' ? Object.keys(item.variants) : undefined);
  const reasoning = normalizeReasoningValues(values);
  const capabilities = {};
  if (Array.isArray(values)) capabilities.reasoningEffortValues = reasoning;
  const context = source.contextLength ?? source.context_length ?? item.limit?.context;
  const output = source.maxOutputTokens ?? source.max_output_tokens ?? item.limit?.output;
  const vision = source.supportsVision ?? source.supports_vision;
  if (Number.isFinite(context) && context > 0) capabilities.contextLength = context;
  if (Number.isFinite(output) && output > 0) capabilities.maxOutputTokens = output;
  if (typeof vision === 'boolean') capabilities.supportsVision = vision;
  return Object.keys(capabilities).length ? capabilities : undefined;
}

function normalizeReasoningValues(values) {
  if (!Array.isArray(values)) return [];
  const seen = new Set();
  return values.flatMap(value => {
    const entry = typeof value === 'string' ? { id: value, value } : value;
    if (!entry || typeof entry.id !== 'string' || !entry.id.trim() || seen.has(entry.id)) return [];
    seen.add(entry.id);
    return [{ id: entry.id, value: typeof entry.value === 'string' && entry.value ? entry.value : entry.id,
      ...(typeof entry.label === 'string' && entry.label ? { label: entry.label } : {}) }];
  });
}

const reasoningLabels = {
  none: 'Off', auto: 'Auto', minimal: 'Minimal', low: 'Low', medium: 'Medium', high: 'High',
  xhigh: 'Extra High', 'extra-high': 'Extra High', max: 'Max', ultra: 'Ultra',
};
function reasoningParameter(values) {
  return { id: 'reasoning', name: 'Reasoning', markdownTooltip: 'Provider default leaves reasoning to your server. Other choices request an explicit effort.',
    parameterType: { enumParameter: { values: values.map(item => ({ value: item.value ?? item.id, displayName: item.label ?? reasoningLabels[item.id] ?? item.id })) } },
    isCycleableByHotkey: true };
}

function modelReasoning(model) {
  return Array.isArray(model.capabilities?.reasoningEffortValues) ? model.capabilities.reasoningEffortValues : undefined;
}

function configuredReasoning(model, provider) {
  return (fallbackReasoningValues(provider.url, model.id) ?? []).map(id => ({ id, value: id }));
}

function catalogModel(model, provider, namedModelSectionIndex) {
  const declared = modelReasoning(model);
  const efforts = declared ?? configuredReasoning(model, provider);
  const reasoning = efforts.length ? [{ id: providerDefaultReasoning, label: 'Provider default' }, ...efforts] : [];
  const defaultEffort = reasoning[0];
  const variants = reasoning.map(item => {
    const label = item.label ?? reasoningLabels[item.id] ?? item.id;
    return { parameterValues: [{ id: 'reasoning', value: item.value ?? item.id }], displayName: `${model.name} · ${label}`,
      displayNameOutsidePicker: `${model.name} · ${label}`, isMaxMode: false,
      isDefaultNonMaxConfig: item === defaultEffort, isDefaultMaxConfig: item === defaultEffort };
  });
  return {
    supportsThinking: reasoning.length > 0,
    parameterDefinitions: reasoning.length ? [reasoningParameter(reasoning)] : [], variants,
    name: model.id, serverModelName: model.id,
    clientDisplayName: provider.name ? `${provider.name} · ${model.name}` : model.name,
    inputboxShortModelName: model.name, defaultOn: true, supportsAgent: true,
    namedModelSectionIndex,
    tagline: provider.name,
    providerId: provider.id,
    supportsMaxMode: false, supportsNonMaxMode: true,
    supportsImages: model.capabilities?.supportsVision ?? false,
    idAliases: [], legacySlugs: [], cloudAgentEffortModes: [], modelPickerBadges: [],
  };
}

export function catalog(models, provider = {}, namedModelSectionIndex = 0) {
  return models.filter(model => model.enabled).map(model => catalogModel(model, provider, namedModelSectionIndex));
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
    return stateCatalog(this.state);
  }

  completionChoices(query, selected, limit) {
    const models = [];
    let count = 0, active;
    for (const { model, provider } of enabledEntries(this.state)) {
      const name = provider.name ? `${provider.name} · ${model.name}` : model.name;
      const matches = !query || `${model.id} ${name}`.toLowerCase().includes(query);
      if (matches) count++;
      if (model.id !== selected && (!matches || models.length >= limit)) continue;
      const row = { name: model.id, clientDisplayName: name, providerId: provider.id, tagline: provider.name };
      if (model.id === selected) active = row;
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
      const modelName = models[0]?.name ?? 'default';
      this.bridge.ai.modelConfigService.setModelConfig('composer', {
        modelName, selectedModels: [{ modelId: modelName, parameters: [] }], maxMode: false,
      });
    }
    this.bridge.ai.handleAvailableModelsChange();
    this.bridge.reactive.manualSave();
  }
  async remove(id) {
    this.state.providers = this.state.providers.filter(item => item.id !== id);
    if (this.state.activeId === id) await this.activate(null);
    else this.publishModels();
    await this.persist();
    await this.bridge.secrets.delete(secretKey(id));
  }
}

export function activeModelIds(storage) {
  return [...routingSnapshot(storage).keys()];
}

export function allCatalog(storage) {
  return stateCatalog(readState(storage.get(storageKey, -1)));
}

function stateCatalog(state) {
  return Array.from(enabledEntries(state), ({ model, provider, section }) => catalogModel(model, provider, section));
}

function* enabledEntries(state) {
  const seen = new Set();
  for (const [section, provider] of state.providers.entries()) {
    for (const model of provider.models) {
      if (!model.enabled || seen.has(model.id)) continue;
      seen.add(model.id);
      yield { model, provider, section };
    }
  }
}

function routingSnapshot(storage) {
  const text = storage.get(storageKey, -1);
  const previous = routeSnapshots.get(storage);
  if (previous && previous.text === text) return previous.routes;
  routeSnapshots.delete(storage);
  const state = readState(text), routes = new Map();
  for (const provider of state.providers) {
    const route = Object.freeze({ providerId: provider.id, baseUrl: provider.url });
    for (const model of provider.models)
      if (model.enabled && !routes.has(model.id)) routes.set(model.id, route);
  }
  routeSnapshots.set(storage, { text, routes });
  return routes;
}

export function requestProviderRoute(storage, modelId) {
  if (typeof modelId !== 'string' || !modelId) return undefined;
  return routingSnapshot(storage).get(modelId);
}

export async function requestProvider(storage, secrets, modelId) {
  const route = requestProviderRoute(storage, modelId);
  if (!route) return undefined;
  return { baseUrl: route.baseUrl, apiKey: await secrets.get(secretKey(route.providerId)) ?? '' };
}
