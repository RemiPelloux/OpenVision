# Control-plane STDIO resource bounds

15 October 2026. This change applies to the optional Node control plane in
`src/`, whose MCP transport is separate from the desktop Agent transport.
Acceptance remains **6/42 Verified (14.29%)**. No complete feature story is
promoted by these tests or measurements.

## Behavior and limits

The old control-plane reader accumulated an unterminated line through Node's
readline interface. The replacement counts encoded bytes before each copy or
UTF-8 decode. Its per-message budget is **8 MiB before LF, including optional
CR**. This is an application resource bound matching the HTTP response budget,
not a limit imposed by MCP. Servers returning larger results must paginate or
reduce their response; OpenVision reports an error rather than truncating it.

Fragmented messages use a geometrically grown byte buffer, released after each
message. Complete messages can decode directly from a stream chunk. Strict UTF-8
decoding preserves split characters; CRLF and multiple messages are supported.
Blank LF lines are ignored. Invalid UTF-8/JSON, overflow or EOF before the final
newline fails the connection and rejects every pending request with a stable
error code. The manager retains the child handle for explicit cleanup and opens
a fresh connection for a later call. It does not retry the failed tool.

The 8 MiB budget bounds accumulated frame bytes, **not total client memory**:
stream chunks, temporary buffers, decoded strings and parsed objects add costs.
Outbound request sizes, concurrent requests, process-tree supervision and idle
disposal require separate gates. Current direct-child cleanup can resolve after
a timer without confirmed exit; this patch does not establish descendant cleanup.
The config-snapshot admission race remains open in the
[lifecycle follow-up](control-plane-mcp-lifecycle.md#remaining-gates).

## REA findings and provenance

REA analyzed two inert excerpts from the recovered MCP extension: **3,909 bytes,
645 AST nodes, two parsed files, zero parse failures**. Complete parent Evidence:
`ev_8e6e6cb4a0a061b12f24f7d8242a9e52b1eb8784963f1aed3bc2d8f081a794a1`.
Summary Evidence:
`ev_04f9eec5d833e6861bd871fe23dba32648c16e94e904e50894d62c06c9f322a4`.
Application coverage is partial; semantic completeness is unknown, with 161
semantic unknowns. Unresolved bundle bindings remain unresolved.

Manual source inspection of the examined parser shows accumulated
`Buffer.concat` calls, a newline search and JSON parsing, with no size check in
that class. Its examined consumer appends each stdout chunk before reading
messages. This supports a static accumulation concern in that scope; it does
not prove current runtime reachability or a whole-desktop memory defect.
The new control-plane parser is a separate implementation, not recovered source.

| Input | Location / SHA-256 |
| --- | --- |
| Recovered extension bundle | `ca2d339c535c8badb42a1ac9d0b2e29bd40e27207e9a46149f039f5b92d5af32` |
| Parser excerpt | Lines 35119–35138; UTF-16 `[1301205, 1301782)`; `bf6aa49998ecbeb398261f555088047b640eb351e9803cddff00530655a6fa0e` |
| Transport excerpt | Lines 35164–35262; UTF-16 `[1302412, 1305744)`; `edbd0828ec485a822b6960e9360537f0d292ab9aa3dd0938d8904495841a5df1` |

Exact source path, extraction manifest, excerpts and exported session Evidence
remain in ignored `logs/rea-mcp-stdio/`. Recovered source and local captures
are not committed.

## Executed validation

The focused MCP suite plus acceptance-denominator regression passed **42/42**.
Parser tests cover exact budget/reset, oversized complete and fragmented frames,
UTF-8 byte counts, split characters, CRLF, invalid encoding/JSON and incomplete
EOF. Real Node children establish failure of all pending calls, failed-client
reuse rejection, fresh-child recovery and observed old-child exit for those
fixtures. The public HTTP control-plane route returns an explicit overflow error,
then succeeds on a healthy request. These are fixture workflows; no live AI API,
account, desktop Agent or macOS/Linux runtime was exercised.

```sh
npm run check
npm run test:mcp
node --test desktop/feature-status.test.mjs
node tooling/benchmark-mcp-http.mjs d3e40e7 stdio-normal stdio-overflow-recovery
```

## Comparative measurements

Windows x64, Node 24.18.0; three alternating before/after repetitions, one
benchmark worker at a time. Baseline:
`d3e40e76ba7224cbf1b665171032deec54a9e578`. The source-hashed candidate report is
ignored `logs/mcp-http-performance-UeJV6Z/result.json`.

Normal samples complete 20 sequential calls with 8 KiB replies. Overflow samples
complete two failure/close/reconnect/healthy-call cycles. Both revisions explicitly
close before recovery. The producer attempts 32 MiB without a newline and honors
backpressure. The baseline waits for the chosen one-second request timeout;
the candidate stops the producer at its byte budget, so it may read fewer bytes.

| Median observation | Before | After |
| --- | ---: | ---: |
| Normal first / warm elapsed | 61.09 / 5.05 ms | 61.82 / 4.35 ms |
| Normal first / warm client CPU | 15 / 0 ms | 15 / 0 ms |
| Normal client lifetime peak RSS | 48.97 MiB | 48.89 MiB |
| Overflow/recovery first / warm elapsed | 2198.80 / 2141.76 ms | 189.89 / 132.37 ms |
| Overflow/recovery first / warm client CPU | 156 / 94 ms | 31 / 47 ms |
| Overflow/recovery client lifetime peak RSS | 283.81 MiB | 108.73 MiB |

First includes lazy child initialization and is not a cold OS-cache run. Warm
normal calls reuse the child; overflow cycles necessarily replace children.
CPU accounting is coarse; zero does not mean zero cost. RSS is the worker's
lifetime high-water, including startup and both samples, not per-task allocation.
Child-process CPU/memory and simultaneous process-family peak memory are
unmeasured. AI tokens and external API requests are not measured. Normal traffic
shows no meaningful RAM improvement. The stress result supports early rejection
of malformed oversized output, not a whole-app RAM or general speed claim.
