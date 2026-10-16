import { normalizeBaseUrl, parseModels } from './model-providers.js';
import { providerRequestHeaders } from './provider-headers.js';

const RESPONSE_BYTES = 4 * 1024 * 1024;
const REQUEST_TIMEOUT_MS = 20_000;
class DiscoveryFailure extends Error {}

// Each workbench owns its requests and one set of lifecycle listeners. Nothing
// is retained after its final request finishes, including its deadline timer.
export function createModelDiscoveryHandler({ fetch, timeoutMs = REQUEST_TIMEOUT_MS }) {
  const owners = new Map();
  return async (event, configuration) => {
    const controller = new AbortController();
    const release = ownRequest(owners, event.sender, controller);
    const timer = setTimeout(() => controller.abort(new DiscoveryFailure('Model discovery timed out. Try again.')), timeoutMs);
    timer.unref?.();
    try {
      return { ok: true, data: await discover(configuration, fetch, controller) };
    } catch (error) {
      const failure = controller.signal.aborted ? controller.signal.reason : error;
      return { ok: false, error: failure instanceof DiscoveryFailure ? failure.message :
        'Connection failed. Check the API base URL and network.' };
    } finally {
      clearTimeout(timer);
      release();
      controller.abort();
    }
  };
}

function ownRequest(owners, sender, controller) {
  let owner = owners.get(sender);
  if (!owner) {
    const controllers = new Set();
    const abort = () => {
      for (const request of controllers)
        request.abort(new DiscoveryFailure('Model discovery canceled because the workbench closed or reloaded.'));
    };
    const navigate = (_event, _url, _inPlace, isMainFrame) => { if (isMainFrame) abort(); };
    const listeners = [['destroyed', abort], ['render-process-gone', abort], ['did-start-navigation', navigate]];
    owner = { controllers, listeners };
    for (const [event, listener] of listeners) sender.on(event, listener);
    owners.set(sender, owner);
  }
  owner.controllers.add(controller);
  if (sender.isDestroyed()) controller.abort(new DiscoveryFailure('The workbench is no longer available.'));
  return () => {
    owner.controllers.delete(controller);
    if (owner.controllers.size) return;
    for (const [event, listener] of owner.listeners) sender.removeListener(event, listener);
    owners.delete(sender);
  };
}

async function discover(configuration, fetch, controller) {
  if (!configuration || typeof configuration.url !== 'string' || typeof configuration.key !== 'string')
    throw new DiscoveryFailure('Invalid provider connection.');
  const base = normalizeBaseUrl(configuration.url);
  const headers = providerRequestHeaders(configuration.key, configuration.headers);
  controller.signal.throwIfAborted();
  const response = await fetch(`${base}/models`, {
    method: 'GET', redirect: 'error', signal: controller.signal,
    headers,
  });
  if (!response.ok) {
    const failure = new DiscoveryFailure(`Model discovery failed (HTTP ${response.status}). Check the URL, key and provider access.`);
    controller.abort(failure);
    await response.body?.cancel().catch(() => {});
    throw failure;
  }
  const bytes = await readCatalog(response, controller);
  let body;
  try { body = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)); }
  catch { throw new DiscoveryFailure('The provider returned invalid JSON or UTF-8.'); }
  // Model/capability interpretation remains owned by the existing parser.
  try { return parseModels(body); }
  catch (error) { throw new DiscoveryFailure(error.message); }
}

async function readCatalog(response, controller) {
  if (!response.body) throw new DiscoveryFailure('The provider returned an empty HTTP response.');
  const reader = response.body.getReader(), chunks = [];
  let bytes = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      if (value.byteLength > RESPONSE_BYTES - bytes)
        throw new DiscoveryFailure('The model list exceeds the supported response size (4 MiB).');
      bytes += value.byteLength;
      chunks.push(value);
    }
    return Buffer.concat(chunks, bytes);
  } catch (error) {
    controller.abort(error);
    throw error;
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}
