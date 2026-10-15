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

## Executed checks

The focused run passed **32/32**, including the acceptance-denominator regression.
It exercises real loopback HTTP initialization, endpoint/header replacement,
browser-disconnect cancellation, disable/re-enable and deletion through public
control-plane routes. Real Node STDIO children verify argument/environment/cwd
replacement and observed old-child exit. Queue coverage uses a real disposable
config file with deliberately failed reconciliation and validation.

Failed-close manager tests deliberately replace `client.close` with a throwing
function. They verify registry retention and retry semantics; they do not
establish native cleanup-failure behavior. No live AI account or API was called.

Reproduce with `npm run test:mcp` and
`node --test desktop/feature-status.test.mjs`. The touched runtime is interpreted
Node code; no desktop bundle transformation is included in this change.

## Measurement

`node tooling/benchmark-mcp-http.mjs a9ebd69 manager-reuse` compared three
alternating repetitions on Windows x64, Node 24.18.0. Each temperature completed
20 sequential requests with 8 KiB fixture replies. Baseline:
`a9ebd69691b5eed10c702d3dd6b9014814bdca5a`.

| Median observation | Before | After |
| --- | ---: | ---: |
| First workload elapsed | 260.98 ms | 246.91 ms |
| Warm workload elapsed | 296.65 ms | 283.97 ms |
| First workload worker CPU | 298 ms | 31 ms |
| Warm workload worker CPU | 187 ms | 0 ms |
| Worker lifetime peak RSS | 78.22 MiB | 78.55 MiB |

Elapsed ranges overlap. CPU accounting is coarse; zero is not zero cost. RSS
includes startup, fixture and both workloads; it is not simultaneous process-family
memory. First is not a cold OS-cache run. Tokens, native desktop RAM and live
provider costs are unmeasured. **No speed or RAM improvement is established.**
The source-hashed local report is `logs/mcp-http-performance-T4rFVa/result.json`.

## Remaining gates

STDIO still uses readline without a maximum line budget. Its close path kills
the direct child and can resolve after a timer without confirmed exit; it does
not provide verified descendant ownership/cleanup. Those need the shared
process-supervision primitives before claiming reliable process-tree cleanup.
Concurrent tool admission against a previously read config snapshot is not
serialized with config mutations. These remain explicit follow-up work.

Native MCP multi-window/profile ownership, idle disposal, failed-close recovery,
long-session memory, remote transport and platform acceptance retain their own
gates. Current full-workbench startup is blocked as described in
[startup evidence](model-discovery-resources.md#full-app-startup-gate).
