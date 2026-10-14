import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { payloadComparisons, probeNativePayload } from './live-payload-probe.mjs';

const payload = { model: 'fixture-model', stream: true, store: false, tool_choice: 'auto',
  messages: [{ role: 'user', content: 'synthetic-context' }],
  tools: [{ type: 'function', function: { name: 'Read', parameters: { type: 'object' } } }] };
const provider = { url: 'https://fixture.invalid/v1', key: 'fixture-key', probeModel: payload.model };

test('diagnostic variants preserve captured input and compare one output-limit field', () => {
  const before = structuredClone(payload);
  const variants = payloadComparisons(payload, provider.probeModel, 'output-limit');
  assert.equal(variants.length, 5);
  assert.deepEqual(variants[0].payload, payload);
  assert.deepEqual(variants.at(-1).payload, payload);
  assert.deepEqual(variants.slice(1, -1).map(item => item.payload.max_tokens), [512, 8192, 32768]);
  for (const item of variants) {
    const { max_tokens, ...rest } = item.payload;
    assert.deepEqual(rest, payload);
  }
  const structure = payloadComparisons(payload, provider.probeModel);
  assert.equal(structure.length, 5);
  assert.ok(structure.every(item => item.payload.max_tokens === 512));
  assert.deepEqual(payload, before);
  assert.throws(() => payloadComparisons(payload, 'wrong-model'));
  assert.throws(() => payloadComparisons({ ...payload, stream: false }, payload.model));
  assert.throws(() => payloadComparisons(payload, payload.model, 'unknown'));
});

test('diagnostics send each variant once, never execute tools, omit outputs and redact failures', async () => {
  const received = [], progress = [];
  const result = await probeNativePayload(provider, payload, { progress: stage => progress.push(stage), fetch: async (url, init) => {
    assert.equal(url, `${provider.url}/chat/completions`);
    assert.equal(init.headers.Authorization, `Bearer ${provider.key}`);
    assert.equal(init.redirect, 'error'); assert.ok(init.signal);
    received.push(init.body);
    if (received.length === 2) return Response.json({ error: { message: `Rejected ${provider.key}` } }, { status: 400 });
    return new Response('data: ' + JSON.stringify({ model: 'provider-alias', choices: [{
      delta: { content: 'do-not-persist-output', reasoning_content: 'do-not-persist-reasoning',
        tool_calls: [{ index: 0, id: 'call-1', function: { name: 'Read', arguments: '{"path":"do-not-persist-arguments"}' } }] },
      finish_reason: 'tool_calls',
    }] }) + '\n\ndata: [DONE]\n\n', { headers: { 'content-type': 'text/event-stream' } });
  } });
  assert.equal(result.ok, false); assert.equal(received.length, 5); assert.equal(progress.length, 5);
  assert.equal(result.stages[1].httpStatus, 400);
  assert.match(result.stages[1].error, /\[redacted\]/);
  for (let i = 0; i < received.length; i++) {
    assert.equal(result.stages[i].requestSha256, createHash('sha256').update(received[i]).digest('hex'));
    assert.equal(result.stages[i].requestBytes, Buffer.byteLength(received[i]));
  }
  assert.doesNotMatch(JSON.stringify(result), /fixture-key|do-not-persist/);
});
