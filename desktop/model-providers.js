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
    return { id: item.id, name: item.id, enabled: true };
  }).filter(model => !seen.has(model.id) && seen.add(model.id));
}

export function catalog(models) {
  return models.filter(model => model.enabled).map(model => ({
    name: model.id, serverModelName: model.id, clientDisplayName: model.name,
    inputboxShortModelName: model.name, defaultOn: true, supportsAgent: true,
    namedModelSectionIndex: 0,
    supportsMaxMode: false, supportsNonMaxMode: true, supportsThinking: false,
    supportsImages: false, parameterDefinitions: [], variants: [], legacySlugs: [],
    idAliases: [], cloudAgentEffortModes: [], modelPickerBadges: [],
  }));
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
    provider.models = discovered.map(model => old.get(model.id) ?? model);
    for (const model of old.values())
      if (model.manual && !provider.models.some(item => item.id === model.id)) provider.models.push(model);
    await this.persist();
    if (this.state.activeId === id) await this.activate(id);
    return provider.models;
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
    const models = catalog(provider?.models ?? []);
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
  const state = readState(storage.get(storageKey, -1));
  return state.providers.find(provider => provider.id === state.activeId)?.models
    .filter(model => model.enabled).map(model => model.id) ?? [];
}
