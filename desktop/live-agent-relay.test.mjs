import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createLiveAgentRelay } from './live-agent-relay.mjs';

const model = 'fixture-model', marker = 'OPENVISION_READ_fixture', key = 'fixture-transport-secret';
const headers = { Authorization: 'Bearer native-probe-key', 'Content-Type': 'application/json' };

async function fixture(t, handler, options = {}) {
  const server = createServer(handler);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); });
  const relay = await createLiveAgentRelay({ model, marker, ...options, provider: {
    url: `http://127.0.0.1:${server.address().port}/v1`,
    models: [{ id: model, capabilities: { reasoningEffortValues: [{ id: 'high', value: 'high' }] } }],
  } });
  relay.setKey(key); t.after(() => relay.close());
  return relay;
}

test('expected native cancellation records partial stream evidence and permits a later live request', { timeout: 5000 }, async t => {
  const closed = Promise.withResolvers(); let count = 0;
  const relay = await fixture(t, (_request, response) => {
    if (count++) { sse(response, [{ choices: [{ delta: { content: marker } }] }]); return; }
    response.once('close', closed.resolve);
    response.writeHead(200, { 'Content-Type': 'text/event-stream' });
    response.write('data: {"choices":[{"delta":{"content":"start"}}]}\n\n');
  }, { allowDownstreamCancellation: true });
  const controller = new AbortController();
  const body = JSON.stringify({ model, stream: true });
  const response = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body, signal: controller.signal });
  const reader = response.body.getReader(); await reader.read(); controller.abort();
  await closed.promise;
  await reader.cancel().catch(() => {}); reader.releaseLock();
  while (!relay.requests[0].cancelled) await new Promise(resolve => setTimeout(resolve, 5));
  assert.equal(relay.requests[0].assistantContentObserved, true);
  assert.ok(relay.requests[0].bytes > 0);
  assert.equal(relay.requests[0].streamCompleted, undefined);
  const resumed = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body });
  await resumed.text();
  assert.equal(relay.requests[1].streamCompleted, true);
  assert.equal(relay.requests[1].assistantReturnedMarker, true);
  assert.equal(count, 2);
});

function sse(response, events) {
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  response.end(events.map(event => `data: ${JSON.stringify(event)}\n\n`).join('') + 'data: [DONE]\n\n');
}

test('relay forwards both inference bodies unchanged and swaps only transport authentication', async t => {
  const received = [];
  const relay = await fixture(t, async (request, response) => {
    let body = ''; for await (const chunk of request) body += chunk;
    received.push({ body, path: request.url, authorization: request.headers.authorization });
    sse(response, [{ choices: [{ delta: { tool_calls: [{ index: 0, id: 'read-1', function: { name: 'Re' } }] } }] },
      { choices: [{ delta: { tool_calls: [{ index: 0, function: { name: 'ad' } }] } }] },
      { model: `reported-${key}`, choices: [{ delta: { content: marker.slice(0, 10) } }] },
      { choices: [{ delta: { content: marker.slice(10) + 'x'.repeat(100) } }] }]);
  });
  for (const endpoint of ['chat/completions', 'responses']) {
    const body = JSON.stringify({ model, stream: true, messages: [{ role: 'tool', content: marker, tool_call_id: 'read-1' }],
      input: [{ type: 'function_call_output', output: marker }], reasoning_effort: 'high' }, null, 2);
    const response = await fetch(`${relay.url}/${endpoint}`, { method: 'POST', headers, body });
    assert.equal(response.status, 200); await response.text();
    assert.deepEqual(received.at(-1), { body, path: `/v1/${endpoint}`, authorization: `Bearer ${key}` });
    assert.equal(relay.requests.at(-1).actualFileInToolResult, true);
    assert.equal(relay.requests.at(-1).assistantReturnedMarker, true);
    assert.equal(relay.requests.at(-1).reasoning, 'high');
    assert.equal(relay.requests.at(-1).responseModel, 'reported-[redacted]');
    assert.deepEqual(relay.requests.at(-1).responseToolCalls, [{ id: 'read-1', name: 'Read' }]);
    assert.deepEqual(relay.requests.at(-1).toolResults, [{ callId: 'read-1', containsFileMarker: true }]);
  }
  assert.ok(!JSON.stringify(relay.requests).includes(key));
  const catalog = await (await fetch(`${relay.url}/models`, { headers })).json();
  assert.deepEqual(catalog.data, [{ id: model, capabilities: { reasoning_effort: ['high'] } }]);
});

test('catalog authentication and selected model are checked before contacting a provider', async t => {
  let calls = 0;
  const relay = await fixture(t, (_request, response) => { calls++; response.end(); });
  assert.equal((await fetch(`${relay.url}/models`)).status, 401);
  assert.equal((await fetch(`${relay.url}/unknown`, { headers })).status, 404);
  assert.equal((await fetch(`${relay.url}/responses`, { method: 'POST', headers, body: JSON.stringify({ model: 'wrong' }) })).status, 502);
  assert.equal(calls, 0); assert.equal(relay.requests.length, 0);
});

test('capture sees the first request, inspection sees every redacted request, and forwarded bytes stay unchanged', async t => {
  const received = [], captured = [], inspected = [], entered = Promise.withResolvers(), release = Promise.withResolvers();
  t.after(() => release.resolve());
  const relay = await fixture(t, async (request, response) => {
    let body = ''; for await (const chunk of request) body += chunk;
    received.push(body); sse(response, [{ choices: [{ delta: { content: 'ok' }, finish_reason: 'stop' }] }]);
  }, { captureRequest: async body => { captured.push(body); entered.resolve(); await release.promise; },
    inspectRequest: body => { inspected.push(body); } });
  const firstBody = JSON.stringify({ model, messages: [{ role: 'user', content: `echo ${key}` }] });
  const first = fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body: firstBody });
  await entered.promise;
  const secondBody = JSON.stringify({ model, messages: [{ role: 'user', content: `second ${key}` }] });
  const second = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body: secondBody });
  await second.text(); release.resolve(); await (await first).text();
  assert.deepEqual(captured, [firstBody.replaceAll(key, '[redacted]')]);
  assert.deepEqual(inspected, [firstBody, secondBody].map(body => body.replaceAll(key, '[redacted]')));
  assert.deepEqual(received, [secondBody, firstBody]);
});

test('system, user, and private reasoning text never establish a successful Read result', async t => {
  const relay = await fixture(t, (_request, response) => sse(response, [
    { choices: [{ delta: { reasoning_content: marker, content: 'Unrelated' } }] },
    { type: 'response.reasoning_summary_text.delta', delta: marker },
  ]));
  const response = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers,
    body: JSON.stringify({ model, messages: [{ role: 'system', content: marker }, { role: 'user', content: marker }] }) });
  await response.text();
  assert.equal(relay.requests[0].actualFileInToolResult, false);
  assert.equal(relay.requests[0].assistantHistoryContainsMarker, false);
  assert.equal(relay.requests[0].assistantReturnedMarker, undefined);
});

test('history evidence requires an assistant message containing the original marker', async t => {
  const relay = await fixture(t, (_request, response) => sse(response, []));
  const response = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers,
    body: JSON.stringify({ model, messages: [{ role: 'assistant', content: marker }] }) });
  await response.text();
  assert.equal(relay.requests[0].assistantHistoryContainsMarker, true);
  assert.equal(relay.requests[0].actualFileInToolResult, false);
  assert.equal(relay.requests[0].assistantReturnedMarker, undefined);
});

test('provider failures are redacted, retained and never automatically retried', async t => {
  let calls = 0;
  const relay = await fixture(t, (_request, response) => {
    calls++; response.writeHead(400, { 'x-request-id': key }); response.end(`Rejected ${key}`);
  });
  const response = await fetch(`${relay.url}/responses`, { method: 'POST', headers, body: JSON.stringify({ model }) });
  assert.equal(response.status, 502);
  assert.ok(!(await response.text()).includes(key));
  assert.equal(await relay.failure, 'Live provider returned HTTP 400');
  assert.equal(calls, 1);
  assert.equal(relay.requests[0].error, 'Rejected [redacted]');
  assert.equal(relay.requests[0].requestId, '[redacted]');
});

test('opt-in initial 401 preserves the real status/body and manual credential replacement permits inference', async t => {
  const received = [];
  const relay = await fixture(t, async (request, response) => {
    let body = ''; for await (const chunk of request) body += chunk;
    received.push({ body, authorization: request.headers.authorization });
    if (request.headers.authorization === 'Bearer invalid-probe') {
      response.writeHead(401, { 'content-type': 'application/json', 'x-request-id': 'auth-request' });
      response.end(JSON.stringify({ error: { message: 'Invalid invalid-probe' } })); return;
    }
    sse(response, [{ choices: [{ delta: { content: marker }, finish_reason: 'stop' }] }]);
  }, { expectInitialUnauthorized: true });
  relay.setKey('invalid-probe');
  const body = JSON.stringify({ model, stream: true, messages: [{ role: 'user', content: 'Read probe.txt' }] });
  const submit = () => fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body });
  const failed = await submit();
  assert.equal(failed.status, 401); assert.equal(failed.headers.get('x-request-id'), 'auth-request');
  assert.deepEqual(await failed.json(), { error: { message: 'Invalid [redacted]' } });
  assert.equal(relay.requests[0].expectedAuthenticationFailure, true);
  assert.equal(received.length, 1);
  relay.setKey(key);
  const recovered = await submit(); assert.equal(recovered.status, 200); await recovered.text();
  assert.deepEqual(received, [{ body, authorization: 'Bearer invalid-probe' }, { body, authorization: `Bearer ${key}` }]);
  assert.equal(relay.requests[1].assistantReturnedMarker, true);
});

test('allowing initial authentication failure does not hide a repeated upstream 401', async t => {
  const relay = await fixture(t, (_request, response) => {
    response.writeHead(401); response.end('Unauthorized');
  }, { expectInitialUnauthorized: true });
  const submit = () => fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body: JSON.stringify({ model }) });
  const first = await submit(); assert.equal(first.status, 401); await first.text();
  const second = await submit(); assert.equal(second.status, 502); await second.text();
  assert.equal(await relay.failure, 'Live provider returned HTTP 401');
  assert.equal(relay.requests.length, 2);
  assert.equal(relay.requests[1].expectedAuthenticationFailure, undefined);
});

test('unexpected acceptance of the invalid credential stops the probe before forwarding model output', async t => {
  const relay = await fixture(t, (_request, response) => {
    sse(response, [{ choices: [{ delta: { content: marker }, finish_reason: 'stop' }] }]);
  }, { expectInitialUnauthorized: true });
  const response = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body: JSON.stringify({ model }) });
  assert.equal(response.status, 502); assert.ok(!(await response.text()).includes(marker));
  assert.equal(await relay.failure, 'Live provider did not reject the deliberately invalid credential');
  assert.equal(relay.requests[0].assistantReturnedMarker, undefined);
});

for (const action of ['downstream cancellation', 'relay cleanup']) {
  test(`${action} closes an in-flight upstream response`, { timeout: 5000 }, async t => {
    const closed = Promise.withResolvers();
    const relay = await fixture(t, (_request, response) => {
      response.once('close', closed.resolve);
      response.writeHead(200, { 'Content-Type': 'text/event-stream' });
      response.write('data: {"choices":[{"delta":{"content":"start"}}]}\n\n');
    });
    const controller = new AbortController();
    const response = await fetch(`${relay.url}/responses`, { method: 'POST', headers,
      body: JSON.stringify({ model }), signal: controller.signal });
    const reader = response.body.getReader(); await reader.read();
    if (action === 'downstream cancellation') controller.abort();
    else await relay.close();
    await closed.promise;
    await reader.cancel().catch(() => {}); reader.releaseLock();
    assert.equal(relay.requests.length, 1);
  });
}
