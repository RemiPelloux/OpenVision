# Changelog

## 0.2.0-preview.3 — 2026-10-14

- Add Project Home with searchable recent projects, saved favorites, open-window focus and bounded lists.
- Route native Quick Edit through the selected custom provider, model and reasoning setting, with cancellation and native diff review.
- Explain DNS, refused connections and TLS failures using structured transport errors while preserving manual retry control.
- Import settings into the active default profile and selected extension directory; preserve exact backups and avoid registry casing changes that blocked restore.
- Extend local verification with cross-window memory review and large-project watcher workloads. Evidence and remaining gates are recorded in the [roadmap](docs/roadmap.md).
- Recover native import backups after restart using explicit profile/extension destinations, backup discovery and a read-only restore preview.
- Verify JavaScript and C cross-file navigation, three-file rename, Save All, undo/redo and overlapping edits to separate documents with real installed language providers.
- Refresh the complete Windows portable download and offline Git payload. The launcher opens Project Home when no project argument is supplied; packaging reads the project version.

Native package checks use disposable profiles and controlled local AI responses. No new paid inference or macOS/Linux verification is claimed.

## 0.2.0-preview.2 — 2026-10-14

- Ship the complete Windows x64 portable app, including editable application JavaScript, bundled extensions and native runtime support.
- Include the entire payload in Git as seven verified parts, with an offline Windows installer and double-click launcher. No Git LFS, runtime download, Node.js or separate editor is needed to run it.
- Add a complete release ZIP and SHA-256 checksums; exclude author profiles, credentials, chats and backups.
- Verify relocated native autocomplete/editing and the extracted app's animated welcome, local workspace, Agent tools, approved commands, cancellation and history restart/resume.
- Rewrite the public installation guides around OpenVision downloads, launch, editable code, updates and remaining platform gates.

- Plan remaining features with relative complexity points and acceptance gates.
- Add the final Rust rewrite track: core services, native desktop shell, compatibility, migration and measured performance. No Rust runtime changes ship in this documentation update.

## 0.2.0-preview.1 — 2026-10-14

First public development preview of the OpenVision customization source.
This is a source release, not a standalone editor distribution.

### Highlights

- Local profile and animated OpenVision identity, without hosted account or cloud-agent flows.
- Custom AI URLs, keys, model discovery, grouped search and per-model reasoning choices.
- Project development with terminals, tasks, Git/worktrees, language tooling and custom-provider Tab autocomplete.
- Local `.openvision/` rules, plans, large-paste files and reviewed project memories.

### Reliability improvements

- Cancel pending autocomplete with Escape; keep partial-word acceptance separate from typed-text undo.
- Reject truncated, malformed, refused and tool-call completion responses before insertion.
- Preserve saved models across catalog changes and route duplicate model IDs by provider identity.
- Save hidden dirty files and retain shutdown services through final state persistence.
- Preserve concurrent local rule writes and recover owned MCP cleanup failures.
- Generate chat titles locally and disable built-in telemetry collectors.

### Verification and limits

Six of 42 acceptance stories are fully verified. Native Windows fixtures and
limited real GPT/DeepSeek/Grok requests are documented separately. Broader live
Agent/completion quality, retrieval, next-edit prediction, independent builds,
installers, remote development and native macOS/Linux checks remain unfinished.

See [release notes](docs/releases/0.2.0-preview.1.md),
[feature roadmap](docs/roadmap.md) and
[verification matrix](docs/release-claims.md). No GitHub Actions workflows run.
