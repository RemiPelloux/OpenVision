# Agent provider failure-to-history matrix

16 October 2026. P0 work on OV-102 (chat, Stop and retry) and OV-204 (provider
failures). **Linux x64 only** (Omarchy/Hyprland Wayland, source build of the
3.21.13 runtime input). Windows and macOS were not run for this report. All
responses below come from controlled loopback fixtures and disposable
certificates; **they are not live inference** and establish no provider's
capability contract. Neither story is promoted; the ledger stays **6/42 Verified**.

## Producer paths

The Agent loop exists twice: `cursor-agent-exec` (failure producer `S9`) and
`cursor-agent-host` (`gce`). Native runs record
`cursor_agent_host gate is disabled, effective agent-host topology is disabled`
in the renderer log (observed). Both workbench variants check that gate only
when `localMode` is false, so OpenVision's local mode runs the exec (legacy)
producer (derived from the built workbench). Only the exec bundle loads the
provider error boundary. A new test fails if the host topology becomes reachable
without that boundary. The host producer's empty-assistant correction has
recovered-code tests only; no native host-path run is possible or claimed.

## Matrix

Legend: **Covered** = earlier evidence (Windows unless stated); **Verified** =
new Linux native evidence in this report; **Fixed** = defect reproduced here and
corrected at its owner; **Gap** = reproduced and not fixed; **Unverified** = not
exercised. Exec path throughout; host path is not reachable natively.

| Failure class | Error / guidance | Explicit retry | Stop | Restart / history |
| --- | --- | --- | --- | --- |
| HTTP 401/403/429/500/502/503, context limit, oversized/stalled error body | Covered; Linux Verified | Covered; Linux Verified | Covered (open stream) | **Fixed**: 503 failure, Try again and dismissal survive restart (follow-up) |
| Offline/refused, DNS, HTTPS protocol, untrusted certificate | Covered; Linux Verified | Covered; Linux Verified | n/a | Unverified |
| **Expired certificate** | Verified: `certificate has expired` plus certificate guidance | Verified | n/a | Verified as part of the restart run |
| **Hostname mismatch** | Verified: `Hostname/IP does not match certificate's altnames` | Verified | n/a | Verified as part of the restart run |
| Mid-stream disconnect after content | **Fixed**: was only `terminated` | Verified: **Resume**, one request, partial replayed once | n/a | Partial output, guidance and Resume restored (follow-up) |
| Mid-stream malformed JSON | **Fixed**: raw parse text only; now invalid-stream guidance | Verified: Resume | n/a | Partial output persisted |
| Mid-stream provider error event | Verified (redacted provider text) | Verified: Resume | n/a | Partial output persisted |
| **Stream ends without finish reason** | **Fixed**: automatic paid repeats (below) | Verified: Resume, one request | n/a | Partial output persisted |
| Tool rejection without OpenVision code | **Fixed**: no remedy text | Verified | n/a | User turn persisted |
| **Actual image** to a text-only model | **Fixed**: no remedy text; image was sent | Verified | n/a | User turn persisted |
| Stop during partial stream | n/a | Follow-up after restart verified | Verified: socket closed, no new attempt | Partial persisted; prompt replayed once |
| Header/body inactivity deadlines | Covered (Windows, full duration) | Covered | n/a | Unverified on Linux |
| Live GPT/DeepSeek/Grok failures | Covered only for recorded live 401 retry and Stop | Partly covered | Covered (GPT) | Live failure-restart unverified |

## Reproduced defects and corrections

**Unfinished stream repeated paid inference.** A stream that sends content and
closes without `finish_reason` or `[DONE]` makes the exec stream wrapper throw
`LocalIncompleteStreamError`. The Agent retry classifier treated it as transient.
Run `provider-matrix-cdtm2n` observed **5 requests within 30 seconds** for one
submission, with the partial text repeated in the transcript and Stop still
visible. The retry budget is `maxRetries: 10` in the bundle (inferred ceiling;
the loop end was not observed). The policy now classifies this error as a
provider failure. It is terminal for automatic retry, keeps received output
and offers **Resume**; one request is sent. A recovered-code test runs the
original wrapper and the patched Agent classifier.

**Unhelpful mid-stream errors.** A dropped connection after content displayed
only `terminated`; Undici's `UND_ERR_SOCKET` cause now maps to the existing
interrupted-connection guidance. JSON-parse and type-validation stream errors now
get invalid-stream guidance. The original detail text is retained after it.

**Capability rejections without shared codes.** Earlier guidance needed
OpenVision fixture codes. Realistic OpenAI-compatible 400 bodies received no
remedy. The policy now attributes a 400/404/415/422 rejection to tools or images
only when the actual request sent them and the provider text names them. Tests
cover Chat Completions and Responses shapes, raw bodies and non-attribution.
The native image case sends a pasted 32×32 PNG; the outgoing request contains one
`image_url` part. Text-only catalog entries still allow attachment: the
workbench never consumes `supportsImages`. That pre-submit behaviour is
**unverified as a design choice**, not changed here.

All corrections are in `desktop/provider-error-policy.js`; the existing build
installer copies it as the exec helper. No bundle anchor or marker changed.

## Remaining gap: unresolved failure across restart

After an unresolved 503, closing the app persists the user turn and composer
status `aborted`, but no `submitErrorDetails`. After restart, the same chat
returns without the error or **Try again**. The screenshot shows the failed turn
with no indicator. A new follow-up sends once, with each prior prompt once and
no empty assistant. This fails the failed-response-record part of the history
clause. The owner is chat-state persistence in the workbench and remains open.
This paragraph records the pre-fix state; the follow-up below corrects it.

## 16 October follow-up: unresolved failure persists across restart

**Linux x64 only**, source build of the 3.21.13 runtime input, controlled
loopback fixtures (**not live inference**). Windows and macOS were not run.

**Owner (observed in the recovered workbench, both `desktop` and `glass`).**
A terminal provider failure lives only in composer `submitErrorDetails`; the
OpenVision retention patch flags it `openvisionProviderFailure`. Composer
records are written by `persistLoadedComposer` → `X1u`/`fZh`, whose converter
`Y1u`/`gZh` is an explicit field allowlist without `submitErrorDetails`. The
loader `P4s`/`Uba` spreads every stored field back. The failed turn's AI bubble
is stored with `errorDetails`, but the composer view reads the composer field,
so restart showed an ordinary unanswered message. The shutdown save hook
re-serializes every loaded composer, so dismissal and retry also reach disk
through the same serializer (derived from the recovered code; confirmed below).

**Reproduction before the fix.** `provider-matrix-2kQAr4` (parent `38d0fe82`):
the 503 user turn was saved, the composer record had status `aborted` and no
failure field, and after restart neither the error nor **Try again** appeared
(screenshot inspected).

**Correction.** `desktop/provider-failure-persistence.mjs` (bundle chain, after
`providerManualRetry`; first backup and build cache through the existing
bundle customizer) adds one additive field. The serializer stores it only for
flagged provider failures, as an allowlist: request id, title, message,
connect code, retryability, `resumeOnRetry` and a single callback-free
`resume` button labelled **Try again** or **Resume**. The protobuf error, when
present, is stored as JSON and revived with the same type the bubble reviver
uses. Stack traces and all other fields are dropped. Credential-shaped text (URL
user info, query and fragment, bearer/basic tokens, `sk-`/`xai-`/`pk-` keys) is
scrubbed before storage. The loader re-applies the same allowlist, so unknown
stored fields are never revived; records without the field load unchanged. No
new callback is needed: the recovered error-button renderer already routes a
`resume` button without a callback to `composerChatService.resumeChat(handle)`.
Drift guards refuse a changed serializer, loader, reviver or resume fallback.
The helper block carries a versioned marker and is replaced in place on an
edited build.

**Native result.** Full matrix `provider-matrix-EuBC0P` (parent `38d0fe82` plus
this change): all 8 failure cells, Stop and three new restart cells pass with
**20 requests** in total and four owned launches, each exiting 0. Focused run
`provider-matrix-mZchVl` passed the same restart cells first. Observed:

| Restart cell | Saved record (SQLite `composerData:<id>`, read directly) | After restart |
| --- | --- | --- |
| Unresolved 503 before content | `status: aborted`; failure with `Try again`; fields `extraButtons, isRetryable, message, openvisionProviderFailure, requestId, title`; no stack trace; no fixture key | Error text and **Try again** visible; **0 requests** on restore |
| Retry after restart | — | **Try again** sends **1 request**; each earlier prompt once (`restart-pending` 1, `stop-partial` 1); no empty assistant; error cleared after the reply |
| Failure after partial output | failure with `Resume`; partial text bubble saved | Partial text, interrupted-connection guidance and **Resume** visible; 0 requests |
| Dismiss after restart | field absent after the next close; record has no key | Close button sends 0 requests; after a third launch the partial text stays, the error and recovery action do not return; 0 requests |

The four screenshots (`restart-unresolved-failure.png`,
`native-provider-matrix.png`, `restart-partial-failure.png`,
`restart-after-dismiss.png`) were inspected. The fixture key was absent from
**170 log files** and **5 profile storage files** in both runs. Hashes for
`EuBC0P`: workbench
`c03f9fac10b356a787fa7c8303b9c021b47303d74266e29df14d34f6d2a2ebb8`, Agent exec
`ec5f9aca0315c293d94851db24d4bda7ca2d5ba1709be8551d53cab445a5d1aa`, helper
`b1580c6860d81c633e315e49e78747810e0f9867c0b032fbf977e9185afe29b9`.

Not observed natively: a stored protobuf `error` (the local provider failures
had none; the reviver path is covered by tests only), retry by **Resume** after
restart (Resume is restored and routes through the same `resumeChat` call as
**Try again**), crash without the shutdown save hook, and live providers.

`desktop/provider-failure-persistence.test.mjs` (in `npm run test:provider-errors`)
executes the patched serializer and loader from both built workbench variants:
allowlist and scrubbing, non-provider and dismissed records, old records,
corrupt stored errors, unknown stored fields, the recovered resume fallback,
retry and dismissal clearing, idempotence and in-place upgrade.

Commands for this follow-up (same Linux x64 machine, parent `38d0fe82`):

```sh
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 input>
npm run test:agent-retry        # 27/27
npm run test:provider-errors    # 48/48 (8 new persistence tests)
npm run test:provider-storage   # 60/60
npm run test:agent-review       # 88/88
npm run test:build-integrity    # 26/26
npm run check:desktop && npm run build:desktop && npm run docs:check
npm run verify:provider-matrix  # logs/provider-matrix-EuBC0P: 8/8 + Stop + 3 restart cells, 20 requests
npm run verify:provider-errors  # logs/provider-errors-wE46H7: 17/17, 38 requests
npm run verify:agent            # logs/agent-verification-PWDql5: success
```

**Producer paths.** The fix is in the workbench and keys only on the
`LocalProviderError` flag set from the exec bundle's provider error boundary.
The Agent host topology stays unreachable in local mode, and its guard test now
states this dependency. The glass-environment branch that stores
`submitErrorDetails` without the flag is not persisted; it is not reached by the
desktop workbench (inferred from `isGlass`, not exercised).

Live Linux follow-up: [live Codex Easy failures on Linux](../verification/live-provider-linux.md) covers a real 401 → restart → restored error and Try again → one retry request, and a real 403 `INSUFFICIENT_BALANCE`. Live success paths were blocked by the account balance.

## Secret handling

The fixture key is reflected in error bodies, stream events and malformed
chunks. It was absent from the UI after restart and every failure. It was
absent from **86 log files** and **5 profile storage files**:
`state.vscdb`, its WAL and JSON settings/state. Matches were checked as raw bytes.

## Commands and evidence

```sh
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 input>
npm run test:agent-retry        # 27/27
npm run test:agent-timeout      # 40/40
npm run test:provider-errors    # 40/40 (36 before this change)
npm run test:provider-storage    # 60/60
npm run test:build-integrity     # 26/26
npm run check:desktop && npm run build:desktop && npm run docs:check
npm run verify:provider-errors   # logs/provider-errors-3yQrGl: 17/17, 38 requests
npm run verify:provider-matrix   # logs/provider-matrix-sI60Hc: 8/8 + Stop + restart
```

The pre-change Linux baseline `provider-errors-5VzSoX` also passed 17/17.
`npm run verify:agent` (`agent-verification-Z5VhdI`) failed on Linux at
kept-edit redo. The verifier sends `Control+y` and the file kept its undone text.
That OV-103 edit path is outside this change and remains unresolved here.
Final matrix `sI60Hc` (parent `1c753c64` plus this change) made **19 requests**
and both owned launches exited 0. Hashes: Agent exec
`80506f897ba6058c46325f5d16fa4c62524fbe4429c077a7134b7c49e738d2e1`, helper
`b1580c6860d81c633e315e49e78747810e0f9867c0b032fbf977e9185afe29b9`, workbench
`865a11e824df62da0255efc6362fc0252b6ecefbc1b390aaa920f5f3fe0c37ee`.

Certificate fixtures use a disposable CA (`2528cb9f…`) with an expired
`localhost` leaf (2020) and a `wrong-host.openvision.invalid` leaf. Only the
owned launch trusts this CA, through `NODE_EXTRA_CA_CERTS`, and that disposable
profile sets `http.systemCertificates: false`. With the default setting, the
extension host passes an explicit CA list, so the same expired leaf failed
earlier with `unable to verify the first certificate`. That run was
`provider-matrix-3mwr1b`; it showed the same certificate guidance. No trust store
or verification flag changes. Explicit validity requires OpenSSL 3.4 or newer.
The displayed Node hint about `--use-system-ca` is observed, not changed.

## Status

OV-102 remains **Partial**. Failure persistence across restart is now fixed on
Linux with fixtures. Remaining gaps are live GPT/DeepSeek/Grok retry, timeout,
Stop and failure-restart clauses, branch conversation, Windows/macOS reruns of
the restart cells and the non-reachable host path. OV-204 remains **Partial**.
Remaining gaps are live provider and Windows/macOS evidence, image capability
before submission and process-wide header/log handling. This is source-build
evidence. The preview.7 portable package does not contain these changes.
