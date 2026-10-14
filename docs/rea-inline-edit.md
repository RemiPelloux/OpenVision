# OpenVision Quick Edit

14 October 2026. The development build now connects native **Ctrl+K Quick Edit**
to the custom model selected in Agent. The portable **0.2.0-preview.2** payload
predates this adapter; rebuilding the development desktop is required for it.

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
retain duplicate attachments. No completed-task token, CPU, peak-memory or
cold/warm latency comparison was run; bounds alone are not a measured speedup.

This closes the seeded native inline-rule gate for **OV-301**. That story remains
**Partial** for stale cross-window memory review and physical full-disk/I/O
recovery. The fixed total stays **6/42 Verified**. General Quick Edit acceptance
remains part of the broader editing stories.
