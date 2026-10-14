import test from 'node:test';
import assert from 'node:assert/strict';
import { probeLiveCompletion } from './live-completion-probe.mjs';

const provider = { url: 'http://127.0.0.1:8000/v1', key: 'fixture-key' };
test('live completion probe distinguishes useful fixture syntax from invalid and unrelated code without execution', async () => {
  for (const [insertion, syntaxValid, sumExpression] of [
    ['a + b', true, true], ['(a + b)', true, true], ['a - b', true, false],
    ['42', true, false], ['"unterminated', false, false], ['', true, false],
    ['a + b; globalThis.OPENVISION_UNSAFE_EXECUTION = true', true, false],
  ]) {
    const result = await probeLiveCompletion(provider, 'coder', { fetch: async (url, options) => {
      assert.equal(url, provider.url + '/chat/completions');
      assert.equal(options.headers.Authorization, 'Bearer fixture-key');
      const request = JSON.parse(options.body);
      assert.equal(request.max_tokens, 512); assert.equal(request.stream, false);
      return Response.json({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: insertion } }] });
    } });
    assert.equal(result.syntaxValid, syntaxValid, insertion);
    assert.equal(result.sumExpression, sumExpression, insertion);
    assert.equal(result.ok, syntaxValid && sumExpression, insertion);
    assert.equal(result.requests, 1);
    assert.equal(globalThis.OPENVISION_UNSAFE_EXECUTION, undefined);
  }
});

test('live completion failure retains safe protocol diagnostics without echoing transport errors', async () => {
  const truncated = await probeLiveCompletion(provider, 'coder', { fetch: async () => Response.json({
    choices: [{ finish_reason: 'length', message: { role: 'assistant', content: 'fixture-key' } }],
  }) });
  assert.equal(truncated.ok, false); assert.match(truncated.error, /truncated/);
  const transport = await probeLiveCompletion(provider, 'coder', { fetch: async () => { throw Error('fixture-key'); } });
  assert.equal(transport.error, 'Completion transport failed.');
});
