import { normalizeBaseUrl } from './model-providers.js';

import { readCodeResponse, CodeResponseError } from './code-response.mjs';
export { CodeResponseError as CompletionResponseError };

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
  return readCodeResponse(response, { label: 'Completion', bytes: 64 * 1024, characters: 8000 });
}
