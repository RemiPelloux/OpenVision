# OpenVision

OpenVision launches the recovered, readable application JavaScript in
`source/app`. That directory is editable and is the application loaded by the
Electron host. The editor, project files, terminal, settings and extension
workbench come from the recovered application.

## Run

This repository tracks OpenVision's customization source, launchers, tests and
locked tooling dependencies. Recovered third-party application files, compiled
Electron/native binaries, analysis evidence, generated workspaces, local profiles,
API credentials and logs are excluded from Git.

The desktop build currently requires a prepared REA workspace. Place this checkout
at `REA/openvision`; the parent workspace must provide `enter-rea.ps1`, its local
Node runtime, and `cursor/artifacts/installation`, `cursor/readable/app`,
`cursor/reports/installation-manifest.json` and `cursor/reports/readability.json`.
These recovery inputs are local prerequisites, not files downloaded by this repo.
Install the locked build dependencies with `npm ci --prefix tooling` using the
prepared Node/npm toolchain. Runtime verification also uses `playwright-core`
from the parent REA workspace. A fresh clone without these local recovery inputs
cannot assemble the desktop app.

Double-click `start-openvision.cmd`, or run from the REA folder:

```powershell
.\openvision\start-openvision.ps1
```

The launcher opens `OpenVision.code-workspace`, with Playground, OpenVision Source
and OpenVision Tools roots. Playground files live separately in
`C:\Users\User\Documents\ChatGPT\OpenVision Projects\Playground`.
Use File > Open Folder or Add Folder to Workspace for other projects.
Terminal > New Terminal opens the integrated terminal. Run Task provides
`Playground: Run` and `Playground: Test`; F5 launches the Playground debugger.

The Explorer opens by default, with file icons, separate nested folders,
indent guides, sticky folder context, breadcrumbs and an open-editor list.
Dependency folders and source maps are excluded from the project tree and search.

The Eye logo and product/window name are OpenVision. Account onboarding and the
General settings sign-in panel use a local profile instead. Click the profile in
the title bar or General settings to edit its name; it persists on this machine.
Local profile state contains a display name and random UUID, without account
tokens. Updates are disabled for this custom build.

Cloud Agents, cloud environment selection, cloud notifications, cloud skills
syncing and cloud command registrations are disabled. Their settings entries,
including hosted account/billing tabs, are removed. The recovered implementation
remains available as reference source; this is not a deletion of all cloud code
from the original evidence.

## Source And Runtime

| Path | Purpose |
| --- | --- |
| `source/app/out/main.js` | Editable recovered main-process JavaScript |
| `source/app/out/vs/workbench/workbench.desktop.main.js` | Editable recovered editor/workbench JavaScript |
| `desktop/` | Source assembly, branding, local-profile customization and verification |
| `electron-host/OpenVision.exe` | Compiled Electron host, with OpenVision icon and version metadata |
| `electron-host/resources/app` | Directory junction pointing to `source/app` |
| `data/local` | Isolated settings, workspace state and local profile |
| `data/local-extensions` | Extensions installed for this build |
| `build/` | Source provenance and customization records |
| `backups/local-profile` | Source backups before local-profile changes |
| `../cursor/readable` | Preserved recovery output and extracted modules |

Edits to `source/app` are retained on subsequent launches. Restart the app after
changing main-process code; Developer: Reload Window reloads workbench code.
`build-source.mjs` applies the local-profile customizations idempotently and fails
if the expected source owners cannot be identified. It preserves backups.

The recovered source is bundled JavaScript, not restored original TypeScript.
The native Electron host, native addons and WASM remain compiled implementations.
No complete native rebuild, full feature parity or speed improvement is claimed.
The installed Cursor and the original recovery evidence are separate from this
editable application.

## AI Configuration

OpenVision Settings > Models > Custom Providers lets you save multiple
OpenAI-compatible providers. Click **Add Provider**, enter an optional provider
name (for example, Codex Easy), your **API Base URL**, and **API Key**. Leave
**Discover Models** checked to query the provider's `/models` endpoint.
The URL should include the provider's API prefix, such as `/v1`, without the
`/models` or `/chat/completions` suffix. The name defaults to the URL hostname.

**Add OpenAI** fills in `https://api.openai.com/v1`; enter your own OpenAI API
key. Discovery retrieves the models currently available through that key,
including GPT models, rather than using a hardcoded list. A ChatGPT subscription
does not supply an OpenAI API key or API billing.

For Codex Easy, use that service's actual OpenAI-compatible API URL and key.
Its endpoint is not assumed or bundled. Services supporting only the Responses
API are not established as compatible with the recovered local agent.

Select **Active Provider** to route the local agent to that URL and key. Each
provider has refresh, add-model, edit and remove controls. **Add Model** takes
the exact server **Model ID** and an optional **Display Name**; aliases change
the displayed label, not the ID sent to the API. Enabled models appear in the
Agent model picker. Discovery preserves manually added models and custom names.
Listing a model does not verify its chat, tool-use, reasoning or image capabilities.

Provider metadata is stored in the isolated OpenVision profile. Keys use the
workbench secret-storage service, including its existing active gateway credential
storage; they are excluded from provider metadata and localStorage. Discovery
runs in Electron's native network layer, with a 20-second timeout and a 4-MiB
response limit, so local servers do not need browser CORS support.

Customize retains MCP server configuration. A local profile does not authenticate
to Cursor's cloud services.

No real AI endpoint or key has been supplied, so live-provider inference and AI
autocomplete remain unverified. Tab autocomplete uses a separate protocol; a working chat API alone
does not establish Tab compatibility. See
[`IDE-FEATURES.md`](../cursor/reports/IDE-FEATURES.md) for the recovery findings.

## Verification

Launch with `--inspect-preview` to enable a temporary loopback debug port, then
run `desktop/verify.mjs` using the local Node runtime. This checks the source URL,
editor, profile persistence, account UI and settings, and saves screenshots in
`logs`. `desktop/local-workbench.test.mjs` tests both recovered workbench variants,
idempotence, malformed owner rejection and unchanged cloud authentication.

`desktop/model-providers.test.mjs` checks provider/model semantics and integration
with both recovered bundles. `desktop/verify-models.mjs` runs a local API fixture
against the actual app: native authenticated discovery, OpenAI preset, manual
model names, reload persistence, the Agent picker, selected-model streamed
inference, clearing a key and HTTP errors. Temporary provider entries and keys
are removed after verification. Results are saved in `logs/model-verification.json`.
This fixture verifies local routing; it does not establish access to a real provider.

The rejected copied preview is archived under `backups/desktop-preview/runtime`.
The earlier dashboard remains under `src` and `config`, with its separate launcher
`start-control-plane.ps1`; the main OpenVision launcher opens the desktop IDE.
