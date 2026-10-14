# Provider failure handling

Updated 14 October 2026. OV-204 is **Partial**, not Verified. The acceptance
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
fact. Submitting a fresh message remains possible. A dedicated manual Retry
button with independent automatic-retry policy is still an open UX gate.

## Evidence and scope

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

Validation also passed 101 desktop tests, 12 focused provider-error/probe tests,
the acceptance-ledger test, desktop syntax checks and the production source build.
Those test totals are regression evidence, not additional acceptance-story credit.

Failure-fixture native checks use a disposable profile and project. They do not
alter the user's normal model configuration or use real provider credentials. The local
catalog/error fixtures cannot establish Codex Easy, DeepSeek or Grok behavior.

## Remaining acceptance work

- Native connection refusal/DNS/TLS failures and timeout cleanup.
- Unsupported tools/images and context-limit responses with useful recovery.
- All malformed/truncated/oversized stream shapes, including downstream tool
  validation and bounded HTTP error-body reads.
- Separate manual retry controls and transient-error guidance without automatic
  request multiplication.
- Custom authentication-header overrides and remaining completion/discovery
  error paths; this change covers the Agent's SDK Authorization boundary.
- Live provider failure/cancellation/recovery and native macOS/Linux evidence.

Estimated remaining OV-204 effort: **2–5 engineering days**, conditional on live
provider availability and the platform access required by claimed support.
The broader per-story estimates remain in [remaining-work-estimates.md](remaining-work-estimates.md).
