# Agent retry history and live authentication recovery

15 October 2026. This is P0 OV-102/103 reliability work. It does not change the
42-story denominator or promote a complete acceptance story.

## Reproduced failure and owner

Two real Windows DeepSeek V4 Flash runs, `BcIbBv` and `4mHsGf`, received an
expected upstream HTTP 401 with a deliberately invalid credential. Native
**Try again**, after restoring the saved credential at the relay, then received
HTTP 400 from Codex Easy. Each run used a disposable project and profile.
The second run records the outgoing retry's additional assistant message with
`textLength: 0`, no tool calls and only `role`/`content` fields. The original
request ended with the user messages. The persisted failed reply is also empty.

Direct recovered-source inspection traces this to the stream-failure producer
in both Agent implementations: host `gce`, original `main.js:404752`, and exec
`S9`, original `main.js:199310`. Each catch unconditionally constructs an assistant
from accumulated stream parts, even when the provider rejects before emitting
any content. Error checkpoints preserve it, and the Chat Completions adapter
serializes the empty content array as `content: ""`. This follows recovered code
and native request evidence; no new complete-bundle REA parse is claimed.

`desktop/agent-retry-history-customization.mjs` fixes both producers. Each catch
converts accumulated parts once and creates an assistant only when replayable
content exists. The original error, stream finalization and checkpoint flow
remain intact. Existing partial text, tool calls, files and reasoning conversion
are preserved. Successful response handling is unchanged. No downstream blanket
history filter or provider-specific fallback is introduced.

## Verification contract

```sh
npm run test:agent-retry
npm run build:desktop
npm run verify:agent:live -- --live --model deepseek-v4-flash --retry-auth
```

Use the same command with `gpt-6.1-sol` or `grok-4.7`. These runs consume real
provider quota. The normal profile is read only to select the saved connection
and decrypt its credential in the owned disposable app; it is not reconfigured.

The live verifier forwards inference bodies unchanged to the saved endpoint.
Only the catalog is simulated from saved capability hints. For this opt-in probe,
the first upstream request uses a known invalid test key and must receive a real
HTTP 401. The relay forwards that status and the bounded, credential-redacted
upstream body to the native app. It restores the saved transport key before
clicking **Try again**. This verifies native retry and credential recovery at the
relay boundary; editing the key in native settings during an active error is a
separate gate. Unexpected acceptance of the invalid key fails the probe before
model output is forwarded. Later failures remain failures.

The verifier checks that the first error causes exactly one request, the retry
retains exactly one original prompt and the original message-role sequence, and
every subsequent inference is explained by an actual tool continuation. The
provider must return the random file marker from the real Read result. It cannot
obtain that marker from the initial prompt. Both the error and successful reply
must appear in the native UI. Initial-error and post-success observation windows
are 2.5 seconds; this does not establish absence of arbitrarily delayed retries.

## Evidence and limitations

Local records are `logs/live-agent-verification-<run>/result.json`. The original
pre-fix GPT run `08URP2` and Grok run `HjnTb3` passed authentication recovery while
still sending the empty assistant; DeepSeek's two failures are retained above.
All three rebuilt-app runs pass on parent commit `a304860` plus this change,
using Provider default reasoning and each connection's saved key:

| Run | Requested model | Actual HTTP statuses | Tools / reported model |
| --- | --- | --- | --- |
| `GDoonA` | `deepseek-v4-flash` | 401 → 200 → 200 | Read; provider reports `deepseek-flash` |
| `SbD29v` | `gpt-6.1-sol` | 401 → 200 → 200 | Read; provider reports `gpt-6.1-sol` |
| `Mt80RL` | `grok-4.7` | 401 → 200 → 200 → 200 | Glob then Read; provider reports `grok-4.7` |

Each first retried request has the same roles as its rejected request. Actual
assistant/tool pairs appear only after tools are requested and executed. Grok's
extra request is accounted for by Glob; it is not a duplicate submission.
Each original prompt occurs once per request. All three owned launchers exit 0,
with no cleanup errors; disposable encrypted profile keys are removed.

Real GPT-6.1 Sol regression run `3DrRmX` additionally passes Read, Stop during an
incomplete response, then same-chat resubmission recalling the earlier file
marker. It makes four HTTP 200 requests, closes the transport **211 ms** after
the Stop click, and settles the relay abort **2 ms** after downstream closure.
Its launcher exits 0 and the disposable encryption key is removed. These are
individual observations, not comparative performance or upstream billing claims.
The final DeepSeek native reply screenshot was inspected. A post-run process
inventory finds no remaining `OpenVision.exe` processes.

Fixed build identities:

| Artifact | SHA-256 |
| --- | --- |
| Agent exec | `07b0b447dbaa40f89aa70e4f12b089f8f5b8e66cc341530df10137c65da09373` |
| Agent host | `c9c44ba51fab61046cec98eae3e1561ee92f9ac718cd51a6d56f5013907a6e60` |
| Workbench | `ce6bec813ce235e308ded5e2ab64153ae40fe22a65e91672dd14103321bf8bcf` |

The focused retry, relay, provider-error, deadline and ledger suite passes
**55 tests**. Producer tests execute the recovered catch and converter in both
bundles, including the original empty-message reproduction, partial content,
reasoning conversion, abort identity, installer idempotence and contract drift.
The production build validates **236 scripts, 124 manifests and 28 local
main-process modules**. Desktop syntax checks pass.

The first test attempt found the host's formatted recovery fixture missing.
It was restored from the independently retained formatted artifact only after
matching the raw snapshot digest
`e281e163c887bed31e17c088b7594f9faaf5c821bec08c2b116a1ce15164e58a`
and formatted digest
`1048bbd8a01d50535ac9e7f0c9210a5e7a21f6d40c5135154884084382600dc4`.
The local readability manifest was backed up before adding the provenance entry.
Recovered artifacts, profiles, logs and credentials remain outside the commit.

This does not resolve every recorded DeepSeek HTTP 400, prove native inference
timeout recovery, establish all reasoning tiers or validate macOS/Linux. Existing
partial-output preservation has producer regression coverage; the live Stop run
proves cancellation and earlier-history recall, not exact persistence of every
partial output item. No RAM, CPU, token saving or portable release update is claimed.
The acceptance ledger stays **6/42 Verified (14.29%)**.
