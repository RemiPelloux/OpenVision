import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createLiveAgentRelay, providerUsage } from './live-agent-relay.mjs';

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

for (const phase of ['headers', 'body']) {
  test(`controlled ${phase} stall never contacts upstream and later requests use the real relay`, { timeout: 5000 }, async t => {
    let calls = 0;
    const relay = await fixture(t, (_request, response) => {
      calls++; sse(response, [{ choices: [{ delta: { content: marker } }] }]);
    }, { initialStall: phase });
    const controller = new AbortController();
    const body = JSON.stringify({ model, stream: true, messages: [{ role: 'user', content: 'Read probe.txt' }] });
    const pending = fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body, signal: controller.signal });
    const result = pending.then(response => response.text()).catch(error => error);
    while (!relay.requests.length) await new Promise(resolve => setTimeout(resolve, 10));
    assert.equal(calls, 0);
    assert.equal(relay.requests[0].upstreamContacted, false);
    controller.abort(); await result;
    while (relay.requests[0].elapsedMs === undefined) await new Promise(resolve => setTimeout(resolve, 10));
    assert.equal(relay.requests[0].controlledStall, phase);
    assert.equal(relay.requests[0].httpStatus, undefined, 'No fixture status may be attributed to the provider');
    assert.equal(relay.requests[0].productionDeadlineMs, phase === 'headers' ? 300000 : 600000);
    const next = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body });
    assert.equal(next.status, 200); await next.text();
    assert.equal(calls, 1);
    assert.equal(relay.requests[1].assistantReturnedMarker, true);
  });
}

test('invalid or overlapping timeout scenarios fail before starting the relay', async () => {
  await assert.rejects(createLiveAgentRelay({ initialStall: 'invalid' }), /Timeout phase/);
  await assert.rejects(createLiveAgentRelay({ initialStall: 'body', expectInitialUnauthorized: true }), /separate probes/);
});

test('relay cleanup releases a controlled stall without waiting for its production deadline', { timeout: 5000 }, async t => {
  let calls = 0;
  const relay = await fixture(t, () => { calls++; }, { initialStall: 'headers' });
  const pending = fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body: JSON.stringify({ model }) })
    .catch(error => error);
  while (!relay.requests.length) await new Promise(resolve => setTimeout(resolve, 10));
  await relay.close();
  assert.ok((await pending) instanceof Error);
  assert.equal(calls, 0);
  assert.ok(relay.requests[0].elapsedMs < 2000);
});

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

test('catalog mirrors user-specified levels over discovered ones, or compatibility hints on request', async t => {
  const upstream = createServer((_request, response) => response.end());
  await new Promise(resolve => upstream.listen(0, '127.0.0.1', resolve));
  t.after(async () => { upstream.closeAllConnections(); await new Promise(resolve => upstream.close(resolve)); });
  const provider = url => ({ url, models: [{ id: 'gpt-6.1-sol', capabilities: { reasoningEffortValues: [{ id: 'high', value: 'high' }] },
    userCapabilities: { reasoningEffortValues: [{ id: 'low', value: 'low' }, { id: 'medium', value: 'medium' }] } }] });
  const levels = async options => {
    const relay = await createLiveAgentRelay({ model: 'gpt-6.1-sol', marker, ...options });
    t.after(() => relay.close());
    return [relay.catalogEfforts, (await (await fetch(`${relay.url}/models`, { headers })).json()).data[0].capabilities?.reasoning_effort];
  };
  const local = `http://127.0.0.1:${upstream.address().port}/v1`;
  const low = [{ id: 'low', value: 'low' }, { id: 'medium', value: 'medium' }];
  assert.deepEqual(await levels({ provider: provider(local) }), [low, ['low', 'medium']]);
  assert.deepEqual(await levels({ provider: provider('https://codex-easy.ai/v1'), catalog: 'hints' }),
    [['low', 'medium', 'high', 'xhigh', 'max'], ['low', 'medium', 'high', 'xhigh', 'max']]);
  assert.deepEqual(await levels({ provider: provider(local), catalog: 'hints' }), [undefined, undefined]);
  await assert.rejects(createLiveAgentRelay({ model, marker, provider: provider(local), catalog: 'other' }), /saved or hints/);
});

test('catalog authentication and selected model are checked before contacting a provider', async t => {
  let calls = 0;
  const relay = await fixture(t, (_request, response) => { calls++; response.end(); });
  assert.equal((await fetch(`${relay.url}/models`)).status, 401);
  assert.equal((await fetch(`${relay.url}/unknown`, { headers })).status, 404);
  assert.equal((await fetch(`${relay.url}/responses`, { method: 'POST', headers, body: JSON.stringify({ model: 'wrong' }) })).status, 502);
  assert.equal(calls, 0); assert.equal(relay.requests.length, 0);
});

test('custom request limits are bounded and admit a larger edit probe', async t => {
  await assert.rejects(createLiveAgentRelay({ requestLimit: 0 }), /integer from 1 to 32/);
  await assert.rejects(createLiveAgentRelay({ requestLimit: 33 }), /integer from 1 to 32/);
  const relay = await fixture(t, (_request, response) => sse(response, []), { requestLimit: 8 });
  const body = JSON.stringify({ model, stream: true });
  for (let index = 0; index < 8; index++) {
    const response = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body });
    assert.equal(response.status, 200); await response.text();
  }
  const rejected = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body });
  assert.equal(rejected.status, 502); await rejected.text();
  assert.match(await relay.failure, /request limit/);
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

test('opt-in failure forwarding shows the real redacted status/body once and still fails the probe', async t => {
  let calls = 0;
  const relay = await fixture(t, (_request, response) => {
    calls++; response.writeHead(403, { 'content-type': 'application/json', 'x-request-id': 'balance-request' });
    response.end(JSON.stringify({ code: 'INSUFFICIENT_BALANCE', message: `Insufficient account balance ${key}` }));
  }, { forwardProviderFailures: true });
  const response = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body: JSON.stringify({ model }) });
  assert.equal(response.status, 403); assert.equal(response.headers.get('x-request-id'), 'balance-request');
  assert.deepEqual(await response.json(), { code: 'INSUFFICIENT_BALANCE', message: 'Insufficient account balance [redacted]' });
  assert.equal(await relay.failure, 'Live provider returned HTTP 403');
  assert.equal(calls, 1);
  assert.equal(relay.requests[0].forwardedToNative, true);
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

test('a fork probe can arm exactly one real unauthorized response after successful inference', async t => {
  const relay = await fixture(t, (request, response) => {
    if (request.headers.authorization === 'Bearer invalid-fork') {
      response.writeHead(401); response.end('Unauthorized'); return;
    }
    sse(response, [{ choices: [{ delta: { content: marker } }] }]);
  });
  const submit = () => fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body: JSON.stringify({ model }) });
  const first = await submit(); assert.equal(first.status, 200); await first.text();
  relay.expectUnauthorizedOnNextRequest(); relay.setKey('invalid-fork');
  const failed = await submit(); assert.equal(failed.status, 401); await failed.text();
  assert.equal(relay.requests[1].expectedAuthenticationFailure, true);
  assert.throws(() => relay.expectUnauthorizedOnNextRequest(), /single provider failure/);
  relay.setKey(key);
  const recovered = await submit(); assert.equal(recovered.status, 200); await recovered.text();
  assert.equal(relay.requests.length, 3);
  assert.equal(relay.requests[2].assistantReturnedMarker, true);
});

test('a fork probe can arm one non-authentication provider failure; an unarmed one still fails the probe', async t => {
  let fail = false;
  const relay = await fixture(t, (_request, response) => {
    if (fail) { fail = false; response.writeHead(503, { 'content-type': 'application/json' }); response.end('{"error":{"message":"unavailable"}}'); return; }
    sse(response, [{ choices: [{ delta: { content: marker } }] }]);
  });
  const submit = () => fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body: JSON.stringify({ model }) });
  relay.expectFailureOnNextRequest(503); fail = true;
  const failed = await submit(); assert.equal(failed.status, 503); await failed.text();
  assert.equal(relay.requests[0].expectedProviderFailure, true);
  assert.equal(relay.requests[0].expectedAuthenticationFailure, undefined);
  assert.throws(() => relay.expectFailureOnNextRequest(503), /single provider failure/);
  const recovered = await submit(); assert.equal(recovered.status, 200); await recovered.text();
  fail = true;
  const unarmed = await submit(); assert.equal(unarmed.status, 502, 'An unarmed failure is not shown as provider output'); await unarmed.text();
  assert.match(await relay.failure, /HTTP 503/);
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

test('relay records provider-reported usage, including cached tokens, without estimating absent fields', async t => {
  const relay = await fixture(t, (_request, response) => sse(response, [
    { model, choices: [{ delta: { content: marker } }] },
    { model, choices: [], usage: { prompt_tokens: 1200, completion_tokens: 30, total_tokens: 1230,
      prompt_tokens_details: { cached_tokens: 1024 }, completion_tokens_details: { reasoning_tokens: 12 } } }]));
  const body = JSON.stringify({ model, stream: true, messages: [{ role: 'user', content: 'Read probe.txt' }] });
  await (await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers, body })).text();
  assert.deepEqual(relay.requests[0].usage, { promptTokens: 1200, completionTokens: 30, cachedTokens: 1024, reasoningTokens: 12, totalTokens: 1230 });
  assert.deepEqual(providerUsage({ type: 'response.completed', response: { usage: { input_tokens: 9, output_tokens: 2,
    input_tokens_details: { cached_tokens: 4 } } } }), { promptTokens: 9, completionTokens: 2, cachedTokens: 4, reasoningTokens: undefined, totalTokens: undefined });
  assert.equal(providerUsage({ choices: [{ delta: { content: 'x' } }] }), undefined);
  assert.equal(providerUsage({ usage: { prompt_tokens: 5, prompt_cache_hit_tokens: 3 } }).cachedTokens, 3);
});
