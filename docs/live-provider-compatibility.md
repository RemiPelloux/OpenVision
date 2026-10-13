# Live provider compatibility — 13 October 2026

These checks contacted the three saved Codex Easy connections at
`https://codex-easy.ai/v1`, using each provider's own stored credential. They
establish direct API behavior for specific synthetic requests. Separate native
Windows Agent checks below exercise selection, rendering and Read continuation.
Neither set establishes history, branching, subagents or complete model support.

## Latest recheck after provider selection changes

These results supersede any blanket success interpretation of the older runs.
All inference below reached the real saved Codex Easy URL with its saved key.
No saved provider settings were changed.

| Local run suffix | Result |
| --- | --- |
| Direct `7uPiBv` | All three live catalogs HTTP 200. GPT 6.1 Sol and DeepSeek V4 Flash passed the plain SSE exact-reply test with effort omitted. Grok 4.7 returned HTTP 200 and a complete stream but refused the requested phrase; its semantic check failed. |
| Native `Ry9gep` | GPT 6.1 Sol, Provider default: native Read and visible file-token answer passed; two HTTP 200 requests, 4,593 ms and 5,411 ms. |
| Native `PyU9tO` | DeepSeek V4 Flash, Provider default: initial native Agent request failed with HTTP 400 / `upstream_error`, 1,344 ms. No Read continuation occurred. This contradicts the earlier success as a reliable compatibility claim; cause unresolved. |
| Native `iGrWN2` | Grok 4.7, Provider default: actual Read continuation and visible file-token answer passed; three HTTP 200 requests, 5,179 ms, 3,901 ms and 6,001 ms. |
| Native `vF10zV` | GPT 6.1 Sol, High: native Read and visible file-token answer passed; both requests carried `reasoning_effort: high`, HTTP 200, 6,178 ms and 4,358 ms. |

Direct records are `logs/live-provider-verification-<suffix>/result.json`;
native records are `logs/live-agent-verification-<suffix>/result.json`.
All five owned test hosts exited 0. The native workbench digest was
`abd2eda32dbb4f68e60c93baa86850a264826a2d2418a735549588894c171962`.
The native verifier now uses the provider-scoped model row and native Reasoning
submenu; wire-effort assertions remain mandatory. Native runs still use the
unchanged-body relay described below, with a simulated catalog only.
The separate lifecycle tests use simulated inference and must not be counted as
additional live-model successes.

## Observed matrix

All three `/models` requests returned HTTP 200. Their catalogs contained 11 GPT/
image entries, six DeepSeek entries and four Grok entries; none of the currently
enabled saved IDs was missing. The responses supplied no reasoning capability
metadata. Listing an ID does not establish chat/tool/reasoning support.

| Requested model | Request shape | Observed result |
| --- | --- | --- |
| `gpt-6.1-sol` | Chat Completions SSE, `reasoning_effort: low`, automatic tool choice, 512 output-token limit | Valid synthetic tool call followed by exact expected text after receiving its result. Response model was `gpt-6.1-sol`. |
| `grok-4.7` | Same automatic tool roundtrip, low reasoning | Passed; response model was `grok-4.7`. An earlier forced-tool run returned a valid call but HTTP 429 on continuation. Both records are retained. |
| `deepseek-v4-flash` | Plain text SSE, no reasoning field or tools, 512 output-token limit | Exact expected text received. Response model was `deepseek-flash`; this alias is preserved rather than treated as equal to the requested ID. |
| `deepseek-v4-flash` | Automatic tool choice, reasoning field omitted | Initial tool call and arguments passed; continuation returned HTTP 400, `upstream_error` / `Bad Request`. |
| `deepseek-v4-flash` | Tool request with `low`, `none` or `high` reasoning | HTTP 400. A diagnostic `high` request with `thinking: {type: "enabled"}` also returned HTTP 400. |

These DeepSeek results are failures of the exact tested shapes. They do not
establish that every DeepSeek model or every reasoning payload is unsupported.
The existing fallback menu includes values that are **not live-verified** for
this connection, and the tested values failed here. No saved provider URL, key,
model enablement or reasoning selection was silently changed to hide a failure.
The native request path has now passed the Read check with effort omitted.
The direct probe's failing continuation has a different request shape; its failure
does not establish a native Agent defect. The full upstream effort contract remains
unverified.

## Native Windows Read and provider default

OpenVision now offers **Provider default** alongside each model's explicit tiers.
This is a local selection, removed before the upstream request. Both recovered
Agent encoders omit `reasoning_effort` and `reasoning.effort`, preserving unrelated
reasoning options. **Off** still sends `none`; explicit High remains High.
Fresh selections use Provider default; saved explicit preferences are preserved.
No retry silently changes the selected tier.

The native verifier creates a disposable project with an unopened file containing
a unique token. It selects the model in the native picker and asks the Agent to
Read the file. Success requires that token in the tool continuation, the provider's
assistant stream and the visible answer, with the file unchanged and owned host
cleanup confirmed. Real inference goes through a loopback relay that forwards
request bodies unchanged and swaps transport authentication in memory. Its
`/models` response mirrors saved capability hints; it does not prove live discovery
or direct real-URL selection in the native UI.

| Native run suffix | Choice and result |
| --- | --- |
| `3RahMB` | DeepSeek V4 Flash, Provider default: initial and Read continuation HTTP 200, 4,297 ms + 3,246 ms. Wire effort absent; returned model `deepseek-flash`. |
| `CtRGE9` | GPT 6.1 Sol, Provider default: initial and Read continuation HTTP 200, 7,802 ms + 4,587 ms. Wire effort absent. |
| `yVytrk` | Grok 4.7, Provider default: initial and Read continuation HTTP 200, 4,776 ms + 3,279 ms. Wire effort absent. |
| `69hfq1` | DeepSeek V4 Flash, High: wire `reasoning_effort: high`, initial HTTP 400. |
| `f373Ht` | Earlier DeepSeek success with wire effort absent despite a High UI label: relay capability format was wrong. This is not evidence for High; the catalog format was corrected before the later runs. |

Each suffix names `logs/live-agent-verification-<suffix>/result.json`. These owned
hosts exited with code 0. Earlier UI setup failures `pRCs9B` and `QkfY4P` made no
provider request and remain local evidence.

```sh
npm run verify:agent:live -- --live --model deepseek-v4-flash
npm run verify:agent:live -- --live --model gpt-6.1-sol
npm run verify:agent:live -- --live --model grok-4.7
```

This opt-in runner consumes real quota. Without `--live` it prints help. The
default reasoning selection is Provider default; `--reasoning high` verifies that
explicit value, including failures. The relay permits at most six inference
requests, 60 seconds each and 4 MiB per request/response. It does not rewrite the
native token limit. Reports contain sanitized request metadata, not full prompts,
keys or reasoning text. Six offline HTTP tests verify unchanged forwarding,
authentication, marker evidence, redaction and cancellation/cleanup of active
connections. They do not establish live provider cancellation.

## Run locally

The runner is opt-in and consumes real provider quota. It sends only synthetic
text/tool data, never project files. It performs no automatic retries or URL/model
fallback. Each inference has a 512-token requested output limit and a 45-second
deadline; each catalog request has a 20-second deadline. Whether an upstream honors
an output limit remains provider behavior.

```sh
npm run verify:providers:live -- --live --model gpt-6.1-sol
npm run verify:providers:live -- --live --model grok-4.7
npm run verify:providers:live -- --live --model deepseek-v4-flash --mode chat --reasoning omit
npm run verify:providers:live -- --live --model deepseek-v4-flash --reasoning omit
```

Without `--live`, the command only prints help. Without `--model`, it probes one
configured/discovered representative from each of the three families; it does
not test the entire catalog. `--reasoning` controls the exact wire value; `omit`
removes that field. `--thinking enabled|disabled` adds an explicit diagnostic
thinking field. Unsupported or failed requests exit nonzero and remain evidence.

The runner reads the saved database read-only, creates an owned disposable
OpenVision profile, waits for its window, and decrypts keys in memory. On Windows
it copies only the DPAPI-wrapped profile encryption key, removing that disposable
copy after confirmed host cleanup. Plaintext keys are not written to reports or
files. Node performs the bounded network probes; Electron only supplies secret
decryption. Reports retain requested/reported IDs, endpoint, request shape,
status, timing, response IDs and exact synthetic response. Transport-key echoes
are redacted. No reasoning text or full request transcripts are persisted.

## Evidence and limitations

Local records under ignored `logs/`:

| Run suffix | Evidence |
| --- | --- |
| `EeuBM8` | GPT automatic tool roundtrip, 3,211 ms + 3,386 ms |
| `on182l` | Grok automatic tool roundtrip, 2,379 ms + 6,410 ms |
| `hA2zIH` | DeepSeek plain text without reasoning, 1,803 ms |
| `BtluyY` | DeepSeek automatic tool request passed; continuation HTTP 400 |
| `e2sdBa`, `pLvog5`, `qDlU5j` | DeepSeek low/none/high request failures |
| `SULkdu` | DeepSeek explicit thinking + high diagnostic failure |
| `RVcUGo` | Initial GPT success, DeepSeek HTTP 400, Grok continuation HTTP 429 |

Each suffix names `live-provider-verification-<suffix>/result.json`. The final
Node-based runs record OS, architecture, commit and verifier/helper/runtime
digests. Historical intermediate runs preserve their narrower metadata. The
successful GPT/Grok and latest DeepSeek runs closed their owned host with exit 0.

An earlier Electron-main-thread diagnostic (`AObJPf`) stalled and required
termination of its identified disposable host. Its capability outcome is unknown,
recorded in `incomplete-run.json`. The verifier was changed to keep network work
outside Electron's main thread. This incident is not attributed to a provider or
declared fixed in the product without a reproducible cause.

Six offline verifier tests cover fragmented SSE/UTF-8, private reasoning replay,
malformed/oversized streams, invalid tool calls, key redaction, missing catalog
models and real HTTP timeout/socket closure. Those fixtures validate the probe;
they add no live-provider support claims. Live cancellation, retries, full native
Agent flows beyond the Read checks, all reasoning tiers, other models, images,
autocomplete and native macOS/Linux remain open. Only Windows is available for
native testing at present. OV-102/OV-203 remain Partial and the 42-story denominator
is unchanged. No GitHub Actions are used.
