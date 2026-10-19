# Worker report: ov/import-restore (OV-701)

19 October 2026. Linux x64 container, Node 24.18.0, unprivileged `ov` user,
Xvfb + dbus session. Story: OV-701, import settings without losing the
OpenVision setup. Evidence: [Linux import and restore report](../import-linux-2026-10-19.md).

## Summary

All five Linux tasks are done and natively verified. Import and restore are
now staged (no destination change before every byte is safely written) and
recover after SIGKILL: the next app start or CLI action rolls back an
interrupted import or finishes an interrupted restore. Full (ENOSPC) and
read-only (EROFS) volumes fail with a clear "failed before changing any file"
error, no partial destination and the backup retained. Never-imported data is
declared in the dialog, every preview and the user guide, and enforced by a
destination allow-list.

Native verification found four product defects, all fixed at their owner:
a running app's extensions-folder watcher replaced imported registry entries
(dropping metadata) so restore refused them; a race where the same watcher
re-registered a directory removed by restore; a restore ordering that opened
that race; and Node's recursive `mkdir` reporting read-only volumes as `ENOENT`.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Strengthen `verify:import` (protected settings, telemetry off, source tree hash, excluded stores neither imported nor written, platform-accurate limitations), dated Linux report | **Done** |
| 2 | Realistic Cursor 3.21.x Linux profile generator; default discovery and named source profiles in the native dialog; only declared categories move (`--realistic-profile`) | **Done** |
| 3 | Interrupted import (SIGKILL app and CLI between replacements), ENOSPC and EROFS rollback via user+mount namespace (`verify:import-faults`); fix the transaction | **Done** |
| 4 | Declare exclusions in user guide and preview UI; unit test that plans never target them | **Done** |
| 5 | Final reruns with run IDs | **Done** (see Verification) |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Partial destination possible on ENOSPC/EROFS mid-import or mid-restore; no recovery of a SIGKILLed import (destination left half-imported) | `desktop/import-transaction.mjs`, `import-backup.mjs`, `import-cli.mjs`, `import-ipc.mjs`, `import-owner-customization.mjs` | `0deea38f` |
| Running app re-added every imported extension directory with `metadata: undefined`, replacing imported registry entries; exact restore then refused the registry (found by `realistic-ihKRuf`) | `desktop/import-extension-watcher-customization.mjs` (new, AST-guarded), `install-import.mjs`, `cursor-import.mjs` (registry committed first) | `01586efb` |
| Same watcher re-registered a directory an immediate restore had removed (`q96fYm`) | watcher customization v2 | `86d5fa4d` |
| Node recursive `mkdir` reports read-only volumes as `ENOENT` (misleading error) (`aocpWH`) | `import-transaction.mjs` | `3f5dcba4` |
| Restore reverted the registry before removing directories, opening the adoption window (`FEfwHO`) | `import-transaction.mjs` (undo newest first) | `0e03e2c0` |

Also: restore now removes directories the import created (tree-exact restore);
version-2 backups are owned by their recorded destinations rather than the
installation root; excluded-data declaration and allow-list (`f1788993`).

## Verification

Native runs serialized, one at a time, as `ov` under
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session`. Build:
`npm run build:desktop` (clean rebuild after each customization change).

| Command | Run ID(s) | Result |
| --- | --- | --- |
| `npm run test:import` | — | 25/25 pass |
| `npm run test:portable` | — | 30 pass, 1 pre-existing macOS-only skip |
| `npm run test:desktop` | — | 198/198 pass |
| `npm run verify:import` | `Pw9kM0`, `pJE9Ya`, `tkyrCU` | pass ×3 — first-time passes; `tkyrCU` at the final head after a Linux-only guard on the sandbox flag |
| `npm run verify:import -- --realistic-profile` | `realistic-f15i9k`, `realistic-vaFRGE` | pass, pass — first-time passes on final code |
| `npm run verify:import-faults` | `cpHS5H`, `1H8VJu` | pass, pass — first-time passes on final code |
| `npm run verify:provider-import` | `8r04rv` | pass with gnome-keyring Secret Service |
| `npm run docs:check` | — | 0 failures |
| `npm run status:features` | — | runs; ledger unchanged (shared planning files not edited) |

Run IDs are directories under `logs/` (`import-verification-*`,
`import-faults-verification-*`, `provider-import-*`).

Retained failures (not counted): `realistic-HD8IL0` (harness: fixture inside the
installation), `realistic-ihKRuf` (product defect: watcher registry rewrite),
`faults-bllVL9` (harness: compared app-owned runtime files), `faults-R6TtlV`
(harness: source inside the installation), `faults-xiXCtN` (harness: tmpfs
remount not permitted in the namespace), `faults-q96fYm` and `faults-FEfwHO`
(product race/ordering, intermittent: `native-import-3` passed in `xiXCtN` and
`Qbc403`, failed in these two; fixed, then 2/2 clean), `faults-aocpWH` (product:
ENOENT for EROFS), `provider-import-c9BUIg` (environment: no Secret Service).

Host notes: packages installed with apt: `gnome-keyring`, `libsecret-tools`
(plaintext `login` keyring for `ov`, `lock-on-idle=false`; daemon started inside
`dbus-run-session` with `--components=secrets`). `/home/user/OpenVision Projects`
had to be created for `ov` before the build's project-workspace step. 4 CPUs,
15 GB RAM; each fault run takes several minutes.

## Recommendation per story

**OV-701: promote to Verified on Linux x64.** Every Linux clause now passes
natively: preview, JSONC, snippets, protected settings, extension registration,
idempotency, exact restore, declared exclusions (accounts, secrets, chat
databases, enablement state, profile registries, named profiles), source data
preserved (tree hash), realistic profile with default discovery and named
source profiles, interruption and I/O-failure recovery. Not covered on Linux
and outside this branch: power loss and EIO (stated limitations).

## Moved to platform/live stories

- Windows rerun of `npm run test:import` and `npm run verify:import`
  (including the new protected-settings, exclusion and source-hash checks) and
  of the watcher customization behaviour on Windows.
- macOS source discovery from `~/Library/Application Support/Cursor/User` and
  `~/.cursor/extensions`, with a macOS realistic fixture.
- Interruption/ENOSPC/EROFS equivalents on Windows/macOS (the verifier uses
  Linux namespaces and `/proc`).

## Defaults pending owner decision

- Named OpenVision profiles stay fail-closed as destinations and are declared
  excluded; a named Cursor profile can be a source only.
- "Real-profile fixture" means the locally generated realistic layout
  (`desktop/cursor-profile-fixture.mjs`), never the owner's real data.
- A wrong-platform extension in the Cursor registry fails the extension
  category closed (existing behaviour), with the remedy "reinstall the matching
  build in Cursor, or import without extensions". Skipping it with a report
  would be an alternative.
- Interrupted transactions are always rolled back to the state before the
  operation (an import is undone, a restore is finished), never completed forward.
- Every CLI import (including preview without `--apply`) and restore first runs
  recovery; `--list-backups` and `--preview-restore` stay read-only. Recovery
  skips transactions whose recorded process is still alive.

## Open risks

- A running app and an import can still both write `extensions.json` in a very
  narrow window; restore then refuses (fails closed) rather than overwriting.
- After a crash, the first window may read half-imported settings before
  recovery finishes; files are restored moments later and reload via watchers.
- Extension file copies are not fsynced; power loss is not covered.
- The shared-process watcher customization depends on the pinned 3.21.13 bundle
  shape; it fails the build loudly if the contract changes.
- Not fixed, out of scope: none found outside the import story.
