const codexEasyHosts = new Set(['codex-easy.ai', 'codex-everywhere.com']);
const gptModels = new Set([
  'gpt-6-astra', 'gpt-6.1-sol', 'gpt-6-sol', 'gpt-6-luna',
  'gpt-5.6-sol', 'gpt-5.6-terra', 'gpt-5.6-luna',
]);

// Local UI intent, never an upstream effort value.
export const providerDefaultReasoning = 'openvision-provider-default';

export function reasoningChoices(model, provider) {
  return model.capabilities?.reasoningEffortValues ??
    (fallbackReasoningValues(provider.url, model.id) ?? []).map(id => ({ id, value: id }));
}

export function unavailableReasoning(parameters, allowed) {
  const effort = parameters?.find(item => ['reasoning', 'effort', 'thought_level'].includes(item.id))?.value;
  return effort && effort !== providerDefaultReasoning && !allowed.includes(effort) ? effort : undefined;
}

export function reasoningSource(model, provider) {
  if (Array.isArray(model.capabilities?.reasoningEffortValues))
    return model.capabilities.reasoningEffortValues.length ? 'Provider-declared · Unverified' : 'No reasoning levels declared';
  return fallbackReasoningValues(provider.url, model.id)?.length ? 'Compatibility hints · Unverified' : 'No reasoning levels declared';
}

export function subagentSelectionNotice(override, catalog) {
  if (override?.mode !== 'model') return '';
  const selection = override.modelConfig?.selectedModels?.[0];
  const id = selection?.modelId ?? override.modelConfig?.modelName;
  const model = catalog.find(model => model.name === id);
  if (!model) return 'The selected Explore model is unavailable. Choose another model or Inherit from parent.';
  const values = model.parameterDefinitions?.find(parameter => parameter.id === 'reasoning')?.parameterType?.enumParameter?.values ?? [];
  const unavailable = unavailableReasoning(selection?.parameters, values.map(value => value.value));
  return unavailable ? `Reasoning level "${unavailable}" is unavailable for the selected Explore model. Choose a listed level or Provider default.` : '';
}

// Compatibility hints; individual tiers require live verification. Declarations take precedence.
export function fallbackReasoningValues(baseUrl, modelId) {
  let hostname;
  try { hostname = new URL(baseUrl).hostname; } catch { return undefined; }
  if (!codexEasyHosts.has(hostname)) return undefined;
  if (gptModels.has(modelId)) return ['low', 'medium', 'high', 'xhigh', 'max'];
  if (['deepseek-flash', 'deepseek-v4-flash', 'deepseek-v4-flash-vision-exp', 'deepseek-v4-pro'].includes(modelId)) return ['none', 'low', 'high', 'max'];
  if (['grok-4.6', 'grok-4.7'].includes(modelId)) return ['low', 'medium', 'high', 'xhigh'];
  if (modelId === 'grok-4.5') return ['low', 'medium', 'high'];
  return undefined;
}

export function requestReasoningValues({ baseUrl, modelId, configured, advertised }) {
  if (Array.isArray(configured)) return configured;
  if (Array.isArray(advertised)) return advertised;
  return fallbackReasoningValues(baseUrl, modelId);
}
