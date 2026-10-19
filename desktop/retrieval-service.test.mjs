import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdir, mkdtemp, open, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { RetrievalIndex } from './retrieval-index.mjs';
import { RetrievalService, indexDirectory, workspaceId } from './retrieval-service.mjs';
import { createScaleFixture } from './retrieval-scale-fixture.mjs';
import { retrievalRuntime } from './retrieval-runtime.mjs';
import budgets from './retrieval-budgets.json' with { type: 'json' };

// OV-504: lifecycle of the single-owner worker and its database.
const runtime = retrievalRuntime();
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(check, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const value = await check();
    if (value) return value;
    if (Date.now() > deadline) throw new Error('Condition not reached');
    await wait(20);
  }
}

async function fixture(files = 3000) {
  const directory = await mkdtemp(join(tmpdir(), 'ov-retrieval-service-'));
  const root = join(directory, 'project'), profile = join(directory, 'profile');
  await createScaleFixture(root, { files });
  return { directory, root, profile, cleanup: () => rm(directory, { recursive: true, force: true }) };
}
const service = (fx, options = {}) => new RetrievalService({ userDataDirectory: fx.profile, root: fx.root, ...runtime, ...options });
const committed = path => { const database = new DatabaseSync(path, { readOnly: true }); try { return database.prepare('SELECT count(*) AS n FROM files').get().n; } finally { database.close(); } };
const quickCheck = path => { const database = new DatabaseSync(path); try { return database.prepare('PRAGMA quick_check').get().quick_check; } finally { database.close(); } };

test('storage is versioned and profile-owned', async () => {
  const fx = await fixture(10);
  try {
    const directory = await indexDirectory(fx.profile, fx.root);
    assert.equal(directory, join(fx.profile, 'openvision/retrieval/v1', await workspaceId(fx.root)));
    const owner = service(fx);
    await owner.search('order');
    assert.ok((await stat(join(directory, 'index.sqlite'))).isFile());
    assert.match((await readdir(directory)).join(','), /workspace\.json/);
    const database = new DatabaseSync(join(directory, 'index.sqlite'), { readOnly: true });
    assert.equal(database.prepare('PRAGMA journal_mode').get().journal_mode, 'wal');
    database.close();
    await owner.dispose();
  } finally { await fx.cleanup(); }
});

test('cancel stops between batches within budget and the next activation resumes without a rebuild', async () => {
  const fx = await fixture();
  try {
    const owner = service(fx);
    await owner.activate();
    await until(async () => (await owner.status()).counters?.batches >= 1);
    const canceled = await owner.cancel();
    assert.ok(canceled.latencyMs < budgets.lifecycle.cancelLatencyMs, `cancel latency ${canceled.latencyMs} ms`);
    const status = await owner.status();
    const firstReads = status.counters.reads;
    assert.ok(firstReads < 3001, 'indexing stopped before the end');
    await owner.release('test');
    const path = join(await owner.directory(), 'index.sqlite');
    assert.equal(quickCheck(path), 'ok');
    const stored = committed(path);
    const resumed = service(fx);
    await resumed.activate();
    await resumed.indexing;
    const counters = (await resumed.status()).counters;
    assert.equal(counters.fullRebuilds, 0);
    assert.equal(counters.reads, 3001 - stored, 'only uncommitted files are read again');
    assert.equal(committed(path), 3001);
    await resumed.dispose();
  } finally { await fx.cleanup(); }
});

test('pause holds the worker between batches and resume completes', async () => {
  const fx = await fixture(2000);
  try {
    const owner = service(fx);
    await owner.activate();
    await until(async () => (await owner.status()).counters?.batches >= 1);
    await owner.pause();
    await wait(200);
    const held = (await owner.status()).counters.reads;
    await wait(400);
    assert.equal((await owner.status()).counters.reads, held, 'no reads while paused');
    assert.equal((await owner.status()).status.paused, true);
    const answer = await owner.search('order invoice', { waitMs: 0 });
    assert.equal(answer.indexing, 'partial', 'search is answered while paused');
    await owner.resume();
    await owner.indexing;
    assert.equal((await owner.status()).counters.reads, 2001);
    await owner.dispose();
  } finally { await fx.cleanup(); }
});

test('kill -9 during indexing leaves a valid database that resumes by reconciling', async () => {
  const fx = await fixture();
  try {
    const store = join(fx.directory, 'store');
    const script = `import { RetrievalIndex } from ${JSON.stringify(new URL('./retrieval-index.mjs', import.meta.url).href)};
      const index = new RetrievalIndex({ root: ${JSON.stringify(fx.root)}, directory: ${JSON.stringify(store)}, rgPath: ${JSON.stringify(runtime.rgPath)} });
      await index.open(); await index.sync(); process.exit(3);`;
    const child = spawn(process.execPath, ['--input-type=module', '-e', script], { stdio: 'ignore' });
    const exited = once(child, 'exit');
    await until(async () => { try { return committed(join(store, 'index.sqlite')) >= 400; } catch { return false; } });
    // Signal only the child this test spawned, through its own handle.
    child.kill('SIGKILL');
    const [code, signal] = await exited;
    assert.deepEqual([code, signal], [null, 'SIGKILL']);
    const index = new RetrievalIndex({ root: fx.root, directory: store, rgPath: runtime.rgPath });
    const opened = await index.open();
    assert.equal(opened.rebuildReason, undefined, 'WAL recovery keeps every committed batch');
    assert.equal(opened.complete, false, 'interrupted sync is recorded as incomplete');
    const stored = index.store.counts().files;
    assert.ok(stored >= 400 && stored < 3001);
    await index.sync();
    assert.equal(index.counters.reads, 3001 - stored);
    assert.equal(index.counters.fullRebuilds, 0);
    assert.equal(index.store.counts().files, 3001);
    assert.equal(index.store.meta('sync_state'), 'complete');
    index.close();
  } finally { await fx.cleanup(); }
});

test('a corrupt database is quarantined and rebuilt', async () => {
  const fx = await fixture(50);
  try {
    const store = join(fx.directory, 'store');
    let index = new RetrievalIndex({ root: fx.root, directory: store, rgPath: runtime.rgPath });
    await index.open(); await index.sync(); index.close();
    const handle = await open(join(store, 'index.sqlite'), 'r+');
    await handle.write(Buffer.alloc(4096, 0x5a), 0, 4096, 0);
    await handle.close();
    const logs = [];
    index = new RetrievalIndex({ root: fx.root, directory: store, rgPath: runtime.rgPath, log: message => logs.push(message) });
    const opened = await index.open();
    assert.equal(opened.rebuildReason, 'corrupt');
    assert.deepEqual(index.counters.rebuildReasons, ['corrupt']);
    assert.match(index.store.quarantined, /store\.corrupt-\d+$/);
    assert.ok((await stat(join(index.store.quarantined, 'index.sqlite'))).isFile(), 'the corrupt file is kept for inspection');
    assert.ok(logs.some(message => message.includes('failed its integrity check')));
    await index.sync();
    assert.equal(index.store.counts().files, 51);
    assert.ok(index.search('order').results.length > 0);
    index.close();
  } finally { await fx.cleanup(); }
});

test('a newer schema builds a new versioned directory and removes older ones when complete', async () => {
  const fx = await fixture(20);
  try {
    const id = await workspaceId(fx.root);
    const old = join(fx.profile, 'openvision/retrieval/v0', id);
    await mkdir(old, { recursive: true });
    await writeFile(join(old, 'index.sqlite'), 'schema 0 placeholder');
    const owner = service(fx);
    await owner.activate();
    await owner.indexing;
    await until(async () => !(await stat(old).catch(() => undefined)));
    await owner.dispose();
  } finally { await fx.cleanup(); }
});

test('idle release closes the worker; changes made while released apply on reactivation', async () => {
  const fx = await fixture(200);
  try {
    const logs = [];
    const owner = service(fx, { idleMs: 300, log: message => logs.push(message) });
    assert.ok((await owner.search('order invoice')).results.length);
    await until(() => owner.releases === 1);
    assert.equal(owner.worker, undefined);
    assert.ok(logs.includes('Retrieval worker released (idle)'));
    const added = join(fx.root, 'pkg0/mod0/released-marker.ts');
    await writeFile(added, 'export function releasedWorkerMarker() { return 1; }\n');
    owner.notify([added]);
    assert.equal(owner.worker, undefined, 'a change does not restart a released worker');
    const answer = await owner.search('released worker marker');
    assert.equal(answer.results[0]?.path, 'pkg0/mod0/released-marker.ts');
    const counters = (await owner.status()).counters;
    assert.deepEqual([owner.activations, counters.fullSyncs, counters.reads, counters.enumerations], [2, 0, 1, 0]);
    await until(() => owner.releases === 2);
    await owner.dispose();
    await assert.rejects(owner.search('order'), /disposed/);
  } finally { await fx.cleanup(); }
});

test('Delete and Rebuild remove the index directory and rebuild from scratch', async () => {
  const fx = await fixture(30);
  try {
    const owner = service(fx);
    await owner.search('order');
    const directory = await owner.directory();
    await owner.deleteIndex();
    assert.equal(await stat(directory).catch(() => undefined), undefined);
    await owner.rebuild();
    const counters = (await owner.status()).counters;
    assert.equal(counters.reads, 31);
    assert.ok((await owner.search('order')).results.length);
    await owner.dispose();
  } finally { await fx.cleanup(); }
});
