# Agent edits under physical I/O and full-volume faults

16 October 2026. P0 OV-103 stays Partial at its existing 8 points. This is a
source change after **0.2.0-preview.7**; the published portable payload is
unchanged. **Linux x64 only; it does not prove Windows or macOS behavior.** See the
[roadmap](../planning/roadmap.md#critical-first-backlog-and-eta) and the
[complete acceptance clauses](../planning/completion-sprints.md).

## Scope

This report covers OV-103 gate 1: genuine ENOSPC, EROFS, EFBIG and partial
writes during Agent editing, and whether acknowledged edits, review snapshots,
rules or configuration survive. It traces the write paths, reproduces one
defect with real kernel faults, fixes it at the owner and records what remains
unverified. The runtime input is **3.21.13**; the recovered 3.24.18
[inline-diff module][inline-diff] is a reference only.

## Write paths and owners

| Path | Owner (3.21.13 runtime input) | Observed | Status |
| --- | --- | --- | --- |
| Agent file edits (StrReplace and other edit tools) | `LocalWriteExecutor` in `extensions/cursor-agent-exec/dist/main.js`, helper `yu`. The same recovered helper is `wu` in `cursor-agent-host/dist/main.js` and `writeFileNoFollow` in the agent-host daemon `daemon.cjs`. | The edit tool sends the full new text to the executor. The helper opens the target with `O_WRONLY\|O_CREAT\|O_NOFOLLOW`, calls `truncate(0)`, writes in place, then fsyncs. `ENOSPC` maps to a `noSpace` result ("No space left on device"). On any failure the executor returns before `fileChangeTracker.trackChange`, so no review and no `originalFileStates` entry is created. | **Defect reproduced and fixed** (below) |
| Review snapshots (`setStoredInlineDiff`) | `storageService.cursorDiskKVSet` → main process `cursorDiskKV` table in `state.vscdb` (SQLite, `journal_mode = WAL`, `synchronous = NORMAL`) | A failed statement rejects to the caller and marks the connection erroneous. On close, an erroneous connection skips the `.backup` copy. The maintained [snapshot recovery](rea-agent-review-recovery.md) and [retryable history](rea-agent-undo-retry.md) owners already handle a rejected write by keeping the review and allowing retry. | Not physically faulted in this run |
| Accepted file bytes | The Agent write above. Observed in the final native run: Keep left the on-disk bytes unchanged. Reject and Undo restore through the editor's text-file save. | Inferred from a search of the runtime's main and workbench bundles: only settings resources request `.vsctmp` atomic writes, so ordinary file saves appear to truncate in place. | Reject/Undo restore under a full volume is not faulted here |
| Rules | [`commitRules`](../../desktop/rules-durable.js): a single SQLite statement, published only after acknowledgement | A failure rejects before publication. | Not physically faulted |
| Provider configuration | [`model-providers.js`](../../desktop/model-providers.js) `storage.store(...)` → generic ItemTable flush | **Inference from code, not reproduced:** main-process `flushPending` clears its pending maps before `updateItems`, and a rejected flush is not re-queued. A configuration change that fails to flush on a full volume could therefore stay only in memory until it is written again. | Open; needs a profile-on-full-volume native run |

## Reproduced defect

### Fault production on this host

No root, `fuse2fs` or loop setup was used. Every fault comes from the kernel:

- **ENOSPC.** `unshare -rm` creates a disposable user and mount namespace. A
  128 KiB (tests) or 1 MiB (native) tmpfs is mounted inside it, and the code
  under test runs as the invoking uid through a nested
  `unshare --map-user=<uid> --map-group=<gid>`. A filler file consumes the free
  blocks; deleting it frees space again.
- **EROFS.** A read-only bind view of a second namespace tmpfs
  (`mount --bind` then `mount -o remount,bind,ro`).
- **EFBIG and partial writes.** `prlimit --fsize=65536`, with no namespace. Node
  receives a short write followed by `EFBIG`.
- **EIO.** Not produced: device-mapper or flakey devices need root. A
  zero-byte short write is the nearest substitute; it now throws `EIO`.

The mounts disappear with their namespace. Nothing outside the run's own
directory is mounted or modified.

### Producer-level control

[`desktop/agent-write-faults.cjs`](../../desktop/agent-write-faults.cjs) executes
the extracted recovered helper against these faults. A 20,000-byte saved file is
replaced by 101,200 bytes:

| Fault | Recovered helper result |
| --- | --- |
| ENOSPC (tmpfs full) | `ENOSPC`. The file is left as a 20,480-byte prefix of the new text and the saved bytes are gone. Freeing space does not bring them back. |
| EFBIG (RLIMIT_FSIZE) | `EFBIG`. The file is left as a 65,536-byte prefix. A new file is left partial. |
| EROFS | `EROFS` at open. The saved bytes are intact because nothing was truncated. |

### Native pre-fix reproduction

[`npm run verify:agent-io-faults`](../../desktop/verify-agent-io-faults.mjs) runs
the native app with its project on a full 1 MiB tmpfs. Run
`logs/agent-io-fault-verification-GKZsTD/result.json` used the 1c753c64 source
build without the fix. Agent-exec SHA-256:
`80506f897ba6058c46325f5d16fa4c62524fbe4429c077a7134b7c49e738d2e1`.

1. The volume was filled; 0 bytes free.
2. A controlled StrReplace inserted about 90 KB into the saved 25,490-byte
   `notes.md`. The tool result was `Error: No space left on device`.
3. On disk, `notes.md` became a **28,672-byte prefix of the new text**. Every
   saved line from the edit point onward was lost. No review or Keep control
   appeared.
4. After the filler was deleted (1,015,808 bytes free), the file stayed
   corrupt. The retried StrReplace failed with "The string to replace was not
   found" because the anchor line had been destroyed.

Five authenticated controlled requests were made, with no renderer errors; the
host exited 0. The run's own assertion failed as expected. This is the user-data
loss the OV-103 clause forbids: the editor reported a failed edit, yet the
saved file was destroyed and nothing offered recovery.

## Correction at the owner

[`desktop/agent-write-durability-customization.mjs`](../../desktop/agent-write-durability-customization.mjs)
replaces all three bundled copies of the helper. It was coordinated with the
parallel OV-103 interruption investigation, which found the same in-place
truncation torn by SIGKILL; this one owner now serves both gates. That investigation's runtime probe (its own worktree, pre-fix
Linux run `agent-interruption-5DP4F5`) observed IDE StrReplace using only the
agent-exec `yu` copy. The agent-host `wu` and daemon copies were instrumented
but never ran; they are replaced so that every copy behaves the same.

- **POSIX, new files or files with one link owned by this uid.** The new bytes
  go to a sibling `.<name>.openvision-<uuid>.tmp`, created with
  `O_EXCL|O_NOFOLLOW|O_CLOEXEC`. The temp file gets the original mode (and
  owner/group where permitted), is fsynced and closed. The target's `lstat` is
  checked again, then the temp file is renamed over the target. The executor's
  existing directory fsync then makes the rename durable. On any failure the
  temp file is removed and the original is untouched.
- **Windows, hard-linked or foreign-owned targets.** These keep the in-place
  write, which preserves link and ownership semantics. The previous bytes are
  read first; if the write fails they are written back, or a newly created file
  is removed. A failed restore is attached as `openvisionRestoreError` and the
  original error is still raised.
- A zero-byte write now throws `EIO`; it no longer silently stops early.
- Symlink, symlinked-parent and non-regular-file refusals keep their messages
  and error class.
- Drift guards: each helper must match its recovered shape, apart from
  whitespace and trailing commas. Each helper must have exactly one caller, and
  the executor's ENOSPC mapping must be present. Otherwise the build fails.
  First backups go to `backups/agent-write/`; reapplying is a no-op (marker
  `/* OpenVision durable Agent write v1 */`).

Trade-off: on POSIX, the atomic path needs free space for a complete copy. A
write that would barely have fitted in place now fails with "No space left on
device" and leaves the saved file intact. Hard links, ACLs and extended
attributes are not carried over to the new inode, which is why multi-link and
foreign-owned files stay in place. A process killed between the temp write and
the rename can leave an orphan `.openvision-*.tmp` sibling. The saved file is
still intact, but nothing currently removes orphans.

## Verification

All commands set `OPENVISION_RECOVERY_DIR` to the prepared 3.21.13 input.

```sh
npm run test:agent-review
npm run check:desktop
npm run build:desktop
npm run test:build-integrity
npm run verify:agent-io-faults
npm run verify:agent -- --review-recovery
npm run docs:check
```

| Check | Result |
| --- | --- |
| `test:agent-review` | **77/77** pass, 0 skipped (71 existing + 6 new in [`agent-write-durability.test.mjs`](../../desktop/agent-write-durability.test.mjs)) |
| New real-fault tests | For each of the three durable helpers: ENOSPC, EROFS and EFBIG leave the saved bytes intact with no temp files. The same write succeeds after space is freed, and a new process reads the complete bytes. A failed new file is removed. Hard-linked files restore both names. The recovered control reproduces the partial file. |
| `check:desktop` | Pass |
| `build:desktop` | Pass: 239 scripts, 124 manifests, 30 local main-process modules validated; one marker in each of the three outputs; three first backups |
| `test:build-integrity` | **26/26** pass |
| `verify:agent-io-faults` | **Pass**: `logs/agent-io-fault-verification-z4JDny/result.json` (final, below) and `kSNHD4` (earlier build of the same source) |
| `verify:agent -- --review-recovery` | **Pass** after a Linux redo-key correction; see [native regression](#native-regression) |
| `docs:check` | Pass, no failures |

Final native run `z4JDny`: parent 1c753c64 plus the changes committed as
`88d2be4e`, on the build with all three helpers replaced. The same build passed
the full regression below.

| Stage | `notes.md` on disk | Free bytes | Temp files | Pending review |
| --- | --- | --- | --- | --- |
| Volume full | original, 25,490 bytes | 0 | 0 | no |
| After failed StrReplace (`Error: No space left on device`) | **original, unchanged** | 0 | 0 | no |
| After freeing space | original | 1,015,808 | 0 | no |
| After retry ("has been updated") | complete new text, 115,540 bytes | 925,696 | 0 | yes |
| After Keep | complete new text | 925,696 | 0 | no |
| After app restart | complete new text | 925,696 | 0 | no |

`unrelated.txt` was preserved at every stage. Five authenticated requests went
to the controlled local model: two per edit turn plus the initial reply. There
were no renderer errors and both hosts exited 0.

SHA-256 values:

| File | SHA-256 |
| --- | --- |
| Workbench | `865a11e824df62da0255efc6362fc0252b6ecefbc1b390aaa920f5f3fe0c37ee` |
| Agent-exec | `995fa4386a90445e12a9d7b811ddc7a1ac71bc463bc9024513a382c12099f7e9` |
| Agent-host | `cc1c8065bd49723110dccc802946fb5eb4fb1482a7cfa51b2d36d88f537f8f4c` |
| Daemon | `be23c2e60a7eba07d9d4bde43e57adc86b4c2194911d31a1572f1b79e525edc2` |
| Verifier | `ade28ea8aac686a4d49d1085bd71b760a344ee2142f7071b0b513ad4fe80d5ea` |
| Recovered agent-exec input | `09ddedf110515bef38ab4acc3b6e4f5b345abd5aae99dc20f4bd0b823426c919` |
| Recovered agent-host input | `243e919a5ee45a294ce25b004901fc5599fbafd661dee2bfaeb8f63b26ede83a` |
| Recovered daemon input | `88c68aadf62907a744dd77e45e9858cc55593a51d866cc88a35ddbc248f65db2` |

Run `kSNHD4` passed with the same stage results on an earlier build of the same
source; its agent-exec hash was `51e353ed…`. The rebuild in between (for the
control below) produced a different agent-exec output. Both outputs contain exactly one durable
helper; the cause of the hash difference was not investigated.
Intermediate run `AvSEFu` (agent-exec only) showed the same fault behavior but
failed its assertion because the single-file control is labelled "Keep", not
"Keep All". Run `svA4gp` passed after the verifier was corrected; neither is
counted as the final result.

### Native regression

`verify:agent -- --review-recovery` checks that rename-based writes keep the
existing review, Undo/Redo and restart flows. On Linux it first failed in
`verifyKeptUndo` at the first Redo: the file stayed `answer = 42`. To
separate this from the write change, the three helpers were temporarily put
back to their pre-fix form and the source rebuilt. Control run
`logs/agent-verification-F5Qev6` failed at the same assertion after the same 13
requests, as did the fixed-build run `sUTujH`. The failure comes from the
verifier, not the fix: `verify-agent-edits.mjs` and
`verify-agent-review-recovery.mjs` sent `Control+y`, which is Redo only on
Windows. They now send `Control+y` on Windows and
`ControlOrMeta+Shift+z` elsewhere, as `verify-project.mjs` already did.

With that change, `logs/agent-verification-VGFMaL/result.json` **passes** on the
final fixed build. It covers native read/search, multi-file review with Undo
All and Keep All, kept-edit Undo/Redo through each intermediate value, repeated
edits, pending review rejected and accepted across normal restarts, accepted
bytes after restart, command deny/allow/Stop and resume. All 29 controlled
requests were authenticated, with no renderer errors and five host exits 0.
Verifier SHA-256:
`3462b5fe63c0267c2b70d3ea804e2bcc280cf8137b1646d2e345208de3c4c051`. Edit
fixture: `7c276783907b151a7dc1345b35a07958d3681be228432e4804b4d1426ebfe243`.
This is the first Linux pass of the kept-edit Undo/Redo stage. It used a
controlled fixture, not live inference.

## Not verified

- Review snapshots, rules and provider configuration were not tested with the
  **profile** on a full or read-only volume. SQLite `SQLITE_FULL`/`SQLITE_IOERR`
  handling, WAL growth and the inferred ItemTable flush loss above remain
  open.
- Reject and Undo restoring original bytes while the project volume is full
  were not run natively.
- EIO from a failing device, torn sectors and power loss were not tested.
  Termination during an outstanding write belongs to the interruption gate.
- Orphaned temp files after termination between the temp write and the
  rename.
- Windows and macOS: the Windows in-place restore path is exercised only by the
  POSIX hard-link fallback. `verify:review-storage` is Windows-only and was not
  run here.
- Live provider inference: all model responses come from a controlled local
  fixture.
- No RAM, CPU, latency or token measurement is claimed.

The ledger remains **6/42 Verified (14.29%)**; no story is promoted. See the
[gap/source map](feature-gap-audit.md#source-index-to-implementation-gaps).

[inline-diff]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/inlineDiffService.js
