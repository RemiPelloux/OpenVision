# Agent review cancellation and resumable cleanup

16 October 2026. P0 OV-103 remains Partial at its existing 8 points. This is a
source change after **0.2.0-preview.7**; the published portable payload is unchanged.
See the [roadmap](../planning/roadmap.md#critical-first-backlog-and-eta) and
[complete acceptance clauses](../planning/completion-sprints.md).

## Recovered contract and reproduced defect

The historical [3.24.18 inline-diff module][source] contains the review creation,
removal, cancellation and handler-cleanup contract. Its SHA-256 remains
`d9a5835e3b1ddf24701b2b4d2fa9a005ae9ad6e5a5e20554b704efe538d7e873`.
The actual runtime input is still **3.21.13**. Studying the newer module does not
upgrade the complete runtime or prove whole-product parity.

REA's connected MCP transport closed. The installed public CLI analyzed the
same retained module without executing it:

```sh
node scripts/rea.mjs analyze-javascript-application <module-directory> --source-path inlineDiffService.js --format json
```

Local Evidence `logs/rea-review-removal-analysis.json`, ID
`ev_992bc469859ca0d971f2acab4c305aedf258373b0409d55ce6895a661b259653`,
records one parsed JavaScript file, 95,890 text bytes, 15,306 visited AST nodes
and zero parse failures. Its inventory contains 4,692 files; the other 4,691
remain outside this analysis. REA's static relationships are derived evidence,
not runtime proof. No registration or provider configuration was changed.

The maintained review callbacks previously marked removal as started before
`cancelInUndo` returned. A cancellation exception was logged, but the callback
reported completion and the history service advanced its entry. Separately,
the recovered `_remove` deleted the handler from `diffHandlers` before calling
the handler's cleanup. Failed cleanup could therefore lose the handler owner.
Repeating cleanup also repeated earlier partial-history and decoration work.

The new regression initially failed all ten cancellation/cleanup cases across
Undo Create Diff and Redo Remove Diff. Its preview.7 control reproduces both
premature completion and lost cleanup ownership. Native pre-fix run
`logs/review-storage-verification-Ik2gYY/result.json` reproduces failed
cancellation leaving the handler present but the entry in future/Redo history.
It uses one authenticated controlled inference; the owned host exits 0.

## Ownership correction

- [The review callback producer](../../desktop/agent-review-undo-customization.mjs)
  returns its existing retry outcome while the service still owns the handler.
  The premature boolean is removed from newly generated callbacks.
- [The removal transformation](../../desktop/agent-review-removal-customization.mjs)
  retains registry ownership until handler cleanup returns successfully. Existing
  generated v1 callbacks are upgraded separately; first backups are preserved,
  repeated application is stable and changed producer contracts fail the build.
- Handler cleanup tracks four completed steps: partial-history publication,
  decorations, inline-diff state and disposal. A failed step retains its position;
  retry resumes there instead of replaying already completed steps. The state is
  a small handler-owned number, not an additional collection or background worker.
- The existing history owner keeps the failed entry on its original side,
  releases locks, stops group continuation and shows retry guidance. The saved
  snapshot remains available; retry and Redo require no new inference.

This also covers the affected model-overlap consumer: native text Undo can call
the handler's `remove()` before the review callback runs. Both paths use the
same cleanup progress. A successful earlier removal is not repeated by the
service; a failed disposal remains owned and is retried by the callback.

## Verification

```sh
npm run test:agent-review
npm run check:desktop
npm run build:desktop
npm run test:build-integrity
npm run verify:review-storage -- --undo-stack --removal-failures
npm run verify:agent -- --review-recovery
```

The focused suite passes **71/71**, with zero skips. It executes the recovered
callbacks, registry owner, handler removal and Undo element together; only
cancellation/storage/model/cleanup dependencies are controlled. It covers both
directions, each cleanup step, retry without duplicate completed steps, the
model-overlap sequence, preview.7 controls, legacy upgrade, idempotency and drift.
Build-integrity checks pass **26/26**. Syntax and source builds pass validation
of **239 scripts, 124 manifests and 30 local main-process modules**.

The native Windows keyboard scenario checks failed snapshot write/read,
cancellation and handler disposal, correct history position, retry guidance,
eventual cleanup, Redo restoration and exact Reject/Save file bytes. Disposal
is deliberately rejected in both the earlier model-overlap cleanup and later
review callback. It is injected at actual service/handler calls, not by replacing
the Undo implementation.

Final Windows x64 run `logs/review-storage-verification-TjZECR/result.json`
passes with parent commit `beec3932` plus the recorded source changes:

| Operation | Observed result |
| --- | --- |
| Snapshot write/read rejection | Correct past/future history position, saved recovery and explicit keyboard retry. |
| Cancellation rejection | One injected failure; the same handler and snapshot remain owned, the entry stays in past history and retry succeeds. |
| Handler disposal rejection | Two injected failures, first in model-overlap cleanup and then in the review callback; the same handler remains at cleanup step 3. Retry completes step 4 before registry removal. |
| Fresh guidance | The native Clear All Notifications command empties prior toasts before each new fault; each fault produces its own Undo retry message. |
| No replay | Partial-history work runs once per tested handler across failure, retry and Redo. |
| Data and requests | Reject/Save restores the exact original CRLF file; one authenticated controlled inference, no extra recovery inference. |
| Cleanup | Four expected inline-diff error records, no renderer page errors, one host exit 0; the ordinary runtime file is unchanged by the probe overlay. |

Workbench SHA-256:
`9b755e33d350c9908499aa0fd263facd0198b8e8e20c7ee2228d1e7138d8b404`.
Verifier SHA-256:
`da6fbc7f422fe38bd4e076cdec870582adbbcbeb1ba09bada32face3b0a8db12`.
Removal-helper SHA-256:
`5babba229039a8315f445ced956fa0890fcdecd0ef682d2ed0efb7bd8580ace4`.
The disposal-failure and restored-file screenshots were inspected with the
history/disk assertions. Earlier native `LO6l3c` and trace `ZU8eU2` rejected an
incorrect zero-history-call expectation: text Undo enters `processOverlapEdit`
first. The final check explicitly verifies that actual path and its two disposal
attempts; those intermediate failures are not counted as successful runs.

The full native Agent regression also passes on this workbench:
`logs/agent-verification-sXeSpw/result.json` checks filename/text search,
multi-file review/accept/reject, exact Undo/Redo, repeated edits through each
intermediate value, pending-review rejection/acceptance across normal restarts,
accepted-file persistence, command approval/denial/Stop and upstream cancellation.
All **29** controlled requests are authenticated, there is no auxiliary title or
review-restoration inference, no renderer errors and **five host exits 0**.
The Agent verifier SHA-256 is
`3462b5fe63c0267c2b70d3ea804e2bcc280cf8137b1646d2e345208de3c4c051`.
These are actual tools, files and editor actions with a controlled model;
external/live-provider behavior and abrupt exits are not reverified by this run.

## Remaining gates

OV-103 still requires physical storage/full-volume failures, interruption during
outstanding writes/tools, remaining menu/group and post-commit cleanup failures,
additional edit types, broader provider/platform coverage and its chat-reliability
dependency. A dependency that throws after an irreversible side effect does not
gain automatic rollback from this change. The four-step owner resumes between
successful calls; it does not prove every dependency is internally transactional.
Deletion of separately persisted live-review records also retains the recovered
asynchronous storage contract. Its failure/restart transaction requires separate
verification; completing handler disposal does not prove crash-atomic deletion.

No whole-app RAM, CPU, latency or token saving is claimed. Observed completed
cleanup calls are not repeated; the broader resource budgets remain under
OV-1001–1003. The ledger stays **6/42 Verified (14.29%)**, with **322 provisional
points** remaining. See the [gap/source map](feature-gap-audit.md#source-index-to-implementation-gaps).

[source]: ../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/inlineDiffService.js
