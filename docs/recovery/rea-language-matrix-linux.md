# Language matrix on Linux (OV-402)

Date: **17 October 2026**. Scope: **Linux x64 only.** Omarchy (Arch-based), kernel
7.2.5, Hyprland on Wayland, Electron 42.10.0. Build: editable source build from the
3.21.13 runtime input, not a packaged release. No paid inference, no AI requests and
no replacement language providers.

OV-402 stays **Partial** (see [remaining gates](#remaining-gates)).

## Commands

```sh
npm ci --prefix tooling
export OPENVISION_RECOVERY_DIR=<read-only recovery-3.21.13 directory>
npm run build:desktop
npm run verify:language
npm run verify:language-ui
npm run verify:language-matrix     # new; runs under strace when /usr/bin/strace exists
npm run test:language-matrix       # also part of test:desktop
npm run test:rename-version
npm run verify:language-matrix -- --large-project   # 19 October: 5,000-module project budgets
npm run verify:rename-race                          # 19 October: Linux-capable
npm run setup:cpp && npm run verify:cpp             # 19 October: Linux x64 clangd
npm run test:setup-cpp
```

`--only=<suite,...>` (for example `--only=inflight`) is a development filter: such
a run never reports success and is not acceptance evidence.

Set `OPENVISION_LANGUAGE_TRACE=0` to run the matrix without strace. Each run writes
a disposable profile, project and `result.json` under ignored `logs/language-matrix-*`.

## Pinned matrix

[`desktop/language-matrix.mjs`](../../desktop/language-matrix.mjs) pins this matrix.
The verifier fails if any manifest version drifts, and the unit test checks the same
pins against the assembled build. Observed runtime identities: extension API
**1.128.0**, bundled TypeScript **6.0.3**.

| Language | Bundled extension | Version | Server | Verified on Linux | Not provided by the bundled server |
| --- | --- | --- | --- | --- | --- |
| TypeScript | `typescript-language-features` | 10.0.0 | tsserver 6.0.3 | diagnostics, definition, references, rename, format, 50k-line file | — |
| JavaScript | `typescript-language-features` | 10.0.0 | tsserver 6.0.3 | diagnostics, cross-file definition/references/rename, format | — |
| JSON | `json-language-features` | 1.0.0 | JSON server | schema diagnostics, format, 50k-line file | definition, references, rename |
| CSS | `css-language-features` | 1.0.0 | CSS server | lint diagnostics, definition, references, rename (custom property), format, 50k-line file | — |
| HTML | `html-language-features` | 1.0.0 | HTML server (embedded script) | diagnostics, definition, references, rename, format, 50k-line file | — |
| Markdown | `markdown-language-features` | 1.0.0 | Markdown server | link diagnostics, header definition, cross-file references and rename, 50k-line file | format |
| C/C++ | `cpp` grammar plus pinned `setup:cpp` | 10.0.0 | clangd 23.1.0 via vscode-clangd 0.6.0 (not bundled) | 19 October: diagnostics, completion, definition, references, rename, format (`verify:cpp`, [below](#cc-with-pinned-clangd)) | — once `setup:cpp` has run; grammar only without it |
| Python, Go, Rust | `python`, `go`, `rust` | 10.0.0 | none | **syntax highlighting only** (default pending owner decision) | all language-server features |

The "not provided" entries are observed: the driver asked for each feature and the
bundled server returned nothing. They are not failures. C/C++ language services
depend on [clangd setup](../guides/cpp-support.md). On 17 October `setup:cpp` and
`verify:cpp` were Windows x64 only; since 19 October they also support Linux x64
([below](#cc-with-pinned-clangd)).
SCSS, LESS and PHP share bundled servers but are not exercised.

## Observed results

All observations come from the final run `logs/language-matrix-eG6abI/result.json`.
That run passed every required case: 32 cases recorded, 28 pass, 4 not-provided as
declared, 0 fail. Host exit was 0, with 0 renderer page errors, and the input hashes
were unchanged throughout the run. The executable SHA-256 is
`0636c96f07de2c74a3eaf8692fc1743d81259c0bf66c8ebde7f7179211a8aff9`; the
extension host with the fix is
`75a0434f7777a174c80f9d93ac35b2156adf96fee40643693dca183f5f165679`.

For every language, each diagnostic case edits through the native editor and waits
for the diagnostic to clear. It then runs native Undo and waits for the diagnostic
to return. Every document change event is a bounded range, never a whole-document
replacement. Each rename and format case saves with `saveAll`. It then runs undo,
redo and undo again, comparing exact bytes on disk after every step.

| Language | Diagnostic clear / restore after edit | Rename (files) | Format exact bytes + undo/redo |
| --- | --- | --- | --- |
| TypeScript | 410 / 430 ms | 3 files, incl. an unopened one | Pass |
| JavaScript | 663 / 762 ms | 3 files after concurrent split-editor edits | Pass |
| JSON | 10 / 13 ms | not provided | Pass (formatter drops the final newline) |
| CSS | 50 / 13 ms | 1 file, 3 occurrences | Pass (formatter drops the final newline) |
| HTML | 29 / 120 ms | 1 file, embedded script | Pass |
| Markdown | 140 / 124 ms | 2 files, header plus fragment links | not provided |

### Large files (about 50,000 lines each)

| File | Lines / bytes | Open | Symbols (count, ms) | Edit to diagnostic clear | Undo to diagnostic restore | Extension-host lag max |
| --- | --- | --- | --- | --- | --- | --- |
| `large.ts` | 50,004 / 1,627,887 | 506 ms | 50,001 in 4,892 ms | 2,277 ms | 2,343 ms | 883 ms |
| `large.json` | 50,004 / 927,804 | 298 ms | 5,001 (server cap) in 476 ms | 554 ms | 320 ms | 167 ms |
| `large.css` | 50,002 / 1,188,912 | 790 ms | 50,001 in 2,996 ms | 741 ms | 2,213 ms | 237 ms |
| `large.html` | 50,009 / 838,963 | 448 ms | 1 (root) in 1,532 ms | 158 ms | 144 ms | 168 ms |
| `large.md` | 50,002 / 788,025 | 264 ms | 1,000 in 1,202 ms | 1,290 ms | 667 ms | 167 ms |

Each large-file edit produced exactly 2 bounded change events (edit and undo). The
declared local budget is 10,000 ms per large-file metric, and it passed. Renderer
responsiveness was measured over the whole run as a CDP `evaluate` round trip on the
workbench main thread. Across 299 samples: p50 3 ms, p95 150 ms (budget 250 ms),
max 1,075 ms. These are single observations taken under strace. They are not
cross-machine guarantees and not before/after comparisons.

### Conflict handling

| Case | Result |
| --- | --- |
| External write to the unopened `other.ts` (two lines prepended), then TypeScript rename | Positions reflect the new bytes; exact rename and undo bytes |
| Native F2 rename while an external writer prepends a line to an **unopened** target | **Defect reproduced, then fixed** (below) |
| Native F2 rename with an unopened target and no external writer | Applied, undo/redo exact |
| Dirty buffer plus external save (`verify:language`) | Save refused, external bytes and dirty buffer kept, Revert loads external |

## Defect: stale rename applied to an externally changed unopened file

**Reproduced** (`logs/language-matrix-x250fM/result.json`, before the fix). A
delayed rename probe for the private `.ovconflict` fixture computes ranges from
disk. While it is still running, an external writer prepends `// external writer\n`
to a target file that no editor has loaded. Native F2 then applied the stale range
to the new bytes and wrote the result to disk:

```text
// exrenamedl writer
keep alpha target
```

**Owner.** The earlier [rename race guard](rea-language-workflows.md#native-rename-race-guard)
in `ExtHostLanguageFeatures` `provideRenameEdits` compares versions of *loaded*
documents only. An unopened target carries no version, so the guard skipped it, and
the workbench bulk edit loaded the changed file from disk and applied the stale
offsets.

**Fix.** [`guardRenameDiskChanges`](../../desktop/rename-version-customization.mjs)
patches both extension-host variants after the version guard. It records when the
provider started. For each `file:` target that is not loaded, it then runs
`stat` and rejects the whole rename if mtime or ctime is at or after that start
minus 50 ms, or if the file is missing. The 50 ms covers coarse filesystem
timestamps. The rejection is "A file changed on disk while computing the rename.
Try again." Loaded documents still use versions and are not checked with `stat`.
The web-worker host has no `node:fs` and keeps version-only behavior. The patch is
idempotent behind its own marker, requires the v1 guard, fails the build if that
shape changes, and keeps the first backup under `backups/rename-versions`.

**Verified.** `test:rename-version` passes 8/8, including new rejection, healthy,
missing-file, non-`file:`-scheme, no-`node:fs` and idempotency cases for both
host variants. The native rerun `logs/language-matrix-eG6abI` rejects the stale
rename as a whole. The source stays `alpha source`, and the target keeps exactly
the external bytes. The healthy rename still applies, with exact undo/redo.

**Residual (inferred).** A write that lands between this check and the workbench
loading the file for the bulk edit is not covered. That window is now one IPC hop
instead of the provider's whole computation time.

## Full-scan measurement

The verifier wraps the owned process family in
`strace -f --seccomp-bpf -ttt -e trace=<path syscalls>,inotify_add_watch,...`.
It never attaches to processes it did not start. The project holds 626 entries,
including 600 TypeScript modules under `pkg/` (in the tsconfig program) and 600
unrelated files under `assets/`. The driver brackets windows of about 4 s with
absent-path `statx` markers. Thread IDs are mapped to processes from
`/proc/<pid>/task` (owned descendants only), and processes are classified by
rewritten title, extension-host PID and mapped `@parcel/watcher` module.

| Window (after warm-up) | Project path syscalls | Distinct fixture entries | `pkg/` entries | Directory opens | New inotify watches |
| --- | --- | --- | --- | --- | --- |
| idle | 13 | 0 | 0 | 0 | 0 |
| TS edit 1 (in memory) | 7 | 1 | 0 | 0 | 0 |
| TS edit 2 (in memory) | 7 | 0 | 0 | 0 | 0 |
| TS save | 22 | 1 | 0 | 0 | 0 |
| CSS edit | 14 | 1 | 0 | 0 | 0 |
| Markdown edit | 14 | 1 | 0 | 0 | 0 |
| JSON edit | 8 | 1 | 0 | 0 | 0 |

**Observed.** Small edits and a single-file save trigger no whole-project rescan by
the language servers, extension host or file watchers. No window reached the 50%
contract; the largest window touched 1 of 626 fixture entries. The startup
pass is one-time: tsserver read 609 entries while building its program. The main
process added about 600 per-file inotify watches for program files, and the
`@parcel/watcher` process added recursive directory watches. Watch counts at
scan completion and at the end were stable: main 637 → 632, watcher 87 → 87,
language servers 3 each. The recurring path syscalls in every window are a bounded
`statx` poll by main-process pool threads of about ten workspace config paths
(`.vscode/{settings,tasks,launch,mcp}.json`, `.openvision/{environment,hooks}.json`,
`.claude/...`). There were 377 such calls over the run, about 3 per second, and the
rate does not scale with project size.

**Inferred.** The per-file watches follow from tsserver delegating file watching to
the client. They grow linearly with program size, so very large programs may reach
the inotify limit. This was not measured beyond 600 files. The owner of the
config-path poll was not traced.

**Resources (observed under strace, upper bounds).** Peak summed RSS for the
process family was 5,854 MiB. Summed RSS counts shared pages more than once and
includes the 3 MiB tracer. CPU at the end, in 100 Hz ticks: renderer 5,952;
extension host 3,027; tsserver semantic 1,314 and syntax 692; CSS server 620;
HTML server 321; Markdown server 188. These are measurements, not budgets.

## Linux harness finding

`verify:language-ui` failed at redo on Linux. Cursor binds Ctrl+Y to "Focus Chat
Followup" (weight 410, no `when` clause) on every platform except Windows, which
uses Ctrl+Shift+Y. That binding shadows the editor's Ctrl+Y redo. The verifier now
presses Ctrl+Y on Windows and Ctrl/Cmd+Shift+Z elsewhere, and passes. This is
upstream keymap behavior, not a language defect.

## Other checks on this build

| Check | Result |
| --- | --- |
| `verify:language` | Pass, rebuilt host (TS/JS diagnostics, navigation, rename, format, 25k-line navigation, conflicting save) |
| `verify:language-ui` | Pass, rebuilt host (references peek, F2 rename, Save All, keyboard undo/redo) |
| `verify:cpp` | Not available on Linux on 17 October; Linux x64 since 19 October ([below](#cc-with-pinned-clangd)) |

## 19 October 2026 additions (Linux x64 container)

Host: Ubuntu 24.04.5 container, kernel 6.18.44, 4 CPUs, 15 GB RAM, Xvfb 1920×1080
under `dbus-run-session`, run as an unprivileged user. Node 24.18.0. A fresh source
build of the same 3.21.13 input; executable SHA-256 unchanged
(`0636c96f…a8aff9`), patched extension host
`1c7b6ce0393a40fd035cbb449e0165cccfae1e73ed113d1c9407835b3a23a8b4`. Only
disposable profiles and synthetic projects; no AI requests. Timings come from
this shared container and are not comparable with the Omarchy runs above.

### Same-document edits while requests are in flight

`verify:language-matrix` adds an `inflight` suite. Delayed probe providers for the
private `.ovinflight` fixture snapshot the text when called, wait while the driver
types into **the same document** through the native `type` command, then return
ranges computed from the old text and ignore their token. Each case passes only if
the final text is exactly "rejected" (the typed edit alone) or "rebased" (the
result correctly moved), and, where cancellation is expected, the provider token
fired before the result was released.

| Case | Trigger | Edit while pending | Outcome (K7wsfM / N2qXJA) | Token cancelled after the edit |
| --- | --- | --- | --- | --- |
| Rename | native F2 + input box | `Z` at line start, shifting the target | rejected / rejected | 12 / 19 ms (**after fix**; never before) |
| Format | `editor.action.formatDocument` | `Z` before the range | rejected / rejected | 102 / 65 ms |
| Code action | `editor.action.codeAction` `apply: first` | `Z` before the range | rejected / rejected | 24 / 18 ms |
| Completion, word continued | `triggerSuggest` on `al` | `p` (word becomes `alp`) | rebased: `alphaCompletion` plus the import line, exactly once | not cancelled, by upstream design |
| Completion, edit elsewhere | `triggerSuggest` on `al` | `Z` on the next line | rejected: nothing inserted | 16 / 8 ms |

Completion keeps a request alive while the user continues the word being completed;
the suggest model refilters the late result and replaces the whole current word,
with no stale text. Cancelling there would only force a re-request, so the
verifier records it instead of asserting cancellation.

#### Defect: rename provider token never cancelled by edits

**Reproduced** (`logs/language-matrix-WdwLms`, `logs/language-matrix-C6DSj6`, before
the fix). The stale rename was already rejected by the
[version guard](#defect-stale-rename-applied-to-an-externally-changed-unopened-file),
but the provider token was never cancelled: the provider kept computing a result
that could not be used.

**Owner.** The workbench rename controller passes its editor-state token source
(flags Value|Position) to the rename input widget. When the input closes, the widget
calls `dispose(true)`, but that subclass's `dispose()` ignores the cancel argument.
Its content and cursor listeners are removed without cancelling, so the request that
starts after the input closes runs with a token that can never fire. Format and code
action use the same token source but never hand it to a widget, so they cancel
correctly.

**Fix.** [`guardRenameCancellation`](../../desktop/rename-version-customization.mjs)
patches both extension-host variants after the version and disk guards. The provider
receives a token that fires when the workbench token fires *or* when the requested
document changes (`ExtHostDocuments.onDidChangeDocument`). Listeners are disposed when
the provider settles. The late result still goes through the version guard, so a
provider that ignores the token is rejected as before. The patch is idempotent behind
its own marker, requires the disk guard and fails the build on a shape change.

**Verified.** `test:rename-version` 11/11 (new: same-document cancel, no cancel on
other documents, single fire, workbench cancellation still propagates, listener
disposal, healthy rename keeps versions, for both hosts). Native: `lTKeoA`
(development run), `K7wsfM` and `N2qXJA`; `verify:rename-race` `VRUQ6i` and
`IDNml8` (its `source` mode now records `cancelled: true`).

### Rename race on Linux

`verify:rename-race` now has an npm script, creates `logs/`, passes the Linux sandbox
arguments and records the platform. Both Linux runs passed first time:
`logs/rename-race-VRUQ6i` and `logs/rename-race-IDNml8`. They reject the whole stale
rename when the dependent or source document changes, and apply the healthy and
unrelated-change renames with exact undo/redo and disk bytes.

### Large projects (`--large-project`)

The fixture has 5,001 TypeScript modules in the tsconfig program (50 chains of 100
imports), `package.json`, 1,003 files under `node_modules` (two packages, one
providing the program's types) and 1,000 unrelated assets: 7,006 entries in all. The
launcher samples `/proc` for the owned process family every 500 ms (CPU ticks, RSS,
inotify watches from `fdinfo`) and attributes samples to the driver's windows. The
driver waits for first diagnostics, then until the main process's watch count is
stable for 10 s, then 6 s more.

| Window (V7lQNz) | Action | Distinct fixture entries | Program entries | New inotify watches | Language result |
| --- | --- | --- | --- | --- | --- |
| idle | none | 0 | 0 | 0 | — |
| ts-edit-1/2 | type into `src/use.ts` | 0 | 0 | 0 | — |
| ts-save | save it | 1 | 1 | 0 | — |
| dependency-change | rewrite `node_modules/dep-a/index.d.ts` | 2 | 0 | 0 | missing-export error clears in 3,252 ms |
| dependency-install | add `node_modules/dep-c` (51 files) and a `package.json` dependency | 1 | 0 | 2 | — |
| tsconfig-change | add a compiler option | 1 | 0 | 0 | diagnostics back 503 ms after the write |
| ts-edit-after-reload | type again | 0 | 0 | 0 | — |

**Observed.** No edit, save, dependency or config change rescans the program. The
tsconfig reload issued 433 project path syscalls but touched only `tsconfig.json`
among fixture entries; tsserver reuses its cached source files. First diagnostics
arrived after about 18.6 s. Peak RSS: tsserver about 550 MiB (two processes),
extension host about 465 MiB.

**inotify.** The main process ends with 5,018 watches, one per program file plus a
few directories. Total family peak 5,125 = 3.9% of this host's
`fs.inotify.max_user_watches` (130,051). The per-file watches come from tsserver
`createFileWatcher` events: the bundled TypeScript extension maps each one to
`createFileSystemWatcher(new RelativePattern(Uri.file(path), '*'))`, which the main
process serves with its own inotify watch, although `@parcel/watcher` already
watches the workspace recursively (83 watches). They are registered in a burst about
27 s after launch (180 → 5,123 in 14 s; `aKyRC0` watch series). **Not fixed:** the
duplication sits in the shared extension file-watcher routing used by every
extension, not in a language adapter. It is recorded as an open risk. Watch use grows
linearly with program size, so a program of about 125,000 files would exhaust this
host's limit, and far fewer on hosts with the old 8,192 default.

**Harness defect fixed before the baseline.** The first two runs (`4qFUPk`,
`LEbAQu`) measured the idle window while that registration burst was still running
(3,057 and 550 entries "touched" by watch registration). Neither run is used for
budgets.

**Budgets.** Declared in
[`largeProjectBudget`](../../desktop/language-matrix.mjs) before any optimization
(none was made): per-metric maximum over the runs `aKyRC0`, `Eoas4W`, `V7lQNz`,
`r4jBea` and `kPrhNE`, times 1.5, rounded up (milliseconds and MiB to 10). A zero
entry baseline counts as 1. The owner's ×1.5 default applies; no clause gives a
tighter number.

| Budget | Value |
| --- | --- |
| Distinct fixture entries per window | 2 (3 for dependency-change) |
| Program entries per window | 2 |
| Dependency change to diagnostic update | 4,910 ms |
| tsconfig change to diagnostics back | 770 ms |
| First diagnostics | 29,650 ms |
| CPU over all windows: tsserver / extension host | 8,130 / 3,950 ms |
| Peak RSS: tsserver / extension host | 860 / 710 MiB |
| Peak family inotify watches | 7,688 (fraction of `max_user_watches` 0.0591) |

The first budget, declared from three runs only, budgeted CPU per window. Both
enforced runs failed it (`r4jBea`: dependency-install tsserver 750 > 150 ms;
`kPrhNE`: the same plus ts-edit-2 extension host 800 > 290 ms). The tsserver reaction
to a dependency install lands in either the install window or the next one, and the
extension host shows a sporadic 600–800 ms burst in a random window. CPU is now
budgeted as the total over all windows. Scans, latency, RSS and watches stay per
window or per run. Both failures are kept as evidence and their measurements are in
the derivation.

**Enforced runs of the final budget.** `M7aWIm` passed. `UhcGgE` met every
large-project budget but failed the existing renderer round-trip budget (p95 259 ms
> 250 ms). That p95 rests on about 110 samples, mostly taken during startup and
project load; across all nine large runs it ranged from 55 to 259 ms. The budget was
not changed.

### C/C++ with pinned clangd

`setup:cpp` now pins the official clangd 23.1.0 Linux x64 archive (SHA-256
`e53b1a96…cbafdfd`) next to the Windows one, with the same vscode-clangd 0.6.0
VSIX. `verify:cpp` uses a GCC compilation database and builds the renamed fixtures
with gcc, g++, clang and clang++. Both runs passed first time (`6yRZee`, `yzG78a`).
Details and hashes: [C and C++, Linux x64](../guides/cpp-support.md#linux-x64).

### Python, Go and Rust

These remain grammar-only bundles: no language server is bundled or set up, and the
matrix declares them `syntaxOnly`. This is the conservative default pending an owner
decision; no language-server behavior is claimed.

### 19 October runs

| Command | Run | Result |
| --- | --- | --- |
| `verify:language-matrix` | `K7wsfM` | Pass: 37 cases (33 pass, 4 not-provided as declared), host exit 0, 0 page errors, renderer p95 194 ms |
| `verify:language-matrix` | `N2qXJA` | **Fail**: every case correct, but `typescript.large_file.symbols_ms` 13,018 ms > 10,000 ms |
| `verify:language-matrix` (earlier, before the rename fix) | `WdwLms` | Fail: rename and completion token assertions (see above) |
| `verify:language-matrix -- --large-project` | `M7aWIm`, `UhcGgE` | Pass; fail on renderer p95 259 ms |
| `verify:language` | `language-verification-CdFidx` | Pass, first run |
| `verify:language-ui` | `language-ui-it1HdL` | Pass, first run |
| `verify:rename-race` | `VRUQ6i`, `IDNml8` | Pass, pass |
| `verify:cpp` (after `setup:cpp`) | `cpp-verification-6yRZee`, `-yzG78a` | Pass, pass |

`large.ts` document symbols took 6,359, 13,018 and 8,886 ms in the three full matrix
runs on this 4-CPU container under strace (4,892 ms on the Omarchy host). The
10,000 ms budget was set on the owner's machine and is not changed here. This code
path is untouched by the 19 October changes.

## Remaining gates

Linux x64 (as of 19 October):

- `verify:language-matrix` passed 1 of 2 final full runs on the 4-CPU container: the
  failure is the pre-existing 10 s large-file symbols budget (13.0 s). Needs a decision
  on a host-class budget or a quieter host, not a code change in this branch.
- `--large-project` passed 1 of 2 enforced runs; the failure is the existing renderer
  round-trip p95 budget (259 > 250 ms).
- Per-file inotify watches for tsserver-watched files duplicate the recursive workspace
  watcher (linear growth, 1 watch per program file). Not fixed.
- Python, Go and Rust: syntax highlighting only, pending owner decision.
- Third-party or incompatible extension behavior (OV-702).

Moved to platform/live stories: Windows and macOS runs of the matrix (including the
in-flight and large-project modes), the rename race and C/C++ (macOS has no pinned
clangd build).
