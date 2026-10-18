import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { lstat, readdir, readFile, realpath } from 'node:fs/promises';
import { homedir } from 'node:os';
import { isAbsolute, join, relative, sep } from 'node:path';
import { Chunker, chunkLimits, chunkerVersion, languageOf } from './retrieval-chunk.mjs';
import { IgnoreRules, collapseScopes, changedExcludeScopes, isCursorIgnoreFile, isGitIgnoreFile, pathInside } from './retrieval-ignore.mjs';
import { RetrievalStore, rankingVersion, schemaVersion } from './retrieval-store.mjs';

// OpenVision-owned local retrieval index (OV-502/OV-503/OV-504).
// Contract: docs/recovery/retrieval-contract.md.
export const indexDefaults = Object.freeze({ maxFileBytes: 1024 * 1024, maxFiles: 200000, batchSize: 200 });

const posix = path => sep === '/' ? path : path.split(sep).join('/');
const parentOf = path => path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : '';
const identity = stats => `${stats.dev}:${stats.ino}`;
const sha256 = data => createHash('sha256').update(data).digest('hex');
const abortError = () => Object.assign(new Error('Indexing was canceled'), { name: 'AbortError', code: 'ABORT_ERR' });

function run(command, args, { cwd, signal, maxBytes = 256 * 1024 * 1024 } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: ['ignore', 'pipe', 'pipe'], signal });
    const out = [], err = []; let size = 0;
    child.stdout.on('data', chunk => {
      size += chunk.length;
      if (size > maxBytes) child.kill(); else out.push(chunk);
    });
    child.stderr.on('data', chunk => { if (err.length < 64) err.push(chunk); });
    child.once('error', reject);
    child.once('close', (code, signalName) => resolve({ code, signal: signalName,
      stdout: Buffer.concat(out), stderr: Buffer.concat(err).toString() }));
  });
}

// ripgrep owns .gitignore/.ignore/.git/info/exclude/global excludes and hidden
// file traversal; symbolic links are never followed (OV-401 cycle safety).
export async function enumerate({ root, rgPath, scope = '', pruneGlobs = [], signal }) {
  const args = ['--files', '--hidden', '--no-require-git', '--no-config', '--null', '--glob', '!.git',
    ...pruneGlobs.flatMap(glob => ['--glob', glob]), ...(scope ? ['--', scope] : [])];
  const result = await run(rgPath, args, { cwd: root, signal });
  // Exit 1 means "no files"; 2 reports per-path errors with partial output.
  if (result.code !== 0 && result.code !== 1 && !(result.code === 2 && result.stdout.length))
    throw new Error(`ripgrep enumeration failed (${result.code ?? result.signal}): ${result.stderr.trim().slice(0, 400)}`);
  return result.stdout.toString('utf8').split('\0').filter(Boolean).map(path => posix(path.replace(/^\.\//, '')));
}

async function globalExcludes(root) {
  const configured = await run('git', ['config', '--path', '--get', 'core.excludesFile'], { cwd: root }).catch(() => undefined);
  const path = configured?.code === 0 && configured.stdout.toString().trim() ||
    join(process.env.XDG_CONFIG_HOME || join(homedir(), '.config'), 'git/ignore');
  return readFile(path, 'utf8').catch(() => undefined);
}

export function newCounters() {
  return { enumerations: 0, enumeratedFiles: 0, stats: 0, reads: 0, ignoreFileReads: 0, parses: 0, syntaxParses: 0,
    lineChunkings: 0, chunksWritten: 0, filesIndexed: 0, filesDeleted: 0, renames: 0, reuseByHash: 0,
    unchangedSkips: 0, contentUnchanged: 0, ignoredSkips: 0, binarySkips: 0, oversizeSkips: 0, limitSkips: 0,
    symlinks: { alias: 0, outside: 0, cycle: 0, broken: 0 }, batches: 0, transactions: 0, fullSyncs: 0,
    fullRebuilds: 0, rebuildReasons: [], subtreeReconciles: [], gitDiffs: 0, gitDiffFiles: 0, changeEvents: 0 };
}

export function settingsHash(options) {
  return sha256(JSON.stringify({ schemaVersion, chunkerVersion, rankingVersion, chunkLimits,
    maxFileBytes: options.maxFileBytes, treeSitter: Boolean(options.grammarDirectory) }));
}

export class RetrievalIndex {
  constructor({ root, directory, rgPath, grammarDirectory, filesExclude = {}, log = () => {}, ...options }) {
    this.root = root;
    this.directory = directory;
    this.rgPath = rgPath;
    this.grammarDirectory = grammarDirectory;
    this.filesExclude = filesExclude;
    this.options = { ...indexDefaults, ...options, grammarDirectory };
    this.log = log;
    this.counters = newCounters();
    this.store = new RetrievalStore(directory, { log });
    this.chunker = new Chunker({ grammarDirectory });
    this.pauseGate = undefined;
    this.status = { state: 'closed' };
  }

  async open() {
    this.realRoot = await realpath(this.root);
    const reason = await this.store.open({ settingsHash: settingsHash(this.options) });
    if (reason && reason !== 'new') {
      this.counters.fullRebuilds++;
      this.counters.rebuildReasons.push(reason);
      this.log(`Retrieval index rebuild required: ${reason}`);
    }
    this.rebuildReason = reason;
    this.rules = new IgnoreRules(this.filesExclude);
    for (const { path, text } of this.store.ignoreFiles()) this.rules.setFile(path, text);
    const stored = this.store.meta('files_exclude');
    this.pendingScopes = stored === undefined || reason ? [] : changedExcludeScopes(JSON.parse(stored), this.filesExclude);
    if (this.pendingScopes.length) this.log(`files.exclude changed; re-evaluating ${this.pendingScopes.map(scope => scope || '/').join(', ')}`);
    this.store.setMeta('files_exclude', JSON.stringify(this.filesExclude ?? {}));
    this.status = { state: 'open', complete: this.store.meta('sync_state') === 'complete' };
    return { rebuildReason: reason, complete: this.status.complete, pendingScopes: this.pendingScopes };
  }

  pause() { this.pauseGate ??= Promise.withResolvers(); }
  resume() { const gate = this.pauseGate; this.pauseGate = undefined; gate?.resolve(); }

  async checkpoint(signal) {
    if (signal?.aborted) throw abortError();
    while (this.pauseGate) {
      this.status.paused = true;
      await Promise.race([this.pauseGate.promise, signal ? new Promise((_, reject) =>
        signal.addEventListener('abort', () => reject(abortError()), { once: true })) : new Promise(() => {})]);
    }
    this.status.paused = false;
    if (signal?.aborted) throw abortError();
  }

  async readIgnoreFiles(paths) {
    const changed = [];
    const known = new Map(this.store.ignoreFiles().map(row => [row.path, row.text]));
    for (const path of paths) {
      const text = await readFile(join(this.root, path), 'utf8').catch(() => undefined);
      this.counters.ignoreFileReads++;
      if (known.get(path) !== text) changed.push(path);
      this.rules.setFile(path, text);
      this.store.putIgnore(path, text);
    }
    return changed;
  }

  // Full reconcile: one ripgrep enumeration plus one stat per file; only new
  // or changed files are read.
  async sync({ signal } = {}) {
    this.counters.fullSyncs++;
    this.store.setMeta('sync_state', 'incomplete');
    this.status.state = 'indexing';
    const listing = await enumerate({ root: this.root, rgPath: this.rgPath, pruneGlobs: this.rules.exclude.pruneGlobs, signal });
    this.counters.enumerations++; this.counters.enumeratedFiles += listing.length;
    const ignoreFiles = listing.filter(path => isGitIgnoreFile(path) || isCursorIgnoreFile(path));
    const stale = this.store.ignoreFiles().map(row => row.path).filter(path => !ignoreFiles.includes(path) &&
      !path.startsWith('<'));
    for (const path of stale) { this.rules.setFile(path, undefined); this.store.putIgnore(path, undefined); }
    await this.readIgnoreFiles([...ignoreFiles, '.git/info/exclude']);
    const globalText = await globalExcludes(this.root);
    this.rules.setFile('<global>', globalText);
    this.store.putIgnore('<global>', globalText);
    const included = this.filter(listing);
    await this.symlinks(included, '');
    await this.reconcile(included, '', signal);
    this.pendingScopes = [];
    await this.recordHead();
    this.store.setMeta('sync_state', 'complete');
    this.status = { state: 'idle', complete: true, ...this.store.counts() };
    return this.status;
  }

  filter(listing) {
    const included = [];
    for (const path of listing) {
      if (this.rules.ignored(path)) { this.counters.ignoredSkips++; continue; }
      included.push(path);
    }
    included.sort();
    if (included.length > this.options.maxFiles) {
      this.counters.limitSkips += included.length - this.options.maxFiles;
      this.status.limitReached = true;
      return included.slice(0, this.options.maxFiles);
    }
    return included;
  }

  // Symbolic links are never followed; each one is classified for reporting.
  async symlinks(included, scope) {
    const directories = new Set([scope]);
    for (const path of included) for (let parent = parentOf(path); parent && !directories.has(parent); parent = parentOf(parent))
      directories.add(parent);
    for (const directory of directories) {
      const entries = await readdir(join(this.root, directory), { withFileTypes: true }).catch(() => []);
      for (const entry of entries) {
        if (!entry.isSymbolicLink()) continue;
        const path = directory ? `${directory}/${entry.name}` : entry.name;
        if (!this.rules.ignored(path)) await this.classifyLink(path);
      }
    }
  }

  async classifyLink(path) {
    const target = await realpath(join(this.root, path)).catch(error => error);
    if (target instanceof Error) this.counters.symlinks[target.code === 'ELOOP' ? 'cycle' : 'broken']++;
    else if (target !== this.realRoot && !target.startsWith(this.realRoot + sep)) this.counters.symlinks.outside++;
    else this.counters.symlinks.alias++;
  }

  async reconcile(included, scope, signal) {
    const existing = new Map(this.store.filesUnder(scope).map(row => [row.path, row]));
    const wanted = new Set(included);
    const deletions = [...existing.keys()].filter(path => !wanted.has(path));
    await this.process(included.map(path => ({ path, record: existing.get(path) })), deletions, signal);
  }

  // Processes candidates in batches. File I/O and parsing happen outside the
  // transaction; each batch's writes commit atomically.
  async process(candidates, deletions, signal) {
    const pending = new Map(deletions.map(path => [path, this.store.file(path)]).filter(([, record]) => record));
    const byIdentity = new Map();
    for (const record of pending.values()) byIdentity.set(`${record.ino}|${record.size}|${record.mtime}`, record);
    for (let start = 0; start < candidates.length || (start === 0 && pending.size); start += this.options.batchSize) {
      await this.checkpoint(signal);
      const operations = [];
      for (const { path, record } of candidates.slice(start, start + this.options.batchSize)) {
        const operation = await this.prepareFile(path, record ?? this.store.file(path), byIdentity, pending);
        if (operation) operations.push(operation);
      }
      const last = start + this.options.batchSize >= candidates.length;
      const removals = last ? [...pending.keys()] : [];
      if (!operations.length && !removals.length) continue;
      await this.checkpoint(signal);
      this.store.transaction(() => {
        for (const operation of operations) operation();
        for (const path of removals) { this.store.deleteFile(path); this.counters.filesDeleted++; }
      });
      if (last) pending.clear();
      this.counters.batches++; this.counters.transactions++;
    }
  }

  async prepareFile(path, record, byIdentity, pending) {
    const absolute = join(this.root, path);
    const stats = await lstat(absolute).catch(() => undefined);
    this.counters.stats++;
    if (!stats?.isFile()) {
      if (record) pending.set(path, record);
      return undefined;
    }
    const size = stats.size, mtime = stats.mtimeMs, ino = identity(stats);
    if (record && record.size === size && record.mtime === mtime && record.ino === ino) {
      this.counters.unchangedSkips++;
      return undefined;
    }
    if (size > this.options.maxFileBytes) {
      this.counters.oversizeSkips++;
      if (record) pending.set(path, record);
      return undefined;
    }
    const moved = !record && byIdentity.get(`${ino}|${size}|${mtime}`);
    if (moved && pending.has(moved.path)) {
      pending.delete(moved.path);
      byIdentity.delete(`${ino}|${size}|${mtime}`);
      this.counters.renames++;
      return () => this.store.renameFile(moved.path, path);
    }
    const bytes = await readFile(absolute);
    this.counters.reads++;
    if (bytes.subarray(0, 8000).includes(0)) {
      this.counters.binarySkips++;
      if (record) pending.set(path, record);
      return undefined;
    }
    const hash = sha256(bytes), language = languageOf(path);
    const update = { path, size: bytes.length, mtime, ino, hash, language };
    if (record?.hash === hash) {
      this.counters.contentUnchanged++;
      return () => this.store.touchFile(path, update);
    }
    const source = this.store.pathWithHash(hash);
    if (source && source !== path) {
      this.counters.reuseByHash++; this.counters.filesIndexed++;
      return () => {
        const count = this.store.copyChunks(source, path, hash);
        this.counters.chunksWritten += count;
        this.store.putFile({ ...update, chunks: count });
      };
    }
    const { chunks, parsed } = await this.chunker.chunk(path, bytes.toString('utf8'));
    this.counters.parses++;
    this.counters[parsed === 'syntax' ? 'syntaxParses' : 'lineChunkings']++;
    this.counters.filesIndexed++;
    return () => {
      this.store.writeChunks(path, hash, chunks);
      this.counters.chunksWritten += chunks.length;
      this.store.putFile({ ...update, chunks: chunks.length });
    };
  }

  relative(path) {
    const value = isAbsolute(path) ? relative(this.root, path) : path;
    return posix(value).replace(/^\.\//, '').replace(/\/+$/, '');
  }

  // Incremental update for watcher events (create/change/delete paths).
  async applyChanges(paths, { signal } = {}) {
    this.status.state = 'indexing';
    const unique = [...new Set(paths.map(path => this.relative(path)))].filter(path => path && !path.startsWith('..'));
    this.counters.changeEvents += unique.length;
    let head = false;
    const scopes = [...(this.pendingScopes ?? [])], ignoreChanges = [], candidates = [];
    for (const path of unique) {
      if (path === '.git/HEAD') head = true;
      else if (path === '.git/info/exclude') { ignoreChanges.push(path); }
      else if (path === '.git' || path.startsWith('.git/')) continue;
      else {
        if (isGitIgnoreFile(path) || isCursorIgnoreFile(path)) ignoreChanges.push(path);
        candidates.push(path);
      }
    }
    for (const path of await this.readIgnoreFiles(ignoreChanges)) scopes.push(path === '.git/info/exclude' ? '' : parentOf(path));
    if (head) candidates.push(...await this.headChanges(scopes));
    const collapsed = collapseScopes(scopes);
    for (const scope of collapsed) await this.reconcileScope(scope, signal);
    this.pendingScopes = [];
    const files = [], deletions = [];
    for (const path of [...new Set(candidates)]) {
      if (collapsed.some(scope => pathInside(scope, path))) continue;
      const stats = await lstat(join(this.root, path)).catch(() => undefined);
      this.counters.stats++;
      if (!stats) {
        if (this.store.file(path)) deletions.push(path);
        else for (const row of this.store.filesUnder(path)) deletions.push(row.path);
      } else if (stats.isDirectory()) await this.reconcileScope(path, signal);
      else if (stats.isSymbolicLink()) {
        if (this.store.file(path)) deletions.push(path);
        if (!this.rules.ignored(path)) await this.classifyLink(path);
      } else if (this.rules.ignored(path)) {
        this.counters.ignoredSkips++;
        if (this.store.file(path)) deletions.push(path);
      } else files.push({ path });
    }
    if (files.length || deletions.length) await this.process(files, deletions, signal);
    this.status = { state: 'idle', complete: this.status.complete, ...this.store.counts() };
    return this.status;
  }

  async reconcileScope(scope, signal) {
    this.counters.subtreeReconciles.push(scope || '/');
    const ancestors = scope && this.rules.ignored(scope);
    const listing = ancestors ? [] : await enumerate({ root: this.root, rgPath: this.rgPath, scope,
      pruneGlobs: this.rules.exclude.pruneGlobs, signal });
    this.counters.enumerations++; this.counters.enumeratedFiles += listing.length;
    const included = this.filter(listing);
    await this.symlinks(included, scope);
    await this.reconcile(included, scope, signal);
  }

  async git(args) {
    const result = await run('git', args, { cwd: this.root }).catch(error => ({ code: -1, stderr: error.message, stdout: Buffer.alloc(0) }));
    return result.code === 0 ? result.stdout.toString('utf8') : undefined;
  }

  async recordHead() {
    const head = (await this.git(['rev-parse', '--verify', '-q', 'HEAD']))?.trim();
    if (head) this.store.setMeta('git_head', head);
  }

  // Branch switches: files changed between the recorded and the new commit.
  async headChanges(scopes) {
    const before = this.store.meta('git_head');
    const after = (await this.git(['rev-parse', '--verify', '-q', 'HEAD']))?.trim();
    if (!after || before === after) return [];
    if (!before) { this.store.setMeta('git_head', after); return []; }
    const diff = await this.git(['diff', '--name-only', '--relative', '-z', '--no-renames', before, after]);
    if (diff === undefined) {
      this.log(`git diff ${before}..${after} failed; re-evaluating the workspace without rebuilding`);
      scopes.push('');
      this.store.setMeta('git_head', after);
      return [];
    }
    const paths = diff.split('\0').filter(Boolean);
    this.counters.gitDiffs++; this.counters.gitDiffFiles += paths.length;
    this.store.setMeta('git_head', after);
    return paths;
  }

  search(query, options) {
    return this.store.search(query, options);
  }

  close() {
    this.resume();
    this.chunker.dispose();
    this.store.close();
    this.status = { state: 'closed' };
  }
}

export { schemaVersion } from './retrieval-store.mjs';
