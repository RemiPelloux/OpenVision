# Worker report: OV-103 Agent editing (branch `ov/agent-editing`)

19 October 2026. Linux x64 only (cloud container, Xvfb, `dbus-run-session`,
Node 24.18.0, prepared Cursor 3.21.13 runtime input). Controlled local model
fixtures only; no live inference. Evidence:
[Linux closure report](../../recovery/rea-agent-editing-linux-closure.md).

## Summary

All five in-scope OV-103 defects recorded in the evidence docs were reproduced or
traced, fixed at their owners with idempotent, drift-guarded build
customizations, covered by producer tests and asserted by the native verifiers.
One further data-loss defect was found and fixed: the renderer's disk provider
ignored short writes, so an Undo that grows a file on a full volume left a torn
file with no error. A first fix for the stale review bar (priming every
observable bridge) caused a chat-resend regression under `verify:profile-io-faults`;
it was replaced by a registry-only fix before the final runs.

Final state: every listed native verifier passes twice on the final source build
(`--review-abrupt` after a verifier correction), unit suites pass, and the
ledger is unchanged (**6/42 Verified, 14.29%**; no story promoted by this branch).

## Tasks

| # | Task | State | Notes |
| --- | --- | --- | --- |
| 1 | Stale single-file review bar after Undo+Confirm and after restart | **Done** | Cause: the diff registry's event-backed observable drops the first change after a bar subscribes. Fix: `review-descriptors-customization.mjs`. `verify:agent-interruption` asserts no Undo/Keep after Undo+Confirm and after a restart (write-stop, continuation-kill, continuation-late-kill). |
| 2 | Interrupted write shown as "Edited" | **Done** | `agent-edit-interruption-customization.mjs` (load owner, live cancellation, transcript step). Asserted for write-stop (live after Stop), write-close and write-kill (after restart; the interrupted chat is opened from history when restart shows a new one). |
| 3 | Undo All stops at first failure; silent post-commit cleanup | **Done** | Joined Undo All plus a Retry notification for both groups (`agent-review-customization.mjs`). New `groupedRejectRetry` scenario in `verify:review-deletion` (failing Retry reported again, then success; text edits, callback, event and history entries once). Producer tests in `test:agent-review`. |
| 4 | Full-volume Reject/Undo; profile-on-full-volume review snapshots; ItemTable flush; stale selector | **Done** | Project volume: Undo shrinking (passes) and growing (**defect found and fixed**, `file-write-restore-customization.mjs`). Profile volume: Undo of a pending review while full; bytes restored, 0 review rows after freeing, no resurrection, integrity ok. ItemTable flush loss: already fixed by the profile storage durability owner (confirmed, no change). Selector corrected. |
| 5 | Orphan temporaries of files never written again | **Done** | Bounded startup sweep in the Agent execution extension (`agent-write-durability-customization.mjs`). `verify:agent-interruption` asserts no aged temporary after restart and that a recent temporary of another file is kept. |
| 6 | Final reruns with run IDs | **Done** | See Verification. |

## Defects found and fixed

| Defect | Owner | Commit(s) |
| --- | --- | --- |
| Undo All stops at first failed member; post-commit cleanup failures silent | workbench composer service `rejectAllDiffs`/`acceptAllDiffs` | `a8fb3d56`, `c0d8a5ef` |
| Interrupted edit shown as "Edited" | workbench bubble load `I0u`, `cancelUnfinishedToolCalls`, transcript step `fh_` | `fa3b3e11`, `7282e863`, `d9460ec9` |
| Orphan interrupted-write temporaries | Agent execution extension activation | `e6634598` |
| Stale review bar after Undo/Confirm | diff change source registry `descriptorsObservable` | `ebab236c` (replaces `cd727c41`) |
| Torn file from a growing save on a full volume (new) | main-process disk provider `doWriteFile` | `87646256` |
| Stale status selector | `verify-profile-io-faults.mjs` | `1e264090` |
| Abrupt-exit check rejected a signal exit (verifier) | `verify-agent.mjs` `restartReviewHost` | `118e88e4` |

## Verification

Host notes. The documented setup was followed, with these differences:

- `nvm install` as root first (the `ov` user cannot write `/opt/nvm`); the proxy CA
  bundle copied to a path `ov` can read (`NODE_EXTRA_CA_CERTS`).
- `/home/user/OpenVision Projects` created for `ov` (the build creates it).
- Packages installed: `sqlite3` (the profile verifier's CLI dependency) and
  `gnome-keyring`. Without a Secret Service, Electron's `safeStorage` reports
  encryption unavailable and every provider **Save** hangs. Each verifier's
  private D-Bus session starts `gnome-keyring-daemon --unlock --components=secrets`
  with a throwaway password; without `--unlock` a blocking `gcr-prompter` appears.
- Native verifiers ran one at a time as `ov` under
  `xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session`.

Unit and static checks (final tree):

| Command | Result |
| --- | --- |
| `npm run test:agent-review` | 112/112, 0 skipped |
| `npm run test:provider-storage` | 72/72 |
| `npm run check:desktop` | pass |
| `npm run test:build-integrity` | 26/26 |
| `npm run build:desktop` (clean) | pass: 239 scripts, 124 manifests, 32 local main-process modules |
| `npm run docs:check` | no failures |
| `npm run status:features` | 6/42 Verified, 14.29% (unchanged) |
| `npm run test:shutdown` (not touched) | 33/34: `pty-exec.test.mjs` "reports a missing executable like the recovered fork path" fails in this container (null exit status); unrelated, not fixed |

Final native runs (run IDs are `logs/<id>/`, kept locally):

| Verifier | Runs | Result |
| --- | --- | --- |
| `verify:agent-interruption` (all 8 cases) | `agent-interruption-kDlGK6`, `agent-interruption-uyhFtv` | pass, first-time on the final build both times |
| `verify:review-deletion` | `review-deletion-verification-ZVMov2`, `-AjBk43` | pass both |
| `verify:agent-io-faults` | `agent-io-fault-verification-NVIpol`, `-FPIrb1` | pass both |
| `verify:profile-io-faults` | `profile-io-fault-verification-zBhen6`, `-FC8IG1` | pass both |
| `verify:agent` | `agent-verification-MPqv95` | pass |
| `verify:agent -- --review-recovery` | `agent-verification-Em5nj1`, `-afYwQ7` | pass both |
| `verify:agent -- --review-abrupt` | `agent-verification-IGL0so` (**fail**), then `-WzQKFu`, `-0lnUhE` | First run failed the verifier's own exit-code check (abrupt exit ended in SIGABRT). After the check was corrected to accept a signal, two passes. Not counted as a first-time pass. |

Development runs, not credited: pre-fix reproduction of the torn growing Undo
(`agent-io-fault-verification-MCbHJJ`); the global bridge fix passed
`agent-interruption-rdLSl3` but regressed chat in `profile-io-fault-verification-76c8P7`
and `-HqoNJW`, with control `-jLKHVz` passing without it; iteration runs of the new
assertions (`review-deletion-verification-MZIUKH`, `-1bNxg7`, `-rfy6iY`, `-vM9a75`,
`agent-io-fault-verification-AHjXrJ` aborted by the worker, and earlier
interruption diagnostics).

## Recommendation per story

**OV-103: not yet promoted by this worker.** Every Linux-doable clause recorded
in the OV-103 evidence docs that this branch was asked to close now passes
natively. Remaining Linux gaps before promotion, in the coordinator's ledger:

- Owner decisions listed below (residual exclusions) must be accepted.
- Recorded residuals not fixed here: an accepted review whose record deletion
  keeps failing through shutdown returns as pending after restart; a command whose
  group leader exits early is untracked; an Undo whose restore save fails removes
  the review while the restored text is only in the dirty editor (visible error,
  Retry works).
- Not covered: Stop/close during argument streaming, MCP tools, interruption
  between files of a multi-file turn, glass workbench.

## Moved to platform/live stories

- `verify:review-storage` (Windows-only by assertion).
- Windows and macOS reruns of every verifier above.
- Live `--edit` runs per model (`verify:agent:live`).

## Defaults pending owner decision

- Power loss, kernel crash and device EIO: non-producible residual exclusions.
- A deletion that keeps failing through shutdown restoring an accepted review as
  pending, and a command whose group leader exits early being untracked: recorded
  residuals (not trivially fixable here).
- Stop/close during argument streaming, MCP tools and between files of a
  multi-file turn: recorded, not added (not cheap with the current fixture).
- Interrupted-edit wording: *Edit attempted* plus "Edit interrupted before it
  completed. Check the file; any change that was written stays available in
  review." Also applies when a held write completed after Stop (the change stays
  in review).
- Retry notification wording and severity (warning) for failed review cleanup.
- Disk provider restore limit: previous bytes are kept for files up to 64 MiB.
- Startup sweep bounds: 4,000 directories, 200,000 entries, depth 32; `.git` and
  `node_modules` skipped; roots open at activation only.

## Open risks

- The disk-provider change affects every renderer save (one extra read of the
  previous bytes, ≤ 64 MiB). Its cost was not measured.
- The registry observer is permanent for the window's lifetime (one extra
  descriptor computation per registry change).
- The global bridge regression shows that other `Tge`/`Eke` consumers rely on the
  lost-first-change behavior; one of them resends a chat turn after storage
  recovers (not traced, not fixed here).
- `--review-abrupt`: `process.exit(23)` once ended in SIGABRT during teardown;
  the cause was not investigated.
- Host setup differs from the documented proven setup: `sqlite3` and
  `gnome-keyring` were installed (see Verification).

## Follow-up, 20 October 2026: owner item 5 (cancel paths)

The owner accepted residuals 1–4 and 6 and sent item 5 back: Stop or close
during tool-argument streaming, during an MCP tool call, and between the files of
a multi-file edit. The branch was reset to `origin/main` (`95dd887d`, which
already contains the earlier work) and rebuilt from scratch.

### New native cases (`verify:agent-interruption`)

| Case | Interruption point | Required and observed |
| --- | --- | --- |
| `stream-stop`, `stream-close` | A `StrReplace` call whose arguments have started streaming; the response is held, so the call never completes | File keeps its exact original bytes; the write helper never runs; no temporary, no review; no owned process survives; the same chat accepts the next prompt (one request, reply shown); restart sends no request |
| `mcp-stop`, `mcp-close` | A real STDIO MCP server's `memory_probe` call in slow mode, approved and running (it never answers until cancelled) | Stop reaches the server as `notifications/cancelled`; after close (and at the end) every MCP server process has closed its control connection and exited; the tool ran exactly once (no replay after restart); the same chat resumes |
| `multi-stop`, `multi-close` | One assistant turn edits two files; the first is written, the second write is held by the probe | Close: first file changed, second keeps its original bytes, its interrupted temporary is swept at restart. Stop: the held second write completes. After restart both files are reviewable (Keep All/Undo All) and Undo restores both exact originals; each file was written once; the same chat resumes |

No product defect was found: every case met these rules on its first run. The
only correction was in the verifier: a two-file review shows *Keep All/Undo All*,
which the first check did not accept (diagnostic run `agent-interruption-uUakGO`,
not credited).

### Runs on the clean rebuild (commit `ff5d3251`)

Workbench SHA-256 `50b4ac178d358b6986a6adbd57b089ee8d927a68df051acd671b2cd85b47aa54`,
Agent exec `24097dea2c8d97dc953ed23a4aa5515cade65eaf3dbcd3c01240a170e210af53`. The
clean build validates 250 scripts, 124 manifests and 36 local main-process modules.

| Verifier | Run | Result |
| --- | --- | --- |
| `verify:agent-interruption` (all 14 cases, 6 new) | `agent-interruption-EigRvm` | **Pass**, first time: 24 authenticated requests, no renderer errors, no owned process left |
| `verify:agent-interruption` (repeat) | `agent-interruption-3v9KEa` | **Pass**, first time |
| `verify:review-deletion` | `review-deletion-verification-jtNoRa` | Pass |
| `verify:agent-io-faults` | `agent-io-fault-verification-LfCPa5` | Pass |
| `verify:agent` | `agent-verification-HNwfJE` | Pass |
| `verify:agent -- --review-recovery` | `agent-verification-bJyQ8P` | Pass |
| `verify:agent -- --review-abrupt` | `agent-verification-FY55Z9` | Pass |
| `verify:profile-io-faults` | `profile-io-fault-verification-39nnjr`, `-YoEr8w` | **Fail** (below) |
| Control: same build with only the OV-1002 stream coalescing reverted | `profile-io-fault-verification-LvteOr` | Pass |

`test:agent-review` 114/114, `check:desktop` and `docs:check` pass.

### Regression found in an existing OV-103 check (not fixed here)

`verify:profile-io-faults` fails on merged `main`: "A chat reply finished after
freeing space survives restart". With the profile full, the chat turn is now sent
**while full** and its reply shown; once space is freed the turn is sent a
**second** time and the reply is streamed twice into one bubble (`reply, chat,
chat, …`). Both runs on `main` fail; the earlier branch build passed twice
(`zBhen6`, `FC8IG1`) with the request sent only after space was freed.

Control: reverting only the OV-1002 change `29483a06` (coalesced Agent text
delivery, `agent-stream-delivery-customization.mjs`) in the built Agent exec
bundle, and nothing else, makes the same verifier pass with one chat request
(`LvteOr`). The extension-host log shows the turn failing with `SQLITE_FULL` and
being retried with growing delays (09:10:20, :21, :25, :33). *Inference, not
traced:* reading the model stream ahead lets the first attempt send its request
and deliver its text before an awaited storage write fails, so the loop's retry
sends the turn again. This belongs to the OV-1002 stream-delivery owner (and the
loop retry policy); it was not changed on this branch.

The first of the two failing runs also hung: merged `main` drives the read-only
profile dialog with `xdotool` and ImageMagick `import`, which were not installed
here, so the spawned app stayed blocked in its dialog. That app was ended by its
unique run-directory pattern (SIGTERM was ignored while it was blocked; SIGKILL
then). Both tools were installed and the second run completed.

Host packages added in this follow-up: `xdotool`, `imagemagick`. The keyring is a
`gnome-keyring` daemon started unlocked in each verifier's private D-Bus session
(`gnome-keyring-daemon --unlock --components=secrets` with a throwaway password),
`XDG_RUNTIME_DIR` set, run as the non-root user `ov`.

### Recommendation

**Hold OV-103.** Item 5 is closed: the six new cancel cases pass twice, first
time, on a clean rebuild, and the other OV-103 checks pass once. The hold is for
the `verify:profile-io-faults` regression introduced by the merged OV-1002
stream-delivery change. Once that owner fixes it (or the owner accepts it),
OV-103 has no remaining Linux x64 gap from this branch.

## Follow-up, 23 October 2026: local Agent retry reset (owner option A)

The `verify:profile-io-faults` blocker above was diagnosed by the responsiveness
worker as a recovered local-Agent retry defect (see
`docs/verification/worker-reports/responsiveness.md`, last section, on
`ov/responsiveness` `6d6ef6ac`), not the stream coalescing. The local retry loop in
the Agent exec extension awaits `runOptions.onRetryStarting` before every replay,
but the local run options never supplied it. The renderer reset
(`replayCurrentAction`: delete every bubble after the last human message) never
ran, so a reply shown by an attempt that then failed on `SQLITE_FULL` was
appended to by the replay. The owner chose option A: route the hook so every
local replay starts from a clean turn, as on the hosted path; auto-retry stays.

### Fix

[`local-agent-retry-reset-customization.mjs`](../../../desktop/local-agent-retry-reset-customization.mjs),
marker `/* OpenVision local Agent retry reset v1 */`, four guarded edits:

1. **Agent exec** `runLocalAgent`: the local run options gain `onRetryStarting`,
   which calls the run's callback object with plain values only (attempt, action
   case, resume flag, attempt request id). An older host without the route is
   unchanged.
2. **Extension host** `$startLocalAgentRun`: the callback object forwards
   `retryStarting` to the main thread (`$localAgentRetryStarting`).
3. **Main thread**: `$localAgentRetryStarting` reaches the run's renderer callbacks
   (normal and dedicated local runtime) and rejects an unknown run like its
   sibling methods.
4. **Renderer** `runLocalAgentInExtensionHost`: the local run callbacks call the
   turn's own `onRetryStarting` (with the turn's conversation state). That is the
   hosted hook, which runs `replayCurrentAction` unless the attempt resumes a
   checkpoint.

The loop already awaits the hook before sending the replay, so the turn is reset
before any replayed text arrives. Producer tests
([`local-agent-retry-reset.test.mjs`](../../../desktop/local-agent-retry-reset.test.mjs),
6 tests) execute each edited object or method from the patched bundles, with
recovered-text controls that lack the hook. The glass workbench is not changed.

### Verification (branch `ov/agent-editing` from `origin/main` `5053a05d`, commit `e19ec6e8`)

Clean rebuild (`npm ci` in `tooling/`, `build:desktop` with its 6 GiB heap): 251
scripts, 125 manifests, 36 local main-process modules. SHA-256: workbench
`99971b03d423ea4942169cc8de12254f15debc7645226d53f94232c570fdfd66`, extension
host `317b0c6411ccea2248230c1dc214d4486431a14009c52a5ad8906c7063c75bec`, Agent
exec `da9915d69bae1b2c8fe396f24a04065d85d02e76124de6a083b2705077c5e360`. Native
runs as non-root `ov`, `xvfb-run` + `dbus-run-session`, `XDG_RUNTIME_DIR` set,
unlocked `gnome-keyring`, one at a time. Load was `stress-ng --cpu $(nproc)` for
the whole run (package `stress-ng` installed).

| Run | Load | Result | Chat requests (while full / after freeing) |
| --- | --- | --- | --- |
| `profile-io-fault-verification-3h5S0v` | stress-ng | **Pass**, first time | 1 / 2: the retry path, reply once |
| `profile-io-fault-verification-jgputB` | stress-ng | **Pass**, first time | 0 / 1 |
| `profile-io-fault-verification-d9Oxnm` | stress-ng | **Pass**, first time | 1 / 2 |
| `profile-io-fault-verification-EjClfm` | stress-ng | **Pass**, first time | 1 / 2 |
| `profile-io-fault-verification-HXphZz` | stress-ng | **Pass**, first time | 1 / 2 |
| `profile-io-fault-verification-s3Xt74` | none | **Pass**, first time | 2 requests in total |
| `profile-io-fault-verification-TB5SwA` | none | **Pass**, first time | 1 request in total |
| `agent-interruption-Jv6HGg` (14 cases) | none | **Pass**, first time | 24 authenticated requests, no owned process left |
| `agent-verification-CBdxmy` (`verify:agent`) | none | **Pass**, first time | 20 requests, 2 clean exits |
| `agent-verification-GBJgwF` (`--review-recovery`) | none | **Pass**, first time | 29 requests, 5 clean exits |

Five of the seven profile runs went through exactly the failing sequence: a
first attempt sent while the profile was full, then a replay after space was
freed. Before the fix, `main` failed this way in 2 of 2 runs here (`39nnjr`,
`YoEr8w`), and the responsiveness worker saw 4 of 5 loaded series fail.
Afterwards every run shows the reply once and passes "A chat reply finished after
freeing space survives restart". All profile runs also kept the review-snapshot
results: Undo while full restored the bytes, and 0 review rows remained.

Unit and static checks: `test:agent-review` **120/120** (includes the 6 new tests),
`check:desktop` pass, `test:build-integrity` 26/26.

### Recommendation

**Promote OV-103 (Verified on Linux x64).**
- Every Linux-doable clause now passes natively.
- The owner accepted residuals 1–4 and 6.
- Item 5 (cancel paths) passed twice in the 20 October follow-up.
- The last blocker is fixed: 5 of 5 loaded and 2 of 2 unloaded first-time passes,
  plus interruption, `verify:agent` and review recovery on the same clean build.

Windows, macOS and live-provider runs remain in their platform/live stories.
