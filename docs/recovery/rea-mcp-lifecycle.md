# MCP cancellation and transport ownership

13 October 2026. Follow-up to [MCP startup](rea-mcp-startup.md), covering native
Windows x64 Agent tools over HTTP and STDIO. These checks use real local MCP
servers and a deterministic AI fixture; they do not establish live AI-provider
compatibility or complete MCP feature parity.

## Defects and implementation

An abandoned connection attempt could close its client before a transport was
attached. The recovered owner cached that completed close by client identity, so
a later transport reused the old promise and its STDIO child stayed alive until
application shutdown. The replacement caches by the captured transport, coalesces
concurrent closes, and retains failed resources and their owners for later retry.
It applies to the MCP utility and extension owners. Failed cleanup is logged;
there is no automatic retry timer, and native failed-cleanup recovery remains open.

The shared renderer client also raced cancellation against its local wait without
canceling the RPC. Generic service proxies discarded IPC cancellation tokens.
The named `callTool` adapter now carries the token across IPC, converts it to an
AbortSignal in the utility, and forwards it through the connection manager to the
SDK request. Success, failure and cancellation release the token subscription.
Unrelated methods keep their existing channel behavior. Legacy and remote tool
routes have not been covered by this cancellation change.

Both transformations validate recovered owner contracts, preserve the first
backup, and are idempotent. No user configuration or credentials are changed.

## Source evidence

Original attempt-owner slices and provenance are retained under
`logs/rea-mcp-attempt/`. REA parent Evidence:
`ev_720efe0033846f5179002d75d34b512bbeb6e740a2d6111bd3a512db32caec8d`.
Two parsed slices contain 2,101 bytes and 343 AST nodes. Original utility digest:
`ad93ef1eda7be6a4d8b25bb73ecdfebcaf82e7dad2bfdd27569f0b8e781d3981`;
original extension digest:
`ca2d339c535c8badb42a1ac9d0b2e29bd40e27207e9a46149f039f5b92d5af32`.

Cancellation slices and provenance are under `logs/rea-mcp-cancellation/`.
REA parent Evidence:
`ev_946598489085185acf7d77dc02afa12fc3a8513bdc9c4bad26afcb5e457a7ea1`.
Five parsed slices contain 6,881 bytes and 996 AST nodes. These are selected
owner/method observations, with partial application coverage and unknown semantic
completeness. External dependencies and complete application behavior are not
proven by this static analysis.

## Native observations

`npm run verify:agent -- --mcp-stdio` verifies late configuration, actual native
discovery, approval/denial, unique tool output reaching the AI continuation, Stop
reaching the server, a successful call after Stop, full application restart, and
another approved call. It requires one active STDIO child after transport handoff.
Shutdown checks authenticated fixture connections and read-only PID absence;
cleanup never uses a PID as termination authority.

Final STDIO record: `logs/agent-verification-gaMi5I/result.json`. Stop reached the
server in **111 ms**. Retired startup/restart connections closed after 9/334 ms.
All four recorded child PIDs were absent after shutdown; all three owned hosts
exited 0, with no renderer errors. The result pins the host, workbench, MCP utility,
extension and fixture digests. MCP utility:
`0c30ee042e711515a2cca1138c57e25426ee221afd005543224946c5ece0e917`;
extension: `52834116fb4f72c1e9a3fabbfe9cbd3059afae4ec635feda6c7f011067ac9da8`.

The HTTP workflow uses `npm run verify:agent -- --mcp` and checks the same approval,
execution, cancellation, subsequent-call and restart behavior. Earlier HTTP record
`logs/agent-verification-upVWVJ/result.json` passed with **121 ms** Stop and a real
`notifications/cancelled` observation. Earlier STDIO record `N0jNxG` passed at
132 ms. Those earlier records did not explicitly pin the MCP utility/extension
digests; the final verifier adds both identities rather than retroactively
claiming they were recorded.

Final HTTP record `logs/agent-verification-7xrulh/result.json` pins both MCP
digests above and workbench
`1ed4616e8b6935b8322fca99b17872feec7e6015604c9caa9b09b05bae5e805a`.
The full native workflow passes with **144 ms** Stop, a cancellation notification,
successful calls after Stop and restart, no renderer errors, and three owned
hosts exiting 0. These are individual latency observations, not a benchmark claim.

Retained failures: `x0TEyB` exposed abandoned STDIO children and an incorrect
two-tools/list harness assumption; `lxdfhu` confirmed cleanup but showed that Stop
did not reach the server. They motivated the two product fixes above.
Final-validation harness failures `cgedcZ`, `DD17i9` and `0Cp0q0` exposed an
ambiguous command-approval text selector, then an incorrect assumption that shell
approval shared MCP's container marker. The verifier now requires exactly one
visible native button with the observed role/name; it retains the accessibility
snapshot. Final HTTP execution verifies deny, allow and Stop with that selector.

## Checks and remaining gates

The 24 MCP owner/channel tests and 80 desktop regression tests pass. Native
fixture success does not close OV-303 or OV-1003. Reconnect after unexpected
transport failure, timeouts, native failed cleanup, OAuth, multi-window ownership,
idle utility disposal, long-session growth, remote paths and other platforms
still need evidence. The accepted denominator remains 42 stories, with three
fully Verified stories.

Follow-up: [MCP disconnect and timeout recovery](rea-mcp-recovery.md) records
the expanded native failure scenarios and the subsequent STDIO readiness fix.
Use that report for the later build's hashes and outcomes; the records above
remain evidence for their original builds.
