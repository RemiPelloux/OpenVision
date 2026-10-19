# Worker report: OV-1004 release safety (Linux x64)

19 October 2026. Branch `ov/release-safety`, based on the coordinator branch
`ccr-a39d6f13-jurmdv` at `2700b330`. This is a source change after
**0.2.0-preview.7**; no package was published. Linux x64 only. **Stopped on
request** before the final verification series. See [Status at stop](#status-at-stop).

## Summary

- **Secret scanner** `npm run check:secrets`. It self-tests with planted
  canaries and scans UTF-8 and UTF-16LE text, ZIP/VSIX entries and gzip
  members. Matches can be allowlisted by digest. Unit tests pass.
- **Startup recovery notice.** On launch OpenVision now explains unreadable
  profile data and says where the original bytes are kept.
- **Three native matrices** (`verify:corrupt-state`, `verify:crash-recovery`,
  `verify:authority`) share one harness. Processes are signalled only after
  they are re-identified by pid, `/proc` start time and owned process group.
- **Six product defects** were found by the matrices and fixed where they
  originate (listed below). All of them were seen on Linux before the fix. Each
  fix has unit tests. The final native confirmation of all six has **not**
  been run on the final build.
- Two docs were added: [recovery guide](../../guides/recovery.md) and
  [release matrix and evidence index format](../release-matrix.md).
- **Not written yet:** the evidence report `release-safety-linux.md` that the
  docs link to. `docs:check` therefore fails until it is added.

Host: Ubuntu 24.04 container, 4 CPUs, Xvfb 1920×1080×24, `dbus-run-session`,
Node 24.18.0, prepared Cursor 3.21.13 input, unprivileged `ov` user. The Secret
Service uses a disposable plaintext `login` keyring. Packages installed with
apt for this work: `xdotool`, `x11-utils`, `gnome-keyring`, `libsecret-tools`,
`sqlite3`.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | `check:secrets` scanner | **Done.** 9 unit tests, including planted canaries in UTF-8, UTF-16LE (even and odd offsets), stored/deflated ZIP, gzip and an 8 MiB window boundary. The digest allowlist refuses canaries. Run `secret-scan-5ReVKj` passed over docs. **Not done:** the scan of `npm run package:linux` output with `--require-targets`. |
| 2 | Corrupt-state matrix | **Partly done.** The verifier has 11 cells: control, global DB garbage and truncated, workspace DB truncated, settings.json, argv.json, provider row, rule row, user `mcp.json`, project `mcp.json`, review snapshot. Run `rAgb8m` passed 10/11 on the build before the review fix. The review fix was then confirmed by single-cell runs `qe2hm1` and `K344DK` (pre-fix behaviour reproduced). The full run on the final build (`3qUekW`) **failed in its baseline**: the "Provider Name" field never appeared. That failure has not been investigated. |
| 3 | Crash-recovery matrix | **Partly done.** 15 cells: 3 scenarios × renderer, extension hosts, pty host, shared process, file watcher. Observe runs `HGx5on`, `jBOtqp` and `ffK8NB` show 14 cells recovering with restored editor, chat and terminal state and 0 orphans. The renderer is reopened through the native dialog with real X input. The shared-process cell exposed defect 5; its fix has not been confirmed natively. No asserting runs yet. |
| 4 | Authority matrix | **Partly done.** Covers the default run mode (Allowlist with an empty list), Allowlist plus `touch`, and Run Everything (confirmed via its warning dialog). Each mode is checked against unlisted, allowlisted and `echo >` shell commands, MCP, writes inside and outside the project, and a read-only file. A read-only profile launch is also covered. Observe runs `8aJcQR` and `kVZ2p7` passed every cell except the folder-open task, which is defect 6. The fix has not been confirmed natively. No asserting runs yet. |
| 5 | Recovery guide and release-matrix doc | **Done** for both pages. **Not written:** the evidence report `docs/verification/release-safety-linux.md` that they link to. |
| 6 | Run every new verifier twice | **Not done.** The series was stopped. |

## Defects found and fixed

| # | Defect (observed on Linux) | Fix and owner | Commit |
| --- | --- | --- | --- |
| 1 | An unreadable `state.vscdb`, `settings.json`, `argv.json` or `mcp.json` gave the user no message. The runtime already kept the original bytes. | Read-only main-process inspection plus a workbench notice with a dismiss record. The notice also checks the project `mcp.json`. | `76302ac9`, `7aa1a191` |
| 2 | One corrupt rule row hid every rule and dropped them from Agent requests, with no message. | `local-rules.js` `inspect()` loads the readable rules. The unreadable record is kept, logged and reported. Writes still refuse. | `bccb29f0` |
| 3 | A corrupt provider row made the catalog poller throw and blanked the whole Settings pane. | The display catalog falls back and reports the error; routing and writers stay strict. **Back up and reset providers** writes the backup first, waits for SQLite to acknowledge it, then deletes the row. | `a7fb2e6a` |
| 4 | An unreadable saved review lost its Keep/Undo controls silently. | The loader reports it to the notice; the record is left unchanged (both workbench variants). | `faaf91c8` |
| 5 | A SIGKILLed shared process showed no "restart" prompt. The utility owner released its crash listener on exit, before Electron's `child-process-gone` event arrived. | `utility-process-customization.mjs` keeps the crash listener in its own store until the owner's next run starts. This changes the OV-1003 owner; `verify:utility-listeners` has **not** been re-run. | `6561bb29` |
| 6 | **Security.** Workspace Trust is off by default and `task.allowAutomaticTasks` defaulted to `on`. Opening a folder ran its `runOn: folderOpen` tasks without a prompt, in every Agent mode. | Default changed to `off` in both workbench variants. An explicit user setting still applies. | `a30fb369` |

Harness defects found and fixed along the way:

- The project reset discarded the baseline edit, so the review was correctly dropped.
- `touch` was detected by file length instead of existence.
- Only one of the four extension hosts was killed.
- The terminal palette row was matched with an anchored regex.

Open harness defect: `buildBaseline` in `verify-corrupt-state.mjs` does not
close the app when the baseline fails. In run `3qUekW` the verifier stayed
alive. Its host was stopped with SIGTERM to its process group, after checking
that it was still the same child and group leader (parent pid, group, start
time).

## Verification

| Command | Run | Result | Notes |
| --- | --- | --- | --- |
| `npm run check:secrets` | `secret-scan-5ReVKj` | Pass; self-test 7/7, 141 files, 0 findings | `build/packages` missing; not a release scan |
| `npm run verify:corrupt-state` | `corrupt-state-7fjf7x` | 10 cells, 11 violations | First run. Pre-fix reproduction plus the project-reset harness defect |
| same | `corrupt-state-rAgb8m` | 10/11 pass | Build without the review fix; review cell failed (defect 4) |
| same `--cases=…` | `qe2hm1`, `K344DK` | Review cell fails; control passes Undo | Pre-fix review reproduction |
| same | `corrupt-state-3qUekW` | **Fail, first run on the final build (`faaf91c8`)** | Baseline: "Provider Name" not found. Not investigated |
| `verify:crash-recovery --observe` | `HGx5on`, `90QTia`, `8UY5iL`, `jBOtqp`, `ffK8NB` | Observation | 14/15 cells recover; shared process = defect 5 |
| `verify:authority --observe` | `8aJcQR`, `kVZ2p7` | Observation | All cells pass except the folder-open task (defect 6) |
| `npm run test:release-safety` | — | 15/15 at last run | Later commits added review-guidance and automatic-task tests (4 + 3 pass individually) |
| `test:provider-storage`, rules tests, `utility-process.test.mjs` | — | 78/78, 23/23, 6/6 | `pi-import`/`model-performance` expectations updated for the deliberate display-catalog contract |

No run on this branch is a first-time pass on the final build.

## Recommendation

**OV-1004: not yet.** Remaining Linux gaps:

- Fix the corrupt-state baseline failure.
- Run all three matrices twice on the final build, asserting.
- Re-run `verify:utility-listeners` twice, plus `verify:local-rules` and `verify:profile-io-faults`.
- Run `package:linux` followed by `check:secrets --require-targets`.
- Write `release-safety-linux.md`.

Under the strict reading, OV-1004 also waits on every other in-scope story.

## Moved to platform/live stories

- Windows ACL and job-object cells, exit 134 / 0xC0000005.
- Windows ZIP secret scan.
- macOS keychain cells.
- Redaction of real keys.

## Defaults pending owner decision

- OV-1004 is promoted only after every other in-scope story is Verified.
- Residual exclusions: power loss, kernel crash, device EIO.
- `task.allowAutomaticTasks` now defaults to `off`. Workspace Trust stays off, as upstream. Enabling Trust would be a larger UX change.
- Provider reset leaves orphaned API-key secrets in place.
- An unreadable rule still blocks rule writes until it is removed.

## Open risks

- Defect 5 changes the utility-listener owner from OV-1003, so listener counts may shift by one per owner.
- The read-only-profile dialog belongs to OV-301. It is recorded in the authority matrix (exit 1, profile unchanged) but not asserted.
- Disposable copies of earlier builds sit under the ignored `logs/old-build-5/`.

## Status at stop

- **Done:**
  - task 1 except the scan of packaged output;
  - task 5 except the evidence report;
  - the six product fixes, committed with unit tests.
- **Partly done:** tasks 2, 3 and 4. The verifiers are written and observed; the asserting runs on the final build are not done.
- **Not started:**
  - task 6 (two asserting runs of each matrix);
  - the regression runs for the changed owners;
  - `package:linux` with the release secret scan;
  - `release-safety-linux.md`.
- **Last verified run IDs:**
  - `corrupt-state-rAgb8m` (10/11);
  - `crash-recovery-ffK8NB` (6/6 observed);
  - `authority-kVZ2p7` (14 cells observed);
  - `secret-scan-5ReVKj` (pass).
- **Uncommitted findings:** none. Everything is in this report.
- **Estimate for the remainder:** one worker session (about one quota round).
  - Investigate the `3qUekW` baseline failure and add baseline cleanup.
  - Run the native series of about ten runs. This is the long part: about 2.5 hours of serialized native time.
  - Package plus `check:secrets --require-targets`.
  - Write the evidence report.

  A second round is needed only if the native runs expose another defect.
