# Import profile ownership and exact restore

14 October 2026, Windows x64, Node 24.18.0. Native settings import now writes to
the profile and extension directories selected by the running OpenVision
instance. Previously, it derived both destinations from the installation root,
so launching with `--user-data-dir` or `--extensions-dir` could import into the
ordinary profile instead of the selected one.

The main process resolves the IPC sender to its actual native window. It reads
the profile resources from that window's profile owner and the extension/data
paths from the native environment service. Renderer options select import
sources and categories, never destination ownership. Native `vscode-userdata`
resources are converted through their own URI implementation, then checked
against their owning directories. Missing, foreign, remote or named-profile
ownership fails closed. Named profiles are deliberately unsupported until their
individual resource inheritance and extension registries are integrated.

Plans carry explicit destination and boundary information. Apply verifies that
the requesting window still owns the planned destinations. Filesystem checks
retain the full selected data/installation boundary and reject redirected
directory parents when checked. New backup manifests store scoped relative
paths and destination ownership. Restore rejects another profile's backup,
escaping or duplicate records, changed backup contents and newer destination
edits before writing. Existing files are restored from original bytes; newly
imported files are removed. Repeating an identical import or completed restore
does not rewrite files.

The native extension scanner canonicalizes Windows drive spelling in file URIs.
The importer now uses the URI library's serialize/parse round trip when producing
registry entries. This avoids a scanner rewrite of `/C:/…` to `/c:/…` that
previously invalidated the exact post-import hash and prevented safe restore.
Restore still checks exact file digests; it does not ignore changes to the
extension registry.

## Native evidence

Run from a prepared checkout:

```sh
node desktop/verify-import.mjs
```

The verifier now launches an owned disposable app/profile and extension folder.
It never reads the normal app's debugging endpoint or attaches to its window.
The source fixture is synthetic and outside the application installation. The
normal profile is only read for before/after digests of its settings, keybindings
and extension registry; its content is not included in the report.

Latest evidence: `logs/import-verification-8npO43/result.json`.
All **11 native/CLI checks passed**, no renderer page errors were observed and the
owned host exited 0. The workbench SHA-256 was
`9251426f04943379ff29248049f3d2dbb3290e1a68172f852bbc180ead11a503`.

| Check | Observed result |
| --- | --- |
| Native settings dialog | Preview displayed the selected disposable profile destination |
| Read-only preview | All six destination files retained their exact original bytes or absence |
| Stale preview | Changing settings after preview prevented apply |
| Selected destinations | JSONC settings, keybindings, tasks, snippets, extension files and registry imported into the selected profile/extensions |
| Idempotent import | Repeating the import produced zero changes and no backup |
| Stale restore | A later settings edit prevented restore and remained intact |
| Tampered backup | Changing original backup bytes prevented restore |
| Exact restore | All six files returned to their exact previous bytes or absence; a second restore changed zero files |
| Isolation | Normal-profile digests and a separate disposable-profile sentinel were unchanged |
| Recovery after host exit | A new CLI process discovered and previewed the native backup without changing files |
| Native-to-CLI restore | After the owned app exited, CLI restored six files to exact original bytes/absence; retry restored zero files |

The exact-restore fixture includes comments, CRLF line endings and Unicode.
Its extension is a harmless manifest fixture, not a downloaded or executed
third-party extension. The UI preview uses the real settings dialog; apply,
repeated import and failure checks call the same production native IPC handler
used by that dialog. No filesystem provider or IPC handler was replaced. No AI
provider was called.

The native ownership record also retains the selected resource URI schemes and
paths. Unit/integration fixtures additionally cover missing and named-profile
rejection, cross-profile backup rejection, manifest path escape, stale
preview ownership, directory-junction redirection, transient replacement locks,
partial-import rollback after a changed source, and legacy version-one restore
with Windows drive-case differences. The focused command is:

```sh
node --test desktop/cursor-import.test.mjs desktop/import-destinations.test.mjs desktop/import-preview.test.mjs desktop/import-replacement.test.mjs desktop/import-recovery-cli.test.mjs
```

All **16 focused tests passed**. Three production CLI tests launch fresh Node
processes and cover native-layout discovery, read-only preview, exact restore,
idempotency, incomplete/foreign ownership, stale edits, tampered original bytes,
malformed manifests and redirected backup directories. Named-profile rejection is covered at the native
ownership adapter boundary; a separate native named-profile launch was not run.

## Backup compatibility and limitations

Without target options, CLI import retains its original destinations:
`data/local/User`, `data/local-extensions`, and `backups/cursor-import` under the
installation root. Existing version-one backups remain restorable. The native
dialog stores new backups beneath the selected user-data directory at
`Backups/openvision-import`. Its restore action uses the requesting window's
current owned destinations. Legacy fixed-location backups can still be restored
for the matching default destination, including Windows drive-case variations.

Native backups are now discoverable and restorable after the app closes. Supply
**both** `--target-user-data` and `--target-extensions` with the same directories
used to launch the app. These options establish ownership independently of the
backup. They also support CLI import into that selected profile. `--user` and
`--extensions` continue to mean import **source** directories.

For the ordinary local profile, close OpenVision and run from its installation
directory:

```sh
node desktop/import-cli.mjs --target-user-data "./data/local" --target-extensions "./data/local-extensions" --list-backups
node desktop/import-cli.mjs --target-user-data "./data/local" --target-extensions "./data/local-extensions" --preview-restore "BACKUP_DIRECTORY_FROM_LIST"
node desktop/import-cli.mjs --target-user-data "./data/local" --target-extensions "./data/local-extensions" --restore "BACKUP_DIRECTORY_FROM_LIST"
```

Replace the backup placeholder with the exact `backup` path from the listing.
For a custom launch, replace both target paths with that launch's directories.
Discovery reads owned manifests and marks malformed/foreign entries invalid; it
does not hash every original file, and explicitly reports `verifiedContents:
false`. Preview validates backup bytes and checks destination files for newer
edits without writing. Restore repeats those checks before applying changes.
Restored backups remain listed for recovery history and repeated restore is
idempotent. Destination paths are never adopted from a backup manifest.

The native dialog's Restore Last Import button still belongs to its current
dialog session; persistent recovery is available through the CLI commands above.
There is no persistent in-app backup browser yet. CLI recovery assumes the app
using those paths is closed; it does not forcibly close another instance.

The restore is guarded and resumable after already-restored files, but it is not
a single filesystem transaction covering all files. Physical full-disk/I/O
failure, forced process interruption and concurrent hostile filesystem changes
are not established by this run. Byte-exact restore concerns changed files;
empty created directories may remain. macOS and Linux native behavior remains
unverified. No completion percentage is increased by this report alone.

Retained failed attempts: `n0A0fA` clicked settings before the native panel was
ready; the harness now retries that navigation. `JkJe6Z` and `UBFQEp` exposed
the unsupported native `vscode-userdata` URI scheme; owner-based URI conversion
fixed it. `IpPZPK` revealed a case-sensitive display-path assertion, corrected
in the Windows verifier. `f8jnbi` passed the first seven checks but refused
restore after the native scanner canonicalized the extension registry drive
letter; fixing the producing registry representation allowed the final exact
restore. These failures are retained and not counted as passing runs.
