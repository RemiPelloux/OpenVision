import { DatabaseSync } from 'node:sqlite';
import { createServer } from 'node:http';
import { join } from 'node:path';

// Saved OpenVision providers for live verifiers. Credentials stay encrypted
// until an owned Electron host decrypts them; nothing here writes plaintext.
export const providerStateKey = 'openvision.model-providers.v1';
export const savedStatePath = root => join(root, 'data/local/User/globalStorage/state.vscdb');

export function readSavedProviders(path) {
  const database = new DatabaseSync(path, { readOnly: true });
  try {
    const row = database.prepare('SELECT value FROM ItemTable WHERE key = ?').get(providerStateKey);
    if (!row) throw Error('No saved OpenVision providers');
    const state = JSON.parse(String(row.value));
    return state.providers.map(provider => ({ id: provider.id, name: provider.name, url: provider.url,
      models: provider.models.filter(model => model.enabled).map(model => model.id),
      customHeaderNames: provider.customHeaderNames ?? [],
      encrypted: database.prepare('SELECT value FROM ItemTable WHERE key = ?')
        .get(`secret://openvision.provider.${provider.id}`)?.value }));
  } finally { database.close(); }
}

export async function decryptSavedCredential(app, encrypted) {
  return app.evaluate(({ safeStorage }, saved) => {
    try {
      return { key: saved ? safeStorage.decryptString(Buffer.from(JSON.parse(String(saved)).data)) : '' };
    } catch { return { error: 'Saved credential could not be decrypted.' }; }
  }, encrypted);
}

// Fixture dry runs only: a saved-provider database in the layout above whose
// credential the owned host encrypts, so the same read/decrypt path runs.
export async function writeFixtureSavedProviders(app, path, { id, name, url, models, key }) {
  const encrypted = await app.evaluate(({ safeStorage }, value) => JSON.stringify(safeStorage.encryptString(value)), key);
  const database = new DatabaseSync(path);
  try {
    database.exec('CREATE TABLE IF NOT EXISTS ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB)');
    const insert = database.prepare('INSERT INTO ItemTable (key, value) VALUES (?, ?)');
    insert.run(providerStateKey, JSON.stringify({ version: 1, activeId: null,
      providers: [{ id, name, url, models: models.map(model => ({ id: model, name: model, enabled: true })) }] }));
    insert.run(`secret://openvision.provider.${id}`, encrypted);
  } finally { database.close(); }
  return path;
}

// Loopback OpenAI-compatible route standing in for a saved provider in dry runs.
// `respond(payload, context)` returns { content, finish_reason?, usage? }.
export async function startFixtureProvider({ models, key, respond }) {
  const requests = [];
  const server = createServer(async (request, response) => {
    response.setHeader('content-type', 'application/json');
    const authorized = request.headers.authorization === `Bearer ${key}`;
    if (request.url === '/v1/models') {
      if (!authorized) { response.statusCode = 401; return response.end('{}'); }
      return response.end(JSON.stringify({ data: models.map(id => ({ id })) }));
    }
    if (request.url !== '/v1/chat/completions' || request.method !== 'POST') { response.statusCode = 404; return response.end('{}'); }
    const receivedAt = performance.now(), chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const payload = JSON.parse(Buffer.concat(chunks).toString());
    const context = JSON.parse(payload.messages.at(-1).content);
    const entry = { receivedAt, authorized, model: payload.model, stream: payload.stream, maxTokens: payload.max_tokens,
      language: context.language, prefixCharacters: context.prefix.length, suffixCharacters: context.suffix.length };
    requests.push(entry);
    if (!authorized) { response.statusCode = 401; return response.end('{}'); }
    const reply = respond(payload, context);
    response.end(JSON.stringify({ choices: [{ finish_reason: reply.finish_reason ?? 'stop',
      message: { role: 'assistant', content: reply.content } }], ...(reply.usage ? { usage: reply.usage } : {}) }));
    entry.respondedAt = performance.now();
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { url: `http://127.0.0.1:${server.address().port}/v1`, requests,
    close: async () => { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); } };
}
