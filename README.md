<img src="assets/openvision.svg" alt="OpenVision" width="72" height="72">

# OpenVision

A local desktop workspace for projects, code, terminals, and AI. OpenVision
uses a local profile, editable application JavaScript, and your own AI endpoints.

| Workspace | AI | Identity |
| --- | --- | --- |
| Project Explorer, Git, tasks, debugging | Custom URLs, saved keys, model discovery | Local profile, custom SVG mark, no sign-in |

## Launch

For an already prepared checkout:

```sh
npm start
```

On Windows, double-click **start-openvision.cmd**. On macOS or Linux:

```sh
sh ./start-openvision.sh
```

The launcher opens **OpenVision** with its own preferences and extensions. Open
your project with **File > Open Folder**. New starter workspaces include only
Playground, keeping application internals out of everyday project indexing.
Open **OpenVision Development.code-workspace** when editing the application itself.
Existing workspace folders are preserved during builds.

## First Setup

Use Node.js **24.18.0**, npm, Git, and native input files for your operating
system and architecture. Required inputs and original-source provenance are
documented in [Native Runtime](docs/native-runtime.md). This source repository
does not include recovered bundles, native binaries, or a standalone installer.

```sh
git clone https://github.com/RemiPelloux/OpenVision.git
cd OpenVision
npm ci --prefix tooling
npm run prepare:desktop
npm start
```

Preparation detects a supported local input installation. A custom location can
be selected with `npm run prepare:desktop -- --installation "/path/to/native-input"`.
It reads the input, creates an independent snapshot, and verifies the expected
customization anchors. Existing snapshots are retained. It does not install or
upgrade system software.

| Platform | OpenVision executable |
| --- | --- |
| Windows x64 / ARM64 | `electron-host/OpenVision.exe` |
| macOS Intel / Apple Silicon | `electron-host/OpenVision.app/Contents/MacOS/OpenVision` |
| Linux x64 / ARM64, glibc | `electron-host/openvision` |

Each platform needs its own native build. Windows preparation and live editor
workflows are verified locally. **macOS/Linux runtime execution remains
unverified.** Verification runs locally; GitHub Actions is disabled for this repository.
macOS uses system signing tools; Linux needs its desktop libraries, a graphical
session, and a working Chromium sandbox. See [platform details](docs/native-runtime.md).

`OPENVISION_NODE_PATH` selects an existing Node executable for the launchers.
`OPENVISION_RECOVERY_DIR` selects an existing recovery snapshot. Default recovery
outputs live in `build/recovery`; the editable application lives in `source/app`.

## AI Providers

Open **OpenVision Settings > Models > Custom Providers**.

1. Choose **Add Codex Easy**, **Add OpenAI**, or **Add Provider**.
2. Enter the API base URL and key. Keep **Discover Models** selected.
3. Select the connection under **Active Provider**.
4. Enable the models you want, then select one in the Agent picker.

| Connection | API base URL |
| --- | --- |
| Codex Easy | `https://codex-easy.ai/v1` |
| OpenAI | `https://api.openai.com/v1` |
| Local compatible server | `http://127.0.0.1:8000/v1` |

Use the exact URL supplied by your service, including its API prefix. Model
discovery uses authenticated `GET <base>/models`; Agent requests use Chat
Completions. Model availability comes from the server and your account.

Search by model name or ID, filter to enabled models, and edit display names.
The active connection and enabled-model count remain visible. **Add Model**
accepts an exact server ID when discovery is unavailable. Refresh preserves
manual models, names, and enabled states.

In the Agent model picker, open the model's options to choose **Reasoning**.
The native submenu remembers each model's selection. It uses discovered
capabilities first, with documented defaults for known Codex Easy models:

| Model family | Reasoning choices |
| --- | --- |
| GPT 6 / 5.6 models listed by Codex Easy | Low, Medium, High, Extra High, Max |
| DeepSeek Flash / V4 Pro | Off, Low, High, Max |
| Grok 4.6 / 4.7 | Low, Medium, High, Extra High |

DeepSeek maps the compatibility alias **Ultra** to **Max**; they represent the
same effort. Unknown models only show choices declared by their provider.
Agent submissions resolve the selected model's saved URL and key for each
request, including immediately after startup.

Capability references: [Codex Easy configuration](https://docs.codex-everywhere.com/integrations/opencode),
[DeepSeek thinking modes](https://api-docs.deepseek.com/guides/thinking_mode),
[Grok reasoning](https://docs.x.ai/developers/model-capabilities/text/reasoning).

Subagent model overrides retain explicit reasoning choices and saved model
preferences through the same model-capability validator.

API keys use local workbench secret storage. They are excluded from provider
metadata, this README, and Git. The repository does not ship an API key. Model
listing alone does not establish image input, reasoning, tool use, or every
Agent capability. Tab autocomplete has a separate protocol and is not verified
by a successful chat request.

## Projects And Execution

**File > Open Folder** opens a project; **Add Folder to Workspace** adds another.
Explorer includes file icons, nested folders, breadcrumbs, indent guides, and
open editors. **Terminal > New Terminal** opens your project shell.

The starter project has **Playground: Run**, **Playground: Test**, and a Node
debugger configuration. Other projects provide their own runtimes, tasks, and
debugger extensions. Git integration uses your installed Git.

For lower memory use, JavaScript/TypeScript defaults to one language server
(`js/ts.tsserver.useSyntaxServer: "never"`). Autocomplete, types, and diagnostics
share that server; folding and symbols may wait behind heavy type-checking.
Set it to `"auto"` in Settings to restore the separate syntax server.
Explicit existing language-server preferences are preserved.

The title-bar profile button edits your local display name. Cloud-agent entry
points and hosted account/billing controls are disabled. Settings and profile
dialogs use short transitions, with reduced-motion preferences respected.

In **Customize > Rules**, user rules are saved in the local OpenVision profile
and included in local Agent context. Creating, editing and removing them does
not require a cloud account. Generated notes are kept in their workspace.
See [local rules and reasoning implementation](docs/rea-local-rules.md) for
migration, verification and remaining limits.

## Import Settings

In **OpenVision Settings > General**, open the settings-import action. Select
the source profile and categories, preview the changes, then import. The importer
supports editor preferences, keyboard shortcuts, snippets, tasks, and registered
extensions. Source files are read without modification.

For command-line preview or import:

```sh
npm run import:settings
npm run import:settings -- --apply
npm run import:settings -- --apply --keep-existing
npm run import:settings -- --apply --categories settings,keybindings --user "/path/to/User"
npm run import:settings -- --restore "/exact/backup/path/from-import"
```

For restore, use the **exact backup path** printed by the import, rather than the
example placeholder. Close OpenVision before CLI import/restore, and restart
after importing extensions. **Restore Last Import** is also available in the
dialog. Restore refuses to overwrite newer edits. Repeating an identical import
does not create another backup.

Accounts, cookies, chat history, databases, and extension secret storage are
excluded. Existing OpenVision provider keys remain in their own storage.
Source-profile paths, backup layouts, and remaining global-service isolation
limits are described in [Import Details](docs/native-runtime.md#import-settings).

## Customize

| Path | Purpose |
| --- | --- |
| `assets/openvision.svg` | Original editable OpenVision logo |
| `desktop/local-profile.js`, `local-profile.css` | Profile, title bar, dialogs, watermark |
| `desktop/model-settings.js`, `model-settings.css` | Provider UI, search, filters, motion |
| `desktop/model-providers.js`, `model-http.mjs` | Provider storage, model catalogs, native discovery |
| `desktop/build-source.mjs`, `source-assembly.mjs` | Native assembly and source customizations |
| `desktop/prepare-source.mjs` | Native input preparation |
| `source/app` | Editable recovered application |
| `tooling` | Locked build and verification dependencies |
| `data`, `backups`, `logs`, `build` | Local profile, backups, evidence, generated outputs |

Make durable changes in `desktop` and `assets`, then relaunch. SVG branding is
converted into Windows ICO, macOS ICNS, and Linux PNG assets during the build.
Unchanged workbench bundles use a content-hash cache to avoid repeated parsing
and large temporary allocations on launch. Editing a bundle or its customization
code invalidates the cache; deleting `build/cache` forces revalidation.
**Developer: Reload Window** reloads renderer changes; main-process and native
asset changes need a full restart. Original TypeScript/native source has not
been reconstructed, and performance gains are not claimed without measurements.
See the [performance review](docs/performance.md) for measured savings, tradeoffs,
and remaining runtime issues.

The recovery boundary and native coverage are recorded in
[Recovery and product control](docs/recovery-status.md). It lists which
representations are editable and which native or hosted pieces remain unknown.
The [feature gap audit](docs/feature-gap-audit.md) gives measured recovery
percentages and the remaining work for each major feature.
The [completion sprint ledger](docs/completion-sprints.md) organizes that work
into 10 sprints with user stories, dependencies and acceptance evidence.
The [autocomplete investigation](docs/rea-autocomplete-contract.md) records the
latest protocol findings and cancellation fixes.
The [MCP investigation](docs/rea-mcp-contract.md) records the recovered
transport routing and the remaining local server lifecycle checks.

The local control plane supports custom MCP servers through `GET
/api/servers/:id/tools` and `POST /api/servers/:id/call`. STDIO and HTTP server
definitions are stored in `config/servers.json`; STDIO child processes are owned
and reaped by OpenVision. Use `transport: "http"` with a `url` for an HTTP MCP
server. Account login, billing and hosted cloud agents remain
outside the product scope.

## Verify

```sh
npm run check:desktop
npm run test:portable
npm run test:desktop
npm start -- --inspect-preview
node desktop/verify-import.mjs
node desktop/verify-models.mjs
```

Portable tests cover import/restore, paths, executable identity, native copies,
icons, and supported-platform fixtures. Live checks use temporary local fixtures
and remove their test providers. They need a prepared editor. Verification
screenshots and reports stay in ignored `logs`. Ordinary launch has no debugging
port. Run the portable checks locally on each target operating system; fixture
checks do not establish full editor parity. This repository has no GitHub Actions workflows.

## Troubleshooting

| Issue | Action |
| --- | --- |
| Native inputs missing | Read [Native Runtime](docs/native-runtime.md), then run preparation |
| Wrong platform/architecture | Prepare native inputs on the target machine |
| Existing partial build | Preserve it and inspect diagnostics before rebuilding |
| Missing dependency | Select Node 24.18.0 and run `npm ci --prefix tooling` |
| Discovery returns 401/403 | Check the key, service permissions, and base URL |
| Model listed but Agent fails | Check Chat Completions and tool-use compatibility |
| Imported extensions missing | Restart and check target-platform compatibility |
| Restore refuses a file | Reconcile the newer edit with the local backup |

Private repository access is required. Generated application files, native
binaries, profiles, keys, backups, and dependencies are excluded from Git.
