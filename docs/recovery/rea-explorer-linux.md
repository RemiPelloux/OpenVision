# Explorer and large-project matrix on Linux

17 October 2026. Story: **OV-401** (Partial; not promoted). **Linux x64 only.**
Runtime input: Cursor 3.21.13 (recovered, formatted bundles), editable source build.
Host: Omarchy (Arch-based), kernel 7.2.5, Hyprland on Wayland, Node 26.8.1 tooling.
Not a packaged build: the preview.7 portable payload is unchanged.

The acceptance clause is: exercise open/save/rename/move/delete, symlinks,
external changes, permissions and restored sessions; preserve unsaved edits;
record watcher and filesystem work for small edits in a large fixture. Each item
was mapped to existing evidence and every Linux gap was exercised natively in
the real OpenVision Explorer and editor. One defect was found and fixed.

## Commands

```sh
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 recovery>
npm run build:desktop
npm run verify:explorer          # new: desktop/verify-explorer.mjs
npm run verify:explorer -- --measure-only   # measurement launch only (iteration aid)
npm run verify:project
npm run verify:project:lifecycle
npm run verify:project:scale
node --test desktop/symlink-cycle.test.mjs   # also part of test:desktop
```

`verify:explorer` refuses to run off Linux or as root. It builds a disposable
fixture under `logs/explorer-verification-*` and opens a three-root workspace:

| Root | Contents |
| --- | --- |
| `large` | 100 `group-NNN` folders × 100 files (10,000), `node_modules` (10 packages, 1,000 files), user-excluded `generated/`, and `ops`, `links`, `external`, `perm` and `session` cells |
| `secondary` | Move/copy destinations and a second-root session file |
| `linked-root` | A workspace root that is itself a directory symlink |

Links in `large/links`: a relative file link and directory link to targets
outside the workspace, a broken link, `loop -> ..` (directory cycle through the
root), a mutual cycle `cycle-a <-> cycle-b`, and rename/delete targets. Permission
cells are applied before launch (unreadable file `000`, sealed directory `000`,
read-only file `444`, read-only directory `555`). Original modes are backed up
to `permission-modes.json` (exclusive create) and restored and compared in
`finally`. No AI provider is called; `files.enableTrash` is `false`.

## Matrix

"Windows only" means existing evidence comes from Windows runs and does not
establish Linux behavior. "Linux summary" means the 15 October
[Linux verification](../verification/linux-verification.md) lists the verifier
as passing without a retained result; those cells were re-run here.

| Clause item | Existing evidence before this run | Linux result (this run) |
| --- | --- | --- |
| Open through the Explorer | Quick open only (Windows); Linux summary | **Pass** — row click opens the editor with exact content |
| Save | Windows `verify:project`, lifecycle; Linux summary | **Pass** — exact UTF-8 bytes; tab clean after save |
| Rename | Windows lifecycle; Linux summary | **Pass** — bytes preserved; renaming an **open dirty** file moves the editor and keeps the unsaved edit, which then saves to the new path |
| Move | Windows lifecycle (cross-root); Linux summary | **Pass** — cut/paste within a root and across roots |
| Copy across roots | Unverified | **Pass** — source and copy byte-identical |
| Delete | Windows lifecycle; Linux summary | **Pass** — confirmation dialog; unrelated file intact |
| File symlink | Windows: `EPERM`, unverified. Linux: scale verifier saves through a link via the extension API | **Pass** — Explorer open/edit/save reaches the target; link and its relative text unchanged |
| Directory symlink | Windows junction (lifecycle); Linux summary (lifecycle creates a dir symlink) | **Pass** — expand, open child, save reaches target |
| Broken symlink | Unverified | **Pass** — listed; opening shows "file was not found" with *Create File*; nothing created |
| Directory loop (`loop -> ..`) | Unverified | **Pass** — expands one level (root's children shown again), collapses, no hang |
| Mutual symlink cycle (`ELOOP`) | Unverified | **Defect → fixed → Pass** (below): listed, opening fails with an error, deletable |
| Symlink rename / delete | Unverified | **Pass** — rename renames the link (target untouched); deleting a directory link leaves the target's contents |
| Workspace root is a symlink | Unverified | **Pass** — save through the linked root reaches the real folder |
| External change, clean editor | Windows lifecycle; Linux summary | **Pass** — reloads |
| External change, dirty editor | Windows lifecycle; Linux summary | **Pass** — dirty text kept; Save reports newer content; disk keeps external bytes; explicit *Overwrite* saves local text |
| External delete, clean / dirty editor | Unverified | **Pass** — tab marked deleted, content kept; dirty edit kept and Save recreates the file |
| External create / delete in the 10,000-file root | Windows watcher notifications only | **Pass** — Explorer row appears and disappears |
| Unreadable file (`000`) | Unverified | **Pass** — "Unable to open … NoPermissions"; no content shown |
| Unreadable directory (`000`) | Unverified | **Pass** — expands empty without notification or hang; Explorer stays usable |
| Read-only file save (`444`) | Unverified (Windows/Linux used directory denial) | **Pass** — "File is read-only" with *Overwrite*; disk unchanged; editor keeps the edit (verifier reverts rather than chmod) |
| Directory write denial | Windows ACL deny; Linux POSIX deny (lifecycle) | **Pass** — re-run by lifecycle; also Explorer rename/delete in a `555` folder fail with `EACCES` and keep the file |
| Restored session, normal restart | Windows lifecycle (one file); Linux summary | **Pass** — dirty files in two roots and an untitled file restored; disk unchanged until saved |
| Restored session, abrupt exit | Unverified | **Pass** — SIGKILL of the owned process group (16 processes, 0 survivors) after the backup delay; all three dirty editors and the untitled file restored; each saves exact bytes |
| Multi-root operations | Windows two-root search, cross-root move | **Pass** — cross-root move/copy, symlinked root, restore across roots |
| Watcher and filesystem work for a small edit | Windows notification counts only (not OS-level) | **Pass against declared budget** (below) |

## Defect: symbolic link cycles disappear from the Explorer

**Observed (before fix).** Run `logs/explorer-verification-cpd5F7/` and
`…-ZffsX6/`: `large/links` showed `broken.txt` and every other link but not
`cycle-a` or `cycle-b` (`symlinkCycleListed: false`). The entries exist on disk,
so they could not be seen, renamed or deleted from the Explorer.

**Observed (code).** `DiskFileSystemProvider.readdir` (main process, served to
the renderer over the local file system channel) stats every symbolic link
through `SymlinkSupport.stat`. That function treats only `ENOENT` as a dangling
link. A cycle fails `stat()` with `ELOOP`; the error is thrown, `readdir` logs it
at trace level and drops the entry. The extension host carries the same
provider for `vscode.workspace.fs`.

**Fix.** [`desktop/symlink-cycle-customization.mjs`](../../desktop/symlink-cycle-customization.mjs)
reports an `ELOOP` link as dangling, exactly like a broken link, in
`out/main.js` and `out/vs/workbench/api/node/extensionHostProcess.js`. The
Windows-only `EACCES` fallback and every other error are unchanged. The patch
is marker-guarded and idempotent, refuses a missing/ambiguous owner, and keeps
the first original of each input under `backups/symlink-cycle/<sha256>.js`
(exclusive copy). Other bundles holding the same helper (watcher, pty host,
shared process, CLI) were not changed: they do not list directories for the user.

**Guards.** `desktop/symlink-cycle.test.mjs` (in `test:desktop`) checks the
transform on a real cycle and a broken link, that a missing non-link still
throws, idempotence, refusal of 0 or 2 owners, and that both recovered bundles
still contain exactly one patchable owner (drift guard). The native verifier
now requires `cycle-a`/`cycle-b` to be listed, opening `cycle-a` to fail with an
error, and an Explorer delete of `cycle-b` to remove only that link.

**After fix (observed).** Listed with the link decoration; opening reports
"Unable to read file … (Unknown)"; *Delete Permanently* removes the link only.

## Watcher and filesystem work

The measurement launch runs the editor under `strace -f -ttt -y` (the tracer is
the launched program, so it is the ancestor of every traced process under Yama
`ptrace_scope=1`; nothing is attached by PID). Traced calls: the `%file` class,
`getdents64`, `inotify_add_watch/rm_watch` and process creation. inotify watches
are read from `/proc/<pid>/fdinfo` of the owned process group and mapped to
fixture directories by inode.

**Declared budget** (in the verifier):

| Window | Project syscalls | Distinct project paths | Directory listings | New inotify watches | Root config probes |
| --- | ---: | ---: | ---: | ---: | ---: |
| Small edit (type one character + Ctrl+S in `group-050/file-5000.txt`) | ≤ 30 | ≤ 3 | ≤ 2 | ≤ 2 | ≤ 4 per root·s |
| External append to an unopened file | ≤ 30 | ≤ 3 | ≤ 2 | ≤ 2 | ≤ 4 per root·s |
| Idle | 0 | — | 0 | 0 | ≤ 4 per root·s |
| Watches | no per-file watches; each directory ≤ 1, workspace roots ≤ 2; user-excluded directories 0; all 100 group folders watched; count unchanged by the edits |

The first declared budget counted every fixture path and failed (38 distinct
paths in the edit window). The excess was not edit work: the main process stats
absent per-root configuration paths (`.vscode/{settings,tasks,launch,mcp}.json`,
`.vscode/extensions`, `.claude/settings*.json`, `.claude/commands`,
`.openvision/{hooks,environment}.json`, `.openvision/commands`) every **5.01 s**,
the upstream polling interval for watch requests on paths that do not exist.
That cost scales with roots, not files, and appears identically in the idle
window. The revised budget separates these "root configuration probes" and
caps both. The first strict watch budget (≤ 1 per directory, `node_modules`
unwatched) also failed for two documented reasons: the main process holds one
extra non-recursive watch on each root, and the upstream default
`files.watcherExclude` does not exclude `node_modules`.

**Observed** (final run, see Evidence):

| Window (seconds) | Project syscalls | Distinct project paths | Directory listings | New watches | Probes per root·s |
| --- | ---: | ---: | ---: | ---: | ---: |
| Small edit (3.16 s) | 9 (`statx` 4, `openat` 3, `stat` 2; main 7, watcher utility 2) | 1 (`group-050/file-5000.txt`) | 0 | 0 | 2.00 |
| External append (3.00 s) | 1 (`stat` by the watcher utility) | 1 (`group-075/file-7500.txt`) | 0 | 0 | 3.00 |
| Idle (4.00 s) | 0 | 0 | 0 | 0 | 3.08 |

| inotify watches (settled, before and after the edits) | Value |
| --- | ---: |
| All owned watches (main 19, watcher utility 155, network 3) | 177 |
| Fixture watches / watched fixture directories | 137 / 134 |
| Per-file watches | 0 |
| `group-NNN` folders watched | 100 / 100 |
| Workspace roots with a second (main-process, non-recursive) watch | 3, each 2 |
| `node_modules` directories watched (upstream default excludes do not cover them) | 20 |
| User-excluded `generated/**` directories watched | 0 |
| Unwatched fixture directories | the sealed `000` folder; targets outside the workspace |
| Watch count change caused by the edits | 0 |

**Inferred.** Per-edit work is O(1) in project size: the edit touched only the
edited file (no directory listing, no new watch), the external write produced
one watcher `stat`, and the probes are size-independent. A full rescan of this
root would need over 100 directory listings and 10,000 entries.

**Startup (observed, not budgeted).** Before the first window, owned processes
made about 8,600 fixture directory listings. Attribution from traced `execve`/clone:
`cursorsandbox --preflight-only` ran **5 times** (822–1,031 listings each) and
ripgrep **30 times** (about 363 listings each: 7 `.cursorignore` discoveries,
14 `CLAUDE.md`/`AGENTS` rule discoveries, 6 quick-open file listings, 3
`tsconfig` discoveries), plus the recursive watcher's initial crawl (804
listings by the watcher utility). In run `BGF1KT` the login-shell environment
resolution also ran the user's shell profile (`bash`, `starship`, `mise`), which
stats project paths; the final run did not show it. These repeated whole-tree
traversals are an efficiency gap for open/startup, outside this clause; they are
listed under remaining gates.

## Existing verifiers on this build

| Verifier | Result |
| --- | --- |
| `verify:project` | Pass (`logs/project-verification-7KgTE1`) |
| `verify:project:lifecycle` | Pass, 11 checks including POSIX write denial and retry (`logs/project-lifecycle-verification-y6U7VK`; see Evidence for the earlier screenshot timeout) |
| `verify:project:scale` | Pass, both sizes, including `native_file_symlink_save_preserves_link_and_target` (`logs/project-scale-verification-zKABwz`) |

## Evidence

| Run | Content |
| --- | --- |
| `logs/explorer-verification-o0pmid/result.json` | **Final:** 36/36 checks passed; host exits 0, 0, 0 and SIGKILL (16 owned processes, 0 survivors); no renderer page errors; permission modes restored; workbench SHA-256 `37291db0270b39323752d6f058e2e1d06e1b0d64f9d535c143951d897ba344b3` |
| `…-cpd5F7`, `…-ZffsX6` | Before the fix: cycle entries absent from the listing |
| `…-QJ4WI1` | First budget failure (probes counted as edit work); probe periods from its `strace.log` |
| `…-BGF1KT` | Process attribution of startup traversal (`execve`/clone tracing) |
| `logs/project-lifecycle-verification-y6U7VK` | Lifecycle pass, 11 checks |

Earlier harness iterations (`xQxJtX`, `ETlNU4`, `tf8rw1`, `NWP15v`, `BzINNS`) failed
in the verifier itself: tree level, quick-open focus and context-menu labels.
`project-lifecycle-verification-78Bxl6` passed all 11 checks, but its final
evidence screenshot timed out. The immediate rerun `y6U7VK` passed.

Run directories are private (`logs/` is ignored) and hold `result.json`,
`strace.log`, screenshots and the permission-mode backup.

## Limitations and remaining gates

- **Linux x64 only.** Windows cells still lacking evidence: file symlinks
  (`EPERM` on the test host), broken links and cycles, symlinked roots,
  unreadable files/directories, read-only file save, external delete, abrupt-exit
  restore and OS-level per-edit work. The symlink-cycle fix is source-level and
  untested on Windows. macOS is untested (OV-902). OV-401 therefore stays
  **Partial**; status and points are unchanged.
- The trash path (`files.enableTrash: true`, the default) is not exercised.
- Abrupt exit is SIGKILL of the owned process group, not power loss or a
  kernel crash.
- Moves use cut/paste; mouse drag-and-drop is not exercised.
- `strace` slows the traced processes; counts include only traced user-space
  calls. Single sample, warm cache, other agents' workloads concurrent.
- Repeated startup traversals (5 sandbox preflights, 30 ripgrep scans) and the
  5-second probes of absent configuration files are recorded, not changed.
- No independent native rebuild; preview.7 is unchanged.
