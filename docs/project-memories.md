# Approved project memories

14 October 2026, Windows x64. OpenVision implements the selected workflow:
**Agent suggests; the user approves saving.** This is scoped progress on OV-301,
which remains Partial. The fixed acceptance ledger remains 5/42 Verified.

## Use it

Ask Agent to suggest a project memory for a stable convention or useful fact.
For example: “Suggest a project memory that desktop changes must use the pinned
toolchain.” A suggestion appears as a **Suggested project memory** card.

1. Review **Memory title**, **When to use**, and **Memory content**. All are editable.
2. Choose the destination project in **Project**.
3. Click **Save project memory**, or **Dismiss** to save nothing.
4. Use **Open memory** to inspect or edit the saved file. Delete the file through
   the normal explorer when the fact is no longer useful.

Approved memories are ordinary `.openvision/rules/memory-<sha256>.mdc` files.
The title and relevance description become rule metadata; `alwaysApply: false`
keeps the body out of initial Agent context. Agent can use the normal Read tool
when a description is relevant. This avoids eagerly repeating every memory body.
Once a memory has been read, it can remain in that conversation's history.
There is no extra summarization or memory-generation API request.

Saving is explicit in this card. The Agent policy asks the model to suggest a
fenced `openvision-memory` JSON object containing `title`, `description`, and
`content`, and forbids saving suggestions through ordinary tools. That policy is
model guidance, not a sandbox that restricts every arbitrary Agent filesystem
operation. Existing tool permissions still apply.

## Ownership and failure behavior

The existing project-rule parser, watcher and Read tool own persisted data.
There is no new parallel memory database. Rendering, streaming and dismissing a
card make no filesystem writes. Save validates the selected workspace again,
checks memory directories, and uses exclusive file creation. Identical approval
is idempotent; an edited or conflicting file is preserved. A failed save remains
editable and retryable. If refreshing rules fails after the file was saved, the
card accurately reports a saved file and asks for a window reload.

The proposal limit is 64 KiB, checked before encoding oversized text. This bounds
the review form and hashing work. It is not a provider context-window limit.
Memory folders reported by the native file service as links are rejected.
This does not establish protection against concurrent filesystem link swaps.

Legacy generated records in workspace SQLite storage remain preserved. They
are not silently exported, reapproved or removed. Agent already excluded those
records; inline editing now applies the same exclusion instead of concatenating
hidden generated records into explicit context. Native Customize still hides
them. A reviewed legacy import/disposition flow remains open; new approved
memories use project rule files exclusively.

## Recovered-source evidence

Direct inspection of the pinned input found that `knowledgeBaseService.addItem`
marks entries generated only when its third `composerId` argument is supplied.
The recovered desktop and Glass local callers supply two arguments. The original
generated-memory producer found in hosted automation is outside the local scope.
This establishes no reachable producer in the inspected callers, not the absence
of every possible dynamic call.

Relevant recovered paths under `cursor/recovered/raw-bundles`:

- `4/knowledgeBaseService.js:95`: generated-entry creation contract.
- `4/entry.js:144194`, `209361`, `347620`: local callers.
- `4/entry.js:347674`: generated entries hidden in Customize.
- `4/OBd.js:800`: Agent rule mapper excludes generated entries.
- `4/workbenchRequestContextExecutor.js:77`: mapper feeds Agent context.
- `4/entry.js:142196` and `5/entry.js:202900`: inline-edit consumers.
- `0/module-65611.js:37404`: excluded hosted automation producer.

Pinned SHA-256: service
`b98bdcf995ad69628b68929928cbd707dd27ccae6e99624f544df0b2022a0747`;
Agent mapper
`34089d8175a33fadcd963c739b39268044bbab68e72e769242c3a0fae22cc7b4`;
desktop entry
`c69556894cddfc97071addbbca7639493b1f235332a0349ff15dacbac0616764`;
Glass entry
`3f65ea5f02f92b755a320acb421dfda3825eb41e7e9c54ca98143929b51dd39f`.

Earlier service Evidence:
`ev_dcc3e437b53f924450ccbe65b062fe5627b964a9bf0f246d9c78f61cc6b076b8`.
The request-context follow-up failed result admission on the unknown
`resolutionMode` field, retaining partial Evidence
`ev_19d248c69d19f7de546a7848c1ae209b2eb5c30c0fd91d83cb5936b686d1e8dd`.
No completed graph is claimed for that attempt. The implementation is supported
by the inspected source and the native/runtime checks below.

## Verification

`npm run test:memory` checks the original and prepared desktop/Glass transforms,
React lifecycle disposal, user/team rule preservation, inline-edit generated
exclusion, parser bounds, metadata serialization, real temporary-file persistence,
idempotence/conflict handling and failed-write retry. Workspace changes and
linked-directory rejection use service fixtures; they are not native link tests.
The combined memory/rules/relay run passed 31 tests without skips.

`npm run verify:memory` launches disposable native Windows profiles with controlled
HTTP replies. The run at `logs/memory-verification-ZvbXZV/result.json` passed
suggestion/dismissal without writes, approval of edited text, restart with only
the description in context, and isolation from a second project. All three hosts
exited with code 0 and no page errors. These responses are simulated, not live AI.

The follow-up `logs/memory-verification-NoHgsl/result.json` passed all six checks,
including a real native save failure: an existing `.openvision` file remained
byte-for-byte intact, the card reported failure, and retry succeeded after the
fixture removed that blocking file. Restart/isolation passed again; all three
hosts exited cleanly with no page errors. This is an actual conflicting-path
test, not a physical full-disk or permission-denial test.

Separately, the real-provider run at
`logs/live-agent-verification-6giqcv/result.json` passed with **Codex Easy,
`https://codex-easy.ai/v1`, `gpt-6.1-sol`, provider-default reasoning**. It made
four real HTTP 200 inference requests: suggestion, fresh recall, continuation
after reading the memory, and continuation after reading a randomly named
verification file. The final response contained the file's random marker.
The first fresh request contained the reviewed description but neither the memory
body/filename nor answer marker. No tool call or memory file preceded approval.
Both owned hosts exited with code 0. The relay forwarded inference bodies unchanged
and replaced only transport authentication; it served the test catalog locally.

Recorded memory helper SHA-256:
`34e1f60e2a7021844daecdac7c5ce38831023d51b479507849f335635214108f`;
card helper:
`c561e3d08b2566c030c363d3aadec8c1aee93c21146fd15f096871f603bd3404`.
The live run preceded the inline-edit filter cleanup and CSS font fallback;
neither changed these two memory helpers or the verified Agent save/read path.
Logs, profiles and screenshots stay local and ignored by Git.

To repeat the live check, using the saved provider and real API quota:

```sh
npm run verify:agent:live -- --live --model gpt-6.1-sol --memory
```

Remaining gates: legacy generated-record disposition, native multi-root choice,
links and actual permission/full-disk failures, cross-window memory edits, and
other provider/platform behavior. The inline-edit filter has recovered-function
tests; a native inline-edit request carrying seeded legacy records remains
unverified. No macOS/Linux or complete story claim follows from these checks.

## Build verification follow-up

The final normal-profile launch exposed invalid text in the generated workbench
after a repeat build. The failed artifact and hash recovery record are retained
under `logs/namespace-build-recovery`. Restoring one unchanged 273-character
fragment from the pinned recovered input, then reversing the namespace edits,
produced exactly the journal's recorded input hash:
`55451efb5a0fce82ea4a85fb5269e99951fc04f96dc3528eed7364ab9174e7a2`.
This local recovery preserved all other customizations. It did not touch profiles.

The namespace edit owner now validates edit positions, collects unchanged slices
and replacements, and joins once. It no longer constructs another complete large
bundle for every edit. The build now syntax-checks both generated workbenches
before success. A large Unicode preservation/roundtrip case and the combined
namespace/memory/rules/relay checks passed **46 tests, no skips**. This reduces
allocation at the producing boundary and detects invalid generated code; the
underlying engine-level cause of the observed character corruption is unknown.
Two subsequent builds passed generated syntax checks and retained identical
desktop workbench bytes (`55f1ac2156e564cd8c1231aa648c59636a17e62c5804b4714801e8043f7bdd64`).
The normal local-profile window rendered its editor and profile controls with
the memory stylesheet loaded and no observed page errors.
The final native rerun, `logs/memory-verification-lu7Br0/result.json`, passed all
six approval/failure/restart/isolation checks on this build; all three test hosts
exited with code 0 and no page errors.
