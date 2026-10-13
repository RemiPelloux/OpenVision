# Built-in telemetry removal

Updated: 2026-10-13. Scope: the locally recovered desktop build and its bundled
extensions. This is a telemetry implementation audit, not a claim of complete
decompilation or original-product parity.

## Implemented boundaries

The build patches 13 distinct recovered JavaScript files before regenerating
extension integrity metadata. Original files are backed up under ignored
`backups/telemetry/` and `backups/telemetry-extensions/`. Changes to product/profile
configuration preserve unrelated values and have backups.

| Boundary | Change |
| --- | --- |
| Main, desktop/glass renderers, shared/MCP utility processes, both extension hosts | Sentry initializers removed; state stays disabled, cannot retain events or replace its inert transport; embedded telemetry DSNs removed. |
| Core telemetry services, including command-line process | No appenders, configuration listeners, payload collection, auth registration, experiment properties, usage/error logging, or telemetry enablement. |
| Main tracing and tray | Envelope sending, tracing configuration, crash watchers, diagnostic uploads, profiles and tray analytics disabled. Electron crash reporter startup and its enablement updater removed. |
| Desktop and glass workbench | Analytics, metrics, performance events, continuous profiling, memory/CPU monitors, editor/terminal/browser history telemetry, client-log uploads and tracing-configuration polling have inert constructors and methods. No timers, event subscriptions, providers or queues are initialized by these owners. |
| Extension API | Telemetry enablement always false. Senders discarded; logging, metrics, event collection and analytics registrations are inert. |
| Agent host, daemon and always-local extension | Metric collectors/flushers disabled. Structured diagnostics stay in local logs; upload scheduling and transports disabled. |
| Autocomplete | Edit-history recording and upload methods disabled. The completion request/stream implementation remains covered by its existing tests. |
| Retrieval | Codebase/Git snapshot telemetry never registers or starts. |
| JavaScript debugger | Reporting and remote experimentation disabled; debug launch implementation preserved. |
| Product, launch and settings import | Usage/error/crash telemetry off; telemetry product configuration and Statsig proxy/key removed. The Statsig owner selects its existing disabled-logging/no-network configuration when the proxy is absent. Imported preferences cannot re-enable telemetry. |

Implementation owners: `desktop/telemetry-core.mjs`, `telemetry-workbench.mjs`,
`telemetry-extensions.mjs`, `telemetry-settings.mjs` and
`telemetry-customization.mjs`. These modify recovered implementations at their
collection/transport boundaries. Bundled unused SDK definitions and protocol
schemas may still contain telemetry names; string deletion is not the acceptance
criterion. New recovery versions must pass the owner/method contracts and tests.

## Evidence and validation

**Static derivation:** AST-selected classes/functions from actual recovered
bundles establish the identified collection and upload paths. The regression
tests execute transformed recovered classes with dependencies, payloads, clocks,
timers and transports that throw if touched. They verify inert behavior, resource
disposal, repeated transformations, and refusal of missing owner contracts.
This evidence is source inspection plus isolated execution, not observation of
every production call path. No new native-decompilation coverage is claimed.

Local verification with Node 24.18.0:

- 24 telemetry tests pass without skips.
- 64 desktop tests pass, including provider/model reasoning, Agent cancellation,
  autocomplete, stream handling, extension integrity and persistent local rules.
- 23 portable/import tests pass; one macOS-only execution test is skipped on Windows.
- Four MCP tests and the control-plane smoke test pass.
- Source and desktop syntax checks pass. All eight transformed core process bundles
  also pass syntax validation.
- The desktop build succeeds; a repeat build preserves all eight core bundle hashes.

**Observed native Windows execution:** `npm run verify:telemetry` launches an owned
OpenVision process using a fresh test profile, opens and saves an edit to `hello.js`,
and observes 65 seconds of startup/editing. The runtime resolves to editable `source/app` through
the host's resource link. Main-process crash uploads and Sentry are false; renderer
Sentry stays false after an attempted enablement, its buffer remains empty, and
profile sampling is zero. The editor renders; no unhandled page-error events were
observed. This is not a complete Agent, debugger, or model-inference runtime test.

The successful run is retained locally at
`logs/telemetry-verification-CxvZs3/result.json`, with `editor.png` and
`chromium-netlog.json`. No telemetry URL matched the check. The only HTTP URL in
that Chromium capture was the extension-control metadata endpoint
`https://api2.cursor.sh/extensions-control`, which is not a telemetry submission.
The check is not an offline-mode guarantee.

Local application logs still contain onboarding, missing remote-tunnel setup,
MCP authentication, browser-integration and shutdown diagnostics. The telemetry
change preserves local diagnostics; a clean page-error list does not mean every
subsystem initialized successfully.

## Assurance limits and remaining work

- Chromium net logging and renderer request events do not exhaustively capture
  Node child-process sockets, native addons, or all workloads. A process-tree
  network trace across Agent, autocomplete, debugger, terminal and long idle runs
  is needed for broader runtime assurance.
- User-installed extensions and configured MCP servers can implement independent
  networking. Their traffic is outside the built-in telemetry owners patched here.
- Configured model/API traffic intentionally remains functional. The no-telemetry
  policy does not replace each provider's own data-retention policy.
- macOS/Linux native execution of these changes remains unverified.
- Existing running processes retain previously loaded code until restarted.

No universal “100% telemetry-free” percentage is assigned from this bounded audit.
The identified built-in collectors and upload paths are disabled and covered by
tests; the wider runtime assurance work remains explicit.
