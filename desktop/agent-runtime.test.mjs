import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { createCatalogCache, createReasoningRelay } from './agent-runtime.cjs';

test('idle catalog timer releases values without a subsequent cache lookup', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const catalog = createCatalogCache({ now: () => 0 });
  let calls = 0;
  const fetchCatalog = async () => ++calls;
  const config = { baseUrl: 'https://example.test/v1' };
  assert.equal(await catalog(config, fetchCatalog), 1);
  t.mock.timers.tick(5 * 60 * 1000);
  // The fixed clock still considers the entry fresh; only the idle timer removes it.
  assert.equal(await catalog(config, fetchCatalog), 2);
});

test('catalog cache deduplicates concurrent discovery and expires entries', async () => {
  let now = 1000;
  let calls = 0;
  const catalog = createCatalogCache({ now: () => now });
  const config = { baseUrl: 'https://example.test/v1', apiKey: 'redacted' };
  const fetchCatalog = async () => { calls++; await new Promise(resolve => setTimeout(resolve, 1)); return [{ id: 'model' }]; };
  const values = await Promise.all([catalog(config, fetchCatalog), catalog(config, fetchCatalog)]);
  assert.deepEqual(values[0], values[1]);
  assert.equal(calls, 1);
  await catalog(config, fetchCatalog);
  assert.equal(calls, 1);
  now += 5 * 60 * 1000 + 1;
  await catalog(config, fetchCatalog);
  assert.equal(calls, 2);
});

test('reasoning relay restores reasoning item before its function call', () => {
  const relay = createReasoningRelay(id => id.replace(/^call_/, ''), item =>
    item?.type === 'reasoning' && typeof item.id === 'string' ? item : undefined);
  const body = JSON.stringify({ input: [{ type: 'function_call', call_id: 'call_a', name: 'tool' }] });
  // An observed output pair is sufficient to seed the next request.
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode('data: {"type":"response.output_item.done","item":{"type":"reasoning","id":"r1","encrypted_content":"x"}}\n\n'));
      controller.enqueue(new TextEncoder().encode('data: {"type":"response.output_item.done","item":{"type":"function_call","call_id":"call_a"}}\n\n'));
      controller.close();
    },
  });
  const observed = relay.observeResponse(new Response(stream, { headers: { 'content-type': 'text/event-stream' } }));
  return observed.arrayBuffer().then(() => {
    const rewritten = JSON.parse(relay.rewriteRequestBody(body));
    assert.equal(rewritten.input[0].type, 'reasoning');
    assert.equal(rewritten.input[1].type, 'function_call');
    assert.deepEqual(JSON.parse(relay.rewriteRequestBody(body)), rewritten);
    assert.equal(relay.rewriteRequestBody(JSON.stringify(rewritten)), JSON.stringify(rewritten));
  });
});

const reasoningRelay = () => createReasoningRelay(id => id, item =>
  item?.type === 'reasoning' && typeof item.id === 'string' ? item : undefined);
const call = id => ({ type: 'function_call', call_id: id, name: 'tool' });
const reasoning = id => ({ type: 'reasoning', id, encrypted_content: `encrypted-${id}` });
async function observeItems(relay, items) {
  const data = items.map(item => `data: ${JSON.stringify({ type: 'response.output_item.done', item })}\n\n`).join('');
  await relay.observeResponse(new Response(data, { headers: { 'content-type': 'text/event-stream' } })).arrayBuffer();
}

test('reasoning history survives retries, branching and more than 256 calls', async () => {
  const relay = reasoningRelay();
  await observeItems(relay, Array.from({ length: 300 }, (_, index) => [reasoning(`r${index}`), call(`c${index}`)]).flat());
  const original = JSON.stringify({ input: [call('c0'), call('c299')] });
  const expected = { input: [reasoning('r0'), call('c0'), reasoning('r299'), call('c299')] };
  assert.deepEqual(JSON.parse(relay.rewriteRequestBody(original)), expected);
  relay.rewriteRequestBody(JSON.stringify({ input: [call('c200')] }));
  assert.deepEqual(JSON.parse(relay.rewriteRequestBody(original)), expected);
});

test('parallel function calls retain original ordering and insert each reasoning ID once', async () => {
  const relay = reasoningRelay();
  await observeItems(relay, [reasoning('r'), call('a'), call('b'), reasoning('r'), call('c')]);
  const input = [call('a'), call('b'), call('c')];
  const body = JSON.stringify({ input });
  assert.deepEqual(JSON.parse(relay.rewriteRequestBody(body)).input, [reasoning('r'), ...input]);
  assert.deepEqual(JSON.parse(relay.rewriteRequestBody(body)).input, [reasoning('r'), ...input]);
  const withReasoning = JSON.stringify({ input: [reasoning('r'), ...input] });
  assert.equal(relay.rewriteRequestBody(withReasoning), withReasoning);
});

test('cancellation interrupts a pending read and preserves earlier reasoning history', async () => {
  const relay = reasoningRelay();
  await observeItems(relay, [reasoning('r'), call('a')]);
  const entered = Promise.withResolvers();
  let cancellation;
  const upstream = new ReadableStream({
    pull() { entered.resolve(); },
    cancel(reason) { cancellation = reason; },
  }, { highWaterMark: 0 });
  const response = relay.observeResponse(new Response(upstream, { headers: { 'content-type': 'text/event-stream' } }));
  const reader = response.body.getReader();
  const pending = reader.read();
  await entered.promise;
  await reader.cancel('user-stop');
  assert.deepEqual(await pending, { done: true, value: undefined });
  assert.equal(cancellation, 'user-stop');
  assert.equal(upstream.locked, false);
  assert.deepEqual(JSON.parse(relay.rewriteRequestBody(JSON.stringify({ input: [call('a')] }))).input,
    [reasoning('r'), call('a')]);
});

test('catalog isolates credentials and tenant headers while normalizing header case', async () => {
  const catalog = createCatalogCache();
  const config = { baseUrl: 'https://example.test/v1', apiKey: 'test-key-a', customHeaders: { 'X-Tenant': 'a' } };
  let calls = 0;
  const fetchCatalog = async () => [{ id: String(++calls) }];
  assert.deepEqual(await catalog(config, fetchCatalog), [{ id: '1' }]);
  assert.deepEqual(await catalog({ ...config, customHeaders: { 'x-tenant': 'a' } }, fetchCatalog), [{ id: '1' }]);
  assert.deepEqual(await catalog({ ...config, apiKey: 'test-key-b' }, fetchCatalog), [{ id: '2' }]);
  assert.deepEqual(await catalog({ ...config, customHeaders: { 'x-tenant': 'b' } }, fetchCatalog), [{ id: '3' }]);
  assert.deepEqual(await catalog(config, fetchCatalog), [{ id: '1' }]);
});

test('catalog retries failed and undefined discovery without retaining pending requests', async () => {
  const catalog = createCatalogCache();
  const config = { baseUrl: 'https://example.test/v1' };
  let calls = 0;
  const fail = async () => { calls++; throw new Error('provider unavailable'); };
  const failed = await Promise.allSettled([catalog(config, fail), catalog(config, fail)]);
  assert.equal(calls, 1);
  assert.equal(failed.every(result => result.status === 'rejected'), true);
  assert.equal(await catalog(config, async () => undefined), undefined);
  assert.deepEqual(await catalog(config, async () => [{ id: 'recovered' }]), [{ id: 'recovered' }]);
});

test('relay observes chunks only when consumed and forwards exact UTF-8 event bytes', async () => {
  const relay = reasoningRelay();
  const data = new TextEncoder().encode(`data: ${JSON.stringify({ type: 'response.output_item.done', item: reasoning('é') })}\n\n` +
    `data: ${JSON.stringify({ type: 'response.output_item.done', item: call('a') })}\n\n`);
  let index = 0;
  const stream = new ReadableStream({
    pull(controller) {
      if (index === data.length) controller.close();
      else controller.enqueue(data.subarray(index, ++index));
    },
  }, { highWaterMark: 0 });
  const response = new Response(stream, { headers: { 'content-type': 'text/event-stream' } });
  response.clone = () => { throw new Error('Response must not be cloned'); };
  const observed = relay.observeResponse(response);
  await Promise.resolve();
  assert.equal(index, 0);
  assert.deepEqual(new Uint8Array(await observed.arrayBuffer()), data);
  assert.deepEqual(JSON.parse(relay.rewriteRequestBody(JSON.stringify({ input: [call('a')] }))).input,
    [reasoning('é'), call('a')]);
});

test('cancelling the consumed HTTP stream closes its upstream connection', { timeout: 5000 }, async () => {
  const disconnected = Promise.withResolvers();
  const server = createServer((_request, response) => {
    response.writeHead(200, { 'content-type': 'text/event-stream' });
    response.write('data: {"type":"response.created"}\n\n');
    response.on('close', disconnected.resolve);
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}`);
    const reader = reasoningRelay().observeResponse(response).body.getReader();
    assert.equal((await reader.read()).done, false);
    const waiting = reader.read();
    await reader.cancel('user-stop');
    assert.equal((await waiting).done, true);
    await disconnected.promise;
  } finally {
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
  }
});

test('reasoning relay releases parser state when a stream is cancelled', async () => {
  const relay = createReasoningRelay(id => id, () => undefined);
  let cancel;
  const stream = new ReadableStream({ cancel(reason) { cancel = reason; } });
  const observed = relay.observeResponse(new Response(stream, { headers: { 'content-type': 'text/event-stream' } }));
  const reader = observed.body.getReader();
  await reader.cancel('stop');
  assert.equal(cancel, 'stop');
});
