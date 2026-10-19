import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { RetrievalIndex } from './retrieval-index.mjs';
import { EmbeddingClient, EmbeddingRanker, batches, embeddingSettings } from './retrieval-embeddings.mjs';
import { startEmbeddingFixture } from './retrieval-embedding-fixture.mjs';
import { retrievalRuntime } from './retrieval-runtime.mjs';

const runtime = retrievalRuntime();

async function indexed() {
  const directory = await mkdtemp(join(tmpdir(), 'ov-retrieval-embeddings-'));
  const root = join(directory, 'project');
  await mkdir(join(root, 'src'), { recursive: true });
  for (let number = 0; number < 40; number++)
    await writeFile(join(root, `src/module${number}.ts`), `export function handler${number}() {\n  return "shipment ${number} route warehouse";\n}\n`);
  const index = new RetrievalIndex({ root, directory: join(directory, 'store'), ...runtime });
  await index.open(); await index.sync();
  return { index, cleanup: async () => { index.close(); await rm(directory, { recursive: true, force: true }); } };
}

test('embeddings are off unless a saved provider and a model are both configured', () => {
  assert.deepEqual(embeddingSettings(), { enabled: false, reason: 'disabled' });
  assert.deepEqual(embeddingSettings({ model: 'm' }, [{ id: 'p', url: 'http://127.0.0.1:1/v1' }]), { enabled: false, reason: 'disabled' });
  assert.equal(embeddingSettings({ provider: 'missing', model: 'm' }, []).reason, 'saved provider "missing" not found');
  const enabled = embeddingSettings({ provider: 'Local', model: 'embed' }, [{ id: 'x', name: 'Local', url: 'http://127.0.0.1:9/v1/', apiKey: 'k' }]);
  assert.deepEqual(enabled, { enabled: true, provider: 'Local', baseUrl: 'http://127.0.0.1:9/v1', apiKey: 'k', model: 'embed' });
  assert.equal(embeddingSettings({ provider: 'http://127.0.0.1:9/v1', model: 'embed' }, [{ id: 'x', url: 'http://127.0.0.1:9/v1/' }]).enabled, true,
    'a saved provider can be named by its saved base URL');
  assert.equal(embeddingSettings({ provider: 'http://127.0.0.1:8/v1', model: 'embed' }, [{ id: 'x', url: 'http://127.0.0.1:9/v1' }]).enabled, false,
    'an unsaved URL is never used');
  const ranker = new EmbeddingRanker({}, undefined);
  assert.deepEqual(ranker.status, { mode: 'lexical', reason: 'disabled' });
});

test('batches are bounded by count and characters, and long inputs are truncated', () => {
  const texts = Array.from({ length: 70 }, (_, index) => index === 3 ? 'x'.repeat(20000) : `text ${index}`);
  const result = batches(texts);
  assert.ok(result.every(batch => batch.length <= 32));
  assert.ok(result.every(batch => batch.reduce((sum, entry) => sum + entry.text.length, 0) <= 64 * 1024));
  assert.equal(result.flat().find(entry => entry.index === 3).text.length, 8000);
  assert.deepEqual(result.flat().map(entry => entry.index), texts.map((_, index) => index));
});

test('a healthy loopback endpoint embeds chunks in bounded batches and reranks lexical candidates', async () => {
  const endpoint = await startEmbeddingFixture();
  const { index, cleanup } = await indexed();
  try {
    const client = new EmbeddingClient({ baseUrl: endpoint.url, apiKey: 'fixture-key', model: 'fixture-embed' });
    const ranker = new EmbeddingRanker(index.store, client);
    await ranker.indexPending();
    assert.equal(ranker.status.mode, 'hybrid');
    assert.equal(ranker.status.embedded, 40);
    assert.deepEqual(endpoint.requests.map(request => request.inputs), [32, 8]);
    assert.ok(endpoint.requests.every(request => request.url === '/v1/embeddings' && request.authorization === 'Bearer fixture-key' && request.model === 'fixture-embed'));
    const lexical = index.search('shipment 7 route', { k: 5 });
    const hybrid = await ranker.rerank('shipment 7 route', lexical, { k: 5 });
    assert.equal(hybrid.ranking.mode, 'hybrid');
    assert.equal(hybrid.results[0].path, 'src/module7.ts');
    assert.ok(hybrid.results.every(result => typeof result.similarity === 'number'));
  } finally { await cleanup(); await endpoint.close(); }
});

for (const [name, setup, reason] of [
  ['HTTP failure', state => { state.mode = 'error'; }, /^HTTP 503$/],
  ['malformed body', state => { state.mode = 'malformed'; }, /^malformed/],
  ['timeout', state => { state.delayMs = 500; }, /^timeout after 100 ms$/],
]) test(`${name} falls back to lexical ranking with a visible reason`, async () => {
  const endpoint = await startEmbeddingFixture();
  const { index, cleanup } = await indexed();
  try {
    setup(endpoint.state);
    const client = new EmbeddingClient({ baseUrl: endpoint.url, model: 'fixture-embed', limits: { batchSize: 32, batchChars: 65536, inputChars: 8000, timeoutMs: 100 } });
    const ranker = new EmbeddingRanker(index.store, client);
    await ranker.indexPending();
    assert.equal(ranker.status.mode, 'lexical');
    assert.match(ranker.status.reason, reason);
    const requests = endpoint.requests.length;
    const lexical = index.search('shipment 7 route', { k: 5 });
    const result = await ranker.rerank('shipment 7 route', lexical, { k: 5 });
    assert.equal(result.ranking.mode, 'lexical');
    assert.deepEqual(result.results, lexical.results, 'results are the lexical ranking');
    assert.equal(endpoint.requests.length, requests, 'a failed endpoint is not retried in a loop');
  } finally { await cleanup(); await endpoint.close(); }
});

test('cancel aborts the in-flight embedding request', async () => {
  const endpoint = await startEmbeddingFixture({ delayMs: 2000 });
  const { index, cleanup } = await indexed();
  try {
    const ranker = new EmbeddingRanker(index.store, new EmbeddingClient({ baseUrl: endpoint.url, model: 'fixture-embed' }));
    const controller = new AbortController();
    const started = performance.now();
    const pending = ranker.indexPending({ signal: controller.signal });
    setTimeout(() => controller.abort(), 50);
    await pending;
    assert.ok(performance.now() - started < 1000, 'cancel returns well before the endpoint answers');
    assert.deepEqual([ranker.status.mode, ranker.status.reason], ['lexical', 'canceled']);
  } finally { await cleanup(); await endpoint.close(); }
});
