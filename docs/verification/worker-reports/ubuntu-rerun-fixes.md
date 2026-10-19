# Worker report: ubuntu-rerun-fixes

19 October 2026. Branch `ov/ubuntu-rerun-fixes` from `main` `b4f52a56`. Stories:
OV-401 (Explorer) and OV-403 (terminals, tasks, debugger, shutdown). Linux x64 only.

## Summary

The coordinator's Ubuntu/X11 rerun of merged main found four failures that do
not occur on the owner's Arch/Hyprland host. All four were reproduced here (three
directly, the probe-budget one from its trace mechanism) and fixed at their
owner. One was a product defect (pty exec wrapper). Three were host-dependent
harness defects: probe-rate window, keyring prompt focus, and terminal viewport
read. No budget was raised and no check was skipped. Every listed verifier then
passed on its first run after the fixes. Shutdown cycles passed three times
consecutively.

## Tasks

| # | Task | Status |
| --- | --- | --- |
| 1 | `test:shutdown` pty-exec missing executable | Done: product fix |
| 2 | `verify:explorer` probe budget 4.33 > 4 | Done: measurement-window artifact, derivation fixed, budget unchanged |
| 3 | `verify:project:lifecycle` hot exit | Done: harness (keyring prompt took focus); restore itself works |
| 4 | `verify:shutdown-cycles` intermittent "terminal history not restored" (added by coordinator) | Done: harness read only the viewport |
| — | OV-403 Linux clause table | Done: [rea-shutdown-ownership.md §7](../../recovery/rea-shutdown-ownership.md) |
| — | OV-401 Ubuntu/X11 cell | Done: [rea-explorer-linux.md](../../recovery/rea-explorer-linux.md#ubuntux11-cell-19-october-2026) |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Node 24.18 `process.execve` aborts (SIGABRT, status `null`) on ENOENT instead of throwing. The wrapper's `catch` never ran, so a missing shell ended by signal 6 rather than node-pty's `execvp(3) failed.` and exit 1. Not dash- or Ubuntu-specific. The wrapper now resolves like `execvp(3)` and reports ENOENT/EACCES before `execve`. | `desktop/pty-exec.cjs` (product, copied into the build by `pty-host-ownership-customization.mjs`); test `desktop/pty-exec.test.mjs` | `8eaa5981` |
| Root-probe rate divided a full 5.007 s poll cluster (40 calls, about 2.8 s wide) by a 3.08 s window: 4.33 per root·s for a steady 2.66. The rate is now taken over ⌊W/P⌋+1 whole periods (P = upstream `suspendedWatchRequestPollingInterval` 5007 ms), with the budget unchanged and the window-only figure kept. | `desktop/explorer-probe-rate.mjs` (+ test, in `test:desktop`), `desktop/verify-explorer.mjs` | `756833a4` |
| Without a Secret Service, the relaunched window shows the modal "OS keyring couldn't be identified" prompt, which took focus from the restored editor before Ctrl+S. The prompt is now closed without choosing a store, the editor is focused, and the dismissal count is recorded. | `desktop/verification-workspace.mjs` (`dismissKeyringPrompt`), `desktop/verify-project-lifecycle.mjs` | `55acbcfb` |
| The runner read `innerText` of the visible terminal rows only. Wrapped long paths pushed the restored marker above the viewport, and the failing cycles varied with wrapping. The runner now pages through the buffer with public terminal scroll commands. | `desktop/verify-shutdown-cycles.mjs`, `desktop/verify-shutdown-cycles-extension.cjs` | `4cbfca68` |

## Verification

Host: cloud container, Ubuntu 24.04 (`/bin/sh` → dash), kernel 6.18, Xvfb
`-screen 0 1920x1080x24` through `xvfb-run -a`, `dbus-run-session`, user `ov`, Node 24.18.0
(nvm), 4 CPUs / 15 GB. Build: `npm ci --prefix tooling && npm run prepare:desktop && npm run build:desktop`
(pinned Cursor 3.21.13 AppImage). Native runs were serialized. Proxy CA and proxy variables were passed
to `ov` for the downloads; no credentials were passed.

| Command | Run ID (`logs/`) | Result |
| --- | --- | --- |
| `node -e` reproduction of the pty-exec case (old wrapper) | — | `status null, signal SIGABRT`, "process.execve failed with error code ENOENT" |
| `node --test desktop/pty-exec.test.mjs` | — | 5/5 pass |
| `npm run test:shutdown` | `test-shutdown-1.log`, `series-test-shutdown.log` | 35/35 pass, twice |
| `npm run test:desktop` | `series-test-desktop.log` | 202/202 pass |
| `npm run check:desktop` | — | Pass |
| `verify:explorer` before the fix | `explorer-verification-TUKVBF` | Pass (cluster phase not caught); trace used for the cause |
| `verify:explorer` ×2 after the fix | `explorer-verification-LxGJOq`, `…-LQVKme` | Pass, 36/36 each, first-time |
| `verify:project:lifecycle` before the fix | `project-lifecycle-verification-DhpSFc`, `…-5Oq96k` | Fail (reproduced, 2/2) |
| `verify:project:lifecycle` after the fix | `…-S5Jao7`, `…-8Unr9h`, `…-ql2wEC` | Pass, 11 checks each, first-time; 1 prompt dismissed each |
| `verify:project` | `project-verification-0g7yL2` | Pass |
| `verify:project:scale` | `project-scale-verification-w3b73r` | Pass |
| `verify:development` | `development-verification-wlROYz` | Pass; launcher exit 0, native exit 0 |
| `verify:shutdown-cycles` before the fix | `shutdown-cycles-anu3lK` | Fail (cycles 2, 3), reproduced |
| `verify:shutdown-cycles` ×3 consecutive after the fix | `shutdown-cycles-XtnQt3`, `…-7zIjAX`, `…-pPoZI9` | Pass ×3, no failures, final exit 0, no nonce survivors |
| `npm run docs:check` | — | Pass (149 files, 0 failures) |
| `npm run status:features` | — | Ran; no tracked file changed (shared planning files not edited) |

Notes:

- Explorer probe rates (whole periods / window-only): `LxGJOq` small edit
  2.66 / 3.84; `LQVKme` idle 2.66 / 3.33. Both would have passed under the old
  rule too: the old rule failed only when the window phase caught a full cluster.
- Two setup-only problems on this host, unrelated to the product: the build
  writes `../OpenVision Projects`, which `ov` cannot create under root-owned
  `/home/user`, so it was created and handed to `ov`. A partial `source/` from that
  failed build had to be removed before the clean rebuild.

## Recommendation per story

- **OV-401**: Linux x64 cells pass on both Arch/Hyprland Wayland (earlier) and
  Ubuntu/X11 (this report). No Linux gap remains. Promote only the Linux x64 cell;
  the story stays Partial until the Windows/macOS cells pass.
- **OV-403**: Every Linux clause passes on Ubuntu/X11 (table in
  `rea-shutdown-ownership.md` §7) and earlier on Arch. No Linux gap remains.
  Promote the Linux x64 cell; Windows exit 134 and the macOS/Windows matrices
  stay open.

## Moved to platform/live stories

- Windows host exit 134 and the `0xC0000005` utility-worker crash (OV-403).
- Windows and macOS shutdown, development (shells, tasks, debugger) and Explorer matrices.

## Defaults pending owner decision

- Verifiers close the upstream keyring prompt rather than choosing weaker
  encryption, so no store is selected on keyring-less hosts. The product keeps
  showing the prompt there. This is unchanged upstream behavior and was not altered.

## Open risks

- `pty-exec.cjs` cannot pre-check every `execve` failure. An executable script
  whose `#!` interpreter is missing still makes Node abort (SIGABRT) instead of
  reporting `execvp(3) failed.`.
- `probePollSeconds` is pinned to the recovered upstream constant (5007 ms). An
  upstream change would need the constant updated. The window-only figure is
  recorded beside it to show drift.
- Unrelated observation, not investigated: in every cold cycle 1, the shutdown
  verifier saw one terminal named `Cursor` in a fresh profile (`XtnQt3`, `7zIjAX`, `pPoZI9`, `anu3lK`). It may
  be an upstream-branded terminal name; this needs a separate check.
- Single host and sample for the memory figures; `strace` overhead applies to
  Explorer counts.
