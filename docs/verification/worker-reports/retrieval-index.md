# Worker report: ov/retrieval-index (OV-502, OV-503, OV-504)

Linux x64 container only (4 CPUs, 15 GiB, Node 24.18.0). Base: `origin/ccr-a39d6f13-jurmdv`.
Work stopped at the owner's request, relayed by the coordinator. See [Status at stop](#status-at-stop).

## Summary

This branch adds OpenVision's own local retrieval stack. Contract:
[retrieval contract](../../recovery/retrieval-contract.md).

- **Enumeration:** ripgrep honouring `.gitignore`, `.cursorignore`, `.cursorindexingignore` and `files.exclude`.
- **Chunking:** tree-sitter where a grammar ships (TS/JS, CSS); line windows for everything else.
- **Storage and ranking:** SQLite FTS5 (`node:sqlite`) with identifier-aware BM25 and a deterministic rerank.
- **Embeddings:** an optional OpenAI-compatible embeddings client, off by default.
- **Incremental indexer:** read/parse counters for every update.
- **Lifecycle:** a single-owner worker with WAL, quick_check quarantine, versioned storage, cancel, pause and idle release.
- **Agent tool:** the build customization that turns the recovered `SemanticSearch` tool into a local `CodebaseSearch` is written and unit-tested. Its native verification has **not** been run.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Retrieval contract doc | Done (`docs/recovery/retrieval-contract.md`) |
| 2 | Index core (`retrieval-index/store/chunk/ignore.mjs`) | Done; unit-tested |
| 3 | Pinned corpus and quality gate (`test:retrieval-quality`) | Done; baseline recorded |
| 4 | Optional `/v1/embeddings` | Done in the core, tested against a loopback fixture. Not wired natively; in-app provider resolution is coded but unverified. |
| 5 | Incremental indexer (OV-503) | Done in the core and unit-tested over temporary Git repos. The `status.json` counters file for native observation has not been started. |
| 6 | Durable storage and lifecycle (OV-504) | Done in the core and unit-tested. Limits are set from the 10,000-file baseline. Pause/Resume/Cancel are not yet commands in the editor. |
| 7 | Editor/Agent integration and native verifiers | Partly done: customization, helper and unit tests are written (commit at stop). Not done: native `verify:retrieval`, `verify:retrieval-incremental`, `verify:retrieval-recovery`, and the indexing phase of `verify:data-destinations`. |

## Defects found and fixed (in this branch's own code)

1. **Undefined service options overrode index defaults.** `batchSize: undefined` made the batch loop a no-op, so nothing was indexed. Found when the first benchmark indexed 0 files. Fixed in `RetrievalIndex` (commit `16e40750`).
2. **ripgrep applied ignore files above the workspace folder.** A project inside an ignored directory of a parent repository indexed nothing. Fixed with `--no-ignore-parent`, which matches editor search and the JS ignore rules (commit `16e40750`).
3. **Customization anchors missed `$`-prefixed minified identifiers.** Fixed before the first commit of the customization.

No recovered-application defect was changed beyond the planned customization.

## Verification

Every unit test was run with the pinned Node 24.18.0. "First-time pass" means the run passed without a code change.

| Command | Run ID / output | Result | First-time pass |
| --- | --- | --- | --- |
| `node --test desktop/retrieval-index.test.mjs` | console | 8/8 | Yes |
| `node --test desktop/retrieval-incremental.test.mjs` | console | 6/6 | No. The first run failed one symlink case because the test fixture's relative link target was wrong. I fixed the test, not the code, and the rerun passed. |
| `node --test desktop/retrieval-embeddings.test.mjs` | console | 7/7 | Yes |
| `node --test --test-concurrency=1 desktop/retrieval-service.test.mjs` | console | 8/8 (cancel, pause, kill -9 of an owned child, corruption, migration, idle release, delete/rebuild) | Yes |
| `node --test desktop/retrieval-tool.test.mjs` | console | 4/4 | No. One assertion in the test was wrong and was fixed. |
| `npm run test:retrieval-quality -- --record` | `logs/retrieval-quality-4NbDmg/report.json` | Baseline: recall@5 0.947, recall@10 0.97, span hit@10 0.90, MRR 0.865, query p50 1.4 ms | Recorded before any ranking change |
| `npm run test:retrieval-quality` | `logs/retrieval-quality-WpBeIX/report.json` | Passes the thresholds | Yes |
| `node desktop/benchmark-retrieval.mjs` (10,000 files, no worker limit) | `logs/retrieval-benchmark-4wxwLZ/result.json` | See the benchmark table below | No. Two earlier runs indexed 0 files (defects 1 and 2). |
| `node desktop/benchmark-retrieval.mjs --limited` | `logs/retrieval-benchmark-5CIoxp/result.json` | Cold index 4.5 s within the 128 MiB old-generation limit | Yes |
| `npm run docs:check` | console | 0 failures (checked before the stop edit) | n/a |

**Benchmark baseline (`logs/retrieval-benchmark-4wxwLZ`):**

| Measure | Result |
| --- | --- |
| Cold index | 5.1 s (4.9 s CPU) |
| Peak worker heap | 29.6 MiB |
| Peak process RSS | 151.8 MiB |
| Warm query | 28–40 ms |
| Single edit | 1 read, 1 parse |
| Warm reopen | 0 reads, 10,001 stats |
| Database size | 29.8 MiB |

**Host notes:**
- `ov` cannot read the proxy CA under `/root`, so a copy was used.
- The first build failed while creating `../OpenVision Projects`; I created that directory as root.
- A clean rebuild on the coordinator base was in progress at the stop request (`logs/rebuild.txt`); its result is recorded in Status at stop.
- `npm run status:features` was not run at this checkpoint.
- No native verifier was run for these stories.

**Limitation:** the relevance corpus was written by a delegated subagent from a brief that excluded any knowledge of the ranking algorithm. It is still synthetic, and authorship by the same model family may bias it. Live embedding quality is not measured.

## Recommendation per story

- **OV-502: not yet Verified.** Remaining Linux gaps:
  - Native `verify:retrieval`: a controlled model calls `CodebaseSearch` and the ranked results show in the chat card.
  - Native verification that the in-app embedding status falls back visibly.
  - The data-destinations indexing phase.
- **OV-503: not yet Verified.** Remaining: `status.json` counters, then native `verify:retrieval-incremental`. That covers the editor-save, external, rename, delete, ignore, symlink, branch checkout and settings cases against counter budgets.
- **OV-504: not yet Verified.** Remaining: Pause/Resume/Cancel commands, then native `verify:retrieval-recovery`. That covers cancel latency, kill -9 of the owned app mid-index, corruption, migration, and idle-release memory with the OV-1003 helper.

## Moved to platform/live stories

- Windows and macOS runs of every retrieval check.
- Live embedding endpoint quality and latency.

## Defaults pending owner decision

These follow the coordinator's brief and are reversible:
- Owned lexical retrieval (FTS5/BM25) is the release scope; embeddings are optional and off.
- Retrieval is owned OpenVision code, not the proprietary GrepClient/MerkleClient.
- No embedding model ships.
- Quality thresholds equal the measured baseline.
- Symbolic links are never followed; targets outside the workspace are skipped.
- `.cursorindexingignore` applies to the index only.

My own choices, also reversible:
- The recovered tool is renamed `CodebaseSearch` and its description now says it is a local index search.
- The index starts lazily on the first search, not at window open.
- Idle release happens after 60 s.

## Open risks

- The customization was developed against the previous build's agent bundle. The rebuild on the coordinator base is the first real install.
- The `SemanticSearch` executor re-chunks results with the recovered tree-sitter router. Its line base (0 or 1) is unverified, so result context could be off by one line.
- With several workspace folders, results use absolute paths for the Read executor. This is untested.
- The in-app embeddings path takes providers from the Agent request (`openvisionProviders`). It is unverified.

## Status at stop

- **Head:** this commit (see `git log`). All work is committed and pushed.
- **Done:** tasks 1–3. Tasks 4–6 are done at core and unit level.
- **Partly done:** task 7 (customization, helper and unit tests committed).
- **Not started:** `status.json` counters, Pause/Resume/Cancel commands, all three native retrieval verifiers, and the data-destinations indexing phase.
- **Last verified run IDs:** `logs/retrieval-quality-4NbDmg`, `logs/retrieval-quality-WpBeIX`, `logs/retrieval-benchmark-4wxwLZ`, `logs/retrieval-benchmark-5CIoxp`.
- **Uncommitted findings:** none.
- **Clean rebuild:** see the line appended below at stop.
- **Remaining work:**

  | Remaining task | Worker sessions |
  | --- | --- |
  | Confirm the rebuild and fix any anchor drift | Part of the next session |
  | `status.json` counters and Pause/Resume/Cancel commands | Part of the next session |
  | `verify:retrieval` (OV-502), including two passes | About one session |
  | `verify:retrieval-incremental` (OV-503), including two passes | About one session |
  | `verify:retrieval-recovery` (OV-504) and the data-destinations indexing phase | About one session |

  In total, about 2–3 worker sessions (quota rounds), run one at a time because the native verifiers are heavy.
