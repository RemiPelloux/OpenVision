# OpenVision

OpenVision is a local desktop IDE built around recovered Cursor application
JavaScript, with OpenVision branding, a local profile, an expanded project
Explorer, custom AI providers, and a Cursor settings importer. The running
workbench loads editable files from `source/app`.

**This repository contains customization source and tooling, not a standalone
redistribution of Cursor.** The recovered application and compiled Electron host
are local build inputs excluded from Git. A fresh clone needs those inputs before
it can launch. Original TypeScript and native source have not been reconstructed;
complete feature parity and measured performance improvements are not claimed.

## Run An Already Prepared Build

On Windows, double-click **`start-openvision.cmd`**, or run:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\start-openvision.ps1
```

On macOS or Linux:

```sh
sh ./start-openvision.sh
```

On any supported system, with the configured Node toolchain:

```sh
npm start
```

Run these commands from `openvision`. The launcher builds the customizations and
opens a native host with isolated settings and extensions. Use **File > Open
Folder** for your project. The generated starter workspace contains Playground,
OpenVision Source, and OpenVision Tools. New checkouts create Playground next to
the checkout under `OpenVision Projects/Playground`. Existing workspace project
paths and sample files are preserved.

Close every OpenVision window and relaunch after main-process changes or
extension imports. `OPENVISION_NODE_PATH` selects an existing Node executable for
the shell/PowerShell launchers. Windows also detects the prepared parent REA
runtime when available.

## Platforms And Prerequisites

| System | Native host | Cursor User directory |
| --- | --- | --- |
| Windows x64 / ARM64 | `electron-host/OpenVision.exe` | `%APPDATA%\\Cursor\\User` |
| macOS Intel / Apple Silicon | `electron-host/OpenVision.app/Contents/MacOS/OpenVision` | `~/Library/Application Support/Cursor/User` |
| Linux x64 / ARM64, glibc | `electron-host/openvision` | `${XDG_CONFIG_HOME:-~/.config}/Cursor/User` |

Use **Node.js 24.18.0** and its npm, Git, a same-platform/architecture Cursor
installation, and the locked tooling dependencies. These are prerequisites;
OpenVision does not install or upgrade Node, npm, system libraries, or RE
providers. Linux also needs the desktop libraries required by its native
Electron runtime, a graphical session, and an available Chromium sandbox.
macOS uses its system `plutil` and `codesign` tools.

The Windows editor and native preparation have been exercised locally. The
portable suite passes on Windows; the macOS signing test is skipped there. The
configured CI matrix covers configuration import/restore, binary identity,
executable copying, native icons, and macOS fixture signing, but its first run
was blocked before execution by GitHub account billing/spending limits.
**macOS/Linux execution is not yet verified.** Native editor, extensions, AI gateway, and Tab behavior require
testing with the actual recovered application on each target. Source patch
anchors are currently verified against Cursor **3.21.13**; a different bundle
may fail preparation rather than accept uncertain patches.

Do not copy a Windows `electron-host`, native addons, installed extensions, or
generated workspace to another OS. Prepare a new build there. The builder checks
native executable format/architecture and rejects mismatched recovery inputs.
Target-specific extension packages from another OS are rejected during import.

## Prepare A New Native Build

A clone can be prepared without the Windows REA folder. Run in the checkout:

```sh
git clone https://github.com/RemiPelloux/OpenVision.git
cd OpenVision
npm ci --prefix tooling
```

Access to the private repository is required. Then select the **installation
directory**, not the Cursor User/settings directory.

macOS:

```sh
npm run prepare:desktop -- --installation "/Applications/Cursor.app"
npm start
```

Linux, for a typical Debian/RPM installation:

```sh
npm run prepare:desktop -- --installation "/usr/share/cursor"
npm start
```

For an extracted AppImage, select the directory containing `cursor` and
`resources/app`, typically `squashfs-root/usr/share/cursor`. The preparation
command does not mount or install AppImages.

Windows:

```powershell
npm run prepare:desktop -- --installation "$env:LOCALAPPDATA\Programs\cursor"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\start-openvision.ps1
```

Preparation reads the installed application, snapshots its files and internal
symlinks, preserves Unix executable modes, and formats the bundles used by the
customizations. It verifies expected source owners before producing manifests.
The installed Cursor is unchanged. Outputs live in ignored `build/recovery`;
an existing recovery directory is never overwritten. A failed preparation is
retained for inspection.

The build copies native dependencies from that snapshot and places the editable
application in `source/app`. Windows/Linux link `electron-host/resources/app`
to that source; macOS links `OpenVision.app/Contents/Resources/app`. macOS gets
an OpenVision plist/icon and an ad-hoc development signature, preserving existing
entitlements. This is not a notarized distribution. Linux keeps the Chromium
sandbox enabled and uses its namespace sandbox when the copied setuid helper
cannot serve as a root-owned helper.

### Existing REA Recovery Inputs

The original prepared REA layout remains accepted:

```text
REA/
  cursor/
    artifacts/installation/
    readable/app/
    reports/installation-manifest.json
    reports/readability.json
  openvision/
    desktop/
    tooling/
```

Recovery selection is: explicit **`OPENVISION_RECOVERY_DIR`**, then a completed
local `build/recovery`, then `../cursor`. The environment override is used by
both preparation and assembly. Use separate checkouts for different platforms.
Subsequent launches reuse the editable build. Partial builds are retained and
reported as errors.

## Import Your Cursor Configuration

Open **OpenVision Settings > General > Import from Cursor**.

1. Check the detected Cursor User and extensions directories. Choose a named
   profile when offered, or enter its User directory manually.
2. Select categories. All five are selected by default.
3. Leave **Use Cursor values for conflicts** checked to prefer Cursor values.
   Uncheck it to keep existing OpenVision values.
4. Click **Preview Import** and review the source, destination, counts, and paths.
   Preview does not write configuration.
5. Click **Import**, then restart OpenVision to load imported extensions.

The importer reads Cursor without changing its files. Repeating an identical
import creates no writes or backup when the destination already matches.
Extension files are checksummed as streams and copied file by file, keeping
large binary contents out of the preview's retained memory.

| Category | Imported content | Conflict behavior |
| --- | --- | --- |
| Editor settings | Every key in selected `settings.json`, except protected keys | Merge; selected conflict policy wins |
| Keyboard shortcuts | `keybindings.json`, including removal commands and arguments | Preserve both sets; selected side wins for identical key/when pairs |
| Snippets | `.json` and `.code-snippets` files under `snippets/` | Selected side wins for the same file path |
| User tasks | `tasks.json` | Copy the file; keep destination if conflicts are disabled |
| Installed extensions | Registered extension directories and `extensions.json` | Selected side wins by extension ID; paths rewritten for OpenVision |

JSONC comments and trailing commas are accepted. Existing OpenVision settings
comments are retained. Project `.vscode` and `.cursor` configuration stays with
the project you open; the importer handles **user-level** configuration.
Workspace settings can override user settings.

| Location | Default path |
| --- | --- |
| Windows Cursor preferences | `%APPDATA%\Cursor\User` |
| macOS Cursor preferences | `~/Library/Application Support/Cursor/User` |
| Linux Cursor preferences | `$XDG_CONFIG_HOME/Cursor/User`, defaulting to `~/.config/Cursor/User` |
| Cursor extensions | `~/.cursor/extensions` (Windows: `%USERPROFILE%\.cursor\extensions`) |
| OpenVision preferences | `<checkout>/data/local/User` |
| OpenVision extensions | `<checkout>/data/local-extensions` |

Named profiles are listed by directory ID. Selecting one imports its preferences
into OpenVision's current local profile; it does not recreate Cursor's profile
registry or change your OpenVision display name. Extension imports use the
selected extensions directory, which Cursor shares across profiles. Missing
optional files are reported and skipped. Malformed configuration or redirected
file paths stop the import.

OpenVision preserves its window title, disabled updates, extension auto-update
policy, telemetry policy, startup editor, and local gateway HTTP setting.
Account tokens, subscriptions, cookies, chat history, workspace state, extension
secret storage, extension enable/disable state, and Cursor databases are excluded. OpenVision's saved AI
providers and keys remain in its own storage.

Cursor-global MCP, rules, agents, and skills under `~/.cursor` are
not copied by this importer. Some recovered customization services still use
that original global location. Project-local `.cursor` paths are retained.
Complete isolation of global customization services is not implemented.

### Backups And Restore

Changed files have their previous bytes backed up under:

```text
openvision/backups/cursor-import/<import-id>/
  manifest.json
  0.bin, 1.bin, ...
```

The result displays the exact backup directory. **Restore Last Import** restores
that import while its dialog is open. For an older backup, use the CLI below.
Restore removes newly created files and restores previous files. It refuses to
overwrite files edited after import. Failed imports attempt to roll back written
files; errors identify any backup needing attention. Backups can contain private
settings, so keep them local.

### Command Line Import

Close OpenVision before CLI import or restore. Run from `openvision`:

```powershell
# Preview all categories; no configuration is written.
.\import-cursor.ps1

# Import, preferring Cursor values.
.\import-cursor.ps1 --apply

# Preserve existing OpenVision values; add missing preferences/files.
.\import-cursor.ps1 --apply --keep-existing

# Import settings and shortcuts from a different profile.
.\import-cursor.ps1 --apply --categories "settings,keybindings" --user "D:\CursorProfile\User"

# Select a different extensions directory.
.\import-cursor.ps1 --apply --categories extensions --extensions "D:\CursorExtensions"

# Use the exact backup path printed by an import.
.\import-cursor.ps1 --restore ".\backups\cursor-import\<import-id>"

.\import-cursor.ps1 --help
```

If PowerShell blocks scripts, invoke
`powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\import-cursor.ps1`
and append the same arguments.

On macOS/Linux, use `sh ./import-cursor.sh` with those arguments, or use
`npm run import:cursor -- --apply` on any OS. For example:

```sh
sh ./import-cursor.sh --categories settings,keybindings
sh ./import-cursor.sh --apply
sh ./import-cursor.sh --restore "./backups/cursor-import/<import-id>"
```

## Projects, Editing, And Execution

Use **File > Open Folder** or **Add Folder to Workspace**. Explorer opens by
default with file icons, separate nested folders, indent guides, breadcrumbs,
and an open-editor list. Dependency folders and source maps are hidden in the
generated starter workspace.

**Terminal > New Terminal** opens a shell in the workspace. Run your project's
install, build, and test commands there. **Terminal > Run Task** includes
`Playground: Run` and `Playground: Test`; **F5** runs the starter Node debugger.
Other projects supply their own runtimes, tasks, and debugger extensions.
Git integration uses your installed Git and repository.

The title-bar profile button and **General > Local Profile** edit your display
name, stored locally with a random UUID. No login is needed for the local
editor. Cloud Agent entry points, hosted account/billing settings, cloud
notifications, and cloud skills syncing are disabled.

## Add AI Models And Custom Servers

Open **OpenVision Settings > Models > Custom Providers**.

1. Click **Add Provider**.
2. Enter a provider name, **API Base URL**, and **API Key**.
3. Keep **Discover Models** selected to fetch available models.
4. Select it under **Active Provider**.
5. Choose an enabled model in the Agent picker.

Use an OpenAI-compatible base URL including its API prefix, such as
`http://127.0.0.1:8000/v1`. Do not append `/models` or `/chat/completions`.
Discovery sends authenticated `GET <base>/models`; local Agent requests use the
recovered Chat Completions gateway. Responses-only providers have not been
established as compatible.

**Add OpenAI** fills in `https://api.openai.com/v1`; supply your API key.
Discovery lists models available to that key rather than a hardcoded GPT list.
For Codex Easy or another gateway, enter that service's actual URL and key.
Its name alone does not configure a connection. A ChatGPT subscription does
not supply API credentials or API billing.

Providers support refresh, edit, removal, and manual models. **Add Model** takes
the exact server **Model ID** and an optional **Display Name**. The ID is sent
to the server; the display name is a label. Refresh preserves manual models and
custom names. Listing does not guarantee tool use, reasoning, image input, or
compatibility with every Agent feature.

Keys use the recovered workbench secret-storage service and active gateway
credential storage; provider metadata excludes keys. Native discovery avoids
browser CORS requirements and has a 20-second timeout and 4-MiB response limit.

Tab autocomplete uses a separate protocol. Successful chat routing does not
establish Tab compatibility. Local API fixtures verify discovery and streamed
Agent routing; real-provider inference requires your endpoint and key.

## Source Layout And Development

| Path | Purpose |
| --- | --- |
| `desktop/build-source.mjs` | Assembly and customization entry point |
| `desktop/platform.mjs`, `native-identity.mjs` | Platform layout, native architecture and profile paths |
| `desktop/prepare-source.mjs`, `recovery-snapshot.mjs`, `source-assembly.mjs` | Native input capture, recovery and assembly |
| `desktop/native-assets.mjs` | macOS icon, plist and development signing |
| `desktop/local-workbench.mjs`, `cloud-features.mjs` | Local profile and cloud UI patches |
| `desktop/model-settings.js`, `model-providers.js`, `model-http.mjs` | Provider UI, storage, native discovery |
| `desktop/cursor-import.mjs`, `import-json.mjs`, `import-files.mjs`, `import-extensions.mjs` | Import plan, parsing, paths, native extension registry format |
| `desktop/import-transaction.mjs` | Backed-up import and guarded restore |
| `desktop/import-ui.js`, `import-ipc.mjs`, `import-cli.mjs` | Import UI, native IPC, CLI |
| `desktop/project-workspace.mjs` | Starter project and additive Explorer settings |
| `tooling/` | Pinned dependencies and lockfile |
| `source/app/out/main.js` | Editable recovered main-process bundle |
| `source/app/out/vs/workbench/workbench.desktop.main.js` | Editable recovered workbench bundle |
| `electron-host/resources/app` | Junction to `source/app` |
| `data/`, `backups/`, `logs/`, `build/` | Profile, backups, verification, provenance |

Make durable customization changes in `desktop/`. Launch copies integration
modules into the recovered app and patches identified owners idempotently,
preserving backups. Direct edits in `source/app` are retained, but incompatible
patch anchors cause a build error. **Developer: Reload Window** reloads renderer
changes; main-process/native IPC changes require a full restart.

Recovered files, binaries, profiles, credentials, logs, generated workspaces,
and dependencies are ignored by Git. Recovery evidence in `../cursor` is a
separate preserved input. The earlier dashboard under `src/` has its separate
`start-control-plane.ps1`; the main launcher opens the IDE. That legacy dashboard
is outside the desktop portability checks.

### Verification

From `openvision`:

Portable checks need only the checkout and locked tooling, on any OS:

```sh
npm ci --prefix tooling
npm run check:desktop
npm run test:portable
```

`.github/workflows/portability.yml` runs these on Windows, Linux, and two macOS
runner versions. Tests execute a copied real Node host on each system and sign
a native fixture on macOS. Fixture execution does not establish recovered IDE
compatibility. The following live-editor checks still need local recovery inputs:

```sh
node --test desktop/local-workbench.test.mjs desktop/model-providers.test.mjs
npm start -- --inspect-preview
node desktop/verify-import.mjs
node desktop/verify-models.mjs
```

Bundle tests use the preserved recovery bundles under `../cursor/readable/app`.
The pinned desktop verification client is installed with the tooling; it connects
to the running app without downloading a browser. Import tests use temporary
profiles and cover JSONC, conflicts, extension paths, unchanged credential
storage, repeat imports, backups, rollback, and newer-edit protection.
`verify-import.mjs` checks actual UI import/restore with a temporary fixture.
`verify-models.mjs` exercises a local API fixture and removes temporary
providers/keys. Screenshots and reports go to ignored `logs/`. Ordinary launch
does not request a debugging port.

## Troubleshooting

| Symptom | Action |
| --- | --- |
| Missing manifests or native runtime | Prepare native inputs with `prepare:desktop`, or supply the existing REA recovery layout |
| No prepared REA folder | Use `prepare:desktop` with the same-platform Cursor installation, then `npm start` |
| Different native platform/architecture | Prepare a new native snapshot on the target; do not copy generated builds between systems |
| Linux sandbox startup error | Check user-namespace policy or use a correctly installed root-owned Chromium sandbox helper; the launcher never adds `--no-sandbox` |
| macOS signature or Gatekeeper error | Check the signing command's diagnostics and local development execution policy; this build is not notarized |
| Missing tooling dependency | Select Node 24.18.0, then run `npm ci --prefix tooling` |
| Incomplete build or missing patch anchor | Preserve files and compare recovery version/customization owners before rebuilding |
| Import has no IPC handler | Close every OpenVision window and relaunch |
| Cursor profile not found | Enter its actual User directory; portable/custom profiles differ |
| Settings appear unchanged | Check workspace overrides and conflict policy; reload the window |
| Extensions absent | Restart; check the isolated registry. Extensions may require incompatible services/native versions |
| Restore refuses a newer edit | Keep that edit or reconcile it manually with the backup |
| Discovery HTTP 401/403 | Check key, permissions, and base URL |
| No models or invalid JSON | Check the OpenAI-compatible `/models` endpoint, or add the exact model ID manually |
| Listed model fails in Agent | Check Chat Completions/tool-use compatibility and server errors |
| Tab completion fails | Its separate protocol is outside custom chat-provider configuration |

The installed Cursor remains a separate application. OpenVision's local
profile does not create Cursor cloud credentials or subscription entitlements.
