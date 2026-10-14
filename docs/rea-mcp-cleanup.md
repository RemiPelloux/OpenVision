# MCP cleanup ownership and recovery

14 October 2026. The Windows MCP utility now retains transports whose close
failed and blocks a replacement for the same scoped server identifier until
cleanup succeeds. An explicit connection demand retries cleanup; no polling or
background retry loop is added. This closes a verified part of OV-303, without
promoting the entire acceptance story.

## Observed defect and fix

The recovered lifecycle called asynchronous `client.close()` without awaiting it
and discarded `serverInstance`. Its synchronous catch could not observe a
rejected close. Reconnect and session reinitialization repeated the same pattern.
The previous attempt-level fix retained failed resources but had no production
consumer that retried abandoned owners.

`mcp-attempt-runtime.mjs` now retains pending and failed resource owners. Exact
transport identity owns the close promise, so concurrent cleanup requests share
work and a transport attached after cancellation is still closed. Successful
cleanup releases the retained owner. Failed cleanup retains both the resource
and its error until a later demand succeeds.

`mcp-lifecycle-cleanup-customization.mjs` routes committed disposal, idle suspend,
reconnect and session reinitialization through that same owner. Connection demand
retries outstanding cleanup for its scoped identifier; the connection attempt
checks that no unresolved owner remains before creating an SDK client. Repeated
failure returns a nonretryable connection failure. A new explicit demand can
retry; the failed tool itself is never replayed. Lifecycle disposal returns an
aggregate acknowledgement, although existing synchronous native callers do not
consume that return value. Retention therefore does not depend on those callers.

Both the shared utility and extension implementations are transformed. The
installer checks parsed method contracts, preserves backups and is idempotent.
No PID-based resource termination is introduced.

## Native failure evidence

The verifier creates a disposable runtime overlay, profile and project. It
changes only the copied utility file to reject the real transport's close before
calling the SDK close. An authenticated control connection observes the real
STDIO child remaining alive. Unchanged runtime files are linked; the normal
utility hash is checked after the run. The normal profile is never selected.
This is deterministic fault injection against a native application and real
transport, with no AI inference or external provider claim.

- `logs/mcp-cleanup-verification-jGeeK0/result.json`: pre-fix reproduction.
  After close rejection the old child remained alive, a replacement started,
  and no cleanup retry occurred. The verifier failed as expected.
- `logs/mcp-cleanup-verification-A2S1E9/result.json`: candidate passed a single
  rejection, retry, replacement ordering and child shutdown.
- `logs/mcp-cleanup-verification-1eboqo/result.json`: final built implementation
  passed two consecutive rejections. The second failure created no replacement.
  The next explicit demand released the old transport at 11:35:31.168 UTC;
  the replacement connected at 11:35:31.252 UTC. Exactly one child remained
  active after replacement. All three recorded child PIDs were absent after
  shutdown, the host exited 0 and no renderer page errors were recorded.

The final production utility SHA-256 was
`90bf5a2c9368cea10d270f648daccfda79d3d2301ff70f1ba6bc9e171b37cf80`.
The disposable instrumented utility SHA-256 was
`4f23f4642d22ed03548bf740081f275fa5f7f90fa19ad3ccd638c95e62602013`.
The normal utility stayed unchanged. Host output did contain the existing
mutex-already-exists and shutdown storage-provider errors; this is not a claim
of an error-free process log.

The final built lifecycle also passed the native Agent regressions:
`logs/agent-verification-1dENp5` (STDIO) and `logs/agent-verification-OhnHNl`
(HTTP). Both covered approval/denial, Stop with upstream cancellation, subsequent
calls, disconnect, the actual two-minute SDK timeout, configured restart and
owned host exits. STDIO additionally verified all recorded child PIDs absent
after shutdown. Stop acknowledgement was 158 ms for STDIO and 133 ms for HTTP;
timeout responses arrived after 121,675 ms and 121,472 ms respectively. These
are individual observations, not performance guarantees. Controlled inference
responses drove real native tools; no live AI-provider coverage is claimed.

An earlier persistent run, `REhVfQ`, correctly blocked replacement after two
failures but timed out before recovery. Its verifier accepted an old disposal
count from initial routing handoff, so rapid configuration removal/re-addition
could coalesce. The verifier now captures the count before removal and waits for
a new native disposal acknowledgement. The final successful run uses that
causal boundary. Failed records remain available locally.

## Repeat and coverage limits

From the prepared OpenVision folder:

```sh
node desktop/verify-mcp-cleanup.mjs --persistent
node --test desktop/mcp-attempt.test.mjs desktop/mcp-lifecycle-cleanup.test.mjs desktop/mcp-reconnect.test.mjs desktop/mcp-cancel.test.mjs
```

The 27 focused tests passed. They cover both recovered implementations,
late attachment, retained ownership, synchronous/repeated failure, concurrent
cleanup coalescing, unrelated identifier isolation, session reinitialization,
cancellation and idempotent transforms. Controlled boundary tests supplement
native evidence; they do not establish native extension/remote-host parity.

Native fault injection currently covers Windows STDIO committed disposal and
re-addition. HTTP close rejection, native session-reinitialization rejection,
OAuth, multi-window/profile ownership, permanently hanging close operations,
long-session resource growth, remote hosts, macOS, Linux and glass remain
unverified. The owner registry deliberately retains unresolved resources; there
is no timeout that discards ownership. No token, CPU or peak-memory benchmark
was performed for this correctness change and no performance gain is claimed.
