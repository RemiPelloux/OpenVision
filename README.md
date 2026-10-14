<p align="center">
  <img src="assets/openvision-banner.svg" alt="OpenVision — your workspace, your models. Animated blinking eye." width="100%">
</p>

# OpenVision · AI coding workspace

**Your projects. Your models. Your workflow.**

OpenVision is an experimental desktop IDE customization project combining a local
profile, project explorer, code editing, AI agents, Tab autocomplete, terminals,
Git and custom AI providers. Connect an OpenAI-compatible API or your own server
with a base URL, model name and API key. Discover models and choose reasoning
options without an OpenVision account.

**Development preview · Windows x64 tested · macOS/Linux unverified**

[Get started](#get-started) · [Configure AI](#bring-your-own-ai) ·
[Feature roadmap](docs/roadmap.md) ·
[Releases](https://github.com/RemiPelloux/OpenVision/releases) ·
[Documentation](docs/README.md)

> This repository ships customization source, tests and documentation. It does
> **not** include an editor installer, recovered application bundles or native
> binaries. Local preparation requires compatible inputs described in
> [native runtime and provenance](docs/native-runtime.md). OpenVision is not yet
> independently buildable from this repository alone.

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

You need **Node.js 24.18.0**, npm, Git and compatible native inputs on the target
machine. Read the [input requirements](docs/native-runtime.md) before preparation.
No system toolchain is installed automatically.

```sh
git clone https://github.com/RemiPelloux/OpenVision.git
cd OpenVision
npm ci --prefix tooling
npm run prepare:desktop
npm start
```

Preparation detects a supported local installation and creates a separate
snapshot. To select the input location explicitly:

```sh
npm run prepare:desktop -- --installation "/path/to/native-input"
```

For an already prepared checkout, use `npm start` or double-click
**start-openvision.cmd** on Windows. Open a project with **File → Open Folder**.
The app uses its own local profile and extensions.

| System | Current support |
| --- | --- |
| Windows x64 | Native workflows exercised on the prepared development build |
| Windows ARM64 | Preparation path exists; native acceptance remains unverified |
| macOS Intel / Apple Silicon | Platform-aware preparation exists; no native desktop verification yet |
| Linux x64 / ARM64 | Platform-aware preparation exists; no native desktop verification yet |

Each system needs its own compatible inputs. There is no standalone download in
this preview. [Setup, imports and troubleshooting →](docs/user-guide.md)

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
builds, packaging, remote development and native macOS/Linux verification.

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
npm run build:desktop
npm run verify:completion -- --editing
npm run status:features
```

Native checks require a prepared editor and use disposable profiles. Live-provider
checks are opt-in and consume API quota. **GitHub Actions is disabled**; this
project does not require paid CI to build or verify changes.

| Directory | Responsibility |
| --- | --- |
| `desktop/` | Durable customization code, adapters and verification tools |
| `assets/` | Original OpenVision SVG identity and animated README banner |
| `docs/` | Setup, feature evidence, recovery boundaries and roadmap |
| `tooling/` | Locked build and verification dependencies |
| `source/`, `electron-host/` | Generated local runtime; excluded from Git |
| `data/`, `backups/`, `logs/` | Private local state and evidence; excluded from Git |

[Contributing](CONTRIBUTING.md) · [Security](SECURITY.md) ·
[Changelog](CHANGELOG.md) · [Provenance and distribution](docs/native-runtime.md)

Public visibility does not grant a license to third-party software or ship its
sources. This repository currently has no project-wide redistribution license;
see [licensing scope](NOTICE.md). OpenVision is an independent experimental project.
