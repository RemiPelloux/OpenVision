import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { completionCancellation } from './completion-cancellation.mjs';

async function recoveredSource(variant) {
  const relative = `out/vs/workbench/workbench.${variant}.main.js`;
  for (const directory of ['../../cursor/readable/app', '../source/app']) {
    try { return await readFile(new URL(`${directory}/${relative}`, import.meta.url), 'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}

function executableMethods(source) {
  const start = source.lastIndexOf('class ', source.indexOf('async getStream({'));
  const owner = parseExpressionAt(source, start, { ecmaVersion: 'latest' });
  const methods = owner.body.body.filter(item => ['getStream', 'streamCpp'].includes(item.key?.name));
  const stream = methods.find(item => item.key.name === 'streamCpp').value;
  const buffer = stream.body.body.find(item => item.type === 'ForStatement').body.body
    .find(item => item.type === 'ForOfStatement');
  const sentinel = buffer.body.body.find(item => item.type === 'IfStatement' &&
    item.test?.type === 'BinaryExpression' && item.test.operator === '===')?.test.right.name;
  assert.ok(sentinel);
  const end = Symbol('complete');
  return { ...new Function(sentinel, `return ({${methods.map(item => source.slice(item.start, item.end)).join(',')}});`)(end), end };
}

function contextFixture(methods, pending) {
  return { ...methods, multidiffRestStreams: new Map(),
    _cppDiffingProviderBridgeService: { getDiffingProvider: () => ({}) },
    _everythingProviderService: {}, persistentStorage: () => ({}),
    debouncer: { shouldDebounce: async () => false },
    getPartialCppRequest: () => pending(),
  };
}

for (const variant of ['desktop', 'glass']) {
  const original = await recoveredSource(variant);
  const options = { skip: original === undefined ? 'Prepared or recovered workbench required' : false };
  const patched = original === undefined ? undefined : completionCancellation(original);
  const methods = patched === undefined ? undefined : executableMethods(patched);

  test(`${variant}: autocomplete transform is idempotent and rejects unknown owners`, options, () => {
    assert.equal(completionCancellation(patched), patched);
    assert.throws(() => completionCancellation('class Unknown {}'), /missing or ambiguous/);
  });

  test(`${variant}: already cancelled autocomplete does no context work`, options, async () => {
    const controller = new AbortController(); controller.abort();
    const context = contextFixture(methods, () => assert.fail('Context must not be requested'));
    context._cppDiffingProviderBridgeService.getDiffingProvider = () => assert.fail('No provider lookup');
    assert.equal(await context.getStream({ abortController: controller }), null);
  });

  test(`${variant}: cancellation during context preparation prevents dispatch`, options, async () => {
    const controller = new AbortController(), prepared = Promise.withResolvers(), entered = Promise.withResolvers();
    const context = contextFixture(methods, () => { entered.resolve(); return prepared.promise; });
    const request = context.getStream({ abortController: controller });
    await entered.promise;
    controller.abort(); prepared.resolve({});
    assert.equal(await request, null, 'Must exit before workspace ID and provider dispatch');
  });

  test(`${variant}: cancellation while flush is pending discards its result`, options, async () => {
    const controller = new AbortController(), pending = Promise.withResolvers();
    const iterator = methods.streamCpp(controller, { flushCpp: () => pending.promise }, 'request');
    const next = iterator.next(); controller.abort();
    pending.resolve({ type: 'success', modelInfo: {}, buffer: ['stale', methods.end] });
    assert.deepEqual(await next, { value: undefined, done: true });
  });

  test(`${variant}: cancellation between buffered chunks stops further delivery`, options, async () => {
    const controller = new AbortController();
    const iterator = methods.streamCpp(controller, {
      flushCpp: async () => ({ type: 'success', buffer: ['first', 'stale', methods.end] }),
    }, 'request');
    assert.deepEqual((await iterator.next()).value, { case: 'text', text: 'first' });
    controller.abort();
    assert.deepEqual(await iterator.next(), { value: undefined, done: true });
  });

  test(`${variant}: normal completion and provider failure retain their behavior`, options, async () => {
    const controller = new AbortController();
    const events = await Array.fromAsync(methods.streamCpp(controller, {
      flushCpp: async () => ({ type: 'success', modelInfo: { isMultidiffModel: false }, buffer: ['code', methods.end] }),
    }, 'request'));
    assert.deepEqual(events, [{ case: 'modelInfo', modelInfo: { isMultidiffModel: false } }, { case: 'text', text: 'code' }]);
    await assert.rejects(methods.streamCpp(controller, {
      flushCpp: async () => ({ type: 'failure', reason: 'provider unavailable' }),
    }, 'request').next(), /provider unavailable/);
  });
}
