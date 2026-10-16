# Windows portable verification — preview.6

Verified 14 October 2026 on Windows x64. This release opens projects in the
current window and preserves native unsaved-edit cancellation. Prior appearance
and workflow evidence remains in [preview.5](portable-preview5.md).

## Artifact identity

| Fact | Value |
| --- | --- |
| Archive | OpenVision-0.2.0-preview.6-win32-x64.zip |
| Compressed bytes | 343,023,924 |
| Entries / uncompressed bytes | 18,050 / 1,107,121,435 |
| SHA-256 | 94ae64ef414ffef24068a80db890b6af335dc3d30d8b0ed2af89c56752cc1b0a |
| Git payload | Seven parts, at most 48 MiB each; hashes in downloads/windows-x64/manifest.json |
| Copied input files matched by SHA-256 | 18,046; the other four are generated launcher/readme/package metadata |
| License / notice / copyright filename matches | 676 retained |

The archive passed a full ZIP CRC check. Targeted path checks found no author
profile/output roots, environment files, state databases or certificate/key
files. External links are rejected by packaging. This is not a universal secret
scanner; bundled dependencies can contain public example strings. The repository
installer verified all seven parts and the reconstructed archive hash, then
extracted into a fresh directory. Tests below ran against that reconstructed app.

## Native package results

Home run `logs/project-home-verification-OFAFWg/result.json` passed 14 checks:
live existing-project focus, bounded 250-entry history, missing paths/removal,
responsive layout/reduced motion, persistent pins, folder/workspace opening,
both native picker paths, clone form cancellation and unsaved-edit protection.
The startup-to-editor transition and all four project-selection paths retained
native window ID 1 and created zero windows. Canceling the save prompt retained
the original disk file and unsaved editor text; subsequent saving succeeded.
All three launchers exited 0, with no renderer errors.

Clone run `logs/project-clone-verification-FcKuSt/result.json` passed eight
checks: URL validation/focus/Escape, compact layout, destination cancellation
without writes, actual Git failure and retry, local cloning from Home and the
editor, window reuse, and existing-destination protection. File contents, HEAD
and origin matched. Both clones retained window ID 1 with no new window. The
launcher exited 0 without renderer errors. Native picker answers, save-prompt
cancellation and Git error-dialog dismissal are supplied by the harness; Git,
editor changes and native routing are real. HTTPS cloning was checked in
preview.4 and was not repeated for this window-routing release.

Theme run `logs/project-themes-verification-FeyQ6V/result.json` passed seven
checks: profile/model theme styles, native dark/light switching, restart
persistence, high contrast, custom colors, compact layout and an installed
declarative theme across restart. All three launchers exited 0 without renderer
errors. The installed theme is a disposable fixture through the native scanner;
marketplace installation and arbitrary executable themes are not covered.

## Build and supporting evidence

The complete development build and desktop syntax check passed. Packaged main,
desktop and Home bundles also passed Node syntax validation. Ten focused
Home/welcome tests and five installer safety tests passed. Nine relay tests
passed on recheck; the initial combined run passed 22/24 and failed two HTTP
tests with `bad port` before their requests reached the relay. Windows had
assigned ports rejected by the HTTP client's restricted-port policy. Those
failures remain retained at `logs/preview6-focused-tests.txt`; the successful
relay recheck is `logs/preview6-relay-recheck.txt`. No inference was involved.

| Runtime component | SHA-256 |
| --- | --- |
| Main process | 446524fc4161df2ccd821a0826f74a6ad233f0871c873007fb41ccac2b7abbf9 |
| Project Home service | ea11e1048617e88945f22fae33bb8fa0e4e15b063208a4bfd681eb596746d2a9 |
| Editor workbench | 42b189a00a9c54629b458bfec622be8eb4a8e04d26c02f1500efd59f7e696bd0 |

The [live-provider Stop matrix](live-provider-compatibility.md#native-stop-and-same-chat-resubmission)
records real Codex Easy GPT/DeepSeek/Grok requests in the development app at
Provider default. Packaging did not repeat those paid requests. The
[native shutdown report](../engineering/development-workflows.md#launcher-and-native-shutdown-evidence)
distinguishes Windows launcher exit from Electron main-process evidence and
retains the earlier unexplained launcher exit 134. Package tests above report
launcher exits; they do not independently establish native shutdown event traces.

## Retained preparation failures

After an interrupted session, seven documentation files and files in the first
package copy contained zero bytes. The damaged docs were preserved under ignored
`backups/preview6-interrupted-docs` before restoring committed content and applying
release edits. The first package is retained locally and was not archived or
published. A fresh package passed the complete copied-file hash comparison before
compression; the archive CRC, installer hashes and native tests cover that fresh
artifact. The underlying cause of the interrupted writes has not been established.

## Repeat and limits

```sh
npm run verify:project-home -- --portable PATH
npm run verify:project-clone -- --portable PATH
npm run verify:project-themes -- --portable PATH
```

Windows x64 only. Private Git authentication, SSH, large-transfer interruption,
remote project switching, macOS/Linux/ARM64, signing, full upgrade/rollback and
independent native rebuilding remain open. No comparative speed, RAM or token
savings are claimed. The fixed ledger remains **6/42 Verified (14.29%)**.
GitHub Actions remains disabled; all preparation and checks ran locally.
