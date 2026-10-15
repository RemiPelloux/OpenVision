import { createServer } from 'node:http';
import { once } from 'node:events';
import { fallbackReasoningValues } from './model-reasoning.js';

const requestLimit = 6;
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

export async function createLiveAgentRelay({ provider, model, marker, captureRequest, inspectRequest,
  allowDownstreamCancellation = false, expectInitialUnauthorized = false }) {
  const requests = [], controllers = new Set(), pending = new Set();
  const failed = Promise.withResolvers();
  let key;
  const saved = provider.models?.find(entry => entry.id === model);
  const efforts = saved?.capabilities?.reasoningEffortValues ?? fallbackReasoningValues(provider.url, model);
  const redact = value => key ? String(value).replaceAll(key, '[redacted]') : String(value);
  async function handle(request, response) {
    if (request.headers.authorization !== 'Bearer native-probe-key') {
      response.writeHead(401); response.end(); return;
    }
    if (request.url === '/v1/models' && request.method === 'GET') {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify({ data: [{ id: model, ...(efforts ? { capabilities: { reasoning_effort: efforts.map(item => typeof item === 'string' ? item : item.value ?? item.id) } } : {}) }] })); return;
    }
    if (!['/v1/chat/completions', '/v1/responses'].includes(request.url) || request.method !== 'POST') {
      response.writeHead(404); response.end(); return;
    }
    const body = await requestBody(request), payload = JSON.parse(body);
    if (!key || payload.model !== model || requests.length >= requestLimit) throw new Error('Native request violates probe connection or request limit');
    const record = { endpoint: request.url, model: payload.model, reasoning: payload.reasoning ?? payload.reasoning_effort,
      thinking: payload.thinking, stream: payload.stream, maxTokens: payload.max_tokens ?? payload.max_output_tokens,
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
    if (inspectRequest) await inspectRequest(redact(body));
    if (requests.length === 1 && captureRequest) await captureRequest(redact(body));
    const controller = new AbortController(); controllers.add(controller);
    const timer = setTimeout(() => controller.abort(), 60000), started = performance.now();
    const cancel = () => {
      if (!response.writableFinished) {
        record.downstreamClosedAt = performance.now();
        controller.abort();
      }
    };
    response.once('close', cancel);
    try {
      const upstream = await fetch(provider.url + request.url.slice('/v1'.length), { method: 'POST', redirect: 'error',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body, signal: controller.signal });
      record.httpStatus = upstream.status; record.headersMs = Math.round(performance.now() - started);
      record.requestId = redact(upstream.headers.get('x-request-id') ?? '');
      if (!upstream.ok) {
        const failureBody = await providerFailureBody(upstream, record, redact);
        if (expectInitialUnauthorized && record === requests[0] && upstream.status === 401 && !record.errorTruncated) {
          record.expectedAuthenticationFailure = true;
          response.writeHead(upstream.status, { 'content-type': upstream.headers.get('content-type') ?? 'text/plain',
            'x-request-id': record.requestId });
          response.end(failureBody); return;
        }
        throw new Error(`Live provider returned HTTP ${upstream.status}`);
      }
      if (expectInitialUnauthorized && record === requests[0]) {
        await upstream.body?.cancel();
        throw new Error('Live provider did not reject the deliberately invalid credential');
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
      if (!allowDownstreamCancellation || record.downstreamClosedAt === undefined) throw error;
      record.cancelled = true;
      record.abortSettledMs = Math.round(performance.now() - record.downstreamClosedAt);
    } finally {
      record.elapsedMs = Math.round(performance.now() - started);
      clearTimeout(timer); response.off('close', cancel); controllers.delete(controller);
    }
  }
  const server = createServer((request, response) => {
    const work = handle(request, response).catch(error => {
      failed.resolve(redact(error.message));
      if (!response.headersSent) { response.writeHead(502, { 'content-type': 'application/json' }); response.end(JSON.stringify({ error: { message: 'Live verification request failed; see the sanitized evidence.' } })); }
      else response.destroy();
    }).finally(() => pending.delete(work));
    pending.add(work);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { requests, catalogEfforts: efforts, failure: failed.promise, setKey(value) { key = value; },
    url: `http://127.0.0.1:${server.address().port}/v1`,
    async close() {
      for (const controller of controllers) controller.abort();
      server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
      await Promise.allSettled([...pending]); key = undefined;
    } };
}
