# Windows portable verification — preview.3

Verified 14 October 2026 on Windows x64. The package includes Project Home,
custom-provider Quick Edit, the recent memory/connection fixes, and persistent
CLI recovery for native-dialog imports. Packaging reads `package.json` for its
version. The launcher selects Project Home when no arguments are supplied.

## Artifact identity

| Fact | Value |
| --- | --- |
| Archive | `OpenVision-0.2.0-preview.3-win32-x64.zip` |
| Compressed bytes | 343,747,636 |
| Entries / uncompressed bytes | 18,046 / 1,107,093,263 |
| SHA-256 | `fd421440fd8b275e604fd11bfe1765390fc4bb79ff4d95ecf37d04d0eb8258a6` |
| Git payload | Seven parts, at most 48 MiB each, with hashes in `downloads/windows-x64/manifest.json` |
| License / notice entries | 672 retained |
| Profile, backup, diagnostic, state-database and environment entries | None found at owned private paths or sensitive file patterns |
| External filesystem links | None |

A bounded key-shaped text scan matched two source filenames, not credentials.
Dependency folders legitimately named `data` or `logs` are application code;
private-path checks distinguish them from application profile/output directories.
This is not a universal secret detector.

Workbench SHA-256:
`9251426f04943379ff29248049f3d2dbb3290e1a68172f852bbc180ead11a503`.

## Native evidence

| Actual runtime | Passed workflow | Local evidence |
| --- | --- | --- |
| Relocated package | Project search, 250-entry history, 18-row pages, pins across restart, existing-window focus, saved workspace, missing-history removal, compact layout and reduced motion | `logs/project-home-verification-qGs7pI/result.json` |
| Relocated package | Native import preview, selected-profile ownership, stale/tampered rejection, six-file exact restore, fresh-process CLI discovery/preview/restore | `logs/import-verification-wNXG7x/result.json` |
| Relocated package | Quick Edit accept/save, undo, reject, failure/recovery, Stop, Unicode/CRLF and approved-rule filtering | `logs/inline-edit-verification-2AW8im/result.json` |
| Relocated package | Agent stream, Read, two-file Keep/Reject, command approval/denial/Stop, upstream cancellation and conversation restart/resume | `logs/agent-verification-rR6if6/result.json` |
| Reconstructed Git payload | Installer verified all chunks and full ZIP, extracted to a fresh directory, then reused it on a second invocation | Local installer output |
| Reconstructed Git payload | Autocomplete accept/save/undo, multiline Unicode, partial acceptance and typing/Escape/file-switch cancellation | `logs/completion-verification-7Jzeak/result.json` |

All tested owned hosts exited 0, with no renderer errors. Profiles were disposable
and outside the shipped package. Import verification confirmed the normal profile's
settings, keybindings and extension registry digests remained unchanged.
Five installer failure tests and sixteen focused import tests passed; desktop
syntax checks and the runtime build passed.

AI workflows above used controlled local HTTP responses. They verify native
integration and failure handling, not external model quality. Language checks
in this batch used real installed language providers; see [JavaScript](../recovery/rea-language-workflows.md)
and [C/C++](../guides/cpp-support.md). REA advanced to [14/15 complete WASM records](../recovery/rea-wasm-inventory.md).

The Project Home run observed a 29 ms search round trip, but concurrent native
tests and driver overhead prevent treating this as a performance comparison.
No new before/after CPU, peak process-family RAM or token-saving claim is made.

## Reproduce and limits

```sh
npm run test:installer
npm run test:import
npm run check:desktop
npm run verify:project-home -- --portable ./OpenVision-portable
npm run verify:import -- --portable ./OpenVision-portable
npm run verify:inline-edit -- --portable ./OpenVision-portable
npm run verify:agent -- --portable ./OpenVision-portable
npm run verify:completion -- --editing --portable ./OpenVision-portable
```

Development verification needs the pinned Node toolchain and tooling dependencies;
normal launch does not. Full clean-machine coverage, upgrade/rollback, signing,
macOS/Linux/ARM64, independent rebuilding and broader live-provider acceptance
remain open. Physical storage failures and persistent in-app backup browsing
remain unverified or unfinished. The fixed acceptance score remains **6/42**.
GitHub Actions remains disabled.
