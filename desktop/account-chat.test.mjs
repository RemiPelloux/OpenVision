import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { createAccountBridge } = require('./account-chat-bridge.cjs');
const { chatRequest } = require('./account-chat-request.cjs');
const account = '12345678-1234-1234-1234-123456789abc';
const other = '12345678-1234-1234-1234-123456789abd';
const model = { id: 'test', reasoningLevels: ['high'] };
const tools = [{ type: 'function', function: { name: 'read_project', parameters: { type: 'object' } } }];
const request = { model: 'test', messages: [{ role: 'user', content: 'Read the project' }], tools };
async function fixture(t, start) {
  let closed = 0;
  const bridge = await createAccountBridge(async () => ({ models: [model] }), {
    start: async (options, events) => {
      await start(options, events);
      return { close: async () => { closed++; } };
    },
  });
  t.after(() => bridge.close());
  const url = `${bridge.url}/codex/${account}`;
  const headers = { authorization: `Bearer ${bridge.token}`, 'content-type': 'application/json' };
  const post = (body, endpoint = url) => fetch(`${endpoint}/chat/completions`, { method: 'POST', headers, body: JSON.stringify(body) });
  return { bridge, url, headers, post, closed: () => closed };
}
test('account request boundary rejects unsupported content, tools and malformed messages', () => {
  assert.throws(() => chatRequest({ ...request, messages: [{ role: 'user', content: [{ type: 'image_url', image_url: {} }] }] }), /text attachments/);
  assert.throws(() => chatRequest({ ...request, tools: [...tools, ...tools] }), /unique names/);
  assert.throws(() => chatRequest({ ...request, tools: [null] }), /unique names/);
  assert.throws(() => chatRequest({ ...request, stream: 'true' }), /stream option/);
  assert.throws(() => chatRequest({ ...request, messages: [{ role: 'assistant', tool_calls: [null] }] }), /historical tool/);
  assert.throws(() => chatRequest({ ...request, messages: [{ role: 'tool', content: 'x' }] }), /identity/);
  assert.equal(chatRequest({ ...request, reasoning_effort: 'high' }).effort, 'high');
});
test('loopback catalog requires its private token and advertises the actual transport', async t => {
  const f = await fixture(t, async () => {});
  assert.equal((await fetch(`${f.url}/models`)).status, 401);
  assert.equal((await fetch(`${f.url}/models`, { headers: { ...f.headers, origin: 'http://example.invalid' } })).status, 401);
  const catalog = await (await fetch(`${f.url}/models`, { headers: f.headers })).json();
  assert.deepEqual(catalog.data[0].api_types, ['chat_completions']);
  assert.equal((await f.post({ ...request, reasoning_effort: 'ultra' })).status, 400);
});
test('tool execution remains with the outer Agent and resumes the same owned process', async t => {
  let starts = 0;
  const f = await fixture(t, async (_options, events) => {
    starts++;
    events.tool('read_project', { path: 'README.md' }, result => { events.text(`Read: ${result}`); events.done(); });
  });
  const first = await (await f.post(request)).json();
  const call = first.choices[0].message.tool_calls[0];
  assert.equal(first.choices[0].finish_reason, 'tool_calls');
  assert.equal(call.function.name, 'read_project');
  const continued = { ...request, stream: true, messages: [...request.messages,
    { role: 'assistant', content: null, tool_calls: [call] }, { role: 'tool', tool_call_id: call.id, content: 'verified' }] };
  assert.equal((await f.post(continued, `${f.bridge.url}/codex/${other}`)).status, 400);
  const stream = await (await f.post(continued)).text();
  assert.match(stream, /Read: verified/); assert.match(stream, /\[DONE\]/);
  assert.equal(starts, 1);
  await f.bridge.close(); assert.equal(f.closed(), 1);
});
test('disconnect cancels the owned client and disposal awaits its release', async t => {
  let aborted;
  const abortSeen = new Promise(resolve => { aborted = resolve; });
  const f = await fixture(t, async (options, events) => {
    options.signal.addEventListener('abort', aborted, { once: true });
    events.text('Waiting');
  });
  const controller = new AbortController();
  const response = await fetch(`${f.url}/chat/completions`, { method: 'POST', headers: f.headers,
    body: JSON.stringify({ ...request, stream: true }), signal: controller.signal });
  await response.body.getReader().read(); controller.abort();
  await abortSeen; await f.bridge.close(); assert.equal(f.closed(), 1);
});

test('parallel tool calls resume the same client and release after synchronous completion', async t => {
  let starts = 0, completed = 0;
  const f = await fixture(t, async (_options, events) => {
    starts++;
    for (const path of ['one', 'two']) events.tool('read_project', { path }, () => {
      if (++completed === 2) { events.text('Both read'); events.done(); }
    });
  });
  const messages = [...request.messages];
  for (let i = 0; i < 2; i++) {
    const result = await (await f.post({ ...request, messages })).json();
    const call = result.choices[0].message.tool_calls[0];
    messages.push({ role: 'assistant', content: null, tool_calls: [call] },
      { role: 'tool', tool_call_id: call.id, content: 'ok' });
  }
  const result = await (await f.post({ ...request, messages })).json();
  assert.equal(result.choices[0].message.content, 'Both read');
  await f.bridge.close(); assert.equal(starts, 1); assert.equal(f.closed(), 1);
});

test('capacity is bounded and closing cancels clients still starting', async t => {
  let started = 0, cancelled = 0;
  const ready = Promise.withResolvers();
  const f = await fixture(t, async options => {
    if (++started === 4) ready.resolve();
    await new Promise(resolve => options.signal.addEventListener('abort', () => { cancelled++; resolve(); }, { once: true }));
  });
  const pending = Array.from({ length: 4 }, () => f.post({ ...request, stream: true }));
  await ready.promise;
  assert.equal((await f.post(request)).status, 400);
  await f.bridge.close(); await Promise.allSettled(pending);
  assert.equal(cancelled, 4); assert.equal(f.closed(), 4);
});
