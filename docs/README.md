# OpenVision documentation

Start with the [project overview](../README.md), then choose the guide for your task.

## Browse by topic

| Folder | Contents |
| --- | --- |
| [Guides](guides/README.md) | Installation, accounts, projects and customization |
| [Planning](planning/README.md) | Feature priorities, acceptance, points and gates |
| [Rust rewrite](planning/rust/README.md) | Component decisions, migration contracts and measurement |
| [Engineering](engineering/README.md) | Repository layout, implementation and ownership |
| [Performance](performance/README.md) | Resource measurements and optimization evidence |
| [Verification](verification/README.md) | Executed tests, platform coverage and release claims |
| [Recovery](recovery/README.md) | Artifact investigations, extracted source and missing layers |
| [Releases](releases/README.md) | Version-specific release notes |

[Repository layout](engineering/repository-layout.md) explains maintained code, reference archives, downloads and ignored local state.

All 237 selected JavaScript inputs now have structural extraction results;
the [final-bundle report](recovery/javascript-bundles.md) explains the one derived
filename-label input and the verification limits.

## Find a specific task

| I want to… | Read |
| --- | --- |
| See linked percentages, remaining points and delivery gates | [Progress dashboard and gate-based ETA](progress.md) |
| Download and launch OpenVision | [Portable installation, editable code and updates](guides/native-runtime.md) |
| Build and run OpenVision on Linux | [Linux guide](guides/linux.md) · [Linux verification](verification/linux-verification.md) |
| Configure models, import settings or customize the UI | [User guide](guides/user-guide.md) |
| Sign in, select account models in Agent, check usage or replay setup | [Official account integrations](guides/account-integrations.md) |
| Understand account data, cleanup and third-party telemetry limits | [Account privacy scope](guides/account-integration-privacy.md) |
| Check import isolation and exact restore | [Profile import verification](verification/import-profile-verification.md) |
| Resume, pin and search projects | [Project home](guides/project-home.md) |
| Change themes, colors, fonts and icons | [Appearance](guides/appearance.md) |
| See every missing feature and its complexity | [Feature roadmap](planning/roadmap.md) |
| Decide what to investigate and implement first | [All 36 unfinished stories ranked by importance](planning/roadmap.md#ranked-rea-implementation-and-verification-work) |
| Plan the Rust rewrite and its priorities | [36 packages, points and migration gates](planning/rust/rust-roadmap.md) |
| See what moves to Rust and what stays | [Component rewrite/retain audit](planning/rust/rust-component-audit.md) |
| Track every existing feature through the Rust rewrite | [42-story replacement acceptance map](planning/rust/rust-acceptance-map.md) |
| Understand Rust code ownership and safe data migration | [Implementation and migration contracts](planning/rust/rust-migration-contracts.md) |
| Understand expected Rust gains and their proof | [Performance budgets and measurement plan](planning/rust/rust-performance-plan.md) |
| Check HTTP MCP cancellation and response memory bounds | [Control-plane HTTP evidence and tradeoffs](performance/control-plane-http-resources.md) |
| Check MCP connection reuse, replacement and config ordering | [Control-plane lifecycle evidence and remaining gates](performance/control-plane-mcp-lifecycle.md) |
| Check STDIO response bounds and measured overflow recovery | [Control-plane STDIO resource evidence](performance/control-plane-stdio-resources.md) |
| Check discovery cancellation and the latest Windows startup gate | [Native discovery evidence and limits](performance/model-discovery-resources.md) |
| Review what has actually passed | [Release claims and verification matrix](verification/release-claims.md) |
| Compare current source changes with the portable download | [Source additions and remaining verification](verification/release-claims.md#source-additions-after-preview6) |
| Understand the acceptance percentage | [42-story sprint ledger](planning/completion-sprints.md) |
| Use C/C++ | [Pinned clangd setup](guides/cpp-support.md) |
| Configure local rules, plans, skills and MCP | [Project configuration](guides/project-configuration.md) |
| Understand MCP failed-close recovery and remaining checks | [Transport cleanup ownership](recovery/rea-mcp-cleanup.md) · [Acceptance gate owners](planning/acceptance-gate-ownership.md) |
| Check MCP sharing between windows and isolated user-data profiles | [Native ownership verification](recovery/rea-mcp-ownership.md) |
| Save and review project memories | [Memory workflow](guides/project-memories.md) |
| Check local chat titles, history and hosted metadata removal | [Conversation metadata ownership](engineering/local-conversation-metadata.md) |
| Check Explorer startup, editor reload and same-window opening | [Local startup ordering](engineering/local-startup.md) |
| Investigate model compatibility | [Live provider matrix](verification/live-provider-compatibility.md) |
| Use Tab autocomplete | [Completion behavior and tests](recovery/rea-custom-autocomplete.md) |
| Edit a selection with AI | [Native Quick Edit](recovery/rea-inline-edit.md) |
| Understand resource usage | [Native utility listener ownership](engineering/utility-process-ownership.md) · [Account routing and stream measurements](performance/account-performance.md) · [Performance review](performance/performance.md) · [Native baseline](performance/native-performance-baseline.md) |
| Inspect large-project watcher behavior | [100-file and 10,000-file native verification](verification/project-scale-verification.md) |
| Understand provider errors and manual retries | [Provider failure handling](engineering/provider-failure-handling.md) |
| Understand models disappearing after discovery | [Pending/in-flight storage ownership and source parity](engineering/storage-write-ownership.md) |
| Understand failed Undo/Redo recovery and retry guidance | [Review callback and native history ownership](recovery/rea-agent-undo-retry.md) |
| Understand recovery limitations | [Recovery status](recovery/recovery-status.md) · [Native inventory](recovery/native-recovery-inventory.md) |
| See which gaps the new source/docs close and which remain | [Latest reconciliation and documentation owners](recovery/feature-gap-audit.md#latest-documentation-and-source-reconciliation) |
| Connect recovered source to current missing features | [Updated gap audit and source-to-implementation map](recovery/feature-gap-audit.md#source-index-to-implementation-gaps) |
| Browse recovered application code, extracted modules and native pseudocode | [`curs_source` recovery archive](../curs_source/README.md) |
| Read this release's scope | [0.2.0-preview.6 projects in one window](releases/0.2.0-preview.6.md) |
| Review the packaged-app tests | [Portable verification](verification/portable-preview6.md) |
| Check WebAssembly recovery | [14/15 complete REA records and remaining limits](recovery/rea-wasm-inventory.md) |

The sprint ledger owns story status. The roadmap owns complexity points and delivery gates.
Individual evidence reports preserve their original dates and run scope; a past
failure or historical measurement is not silently replaced by a newer success.
Local `logs/` paths identify private run artifacts and are not public download links.

Verification runs locally. GitHub Actions remains disabled.

The latest source build includes experimental account models in Agent and a
provider-reported usage bar. These additions postdate the preview.6 download.
The [account guide](guides/account-integrations.md#verification-limits) records the real
Claude file-edit result, Codex GPT-6 availability limitation and API balance
failure separately from controlled tests. Broader Linux desktop results do not
establish native Linux account-integration support.
