<p align="center">
  <img src="assets/openvision-banner.svg" alt="OpenVision — your workspace, your models. Animated blinking eye." width="100%">
</p>

# OpenVision · AI coding workspace

**Your projects. Your models. Your workflow.**

OpenVision is a desktop AI coding workspace combining a local
profile, project explorer, code editing, AI agents, Tab autocomplete, terminals,
Git and custom AI providers. Connect an OpenAI-compatible API or your own server
with a base URL, model name and API key. Discover models and choose reasoning
options without an OpenVision account.

**Development preview · Windows x64 and Linux x64 tested · macOS unverified**

[Get started](#get-started) · [Configure AI](#bring-your-own-ai) ·
[Feature roadmap](docs/roadmap.md) ·
[Releases](https://github.com/RemiPelloux/OpenVision/releases) ·
[Documentation](docs/README.md)

> **Ready to run on Windows x64.** Download the complete portable app from
> [Releases](https://github.com/RemiPelloux/OpenVision/releases/tag/v0.2.0-preview.6),
> extract it, and double-click **OpenVision.cmd**. The complete app payload is
> also included in this Git repository. No separate editor, Node.js or npm setup.
>
> **Runs natively on Linux x64.** Build it locally from a pinned, checksum-verified
> input with `npm run prepare:desktop && npm start`, or package it with
> `npm run package:linux`. See the [Linux guide](docs/linux.md).

## A workspace built around your choices

| Capability | What you can do today | Evidence and limits |
| --- | --- | --- |
| Custom AI providers | Save URLs and keys, discover models, add manual IDs, search grouped model lists | [Provider setup and persistence](docs/provider-selection-lifecycle.md) |
| Account models — source build | Select signed-in Claude or eligible GPT-6 Codex accounts in Agent; inspect reported usage in the bottom bar | [Account setup and real test limits](docs/account-integrations.md); experimental, not included in preview.6 |
| Resource use — source build | Release completed utility listeners, reuse unchanged account routes, bound failed-host retries and avoid duplicate stream retention | [Native cleanup](docs/utility-process-ownership.md) · [Request/heap measurements](docs/account-performance.md); whole-app savings remain unmeasured |
| Project Home | Open projects in the current window, search recent work, pin favorites and resume saved workspaces | [Dashboard and measured scope](docs/project-home.md); included in the portable app |
| Appearance | Choose dark, light or high-contrast themes and customize colors, fonts and icons | [Appearance guide](docs/appearance.md) |
| AI Agent | Read files, propose edits and run approved tools through your selected provider | [Native and live-provider checks](docs/rea-agent-runtime.md); broader workflow coverage remains open |
| Code autocomplete | Select a separate completion model, accept with Tab, undo, cancel pending work | [Windows editing checks](docs/rea-custom-autocomplete.md); predictive navigation is unfinished |
| Project development | Explore projects, search, edit, Save All, run terminals/tasks and debug Node | [Development workflows](docs/development-workflows.md); one intermittent launcher-exit issue remains under investigation |
| Language tools | Bundled JavaScript/TypeScript tooling and optional pinned clangd for C/C++ | [Language checks](docs/rea-language-workflows.md) · [C/C++ setup](docs/cpp-support.md) |
| Git and worktrees | Create branches/worktrees, review diffs, resolve conflicts and recover across restart | [Verified Windows scope](docs/git-workflows.md) |
| Local customization | Project rules, plans, skills, agents and MCP configuration under `.openvision/` | [Project configuration](docs/project-configuration.md); some global paths still need auditing |
| MCP tools | Connect HTTP/STDIO servers, approve tool calls, cancel and reconnect | [Cleanup/session recovery](docs/rea-mcp-cleanup.md) and [window/user-data ownership](docs/rea-mcp-ownership.md) checks; broader profile/configuration ownership remains open |
| Approved memories | Review AI suggestions and legacy memories before saving project rules | [Memory guide](docs/project-memories.md) |

## Get started

**Download:** get **OpenVision-0.2.0-preview.6-win32-x64.zip** from
[the latest portable release](https://github.com/RemiPelloux/OpenVision/releases/tag/v0.2.0-preview.6).
Extract the ZIP and double-click **OpenVision.cmd**. Project Home brings together
recent projects, pinned favorites and open windows. Open a folder or saved
workspace, then configure your AI provider in **Models** settings.

**From Git:** clone the complete repository and double-click **Run-OpenVision.cmd**:

```sh
git clone --depth 1 https://github.com/RemiPelloux/OpenVision.git
cd OpenVision
```

The repository launcher verifies and extracts the included payload once, then
opens **OpenVision-portable/**. It uses built-in Windows tools only, preserves your
profile on later launches and makes no runtime downloads. GitHub's repository
ZIP works too. The package is approximately **327 MiB**; allow **2 GiB** free.

| System | Current support |
| --- | --- |
| Windows x64 | Complete portable download and repository payload; native package checks passed |
| Windows ARM64 | Native release package still planned |
| macOS Intel / Apple Silicon | Native release and desktop verification still planned |
| Linux x64 | Native local build and portable package; Wayland desktop suite, keyring and sandbox checks passed ([evidence](docs/linux-verification.md)) |
| Linux ARM64 | Needs a pinned ARM64 input; not yet verified |

### Linux

```sh
git clone https://github.com/RemiPelloux/OpenVision.git
cd OpenVision
npm ci --prefix tooling
npm run prepare:desktop   # downloads the pinned Linux input and verifies its SHA-256
npm start                 # builds once, then opens Project Home
```

API keys use your desktop keyring (gnome-keyring, KWallet or KeePassXC) on any
desktop, including Hyprland, Sway and i3. `npm run package:linux` creates a
portable folder with an `./OpenVision` launcher and an optional launcher entry.
[Linux guide, requirements and capability differences →](docs/linux.md)

[Installation, editable code and updates →](docs/native-runtime.md) ·
[Models, imports and project customization →](docs/user-guide.md)

## Bring your own AI

Explore [Codex Everywhere](https://codex-everywhere.com/home?aff=KTCCGGAS9R2Q)
through the project author's affiliate link.

In the source build, open **OpenVision Settings → Models & integrations → API connections**.
The preview.6 portable app uses **Models → Custom Providers**.

1. Choose **Add Provider**, **Add Codex Easy**, or **Add OpenAI**.
2. Enter the API base URL and your API key. Keep **Discover Models** selected.
3. Enable models, choose the active connection, and select a model in Agent.
4. Optionally choose a **Tab autocomplete model** separately; it starts Off.

| Provider | Example API base URL |
| --- | --- |
| Codex Easy | `https://codex-easy.ai/v1` |
| OpenAI | `https://api.openai.com/v1` |
| Your compatible local server | `http://127.0.0.1:8000/v1` |

Discovery uses `GET /models`; generation uses Chat Completions. API keys belong
in local secret storage, never in project files. Discovery alone does not prove
tools, reasoning, image input or completion compatibility.

Reasoning choices are per model. **Provider default** omits an explicit effort;
other choices follow declared capabilities or labeled compatibility hints.
GPT, DeepSeek and Grok have separate [live verification results](docs/live-provider-compatibility.md).
Not every displayed model or reasoning tier has passed a live test.

## Local profile, explicit connections

The editable source build adds **Models & integrations**, optional first-launch
setup, and separate ChatGPT/Codex and Claude/Claude Code account profiles.
Use **Run setup again** in Settings to replay onboarding.
Choose **Add account**, complete browser sign-in, then select its model in the
existing **Agent** picker. Account groups show the returned email. OpenVision
continues to handle file tools and approvals; official panels are also available.
The bottom bar shows provider-reported account usage, or **Usage unavailable**.
Account controls include **Delete account**: isolated credentials and cache are
removed, while local conversation files are kept in an account history archive.
[Account sign-in, switching and current verification limits →](docs/account-integrations.md)
These additions are not included in the older preview.6 portable payload.

Recent source verification also covers MCP session-expiry recovery, shared
connections across two project windows and isolation between separate user-data
profiles. See the [source verification summary](docs/release-claims.md#source-additions-after-preview6)
for the exact scope and unresolved diagnostics. Updating Git does not replace
an already extracted portable app; [build the editable source](docs/native-runtime.md)
to use changes made after preview.6.

The optional Node control plane also bounds STDIO response accumulation and
recovers after malformed output. Request admission is ordered with settings
saves to prevent stale connections after disable or replacement; see
[MCP lifecycle verification](docs/control-plane-mcp-lifecycle.md).
See [validation and scoped RAM measurements](docs/control-plane-stdio-resources.md);
these do not establish a whole-desktop RAM reduction.

**Latest real Windows checks, 15 October 2026:** signed-in Claude read and edited
a test file through OpenVision Agent. Codex account choices include only GPT-6
models actually advertised by its official client; the tested account offered
none and rejected `gpt-6.1-sol`. A separate request through the saved Codex Easy
GPT-6 API connection returned HTTP 403 `INSUFFICIENT_BALANCE`. Neither blocked
GPT-6 path is reported as successful. Account Agent support currently accepts
text and tools; Tab autocomplete continues to use API connections.

- No OpenVision login or signup. Optional third-party coding-agent sign-in is
  separate from the local profile; original billing and hosted cloud-agent flows
  remain outside this project's scope.
- Built-in analytics and crash-upload implementations are disabled by the build.
  [Telemetry audit →](docs/rea-telemetry-audit.md)
- Configured AI providers receive the context needed for requests. MCP servers
  and independently installed extensions can also communicate externally.
- Large chat pastes become local UTF-8 files under `.openvision/paste/`, keeping
  prompts compact. [Paste behavior →](docs/rea-large-paste.md)
- Chat titles are generated locally, avoiding an extra AI request. The source
  build also skips hosted conversation-metadata watchers in local mode;
  [native restart checks](docs/local-conversation-metadata.md) preserve titles
  and history. This change is not included in the preview.6 download.

## Roadmap and honest progress

**6 of 42 acceptance stories fully verified · 14.29%.**
Another **22 are Partial**, **12 Planned** and **2 Unknown**. Partial stories
already contain working features; this score measures complete acceptance gates,
not the percentage of code implemented or decompiled.

The next product target is **34/42 verified stories (at least 80%)**, together
with the critical development workflow. The largest remaining areas are live
Agent coverage, retrieval/indexing ownership, next-edit prediction, independent
source rebuilds, upgrade/rollback verification, remote development and a native
macOS release. The Windows portable package is delivered in this preview, and
Linux x64 now builds, packages and passes its native suite locally.

The [feature roadmap](docs/roadmap.md) covers every unfinished story using
**complexity points, dependencies and acceptance gates**.
The [critical-first queue and ETA](docs/roadmap.md#critical-first-backlog-and-eta)
orders **36 unfinished stories / 322 provisional points**: safety and privacy,
RAM/request efficiency and daily workflows, independent builds, retrieval,
distribution/platform completion, then broader modes. Estimates describe scope;
release readiness requires the named checks. The latest performance fixes are
in source and have not updated the preview.6 download.

The [Rust rewrite roadmap](docs/rust-roadmap.md) breaks the architecture track into
**36 planned packages / 195 provisional points**, with dependencies, migration,
rollback and release gates. The [component audit](docs/rust-component-audit.md)
identifies what moves to Rust, what stays external and the compatibility risks.
The [gain and measurement plan](docs/rust-performance-plan.md) separates expected
benefits from evidence: replacing the desktop shell is the largest structural
RAM opportunity, while remote inference and retained tools keep their own costs.
The rewrite is planned; no Rust speedup or RAM reduction is measured yet.
The [42-story replacement map](docs/rust-acceptance-map.md) tracks required feature
coverage, and [migration contracts](docs/rust-migration-contracts.md) define code
ownership, single-writer data transfer and safe rollback. The plan compares
native and webview desktop options before choosing a toolkit.

## Develop and verify locally

```sh
npm run check:desktop
npm run test:accounts
npm run test:portable
npm run test:completion
npm run verify:completion -- --editing --portable ./OpenVision-portable
npm run verify:welcome -- --portable ./OpenVision-portable
npm run verify:mcp-session
npm run verify:mcp-ownership
npm run test:agent-review
npm run verify:agent
npm run status:features
```

On Linux, the same native verifiers run against the local build, plus
`npm run verify:linux-secrets` for keyring selection. See
[Linux verification](docs/linux-verification.md).

Development tooling uses **Node.js 24.18.0** and `npm ci --prefix tooling`.
The desktop build validates generated scripts, manifests and local main-process
imports. See [build integrity and verification limits](docs/runtime-build-integrity.md)
for the latest recovery and shutdown corrections.

The source build also rejects stale search initialization after project changes
or disposal. See the [retrieval audit and verification limits](docs/rea-retrieval-ownership.md)
for the reproduced race, native project regression and remaining indexing gates.

The [Agent review audit](docs/rea-agent-edit-history.md) tracks native project
search, multi-file acceptance and editor undo. `verify:agent` uses a local model
fixture with real application tools; live-provider evidence is reported separately.
Add `-- --review-recovery` to check repeated edits and pending review across
normal restarts, or `-- --review-abrupt` to verify rejection/acceptance recovery
after abrupt app exits; see [review recovery](docs/rea-agent-review-recovery.md)
for the exact Windows evidence and remaining failure cases.

The portable package contains editable code under
`electron-host/resources/app/` and helpers under `electron-host/desktop/`;
changes there load after restarting. Full native-source rebuilds remain planned.
Native checks use disposable profiles. Live-provider
checks are opt-in and consume API quota. **GitHub Actions is disabled**; this
project does not require paid CI to build or verify changes.

| Directory | Responsibility |
| --- | --- |
| `desktop/` | Durable customization code, adapters and verification tools |
| `assets/` | Original OpenVision SVG identity and animated README banner |
| `docs/` | Setup, feature evidence, recovery boundaries and roadmap |
| `tooling/` | Locked build and verification dependencies |
| `downloads/windows-x64/` | Complete portable payload in SHA-256-verified Git parts |
| `Install-OpenVision.ps1`, `Run-OpenVision.cmd` | Offline extraction and launch |
| `source/`, `electron-host/` | Generated local runtime; excluded from Git |
| `data/`, `backups/`, `logs/` | Private local state and evidence; excluded from Git |

[Contributing](CONTRIBUTING.md) · [Security](SECURITY.md) ·
[Changelog](CHANGELOG.md) · [Install and update](docs/native-runtime.md)

Third-party notices are included in the portable app. See [licensing scope](NOTICE.md).
OpenVision is an independent project; this preview has unfinished acceptance gates.
