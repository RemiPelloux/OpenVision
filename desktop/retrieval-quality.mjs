import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { RetrievalIndex } from './retrieval-index.mjs';
import { repositoryRoot, retrievalRuntime } from './retrieval-runtime.mjs';

// OV-502 relevance harness over the pinned corpus. A result is relevant at
// file level when its path is an expected path, and at span level when its
// line range also overlaps an expected span. Thresholds are the recorded
// baseline (desktop/retrieval-quality-baseline.json); falling below fails.
// Usage: node desktop/retrieval-quality.mjs [--record]
const corpus = join(repositoryRoot, 'desktop/fixtures/retrieval-corpus');
const baselinePath = join(repositoryRoot, 'desktop/retrieval-quality-baseline.json');

export async function evaluate({ k = 10 } = {}) {
  const queries = JSON.parse(await readFile(join(corpus, 'queries.json'), 'utf8'));
  const store = await mkdtemp(join(tmpdir(), 'ov-retrieval-quality-'));
  const index = new RetrievalIndex({ root: join(corpus, 'project'), directory: join(store, 'index'), ...retrievalRuntime() });
  try {
    await index.open();
    await index.sync();
    const rows = queries.map(entry => {
      const started = performance.now();
      const { results } = index.search(entry.query, { k });
      const latencyMs = performance.now() - started;
      const paths = new Set(entry.expected.map(span => span.path));
      const fileRank = results.findIndex(result => paths.has(result.path)) + 1;
      const spanHit = result => entry.expected.some(span => span.path === result.path &&
        result.startLine <= span.endLine && result.endLine >= span.startLine);
      const spanRank = results.findIndex(spanHit) + 1;
      const found = cut => new Set(results.slice(0, cut).filter(result => paths.has(result.path)).map(result => result.path)).size / paths.size;
      return { id: entry.id, kind: entry.kind, query: entry.query, fileRank, spanRank, fileRecall5: found(5), fileRecall10: found(10),
        latencyMs: Math.round(latencyMs * 10) / 10, top: results.slice(0, 3).map(result => `${result.path}:${result.startLine}-${result.endLine}`) };
    });
    const mean = values => Math.round(values.reduce((sum, value) => sum + value, 0) / values.length * 1000) / 1000;
    const summarize = list => ({ queries: list.length,
      recallAt5: mean(list.map(row => row.fileRecall5)), recallAt10: mean(list.map(row => row.fileRecall10)),
      spanHitAt5: mean(list.map(row => row.spanRank > 0 && row.spanRank <= 5 ? 1 : 0)),
      spanHitAt10: mean(list.map(row => row.spanRank > 0 ? 1 : 0)),
      mrr: mean(list.map(row => row.fileRank ? 1 / row.fileRank : 0)) });
    const kinds = Object.fromEntries([...new Set(rows.map(row => row.kind))].sort().map(kind => [kind, summarize(rows.filter(row => row.kind === kind))]));
    const latencies = rows.map(row => row.latencyMs).sort((left, right) => left - right);
    return { metrics: summarize(rows), kinds, latencyMs: { p50: latencies[Math.floor(latencies.length / 2)], max: latencies.at(-1) },
      index: { ...index.store.counts(), syntaxParses: index.counters.syntaxParses, lineChunkings: index.counters.lineChunkings },
      misses: rows.filter(row => !row.fileRank || row.fileRank > 5).map(({ id, query, fileRank, top }) => ({ id, query, fileRank, top })), rows };
  } finally {
    index.close();
    await rm(store, { recursive: true, force: true });
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const report = await evaluate();
  const record = process.argv.includes('--record');
  const baseline = record ? undefined : JSON.parse(await readFile(baselinePath, 'utf8'));
  const failures = baseline ? Object.entries(baseline.thresholds).filter(([name, minimum]) => report.metrics[name] < minimum)
    .map(([name, minimum]) => `${name} ${report.metrics[name]} < ${minimum}`) : [];
  await mkdir(join(repositoryRoot, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(repositoryRoot, 'logs/retrieval-quality-'));
  const output = { checkedAt: new Date().toISOString(), node: process.version, thresholds: baseline?.thresholds, failures, ...report };
  await writeFile(join(directory, 'report.json'), JSON.stringify(output, null, 2) + '\n');
  if (record) {
    const thresholds = Object.fromEntries(['recallAt5', 'recallAt10', 'spanHitAt10', 'mrr'].map(name => [name, report.metrics[name]]));
    await writeFile(baselinePath, JSON.stringify({ recordedAt: output.checkedAt.slice(0, 10), run: `${directory.slice(repositoryRoot.length + 1)}/report.json`,
      note: 'Thresholds equal the measured baseline of ranking version 1 on the pinned corpus; lower values fail.', thresholds }, null, 2) + '\n');
  }
  console.log(JSON.stringify({ metrics: report.metrics, kinds: report.kinds, latencyMs: report.latencyMs, misses: report.misses.length, failures }, null, 2));
  console.log(`Retrieval quality report: ${directory}/report.json`);
  if (failures.length) process.exitCode = 1;
}
