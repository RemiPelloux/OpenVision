# Profile storage under full-volume and read-only faults

16 October 2026. P0 OV-103 and OV-301 stay Partial at their existing points.
This is a source change after **0.2.0-preview.7**; the published portable
payload is unchanged. **Linux x64 only** (Omarchy/Hyprland, Wayland, Node 26.8.1
tooling, prepared 3.21.13 runtime input). It does not prove Windows or macOS
behavior. It follows the "Not verified" list of the
[Agent I/O-fault report](rea-agent-io-faults.md) and uses the same fault
production. See the [roadmap](../planning/roadmap.md#critical-first-backlog-and-eta)
and the [acceptance ledger](../planning/completion-sprints.md).

## Scope

The disposable **profile** sits on a full tmpfs while these are saved: provider
configuration and its API key, a profile user rule, chat storage, and an Agent
edit's review state. Then space is freed and the app restarts. Approved project
memories (`.openvision/rules/memory-*.mdc`) are saved with the **project** on a
full tmpfs. A final launch uses a read-only view of the profile (EROFS).

EIO, torn sectors and power loss **cannot be produced here**. Device-mapper or
flakey devices need root, and no power-cut harness exists. EFBIG was not applied
to the profile: `RLIMIT_FSIZE` would affect every Chromium and SQLite file of
the host at once. None of these is claimed.

## Owners and the contract

Owners were found by reading the prepared 3.21.13 runtime and the newer
3.24.18 reference. REA was not re-run.

**Observed in source:**

- Renderer `storageService.store()` reaches the main process through the
  `updateItems` IPC call. In the 3.21.13 main bundle
  (`0a9794c8dfe88af0f210ca39457a49ae002e80a3644c40c8f5a0f8aead9d7fd7`), that
  handler calls `storage.set()` for each item and returns at once. SQLite has not
  run yet.
- The main `Storage.flushPending` clears its pending maps before
  `database.updateItems`. A rejected transaction (for example `SQLITE_FULL`) is
  not queued again. The value stays only in the in-memory cache.
- Upstream VS Code rebuilds an erroneous database from that cache on close. This
  runtime only logs a `close_recovery_attempt` event and resolves. So the cached
  value is lost when the app closes.
- The newer 3.24.18 reference has the same IPC handler and the same close
  behavior ([IPC module][ipc-3.24], [storage close][storage-3.24]). This is not a
  difference between versions.
- The renderer's `storageService.flush()` waits on `whenFlushed()`, which never
  rejects. Before this change, provider `persist()` could not observe a failed
  commit.
- Profile user rules already commit with one direct SQL statement and publish
  only after SQLite acknowledges it ([durable rule writes](../engineering/local-rules-concurrency.md#save-acknowledgement)).
- Chat and review records use the `cursorDiskKV` calls, which already await
  SQLite and reject to their callers.
- Approved memories are written with `IFileService.createFile`, in place, into
  the project.

## Pre-fix reproduction (observed)

Verifier run `logs/profile-io-fault-verification-NjwUvx/result.json`
(`--observe`). Build of commit `38d0fe82` without these changes; main bundle
`fc2bb88fdad0d6d3e26fe7dd6c1d61cb03b79cf9224ceff0b950a6995745176e`.

| Store | Observed with the volume full | After freeing space and restarting |
| --- | --- | --- |
| Provider configuration and API key | The dialog closed as saved and the provider was listed. | The configuration row was in SQLite, but the new provider's `secret://openvision.provider.<id>` row was **missing**. The key had been acknowledged and was lost. Requests through that provider would carry no key. |
| Profile user rule | "Error: Could not create rule." The rule was not listed. | Absent; nothing was acknowledged. |
| Chat | The turn waited ("Taking longer than expected…"). No request was sent while full. | It continued once space was freed. The reply survived restart (3 records). |
| Agent edit and review | The request was not sent while full. | It ran after freeing. The kept edit survived restart. |
| Approved memory (project full) | A **zero-byte** `memory-<hash>.mdc` was left behind. The card reported "This memory file already exists with different content." | Retrying after freeing space failed the same way. The torn file blocked the memory permanently. |

Free space appeared at times while the volume was "full" (other profile writers
release blocks). Run `dIsH3h` showed this, so the verifier refills the volume
right before every fault step.

## Corrections

### Main-process storage: queue, retry and acknowledge only after SQLite

[`desktop/profile-storage-durability-customization.mjs`](../../desktop/profile-storage-durability-customization.mjs)
patches the single main-process storage class and its IPC handler.

- A failed batch goes back into the pending queue. A key is requeued only if the
  cache still holds that value and no newer write is pending, so a failed write
  never overwrites a newer value or brings back a deleted one.
- Retries back off from 1 s, doubling up to 30 s. They stop once storage is
  closing; close already makes one last flush attempt.
- `whenFlushed` waiters are still released after a failure, as before.
- `updateItems` now resolves only after every requested key has reached SQLite.
  While any of them is still queued after a failure, it rejects with:
  "OpenVision could not save to its profile storage (SQLITE_FULL: …). The change
  is kept and retried; free disk space and try again."
- The rejections of the individual `set()` calls are no longer left unhandled.
  The final run logged 0 "uncaught exception in main" lines, where earlier runs
  logged several.
- Drift guards: the exact recovered `flushPending` and IPC text must each appear
  once, together with the `JR`/`Um` owner. A partially applied file is refused.
  The first backup is `backups/profile-storage/main.js`. Reapplying is a no-op
  (marker `/* OpenVision durable storage acknowledgement v1 */`).

### Provider configuration

[`model-providers.js`](../../desktop/model-providers.js) `persist()` now:

1. flushes this window's application storage, including a secret stored just
   before; and
2. sends the configuration key itself through the storage client.

Both steps wait for the main acknowledgement. A full volume therefore rejects
the save, and the dialog shows the error. The dialog stays open and nothing is
listed as saved.

If the rollback cannot be saved either, the next provider change first saves
the rolled-back state. If that succeeds, the change proceeds. Previously the
user had to restart. Without a storage client (as in the unit fakes), the old
`flush()` path is kept.

### Approved memories

[`workspace-memory.js`](../../desktop/workspace-memory.js) writes a sibling
`.memory-<hash>.mdc.openvision-<uuid>.tmp` file completely, then moves it into
place. On failure the temporary file is deleted, so no torn memory remains. An
existing file is replaced only when it is a strict byte prefix (including empty)
of the exact content that its hash-derived name identifies. That is the remains
of the earlier in-place writer. Any other existing content is still preserved
and reported.

## Verification

```sh
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 recovery>
npm run test:provider-storage
npm run test:memory
npm run test:agent-review
npm run check:desktop
npm run build:desktop
npm run test:build-integrity
npm run verify:profile-io-faults            # fixed build
npm run verify:profile-io-faults -- --observe   # records without asserting (pre-fix control)
npm run verify:agent-io-faults
npm run docs:check
```

| Check | Result |
| --- | --- |
| `test:provider-storage` | **68/68** pass. New: 6 tests run the recovered main storage class, original against patched: drop against requeue, durable acknowledgement, no overwrite of newer values or deletions, capped backoff, no retry after close, waiters released, drift guards. 2 provider tests cover a full-volume save and retry, and rollback recovery without restart. The rollback test in `provider-headers.test.mjs` now expects recovery once storage accepts writes. |
| `test:memory` | **16/16** pass. New test: a failed write leaves no partial or temporary file, retry succeeds, empty or prefix files are repaired, and edited files are preserved. |
| `test:agent-review` | **88/88** pass |
| `check:desktop` / `docs:check` | Pass / pass (no failures) |
| `build:desktop` | Pass: 239 scripts, 124 manifests, 30 local main-process modules; one storage patch; first backup kept |
| `test:build-integrity` | **26/26** pass |
| `verify:profile-io-faults` | **Pass**: `logs/profile-io-fault-verification-EtKCCY/result.json` (below) |
| `verify:agent-io-faults` | **Pass**: `logs/agent-io-fault-verification-Q0ValX/result.json` |

### Final native run `EtKCCY`

Run on commit `38d0fe82` plus these changes. Main bundle
`7e25307da3abd78f03b0fc0b279b3e820e3b3887e485ea62e4547a7a8cab3d3c`, workbench
`e3a02e2bba65a9daa2fc895109cf39802d7109c470a3229b7b6884f9742b00b0`, verifier
`c29b5b110ed417eac6c7d5293d47d14dc3faadac0037dccf3881d18a6ff5f2f0`.

The profile was on a 384 MiB tmpfs and the project on a 1 MiB tmpfs. Each fault
step started with 0 bytes free.

| Store | While full | After freeing, restart and SQLite inspection | Result |
| --- | --- | --- | --- |
| Provider configuration and API key | The dialog stayed open with the SQLITE_FULL message. The provider was not listed. | The retry from a new dialog saved. After restart the provider was listed. SQLite held both providers and **both key rows**. | **Fixed** (key loss reproduced before the fix) |
| Profile user rule | Saved and listed. SQLite committed into WAL space it already owned. | Present after restart. | **Safe**. In runs `NjwUvx`, `5u5vky` and `F7cFeS` the same step failed visibly ("Could not create rule.") and saved on retry. Both outcomes keep acknowledged data. |
| Chat storage | The turn waited, and no request was sent until space was freed. | The reply finished, 3 SQLite records, visible after restart. | **Safe**, with a visible wait. No error is shown while full. |
| Agent edit and review | The profile was filled when the fixture received the turn's request. The project edit succeeded and no review appeared while full. | The turn finished, the review appeared, Keep was applied, and `notes.md` was the changed text after restart. | **Safe**. Whether the review-snapshot write itself failed is not shown in this run. |
| Approved memory (project full) | "Could not save memory: … ENOSPC: no space left on device". No memory file and no temporary file. | Retry: "Saved to this project". One complete 172-byte file. | **Fixed** |
| SQLite integrity | — | `PRAGMA integrity_check` returned `ok` for the baseline, after the fault session, and at the end. | No corruption observed |
| Read-only profile (EROFS) | A write probe to the read-only view returned `EROFS`. | The host exited with code 1 before any window. No message was observed. The saved `state.vscdb` hash was unchanged. | **Safe** for data. **Not fixed**: there is no user-facing explanation. |

Six controlled requests were all authorized. There were no renderer page errors,
and three host exits all returned 0. `state.vscdb.backup` was absent after every
clean close in this runtime, including the baseline. This change neither creates
nor removes it. The first build backups are kept under `backups/`.

### Agent I/O-fault regression

`verify:agent-io-faults` **passes** on the same build:
`logs/agent-io-fault-verification-Q0ValX/result.json`. The project-volume Agent
edit still keeps its saved bytes on a full volume, and retry, Keep and restart
still work. Profile storage is on the ordinary disk in that verifier.

## Follow-up, 19 October 2026

The [Linux closure report](rea-agent-editing-linux-closure.md) adds Undo of a pending review with the profile
full (review snapshot and record deletion): the bytes are restored, no review row
remains after space is freed and no review returns after restart. The stale
settings-status selector in this verifier was corrected.

## Not verified

- **EIO, torn sectors and power loss.** Not producible here without root.
  Termination during a write belongs to the interruption gate.
- **Review-snapshot `SQLITE_FULL` inside a live turn.** Turns did not issue
  requests while the profile was full. The snapshot recovery owners keep their
  existing [injected-failure evidence](rea-agent-review-recovery.md).
- **Read-only profile UX.** The app exits without explaining why. A read-only
  profile mid-session cannot be produced: tmpfs refuses `remount,ro` while
  SQLite holds the file open for writing.
- **A long stay on a full volume.** A setting that is still unsaved when the app
  quits is lost, but its save was reported as failed. Other workbench state
  (layout, view state) is retried while the app runs but is not acknowledged.
- **Chat while full.** The wait has no specific message. Another agent owns
  chat failure persistence.
- Profile `RLIMIT_FSIZE`, Windows and macOS, and live provider inference were
  not run. No RAM, CPU or latency cost is measured. The extra IPC wait is at
  most one SQLite transaction per renderer flush.

The ledger stays **6/42 Verified (14.29%)**. No story is promoted, because
OV-103 and OV-301 still have open clauses (above, and in their own reports).

[ipc-3.24]: ../../curs_source/modules/3.24.18/208e7b1ba65e410e50a6ddc167ffe358b469aa6079c2b6a7eb6937682771871d-768b05080f06/storageIpc_2.js
[storage-3.24]: ../../curs_source/modules/3.24.18/208e7b1ba65e410e50a6ddc167ffe358b469aa6079c2b6a7eb6937682771871d-768b05080f06/storage_3.js
