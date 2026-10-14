import { ipcMain, net } from 'electron';
import { assertWorkbenchSender } from '../../../desktop/workbench-sender.mjs';
import { fetchInlineEdit } from '../../../desktop/inline-edit-http.mjs';
import { CodeResponseError } from '../../../desktop/code-response.mjs';

const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url);
const pending = new Map();

ipcMain.handle('vscode:openvision-inline-edit-cancel', (event, id) => {
  assertWorkbenchSender(event, expected);
  pending.get(event.sender)?.get(id)?.abort();
});

ipcMain.handle('vscode:openvision-inline-edit', async (event, input) => {
  assertWorkbenchSender(event, expected);
  if (typeof input?.id !== 'string' || !input.id || input.id.length > 100)
    return { ok: false, error: 'Invalid inline edit identity.' };
  let requests = pending.get(event.sender);
  if (!requests) { requests = new Map(); pending.set(event.sender, requests); }
  if (requests.size >= 4 || requests.has(input.id)) return { ok: false, error: 'An inline edit is already running. Cancel it before trying again.' };
  const controller = new AbortController(), cancel = () => controller.abort();
  requests.set(input.id, controller);
  for (const name of ['destroyed', 'render-process-gone', 'did-start-navigation']) event.sender.once(name, cancel);
  try {
    const text = await fetchInlineEdit(input, { fetch: (...args) => net.fetch(...args),
      signal: AbortSignal.any([controller.signal, AbortSignal.timeout(120000)]) });
    return controller.signal.aborted ? { ok: false, error: 'Canceled' } : { ok: true, text };
  } catch (error) {
    return { ok: false, error: controller.signal.aborted ? 'Canceled' : error instanceof CodeResponseError
      ? error.message : 'Inline edit unavailable. Check the selected model and provider, then retry.' };
  } finally {
    requests.delete(input.id);
    if (!requests.size) pending.delete(event.sender);
    for (const name of ['destroyed', 'render-process-gone', 'did-start-navigation']) event.sender.removeListener(name, cancel);
  }
});
