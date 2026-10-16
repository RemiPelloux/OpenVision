# Native Agent timeout and recovery

This investigation covers OV-102 and OV-204 on Windows. The acceptance baseline
remains 42 stories; a timeout check alone does not establish complete Agent safety.

## Contract and evidence boundary

The execution transport uses `desktop/provider-request-deadlines.cjs`: five
minutes to receive response headers and ten minutes of inactivity while reading
the response body. There is no total-duration deadline for progressing inference.
The recovered transport, provider-error owner and failed-response history producer
must preserve a useful error, close the stalled socket and allow an explicit
retry without an extra empty assistant message or duplicate submission.

`--timeout headers|body` uses the normal app, native model selector and saved
provider in a disposable project/profile. The first inference is intentionally
held by the loopback fixture. Header mode sends no response; body mode sends HTTP
200 and an SSE comment, then stops sending bytes. Neither mode contacts the real
provider for that first request. No upstream failure is invented or claimed.

The fixture bypasses the live relay's ordinary 60-second upstream guard. Its own
guard expires one minute after the relevant production deadline and fails the
probe if the native app has not closed the connection. The verifier checks socket
closure near the unchanged production deadline, useful native timeout guidance,
no automatic retry and the original user prompt appearing once per request.
The execution deadline helper's digest must match the source policy before the
disposable profile is created. This does not verify every alternate host path.

After native **Try again**, inference is forwarded unchanged to the saved real
provider. A successful result requires a real Read tool roundtrip, the generated
file marker in the actual tool result and final visible model response, and an
explanation for every additional inference through distinct tool calls. The
fixture model catalog mirrors saved hints; catalog simulation does not establish
live capability support. Normal user configuration is not modified.

## Run locally

These commands consume real provider quota only after the controlled stall.
They use the existing built source runtime; they do not shorten its deadlines.

```sh
npm run test:agent-timeout
npm run verify:agent:live -- --live --model deepseek-v4-flash --timeout headers
npm run verify:agent:live -- --live --model gpt-6.1-sol --timeout body
npm run verify:agent:live -- --live --model grok-4.7 --timeout headers
```

Focused tests use short injected deadlines for production-boundary HTTP checks
and exercise controlled-stall cleanup. Those tests are separate from native
full-duration evidence. Each native result records runtime/verifier digests,
requested/reported model identities, provider request IDs, transport observations
and cleanup. Credentials, profiles and runtime logs remain ignored.

## Verification results

The first native stream-inactivity run, `Fij5wp`, reproduced a product defect:
the connection closed after **303,870 ms**, before the configured 600,000 ms
deadline. The UI showed timeout guidance with `terminated`. Native logs identify
`UND_ERR_BODY_TIMEOUT` from the packaged Undici HTTP parser. The verifier failed
instead of crediting an earlier transport timeout as the application deadline.
No real inference was sent in that failing run; the launcher exited 0.

Before the correction, header-timeout runs `rqhp4i` (DeepSeek V4 Flash) and
`AqtzyA` (Grok 4.7) passed controlled stalls and subsequent real-provider Read
continuations. These are evidence for their recorded runtime, not post-fix runs.
Each suffix identifies `logs/live-agent-verification-<suffix>/result.json`.

## Producing-boundary correction

The deadline policy already owned header waiting and body inactivity, but fetch
also supplied a shorter body timeout to its selected Undici dispatcher. Two
owners could therefore terminate the same operation with different policies.

An initial correction wrapped the input dispatcher. Native runs `ZUvlIM` (GPT)
and `irGM6y` (DeepSeek) still failed after **303,276 / 303,123 ms**. The extension
host's `@vscode/proxy-agent` certificate/proxy selection replaces that dispatcher,
so the wrapper never reached the socket. The intermediate approach was removed.
Its ordinary Node test passed; these native failures exposed the missing host
boundary in that test.

The final correction marks only requests with an active OpenVision deadline.
`createFetchPatch` preserves that mark through existing proxy/certificate
selection; its final fetch boundary wraps the selected dispatcher with Undici's
header/body timers disabled for that request. OpenVision's AbortSignal deadlines
remain active. Connection establishment, proxy/TLS options, pooling and dispatcher
lifetime stay with the original owner. A WeakMap reuses wrappers for the same
selected dispatcher; the wrapper never creates or closes a pool. Unmarked
extension requests retain their transport policy. The mark is removed before
the underlying fetch call and is never sent as an HTTP header or body field.

Source tests pin Undici **7.25.0**, matching the current packaged version. Tests
execute the actual packaged proxy module before and after customization with
real HTTP sockets and compressed transport timers. They reproduce the competing
timeout, verify the application's timeout after certificate selection, recover
through the same pool, preserve certificate/protocol options and leave unmarked
requests unchanged. This is controlled transport evidence, not a live corporate
proxy or every TLS configuration. Post-fix full-duration native checks remain
pending. No RAM, CPU, token or billing-cancellation savings are claimed.
