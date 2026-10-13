# Provider-specific model choices

13 October 2026. Providers offering the same model ID previously collapsed into
one picker entry. The routing map also selected the first enabled provider. The
catalog and routing owners now use one identity per saved provider/model pair.
Disabling or removing that pair cannot silently move its requests to another
provider. This is a source-established defect, not proof that it caused a past
live-provider disappearance.

The native menu retains provider headings, counts, separators, keyboard search
and each model's reasoning submenu. Both duplicate choices appear. Internal
selection IDs are distinct from the server's original model ID; the latter is
preserved exactly at the HTTP request boundary. Names and keys are not rewritten.
Old raw selections resolve only when ownership is unambiguous, counting disabled
models too. An ambiguous old choice must be selected again from its provider.

## Request ownership

`model-identity.js` owns encoding and decoding. `ModelProviders` owns the saved
catalog and revision snapshot. Autocomplete and direct inference resolve against
that snapshot; a settings change while reading credentials aborts dispatch.
Agent turns read each enabled provider's secret once into a turn-local table.
The recovered Agent request factory uses that table for both parent and child
requests. Credentials are neither included in selection IDs nor cached in the
catalog/route snapshot. They use the existing local IPC credential transport.

The runtime classifier receives the wire model ID, preserving model-family
behavior. The native selection and preference owners resolve old IDs for both
individual chats and shared preferences. Canonical saved preferences override
legacy values. Resetting a migrated preference records an empty override, so an
old value cannot reappear; the original preference remains preserved.

## Evidence and limits

REA analyzed original `Zxe`, `ybe` and `wEe` owner slices with source SHA-256 and
UTF-16 ranges in `logs/rea-provider-identity/provenance.json`. Original bundle:
`0df300c9865f395a02337ac880339c216ac44b45ada445daa46cae4c80a6e5c2`.
Evidence `ev_dcf979578843052b7e87f5960e79481bb93a851b7fff4c237a9c810ee1ae5020`
parsed three files, 29,374 bytes and 3,041 AST nodes. Coverage is partial;
dependencies and dynamic calls outside the slices remain unknown. The MCP
transport was closed, so the installed public CLI produced the retained complete
record `logs/rea-provider-identity-evidence.json`.

`npm run verify:provider-identity` uses a disposable native Windows profile and
two local HTTP provider paths with different fixture keys and the same raw model
ID. `logs/provider-identity-Vw3JHM/result.json` passed on the routing build:

- Both models appear as separate native choices.
- Selecting A and then B sends exactly one request to the selected provider.
- Restart preserves B; the next request uses B.
- A parent on A invokes a Task child on B and continues on A (A/B/A).
- Selecting B for autocomplete produces an accepted `42` edit.
- All seven inference requests use the exact raw `shared-coder` ID and matching
  authorization; no page errors occurred and both owned hosts exited 0.

Failed harness runs are retained: `JTzIVW` waited for transient status text after
provider creation; `aDzIDM` used a nonexistent ghost-text selector, after all
seven correctly routed requests. The final verifier waits for the discovered
row and validates autocomplete by accepting and reading the resulting file.

Owner-boundary tests also cover escaping, malformed IDs, legacy ambiguity,
disabled/deleted pairs, settings changes during secret lookup, credential
replacement, per-turn secret reads and nonmutating child selection. The settings
fixture still mounts at most 40 model rows with 10,000 entries; this does not
establish native Agent-picker virtualization.

These local fixtures do not establish live-provider quality, every reasoning
tier, native macOS/Linux support or the full error matrix. OV-104/201/202/203
remain Partial; no story or denominator changes are justified by these results.

Final workbench SHA-256:
`1e1d5fc47b94ec7dd96ec854b69924ca9121fe8b6209fd910943127ad120a259`.
Agent-exec SHA-256:
`fc7aabb15d09a1b1fc0deb3dc59dbb16f1fc46bc5c81fd6b21be00ae83c1e966`.
The 86 desktop tests and 21 completion/profile tests passed, along with desktop
syntax checks and the production build. The acceptance ledger remains 3/42.

The final preference lookup reuses the route snapshot: individual lookups do not
scan the catalog, and bulk compatibility maps iterate saved preferences only.
All 23 affected model tests and the native menu/upgrade workflow passed again
after this refinement. A bounded scan of the routing fixture application logs
found neither fixture transport key.
The later [native selection lifecycle](provider-selection-lifecycle.md) found
and fixed an upstream silent fallback when disabling the selected model. That
report supersedes the disabled/deleted scope of these earlier boundary tests.
