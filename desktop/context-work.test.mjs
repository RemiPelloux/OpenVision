import test from 'node:test';
import assert from 'node:assert/strict';
import { setImmediate } from 'node:timers/promises';
import work from './context-work.cjs';
import { customizeContextWork } from './context-work-customization.mjs';
import { contextSource, contextClass, createContext, trace } from './context-work-fixture.mjs';

const source = await contextSource();
const options = { skip: source === undefined ? 'Original recovered context source is required' : false };

test('recovered collector reads each exact repository once per collection and preserves folder order', options, async () => {
  const calls = [], paths = Array.from({ length: 60 }, (_, index) => `/project/${index}`);
  let revision = 1;
  const Context = contextClass(source, {
    status: async (_trace, _git, path) => { calls.push(['status', path]); return `status-${revision}`; },
    branch: async (_trace, _git, path) => { calls.push(['branch', path]); return `branch-${revision}`; },
  });
  const context = createContext(Context, paths);
  paths.forEach((path, index) => context.cachedWorkspaces.set(path, { repoPath: `/repo/${index % 2}`, remoteUrl: 'remote' }));
  const first = await context.collectWorkspaceCaches(trace, { waitForWorkspaceCache: true });
  assert.equal(calls.length, 4, '60 folders in two repos need two status and two branch queries');
  assert.equal(first.gitRepoInfoComplete, true);
  assert.deepEqual(first.gitRepos.map(repo => repo.path), paths.map((_, index) => `/repo/${index % 2}`));
  assert.ok(first.gitRepos.every(repo => repo.status === 'status-1' && repo.isOriginBacked));
  revision++;
  const next = await context.collectWorkspaceCaches(trace, { waitForWorkspaceCache: true });
  assert.equal(calls.length, 8, 'Next collection must refresh status and branch');
  assert.ok(next.gitRepos.every(repo => repo.status === 'status-2'));
});

test('tracked Git state avoids fallback requests and failed reads retry on the next collection', options, async () => {
  let calls = 0, fail = true, trackedCalls = 0;
  const Context = contextClass(source, {
    status: async () => { calls++; if (fail) throw new Error('Git unavailable'); return 'clean'; },
    branch: async () => 'main',
  });
  const context = createContext(Context, ['/a', '/b', '/outside']);
  for (const path of ['/a', '/b']) context.cachedWorkspaces.set(path, { repoPath: '/repo' });
  context.cachedWorkspaces.set('/outside', {});
  context.grepProvider.getTrackedState = async () => { trackedCalls++; return { '/a': { gitStatus: 'tracked', gitBranchName: 'other' } }; };
  const first = await context.collectWorkspaceCaches(trace, {});
  assert.deepEqual(first.gitRepos.map(repo => repo.status), ['tracked', undefined]);
  assert.equal(calls, 1); assert.equal(trackedCalls, 1);
  fail = false;
  const second = await context.collectWorkspaceCaches(trace, {});
  assert.deepEqual(second.gitRepos.map(repo => repo.status), ['tracked', 'clean']);
  assert.equal(calls, 2);
});

test('collector bounds cold foreground and background warming and stops queued work on disposal', options, async () => {
  for (const waitForWorkspaceCache of [true, false]) {
    const Context = contextClass(source, { status: async () => '', branch: async () => '' });
    const context = createContext(Context, Array.from({ length: 1000 }, (_, i) => `/p/${i}`));
    const pending = Promise.withResolvers();
    let calls = 0;
    context.gitExecutor = { exec() { calls++; return pending.promise; } };
    assert.equal(calls, 0, 'Constructing an Agent must not warm a workspace');
    const result = context.collectWorkspaceCaches(trace, { waitForWorkspaceCache });
    const observed = result.then(value => ({ value }), error => ({ error }));
    await setImmediate();
    assert.equal(calls, 3, 'Only three folders may warm before the first finishes');
    if (!waitForWorkspaceCache) {
      assert.equal((await observed).value.gitRepoInfoComplete, false);
      assert.equal((await context.collectWorkspaceCaches(trace, {})).gitRepoInfoComplete, false);
      assert.equal(calls, 3, 'Repeated nonblocking requests share the background warm batch');
    }
    context.dispose(); pending.reject(new Error('No repository'));
    await setImmediate();
    if (waitForWorkspaceCache) assert.match((await observed).error.message, /disposed/);
    assert.equal(calls, 3); assert.equal(context.inFlightWorkspaceWarms.size, 0);
    assert.equal(context.cachedWorkspaces.size, 0);
    await assert.rejects(context.collectWorkspaceCaches(trace, {}), /disposed/);
  }
});

test('bounded workers drain active work on failure without launching the remaining queue', async () => {
  const owner = { workspacePaths: [0, 1, 2, 3, 4, 5] }, pending = Promise.withResolvers();
  let active = 0, calls = 0, settled = false;
  const result = work.mapWorkspaces(owner, async index => {
    calls++; active++;
    try { if (!index) throw new Error('read failed'); await pending.promise; return index; }
    finally { active--; }
  });
  const observed = result.catch(error => { settled = true; return error; });
  await setImmediate(); assert.equal(calls, 3); assert.equal(settled, false);
  pending.resolve(); assert.match((await observed).message, /read failed/);
  assert.equal(active, 0); assert.equal(calls, 3);
});

test('workspace patch upgrades existing customization, repeats safely and rejects changed owners', options, () => {
  const patched = customizeContextWork(source);
  assert.equal(customizeContextWork(patched), patched);
  assert.throws(() => customizeContextWork(source.replace('this.workspacePaths.map(async', 'this.otherPaths.map(async')), /fan-out/);
  assert.throws(() => customizeContextWork('class Different {}'), /owner/);
});
