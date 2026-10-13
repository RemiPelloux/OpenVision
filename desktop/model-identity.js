const prefix = 'openvision-model:';

export function modelSelectionId(providerId, modelId) {
  return `${prefix}${encodeURIComponent(providerId)}:${encodeURIComponent(modelId)}`;
}

export function parseModelSelection(value) {
  if (typeof value !== 'string' || !value.startsWith(prefix)) return undefined;
  const parts = value.slice(prefix.length).split(':');
  if (parts.length !== 2) throw new Error('Invalid saved provider/model selection. Select the model again.');
  let providerId, modelId;
  try { [providerId, modelId] = parts.map(decodeURIComponent); }
  catch { throw new Error('Invalid saved provider/model selection. Select the model again.'); }
  if (!providerId || !modelId || modelSelectionId(providerId, modelId) !== value)
    throw new Error('Invalid saved provider/model selection. Select the model again.');
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
    throw new Error(matches.length ? 'This model is offered by multiple providers. Select its provider in the model picker.'
      : 'The selected model or provider is unavailable. Select an enabled model in OpenVision settings.');
  const provider = matches[0];
  return { ...options, modelId: selected?.modelId ?? options.modelId,
    localProvider: { ...options.localProvider, endpoints: [{ baseUrl: provider.baseUrl, apiKey: provider.apiKey }] } };
}
