# Linux reliability session — 16 October 2026

One coordinated session on Linux x64 (Omarchy/Hyprland Wayland, Node 26.8.1 tooling,
prepared **3.21.13** runtime input), following [`objective.md`](../../objective.md).
Work ran in parallel isolated worktrees, one per acceptance gap, and was merged into
`main` only after review, a clean rebuild and the combined suites passed.

**All results are Linux x64 source-build evidence. They do not prove Windows or
macOS behavior, and the published 0.2.0-preview.7 package does not contain any of
these fixes.** Model responses came from controlled local fixtures unless a row says
"live". The acceptance ledger is unchanged at **6/42 Verified (14.29%)**: no story
passed every clause, so none was promoted.

## Defects reproduced and fixed

| Story | Defect (reproduced natively before the fix) | Fix | Evidence |
| --- | --- | --- | --- |
| OV-103 | A full disk during an Agent edit truncated the saved file to a fragment, with no review to reject | Agent writes use a synced sibling temporary file and rename; in-place fallback restores prior bytes on failure | [I/O faults](../recovery/rea-agent-io-faults.md) |
| OV-103 | SIGKILL or close during an Agent write left a torn file | Same durable write; stale temporaries are swept | [Interruption](../recovery/rea-agent-interruption.md) |
| OV-103 | Approved Agent shell commands outlived window close; orphans survived abrupt exit | Owned command groups end with the extension host; an identity-checked journal reclaims orphans on next start | [Interruption](../recovery/rea-agent-interruption.md) |
| OV-103 | After abrupt exit, an applied edit had no restorable Keep/Undo review | Review baseline and inline review persist before the tool result is acknowledged | [Interruption](../recovery/rea-agent-interruption.md) |
| OV-103 | A failed review-record deletion after Keep All resurrected accepted edits as pending after restart | Deletions are owned until storage acknowledges them, retried, and joined at shutdown | [Review deletion](../recovery/rea-agent-review-deletion.md) |
| OV-103 | Keep All during snapshot save left the record behind; one failing group member left a stuck review; retries repeated completed work | Post-commit cleanup resumes from the failed step without replay | [Review deletion](../recovery/rea-agent-review-deletion.md) |
| OV-102/204 | A provider stream ending without a finish reason was retried automatically: 5 requests in 30 s for one submission | One request; partial output kept with explicit Resume | [Failure matrix](../recovery/rea-provider-failure-matrix.md) |
| OV-102 | An unresolved provider failure and its Try again disappeared after restart | The failure record is saved with the chat, redacted, and restored; dismissal persists | [Failure matrix](../recovery/rea-provider-failure-matrix.md) |
| OV-204 | Mid-stream disconnect showed "terminated"; malformed stream showed a raw JSON error; tool/image rejection had no guidance; a balance/quota 403 said the key was rejected | Actionable messages for each class | [Failure matrix](../recovery/rea-provider-failure-matrix.md), [live Linux](live-provider-linux.md) |
| OV-103/301 | On a full profile volume a provider save reported success but the API key was never written | Profile storage acknowledges only after SQLite accepts the write and retries failures | [Profile I/O faults](../recovery/rea-profile-io-faults.md) |
| OV-301 | A full disk left a zero-byte memory file that blocked every retry | Memories are written atomically; empty leftovers are repaired | [Profile I/O faults](../recovery/rea-profile-io-faults.md) |
| OV-303 | MCP STDIO children survived window close and profile switch | Window and old-profile subscriptions are released | [MCP matrix](../recovery/rea-mcp-ownership-matrix.md) |
| OV-302 | Rules leaked in from parent folders and the home folder | Rule discovery is confined to the opened folder | [Rules isolation](../recovery/rea-rules-isolation.md) |
| OV-302 | Skills, commands, hooks and subagents were read from `~/.claude`, `~/.codex`, `~/.agents`, `~/.grok` and `~/.openvision` | User customizations resolve from the OpenVision profile | [Global paths](../recovery/rea-global-path-isolation.md) |
| Tooling | `test:provider-probe` failed: its fake fetch read `Authorization` while the app correctly sends lowercase `authorization` | Test reads headers case-insensitively and asserts no probe error | commit `a952fa54` |
| Tooling | Linux native verifiers pressed Ctrl+Y for Redo (Windows only) | Ctrl+Shift+Z outside Windows; review-storage and MCP verifiers now run on Linux | [I/O faults](../recovery/rea-agent-io-faults.md) |

## Behavior changes users should know

- **Rules** from a parent folder or parent repository are no longer inherited by a
  project opened as a subfolder. Copy them into the project.
- **Skills, commands, hooks and subagents** kept in `~/.claude`, `~/.codex`,
  `~/.agents`, `~/.grok`, `~/.cursor` or `~/.openvision` are no longer listed.
  Nothing is moved or deleted; the [project configuration guide](../guides/project-configuration.md)
  gives a one-time copy command.
- **Agent writes** on Linux/macOS need room for a full copy of the file.

## Investigation only (no product change yet)

| Story | Result | Open gate |
| --- | --- | --- |
| OV-501 | Static destination trace; no-root network-namespace capture and canary payload analyzer ([report](../recovery/rea-project-data-destinations.md)) | Native capture of an owned project; decrypting proxy |
| OV-1005 | Process-family capture found three automatic startup fetches: the extension control list (`api2.cursor.sh`), a spellcheck dictionary download and TypeScript type acquisition (`registry.npmjs.org`) ([report](../recovery/rea-telemetry-linux.md)) | Fixes prepared but not built or committed; full workload with a long idle run |
| OV-302 | Remaining home-folder writers inventoried, with a design for a profile-home environment variable ([report](../recovery/rea-global-path-isolation.md)) | Implement; two-installation run; a verifier that fails on any home write |
| OV-403 | New `verify:shutdown-cycles` reproduces three defects ([report](../recovery/rea-shutdown-ownership.md)): inheritable pty descriptors let a user-detached process keep earlier shells alive after a graceful close; a Node debuggee is orphaned after an abrupt exit; the terminal host intermittently outlives the app. Task/launch definitions and terminal history survive restart. Windows exit 134 is attributed to a Node abort/assertion from code reading; the worker `0xC0000005` crash is unexplained. | A candidate fix (journal for terminals/debuggees, pty-host shutdown) reclaimed the debuggee but not the pinned shells, so it is not committed. `verify:shutdown-cycles` is expected to fail until fixed. |

## Live provider runs

The Codex Easy connections (the same providers and per-provider keys the user's
`pi` agent uses) were saved through the app, encrypted with the Secret Service and
persisted across restart. **Every request was rejected with HTTP 403
`INSUFFICIENT_BALANCE`**, so no successful live inference, edit, Stop or history run
was possible. Real 401/403 failure display, failure persistence across restart and
one-request retry did pass live. About 26 upstream requests, no tokens consumed.
Commands to finish once balance is restored are in [live provider Linux](live-provider-linux.md).

## Verification on merged `main`

Clean rebuild from the shared runtime input, then:

| Check | Result |
| --- | --- |
| `check:desktop`, `build:desktop`, `docs:check`, `status:features` | Pass |
| `test:build-integrity` | 26/26 |
| `test:agent-review` | 95/95 |
| `test:agent-retry` | 28/28 |
| `test:agent-timeout` | 41/41 |
| `test:agent-relay` | 19/19 |
| `test:provider-errors` | 49/49 |
| `test:provider-storage` | 68/68 |
| `test:provider-probe` | 10/10 |
| `test:model-discovery` | 39/39 |
| `test:mcp`, `test:mcp-lazy` | 50/50, 47/47 |
| `test:memory` | 16/16 |
| `test:shutdown` | 14/14 |
| `test:namespace` | 32/32 |
| `test:paste` | 6/6 |
| `test:completion` | 38/38 |
| `test:telemetry` | 28/28 |
| `test:data-destinations` | 6/6 |
| `test:retrieval` | 10/10 |
| `test:desktop` | 161/161 |
| Native, on merged builds during the session: `verify:agent -- --review-recovery`, `verify:review-deletion`, `verify:agent-io-faults`, `verify:profile-io-faults`, `verify:provider-matrix`, `verify:provider-errors`, `verify:mcp-ownership`, `verify:mcp-config-ownership`, `verify:global-paths`, `verify:rules-isolation` | Pass |
| Native: `verify:shutdown-cycles` (new) | Fails by design: reproduces the open OV-403 defects |
| Native: `verify:agent-interruption` | 7/8 cases in a run alongside four other native verifiers; the failing `write-kill` retry case passed twice when rerun alone. Recorded as timing sensitivity under load. |

## Not done

- No story promoted; Windows and macOS were not rerun with any of these fixes.
- No release was built or published; preview.7 remains the latest download.
- Power loss, kernel crash and device EIO cannot be produced on this host.
- Unfinished pi provider import and manual model capabilities remain uncommitted in
  a worktree. That work found that the app never checks image support before
  sending an image to a model.
