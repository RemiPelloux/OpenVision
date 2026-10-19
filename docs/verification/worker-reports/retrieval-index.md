# Worker report: ov/retrieval-index (OV-502, OV-503, OV-504)

Linux x64 only. Written incrementally; sections marked *in progress* are not final.

## Summary

*In progress.* OpenVision-owned local retrieval: ripgrep enumeration, tree-sitter/line chunking,
SQLite FTS5 lexical ranking, optional embeddings (off), incremental indexer, single-owner worker.
Contract: [retrieval contract](../../recovery/retrieval-contract.md).

## Verification (so far)

| Command | Run ID / output | Result | First-time pass |
| --- | --- | --- | --- |
| `npm run test:retrieval` (index, incremental, embeddings, service) | console | 8 + 6 + 7 + 8 tests pass | Yes, except one incremental test whose own symlink fixture was wrong (fixed the test, not the code) |
| `npm run test:retrieval-quality -- --record` | `logs/retrieval-quality-4NbDmg/report.json` | recall@5 0.947, recall@10 0.97, span@10 0.90, MRR 0.865 | Baseline recorded before any ranking change |
| `npm run benchmark:retrieval` (10,000 files, no limits) | `logs/retrieval-benchmark-4wxwLZ/result.json` | cold 5.1 s, peak worker heap 29.6 MiB, query 28–40 ms, single edit 1 read/1 parse | Second attempt: the first two runs indexed nothing (defect 1, 2 below) |
| `npm run benchmark:retrieval -- --limited` | `logs/retrieval-benchmark-5CIoxp/result.json` | cold 4.5 s under the 128 MiB limit | Yes |
