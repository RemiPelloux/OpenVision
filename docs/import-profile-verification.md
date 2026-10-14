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

Final evidence: `logs/import-verification-T4vTAS/result.json`.
All **nine native checks passed**, no renderer page errors were observed and the
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
node --test desktop/cursor-import.test.mjs desktop/import-destinations.test.mjs desktop/import-preview.test.mjs desktop/import-replacement.test.mjs
```

All **13 focused tests passed**. Named-profile rejection is covered at the native
ownership adapter boundary; a separate native named-profile launch was not run.

## Backup compatibility and limitations

CLI import retains its original destinations:
`data/local/User`, `data/local-extensions`, and `backups/cursor-import` under the
installation root. Existing version-one backups remain restorable. The native
dialog stores new backups beneath the selected user-data directory at
`Backups/openvision-import`. Its restore action uses the requesting window's
current owned destinations. Legacy fixed-location backups can still be restored
for the matching default destination, including Windows drive-case variations.

The CLI's `--restore` currently accepts its original backup boundary; it cannot
restore new native-dialog backups from `Backups/openvision-import`. Native and
CLI restore paths are therefore not interchangeable. Destination paths are never
adopted from an arbitrary backup manifest to work around that limitation.

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
