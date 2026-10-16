import { normalizeCustomHeaders, headerSecretKey } from './provider-headers.js';

export const providerSecretKey = id => `openvision.provider.${id}`;
const maxPendingCleanup = 128;
const referenceKey = entry => entry.revision ? headerSecretKey(entry.id, entry.revision) : providerSecretKey(entry.id);

export function validCredentialCleanup(entries = []) {
  return Array.isArray(entries) && entries.length <= maxPendingCleanup && entries.every(entry =>
    entry && typeof entry.id === 'string' && entry.id.length > 0 &&
    (entry.revision === undefined || typeof entry.revision === 'string' && /^[a-f0-9-]{36}$/.test(entry.revision)));
}

async function retainCleanup(store, entries) {
  const previous = store.state.credentialCleanup ?? [];
  const pending = new Map(previous.map(entry => [referenceKey(entry), entry]));
  for (const entry of entries) pending.set(referenceKey(entry), entry);
  if (pending.size === previous.length) return;
  if (pending.size > maxPendingCleanup) throw new Error('Credential cleanup is full. Retry cleanup before saving another provider.');
  store.state.credentialCleanup = [...pending.values()];
  // Persist ownership before creating a secret or removing its configuration.
  await store.persist();
}

export async function cleanupProviderCredentials(store) {
  const pending = store.state.credentialCleanup ?? [];
  if (!pending.length) return;
  const active = new Set(store.state.providers.flatMap(provider => [providerSecretKey(provider.id),
    ...(provider.customHeaderRevision ? [headerSecretKey(provider.id, provider.customHeaderRevision)] : [])]));
  const retained = [];
  for (const entry of pending) {
    if (active.has(referenceKey(entry))) continue;
    try { await store.bridge.secrets.delete(referenceKey(entry)); }
    catch { retained.push(entry); }
  }
  store.state.credentialCleanup = retained;
  try { await store.persist(); }
  catch { store.state.credentialCleanup = pending; }
}

export async function saveProvider(store, options) {
  const { id, name, url, key, headers, clearHeaders } = options;
  const previous = store.state.providers.find(provider => provider.id === id);
  const providerId = previous?.id ?? crypto.randomUUID();
  const normalized = clearHeaders ? {} : headers !== undefined ? normalizeCustomHeaders(headers) : undefined;
  const names = normalized ? Object.keys(normalized) : previous?.customHeaderNames ?? [];
  const revision = normalized ? (names.length ? crypto.randomUUID() : undefined) : previous?.customHeaderRevision;
  const provider = { id: providerId, name, url, models: previous?.models ?? [],
    ...(names.length ? { customHeaderNames: names, customHeaderRevision: revision } : {}),
    capabilitiesDiscovered: previous?.url === url && normalized === undefined && previous.capabilitiesDiscovered === true };
  await cleanupProviderCredentials(store);
  await retainCleanup(store, [
    ...(!previous && key !== undefined ? [{ id: providerId }] : []),
    ...(normalized && revision ? [{ id: providerId, revision }] : []),
    ...(normalized && previous?.customHeaderRevision ? [{ id: providerId, revision: previous.customHeaderRevision }] : []),
  ]);
  let changed = false;
  try {
    if (normalized && revision) await store.bridge.secrets.set(headerSecretKey(providerId, revision), JSON.stringify(normalized));
    if (key !== undefined) await store.bridge.secrets.set(providerSecretKey(providerId), key.trim());
    if (previous) store.state.providers[store.state.providers.indexOf(previous)] = provider;
    else store.state.providers.push(provider);
    changed = true;
    await store.persist();
  } catch (error) {
    if (changed) {
      if (previous) store.state.providers[store.state.providers.indexOf(provider)] = previous;
      else store.state.providers = store.state.providers.filter(item => item !== provider);
      try { await store.persist(); }
      catch {
        store.credentialStateUncertain = true;
        throw new Error('Provider save and rollback failed. Restart before changing providers; staged credentials are retained.', { cause: error });
      }
    }
    await cleanupProviderCredentials(store);
    throw error;
  }
  await cleanupProviderCredentials(store);
  if (store.state.activeId === provider.id) await store.activate(provider.id);
  return provider;
}

export async function removeProvider(store, id) {
  const previous = store.get(id);
  await retainCleanup(store, [{ id }, ...(previous.customHeaderRevision ? [{ id, revision: previous.customHeaderRevision }] : [])]);
  const providers = store.state.providers, activeId = store.state.activeId;
  store.state.providers = providers.filter(provider => provider.id !== id);
  if (activeId === id) store.state.activeId = null;
  try { await store.persist(); }
  catch (error) {
    store.state.providers = providers; store.state.activeId = activeId;
    try { await store.persist(); }
    catch { store.credentialStateUncertain = true; }
    throw error;
  }
  await cleanupProviderCredentials(store);
  if (activeId === id) await store.activate(null);
  else store.publishModels();
}
