# Changelog

## Unreleased

- Release native utility-process listeners after exit instead of retaining each completed run. Keep process ownership until actual termination, including failed kills. Real Windows fork/restart/kill/window-close checks pass; [evidence and remaining RAM work](docs/engineering/utility-process-ownership.md). Source build only.
- Preserve model-route caches across unchanged account refreshes and apply a 30-second automatic cooldown after account-host failures; explicit Refresh remains immediate. Remove duplicate streamed text/reasoning retention and clear output references on close. See [controlled before/after measurements](docs/performance/account-performance.md) and remaining whole-app RAM checks.
- Defer local Explorer startup until workbench restoration. Native Windows startup, editor reload and same-window project switching pass; restoring the old lifecycle reproduces the original error. See [startup evidence](docs/engineering/local-startup.md). These source changes do not refresh the preview.6 payload.

- Skip hosted conversation-metadata contribution registration in local mode, avoiding its dependencies, watchers and client calls. Native Windows title/history restart verification passes with controlled inference; broader traffic and platform gates remain open. See [metadata ownership](docs/engineering/local-conversation-metadata.md).
- Add experimental signed-in Claude/Codex models to Agent, account usage in the bottom bar and GPT-6-only Codex account choices. Real Claude file editing passed; the tested Codex account offered no GPT-6 models and the separate GPT-6 API check was blocked by provider balance. See [account evidence](docs/guides/account-integrations.md#verification-limits).
- Verify native MCP HTTP session-expiry and direct session-reinitialization recovery with retained failed-close ownership and no automatic replay of the failed tool.
- Verify native Agent MCP approval, shared STDIO ownership across two project windows, isolated same-named servers in separate user-data directories and recorded child shutdown. Broader profile/configuration ownership and logged startup diagnostics remain open.
- Align the README, verification matrix and complexity-point roadmap with these source additions. They do not refresh the preview.6 portable payload or increase the fixed 6/42 verified-story count.
- Replace the account selector's unreadable system menu with an editor-themed, keyboard-accessible list and a separate Disconnected option.
- Improve account-control spacing, narrow-panel wrapping and focus recovery after switching; close open menus when refreshing or leaving onboarding.
- Run OpenVision natively on Linux x64: `npm run prepare:desktop` downloads the pinned Cursor 3.21.13 AppImage, verifies its SHA-256 and recovers readable sources; `npm start` builds and launches. See the [Linux guide](docs/guides/linux.md).
- Add `npm run package:linux` with an `./OpenVision` launcher and an optional desktop entry.
- Store API keys in the desktop keyring (Secret Service) on desktops Chromium does not recognize, such as Hyprland, Sway and i3, instead of the plaintext `basic_text` fallback; keep KDE, explicit choices and keyring-less systems unchanged. Add `npm run verify:linux-secrets`.
- Keep Agent commands approval-first on Linux instead of auto-running them in the upstream command sandbox.
- Fix Linux profiles being redirected by portable-mode detection, the `cursor.desktop` window identity, and a launch-argument bug where `--disable-setuid-sandbox` swallowed the following folder path.
- Recover every application script in readable form during preparation, reject mismatched input versions with a clear message, and make native verifiers platform-aware (POSIX write denial, bash/sh terminals, Linux paths, layout-independent shortcuts, Project Home startup). See [Linux verification](docs/verification/linux-verification.md).

## 0.2.0-preview.6 — 2026-10-14

- Open recent projects, folders, saved workspaces and completed clones in the current window; focus projects that are already open.
- Preserve native unsaved-file prompts and cancel a project switch without losing editor contents.
- Carry the reuse request through native folder/workspace pickers and route the startup screen into the editor in place.
- Verify real Codex Easy Stop and same-chat resubmission for GPT 6.1 Sol, DeepSeek V4 Flash and Grok 4.7 at Provider default. This establishes client transport closure, not upstream compute/billing cancellation.
- Distinguish Windows launcher exits from native main-process shutdown evidence; retain the earlier unexplained exit 134.
- Refresh the complete Windows portable download, offline repository payload, documentation and roadmap with complexity points. See [release scope](docs/releases/0.2.0-preview.6.md).

## 0.2.0-preview.5 — 2026-10-14

- Simplify Project Home and cloning to match the selected editor theme, with compact controls and a monochrome eye.
- Replace fixed green accents in home, clone, profile and model settings with native theme colors.
- Add a Color theme shortcut on Project Home and Appearance settings in the local profile menu.
- Document theme choices and custom colors, fonts and icons in the [appearance guide](docs/guides/appearance.md).

## 0.2.0-preview.4 — 2026-10-14

- Fix Project Home cloning with a direct repository URL form, destination selection and explicit opening of successful checkouts.
- Add keyboard focus, validation, cancellation and compact layout checks; verify real local and public HTTPS Git operations.
- Bound MCP cleanup acknowledgements without releasing unresolved resource ownership; isolate diagnostic logger failures from cleanup bookkeeping.
- Remove exact duplicate Quick Edit attachments from outbound context while retaining distinct source values and enforcing the original input budget.
- Exercise real self-signed TLS rejection and manual provider retry in native Windows verification.
- Refresh the complete Windows portable download and offline repository payload. See [release scope](docs/releases/0.2.0-preview.4.md).

## 0.2.0-preview.3 — 2026-10-14

- Add Project Home with searchable recent projects, saved favorites, open-window focus and bounded lists.
- Route native Quick Edit through the selected custom provider, model and reasoning setting, with cancellation and native diff review.
- Explain DNS, refused connections and TLS failures using structured transport errors while preserving manual retry control.
- Import settings into the active default profile and selected extension directory; preserve exact backups and avoid registry casing changes that blocked restore.
- Extend local verification with cross-window memory review and large-project watcher workloads. Evidence and remaining gates are recorded in the [roadmap](docs/planning/roadmap.md).
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
[feature roadmap](docs/planning/roadmap.md) and
[verification matrix](docs/verification/release-claims.md). No GitHub Actions workflows run.
