'use strict';

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
        else destination.enqueue(result.value);
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
  try { response = await fetchImpl(url, { ...options, signal }); }
  catch (error) { throw signal.aborted ? signal.reason : error; }
  finally { clearTimeout(timer); }
  return response.body ? watchBody(response, { controller, signal, inactivityMs: limits.inactivityMs }) : response;
}

module.exports = { fetchProviderWithDeadlines, inferenceLimits };
