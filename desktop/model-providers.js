const storageKey = 'openvision.model-providers.v1';
const secretKey = id => `openvision.provider.${id}`;

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
  const values = source.reasoning_effort ?? source.reasoning_efforts ?? item.reasoning_effort ?? item.reasoning_efforts ??
    (item.variants && typeof item.variants === 'object' ? Object.keys(item.variants) : undefined);
  const reasoning = normalizeReasoningValues(values);
  const capabilities = {};
  if (reasoning.length) capabilities.reasoningEffortValues = reasoning;
  if (Number.isFinite(source.context_length)) capabilities.contextLength = source.context_length;
  if (Number.isFinite(source.max_output_tokens)) capabilities.maxOutputTokens = source.max_output_tokens;
  if (typeof source.supports_vision === 'boolean') capabilities.supportsVision = source.supports_vision;
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
  none: 'None', auto: 'Auto', minimal: 'Minimal', low: 'Low', medium: 'Medium', high: 'High',
  xhigh: 'Extra High', 'extra-high': 'Extra High', max: 'Max', ultra: 'Ultra',
};
function reasoningParameter(values) {
  return { id: 'reasoning', name: 'Reasoning', markdownTooltip: 'Controls how much reasoning effort the model uses.',
    parameterType: { enumParameter: { values: values.map(item => ({ value: item.value ?? item.id, displayName: item.label ?? reasoningLabels[item.id] ?? item.id })) } },
    isCycleableByHotkey: true };
}

function modelReasoning(model) {
  return Array.isArray(model.capabilities?.reasoningEffortValues) ? model.capabilities.reasoningEffortValues : [];
}

const codexEasyReasoning = new Set([
  'gpt-6-astra', 'gpt-6.1-sol', 'gpt-6-sol', 'gpt-6-luna',
  'gpt-5.6-sol', 'gpt-5.6-terra', 'gpt-5.6-luna',
]);
function configuredReasoning(model, provider) {
  if (!provider.url?.includes('codex-everywhere.com') && !provider.url?.includes('codex-easy.ai')) return [];
  if (!codexEasyReasoning.has(model.id)) return [];
  return ['low', 'medium', 'high', 'xhigh', 'max'].map(id => ({ id, value: id }));
}

function catalogModel(model, provider, namedModelSectionIndex) {
  const declared = modelReasoning(model);
  const reasoning = declared.length ? declared : configuredReasoning(model, provider);
  const variants = reasoning.map((item, index) => {
    const label = item.label ?? reasoningLabels[item.id] ?? item.id;
    return { parameterValues: [{ id: 'reasoning', value: item.value ?? item.id }], displayName: `${model.name} · ${label}`,
      displayNameOutsidePicker: `${model.name} · ${label}`, isMaxMode: false,
      isDefaultNonMaxConfig: index === 0, isDefaultMaxConfig: index === 0 };
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
    idAliases: [], cloudAgentEffortModes: [], modelPickerBadges: [],
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
    this.state = readState(bridge.storage.get(storageKey, -1));
    this.modelOwners = new Map();
    this.routeModelSelection();
    this.ready = this.state.activeId ? this.activate(this.state.activeId).catch(() => {}) : Promise.resolve();
  }

  allModels() {
    this.modelOwners.clear();
    const models = [];
    for (const [section, provider] of this.state.providers.entries()) {
      for (const model of catalog(provider.models, provider, section)) {
        if (this.modelOwners.has(model.name)) continue;
        this.modelOwners.set(model.name, provider.id);
        models.push(model);
      }
    }
    return models;
  }

  routeModelSelection() {
    const service = this.bridge.ai.modelConfigService;
    if (!service || service.__openvisionRouting) return;
    const original = service.setModelConfig?.bind(service);
    const originalForComposer = service.setModelConfigForComposer?.bind(service);
    const route = (args, invoke) => {
      const config = args.find(value => value && typeof value === 'object' && typeof value.modelName === 'string');
      const owner = config && this.modelOwners.get(config.modelName);
      const result = invoke();
      if (owner && owner !== this.state.activeId && !this.routing) {
        queueMicrotask(() => this.activate(owner).catch(() => {}));
      }
      return result;
    };
    if (original) service.setModelConfig = (...args) => route(args, () => original(...args));
    if (originalForComposer) service.setModelConfigForComposer = (...args) =>
      route(args, () => originalForComposer(...args));
    service.__openvisionRouting = true;
  }
  async persist() {
    this.bridge.storage.store(storageKey, JSON.stringify(this.state), -1, 1);
    await this.bridge.storage.flush();
  }
  async save({ id, name, url, key }) {
    url = normalizeBaseUrl(url);
    name = name.trim() || new URL(url).hostname;
    const previous = this.state.providers.find(provider => provider.id === id);
    const provider = { id: previous?.id ?? crypto.randomUUID(), name, url, models: previous?.models ?? [] };
    if (key !== undefined) await this.bridge.secrets.set(secretKey(provider.id), key.trim());
    if (previous) this.state.providers[this.state.providers.indexOf(previous)] = provider;
    else this.state.providers.push(provider);
    await this.persist();
    if (this.state.activeId === provider.id) await this.activate(provider.id);
    return provider;
  }
  async discover(id) {
    const provider = this.get(id);
    const key = await this.bridge.secrets.get(secretKey(id));
    const response = await this.bridge.request(`${provider.url}/models`, key);
    const discovered = parseModels(response);
    const old = new Map(provider.models.map(model => [model.id, model]));
    provider.models = discovered.map(model => {
      const previous = old.get(model.id);
      return previous ? { ...previous, ...model, name: previous.name || model.name, manual: previous.manual } : model;
    });
    for (const model of old.values())
      if (model.manual && !provider.models.some(item => item.id === model.id)) provider.models.push(model);
    await this.persist();
    if (this.state.activeId === id) await this.activate(id);
    return provider.models;
  }
  async discoverMissingCapabilities() {
    const pending = this.state.providers
      .filter(provider => provider.models.some(model => model.enabled && !model.capabilities?.reasoningEffortValues))
      .map(provider => this.discover(provider.id));
    await Promise.allSettled(pending);
  }
  get(id) {
    const provider = this.state.providers.find(item => item.id === id);
    if (!provider) throw new Error('Provider no longer exists.');
    return provider;
  }
  async updateModels(id, models) {
    this.get(id).models = models;
    await this.persist();
    if (this.state.activeId === id) await this.activate(id);
  }
  async activate(id) {
    const provider = id ? this.get(id) : null;
    const key = provider ? await this.bridge.secrets.get(secretKey(id)) ?? '' : '';
    await this.bridge.auth.storeOpenAIKeyAndWait(key);
    const set = (...args) => this.bridge.reactive.setApplicationUserPersistentStorage(...args);
    set('openAIBaseUrl', provider?.url ?? '');
    set('useOpenAIKey', !!provider);
    this.routing = true;
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
    this.state.activeId = id;
    this.routing = false;
    await this.persist();
  }
  async remove(id) {
    if (this.state.activeId === id) await this.activate(null);
    this.state.providers = this.state.providers.filter(item => item.id !== id);
    await this.persist();
    await this.bridge.secrets.delete(secretKey(id));
  }
}

export function activeModelIds(storage) {
  return allCatalog(storage).map(model => model.name);
}

export function allCatalog(storage) {
  const state = readState(storage.get(storageKey, -1));
  const seen = new Set();
  return state.providers.flatMap((provider, section) => catalog(provider.models, provider, section))
    .filter(model => !seen.has(model.name) && seen.add(model.name));
}
