# OpenVision Quick Edit

14 October 2026. Native **Ctrl+K Quick Edit** connects to the custom model selected
in Agent. It is included in the **0.2.0-preview.3** portable app. Relocated checks
passed accept/save, undo, reject, failure/recovery, cancellation and Unicode/CRLF;
see [portable verification](../verification/portable-preview3.md).

## Use it

1. Configure a provider in **OpenVision Settings → Models**.
2. Select an enabled model in the **Agent model picker**, including its supported
   reasoning option. Quick Edit uses that selection.
3. Select code in an editor and press **Ctrl+K**. Enter the change and press Enter.
4. Review the native diff, then **Accept** or **Reject**. Save normally.
5. Press **Escape** while waiting to cancel. After acceptance, native Undo first
   restores diff review; a second Undo restores the original text.

HTTP failures appear in the prompt without displaying the provider's response
body. The file remains unchanged and the prompt can be edited and submitted again.

## Implementation and ownership

The recovered action and context-session owner retain their pre-read/pre-submit
hooks, rules preparation, inline diff review and editor history. Local mode now
uses the selected provider's Chat Completions endpoint rather than requiring a
hosted editing service. The original response wrapper assumed a different error
type and swallowed custom-provider failures; the local stream now passes directly
to the native diff consumer, with safe errors attached at its generator boundary.

Provider identity and credentials come from the existing settings and secret
storage owners. A changed provider route or canceled request cannot publish a late
edit. Each window owns at most four requests; navigation, destruction and explicit
cancellation abort them. The request deadline is 120 seconds. No automatic retry
or auxiliary title request is added.

Context serialization rejects more than 128 Ki characters and retains at most
three query/chat history entries each. HTTP response reading is bounded to 1 MiB
and accepted text to 128 Ki characters. A shared response reader also serves Tab
autocomplete: malformed UTF-8/JSON, truncated responses, refusals and tool output
are rejected. Edit output must be raw code; text is delivered to the native diff
one line at a time so document EOL normalization preserves multiline content.

## Executed verification

`npm run verify:inline-edit` drives the real Windows desktop with a disposable
profile, project, approved rule and hidden generated-memory record. Its HTTP
server returns controlled responses; **this is not live Codex Easy inference**.

Passing evidence: `logs/inline-edit-verification-2xw7GL/result.json`.

| Native check | Observed result |
| --- | --- |
| Rule filtering | Approved rule included; hidden legacy record absent from all six requests |
| Accept/save and Reject | Accepted code persists; Reject preserves original bytes |
| Undo | Two-step native history restores original file |
| HTTP 503 | Safe error visible; provider body/key absent; original file retained |
| Retry after failure | Edited instruction sent correctly; next diff remains usable |
| Escape during pending request | Upstream connection closes; file stays unchanged |
| Multiline Unicode | Accented identifier and emoji persist with CRLF |
| Request count | Exactly one request per submission, including failure/cancel |
| Storage preservation | Approved and hidden original SQLite values unchanged after shutdown |
| Cleanup | Both owned hosts exit 0; no uncaught renderer errors |

Workbench SHA-256:
`0f661fd96184348a4fcb6caf69dd5a45c61febfbde575b4ff9ef63ae63c485bb`.
The result records adapter and verifier hashes. Focused inline, completion,
memory, namespace and feature-status checks passed **48 tests, no skips**.
Desktop JavaScript syntax checks passed. Two consecutive builds preserved the
same desktop and Glass workbench hashes. Window-title changes now run before
namespace journaling, avoiding a stale journal on the next build; the original
local recovery backup remains under `backups/title-build-order/`.

## Remaining gates

Responses are currently buffered before review. Images, links and documentation
attachments are rejected with a clear message; use Agent for those inputs.
Live provider quality/reasoning, large edits, simultaneous edits, selection
changes during requests, and macOS/Linux native behavior remain unverified.
Earlier context preparation can still perform embeddings/whole-file work and
retain duplicate attachments internally. Outbound duplicate normalization below
does not optimize that earlier producer or establish whole-app RAM savings.

This closes the seeded native inline-rule gate for **OV-301**. That story remains
**Partial** for physical full-disk/I/O recovery; controlled cross-window IPC
review now has [separate evidence](../guides/project-memories.md). The fixed total stays
**6/42 Verified**. General Quick Edit acceptance
remains part of the broader editing stories.

## Duplicate attachment normalization

Captured native run `logs/inline-edit-verification-2AW8im/result.json` showed the
same code attachment repeated twice on retry and three times on cancellation.
The custom-provider context owner now sends the first occurrence of each exact
JSON value once. All fields participate in identity, including path, range,
contents, signatures and detailed lines. Object property order is ignored;
array order, extra metadata, null values, changed content and different ranges
remain distinct. Instructions, selection, nearby context and approved rules are
preserved, and the caller's source data is not mutated.

The existing 128 Ki-character input bound is enforced before normalization,
including duplicated input. This limits traversal and retained identity strings;
repetition cannot bypass the budget. Normal requests with zero or one attachment
keep the existing serialization path. Eleven focused context/inline tests passed,
including distinct-range/content preservation, reordered object properties,
caller immutability, escaped-size limits and early oversized-input rejection.

`desktop/benchmark-inline-edit-context.mjs` compares the original and changed
context functions against the exact captured cancellation payload. Retained
result: `logs/inline-context-benchmark-VFFMsS/result.json`. Five separate workers
per implementation each execute a first call, 1,000 priming calls and 10,000
measured calls. Both perform the same input serialization task; validation
requires the final contexts to differ only by two exact duplicate attachments.

| Measurement | Before | After |
| --- | ---: | ---: |
| Request context UTF-8 bytes | 1,260 | 634 |
| Code attachment entries | 3 | 1 |
| Median first-call elapsed time | 0.211 ms | 0.399 ms |
| Median warm elapsed time per call | 7.18 µs | 35.09 µs |
| Median warm CPU time per call | 6.3 µs | 37.5 µs |
| Median worker lifetime peak RSS | 53,828 KiB | 54,676 KiB |

This trades a small amount of local processing for 626 fewer bytes in this
request. It is not a CPU or RAM reduction claim. The first call excludes process
launch, module import and fixture parsing. Lifetime peak RSS includes those
activities; each measured worker has no children. The project toolchain has no
model tokenizer, so token counts and billed-token savings are **unmeasured**.
Electron memory, provider inference latency and model-quality effects were not
measured. The published preview.3 portable payload predates this normalization.

The rebuilt native run `logs/inline-edit-verification-4abAUo/result.json` passes
all ten workflow checks with both owned hosts exiting 0 and no renderer errors.
Its six captured requests were compared against the earlier native run;
`context-comparison.json` alongside the result confirms every context field is
identical after removing only exact repeated attachments. Retry now carries one
attachment instead of two, and cancellation one instead of three. All approved
rules, instructions, ranges and source contents remain unchanged. This uses a
controlled local HTTP provider, not live AI. The executed context helper SHA-256
is `d4bd64006887cddafc809fd5fd0d8943f94cdb77a0678474e9688ae6f92c5e8d`.
