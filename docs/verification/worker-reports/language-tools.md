# Worker report: `ov/language-tools` (OV-402)

## Round 2: owner decisions #5 (20 October 2026)

Branch reset to `origin/main` (`95dd887d`; round 1 below was already merged).
Linux x64 container: 4 CPUs, Node 24.18.0, non-root `ov` user, `xvfb-run` plus
`dbus-run-session` with `XDG_RUNTIME_DIR=/run/user/<uid>` and a plaintext login
gnome-keyring (`gnome-keyring-daemon --start --components=secrets`). Packages
installed: `gnome-keyring libsecret-tools xdotool imagemagick sqlite3`. Evidence:
[20 October section](../../recovery/rea-language-matrix-linux.md#20-october-2026-budgets-met-by-optimization-owner-decision-5).

### Summary

Both budgets are met by optimization, not by relaxation. The syntax-only UI is added.
Every acceptance run passed first time on a clean rebuild.

| Owner item | Result |
| --- | --- |
| Large-file symbols ≤ 10 s (was 13.0 s) | Owner: the bundled TypeScript extension's tsserver stdio reader, which copied its whole buffer per chunk (2,924 ms to assemble one 11 MB response). Fixed with geometric growth. **4,246 / 4,400 / 3,635 ms** |
| Large-project renderer p95 ≤ 250 ms (was 259 ms) | Owner: one main-process watch registration per tsserver-watched file (5,018 inotify watches, each crossing the renderer). Served from the workspace watcher instead. **p95 18 / 16 / 17 ms**, watches 5,125 → 123 |
| Python/Go/Rust syntax-only, UI must say a language server enables full features | Built-in `openvision.language-status` language status item, verified natively in the matrix (`syntax_only.*`) |

### Defects found and fixed (round 2)

| Defect | Owner | Commit |
| --- | --- | --- |
| Quadratic tsserver response assembly (first large response: 510 chunks, 2.9 s) | `typescript-language-features` reader | `8dfb9ccf` |
| One main-process inotify watch, and one renderer round trip, per tsserver-watched program file | `typescript-language-features` `createFileWatcher` handling | `8dfb9ccf` |
| No UI saying Python/Go/Rust are syntax-only | new built-in extension | `ff4f7e19` |

### Verification (round 2)

Acceptance on a clean rebuild of `f875bf3b` (source, electron-host, build cache,
journal and source-build record removed). One run at a time, no reruns:

| Command | Run IDs | Result |
| --- | --- | --- |
| `verify:language-matrix` ×3 | `7dKZUr`, `79CCUM`, `swoHiC` | 3/3 first-time pass; 41 cases (37 pass, 4 declared not-provided); symbols 4,246 / 4,400 / 3,635 ms; renderer p95 120 / 77 / 78 ms |
| `verify:language-matrix -- --large-project` ×3 | `BY1OPy`, `8eq0ZP`, `5dmZSD` | 3/3 first-time pass, 0 budget violations; renderer p95 18 / 16 / 17 ms; unopened program-file change seen in about 3.03 s |
| `verify:language` | `language-verification-5y1BpE` | Pass |
| `verify:language-ui` | `language-ui-6zfXVl` | Pass |
| `verify:rename-race` | `rename-race-ibyrjC` | Pass |
| `verify:cpp` (pinned clangd already set up) | `cpp-verification-tRyhO8` | Pass |

Development runs (never counted as acceptance): `YQwqii` (watch change only),
`NXIMec`, `bYitfO` (`--tsserver-log`), `AViPUe` (temporarily instrumented extension,
discarded by the clean rebuild), `nUTS2X` (both fixes, incremental build), `ceFHBO`
(`--only=syntax`).

Unit suites: `test:language-matrix` 9/9, `test:rename-version` 11/11, `test:setup-cpp` 2/2,
`test:typescript-extension` 4/4, `test:language-status` 3/3, `test:desktop` 229/229;
`docs:check` 0 failures; `status:features` exit 0.

### Recommendation

**OV-402: promote to Verified on Linux x64.** Every Linux clause now has native
first-time evidence on a clean rebuild: the full matrix 3/3, the budgets 3/3, in-flight
edits, rename race, C/C++, large project and the syntax-only UI.

### Moved to platform/live stories

Windows and macOS runs of the matrix (all modes), rename race, C/C++, and the two
TypeScript-extension changes (they apply to every platform).

### Open risks (round 2)

- First diagnostics in large-project mode rose from about 18.6 s to 22.0–22.8 s
  (budget 29.65 s). The likely cause is the per-registration `realpath` checks; this
  is inferred, not profiled.
- The shared watcher relies on the workspace watcher reporting every non-excluded
  file. A workspace watcher that is disabled or failing would also hide tsserver
  file changes. Before, per-file watchers were independent of it.
- Unopened program files under a user `files.watcherExclude` pattern with braces or
  character classes keep per-file watches (conservative fallback).
- The reader keeps a buffer of up to twice the largest tsserver message for the
  server's life (before: about 1×).

---

## Round 1 (18–19 October 2026)

Date: 18–19 October 2026. Scope: Linux x64 only, in a cloud container (Ubuntu 24.04.5,
kernel 6.18.44, 4 CPUs, 15 GB RAM, Xvfb 1920×1080 under `dbus-run-session`,
unprivileged `ov` user, Node 24.18.0). Controlled fixtures only; no AI requests and
no live providers. Detailed evidence:
[Language matrix on Linux, 19 October additions](../../recovery/rea-language-matrix-linux.md#19-october-2026-additions-linux-x64-container)
and [C and C++, Linux x64](../../guides/cpp-support.md#linux-x64).

## Summary

- **Same-document in-flight edits** are now verified natively for rename, format,
  code action and completion. One defect was found and fixed: the rename provider
  token was never cancelled by an edit. Stale text was already rejected by the
  existing version guard.
- **`verify:rename-race`** runs on Linux and passed twice.
- **`--large-project`** mode measures a 5,001-module program with dependency,
  `package.json` and `tsconfig` changes. Budgets are derived from pre-optimization
  baselines and enforced. No program rescan was found. The per-file inotify watches
  duplicate the recursive workspace watcher; this is recorded, not fixed.
- **C/C++ on Linux x64**: pinned official clangd 23.1.0 Linux archive.
  `verify:cpp` covers GCC/Clang projects and passed twice.
- Final full matrix: 1 of 2 runs passed. The failure is the pre-existing 10 s
  large-file symbols budget on this 4-CPU host. Large-project: 1 of 2 enforced runs
  passed. The failure is the pre-existing renderer p95 budget (259 > 250 ms).

## Tasks

| # | Task | Status | Notes |
| --- | --- | --- | --- |
| 1 | Same-document edits during delayed rename, format, code action and completion | **Done** | 5 native cases in `verify:language-matrix`; rename fix in the extension-host adapter; `test:rename-version` 8 → 11 tests |
| 2 | `verify:rename-race` Linux-capable plus npm script | **Done** | Sandbox args, `logs/` creation, platform-neutral scope; 2/2 first-time passes |
| 3 | Large-project budgets | **Done, with one finding not fixed** | Mode, measurement, budgets and enforcement done. Per-file watch duplication recorded (shared watcher architecture). Per-window CPU budgets failed 2/2 enforced runs and were replaced by sequence totals; documented |
| 4 | Linux C/C++ via clangd | **Done** | Pinned Linux archive, `unzip` extraction, Linux arguments, GCC/Clang build checks, matrix entry, guides |
| 5 | Final reruns | **Done** | All listed commands run; 2 budget failures recorded below |

Completion "word continuation" deliberately does not assert cancellation. The
upstream suggest model keeps the request alive and rebases its result to the
current word, and the case asserts the exact rebased text. Typing elsewhere must
cancel, and it does (8–29 ms).

## Defects found and fixed

| Defect | Owner | Fix | Commit |
| --- | --- | --- | --- |
| Rename provider token never cancelled by same-document edits: the rename widget disposes the editor-state token source when the input closes, and its `dispose()` drops the cancel flag | Workbench rename widget / extension-host rename adapter | `guardRenameCancellation`: provider token also fires on changes to the requested document; listeners disposed when the provider settles; version guard unchanged | `643157b0` |
| Large-project idle window overlapped tsserver's per-file watch registration (harness) | `verify-language-matrix-extension.cjs` | Wait for a main-process watch count stable for 10 s | `2a147adc` |
| Per-window CPU budgets not stable (asynchronous work lands in adjacent windows) | `language-matrix.mjs` budgets | Sequence-total CPU budgets re-derived from all 5 pre-optimization runs | `b1cba62d` |

## Verification

Native runs (serialized, as `ov`, `xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- npm run …`):

| Command | Run ID | Result | First-time? |
| --- | --- | --- | --- |
| `verify:language-matrix` (before fix) | `language-matrix-WdwLms` | Fail: rename and completion token assertions (reproduction) | — |
| `verify:language-matrix -- --only=inflight` | `C6DSj6`, `lTKeoA` | Development runs (never report success); `lTKeoA` shows all 5 cases correct after the fix | — |
| `verify:rename-race` | `rename-race-VRUQ6i`, `rename-race-IDNml8` | Pass, pass | Yes, yes |
| `setup:cpp` (×2) | — | Pass; second run left settings byte-identical | Yes |
| `verify:cpp` | `cpp-verification-6yRZee`, `cpp-verification-yzG78a` | Pass, pass | Yes, yes |
| `verify:language-matrix -- --large-project` (baselines) | `4qFUPk`, `LEbAQu` (idle-window harness defect, excluded), `aKyRC0`, `Eoas4W`, `V7lQNz` | Pass (no budget declared yet) | — |
| `--large-project`, per-window CPU budgets | `r4jBea`, `kPrhNE` | **Fail**, CPU attribution (see the evidence doc) | No |
| `--large-project`, final budgets | `M7aWIm`, `UhcGgE` | Pass; **fail** renderer p95 259 > 250 ms (all large-project budgets met) | Yes; no |
| `verify:language-matrix` (final) | `K7wsfM`, `N2qXJA` | Pass (37 cases: 33 pass, 4 not-provided); **fail** `typescript.large_file.symbols_ms` 13,018 > 10,000 ms (all cases correct) | Yes; no |
| `verify:language` | `language-verification-CdFidx` | Pass | Yes |
| `verify:language-ui` | `language-ui-it1HdL` | Pass | Yes |

Unit and repository checks: `test:language-matrix` 9/9, `test:rename-version` 11/11,
`test:setup-cpp` 2/2, `test:desktop` 202/202, `docs:check` 0 failures,
`status:features` exit 0.

After the final native runs, one verifier `limitations` string was edited (text
only, naming the `.ovinflight` probes); no logic changed.

Host notes: the build needed `/home/user/OpenVision Projects` to be writable by `ov`.
A rebuild after a failed first build needed this session's own `source/`,
`electron-host/` and `build/namespace-journal.json` removed. `setup:cpp` was run as
root with `NODE_USE_ENV_PROXY=1` (proxy CA readable by root only), then `chown`ed.
No packages were installed; `unzip`, gcc 13.3.0 and clang 18.1.3 were present.

## Recommendation per story

**OV-402: not yet Verified on Linux x64.** Remaining Linux gaps:

1. `verify:language-matrix` must pass consecutively on the reference Linux host.
   On this 4-CPU container the pre-existing 10 s budget for `large.ts` document
   symbols failed 1/3 full runs (6.4, 13.0, 8.9 s). This needs an owner decision on
   a host-class budget, or a run on the Omarchy host where it measured 4.9 s.
2. `--large-project` failed 1 of 2 enforced runs on the existing renderer p95
   budget, which mostly samples startup. Same decision as point 1.
3. Per-file inotify watches for tsserver-watched files (finding below) if the
   owner wants watch growth fixed rather than budgeted.
4. Owner decision on Python/Go/Rust (currently declared syntax-only).

Everything else in this story's Linux scope (in-flight edits, rename race, C/C++,
large-project scans/dependency changes/budgets) passed natively.

## Moved to platform/live stories

- Windows and macOS runs of `verify:language-matrix` (including `inflight` and `--large-project`).
- Windows and macOS runs of `verify:rename-race`.
- C/C++ on Windows after the setup refactor (Windows identity record shape kept
  unchanged, not re-run) and on macOS (no pinned clangd build).

## Defaults pending owner decision

- Python, Go and Rust are declared **syntax highlighting only** (`syntaxOnly` in the
  matrix, Linux guide capability table, evidence doc).
- C/C++ is claimed on Linux x64 through `setup:cpp` (not bundled).
- Large-project budgets use the ×1.5 rule over the maximum of five
  pre-optimization runs. Zero entry baselines are floored to 1. CPU is budgeted
  over the whole window sequence, not per window. `peak_watch_fraction` is relative
  to this host's `max_user_watches` (130,051).
- The Linux clangd archive hash was computed from the download, because GitHub's
  release API was blocked by the container proxy. The binary reports the same
  llvm-project commit as the pinned Windows build.

## Open risks

- **inotify duplication (not fixed):** the bundled TypeScript extension turns each
  tsserver `createFileWatcher` into `RelativePattern(Uri.file(path), '*')`, and the
  main process holds one inotify watch per program file (5,018 for 5,001 modules),
  even though `@parcel/watcher` already watches the workspace recursively. Growth is
  linear: about 125,000 program files would exhaust this host's limit, and far fewer
  on hosts with the old 8,192 default. The fix belongs in the shared extension
  file-watcher routing, not a language adapter.
- Rename fix residual: the token fires only for changes to the requested document.
  Edits to other target documents are still caught by the version guard, not by
  cancellation.
- Budgets come from one container class; cross-machine budgets are not established.
- `verify:language-ui` and `verify:language` were run once each (unchanged verifiers).
