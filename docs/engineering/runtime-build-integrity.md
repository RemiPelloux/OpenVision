# Runtime build integrity and shell shutdown

15 October 2026. This corrects the verification scope of `b63573b`.
The acceptance ledger remains **6/42 Verified (14.29%)**. The preview.6
portable payload is unchanged.

## Findings

The earlier native startup checks used an existing generated runtime. A fresh
application of the committed shell patch incorrectly imported `Menu` from the
notification bridge and substituted a narrow shell adapter for the full native
application API. That would prevent module linking and break dock/event access.
Passing checks against the existing runtime did not establish a reproducible
build of the committed code.

A separate local audit found **15 generated extension files containing only NUL
bytes**, including Agent and MCP bundles, and an earlier damaged namespace
journal. The producing cause is unknown. Narrow editor checks did not exercise
these extensions. A permissive MCP patch skip also concealed the missing owner;
that skip has been removed. Missing or changed ownership now fails the build.

Recovery preserved the affected generated files before restoring 29 inputs
from retained recovery artifacts. Content hashes were matched to the retained
readability or installation manifests. Temporary-file replacement avoided
writing through hardlinks. The exact local recovery plan is retained at
`backups/generated-input-recovery-20261015/plan.json`; recovery artifacts,
backups, credentials and profiles are not committed. No user data was reset.

## Corrections

- The shell patch preserves native `app` and `Menu` imports; only the specific
  recent-document operation crosses the helper boundary. Fresh patches and
  migration from the faulty v2 patch are checked against recovered input.
- The helper uses the application's `win32AppUserModelId` from `product.json`.
- Notification construction/display calls require an acknowledgment within
  the operation deadline. A missing acknowledgment closes retained notification
  handles and stops the helper. Successfully displayed notifications are not
  expired by that deadline.
- Helper shutdown joins the editor's committed `onWillShutdown` lifecycle,
  after unsaved-file vetoes. Shutdown remains pending until the owned child
  confirms exit or close, including when a kill attempt fails. With ignored
  standard streams, process exit releases the helper's owned resources; a real
  Windows child test found that disconnecting IPC can leave `close` unreported
  after `exit`. Waiting exclusively for `close` would hang shutdown. A canceled
  quit does not disable shell integration.
- The Agent daemon retains its shebang at byte zero. The telemetry transform
  repairs its earlier invalid comment-before-shebang output and preserves the
  disabled telemetry owners.
- Generated-artifact validation rejects empty/NUL text and malformed manifests,
  checks generated script syntax, and checks relative static ESM imports in
  the main-process module graph. Bare-package and dynamic imports still need
  runtime verification. This does not validate every native dependency or prove
  absence of all possible artifact corruption.

## Verification scope

The focused notification, shutdown, MCP attempt, provider error/body and request
deadline run passed **43 tests**, using the complete retained recovery directory
through `OPENVISION_RECOVERY_DIR`. An initial MCP run against the sparse prepared
recovery failed because its input files were missing; it was not a passing run.

Two full builds completed after recovery, including a second build that applied
the corrected shutdown integration. Desktop authoring-file syntax checks passed.
Build logs are retained locally as `logs/rebuild-shell-correction.txt` and
`logs/rebuild-shell-joined.txt`. The final integrity-enabled build also passed:
**236 scripts, 124 manifests and 28 local main-process modules**, recorded in
`logs/rebuild-integrity-correction.txt`. The stronger syntax gate first rejected
the daemon's misplaced shebang; it passed after fixing the telemetry transform.
An immediate repeat full build passed the same inventory in
`logs/rebuild-integrity-repeat.txt`, exercising namespace restoration and
idempotent installation. This is local repeat-build evidence with prepared
inputs, not a clean-machine native source build.

The expanded notification/integrity/telemetry run passed **26 checks**, including
a real unresponsive Node child whose display timeout triggers termination and
whose exit settles shutdown. This is actual process/IPC coverage, not an OS
notification-delivery test. The first native Agent attempt (`ghkjYa`) reached
edits and command checks but hung during shutdown with the close-only owner; it
was interrupted and is not a passing native run.

After the exit-event correction, the native Windows Agent run
`logs/agent-verification-3vLR0m/result.json` passed streaming, actual file reads,
multi-file edit review with Undo/Keep, command denial/approval, foreground command
cancellation, upstream request cancellation, and conversation/file persistence
across a full restart. Both owned application processes exited **0**. The
loopback provider used a synthetic credential; there was no paid inference or
live-provider test. The observed Stop-to-upstream-close sample was 107 ms and
foreground command Stop was 166 ms; these single-run timings are not a comparative
performance claim. Whole-process-family CPU and peak memory were not measured.

The final combined focused run passed **59 tests, zero skipped**
(`logs/test-runtime-integrity-correction.txt`). Earlier counts above describe
intermediate scopes and must not be added to this total.

These checks do not establish live-provider availability, native macOS/Linux
behavior, whole-app RAM savings, or independent native-source rebuilding.
The earlier unexplained exit 134 in the development matrix remains unresolved;
successful repeats alone do not close OV-403. No full story is promoted.

## 16 October working-tree blocker

The pending custom-provider-header build has not completed. Its first failure
reported a changed generated Agent input outside the namespace journal. All 108
recorded namespace edits matched their exact locations. The file and original
journal were preserved under the ignored local
`backups/provider-header-namespace-20261016/` directory before reconciling the
journal hashes with those observed bytes. This preserved the unknown changes;
it did not establish that the resulting input was valid.

The subsequent build stopped during namespace tokenization of the generated
Agent main bundle. A read-only repeat under Node **24.18.0** on 16 October
reproduces `Unexpected character '\u0013' (198301:7)`, character offset
`8051348`. The producing cause remains unknown. This is a generated runtime
input failure; it is not evidence that the published 3.24.18 source archive is
corrupt, nor a regression result for the existing portable download.

Recovery must compare retained inputs and exact hashes, preserve unknown
differences and avoid stripping control characters globally: some occur legally
inside recovered string tables. Required follow-up is a successful full build,
repeat build/integrity checks and native provider-header workflows against the
final generated artifacts. Earlier passing runs above remain valid only for
their recorded revisions. The [gap audit](../recovery/feature-gap-audit.md#current-build-and-pending-work)
keeps this blocker and unverified provider work separate from the acceptance score.
