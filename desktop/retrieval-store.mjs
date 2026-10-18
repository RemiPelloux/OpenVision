import { mkdir, rename, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';

// SQLite storage for the OpenVision retrieval index (contract:
// docs/recovery/retrieval-contract.md). One database per workspace folder in a
// schema-versioned, profile-owned directory. WAL journal; one transaction per batch.
export const schemaVersion = 1;
export const databaseName = 'index.sqlite';

let sqlite;
export async function openDatabase(path) {
  sqlite ??= await import('node:sqlite');
  return new sqlite.DatabaseSync(path);
}

export function ftsAvailable(database) {
  try {
    database.exec('CREATE VIRTUAL TABLE temp.openvision_fts_probe USING fts5(value); DROP TABLE temp.openvision_fts_probe;');
    return true;
  } catch { return false; }
}

const schema = `
CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS files (path TEXT PRIMARY KEY, size INTEGER NOT NULL, mtime REAL NOT NULL,
  ino TEXT NOT NULL, hash TEXT NOT NULL, language TEXT NOT NULL, chunks INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS files_hash ON files(hash);
CREATE INDEX IF NOT EXISTS files_ino ON files(ino, size, mtime);
CREATE TABLE IF NOT EXISTS ignore_files (path TEXT PRIMARY KEY, text TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS chunks (id INTEGER PRIMARY KEY, path TEXT NOT NULL, hash TEXT NOT NULL,
  ordinal INTEGER NOT NULL, start_line INTEGER NOT NULL, end_line INTEGER NOT NULL, kind TEXT NOT NULL,
  symbol TEXT NOT NULL, text TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS chunks_path ON chunks(path);
CREATE VIRTUAL TABLE IF NOT EXISTS chunks_fts USING fts5(path_terms, symbol_terms, body_terms,
  tokenize = 'unicode61 remove_diacritics 2');
CREATE TABLE IF NOT EXISTS embeddings (chunk_id INTEGER PRIMARY KEY, model TEXT NOT NULL, vector BLOB NOT NULL);
`;

// Identifier-aware terms: keep each identifier and add its camelCase,
// snake_case and digit parts so "user name" finds getUserName.
export function terms(text) {
  const output = [];
  for (const match of text.matchAll(/[\p{L}\p{N}_$]+/gu)) {
    const word = match[0], lower = word.toLowerCase();
    output.push(lower);
    const parts = word.split(/[_$]+|(?<=\p{Ll})(?=\p{Lu})|(?<=\p{Lu})(?=\p{Lu}\p{Ll})|(?<=\p{L})(?=\p{N})|(?<=\p{N})(?=\p{L})/u)
      .filter(Boolean).map(part => part.toLowerCase());
    if (parts.length > 1) output.push(...parts);
  }
  return output.join(' ');
}

const stopWords = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'do', 'does', 'for', 'from', 'how', 'i',
  'in', 'is', 'it', 'of', 'on', 'or', 'the', 'this', 'that', 'to', 'what', 'when', 'where', 'which', 'who', 'why',
  'with', 'code', 'file', 'files', 'function', 'find', 'show', 'me', 'we', 'our', 'get', 'handled', 'handle', 'done', 'implemented']);

export function queryTerms(query) {
  const all = [...new Set(terms(query).split(' ').filter(term => term.length > 1))];
  const kept = all.filter(term => !stopWords.has(term));
  return kept.length ? kept : all;
}

const quoted = term => `"${term.replaceAll('"', '""')}"`;
export const rankingVersion = 1;
const weights = { path: 2.5, symbol: 4, body: 1 };

export class RetrievalStore {
  constructor(directory, { log = () => {} } = {}) {
    this.directory = directory;
    this.path = join(directory, databaseName);
    this.log = log;
  }

  // Opens the database; on a failed integrity check the directory is moved
  // aside (never deleted) and a fresh database is created. Returns the reason
  // a rebuild is required, or undefined.
  async open({ settingsHash }) {
    await mkdir(this.directory, { recursive: true });
    let reason;
    const existed = await stat(this.path).then(() => true, () => false);
    try {
      this.database = await openDatabase(this.path);
      const check = existed ? this.database.prepare('PRAGMA quick_check').all().map(row => Object.values(row)[0]) : ['ok'];
      if (check.length !== 1 || check[0] !== 'ok') throw Object.assign(new Error(`quick_check: ${check.slice(0, 3).join('; ')}`), { code: 'OV_INDEX_CORRUPT' });
      if (existed) this.database.prepare('SELECT count(*) FROM chunks_fts').get();
    } catch (error) {
      if (!existed && error.code !== 'OV_INDEX_CORRUPT') throw error;
      this.database?.close();
      this.database = undefined;
      const quarantine = `${this.directory}.corrupt-${Date.now()}`;
      await rename(this.directory, quarantine);
      this.quarantined = quarantine;
      this.log(`Retrieval index failed its integrity check (${error.message}); moved to ${quarantine} and rebuilding`);
      await mkdir(this.directory, { recursive: true });
      this.database = await openDatabase(this.path);
      reason = 'corrupt';
    }
    if (!ftsAvailable(this.database)) {
      this.close();
      throw Object.assign(new Error('SQLite FTS5 is unavailable in this runtime'), { code: 'OV_INDEX_NO_FTS5' });
    }
    this.database.exec('PRAGMA journal_mode = WAL; PRAGMA synchronous = NORMAL; PRAGMA foreign_keys = OFF;');
    this.database.exec(schema);
    this.prepare();
    const version = this.meta('schema_version'), settings = this.meta('settings_hash');
    if (!reason && version === undefined) reason = existed ? 'missing-schema-version' : 'new';
    else if (!reason && Number(version) !== schemaVersion) reason = `schema ${version} -> ${schemaVersion}`;
    else if (!reason && settings !== settingsHash) reason = 'settings-changed';
    if (reason) this.reset({ settingsHash });
    return reason;
  }

  prepare() {
    const database = this.database;
    this.statements = {
      meta: database.prepare('SELECT value FROM meta WHERE key = ?'),
      setMeta: database.prepare('INSERT INTO meta (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value'),
      file: database.prepare('SELECT * FROM files WHERE path = ?'),
      files: database.prepare('SELECT path, size, mtime, ino, hash FROM files'),
      filesUnder: database.prepare("SELECT path, size, mtime, ino, hash FROM files WHERE path = ? OR substr(path, 1, length(?) + 1) = ? || '/'"),
      byIdentity: database.prepare('SELECT * FROM files WHERE ino = ? AND size = ? AND mtime = ?'),
      byHash: database.prepare('SELECT path FROM files WHERE hash = ? LIMIT 1'),
      putFile: database.prepare(`INSERT INTO files (path, size, mtime, ino, hash, language, chunks) VALUES (?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(path) DO UPDATE SET size = excluded.size, mtime = excluded.mtime, ino = excluded.ino,
        hash = excluded.hash, language = excluded.language, chunks = excluded.chunks`),
      touchFile: database.prepare('UPDATE files SET size = ?, mtime = ?, ino = ? WHERE path = ?'),
      deleteFile: database.prepare('DELETE FROM files WHERE path = ?'),
      chunkIds: database.prepare('SELECT id FROM chunks WHERE path = ?'),
      chunksOf: database.prepare('SELECT ordinal, start_line, end_line, kind, symbol, text FROM chunks WHERE path = ? ORDER BY ordinal'),
      putChunk: database.prepare('INSERT INTO chunks (path, hash, ordinal, start_line, end_line, kind, symbol, text) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'),
      putFts: database.prepare('INSERT INTO chunks_fts (rowid, path_terms, symbol_terms, body_terms) VALUES (?, ?, ?, ?)'),
      deleteChunks: database.prepare('DELETE FROM chunks WHERE path = ?'),
      deleteFts: database.prepare('DELETE FROM chunks_fts WHERE rowid = ?'),
      deleteEmbedding: database.prepare('DELETE FROM embeddings WHERE chunk_id = ?'),
      renameChunks: database.prepare('UPDATE chunks SET path = ? WHERE path = ?'),
      renameFts: database.prepare('UPDATE chunks_fts SET path_terms = ? WHERE rowid = ?'),
      renameFile: database.prepare('UPDATE files SET path = ? WHERE path = ?'),
      ignoreFiles: database.prepare('SELECT path, text FROM ignore_files'),
      putIgnore: database.prepare('INSERT INTO ignore_files (path, text) VALUES (?, ?) ON CONFLICT(path) DO UPDATE SET text = excluded.text'),
      deleteIgnore: database.prepare('DELETE FROM ignore_files WHERE path = ?'),
      counts: database.prepare('SELECT (SELECT count(*) FROM files) AS files, (SELECT count(*) FROM chunks) AS chunks'),
    };
  }

  reset({ settingsHash }) {
    this.database.exec(`DELETE FROM files; DELETE FROM chunks; DELETE FROM chunks_fts; DELETE FROM ignore_files;
      DELETE FROM embeddings; DELETE FROM meta;`);
    this.setMeta('schema_version', String(schemaVersion));
    this.setMeta('settings_hash', settingsHash);
    this.setMeta('created_at', new Date().toISOString());
  }

  meta(key) { return this.statements.meta.get(key)?.value; }
  setMeta(key, value) { this.statements.setMeta.run(key, String(value)); }
  file(path) { return this.statements.file.get(path); }
  files() { return this.statements.files.all(); }
  filesUnder(prefix) { return prefix ? this.statements.filesUnder.all(prefix, prefix, prefix) : this.files(); }
  byIdentity(ino, size, mtime) { return this.statements.byIdentity.all(ino, size, mtime); }
  pathWithHash(hash) { return this.statements.byHash.get(hash)?.path; }
  ignoreFiles() { return this.statements.ignoreFiles.all(); }
  putIgnore(path, text) { if (text === undefined) this.statements.deleteIgnore.run(path); else this.statements.putIgnore.run(path, text); }
  counts() { return { ...this.statements.counts.get() }; }

  transaction(work) {
    this.database.exec('BEGIN IMMEDIATE');
    try { const result = work(); this.database.exec('COMMIT'); return result; }
    catch (error) { try { this.database.exec('ROLLBACK'); } catch {} throw error; }
  }

  removeChunks(path) {
    for (const { id } of this.statements.chunkIds.all(path)) {
      this.statements.deleteFts.run(id);
      this.statements.deleteEmbedding.run(id);
    }
    this.statements.deleteChunks.run(path);
  }

  writeChunks(path, hash, chunks) {
    this.removeChunks(path);
    const pathTerms = terms(path);
    chunks.forEach((chunk, ordinal) => {
      const { lastInsertRowid } = this.statements.putChunk.run(path, hash, ordinal, chunk.startLine, chunk.endLine,
        chunk.kind, chunk.symbol ?? '', chunk.text);
      this.statements.putFts.run(lastInsertRowid, pathTerms, terms(chunk.symbol ?? ''), terms(chunk.text));
    });
  }

  copyChunks(from, to, hash) {
    const chunks = this.statements.chunksOf.all(from).map(row => ({ startLine: row.start_line, endLine: row.end_line,
      kind: row.kind, symbol: row.symbol, text: row.text }));
    this.writeChunks(to, hash, chunks);
    return chunks.length;
  }

  putFile(record) {
    this.statements.putFile.run(record.path, record.size, record.mtime, record.ino, record.hash, record.language, record.chunks);
  }
  touchFile(path, { size, mtime, ino }) { this.statements.touchFile.run(size, mtime, ino, path); }

  deleteFile(path) {
    this.removeChunks(path);
    this.statements.deleteFile.run(path);
  }

  renameFile(from, to) {
    this.statements.deleteFile.run(to); this.removeChunks(to);
    this.statements.renameFile.run(to, from);
    this.statements.renameChunks.run(to, from);
    const pathTerms = terms(to);
    for (const { id } of this.statements.chunkIds.all(to)) this.statements.renameFts.run(pathTerms, id);
  }

  // Lexical retrieval: BM25 over identifier-aware terms, then a deterministic
  // rerank by query-term coverage and exact symbol/phrase matches, at most
  // two chunks per file.
  search(query, { k = 10, candidates = 200, pathPrefix } = {}) {
    const wanted = queryTerms(query);
    if (!wanted.length) return { terms: wanted, results: [], candidates: [] };
    const match = `{path_terms symbol_terms body_terms}: (${wanted.map(term => `${quoted(term)}${term.length >= 4 ? '*' : ''}`).join(' OR ')})`;
    const rows = this.database.prepare(`SELECT c.id, c.path, c.start_line, c.end_line, c.symbol, c.text,
        f.path_terms, f.symbol_terms, f.body_terms,
        bm25(chunks_fts, ${weights.path}, ${weights.symbol}, ${weights.body}) AS rank
      FROM chunks_fts f JOIN chunks c ON c.id = f.rowid
      WHERE chunks_fts MATCH ? ${pathPrefix ? "AND (c.path = ? OR substr(c.path, 1, length(?) + 1) = ? || '/')" : ''}
      ORDER BY rank LIMIT ?`).all(...[match, ...(pathPrefix ? [pathPrefix, pathPrefix, pathPrefix] : []), candidates]);
    const phrase = query.trim().toLowerCase();
    const scored = rows.map(row => {
      const present = new Set(`${row.path_terms} ${row.symbol_terms} ${row.body_terms}`.split(' '));
      const prefix = term => present.has(term) || (term.length >= 4 && [...present].some(word => word.startsWith(term)));
      const coverage = wanted.filter(prefix).length / wanted.length;
      const symbolTerms = new Set(row.symbol_terms.split(' '));
      const symbolHits = wanted.filter(term => symbolTerms.has(term)).length / wanted.length;
      const pathTerms = new Set(row.path_terms.split(' '));
      const pathHits = wanted.filter(term => pathTerms.has(term)).length / wanted.length;
      const exact = phrase.length > 3 && row.text.toLowerCase().includes(phrase) ? 1 : 0;
      const score = -row.rank * (0.25 + coverage) + 4 * coverage * coverage + 2 * symbolHits + 1.5 * pathHits + 3 * exact;
      return { id: row.id, path: row.path, startLine: row.start_line, endLine: row.end_line, symbol: row.symbol,
        text: row.text, score: Math.round(score * 1000) / 1000 };
    }).sort((left, right) => right.score - left.score || left.path.localeCompare(right.path) || left.startLine - right.startLine);
    return { terms: wanted, candidates: scored, results: diversify(scored, k) };
  }

  close() {
    try { this.database?.close(); } catch {}
    this.database = undefined;
    this.statements = undefined;
  }

  static async remove(directory) {
    await rm(directory, { recursive: true, force: true });
  }
}

export function diversify(scored, k, perFile = 2) {
  const results = [], seen = new Map();
  for (const result of scored) {
    const count = seen.get(result.path) ?? 0;
    if (count >= perFile) continue;
    seen.set(result.path, count + 1);
    results.push(result);
    if (results.length >= k) break;
  }
  return results;
}
