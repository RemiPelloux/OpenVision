import { parentPort, workerData } from 'node:worker_threads';
import { RetrievalIndex } from './retrieval-index.mjs';
import { EmbeddingClient, EmbeddingRanker } from './retrieval-embeddings.mjs';

// Single owner of one workspace folder's index database (OV-504). Jobs that
// write (sync, changes) run one at a time; search, pause, resume, cancel and
// status are answered between batches.
const log = message => parentPort.postMessage({ type: 'log', message });
let index, ranker, current, closing = false;
const queue = [];

async function open(options) {
  index = new RetrievalIndex({ ...options, log });
  const opened = await index.open();
  ranker = new EmbeddingRanker(index.store, options.embeddings?.enabled
    ? new EmbeddingClient({ baseUrl: options.embeddings.baseUrl, apiKey: options.embeddings.apiKey, model: options.embeddings.model })
    : undefined);
  return { ...opened, counts: index.store.counts(), quarantined: index.store.quarantined };
}

async function embedPending(signal) {
  while (ranker.client) {
    await index.checkpoint(signal);
    const before = ranker.status.embedded ?? 0;
    await ranker.indexPending({ signal, limit: 512 });
    if ((ranker.status.embedded ?? 0) === before) break;
  }
}

const jobs = {
  async sync(_message, signal) {
    const status = await index.sync({ signal });
    await embedPending(signal);
    return status;
  },
  async changes({ paths }, signal) {
    const status = paths.length ? await index.applyChanges(paths, { signal }) : await index.reconcilePending({ signal });
    await embedPending(signal);
    return status;
  },
};

function snapshot() {
  return { counters: index?.counters, status: index?.status, ranking: ranker?.status, queued: queue.length,
    running: current?.type, memory: process.memoryUsage() };
}

async function drain() {
  if (current) return;
  while (queue.length && !closing) {
    const job = queue.shift();
    const settled = Promise.withResolvers();
    current = { type: job.type, controller: new AbortController(), settled: settled.promise };
    const started = performance.now();
    try {
      const result = await jobs[job.type](job, current.controller.signal);
      parentPort.postMessage({ id: job.id, ok: true, result: { ...result, elapsedMs: Math.round(performance.now() - started) } });
    } catch (error) {
      parentPort.postMessage({ id: job.id, ok: false, error: { name: error.name, code: error.code, message: error.message } });
    } finally { current = undefined; settled.resolve(); }
  }
}

parentPort.on('message', async message => {
  const reply = (result, error) => parentPort.postMessage(error
    ? { id: message.id, ok: false, error: { name: error.name, code: error.code, message: error.message } }
    : { id: message.id, ok: true, result });
  try {
    switch (message.type) {
      case 'open': return reply(await open(workerData));
      case 'sync': case 'changes': queue.push(message); return void drain();
      case 'search': {
        const lexical = index.search(message.query, { k: message.k, pathPrefix: message.pathPrefix });
        const ranked = await ranker.rerank(message.query, lexical, { k: message.k });
        return reply({ terms: ranked.terms, results: ranked.results.map(({ id, ...result }) => result),
          ranking: ranked.ranking, status: index.status, counts: index.store.counts() });
      }
      case 'pause': index.pause(); return reply({ paused: true });
      case 'resume': index.resume(); return reply({ paused: false });
      case 'cancel': {
        const canceled = queue.splice(0);
        for (const job of canceled) parentPort.postMessage({ id: job.id, ok: false, error: { name: 'AbortError', code: 'ABORT_ERR', message: 'Indexing was canceled' } });
        current?.controller.abort();
        index.resume();
        return reply({ canceled: canceled.length + (current ? 1 : 0) });
      }
      case 'status': return reply(snapshot());
      case 'close': {
        closing = true;
        index?.resume();
        current?.controller.abort();
        await current?.settled;
        index?.close();
        reply({ closed: true });
        return void setImmediate(() => process.exit(0));
      }
      default: throw new Error(`Unknown retrieval worker request: ${message.type}`);
    }
  } catch (error) { reply(undefined, error); }
});
