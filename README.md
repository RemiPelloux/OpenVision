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

## Quick Start: Prepared Workspace

On the machine where OpenVision has already been assembled:

1. Open the `openvision` folder.
2. Double-click **`start-openvision.cmd`**.
3. Open your project with **File > Open Folder**.

Or run from the `openvision` folder in PowerShell:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\start-openvision.ps1
```

From the parent `REA` folder instead:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\openvision\start-openvision.ps1
```

The launcher applies the customizations and starts `electron-host/OpenVision.exe`
with isolated settings and extensions. It opens the generated
`OpenVision.code-workspace`, containing Playground, OpenVision Source, and
OpenVision Tools. The sample project lives alongside REA under
`OpenVision Projects/Playground`. Existing sample files are preserved.

To apply main-process changes or imported extensions, close all OpenVision
windows and run the launcher again.

## Setup From A Clone

The current build targets **Windows x64** and expects this local layout:

```text
REA/
  enter-rea.ps1
  .tools/node-v24.18.0-win-x64/node.exe
  cursor/
    artifacts/installation/                 # Preserved installed application
    readable/app/                          # Recovered readable JavaScript
    reports/installation-manifest.json
    reports/readability.json
  openvision/                              # This repository
    desktop/
    tooling/package.json
    tooling/package-lock.json
```

Clone into a prepared REA workspace:

```powershell
# Run in your prepared REA folder.
git clone https://github.com/RemiPelloux/OpenVision.git openvision
. .\enter-rea.ps1
npm ci --prefix .\openvision\tooling
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\openvision\start-openvision.ps1
```

Access to the private repository is required. `enter-rea.ps1` selects the prepared
Node/npm toolchain; `npm ci` installs only locked OpenVision tooling dependencies.
These commands do not recover Cursor or install IDA/Ghidra. Recovery inputs must
already exist from your local REA investigation of the installed application.

First assembly copies the recovery inputs into `source/app`, prepares the native
host in `electron-host`, applies branding, and creates a directory junction from
`electron-host/resources/app` to `source/app`. Subsequent launches reuse the
editable build. An incomplete build causes an error so its files can be inspected.

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
| Cursor preferences | `%APPDATA%\Cursor\User` |
| Cursor extensions | `%USERPROFILE%\.cursor\extensions` |
| OpenVision preferences | `openvision\data\local\User` |
| OpenVision extensions | `openvision\data\local-extensions` |

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

Cursor-global MCP, rules, agents, and skills under `%USERPROFILE%\.cursor` are
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
`start-control-plane.ps1`; the main launcher opens the IDE.

### Verification

From `openvision`:

```powershell
. ..\enter-rea.ps1
& $env:REA_NODE_PATH --test desktop/cursor-import.test.mjs desktop/local-workbench.test.mjs desktop/model-providers.test.mjs
& $env:REA_NODE_PATH desktop/build-source.mjs

# Temporary loopback debugging port for desktop verification.
.\start-openvision.ps1 --inspect-preview
& $env:REA_NODE_PATH desktop/verify-import.mjs
& $env:REA_NODE_PATH desktop/verify-models.mjs
```

Bundle tests require recovery inputs. Desktop verification requires
`playwright-core` in the parent REA workspace. Import tests use temporary
profiles and cover JSONC, conflicts, extension paths, unchanged credential
storage, repeat imports, backups, rollback, and newer-edit protection.
`verify-import.mjs` checks actual UI import/restore with a temporary fixture.
`verify-models.mjs` exercises a local API fixture and removes temporary
providers/keys. Screenshots and reports go to ignored `logs/`. Ordinary launch
does not request a debugging port.

## Troubleshooting

| Symptom | Action |
| --- | --- |
| Missing manifests, runtime, or `enter-rea.ps1` | Restore the prepared REA layout; a clone alone is insufficient |
| Missing tooling dependency | Source `enter-rea.ps1`, then `npm ci --prefix tooling` |
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
