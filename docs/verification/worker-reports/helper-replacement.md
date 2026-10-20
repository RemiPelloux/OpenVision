# Worker report: helper-replacement (OV-803, Linux x64)

Branch `ov/helper-replacement`, restarted from `origin/main` `eed4f19a` on 19
October 2026 at the coordinator's request. The work in progress from 18 October
was carried over. Linux x64 only.

## Summary

- **Measured dependency ranking.** An env-gated logging proxy around the
  proprietary addons, plus execve tracing, runs over a fixed workload:
  startup, Explorer, terminal, the Agent loopback fixture with Glob/Grep and
  approved/denied commands, text search, 300 s idle, and a positive control.
  Only `cursorsandbox` does work: 5 startup preflights.
  - `file-service` and `cursor-proclist` are loaded and never called.
  - `tree-chunk-napi` was loaded and never called. After this branch's change it
    is not loaded at all.
  - `crepectl`, both tunnels and the AppImage updater never run.
- **`cursorsandbox`.**
  - Contract recovered.
  - Landlock drop-in helper, plus a removal path, behind
    `OPENVISION_SANDBOX_HELPER=original|none|landlock`. The default is
    unchanged.
  - Tests cover authority, malformed input, process identity and cleanup. A
    **differential against the original matches on the full authority matrix**.
  - The Auto-Run setting now says the sandbox is unavailable.
- **`crepectl`.**
  - Contract recovered.
  - Ripgrep cannot replace it: it builds the index the native `GrepClient`
    reads. Ripgrep is already the fallback.
  - A removal path exists behind `OPENVISION_CREPECTL=original|none`. The
    default is unchanged.
- **`tree-chunk-napi`.**
  - Exports and the single caller recovered (cloud semantic search).
  - Made lazy, so the workload no longer loads it.
  - No tree-sitter port was built.
- **`file_service`.**
  - Interface recovered.
  - Differential harness for the measured subset: the loaded surface plus
    `GrepClient`. Two runs of the original are equivalent, with 0 differences.
  - No replacement was built.

## Tasks

| Task | State | Notes |
| --- | --- | --- |
| 1. Measured ranking: logging proxy, execve tracing, `verify:native-calls`, ranking doc | **Done** | `desktop/native-call-log.cjs`, `native-call-log-customization.mjs`, `native-call-ranking.mjs`, `verify-native-calls.mjs`; [ranking](../../recovery/proprietary-helper-ranking-linux.md) |
| 2a. `cursorsandbox` contract and replacement | **Done** | Landlock helper `desktop/sandbox-helper/openvision-sandbox.c`, build option, removal path, "sandbox unavailable" message; [contracts](../../recovery/rea-helper-replacement-linux.md#cursorsandbox) |
| 2b. `crepectl` contract; ripgrep replacement if the protocol allows | **Done (protocol does not allow)** | Contract recorded. Ripgrep cannot produce the index. A removal option was added instead; the default is unchanged |
| 2c. Tests: writes outside the workspace denied, no auto-run, malformed arguments, child cleanup on Stop/kill | **Done** | `desktop/sandbox-helper.test.mjs` (9 tests). No auto-run is checked natively by `verify:agent` and `verify:native-calls` in all three helper modes |
| 3. `tree-chunk-napi`: exports and callers; replacement if loaded | **Partly done** | It was loaded (0 calls). The load was removed (lazy getter) instead of porting to tree-sitter. After the change it is not loaded in the workload, so the replacement condition no longer holds |
| 4. `file_service` interface and harness (measured subset) | **Done**; replacement not done | `desktop/file-service-harness.mjs` (`--original`, `--candidate`, `--compare`) |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| The 3.21.13 Agent bundles load the 11 MB `tree-chunk-napi` addon on the first Agent turn although it is never called. A failure to load it would also fail Agent module evaluation | `desktop/tree-chunk-lazy-customization.mjs` (agent-exec, agent-host, local-agent-runtime) | `dcc5c1d9` |
| The Auto-Run allowlist description did not say the command sandbox is unavailable, so approval prompts could be read as a sandbox denial | `desktop/autorun-customization.mjs` | `a835becf` |

Verifier defects fixed before the counted runs:

- The model picker timed out because the proxy variables were inherited. Native
  runs now use a clean environment.
- strace octal escapes in argv were not decoded.
- Instances returned through native promises were not wrapped.

Findings recorded, not fixed (outside the measured workload; the gate is off in
local mode):

- The original `GrepClient` returns **0 results, not `null`**, for a match at the
  end of a 4 MiB file, so callers would not fall back to ripgrep.
- Its constructor `excludes` are not applied.
- crepectl writes its index under `<repo>/.git/cursor/crepe`.

## Verification

Host and setup:

- **Host.** A 4-CPU, 15 GB container. A fresh `build:desktop` of `origin/main`
  plus this branch.
- **User.** Native runs used the existing unprivileged user `ubuntu` (uid 1000).
  Creating `ov` was refused by this session's permission policy.
- **Environment.** Clean (`env -i HOME LANG PATH`, no proxy variables), with
  `xvfb-run`, `dbus-run-session` and a disposable unlocked gnome-keyring
  (`/home/ubuntu/run-native.sh`).
- **Packages installed with apt.** `gnome-keyring` 46.1-2ubuntu0.2 and
  `libsecret-tools` 0.21.4-1build3.
- **Root-only steps.** `npm ci --prefix tooling` and `prepare:desktop` ran as
  root, because `ubuntu` cannot read the proxy CA. The repository was then
  chowned to `ubuntu`.

| Command | Run ID | Result | First-time pass? |
| --- | --- | --- | --- |
| `npm run test:helper-replacement` | console | 30/30 pass | yes |
| `npm run verify:native-calls` | `native-calls-92z3FR` | pass | yes (counted 1) |
| `npm run verify:native-calls` | `native-calls-gAnroI` | pass | yes (counted 2) |
| `npm run verify:native-calls` (earlier code) | `native-calls-uWY02Z` | pass, before the lazy load | yes |
| `npm run verify:native-calls -- --idle-seconds=10` | `RrImCf` (fail: inherited proxy), `YwNPyd` (pass) | iteration only | not counted |
| `npm run verify:agent` | `agent-verification-orYDPQ`, `…-zJoUhM` | pass, pass | yes, yes |
| `npm run verify:agent` (before the clean environment) | `agent-verification-lNmKJA` | fail at the model picker (inherited proxy variables) | environment failure; then `…-Y9Odox` passed |
| `npm run verify:explorer` | `explorer-verification-JzzSIK`, `…-3reNX3` | pass, 36/36 checks each | yes, yes |
| `OPENVISION_SANDBOX_HELPER=landlock`: `verify:native-calls`, `verify:agent` | `native-calls-4trGUk`, `agent-verification-eujZMi` | pass, pass | yes |
| `OPENVISION_SANDBOX_HELPER=none OPENVISION_CREPECTL=none`: `verify:native-calls`, `verify:agent` | `native-calls-8cObQ2`, `agent-verification-mcbZ56` | pass, pass; 0 helper executions | yes |
| Default rebuild after the option builds | `logs/batch-options/build-restore.log` | Original helpers restored byte for byte (`80fcddbf…`, `a145cdb8…`) | — |
| `npm run harness:file-service -- --original` | `file-service-harness-eEXeLf` | index ready | yes |
| `… --candidate <original module> --compare …eEXeLf/result.json` | `file-service-harness-d42HWW` | equivalent, 0 differences | yes |
| `npm run verify:startup-traversal` | see [startup traversal](#startup-traversal-budget) | **fail**: `listings.total` 1,369–1,389 against a budget of 1,300; `origin/main` fails identically (1,386, 1,388) | no (existing failure) |
| `npm run docs:check`, `npm run status:features` | console | 0 failures; 25/44 Verified (unchanged) | — |

### Startup traversal budget

Every scanner count is within budget on this branch. Only `listings.total`
exceeds its 1,300 limit:

| Run | Build | Preflights | `exec:exe` listings | Total | Result |
| --- | --- | ---: | ---: | ---: | --- |
| `startup-traversal-q9k6KD` | default | 5 | 508 | 1,374 | fail (first run) |
| `startup-traversal-6sYyBC` | default | 5 | 523 | 1,389 | fail (rerun) |
| `startup-traversal-oFbEGF` | default | 5 | 503 | 1,369 | fail (rerun) |
| `startup-traversal-zbu5uM` | `landlock` | 5 | 520 | 1,386 | fail |
| `startup-traversal-k3ZB9M` | `none` (0 preflights) | 0 | 504 | 1,370 | fail |

Git (314), ripgrep (528) and the main process (24) match main's recorded runs
exactly. The excess is in `exec:exe`, which is 382–395 in
[startup-traversal-linux.md](../../performance/startup-traversal-linux.md).

**Observation:** with no sandbox helper shipped (`none`, 0 preflights),
`exec:exe` is unchanged at 504. `exec:exe` therefore counts Electron utility
processes started through `/proc/self/exe`, not the preflight children. Two
`node.mojom.NodeService` processes list 372 and 132 fixture directories.

**Baseline without this branch.** A separate Git worktree at `origin/main`
`eed4f19a` was freshly built on the same host, sharing only `build/inputs`,
`build/recovery` and `tooling/node_modules`. It **fails identically**:

| Run | Build | Preflights | `exec:exe` listings | Total | Result |
| --- | --- | ---: | ---: | ---: | --- |
| `startup-traversal-zykXNQ` (worktree) | `origin/main` | 5 | 520 | 1,386 | fail |
| `startup-traversal-2Oezrx` (worktree) | `origin/main` | 5 | 522 | 1,388 | fail |

The identity reports the worktree as `dirty: 1` because of the shared-input
symlinks. Two earlier baseline attempts (`9H1cxj`, `AbDKP3`) stopped before
measuring: user `ubuntu` had no `safe.directory` entry for the worktree.

**Conclusion.** The listing overrun already exists on `origin/main` in this
environment and is not caused by this branch. It belongs to the startup-traversal
owner (OV-1003). Main's report attributes about 390 listings to the sandbox
preflight children; the `none` run here shows those listings come from Electron
`NodeService` utility processes instead. The budget was not changed.

## Recommendation

**OV-803: hold, not yet Verified on Linux x64.** The helper clauses this branch
was given pass on Linux:

- the measured priority;
- the recovered interfaces;
- a replacement with authority, malformed-input, identity and cleanup tests.

Remaining Linux gaps:

1. **Hosted contracts.** These are named in the story ("…helpers and hosted
   contracts are replaceable") but were not among this branch's tasks. They are
   not addressed here.
2. **Indexed grep.** File-service `GrepClient` and crepectl are not replaced.
   This branch provides the harness and a removal option; the owner should
   decide between replacement and removal.
3. **`tree-chunk-napi`.** No replacement. It is not loaded in the workload; a
   tree-sitter port is needed only if semantic search should survive without it.
4. **Defaults.** Every replacement is behind a build option whose default is the
   original, pending owner approval.

## Moved to platform/live stories

- Windows `cursorsandbox.exe` (network-proxy-only helper; filesystem sandboxing
  is force-disabled on win32) and `crepectl.exe`.
- macOS Seatbelt sandboxing and the macOS helper variants.

## Defaults pending owner decision

- `OPENVISION_SANDBOX_HELPER` defaults to `original`. `none` removes the five
  startup preflights; `landlock` ships the OpenVision helper. The renderer
  still reports the sandbox as unsupported in every mode, so Agent commands
  stay approval-first. Enabling sandboxed auto-run is a separate decision.
- `OPENVISION_CREPECTL` defaults to `original`. `none` disables indexed grep
  permanently.
- `tree-chunk-napi` lazy load is on by default: a timing-only change.
- Unchanged here: `cursor-proclist` (OV-1003), the tunnels (OV-703) and the
  AppImage updater (OV-904).

## Open risks

- **Landlock helper limits.**
  - No network allow-list proxy: a `networkPolicy` other than allow-all denies.
  - No mount namespace, so ignore-mapping deny globs are not enforced.
  - A read-only workspace under a writable temporary directory remains
    writable.
  - It is built with the host C compiler and links glibc dynamically.
- **The call log covers three addon files.** A gate served by an account (for
  example `instant_grep_indexing`) would change the ranking.
- **The startup-traversal listing budget fails on this host for `origin/main`
  too** (see above). It is reported to OV-1003, not changed here.
