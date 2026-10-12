'use strict';

const { createHash } = require('node:crypto');

// Match the provider's encrypted reasoning contract without a cloned stream.
function createReasoningRelay(normalizeId, normalizeReasoning) {
  const reasoningByCall = new Map();
  // The provider session owns these associations. Requests can replay any earlier
  // call after retries or branching; absence from one request is not eviction proof.
  function rewriteRequestBody(body) {
    if (!reasoningByCall.size) return body;
    let request;
    try { request = JSON.parse(body); } catch { return body; }
    if (!Array.isArray(request?.input)) return body;
    const present = new Set(request.input.map(normalizeReasoning).filter(Boolean).map(item => item.id));
    const input = [];
    for (const item of request.input) {
      const reasoning = item?.type === 'function_call' && typeof item.call_id === 'string'
        ? reasoningByCall.get(normalizeId(item.call_id)) : undefined;
      if (reasoning && !present.has(reasoning.id)) {
        input.push(reasoning); present.add(reasoning.id);
      }
      input.push(item);
    }
    return input.length === request.input.length ? body : JSON.stringify({ ...request, input });
  }
  return {
    rewriteRequestBody,
    observeResponse(response) {
      if (!response.body || !response.headers.get('content-type')?.includes('text/event-stream')) return response;
      let pendingReasoning;
      const observe = event => {
        if (event?.type !== 'response.output_item.done') return;
        const item = event.item;
        const reasoning = normalizeReasoning(item);
        if (reasoning) pendingReasoning = reasoning;
        else if (item?.type === 'function_call' && typeof item.call_id === 'string' && pendingReasoning) {
          reasoningByCall.set(normalizeId(item.call_id), pendingReasoning);
          pendingReasoning = undefined;
        }
      };
      return observeEventStream(response, observe, () => {
        pendingReasoning = undefined;
      });
    },
  };
}

function eventParser(observe) {
  const decoder = new TextDecoder();
  let buffer = '';
  let data = [];
  const dispatch = () => {
    if (data.length) {
      try { observe(JSON.parse(data.join('\n'))); } catch { /* Provider parser owns errors. */ }
      data = [];
    }
  };
  const line = value => {
    if (!value) return dispatch();
    if (value.startsWith('data:')) data.push(value.slice(5).replace(/^ /, ''));
  };
  return {
    write(bytes, done = false) {
      buffer += decoder.decode(bytes, { stream: !done });
      let end;
      while ((end = buffer.indexOf('\n')) !== -1) {
        line(buffer.slice(0, end).replace(/\r$/, ''));
        buffer = buffer.slice(end + 1);
      }
      if (done) { if (buffer) line(buffer.replace(/\r$/, '')); dispatch(); buffer = ''; }
    },
    clear() { buffer = ''; data = []; },
  };
}

function observeEventStream(response, observe, release) {
  const reader = response.body.getReader();
  const parser = eventParser(observe);
  let closed = false;
  const cleanup = () => { closed = true; parser.clear(); release(); reader.releaseLock(); };
  const body = new ReadableStream({
    async pull(controller) {
      try {
        const result = await reader.read();
        if (closed) return;
        parser.write(result.value, result.done);
        if (result.done) { cleanup(); controller.close(); }
        else controller.enqueue(result.value);
      } catch (error) {
        if (!closed) { cleanup(); controller.error(error); }
      }
    },
    async cancel(reason) {
      if (closed) return;
      closed = true;
      try { await reader.cancel(reason); } finally { cleanup(); }
    },
  }, { highWaterMark: 0 });
  return new Response(body, { status: response.status, statusText: response.statusText, headers: response.headers });
}

const CATALOG_FRESH_MS = 5 * 60 * 1000;
const MAX_IDLE_CATALOGS = 16;
function createCatalogCache({ now = Date.now } = {}) {
  const cached = new Map();
  const pending = new Map();
  const fetchIds = new WeakMap();
  let nextFetchId = 0;
  function evict(key) {
    clearTimeout(cached.get(key)?.timer);
    cached.delete(key);
  }
  function identity(configuration) {
    const customHeaders = [...new Headers(configuration.customHeaders)].sort(([a], [b]) => a.localeCompare(b));
    const fetchImpl = configuration.fetchImpl;
    if (fetchImpl && !fetchIds.has(fetchImpl)) fetchIds.set(fetchImpl, ++nextFetchId);
    return createHash('sha256').update(JSON.stringify([configuration.baseUrl, configuration.apiKey,
      configuration.apiKeyHelper, configuration.userAgent, customHeaders, fetchIds.get(fetchImpl)])).digest('hex');
  }
  return async function catalog(configuration, fetchCatalog) {
    const key = identity(configuration);
    const entry = cached.get(key);
    if (entry && entry.expires > now()) {
      cached.delete(key); cached.set(key, entry);
      return entry.value;
    }
    evict(key);
    if (pending.has(key)) return pending.get(key);
    const request = Promise.resolve().then(fetchCatalog).then(value => {
      if (value !== undefined) {
        const timer = setTimeout(() => evict(key), CATALOG_FRESH_MS);
        timer.unref?.();
        cached.set(key, { value, expires: now() + CATALOG_FRESH_MS, timer });
        while (cached.size > MAX_IDLE_CATALOGS) evict(cached.keys().next().value);
      }
      return value;
    }).finally(() => pending.delete(key));
    pending.set(key, request);
    return request;
  };
}

module.exports = { createReasoningRelay, createCatalogCache, catalog: createCatalogCache() };
