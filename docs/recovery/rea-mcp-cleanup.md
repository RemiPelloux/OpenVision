# MCP cleanup ownership and recovery

Updated 15 October 2026. The Windows MCP utility now retains transports whose close
failed and blocks a replacement for the same scoped server identifier until
cleanup succeeds. An explicit connection demand retries cleanup; no polling or
background retry loop is added. This closes a verified part of OV-303, without
promoting the entire acceptance story.

Pending close acknowledgement is now bounded to five seconds. A close that never
settles previously left explicit connection demand waiting indefinitely. After
the deadline, the caller receives a pending cleanup failure and cannot create a
replacement. The actual close promise and exact resource owner remain retained;
the deadline neither cancels the real close nor treats it as successful.

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

Each exact resource also owns one deadline acknowledgement. Concurrent demand
and later retries reuse it, so an indefinitely pending close does not accumulate
new timeout timers or promise continuations for each demand. After the deadline,
additional demands report pending cleanup immediately. If the underlying close
eventually settles, the acknowledgement entry is released; a later explicit
demand can recover. Rejected closes retain retry behavior. There is no automatic
background retry or forced transport abandonment.

The expanded STDIO regression also exposed a diagnostic contract error: the
native logger expects `error(message, Error, metadata)`, while cleanup passed
metadata as its second argument. The logger then threw while reading the missing
error name/message, interrupting cleanup bookkeeping. Cleanup now passes the
original error in the proper position and retains a separate diagnostic failure
if the logger itself throws, so logging cannot turn a rejected close into an
indefinitely pending owner.

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

## Final built v4 verification

The final built implementation, including the corrected native logger contract,
passed all three Windows fault-injection runs on 14 October 2026:

| Transport and fault | Evidence under `logs/` | Passed checks |
| --- | --- | ---: |
| STDIO, two consecutive close rejections | `mcp-cleanup-verification-X1V0rv/result.json` | 6 |
| HTTP, two consecutive close rejections | `mcp-http-cleanup-verification-Yg9tPF/result.json` | 5 |
| HTTP, pending close and eventual release | `mcp-http-cleanup-verification-NCNwOT/result.json` | 6 |

All three used the built utility with SHA-256
`e45b761a32802181d37efa02ace4b53a8dac40935fc806a5ec3964555497f2e4`;
none used the candidate transform flag. Fault injection modified only disposable
overlays, and each run verified that the normal utility bytes stayed unchanged.
The pending acknowledgement arrived after 5,007 ms, with exactly one actual
close call in flight. Replacement remained blocked until actual close completed,
and a later explicit demand recovered the connection.

All owned hosts exited 0. STDIO verified all three recorded child PIDs absent
after shutdown. Renderer and fixture error collections were empty. Inspection
of each native `mcpprocess.log` found no uncaught utility exceptions or the
previous logger property-access error; rejection runs recorded the expected
injected cleanup errors correctly. The existing host mutex warning remains,
so this does not claim completely clean process logs.

The pending-close run `NCNwOT` also recorded `[UtilityProcessWorker]: terminated
unexpectedly with code 3221225477` in host stderr after replacement committed.
The owned host still exited 0 and all six declared cleanup checks passed, but
those checks do not establish a clean utility-worker shutdown. Its cause remains
unverified under OV-403; this result must not be described as an error-free
process-family exit.

## Native session recovery verification

15 October 2026. Two additional Windows runs exercised the built utility above,
using real HTTP sessions and the production adapter/lifecycle in disposable
overlays. Both passed five checks and the owned hosts exited 0:

| Entry point | Evidence under `logs/` | Observed behavior |
| --- | --- | --- |
| Tool request receives HTTP 404 for its expired session | `mcp-session-verification-9xVCEM/result.json` | One failed tool request, cleanup error returned, exact transport retained, no replacement or tool replay while cleanup fails |
| Direct native `handleSessionReinit(adapter)` | `mcp-session-verification-ADVCDC/result.json` | Session-reinitialization retirement rejects cleanup, retains the exact transport and starts no replacement |

Both runs reject the first close and the first explicit cleanup retry. Removing
and re-adding the server configuration supplies each explicit connection demand.
The next demand closes the old transport successfully before a replacement
commits. A newly requested tool call then returns the fixture marker; the owner
registry is empty for that server. The recorded failed-resource map contains
the identical injected transport after both rejections. The original utility
hash remains unchanged in both runs.

The HTTP 404 run showed that the native transport-error callback starts
`reconnect` retirement before the adapter's session-reinitialization handler
reaches retirement. The direct lifecycle run therefore checks the separate
`session reinit` branch explicitly. It does not claim an HTTP 404 traversed that
branch. The first exploratory run `hU9blD` injected only at `session reinit`,
observed normal successful reconnect and failed its expected-error assertion;
its record is retained. Final verification covers both actual entry points.

The driver calls the real adapter from inside the native utility. It replaces
neither the SDK nor production recovery logic; only the real transport's close
is faulted. The server supplies deterministic tool output. This verifies native
production boundaries, not an Agent approval/retry UI flow, live AI behavior or
OAuth. Playwright `pageerror` and fixture error collections are empty. Host
stderr retains the mutex warning, and both renderer logs report an onboarding
contribution failure reading `getActivePaneComposite`. These logged diagnostics
remain unresolved. No clean process-family shutdown or performance improvement
is claimed.

After the shared injection helper refactor, Windows HTTP close-failure recovery
also passes in `mcp-http-cleanup-verification-2QaFQo/result.json` (five checks),
and persistent STDIO recovery passes in
`mcp-cleanup-verification-LyCJVO/result.json` (six checks). Both owned hosts exit
0, all three recorded STDIO child processes are absent after shutdown, and the
normal utility remains unchanged.

The 31 focused lifecycle tests also pass with `OPENVISION_RECOVERY_DIR` pointing
to the available original recovery. An initial run selected an incomplete local
`build/recovery` and failed with missing input files; it was not a behavior pass.

## Earlier native failure evidence

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
- `logs/mcp-cleanup-verification-1eboqo/result.json`: earlier built implementation
  passed two consecutive rejections. The second failure created no replacement.
  The next explicit demand released the old transport at 11:35:31.168 UTC;
  the replacement connected at 11:35:31.252 UTC. Exactly one child remained
  active after replacement. All three recorded child PIDs were absent after
  shutdown, the host exited 0 and no renderer page errors were recorded.

That earlier production utility SHA-256 was
`90bf5a2c9368cea10d270f648daccfda79d3d2301ff70f1ba6bc9e171b37cf80`.
The disposable instrumented utility SHA-256 was
`4f23f4642d22ed03548bf740081f275fa5f7f90fa19ad3ccd638c95e62602013`.
The normal utility stayed unchanged. Host output did contain the existing
mutex-already-exists and shutdown storage-provider errors; this is not a claim
of an error-free process log.

## Earlier HTTP rejection and pending-close evidence

The HTTP verifier uses the real loopback HTTP MCP transport and a disposable
runtime overlay. It waits for the utility's committed-connection boundary before
injecting disposal failure, rather than mistaking earlier routing discovery for
committed ownership. It intercepts the exact committed transport's `close`,
without replacing the SDK or HTTP server implementation.

`logs/mcp-http-cleanup-verification-QL2Le1/result.json` passed five checks against
the built runtime: HTTP discovery, two consecutive close rejections blocking any
replacement HTTP initialization, explicit-demand recovery, replacement commit
only after actual close acknowledgement, and unchanged normal runtime bytes.
The owned host exited 0 and no renderer or HTTP fixture errors were recorded.

`logs/mcp-http-cleanup-verification-FTejZu/result.json` passed all six pending-close
checks against the built runtime. The first pending acknowledgement arrived
after 5,206 ms; exactly one real close call remained in flight. After its release,
the replacement committed successfully. The owned host exited 0 and renderer/
HTTP fixture errors were empty. The built utility SHA-256 for both earlier HTTP
runs was `0c094f717e01b1f4a995a49a81f68cf8964f4b69fb50eaf316121e173262039e`.
Those HTTP artifacts precede the subsequent logger-argument correction; the
five-second pending-close implementation itself was built and verified.

The pending-close variant holds the real transport's close until an explicit
fixture release file is written. Its instrumentation observes the production
five-second acknowledgement boundary without changing that deadline. The
unresolved resource remains owned, multiple requests share one close call, and
no replacement initializes while it is unresolved. After releasing the actual
close, a later demand reconnects. This establishes bounded pending demand and
late recovery under controlled native fault injection, not the ability to force
an uncooperative transport to close.

Earlier candidate runs `aFm7FE` (repeated rejection) and `LeEcka` (pending close)
passed; `LeEcka` observed the pending acknowledgement after 5,004 ms. Initial
attempt `zK68AC` waited on an HTTP discovery response before confirming the
native utility commit, then timed out without injecting a close rejection. The
verifier now observes the exact commit and committed transport identity; that
failed attempt remains retained.

`logs/mcp-cleanup-verification-UCM9vQ/result.json` reproduced the logger failure
in the built STDIO path: repeated rejection blocked replacement, but recovery
timed out after native logger exceptions interrupted bookkeeping. Candidate run
`logs/mcp-cleanup-verification-aikR7o/result.json` then passed all six existing
STDIO checks with diagnostic failures isolated: failed/repeated close, replacement
ordering, all three child PIDs absent after shutdown, unchanged runtime bytes and
host exit 0. The final change also corrects the producing logger argument order.

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

## Linux HTTP cleanup verification (19 October 2026)

[verify-mcp-http-cleanup](../../desktop/verify-mcp-http-cleanup.mjs) now runs
on Linux x64 as well. It uses a plain directory symlink instead of the junction
and the namespace-sandbox flag when the setuid helper is absent. At each phase
it records which processes hold the fixture's TCP sockets, read-only, from
`/proc/net/tcp{,6}` inodes and `/proc/<pid>/fd` links
([helper](../../desktop/linux-socket-owners.mjs)). Every holder must descend
from the launched host, and after host exit no process may hold one.

```sh
npm run verify:mcp-http-cleanup
npm run verify:mcp-http-cleanup -- --pending
```

| Run (`logs/mcp-http-cleanup-verification-…`) | Mode | Result |
| --- | --- | --- |
| `eZOzw8`, `b1kVPw` | Two consecutive close rejections | Both passed all seven checks first time; host exit 0 |
| `Nrh5MN`, `yG2vCB` | Pending close, then release | Both passed all eight checks first time; acknowledgement at 5,000 ms; host exit 0 |

Covered: two consecutive rejections, a pending close then its eventual release,
the bounded five-second acknowledgement with exactly one real close in flight,
and no replacement `initialize` before release. In the socket records, the
extension host held the discovery socket briefly; afterwards only the
`mcp-process` utility held sockets to the fixture.

Interim-build runs: `8Hzapx`, `iZ8lVf` (rejections) and `See7jo`, `oehHX9`
(pending, acknowledgement at 5,000 ms) passed. `af9fef` (pending) failed first
time: the utility never committed the server. That was the routing-reset defect
in the [ownership follow-up](rea-mcp-ownership-matrix.md#19-october-2026-linux-follow-up),
fixed before the final-build runs above. It is not counted as a pass.

## Repeat and coverage limits

From the prepared OpenVision folder:

```sh
node desktop/verify-mcp-cleanup.mjs --persistent
node desktop/verify-mcp-http-cleanup.mjs
node desktop/verify-mcp-http-cleanup.mjs --pending
npm run verify:mcp-session
npm run verify:mcp-session -- --direct
node --test desktop/mcp-attempt.test.mjs desktop/mcp-lifecycle-cleanup.test.mjs desktop/mcp-reconnect.test.mjs desktop/mcp-cancel.test.mjs
```

The 31 focused tests passed. They cover both recovered implementations,
late attachment, retained ownership, synchronous/repeated failure, concurrent
cleanup coalescing, unrelated identifier isolation, session reinitialization,
cancellation, pending-close deadlines with 20 repeated demands sharing one
acknowledgement, late completion recovery and idempotent transforms. Controlled boundary tests supplement
native evidence; they do not establish native extension/remote-host parity.

Native fault injection covers Windows STDIO committed disposal/re-addition,
HTTP close rejection/pending-close acknowledgement/recovery, HTTP 404 recovery
and direct native session-reinitialization rejection. [Separate ownership checks](rea-mcp-ownership.md)
cover two windows sharing a global STDIO connection and isolated user-data
profiles. OAuth, broader named-profile/configuration ownership and cross-window
failed cleanup, forced release of permanently hanging closes,
long-session resource growth, remote hosts, macOS, Linux and glass remain
unverified. The owner registry deliberately retains unresolved resources; there
is no timeout that discards ownership. The five-second timer bounds caller
acknowledgement only. No token, CPU or peak-memory benchmark
was performed for this correctness change and no performance gain is claimed.
