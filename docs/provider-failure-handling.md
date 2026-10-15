# Provider failure handling

Updated 15 October 2026. OV-204 is **Partial**, not Verified. The acceptance
baseline remains 42 stories. These changes address the local Agent transport;
they do not establish complete provider compatibility or application-wide
credential redaction.

## Defects reproduced and corrected

Native failure runs reproduced an API key echoed by the provider appearing in
Agent errors and local logs. The first attempted patch used a shadowed variable
instead of the request headers and did not fix it. A separate run reproduced
SDK retries and Agent resume attempts multiplying a failed submission.

The transport now redacts the exact configured Authorization credential from
its own diagnostic graph, including non-enumerable Error message/stack/cause,
response bodies and parsed error data. Error identity, status, SDK tags and
retryability facts remain intact. Parsed stream failures receive the same policy
before downstream consumers log or serialize them. Successful stream records
retain their identity and backpressure; cancellation reaches the upstream reader.

A weak ownership set marks transport failures. SDK and local Agent retry owners
stop automatic repeats for these errors, including wrapped causes. This does
not change unrelated error classification or erase the SDK's transient-status
fact. The error adapter now exposes **Try again** while preserving the terminal
error class used by automatic retry classifiers. Manual retry retains the prior
prompt and selected model/provider; it does not silently change credentials or
reasoning. Authentication errors can be retried after correcting the settings.

Error response bodies now have an explicit **64 KiB decoded-byte retention
budget** and a **10-second read deadline**. These apply after error headers arrive,
not to successful model output or time waiting for inference headers. The reader
checks each chunk before decoding/retaining it, cancels on overflow/timeout and
releases its lock/timer. Compressed bytes are counted after decompression. The
transport may allocate its own chunk; this is a bound on retained diagnostics,
not a claim of a 64 KiB total process allocation. Truncation, observed bytes,
status, request URL/body and response headers remain recorded.

Provider-declared context exhaustion no longer starts repeated paid summarization
attempts. A native fixture reproduced **ten requests for one context-limit error**
in `provider-errors-yauHqH`; the fixed path reports the failure and suggests
reducing attached context or starting a new chat. Existing proactive/internal
context recovery remains intact. Provider codes for unsupported tools/images
and HTTP rate/server errors receive guidance without changing the selected model.

Two native runs (`provider-errors-DRibsj` and `provider-errors-JczaV1`) also showed
the error and retry button disappearing after several successful retries in a
single chat. The display previously relied on a transient error bubble. The
provider-error producer now retains the failure in chat-level submission state,
with an explicit ownership flag, until retry/new submission or dismissal. Both
workbench variants use the same policy; native Windows exercises desktop only.

## Evidence and scope

Latest expanded native run: `logs/provider-errors-ESuXiD/result.json` on Windows
x64. All **14 failure cases and their manual retries** passed in one chat:
401/403/429/500/502/503, malformed stream, streamed provider error, dropped
connection, context limit, unsupported tool/image responses, oversized error
body and stalled error body. Each failure made exactly one HTTP request; each
explicit retry made one successful request with its original prompt, model and
credential. Context failures no longer invoked summary requests. Size/deadline
failures closed the streaming response sockets before recovery.

The same run stopped the HTTP server to establish actual connection refusal,
then restored it on the same port and recovered through Try again. It also
verified Stop closing an active SSE socket, successful submission afterward,
and dismissing an error without submitting. Exactly **32 requests** were expected
and observed; **43 log files** had no synthetic-credential matches. The owned
host exited 0, with no cleanup errors. The verifier records Agent, workbench,
helper and host digests, including Agent
`8601f2812c37d7eda5020ef26f51536ac9da8ffd11588b6e27d11c8e4b39c830`
and workbench
`4951d1ba394d758c86c9939873a2c379d653b9cb45de5083c01e3b7ca6747400`.

This expands the earlier passing `provider-errors-t4M8MW` run with explicit
dismissal and workbench identity evidence. Recovery means the fixture changes
from failure to success; it does not establish upstream model capability or
that retrying an unchanged invalid request will succeed.

Run with the pinned Node 24.18.0 toolchain:

```sh
npm run test:provider-errors
npm run check:desktop
npm run build:desktop
npm run verify:provider-errors
```

The boundary tests execute the recovered HTTP transport, SDK retry owner and
Agent retry classifier against an actual local HTTP server. They also cover
error-handler rejection, offline exceptions, abort identity, cyclic diagnostics,
parsed stream errors, backpressure and upstream cancellation. Dependencies
outside these owners are fixtures; this is not a live-provider acceptance test.

Native Windows x64 evidence in `logs/provider-errors-vpO0rm/result.json` records
HTTP 401, 403, 429, 500, 502 and 503, an invalid stream record and a provider error
inside an HTTP 200 stream. Each case reached a terminal UI error with exactly
one request to the selected model/key. The synthetic key was absent from the
observed UI and scanned native logs. A fresh successful submission completed,
and the owned app exited with code 0. The record contains host, Agent, helper
and verifier hashes. Earlier failed evidence is retained locally; in particular,
`provider-errors-roYIEK` failed because its success fixture lacked a required
stream index. That failure exposed the parsed-stream retry defect subsequently
covered by the passing run.

The expanded run, `logs/provider-errors-Xv9Xpc/result.json`, also passed a dropped
HTTP connection, Stop during an open stream, and subsequent successful submission.
There were nine failed attempts, one stopped request and one recovery request:
**11 total**, all routed to the selected model with the expected synthetic key.
Stop closed the upstream stream socket. All **43 native log files** were scanned,
with zero credential matches; the owned host exited 0 without cleanup errors.

A separate **real Codex Easy** native run, `logs/live-agent-verification-t82YbA/result.json`,
passed after the stream-boundary change using `gpt-6.1-sol` with High reasoning.
Four actual HTTP 200 inference responses completed Task → child Read of a random
marker in a disposable file → parent response. The loopback relay simulated only
the catalog and forwarded inference bodies unchanged to `https://codex-easy.ai/v1`.
The same Agent SHA-256 was used as in the native failure run:
`b0c3609fe0d952a3a2ec21a284e9883ea6e8f0868321f6000772a1831fe4009f`.
This establishes that successful live streaming/tool continuation still works
for that model/effort/path, not all models or failure modes.

After the bounded-body/manual-retry changes, real native Grok 4.7 run `YaqVHy`
passed Glob → Read → file-marker response with three HTTP 200 requests.
DeepSeek V4 Flash run `Fkiask` failed at the first native request with HTTP 400
(`upstream_error: Bad Request`); no tool continuation occurred. Both used Provider
default and the same build as `ESuXiD`, and both owned hosts exited 0. The
[live compatibility report](live-provider-compatibility.md) records the exact
scope and preserves the unresolved DeepSeek failure.

Validation also passed 101 desktop tests, 23 focused provider-error/probe tests,
the acceptance-ledger test, desktop syntax checks and the production source build.
Those test totals are regression evidence, not additional acceptance-story credit.

Failure-fixture native checks use a disposable profile and project. They do not
alter the user's normal model configuration or use real provider credentials. The local
catalog/error fixtures cannot establish Codex Easy, DeepSeek or Grok behavior.

## Remaining acceptance work

- TLS certificate rejection and successful-response/header/stream inactivity
  timeouts. Native DNS and TLS protocol failures now pass as detailed below.
- Unsupported capability behavior against actual tool/image inputs and providers;
  error-response fixtures do not establish the model's capability contract.
- Remaining malformed/truncated/oversized successful stream shapes and downstream
  tool validation; the diagnostic budget covers HTTP error bodies only.
- Custom authentication-header overrides and remaining completion/discovery
  error paths; this change covers the Agent's SDK Authorization boundary.
- Live provider failure/cancellation/recovery and native macOS/Linux evidence.

Remaining OV-204 work is sized at **5 complexity points**. Live provider
availability and native platform access remain verification prerequisites.
The [feature roadmap](roadmap.md) owns the current score and acceptance gates.

## DNS and TLS recovery guidance

The connection-error producer now adds actionable guidance from structured
transport error codes. DNS lookup failures explain the hostname/DNS checks;
connection refusal explains server availability; TLS certificate and HTTPS
protocol failures have distinct guidance. Certificate failures never recommend
disabling verification. Known transport timeout codes also receive guidance;
this does **not** introduce an inference timeout or prove the native timeout path.
Unknown codes retain their existing details. The underlying error, code, URL,
request identity and retry classification are preserved.

Focused verification on 14 October 2026 passed **25 tests**, including the
recovered production HTTP/retry owners against an actual reserved `.invalid`
DNS failure and an HTTPS handshake sent to a local plain HTTP fixture. Each
failed submission made one fetch attempt, remained terminal for automatic
retries, and allowed one explicit successful recovery. These tests use a
synthetic credential and no paid inference. Certificate/timeout-code cases are
structured-error unit tests, not actual certificate expiry or inference timeouts.
Desktop JavaScript syntax checks also passed.

`desktop/verify-provider-errors.mjs` now includes native DNS and TLS scenarios:
the controlled provider redirects to the reserved invalid hostname or to its
own plain HTTP port with an HTTPS URL, then returns a successful stream on an
explicit retry. This deliberately tests transport failure after a redirect;
it does not test user entry of an invalid provider URL.

The rebuilt native Windows run `logs/provider-errors-NvvxqH/result.json` passed
all **16 scenarios and manual retries**, including observed `ENOTFOUND` DNS
resolution failure and `WRONG_VERSION_NUMBER` HTTPS protocol failure. Each
scenario made exactly one initial request to the fixture, displayed the new
guidance and a usable Try again action, and recovered with the original prompt,
model and synthetic credential. No automatic retry reached the fixture. The run
observed **36 requests**, passed connection-refusal recovery, Stop closing its
active SSE socket and error dismissal, and found no synthetic-credential matches
in **43 native log files**. The owned host exited 0 with no cleanup errors.

The evidence records Agent SHA-256
`c98bea7ed5f084c3c47d136ae1fd5f3e9a69b97f8497c9e7ea945014b8c48d97`, helper
`10f04dea5b7c308ee27e8ca4d3b698064f13962f81b1ed6f4bc7b02c1cadc464` and workbench
`9251426f04943379ff29248049f3d2dbb3290e1a68172f852bbc180ead11a503`.
This closes the Windows native DNS-resolution and HTTPS-protocol failure/recovery
subcases. At that revision, actual certificate expiry/trust/hostname rejection, inference timeouts,
successful-stream size/truncation and live-provider/platform gates remain open.
OV-204 remains Partial; no story or percentage is promoted.

## Native certificate trust rejection

Windows run `logs/provider-errors-PIRrCc/result.json` passed **17 scenarios**
and their explicit retries, including a real HTTPS server with an untrusted,
self-signed certificate. The fixture redirects the initial request to that
server; the native client rejects its certificate, displays certificate guidance,
and sends no HTTP request through the rejected TLS connection. The test changes
neither trust stores nor TLS verification. Certificate digests and TLS events
are retained in the private run evidence; disposable private keys stay in ignored
logs and are not shipped.

The run observed 38 requests, passed connection-refusal recovery, Stop and
dismissal, and found no synthetic-credential matches in 43 native log files.
The owned host exited 0 without cleanup errors. This extends controlled native
transport coverage, not live-provider inference. Expired certificates, hostname
mismatches, inference timeouts and other remaining gates above are still open.
OV-204 remains Partial.

## Recovered-fixture restoration follow-up

On 15 October the missing local formatted Agent execution fixture was regenerated
from the retained shipped artifact, using the same formatter/options as the
recovery workflow. Its raw input SHA-256 matches the installation manifest:
`5ac0e5c250b7b87b503ac3c4a9929f60e5b78bf02ef15e51afaf322e5b667063`.
The regenerated readable output SHA-256 is
`0df300c9865f395a02337ac880339c216ac44b45ada445daa46cae4c80a6e5c2`;
the independently retained readable recovery has the same output. The local
readability report was backed up before adding its provenance record. Recovered
bundles and local manifests remain ignored; no synthetic replacement was added.

All **25 provider-error/body/UI/probe tests** now pass, including execution of
the recovered HTTP and SDK/Agent retry owners, real loopback HTTP/gzip/stalled
body cancellation, DNS/TLS failures and manual-retry UI boundaries. This resolves
the missing-fixture initialization blocker recorded in the
[earlier performance review](autocomplete-stream-performance.md#verification).
It does not close remaining native/live-provider OV-204 gates or repeat earlier
native runs. The [control-plane report](control-plane-http-resources.md) records
the combined 46-test run and its separate transport scope.
