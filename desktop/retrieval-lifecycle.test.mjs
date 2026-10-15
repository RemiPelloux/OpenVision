import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { ownRetrievalInitialization, retrievalOwner, retrievalEntry, installRetrievalOwnership } from './retrieval-lifecycle-customization.mjs';

const original = await readFile(new URL(retrievalEntry, readableApp), 'utf8');
const patched = ownRetrievalInitialization(original);
const drain = () => new Promise(resolve => setImmediate(resolve));

// Execute the recovered owner; only its host/native dependencies are controlled.
// These races establish owner behavior, not native index quality or networking.
function fixture(source = patched) {
  const clients = [], gates = [], excludes = [], configs = [], snapshots = [], errors = [];
  const pending = list => { const value = Promise.withResolvers(); list.push(value); return value.promise; };
  let folders = [{ uri: { fsPath: 'project-A' } }], registrations = 0;
  const emitter = () => ({ fire(value) { snapshots.push(value); }, dispose() {} });
  const api = { workspace: { get workspaceFolders() { return folders; } }, env: { sessionId: 'fixture' },
    cursor: { checkFeatureGate: () => pending(gates), indexingGrepEnabled: () => true,
      getSearchExcludes: () => pending(excludes), getDynamicConfigValue: () => pending(configs), logStructuredInfo() {} } };
  class GrepClient {
    constructor(roots, options) { this.roots = roots; this.options = options; this.disposed = false; clients.push(this); }
    onTrackedStateInvalidated() { return 1; }
    offTrackedStateInvalidated() {}
    async getTrackedState() { return null; }
    dispose() { this.disposed = true; }
  }
  const owner = retrievalOwner(source);
  const Class = runInNewContext(`(${source.slice(owner.start, owner.end)})`, {
    $e: api, a: { GrepClient }, Vt: { info() {}, trace() {}, debug() {}, error(...items) { errors.push(items); } },
    performance, setTimeout, clearTimeout, yde: 'fixture', vde: {},
  });
  const service = Object.assign(Object.create(Class.prototype), {
    _externalGitIndexes: new Map(), _externalGitRootHits: new Map(), _gitRootDiscoveryCache: new Map(),
    _disposables: [], _trackedStateSnapshotPushVersion: 0, _crepectlPath: 'fixture-helper',
    extensionStartedAt: performance.now(), _onDidInvalidateTrackedState: emitter(),
    _onDidUpdateTrackedStateSnapshotEmitter: emitter(), _onDidResetTrackedStateSnapshot: emitter(),
    _fallbackMonitor: { recordInit() {}, setIndexStatusProvider() {} },
    fileSystemWatcherService: { registerClient() { registrations++; return { dispose() { registrations--; } }; } },
  });
  return { service, clients, gates, excludes, configs, snapshots, errors, registrations: () => registrations,
    switchProject(name) { folders = [{ uri: { fsPath: name } }]; service.disposeGrepClient(); service.resetTrackedStateSnapshot(); } };
}

async function begin(f, reason = 'fixture') {
  const run = f.service.initializeGrepClient(reason);
  f.gates.at(-1).resolve(true); await drain();
  return { run };
}

async function finish(f) {
  f.excludes.at(-1).resolve([]); await drain();
  f.configs.at(-1).resolve({ max_in_memory_documents: 123 }); await drain();
}

test('original owner reproduces obsolete workspace replacing the current index; patch rejects it', async () => {
  for (const [source, expected] of [[original, 'project-A'], [patched, 'project-B']]) {
    const f = fixture(source), first = await begin(f);
    f.switchProject('project-B');
    const second = await begin(f); await finish(f); await second.run;
    f.excludes[0].resolve([]); await drain();
    if (source === original) { f.configs.at(-1).resolve({}); await drain(); }
    await first.run;
    assert.equal(f.service.getGrepClient().roots[0].path, expected);
    assert.equal(f.clients.length, source === original ? 2 : 1);
    assert.equal(f.registrations(), 1);
    f.service.dispose(); assert.equal(f.registrations(), 0);
    assert.ok(f.clients.every(client => client.disposed));
  }
});

for (const stage of ['gate', 'excludes', 'config']) {
  test(`dispose during ${stage} prevents late client/watcher creation and subsequent reinitialization`, async () => {
    const f = fixture(), run = f.service.initializeGrepClient('fixture');
    if (stage !== 'gate') { f.gates[0].resolve(true); await drain(); }
    if (stage === 'config') { f.excludes[0].resolve([]); await drain(); }
    f.service.dispose();
    ({ gate: f.gates, excludes: f.excludes, config: f.configs })[stage][0].resolve(stage === 'gate' ? true : []);
    await run; await drain();
    assert.equal(f.clients.length, 0); assert.equal(f.registrations(), 0);
    assert.equal(f.service._grepClientInitInFlight, false);
    await f.service.initializeGrepClient('afterDispose');
    assert.equal(f.gates.length, 1);
  });
}

test('superseded gate and config completions cannot replace current client or publish stale snapshots', async () => {
  for (const stage of ['gate', 'config']) {
    const f = fixture(), first = f.service.initializeGrepClient('old');
    if (stage === 'config') {
      f.gates[0].resolve(true); await drain(); f.excludes[0].resolve([]); await drain();
    }
    f.switchProject('project-B');
    const second = await begin(f); await finish(f); await second.run;
    const snapshots = f.snapshots.length;
    (stage === 'gate' ? f.gates[0] : f.configs[0]).resolve(stage === 'gate' ? false : {});
    await first;
    assert.equal(f.service.getGrepClient().roots[0].path, 'project-B');
    assert.equal(f.clients.length, 1); assert.equal(f.snapshots.length, snapshots);
    f.service.dispose();
  }
});

test('stale failure leaves newer initialization active and does not publish a failure', async () => {
  const f = fixture(), first = await begin(f);
  f.switchProject('project-B'); const second = await begin(f);
  f.excludes[0].reject(new Error('old excludes failed')); await first.run;
  assert.equal(f.service._grepClientInitInFlight, true);
  assert.equal(f.errors.length, 0);
  await finish(f); await second.run;
  assert.equal(f.service._grepClientInitInFlight, false);
  f.service.dispose();
});

test('disabled indexing releases the previous client; gate rejection settles the owned attempt', async () => {
  const f = fixture(), first = await begin(f); await finish(f); await first.run;
  assert.equal(f.service.getGrepClient().options.maxInMemoryDocuments, 123);
  const disabled = f.service.initializeGrepClient('disabled'); f.gates.at(-1).resolve(false); await disabled;
  assert.equal(f.clients[0].disposed, true); assert.equal(f.registrations(), 0);
  assert.equal(f.service.getGrepClient(), undefined);
  const failed = f.service.initializeGrepClient('failure'); f.gates.at(-1).reject(new Error('gate unavailable')); await failed;
  assert.equal(f.errors.length, 1); assert.equal(f.service._grepClientInitInFlight, false);
  f.service.dispose();
});

test('patch is idempotent and refuses ambiguous or changed producing contracts', () => {
  assert.equal(ownRetrievalInitialization(patched), patched);
  for (const changed of [original + original, original.replace('instant_grep_indexing', 'changed_gate'),
    original.replace('await this.resolveMaxInMemoryDocuments_();', 'await this.otherConfig();')])
    assert.throws(() => ownRetrievalInitialization(changed), /Retrieval/);
});

test('failed native disposal retains the owned client and prevents late initialization', async () => {
  const f = fixture(), first = await begin(f); await finish(f); await first.run;
  const client = f.service.getGrepClient(), dispose = client.dispose;
  client.dispose = () => { throw new Error('native disposal failed'); };
  assert.throws(() => f.service.dispose(), /native disposal failed/);
  assert.equal(f.service.getGrepClient(), client);
  await f.service.initializeGrepClient('afterFailedDispose'); assert.equal(f.gates.length, 1);
  client.dispose = dispose; f.service.dispose();
  assert.equal(client.disposed, true); assert.equal(f.service.getGrepClient(), undefined);
});

test('installer preserves its first backup and repeated builds keep the same generated owner', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-retrieval-'));
  try {
    const path = join(directory, 'source/app', retrievalEntry);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installRetrievalOwnership(directory); assert.equal(await readFile(path, 'utf8'), patched);
    await installRetrievalOwnership(directory); assert.equal(await readFile(path, 'utf8'), patched);
    assert.equal(await readFile(join(directory, 'backups/retrieval-lifecycle', retrievalEntry), 'utf8'), original);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
