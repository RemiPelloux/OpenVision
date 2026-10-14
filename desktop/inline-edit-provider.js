import { requestProvider, requestProviderRoute } from './model-providers.js';
import { unavailableReasoning, providerDefaultReasoning } from './model-reasoning.js';

import { inlineEditContext, InlineEditError } from './inline-edit-context.js';
export { inlineEditContext };
export { inlineEditFailure } from './inline-edit-context.js';

export function inlineEditModel(ai) {
  const config = ai._modelConfigService.getModelConfig('composer');
  const selection = config.selectedModels?.[0] ?? { modelId: config.modelName };
  return { modelName: selection.modelId, openvisionSelection: selection };
}

export async function* inlineEdit(context, signal, secretToken, ipc = globalThis.vscode.ipcRenderer) {
  const { ai, request, session, id } = context;
  signal.throwIfAborted();
  const selection = request.cmdKOptions.modelDetails.openvisionSelection;
  const route = requestProviderRoute(ai._storageService, selection?.modelId);
  if (!route) throw new InlineEditError('Select an available custom model in the Agent model picker before editing.');
  const unavailable = unavailableReasoning(selection.parameters, route.reasoningValues);
  if (unavailable) throw new InlineEditError('The selected reasoning level is unavailable. Choose a listed level or Provider default.');
  const secrets = ai._instantiationService.invokeFunction(accessor => accessor.get(secretToken));
  const connection = await requestProvider(ai._storageService, secrets, selection.modelId);
  signal.throwIfAborted();
  const effort = selection.parameters?.find(item => ['reasoning', 'effort', 'thought_level'].includes(item.id))?.value;
  const input = { id, ...connection, context: inlineEditContext(request, session),
    chatMode: request.cmdKOptions.chatMode === true, ...(effort && effort !== providerDefaultReasoning ? { effort } : {}) };
  const cancel = () => { void ipc.invoke('vscode:openvision-inline-edit-cancel', id).catch(() => {}); };
  signal.addEventListener('abort', cancel, { once: true });
  try {
    const result = await ipc.invoke('vscode:openvision-inline-edit', input);
    signal.throwIfAborted();
    if (!result.ok) throw new InlineEditError(result.error);
    const current = requestProviderRoute(ai._storageService, selection.modelId);
    if (!current || current.baseUrl !== route.baseUrl || current.providerId !== route.providerId)
      throw new InlineEditError('Provider settings changed during the edit. Try again.');
    // The native consumer normalizes one newline per chunk to the document EOL.
    for (const text of result.text.replace(/\r\n|\r/g, '\n').split(/(?<=\n)/)) {
      signal.throwIfAborted();
      yield { response: { case: 'realResponse', value: { response: {
        case: input.chatMode ? 'chat' : 'editStream', value: { text, editId: 0 },
      } } } };
    }
  } finally { signal.removeEventListener('abort', cancel); }
}
