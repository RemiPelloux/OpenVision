# Rust rewrite: implementation and migration contracts

**15 October 2026 · design proposal; no Rust workspace implemented.**
Source reference: `a9ebd69691b5eed10c702d3dd6b9014814bdca5a`.
Use with the [roadmap](rust-roadmap.md), [component audit](rust-component-audit.md),
[42-story map](rust-acceptance-map.md) and [performance plan](rust-performance-plan.md).
These contracts refine the existing 195-point baseline and add no packages.

## Proposed code ownership

Create packages only as their vertical slice needs them. This is a responsibility
map, not a request to scaffold empty crates or distribute every package as a
process. Keep domain contracts free of toolkit, provider SDK and OS dependencies.

| Proposed module/package | Owns | Must not own |
| --- | --- | --- |
| `ov-core` | Typed identities, commands/events, versions, errors, edit/job/approval contracts | Network clients, secret values, framework widgets |
| `ov-workspace` | File facts, watchers, search/index scheduling, document generations | Another copy of profile/account truth or its own Agent requests |
| `ov-store` | Schema migrations, transaction boundaries, paged history/checkpoints, account metadata and secret references | Provider inference or serialized plaintext credentials in project files |
| `ov-integrations` | HTTP/protocol parsing, OS secrets, owned processes, Git/PTY/LSP/DAP/MCP and official-client adapters | UI-specific identity parsing or approvals inferred from text |
| `ov-agent` | Provider-independent Agent state, context budgets, tools/approval scheduling, completion/Quick Edit and durable replay references | Raw child-process cleanup or toolkit state |
| `ov-desktop` | Windows/views, editor input/rendering, visible lists, accessibility, themes and event batching | A second store writer or independent interpretation of provider/account IDs |

The transition service executable composes these owners and exposes the local
versioned boundary. The production desktop can embed the same owners when process
isolation is unnecessary. Retain an isolated JavaScript compatibility host only
for the declared extension/webview surface; measure it as part of OpenVision.

## Boundary rules to pin before the first service

| Contract | Required semantics | Failure case to exercise |
| --- | --- | --- |
| Identity | Opaque profile/workspace/account/provider/model IDs are separate from labels; preserve caller-selected URL/path values and explicit unknowns | Same model ID from two providers; same label on two accounts; case/symlink/remote workspace distinctions |
| Requests/events | Versioned named commands, correlated request IDs, document/account generations, ordered sequence numbers and structured `Result` errors | Duplicate/out-of-order event, schema mismatch, old result after project/account switch |
| Local transport | Authenticate caller, restrict OS pipe/socket access, negotiate version, bound frame bytes before decoding | Unauthorized local peer, oversized/truncated frame, slow reader and connection loss |
| Streams/jobs | Bound queue bytes and concurrent work; cancellation reaches sockets/children; terminal state identifies canceled/failed/completed | Stop during preparation/tool call, window close, blocked pipe and failed cleanup |
| Editing | Pin byte/UTF-16/grapheme conversion at protocol boundaries; edits carry expected document version and exact ranges | Unicode/IME, CRLF, external modification, stale completion and multi-file partial failure |
| Caches | Keys cover result-affecting profile/account/model/workspace/document inputs; byte budgets, invalidation, expiry and lifetime have an owner | Credential/model change, branch switch, ignored path change, negative cached result after recovery |
| Authority | Rust core validates capabilities/approvals; extensions and provider output are untrusted inputs | Denied command, path escape, unauthorized tool, revoked approval and stale approved request |
| Diagnostics | Local opt-in records, explicit redaction of credentials/sensitive fields; no ambient environment dump or product telemetry | HTTP error echoing a key; child failure containing private request context |

Use a portable framed protocol for the first integration unless profiling proves
another transport is needed. An authenticated stdio/pipe design can avoid a
discoverable TCP listener. Choose one transport at RUST-02b; adding alternatives
without a supported client increases testing scope. Cancellation and byte bounds
must apply after decompression and account for decoding/serialization expansion.

## Data ownership and format decisions

| Data | Existing evidence | Proposed migration and compatibility gate |
| --- | --- | --- |
| Provider catalog/settings | [model providers](../desktop/model-providers.js), [identity](../desktop/model-identity.js) | Preserve IDs, custom names, URLs, enabled choices, reasoning declarations and separate Tab model; migrate credential references separately |
| Account metadata and secrets | [profile store](../desktop/account-profile-store.mjs), [cleanup](../desktop/account-profile-cleanup.mjs) | Preserve provider/account identity; retain official isolated client stores until their supported migration is proven; selected-account deletion keeps history |
| Rules/settings/profile DB | [durable writes](../desktop/rules-durable.js), [profile paths](../desktop/profile-paths.mjs) | Enumerate current keys/schema first; single transactional writer, backed-up migration and cross-window invalidation; no optimistic lost writes |
| Projects/recents/pins | [project service](../desktop/project-home-service.js) | Preserve filesystem/remote URI identity, pin state and same-window behavior; do not normalize display paths into lookup keys |
| Project metadata | [configuration guide](project-configuration.md), [memory workflow](project-memories.md) | Keep user-editable `.openvision` rules/plans/paste and approved memories as files; transactional metadata must not make these files inaccessible without the app |
| Conversations/checkpoints | [session bridge](../desktop/account-chat-session.cjs), [local metadata](local-conversation-metadata.md) | Establish full existing storage schema; page durable history while retaining tool IDs, encrypted reasoning associations, branches and exact edit/undo state |
| Import/restore backups | [import transaction](../desktop/import-transaction.mjs) | Keep immutable originals and exact before/after hashes; detect edits after preview; interrupted import resumes or rolls back without overwriting new user work |
| Indexes and ephemeral caches | [retrieval gaps](feature-gap-audit.md) | Rebuild under a new versioned directory where parity permits; indexes may be discarded only after confirming they contain no unique user state |
| Unsaved buffers/session state | [Save All](../desktop/save-all-runtime.mjs), [startup ordering](local-startup.md) | Journal unsaved content before destructive owner switches; preserve encoding, line endings and recovered versions; no forced app restart losing work |

SQLite is a candidate owner for transactional state, not a mandate to put every
file in a database. No complete conversation/schema/keyring compatibility is
established yet. RUST-01c must supply real disposable-profile migration fixtures
before RUST-04 writes production data. Do not import an entire environment or
rewrite global home variables to isolate accounts.

## Transfer one subsystem safely

1. **Record:** pin old/new contracts, fixture/build identities, resource budget,
   backup location and per-service rollback decision. Fix the current startup
   gate or use a separately labeled isolated service baseline.
2. **Compare:** run read-only candidate work against disposable copies and check
   exact results/freshness. Do not shadow paid inference, commands, file writes,
   browser logins or external tools with side effects.
3. **Quiesce:** stop new work for this owner, settle/cancel its jobs and retain
   ownership of resources whose cleanup failed. Other editor functions stay open.
4. **Checkpoint:** back up and validate state; record schema/version/digests and a
   recoverable migration journal. Unsaved documents keep a single authoritative
   version. No old/new concurrent writer is permitted.
5. **Transfer:** commit the new owner selection and generation, then start new
   watchers/jobs. Late old-generation events are rejected. Publish state to other
   windows only after durable commit.
6. **Verify:** exercise the real UI-to-core workflow, failure recovery, resource
   budgets, account isolation and idle reactivation. A developer-only demo is not
   the production activation gate.
7. **Revert or promote:** return to the old owner only with a compatible store.
   Restore pre-migration backups only when newer writes are safely exported or
   reconciled; never silently discard them. Require explicit recovery for any
   irreversible schema change.

Rollback must be tested after successful new writes, not just immediately after
migration. Interrupted/denied/disk-full/corrupt-input states require a useful
failure and preserved originals. Keep migration/import readers and backups after
retiring the old runtime; remove obsolete writers, listeners and patch plumbing.

## First deliverable and decision gates

The first implementation slice is **workspace search**, after RUST-01 and the
RUST-02 boundary gates. A user opens a pinned disposable project in the current
UI, searches through the Rust service and sees streaming results. Canceling or
switching project stops actual ripgrep work. Ignore rules, links, result identity
and search matches equal the baseline. Reopen/reactivation and rollback work;
there is one watcher/search owner and a measured whole-app cost comparison.

This uses RUST-03a/b/d slices and claims only their tested clauses. It does not
complete the full 23-point workspace package. Evaluate RUST-07 editor/extension
feasibility early, before the expensive production UI commitment. Prioritize
TypeScript/JavaScript and C/C++ in its language fixtures.

| Stop or revisit decision | Required response |
| --- | --- |
| Current workbench cannot launch | Preserve the startup investigation; use isolated evidence only and leave full-app Rust gain/parity claims unverified |
| Native editor fails IME, accessibility or required extension API | Retain existing desktop; evaluate another candidate or explicitly revise supported scope and points |
| Sidecar increases whole-app RAM without compensating benefit | Profile IPC/duplicate owners; change process layout or reject default activation |
| Retrieval quality drops or locality is unknown | Keep previous owner until corpus/transport contracts pass; faster wrong results do not pass |
| Account adapter requires unsupported login/token access | Retain official-client supported flows; do not invent auth endpoints or bypass account restrictions |
| Migration cannot safely undo writes | Keep preview opt-in with compatible readers/backup export; block production cutover |
| No native Mac/Linux acceptance available | Ship only explicitly verified targets; cross-builds do not earn native acceptance |

No public release or GitHub Actions workflow is implied by this design. Builds,
native checks and packaging remain local. RUST-09 supplies independent source
builds and platform distribution only after its declared gates pass.
