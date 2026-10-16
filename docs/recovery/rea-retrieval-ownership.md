# Retrieval ownership and data boundaries

15 October 2026. This source-build follow-up fixes a reproduced initialization
race and maps the retrieval boundaries. **OV-501 remains Unknown, OV-503/504
remain Planned and OV-1003 remains Partial.** No acceptance story is promoted.
The preview.6 portable payload is unchanged.

## Reproduced initialization race

The recovered search service obtains a feature gate, per-root exclusions and an
index-memory setting asynchronously before constructing its native client. A
workspace change disposes the existing client and starts another initialization.
The old request previously remained eligible to install its result.

The recovered-owner regression reproduces this sequence:

1. Initialization A waits for project A's exclusions.
2. The workspace switches to B; initialization B creates B's client and watcher.
3. A resumes, disposes B's client and installs A's obsolete root.

The same missing ownership check allowed pending work to create a client after
the service was disposed. The source customization now gives each initialization
an attempt token. A newer attempt or disposal invalidates that token. Gate,
exclusion and configuration continuations check it before changing state or
creating resources. Only the outer attempt owns the in-flight flag; a stale
completion cannot clear the flag for newer work. A disabled gate releases the
existing client, and rejected gate reads settle without an unhandled rejection.

Client release is separate from attempt invalidation so a current initialization
can replace its previous client without invalidating itself. Failed native
disposal retains the client reference for a cleanup retry. The installer keeps
an immutable backup, rejects changed source contracts and is idempotent.

This prevents redundant native-client creation in the controlled race: **two
clients before, one after**, with the current project retained. It is not an
application RAM benchmark. Token use, CPU time, cold/warm latency and peak
process-family memory were not measured for this change.

## Verification

`npm run test:retrieval` executes the actual recovered service class with
controlled host/native dependencies. Its ten checks cover the original failure,
stale gate/configuration/error completions, disposal at every asynchronous
boundary, healthy creation, disabled indexing, failed cleanup and installer
backup/idempotence. This proves owner behavior; the native search implementation
and full editor workspace-switch race are not exercised by those tests.

The combined retrieval, acceptance-ledger, generated-artifact and extension
telemetry run passes **26 tests** (`logs/retrieval-regressions.txt`). Desktop
syntax and the production source build pass. Build integrity validates 236
scripts, 124 manifests and 28 local main-process modules.

Windows project regression `logs/project-scale-verification-T0grmI/result.json`
passes on the initial candidate at both 100 and 10,000 files. Five rounds of
create/change/delete produce 15 expected notifications per project, no unrelated
fixture notifications and no recursive-watcher restarts during edits. Both
hosts exit 0. File-symlink checks are unavailable (`EPERM`). This checks the
editor's native watcher behavior, not retrieval-index invalidation or disk-read
counts.

The final build repeats the same native regression successfully in
`logs/project-scale-verification-uqGfOD/result.json`, with both hosts exiting 0
and no page errors. It uses retrieval entry SHA-256
`139ebdbf586cac364fc502bfc03891dccfd6e744d1a6e3414a7139e33cdd4e10`.
This final revision also removes the superseded inner in-flight flag owner.
The native verifier's existing identity record hashes the workbench; the
retrieval digest above was read separately from the built artifact for this audit.

Commands use the pinned Node 24.18.0 toolchain:

```sh
npm run test:retrieval
npm run test:feature-status
npm run check:desktop
npm run build:desktop
npm run verify:project:scale
```

## REA and static data-flow map

REA analyzed the prepared application's retrieval entry and worker, selecting
four exact source/manifest paths. Parent Evidence:
`ev_3fdaf01dadf228727faddb4062f9e68b507851b2995e4a1e01e12d29998ed193`.
Summary receipt:
`ev_2bb53ebe05e2c57726b33e45f34b92981284f19752dc51b329d130555039b752`.
The entry bundle hit a stack limit, so the graph is **partial**; 16,608
unselected files remain outside analysis. A later bundle export failed because
the MCP transport closed. These identifiers refer to the returned session
receipts; this pass has no complete portable export. No identical analysis was
rerun to hide that limitation.

Direct source inspection then followed the specific owners below. Before this
change, the retrieval entry SHA-256 was
`45d247171b0c3105ae1dd38f585adad9df6dc737ca96c6c573f09e7b372b8a43`.
The authentic readable recovery used by the regression has SHA-256
`abf50fc1197106c937360ca4369e477dd6fd85912ba4eee469def5b67d81872d`;
the prepared entry also contains earlier OpenVision customizations.

| Owner | Source-observed contract | What remains unknown |
| --- | --- | --- |
| `GrepClient` | Workspace paths/exclusions, helper path and optional document budget; query, callback query, warmup, tracked state, change/create/delete and dispose methods | Native search/index algorithms, incidental networking, actual memory and full application call coverage |
| `MerkleClient` | Root map; incremental build with file limit, blocklists, ignore patterns and log path; file lists, subtree hashes and simhash | Ignore semantics, invalidation correctness, native memory and incidental networking |
| Repository sync | Reads file bytes and passes UTF-8 contents, transformed relative path **and a plaintext relative-path field** to `fastUpdateFileV2`; handshake/subtree sync/index creation/deletion contracts also exist | Actual enabled operations, configured server destinations and observed process-tree traffic |
| Repository transport | Uses a credential-supplied `repoBackendUrl` and token; HTTP/2 with a separate fallback path | Current runtime configuration, credential eligibility and endpoint behavior |
| Semantic search | RPC declarations for `SearchRepositoryV2`, `SemSearchFast` and `SemSearch` | Their invoking workbench paths were not found within the selected entry/worker search scope |
| `CodebaseSnapshotClient` | Local snapshot directory, change/commit/packfile/cleanup/close methods; separate registration and chunk-upload code uses credential-supplied `backendUrl` | Native behavior and any alternate activation paths |

Snapshot uploader/telemetry **registration is already disabled** by the existing
OpenVision telemetry customization. Its retained upload definitions are not
evidence that the current activation path uploads data. Conversely, the presence
of a native addon or transformed path does not prove that all processing stays
local or that file contents are encrypted.

The Windows native binding loaded successfully in an isolated Node 24.18.0
invocation, and reflection observed the exported classes/methods above. No client
was constructed and no query or upload was requested in that probe. This is
binding-load evidence, not evidence of its use by an editor session. Loader
SHA-256: `3e05cd21a7688c230610c6c0e1e40f2c63df0fa954069619891bfd89b40ae93d`.
Addon SHA-256: `f4cd2c907a9891b48f932d8e6e9035c6a2cfefdc980f26c9f1237148538dc452`.

## Next gates, in dependency order

OV-501 follow-up: [project-data destinations](rea-project-data-destinations.md).

1. **OV-501 / 13 points:** trace the actual loaded addon and process-family
   traffic on disposable search/index fixtures; resolve semantic-search callers
   and record each operation's destination without enabling hidden uploads.
2. **OV-503 / 8 points:** exercise native index edits, renames, deletes, ignores,
   links, branch changes and overlapping project switches; count filesystem and
   index work. The owner race fix closes only one prerequisite.
3. **OV-504 / 8 points:** test cancellation, pause/restart, corrupt/interrupted
   index writes, cleanup failures, idle release and reactivation.
4. **OV-1003 / 8 points:** measure fixed cold/warm and long-session workloads
   before claiming memory savings; extend native evidence to supported platforms.

These are existing roadmap packages, not additional points to add to its total.
