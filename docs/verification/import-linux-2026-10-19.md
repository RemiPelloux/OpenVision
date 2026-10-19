# Settings import and restore on Linux x64 (OV-701)

19 October 2026, Linux x64 (kernel 6.18.44, Xvfb + dbus session, unprivileged
`ov` user), Node 24.18.0, OpenVision source build of the pinned Cursor 3.21.13
runtime. Branch `ov/import-restore`. All fixtures are controlled and generated
locally; no real user profile was read and no AI provider was called.

## What changed

| Area | Change | Owner |
| --- | --- | --- |
| Transaction | Import and restore are two-phase: every new byte is staged in a sibling temporary (`<file>.openvision-<uuid>.tmp`) before any destination changes; only the commit renames change destinations. A failure before the commit removes its temporaries, the directories it created and an incomplete backup, and says "failed before changing any file". | `desktop/import-transaction.mjs` |
| Interruption recovery | The manifest is written (`prepared`/`restoring`, with the committing process id and Linux start time) before the commit. On the next app start (native owner hook) or the next CLI import/restore/`--recover`, an interrupted import is rolled back and an interrupted restore is finished. Transactions of a live process are left alone. `--list-backups` marks them `interrupted`. | `import-transaction.mjs`, `import-ipc.mjs`, `import-owner-customization.mjs` (v2), `import-cli.mjs` |
| Restore order | Restore undoes newest first (extension directories before the registry that names them), so a running app never sees an unregistered imported directory. | `import-transaction.mjs` |
| Directories | The manifest records directories the import created; restore removes them when empty, so restore is tree-exact, not only byte-exact. | `import-transaction.mjs`, `import-backup.mjs` |
| Read-only errors | Node's recursive `mkdir` reports a read-only parent as `ENOENT`; the transaction now retries the first missing level without recursion so the error says `EROFS`. | `import-transaction.mjs` |
| Running-app registry rewrite (**defect**) | The shared-process extensions-folder watcher re-added every new extension directory to the default profile with `metadata: undefined`, replacing imported entries (gallery metadata, uuid, target platform). Restore then refused the changed registry ("newer edit"). Fixed by an AST-guarded customization that skips directories the default profile already registers or that no longer exist, and by committing the registry before the directories it names. | `import-extension-watcher-customization.mjs`, `install-import.mjs`, `cursor-import.mjs` |
| Declared exclusions | A destination allow-list (settings/keybindings/tasks/snippets and registered extension files only) is enforced while planning. The dialog and every preview list the never-imported data. Named Cursor profiles are labelled from `storage.json` (read only). | `cursor-import.mjs`, `import-ui.js`, `import-ipc.mjs` |
| Version-2 backup ownership | Owned by the recorded destinations, not by the installation root, so another copy of OpenVision (or the verifier overlay) can recover the same selected profile. Version-1 backups still require the matching root. | `import-backup.mjs` |

## Commands and runs

All native runs: `runuser -u ov -- … xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- npm run <script>`,
one at a time. Run directories are under `logs/` (ignored, not published).

| Command | Run | Result |
| --- | --- | --- |
| `npm run test:import` | — | 25/25 pass (adds interruption, exclusion, owner and watcher tests) |
| `npm run verify:import` | `import-verification-Pw9kM0`, `import-verification-pJE9Ya`, `import-verification-tkyrCU` | pass, pass, pass (15 checks each; `tkyrCU` after limiting the Linux sandbox flag to Linux, a no-op here) |
| `npm run verify:import -- --realistic-profile` | `import-verification-realistic-f15i9k`, `import-verification-realistic-vaFRGE` | pass, pass (10 checks each) |
| `npm run verify:import-faults` | `import-faults-verification-cpHS5H`, `import-faults-verification-1H8VJu` | pass, pass (7 interruption cases, 12 ENOSPC levels, 4 EROFS stages, native full volume) |
| `npm run verify:provider-import` | `provider-import-8r04rv` | pass (with a Secret Service; see failures). The pi import does not load the import transaction, so the later restore-order commit does not affect it. |
| `npm run test:portable`, `npm run test:desktop` | — | 30 pass + 1 pre-existing macOS-only skip; 198/198 pass |

The final runs above are first-time passes at commit `0e03e2c0` (clean tree) with
the source build containing the v2 watcher customization. Earlier passes on
intermediate commits (`lO4GPL`, `mRi2Hg`, `RMHEfl`, `BOEvjl`, `Qbc403`) are not
counted for the final code. Detailed results below are from `Qbc403` and were
identical in shape in `cpHS5H` and `1H8VJu`.

### verify:import (synthetic)

The source carries the protected settings `window.title`, `update.mode`,
`telemetry.telemetryLevel: all`, `telemetry.enableTelemetry: true`,
`extensions.autoUpdate`, `workbench.startupEditor`, plus marked
`globalStorage/state.vscdb` (with a `secret://` record), `globalStorage/storage.json`
(a `userDataProfiles` registry), `workspaceStorage/*/state.vscdb`, a named
profile and `extensions/.obsolete`. New native checks on top of the 11 earlier ones:

- the dialog shows the exclusion declaration before preview and in the preview;
- after import, `window.title` keeps the destination value, `update.mode` is
  `none`, telemetry stays `off`/`false`; after a relaunch the native window
  title is still OpenVision's (`OpenVision TEST — disposable profile — …`);
- the preview paths and the backup manifest records name only declared files;
- no byte carrying the fixture's private marker exists anywhere in the
  destination profile (including the app's own `state.vscdb`) or extensions folder;
- the source tree (21 entries) is byte-identical after the run, including the CLI restore.

### verify:import --realistic-profile

`desktop/cursor-profile-fixture.mjs` generates a Cursor 3.21.x Linux layout in a
disposable `HOME`/`XDG_CONFIG_HOME` (in `/tmp`, outside the installation):
`~/.config/Cursor/User/{settings,keybindings,tasks}.json` (JSONC, comments,
trailing comma, Unicode), `snippets/`, `profiles/-3f8a2c1e/` (named profile
"Work fixture" with its own `extensions.json`), `globalStorage/state.vscdb`
(real SQLite: enablement state, account, `secret://` record, chat rows),
`state.vscdb.backup`, `storage.json` (profile registry, machine id),
extension global storage, `workspaceStorage/*/state.vscdb`, `History/`,
`Cookies`, `Local Storage`, logs; `~/.cursor/extensions` with a universal,
a `linux-x64` and a `win32-x64` extension (`targetPlatform` metadata,
`.vsixmanifest`, inert binaries) and `.obsolete`; `~/.cursor/argv.json` and `mcp.json`.

The app is launched with that `HOME`/`XDG_CONFIG_HOME`. Observed:

1. Default discovery (`cursorLocations`) fills both dialog fields with the
   fixture paths; the profile picker lists `Default` and `Work fixture (-3f8a2c1e)`.
2. Preview with all categories fails closed: the status names
   `openvision-fixture.windows-tool targets win32-x64`, Import stays disabled,
   no destination file changes.
3. After the user's remedy (reinstall the Linux build in Cursor; the source digest
   is re-baselined), the named profile is selected in the dialog, previewed and
   imported with the **real Import button**: its settings, keybindings and
   `python.json` snippet arrive; the default profile's settings and snippets do
   not; three extensions are registered, all `linux-x64` or universal; no
   `.obsolete`, no Windows build. 15 files, all declared.
4. A settings-only import of the default profile changes `user/settings.json`
   only (preview and manifest).
5. Protected settings and telemetry hold; no private marker in the destination;
   relaunched title is OpenVision's.
6. Restoring both backups newest-first returns every file to its exact bytes or
   absence; the normal profile is untouched; the 61-entry source tree is unchanged.

### verify:import-faults

New verifier (`desktop/verify-import-faults.mjs`). Interruption uses a
verification-only probe inserted after each commit rename into a disposable
overlay copy of `desktop/` (`verify-import-faults-overlay.mjs`); the probe holds
the armed commit point until the verifier kills the process. Restart always uses
the production app/CLI. Results of `Qbc403`:

| Case | Killed | Recovery on restart | After restart | Re-import + restore |
| --- | --- | --- | --- | --- |
| native import after rename 1/8 | owned host process group, SIGKILL | `prepared` → rolled back (1 file) | exact original, no temporaries | byte-exact |
| native import after rename 4/8 | SIGKILL | rolled back (4) | exact original | byte-exact |
| native import after rename 8/8, manifest not yet complete | SIGKILL | rolled back (8) | exact original | byte-exact |
| native restore after rename 4/8 | SIGKILL | `restoring` → finished (4) | exact original | byte-exact |
| CLI import after rename 2/8 | CLI child, SIGKILL | `--recover`: rolled back (2) | exact original; listed `interrupted` before recovery | byte-exact |
| CLI import after rename 6/8 | SIGKILL | rolled back (6) | exact original | byte-exact |
| CLI restore after rename 3/8 | SIGKILL | finished (5) | exact original | byte-exact |

Inside an unprivileged user+mount namespace (`unshare -rm`, stages re-run as the
invoking uid; every mount disappears with the namespace):

- **ENOSPC sweep, production CLI, 4 MiB tmpfs.** Twelve fresh destinations, each
  with 0 B to 2 MiB left free. 8 levels failed with `Import failed before changing
  any file: ENOSPC …` at the backup copy, the manifest write or staging; each left
  the destination tree identical (including directories) with no temporaries and
  no backup. 4 levels imported fully (a follow-up preview shows 0 changes). For
  each of those, restore on a re-filled volume failed with `Restore failed before
  changing any file: ENOSPC … The backup is retained`, the destination stayed
  fully imported and the backup stayed listed; after freeing space the restore was
  exact.
- **EROFS, production CLI.** A read-only bind remount of the volume: import →
  `Import failed before changing any file: EROFS …`; restore of an existing backup
  → `Restore failed before changing any file: EROFS … backup is retained`; listing
  still works; nothing changed. Extensions folder alone read-only: User staging
  succeeded, then extensions staging failed with EROFS; the whole tree, including
  User, was unchanged with no temporaries. After unmounting the bind, restore was exact.
- **Native IPC, full 384 MiB profile tmpfs.** With the app running, the volume is
  filled after preview: Apply returns `Import failed before changing any file:
  ENOSPC`; destination unchanged. After freeing, import succeeds; the volume is
  filled again: Restore returns `Restore failed before changing any file … backup
  is retained`; destination stays imported. After freeing, restore is exact. No
  renderer errors; the host exited 0.

## Failures retained (not counted as passes)

| Run | Observation | Cause / action |
| --- | --- | --- |
| `import-verification-realistic-HD8IL0` | Preview refused: sources must be outside OpenVision | Harness: fixture generated under `logs/`. Moved to `/tmp`. |
| `import-verification-realistic-ihKRuf` | 7 checks passed; restore refused `extensions.json` as a newer edit | **Product defect**: shared-process watcher rewrote the imported registry without metadata. Fixed (watcher customization v1, registry-first commit). |
| `import-faults-verification-bllVL9` | Recovery correct; comparison included app-owned runtime files (`User/.openvision*`, `User/agents`) | Harness: compare the import's destination set while an app runs; app is now closed on failure. |
| `import-faults-verification-R6TtlV` | First case recovered; re-import preview refused | Harness: fixture source under `logs/`. Moved to `/tmp`; preview results asserted. |
| `import-faults-verification-xiXCtN` | All interruption cases and the ENOSPC sweep passed; `mount -o remount,ro` refused in the namespace | Harness: use a read-only bind remount. |
| `import-faults-verification-q96fYm` | `native-import-3` re-import → immediate restore not exact (passed in `xiXCtN`) | **Product defect (race)**: the watcher adopted the directory after the restore removed it. Fixed (watcher v2 skips directories that no longer exist). |
| `import-faults-verification-FEfwHO` | Second run of the same `native-import-3` re-import → immediate restore not exact, with watcher v2 | **Product defect (ordering)**: restore reverted the registry before removing the directory, so the app adopted a still-existing, unregistered directory. Fixed: restore undoes newest first. Two clean runs followed. |
| `import-faults-verification-aocpWH` | EROFS stage reported `ENOENT` | **Product defect**: Node recursive `mkdir` masks `EROFS`. Fixed in the transaction. |
| `provider-import-c9BUIg` | pi import dialog stayed busy storing keys | Environment: no Secret Service in the container. Passed (`8r04rv`) with `gnome-keyring` (installed: `gnome-keyring`, `libsecret-tools`). Not caused by this branch. |

## Limitations

- Linux x64 only. Windows reruns of `test:import`/`verify:import` and macOS
  `~/Library/Application Support/Cursor` discovery are platform stories.
- Interruption is SIGKILL at a deterministic commit point, not power loss; data
  files are written with `flush` but extension copies are not fsynced. EIO and
  hostile concurrent edits during the commit are not covered.
- The realistic profile is a generated layout, not a capture of a real Cursor
  installation; extension packages are inert manifests.
- The first window of a restarted app may read settings before recovery
  finishes; recovered files then reload through the file watchers. The verifiers
  check files after recovery, not the in-memory configuration at that instant.
- The watcher fix narrows, but cannot close, the window in which a running app
  and an import write the extension registry at the same time; restore fails
  closed (refuses) rather than overwriting in that case.
- Named OpenVision profiles remain unsupported destinations (fail closed).
