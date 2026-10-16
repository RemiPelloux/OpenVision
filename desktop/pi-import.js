// Pure planning for an explicit import from a pi coding-agent configuration
// (~/.pi/agent/models.json and auth.json). Shared by the import CLI (Node) and
// the Models settings (renderer). Keys never enter a plan: the plan only says
// whether auth.json holds a usable API key for a provider.

export const piApiTypes = Object.freeze({
  'openai-completions': { supported: true, label: 'OpenAI-compatible (Chat Completions)' },
  'openai-responses': { supported: true, label: 'OpenAI-compatible (Responses)',
    note: 'pi uses the Responses API for this provider. OpenVision connects through the same OpenAI-compatible base URL and chooses the request format itself.' },
  'anthropic-messages': { supported: false,
    reason: 'Anthropic Messages API providers are not supported. OpenVision connects only to OpenAI-compatible APIs; add an OpenAI-compatible endpoint for this provider instead.' },
});

const levelOrder = ['off', 'minimal', 'low', 'medium', 'high', 'xhigh', 'max'];
const defaultLevels = ['low', 'medium', 'high'];
const maxProviders = 200, maxModels = 2000;
const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const text = value => typeof value === 'string' && value.trim() ? value.trim() : undefined;
const count = value => Number.isSafeInteger(value) && value > 0 ? value : undefined;

export function parsePiModels(source) {
  let value;
  try { value = typeof source === 'string' ? JSON.parse(source) : source; }
  catch { throw new Error('pi models.json is not valid JSON.'); }
  if (!isObject(value) || !isObject(value.providers)) throw new Error('pi models.json has no "providers" object.');
  if (Object.keys(value.providers).length > maxProviders) throw new Error(`pi models.json lists more than ${maxProviders} providers.`);
  return value;
}

// Summary of auth.json without key material: { [providerId]: { type, key: 'available' | reason } }.
export function summarizePiAuth(source) {
  if (source === undefined || source === null || source === '') return {};
  let value;
  try { value = typeof source === 'string' ? JSON.parse(source) : source; }
  catch { throw new Error('pi auth.json is not valid JSON.'); }
  if (!isObject(value)) throw new Error('pi auth.json must be a JSON object.');
  const summary = {};
  for (const [id, entry] of Object.entries(value)) summary[id] = { type: isObject(entry) && typeof entry.type === 'string' ? entry.type : 'unknown', key: keyState(entry) };
  return summary;
}

function keyState(entry) {
  if (!isObject(entry)) return 'invalid entry';
  if (entry.type === 'oauth') return 'OAuth sign-in is not imported';
  if (entry.type !== 'api_key') return `unsupported credential type "${String(entry.type).slice(0, 40)}"`;
  if (typeof entry.key !== 'string' || !entry.key.trim()) return 'no key value';
  if (entry.key.trim().startsWith('!')) return 'command-based keys are not run or imported';
  if (/[\r\n]/.test(entry.key)) return 'key contains a line break';
  return 'available';
}

// Returns the key for one provider, or undefined. Only literal api_key entries qualify.
export function piAuthKey(source, providerId) {
  const value = typeof source === 'string' ? JSON.parse(source) : source;
  const entry = isObject(value) ? value[providerId] : undefined;
  return keyState(entry) === 'available' ? entry.key.trim() : undefined;
}

export function piReasoningLevels(model) {
  if (model.reasoning === false) return [];
  if (model.reasoning !== true) return undefined;
  const map = model.thinkingLevelMap;
  if (!isObject(map)) return defaultLevels.map(id => ({ id, value: id }));
  const entries = [];
  for (const level of levelOrder) {
    const wire = text(map[level]);
    if (!wire) continue;
    entries.push({ id: level === 'off' ? (wire === 'none' ? 'none' : 'off') : level, value: wire });
  }
  // OpenVision needs unique wire values; prefer the level whose name matches the value.
  const byValue = new Map();
  for (const entry of entries) {
    const current = byValue.get(entry.value);
    if (!current || (current.id !== entry.value && entry.id === entry.value)) byValue.set(entry.value, entry);
  }
  return entries.filter(entry => byValue.get(entry.value) === entry)
    .map(entry => entry.id === 'off' ? { ...entry, label: 'Off' } : entry);
}

function mapModel(model) {
  const notes = [];
  const userCapabilities = {};
  const levels = piReasoningLevels(model);
  if (levels !== undefined) userCapabilities.reasoningEffortValues = levels;
  if (model.reasoning === true && !isObject(model.thinkingLevelMap)) notes.push('pi declares reasoning without a level map; Low, Medium and High were set.');
  if (Array.isArray(model.input)) userCapabilities.supportsVision = model.input.includes('image');
  const context = count(model.contextWindow), output = count(model.maxTokens);
  if (context) userCapabilities.contextLength = context;
  if (output) userCapabilities.maxOutputTokens = output;
  if (isObject(model.compat) && Object.keys(model.compat).length) notes.push(`pi compatibility settings not imported: ${Object.keys(model.compat).sort().join(', ')}.`);
  return { id: model.id.trim(), name: text(model.name) ?? model.id.trim(),
    ...(Object.keys(userCapabilities).length ? { userCapabilities } : {}), ...(notes.length ? { notes } : {}) };
}

// existing: saved OpenVision providers ({ id, name, url, importSource, models }).
// helpers.normalizeUrl / helpers.normalizeCapabilities apply the app's own validation.
export function planPiImport({ models, auth = {}, existing = [] }, helpers = {}) {
  const config = parsePiModels(models);
  const normalizeUrl = helpers.normalizeUrl ?? (value => value);
  const normalizeCapabilities = helpers.normalizeCapabilities ?? (value => value);
  const providers = [];
  let modelTotal = 0;
  for (const [sourceId, provider] of Object.entries(config.providers)) {
    const entry = { sourceId, name: sourceId, api: isObject(provider) ? provider.api : undefined, models: [], notes: [], selected: false };
    providers.push(entry);
    if (!isObject(provider)) { Object.assign(entry, { status: 'invalid', reason: 'Provider entry is not an object.' }); continue; }
    const api = piApiTypes[provider.api];
    entry.apiLabel = api?.label ?? String(provider.api ?? 'missing');
    if (!api || !api.supported) {
      Object.assign(entry, { status: 'unsupported', reason: api?.reason ?? `API type "${String(provider.api ?? 'missing').slice(0, 60)}" is not supported. OpenVision connects only to OpenAI-compatible APIs.` });
      continue;
    }
    try { entry.url = normalizeUrl(String(provider.baseUrl ?? '')); }
    catch { Object.assign(entry, { status: 'invalid', reason: 'baseUrl is missing or is not an HTTP(S) URL without credentials, query or fragment.' }); continue; }
    if (api.note) entry.notes.push(api.note);
    if (provider.apiKey !== undefined) entry.notes.push('The models.json apiKey field is not imported; keys come only from auth.json.');
    if (provider.headers !== undefined) entry.notes.push('Custom headers are not imported. Add them in Edit Provider if the provider needs them.');
    const authEntry = auth[sourceId];
    entry.key = authEntry ? authEntry.key : 'no auth.json entry';
    const seen = new Set();
    for (const model of Array.isArray(provider.models) ? provider.models : []) {
      if (!isObject(model) || !text(model.id)) { entry.notes.push('A model without a valid id was skipped.'); continue; }
      if (seen.has(model.id.trim())) { entry.notes.push(`Duplicate model "${model.id.trim()}" was skipped.`); continue; }
      if (++modelTotal > maxModels) throw new Error(`pi models.json lists more than ${maxModels} models.`);
      seen.add(model.id.trim());
      const mapped = mapModel(model);
      try { mapped.userCapabilities = normalizeCapabilities(mapped.userCapabilities); }
      catch (error) {
        delete mapped.userCapabilities;
        (mapped.notes ??= []).push(`Capabilities not imported: ${error.message}`);
      }
      if (!mapped.userCapabilities) delete mapped.userCapabilities;
      entry.models.push(mapped);
    }
    const previous = existing.find(item => item.importSource?.kind === 'pi' && item.importSource.providerId === sourceId);
    const sameName = existing.find(item => !item.importSource && item.name.trim().toLowerCase() === sourceId.toLowerCase());
    const target = previous ?? sameName;
    if (target) {
      const known = new Set(target.models.map(model => model.id));
      Object.assign(entry, { existingId: target.id, existingName: target.name,
        newModelIds: entry.models.filter(model => !known.has(model.id)).map(model => model.id),
        status: previous ? 'imported' : 'conflict',
        reason: previous ? 'Already imported. Choose Update to add missing models, fill capabilities you have not set and replace the saved key.'
          : `A provider named "${target.name}" already exists. Choose Update to merge into it, or leave it unchanged.` });
    } else Object.assign(entry, { status: 'new', selected: true });
  }
  return { providers, summary: summarizePlan(providers) };
}

export function summarizePlan(providers) {
  const by = status => providers.filter(item => item.status === status).map(item => item.sourceId);
  return { new: by('new'), imported: by('imported'), conflicts: by('conflict'), unsupported: by('unsupported'), invalid: by('invalid'),
    models: providers.filter(item => item.status === 'new').reduce((total, item) => total + item.models.length, 0) };
}

export function describeCapabilities(capabilities) {
  if (!capabilities) return 'no capabilities declared';
  const parts = [];
  if (capabilities.reasoningEffortValues) parts.push(capabilities.reasoningEffortValues.length
    ? `reasoning ${capabilities.reasoningEffortValues.map(item => item.id).join('/')}` : 'no reasoning');
  if (capabilities.supportsVision !== undefined) parts.push(capabilities.supportsVision ? 'text + images' : 'text only');
  if (capabilities.contextLength) parts.push(`${capabilities.contextLength.toLocaleString('en-US')} context`);
  if (capabilities.maxOutputTokens) parts.push(`${capabilities.maxOutputTokens.toLocaleString('en-US')} max output`);
  return parts.join(' · ');
}
