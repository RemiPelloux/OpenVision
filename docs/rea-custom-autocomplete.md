# Custom-provider Tab autocomplete

OpenVision can request code insertions from an enabled custom model and display
them through the recovered native suggestion UI. Select **OpenVision Settings >
Models > Tab autocomplete model**. The default is **Off**. A fast model supporting
non-streaming Chat Completions is required; model discovery alone does not prove
that capability. This adapter supplies insertions, not predictive navigation.

## Recovered contract and implementation

The [autocomplete contract](rea-autocomplete-contract.md) traces the original
client (REA parent `ev_cf46caa2ba520ae84fd7f06f7200e43105196208c88d1062c5b65e8d012ffd6a`).
The new implementation uses the existing request owner, debouncer and native
suggestion accept/undo lifecycle. It emits `modelInfo`, an inclusive one-indexed
replacement-line range, and the replacement text preserving the existing line.
Both desktop and glass bundles use the same adapter.

The local configuration is created through the recovered `CppConfigResponse`
protobuf constructor. An initial runtime failure exposed a missing `heuristics`
default in a plain object; using the owning constructor preserves all defaults.
Build transformations validate their source anchors, retain backups, and are
idempotent. Content/recipe hashes skip unchanged large-bundle parsing.

Only the selected saved provider receives requests. The payload contains up to
8,000 UTF-16 units before and 2,000 after the cursor, plus the language identifier.
Truncation preserves surrogate pairs. The response has a 64 KiB byte ceiling and
an 8,000-character insertion ceiling. Markdown wrappers, tool calls and malformed
responses are rejected. The adapter requires an assistant message and
`finish_reason: "stop"`; truncated output, refusals and legacy function-call
responses are not code insertions. Invalid UTF-8 is rejected rather than repaired
into different source text. Credentials are retrieved from local secret storage.

The main process validates the sender, owns per-window requests, cancels older
requests when replaced, and aborts on renderer destruction/navigation or timeout.
The renderer checks cancellation, document version/disposal and cursor location
before dispatch and between emitted events. Errors appear in the native Tab
status entry. HTTP redirects are rejected to protect the selected credential route.

Freshness also includes editor document identity and the selected provider route.
Switching files, selecting Off, disabling a model or changing its provider URL
invalidates pending results. The settings selector searches model IDs and names,
groups by provider and mounts at most 42 options (40 matches, the selected model
when outside those matches, and Off). Searching preserves the saved selection.

## Verification and limits

Run `npm run test:completion`, `npm run build:desktop`, then
`npm run verify:completion`. The native verifier creates a disposable profile and
project, configures a local HTTP fixture through Models settings, types code,
accepts a real native suggestion with Tab, saves it, and verifies undo. It closes
only its owned app. Results/screenshots remain under ignored
`logs/completion-verification-*`.

The Windows run `completion-verification-CbBjat` proved authenticated request
routing, native suggestion display, Tab acceptance and undo without page errors.
The final run `completion-verification-PdtCKb` repeated those checks after the
freshness and bounded-selector changes. The browser fixture exercised 10,000
models, search, selection preservation and the 42-option bound without page errors.
The later run `completion-verification-w7k3hh` also proves multiline insertion
with accented text, Japanese and emoji, preserving surrounding code and restoring
the saved file with Undo. An earlier run exposed native chunking that displayed
only the first line of a complete insertion. Local mode now uses the existing
full-text consumer before display; the online chunking branch retains its contract.
Focused tests cover bounded context, CRLF/Unicode, cancellation/stale results,
HTTP response limits and upstream abort. Those initial observations did not establish
external GPT/DeepSeek/Grok compatibility, suggestion quality, partial acceptance,
latency budgets or macOS/Linux behavior. OV-602 and OV-603 remain **Partial**.

## Response validation and native failure matrix, 14 October

A real HTTP regression check showed that the previous adapter accepted
`finish_reason: "length"` with an incomplete string such as `return "unfinished`.
The response owner now validates completion termination, role, refusal/tool fields
and UTF-8 before returning insertion text. It preserves normal empty responses.
Only locally authored protocol diagnostics cross IPC; provider text, JSON parser
excerpts and arbitrary transport error strings cannot become status messages.
The native Tab status explains truncated, malformed, oversized and unsupported
responses. No fallback provider, retry, or additional inference request is added.

`logs/completion-verification-bQGYv4/result.json` passed on the real Windows
desktop. Its 13 cases cover empty text, token-limit truncation, content filtering,
tool calls, legacy function calls, malformed tool metadata, refusal, missing
termination metadata, invalid JSON, invalid UTF-8, HTTP 404, oversized responses
and Markdown wrappers. Each rejected response produces fresh visible feedback;
an actual empty response clears the prior error before the next case. Pressing
Tab and saving never inserts rejected code. Normal single/multiline Unicode
acceptance and undo still pass, and a valid completion succeeds after all failures.
The owned host exited 0 with no renderer errors. These are controlled HTTP replies,
not live model responses. Additional HTTP checks reject incorrect message roles,
missing choices, null JSON and insertions beyond the character limit.

The first native attempt `qUxcxg` replaced the entire document without the final
typed character needed by native trigger heuristics. It timed out before sending
an empty-case request. The second `bfso0g` observed the expected truncated-response
warning but used an ambiguous accessibility locator matching its container and
button. Both failures remain retained; the verifier now types the trigger and
selects the status button explicitly. Neither is treated as a product defect.

Production adapter SHA-256:
`186856eb8cb53caa706845ae7110bd8ba2ea221ad62c4d54938e716ebf445bfe`.
Loaded IPC helper SHA-256:
`1f737aa1aa7e761a1450eb908665defaddaa70dc1fcb66ab2220168eb8db5282`.

## Live Codex Easy compatibility sample

Run a quota-consuming probe with saved providers:

```sh
npm run verify:providers:live -- --live --mode completion
```

`logs/live-provider-verification-V3tDKi/result.json` passed against the actual
saved GPT, DeepSeek and Grok connections at `https://codex-easy.ai/v1`. It uses the
same production adapter, system prompt, 512-token output bound and 15-second
timeout. No response is mocked or rewritten. The fixture asks for the expression
in `function add(a, b) { return <insertion>; }`; returned code is parsed, never
executed. All three returned exactly `a + b` and passed the syntax/fixture check.

| Model | Actual inference requests | Observed request elapsed time |
| --- | --- | --- |
| `gpt-6.1-sol` | 1 | 3,976 ms |
| `deepseek-v4-flash` | 1 | 1,308 ms |
| `grok-4.7` | 1 | 2,393 ms |

These are single direct Node-fetch samples, excluding discovery and desktop
startup; they are not native editor latency measurements or a performance ranking.
Discovery also succeeded for each connection. The owned decryption host exited 0
and its copied encrypted profile key was removed. Credentials were not written
to reports. Token usage, CPU time and peak process-family memory were not measured.

OV-602 remains Partial: native failure handling and this live compatibility
sample are established, but representative multi-language/project suggestions,
larger live quality samples and native live-provider acceptance remain open.
OV-603 also requires the native editing and supported latency/cancellation/platform
matrix below. No extra acceptance credit is claimed for individual checks.

## Pending requests and partial-accept undo

Run `npm run verify:completion -- --editing` for native Windows word acceptance,
remaining-text Tab acceptance, undo, typing during a request, Escape and file
switching. This uses a disposable profile with the existing partial-accept setting
enabled and a controlled HTTP server that deliberately holds requests open.
It measures action-to-upstream-close against a 1,000 ms cancellation budget and
checks saved file contents. Completed results survive later test failures.

The initial `completion-verification-4UG62G` run found that Escape did not abort a
pending request within the budget. The recovered keyboard owner only called the
completion cancellation lifecycle when a suggestion was already visible. Local
mode now also aborts pending streams on Escape before a suggestion appears,
without intercepting the key or adding another global listener.

Runs `kogBIn` and `QcLBNV` then exposed intermittent partial-accept undo grouping.
In the detailed second trace, undoing the accepted word also removed the preceding
typed space. The recovered partial edit owner used `pushEditOperations` without
undo boundaries. Local partial acceptance now opens and closes an undo boundary
at that owner, retaining its returned selection and existing edit lifecycle.
Both transformations validate source structure, preserve backups, work for desktop
and glass, and are idempotent. Original failed runs remain retained locally.

The repaired native run `completion-verification-BjiwWb` passed partial word
acceptance, Tab remainder without duplication, exact undo in two steps, single
and multiline Unicode acceptance, pending typing/Escape/file-switch cancellation,
unchanged files and subsequent successful completion. No renderer errors; host
exit 0. Action-to-upstream-close samples were 412 ms for typing, 34 ms for Escape
and 93 ms for switching files, all below the declared 1,000 ms budget. The local
fixture response became visible 23 ms after server receipt; the complete input
sequence to visible suggestion took 534 ms, including native debounce.
The same-build repeat `completion-verification-0YrmCL` also passed, including
exact two-step undo and clean host exit. Its typing/Escape/switch cancellation
samples were 423/2/64 ms. No additional production changes separated these runs.

These single-workload samples are not live-provider latency or large-project
performance claims. CPU time, peak process-family RAM and token usage were not
measured. The normal profile's opt-in partial-accept preference is preserved;
Ctrl+Right accepts the next word when it is enabled. Line acceptance is unverified.
OV-603 remains Partial for broader editing/latency workloads and platform checks;
OV-602 retains its separate live-quality/native-live-acceptance gaps.

Verified Windows workbench SHA-256:
`7616cbe676459332496caae085d0cfc7120777ab9ec11dfa60ce03293a35632a`.
