// Account endpoints and loopback credentials belong to this renderer's memory.
// They must never enter persisted API provider configuration or secret storage.
const catalogs = new WeakMap();
const empty = Object.freeze([]);
const REFRESH_MS = 30000;
export function accountProviders(storage) { return catalogs.get(storage)?.providers ?? empty; }
export function watchAccountModels(storage, onChange) {
  let disposed = false;
  const refresh = () => void refreshAccountModels(storage).then(changed => { if (changed && !disposed) onChange(); });
  globalThis.window?.addEventListener('openvision-project-home-ready', refresh);
  globalThis.window?.addEventListener('focus', refresh);
  refresh();
  return { dispose() {
    disposed = true;
    globalThis.window?.removeEventListener('openvision-project-home-ready', refresh);
    globalThis.window?.removeEventListener('focus', refresh);
  } };
}
export function refreshAccountModels(storage, force = false) {
  const service = globalThis.window?.openvisionProjectHome;
  if (!service?.accountCatalog) return Promise.resolve(false);
  let entry = catalogs.get(storage);
  if (!entry) { entry = { providers: [], checkedAt: 0 }; catalogs.set(storage, entry); }
  if (entry.pending) return entry.pending;
  if (!force && Date.now() - entry.checkedAt < REFRESH_MS) return Promise.resolve(false);
  entry.pending = service.accountCatalog().then(result => {
    const providers = result?.providers;
    if (!Array.isArray(providers)) throw Error('Account catalog is unavailable.');
    const changed = JSON.stringify(entry.providers) !== JSON.stringify(providers);
    entry.providers = providers; entry.checkedAt = Date.now(); return changed;
  }).catch(() => {
    const changed = entry.providers.length > 0;
    entry.providers = []; entry.checkedAt = 0; return changed;
  }).finally(() => { entry.pending = undefined; });
  return entry.pending;
}
