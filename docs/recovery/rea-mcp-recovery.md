# MCP disconnect and timeout recovery

13 October 2026. Native Windows verification now injects two failures through
actual HTTP and STDIO MCP transports: a connection closes after receiving a tool
call, and a tool remains pending until the production idle timeout. Each failed
operation must reach the Agent continuation as an error, execute exactly once,
and allow a later, separately approved operation to succeed. No API keys or
external inference are used. The normal user profile is not modified.

## Defect and fix

`logs/agent-verification-3zsags/result.json` reproduced a STDIO defect: the failed
call returned `Connection closed`, but the next approved call returned
`Not connected` without reaching any server. The native connection manager's
`getReadyAdapter` treated an entry in its adapter map as ready even when the
lifecycle had already recorded the transport as closed.

`desktop/mcp-reconnect-customization.mjs` corrects readiness at that owning
boundary. A new operation on a closed STDIO lifecycle starts its existing
connection workflow and waits for its connection promise. Concurrent callers
wait for the same workflow. The manager checks lifecycle identity, connected
state and the new transport before releasing an adapter to consumers. Failed
reconnection and removal cannot release the retained stale adapter. The tool
that encountered the original disconnect is not replayed.

The patch uses the existing native connection lifecycle, including its cleanup,
configuration, authentication and callback ownership. It adds no background
retry loop. HTTP retry behavior and the production two-minute idle timeout are
unchanged. Remote/legacy adapters remain outside this change.

Original readiness, connect, connection-promise and transport-callback slices
are retained with UTF-16 ranges and digests in `logs/rea-mcp-readiness/`.
REA parent Evidence:
`ev_1a1de492b4d27db302c2fd61d1afc23939f8861acb95328854824f3be840dee3`.
Four slices parsed, 5,578 bytes and 685 AST nodes. Application coverage is partial
and semantic completeness unknown; this is static evidence, not execution proof.

## Verification workflow

Run these commands from the prepared OpenVision folder:

```sh
npm run test:mcp-lazy
npm run verify:agent -- --mcp --mcp-failures
npm run verify:agent -- --mcp-stdio --mcp-failures
```

Each native failure run takes several minutes because it exercises the actual
idle timeout. The fixtures retain request identities, cancellations, model
continuations, screenshots, executable/bundle hashes and host shutdown results
under ignored `logs/agent-verification-*` directories. STDIO cleanup uses retained
authenticated control connections; recorded PIDs are only checked for absence.

Pre-fix HTTP run `WF7EBW` passed: disconnect produced `fetch failed`, timeout
produced `MCP error -32001: Request timed out`, and each executed once. The timeout
flow completed in 121,390 ms including approval and continuation. Its cancellation
notification released the pending request. Later approved calls and full app
restart passed; three owned hosts exited 0. This run precedes the STDIO readiness
fix and must not be presented as evidence for that final utility bundle.

Post-fix STDIO run `05RlSY` passed disconnect recovery, timeout cancellation,
subsequent calls and configured restart. Stop reached the server in 166 ms;
the timeout flow completed in 121,660 ms including approval and continuation.
The retained full request trace contains exactly one disconnect call and one
timeout call, including after restart. All five recorded child PIDs were absent
after shutdown and all three owned hosts exited 0, with no renderer errors.
The utility hash is
`313c4dcb16099ed50752d3aaa46b7f669dee9d28dfd4a865059dd08e6748abaf`;
workbench hash is
`1ed4616e8b6935b8322fca99b17872feec7e6015604c9caa9b09b05bae5e805a`.
The verifier was subsequently strengthened to assert the complete request-trace
counts automatically; the same invariant was checked in this retained record.
These timings are individual observations, not benchmark guarantees.

Final HTTP run `uRugGI` uses the same final utility and workbench hashes above.
It passes disconnect, timeout, subsequent-call and full-restart checks, including
the complete-trace no-replay assertions. Stop reached the server in 134 ms and
the timeout flow completed in 121,888 ms. Both Stop and timeout produced real
cancellation notifications. All three owned hosts exited 0 with no renderer
errors. This verifies the scoped Windows HTTP regression after the STDIO fix.

The owner-boundary tests reproduce the original stale-adapter behavior and check
shared reconnect work, failed reconnect, lifecycle removal and unchanged HTTP
handling. They supplement native evidence; they do not establish server/provider
parity. The 27 MCP regression tests, feature-denominator check, desktop syntax
checks and production build pass. OAuth, native cleanup failures, multi-window
ownership, long-session growth and macOS/Linux remain open. OV-303 and OV-1003
remain Partial; the accepted denominator stays at 42 stories with three fully
Verified.

## Linux x64 rerun (19 October 2026)

Same environment as the [Linux lifecycle rerun](rea-mcp-lifecycle.md#linux-x64-rerun-19-october-2026):

```sh
npm run verify:agent -- --mcp --mcp-failures
npm run verify:agent -- --mcp-stdio --mcp-failures
```

| Run (`logs/agent-verification-…`) | Transport | Result |
| --- | --- | --- |
| `@@agent-mcp-failures@@` | HTTP | @@agent-mcp-failures-result@@ |
| `@@agent-mcp-stdio-failures@@` | STDIO | @@agent-mcp-stdio-failures-result@@ |

Both runs cover denial with **Skip**, Stop through the shared utility, real
output, a disconnect during a call, and the production two-minute idle timeout.
Each failed call executes exactly once: the complete-trace assertion fails if
`disconnect` or `timeout` reaches the server twice. Later separately approved
calls succeed, and a full restart is followed by another approved call. The
timeout flow includes approval and the continuation, so it exceeds 120 s.

Interim builds on the same branch also passed both variants: `kHPQVp` (HTTP,
Stop 298 ms, timeout flow 128,410 ms) and `BPNzSJ` (STDIO, Stop 275 ms,
timeout flow 127,910 ms, all child PIDs absent). They precede the routing-reset
fix and are superseded by the final-build runs above.

