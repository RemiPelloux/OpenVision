import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { agentReviewEntry, agentReviewOwner, joinAgentReviewAcceptance, installAgentReviewAcceptance } from './agent-review-customization.mjs';

const original = await readFile(new URL(agentReviewEntry, readableApp), 'utf8');
const patched = joinAgentReviewAcceptance(original);
const drain = () => new Promise(resolve => setImmediate(resolve));

// Execute the recovered acceptance methods with controlled registry/storage
// dependencies. This establishes sequencing, not native file-edit behavior.
function fixture(source = patched, descriptors = { root: ['a', 'b'], child: ['a', 'c'] }) {
  const owner = agentReviewOwner(source);
  const methods = ['acceptAllDiffs', 'acceptAll'].map(name => {
    const method = owner.body.body.find(node => node.key?.name === name);
    return source.slice(method.start, method.end);
  });
  const Class = runInNewContext(`(class { ${methods.join('\n')} })`, { Bte: {}, AggregateError });
  const pending = new Map(), calls = [], hooks = [];
  const service = Object.assign(new Class(), {
    analyticsService: { trackEvent() {} },
    composerDataService: {
      getHandleIfLoaded(id) { return descriptors[id] ? { id, data: {} } : undefined; },
      getLoadedSubComposerHandles() { return descriptors.child ? [{ id: 'child' }] : []; },
      getLastHumanBubbleId() { return 'human'; },
    },
    composerUtilsService: { async runCapabilitiesForProcess(...args) { hooks.push(args); } },
    composerCodeBlockService: { getAllPendingDiffDescriptors(handle) { return descriptors[handle.id].map(id => ({ id })); } },
    diffChangeSourceRegistry: { accept(id, options) {
      calls.push({ id, options });
      const deferred = Promise.withResolvers(); pending.set(id, deferred); return deferred.promise;
    } },
  });
  return { service, pending, calls, hooks };
}

test('recovered Keep All resolves before parked acceptance; patched consumer joins every diff', async () => {
  for (const [source, shouldSettleEarly] of [[original, true], [patched, false]]) {
    const f = fixture(source); let settled = false;
    const run = f.service.acceptAll('root').then(() => { settled = true; });
    await drain();
    assert.equal(settled, shouldSettleEarly);
    assert.deepEqual(f.calls.map(call => call.id), ['a', 'b', 'c']);
    assert.equal(f.hooks.length, 1);
    assert.ok(f.calls.every(call => call.options.sourceContext === 'composer'));
    f.pending.get('b').resolve(); f.pending.get('c').resolve(); await drain();
    assert.equal(settled, shouldSettleEarly);
    f.pending.get('a').resolve(); await run;
    assert.equal(settled, true);
  }
});

test('failed acceptance waits for remaining owned work and preserves the original error', async () => {
  const f = fixture(), error = new Error('parked restoration failed'); let settled = false;
  const run = f.service.acceptAll('root').finally(() => { settled = true; });
  const checked = assert.rejects(run, value => value === error);
  await drain(); f.pending.get('a').reject(error); await drain();
  assert.equal(settled, false);
  f.pending.get('b').resolve(); await drain(); assert.equal(settled, false);
  f.pending.get('c').resolve(); await checked; assert.equal(settled, true);
});

test('synchronous registry failure cannot abandon other acceptances; multiple failures are retained', async () => {
  const f = fixture(), synchronous = new Error('native failed'), asynchronous = new Error('restore failed');
  const accept = f.service.diffChangeSourceRegistry.accept;
  f.service.diffChangeSourceRegistry.accept = (id, options) => {
    if (id === 'a') throw synchronous;
    return accept(id, options);
  };
  let settled = false;
  const run = f.service.acceptAll('root').finally(() => { settled = true; });
  const checked = assert.rejects(run, error => {
    assert.ok(error instanceof AggregateError);
    assert.deepEqual([...error.errors], [synchronous, asynchronous]); return true;
  });
  await drain(); assert.deepEqual(f.calls.map(call => call.id), ['b', 'c']);
  f.pending.get('b').reject(asynchronous); await drain(); assert.equal(settled, false);
  f.pending.get('c').resolve(); await checked;
});

test('selection is complete before mutation, and missing/empty composers are harmless', async () => {
  const f = fixture(patched, { root: ['a'], child: ['b'] });
  const accept = f.service.diffChangeSourceRegistry.accept;
  f.service.diffChangeSourceRegistry.accept = (id, options) => {
    f.service.composerCodeBlockService.getAllPendingDiffDescriptors = () => { throw new Error('selection already mutated'); };
    return accept(id, options);
  };
  const run = f.service.acceptAll('root'); await drain();
  assert.deepEqual(f.calls.map(call => call.id), ['a', 'b']);
  for (const deferred of f.pending.values()) deferred.resolve(); await run;
  await f.service.acceptAll('missing');
  const empty = fixture(patched, { root: [] }); await empty.service.acceptAll('root');
  assert.equal(empty.calls.length, 0);
});

test('concurrent composers retain independent completion ownership', async () => {
  const f = fixture(patched, { root: ['a'], other: ['b'] });
  let rootDone = false, otherDone = false;
  const first = f.service.acceptAll('root').then(() => { rootDone = true; });
  const second = f.service.acceptAll('other').then(() => { otherDone = true; });
  await drain(); f.pending.get('b').resolve(); await second;
  assert.equal(otherDone, true); assert.equal(rootDone, false);
  f.pending.get('a').resolve(); await first; assert.equal(rootDone, true);
});

test('both recovered callers await acceptance and transformation fails closed on drift', () => {
  const owner = agentReviewOwner(patched);
  for (const name of ['acceptAll', '_applyWorktreeToCurrentBranchViaMerge']) {
    const method = owner.body.body.find(node => node.key?.name === name);
    assert.equal(method.value.async, true);
    assert.match(patched.slice(method.start, method.end), /await this\.acceptAllDiffs\(e, "composer"\);/);
  }
  assert.equal(joinAgentReviewAcceptance(patched), patched);
  for (const changed of [original + original,
    original.replace('s.has(l.id) || (s.add(l.id), this.diffChangeSourceRegistry.accept(l.id, o));', 'this.diffChangeSourceRegistry.accept(l.id, o);'),
    original.replace('async _applyWorktreeToCurrentBranchViaMerge(', '_applyWorktreeToCurrentBranchViaMerge('),
    original.replace('this.acceptAllDiffs(e, "composer");', 'this.otherAcceptance(e);')])
    assert.throws(() => joinAgentReviewAcceptance(changed));
});

test('installer is idempotent and preserves the first recovered backup', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-agent-review-'));
  try {
    const path = join(directory, 'source/app', agentReviewEntry);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installAgentReviewAcceptance(directory);
    assert.equal(await readFile(path, 'utf8'), patched);
    await installAgentReviewAcceptance(directory);
    assert.equal(await readFile(path, 'utf8'), patched);
    assert.equal(await readFile(join(directory, 'backups/agent-review', agentReviewEntry), 'utf8'), original);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
