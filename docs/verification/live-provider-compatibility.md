# Live provider compatibility — 14 October 2026

These checks contacted the three saved Codex Easy connections at
`https://codex-easy.ai/v1`, using each provider's own stored credential. They
establish direct API behavior for specific synthetic requests. Separate native
Windows Agent checks below exercise selection, rendering and Read continuation.
Each run establishes only its named workflow; none establishes complete model
support or reliability across all requests. Scoped subagent evidence is linked below.

15 October follow-up: [real authentication retry](../recovery/rea-agent-retry-history.md)
reproduces and fixes an empty failed-response message in both Agent producers.
The failed and successful native runs are retained in that report. Its real
HTTP 401/manual retry coverage is distinct from simulated failures and from
the still-open native inference timeout gate.

## Native Stop and same-chat resubmission

The native `--stop` check first completes a real Read roundtrip, then asks for
80 short testing tips. After actual assistant content arrives, it clicks Stop
while the stream is incomplete. It requires transport cancellation within five
seconds, no extra inference request during the following second, and exactly one
new request when the user submits again. That request must retain the previous
assistant answer and visibly recall the file marker without another tool call.

| Run | Model / reasoning | Click to transport cancellation | Relay abort settled | Result |
| --- | --- | --- | --- | --- |
| `fOvYMl` | GPT 6.1 Sol / Provider default | 203 ms | 3 ms | Four real inference requests; Stop and same-chat recall pass |
| `LqWSzy` | DeepSeek V4 Flash / Provider default | 168 ms | 3 ms | Same scoped check passes; response model `deepseek-flash` |
| `ZoHk6m` | Grok 4.7 / Provider default | 242 ms | 4 ms | Same scoped check passes |

Each run is retained at `logs/live-agent-verification-<run>/result.json`.
Inference bodies were forwarded unchanged to the saved Codex Easy connection;
catalog responses mirror saved capability hints and are simulated. The native
workbench digest is `42b189a00a9c54629b458bfec622be8eb4a8e04d26c02f1500efd59f7e696bd0`.
The Windows launcher exited 0 in each run; older reports call this field
`ownedHostExit`, which does not independently establish native main-process exit.

This proves client transport closure, not that upstream computation or billing
stopped. These are individual observations, not comparative latency benchmarks.
CPU, peak process-family memory and token costs were not measured. Live
authentication retry is now covered by the follow-up above; additional error
types, controlled timeout recovery and other reasoning choices remain open.
Earlier GPT High run `B1qsQj` received no headers/content on its third request
within the relay's 60-second bound. It failed before Stop could be exercised;
that retained failure is not timeout-recovery acceptance evidence.

```sh
npm run verify:agent:live -- --live --model gpt-6.1-sol --stop
npm run verify:agent:live -- --live --model deepseek-v4-flash --stop
npm run verify:agent:live -- --live --model grok-4.7 --stop
```

These commands consume real provider quota. No acceptance story is promoted.

## Native history and branching

The opt-in `--history` acceptance extends Read with a full app restart, recall of
the previously read random marker, Fork Chat, and recall in that new chat. Each
recall must make exactly one real request containing the earlier assistant answer,
return the original marker visibly, and use no additional tool. The latest prompt
does not contain the marker. Reasoning choice is checked on every request.

After both owned app instances exit, the verifier opens only the disposable
database read-only. It requires distinct chat identities, the source's persisted
recall, no branch prompt in the source, an identical copied transcript prefix,
and precisely one new user/assistant exchange in the fork. It does not mutate
the database to make the check pass.

| Run | Model/choice | Real request durations | Result |
| --- | --- | --- | --- |
| `C3MaSN` | DeepSeek V4 Flash / High | 2,604 / 1,505 / 2,184 / 1,800 ms | Four HTTP 200 requests; Read, restart recall, fork recall and persisted isolation pass. Five source messages, seven fork messages. |
| `rB8rYb` | GPT 6.1 Sol / High | 5,518 / 6,235 / 3,910 / 5,263 ms | Same complete scoped check passes; four HTTP 200 requests and five/seven persisted messages. |
| `GD14Po` | Grok 4.7 / Provider default | 4,511 / 3,214 / 3,702 / 3,490 ms | Four HTTP 200 requests; Read, restart recall, fork recall and persisted isolation pass. Six source messages, eight fork messages; reasoning effort omitted. |

All three runs used the runtime digests recorded below, verifier
`8ae707b6605dce49937508fd3e322051a853fd1bfb658f55a654a1af953e979d`,
relay `b1a61d93a576c47039abb8e1b15422e6ca6487532250b1ca51a5a1a7305fc7e6`,
and history helper `2af2c8d5f7fbb20a9751c3a3b891cef472dd48da0b47696d5fb813c9b9a5a046`.
All owned hosts exited 0 and the disposable encrypted profile key was removed.
The normal user profile was read only for provider configuration/credential access.
Catalog responses remain simulated; all inference is live Codex Easy traffic.

Earlier verifier failures are retained: `P1TkW7` rejected a correct recall solely
because the model added a space after the prefix; `0efkxB` used an ambiguous
command-palette input locator; `GENot4` checked fork identity before the async
fork finished. The verifier now accepts optional prefix whitespace, locates the
textbox by role and waits for the new visible chat identity. These are verifier
repairs, not product fixes or successful acceptance runs.

```sh
npm run verify:agent:live -- --live --model gpt-6.1-sol --reasoning high --history
npm run verify:agent:live -- --live --model deepseek-v4-flash --reasoning high --history
npm run verify:agent:live -- --live --model grok-4.7 --history
```

OV-102 remains Partial: controlled timeout and remaining lifecycle cases are not
established by recall. Authentication retry is covered by the follow-up above;
Provider-default Stop is covered separately. No additional story receives
Verified credit.

## Latest recheck after provider selection changes

14 October diagnostic follow-up: the unchanged Windows Agent now passes DeepSeek
V4 Flash Read continuation with Provider default (`CwCJFR`, two HTTP 200 requests,
2,408 / 1,430 ms) and High (`eOVBXB`, two HTTP 200 requests, 2,313 / 1,677 ms).
Both returned the actual unopened file marker, preserved the file, and exited 0.
High was present on both outgoing requests in `eOVBXB`; the reported response
model was `deepseek-flash`. Acceptance of the wire value does not establish the
provider's internal reasoning budget or consistent future availability.

The preceding native run `H8Sc7d` still failed HTTP 400 in 1,245 ms, request ID
`c44cb953-7970-4ced-a23a-7685b735f444`. Its first request was captured locally with
the transport key redacted. Two direct diagnostic batches then contacted the
same saved connection, without executing tools:

| Run | Comparison | Result and limit |
| --- | --- | --- |
| `FZrCGd` | Minimal control; captured native request; simpler messages with all 19 tools; original messages without tools; simpler messages without tools | Five HTTP 200 completed streams. Each requested 512 output tokens. These are payload diagnostics, not native acceptance. |
| `JILIlU` | Captured native request with omitted, 512, 8,192, 32,768, then omitted output limit | Five HTTP 200 completed tool-call streams. Both omitted-limit replays have request SHA-256 `bdb837ff1e4678a10f603f0a4f2c1e5e2e4df65f523b6a112892608323398be7`. |

These comparisons do not identify a consistently rejected field. No runtime
payload rewrite, forced token cap, automatic retry or model fallback was added.
The root cause of the alternating failures and successes remains unknown; the
earlier failures below are retained. Product Agent/workbench digests remained
`8601f2812c37d7eda5020ef26f51536ac9da8ffd11588b6e27d11c8e4b39c830` /
`4951d1ba394d758c86c9939873a2c379d653b9cb45de5083c01e3b7ca6747400`.

14 October: native DeepSeek V4 Flash, Provider default, run `Fkiask` failed
before Read with one actual HTTP 400 (`upstream_error: Bad Request`) in 988 ms.
The request omitted reasoning effort and reached the saved Codex Easy endpoint;
request ID `859ddd1f-2fb5-4df4-b31a-917d2856fb93`. No file tool or continuation ran.
The owned host exited 0. This reproduces the earlier `PyU9tO` failure; the cause
remains unresolved, and native DeepSeek compatibility is not claimed. The
provider-failure changes were present (Agent `8601f2812c37d7eda5020ef26f51536ac9da8ffd11588b6e27d11c8e4b39c830`,
workbench `4951d1ba394d758c86c9939873a2c379d653b9cb45de5083c01e3b7ca6747400`).
The verifier stops on the upstream error, so this run is not a manual-retry UI
acceptance check; native local fixtures establish that behavior separately.

14 October: native Grok 4.7, Provider default, run `YaqVHy` passed with the same
Agent/workbench build. The real provider requested Glob, then Read, and returned
the disposable file's random marker after receiving its tool result. Three HTTP
200 requests reached Codex Easy; the observed response model was `grok-4.7` and
reasoning effort was omitted. The file remained unchanged and the owned host
exited 0. This verifies the Read continuation path; Grok used an extra Glob call
despite the prompt asking for Read only, so exact instruction adherence and
minimum request count are not claimed. The catalog remained simulated while
inference bodies were forwarded unchanged to the real endpoint.

Native GPT 6.1 Sol High subagent run `wnAlDa` passed after restoring Task Models
settings and fixing disabled-child fallback. The real provider emitted Task,
the child emitted Read, then child and parent returned the actual disposable
file marker. Four HTTP 200 requests took 5,189 / 6,008 / 3,668 / 3,247 ms, all
with `reasoning_effort: high`; the file was unchanged and host exited 0.
See [subagent verification](subagent-reasoning-verification.md) for call-ID-bound
evidence and limits. The relay supplies simulated discovery but forwards native
inference bodies unchanged to the saved real URL/key. This successful workflow
does not resolve the preceding timeout or establish all-model reliability.

After the reasoning-capability lifecycle changes, native GPT 6.1 Sol High run
`oJS37r` reached the real saved Codex Easy endpoint twice. The initial request
returned HTTP 200 with a Read tool call in 4,124 ms. OpenVision read the file and
sent its result in the second request; both carried `reasoning_effort: high`.
The continuation timed out after 60,014 ms without recorded response headers.
The run failed. This supersedes a blanket interpretation of the earlier High
success; the cause of this timeout is unresolved. The owned host exited 0 after
manual dismissal of a verifier cleanup overlay and native Stop. The verifier now
dismisses menus before submission/cleanup, uses keyboard entry to the reasoning
submenu, and attempts host closure even if the native Stop cleanup fails. These
verifier changes were subsequently exercised by the successful `wnAlDa` run;
they are not evidence of improved provider reliability.

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
| Native `wnAlDa` | GPT 6.1 Sol, High: Task child Read and parent continuation passed; four real HTTP 200 requests preserved High, with actual file token in both child and parent results. |

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
The native request path has passed some Read checks with effort omitted and,
in the latest recheck above, High; other runs failed with HTTP 400.
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
keys or reasoning text by default. `--capture-payload` explicitly saves the first
request, including its disposable project context, under the ignored run directory;
the configured transport key is redacted. Nine offline HTTP tests verify unchanged forwarding,
authentication, marker evidence, redaction and cancellation/cleanup of active
connections, including a partial stream followed by another request. The offline
tests do not establish live provider cancellation; the native Stop runs above do.

### Diagnose a rejected captured request

```sh
npm run verify:agent:live -- --live --model deepseek-v4-flash --capture-payload
npm run verify:providers:live -- --live --model deepseek-v4-flash --native-payload logs/live-agent-verification-RUN/native-request.json
npm run verify:providers:live -- --live --model deepseek-v4-flash --native-payload logs/live-agent-verification-RUN/native-request.json --comparison output-limit
```

Replace `RUN` with the actual disposable run suffix. The default `structure`
comparison sends five variants, each with a requested 512-token limit. The
`output-limit` comparison preserves messages/tools and compares omitted, 512,
8,192, 32,768, then omitted limits. Each response retains the existing 45-second /
2 MiB bound. This is opt-in real quota use. No tool is executed and no continuation
is sent. Captured model identity must match exactly one saved enabled provider.
Diagnostics record request digests, sizes, status and response identity, without
persisting assistant output, tool arguments or private reasoning. A diagnostic
batch exits nonzero if any variant fails. Passing does not certify native behavior.

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

The native multi-file editing probe is documented separately in the
[live-provider edit report](../recovery/rea-agent-live-edit.md). It uses the
same saved-provider decryption and relay boundary, then verifies real
`StrReplace` calls, review rejection/retry, acceptance, Undo/Redo and restart
persistence. Its first round included one provider-requested `Read`, so it is
success-path evidence rather than a request-efficiency benchmark.

The runner reads the saved database read-only, creates an owned disposable
OpenVision profile, waits for its window, and decrypts keys in memory. On Windows
it copies only the DPAPI-wrapped profile encryption key, removing that disposable
copy after confirmed host cleanup. Plaintext keys are not written to reports or
files. Node performs the bounded network probes; Electron only supplies secret
decryption. Reports retain requested/reported IDs, endpoint, request shape,
status, timing, response IDs and exact synthetic response. Transport-key echoes
are redacted. No reasoning text or full request transcripts are persisted.

## Evidence and limitations

16 October [full-duration native timeout follow-up](../recovery/rea-agent-timeout-recovery.md#full-duration-native-follow-up):
`live-agent-verification-f9YLJ1` passes body inactivity then real GPT-6.1 Sol
Read/answer, and `live-agent-verification-uWlyQu` passes header timeout then real
DeepSeek V4 Flash Read/answer (reported model `deepseek-flash`). Each initial
stall is controlled locally, each explicit native retry makes two successful
HTTP 200 inference requests, and both hosts exit 0. No upstream timeout is
simulated or claimed. These scoped results do not promote a whole story.

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
