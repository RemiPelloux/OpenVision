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
responses are rejected. Credentials are retrieved from local secret storage.

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
HTTP response limits and upstream abort. These observations do not establish
external GPT/DeepSeek/Grok compatibility, suggestion quality, partial acceptance,
latency budgets or macOS/Linux behavior. OV-602 and OV-603 remain **Partial**.
