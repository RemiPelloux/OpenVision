import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import * as policy from './provider-error-policy.js';
import { redactProviderErrors } from './provider-error-customization.mjs';

const original = await readFile(new URL('../../cursor/readable/app/extensions/cursor-agent-exec/dist/main.js', import.meta.url), 'utf8');
const patched = redactProviderErrors(original);

function expression(anchor, offset = 0) {
  const start = patched.indexOf(anchor) + offset;
  assert.ok(start >= offset);
  const node = parseExpressionAt(patched, start, { ecmaVersion: 'latest' });
  return patched.slice(node.start, node.end);
}

class ApiError extends Error {
  constructor(options) { super(options.message, { cause: options.cause }); Object.assign(this, options); }
  static isInstance(error) { return error instanceof ApiError; }
}
const context = { Error, TypeError, Headers, openvisionProviderErrors: policy,
  Te: ApiError, Lt: error => error.name === 'AbortError', Ut: headers => headers,
  qt: response => Object.fromEntries(response.headers), Zt: () => fetch };
const transport = runInNewContext(`(${expression('er = async ({', 5)})`, context);
const retry = runInNewContext(`(${expression('async function $r(')})`, context);
const agentRetry = runInNewContext(`(${expression('function TEe(')})`, context);

test('customization is idempotent on the actual recovered transport and upgrades v1', () => {
  assert.equal(redactProviderErrors(patched), patched);
  const old = '/* OpenVision provider error redaction v1 */\nconst openvisionProviderErrors = require("./openvision-provider-errors.cjs");\n' +
    original.replace('                throw t.value;', '                openvisionProviderErrors.redactProviderError(t.value, t);\n                throw t.value;');
  assert.equal(redactProviderErrors(old), patched);
});

test('diagnostic graph redaction preserves identity, status, retryability and unrelated evidence', () => {
  const cause = new Error('secret-fixture-key');
  const error = new ApiError({ message: 'secret-fixture-key', cause, statusCode: 503, isRetryable: true,
    responseBody: '{"message":"secret-fixture-key"}', data: { error: { message: 'secret-fixture-key', code: 'busy' } } });
  cause.cause = error;
  assert.equal(policy.redactProviderError(error, { Authorization: 'Bearer secret-fixture-key' }), error);
  for (const value of [error.message, error.stack, error.responseBody, error.data.error.message, cause.message, cause.stack])
    assert.ok(!value.includes('secret-fixture-key'));
  assert.equal(error.statusCode, 503); assert.equal(error.isRetryable, true);
  assert.equal(error.data.error.code, 'busy');
  assert.equal(policy.isProviderFailure(new Error('wrapped', { cause: error })), true);
  assert.equal(policy.isProviderFailure(new Error('unrelated')), false);
});

test('native context-error classification preserves provider failures without starting paid summary retries', () => {
  class InputTokenLimitError extends Error {}
  const classify = runInNewContext(`${expression('function vi(e, t)')}\n${expression('function wi(e)')}\n${expression('function bi(e)')}\n(${expression('function pEe(e)')})`, {
    ...context, jo: InputTokenLimitError,
  });
  const provider = new ApiError({ message: 'context_length_exceeded', statusCode: 400 });
  policy.redactProviderError(provider, {});
  assert.equal(classify(provider), provider);
  assert.match(policy.providerFailureDetail(provider, 'details'), /Reduce attached context/);
  // Preserve the original proactive/internal context-recovery contract.
  const internal = new Error('context_length_exceeded');
  assert.ok(classify(internal) instanceof InputTokenLimitError);
  assert.equal(policy.providerFailureDetail(internal, 'details'), 'details');
});

test('recovery guidance uses parsed provider facts without inventing capability failures', () => {
  assert.match(policy.providerFailureDetail({ statusCode: 429 }, 'detail'), /Wait before choosing Try again/);
  assert.match(policy.providerFailureDetail({ statusCode: 503 }, 'detail'), /server error/);
  assert.match(policy.providerFailureDetail({ data: { error: { code: 'unsupported_tools' } } }, 'detail'), /tool support/);
  assert.match(policy.providerFailureDetail({ data: { error: { code: 'unsupported_image' } } }, 'detail'), /image support/);
  assert.equal(policy.providerFailureDetail({ statusCode: 400, data: { error: { code: 'unknown' } } }, 'detail'), 'detail');
});

test('recovered HTTP owner sanitizes actual responses before SDK and Agent retry decisions', async () => {
  let count = 0;
  const server = createServer((request, response) => {
    count++;
    response.writeHead(Number(request.url.slice(1)), { 'content-type': 'application/json' });
    response.end(JSON.stringify({ error: { message: 'echo secret-fixture-key', code: 'fixture_error' } }));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    for (const status of [401, 403, 429, 500, 502, 503]) {
      const before = count;
      await assert.rejects(retry(() => transport({ url: `http://127.0.0.1:${server.address().port}/${status}`,
        headers: { Authorization: 'Bearer secret-fixture-key' }, body: { content: '{}', values: {} },
        failedResponseHandler: async ({ response }) => {
          const responseBody = await response.text(), data = JSON.parse(responseBody);
          return { value: new ApiError({ message: data.error.message, responseBody, data,
            statusCode: response.status, isRetryable: status === 429 || status >= 500 }) };
        },
      }), { maxRetries: 3, delayInMs: 1, backoffFactor: 1 }), error => {
        assert.equal(error.statusCode, status);
        assert.ok(![error.message, error.stack, error.responseBody, JSON.stringify(error.data)].join().includes('secret-fixture-key'));
        assert.equal(agentRetry(error), false);
        assert.equal(error.isRetryable, status === 429 || status >= 500);
        return true;
      });
      assert.equal(count - before, 1, 'Each submission makes one HTTP attempt');
    }
  } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
});

test('recovered transport handles error-handler rejection, offline failure and cancellation', async () => {
  for (const mode of ['handler', 'offline', 'cancel']) {
    const cause = new Error('echo secret-fixture-key');
    const abort = new Error('aborted secret-fixture-key'); abort.name = 'AbortError';
    await assert.rejects(transport({ url: 'http://fixture.invalid', headers: { Authorization: 'Bearer secret-fixture-key' },
      body: { content: '{}', values: {} }, fetch: async () => {
        if (mode === 'cancel') throw abort;
        if (mode === 'offline') throw new TypeError('fetch failed', { cause });
        return new Response('{}', { status: 503 });
      }, failedResponseHandler: async () => { throw cause; },
    }), error => {
      assert.ok(!error.stack.includes('secret-fixture-key'));
      if (mode === 'cancel') assert.equal(error, abort);
      else assert.ok(!error.cause.message.includes('secret-fixture-key'));
      assert.equal(policy.isProviderFailure(error), true);
      return true;
    });
  }
});

test('parsed provider streams preserve backpressure, reject redacted errors and cancel upstream', async () => {
  for (const mode of ['validation', 'provider', 'read']) {
    let pulls = 0, cancelled = false;
    const error = new Error('secret-fixture-key');
    const stream = new ReadableStream({
      pull(controller) {
        pulls++;
        if (mode === 'read') { controller.error(error); return; }
        controller.enqueue(mode === 'validation' ? { success: false, error } :
          { success: true, value: { error: { message: 'secret-fixture-key' } } });
      },
      cancel() { cancelled = true; },
    }, { highWaterMark: 0 });
    const result = policy.protectProviderResult({ value: stream }, { authorization: 'Bearer secret-fixture-key' });
    assert.equal(pulls, 0, 'Do not eagerly drain the provider');
    await assert.rejects(result.value.getReader().read(), error => {
      assert.equal(error.message, '[redacted]'); assert.equal(agentRetry(error), false); return true;
    });
    assert.equal(pulls, 1);
    if (mode !== 'read') assert.equal(cancelled, true);
  }
});

test('parsed stream cancellation reaches the upstream reader and successful chunks retain identity', async () => {
  const reason = new Error('user stopped'); let cancelled;
  const chunk = { success: true, value: { choices: [{ delta: { content: 'hello' } }] } };
  const source = new ReadableStream({ pull(controller) { controller.enqueue(chunk); }, cancel(value) { cancelled = value; } }, { highWaterMark: 0 });
  const reader = policy.protectProviderResult({ value: source }, {}).value.getReader();
  assert.equal((await reader.read()).value, chunk);
  await reader.cancel(reason); assert.equal(cancelled, reason);
  assert.equal(source.locked, false);
});
