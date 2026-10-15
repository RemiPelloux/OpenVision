// Locally authored diagnostics only: providers can echo credentials or source.
export class CodeResponseError extends Error {}

export async function readCodeResponse(response, limits) {
  if (!response.ok) {
    await response.body?.cancel();
    throw new CodeResponseError(`${limits.label} failed (HTTP ${response.status}).`);
  }
  if (!response.body) throw new CodeResponseError('Provider returned an empty HTTP response.');
  const reader = response.body.getReader(), chunks = [];
  let bytes = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > limits.bytes) throw new CodeResponseError(`${limits.label} response is too large.`);
      chunks.push(value);
    }
  } finally { await reader.cancel().catch(() => {}); }
  const data = new Uint8Array(bytes);
  let offset = 0;
  for (const chunk of chunks) { data.set(chunk, offset); offset += chunk.byteLength; }
  return codeFromBytes(data, limits);
}

function codeFromBytes(data, limits) {
  let body;
  try { body = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(data)); }
  catch { throw new CodeResponseError('Provider returned invalid completion JSON or UTF-8.'); }
  const choice = Array.isArray(body?.choices) ? body.choices[0] : undefined;
  if (choice?.finish_reason === 'length') throw new CodeResponseError(`Provider truncated the ${limits.label.toLowerCase()}. ${limits.truncatedHint ?? 'Try a smaller selection or another model.'}`);
  const message = choice?.message, text = message?.content;
  if (choice?.finish_reason !== 'stop' || message?.role !== 'assistant' || message.refusal != null ||
      message.function_call != null || (message.tool_calls != null &&
        (!Array.isArray(message.tool_calls) || message.tool_calls.length !== 0)) ||
      typeof text !== 'string' || text.length > limits.characters)
    throw new CodeResponseError('Provider did not return a complete code insertion.');
  if (!limits.allowMarkdown && text.trimStart().startsWith('```'))
    throw new CodeResponseError('Provider returned Markdown instead of a code insertion.');
  return text;
}
