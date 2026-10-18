import { diversify } from './retrieval-store.mjs';

// Optional OpenAI-compatible embeddings for the OpenVision retrieval index.
// Off by default: there is no default provider, model or URL. Any failure
// switches the folder to lexical ranking with a visible reason.
export const embeddingLimits = Object.freeze({ batchSize: 32, batchChars: 64 * 1024, inputChars: 8000, timeoutMs: 15000 });

export function embeddingSettings({ provider, model } = {}, providers = []) {
  if (!provider || !model) return { enabled: false, reason: 'disabled' };
  const saved = providers.find(entry => entry.id === provider || entry.name === provider);
  if (!saved?.url) return { enabled: false, reason: `saved provider "${provider}" not found` };
  return { enabled: true, provider: saved.name ?? saved.id, baseUrl: saved.url.replace(/\/+$/, ''), apiKey: saved.apiKey, model };
}

export function batches(texts, { batchSize, batchChars, inputChars } = embeddingLimits) {
  const output = []; let current = [], size = 0;
  for (const [index, raw] of texts.entries()) {
    const text = raw.length > inputChars ? raw.slice(0, inputChars) : raw;
    if (current.length && (current.length >= batchSize || size + text.length > batchChars)) {
      output.push(current); current = []; size = 0;
    }
    current.push({ index, text }); size += text.length;
  }
  if (current.length) output.push(current);
  return output;
}

export class EmbeddingFailure extends Error {
  constructor(reason, cause) { super(reason); this.reason = reason; this.cause = cause; }
}

export class EmbeddingClient {
  constructor({ baseUrl, apiKey, model, fetch = globalThis.fetch, limits = embeddingLimits }) {
    this.url = `${baseUrl}/embeddings`;
    this.apiKey = apiKey;
    this.model = model;
    this.fetch = fetch;
    this.limits = limits;
    this.requests = 0;
    this.inputs = 0;
    this.dimensions = undefined;
  }

  // One request in flight at a time; cancel aborts it.
  async embed(texts, { signal } = {}) {
    const vectors = new Array(texts.length);
    for (const batch of batches(texts, this.limits)) {
      if (signal?.aborted) throw new EmbeddingFailure('canceled');
      const timeout = AbortSignal.timeout(this.limits.timeoutMs);
      const combined = signal ? AbortSignal.any([signal, timeout]) : timeout;
      let response, body;
      try {
        this.requests++; this.inputs += batch.length;
        response = await this.fetch(this.url, { method: 'POST', signal: combined,
          headers: { 'content-type': 'application/json', ...(this.apiKey ? { authorization: `Bearer ${this.apiKey}` } : {}) },
          body: JSON.stringify({ model: this.model, input: batch.map(entry => entry.text) }) });
        body = await response.json().catch(() => undefined);
      } catch (error) {
        throw new EmbeddingFailure(timeout.aborted ? `timeout after ${this.limits.timeoutMs} ms` :
          signal?.aborted ? 'canceled' : `network error: ${error.message}`, error);
      }
      if (!response.ok) throw new EmbeddingFailure(`HTTP ${response.status}`);
      const data = Array.isArray(body?.data) ? body.data : undefined;
      if (!data || data.length !== batch.length) throw new EmbeddingFailure('malformed response');
      for (const [position, item] of data.entries()) {
        const vector = item?.embedding;
        if (!Array.isArray(vector) || !vector.length || vector.some(value => typeof value !== 'number' || !Number.isFinite(value)))
          throw new EmbeddingFailure('malformed embedding');
        this.dimensions ??= vector.length;
        if (vector.length !== this.dimensions) throw new EmbeddingFailure(`dimension changed ${this.dimensions} -> ${vector.length}`);
        const target = Number.isInteger(item.index) ? item.index : position;
        if (target < 0 || target >= batch.length) throw new EmbeddingFailure('malformed response');
        vectors[batch[target].index] = Float32Array.from(vector);
      }
    }
    return vectors;
  }
}

export const encodeVector = vector => Buffer.from(vector.buffer, vector.byteOffset, vector.byteLength);
export const decodeVector = bytes => new Float32Array(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));

export function cosine(left, right) {
  let dot = 0, a = 0, b = 0;
  for (let index = 0; index < left.length; index++) { dot += left[index] * right[index]; a += left[index] ** 2; b += right[index] ** 2; }
  return a && b ? dot / Math.sqrt(a * b) : 0;
}

// Hybrid ranking over the lexical candidates only; never a full vector scan.
export class EmbeddingRanker {
  constructor(store, client) {
    this.store = store;
    this.client = client;
    this.status = client ? { mode: 'hybrid', model: client.model, embedded: 0 } : { mode: 'lexical', reason: 'disabled' };
  }

  fail(reason) {
    this.status = { mode: 'lexical', reason, model: this.client?.model };
    this.client = undefined;
  }

  // Embeds chunks that have no vector for the configured model, in bounded batches.
  async indexPending({ signal, limit = 2048 } = {}) {
    if (!this.client) return this.status;
    const database = this.store.database;
    const rows = database.prepare(`SELECT c.id, c.text FROM chunks c LEFT JOIN embeddings e ON e.chunk_id = c.id AND e.model = ?
      WHERE e.chunk_id IS NULL ORDER BY c.id LIMIT ?`).all(this.client.model, limit);
    if (!rows.length) return this.status;
    try {
      const vectors = await this.client.embed(rows.map(row => row.text), { signal });
      const put = database.prepare('INSERT INTO embeddings (chunk_id, model, vector) VALUES (?, ?, ?) ON CONFLICT(chunk_id) DO UPDATE SET model = excluded.model, vector = excluded.vector');
      this.store.transaction(() => rows.forEach((row, index) => put.run(row.id, this.client.model, encodeVector(vectors[index]))));
      this.status.embedded = (this.status.embedded ?? 0) + rows.length;
    } catch (error) { this.fail(error.reason ?? error.message); }
    return this.status;
  }

  async rerank(query, lexical, { signal, k = 10 } = {}) {
    if (!this.client || !lexical.candidates.length) return { ...lexical, ranking: this.status };
    let queryVector;
    try { [queryVector] = await this.client.embed([query], { signal }); }
    catch (error) { this.fail(error.reason ?? error.message); return { ...lexical, ranking: this.status }; }
    const lookup = this.store.database.prepare('SELECT vector FROM embeddings WHERE chunk_id = ? AND model = ?');
    const top = Math.max(...lexical.candidates.map(candidate => candidate.score), 1e-9);
    const candidates = lexical.candidates.map(candidate => {
      const row = lookup.get(candidate.id, this.client.model);
      const similarity = row ? cosine(queryVector, decodeVector(row.vector)) : 0;
      return { ...candidate, score: Math.round((0.5 * candidate.score / top + 0.5 * similarity) * 1000) / 1000, similarity };
    }).sort((left, right) => right.score - left.score || left.path.localeCompare(right.path) || left.startLine - right.startLine);
    return { ...lexical, candidates, results: diversify(candidates, k), ranking: this.status };
  }
}
