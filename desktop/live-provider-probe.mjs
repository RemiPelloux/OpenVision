import { normalizeBaseUrl, parseModels } from './model-providers.js';
import { probeLiveChat, probeLiveReply } from './live-chat-probe.mjs';
import { probeLiveCompletion } from './live-completion-probe.mjs';
import { probeCompletionQuality } from './live-completion-quality-probe.mjs';

const discoveryBytes = 4 * 1024 * 1024;
const timeoutMs = 20000;

function redactCredential(value, key) {
  if (!key) return value;
  if (typeof value === 'string') return value.replaceAll(key, '[redacted]');
  if (Array.isArray(value)) return value.map(item => redactCredential(item, key));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value)
    .map(([name, item]) => [name, redactCredential(item, key)]));
  return value;
}

async function readBody(response, limit) {
  const reader = response.body.getReader(), chunks = [];
  let bytes = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > limit) throw new Error('Response exceeds probe size limit');
      chunks.push(Buffer.from(value));
    }
    return Buffer.concat(chunks).toString('utf8');
  } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
}

export async function probeProvider(provider, transport) {
  const url = normalizeBaseUrl(provider.url), started = performance.now();
  try {
    const response = await transport.fetch(`${url}/models`, { redirect: 'error',
      signal: AbortSignal.timeout(timeoutMs), headers: provider.key ? { Authorization: `Bearer ${provider.key}` } : {} });
    if (!response.ok) {
      await response.body?.cancel();
      return { discovery: { ok: false, httpStatus: response.status, elapsedMs: Math.round(performance.now() - started) } };
    }
    const models = parseModels(JSON.parse(await readBody(response, discoveryBytes)));
    const discoveredIds = new Set(models.map(model => model.id));
    const discovery = { ok: true, httpStatus: response.status, elapsedMs: Math.round(performance.now() - started),
      modelCount: models.length, models: models.map(({ id, capabilities }) => ({ id, capabilities })),
      configuredMissing: provider.models.filter(id => !discoveredIds.has(id)) };
    const model = (provider.probeModel ? [provider.probeModel] : ['gpt-6.1-sol', 'deepseek-v4-flash', 'grok-4.7']).find(id =>
      provider.models.includes(id) && discoveredIds.has(id));
    const probe = { completion: probeLiveCompletion, 'completion-quality': probeCompletionQuality, chat: probeLiveReply }[provider.probeMode] ?? probeLiveChat;
    const resultKey = { completion: 'completion', 'completion-quality': 'completionQuality' }[provider.probeMode] ?? 'chat';
    return redactCredential({ discovery, [resultKey]: model ? await probe({ ...provider, url }, model, transport)
      : { ok: false, error: 'No configured GPT, DeepSeek or Grok probe model was discovered' } }, provider.key);
  } catch (error) {
    return { discovery: { ok: false, error: error.name === 'TimeoutError' ? 'Discovery timed out' : 'Discovery connection or response failed',
      elapsedMs: Math.round(performance.now() - started) } };
  }
}
