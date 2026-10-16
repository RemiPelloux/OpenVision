# Demand-driven MCP startup

13 October 2026, Windows x64. Work toward OV-303 and OV-1003; neither story is
fully verified by this change. Account and hosted-agent exclusions are unchanged.

## Observed ownership and implementation

The recovered renderer connection owns a pending callback-channel map. Previously,
registering each callback also called `ensureConnection`, starting the MCP utility
before any server was needed. The connection already flushes that map when it
connects. OpenVision now queues callbacks and registers immediately only when a
connection is active. Requests, event subscriptions and raw connections still
start the service. Failed connections preserve callback registrations for retry.

A second startup path committed shared-process routing and migrated OAuth state
even when the native server list contained no eligible servers. The routing
contribution now defers that first commitment using the MCP service's existing
`getServers` and `isMcpProcessEligibleServer` contract. It unblocks extension
readiness without permanently disabling the gate. Existing OAuth callback demand
can still reach the service. Committed sessions keep their existing ownership;
removing the last server does not yet shut down the shared process.

Native testing exposed a missing wake-up: ordinary snapshot-backed servers do
not necessarily fire `onSettingsChanged` after connecting. The recovered service's
post-initialization refresh only includes certain provider servers. Routing now
also subscribes to its existing server-status event while uncommitted. Notifications
in the same turn coalesce into one microtask, and committed sessions do no further
eligibility scans from those events. Disposal removes the listener and pending
callbacks observe the contribution's disposed state.

The installer parses the owning classes, checks their method contracts, preserves
the first backup and is idempotent for both desktop and glass bundles. No feature
gate is forced off, and no model/profile data is changed.

## Static evidence

REA connection-owner evidence from prepared artifact slices:
`ev_205e803fb39758593114e23afd11de78458548a290c61c70841496c9ee2c4dd2`.
Two JavaScript files, 7,292 source bytes, 1,134 AST nodes. Dependencies are outside
the slice; semantic coverage is unknown.

REA routing-owner evidence from original readable artifact slices:
`ev_ca5a3bd022036def925edb19ad7575ccbb58a1ed194a2662c1ad2507565962aa`.
Summary evidence:
`ev_26c14e108c874d81ce65b3a36c434d136209bda2efb51c71e80a56afc1d7ad11`.
Two JavaScript files, 27,300 source bytes, 3,142 AST nodes, no parse failures;
application coverage is partial and semantic coverage is unknown. This is static
syntax evidence, not proof that a server ran.

| Original readable bundle | SHA-256 | Owner UTF-16 range, end exclusive |
| --- | --- | --- |
| desktop | `5a447679d1f3b98e7da3e90c7dc3afe733fd949006e326e798a79a6dd1f2de27` | 56,280,399–56,294,026 |
| glass | `dcb3467c1a2e223223559843683293f73e1a16751258002b94b5ad31fed0ef2d` | 68,395,166–68,408,793 |

Local extraction/provenance lives under `logs/rea-mcp-routing/`. Analysis excludes
dependencies and does not establish complete application or native-code recovery.

## Verification and remaining gates

`npm run test:mcp-lazy` exercises the exact recovered connection/routing classes
with controlled dependencies in both workbench variants: dormant registration,
first-demand coalescing, replacement during connect, failure/retry, reconnect,
subscriptions/raw ports, late server availability, batched status notifications,
migration failure/retry, callback forwarding, remote/disabled gates and disposal.
Those tests do not establish live OAuth behavior or a native glass session.

`npm run verify:agent -- --mcp` extends the native Agent workflow with an owned,
authenticated loopback HTTP MCP server. It records process presence before/after
configuration, protocol requests, discovery, approval/denial, tool continuations
and saved configuration after restart.
Real AI provider behavior remains separate from this deterministic fixture.

Windows run `logs/agent-verification-iMVNdf/result.json` passed late configuration:
zero MCP utilities before adding a server, one afterwards, authenticated initialize
and tools/list, native GetMcpTools with `serverStatus: ready`, denial with no server
execution, and approval with exactly one tools/call. Its unique real server marker
reached the model continuation. Both owned app hosts exited 0, with no renderer
page errors. Initial legacy discovery hands off once to shared-process discovery;
this is two initialization/list exchanges, not one exchange per callback channel.

Final expanded run `logs/agent-verification-KFZRPE/result.json` repeats those
checks and then fully restarts the app with the saved MCP configuration. The server
reconnects with the fixture Authorization header, one MCP utility is present, and
a fresh approval produces exactly one additional tools/call with the same real
marker in the continuation. All three owned app hosts exited 0; no renderer page
errors were recorded. The configured restart observed two initialize attempts
during transport handoff and one completed tools/list. Eliminating that initial
legacy-to-shared handoff remains a possible further optimization; tool execution
itself was not duplicated.

The expanded run pins workbench SHA-256
`ea450599160ec528deea0219c159db46ebd66e714527670afa53922aa8cfd7e5`, verifier
`4e85cc57e0c1834bbd22611e25a9e9f202325d56a544eaf076760007049f1121`, MCP fixture
`fdddfc5efa74ccf1c4dbada8611c11daaa1b773f8e6139094b1b4def42180454`, and HTTP server
`293a269499bf1d9b8d4c4aebf68b71bcee630625fb30d1ecbacf9a14b9245431`.
The desktop syntax/build checks, 78 existing desktop regressions, 12 MCP lifecycle
tests and two memory-sampler tests passed. API keys, profiles, logs and recovered
bundles remain local ignored artifacts.

The final no-MCP fixed workload also passes. See the
[performance comparison](../performance/native-performance-baseline.md#mcp-startup-comparison-13-october)
for all scope limits: one fewer idle process, no MCP utility in all eight snapshots,
and a settled sample 155.29 MiB lower in private committed memory. Startup, Stop,
request counts and request-byte sizes stayed within the recorded budgets.

Retained failed native runs `VwuNPA` and `a9InL4` connected through legacy transport
but did not wake shared-process routing; `2gDO0s` added temporary diagnostic logging
and confirmed the missing event. That diagnostic edit was restored before building
the final implementation. Failed records remain in local logs.
Run `SXBe8z` submitted Agent discovery before the utility finished hydration;
`CTTTew` confirmed discovery/denial but the verifier selected transcript text
instead of the active Run button. The verifier now waits for handoff discovery and
uses the active approval card's button. Neither failure was discarded as a pass.

Native STDIO Agent use, reconnect, timeouts, live OAuth/expiry, failed cleanup,
multi-window/profile behavior, long-session growth, disposal after last use and
native macOS/Linux/glass checks remain acceptance gates. The fixed 42-story
denominator and status claims are preserved.
