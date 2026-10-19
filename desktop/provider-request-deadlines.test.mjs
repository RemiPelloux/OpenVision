import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import * as policy from './provider-error-policy.js';
import { fetchProviderWithDeadlines, inferenceLimits } from './provider-request-deadlines.cjs';
import { redactProviderErrors } from './provider-error-customization.mjs';
import { readableApp } from './recovered-source.mjs';
import { Agent, getGlobalDispatcher } from '../tooling/provider-transport.mjs';
import { withDeadlineDispatch } from './openvision-provider-dispatch.cjs';

const nativeFetch = withDeadlineDispatch(fetch, getGlobalDispatcher);

const limits = { headersMs: 250, inactivityMs: 150 };
// Limits the recovered transport applies. The stalled-body case widens only the
// header deadline, so a slow local header under load cannot preempt the phase it measures.
let transportLimits = limits;
const original = await readFile(new URL('extensions/cursor-agent-exec/dist/main.js', readableApp), 'utf8');
const patched = redactProviderErrors(original);
const expression = (anchor, offset = 0) => {
  const node = parseExpressionAt(patched, patched.indexOf(anchor) + offset, { ecmaVersion: 'latest' });
  return patched.slice(node.start, node.end);
};
class ApiError extends Error {
  constructor(facts) { super(facts.message, { cause: facts.cause }); Object.assign(this, facts); }
  static isInstance(value) { return value instanceof ApiError; }
}
const context = { Error, TypeError, Headers, Te: ApiError,
  Lt: error => error.name === 'AbortError', Ut: headers => headers,
  qt: response => Object.fromEntries(response.headers), Zt: () => nativeFetch,
  openvisionProviderErrors: { ...policy,
    fetchProviderWithDeadlines: (implementation, url, options) => fetchProviderWithDeadlines(implementation, url,
      { ...options, dispatcher: options.dispatcher ?? getGlobalDispatcher() }, transportLimits) },
};
const transport = runInNewContext(`(${expression('er = async ({', 5)})`, context);
const retry = runInNewContext(`(${expression('async function $r(')})`, context);
const agentRetry = runInNewContext(`(${expression('function TEe(')})`, context);

async function fixture(run) {
  const requests = [], sockets = new Set(), arrivals = [];
  // Resolves once the server has received `count` requests, so a test can act on
  // that real condition instead of guessing how long the client takes to send.
  requests.arrived = count => count <= requests.length ? Promise.resolve()
    : new Promise(resolve => arrivals.push({ count, resolve }));
  const server = createServer((request, response) => {
    const entry = { path: request.url, response, closed: once(response, 'close') }; requests.push(entry);
    for (const waiter of arrivals.filter(item => item.count <= requests.length)) {
      arrivals.splice(arrivals.indexOf(waiter), 1); waiter.resolve();
    }
    response.setHeader('x-request-id', 'deadline-fixture');
    if (request.url === '/headers') return;
    response.writeHead(200, { 'content-type': 'text/event-stream' });
    response.write('data: first\n\n');
    if (request.url === '/body') return;
    if (request.url === '/active') {
      let count = 0;
      const timer = setInterval(() => {
        response.write(`data: ${++count}\n\n`);
        if (count === 12) { clearInterval(timer); response.end(); }
      }, 40);
      response.on('close', () => clearInterval(timer));
    } else response.end('data: done\n\n');
  });
  server.on('connection', socket => { sockets.add(socket); socket.once('close', () => sockets.delete(socket)); });
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  try { return await run(`http://127.0.0.1:${server.address().port}`, requests); }
  finally {
    for (const socket of sockets) socket.destroy();
    await new Promise(resolve => server.close(resolve));
  }
}

const submit = (url, options = {}) => transport({ url, headers: { Authorization: 'Bearer secret-fixture-key' },
  body: { content: '{}', values: { model: 'deadline-fixture' } }, ...options,
  successfulResponseHandler: async ({ response }) => ({ value: response.body }),
});

test('production policy bounds header wait and read inactivity, not total inference duration', () => {
  assert.deepEqual(inferenceLimits, { headersMs: 300000, inactivityMs: 600000 });
  assert.equal(redactProviderErrors(patched), patched);
  assert.ok(patched.includes('openvisionProviderErrors.fetchProviderWithDeadlines(i, e,'));
});

test('native fetch transport timeout is reproduced and the selected dispatcher delegates deadline ownership', { timeout: 10000 }, async () => {
  const agent = new Agent(), observed = [];
  // Compress only positive transport timers; retain their real HTTP/parser path.
  const dispatcher = { dispatch(options, handler) {
    observed.push({ headers: options.headersTimeout, body: options.bodyTimeout });
    return agent.dispatch({ ...options, bodyTimeout: options.bodyTimeout === 0 ? 0 : 50 }, handler);
  } };
  try {
    await fixture(async (base, requests) => {
      const before = await fetch(`${base}/body`, { dispatcher });
      await assert.rejects(before.text(), error => error.cause?.code === 'UND_ERR_BODY_TIMEOUT');
      await requests[0].closed;
      const started = performance.now();
      const response = await fetchProviderWithDeadlines(nativeFetch, `${base}/body`, { dispatcher }, { headersMs: 2500, inactivityMs: 1600 });
      await assert.rejects(response.text(), error => error.code === 'OPENVISION_PROVIDER_BODY_TIMEOUT');
      await requests[1].closed;
      assert.ok(performance.now() - started >= 1500, 'The transport must not preempt the application deadline');
      assert.notEqual(observed[0].body, 0, 'The baseline must retain a transport timeout');
      assert.deepEqual(observed[1], { headers: 0, body: 0 });
      const recovered = await fetchProviderWithDeadlines(nativeFetch, `${base}/success`, { dispatcher }, limits);
      assert.match(await recovered.text(), /data: done/);
      assert.equal(requests.length, 3, 'No retries or replacement transport requests');
    });
  } finally { await agent.close(); }
});

test('production adapter uses the selected pool without changing caller options or closing it', async () => {
  const options = { dispatcher: { dispatch() {} }, signal: new AbortController().signal };
  let received;
  const response = await policy.fetchProviderWithDeadlines(withDeadlineDispatch(async (_url, value) => {
    received = value; return new Response(null, { status: 204 });
  }, getGlobalDispatcher), 'https://provider.invalid/v1', options);
  assert.equal(response.status, 204);
  assert.notEqual(received.dispatcher, options.dispatcher);
  assert.equal(Object.keys(options).length, 2);
  assert.equal(received.dispatcher.close, undefined);
});

for (const phase of ['headers', 'body']) {
  test(`recovered transport terminates stalled ${phase}, closes the socket and allows only explicit recovery`, { timeout: 5000 }, async () => {
    // The body case keeps its 150 ms inactivity deadline; its header wait is bounded
    // by the same 2,000 ms budget the whole failure must meet.
    transportLimits = phase === 'body' ? { ...limits, headersMs: 2000 } : limits;
    try { await fixture(async (base, requests) => {
      const started = performance.now(), cpu = process.cpuUsage();
      const operation = () => submit(`${base}/${phase}`);
      const request = () => retry(operation, { maxRetries: 3, delayInMs: 1, backoffFactor: 1 });
      let source;
      await assert.rejects((async () => {
        const result = await request(); source = result.value;
        const reader = source.getReader();
        try { while (!(await reader.read()).done) {} }
        finally { reader.releaseLock(); }
      })(), error => {
        assert.equal(error.code, phase === 'headers' ? 'OPENVISION_PROVIDER_HEADERS_TIMEOUT' : 'OPENVISION_PROVIDER_BODY_TIMEOUT');
        assert.equal(error.phase, phase);
        assert.equal(policy.isProviderFailure(error), true);
        assert.equal(agentRetry(error), false);
        assert.match(policy.providerFailureDetail(error, error.message), /timed out/);
        return true;
      });
      await requests[0].closed;
      assert.equal(requests.length, 1);
      const durationMs = performance.now() - started;
      assert.ok(durationMs >= limits[phase === 'headers' ? 'headersMs' : 'inactivityMs'] * 0.8);
      assert.ok(durationMs < 2000, `Expected bounded failure; observed ${durationMs.toFixed(1)} ms`);
      if (source) assert.equal(source.locked, false);
      const recovery = await submit(`${base}/success`);
      assert.match(await new Response(recovery.value).text(), /data: done/);
      assert.equal(requests.length, 2);
      const used = process.cpuUsage(cpu);
      console.log(JSON.stringify({ phase, limitMs: limits[phase === 'headers' ? 'headersMs' : 'inactivityMs'],
        durationMs: Math.round(durationMs), cpuMs: (used.user + used.system) / 1000,
        processPeakRssMiB: process.resourceUsage().maxRSS / 1024, requests: requests.length }));
    }); } finally { transportLimits = limits; }
  });
}

test('progressing inference lasts longer than both deadlines without an overall timeout', { timeout: 5000 }, async () => {
  await fixture(async (base, requests) => {
    const started = performance.now();
    const result = await submit(`${base}/active`);
    const text = await new Response(result.value).text();
    assert.match(text, /data: 12\n\n$/);
    assert.ok(performance.now() - started > limits.headersMs);
    assert.equal(requests.length, 1);
  });
});

for (const phase of ['headers', 'body']) {
  test(`caller cancellation during ${phase} preserves its exact reason and closes the socket`, { timeout: 5000 }, async () => {
    await fixture(async (base, requests) => {
      const controller = new AbortController(), reason = new DOMException('User stopped', 'AbortError');
      const result = submit(`${base}/${phase}`, { abortSignal: controller.signal });
      // Cancel only once the phase under test is really in progress: the server holds
      // the request (headers), or the client holds the headers and is reading (body).
      // A fixed timer could fire before the request reached the server under load.
      const operation = phase === 'body'
        ? Promise.all([result, requests.arrived(1)]).then(([value]) => {
          const text = new Response(value.value).text(); controller.abort(reason); return text;
        })
        : (requests.arrived(1).then(() => controller.abort(reason)), result);
      await assert.rejects(operation, error => error === reason);
      await requests[0].closed;
      assert.equal(requests.length, 1);
    });
  });
}

test('body ownership respects downstream backpressure, cancel and original response metadata', { timeout: 5000 }, async () => {
  await fixture(async (base, requests) => {
    const response = await fetchProviderWithDeadlines(fetch, `${base}/body`, {}, limits);
    assert.equal(response.url, `${base}/body`);
    assert.equal(response.type, 'basic'); assert.equal(response.redirected, false);
    assert.equal(response.headers.get('x-request-id'), 'deadline-fixture');
    const reader = response.body.getReader();
    assert.match(new TextDecoder().decode((await reader.read()).value), /data: first/);
    await new Promise(resolve => setTimeout(resolve, limits.inactivityMs + 30));
    requests[0].response.end('data: after downstream pause\n\n');
    assert.match(new TextDecoder().decode((await reader.read()).value), /after downstream pause/);
    assert.equal((await reader.read()).done, true);
  });
});

test('canceling a pending body read clears its watchdog and releases upstream ownership', { timeout: 5000 }, async () => {
  await fixture(async (base, requests) => {
    const response = await fetchProviderWithDeadlines(fetch, `${base}/body`, {}, limits);
    const reader = response.body.getReader();
    await reader.read();
    const pending = reader.read(), reason = new Error('Downstream stopped');
    await reader.cancel(reason);
    assert.equal((await pending).done, true);
    await requests[0].closed;
    assert.equal(requests.length, 1);
  });
});

test('an unfinished SSE event over the event budget fails once, keeps earlier bytes and closes the socket', { timeout: 5000 }, async () => {
  const closed = Promise.withResolvers();
  const server = createServer((_request, response) => {
    response.writeHead(200, { 'content-type': 'text/event-stream' });
    response.on('close', closed.resolve);
    response.write('data: {"partial":true}\n\n');
    response.write('data: ' + 'x'.repeat(1024)); // never finished; the socket stays open
  });
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  try {
    const response = await fetchProviderWithDeadlines(fetch, `http://127.0.0.1:${server.address().port}`, {},
      { ...inferenceLimits, maxEventBytes: 512 });
    const reader = response.body.getReader(), decoder = new TextDecoder(); let text = '';
    await assert.rejects(async () => { for (;;) { const { done, value } = await reader.read(); if (done) break; text += decoder.decode(value); } },
      { code: 'OPENVISION_PROVIDER_STREAM_LIMIT' });
    assert.match(text, /"partial":true/);
    await closed.promise;
    assert.match(policy.providerFailureDetail(Object.assign(new Error('wrapper'), { cause: { code: 'OPENVISION_PROVIDER_STREAM_LIMIT' } }), 'detail'),
      /larger than the 4 MiB safety limit[\s\S]*Resume or Try again[\s\S]*\n\ndetail$/);
  } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
});

test('event budget resets on LF and split CRLF blank lines and ignores non-SSE bodies', { timeout: 5000 }, async () => {
  const serve = async (type, chunks) => {
    const server = createServer((_request, response) => {
      response.writeHead(200, { 'content-type': type });
      (async () => { for (const chunk of chunks) { response.write(chunk); await new Promise(resolve => setTimeout(resolve, 5)); } response.end(); })();
    });
    server.listen(0, '127.0.0.1'); await once(server, 'listening');
    try {
      const response = await fetchProviderWithDeadlines(fetch, `http://127.0.0.1:${server.address().port}`, {}, { ...inferenceLimits, maxEventBytes: 64 });
      return await response.text();
    } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
  };
  const events = [':' + 'x'.repeat(40) + '\r', '\n\r', '\n', ':' + 'y'.repeat(40) + '\n\n', ':' + 'z'.repeat(40) + '\n\n'];
  assert.equal(await serve('text/event-stream', events), events.join(''));
  assert.equal(await serve('application/json', ['{"a":"' + 'x'.repeat(200) + '"}']), '{"a":"' + 'x'.repeat(200) + '"}');
  await assert.rejects(serve('text/event-stream', [':' + 'x'.repeat(40) + '\n', ':' + 'y'.repeat(40) + '\n\n']), { code: 'OPENVISION_PROVIDER_STREAM_LIMIT' });
});
