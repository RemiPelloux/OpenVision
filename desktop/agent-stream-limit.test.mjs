import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { createReasoningRelay } from './agent-runtime.cjs';
import { protectProviderResult, isProviderFailure } from './provider-error-policy.js';

const limit = 4 * 1024 * 1024;
const headers = { 'content-type': 'text/event-stream' };
const observe = body => createReasoningRelay(id => id, () => undefined).observeResponse(new Response(body, { headers }));

for (const [name, fragment] of [['unfinished line', 'data: ' + 'x'.repeat(65530)],
  ['multiline event', 'data: ' + 'x'.repeat(65529) + '\n'], ['UTF-8 bytes', 'data: ' + 'é'.repeat(32765)]]) {
  test(`oversized ${name} cancels upstream and releases its lock`, async () => {
    let cancelled, emitted = 0;
    const chunk = new TextEncoder().encode(fragment);
    const stream = new ReadableStream({
      pull(controller) { emitted += chunk.byteLength; controller.enqueue(chunk); },
      cancel(reason) { cancelled = reason; },
    }, { highWaterMark: 0 });
    await assert.rejects(observe(stream).arrayBuffer(), { code: 'OPENVISION_PROVIDER_STREAM_LIMIT' });
    assert.equal(cancelled.code, 'OPENVISION_PROVIDER_STREAM_LIMIT');
    assert.equal(stream.locked, false);
    assert.ok(emitted <= limit + chunk.length, 'Reject at the first chunk crossing the limit');
  });
}

test('boundary event passes; cumulative and coalesced events may exceed the limit', async () => {
  const exact = ':' + 'x'.repeat(limit - 3) + '\n\n';
  assert.equal(await observe(exact).text(), exact);
  await assert.rejects(observe(':' + exact).text(), { code: 'OPENVISION_PROVIDER_STREAM_LIMIT' });
  const events = 'data: {}\r\n\r\n'.repeat(400000);
  assert.ok(Buffer.byteLength(events) > limit);
  assert.equal(await observe(events).text(), events);
});

test('unterminated UTF-8 event is dispatched at EOF', async () => {
  const relay = createReasoningRelay(id => id, item => item?.type === 'reasoning' ? item : undefined);
  const text = 'data: {"type":"response.output_item.done","item":{"type":"reasoning","id":"é"}}\r\n\r\n' +
    'data: {"type":"response.output_item.done","item":{"type":"function_call","call_id":"a"}}';
  const bytes = new TextEncoder().encode(text); let index = 0;
  const stream = new ReadableStream({ pull(c) {
    if (index === bytes.length) c.close(); else c.enqueue(bytes.subarray(index, ++index));
  } });
  assert.equal(await relay.observeResponse(new Response(stream, { headers })).text(), text);
  assert.equal(JSON.parse(relay.rewriteRequestBody('{"input":[{"type":"function_call","call_id":"a"}]}')).input[0].id, 'é');
});

test('split CRLF delimiters reset the budget across a response larger than the limit', async () => {
  const chunks = Array.from({ length: 3 }, () => [':' + 'x'.repeat(limit / 2) + '\r', '\n\r', '\n']).flat();
  const bytes = chunks.map(text => new TextEncoder().encode(text)); let index = 0;
  const stream = new ReadableStream({ pull(c) {
    if (index === bytes.length) c.close(); else c.enqueue(bytes[index++]);
  } });
  assert.equal(await observe(stream).text(), chunks.join(''));
});

test('overflow remains a provider failure even when upstream cancellation rejects', async () => {
  const stream = new ReadableStream({
    pull(c) { c.enqueue(new Uint8Array(limit + 1).fill(120)); },
    cancel() { throw new Error('Cancellation failed'); },
  }, { highWaterMark: 0 });
  const result = protectProviderResult({ value: observe(stream).body }, {});
  await assert.rejects(new Response(result.value).text(), error =>
    error.code === 'OPENVISION_PROVIDER_STREAM_LIMIT' && isProviderFailure(error));
  assert.equal(stream.locked, false);
});

test('overflow closes a real HTTP connection', { timeout: 5000 }, async () => {
  const disconnected = Promise.withResolvers();
  const server = createServer((_request, response) => {
    response.writeHead(200, headers);
    response.on('close', disconnected.resolve);
    response.write('data: ' + 'x'.repeat(limit));
    // Leave response open: the client must close it on overflow.
  });
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}`);
    const relay = createReasoningRelay(id => id, () => undefined);
    await assert.rejects(relay.observeResponse(response).arrayBuffer(), { code: 'OPENVISION_PROVIDER_STREAM_LIMIT' });
    await disconnected.promise;
  } finally {
    server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  }
});
