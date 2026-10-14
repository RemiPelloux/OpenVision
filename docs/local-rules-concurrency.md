# Local rules: native concurrency and live context

14 October 2026. This follow-up covers OV-301 on Windows x64 using the prepared
OpenVision runtime. It does not establish the complete story or the 80% target.

## Observed defect and fix

Two real windows sharing one profile created different user rules concurrently.
Both records reached the database, but one window failed to show the other rule.
After shutdown, the database contained both rule records while the shared
`__$__targetStorageMarker` metadata listed only one. The failed run is retained at
`logs/rules-windows-verification-AmfZh2/result.json`.

Direct inspection of the recovered storage owner establishes that `keys(scope,
target)` enumerates this shared metadata blob. `updateKeyTarget` writes the whole
blob from the window's cached view. Separate rule keys therefore did not prevent
metadata races. The rule reader now enumerates `getStorage(scope).items` from the
same native owner and selects its own record prefix. It retains scope checks,
malformed-data rejection and existing record identities. It does not rewrite the
shared metadata or delete existing data. Missing storage fails explicitly.

The recovered desktop and Glass storage modules have SHA-256 hashes
`c587fb0b8cb46a82df77e1d9611b53170aeec8c95d56369d0579557207003197` and
`967f630af0b329829742a844f9638e01f742583913384216a951d38888452e0e`.
The selected REA analysis failed result admission on the unexpected schema field
`resolutionMode`; retained partial Evidence is
`ev_2f5a4c0f97fd01cbec8b603f2363c3ddce6f636e53e3a7d10a29fd41f1ef6970`.
No completed REA graph is claimed for that attempt. The defect and fix are
supported by direct source inspection, actual database rows and native execution.

## Verification

`logs/rules-windows-verification-zRw1Mg/result.json` passes simultaneous additions
in two real windows, edit alongside an unrelated addition, deletion propagation,
another profile's isolation, and restart in another project. Both persisted
records remain visible even when the target metadata still omits one. Malformed persisted data rejects a new rule with visible feedback and preserves
every saved rule byte. Removing only the seeded corrupt record restores existing
rules and new-rule creation. All five owned host launches exited with code 0. No knowledge-base RPC appeared in the
observed renderer requests; this is not a process-wide network assertion.

`logs/live-agent-verification-kpkuG6/result.json` uses real Codex Easy inference
with `gpt-6.1-sol`. The test creates a user rule through native UI, restarts the
process, and verifies that the first outgoing Agent request includes that rule
and an always-applied `.openvision/rules/*.mdc` project rule. Only the saved user
rule specifies the randomly named test file. The model requests Read, receives
its unique first-line marker, and returns it. The initial request does not
contain the answer. Both inference requests returned HTTP 200, with request IDs
`d95c2dce-aff7-4bfc-9a8f-d1d7fce022e0` and
`fa18452c-a926-487b-8c3b-463f98bdde16`. The catalog is a controlled mirror of saved
capabilities; inference bodies are forwarded unchanged. No mock supplies replies.

Fourteen focused rule/relay tests and desktop syntax checks pass. The rules tests
retain CRUD, restart, legacy migration, workspace scope, malformed data, failed
synchronous writes, event disposal and the actual desktop/Glass context mapper.
These boundary tests do not establish durable recovery after native disk failure.

Commands:

```sh
npm run verify:rules:windows
npm run verify:agent:live -- --live --model gpt-6.1-sol --rules
node --test desktop/local-rules.test.mjs desktop/live-agent-relay.test.mjs
```

## Remaining acceptance

OV-301 remains Partial. Generated workspace memories need native creation and
isolation evidence; native asynchronous persistence failure/recovery still needs
verification. Same-rule simultaneous edits are last-writer behavior, not a
verified merge feature. Native macOS/Linux and other live models were not tested
in this pass. The fixed denominator remains 42 stories.
