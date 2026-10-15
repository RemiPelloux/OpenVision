import test from 'node:test';
import assert from 'node:assert/strict';
import { debounceCompletionPreparation } from './completion-preparation.mjs';
import { preparationSource, preparationMethod, preparationFixture, preparationDebouncer } from './completion-preparation-fixture.mjs';

for (const variant of ['desktop', 'glass']) {
  const source = await preparationSource(variant);
  const patched = debounceCompletionPreparation(source, variant);
  const { method, nonlocal, HookDenied } = preparationMethod(patched, variant);

  test(`${variant}: preparation transform is idempotent and fails closed`, () => {
    assert.equal(debounceCompletionPreparation(patched, variant), patched);
    assert.throws(() => debounceCompletionPreparation('class Missing {}', variant), /missing or ambiguous/);
    assert.throws(() => debounceCompletionPreparation(source + 'async getStream({', variant), /ambiguous/);
    assert.throws(() => debounceCompletionPreparation(source, 'unknown'), /Unknown/);
    assert.throws(() => debounceCompletionPreparation(source.replace('async immediatelyFireCppFromTrigger(',
      'async changedPreparation('), variant), /contract changed/);
  });

  test(`${variant}: burst reads document and executes hook only for winner`, async () => {
    const f = preparationFixture(method, { debounce: async id => id !== 'winner' });
    await Promise.all(Array.from({ length: 100 }, (_, i) => f.run(String(i))));
    assert.equal(f.counts.reads, 0); assert.equal(f.counts.hooks, 0); assert.equal(f.counts.runCppCalls, 0);
    await f.run('winner');
    assert.equal(f.counts.reads, 1); assert.equal(f.counts.hooks, 1); assert.equal(f.counts.runCppCalls, 1);
    assert.equal(f.counts.debounces, 102, 'The dispatch check must remain after preparation');
  });

  test(`${variant}: actual recovered debouncer suppresses burst before preparation`, async () => {
    const clock = { now: 0, pending: [] }, debouncer = preparationDebouncer(source, clock);
    const f = preparationFixture(method, { debounce: id => debouncer.shouldDebounce(id) });
    const runs = [];
    for (let i = 0; i < 101; i++) {
      clock.now++;
      const request = debouncer.runRequest();
      runs.push(f.run(request.generationUUID, request.abortController));
    }
    assert.equal(f.counts.reads, 0, 'No document is materialized while debounce waits');
    clock.now += 400;
    for (const callback of clock.pending.splice(0)) callback();
    await Promise.all(runs);
    assert.equal(f.counts.reads, 1); assert.equal(f.counts.hooks, 1); assert.equal(f.counts.runCppCalls, 1);
  });

  test(`${variant}: cancelled, changed, disposed or replaced document skips preparation`, async () => {
    for (const change of ['abort', 'version', 'dispose', 'replace']) {
      const waiting = Promise.withResolvers(), entered = Promise.withResolvers();
      const f = preparationFixture(method, { debounce: () => { entered.resolve(); return waiting.promise; } });
      f.context.streams = [{ generationUUID: 'id' }, { generationUUID: 'other' }];
      const controller = new AbortController(), run = f.run('id', controller);
      await entered.promise;
      if (change === 'abort') controller.abort();
      if (change === 'version') f.model.version++;
      if (change === 'dispose') f.model.disposed = true;
      if (change === 'replace') f.editor.model = {};
      waiting.resolve(false); await run;
      assert.equal(f.counts.reads, 0, change); assert.equal(f.counts.hooks, 0, change);
      assert.equal(controller.signal.aborted, true, change);
      assert.deepEqual(f.context.streams, [{ generationUUID: 'other' }], change);
    }
    const controller = new AbortController(); controller.abort();
    const f = preparationFixture(method); await f.run('id', controller);
    assert.deepEqual(f.counts, { reads: 0, hooks: 0, runCppCalls: 0, debounces: 0 });
  });

  test(`${variant}: hook permission denial and dispatch debounce remain effective`, async () => {
    const denied = preparationFixture(method);
    denied.context.executeBeforeTabFileReadHook = async () => { throw new HookDenied(); };
    await denied.run(); assert.equal(denied.counts.runCppCalls, 0);
    let superseded = false;
    const slow = preparationFixture(method, { debounce: async () => superseded });
    slow.context.executeBeforeTabFileReadHook = async () => { superseded = true; };
    await slow.run(); assert.equal(slow.counts.debounces, 2);
    const legacy = preparationFixture(nonlocal); await legacy.run();
    assert.equal(legacy.counts.reads, 1); assert.equal(legacy.counts.debounces, 1);
  });
}
