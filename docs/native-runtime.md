# Native Runtime And Provenance

OpenVision customizes recovered **Cursor 3.21.13** application JavaScript and
uses its shipped Electron host, native addons, and WASM. It is not a complete
reconstruction of the original TypeScript/native source, nor a standalone
redistribution. Source patch anchors are verified against that version; another
version may fail preparation. No subscription credentials or entitlements are
created. This guide records the native inputs and compatibility boundaries.

## Input Detection

`npm run prepare:desktop` detects these existing installation directories:

| Platform | Search locations |
| --- | --- |
| Windows | `%LOCALAPPDATA%\Programs\cursor` |
| macOS | `/Applications/Cursor.app`, `~/Applications/Cursor.app` |
| Linux | `/usr/share/cursor`, `/opt/cursor`, `/opt/Cursor` |

For another location, select the installation explicitly:

```sh
npm run prepare:desktop -- --installation "/path/to/installation"
```

For an extracted Linux AppImage, select the directory containing `cursor` and
`resources/app`, typically `squashfs-root/usr/share/cursor`. Preparation does not
mount or install AppImages. The input application is unchanged. Preparation
preserves file provenance, permissions, and internal symlinks and never
overwrites an existing recovery directory. Failures remain available for inspection.

The resulting app is **OpenVision**. macOS outputs
`electron-host/OpenVision.app`; Windows outputs `electron-host/OpenVision.exe`;
Linux outputs `electron-host/openvision`. The application source is linked from
`source/app`, separate from the native host. Never move generated native builds
between operating systems or architectures.

macOS uses `plutil` and `codesign` for an ad-hoc development signature, preserving
existing entitlements. It is not notarized. Linux requires glibc, the desktop
libraries of the shipped Electron runtime, a graphical session, and a usable
Chromium sandbox. The launcher uses namespace sandboxing if the copied setuid
helper is unusable; it does not add `--no-sandbox`.

The Windows editor, preparation, assembly, model routing, and import/restore
have been exercised. macOS/Linux live editor execution remains unverified.
GitHub prevented CI jobs from starting because of account billing/spending
limits. The matrix is configured; passing local tests is not evidence of those
native editor launches.

## Existing Recovery

Recovery selection uses explicit `OPENVISION_RECOVERY_DIR`, then completed
`build/recovery`, then the original sibling `../cursor` investigation. A recovery
contains `artifacts/installation`, `readable/app`, and manifests in `reports`.
The imported version, original paths, file digests, and metadata remain evidence;
branding changes do not rewrite this provenance.

## Import Settings

The settings action is **Import from Cursor**. Default source directories are:

| Platform | Preferences |
| --- | --- |
| Windows | `%APPDATA%\Cursor\User` |
| macOS | `~/Library/Application Support/Cursor/User` |
| Linux | `${XDG_CONFIG_HOME:-~/.config}/Cursor/User` |

Extensions live under `~/.cursor/extensions`. OpenVision destinations are
`data/local/User` and `data/local-extensions`. Named profiles are listed by
directory ID; the importer does not recreate profile registries. JSONC comments
and trailing commas are accepted. Supported categories are settings, shortcuts,
snippets, tasks, and registered extensions. Target-specific packages for another
platform are rejected. Missing optional files are reported and skipped.

Conflicts prefer source values by default; keep-existing mode adds missing
values. Protected OpenVision title/update/telemetry/startup/gateway settings are
retained. Workspace settings can override user settings. The importer excludes
accounts, tokens, cookies, chat history, databases, extension enablement state,
and secret storage.

Backups are under `backups/cursor-import/<import-id>`, with exact original bytes
and a manifest. CLI restore must use the exact reported backup path. It restores
old files, removes new files, and refuses newer edits. Failed imports attempt
rollback and identify any backup needing attention.

Global MCP, rules, agents, and skills under `~/.cursor` are not imported. Some
recovered customization services still use that global location. Project-local
`.cursor` paths stay with the project. Full isolation of those services is not
implemented.
