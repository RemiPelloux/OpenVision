# Worker report: ov/retrieval-index (OV-502, OV-503, OV-504)

Linux x64 container: 4 CPUs, 15 GiB, Xvfb with a D-Bus session, plaintext test
keyring, Node 24.18.0 (`/opt/nvm/versions/node/v24.18.0`). Base: `origin/main`
at `805e6561`. Second session, 19 October 2026; it resumes the
[earlier stop](#history).

## Summary

OpenVision now has its own local retrieval stack. The contract is in the
[retrieval contract](../../recovery/retrieval-contract.md).

- **Enumeration:** ripgrep honours `.gitignore`, `.cursorignore`,
  `.cursorindexingignore` and `files.exclude`.
- **Chunking:** tree-sitter is used where a grammar ships (TypeScript/JavaScript
  and CSS); other files use line windows.
- **Storage and ranking:** SQLite FTS5 (`node:sqlite`) with identifier-aware BM25.
- **Embeddings:** an optional OpenAI-compatible `/v1/embeddings` client, off by
  default.
- **Incremental indexer:** every job writes a `status.json` counters file.
- **Single-owner worker:**
  - WAL journal; one transaction per batch;
  - quick_check on open, with quarantine and rebuild;
  - versioned storage and migration;
  - Pause, Resume, Cancel, Rebuild and Delete commands;
  - idle release and reactivation.
- **Agent tool:** the recovered `SemanticSearch` tool, which local mode disabled, is
  enabled through an AST-guarded, idempotent build customization. It is
  answered from the OpenVision index under the name `CodebaseSearch`, without
  any hosted repository.

Every native verifier for the three stories passes on Linux x64. This includes the new
indexing phase of `verify:data-destinations`.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Retrieval contract (`docs/recovery/retrieval-contract.md`) | Done |
| 2 | Index core (`retrieval-index/store/chunk/ignore.mjs`) with unit tests | Done |
| 3 | Pinned corpus (74 files, 50 queries) and `test:retrieval-quality` | Done |
| 4 | Optional embeddings: off by default; bounded batches; timeout and cancel; visible lexical fallback | Done (unit and native, loopback fixture) |
| 5 | Incremental indexer (OV-503) with counters JSON | Done (unit and native) |
| 6 | Durable storage and lifecycle (OV-504); limits from the 10,000-file baseline | Done (unit and native) |
| 7 | Agent integration and native verifiers, plus the data-destinations indexing phase | Done |

## Defects found and fixed

All were found and fixed in this branch's own code. The commits are on
`ov/retrieval-index`.

1. **Undefined service options overrode the index batch defaults**, so nothing
   was indexed. The first benchmark caught it, and `RetrievalIndex` now drops
   undefined options. First session, merged.
2. **ripgrep applied ignore files above the workspace folder.** It now uses
   `--no-ignore-parent`, which matches editor search and the JS rules. First
   session, merged.
3. **The extension-activation anchor stopped matching.** Another customization now
   inserts a temporaries sweep at the top of `activate`. The owner is now
   resolved through the `activate: () => name` export and parsed by AST. The
   regex also excludes `deactivate`. Commit `5b95aef5`.
4. **DataCloneError in the editor.** `files.exclude` from the configuration API
   is a proxy and cannot be posted to a worker. The service now clones its
   worker data as JSON, with a regression test. Native evidence:
   `logs/retrieval-tool-reU1GB`. Commit `b5b4c324`.
5. **A `files.exclude` change caused a whole-folder pass.** The helper disposed
   the service on any settings change, so the next activation did a full stat
   reconcile (0 reads, 1 enumeration; `logs/retrieval-incremental-0ZBMcU`).
   Services are now reconfigured in place and reconcile only the changed scope.
   Unit test added. Commit `334dfb71`.
6. **A canceled full reconcile never resumed** until the next activation. A
   canceled or failed reconcile now resumes on the next search. I found this
   while writing the recovery verifier, before any native run. Commit `25e42f14`.

## Verification

| Command | Run ID | Result | First-time pass |
| --- | --- | --- | --- |
| `npm run build:desktop` (clean: `source/`, `electron-host/`, `build/recovery/` and the journal removed) | `logs/rebuild2.txt` | Complete; `Agent CodebaseSearch answers from the local OpenVision index: verified` | Yes, after the defect 3 fix |
| `npm run build:desktop` (repeat) | `logs/rebuild3.txt` | Agent bundle SHA-256 unchanged (idempotent) | Yes |
| `npm run test:retrieval` | console | 45/45 | Final run (tests were added during the session) |
| `npm run test:retrieval-quality` | `logs/retrieval-quality-oWicEv/report.json` | At baseline (recall@5 0.947, recall@10 0.97, span hit@10 0.90, MRR 0.865) | Yes |
| `npm run test:data-destinations` | console | 21 pass, 1 skip, 0 fail | Yes (the skip already exists on main and is unrelated) |
| `npm run test:build-integrity` | console | 26/26 | Yes |
| `npm run verify:retrieval` | `logs/retrieval-tool-Cgr17q`, `-1wUMEW` (before defect 5); `-tsa69B`, `-WIGvKT` (final code) | Pass | No. The first run (`reU1GB`) hit defect 4. Two runs (`M5wxJg`, `15oqHB`) and the run after them (`gpAV7i`) failed on verifier selectors that did not expand the grouped "Explored N searches" transcript. |
| `npm run verify:retrieval-incremental` | `logs/retrieval-incremental-0ZBMcU` (before defect 5); `-2okrYi`, `-BbF3rc` (final) | Pass | Yes (`0ZBMcU` passed first time; defect 5 was found in its counters) |
| `npm run verify:retrieval-recovery` | `logs/retrieval-recovery-0lhkHt`, `-cuUiPU` | Pass | Yes |
| `npm run verify:data-destinations` | `logs/data-destinations-tpr0fE`; `-xz6v5u`, `-KyDnmp` (final) | Pass: 0 non-provider requests and 0 connections; embeddings carrying the content canary went only to the loopback provider | `tpr0fE` passed first time. `Rl2wUU` failed: my new indexing step typed into the new chat before its input was ready (verifier race, fixed). |
| `npm run docs:check` | console | 0 failures | Yes |
| `npm run status:features` | console | Runs (18/44 Verified on main; ledger not edited here) | n/a |

**`verify:retrieval` (OV-502).** Tool and ranking checks:
- `CodebaseSearch` is offered to the custom provider and the hosted name
  `SemanticSearch` is not. Its description names the OpenVision index.
- On the 74-file corpus, the expected file ranked first for a natural-language,
  an identifier and a path query (`q01`, `q26`, `q46`).
- The result is visible in the chat transcript once expanded.
- `target_directories` restricts results to `server/src/auth`.
- Index status: 74 files, 220 chunks, 37 syntax-chunked and 37 line-chunked.

Embeddings checks:
- Embeddings are off by default; no embeddings request was made.
- After enabling them against the loopback endpoint returning 503, the status bar
  showed `OpenVision index: lexical ranking (HTTP 503)` and lexical results were
  still returned.
- With a healthy endpoint: 8 requests, at most 32 inputs each, 220 chunks
  embedded, hybrid ranking.

**`verify:retrieval-incremental` (OV-503)**, final run `BbF3rc`. Counter deltas
per case, all with 0 full rebuilds:

| Case | Reads | Parses | Enumerations | Full syncs | Other |
| --- | --- | --- | --- | --- | --- |
| Editor edit and save | 1 | 1 | 0 | 0 | |
| External edit | 1 | 1 | 0 | 0 | |
| Rename | 0 | 0 | 0 | 0 | 1 rename |
| Delete | 0 | 0 | 0 | 0 | 1 deletion |
| `.cursorindexingignore` in `docs` | 1 (the ignore file itself) | 1 | 1 | 0 | Subtree `docs`; 2 deleted |
| Symlinks | 0 | 0 | 0 | 0 | 1 outside and 2 cycle links classified, none followed |
| Branch checkout | 1 | 1 | 0 | 0 | `git diff` covered 2 files |
| `files.exclude` (`pipeline/**`) | 0 | 0 | 1 | 0 | Subtree `pipeline`; 10 deleted |

**`verify:retrieval-recovery` (OV-504)** on the 10,001-file fixture, with
`0lhkHt` / `cuUiPU`:
- **Cancel latency:** 90.4 / 104.9 ms (budget 1,000 ms).
- **`kill -9` of the owned app mid-index**, through its own process handle:
  - quick_check `ok`;
  - no process from the recorded family survived;
  - the restart read only the uncommitted files (8,801 / 9,001), with no rebuild.
- **Corruption** (first 4 KiB overwritten): the directory was quarantined as
  `<id>.corrupt-<ms>`, kept, and all 10,001 files were rebuilt.
- **Migration:** `schema_version` set to 0 led to a rebuild with reason
  `schema 0 -> 1`, and the stale `v0` directory was removed.
- **Idle release** (15 s): extension-host private memory (USS plus swap, all 4
  extension-host processes) went from 675.3 to 592.8 MiB (−82.5) and
  −80.4 MiB in the second run. Reactivation took 1.6 s with 0 reads and 0 full
  syncs.
- **Rebuild and Delete commands:** Rebuild read all 10,001 files; Delete removed
  the database.

**Host notes:**
- `ov` cannot read the proxy CA under `/root`.
- Packages installed: `gnome-keyring libsecret-tools xdotool imagemagick sqlite3 iproute2`.
- `verify:data-destinations` needs `/usr/sbin` on `PATH`.

**Limitations:**
- The model is a controlled fixture, not live inference. Embedding vectors come
  from a hashed bag-of-words fixture.
- The idle-memory figures cover one fixed workload on a shared host. They are
  not a general memory claim.
- The relevance corpus is synthetic and was written by a subagent that did not
  see the ranking code; bias from shared model authorship is possible.

## Recommendation per story

- **OV-502: promote to Verified on Linux x64.** All Linux clauses pass with
  measured quality and limits:
  - parsing and chunking, ranking, pinned relevance fixtures;
  - unavailable-backend behaviour (visible lexical fallback);
  - the configurable endpoint, which is off by default and loopback-only in the
    data-destinations capture.
- **OV-503: promote to Verified on Linux x64.** Edit, rename, delete, ignored
  paths, symlinks, branch change and configuration change each invalidate
  exactly the expected records. Counters are recorded, and no small edit
  triggers a whole-project pass.
- **OV-504: promote to Verified on Linux x64.** The run covers cancel and pause,
  restart after `kill -9`, corruption, schema migration, index deletion and
  rebuild. Worker limits come from the recorded 10,000-file baseline, and idle
  release with reactivation is measured.

## Moved to platform/live stories

- Windows and macOS runs of every retrieval check.
- Live embedding endpoint quality and latency.
- Retrieval quality with a live model choosing the queries.

## Defaults pending owner decision

These follow the coordinator's brief and are reversible:
- Owned lexical retrieval (FTS5/BM25) is the release scope; embeddings are
  optional and off.
- Retrieval is owned OpenVision code, not the proprietary GrepClient/MerkleClient.
- No embedding model ships.
- Quality thresholds equal the measured baseline.
- Symbolic links are never followed; targets outside the workspace are skipped.
- `.cursorindexingignore` applies to the index only.

My own choices, also reversible:
- The recovered tool is renamed `CodebaseSearch`, with a description stating
  that it searches the local index.
- The index starts on the first search, not at window open.
- Idle release happens after 60 s (`openvision.retrieval.idleSeconds`).
- An embedding provider may be named by a saved provider's base URL, because
  the Agent request carries provider ids and URLs but not display names. Unsaved
  URLs are never used.

## Open risks

- The first search in a large folder waits up to 20 s for the initial index and
  then answers with partial results. The 10,000-file cold index takes about 5 s.
- Multi-root workspaces return absolute paths to the recovered Read executor.
  This is unit-tested in the helper only, not natively.
- The recovered result re-chunker's line base (0 or 1) is not independently
  checked. Ranked files and spans are correct in the tool output.
- The idle-release memory delta covers all four extension-host processes on a
  shared host. Attribution to the worker alone is inferred.

## History

The first session stopped at `a87a7b4c` at the owner's request, with a failed
rebuild. Defect 3 caused that failure, and it ran under the root shell's
default Node 22. That earlier status has been merged into `main`. This session
restarted the branch from `origin/main`.
