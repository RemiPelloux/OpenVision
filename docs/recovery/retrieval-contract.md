# OpenVision local retrieval contract (OV-502 / OV-503 / OV-504)

18 October 2026. Contract for the OpenVision-owned codebase index and its
Agent search tool. It replaces nothing in the recovered hosted path: the
recovered `FastIndexer` stays disabled by local mode and the native
`GrepClient`/`MerkleClient` stay behind the off-by-default
`instant_grep_indexing` gate ([ownership](rea-retrieval-ownership.md),
[destinations](rea-project-data-destinations.md)). Evidence for each story is
in the [Linux worker report](../verification/worker-reports/retrieval-index.md).

## Scope

| In scope (release) | Out of scope |
| --- | --- |
| Lexical retrieval over the open workspace folder(s): SQLite FTS5 BM25 over identifier-aware terms, deterministic rerank | Hosted repository indexing, Merkle sync, hosted semantic search (`RepositoryService/*`, `SemSearch*`) |
| Optional embeddings from a **saved** OpenAI-compatible provider, off by default | A shipped embedding model or any hosted default endpoint |
| Incremental updates from editor watcher events and `.git/HEAD` changes | Proprietary `GrepClient`/`MerkleClient` behaviour |
| Agent tool `CodebaseSearch` returning ranked chunks | Indexing outside workspace folders, following symbolic links |

Owners: `desktop/retrieval-ignore.mjs` (ignore rules),
`desktop/retrieval-chunk.mjs` (chunking), `desktop/retrieval-store.mjs`
(SQLite and ranking), `desktop/retrieval-index.mjs` (enumeration, incremental
updates, counters), `desktop/retrieval-embeddings.mjs` (optional endpoint),
`desktop/retrieval-service.mjs` (single worker owner, lifecycle) and the build
customization `desktop/retrieval-tool-customization.mjs` (Agent integration).

## Storage

- Location: `<user-data-dir>/openvision/retrieval/v<schema>/<workspace-id>/index.sqlite`,
  where `<user-data-dir>` is the OpenVision profile and `<workspace-id>` is the first
  24 hex digits of SHA-256 of the folder's real path. A `workspace.json` beside the
  database records the folder path. Nothing is written into the project.
- The directory is profile-owned: deleting the profile deletes every index, and
  two profiles never share one. The index is derived data and holds file
  contents of indexed files (chunk text), so it inherits the profile's
  confidentiality; it is never uploaded.
- Schema version **1**. A database whose `meta.schema_version` differs is not
  migrated in place: the store resets it and the service writes new data under
  `v<schema>`; older version directories are removed when the new one is
  complete. The reason is logged and counted (`rebuildReasons`).
- `PRAGMA journal_mode=WAL`, `synchronous=NORMAL`. Every batch of at most
  `batchSize` files (200) commits in **one** `BEGIN IMMEDIATE` transaction; file
  reads and parsing happen before the transaction starts.
- `PRAGMA quick_check` runs whenever an existing database is opened. A failure
  (or an unreadable FTS table) moves the whole directory to
  `<dir>.corrupt-<ms>` (never deleted automatically) and rebuilds.
- `meta.sync_state` is `incomplete` while a full reconcile runs; an interrupted
  run (crash, `kill -9`, cancel) resumes by reconciling, not rebuilding:
  committed files are skipped by their stat identity.

### Tables (schema 1)

| Table | Content |
| --- | --- |
| `meta` | `schema_version`, `settings_hash`, `created_at`, `sync_state`, `git_head`, `files_exclude` |
| `files` | `path` (POSIX, folder-relative), `size`, `mtime`, `ino` (`dev:ino`), `hash` (SHA-256 of bytes), `language`, `chunks` |
| `ignore_files` | Text of every `.gitignore`/`.ignore`/`.rgignore`/`.cursorignore`/`.cursorindexingignore`, `.git/info/exclude` and the global Git excludes |
| `chunks` | `id`, `path`, `hash`, `ordinal`, `start_line`, `end_line`, `kind`, `symbol`, `text` |
| `chunks_fts` | FTS5 (`unicode61 remove_diacritics 2`): `path_terms`, `symbol_terms`, `body_terms`; `rowid` = `chunks.id` |
| `embeddings` | `chunk_id`, `model`, `vector` (Float32 little-endian) — only when embeddings are enabled |

`settings_hash` covers schema, chunker and ranking versions, chunk limits,
the file-size limit and grammar availability. A different hash rebuilds with
reason `settings-changed`. `files.exclude` is **not** in the hash: its changes
re-evaluate only the affected subtree.

## Enumeration and ignores

- ripgrep (`@vscode/ripgrep` from the pinned application) lists files:
  `--files --hidden --no-require-git --no-config --null --glob !.git`. It owns
  `.gitignore`, `.ignore`, `.rgignore`, `.git/info/exclude` and the global Git
  excludes. Symbolic links are **not** followed.
- OpenVision applies, after ripgrep and for every single-path decision:
  `.cursorignore` and `.cursorindexingignore` (Git syntax, in any directory,
  scoped to their directory) and `files.exclude` (VS Code glob syntax, `true`
  entries only, a matching directory excludes its descendants). The same JS
  matcher also re-applies the Git ignore files so created or renamed paths are
  decided without a new enumeration; an ignored directory cannot re-include
  children. `.cursorindexingignore` applies to the index only.
- Limits: files over 1 MiB, files with a NUL byte in their first 8,000 bytes
  and files beyond `maxFiles` (200,000) are skipped and counted.
- Symbolic links are classified, never followed: `alias` (target inside the
  folder, indexed at its real path), `outside` (skipped), `cycle` (`ELOOP`, as
  in OV-401) and `broken`.

## Chunk format (chunker version 1)

`{ startLine, endLine, kind, symbol, text }`, 1-based inclusive lines. Chunks
of one file cover every line. Files with a shipped grammar (`.ts`, `.mts`,
`.cts`, `.tsx`, `.js`, `.mjs`, `.cjs`, `.jsx` with the TypeScript grammar;
`.css`) that parse without errors split at top-level declarations, recursing
into classes, exports and modules longer than 60 lines; short neighbours merge,
and leading comments join the following declaration. Everything else, and any
syntax tree with errors, uses 50-line windows with a 10-line overlap capped at
6,000 characters.

## Ranking (ranking version 1)

1. Query terms: identifier-aware split (camelCase, snake_case, digits),
   lower-cased, stop words removed, duplicates dropped; terms of four or more
   characters also match as prefixes.
2. Candidates: up to 200 rows by `bm25(chunks_fts, 2.5, 4, 1)` (path, symbol, body).
3. Rerank: `-bm25 × (0.25 + coverage) + 4 × coverage² + 2 × symbolHits +
   1.5 × pathHits + 3 × exactPhrase`, where coverage is the share of query
   terms present in the chunk. Ties order by path, then line.
4. At most two chunks per file; top `k` (default 10, maximum 50).

Result: `{ path, startLine, endLine, score, symbol, text }` with the folder.
With embeddings enabled and healthy, the 200 lexical candidates are reranked by
`0.5 × normalizedLexical + 0.5 × cosine`; there is never an embedding-only
full scan. Quality is measured by `npm run test:retrieval-quality` on the
pinned corpus (`desktop/fixtures/retrieval-corpus/`) with thresholds equal to
the recorded baseline.

## Optional embedding endpoint

- Disabled unless `openvision.retrieval.embeddings.provider` names a saved
  OpenVision model provider **and** `openvision.retrieval.embeddings.model` is set.
  There is no default provider, model or URL.
- `POST <provider base URL>/embeddings` (OpenAI-compatible:
  `{ model, input: string[] }` → `{ data: [{ index, embedding }] }`) with the
  provider's saved key as `Authorization: Bearer`.
- Batches of at most 32 inputs and 64 KiB of text; per-request timeout 15 s;
  cancellation aborts the in-flight request; at most one request in flight.
- Any failure (network, HTTP status, malformed body, dimension change, timeout,
  cancel) switches the folder to lexical ranking and sets a visible status
  `{ mode: 'lexical', reason }` that the tool result reports. Retrying is a
  later explicit request, not a loop.

## Data-destination rules

- Index creation, updates and lexical search perform **no network I/O**.
- With embeddings enabled, chunk text and query text go **only** to the
  configured provider's base URL. `npm run verify:data-destinations`'s indexing
  phase proves this with a loopback endpoint.
- Nothing is sent to a hosted Cursor service; the recovered `RepositoryService`,
  `SemSearch*` and snapshot paths are untouched and stay disabled.

## Lifecycle

- One worker thread per window owns every database handle (single owner). The
  extension host talks to it by messages; a stale request after disposal is
  rejected.
- Cancel and pause are cooperative and take effect between batches. Cancel
  leaves every committed batch valid; pause holds the worker until resumed.
- Idle release: after `idleMs` (default 60 s) without work the worker closes
  the database and exits; the next query or change starts it again and
  reconciles by stat.
- Commands: **OpenVision: Rebuild Codebase Index** (delete then rebuild) and
  **OpenVision: Delete Codebase Index** (delete; rebuilds on next use).
