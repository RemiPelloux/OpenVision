# Windows portable package verification

This report preserves the **preview.2** results. Current package verification is
recorded in [0.2.0-preview.3](portable-preview3.md).

Verified **14 October 2026**, Windows x64, for **0.2.0-preview.2**.
The complete package was tested outside the development checkout. Disposable
test profiles stayed outside the package and are excluded from distribution.

## Archive identity

| Fact | Observed value |
| --- | --- |
| Archive | `OpenVision-0.2.0-preview.2-win32-x64.zip` |
| Compressed size | 343,716,698 bytes |
| Uncompressed entries | 18,028 |
| Uncompressed size | 1,107,012,762 bytes |
| SHA-256 | `6cbe6b82fe809c5f2a49615e9bf575775a2799d1e3eccf9d198625d8f6638194` |
| Git payload | Seven parts, each at most 48 MiB; individual hashes in `downloads/windows-x64/manifest.json` |
| Private profile/backups/logs/database/environment entries | None in the archive |
| License/third-party-notice entries | 676 retained |

The package materializes the application files; no external source junction is
required. A key-shaped text scan found only background-task source filenames,
not credential values. This is a bounded scan, not a universal secret detector.

## Native checks

| Workflow | Observed result |
| --- | --- |
| Relocated app before archiving | Model/provider setup, native suggestion, Tab accept, save, exact undo and multiline Unicode accept/undo passed |
| Pending request cancellation | Typing, Escape and switching files canceled upstream work and preserved text |
| Repository extraction | Installer verified all parts and the complete ZIP, then extracted the app to a new folder |
| Extracted app | Repeated autocomplete/editing checks passed with matching workbench and adapter hashes, no renderer errors and host exit 0 |
| Animated welcome | OpenVision native window title, eye blink, native window controls, compact layout, reduced motion, local workspace entry and dismissal passed; host exit 0 |
| Extracted Agent | Authenticated stream, file Read, two-file edits, Keep/Reject, command approval/denial/Stop, upstream cancellation and restart/resume passed; both hosts exited 0 |
| Existing package | Re-running installer reused it without extracting or replacing its contents |
| Installer failure contracts | Five focused checks passed: missing part, corrupted part, out-of-directory part name, unrelated existing folder and different-release profile preservation |

Native evidence records are retained locally under:

- `logs/completion-verification-GK4sYv/result.json` — relocated package.
- `logs/completion-verification-5zSoPj/result.json` — reconstructed/extracted package.
- `logs/welcome-verification-DmpTJk/result.json` — final portable welcome, native title and local workspace.
- `logs/agent-verification-MZtI0L/result.json` — extracted Agent/tool/command/history workflow.

These local records are not public download links. The completion provider used
**controlled local HTTP responses**, not a paid live service. The checks establish
real desktop wiring, editing and cancellation, not model intelligence or broad
external-provider compatibility. Installer failure tests use deliberately invalid
fixture bytes; successful installation was checked against the actual full archive.

Prior autocomplete/Agent workbench SHA-256: `7616cbe676459332496caae085d0cfc7120777ab9ec11dfa60ce03293a35632a`.
Final workbench SHA-256: `6879c3194b7081b5e8b90c41da7f167f6b1f9b6612dc0e7acf56870a991af1be`.
The final build changes only the native window-title literal in the main, desktop
and Glass bundles; direct byte comparisons confirmed no other bundle changes.
The final welcome check used this corrected build.

HTTP adapter SHA-256: `186856eb8cb53caa706845ae7110bd8ba2ea221ad62c4d54938e716ebf445bfe`.

## Reproduce

With the pinned Node development toolchain and `npm ci --prefix tooling`:

```sh
npm run test:installer
npm run check:desktop
npm run verify:completion -- --editing --portable ./OpenVision-portable
npm run verify:welcome -- --portable ./OpenVision-portable
npm run verify:agent -- --portable ./OpenVision-portable
```

Running the app itself requires none of that development tooling. Use
**Run-OpenVision.cmd** from the full repository, or **OpenVision.cmd** from the
release ZIP. See [installation](../guides/native-runtime.md).

## Limits

Full clean-machine dependency coverage, upgrade/rollback, package signing,
macOS/Linux/ARM64 and the complete live-provider acceptance matrix remain open.
Native modules remain compiled; packaging does not establish independent source
rebuilding or complete feature parity. The acceptance ledger remains **6/42**.
GitHub Actions is disabled.
