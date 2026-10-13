import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { probeProvider } from './live-provider-probe.mjs';
import { probeLiveChat } from './live-chat-probe.mjs';

const provider = { url: 'https://fixture.invalid/v1', key: 'fixture-private-value', models: ['deepseek-v4-flash'] };
function stream(events) {
  const bytes = new TextEncoder().encode(events.map(event => `data: ${JSON.stringify(event)}\r\n\r\n`).join('') + 'data: [DONE]\r\n\r\n');
  let offset = 0;
  return new Response(new ReadableStream({ pull(controller) {
    if (offset === bytes.length) return controller.close();
    const end = Math.min(offset + 17, bytes.length); controller.enqueue(bytes.slice(offset, end)); offset = end;
  } }), { headers: { 'content-type': 'text/event-stream' } });
}
const chunk = (delta, finish_reason = null) => ({ id: 'fixture-response', model: 'reported-alias', choices: [{ delta, finish_reason }] });

test('live probe assembles fragmented tools and preserves reasoning privately through continuation', async () => {
  const requests = [];
  const result = await probeLiveChat(provider, 'deepseek-v4-flash', { fetch: async (url, init) => {
    assert.equal(url, `${provider.url}/chat/completions`);
    assert.equal(init.headers.Authorization, `Bearer ${provider.key}`); assert.equal(init.redirect, 'error');
    const body = JSON.parse(init.body); requests.push(body);
    if (requests.length === 1) return stream([
      chunk({ reasoning_content: 'Private fixture reasoning 日本語' }),
      chunk({ tool_calls: [{ index: 0, id: 'call-1', function: { name: 'openvision_', arguments: '{"token":' } }] }),
      chunk({ tool_calls: [{ index: 0, function: { name: 'probe', arguments: '"openvision-probe"}' } }] }, 'tool_calls'),
    ]);
    assert.equal(body.messages[1].reasoning_content, 'Private fixture reasoning 日本語');
    assert.equal(body.messages[2].tool_call_id, 'call-1');
    return stream([chunk({ content: 'OPENVISION_' }), chunk({ content: 'TOOL_OK' }, 'stop')]);
  } });
  assert.equal(requests.length, 2); assert.equal(result.ok, true);
  assert.deepEqual(result.stages[0].models, ['reported-alias']);
  assert.equal(result.stages[0].requestedModel, 'deepseek-v4-flash');
  assert.ok(result.stages.every(stage => stage.elapsedMs >= 0));
  assert.doesNotMatch(JSON.stringify(result), /Private fixture reasoning|fixture-private-value/);
});

test('provider failures redact credentials and never retry or continue a rejected request', async () => {
  let calls = 0;
  const result = await probeLiveChat(provider, 'deepseek-v4-flash', { fetch: async () => {
    calls++; return Response.json({ error: { message: `Bad key ${provider.key}` } }, { status: 401 });
  } });
  assert.equal(calls, 1); assert.equal(result.ok, false);
  assert.equal(result.stages[0].httpStatus, 401);
  assert.match(result.stages[0].error, /\[redacted\]/);
  assert.doesNotMatch(JSON.stringify(result), /fixture-private-value/);
});

test('malformed and oversized streams fail; a wrong tool call never executes a continuation', async () => {
  for (const response of [
    () => new Response('data: invalid\n\n', { headers: { 'content-type': 'text/event-stream' } }),
    () => new Response('x'.repeat(2 * 1024 * 1024 + 1), { headers: { 'content-type': 'text/event-stream' } }),
    () => stream([chunk({ tool_calls: [{ index: 0, id: 'wrong', function: { name: 'Shell', arguments: '{}' } }] }, 'tool_calls')]),
  ]) {
    let calls = 0;
    const result = await probeLiveChat(provider, 'deepseek-v4-flash', { fetch: async () => { calls++; return response(); } });
    assert.equal(result.ok, false); assert.equal(calls, 1);
  }
});

test('missing discovered model retains catalog evidence and never dispatches inference', async () => {
  let calls = 0;
  const result = await probeProvider(provider, { fetch: async () => { calls++; return Response.json({ data: [{ id: 'different-model' }] }); } });
  assert.equal(calls, 1); assert.equal(result.discovery.ok, true); assert.equal(result.chat.ok, false);
  assert.deepEqual(result.discovery.configuredMissing, ['deepseek-v4-flash']);
});

test('catalog strings cannot echo the configured transport key into saved evidence', async () => {
  const result = await probeProvider(provider, { fetch: async () => Response.json({ data: [{ id: `echo-${provider.key}` }] }) });
  assert.doesNotMatch(JSON.stringify(result), /fixture-private-value/);
  assert.equal(result.discovery.models[0].id, 'echo-[redacted]');
});

test('real HTTP stream timeout aborts upstream and records failure without a second request', async t => {
  const closed = Promise.withResolvers(), entered = Promise.withResolvers();
  const server = createServer((req, res) => {
    req.resume(); res.writeHead(200, { 'content-type': 'text/event-stream' });
    res.write(': waiting\n\n'); entered.resolve(); res.on('close', closed.resolve);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const result = probeLiveChat({ ...provider, url: `http://127.0.0.1:${server.address().port}` }, 'deepseek-v4-flash', { fetch, timeoutMs: 250 });
  await entered.promise;
  const observed = await result;
  assert.equal(observed.ok, false); assert.equal(observed.stages.length, 1);
  assert.match(observed.stages[0].error, /timed out/);
  await closed.promise;
});
