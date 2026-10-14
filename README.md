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

C/C++ support is available on Windows x64 through `npm run setup:cpp`. It installs
pinned clangd tools into OpenVision's own folders and preserves existing settings.
See [C/C++ setup and verified workflows](docs/cpp-support.md) for project compiler
configuration and remaining limits. Global **Save All** also saves modified files
without editor tabs; [native verification](docs/save-all-verification.md) covers
extension edits, untitled choices and conflicting disk changes.

Git worktree commands list worktrees on demand even with automatic detection
disabled. Native Windows checks cover branch/worktree isolation, conflict
resolution, safe cleanup and restart recovery; see [Git workflows](docs/git-workflows.md).

The welcome screen features an animated OpenVision eye and an **Enter workspace**
button for your local profile. Reopen it from the profile button in the title bar
by choosing **Welcome screen**. It respects the system's reduced-motion preference.
Run `npm run verify:welcome` to check the real desktop screen in a disposable
profile, including workspace entry, layout, blink and dismissal.

Large chat pastes (10,000 characters or more) automatically become UTF-8 files in
your project's `.openvision/paste/` folder. The prompt keeps a short file reference;
the agent reads the text when needed. Files stay available for saved chats and
can be removed manually when no longer needed. See [paste behavior and live
verification](docs/rea-large-paste.md).

Project rules, plans, agents, skills, commands and MCP configuration use
`.openvision/`. See [project folders and safe migration](docs/project-configuration.md)
for the layout and migration command.

Release work targets **80% of the fixed 42 acceptance stories**, plus a usable
development workflow. Current evidence, missing functions and conditional ETAs
are in [remaining work and estimates](docs/remaining-work-estimates.md).

## Telemetry

OpenVision disables built-in usage analytics, Sentry reporting, crash uploads,
performance profiling, edit-history telemetry, codebase snapshot telemetry,
and bundled Agent/debugger telemetry. The build removes their collectors and
upload implementations, forces telemetry settings off, and protects those
settings during imports. Local diagnostic logs remain available.

Restart existing OpenVision windows after rebuilding to load the changes.
Your configured AI providers and MCP servers still receive requests needed for
their features. Independently installed extensions can have their own networking.
See the [telemetry audit](docs/rea-telemetry-audit.md) for the exact coverage and
Windows runtime results.

```sh
npm run test:telemetry
npm run verify:telemetry
```

The runtime check opens and closes a separate test window/profile and saves its
network log, screenshot, and result under `logs/telemetry-verification-*`.

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

Windows x64 Agent command cancellation uses a pinned REA native Job Object
runtime to stop the shell and its owned children together. It loads when a
command is first needed. After updating this checkout, run `npm ci --prefix tooling`
and `npm run build:desktop`, then restart OpenVision. See the
[command ownership report](docs/rea-command-cancellation.md) for verified behavior,
local checks and other-platform limitations.

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
all saved models, names, and enabled states. Models absent from a successful
catalog response stay selectable and show **Not in latest catalog** in settings;
their availability still depends on the provider. Remove unwanted entries explicitly.

In the Agent model picker, open the model's options to choose **Reasoning**.
The native submenu remembers each model's selection. It uses discovered
capabilities first, with compatibility hints for known Codex Easy models:

**Provider default** leaves the effort field out of the request so your server
chooses its own behavior. New selections default to this option; existing explicit
choices are preserved. It is distinct from **Off**, which sends `none`.

| Model family | Reasoning choices |
| --- | --- |
| GPT 6 / 5.6 models listed by Codex Easy | Low, Medium, High, Extra High, Max |
| DeepSeek Flash / V4 Pro | Off, Low, High, Max |
| Grok 4.6 / 4.7 | Low, Medium, High, Extra High |

The table lists explicit tiers in addition to Provider default. These tiers are
not all live-verified. DeepSeek V4 Flash Read works with Provider default on the
tested connection; explicit High returned HTTP 400. Unknown models only show
tiers declared by their provider. Provider default appears when tiers exist.
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
Agent capability.

For code suggestions, select **Tab autocomplete model** in Models settings.
It starts **Off**. Choose a fast enabled model supporting Chat Completions; nearby
code is sent to that model's saved URL using its saved key. Press **Tab** to accept
a suggestion and use normal **Undo** to revert it. This supports code insertions;
predictive jumps are not implemented. Native Windows acceptance/undo is verified
with a local endpoint; external-provider compatibility remains unverified.
See [autocomplete details and checks](docs/rea-custom-autocomplete.md).

Chat titles are generated locally from the first message, saving a separate AI
request. User subagents and global MCP configuration live inside OpenVision's
data directory (`data/local/User/agents` and `data/local/User/mcp.json` with the
standard launcher). Skills/plugins have additional roots still under review;
see [customization scope](docs/rea-subagent-isolation.md).

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
not require a cloud account. Agent can suggest a project memory in a review card.
Edit it, choose its project, then click **Save project memory**; dismissing writes
nothing. Approved memories live in `.openvision/rules/memory-*.mdc`. Only their
descriptions enter new chat context; Agent reads their contents when relevant.
For older workspace memories, open **Customize > Rules > Review legacy memories**.
Search, review and edit a record, then choose **Import project memory**. Original
records remain in local storage. See [project memories](docs/project-memories.md)
for usage and verified limits.
See [local rules and reasoning implementation](docs/rea-local-rules.md) for
migration, verification and remaining limits.

The [live provider matrix](docs/live-provider-compatibility.md) records tested
GPT/Grok tool roundtrips, native Read checks, and remaining reasoning failures.
The [release claims](docs/release-claims.md) distinguish tested workflows from
open release gates. The [native performance baseline](docs/native-performance-baseline.md)
records startup, process memory, request counts and cancellation; run
`npm run benchmark:native` to repeat its disposable Windows fixture.
For an opt-in check using a saved connection, run
`npm run verify:providers:live -- --live --model gpt-6.1-sol`. This sends small
synthetic requests and consumes provider quota; it does not send project files.

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
