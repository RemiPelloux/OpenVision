# Native project scale verification

14 October 2026, Windows x64, Node 24.18.0. The real OpenVision native file
watcher passed the same create/change/delete workload in projects containing
100 and 10,000 pre-existing files. The larger project did not emit notifications
for unrelated files or restart its recursive project watcher during these edits.
This narrows OV-401's remaining verification scope; it does not establish a
bound on every filesystem read or prove reduced RAM usage.

Run from a prepared development checkout:

```sh
node desktop/verify-project-scale.mjs
```

The verifier creates separate disposable profiles and projects for both sizes.
Each project has 100 text files per directory. A declared verification extension
subscribes to the real public `createFileSystemWatcher` API; it does not replace
the filesystem provider or watcher. The external driver creates, changes, and
deletes one file five times, waiting for each native notification before the next
operation. File generation is outside the application measurements. No AI
provider is called, so this workflow uses zero inference requests or tokens.

## Passing evidence

Final run: `logs/project-scale-verification-QhYlDX/result.json`.
Eight assertions passed, four per project size. Both owned hosts exited 0 and
no renderer page errors were recorded. The workbench SHA-256 was
`a7060c6957720cc7152e019357323d0f39e40c649bb542e495bf61d352cef80e`.

| Assertion | 100 files | 10,000 files |
| --- | --- | --- |
| Create/change/delete notifications | 5 / 5 / 5 | 5 / 5 / 5 |
| Unrelated file notifications during the workload | 0 | 0 |
| Distinct project paths in native recursive watcher start records | 1 | 1 |
| Native recursive project watcher restarts during edits | 0 | 0 |
| Unrelated sentinel file bytes preserved | Yes | Yes |

Native `fileWatcher.log` records identified the Windows backend. Each profile
recorded two starts of the same project root during startup: the initial watcher
was replaced when its exclusion configuration changed. There were no starts or
stops for that root during the edit workload. Retained trace excerpts and hashes
of the full source logs are listed in `watcherTraces` in the result. These are
application watcher lifecycle records, **not OS handle counts**.

The driver's event buffer is capped at 1,000 records. It stops the watcher and
awaits pending writes before publishing completion. Control and result JSON files
use temporary files followed by rename, so the reader cannot consume a partial
JSON document. Each launch owns its process/profile and closes only that host.

## Measurements and their limits

| Observation | 100 files | 10,000 files |
| --- | ---: | ---: |
| Notification round trip, minimum / median / maximum | 120 / 186 / 251 ms | 127 / 187 / 189 ms |
| Sum of 15 notification round trips | 2,781 ms | 2,747 ms |
| Electron-reported CPU delta across the workload interval | 1.184 s | 1.780 s |
| Summed reported working sets before / after | 2,067 / 2,134 MiB | 2,094 / 2,105 MiB |
| Processes present in both metric snapshots | 9 | 9 |

Notification round trips include filesystem mutation, native notification
delivery, extension log writing and up to 50 ms of harness polling. The CPU
interval also includes evidence reads and the final one-second observation
period. The CPU delta is the difference between cumulative CPU usage for the
same nine Electron-reported processes, not total machine CPU.

The memory values sum working-set snapshots and may double-count shared pages.
They are not private-memory measurements or process-family peaks. Other native
verification instances were running concurrently; trace logging and the driver
also have overhead. These are sequential observations with fresh profiles and
warm filesystem caches, not isolated cold/warm performance comparisons or an
optimization baseline. Application launch-to-driver values remain in the raw
result for diagnostics and are not used as performance claims.

## File symlinks and remaining gates

Both cases attempted to create an actual Windows file symlink in the disposable
project. The host returned `EPERM`; the verifier records this explicitly under
`fileSymlinkUnavailable`. It did not change machine policy or substitute a
junction/hard link. Its native open/edit/save-and-preserve-symlink check is ready
to run on a host that permits file symlink creation, but **did not run here**.
The existing directory-junction evidence is documented separately in
[project lifecycle verification](project-lifecycle-verification.md).

OV-401 remains Partial. Remaining evidence includes file-symlink behavior,
OS-level directory traversal/read counts, filesystem work bounds under broader
project operations, peak process-family resources, crash/power-loss recovery,
full-disk/physical I/O failures and native macOS/Linux checks. Notification
counts and stable watcher lifecycle records alone cannot prove that no other
service rescanned the project. No production optimization was justified or
applied from this verification alone.

Earlier runs `BUU9yQ` and `Jl9Wep` also passed their then-current checks. The first
setup attempt `Eq7C7g` failed before launching an application because a fixture
directory's parent had not been created. Recursive directory creation fixed the
harness; the failed evidence remains retained locally. Final run `QhYlDX`
includes atomic result publication, pending-write completion and watcher cleanup.
