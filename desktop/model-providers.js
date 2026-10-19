import { catalogModel } from './model-catalog.js';
import { reasoningChoices, unavailableReasoning, providerDefaultReasoning, effectiveCapabilities } from './model-reasoning.js';
import { modelSelectionId, parseModelSelection, modelSelectionError } from './model-identity.js';
import { accountProviders, refreshAccountModels } from './account-models.js';
import { validHeaderMetadata, readProviderHeaders } from './provider-headers.js';
import { providerSecretKey as secretKey, validCredentialCleanup, cleanupProviderCredentials, saveProvider, removeProvider } from './provider-credentials.js';
export { normalizeCustomHeaders } from './provider-headers.js';
export { refreshAccountModels, watchAccountModels } from './account-models.js';
const storageKey = 'openvision.model-providers.v1';
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

const maxTokenCount = 100_000_000;
// User-specified capabilities: every field is optional and independently overrides
// discovery. Reasoning levels use the same shape as discovered declarations.
export function normalizeUserCapabilities(value) {
  if (value === undefined) return undefined;
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid user-specified model capabilities.');
  const result = {};
  for (const [field, entry] of Object.entries(value)) {
    if (entry === undefined) continue;
    if (field === 'reasoningEffortValues') {
      if (!Array.isArray(entry)) throw new Error('User-specified reasoning levels must be a list.');
      try { result.reasoningEffortValues = normalizeReasoningValues(entry.map(item => typeof item === 'string' ? item.trim() : item)); }
      catch { throw new Error('Reasoning levels must be unique, non-empty names.'); }
    } else if (field === 'supportsVision') {
      if (typeof entry !== 'boolean') throw new Error('User-specified image input must be true or false.');
      result.supportsVision = entry;
    } else if (field === 'contextLength' || field === 'maxOutputTokens') {
      if (!Number.isSafeInteger(entry) || entry <= 0 || entry > maxTokenCount)
        throw new Error(`${field === 'contextLength' ? 'Context window' : 'Max output tokens'} must be a whole number from 1 to 100,000,000.`);
      result[field] = entry;
    } else throw new Error('Unknown user-specified model capability.');
  }
  return Object.keys(result).length ? result : undefined;
}

function validImportSource(source) {
  return source === undefined || (source && source.kind === 'pi' && typeof source.providerId === 'string' &&
    source.providerId.length > 0 && source.providerId.length <= 200 && Object.keys(source).length === 2);
}

function readState(text) {
  if (!text) return { version: 1, providers: [], activeId: null };
  const state = JSON.parse(text);
  if (state.version !== 1 || !Array.isArray(state.providers) || !validCredentialCleanup(state.credentialCleanup))
    throw new Error('Invalid provider configuration.');
  const ids = new Set();
  for (const provider of state.providers) {
    if (typeof provider.id !== 'string' || ids.has(provider.id) || typeof provider.name !== 'string' ||
        normalizeBaseUrl(provider.url) !== provider.url || !Array.isArray(provider.models) ||
        !validHeaderMetadata(provider) || !validImportSource(provider.importSource))
      throw new Error('Invalid saved provider.');
    ids.add(provider.id);
    for (const model of provider.models)
      if (typeof model.id !== 'string' || !model.id || typeof model.name !== 'string' || typeof model.enabled !== 'boolean')
        throw new Error('Invalid saved model.');
      else if (model.userCapabilities !== undefined) {
        try { if (!normalizeUserCapabilities(model.userCapabilities)) throw new Error(); }
        catch { throw new Error('Invalid saved model capabilities.'); }
      }
  }
  if (state.activeId !== null && !ids.has(state.activeId)) throw new Error('Invalid active provider.');
  return state;
}

// Generic storage `flush()` only waits for the renderer queue and never reports
// a failed SQLite commit. Flush this window's application storage (including a
// secret stored just before), then require the main process to acknowledge the
// configuration key itself, even when an identical value is already cached.
export async function durableApplicationWrite(storage, key, text) {
  const application = storage.getStorage?.(-1), database = application?.database;
  if (typeof application?.flush !== 'function' || typeof database?.updateItems !== 'function') return storage.flush();
  await application.flush(0);
  await database.updateItems({ insert: new Map([[key, text]]) });
}

export class ModelProviders {
  constructor(bridge) {
    this.bridge = bridge;
    this.discovery = new Map();
    this.discoveryUpdates = new Map();
    this.state = readState(bridge.storage.get(storageKey, -1));
    this.mutations = Promise.resolve();
    this.ready = this.mutate(async () => {
      await cleanupProviderCredentials(this);
      if (this.state.activeId) await this.activate(this.state.activeId).catch(() => {});
    });
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
    const text = JSON.stringify(this.state);
    this.bridge.storage.store(storageKey, text, -1, 1);
    await durableApplicationWrite(this.bridge.storage, storageKey, text);
  }
  mutate(action) {
    const pending = this.mutations.then(async () => {
      if (this.credentialStateUncertain) {
        // The rolled-back configuration is still only in memory. Commit it
        // before any new change; a failure keeps the guard and is reported again.
        try { await this.persist(); }
        catch (error) { throw new Error(`Provider settings are not saved yet: ${error.message}`, { cause: error }); }
        this.credentialStateUncertain = false;
        await cleanupProviderCredentials(this);
      }
      return action();
    });
    this.mutations = pending.catch(() => {});
    return pending;
  }
  async save({ id, name, url, key, headers, clearHeaders = false }) {
    url = normalizeBaseUrl(url);
    name = name.trim() || new URL(url).hostname;
    return this.mutate(() => saveProvider(this, { id, name, url, key, headers, clearHeaders }));
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
    const customHeaders = await readProviderHeaders(this.bridge.secrets, provider);
    if (!this.state.providers.includes(provider)) throw new Error('Provider changed during discovery. Refresh its new configuration.');
    const response = await this.bridge.request(`${provider.url}/models`, key, customHeaders);
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
    return this.mutate(() => removeProvider(this, id));
  }
  // Explicit, confirmed import. Each entry is one provider from an import plan;
  // keys are held only in memory and written through the encrypted secret store.
  async importProviders(entries, keys = new Map()) {
    const results = [];
    for (const entry of entries) {
      const previous = entry.existingId ? this.get(entry.existingId) : undefined;
      if (previous && entry.replace !== true) { results.push({ id: previous.id, name: previous.name, skipped: true }); continue; }
      const models = mergeImportedModels(previous?.models ?? [], entry.models);
      const key = keys.get(entry.sourceId);
      const saved = await this.mutate(() => saveProvider(this, { id: previous?.id, name: previous?.name ?? entry.name,
        url: normalizeBaseUrl(entry.url), key: key === undefined ? undefined : key, models,
        importSource: { kind: 'pi', providerId: entry.sourceId } }));
      results.push({ id: saved.id, name: saved.name, models: saved.models.length, keyStored: key !== undefined });
    }
    if (results.some(result => !result.skipped)) {
      if (!this.state.activeId) {
        const first = results.find(result => !result.skipped);
        await this.mutate(() => this.activate(first.id));
      } else this.publishModels();
    }
    return results;
  }
  async cleanupCredentials() {
    return this.mutate(() => cleanupProviderCredentials(this));
  }
}

// Existing models keep their names, enabled state and user-specified values.
// Imported values fill only fields the user has not set; new models are appended.
export function mergeImportedModels(existing, imported) {
  const byId = new Map(existing.map(model => [model.id, model]));
  const merged = existing.map(model => {
    const source = imported.find(item => item.id === model.id);
    if (!source?.userCapabilities) return model;
    const userCapabilities = normalizeUserCapabilities({ ...source.userCapabilities, ...model.userCapabilities });
    return { ...model, ...(userCapabilities ? { userCapabilities } : {}) };
  });
  for (const model of imported) if (!byId.has(model.id)) {
    const userCapabilities = normalizeUserCapabilities(model.userCapabilities);
    merged.push({ id: model.id, name: model.name || model.id, enabled: true, manual: true, ...(userCapabilities ? { userCapabilities } : {}) });
  }
  return merged;
}

export function activeModelIds(storage) {
  return [...routingSnapshot(storage).routes.keys()];
}

// Display catalog: degrades to account providers when the saved configuration
// is unreadable. Request routing stays strict (combinedState) and fails loudly.
export function allCatalog(storage) {
  return stateCatalog(combinedState(storage, { tolerant: true }));
}

// The display catalog degrades to account providers when the saved
// configuration is unreadable; the stored value is never changed here. Routing
// and writers (ModelProviders) still refuse, so nothing is sent to a guessed
// provider and nothing can overwrite the stored value by accident.
const reportedUnreadable = new Set();
function combinedState(storage, { tolerant = false } = {}) {
  const text = storage.get(storageKey, -1);
  let state;
  try { state = readState(text); }
  catch (error) {
    if (!tolerant) throw error;
    state = { version: 1, providers: [], activeId: null };
    const id = `unreadable-providers:${text?.length ?? 0}:${error.message}`;
    if (!reportedUnreadable.has(id)) {
      reportedUnreadable.add(id);
      console.error('[OpenVision] Saved provider configuration could not be read:', error.message);
      (globalThis.openvisionProfileRecoveryQueue ??= []).push({ id, kind: 'unreadable-providers', store: 'Provider configuration',
        title: `Saved provider configuration could not be read (${error.message})`,
        detail: 'It was left unchanged and custom providers are unavailable; account connections still work. ' +
          'Settings > Models offers "Back up and reset providers", which keeps the unreadable value in a backup entry.',
        path: `${storageKey} (application storage)` });
    }
  }
  return { ...state, providers: [...state.providers, ...accountProviders(storage)] };
}

// Recovery for an unreadable configuration: the exact stored text is first
// saved under a timestamped backup key (acknowledged by SQLite), and only then
// is the configuration key removed. API-key secrets are left in place.
export async function backupAndResetProviders(storage, now = Date.now()) {
  const text = storage.get(storageKey, -1);
  if (text === undefined) return undefined;
  let readable = true;
  try { readState(text); } catch { readable = false; }
  if (readable) throw new Error('Saved provider configuration is readable; nothing was reset.');
  const backupKey = `${storageKey}.unreadable.${now}`;
  storage.store(backupKey, text, -1, 1);
  await durableApplicationWrite(storage, backupKey, text);
  if (storage.get(backupKey, -1) !== text) throw new Error('Provider configuration backup could not be verified; nothing was reset.');
  storage.remove(storageKey, -1);
  const database = storage.getStorage?.(-1)?.database;
  if (typeof database?.updateItems === 'function') await database.updateItems({ delete: new Set([storageKey]) });
  else await storage.flush?.();
  routeSnapshots.delete(storage);
  return backupKey;
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
  const accountIds = new Set(accounts.map(provider => provider.id));
  for (const provider of state.providers) {
    const customHeaderNames = Object.freeze(provider.customHeaderNames ?? []);
    for (const model of provider.models) {
      const selectionId = modelSelectionId(provider.id, model.id);
      if (model.enabled) routes.set(selectionId, Object.freeze({ providerId: provider.id,
        baseUrl: provider.url, modelId: model.id, selectionId,
        reasoningValues: reasoningChoices(model, provider).map(item => item.value ?? item.id),
        // Only an explicit text-only declaration (discovered or user-specified) blocks images;
        // unknown capability keeps the provider's own decision.
        imageInput: accountIds.has(provider.id) ? undefined : effectiveCapabilities(model)?.supportsVision,
        customHeaderNames, customHeaderRevision: provider.customHeaderRevision }));
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
  const customHeaders = await readProviderHeaders(secrets, route);
  if (routingSnapshot(storage) !== snapshot) throw modelSelectionError('Provider settings changed before dispatch. Try again.');
  return { baseUrl: route.baseUrl, modelId: route.modelId, apiKey, ...(Object.keys(customHeaders).length ? { customHeaders } : {}) };
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
    if (!grouped.has(item.providerId)) grouped.set(item.providerId, { id: item.providerId, baseUrl: item.baseUrl, modelIds: [], legacyModelIds: [], reasoningValues: Object.create(null), customHeaderNames: item.customHeaderNames, customHeaderRevision: item.customHeaderRevision });
    grouped.get(item.providerId).modelIds.push(item.modelId);
    grouped.get(item.providerId).reasoningValues[item.modelId] = item.reasoningValues;
    if (snapshot.aliases.get(item.modelId) === item.selectionId) grouped.get(item.providerId).legacyModelIds.push(item.modelId);
  }
  const openvisionProviders = await Promise.all([...grouped.values()].map(async provider => {
    const [customHeaders, apiKey] = await Promise.all([readProviderHeaders(secrets, provider), routeKey(storage, secrets, provider.id)]);
    const { customHeaderNames, customHeaderRevision, ...connection } = provider;
    return { ...connection, apiKey,
      ...(Object.keys(customHeaders).length ? { customHeaders } : {}) };
  }));
  if (routingSnapshot(storage) !== snapshot) throw modelSelectionError('Provider settings changed before dispatch. Try again.');
  const selected = openvisionProviders.find(provider => provider.id === route.providerId);
  return { baseUrl: selected.baseUrl, apiKey: selected.apiKey, modelId: route.modelId, openvisionProviders,
    ...(selected.customHeaders ? { customHeaders: selected.customHeaders } : {}) };
}

export function assertImageInput(storage, modelId, images) {
  if (!images) return;
  const route = requestProviderRoute(storage, modelId);
  if (route?.imageInput === false)
    throw modelSelectionError('This model is set to text-only input, so the attached image was not sent. Remove the image, choose a model that accepts images, or change Image input for this model in OpenVision settings (Models).');
}

async function routeKey(storage, secrets, id) {
  return accountProviders(storage).find(provider => provider.id === id)?.apiKey ?? await secrets.get(secretKey(id)) ?? '';
}
