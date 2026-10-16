# Control-plane HTTP resource ownership

15 October 2026. This change concerns the optional Node control plane in
`src/server.mjs` and `src/mcp.mjs`, not the native editor's Agent/MCP owner.
OV-303/1001/1003 remain Partial; the acceptance score remains **6/42 Verified**.
The published preview.6 payload is unchanged.

## Root causes and changes

Previously, an MCP deadline rejected its pending promise without aborting the
HTTP signal. The response body could continue consuming resources. Each request
now owns a cancellation controller joined with caller and client-close signals.
Timeout, caller cancellation, client close and completion release the request's
actual transport and pending-record listeners/timer.

HTTP errors previously read the entire decompressed body before slicing the
diagnostic to 512 characters. Successful JSON/SSE replies also accumulated without
a bound, and SSE waited for EOF even after receiving its matching response.
The [response owner](../../src/mcp-http-response.mjs) now parses incrementally:

| Boundary | Policy |
| --- | --- |
| Successful JSON or SSE response | At most 8 MiB decoded bytes, including ignored SSE events; overflow fails explicitly without silently truncating tool results |
| HTTP error body | At most 64 KiB decoded bytes; diagnostic text retains at most 512 characters plus status/failure details |
| SSE dispatch | Handle UTF-8, multiline data and CR/LF/CRLF; ignore notifications/unrelated IDs; complete and cancel the stream after the matching JSON-RPC reply |
| Invalid/incomplete reply | Reject malformed JSON, wrong JSON response ID, unsupported content type or EOF without a dispatched matching SSE event |
| Notification acknowledgement | Cancel an unexpected successful body; a stalled acknowledgement still obeys the client deadline |

Byte limits apply after HTTP decompression and before decoding/retention. They
bound body processing, not transport chunk allocation, parsed-object expansion or
total process RAM. Legitimate replies larger than 8 MiB now fail; use a server's
paging/tool-specific retrieval where available. This is an explicit resource
policy change, not full large-result protocol parity.

The public tool-call route previously watched the incoming request's close event
after consuming its body. A browser disconnect while awaiting the tool could be
missed. It now watches response close, cancels only an unfinished response and
removes its listener in `finally`. Completed responses do not trigger cancellation.

## Verification

The combined run passed **46 tests**, with no failures, skips or cancellations:
20 MCP/public-route checks, 25 recovered-provider/error/probe checks and one
acceptance-ledger check. With pinned Node 24.18.0:

```sh
node --test test/mcp.mjs test/mcp-http.mjs test/control-plane-mcp.mjs desktop/provider-error-policy.test.mjs desktop/provider-error-body.test.mjs desktop/provider-error-ui.test.mjs desktop/live-provider-probe.test.mjs desktop/feature-status.test.mjs
```

Actual loopback HTTP tests observe socket closure for timeout before headers,
stalled JSON/SSE bodies, caller cancellation, client close and oversized bodies.
They cover decompressed gzip errors, fragmented UTF-8/multiline SSE, malformed
replies and initialization-notification deadlines. A separate test spawns the
real control-plane server with a disposable configuration, aborts a fully sent
browser POST while its upstream body is stalled, observes upstream disconnect
and completes a subsequent healthy call. Existing STDIO integration tests run
real owned children. These are controlled fixtures, not live provider/account
or native desktop acceptance checks.

## Measurements and tradeoffs

Run `node tooling/benchmark-mcp-http.mjs` with pinned Node 24.18.0. The baseline
is `499fc4e06a2cb307a1be75e76f78c83b8ba9382b`; candidate source hashes and raw samples
are recorded locally in ignored `logs/mcp-http-performance-x6lg1w/result.json`.
Windows x64, three repetitions per candidate/workload with alternated order.
Each worker runs a first and warm phase, including its own real HTTP server.

Normal work completes 20 sequential calls returning exactly 8 KiB of text each.
Error recovery completes five cycles of a 32 MiB decoded gzip HTTP 503 followed
by an exact healthy reply. Both candidates make the same 20 or 10 requests per
phase. The bounded candidate deliberately reads less error diagnostic data.

| Workload | Phase | Elapsed ms, before → after (ranges) | CPU ms, before → after |
| --- | --- | --- | ---: |
| Normal calls | First | 252.55 → 253.78 (242.34–271.66 / 247.32–269.45) | 47 → 63 |
| Normal calls | Warm | 292.84 → 311.55 (279.82–311.59 / 282.96–311.83) | 0* → 141 |
| Error/recovery | First | 477.73 → 121.39 (477.21–499.95 / 113.89–125.73) | 781 → 31 |
| Error/recovery | Warm | 436.72 → 153.93 (431.15–469.62 / 140.62–155.73) | 625 → 16 |

Values are medians. Worker lifetime OS peak RSS was **78.58 → 78.67 MiB** for
normal work and **206.81 → 89.00 MiB** for error recovery. This includes fixture
setup and both phases, not per-phase allocation or desktop/private committed
memory. There are no child processes inside each worker. The driver high-water
is recorded separately; simultaneous driver-plus-worker family peak is unmeasured.

First means first task after module/client initialization, not cold OS/startup.
Normal warm elapsed increased about 6.4%, with overlapping ranges; there is no
general speedup claim. Windows CPU samples are coarse/noisy; `0*` does not mean
zero work and does not support a CPU ratio. No forced GC is used. The improved
failure workload reflects an intentional safety budget, not equivalent full-body
processing. No token savings, desktop RAM reduction, live-provider performance
or native macOS/Linux result was measured.

## Remaining gates

STDIO line accumulation, manager initialization/configuration reconciliation,
failed-cleanup ownership and broader session/reconnect behavior remain separate
control-plane work. The REA adapter still needs subprocess-output and total-cache
byte bounds. Native MCP profile/configuration ownership, Agent history retention,
whole-app long sessions and platform gates remain open. See the
[critical-first roadmap](../planning/roadmap.md#critical-first-backlog-and-eta).
