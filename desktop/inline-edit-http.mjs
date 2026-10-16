import { normalizeBaseUrl } from './model-providers.js';
import { providerRequestHeaders } from './provider-headers.js';
import { readCodeResponse } from './code-response.mjs';
import { inlineContextCharacters } from './inline-edit-context.js';

const maxOutputCharacters = 128 * 1024;

export async function fetchInlineEdit(input, { fetch, signal }) {
  if (!input || typeof input.modelId !== 'string' || !input.modelId || typeof input.apiKey !== 'string' ||
      typeof input.context !== 'string' || input.context.length > inlineContextCharacters ||
      typeof input.chatMode !== 'boolean' || (input.effort !== undefined &&
        (typeof input.effort !== 'string' || input.effort.length > 100))) throw Error('Invalid inline edit request.');
  const response = await fetch(`${normalizeBaseUrl(input.baseUrl)}/chat/completions`, {
    method: 'POST', redirect: 'error', signal,
    headers: providerRequestHeaders(input.apiKey, input.customHeaders, true),
    body: JSON.stringify({ model: input.modelId, stream: false, store: false,
      ...(input.effort ? { reasoning_effort: input.effort } : {}),
      messages: [{ role: 'system', content: input.chatMode
        ? 'Answer the user question about the selected code. Follow the supplied project rules.'
        : 'Edit the selected lines according to the user instruction and supplied project rules. Return the entire replacement selection as raw code, preserving indentation. Do not include surrounding lines, Markdown fences, explanations, or tool calls. An empty string deletes the selection.' },
      { role: 'user', content: input.context }] }),
  });
  return readCodeResponse(response, { label: 'Inline edit', bytes: 1024 * 1024,
    characters: maxOutputCharacters, allowMarkdown: input.chatMode });
}
