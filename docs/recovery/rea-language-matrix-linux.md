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
```

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
| Python, C/C++, Go, Rust | `python`, `cpp`, `go`, `rust` | 10.0.0 | none (grammar only) | none claimed | all language-server features |

The "not provided" entries are observed: the driver asked for each feature and the
bundled server returned nothing. They are not failures. C/C++ language services
depend on [clangd setup](../guides/cpp-support.md). `setup:cpp` and `verify:cpp`
are Windows x64 only and exit with "Pinned C/C++ setup currently supports Windows x64
only" here. A system `clangd` exists on this machine, but the matrix does not use it,
because the clangd extension is not bundled and the repo provides no Linux setup.
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
| `verify:cpp` | Not available on Linux (Windows-only setup) |

## Remaining gates

- C/C++: no Linux clangd setup or verifier. The Windows C/C++ evidence does not
  transfer to Linux.
- The new matrix verifier has not run on Windows or macOS. Earlier Windows TS/JS
  evidence ([language workflows](rea-language-workflows.md)) predates it.
- Grammar-only languages (Python, Go, Rust) need an explicit product decision:
  ship a server, or declare them syntax-only for OV-402.
- Large *projects* (thousands of program files and dependency changes), inotify
  limits, cancellation of in-flight requests while editing the same document, and
  cross-machine CPU/RAM budgets.
- Third-party or incompatible extension behavior (OV-702).
