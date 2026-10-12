import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeContext } from './context-customization.mjs';

async function originalContextSource() {
  const relative = 'extensions/cursor-agent-exec/dist/main.js';
  for (const directory of ['../backups/request-context', '../build/recovery/readable/app', '../../cursor/readable/app']) {
    try {
      const text = await readFile(new URL(`${directory}/${relative}`, import.meta.url), 'utf8');
      if (!text.includes('/* OpenVision demand-driven request context')) return text;
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}
const original = await originalContextSource();
const sourceOptions = { skip: original === undefined ? 'No unmodified recovered request-context bundle or original backup available' : false };

async function createContext() {
  const input = original;
  const text = customizeContext(input);
  assert.equal(customizeContext(text), text);
  const owner = parseExpressionAt(text, text.indexOf('class Nc {'), { ecmaVersion: 'latest' });
  const trace = { withName() { return this; }, spanContext() { return { traceId: 'test' }; } };
  const Context = new Function('ye', 'C', 'wc', 'bc', `return (${text.slice(owner.start, owner.end)});`)(
    { q6: () => trace }, { VI: () => ({ ctx: trace, span: trace }) }, (_scope, value) => value, () => {});
  return new Context({}, null, null, {}, {}, {}, {}, ['/project']);
}

test('real request-context owner coalesces edits without work until demand and releases caches', sourceOptions, async () => {
  const context = await createContext();
  let calls = 0;
  context.computeGlobalCache = async () => ({ revision: ++calls });
  for (let i = 0; i < 1000; i++) context.onWorkspacePathChanged(`/project/file${i}.js`);
  assert.equal(calls, 0, 'File edits must not schedule a full context rebuild');
  assert.equal(context.cacheDebounceTimeout, undefined);
  assert.deepEqual(await context.rebuildGlobalCache(), { revision: 1 });
  context.lastGoodGlobalCache = { revision: 1 };
  context.rebuildAllCaches(); // Rules change uses the same invalidation boundary.
  assert.equal(context.globalCache, undefined);
  assert.equal(context.lastGoodGlobalCache, undefined, 'Hot-path consumer must not reuse stale rules');
  assert.deepEqual(await context.rebuildGlobalCache(), { revision: 2 });
  context.cachedWorkspaces.set('/project', {});
  let disposed = false;
  context.fileWatcher = { dispose() { disposed = true; } };
  context.dispose();
  assert.equal(disposed, true);
  assert.equal(context.cachedWorkspaces.size, 0);
  assert.equal(context.inFlightWorkspaceWarms.size, 0);
  assert.equal(context.globalCache, undefined);
  assert.throws(() => context.rebuildGlobalCache(), /disposed/);
  await assert.rejects(context.computeCachedRequestContext({}, {}), /disposed/);
});

test('pending workspace warm retains ownership until settled and cannot repopulate after disposal', sourceOptions, async () => {
  const context = await createContext();
  const waiting = Promise.withResolvers();
  let calls = 0;
  context.gitExecutor = { exec() { calls++; return waiting.promise; } };
  const trace = { withName() { return this; }, spanContext() { return { traceId: 'test' }; } };
  const first = context.ensureWorkspaceCacheWarm(trace, '/project');
  assert.equal(context.ensureWorkspaceCacheWarm(trace, '/project'), first);
  context.dispose();
  assert.equal(context.inFlightWorkspaceWarms.size, 1, 'Unsettled work must retain its owner');
  await context.ensureWorkspaceCacheWarm(trace, '/other');
  assert.equal(calls, 1, 'Disposed owner must not start new git processes');
  waiting.reject(new Error('No repository'));
  await first;
  assert.equal(context.inFlightWorkspaceWarms.size, 0);
  assert.equal(context.cachedWorkspaces.size, 0);
});

test('global cache invalidation during a pending build cannot revive stale last-good rules', sourceOptions, async () => {
  const context = await createContext();
  context.reduceContextHotPath = true;
  const old = Promise.withResolvers();
  let revision = 0;
  context.computeGlobalCache = () => ++revision === 1 ? old.promise : Promise.resolve({ rules: ['new'] });
  const first = context.rebuildGlobalCache();
  context.rebuildAllCaches();
  const current = context.rebuildGlobalCache();
  old.resolve({ rules: ['old'] });
  await Promise.all([first, current]);
  assert.deepEqual(context.lastGoodGlobalCache, { rules: ['new'] });
  assert.equal(context.globalCache, current);
  context.dispose();
  assert.equal(context.globalCacheTraceId, undefined);
});
