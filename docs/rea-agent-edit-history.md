# Agent review and editor undo ownership

15 October 2026, Windows x64. This investigation continues OV-103 using the
recovered workbench and a disposable native Agent project. The model endpoint
is a controlled local HTTP fixture; Agent executes the real application tools.
It does not measure external model quality or use a real API key.

## Reproduced findings

The inspected workbench, before this change, has SHA-256
`bdb16c859de8aa885dc430346b60841e600087a3ed06a247e5f2ae6e9bbdc685`.
References below belong to that exact generated source, not a stable upstream
API. The investigation reuses the earlier [REA review trace](rea-agent-runtime.md#review-handler-investigation)
and follows its recovered callers directly; it does not claim another complete
REA parse of the large workbench.

| Finding | Source owner | Evidence and scope |
| --- | --- | --- |
| Keep All resolves before asynchronous acceptance finishes | `acceptAllDiffs`, original line 1196003; callers `acceptAll` and `_applyWorktreeToCurrentBranchViaMerge` | Executing the actual recovered methods with deferred registry results reproduces early completion. Parked restoration is asynchronous. This is a production-boundary reproduction, not a native parked-file timing measurement. |
| First editor Undo after Keep restores review, without reverting text | `acceptDiff`, original line 593462; diff removal/restore at 592975 | Native run `logs/agent-verification-PLYkCb` shows the original/changed review and unchanged accepted bytes. The initial one-step text-undo assertion was incorrect. |
| Closed-file Agent edits lack the text undo available to open files | `_handleRegularFileChange`, original line 1186568; `addDecorationsOnlyDiff` at 593801 | Runs `logs/agent-verification-uIoUz4` and `logs/agent-verification-GkNX1o` restore original bytes in the already-open first file, but not the previously unopened second file. An added settling interval does not change the failure. |

The closed-file path receives `before` and `after` content, reloads the file,
and creates review decorations. An existing model receives an undoable text
update; a newly created model starts with the already-changed disk contents.
Decorations alone do not create the missing text transition. Preopening every
test file would conceal this difference.

## Acceptance completion ownership

`desktop/agent-review-customization.mjs` snapshots unique pending diff IDs
before accepting any of them. It waits for all acceptances to settle before
returning or reporting failures. A single failure retains its original error;
multiple failures are reported together. Both recovered callers await the
result. A synchronous failure cannot abandon later acceptances.

The installer preserves the first backup and refuses unexpected producer or
caller shapes. `desktop/agent-review.test.mjs` runs the recovered methods and
covers delayed success, synchronous/asynchronous failures, duplicate IDs,
concurrent composers, contract drift and repeated installation. This establishes
sequencing; it does not establish native parked-file recovery or worktree merge
behavior.

## Closed-file text history

`desktop/agent-closed-file-undo-customization.mjs` captures whether the file had
a text model before checkpoint work. For previously unopened regular text files,
it records the supplied before/after transition before creating review
decorations. Existing models retain their native undo path.

The new entry reacquires and releases its model reference for Undo/Redo. It
checks the current contents against the expected state before applying a
transition. A file opened and changed during checkpointing is preserved instead
of being forcibly reloaded by this new path. Unexpected contents after reload
prevent installing a stale undo entry. These checks are not a general proof of
all filesystem and editor races.

The focused producer tests reproduce the missing original entry and cover
reference release, delayed changes, Undo/Redo conflicts, existing models,
LF/CRLF transitions and installer drift. Leading-BOM, mixed-EOL and lone-CR
baselines skip the synthetic undo with a local warning; creation, deletion and
notebooks remain outside this fix. Existing checkpoint data is retained.

An undo entry retains the before/after strings for its undo-history lifetime;
it does not keep the editor or model reference open. This is a correctness
change with a memory cost, not a RAM optimization. History compression and
whole-session memory budgets remain separate work.

## Search coverage

`desktop/verify-agent-search.mjs` asks the actual Agent `Glob` and `Grep` tools
to find two files under a Unicode path, return unpredictable on-disk markers,
and report an absent match. It checks exact file preservation and four provider
turns for three tools and the final response. These checks pass in the retained
failed-undo runs above. The overall runs remain failures, not successful Agent
acceptance runs. This covers local filename/text search, not semantic indexing,
embedding quality or an external provider's tool selection.

## Final Windows verification

`logs/agent-verification-kRndfw/result.json` passes against parent commit
`96a2189` plus this change. The final workbench SHA-256 is
`af796025a8085f502005e45d4823b4ea90b405f96dba0a0f157fd8b9e13ba720`.
The run's `identity.json` pins the host, workbench, extensions and verifier
inputs. `kept-edit-undo.json` records each observed transition.

- Real `Read`, `Glob` and `Grep` tools operate on the disposable project,
  including Unicode paths, random file contents and an empty search.
- Two-file edits pass Undo All/Confirm and Keep All. Both the initially open file
  and the previously unopened file then restore their exact original bytes using
  editor Undo, and restore their changed bytes using Redo. The first Undo restores
  review; the second restores text. Redoing text does not necessarily recreate
  review after the no-change diff has been disposed.
- A subsequent single-character user edit undoes independently, preserving the
  accepted Agent contents. Both edited files and the unrelated file are checked.
- Command denial, approval and running-command cancellation pass. The owned
  command connection closes and its registered process is absent.
- Provider-stream Stop, full application shutdown/restart and same-chat resume
  pass. Kept edits and previous conversation context survive the restart.
- There are 20 controlled provider requests, including four for search, no
  renderer/inline-diff errors, and both owned Electron hosts exit 0. Stop closes
  the local stream in 106 ms; running-command Stop takes 169 ms. These are single
  local observations, not external-provider latency guarantees.

The final producer/build-integrity/ledger suite passes **25 tests**. Desktop
syntax checks and the production build pass; the build validates 236 scripts,
124 manifests and 28 local main-process modules. Logs remain local and ignored.
The portable release is unchanged.

Earlier native failures remain available. `10g67i` exposed an incorrect verifier
expectation that text Redo must recreate review. `Jo8LDQ` and `Raxgbk` exposed
normal newline/word undo grouping in the subsequent typing check. The final check
uses one character without relying on those grouping rules. `hpPq9i` passed the
full scenario before the encoding-guard correction; the final run above repeats
it against the corrected build. Unsupported-representation review preservation
has focused producer coverage, not a native BOM/mixed-EOL run.

## Remaining gates

OV-103 remains Partial and the fixed ledger remains **6/42 Verified (14.29%)**.
External provider lifecycle gates, parked-file recovery failures, crash recovery,
notebook edits, intervening changes and native platform coverage need their own
evidence. Repeated edits to the same closed file need native undo-consolidation
coverage. The separate source finding that failed review restoration can clear
its saved recovery data remains open. This pass makes no whole-app RAM, CPU,
token-cost or latency improvement claim.
