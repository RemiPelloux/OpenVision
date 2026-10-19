'use strict';
const { deadlinePolicyKey } = require('./openvision-provider-dispatch.cjs');

// Separate inactivity limits preserve arbitrarily long, progressing inference.
const inferenceLimits = Object.freeze({ headersMs: 5 * 60 * 1000, inactivityMs: 10 * 60 * 1000 });

function deadlineFailure(phase) {
  return Object.assign(new Error(phase === 'headers'
    ? 'The provider did not send response headers before the request deadline.'
    : 'The provider stopped sending response data before the inactivity deadline.'), {
    code: phase === 'headers' ? 'OPENVISION_PROVIDER_HEADERS_TIMEOUT' : 'OPENVISION_PROVIDER_BODY_TIMEOUT',
    phase,
  });
}

// Bound one unfinished SSE event (raw bytes, delimiters included), not the response:
// an endless event line would otherwise be buffered by the stream parser until the
// inactivity deadline. LF and CRLF blank lines reset the budget, also when split.
const maxEventBytes = 4 * 1024 * 1024;
function streamLimitFailure() {
  return Object.assign(new Error('Provider SSE event exceeds the 4 MiB safety limit'), { code: 'OPENVISION_PROVIDER_STREAM_LIMIT' });
}
function eventBudget(limit = maxEventBytes) {
  let eventBytes = 0, lineBytes = 0, lastByte;
  // Returns undefined, or the length of this chunk's complete events before the overflow.
  return bytes => {
    let complete = 0;
    for (let start = 0; start < bytes.length;) {
      const newline = bytes.indexOf(10, start), end = newline < 0 ? bytes.length : newline + 1, size = end - start;
      eventBytes += size; lineBytes += size;
      if (eventBytes > limit) return complete;
      if (newline >= 0) {
        const previous = newline > start ? bytes[newline - 1] : lastByte;
        if (lineBytes === 1 || (lineBytes === 2 && previous === 13)) { eventBytes = 0; complete = end; }
        lineBytes = 0;
      }
      lastByte = bytes[end - 1]; start = end;
    }
  };
}

function responseWithBody(response, body) {
  const wrapped = new Response(body, response);
  // Response's constructor does not carry fetch metadata into the new body.
  for (const key of ['url', 'redirected', 'type'])
    Object.defineProperty(wrapped, key, { value: response[key], configurable: true });
  const clone = wrapped.clone.bind(wrapped);
  wrapped.clone = () => responseWithBody(response, clone().body);
  return wrapped;
}

function watchBody(response, operation) {
  const reader = response.body.getReader();
  const reserve = response.headers.get('content-type')?.includes('text/event-stream') ? eventBudget(operation.maxEventBytes) : undefined;
  let closed = false, released = false, timer;
  const release = () => { clearTimeout(timer); closed = true; if (!released) { released = true; reader.releaseLock(); } };
  const body = new ReadableStream({
    async pull(destination) {
      try {
        timer = setTimeout(() => operation.controller.abort(deadlineFailure('body')), operation.inactivityMs);
        const result = await reader.read();
        clearTimeout(timer);
        if (closed) return;
        if (result.done) { release(); destination.close(); }
        else {
          const complete = reserve?.(result.value);
          if (complete === undefined) destination.enqueue(result.value);
          else {
            if (complete) destination.enqueue(result.value.subarray(0, complete));
            throw streamLimitFailure();
          }
        }
      } catch (error) {
        clearTimeout(timer);
        if (closed) return;
        closed = true;
        const reason = operation.signal.aborted ? operation.signal.reason : error;
        destination.error(reason);
        try { await reader.cancel(reason); } finally { release(); }
      }
    },
    async cancel(reason) {
      closed = true; clearTimeout(timer);
      try { await reader.cancel(reason); } finally { release(); }
    },
  }, { highWaterMark: 0 });
  return responseWithBody(response, body);
}

async function fetchProviderWithDeadlines(fetchImpl, url, options, limits = inferenceLimits) {
  const controller = new AbortController();
  const signal = options.signal ? AbortSignal.any([options.signal, controller.signal]) : controller.signal;
  const timer = setTimeout(() => controller.abort(deadlineFailure('headers')), limits.headersMs);
  let response;
  // The extension host preserves this mark through proxy/certificate selection.
  try { response = await fetchImpl(url, { ...options, [deadlinePolicyKey]: true, signal }); }
  catch (error) { throw signal.aborted ? signal.reason : error; }
  finally { clearTimeout(timer); }
  return response.body ? watchBody(response, { controller, signal, inactivityMs: limits.inactivityMs, maxEventBytes: limits.maxEventBytes }) : response;
}

module.exports = { fetchProviderWithDeadlines, inferenceLimits, maxEventBytes };
