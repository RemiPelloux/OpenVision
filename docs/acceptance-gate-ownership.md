# Acceptance gate ownership

14 October 2026. This clarification preserves all 42 accepted stories and the
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
| Native user-rule CRUD, migration, first live Agent context, malformed data, acknowledged failed writes, two windows and profile isolation | OV-301 | [Rules evidence](local-rules-concurrency.md) |
| Approved project memory creation and legacy review/import, workspace isolation, multi-root choice, links, rejected filesystem writes and stale cross-window reviews | OV-301 | [Memory evidence](project-memories.md); remains Partial |
| Native inline-edit exclusion of hidden generated records | OV-301 | Recovered-function evidence exists; native seeded-request check remains open |
| Physical full-disk/I/O recovery for rule and memory persistence | OV-301 | Also part of OV-1004 release failure recovery; SQLite rejection is narrower evidence |
| STDIO/HTTP discovery, Agent approval/denial, Stop, reconnect, timeout, no replay and exact transport cleanup | OV-303 | [Lifecycle](rea-mcp-lifecycle.md), [recovery](rea-mcp-recovery.md), [cleanup](rea-mcp-cleanup.md) |
| HTTP failed close, native session-reinitialization failed close, multi-window/profile transport ownership | OV-303 | Remaining native lifecycle gates; remains Partial |
| Permanently pending close retains ownership and exposes a usable recovery/error state | OV-303 | Also OV-1003 retention budget; remains unverified |
| OAuth consent cancellation, expiry/refresh and secret storage | OV-304 | Has its own explicit acceptance clause; no OAuth pass is implied by unauthenticated MCP fixtures |
| Remote-host resource ownership and native extension-host MCP behavior | OV-703 | Depends on OV-303 and the declared SSH/WSL/container host matrix |
| Long-session memory, watcher/timer ownership, idle/reactivation and resource budgets | OV-1003 | Includes MCP, extensions, editors and remote sessions; short cleanup tests do not close it |
| Native macOS and Linux launch/workflows, storage, sandbox and permissions | OV-902 / OV-903 | Windows-only native evidence remains explicitly limited |
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
