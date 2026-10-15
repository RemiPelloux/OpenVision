# Control-plane MCP lifecycle

15 October 2026. This work concerns the optional Node control plane in `src/`,
not the desktop Agent's separate MCP implementation. It does not promote OV-303
or OV-1003. The acceptance ledger remains **6/42 Verified (14.29%)**.

## Implementation

The manager shares initialization, including the initialized-notification
acknowledgement, between simultaneous callers. Connection identity is owned by
one expansion function: HTTP URL and normalized headers, or STDIO command,
arguments, working directory and explicitly configured environment. A changed
definition closes the previous connection before replacement. Equivalent header
ordering reuses the connection; changed expanded credentials replace it.

Closing an older initialization cannot remove a newer map entry. A rejected
close retains its owner, blocks replacement and can be explicitly retried.
Shutdown stops manager admissions and attempts every registered close. Failed
shutdown cleanup is reported without forcing a successful process exit.

Saving server configuration and reconciling its connection now share the config
mutation queue. A later save cannot overtake an earlier reconciliation. A failed
reconciliation rejects its caller, leaves the persisted definition in place and
does not poison the queue. Deletion saves removal before cleanup and still
attempts cleanup when the definition is already absent, permitting retry.
Manager admission and cleanup helpers are private.

Configuration selection and synchronous connection admission now use that same
queue. Initialization and tool execution run outside it, so a stalled connection
does not lock later settings saves. Each pending admission retains one expanded
connection identity. Disable, delete, replacement and explicit close revoke stale
admissions, including those waiting for earlier cleanup; equivalent definitions
preserve them. Failed tools are never rerouted or replayed. This ordering covers
in-process config APIs, not external manual edits to the config file.

STDIO response framing now checks an 8 MiB encoded-byte budget before copying
or decoding an accumulated line. Oversize, malformed UTF-8/JSON and incomplete
EOF fail the connection and reject pending requests. A later caller connects a
fresh child after cleanup; failed tools are never replayed automatically. See
[STDIO resource evidence](control-plane-stdio-resources.md) for the recovered
parser comparison, boundary tests and scoped measurements.

## REA scope

REA re-examined the two retained original attempt-owner slices: **2,101 bytes,
343 AST nodes, no parse failures**. Parent Evidence:
`ev_50f058fd0be524e0b264aa4967e910ec92dc0cafb7f7c328cb3bd95e54715d2f`.
Their extraction provenance remains under ignored `logs/rea-mcp-attempt/`.
Source inspection shows cleanup promises cached by client identity and a catch
that logs cleanup failure without rethrowing. This is historical static evidence;
the desktop replacement is documented in [native MCP lifecycle](rea-mcp-lifecycle.md).

A semantic ownership query for `closePromises` returned **partial coverage with
zero seed matches**, not a proven ownership trace:
`ev_07be6488b81bcad7882a5113900d27a874fd072c3743bd08851866a6e184750c`.
Application coverage is partial and semantic completeness is unknown. The session
bundle is retained locally, not committed. This pass reuses known recovered
code; it does not claim newly recovered features or complete decompilation.

A new original transport-callback slice was examined separately: **4,667 derived
bytes, 630 AST nodes, no parse failures**. Parent Evidence:
`ev_8746204ea833bb42e7232713a2e1e8602daf441f76f5f3a3744339fa8b70aec7`.
The original artifact SHA-256 is
`ca2d339c535c8badb42a1ac9d0b2e29bd40e27207e9a46149f039f5b92d5af32`;
the method occupies UTF-16 range `[1879908, 1884546)` in that recovered file.
Source inspection finds generation guards on both error and close callbacks.
That supports stale-callback suppression, not config-admission serialization.
The exact method was wrapped in a synthetic class; dependencies were excluded.
REA reports partial application coverage and unknown semantic completeness,
including 132 semantic unknowns. Provenance and the exported session remain
ignored under `logs/rea-mcp-generation/`; no recovered source is committed.

## Executed checks

The latest focused run passed **51/51**, including the acceptance-denominator regression.
It exercises real loopback HTTP initialization, endpoint/header replacement,
browser-disconnect cancellation, disable/re-enable and deletion through public
control-plane routes. Real Node STDIO children verify argument/environment/cwd
replacement and observed old-child exit. Queue coverage uses a real disposable
config file with deliberately failed reconciliation and validation.
Real child-process failures cover oversized initialization, output overflow,
malformed JSON and incomplete EOF. The public route returns an explicit overflow
error and succeeds on the following healthy call.

New regressions cover stale admissions during held cleanup for disable, delete
and replacement, equivalent definitions during initialization, and expansion
captured before an environment change. Four targeted manager cases fail against
baseline `bec208f55c986d11defef622724708378decb3f9` and pass with this change.
Public routes also verify that disabling a server cancels unfinished
initialization without sending the tool, and that a new explicit call can work
after re-enabling. Controlled barriers force the interleavings; this is
control-plane verification, not native desktop acceptance.

Failed-close manager tests deliberately replace `client.close` with a throwing
function. They verify registry retention and retry semantics; they do not
establish native cleanup-failure behavior. No live AI account or API was called.

Reproduce with `npm run test:mcp` and
`node --test desktop/feature-status.test.mjs`. The touched runtime is interpreted
Node code; no desktop bundle transformation is included in this change.

## Measurement

`node tooling/benchmark-mcp-http.mjs bec208f manager-reuse` compared three
alternating repetitions on Windows x64, Node 24.18.0. Each temperature completed
20 sequential requests with 8 KiB fixture replies. Baseline:
`bec208f55c986d11defef622724708378decb3f9`. The final measurement ran without
the focused test suite running concurrently.

| Median observation | Before | After |
| --- | ---: | ---: |
| First workload elapsed | 268.68 ms | 252.12 ms |
| Warm workload elapsed | 268.26 ms | 283.61 ms |
| First workload worker CPU | 47 ms | 47 ms |
| Warm workload worker CPU | 0 ms | 0 ms |
| Worker lifetime peak RSS | 78.38 MiB | 78.06 MiB |

Elapsed ranges overlap. CPU accounting is coarse; zero is not zero cost. RSS
includes startup, fixture and both workloads; it is not simultaneous process-family
memory. First is not a cold OS-cache run. Tokens, native desktop RAM and live
provider costs are unmeasured. **No speed or RAM improvement is established.**
The source-hashed local report is `logs/mcp-http-performance-m9Zihd/result.json`.

## Remaining gates

The STDIO close path kills the direct child and can resolve after a timer
without confirmed exit; it does
not provide verified descendant ownership/cleanup. Those need the shared
process-supervision primitives before claiming reliable process-tree cleanup.

Native MCP multi-window/profile ownership, idle disposal, failed-close recovery,
long-session memory, remote transport and platform acceptance retain their own
gates. Current full-workbench startup is blocked as described in
[startup evidence](model-discovery-resources.md#full-app-startup-gate).
