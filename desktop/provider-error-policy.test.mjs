import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import * as policy from './provider-error-policy.js';
import { redactProviderErrors } from './provider-error-customization.mjs';
import { readableApp } from './recovered-source.mjs';

const original = await readFile(new URL('extensions/cursor-agent-exec/dist/main.js', readableApp), 'utf8');
const patched = redactProviderErrors(original);

// Minified helper names repeat across webpack modules, and module order differs
// between platform builds. `owner` selects the occurrence nearest before it.
function expression(anchor, offset = 0, owner) {
  const start = (owner ? patched.lastIndexOf(anchor, patched.indexOf(owner)) : patched.indexOf(anchor)) + offset;
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

test('recovered fetch owner scopes custom credentials to each session, including parsed stream errors', async t => {
  const received = [];
  const server = createServer((request, response) => {
    request.resume(); received.push({ authorization: request.headers.authorization, tenant: request.headers['x-tenant'] });
    response.writeHead(request.url === '/stream' ? 200 : 503, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ message: `echo ${request.headers.authorization} ${request.headers['x-tenant']} secret-fixture-key`, code: 'fixture-busy' }));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const factoryContext = { ...context, fetch, Request, Response, process: { env: {} }, c_e: value => value ?? 'fixture-agent',
    Fke: value => value, Ybe: () => undefined,
    Gxe: (_context, _args, _promise, generator) => {
      const iterator = generator();
      const step = value => { const next = iterator.next(value); return next.done ? next.value : Promise.resolve(next.value).then(step); };
      return Promise.resolve(step());
    }, tEe: value => value !== null && typeof value === 'object' && !Array.isArray(value) };
  factoryContext.d_e = runInNewContext(`(${expression('function d_e(')})`, factoryContext);
  const factory = runInNewContext(`(${expression('function Xxe(')})`, factoryContext);
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const stream of [false, true]) await Promise.all(['one', 'two'].map(async id => {
    const customHeaders = { Authorization: `Custom header-${id}`, 'X-Tenant': `tenant-${id}` };
    const fetchImpl = factory({ modelId: 'fixture', apiType: 'openai_compatible', customHeaders });
    const call = transport({ url: base + (stream ? '/stream' : '/error'), headers: { Authorization: 'Bearer secret-fixture-key' },
      body: { content: '{}', values: {} }, fetch: fetchImpl,
      failedResponseHandler: async ({ response }) => ({ value: new ApiError({ ...await response.json(), statusCode: response.status }) }),
      successfulResponseHandler: async ({ response }) => {
        const data = await response.json();
        return { value: new ReadableStream({ pull(controller) { controller.enqueue({ success: false, error: new Error(data.message) }); } }, { highWaterMark: 0 }) };
      },
    });
    const failure = stream ? call.then(result => result.value.getReader().read()) : call;
    await assert.rejects(failure, error => {
      for (const secret of ['secret-fixture-key', `header-${id}`, `tenant-${id}`])
        assert.ok(!error.stack.includes(secret), 'Reflected custom credentials must be absent from diagnostics');
      assert.equal(policy.isProviderFailure(error), true);
      if (!stream) { assert.equal(error.statusCode, 503, error.stack); assert.equal(error.code, 'fixture-busy'); }
      return true;
    });
  }));
  assert.equal(received.length, 4);
  assert.ok(received.every(item => item.authorization === `Custom header-${item.tenant.slice('tenant-'.length)}`));
  const networkError = new Error('echo custom-transport-secret');
  const wrapped = policy.withProviderHeaders(async () => { throw networkError; }, { 'X-Key': 'custom-transport-secret' });
  await assert.rejects(transport({ url: base, headers: {}, fetch: wrapped, body: { content: '{}', values: {} } }),
    error => !error.stack.includes('custom-transport-secret') && policy.isProviderFailure(error));
  assert.equal(networkError.message, 'echo [redacted]');
});

test('native context-error classification preserves provider failures without starting paid summary retries', () => {
  class InputTokenLimitError extends Error {}
  const classify = runInNewContext(`${expression('function vi(e, t)', 0, 'function pEe(e)')}\n${expression('function wi(e)', 0, 'function pEe(e)')}\n${expression('function bi(e)', 0, 'function pEe(e)')}\n(${expression('function pEe(e)')})`, {
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

test('exhausted balance or quota gets account guidance instead of key-refresh or rate-limit advice', () => {
  const forbidden = 'Forbidden (HTTP 403): your API key/token was rejected or lacks access — refresh it and try again.';
  const balance = { statusCode: 403, responseBody: '{"code":"INSUFFICIENT_BALANCE","message":"Insufficient account balance"}' };
  const detail = policy.providerFailureDetail(balance, `${forbidden} (INSUFFICIENT_BALANCE: Insufficient account balance)`);
  assert.equal(detail, 'The provider reports that this account has no remaining balance or quota. Add credit or check your plan with the provider, then choose Try again.\n\nHTTP 403 (INSUFFICIENT_BALANCE: Insufficient account balance)');
  const quota = { statusCode: 429, data: { error: { code: 'insufficient_quota', message: 'You exceeded your current quota' } } };
  assert.match(policy.providerFailureDetail(quota, 'd'), /no remaining balance or quota[\s\S]*\n\nd$/);
  assert.doesNotMatch(policy.providerFailureDetail(quota, 'd'), /rate limiting/);
  assert.match(policy.providerFailureDetail({ statusCode: 402 }, 'd'), /no remaining balance/);
  // Ordinary authorization and rate-limit failures keep their existing handling.
  assert.equal(policy.providerFailureDetail({ statusCode: 403, responseBody: '{"message":"Model not allowed"}' }, forbidden), forbidden);
  assert.match(policy.providerFailureDetail({ statusCode: 429, responseBody: 'Too many requests' }, 'd'), /rate limiting/);
  assert.equal(policy.providerFailureDetail({ statusCode: 401, responseBody: 'insufficient balance' }, 'd'), 'd');
});

test('realistic capability rejections are attributed only to inputs that were actually sent', () => {
  const image = [{ role: 'user', content: [{ type: 'text', text: 'look' }, { type: 'image_url', image_url: { url: 'data:image/png;base64,AA' } }] }];
  const text = [{ role: 'user', content: 'look' }];
  const tools = [{ type: 'function', function: { name: 'Read' } }];
  // OpenAI-compatible bodies without OpenVision-specific error codes.
  const imageRejection = { message: 'Invalid content type. image_url is only supported by certain models.', type: 'invalid_request_error', param: 'messages.[0].content.[1].type', code: null };
  const toolRejection = { message: 'tools is not supported for this model.', type: 'invalid_request_error', param: 'tools', code: null };
  const failure = (status, error, body) => ({ statusCode: status, data: { error }, requestBodyValues: body });
  assert.match(policy.providerFailureDetail(failure(400, imageRejection, { messages: image, tools }), 'd'), /attached image/);
  assert.match(policy.providerFailureDetail(failure(422, toolRejection, { messages: text, tools }), 'd'), /requested tools/);
  // Responses-style input and a raw (unparsed) response body are recognized too.
  assert.match(policy.providerFailureDetail({ statusCode: 400, responseBody: 'unknown variant `image_url`, expected `text`',
    requestBodyValues: { input: [{ role: 'user', content: [{ type: 'input_image', image_url: 'data:' }] }] } }, 'd'), /attached image/);
  // No attribution without the input in the actual request, for server errors, or for unrelated rejections.
  assert.equal(policy.providerFailureDetail(failure(400, imageRejection, { messages: text }), 'd'), 'd');
  assert.equal(policy.providerFailureDetail(failure(400, toolRejection, { messages: text }), 'd'), 'd');
  assert.doesNotMatch(policy.providerFailureDetail(failure(500, toolRejection, { messages: text, tools }), 'd'), /requested tools/);
  assert.equal(policy.providerFailureDetail(failure(400, { message: 'temperature must be <= 2' }, { messages: image, tools }), 'd'), 'd');
  assert.equal(policy.providerFailureDetail(failure(401, imageRejection, { messages: image, tools }), 'd'), 'd');
});

test('recovered stream wrapper: an unfinished stream is a terminal provider failure with recovery guidance', async () => {
  const wrap = runInNewContext(`${expression('var Uke = function', 4)}\nconst $ke = new Set(["unknown"]);\n(() => { ${
    expression('class Lke extends Error')}\n return { Lke, jke: ${expression('function jke(e)')} }; })()`, { Error, TransformStream, Promise, Set, Proxy, Reflect, Object });
  const model = parts => wrap.jke({ doStream: async () => ({ stream: new ReadableStream({ start(controller) {
    for (const part of parts) controller.enqueue(part); controller.close();
  } }) }) });
  const read = async stream => { const seen = []; for await (const part of stream) seen.push(part); return seen; };
  // A clean close without a finish reason is the original Agent's incomplete-stream signal.
  const failure = await read((await model([{ type: 'text-delta', textDelta: 'partial' }]).doStream({})).stream).then(() => undefined, error => error);
  assert.equal(failure?.name, 'LocalIncompleteStreamError');
  assert.equal(policy.isProviderFailure(failure), true);
  assert.equal(policy.isProviderFailure(new Error('wrapped', { cause: failure })), true);
  assert.equal(agentRetry(failure), false, 'Agent must not repeat paid inference automatically');
  assert.match(policy.providerFailureDetail(failure, failure.message), /stream ended before the response finished.*Resume or Try again/s);
  // A completed stream still succeeds unchanged.
  const done = await read((await model([{ type: 'text-delta', textDelta: 'ok' }, { type: 'finish', finishReason: 'stop' }]).doStream({})).stream);
  assert.equal(done.length, 2);
  assert.equal(policy.isProviderFailure(new Error('unrelated local failure')), false);
});

test('interrupted and malformed streams receive guidance without changing the original detail', () => {
  const socket = Object.assign(new Error('other side closed'), { code: 'UND_ERR_SOCKET' });
  assert.match(policy.providerFailureDetail(new TypeError('terminated', { cause: socket }), 'terminated'), /connection was interrupted[\s\S]*\n\nterminated$/);
  for (const name of ['AI_JSONParseError', 'AI_TypeValidationError']) {
    const error = Object.assign(new Error('JSON parsing failed'), { name });
    assert.match(policy.providerFailureDetail(new Error('wrapper', { cause: error }), 'JSON parsing failed'), /not valid OpenAI-compatible streaming data[\s\S]*JSON parsing failed$/);
  }
  assert.equal(policy.isProviderFailure(Object.assign(new Error('x'), { name: 'AI_JSONParseError' })), false, 'parse errors keep their existing ownership path');
});

test('network guidance follows exact transport codes through cyclic causes and leaves unknown failures alone', () => {
  for (const [code, expected] of [['CERT_HAS_EXPIRED', /certificate could not be verified/],
    ['ERR_TLS_CERT_ALTNAME_INVALID', /hostname and system date/], ['UND_ERR_HEADERS_TIMEOUT', /connection timed out/],
    ['UND_ERR_BODY_TIMEOUT', /connection timed out/], ['ECONNREFUSED', /server refused/], ['EAI_AGAIN', /DNS lookup temporarily/]]) {
    const cause = Object.assign(new Error('original evidence'), { code });
    const error = new Error('wrapper', { cause }); cause.cause = error;
    assert.match(policy.providerFailureDetail(error, 'original detail'), expected);
    assert.equal(cause.code, code); assert.equal(cause.message, 'original evidence');
  }
  const unknown = new Error('ENOTFOUND is text, not a transport code'); unknown.cause = unknown;
  assert.equal(policy.providerFailureDetail(unknown, 'original detail'), 'original detail');
  assert.match(policy.providerFailureDetail({ errors: [{ code: 'ECONNRESET' }] }, 'detail'), /connection was interrupted/);
});

test('real DNS and TLS failures keep useful diagnostics, one attempt and explicit successful recovery', async () => {
  let accepted = 0;
  const server = createServer((_, response) => { accepted++; response.end('recovered'); });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const base = `127.0.0.1:${server.address().port}`;
    for (const [url, expected] of [['http://openvision-provider-fixture.invalid', /hostname could not be resolved/],
      [`https://${base}`, /could not establish HTTPS/]]) {
      let attempts = 0;
      const submit = target => transport({ url: target, headers: { Authorization: 'Bearer secret-fixture-key' },
        body: { content: '{}', values: { model: 'failure-fixture' } }, abortSignal: AbortSignal.timeout(10000),
        fetch: (...args) => { attempts++; return fetch(...args); },
        successfulResponseHandler: async ({ response }) => ({ value: await response.text() }),
      });
      await assert.rejects(retry(() => submit(url), { maxRetries: 3, delayInMs: 1, backoffFactor: 1 }), error => {
        assert.match(policy.providerFailureDetail(error, error.message), expected);
        assert.equal(agentRetry(error), false);
        assert.ok(error.cause.code);
        assert.equal(error.url, url);
        assert.ok(!error.stack.includes('secret-fixture-key'));
        return true;
      });
      assert.equal(attempts, 1); assert.equal(accepted, 0);
      assert.equal((await submit(`http://${base}`)).value, 'recovered');
      assert.equal(attempts, 2); assert.equal(accepted, 1); accepted = 0;
    }
  } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
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
