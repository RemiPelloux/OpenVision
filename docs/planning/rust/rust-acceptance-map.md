# Rust rewrite: complete feature acceptance map

**15 October 2026 · proposed replacement coverage, no Rust acceptance credit.**
Source snapshot: `a9ebd69691b5eed10c702d3dd6b9014814bdca5a`.
The [existing ledger](../completion-sprints.md) owns the 42 feature contracts and
their current status. This table maps all 42, including the six already Verified,
to the [36 Rust packages](rust-roadmap.md#implementation-packages-and-user-outcomes).
Existing verification does not automatically verify a replacement implementation.

Package references identify work already sized in the **195 provisional points**.
These rows add no points and do not change the **322-point feature backlog**.
Scope decisions for remote/specialized modes can require additional packages and
points before production scope is accepted. All original acceptance clauses still
apply; the short gates below highlight likely rewrite regressions.

## Chat, Agent and models

| Story | Replacement packages | Required evidence before switching owner |
| --- | --- | --- |
| OV-101 | RUST-01a, RUST-01b, RUST-09d | Pin fixtures, source/build/dependency identities, supported scope and comparable baseline; maintain a separate Rust result ledger |
| OV-102 | RUST-04b, RUST-05a, RUST-05b | Real selected-provider streaming, history/retry/branch continuity and upstream Stop; fixture and live-provider results stay separate |
| OV-103 | RUST-05b, RUST-06a, RUST-08c | Exact multi-file apply/reject/undo; command approval/denial, cancellation, restart and child cleanup without unrelated edits |
| OV-104 | RUST-05a, RUST-05b | Explicit/saved/inherited subagent model and reasoning survive tools/retries; no silent account/provider fallback |
| OV-105 | RUST-02b, RUST-05c | Cancellation before context completion prevents dispatch; late buffered results cannot modify a superseding document version |
| OV-201 | RUST-04c, RUST-05a, RUST-08d | Custom URL/key/name, manual/discovered catalogs, persistence, malformed catalogs and credential replacement preserve exact routing |
| OV-202 | RUST-05a, RUST-08d | Both settings and Agent selectors handle 10,000 entries with bounded visible rows, grouping/search, keyboard access and focus restoration |
| OV-203 | RUST-05a, RUST-05d, RUST-08d | Provider-specific capabilities, default omission and invalid saved effort handling; no shared invented reasoning scale |
| OV-204 | RUST-02b, RUST-05a, RUST-08d | Status/offline/malformed/tool/image/context failures retain useful structured errors, redact credentials and release I/O; no automatic duplicate paid request |

## Local customization, projects and developer tools

| Story | Replacement packages | Required evidence before switching owner |
| --- | --- | --- |
| OV-301 | RUST-04a, RUST-05b | Rules reach first Agent context, remain workspace-scoped and survive concurrent writes; suggested memories need approval; legacy imports retain originals |
| OV-302 | RUST-01c, RUST-04a, RUST-06d | Profile/project/global precedence for rules, skills, agents, plugins and MCP is explicit; `.openvision` migration preserves independent profiles and installations |
| OV-303 | RUST-06a, RUST-06d | Actual native Agent uses both declared transports with approvals, reconnect/timeout/cancel and retained failed-cleanup ownership; optional control-plane success is separate |
| OV-304 | RUST-04c, RUST-06d | Supported MCP OAuth/auth consent, cancel, expiry/refresh and restart; no key in config/logs; customization watchers dispose correctly |
| OV-401 | RUST-03a, RUST-04a, RUST-08a, RUST-08b | Same-window project open/clone/resume, multi-root operations, recents and unsaved protection; links/permissions/external edits and watcher overflow remain correct |
| OV-402 | RUST-06c, RUST-07b, RUST-08b, RUST-08e | TypeScript/JavaScript and prioritized C/C++ workflows; LSP diagnostics/rename/references/formatting use correct position encodings and incremental versions |
| OV-403 | RUST-06a, RUST-06b, RUST-06c, RUST-08e | Native shell resize/Unicode/Ctrl+C, tasks/problem matching and debugger step/stop; all owned descendants release after session/window close |
| OV-404 | RUST-03b, RUST-08c | Branch/worktree/status/staging/conflicts preserve dirty/untracked files; only owned worktrees are cleaned; interruption/restart recovery is rerun |

## Retrieval and AI editing

| Story | Replacement packages | Required evidence before switching owner |
| --- | --- | --- |
| OV-501 | RUST-01a, RUST-03c, RUST-09a | Trace actual file/context/index destinations and loaded dependencies; unknown locality remains unknown until observed |
| OV-502 | RUST-03b, RUST-03c | Pinned relevance corpus and quality gates, explicit embedding/ranking endpoints and useful unavailable-backend behavior |
| OV-503 | RUST-03a, RUST-03c, RUST-03d | File/rename/delete/branch/config changes invalidate only affected versions; count reads/parses/index updates and preserve ignore/link semantics |
| OV-504 | RUST-03c, RUST-03d, RUST-04a | Pause/cancel, interrupted index writes, schema changes and rebuilds recover; byte/worker budgets and idle reactivation pass |
| OV-601 | RUST-01a, RUST-05c | Version the new completion/prediction contracts and preserve evidence distinguishing current client behavior from backend assumptions |
| OV-602 | RUST-05a, RUST-05c, RUST-08b | Useful multi-language/project suggestions from configured providers; malformed/partial/empty response handling and separate native live checks |
| OV-603 | RUST-05c, RUST-07b, RUST-08b | Exact Unicode/single/multiline/partial acceptance, undo, pending typing/Escape/file-switch cancellation and latency budgets |
| OV-604 | RUST-03c, RUST-05c, RUST-08b | Explicit next-edit prediction scope; correct navigation/ranges, freshness, measurable quality and first/subsequent latency; generic autocomplete alone is insufficient |

## Imports, extensions and dependency ownership

| Story | Replacement packages | Required evidence before switching owner |
| --- | --- | --- |
| OV-701 | RUST-01c, RUST-04a, RUST-08d | Import preview, JSONC/snippets/protected settings, idempotency, source preservation and exact restore; secret/chat/profile exclusions remain visible |
| OV-702 | RUST-07c, RUST-08e, RUST-09a | Real representative extension install/update/uninstall, language packs/webviews and native ABI checks; publish every unsupported required API |
| OV-703 | RUST-01a, RUST-06a, RUST-06c, RUST-08e | Scope SSH/WSL/containers at Gate A; add packages/points for included remote hosts, routing/secrets and reconnect/cleanup before claiming support |
| OV-704 | RUST-01a, RUST-05a, RUST-05b, RUST-08d | Inventory intended image/browser/computer modes; add explicit implementation packages for included modes; permissions, input/results, cancellation and helper cleanup pass |
| OV-801 | RUST-01a, RUST-03c, RUST-07c, RUST-09a | Bind each required compiled dependency to role, source/license/version, ABI and reuse/replacement decision; inventories alone do not prove runtime necessity |
| OV-802 | RUST-02a, RUST-06b, RUST-07c, RUST-09a | Build selected host/OS/storage/watcher/terminal bindings from declared inputs, or remove their consumers; external engines retain pinned source provenance |
| OV-803 | RUST-03c, RUST-05b, RUST-06a, RUST-09a | Replace required opaque retrieval/Agent helpers with owned behavior; authority, malformed input and cleanup pass; no pseudocode-as-build-source claim |
| OV-804 | RUST-09a, RUST-09d | A clean checkout builds and runs without ignored recovery inputs, old executable or undocumented local files; repeat build and explain nondeterminism |

## Distribution, performance and privacy

| Story | Replacement packages | Required evidence before switching owner |
| --- | --- | --- |
| OV-901 | RUST-09a, RUST-09b, RUST-09c | Claimed Windows architectures pass clean install plus full declared editor/secrets/import/Agent/completion/MCP/extensions suite and OpenVision identity checks |
| OV-902 | RUST-09b, RUST-09c | Actual macOS/architecture machines verify keychain, input, accessibility, permissions and distribution signing/notarization where claimed |
| OV-903 | RUST-09b, RUST-09c | Declared Linux distributions/display environments verify keyring, sandbox, terminal and full critical suite; existing-runtime evidence cannot verify Rust |
| OV-904 | RUST-04a, RUST-04b, RUST-09b, RUST-09d | Interrupted install/upgrade, schema migration, rollback/uninstall and edit/history retention; old executable must never write an incompatible new store |
| OV-1001 | RUST-03d, RUST-04b, RUST-05b, RUST-05e | Equivalent tasks measure total tokens/requests, retained session state and Stop; replay/branch/tool reasoning survives eviction and reload |
| OV-1002 | RUST-05c, RUST-07b, RUST-08b, RUST-08d | Measured frame/input tails, bounded visible transcript/catalog rows and incremental file work; batch streams without losing tool/error boundaries |
| OV-1003 | RUST-02c, RUST-03d, RUST-06a, RUST-08f | Whole-process-family cold/warm/active/idle/long-session cost, disposed watchers/timers/children, retryable cleanup and successful lazy reactivation |
| OV-1004 | RUST-01c, RUST-02d, RUST-09c, RUST-09d | Full supported release matrix, corrupt state/permissions/secrets/authority/failed-cleanup recovery, migration rehearsal and honest remaining limitations |
| OV-1005 | RUST-01a, RUST-05d, RUST-09c | No built-in collection/upload paths; process-tree networking across real workloads on claimed platforms; retained client/extension traffic assessed separately |

## Additions that must also survive

The 42-story denominator predates some later UX and account additions. The Rust
release matrix must explicitly carry them alongside these stories:

- Multiple Codex/Claude profiles; supported direct browser sign-in/callback;
  switching while the editor stays open; delete credentials/cache while keeping
  history; provider-reported usage with unavailable/stale states.
- Existing Agent account routing and API connections, separately configured Tab
  autocomplete, model reasoning capabilities and provider identity.
- First-launch onboarding with Settings replay, local titles, large paste files,
  approved memories, custom themes, OpenVision branding and reduced motion.

These are covered by the outcomes of RUST-04/05/08; their explicit release cases
are pinned in RUST-01a. Do not change the denominator or count them twice to
improve a progress score.

## Reporting rule

For each replacement record: package ID, original story/clause, platform,
old/new owner, build/fixture digests, actual result, evidence type, performance
comparison and rollback result. A passed producer/unit test cannot alone close a
native UI or live-provider gate. Mark unrun tests unverified and blocked runs
blocked. The Rust Verified count starts at zero; porting a previously Verified
story requires new evidence before credit transfers.
If an original clause explicitly requires rebuilding a host that the new
architecture retires, record an accepted contract/baseline revision before
claiming that clause closed. Replacing the dependency is an architectural
decision, not permission to silently relax the existing acceptance ledger.
