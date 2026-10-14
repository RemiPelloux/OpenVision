# Changelog

## Unreleased

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
