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

// Bound one unfinished event, not the response or the transport chunk size.
const MAX_EVENT_BYTES = 4 * 1024 * 1024;
const DECODE_BLOCK_BYTES = 64 * 1024;
const LINE_FRAGMENT_CHARS = 4096;
function eventParser(observe) {
  const decoder = new TextDecoder();
  let buffer = '';
  let fragments = [];
  let data = [];
  let eventBytes = 0;
  let lineBytes = 0, lastByte;
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
  const reserve = bytes => {
    for (let start = 0; start < bytes.length;) {
      const newline = bytes.indexOf(10, start);
      const end = newline < 0 ? bytes.length : newline + 1;
      const size = end - start;
      eventBytes += size; lineBytes += size;
      if (eventBytes > MAX_EVENT_BYTES) {
        const error = new Error('Provider SSE event exceeds the 4 MiB safety limit');
        error.code = 'OPENVISION_PROVIDER_STREAM_LIMIT';
        throw error;
      }
      if (newline >= 0) {
        const previous = newline > start ? bytes[newline - 1] : lastByte;
        if (lineBytes === 1 || lineBytes === 2 && previous === 13) eventBytes = 0;
        lineBytes = 0;
      }
      lastByte = bytes[end - 1];
      start = end;
    }
  };
  const append = text => {
    buffer += text;
    if (buffer.length >= LINE_FRAGMENT_CHARS) { fragments.push(buffer); buffer = ''; }
  };
  const finishLine = () => {
    const value = fragments.length ? fragments.join('') + buffer : buffer;
    fragments = []; buffer = '';
    line(value.replace(/\r$/, ''));
  };
  const decode = bytes => {
    const text = decoder.decode(bytes, { stream: true });
    let start = 0, end = text.indexOf('\n');
    while (end >= 0) {
      append(text.slice(start, end)); finishLine();
      start = end + 1; end = text.indexOf('\n', start);
    }
    append(text.slice(start));
  };
  return {
    write(bytes, done = false) {
      for (let offset = 0; offset < (bytes?.length ?? 0); offset += DECODE_BLOCK_BYTES) {
        const block = bytes.subarray(offset, offset + DECODE_BLOCK_BYTES);
        reserve(block); decode(block);
      }
      if (done) {
        append(decoder.decode());
        if (buffer || fragments.length) finishLine();
        dispatch(); buffer = '';
      }
    },
    clear() { buffer = ''; fragments = []; data = []; eventBytes = 0; lineBytes = 0; lastByte = undefined; },
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
        if (!closed) {
          closed = true;
          try { await reader.cancel(error); } catch { /* Preserve the stream failure. */ }
          finally { cleanup(); controller.error(error); }
        }
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
