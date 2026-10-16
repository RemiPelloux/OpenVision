# Windows portable verification — preview.5

Verified 14 October 2026 on Windows x64. This release simplifies Project Home
and cloning and gives the native editor theme service ownership of appearance.
Earlier workflow evidence remains in [preview.4](portable-preview4.md).

## Artifact identity

| Fact | Value |
| --- | --- |
| Archive | OpenVision-0.2.0-preview.5-win32-x64.zip |
| Compressed bytes | 343,755,402 |
| Entries / uncompressed bytes | 18,049 / 1,107,118,479 |
| SHA-256 | 81388d12518ce1a3f56561e9cc45c769205c1886b282239b7ab44ad743376b9f |
| Git payload | Seven parts, each at most 48 MiB; hashes in downloads/windows-x64/manifest.json |
| License / notice / copyright filename matches | 676 retained |
| Profile/output roots, environment files, state databases and certificate/key files | No matching entries in the targeted archive audit |

The broad data-directory search also matches bundled library datasets; these
are application dependencies. The targeted path audit is not a universal secret
scanner. Author profiles, logs, backups and extension-installation data are
excluded by packaging. External filesystem links are rejected.

## Native checks

Development run logs/project-themes-verification-265ccw/result.json and relocated
portable run logs/project-themes-verification-XSQH3M/result.json passed seven
appearance checks: profile/model stylesheet tokens, actual dark/light selection,
restart persistence, high contrast, live custom-color overrides, compact layout,
and selection/restart of an installed declarative theme extension. Three hosts
per run exited 0 without renderer errors. The extension is a disposable local
fixture using the production scanner/registry; marketplace installation and
arbitrary executable extensions are not covered. Profile/model checks are
stylesheet probes, not a full settings interaction test.

The native welcome run logs/welcome-verification-3Xva1K/result.json passed native
branding/window controls, blink/reduced motion, compact layout, keyboard entry,
Local Profile → Appearance settings and welcome dismissal/disposal. Host exit 0.

Relocated clone run logs/project-clone-verification-l2X1eA/result.json passed six
checks: validation/focus/Escape, compact layout, destination cancellation without
writes, real Git failure/dismiss/retry, actual local cloning/opening from Home,
and editor cloning with existing-folder protection. Host exit 0 and no renderer
errors. Native folder answers/error-dialog dismissal are supplied by the harness;
Git operations are real. HTTPS cloning was verified in preview.4 and not repeated
for this appearance-only release.

Eight focused Project Home/welcome tests and desktop/generated-workbench syntax
checks passed. Five installer safety tests passed. The repository installer
verified all seven parts and the archive digest, then extracted into a fresh
directory. Native run logs/project-themes-verification-3tmEfa/result.json passed
all seven appearance checks on that reconstructed app; all three hosts exited 0
without renderer errors. No comparative speed, RAM or token reduction is claimed.

## Retained failures and ownership fix

Early runs s8coOA and 2oYS8X exposed stale home theme persistence. Simply enabling
synchronization did not fix it. The native theme service now owns selection,
resolved colors, configuration changes and persistence; the separate home palette
cannot override it. Run iSCirx then exposed the home configuration wrapper masking
custom colors. Runs t9zuWH and qTEcMR exposed an installed-theme allowlist. The
configuration wrapper now delegates custom colors; declarative theme manifests
pass the scanner and running-location boundary while normal native enablement,
trust and execution restrictions remain. The successful runs above include these
fixes. Failed logs remain retained locally.

An interrupted build left two generated workbench files incomplete. Those files
were preserved under ignored backups/interrupted-theme-build, intact customization
inputs were restored, and the full build and native checks subsequently passed.

## Repeat and limits

Run npm run verify:project-themes -- --portable PATH and
npm run verify:project-clone -- --portable PATH against an extracted package.
See [appearance settings](../guides/appearance.md) for supported customization.

Windows x64 only. macOS/Linux/ARM64, signing, full upgrade/rollback and independent
native rebuilding remain open. Private Git authentication, SSH and large-transfer
interruption remain unverified. No full acceptance story is promoted: the fixed
ledger stays **6/42 Verified (14.29%)**. GitHub Actions remains disabled.
