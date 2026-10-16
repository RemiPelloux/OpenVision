# ChatGPT, Claude and first-launch setup

This guide describes the editable source build and preview.7 Windows portable
package. The [package report](../verification/portable-preview7.md) separates
packaging checks from the real-account evidence below.

Open **Settings → Models & integrations**. Account integrations and custom API
providers have separate sections using your editor's theme. **Run setup again**
reopens the optional first-launch guide; skipping setup keeps the local editor usable.

## Connect an account

1. Choose **Add account** under ChatGPT or Claude and enter a recognizable name.
2. Choose **Sign in**. First-time setup installs the official Codex or Claude Code
   extension from its verified registry publisher and checks the download checksum.
3. Complete the provider's browser sign-in. Codex keeps its official callback
   listener alive until completion or cancellation. If Claude asks for a one-time
   code, paste the code from its official page into OpenVision's code prompt.
4. Choose the account's model in the **Agent** model picker, or open its official
   **Codex** / **Claude Code** panel. Account groups show the returned email.

Sign-in opens the system browser directly for validated official HTTPS sign-in
destinations. It does not require an additional Trusted Domains confirmation.
Other external links retain their normal checks. If an older running window
reports `openvision.accounts.openBrowser` is missing after updating the source
build, close and reopen OpenVision to load the matching renderer and main process.

The account card displays the email returned by the official client. A local
profile name is only a label, not evidence of a signed-in identity. Codex's model
list comes from its official app-server. OpenVision offers only GPT-6 Codex account
models actually advertised by that server; older models and opaque aliases are
excluded. If none are available, settings explains the limitation. Claude's model
catalog and reasoning choices come from its official client. Entitlements and
available models depend on the account.

Account subscriptions use their official clients through an authenticated,
temporary loopback bridge. Agent chat supports streaming text and the existing
OpenVision tools: file reads, edits and approvals stay in OpenVision. The official
clients' built-in shell and editing tools are disabled for these requests.
Subscription credentials are not copied into the custom API-key store. The local
bridge URL and its random bearer token remain in memory. Tab autocomplete continues
to use configured API providers.

Account Agent support is experimental. Images are not supported. Prior messages
are supplied as quoted conversation history rather than replayed as native
official-client turns. Pending tool results resume their owned official-client
process. Switching accounts invalidates that connection; finish or cancel active
work first. Requests are bounded to four active sessions, 16 MiB input, 4 MiB
output and a two-minute idle timeout. Cancellation releases the client.

## Account usage

The bottom bar shows usage for the selected Codex and Claude accounts in this
window. Percentages mean **used**, not remaining. Click for window labels, reset
times, last-check time, refresh and account controls. Checks share in-flight work,
cache for five minutes and pause periodic refresh while the window is unfocused.
Manual checks are limited to once every 30 seconds. Usage checks do not submit
an inference request. When an official client supplies no quota data, the label
says **Usage unavailable**; OpenVision does not estimate account limits.

## Change accounts

Use the account selector in Models & integrations. Each account has a separate
local credential directory; Codex and Claude selections are independent. The
handoff reconnects extension processes without restarting the application or
replacing the project window. Extensions can briefly reconnect during the switch.
Finish or cancel active agent work before switching.

The selector reports the account actually observed in this window's extension
host. Other already-open windows retain their running connections; a new host
uses the saved selection. A failed handoff is shown as an error, not as a
successful account change.

Preparation no longer waits indefinitely for an extension-host handoff. A
15-second UI deadline reports a reconnect failure while preserving the saved
profile and retaining ownership of the original operation. This prevents
overlapping restarts. If prompted, reload OpenVision to recover the connection.
The build also repairs the recovered worker bootstrap's script hash so its
content-security policy permits the worker to start without weakening the policy.

Account cards use full-width rows, consistent spacing and controls that wrap
within the available settings width. The Add account dialog supports Enter and
shows validation errors. In setup, the content scrolls while navigation remains
visible; reduced-motion preferences disable entrance animations.
Settings and dialogs use readable theme text colors rather than dim description
colors for essential labels and account controls.

## Delete an account

Select its profile and choose **Delete account**. Confirm the named profile to
disconnect it, remove its isolated credentials and cache, and remove its saved
account entry. The project window stays open. This removes the local OpenVision
profile, not the provider's remote account or a separate external CLI login.

Conversation files are moved under the active OpenVision data directory to
`openvision-accounts/history/<provider>/<profile-id>/`. Codex retains `sessions`,
`archived_sessions` and `history.jsonl`; Claude retains `projects` and
`history.jsonl`, when present. This is a raw local archive; automatic restoration
or indexing into a different account is not implemented. Other extensions' shared
storage is outside the isolated profile cleanup.

If another window still uses the account, deletion stops before cleanup. Switch
that window to **Disconnected** or another profile, then retry. Interrupted
cleanup keeps the account listed for recovery; choose **Delete account** again.
Conflicting history copies and linked history folders stop cleanup to preserve
the files. A disconnected integration uses an empty isolated directory rather
than falling back to a different login on the computer.

## Storage and privacy

Profiles live under the active OpenVision data directory in
`openvision-accounts/`. `profiles.json` contains local labels, opaque identifiers
and selections. Changes are serialized and keep a previous-file backup. The
official clients own credentials inside the individual account directories.
Do not commit or share this directory.

Authentication subprocesses are bounded and cancelled when their owner shuts
down. Browser URLs, callback parameters and one-time codes are not written to
OpenVision's account metadata. No additional AI request generates a profile name.
Status checks share in-flight work and cache results briefly; explicit Refresh
requests fresh status.

OpenVision disables built-in telemetry. Official account clients receive
supported analytics/nonessential-traffic opt-outs. Independently installed
extensions have their own networking; this does not establish a complete
zero-telemetry guarantee for those third-party integrations. The
[privacy scope](account-integration-privacy.md) records the inspected client
versions and the remaining Codex extension error-reporting gap.

## Verification limits

The account picker follows the editor theme rather than the operating system's
native select menu. Saved profiles appear first, with a checkmark for the current
profile and a separate Disconnected option. Long labels truncate visually;
account controls wrap on narrow panels. Use arrow keys, Home/End or typing to
find a profile, Enter to switch, and Escape to close without switching.

The picker was checked in dark/light browser layouts and the built Windows app
with disposable local profiles. Native checks verified persisted switching,
Escape/focus recovery and cancelling deletion. These checks do not perform
OAuth or inference.

Windows checks cover real official-extension installation and visible panel
rendering. Real official clients have returned signed-out status, started Codex
authorization and its local listener, and emitted Claude's browser/code flow.
The normal-profile Claude client subsequently returned signed-in status and an
account email after browser sign-in. Cancellation was exercised. Four native
profile switches after dynamic installation of Codex 26.5730.61309 and Claude Code
2.1.300 retained the same
process/window, unsaved editor text and unchanged disk content. The final UI
handoff check reported no exposed transient cancellation. First-launch setup,
persistence across relaunch and Settings replay passed with no renderer errors.
Both real clients opened the actual system browser without a Trusted Domains
dialog and waited for user completion. Native Windows deletion checks with both
official extensions installed removed disposable credential/cache fixtures,
preserved conversation fixtures and retained the main process. A second window
using an account blocked deletion until disconnected. The normal settings screen
and deletion confirmation were inspected without deleting a real account.

After merging Linux support, the focused account/settings/setup suite passed
49 tests on Windows, and the wider desktop suite passed 124 tests with two
concurrent test workers and the complete recovery explicitly selected through
`OPENVISION_RECOVERY_DIR`. The production source build, desktop JavaScript syntax
checks and native account-picker verification also passed. Browser fixtures use
the platform browser helper; account native verifiers use the Linux sandbox
argument helper. This wiring does not establish native Linux account verification.
Controlled tests cover opener failure, cancellation, handoff timeout,
display-data filtering and UI behavior; these tests do not establish OAuth success.

Real Windows checks on October 15, 2026 used the existing signed-in profiles.
Claude Sonnet read and edited a disposable JavaScript file through the native
OpenVision Agent, preserved a random verification comment and returned that
comment in its reply. The edit was checked on disk. Codex's official rate-limit
API returned quota windows. Claude's usage operation returned no usable quota
windows, which the UI reported as unavailable.

The installed Codex extension 26.5730.61309 / CLI 0.147.0 was checked against the
current registry version. Its refreshed account catalog offered no GPT-6 models.
A real `gpt-6.1-sol` request was rejected with “The 'gpt-6.1-sol' model is not
supported when using Codex with a ChatGPT account.” OpenVision does not relabel
older models or silently fall back. GPT-6 API providers are separate connections.
A native Agent request using the saved Codex Easy `gpt-6.1-sol` connection
reached its configured endpoint but returned HTTP 403 `INSUFFICIENT_BALANCE`.
GPT-6 file-edit verification through that connection remains blocked by the
provider balance; it is not reported as a successful inference test.

The latest Windows account suite passed all 67 tests from `test:accounts`;
desktop syntax checks and the source build also passed after the
[routing and stream performance fixes](../performance/account-performance.md). The earlier
portable suite passed 30 tests with one skipped. These controlled suites and build checks are
separate from the real-provider runs above. Native inspection of the rebuilt
app confirmed the Claude account group, GPT-6 API choices, absence of older
Codex choices and the no-GPT-6 account notice. Preview.7 packages these runtime
changes; [package checks](../verification/portable-preview7.md) do not repeat
real account sign-in or establish new account entitlements.

Switching during active agent work and native macOS/Linux behavior still need
verification. Native system-keychain cleanup is not verified on macOS. This
feature does not change the 42-story acceptance denominator. Controlled transport
tests cover cancellation, capacity, tool continuation and account/model isolation;
they do not establish real-provider behavior.

Official references: [Codex authentication](https://developers.openai.com/codex/auth/),
[Codex app-server](https://developers.openai.com/codex/app-server/),
[Claude Code authentication](https://code.claude.com/docs/en/authentication),
[Claude Code IDE integration](https://code.claude.com/docs/en/vs-code).
