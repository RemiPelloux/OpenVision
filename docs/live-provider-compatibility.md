# Live provider compatibility — 13 October 2026

These checks contacted the three saved Codex Easy connections at
`https://codex-easy.ai/v1`, using each provider's own stored credential. They
establish direct API behavior for specific synthetic requests. They do not prove
native Agent rendering, history, branching, subagents or complete model support.

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
The next gate is to establish the upstream contract and verify the native
request/replay path, then correct capability handling at its producer.

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
Agent flows, all reasoning tiers, other models, images, autocomplete and native
macOS/Linux remain open. OV-102/OV-203 remain Partial and the 42-story denominator
is unchanged. No GitHub Actions are used.
