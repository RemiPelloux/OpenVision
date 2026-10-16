# Acceptance gate ownership

Updated 15 October 2026. This clarification preserves all 42 accepted stories and the
80% target. It neither removes release requirements nor promotes any story.
Some historical follow-ups grouped local behavior, performance, authentication,
remote operation and platform validation under one paragraph. Each requirement
below now has a named owner so future evidence is evaluated consistently.

The sprint table remains authoritative. Supplemental requirements already
recorded in follow-ups and the roadmap remain required. A local Windows story can
be verified only for its explicitly declared contract; that never establishes
the independent-build, remote or other-platform release stories. Existing
Verified model/configuration stories follow this same scoped rule.

| Preserved requirement | Primary story | Related story / evidence |
| --- | --- | --- |
| Native user-rule CRUD, migration, first live Agent context, malformed data, acknowledged failed writes, two windows and profile isolation | OV-301 | [Rules evidence](../engineering/local-rules-concurrency.md) |
| Approved project memory creation and legacy review/import, workspace isolation, multi-root choice, links, rejected filesystem writes and stale cross-window reviews | OV-301 | [Memory evidence](../guides/project-memories.md), including native two-renderer IPC propagation/stale rejection; remains Partial because physical I/O recovery is open |
| Native inline-edit exclusion of hidden generated records | OV-301 | [Native seeded-request check passed](../recovery/rea-inline-edit.md): approved rule included, hidden originals excluded and preserved |
| Physical full-disk/I/O recovery for rule and memory persistence | OV-301 | Also part of OV-1004 release failure recovery; SQLite rejection is narrower evidence |
| STDIO/HTTP discovery, Agent approval/denial, Stop, reconnect, timeout, no replay and exact transport cleanup | OV-303 | [Lifecycle](../recovery/rea-mcp-lifecycle.md), [recovery](../recovery/rea-mcp-recovery.md), [cleanup](../recovery/rea-mcp-cleanup.md) |
| Multi-window/profile transport ownership | OV-303 | [Native Agent calls from two windows and separate user-data profiles pass](../recovery/rea-mcp-ownership.md). Named profiles within one host, project-local same-name configurations and cross-window failed cleanup pass on Linux x64 only ([matrix](../recovery/rea-mcp-ownership-matrix.md)). Windows [HTTP disposal/session recovery](../recovery/rea-mcp-cleanup.md#native-session-recovery-verification) passes; remains Partial |
| Permanently pending close retains ownership and exposes a usable recovery/error state | OV-303 | Windows HTTP native fault injection verifies bounded acknowledgement, shared close and recovery after eventual release. Indefinite retention/resource behavior remains unverified under OV-1003; no forced release is implemented |
| Utility-worker abnormal shutdown reported during pending-close verification | OV-403 | The owned host exited 0, but one utility worker reported code 3221225477; cause remains unverified; see [exact run scope](../recovery/rea-mcp-cleanup.md) |
| OAuth consent cancellation, expiry/refresh and secret storage | OV-304 | Has its own explicit acceptance clause; no OAuth pass is implied by unauthenticated MCP fixtures |
| Remote-host resource ownership and native extension-host MCP behavior | OV-703 | Depends on OV-303 and the declared SSH/WSL/container host matrix |
| Long-session memory, watcher/timer ownership, idle/reactivation and resource budgets | OV-1003 | Includes MCP, extensions, editors and remote sessions; short cleanup tests do not close it |
| Native macOS and Linux launch/workflows, storage, sandbox and permissions | OV-902 / OV-903 | Windows and Linux x64 native evidence; macOS unverified |
| Clean independent build without ignored input artifacts | OV-804 | Depends on native/helper replacement stories; no assembled-runtime claim satisfies it |

The 14 October audit inspected actual result JSON, not just report summaries.
OV-301's original table clauses have native rules/concurrency/failure and real
GPT context evidence, plus native memory/import isolation. OV-303's original
table clauses have real native HTTP/STDIO tools, two-minute timeouts and repeated
STDIO close-failure recovery. Both stay Partial because their additional local
gates above are still open. No percentage change follows from this clarification.

Unverified assumptions must not become new acceptance requirements merely by
appearing in an investigation's limitations section. Conversely, already
accepted requirements must not be relabeled as limitations to improve the score.
Record scope changes explicitly against the versioned acceptance baseline before
using them in progress calculations.
