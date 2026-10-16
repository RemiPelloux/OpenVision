# Retryable Agent review Undo and Redo

16 October 2026, OV-103, Windows x64. This follows the
[snapshot ownership correction](rea-agent-review-recovery.md#created-review-snapshot-ownership)
through the actual editor history service. The native model is a controlled HTTP
fixture; the storage, editor, keyboard commands and SQLite profile are real.
Injected snapshot-service failures are not physical disk failures.

## Source owners and reproduced defect

The [3.24.18 source index](../../curs_source/modules/3.24.18/README.md) publishes
the [inline-diff owner](../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/inlineDiffService.js)
and [workbench entry containing the history service](../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/entry.js).
Their manifest SHA-256 values are respectively
`d9a5835e3b1ddf24701b2b4d2fa9a005ae9ad6e5a5e20554b704efe538d7e873` and
`392306b1e776770c295160589baccfb01cead065ba25a3d30db6991c81e85f82`.
These are reference contracts; the prepared runtime remains 3.21.13.

The history service moves an entry before invoking its callback. The review
callbacks caught failures and returned normally. The previous correction kept
review data but did not tell history that an operation had failed. Throwing an
ordinary exception would instead trigger the recovered service's policy of
removing affected history.

Native run `logs/review-storage-verification-ISJZY1/result.json` reproduces the
problem on workbench `aa1f36b577f3e57d9f57045bcd0f6e8cec33b619ea2cfe41fdf57daf5167a952`:
keyboard Undo hits one injected snapshot-write failure, retains the live review,
but moves its entry from past to future history and shows no notification.
The regression fails its retryability assertion; this run is defect evidence,
not a passing product check. Its host exits 0 with one fixture inference.

## Producing boundary and history correction

[Snapshot ownership](../../desktop/agent-review-recovery-customization.mjs) and
[retry/history customization](../../desktop/agent-review-undo-customization.mjs)
now distinguish a retryable failure before removal or restoration commits from
an operation that already changed ownership.

- The review callback returns an explicit retry outcome when recovery has not
  committed. Missing saved data and blocked model-reference release use that
  outcome too. Post-commit cleanup retains its existing ownership semantics.
- The consolidated review element stops at the failed callback and retains its
  position. Retrying resumes there, preserving completed callbacks. New review
  activity cannot consolidate into an element with an unfinished operation.
- The history service accepts this outcome only from the actual mounted element.
  It checks that the exact entry is still on top of every affected stack before
  restoring its position. A changed stack gets an explanation without a guessed
  pop or destructive history clear.
- The service releases its locks/preparation resources and shows Undo/Redo retry
  guidance. It stops group continuation and makes no automatic inference request.
  Ordinary exceptions keep the recovered error policy.

The installer upgrades prior recovery transformations, preserves their first
backup and rejects changed producer contracts. Partial-operation positions are
small element-owned values cleared after success; this change establishes no
RAM, CPU, latency or token saving.

## Native and integration verification

```sh
npm run test:agent-review
npm run build:desktop
npm run verify:review-storage -- --undo-stack
```

The suite passes **56/56** checks, including actual recovered resource-history
methods, stack movement, consolidated callback progress, lock release, foreign
outcome rejection, changed-stack preservation and unchanged ordinary errors.
The earlier snapshot/reference regressions remain covered. These tests control
I/O dependencies and do not substitute for the native workflow.

Final native run `logs/review-storage-verification-RjNDtm/result.json` passes on
the rebuilt source, parent commit `37f159e4` plus the recorded changes:

| Native operation | Observed result |
| --- | --- |
| Keyboard Undo with snapshot-write rejection | Live review and past-history entry retained; visible Undo retry guidance. |
| Undo after clearing the fault | Review removed only after its snapshot is stored; entry advances to future history. |
| Keyboard Redo with snapshot-read rejection | Snapshot and future-history entry retained; visible Redo retry guidance. |
| Redo after clearing the fault | Review restored, snapshot cleaned and entry returned to past history. |
| Reject and Save | Original CRLF file bytes restored exactly. |
| Requests and cleanup | One authenticated fixture inference; exactly two injected review errors, no renderer errors, host exit 0; normal runtime file unchanged by the probe overlay. |

Workbench SHA-256:
`7a2507217a270eedc8ccd9b0c521d92abb2e38f585093b24bc35ef403b0e55b4`.
Verifier SHA-256:
`f8905bccf628466e6f8231535d0affaf6e938c13d4ca38c3ebe98c201ce0048a`.
Keyboard-helper SHA-256:
`320901c91489945056f0d157413465d9949ef50c918a7db75e01ca0dc7fa6f0c`.
The failure notification screenshot was inspected alongside history and disk
assertions. Intermediate `t3vVbb` covers only the earlier Undo probe and is not
credited as the final Undo/Redo regression.

Final-build Agent regression `logs/agent-verification-LnKXTL/result.json` also
passes `npm run verify:agent -- --review-recovery` with the same workbench hash:
reads/search, multi-file review/accept/reject, repeated-edit Undo/Redo, pending
review acceptance/rejection across normal restarts, accepted-file persistence,
command approval/denial/Stop and conversation resume. All **29** fixture requests
are authenticated, with no auxiliary title request, no renderer errors and
**five host exits 0**. This is real tool/filesystem execution with a controlled
model, not broad live-model editing or abrupt-exit coverage on this build.

Desktop tests pass **155 with 2 skipped** for unavailable recovered extension
inputs; build-integrity checks pass **26/26**. Syntax and production build pass,
validating **237 scripts, 124 manifests and 28 local main-process modules**.
These suites overlap and are not added into the acceptance percentage.

## Remaining gates and priority

OV-103 remains **Partial**, at its existing **8 provisional points** and P0 rank.
The [ledger](../planning/completion-sprints.md) remains **6/42 Verified (14.29%)**.
The [resumable-removal follow-up](rea-agent-review-removal.md) now covers
cancellation and handler-disposal failures, including the earlier model-overlap
cleanup path, retained ownership and native keyboard retry. It is source work
after preview.7; the portable payload is unchanged.
Next gates include physical I/O failures, interruption during active writes/tools,
broader live editing and remaining menu/group/post-commit cleanup failures.
Consolidated failure progress and failed model-reference
release have producer coverage; this native check does not establish them.
The [chat timeout dependency](rea-agent-timeout-recovery.md) has separate live
and controlled evidence. No portable download or platform claim is updated.
