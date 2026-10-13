import { requestProvider, requestProviderRoute } from './model-providers.js';

export const completionStorageKey = 'openvision.completion-model.v1';
const prefixCharacters = 8000;
const suffixCharacters = 2000;
const completionOptionsLimit = 40;

function showCompletionStatus(service, error) {
  const entry = service.statusbarElement?.value;
  if (!entry) return;
  const properties = service.statusBarElementProps();
  entry.update(error ? { ...properties, text: '$(warning) OpenVision Tab', tooltip: error,
    ariaLabel: `OpenVision autocomplete: ${error}` } : properties);
}

export function completionModel(storage) {
  const id = storage.get(completionStorageKey, -1);
  return requestProviderRoute(storage, id) ? id : undefined;
}

export function completionContext(text, position, language) {
  if (!Number.isInteger(position.lineNumber) || position.lineNumber < 1 || !Number.isInteger(position.column))
    throw new Error('Completion position is outside the document.');
  let offset = 0;
  const separators = /\r\n|\n|\r/g;
  for (let line = 1; line < position.lineNumber; line++) {
    const previous = separators.exec(text);
    if (!previous) throw new Error('Completion position is outside the document.');
    offset = previous.index + previous[0].length;
  }
  const next = separators.exec(text);
  const line = text.slice(offset, next?.index ?? text.length);
  if (position.column < 1 || position.column > line.length + 1)
    throw new Error('Completion position is outside the document.');
  offset += position.column - 1;
  let start = Math.max(0, offset - prefixCharacters), end = Math.min(text.length, offset + suffixCharacters);
  // Keep truncation boundaries outside UTF-16 surrogate pairs.
  if (start > 0 && /[\uDC00-\uDFFF]/.test(text[start]) && /[\uD800-\uDBFF]/.test(text[start - 1])) start++;
  if (end < text.length && /[\uDC00-\uDFFF]/.test(text[end]) && /[\uD800-\uDBFF]/.test(text[end - 1])) end--;
  return { prefix: text.slice(start, offset), suffix: text.slice(offset, end), language,
    linePrefix: line.slice(0, position.column - 1), lineSuffix: line.slice(position.column - 1),
    lineNumber: position.lineNumber, eol: text.includes('\r\n') ? '\r\n' : '\n' };
}

export async function localCompletion(service, request, secretToken, ipc = globalThis.vscode.ipcRenderer) {
  const { model, modelValue, modelVersion, position, abortController, generationUUID, editor } = request;
  const modelId = completionModel(service._storageService);
  if (!modelId || abortController.signal.aborted) return null;
  const route = requestProviderRoute(service._storageService, modelId);
  const current = () => {
    if (abortController.signal.aborted || model.isDisposed() || editor.getModel() !== model ||
        model.getVersionId() !== modelVersion || editor.getPosition()?.lineNumber !== position.lineNumber ||
        editor.getPosition()?.column !== position.column ||
        service._storageService.get(completionStorageKey, -1) !== modelId) return false;
    try {
      const selected = requestProviderRoute(service._storageService, modelId);
      return !!selected && selected.providerId === route.providerId && selected.baseUrl === route.baseUrl;
    } catch { return false; }
  };
  const cancel = () => { void ipc.invoke('vscode:openvision-completion-cancel', generationUUID).catch(() => {}); };
  try {
    if (await service.debouncer.shouldDebounce(generationUUID) || !current()) return null;
    const secrets = service._instantiationService.invokeFunction(accessor => accessor.get(secretToken));
    const connection = await requestProvider(service._storageService, secrets, modelId);
    if (!connection || !current()) return null;
    const context = completionContext(modelValue, position, model.getLanguageId());
    context.eol = model.getEOL?.() ?? context.eol;
    abortController.signal.addEventListener('abort', cancel, { once: true });
    service.lastStartedRequestId = generationUUID;
    const result = await ipc.invoke('vscode:openvision-completion', {
      id: generationUUID, ...connection, model: modelId,
      prefix: context.prefix, suffix: context.suffix, language: context.language,
    });
    if (!current()) return null;
    showCompletionStatus(service, result.ok ? undefined : result.error ?? 'Completion unavailable. Check the selected model and provider.');
    if (!result.ok || !result.text) return null;
    const insertion = result.text.replace(/\r\n|\r|\n/g, context.eol);
    return (async function* () {
      if (!current()) return;
      yield { case: 'modelInfo', modelInfo: { isMultidiffModel: false, isFusedCursorPredictionModel: false } };
      if (!current()) return;
      yield { case: 'rangeToReplaceOneIndexed', range: {
        startLineNumber: context.lineNumber, endLineNumberInclusive: context.lineNumber,
      } };
      if (current()) yield { case: 'text', text: context.linePrefix + insertion + context.lineSuffix };
    })();
  } catch {
    if (current()) showCompletionStatus(service, 'Completion unavailable. Check the selected model and provider.');
    return null;
  } finally { abortController.signal.removeEventListener('abort', cancel); }
}

function completionOptions(document, select, choices, selected) {
  const off = document.createElement('option'); off.value = ''; off.textContent = 'Off';
  select.replaceChildren(off);
  const groups = new Map();
  for (const model of choices.models) {
    const groupId = model.providerId;
    if (!groups.has(groupId)) {
      const group = document.createElement('optgroup'); group.label = model.tagline || 'Models';
      groups.set(groupId, group); select.append(group);
    }
    const option = document.createElement('option');
    option.value = model.name; option.textContent = model.clientDisplayName;
    groups.get(groupId).append(option);
  }
  select.value = selected;
  return choices.count > completionOptionsLimit ? `Showing ${completionOptionsLimit} of ${choices.count} matches. Search to find a model.` : `${choices.count} matching models.`;
}

export function completionControl(document, bridge, providers) {
  const label = document.createElement('div');
  label.className = 'openvision-active-provider';
  label.textContent = 'Tab autocomplete model';
  let selected = completionModel(bridge.storage) ?? '';
  const search = document.createElement('input');
  search.type = 'search'; search.placeholder = 'Find autocomplete model';
  search.setAttribute('aria-label', 'Search autocomplete models');
  const select = document.createElement('select');
  select.setAttribute('aria-label', 'Tab autocomplete model');
  const status = document.createElement('small'); status.setAttribute('role', 'status');
  const render = () => {
    const choices = providers.completionChoices(search.value.trim().toLowerCase(), selected, completionOptionsLimit);
    status.textContent = completionOptions(document, select, choices, selected);
  };
  let frame;
  search.oninput = () => {
    if (frame !== undefined) return;
    frame = requestAnimationFrame(() => { frame = undefined; if (label.isConnected) render(); });
  };
  render();
  select.onchange = async () => {
    selected = select.value;
    try {
      bridge.storage.store(completionStorageKey, selected, -1, 1);
      bridge.reactive.setApplicationUserPersistentStorage('cppEnabled', !!selected);
      await bridge.storage.flush();
      bridge.reactive.manualSave();
      render();
    } catch { status.textContent = 'Could not save autocomplete preference. Please try again.'; }
  };
  label.append(search, select, status);
  const help = document.createElement('small');
  help.textContent = 'Sends nearby code to the selected provider. Choose a fast code model. Predictive jumps are not supported.';
  label.append(help);
  return label;
}
