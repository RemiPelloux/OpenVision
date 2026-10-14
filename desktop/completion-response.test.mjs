import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { fetchCompletion } from './completion-http.mjs';

const choice = (content, finish_reason = 'stop', extra = {}) => ({
  choices: [{ finish_reason, message: { role: 'assistant', content, ...extra } }],
});

test('real HTTP autocomplete accepts empty/complete text and rejects incomplete or non-code response contracts', async t => {
  const cases = {
    empty: choice(''), valid: choice('return "日本語 😀";'),
    truncated: choice('return "unfinished', 'length'),
    filtered: choice('FILTERED_CONTENT', 'content_filter'),
    tool: choice('TOOL_CONTENT', 'stop', { tool_calls: [{ id: 'one', type: 'function' }] }),
    legacyTool: choice('FUNCTION_CONTENT', 'stop', { function_call: { name: 'write' } }),
    malformedTools: choice('MALFORMED_TOOL_CONTENT', 'stop', { tool_calls: {} }),
    refused: choice('REFUSAL_CONTENT', 'stop', { refusal: 'Request refused' }),
    wrongRole: choice('USER_CONTENT', 'stop', { role: 'user' }),
    noFinish: { choices: [{ message: { role: 'assistant', content: 'UNFINISHED' } }] },
    noChoices: {}, nullBody: null,
    markdown: choice('  ```js\n42\n```'), tooLong: choice('x'.repeat(8001)),
  };
  const requests = [];
  const server = createServer(async (req, res) => {
    const chunks = []; for await (const chunk of req) chunks.push(chunk);
    const payload = JSON.parse(Buffer.concat(chunks)); requests.push(payload.model);
    res.setHeader('content-type', 'application/json');
    if (payload.model === 'invalidJson') return res.end('{"secret":"fixture-key", broken');
    if (payload.model === 'invalidUtf8') return res.end(Buffer.from([0xff, 0xfe]));
    if (payload.model === 'unsupported') { res.statusCode = 404; return res.end('fixture-key echoed by provider'); }
    res.end(JSON.stringify(cases[payload.model]));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const input = { baseUrl: `http://127.0.0.1:${server.address().port}/v1`, apiKey: 'fixture-key',
    prefix: '', suffix: '', language: 'javascript' };
  const run = model => fetchCompletion({ ...input, model }, { fetch });
  assert.equal(await run('empty'), '');
  assert.equal(await run('valid'), 'return "日本語 😀";');
  for (const name of [...Object.keys(cases).slice(2), 'invalidJson', 'invalidUtf8', 'unsupported']) {
    await assert.rejects(run(name), error => {
      assert.ok(!error.message.includes('fixture-key'), 'Provider diagnostics must not echo request credentials');
      return true;
    }, name);
  }
  assert.equal(await run('valid'), 'return "日本語 😀";', 'A rejected response must not poison later completions');
  assert.equal(requests.length, Object.keys(cases).length + 4, 'Exactly one request per explicit completion');
});
