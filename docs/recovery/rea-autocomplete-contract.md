# REA sprint follow-up: autocomplete contracts and cancellation

12 October 2026. Input remains the installed **Cursor 3.21.13 Windows** recovery.
This is deeper analysis of the same input, not an update to a newer release.
Related stories: **OV-105** and **OV-601–OV-604** in the
[completion sprint ledger](../planning/completion-sprints.md).

## Recovered contract

REA analyzed `cpp_pb.js` and `aiserver_connectweb.js` within recovered bundle 4.
Both parsed successfully: 135,389 bytes and 16,323 visited AST nodes. Another
4,306 inventoried files were outside the selected source scope. Application and
semantic coverage remain partial. These are derived JavaScript representations,
not original TypeScript or recovered backend source.

Parent Evidence: `ev_cf46caa2ba520ae84fd7f06f7200e43105196208c88d1062c5b65e8d012ffd6a`.
Summary Evidence: `ev_0e457ce406f58393222bebe0122fd61de03bdf7895fd616054cc1c57b6981ad1`.
Complete session export is retained locally at
`cursor/evidence/openvision-autocomplete-contract-20261012.bundle.json` relative
to the REA workspace. It is excluded from this product repository.

| Boundary | Observation from the recovered client | Implication for OpenVision |
| --- | --- | --- |
| RPC descriptor | `AiService.StreamCpp` is server-streaming, with `StreamCppRequest` and `StreamCppResponse` messages. `CppConfig` is a separate unary method. | Chat discovery and Chat Completions support do not establish Tab support. A compatible adapter and configuration behavior are required. |
| Request context | Current file, diff histories, selected model, diagnostics, context items, LSP suggestions, additional files, file-sync updates and code results have declared fields. | Establish which context is actually used before designing token budgets or remote transfers. Field presence does not mean every request supplies it. |
| Timing/capabilities | Request fields include generation timing, workspace identity, cursor-prediction support and CRLF support. | Preserve capability and document-state distinctions; do not claim support simply by setting a flag. |
| Response events | Text, replacement range, model information, begin/done-edit, stream completion, binding identity and leading-EOL behavior are represented. | A stream of text alone cannot reproduce the existing edit protocol. Preserve ordering and distinguish end-of-edit from end-of-stream. |
| Prediction | A target carries relative path, explicitly one-indexed line number, expected content and retrigger flag. | Predictive navigation needs path/content/version validation in addition to ordinary suggestions. |

Focused manual reading of the recovered consumers adds these **static** findings:

- `entry.js:getStream` obtains the diffing provider, waits for debounce and context,
  serializes a protobuf request, and starts it with a generation UUID. In this path,
  several declared lists are sent empty. Abort forwards the UUID to `cancelCpp`.
- `entry.js:extractModelInfoFromStream` waits for model information. The ordinary
  non-multidiff path in `handleStreamOutput` then waits for a replacement range;
  it treats its start/end lines as one-indexed and inclusive. Other modes have
  distinct range/EOL handling that must be tested separately.
- `entry.js:streamCpp` calls `flushCpp`, translates buffered events, and polls at
  a five-millisecond delay when unfinished. That delay is an observed constant,
  not a measured latency result or a recommended performance budget.
- `Jrh.js:$registerControlProvider` registers the retrieval extension's stream,
  cancel, flush and report functions through the extension-host proxy. The
  native/server implementation behind that proxy remains outside this analysis.
- `entry.js:loadCppConfigIncludingHandlingProAccess` retrieves configuration and
  sets a geographic completion backend URL. Owning completion also requires
  investigating this configuration path.

The two consumer files above were manually inspected at the named methods;
they were not part of the new two-file REA graph. Static observations do not
establish an executed network request or a working completion backend.

| Recovered bundle-4 file | SHA-256 at this investigation |
| --- | --- |
| `cpp_pb.js` | `d9f032de7826e2445b2727aa0b140a08089abef0e611e3b7b4a77140dbdc184c` |
| `aiserver_connectweb.js` | `ac82958a486c755ae2c5274bbd0adac7ddffb338b651205db605ac2a382b17e9` |
| `entry.js` | `c69556894cddfc97071addbbca7639493b1f235332a0349ff15dacbac0616764` |
| `Jrh.js` | `7afe2227ac2b8cc5b3f0fd1ecd6c8008770b4ad4f1c316d475201a87fb9aeca2` |

## Implemented story OV-105

Two cancellation windows were visible in the recovered owner:

1. Cancellation during asynchronous context preparation could occur before the
   abort listener was registered. Adding that listener later does not replay a
   past abort, so request dispatch could still proceed.
2. The response loop checked cancellation before awaiting `flushCpp`, then could
   yield its result after cancellation. A buffered batch could also continue
   yielding events after the consumer canceled between chunks.

`desktop/completion-cancellation.mjs` adds cancellation checks at request entry,
before dispatch setup after context preparation, after the awaited flush, and
before each buffered event. Both desktop and glass workbench variants receive
the change. The transformation parses the owning class/methods and rejects an
unrecognized contract; it does not replace model/protocol validation downstream.
Build assembly retains its existing backups and includes this transformation in
the cache recipe.

The regression suite executes methods extracted from the actual transformed
recovered workbench, with controlled context/provider boundaries. For each
variant it checks already-canceled requests, cancellation during preparation,
cancellation during flush, cancellation between buffered chunks, normal
completion, failure propagation and transformation idempotency.

These tests prove the guarded client boundaries. They do **not** prove upstream
socket cancellation, interrupt an already-pending native `flushCpp` promise,
or implement an autocomplete backend. Normal-completion listener disposal,
cached/rest-stream ownership, live latency, document-version races, partial
acceptance and native/provider cancellation still need dedicated investigation.
Those unresolved scopes belong to OV-602–OV-604 and the performance stories.

## Next execution gates

1. OV-101–OV-104: pin the product support matrix and exercise the real core AI
   loop before declaring any provider supported end to end.
2. OV-601: follow the retrieval proxy into its native/network owner, reconcile
   request/configuration behavior, and specify a versioned completion adapter.
3. OV-602: implement and verify that adapter with a deliberately selected backend;
   report unsupported capabilities clearly instead of treating chat as Tab.
4. OV-603–OV-604: prove edit ranges, UTF-16/Unicode, CRLF, partial accept, undo,
   superseded requests and predictions on an owned project, then measure latency.

Native pseudocode coverage remains **1/52 PE files**. No original feature-parity
percentage or independent build completion is claimed by this investigation.
