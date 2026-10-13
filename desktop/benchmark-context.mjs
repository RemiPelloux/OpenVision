import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { setImmediate } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import { contextSource, contextClass, createContext, trace } from './context-work-fixture.mjs';

if (!globalThis.gc) throw new Error('Run with --expose-gc for comparable heap samples.');
const source = await contextSource();
if (!source) throw new Error('Recovered request-context source is required.');
const folderCount = 2000, repositoryCount = 20;
const paths = Array.from({ length: folderCount }, (_, index) => `/workspace/${index}`);

async function measure(optimized) {
  let reads = 0, active = 0, peakActive = 0, sampledHeap = 0;
  const read = async (_trace, _git, path) => {
    reads++; active++; peakActive = Math.max(peakActive, active);
    sampledHeap = Math.max(sampledHeap, process.memoryUsage().heapUsed);
    await setImmediate(); active--;
    return path;
  };
  const Context = contextClass(source, { status: read, branch: read }, optimized);
  const context = createContext(Context, paths);
  paths.forEach((path, index) => context.cachedWorkspaces.set(path, { repoPath: `/repo/${index % repositoryCount}` }));
  globalThis.gc();
  const before = process.memoryUsage().heapUsed, started = performance.now();
  const result = await context.collectWorkspaceCaches(trace, { waitForWorkspaceCache: true });
  const elapsedMs = performance.now() - started;
  sampledHeap = Math.max(sampledHeap, process.memoryUsage().heapUsed);
  assert.equal(result.gitRepoInfoComplete, true); assert.equal(result.gitRepos.length, folderCount);
  result.gitRepos.forEach((repo, index) => {
    assert.equal(repo.path, `/repo/${index % repositoryCount}`);
    assert.equal(repo.status, repo.path); assert.equal(repo.branchName, repo.path);
  });
  context.dispose();
  return { reads, peakActiveReads: peakActive, sampledHeapGrowthMiB: (sampledHeap - before) / 1024 ** 2,
    elapsedMs, returnedRows: result.gitRepos.length };
}

const result = { node: process.version, platform: process.platform, architecture: process.arch,
  workload: { folderCount, repositoryCount, provider: 'synthetic asynchronous Git readers; recovered collector' },
  before: await measure(false), after: await measure(true),
  limits: 'Sampled JS heap, not exact peak or whole-application RAM. No real Git process timing.' };
const logs = new URL('../logs/', import.meta.url);
await mkdir(logs, { recursive: true });
const output = new URL('context-performance.json', logs);
await writeFile(output, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
console.log(`Saved: ${fileURLToPath(output)}`);
