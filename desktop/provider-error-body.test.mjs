import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { gzipSync } from 'node:zlib';
import { runInNewContext } from 'node:vm';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import * as policy from './provider-error-policy.js';
import { redactProviderErrors } from './provider-error-customization.mjs';

class ApiError extends Error {
  constructor(options) { super(options.message); Object.assign(this, options); }
}
const source = redactProviderErrors(await readFile(new URL('../../cursor/readable/app/extensions/cursor-agent-exec/dist/main.js', import.meta.url), 'utf8'));
const start = source.indexOf('({ errorSchema: e, errorToMessage: t, isRetryable: r }) =>');
const parsed = parseExpressionAt(source, start, { ecmaVersion: 'latest' });
const owner = parsed.type === 'SequenceExpression' ? parsed.expressions[0] : parsed;
const buildHandler = runInNewContext(`(${source.slice(owner.start, owner.end)})`, {
  Te: ApiError, qt: response => Object.fromEntries(response.headers), Kt: ({ text }) => JSON.parse(text),
  openvisionProviderErrors: policy,
});
const handler = buildHandler({ errorToMessage: value => value.error.message });

test('recovered response handler retains normal JSON details and limits decompressed error bytes', async () => {
  const normal = JSON.stringify({ error: { message: 'retry later 🦀' } });
  const server = createServer((request, response) => {
    response.writeHead(503, { 'content-type': 'application/json', 'x-request-id': 'bounded-error',
      ...(request.url === '/large' ? { 'content-encoding': 'gzip' } : {}) });
    response.end(request.url === '/large' ? gzipSync(Buffer.from('x'.repeat(1024 * 1024))) : normal);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    const response = await fetch(base);
    const result = await handler({ response, url: base, requestBodyValues: { model: 'test' } });
    assert.equal(result.value.message, 'retry later 🦀');
    assert.equal(result.value.responseBody, normal);
    const large = await fetch(base + '/large');
    await assert.rejects(handler({ response: large, url: base + '/large', requestBodyValues: { model: 'test' } }), error => {
      assert.equal(error.statusCode, 503);
      assert.equal(error.responseHeaders['x-request-id'], 'bounded-error');
      assert.equal(error.url, base + '/large');
      assert.equal(error.requestBodyValues.model, 'test');
      assert.equal(error.responseBodyFailure, 'size');
      assert.equal(error.responseBodyTruncated, true);
      assert.equal(error.responseBody.length, policy.errorBodyLimits.bytes);
      assert.ok(error.responseBodyBytesObserved > policy.errorBodyLimits.bytes);
      return true;
    });
    assert.equal(large.body.locked, false);
  } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
});

test('error-body budget counts UTF-8 bytes and preserves split characters at the exact limit', async () => {
  const encoded = new TextEncoder().encode('🦀');
  const chunks = [encoded.slice(0, 1), encoded.slice(1)];
  const response = new Response(new ReadableStream({ pull(controller) {
    if (chunks.length) controller.enqueue(chunks.shift()); else controller.close();
  } }), { status: 500 });
  assert.equal(await policy.readProviderErrorBody(response, facts => new ApiError(facts), { bytes: 4, timeoutMs: 1000 }), '🦀');
  assert.equal(response.body.locked, false);
});

test('stalled error details time out, preserve partial facts and close the actual HTTP socket', async () => {
  let closed = false;
  const server = createServer((_, response) => {
    response.writeHead(429); response.write('partial diagnostics');
    response.on('close', () => { closed = true; });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}`);
    await assert.rejects(policy.readProviderErrorBody(response, facts => new ApiError(facts), { bytes: 100, timeoutMs: 30 }), error => {
      assert.equal(error.responseBody, 'partial diagnostics');
      assert.equal(error.responseBodyFailure, 'timeout');
      assert.equal(error.statusCode, 429);
      return true;
    });
    const deadline = Date.now() + 1000;
    while (!closed && Date.now() < deadline) await new Promise(resolve => setTimeout(resolve, 10));
    assert.equal(closed, true); assert.equal(response.body.locked, false);
  } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
});

test('request cancellation interrupts error-body reading and preserves the abort reason', async () => {
  const abort = new DOMException('Stopped by user', 'AbortError');
  let controller;
  const response = new Response(new ReadableStream({ start(value) { controller = value; } }), { status: 500 });
  const read = policy.readProviderErrorBody(response, facts => new ApiError(facts));
  controller.error(abort);
  await assert.rejects(read, error => error === abort);
  assert.equal(response.body.locked, false);
});
