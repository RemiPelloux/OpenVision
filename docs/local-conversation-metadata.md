# Local conversation metadata

The source build skips the hosted conversation-metadata contribution when
OpenVision runs in local mode. Local title generation and chat persistence
remain active. This change is not included in the preview.6 portable payload.

## Ownership and implementation

The recovered workbench contribution watched loaded chats, registered per-chat
subscriptions and sent changed titles plus workspace paths through the hosted
Agent client. The earlier [MCP ownership run](rea-mcp-ownership.md) recorded
unauthenticated failures from this path. Source inspection identified its
`updateConversationMetadata` call; those errors alone did not establish a
network destination or whether a request crossed the transport boundary.

OpenVision now guards registration at the contribution owner, before dependency
construction and watcher setup. It does not merely hide the error. The build
checks the recovered class, registration and lifecycle with a parser, fails on
missing or ambiguous anchors, and preserves registration outside local mode.
Both desktop and Glass transformations pass regression and idempotence checks.

Chat titles continue to use the first message's local four-word fallback,
preserving its casing, without a separate model request. Conversation storage
and history restoration have their own owners.

## Native Windows verification

Run after building the editable source:

```sh
npm run verify:local-metadata
npm run verify:local-metadata -- --with-hosted-sync
```

The verifier uses disposable projects, profiles and a workbench overlay. It
counts actual contribution construction and metadata-client invocation without
stubbing either method. A loopback inference fixture supplies deterministic
responses through the native provider settings and Agent UI. It uses no real
account or provider key. The control removes only the new registration guard
in its copied workbench; the normal runtime remains unchanged.

The candidate run `logs/local-metadata-verification-yFCYzV/result.json` passed
on Windows x64 with Node 24.18.0 on 15 October 2026. Its base commit is
`8dd38e2`; hashes identify the subsequent uncommitted build and verifier.
Normal workbench SHA-256:
`a18d1a61ad4db45b18de67ebe4994eeda3d9d55fc4fd014f3907747be7a09aae`.

| Boundary | Observed result |
| --- | --- |
| Local contribution registration | Zero constructions and zero metadata-client attempts before and after restart |
| Title and persisted history | First-message title, prompt and reply present in SQLite after closure |
| Resume | Same conversation ID after relaunch; the next inference includes the earlier prompt and reply |
| Inference count | Exactly two requests for two submitted messages; no auxiliary title inference |
| Cleanup and runtime preservation | Both owned hosts exited 0; normal workbench hash unchanged; no renderer page errors |

The positive control `logs/local-metadata-verification-wc2VJo/result.json`
also passed: restoring registration produced one construction and one client
attempt in each launch. Title/history and request-count checks still passed;
both hosts exited 0 and the normal runtime hash stayed unchanged. The counters
therefore distinguish the original path from the guarded path. Renderer logs
contain two unauthenticated metadata-sync failures in the control and none in
the candidate. This is log evidence, not a packet capture.

The first run `5jHS73` failed because the verifier expected title case; the
stored title correctly preserved the prompt's original casing. Only that
expectation changed before the passing run.

## Remaining gates

These are controlled native correctness checks, not live AI compatibility or
process-wide network-absence evidence. Mutex warnings remain in host stderr
and onboarding-contribution failures remain in both runs' renderer logs;
an empty renderer page-error collection does not establish clean application
logs. Listener lifetime and the earlier shutdown diagnostics remain separate
investigations in the [roadmap](roadmap.md#next-reliability-checks).

No model token usage, elapsed-time improvement, CPU time or peak process-family
memory comparison was measured. Removed constructor/client invocations do not
quantify RAM savings. Native macOS/Linux and extended traffic workloads remain
unverified for this change. OV-1005 stays Partial and the fixed ledger remains
**6/42 Verified (14.29%)**.
