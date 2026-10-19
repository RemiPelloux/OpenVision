# Worker report: ov/subagent-reasoning (OV-104, OV-203)

Date: 18–19 October 2026. This is Linux x64 work only: the session ran in a
container under Xvfb, with a private D-Bus and a disposable gnome-keyring Secret
Service. The build was made from source on `main` `b4f52a56` plus this branch,
with runtime input 3.21.13. All model traffic went to **loopback fixtures**
(controlled responses), not live inference.

Story evidence:

- [subagent verification](../subagent-reasoning-verification.md)
- [reasoning capability lifecycle](../../engineering/reasoning-capability-lifecycle.md)

## Summary

- **Fixed: inaccurate child status.** A Task row labelled an inherited High
  child "Provider default". The label now uses the same resolver as the child
  request.
  - The defect was reproduced natively (run `teXGow`).
  - Unit tests were added for both workbench variants.
- **`verify:subagent-reasoning` now covers:**
  - label-versus-request comparison;
  - child 503 and incomplete-stream failures;
  - parent Try again and Resume after a Task;
  - restart with a failed Task and with a running Task;
  - native Task `resume` before and after restart;
  - a profile-defined subagent.
- **`verify:reasoning-capabilities` now covers:**
  - Try again and Resume for Ultra and High;
  - Resume and Try again after restart;
  - a retry blocked with 0 requests when the level is removed between failure
    and retry.
- No routing defect was found for retry or resume. The static "`getTaskToolConfig`
  drops parameters" concern does not apply to the local path: that code is not
  reached.
- All requested suites and verifiers pass on the final build, each on its first
  attempt.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Child status label reflects effective child model/reasoning | **Done.** Fix plus native assertion (inherited row, Explore/custom hover) plus unit test |
| 2 | Child retry/resume keep model and reasoning; restart while pending/failed | **Done** (see note) |
| 3 | User/profile-defined subagent with explicit model and reasoning | **Done.** No defect; parameters are not dropped on the local path |
| 4 | OV-203 parent retry/resume keeps the reasoning level | **Done.** No defect |
| 5 | Reruns with run IDs on the final build | **Done.** See Verification |

Note on task 2: a failed child exposes no Try again or Resume inside its own chat.
The verified recovery paths are:

- parent Try again and Resume, which replay the existing child result and do not
  re-run the child;
- the native Task `resume` of an existing child;
- issuing a new Task after a restart.

A first-class "retry this child" action does not exist in the recovered UI. It is
not invented here.

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Task child status showed the catalog default variant ("Provider default") while the child request sent the saved per-model level (inherited High, explicit Explore level) | `desktop/subagent-model-customization.mjs` (`subagentStatusReasoning`) patches the workbench's `taskSubagentModelDisplay` label owner and its two row renderers (desktop and glass). It is AST-guarded and idempotent, and applies only in local mode | `a8fa3cba` |

Cause, observed:

- Local children run as their own chats, with `selectedModels[0].parameters: []`.
  Persisted in baseline run `lNAHwI`.
- Their request uses `resolveModelParametersForSubmission`, which falls back to
  the saved per-model choice.
- A temporary, uncommitted probe of the agent-host saved-parameter lookup
  recorded **no calls** during a full run (`J0aBD5`). The probed host bundle was
  restored byte-for-byte afterwards.

## Verification

Commands ran as user `ov` through `xvfb-run -a -s "-screen 0 1920x1080x24"
dbus-run-session`, with `gnome-keyring-daemon --unlock --components=secrets`
started inside the session. Native runs ran one at a time.

| Command | Result | Run ID | First-time pass? |
| --- | --- | --- | --- |
| `npm run test:desktop` | 200/200, 0 skipped | — | yes (also 200/200 before the docs commit) |
| `npm run test:agent-relay` | 19/19 | — | yes |
| `npm run test:provider-storage` | 72/72 | — | yes |
| `npm run test:model-discovery` | 39/39 | — | yes |
| `node --test desktop/subagent-model-customization.test.mjs` | 5/5 | — | after one test-harness fix (eval scoping), before commit |
| `npm run verify:subagent-reasoning` (final) | pass, 47 requests, 3 owned hosts exit 0, no page errors | `ZhWJbZ` | yes |
| `npm run verify:subagent-reasoning` (final, second) | pass, same counts | `0Zzh34` | yes |
| `npm run verify:reasoning-capabilities` (final) | pass, 18 requests, 5 owned hosts exit 0 | `1TvLVS` | yes |
| `npm run verify:reasoning-capabilities` (first, same verifier code) | pass | `PUx7tZ` | yes |
| `npm run verify:model-menu` | pass | `WR0IdR` | yes |
| `npm run verify:provider-import` | pass, 4 owned hosts exit 0 | `lGyAY6` | yes |
| `npm run docs:check` | pass | — | after adding this report, the link target |
| `npm run status:features` | runs; no ledger change from this branch | — | — |

### History of `verify:subagent-reasoning` runs

All failures are kept on record.

| Run | Purpose | Result |
| --- | --- | --- |
| `kMwCKg` | Baseline, before the keyring was installed | Failed: provider Save hung with no Secret Service. Environment issue, not product |
| `lNAHwI` | Baseline: old verifier, old build | Pass |
| `J0aBD5` | Old verifier with the temporary host probe | Pass, probe file empty |
| `JpMjRo` | New verifier | Failed: Settings did not open after the restart-while-running case |
| `SrclIo` | New verifier with a recorded click retry | Failed again after three clicks |
| `gTyHaw` | Settings opened after the follow-up message | Pass. The retry loop was then removed, not kept |
| `teXGow` | Final verifier with the fix neutralized in the built workbench | **Failed as expected**: "Parent Thinker · Provider default" vs `high`. The built file was restored afterwards |

Scratch probes `00L41G` and `UkN8yv` (ignored `logs/probe/`) established the DOM
and the failure UI. They are not counted as verification.

Host notes:

- User `ov` cannot read the root-owned proxy CA, so `npm ci` failed as `ov` with
  `SELF_SIGNED_CERT_IN_CHAIN`. The networked build ran as root; the tree was then
  `chown`ed to `ov`. Rebuilds ran as `ov`.
- **Installed package:** `apt-get install gnome-keyring libsecret-tools`. Without
  a Secret Service, saving a provider key never completes in this container.
- 4 CPUs and 15 GB RAM. No timing or RAM claims are made.

## Recommendation per story

**OV-104 (subagent uses chosen model and reasoning).** Promote to **Verified on
Linux x64** for the Linux clauses in scope:

- inherited, explicit-Explore and profile-defined children;
- accurate status;
- unavailable and disabled choices;
- child failures;
- parent Try again and Resume;
- Task resume;
- restart while failed or running.

Remaining Linux gaps, if the owner counts them in the story:

- plugin-provided subagents were not exercised;
- the Settings-after-interrupted-Task observation below.

**OV-203 (model-specific reasoning levels).** Promote to **Verified on Linux
x64** for:

- declared and unverified levels;
- removal, restart and recovery;
- Provider default;
- parent retry, resume and restart keeping the selected level;
- a retry blocked with 0 requests after removal.

This rests on the default below: permanently "Unverified" labels satisfy the
Linux clause, and per-level live verification moves to the live story.

## Moved to platform/live stories

- Live per-level reasoning acceptance per provider and model (Codex Easy GPT,
  DeepSeek, Grok tiers).
- Live subagent runs, including explicit child overrides against real providers.
- Windows and macOS reruns of both verifiers, and packaged builds.

## Defaults pending owner decision

- **In-scope Task paths.** These are general-purpose, Explore and profile/user
  subagents (`<profile>/User/agents`). Plugin subagents were recorded, not
  exercised.
- **"Unverified" labels.** Permanently "Unverified"-labelled levels satisfy the
  Linux clause. Per-level live verification is in the live story.
- **Context window and max output.** A user-specified context window and max
  output, which the Agent ignores, should read as informational. This was **not
  changed**. The settings row text ("… · 64,000 context · 4,096 max output") is
  asserted verbatim by `verify:provider-import` (provider-import evidence), so the
  change touches another story's verifier and evidence. Recommended small change:
  append "(informational)" to those two fields, and update that verifier in the
  same commit.
- **Custom subagent reasoning.** Custom subagents have no frontmatter reasoning
  field. Their reasoning is their model's saved choice, which is what is verified.
  Adding a frontmatter level would be new behavior and was not added.

## Open risks

- **Settings after an interrupted Task (unexplained).** After restarting while a
  Task child was running, the titlebar Settings button did not open Settings
  (twice, `JpMjRo` and `SrclIo`). It opened normally after one follow-up message.
  The cause is unknown. No page errors were logged.
- **Failed child UX.** A failed child shows "Stopped" on the parent's Task row,
  and an empty child chat with no error or recovery action.
- **`modelSelectionError` classification.** It and the encoder's
  unavailable-level error are plain `Error`s, so they are retryable by class
  under the exec's turn-retry classifier. That classifier is not on the measured
  local child path, so no loop was observed. It would matter only if that path
  became active.
- **Label resolver dependency.** The label now depends on
  `resolveModelParametersForSubmission`. If submission rules change, the label
  follows them by design. The verifier compares the label with real requests, so
  drift would be caught.
