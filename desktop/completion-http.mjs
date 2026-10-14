import { normalizeBaseUrl } from './model-providers.js';

const maxResponseBytes = 64 * 1024;
const maxInsertionCharacters = 8000;

// Only locally authored diagnostics cross IPC. Never expose provider text or
// JSON parser excerpts, which can contain code or echoed credentials.
export class CompletionResponseError extends Error {}

function insertionFromBytes(data) {
  let body;
  try { body = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(data)); }
  catch { throw new CompletionResponseError('Provider returned invalid completion JSON or UTF-8.'); }
  const choice = Array.isArray(body?.choices) ? body.choices[0] : undefined;
  if (choice?.finish_reason === 'length')
    throw new CompletionResponseError('Provider truncated the completion. Try a shorter context or another autocomplete model.');
  const message = choice?.message, text = message?.content;
  if (choice?.finish_reason !== 'stop' || message?.role !== 'assistant' || message.refusal != null ||
      message.function_call != null || (message.tool_calls != null &&
        (!Array.isArray(message.tool_calls) || message.tool_calls.length !== 0)) ||
      typeof text !== 'string' || text.length > maxInsertionCharacters)
    throw new CompletionResponseError('Provider did not return a complete code insertion.');
  if (text.trimStart().startsWith('```'))
    throw new CompletionResponseError('Provider returned Markdown instead of a code insertion.');
  return text;
}

export async function fetchCompletion(input, { fetch, signal }) {
  if (!input || typeof input.model !== 'string' || !input.model || typeof input.apiKey !== 'string' ||
      typeof input.prefix !== 'string' || input.prefix.length > 8000 ||
      typeof input.suffix !== 'string' || input.suffix.length > 2000 ||
      typeof input.language !== 'string' || input.language.length > 100)
    throw new Error('Invalid completion request.');
  const base = normalizeBaseUrl(input.baseUrl);
  const response = await fetch(`${base}/chat/completions`, {
    method: 'POST', redirect: 'error', signal,
    headers: { 'Content-Type': 'application/json', ...(input.apiKey ? { Authorization: `Bearer ${input.apiKey}` } : {}) },
    body: JSON.stringify({ model: input.model, stream: false, max_tokens: 512,
      messages: [{ role: 'system', content: 'Complete code at the cursor. Return only the text to INSERT between prefix and suffix. Do not repeat either. No explanation, Markdown fences, or tool calls. Return an empty string when no useful insertion is possible.' },
        { role: 'user', content: JSON.stringify({ language: input.language, prefix: input.prefix, suffix: input.suffix }) }] }),
  });
  if (!response.ok) { await response.body?.cancel(); throw new CompletionResponseError(`Completion failed (HTTP ${response.status}).`); }
  if (!response.body) throw new CompletionResponseError('Provider returned an empty HTTP response.');
  const reader = response.body.getReader();
  const chunks = [];
  let bytes = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxResponseBytes) throw new CompletionResponseError('Completion response is too large.');
      chunks.push(value);
    }
  } finally { await reader.cancel().catch(() => {}); }
  const data = new Uint8Array(bytes);
  let offset = 0;
  for (const chunk of chunks) { data.set(chunk, offset); offset += chunk.byteLength; }
  return insertionFromBytes(data);
}
