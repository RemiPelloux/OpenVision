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

**Development preview · Windows x64 tested · macOS/Linux unverified**

[Get started](#get-started) · [Configure AI](#bring-your-own-ai) ·
[Feature roadmap](docs/roadmap.md) ·
[Releases](https://github.com/RemiPelloux/OpenVision/releases) ·
[Documentation](docs/README.md)

> **Ready to run on Windows x64.** Download the complete portable app from
> [Releases](https://github.com/RemiPelloux/OpenVision/releases/tag/v0.2.0-preview.2),
> extract it, and double-click **OpenVision.cmd**. The complete app payload is
> also included in this Git repository. No separate editor, Node.js or npm setup.

## A workspace built around your choices

| Capability | What you can do today | Evidence and limits |
| --- | --- | --- |
| Custom AI providers | Save URLs and keys, discover models, add manual IDs, search grouped model lists | [Provider setup and persistence](docs/provider-selection-lifecycle.md) |
| AI Agent | Read files, propose edits and run approved tools through your selected provider | [Native and live-provider checks](docs/rea-agent-runtime.md); broader workflow coverage remains open |
| Code autocomplete | Select a separate completion model, accept with Tab, undo, cancel pending work | [Windows editing checks](docs/rea-custom-autocomplete.md); predictive navigation is unfinished |
| Project development | Explore projects, search, edit, Save All, run terminals/tasks and debug Node | [Development workflows](docs/development-workflows.md); one intermittent host-exit issue remains under investigation |
| Language tools | Bundled JavaScript/TypeScript tooling and optional pinned clangd for C/C++ | [Language checks](docs/rea-language-workflows.md) · [C/C++ setup](docs/cpp-support.md) |
| Git and worktrees | Create branches/worktrees, review diffs, resolve conflicts and recover across restart | [Verified Windows scope](docs/git-workflows.md) |
| Local customization | Project rules, plans, skills, agents and MCP configuration under `.openvision/` | [Project configuration](docs/project-configuration.md); some global paths still need auditing |
| Approved memories | Review AI suggestions and legacy memories before saving project rules | [Memory guide](docs/project-memories.md) |

## Get started

**Download:** get **OpenVision-0.2.0-preview.2-win32-x64.zip** from
[the latest portable release](https://github.com/RemiPelloux/OpenVision/releases/tag/v0.2.0-preview.2).
Extract the ZIP and double-click **OpenVision.cmd**. Open your project with
**File → Open Folder**, then configure your AI provider in **Models** settings.

**From Git:** clone the complete repository and double-click **Run-OpenVision.cmd**:

```sh
git clone --depth 1 https://github.com/RemiPelloux/OpenVision.git
cd OpenVision
```

The repository launcher verifies and extracts the included payload once, then
opens **OpenVision-portable/**. It uses built-in Windows tools only, preserves your
profile on later launches and makes no runtime downloads. GitHub's repository
ZIP works too. The package is approximately **328 MiB**; allow **2 GiB** free.

| System | Current support |
| --- | --- |
| Windows x64 | Complete portable download and repository payload; native package checks passed |
| Windows ARM64 | Native release package still planned |
| macOS Intel / Apple Silicon | Native release and desktop verification still planned |
| Linux x64 / ARM64 | Native release and desktop verification still planned |

[Installation, editable code and updates →](docs/native-runtime.md) ·
[Models, imports and project customization →](docs/user-guide.md)

## Bring your own AI

Explore [Codex Everywhere](https://codex-everywhere.com/home?aff=KTCCGGAS9R2Q)
through the project author's affiliate link.

Open **OpenVision Settings → Models → Custom Providers**:

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

- No OpenVision login or signup. Account, billing and hosted cloud-agent flows
  are outside this project's scope.
- Built-in analytics and crash-upload implementations are disabled by the build.
  [Telemetry audit →](docs/rea-telemetry-audit.md)
- Configured AI providers receive the context needed for requests. MCP servers
  and independently installed extensions can also communicate externally.
- Large chat pastes become local UTF-8 files under `.openvision/paste/`, keeping
  prompts compact. [Paste behavior →](docs/rea-large-paste.md)
- Chat titles are generated locally, avoiding an extra AI request.

## Roadmap and honest progress

**6 of 42 acceptance stories fully verified · 14.29%.**
Another **21 are Partial**, **13 Planned** and **2 Unknown**. Partial stories
already contain working features; this score measures complete acceptance gates,
not the percentage of code implemented or decompiled.

The next product target is **34/42 verified stories (at least 80%)**, together
with the critical development workflow. The largest remaining areas are live
Agent coverage, retrieval/indexing ownership, next-edit prediction, independent
source rebuilds, upgrade/rollback verification, remote development and native
macOS/Linux releases. The Windows portable package is delivered in this preview.

The [feature roadmap](docs/roadmap.md) covers every unfinished story using
**complexity points, dependencies and acceptance gates**.

The final architecture track is a [Rust rewrite](docs/rust-roadmap.md): migrate
the core services, then replace the recovered desktop shell while preserving
editing, Agent, extension and project workflows. Each replacement must prove
feature parity and measured performance gains. The rewrite is planned, not shipped.

## Develop and verify locally

```sh
npm run check:desktop
npm run test:portable
npm run test:completion
npm run verify:completion -- --editing --portable ./OpenVision-portable
npm run verify:welcome -- --portable ./OpenVision-portable
npm run status:features
```

Development tooling uses **Node.js 24.18.0** and `npm ci --prefix tooling`.
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
