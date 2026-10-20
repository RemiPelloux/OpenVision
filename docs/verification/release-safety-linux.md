# Release safety on Linux (OV-1004)

19 October 2026. Linux x64 evidence for the OV-1004 release-safety gates: the
secret scan, corrupt state at startup, process crash recovery, and authority and
denied access. This is a source change after **0.2.0-preview.7**; no package
was published. It promotes no story. See [release claims](release-claims.md)
and the [readiness rule](release-matrix.md#readiness-rule).

**Result: every gate passes on the final build, each with two assertion-enabled
runs.** Seven product defects were found and fixed along the way. Two
release-scan defects were also found and fixed: the scanner aborted Node, and it
flagged false positives in vendored code.

## Host and build

| Item | Value |
| --- | --- |
| Host | Ubuntu 24.04 container, kernel 6.18.44, 4 CPUs, Xvfb 1920×1080×24 (X11), `dbus-run-session`, Secret Service from `gnome-keyring` with a disposable plaintext `login` keyring |
| Runtime | Node 24.18.0; prepared Cursor 3.21.13 Linux x64 input; unprivileged `ov` user |
| Apt packages added | `xdotool`, `x11-utils` (native dialogs), `gnome-keyring`, `libsecret-tools`, `sqlite3` |
| Final build | Commit `b9efaad3` (later commits change only the scanner and docs). Host `0636c96f07de…`, main bundle `133cd38b30c4…`, workbench `c52001bf2d92…` |
| Earlier build "X" | Same workbench and host; main bundle `f00de281f276…`. This build did not have the utility fix (defect 7) |

Every run directory is `logs/<name>-<id>/result.json`. These are git-ignored
and not published.

## Gates

| Gate | Final-build runs | Result |
| --- | --- | --- |
| `npm run verify:corrupt-state` | `corrupt-state-spdfDR`; build X: `O00aKi`, `coWM7K` | 11/11 cells pass in each run |
| `npm run verify:crash-recovery` | `crash-recovery-W39GRy`, `crash-recovery-N02Nkd` | 15/15 cells pass in each run |
| `npm run verify:authority` | `authority-OrmhLq`; build X: `HauaHI`, `OdbgAm` | 21/21 cells plus the read-only profile pass in each run |
| `npm run verify:utility-listeners` (changed owner, OV-1003) | `utility-listeners-Cy01ld`, `utility-listeners-AlGcX2` | Pass, `listenersAfterExit` 0 |
| `npm run package:linux`, then `npm run check:secrets -- --require-targets` | `secret-scan-9h6XfO` | Pass: 49,396 files, 7.66 GB including `build/packages` and every verifier profile; 0 findings, 14 allowlisted; self-test 7/7 |
| `npm run verify:local-rules` (changed rules owner), build X | `local-rules-verification-A39plh` | Pass |
| `npm run verify:profile-io-faults` (changed provider/rules owners), build X | `profile-io-fault-verification-EYDFgo` | Pass |

### First-time passes, reruns and failures

All failed runs are kept. None of them is counted as a pass.

| Run | Outcome | Cause |
| --- | --- | --- |
| `corrupt-state-3qUekW` | Failed in its baseline: "Provider Name" not found; the app stayed open | Harness. Provider setup opened the dialog while the Models page was still mounting, and a failed baseline did not close the app. Both fixed in `ddf422a0` |
| `crash-recovery-RiEQXy` (build X) | The 3 shared-process cells failed, and later cells counted orphans | Harness. It clicked the new shared-process prompt, whose button relaunches the app outside the verifier. Fixed in `aefdb6b3` |
| `crash-recovery-Wz6iEB` (build X) | All 15 cells passed, then the verifier crashed in final cleanup | Harness. Playwright's `process()` throws for a closed app. Fixed in `d11383b5` |
| `utility-listeners-U0KlDW`, `-PfxlOa` (build X) | Failed: one listener left after each exit | Product. The first version of defect 7's fix kept per-owner listeners. Replaced in `b9efaad3` |
| First `check:secrets --require-targets` | Node aborted ("double free or corruption") | Scanner/runtime. Decoding an odd-length UTF-16LE subarray aborts Node 24.18.0. Fixed |
| `secret-scan-lpS2x5` | 46 findings | Vendored false positives, the MCP fixture token, and build copies kept under `logs/`. Rules tightened; fixture token allowlisted by digest |

On the final build, every gate passed the first time it was run.

## Corrupt state at startup

Each cell copies a baseline profile and corrupts exactly one store. The baseline
profile contains:

- a provider whose fixture API key is a scanner canary;
- an Agent edit with a pending review;
- two rules;
- `settings.json`, `argv.json`, and a user and a project `mcp.json`.

The checks are:

- the app starts and exits 0;
- the corrupted bytes stay in place or are moved aside unchanged;
- guidance is shown;
- every other store is byte- or row-identical.

| Cell | What OpenVision does (observed) |
| --- | --- |
| control | No guidance. Undo All restores the original file |
| global `state.vscdb` garbage / truncated | The runtime renames it to `state.vscdb.corrupted.<time>` (bytes identical) and starts fresh. The new notice names the file |
| workspace `state.vscdb` truncated | Same, for that workspace only |
| `settings.json` truncated | Left unchanged; the notice gives the line and column |
| `argv.json` garbage | Left unchanged; the notice gives the position |
| provider row corrupt | Settings stays usable; the row is unchanged. The notice and Settings > Models offer **Back up and reset providers** |
| one rule row corrupt | The readable rule still loads; the bad row is unchanged and listed |
| user / project `mcp.json` corrupt | Left unchanged; the native MCP notice and the recovery notice both name it |
| review snapshot corrupt | Listed by the notice; the record and the project file are unchanged. The review cannot be undone from its controls (by design, documented) |

## Crash recovery

The verifier kills one owned process role with SIGKILL, in three scenarios:
idle, a held Agent stream from the loopback fixture, and a running terminal
command. Before signalling, each target is re-identified by Electron metrics,
pid, `/proc` start time and owned process group. Every cell checks:

- the role comes back;
- there are 0 orphans and 0 survivors after close;
- unsaved editor text is present, and is restored after a full restart;
- the chat is restored;
- the interrupted provider stream is closed;
- the Agent and the terminal still work.

| Role | Recovery (both final runs) |
| --- | --- |
| Renderer | Native "window terminated unexpectedly" dialog. **Reopen** is pressed with real X input; the window is back in about 8.3 s |
| Extension hosts (all 4 killed) | "Extension host terminated unexpectedly 3 times within the last 5 minutes." **Restart Extension Host**; back in about 21 s |
| Pty host | Automatic, 0.1–0.8 s |
| Shared process | Prompt "A shared background process terminated unexpectedly. Please restart the application to recover." (absent before defect 7's fix). After a full restart the role runs and the state is restored |
| File watcher | Automatic, 0.1–0.8 s |

## Authority and denied access

| Mode | Unlisted command | Allowlisted `touch` | `echo >` file | MCP tool | Write in project | Write outside | Read-only file |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Default (Allowlist, empty list) | Pending; Skip runs nothing | Pending | Pending | Pending | Applied with review | Pending (External-File Protection) | Refused: "Write permission denied", bytes unchanged |
| Allowlist + `touch` | Pending | Ran once, no prompt | Pending | Pending | Applied with review | Pending | Refused, unchanged |
| Run Everything (enabled through its warning dialog) | Ran once | Ran once | Ran once | Ran once | Applied with review | Applied with review | Refused, unchanged |

Further results:

- **Folder-open workspace task:** did not run in any mode after defect 6 was
  fixed. Before the fix it ran in every mode.
- **Read-only profile (POSIX mode bits):** OV-301's dialog appears, the app
  exits 1, and the profile is unchanged. This is recorded here and owned by
  OV-301.
- **No silent writes:** in every cell, the only files that changed were the one
  the cell asked for.

## Secret and log handling

All three matrices use a scanner canary (`sk-ovcanary-…`) as the provider API
key. The release scan covered the logs and disposable profiles of every run
listed above, plus the Linux package. It found **no canary**, no Authorization
value and no token in plaintext. The 14 allowlisted hits are the public loopback
MCP fixture token `openvision-mcp-fixture`, which the verifiers write into
`User/mcp.json`.

## Product defects found and fixed

| # | Defect | Commit |
| --- | --- | --- |
| 1 | Unreadable profile data was handled silently. Fixed with the startup recovery notice | `76302ac9`, `7aa1a191` |
| 2 | One unreadable rule hid every rule from the UI and from the Agent | `bccb29f0` |
| 3 | A corrupt provider row blanked Settings. Fixed with a tolerant catalog and a backup-first reset | `a7fb2e6a` |
| 4 | An unreadable saved review lost Keep/Undo silently | `24a1f2be` |
| 5 | **Security:** folder-open workspace tasks ran without a prompt (`task.allowAutomaticTasks` now defaults to `off`) | `a30fb369` |
| 6 | A SIGKILLed shared process showed no restart prompt. Electron reports exit before `child-process-gone`, and exit had released the crash listener | `6561bb29`, replaced by `b9efaad3` |
| 7 | The first fix for 6 left one listener per owner after exit (caught by `verify:utility-listeners`) | `b9efaad3` |

The scanner fixes were the UTF-16LE odd-length abort and the vendored false
positives.

## Not verified here

- Power loss, kernel crash and device EIO (residual exclusions).
- Windows ACL and job-object cells, exit 134 / 0xC0000005, the Windows ZIP
  secret scan, macOS keychain cells, and redaction of real keys. These are
  moved to platform and live stories.
- The critical suite (OV-903, `verify:critical`) was not run here.
- The `verify:local-rules` and `verify:profile-io-faults` regression runs used
  build X: same rules and provider code, earlier utility owner.

[Release matrix](release-matrix.md) · [Recovery guide](../guides/recovery.md) · [Worker report](worker-reports/release-safety.md)
