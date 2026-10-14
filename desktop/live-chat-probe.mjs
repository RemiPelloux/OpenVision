const maximumBytes = 2 * 1024 * 1024;
const requestTimeoutMs = 45000;
const probeToken = 'openvision-probe';
const expectedReply = 'OPENVISION_TOOL_OK';
const tool = { type: 'function', function: { name: 'openvision_probe', description: 'Return the synthetic probe result.',
  parameters: { type: 'object', properties: { token: { type: 'string' } }, required: ['token'], additionalProperties: false } } };

function requestOptions(provider, model) {
  return { model, stream: true, max_tokens: 512,
    ...(provider.probeThinking ? { thinking: { type: provider.probeThinking } } : {}),
    ...(provider.probeReasoning === 'omit' ? {} : { reasoning_effort: provider.probeReasoning ?? 'low' }) };
}

function redact(value, key) {
  const text = String(value ?? '');
  return (key ? text.replaceAll(key, '[redacted]') : text).slice(0, 1000);
}

async function failureMessage(response, key) {
  const reader = response.body?.getReader();
  if (!reader) return `Provider returned HTTP ${response.status}`;
  let bytes = 0; const chunks = [];
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 64 * 1024) return `Provider returned HTTP ${response.status} (large error body)`;
      chunks.push(Buffer.from(value));
    }
    const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    return redact(JSON.stringify(body), key);
  } catch { return `Provider returned HTTP ${response.status}`; }
  finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
}

function accumulator(key) {
  const calls = new Map(), state = { text: '', chunks: 0, models: [], responseIds: [] };
  const retained = { reasoning: '' };
  return { state, calls, retained, event(data) {
    if (data === '[DONE]') { state.done = true; return; }
    const event = JSON.parse(data);
    if (event.error) throw new Error(redact(event.error.message ?? event.error.code, key));
    if (event.model && !state.models.includes(event.model)) state.models.push(redact(event.model, key));
    if (event.id && !state.responseIds.includes(event.id)) state.responseIds.push(redact(event.id, key));
    for (const choice of event.choices ?? []) {
      const delta = choice.delta ?? {};
      if (typeof delta.content === 'string') state.text += delta.content;
      if (typeof delta.reasoning_content === 'string') retained.reasoning += delta.reasoning_content;
      if (choice.finish_reason) state.finishReason = choice.finish_reason;
      for (const fragment of delta.tool_calls ?? []) {
        const call = calls.get(fragment.index) ?? { id: '', type: 'function', function: { name: '', arguments: '' } };
        if (fragment.id) call.id = fragment.id;
        if (fragment.function?.name) call.function.name += fragment.function.name;
        if (fragment.function?.arguments) call.function.arguments += fragment.function.arguments;
        calls.set(fragment.index, call);
      }
    }
    state.chunks++;
  } };
}

async function readEvents(response, collected) {
  const reader = response.body.getReader(), decoder = new TextDecoder();
  let buffer = '', data = [], bytes = 0;
  function line(value) {
    if (value.startsWith('data:')) data.push(value.slice(5).replace(/^ /, ''));
    else if (!value && data.length) { collected.event(data.join('\n')); data = []; }
  }
  try {
    for (;;) {
      const { value, done } = await reader.read();
      bytes += value?.byteLength ?? 0;
      if (bytes > maximumBytes) throw new Error('Stream exceeds probe size limit');
      buffer += decoder.decode(value, { stream: !done });
      let end;
      while ((end = buffer.indexOf('\n')) >= 0) { line(buffer.slice(0, end).replace(/\r$/, '')); buffer = buffer.slice(end + 1); }
      if (done) { if (buffer) line(buffer.replace(/\r$/, '')); line(''); break; }
    }
    collected.state.bytes = bytes;
  } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
}

export async function probeChatPayload(provider, payload, transport) {
  const controller = new AbortController(), started = performance.now();
  const timeout = setTimeout(() => controller.abort(), transport.timeoutMs ?? requestTimeoutMs);
  const collected = accumulator(provider.key);
  const result = { requestedModel: payload.model, endpoint: '/chat/completions', reasoningEffort: payload.reasoning_effort,
    thinking: payload.thinking,
    requestShape: { stream: payload.stream, maxTokens: payload.max_tokens, toolChoice: payload.tool_choice,
      messageRoles: payload.messages.map(message => message.role) } };
  try {
    const response = await transport.fetch(`${provider.url}/chat/completions`, { method: 'POST', redirect: 'error',
      signal: controller.signal, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${provider.key}` },
      body: JSON.stringify(payload) });
    result.httpStatus = response.status; result.headersMs = Math.round(performance.now() - started);
    result.requestId = redact(response.headers.get('x-request-id'), provider.key) || undefined;
    if (!response.ok) throw new Error(await failureMessage(response, provider.key));
    if (!response.headers.get('content-type')?.includes('text/event-stream')) {
      await response.body?.cancel();
      throw new Error('Expected a streamed event response');
    }
    await readEvents(response, collected);
    Object.assign(result, collected.state, { text: redact(collected.state.text, provider.key), ok: !!collected.state.finishReason });
    return { result, calls: [...collected.calls.values()], reasoning: collected.retained.reasoning };
  } catch (error) {
    Object.assign(result, { ok: false, error: controller.signal.aborted ? 'Request timed out' : redact(error.message, provider.key) });
    return { result, calls: [] };
  } finally { clearTimeout(timeout); result.elapsedMs = Math.round(performance.now() - started); }
}

export async function probeLiveChat(provider, model, transport) {
  const messages = [{ role: 'user', content: `Call openvision_probe once with token "${probeToken}". After its result, reply exactly with the returned text.` }];
  const common = { ...requestOptions(provider, model), tools: [tool] };
  const first = await probeChatPayload(provider, { ...common, messages, tool_choice: 'auto' }, transport);
  const stages = [{ stage: 'tool-request', ...first.result }];
  if (!first.result.ok) return { ok: false, stages };
  const call = first.calls[0];
  let valid = false;
  try { valid = first.result.finishReason === 'tool_calls' && first.calls.length === 1 && !!call.id && call.function.name === tool.function.name && JSON.parse(call.function.arguments).token === probeToken; }
  catch { /* Malformed tool arguments are failed evidence, never executed. */ }
  if (!valid) return { ok: false, stages, error: 'Expected synthetic tool call was not returned' };
  messages.push({ role: 'assistant', content: first.result.text || null, tool_calls: first.calls,
    ...(first.reasoning ? { reasoning_content: first.reasoning } : {}) },
    { role: 'tool', tool_call_id: call.id, content: expectedReply });
  const second = await probeChatPayload(provider, { ...common, messages, tool_choice: 'auto' }, transport);
  stages.push({ stage: 'tool-continuation', ...second.result });
  return { ok: second.result.ok && second.result.finishReason === 'stop' && second.calls.length === 0 && second.result.text.trim() === expectedReply, stages, toolArgumentsVerified: true,
    toolResultConsumed: second.result.text?.trim() === expectedReply };
}

export async function probeLiveReply(provider, model, transport) {
  const response = await probeChatPayload(provider, { ...requestOptions(provider, model),
    messages: [{ role: 'user', content: `Reply exactly ${expectedReply}.` }] }, transport);
  return { ok: response.result.ok && response.result.finishReason === 'stop' && response.result.text.trim() === expectedReply,
    stages: [{ stage: 'text-reply', ...response.result }] };
}
