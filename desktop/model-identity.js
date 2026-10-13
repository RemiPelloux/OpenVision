import { unavailableReasoning } from './model-reasoning.js';

const prefix = 'openvision-model:';

export function modelSelectionError(message) {
  const error = new Error(message);
  error.name = 'LocalProviderError';
  return error;
}

export function modelSelectionId(providerId, modelId) {
  return `${prefix}${encodeURIComponent(providerId)}:${encodeURIComponent(modelId)}`;
}

export function parseModelSelection(value) {
  if (typeof value !== 'string' || !value.startsWith(prefix)) return undefined;
  const parts = value.slice(prefix.length).split(':');
  if (parts.length !== 2) throw modelSelectionError('Invalid saved provider/model selection. Select the model again.');
  let providerId, modelId;
  try { [providerId, modelId] = parts.map(decodeURIComponent); }
  catch { throw modelSelectionError('Invalid saved provider/model selection. Select the model again.'); }
  if (!providerId || !modelId || modelSelectionId(providerId, modelId) !== value)
    throw modelSelectionError('Invalid saved provider/model selection. Select the model again.');
  return { providerId, modelId };
}

// Preserve the selection identity through Agent/subagent execution. Resolve it
// only at the request owner, before discovery, capability lookup or inference.
export function resolveAgentModel(options) {
  const providers = options.localProvider?.openvisionProviders;
  if (!providers) return options;
  const selected = parseModelSelection(options.modelId);
  const matches = providers.filter(provider => (!selected || provider.id === selected.providerId) &&
    (selected ? provider.modelIds : provider.legacyModelIds).includes(selected?.modelId ?? options.modelId));
  if (matches.length !== 1)
    throw modelSelectionError(matches.length ? 'This model is offered by multiple providers. Select its provider in the model picker.'
      : 'The selected model or provider is unavailable. Select an enabled model in OpenVision settings.');
  const provider = matches[0];
  const modelId = selected?.modelId ?? options.modelId;
  const allowed = provider.reasoningValues?.[modelId];
  if (allowed && unavailableReasoning(options.modelParameters, allowed))
    throw modelSelectionError('The selected reasoning level is unavailable. Choose a listed level or Provider default in the model picker.');
  return { ...options, modelId, ...(allowed ? { configuredEffortValues: allowed } : {}),
    localProvider: { ...options.localProvider, endpoints: [{ baseUrl: provider.baseUrl, apiKey: provider.apiKey }] } };
}
