# Agent interruption during outstanding writes and tools

16 October 2026. P0 OV-103 stays Partial at its existing 8 points. This is a
source change after **0.2.0-preview.7**; the published portable payload is
unchanged. **Linux x64 only; it does not prove Windows or macOS behavior.** See the
[roadmap](../planning/roadmap.md#critical-first-backlog-and-eta) and the
[complete acceptance clauses](../planning/completion-sprints.md).

## Scope

OV-103 gate 2: Stop, graceful window close and abrupt exit while an Agent write
or tool call is still outstanding, then restart. Earlier evidence only covered
an abrupt exit after the review was already visible
([review recovery](rea-agent-review-recovery.md#abrupt-exit-verification)).
This report traces ownership of outstanding writes, reproduces three defects,
fixes them at their owners and records what remains unverified. The runtime
input is **3.21.13**. The [3.24.18 Agent execution entry][agent-exec] is a
reference only. All model responses come from a **controlled** local HTTP
fixture; no live or paid inference was used.

The write-helper durability fix itself belongs to the parallel
[I/O-fault report](rea-agent-io-faults.md). This report supplies its
interruption evidence. The two other fixes below are new.

## Ownership of an outstanding Agent edit

Observed in the prepared 3.21.13 bundles and confirmed at runtime where stated:

| Step | Owner | What is acknowledged |
| --- | --- | --- |
| 1. Tool arguments stream; path parsed | `cursor-agent-exec` edit tool: acquires a per-path file lock | Partial tool call shown in the UI |
| 2. Read, compute, write | Edit tool → `LocalWriteExecutor` → helper `yu` (extension host). **Runtime-confirmed:** the probe fired only in `cursor-agent-exec` `yu`; the `cursor-agent-host` `wu` and daemon `writeFileNoFollow` copies never ran for IDE StrReplace. | Nothing yet |
| 3. Report the change | `fileChangeTracker.trackChange` → workbench `_handleFileChangeImpl`: records the review baseline (`originalFileStates`), checkpoint and inline-diff review | Review appears in memory |
| 4. Tool result | Workbench response adapter `handleToolCallCompleted` → edit tool handler: content blobs written immediately; bubble status, tool call and conversation header only marked dirty | Diff block shown; result goes to the next model request |
| 5. Persistence | Composer data: 30-second idle scheduler or shutdown. Inline-diff reviews: storage *should-save* (periodic flush or shutdown) only | — |

Stop aborts the tool call's signal. The write helper does not observe that
signal, so a write already in progress completes. Stop then terminates running
commands through the recovered abort path: `process.kill(-pid)` on the command's
own process group. A graceful window close terminates the extension host without
aborting the outstanding call.

## Interruption method

`npm run verify:agent-interruption` builds a disposable overlay of the source build.
The overlay is a hard-linked tree with real directories, so the application root
resolves inside it. The overlay adds one call to
[a verification-only probe](../../desktop/verify-agent-interruption-probe.cjs) in
each copy of the write helper. Production builds never contain it. When armed
for a file, the probe writes half of the pending bytes and then waits for a
release marker. In the recovered helper it does this after `truncate(0)`; in the
durable helper, on the temporary sibling before rename. The window is therefore
held deterministically. The probe widens a real window; it does not create a new
code path.

- **Stop:** the toolbar Stop button.
- **Graceful close:** the application's own close path. *Quit Anyway* is confirmed
  if prompted.
- **Abrupt exit:** `SIGKILL` to the owned host's process group. Playwright starts the
  host detached. The verifier checks that the group leader is its own launch handle,
  then signals that group. It never selects a process by PID or executable path.
- **Restart:** the same disposable profile is relaunched and then inspected.

Each case uses its own disposable profile under `logs/`. Command children report
their PID, process group and session over a nonce-authenticated socket. Cleanup goes only
through that socket. Process inventory is read-only: the run nonce in
`/proc/*/environ`, or membership of the owned process group.

## Reproduced defects

| # | Defect (pre-fix) | Evidence |
| --- | --- | --- |
| 1 | **Torn file.** SIGKILL or graceful close while the write is in flight leaves neither the original nor the new bytes. In the reproduced case, a 5,485-byte prefix of the 10,971-byte replacement remained. No review existed after restart, and there were 0 restart requests. | `logs/agent-interruption-W5UFZh` (kill), `logs/agent-interruption-5DP4F5` (close and kill). Probe events show one write each. |
| 2 | **Running command survives graceful close.** The `bash` wrapper and its child run in their own session. They were reparented to the user subreaper and outlived the app. After SIGKILL the command survived in later runs (`rUWFJw`, `GzRx5X`) but exited in `5DP4F5`, so that outcome is nondeterministic. | `5DP4F5` `shell-close`: 2 survivors; cleanup went through the nonce socket |
| 3 | **Applied change without a restorable review after abrupt exit.** The write completed and the result reached the model; then the app was killed. After restart the file stayed changed, but the conversation showed only "Edited". There was no diff and no Keep/Undo. The review baseline, the completed tool bubble and the inline-diff review were all still unsaved. Waiting 15 s first was not enough: the review was still not restorable (`KnC1Zg`). | `rUWFJw`, `GzRx5X` (`continuation-kill`, `continuation-late-kill`). SQLite inspection showed no `ofsContent` key, a tool bubble still `loading` and no `inlineDiff:` key. |

## Fixes

- **Durable write**, from the I/O-fault work and adopted here as commits `88d2be4e`
  and `9d92af0b`. [The write owner](../../desktop/agent-write-durability-customization.mjs)
  writes a sibling temporary file, then fsyncs and renames it, so readers see the
  original or the complete new bytes. Version 2 removes stale temporaries for the
  same target that are more than 60 s old before writing again.
- **Command exit ownership.**
  [`agent-command-exit-customization.mjs`](../../desktop/agent-command-exit-customization.mjs)
  wraps the recovered spawner's return in `cursor-agent-exec` and `cursor-agent-host`.
  It records each live command handle. When the extension host exits it sends
  `SIGTERM` and then `SIGKILL` to exactly those owned groups. A synchronous exit
  allows no grace period; Stop keeps its recovered 1 s grace. An abrupt exit runs
  no handler, so on Linux a mode-0700 per-installation journal in the temp
  directory records `{owner, child}` as PID, start time and process group. The next
  extension host ends a command only when its owner is dead and all three values
  still match. Records are removed when the command exits. Windows x64 commands
  keep the job-object owner and return before this code.
- **Review persistence before acknowledgement.**
  [`agent-review-persist-customization.mjs`](../../desktop/agent-review-persist-customization.mjs)
  adds three persistence points:
  1. In `_handleFileChangeImpl`, the composer is persisted once when a file gains its
     review baseline. Later edits to the same file do not persist again.
  2. Also in `_handleFileChangeImpl`, the inline-diff review is persisted before the
     change returns to the extension host.
  3. In the response adapter, the composer is persisted after a successful edit's tool
     call is stored and before the adapter returns.

  This uses the existing `manuallyPersistComposer` and `persistInlineDiffs` owners.

All three transforms keep their first backups and are idempotent. Producer drift
fails the build. A clean rebuild and a repeat build both pass.

## Verification

Commands, all run with the prepared 3.21.13 recovery and the final source:

```sh
npm run test:agent-review
npm run test:shutdown
npm run check:desktop
npm run build:desktop
npm run test:build-integrity
npm run verify:agent-interruption
npm run verify:agent -- --review-recovery
npm run docs:check
```

| Check | Result |
| --- | --- |
| `test:agent-review` | **84/84** pass, 0 skipped. This includes 5 new baseline/completion/review persistence tests with recovered-owner controls, and the I/O-fault durability tests. |
| `test:shutdown` | **14/14** pass. 8 are new: graceful exit ends a running command (including one that ignores `SIGTERM`), abrupt exit followed by restart ends the orphan, Stop is unchanged, and recovered-spawner controls show survival. |
| `check:desktop`, `test:build-integrity` | Pass; **26/26** |
| `build:desktop` | Clean and repeated builds pass: 239 scripts, 124 manifests, 30 local main-process modules |
| `verify:agent-interruption` | **Pass**, `logs/agent-interruption-q0Q97x`. Details below. |
| `verify:agent -- --review-recovery` | **Pass**, `logs/agent-verification-8dKelo`: 29 authenticated controlled requests, no renderer errors, five host exits with code 0 on the final build |
| `docs:check` | Pass, no failures |

Final native matrix (Linux x64, Hyprland/Wayland, controlled fixture, parent
`9d92af0b` plus this change). Workbench SHA-256
`66cdc0721f58a86f6a702daa3915d719f0f0a85a05743aca8fe8eda095380097`, Agent exec
`4ba7f82fc415b48541326935dfdaf84c6c3e29f31025a8a4617e7b26a365cf84`, verifier
`498c227c205ed9da1c30dd9b95cf9ea1a7f7d9baa41a06d83ac9f975381f5ba4`:

| Case: interruption point | Bytes after exit / after restart | Restored state and recovery | Requests |
| --- | --- | --- | --- |
| `write-stop`: write held, Stop, then release | changed / changed | Keep/Undo shown; Undo and Confirm restore the **exact original** bytes | 1; 0 at restart and recovery |
| `write-close`: write held, graceful close | **original** / original | No review (nothing applied); one write | 1; 0 at restart |
| `write-kill`: write held, SIGKILL | **original** / original | No review. Retrying in a new chat applies once with Keep/Undo, and the aged temporary is swept | 1 + 2 for the retry; 0 at restart |
| `continuation-kill`: write applied, next inference held, SIGKILL | changed / changed | **Keep/Undo restored**; Undo and Confirm restore the exact original bytes | 2; 0 at restart and recovery |
| `continuation-late-kill`: as above, after 15 s | changed / changed | Same as above | 2; 0 |
| `approval-kill`: command awaiting approval, SIGKILL | — | The command never ran and did not auto-run after restart | 1; 0 |
| `shell-close`: approved command running, graceful close | — | The command ended with the app; no survivors | 1; 0 |
| `shell-kill`: approved command running, SIGKILL | — | The command outlived the killed app, as expected because no handler can run. The next start ended it, with identity checks, within 10 s | 1; 0 |

All 12 requests were authenticated fixture requests. The write helper executed
once per case (plus once for the retry). There were no renderer errors, and no
nonce-bearing process remained after the run. There were 11 graceful exits with code 0 and
5 owned process-group SIGKILLs. Screenshots of the restored review, the rejected
review and the restarts with torn/no review were inspected with the byte assertions.

Intermediate runs are not credited. In `7sfFAD` and `s8r4D3` only the baseline was
persisted; in `QdyRa1` the tool bubble was also persisted, but not the inline
review, and the review was still missing. `GzRx5X` and `rUWFJw` precede the
review-persistence fix.

## Unverified and limitations

- **Power loss and kernel crash** cannot be simulated honestly here. The fsync of
  the temporary file and directory is inherited, but power-cut durability is not
  proven. A crash between the rename and the review persistence is a small window
  that was not held in this run.
- A kill between the temporary write and the rename leaves a hidden
  `.<name>.openvision-<uuid>.tmp` sibling. It is visible in the explorer and in Git
  status until the same file is written again more than 60 s later. Orphans of
  files that are never written again remain.
- After Undo and Confirm restore the bytes, the single-file review bar can still
  show *Undo/Keep*. The same happens after a graceful close, so it is recorded, not
  fixed. After an interrupted write that was never applied, the conversation still
  says "Edited" even though the bytes are unchanged.
- An orphaned command keeps running while the app is dead, until the next start.
  The journal requires Linux `/proc`; macOS gets the graceful-exit handler only.
  A command whose group leader exits while other group members keep running is not
  tracked; the recovered Stop path has the same limit. Each installation path leaves
  one empty journal directory in the temp directory.
- Persistence now runs once per newly reviewed file and once per successful edit.
  Its CPU, latency and storage cost was not measured. No RAM, CPU or token saving is
  claimed.
- Not covered: Stop/close during argument streaming, non-edit tools other than
  Shell, MCP tools, multi-file turns interrupted between files, subagents, crash of
  the extension host alone and live providers. Windows and macOS behavior is
  unverified.

- The `write-kill` retry now runs in a new chat; before 18 October it could land in the restored chat, see [verifier stability](../verification/verifier-stability-linux.md#3-agent-interruption-write-kill-retry-verifyagent-interruption).

These are source-build results; the published preview.7 package is unchanged.
OV-103 stays Partial and no story is promoted. The ledger stays **6/42 Verified
(14.29%)**.

[agent-exec]: ../../curs_source/modules/3.24.18/bfd9c46359253e0a4ec6c03bae57cfb837af746699a715df8e7fafe978e48cdf-4766f708d5db/entry.js
