# Worker report: OV-1004 release safety (Linux x64)

19 October 2026. Branch `ov/release-safety`. This report finishes after a stop
and resume, on the coordinator branch `ccr-a39d6f13-jurmdv` at `2b61fcbc`. It
is a source change after **0.2.0-preview.7**; no package was published. Linux
x64 only. The evidence is in [release safety on Linux](../release-safety-linux.md).

## Summary

Every Linux task is done and verified natively. Each new matrix passes twice
with assertions; corrupt-state and authority also have earlier passes on build
X:

- `verify:corrupt-state`: 11 cells.
- `verify:crash-recovery`: 15 cells.
- `verify:authority`: 21 cells plus the read-only profile.

Other runs:

- `verify:utility-listeners`, whose owner I changed, passes twice.
- `verify:local-rules` and `verify:profile-io-faults` pass as regressions.
- The release secret scan over the Linux package, all verifier logs and the
  profiles passes with 0 findings. No canary API key appears in plaintext.

The matrices found seven product defects, all fixed where they originate. One
of them is a security defect: workspace tasks ran automatically when a folder
was opened. The scanner also had two defects of its own, both fixed.

Host:

- Ubuntu 24.04 container, 4 CPUs.
- Xvfb with `dbus-run-session`; disposable plaintext `login` keyring.
- Node 24.18.0, prepared Cursor 3.21.13 input.
- Unprivileged `ov` user.
- Apt packages added: `xdotool`, `x11-utils`, `gnome-keyring`, `libsecret-tools`, `sqlite3`.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Secret scanner `check:secrets` | **Done.** Covers UTF-8 and UTF-16LE (both alignments), ZIP/VSIX/gzip, a digest allowlist (canaries refused) and a self-test with planted canaries. 11 unit tests. Release scan `secret-scan-9h6XfO` passes. |
| 2 | Corrupt-state matrix | **Done.** `corrupt-state-spdfDR` (final build), plus `O00aKi` and `coWM7K` (build X), all 11/11. |
| 3 | Crash-recovery matrix | **Done.** `crash-recovery-W39GRy` and `N02Nkd`, both 15/15 on the final build. |
| 4 | Authority matrix | **Done.** `authority-OrmhLq` (final build), plus `HauaHI` and `OdbgAm` (build X), all pass. |
| 5 | Recovery guide; release-matrix doc | **Done.** `docs/guides/recovery.md`, `docs/verification/release-matrix.md` and the evidence report. |
| 6 | Run the new verifiers twice | **Done**, see above. Failed runs are kept and explained in the evidence report. |

## Defects found and fixed

| # | Defect | Owner | Commit |
| --- | --- | --- | --- |
| 1 | An unreadable `state.vscdb`, settings, argv or MCP file gave no message | New profile recovery notice (main inspector plus workbench) | `76302ac9`, `7aa1a191` |
| 2 | One corrupt rule hid every rule | `local-rules.js`, rules service | `bccb29f0` |
| 3 | A corrupt provider row blanked Settings | `model-providers.js`, `model-settings.js` | `a7fb2e6a` |
| 4 | An unreadable review lost Keep/Undo silently | Review loader (both workbench variants) | `24a1f2be` |
| 5 | **Security:** workspace `runOn: folderOpen` tasks ran with no prompt | `task.allowAutomaticTasks` default changed to `off` | `a30fb369` |
| 6 | A killed shared process showed no restart prompt | `utility-process-customization.mjs` (OV-1003 owner) | `6561bb29`, replaced by `b9efaad3` |
| 7 | The first fix for 6 left a listener after each exit | Same owner: one shared late-crash forwarder | `b9efaad3` |
| — | The scanner aborted Node 24.18.0 on odd-length UTF-16LE, and flagged vendored false positives | `secret-scan.mjs` | latest `fix(release)` commit |

Harness defects, fixed:

- the project reset discarded the baseline edit;
- an allowlisted `touch` was detected by file length instead of existence;
- only one of the four extension hosts was killed;
- the terminal row was matched with an anchored regex;
- the verifier clicked the shared-process relaunch button;
- a failed baseline left the app running;
- final cleanup threw after a clean close.

## Verification

See the [gates table](../release-safety-linux.md#gates) for each command, run
ID and result. Unit suites:

- `test:release-safety`: 26/26.
- `test:provider-storage`: 78/78.
- Rules, utility, model-performance and pi-import tests: 32/32.

`docs:check` passes and `status:features` runs. Runs were serialized, one native
run at a time.

## Recommendation

**OV-1004: Linux x64 gates are ready.** I do not recommend promoting it. Under
the strict-reading default it stays open until every other in-scope story is
Verified, and the OV-903 critical suite passes on the same build. There are no
remaining Linux gaps in this story's own gates.

## Moved to platform/live stories

- Windows ACL and job-object cells, exit 134 / 0xC0000005.
- Windows ZIP secret scan.
- macOS keychain cells.
- Redaction of real keys.

## Defaults pending owner decision

- Strict promotion rule (above).
- Residual exclusions: power loss, kernel crash, device EIO.
- `task.allowAutomaticTasks` now defaults to `off`. Workspace Trust stays off, as upstream.
- Provider reset keeps orphaned key secrets.
- An unreadable rule still blocks rule writes until it is removed.
- The shared-process prompt keeps upstream semantics. A crash after a requested kill may also be reported, as upstream does.

## Open risks

- Extension-host recovery takes about 21 s after all four hosts are killed at
  once. The native "3 times in 5 minutes" policy then requires the Restart
  button.
- The local-rules and profile-io regressions ran on build X, before the utility
  owner change.
- The release scan's allowlist holds one public fixture digest.
