import test from 'node:test';
import assert from 'node:assert/strict';
import { createAgentFixtureProvider, fixtureReply, fixtureModel } from './agent-fixture-provider.mjs';
import { createLiveAgentRelay } from './live-agent-relay.mjs';
import { liveReadPrompt } from './verify-live-retry.mjs';
import { forkRecallPrompt } from './verify-live-history.mjs';

const marker = `OPENVISION_READ_${'a1'.repeat(16)}`;
const project = '/tmp/openvision-fixture-project';
const readTool = { type: 'function', function: { name: 'Read', parameters: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } } };
const headers = { Authorization: 'Bearer native-probe-key', 'Content-Type': 'application/json' };

async function setup(t) {
  const provider = await createAgentFixtureProvider({ project });
  const relay = await createLiveAgentRelay({ model: fixtureModel, marker, provider: { url: provider.url, models: [{ id: fixtureModel, enabled: true }] } });
  relay.setKey(provider.key);
  t.after(async () => { await relay.close(); await provider.close(); });
  const submit = async messages => {
    const response = await fetch(`${relay.url}/chat/completions`, { method: 'POST', headers,
      body: JSON.stringify({ model: fixtureModel, stream: true, messages, tools: [readTool] }) });
    return { status: response.status, text: await response.text() };
  };
  return { provider, relay, submit };
}

test('fixture asks for Read, then answers only with the marker from the actual tool result', async t => {
  const { relay, submit, provider } = await setup(t);
  const user = { role: 'user', content: liveReadPrompt };
  assert.equal((await submit([user])).status, 200);
  const call = relay.requests[0].responseToolCalls?.[0];
  assert.equal(call?.name, 'Read');
  assert.equal(relay.requests[0].assistantReturnedMarker, undefined);
  const assistant = { role: 'assistant', content: null, tool_calls: [{ id: call.id, type: 'function', function: { name: 'Read', arguments: '{}' } }] };
  await submit([user, assistant, { role: 'tool', tool_call_id: call.id, content: `1|${marker}` }]);
  assert.equal(relay.requests[1].actualFileInToolResult, true);
  assert.equal(relay.requests[1].assistantReturnedMarker, true);
  assert.equal(relay.requests[1].streamCompleted, true);
  assert.deepEqual(provider.requests.map(request => request.status), [200, 200]);
});

test('recall comes only from assistant history, never from the fixture or user text', async t => {
  const { relay, submit } = await setup(t);
  await submit([{ role: 'user', content: `${marker}\n${forkRecallPrompt}` }]);
  assert.equal(relay.requests[0].assistantReturnedMarker, undefined, 'A marker in user text is not recall');
  await submit([{ role: 'user', content: liveReadPrompt }, { role: 'assistant', content: marker }, { role: 'user', content: forkRecallPrompt }]);
  assert.equal(relay.requests[1].assistantHistoryContainsMarker, true);
  assert.equal(relay.requests[1].assistantReturnedMarker, true);
  assert.equal(fixtureReply({ messages: [{ role: 'assistant', content: marker }, { role: 'user', content: forkRecallPrompt }] }, { project }).content,
    `BRANCHED: ${marker}`);
});

test('armed failure is returned once; a wrong credential is a real 401 from the fixture', async t => {
  const { relay, submit, provider } = await setup(t);
  relay.expectFailureOnNextRequest(503); provider.failNextRequest(503);
  const failed = await submit([{ role: 'user', content: forkRecallPrompt }]);
  assert.equal(failed.status, 503);
  assert.equal(relay.requests[0].expectedProviderFailure, true);
  assert.equal((await submit([{ role: 'user', content: forkRecallPrompt }])).status, 200);
  assert.throws(() => provider.failNextRequest(200), /4xx or 5xx/);
  relay.setKey('wrong-key');
  assert.equal((await submit([{ role: 'user', content: forkRecallPrompt }])).status, 502, 'An unexpected 401 fails the probe');
  assert.equal(provider.requests.at(-1).status, 401);
  assert.match(await relay.failure, /HTTP 401/);
});
