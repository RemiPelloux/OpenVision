# Native Agent runtime verification

13 October 2026, Windows x64. `npm run verify:agent` launches an owned fresh
OpenVision profile and disposable JavaScript project. It adds a controlled HTTP
provider through Models settings and drives the actual Agent input and picker.
No external model or real API credential is used. The verifier closes its owned
app, including the busy-Agent quit confirmation if needed.

## Observed behavior

The final run is retained at `logs/agent-verification-RpTqIJ/result.json` with
`agent.png`. It established:

- One first submit produces exactly one authenticated streaming Agent request
  to the selected model/URL. The streamed reply appears in the native UI.
- Chat naming creates no extra request after the
  [local-title transformation](rea-local-chat-titles.md).
- A returned `Read` tool call reads the disposable `hello.js`; the next request
  contains its actual `export const answer = 42;` contents and the model reply
  appears in the UI. This executes the real local Agent tool loop, not a stubbed
  filesystem reader.
- Clicking the native Stop control closes the server's streaming response.
  This run measured **164 ms** from before the click to the server close event;
  an earlier run measured 136 ms. These are local loopback observations, not
  provider latency guarantees.
- No renderer page errors occurred during this run.

Before the naming change, `agent-verification-ywoavU` recorded a distinct
`localAgent.nameAgent` request plus the Agent request for the first submit.
The recorded system prompt specifically asks for a short chat title. This was
auxiliary work, not a duplicate Agent submission. Local titles eliminate that
extra inference while retaining the recovered bounded fallback naming behavior.

## Limits

OV-102, OV-103 and OV-1001 remain Partial. The fixture does not establish real
GPT/DeepSeek/Grok support, edit/command approval, denial, retries, malformed-stream
handling, resume/branch persistence, remote hosts, or macOS/Linux execution.
Provider token counts, retained conversation memory and long-session budgets
remain unmeasured. Saved results contain fixture model names and authentication
booleans; no transport key is recorded.

Earlier harness failures are retained: the native picker uses the short model
name, and Stop is a styled div without a button accessibility role. The verifier
selects the observed control; its missing role remains an accessibility gap.
