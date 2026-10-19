import { createHash } from 'node:crypto';
import { mkdir, readdir, realpath, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Worker } from 'node:worker_threads';
import { schemaVersion } from './retrieval-store.mjs';
import budgets from './retrieval-budgets.json' with { type: 'json' };

// One service per window owns one worker per workspace folder. The worker is
// the only database owner; it is started on demand and released when idle.
// Limits come from desktop/retrieval-budgets.json (10,000-file baseline).
export const serviceDefaults = Object.freeze({ idleMs: 60000, debounceMs: 250, searchWaitMs: 20000, maxPendingPaths: 5000,
  resourceLimits: budgets.worker.resourceLimits });

export const workspaceId = async root => createHash('sha256').update(await realpath(root)).digest('hex').slice(0, 24);
export const retrievalRoot = userDataDirectory => join(userDataDirectory, 'openvision/retrieval');
export async function indexDirectory(userDataDirectory, root, version = schemaVersion) {
  return join(retrievalRoot(userDataDirectory), `v${version}`, await workspaceId(root));
}

export class RetrievalService {
  constructor({ userDataDirectory, root, rgPath, grammarDirectory, filesExclude = {}, embeddings, log = () => {}, ...options }) {
    this.userDataDirectory = userDataDirectory;
    this.root = root;
    this.workerData = { root, rgPath, grammarDirectory, filesExclude, embeddings, batchSize: options.batchSize, maxFiles: options.maxFiles };
    this.options = { ...serviceDefaults, ...options };
    this.log = log;
    this.requests = new Map();
    this.nextId = 1;
    this.pending = new Set();
    this.overflow = false;
    this.generation = 0;
    this.activations = 0;
    this.releases = 0;
    this.exits = [];
    this.disposed = false;
  }

  async directory() {
    this.indexDirectory ??= await indexDirectory(this.userDataDirectory, this.root);
    return this.indexDirectory;
  }

  request(type, payload = {}) {
    const worker = this.worker;
    if (!worker) return Promise.reject(Object.assign(new Error('Retrieval worker is not running'), { code: 'OV_INDEX_RELEASED' }));
    const id = this.nextId++;
    const settled = Promise.withResolvers();
    this.requests.set(id, { ...settled, type, worker });
    worker.postMessage({ id, type, ...payload });
    return settled.promise.finally(() => this.scheduleIdle());
  }

  // Starts the worker if needed. The first activation reconciles by stat;
  // later activations apply the changes recorded while released.
  activate() {
    if (this.disposed) return Promise.reject(new Error('Retrieval service is disposed'));
    this.activating ??= this.start().finally(() => { this.activating = undefined; });
    return this.activating;
  }

  async start() {
    if (this.worker) return this.opened;
    const directory = await this.directory();
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'workspace.json'), JSON.stringify({ root: await realpath(this.root), schemaVersion }, null, 2) + '\n');
    const worker = new Worker(new URL('./retrieval-worker.mjs', import.meta.url), {
      workerData: { ...this.workerData, directory }, resourceLimits: this.options.resourceLimits, name: 'openvision-retrieval' });
    worker.unref?.();
    this.worker = worker;
    this.generation++;
    this.activations++;
    worker.on('message', message => this.receive(worker, message));
    worker.on('error', error => this.workerFailed(worker, error));
    worker.on('exit', code => this.workerExited(worker, code));
    this.opened = await this.request('open');
    if (this.opened.quarantined) this.log(`Corrupt retrieval index moved to ${this.opened.quarantined}`);
    const first = this.activations === 1 || this.overflow;
    const needsSync = first || this.opened.rebuildReason || !this.opened.complete;
    const paths = needsSync ? [] : [...this.pending];
    this.pending.clear(); this.overflow = false;
    this.track(needsSync ? this.request('sync') : this.request('changes', { paths }))
      .then(() => this.removeOlderVersions(), () => {});
    return this.opened;
  }

  receive(worker, message) {
    if (message.type === 'log') return this.log(message.message);
    const entry = this.requests.get(message.id);
    if (!entry || entry.worker !== worker) return;
    this.requests.delete(message.id);
    if (message.ok) entry.resolve(message.result);
    else entry.reject(Object.assign(new Error(message.error.message), message.error));
  }

  rejectAll(worker, error) {
    for (const [id, entry] of this.requests) if (entry.worker === worker) { this.requests.delete(id); entry.reject(error); }
  }

  workerFailed(worker, error) {
    this.exits.push({ generation: this.generation, error: error.code ?? error.message });
    this.log(`Retrieval worker failed: ${error.code ?? ''} ${error.message}`);
    this.rejectAll(worker, error);
  }

  workerExited(worker, code) {
    if (this.worker === worker) { this.worker = undefined; this.indexing = undefined; }
    this.exits.push({ generation: this.generation, code });
    this.rejectAll(worker, Object.assign(new Error(`Retrieval worker exited (${code})`), { code: 'OV_INDEX_EXITED' }));
  }

  async search(query, { k = 10, pathPrefix, waitMs = this.options.searchWaitMs } = {}) {
    await this.activate();
    let indexing = 'complete';
    if (this.indexing) {
      const timer = Promise.withResolvers();
      const handle = setTimeout(() => timer.resolve('partial'), waitMs);
      indexing = await Promise.race([this.indexing.then(() => 'complete', error => `failed: ${error.message}`), timer.promise]);
      clearTimeout(handle);
    }
    const result = await this.request('search', { query, k: Math.min(Math.max(1, k), 50), pathPrefix });
    return { ...result, indexing, root: this.root };
  }

  // Watcher events. While released, paths are recorded (bounded) and applied
  // on the next activation instead of starting the worker.
  notify(paths) {
    if (this.disposed) return;
    for (const path of paths) {
      if (this.pending.size >= this.options.maxPendingPaths) { this.overflow = true; break; }
      this.pending.add(path);
    }
    if (!this.worker) return;
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => this.flush(), this.options.debounceMs);
  }

  flush() {
    if (!this.worker || this.activating) return;
    if (this.overflow) { this.overflow = false; this.pending.clear(); return this.track(this.request('sync')); }
    const paths = [...this.pending]; this.pending.clear();
    if (paths.length) this.track(this.request('changes', { paths }));
  }

  // The worker runs jobs in order, so the latest job settles last.
  track(job) {
    const tracked = job.finally(() => { if (this.indexing === tracked) this.indexing = undefined; });
    this.indexing = tracked;
    tracked.catch(error => { if (error.code !== 'ABORT_ERR') this.log(`Retrieval indexing failed: ${error.message}`); });
    return tracked;
  }

  pause() { return this.worker ? this.request('pause') : Promise.resolve({ paused: false, released: true }); }
  resume() { return this.worker ? this.request('resume') : Promise.resolve({ paused: false, released: true }); }

  async cancel() {
    if (!this.worker) return { canceled: 0, released: true };
    const started = performance.now();
    const result = await this.request('cancel');
    await this.indexing?.catch(() => {});
    return { ...result, latencyMs: Math.round((performance.now() - started) * 10) / 10 };
  }

  status() {
    return this.worker ? this.request('status') : Promise.resolve({ released: true, pending: this.pending.size });
  }

  scheduleIdle() {
    clearTimeout(this.idleTimer);
    if (!this.worker || this.disposed) return;
    this.idleTimer = setTimeout(() => {
      if (!this.worker || this.requests.size || this.indexing || this.activating) return this.scheduleIdle();
      this.release('idle').catch(error => this.log(`Retrieval idle release failed: ${error.message}`));
    }, this.options.idleMs);
    this.idleTimer.unref?.();
  }

  // Closes the database and ends the worker. Owned by this service only.
  async release(reason = 'requested') {
    const worker = this.worker;
    if (!worker) return { released: false };
    clearTimeout(this.idleTimer); clearTimeout(this.debounce);
    const exited = new Promise(resolve => worker.once('exit', resolve));
    await this.request('close').catch(() => {});
    await Promise.race([exited, new Promise(resolve => setTimeout(resolve, 5000))]);
    if (this.worker === worker) { await worker.terminate(); this.worker = undefined; }
    this.indexing = undefined;
    this.releases++;
    this.log(`Retrieval worker released (${reason})`);
    return { released: true, reason };
  }

  async deleteIndex() {
    await this.release('delete');
    const directory = await this.directory();
    await rm(directory, { recursive: true, force: true });
    this.activations = 0;
    this.pending.clear();
    this.log(`Retrieval index deleted: ${directory}`);
    return { deleted: directory };
  }

  async rebuild() {
    await this.deleteIndex();
    await this.activate();
    return this.indexing;
  }

  async removeOlderVersions() {
    const id = await workspaceId(this.root);
    const base = retrievalRoot(this.userDataDirectory);
    for (const entry of await readdir(base).catch(() => [])) {
      if (!/^v\d+$/.test(entry) || entry === `v${schemaVersion}`) continue;
      const old = join(base, entry, id);
      await rm(old, { recursive: true, force: true });
      this.log(`Removed retrieval index ${old} after schema ${schemaVersion} completed`);
    }
  }

  async dispose() {
    if (this.disposed) return;
    await this.release('dispose');
    this.disposed = true;
  }
}
