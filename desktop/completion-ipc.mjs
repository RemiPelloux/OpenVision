import { ipcMain, net } from 'electron';
import { assertWorkbenchSender } from '../../../desktop/workbench-sender.mjs';
import { fetchCompletion } from '../../../desktop/completion-http.mjs';

const expected = new URL('./vs/code/electron-sandbox/workbench/workbench.html', import.meta.url);
const pending = new Map();

ipcMain.handle('vscode:openvision-completion-cancel', (event, id) => {
  assertWorkbenchSender(event, expected);
  pending.get(event.sender)?.get(id)?.abort();
});
ipcMain.handle('vscode:openvision-completion', async (event, input) => {
  assertWorkbenchSender(event, expected);
  if (typeof input?.id !== 'string' || input.id.length > 100) return { ok: false, error: 'Invalid completion identity.' };
  let requests = pending.get(event.sender);
  if (!requests) { requests = new Map(); pending.set(event.sender, requests); }
  // A newer request supersedes the previous completion from this window.
  for (const controller of requests.values()) controller.abort();
  const controller = new AbortController();
  requests.set(input.id, controller);
  const cancel = () => controller.abort();
  event.sender.once('destroyed', cancel);
  event.sender.once('render-process-gone', cancel);
  event.sender.once('did-start-navigation', cancel);
  try {
    const text = await fetchCompletion(input, {
      fetch: (...args) => net.fetch(...args), signal: AbortSignal.any([controller.signal, AbortSignal.timeout(15000)]),
    });
    return controller.signal.aborted ? { ok: false, error: 'Canceled' } : { ok: true, text };
  } catch (error) {
    return { ok: false, error: controller.signal.aborted ? 'Canceled' : 'Completion unavailable. Check the selected model and provider.' };
  } finally {
    if (requests.get(input.id) === controller) requests.delete(input.id);
    if (!requests.size) pending.delete(event.sender);
    event.sender.removeListener('destroyed', cancel);
    event.sender.removeListener('render-process-gone', cancel);
    event.sender.removeListener('did-start-navigation', cancel);
  }
});
