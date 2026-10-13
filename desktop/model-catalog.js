import { reasoningChoices, providerDefaultReasoning, reasoningSource } from './model-reasoning.js';
import { modelSelectionId } from './model-identity.js';

const reasoningLabels = {
  none: 'Off', auto: 'Auto', minimal: 'Minimal', low: 'Low', medium: 'Medium', high: 'High',
  xhigh: 'Extra High', 'extra-high': 'Extra High', max: 'Max', ultra: 'Ultra',
};
function reasoningParameter(values) {
  return { id: 'reasoning', name: 'Reasoning', markdownTooltip: 'Provider default leaves reasoning to your server. Other choices request an explicit effort.',
    parameterType: { enumParameter: { values: values.map(item => ({ value: item.value ?? item.id, displayName: item.label ?? reasoningLabels[item.id] ?? item.id })) } },
    isCycleableByHotkey: true };
}

export function catalogModel(model, provider, namedModelSectionIndex) {
  const selectionId = modelSelectionId(provider.id, model.id);
  const efforts = reasoningChoices(model, provider);
  // Keep an explicit recovery choice when a server removes every reasoning level.
  const reasoning = [{ id: providerDefaultReasoning, label: 'Provider default' }, ...efforts];
  const defaultEffort = reasoning[0];
  const reasoningDescription = `${reasoningSource(model, provider)}\n\nExplicit levels are not verified for this connection. Provider default lets your server choose.`;
  const variants = reasoning.map(item => {
    const label = item.label ?? reasoningLabels[item.id] ?? item.id;
    return { parameterValues: [{ id: 'reasoning', value: item.value ?? item.id }], displayName: `${model.name} · ${label}`,
      tooltipData: { markdownContent: reasoningDescription },
      displayNameOutsidePicker: item.id === providerDefaultReasoning ? model.name : `${model.name} · ${label}`, isMaxMode: false,
      isDefaultNonMaxConfig: item === defaultEffort, isDefaultMaxConfig: item === defaultEffort };
  });
  return {
    supportsThinking: efforts.length > 0,
    parameterDefinitions: [reasoningParameter(reasoning)], variants,
    name: selectionId, serverModelName: selectionId,
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
