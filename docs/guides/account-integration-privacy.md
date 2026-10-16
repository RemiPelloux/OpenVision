# Account integration privacy scope

OpenVision's core telemetry controls do not establish that every independently installed extension sends no telemetry. The account integrations use the official Codex and Claude Code clients. Authentication, subscription checks and requested model inference require connections to those providers.

This review covers Codex extension **26.5730.61309** and Claude Code extension **2.1.300** on Windows, inspected on **2026-10-15**. Native verification covered installation, rendering, signed-out account status, cancellable login initiation, four account switches and a subsequent real Claude signed-in status with account identity. It did not capture and classify every connection from authenticated sessions or prove zero third-party telemetry.

| Component | Controls applied by OpenVision | Verified scope and remaining work |
| --- | --- | --- |
| OpenVision account helper | Codex app-server arguments set `analytics.enabled=false` and `feedback.enabled=false`. Claude child processes receive `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1`, `DISABLE_TELEMETRY=1` and `DO_NOT_TRACK=1`. | The process owner supplies these values and drains sensitive diagnostics without persisting them. Native signed-out status checks pass. Authenticated traffic classification remains open. |
| Codex official extension | New isolated account profiles contain `[analytics] enabled=false` and `[feedback] enabled=false`. The official extension reads the selected profile's configuration. | Its inspected analytics transport reads `analytics.enabled`. Its error-reporting client initializes separately, with its own transport. No supported extension-level switch disabling that independent error transport was established. Complete telemetry exclusion for this extension remains **unverified**. |
| Claude Code official extension and CLI | The extension host and child environments receive `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1`, `DISABLE_TELEMETRY=1` and `DO_NOT_TRACK=1`. | Official documentation says the umbrella control disables nonessential metrics, error reporting and surveys. Inspected extension code also checks host telemetry permission and these variables before its extension telemetry path. This is documentation and source evidence; a comprehensive native network test remains open. |

The [Codex configuration reference](https://developers.openai.com/codex/config-reference) distinguishes analytics from feedback reporting. Turning feedback off is not evidence that every extension error transport is disabled. OpenVision's own status/login helper enforces its analytics overrides; independently opened official panels follow their supported client configuration. Existing user-edited profile configuration is preserved.

**Delete account** cleans only the selected isolated profile after its extension
hosts disconnect. Conversation files are archived separately; credentials and
cache are not copied into that archive. An interrupted cleanup retains its
metadata for retry. The Windows native check used disposable profile fixtures,
not a real user's credentials. This does not revoke provider-side sessions, erase
shared third-party extension storage, or establish native macOS keychain cleanup.

The [Claude Code data-use documentation](https://code.claude.com/docs/en/data-usage) documents separate `DISABLE_TELEMETRY=1` and `DISABLE_ERROR_REPORTING=1` controls, plus `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` for the combined opt-out. The umbrella variable does **not** disable the WebFetch domain safety check or official marketplace auto-install. Those are separate product functions with separate controls; they should not be reported as telemetry removed by this setting.

To close the remaining privacy gate, observe the installed versions during signed-out startup, successful sign-in, account switching, an inference request, cancellation and a controlled error. Classify mandatory account/inference requests separately from usage metrics and diagnostic reports, and check each process and webview. Re-run that verification after official extension updates. Do not label the combined third-party integration “zero telemetry” before that evidence exists.
