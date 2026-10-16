const headerNamePattern = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
const forbiddenHeaders = new Set(['content-length', 'content-type', 'connection', 'host', 'transfer-encoding',
  'proxy-authorization', 'proxy-connection', 'cookie', 'set-cookie', 'te', 'trailer', 'upgrade', 'accept-encoding']);
const maxCustomHeaders = 16;
const maxHeaderValueLength = 4096;
const maxHeaderCharacters = 16 * 1024;

export const headerSecretKey = (id, revision) => `openvision.provider.headers.${id}.${revision}`;

export function normalizeCustomHeaders(value) {
  if (value === undefined || value === '') return {};
  if (typeof value === 'string') {
    if (value.length > maxHeaderCharacters) throw new Error('Additional headers exceed 16 KiB.');
    try { value = JSON.parse(value); }
    catch { throw new Error('Additional headers must be valid JSON.'); }
  }
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new Error('Additional headers must be a JSON object.');
  const headers = Object.create(null), names = new Set();
  let characters = 0;
  for (const [rawName, rawValue] of Object.entries(value)) {
    const name = rawName.toLowerCase();
    if (!headerNamePattern.test(rawName) || forbiddenHeaders.has(name) || name.startsWith('sec-') || name.startsWith('proxy-'))
      throw new Error('Additional headers contain an unsupported header name.');
    if (names.has(name)) throw new Error('Additional headers contain a duplicate header name.');
    if (typeof rawValue !== 'string' || !rawValue.trim() || rawValue.length > maxHeaderValueLength || /[^\t\x20-\x7e\x80-\xff]/.test(rawValue))
      throw new Error('Additional headers contain an invalid value.');
    characters += rawName.length + rawValue.length;
    if (characters > maxHeaderCharacters || names.size >= maxCustomHeaders)
      throw new Error('Additional headers exceed 16 entries or 16 KiB.');
    names.add(name); headers[name] = rawValue.trim();
  }
  return { ...headers };
}

export function validHeaderMetadata(provider) {
  const names = provider.customHeaderNames ?? [];
  try {
    return Array.isArray(names) && names.length <= maxCustomHeaders && new Set(names).size === names.length &&
      names.every(name => typeof name === 'string' && Object.hasOwn(normalizeCustomHeaders({ [name]: 'value' }), name)) &&
      (!names.length || typeof provider.customHeaderRevision === 'string' && /^[a-f0-9-]{36}$/.test(provider.customHeaderRevision));
  } catch { return false; }
}

export async function readProviderHeaders(secrets, provider) {
  const names = provider.customHeaderNames ?? [];
  if (!names.length) return {};
  const text = await secrets.get(headerSecretKey(provider.id ?? provider.providerId, provider.customHeaderRevision));
  if (!text) throw new Error('Saved provider headers are unavailable. Edit the provider and save its headers again.');
  const headers = normalizeCustomHeaders(text), actual = Object.keys(headers).sort(), expected = [...names].sort();
  if (actual.length !== expected.length || actual.some((name, index) => name !== expected[index]))
    throw new Error('Saved provider headers do not match this configuration. Save the provider headers again.');
  return headers;
}

export function providerRequestHeaders(apiKey, customHeaders, json = false) {
  const headers = normalizeCustomHeaders(customHeaders);
  return { ...(json ? { 'content-type': 'application/json' } : {}),
    ...(apiKey && !Object.hasOwn(headers, 'authorization') ? { authorization: `Bearer ${apiKey}` } : {}), ...headers };
}
