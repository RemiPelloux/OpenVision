import { createServer } from 'node:http';
import { once } from 'node:events';
import { effectiveCapabilities, fallbackReasoningValues } from './model-reasoning.js';
import { stallInitialResponse, timeoutLimit } from './verify-live-timeout.mjs';

const defaultRequestLimit = 6;
const byteLimit = 4 * 1024 * 1024;

function streamEvidence(record, marker, redact) {
  const decoder = new TextDecoder(); let buffer = '', output = '';
  const observeTools = toolEvidence(record, redact);
  return chunk => {
    buffer += decoder.decode(chunk, { stream: true });
    let end;
    while ((end = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, end).replace(/\r$/, ''); buffer = buffer.slice(end + 1);
      if (!line.startsWith('data:') || line.slice(5).trim() === '[DONE]') continue;
      const event = JSON.parse(line.slice(5));
      observeTools(event);
      const usage = providerUsage(event);
      if (usage) record.usage = usage;
      if (event.model) record.responseModel = redact(event.model);
      const content = event.type === 'response.output_text.delta' ? event.delta : event.choices?.[0]?.delta?.content;
      if (typeof content === 'string') {
        if (content.length) record.assistantContentObserved = true;
        output += content;
        if (output.includes(marker)) record.assistantReturnedMarker = true;
        output = output.slice(-marker.length);
      }
    }
  };
}

// Provider-reported token usage: the final Chat Completions chunk (`usage`,
// when the provider sends it) or the Responses `response.completed` event.
// Values are copied as reported; absent fields stay undefined, never estimated.
export function providerUsage(event) {
  const usage = event.type === 'response.completed' ? event.response?.usage : event.usage;
  if (!usage || typeof usage !== 'object') return undefined;
  const number = value => Number.isFinite(value) ? value : undefined;
  return {
    promptTokens: number(usage.prompt_tokens ?? usage.input_tokens),
    completionTokens: number(usage.completion_tokens ?? usage.output_tokens),
    cachedTokens: number(usage.prompt_tokens_details?.cached_tokens ?? usage.input_tokens_details?.cached_tokens ??
      usage.prompt_cache_hit_tokens),
    reasoningTokens: number(usage.completion_tokens_details?.reasoning_tokens ?? usage.output_tokens_details?.reasoning_tokens),
    totalTokens: number(usage.total_tokens),
  };
}

function toolEvidence(record, redact) {
  const calls = new Map();
  return event => {
    let changed = false;
    for (const delta of event.choices?.[0]?.delta?.tool_calls ?? []) {
      const key = `chat:${delta.index ?? 0}`, previous = calls.get(key) ?? { id: '', name: '' };
      calls.set(key, { id: delta.id ?? previous.id, name: previous.name + (delta.function?.name ?? '') });
      changed = true;
    }
    if (['response.output_item.added', 'response.output_item.done'].includes(event.type) && event.item?.type === 'function_call') {
      calls.set(`responses:${event.item.id}`, { id: event.item.call_id, name: event.item.name });
      changed = true;
    }
    if (changed) record.responseToolCalls = [...calls.values()].map(call => ({ id: redact(call.id), name: redact(call.name) }));
  };
}

async function requestBody(request) {
  const chunks = []; let bytes = 0;
  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > byteLimit) throw new Error('Native request exceeds verification limit');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function providerFailureBody(upstream, record, redact) {
  const reader = upstream.body.getReader(), chunks = []; let bytes = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read(); if (done) break;
      bytes += value.length;
      if (bytes > 65536) { record.errorTruncated = true; break; }
      chunks.push(Buffer.from(value));
    }
    const body = redact(Buffer.concat(chunks).toString('utf8'));
    record.error = body.slice(0, 2000);
    return body;
  } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
}

// Image parts in an outgoing Chat Completions or Responses body (count only, never the bytes).
function imagePartCount(payload) {
  const parts = [...(payload.messages ?? []), ...(Array.isArray(payload.input) ? payload.input : [])]
    .flatMap(message => Array.isArray(message?.content) ? message.content : []);
  return parts.filter(part => ['image_url', 'input_image', 'image'].includes(part?.type)).length;
}

// One loopback relay per verification. A combined session runs several scenarios
// through the same relay (one app provider): `begin` starts a scenario with its
// own marker, request list, limit, armed failure and hooks, and `use` returns to an
// earlier scenario after a shared restart. `routes` adds more saved models, each
// forwarded to its own provider with its own key (for example a child override).
export async function createLiveAgentRelay({ provider, model, routes = [], catalog = 'saved', ...scenario }) {
  if (!['saved', 'hints'].includes(catalog)) throw new Error('Live verification catalog must be saved or hints');
  const controllers = new Set(), pending = new Set(), keys = new Map();
  const targets = new Map([[model, provider], ...routes.map(route => [route.model, route.provider])]);
  // The saved model's effective levels (user-specified over discovered), as the app
  // offers them; 'hints' mirrors a provider saved without declarations instead
  // (compatibility hints, for example Add Codex Easy without an import).
  const levels = (id, target) => catalog === 'hints' ? fallbackReasoningValues(target.url, id)
    : effectiveCapabilities(target.models?.find(entry => entry.id === id))?.reasoningEffortValues ?? fallbackReasoningValues(target.url, id);
  const redact = value => [...keys.values()].reduce((text, key) => key ? text.replaceAll(key, '[redacted]') : text, String(value));
  let state;
  function begin({ marker, captureRequest, inspectRequest, allowDownstreamCancellation = false, expectInitialUnauthorized = false,
    initialStall, requestLimit = defaultRequestLimit, forwardProviderFailures = false, models = [model], name } = {}) {
    if (!Number.isInteger(requestLimit) || requestLimit < 1 || requestLimit > 32)
      throw new Error('Live verification request limit must be an integer from 1 to 32');
    if (initialStall !== undefined) {
      timeoutLimit(initialStall);
      if (expectInitialUnauthorized) throw new Error('Controlled timeout and real authentication failure are separate probes');
    }
    if (models.some(id => !targets.has(id))) throw new Error('Scenario model is not routed by this relay');
    if (pending.size) throw new Error('A scenario may begin only between completed requests');
    state = { name, marker, captureRequest, inspectRequest, allowDownstreamCancellation, initialStall, requestLimit, forwardProviderFailures,
      models: new Set(models), requests: [], failed: Promise.withResolvers(),
      // One armed upstream failure that is forwarded to the app instead of failing the probe.
      expectedFailure: expectInitialUnauthorized ? { index: 0, status: 401 } : undefined };
    return state;
  }
  begin(scenario);
  const efforts = levels(model, provider);
  async function handle(request, response, current) {
    if (request.headers.authorization !== 'Bearer native-probe-key') {
      response.writeHead(401); response.end(); return;
    }
    if (request.url === '/v1/models' && request.method === 'GET') {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify({ data: [...targets].map(([id, target]) => {
        const values = levels(id, target);
        return { id, ...(values ? { capabilities: { reasoning_effort: values.map(item => typeof item === 'string' ? item : item.value ?? item.id) } } : {}) };
      }) })); return;
    }
    if (!['/v1/chat/completions', '/v1/responses'].includes(request.url) || request.method !== 'POST') {
      response.writeHead(404); response.end(); return;
    }
    const { marker, requests } = current;
    const body = await requestBody(request), payload = JSON.parse(body);
    const key = keys.get(payload.model), target = targets.get(payload.model);
    if (!key || !current.models.has(payload.model) || requests.length >= current.requestLimit) throw new Error('Native request violates probe connection or request limit');
    const record = { endpoint: request.url, model: payload.model, reasoning: payload.reasoning ?? payload.reasoning_effort,
      thinking: payload.thinking, stream: payload.stream, maxTokens: payload.max_tokens ?? payload.max_output_tokens,
      imageParts: imagePartCount(payload),
      roles: payload.messages?.map(message => message.role),
      messageShapes: payload.messages?.map(message => ({ role: message.role, content: message.content === null ? 'null' : typeof message.content,
        textLength: typeof message.content === 'string' ? message.content.length : undefined,
        keys: Object.keys(message), toolCalls: message.tool_calls?.map(call => ({ keys: Object.keys(call), functionKeys: Object.keys(call.function ?? {}) })) })),
      assistantHistoryContainsMarker: payload.messages?.some(message => message.role === 'assistant' &&
        typeof message.content === 'string' && message.content.includes(marker)) ?? false,
      tools: payload.tools?.map(tool => tool.function?.name ?? tool.name),
      toolResults: payload.messages?.filter(message => message.role === 'tool').map(message => ({
        callId: redact(message.tool_call_id ?? ''), containsFileMarker: JSON.stringify(message.content).includes(marker),
      })) ?? payload.input?.filter(item => item.type === 'function_call_output').map(item => ({
        callId: redact(item.call_id ?? ''), containsFileMarker: JSON.stringify(item.output).includes(marker),
      })),
      actualFileInToolResult: payload.messages?.some(message => message.role === 'tool' && JSON.stringify(message.content).includes(marker)) ||
        payload.input?.some(item => item.type === 'function_call_output' && JSON.stringify(item.output).includes(marker)) || false };
    requests.push(record);
    if (current.inspectRequest) await current.inspectRequest(redact(body), record);
    if (requests.length === 1 && current.captureRequest) await current.captureRequest(redact(body));
    if (current.initialStall && record === requests[0]) {
      await stallInitialResponse(response, current.initialStall, record);
      return;
    }
    const controller = new AbortController(); controllers.add(controller);
    const timer = setTimeout(() => controller.abort(), 60000), started = performance.now();
    const cancel = () => {
      if (!response.writableFinished) {
        record.downstreamClosedAt = performance.now();
        controller.abort();
      }
    };
    response.once('close', cancel);
    const expectedFailure = current.expectedFailure;
    try {
      const upstream = await fetch(target.url + request.url.slice('/v1'.length), { method: 'POST', redirect: 'error',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body, signal: controller.signal });
      record.httpStatus = upstream.status; record.headersMs = Math.round(performance.now() - started);
      record.requestId = redact(upstream.headers.get('x-request-id') ?? '');
      if (!upstream.ok) {
        const failureBody = await providerFailureBody(upstream, record, redact);
        if (record === requests[expectedFailure?.index] && upstream.status === expectedFailure.status && !record.errorTruncated) {
          record.expectedProviderFailure = true;
          if (upstream.status === 401) record.expectedAuthenticationFailure = true;
          response.writeHead(upstream.status, { 'content-type': upstream.headers.get('content-type') ?? 'text/plain',
            'x-request-id': record.requestId });
          response.end(failureBody); return;
        }
        // Opt-in: show the native app the real (redacted) provider failure so its
        // error UI can be inspected. The probe still fails on this request.
        if (current.forwardProviderFailures && !record.errorTruncated) {
          record.forwardedToNative = true;
          response.writeHead(upstream.status, { 'content-type': upstream.headers.get('content-type') ?? 'text/plain',
            'x-request-id': record.requestId });
          response.end(failureBody);
        }
        throw new Error(`Live provider returned HTTP ${upstream.status}`);
      }
      if (record === requests[expectedFailure?.index]) {
        await upstream.body?.cancel();
        throw new Error(expectedFailure.status === 401 ? 'Live provider did not reject the deliberately invalid credential'
          : `Provider did not return the armed HTTP ${expectedFailure.status}`);
      }
      response.writeHead(upstream.status, { 'content-type': upstream.headers.get('content-type') ?? 'application/octet-stream' });
      const observe = streamEvidence(record, marker, redact);
      let bytes = 0;
      for await (const chunk of upstream.body) {
        bytes += chunk.length; if (bytes > byteLimit) throw new Error('Live response exceeds verification limit');
        record.bytes = bytes;
        observe(chunk);
        if (!response.write(chunk)) await once(response, 'drain', { signal: controller.signal });
      }
      record.streamCompleted = true; response.end();
    } catch (error) {
      if (!current.allowDownstreamCancellation || record.downstreamClosedAt === undefined) throw error;
      record.cancelled = true;
      record.abortSettledMs = Math.round(performance.now() - record.downstreamClosedAt);
    } finally {
      record.elapsedMs = Math.round(performance.now() - started);
      clearTimeout(timer); response.off('close', cancel); controllers.delete(controller);
    }
  }
  const server = createServer((request, response) => {
    const current = state;
    const work = handle(request, response, current).catch(error => {
      current.failed.resolve(redact(error.message));
      if (!response.headersSent) { response.writeHead(502, { 'content-type': 'application/json' }); response.end(JSON.stringify({ error: { message: 'Live verification request failed; see the sanitized evidence.' } })); }
      else if (!response.writableEnded) response.destroy();
    }).finally(() => pending.delete(work));
    pending.add(work);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { catalogEfforts: efforts,
    get requests() { return state.requests; },
    get failure() { return state.failed.promise; },
    get scenario() { return state; },
    begin, use(previous) {
      if (pending.size) throw new Error('A scenario may resume only between completed requests');
      state = previous;
    },
    // Without a model, the key applies to the primary model.
    setKey(value, id = model) { if (value === undefined) keys.delete(id); else keys.set(id, value); },
    expectUnauthorizedOnNextRequest() { this.expectFailureOnNextRequest(401); },
    expectFailureOnNextRequest(status) {
      if (state.expectedFailure !== undefined || state.initialStall || pending.size)
        throw new Error('A single provider failure may be armed only between completed requests');
      state.expectedFailure = { index: state.requests.length, status };
    },
    url: `http://127.0.0.1:${server.address().port}/v1`,
    async close() {
      for (const controller of controllers) controller.abort();
      server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
      await Promise.allSettled([...pending]); keys.clear();
    } };
}
