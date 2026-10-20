# Worker report: OV-1001 agent context (branch `ov/agent-context`)

18–19 October 2026. Linux x64 only (cloud container, Ubuntu 24.04 userland,
Xvfb + private D-Bus session, Node 24.18.0, source build of the pinned 3.21.13
input). Every model response comes from a **controlled loopback fixture**;
nothing here is live inference. Evidence: [agent-context-linux.md](../../performance/agent-context-linux.md)
and [responsiveness-linux.md](../../performance/responsiveness-linux.md).

## Summary

- **Fork workload added** to `verify:agent-context-budget`: native Fork Chat
  after the `edit` turn, then one more turn. The fork request carries the
  source history once with all four tool calls replayed, no duplicate or
  auxiliary request; the source transcript on disk is unchanged; the fork
  reopens from Chat History after a restart. Budgets from the fresh baseline
  `agent-context-238ldi`.
- **Closed-chat history released from renderer memory** (shared OV-1001 /
  OV-1003 defect). Heap-snapshot retainers showed closed chats were never
  finalized because their handles stayed reachable; a marker-guarded
  customization now unloads a closed, idle chat after the recovered 60 s
  window, clears the preview cache, clears disposed transcript row caches and
  removes tiptap's write-only `child` back reference. Verifier chat: reply
  strings 75 s after close 0 (2–27 before), all marker occurrences 12 (45
  before), every one owned by bounded prompt history or the chat list.
  Long 110-turn chat (round 2, 20 October): 74/670 marker and 3/310 reply
  strings after also detaching MCPService's Solid roots and clearing React
  DOM's nested-update root (was 642–647 marker strings).
- **Usage capture**: the live relay records provider-reported prompt,
  completion, cached and reasoning tokens; `--live --model` and a labelled
  `--live-dry-run` were added. Finding: Agent requests do not ask for
  streamed usage (`stream_options.include_usage`).
- **Reasoning replay** documented and pinned: `reasoning_content` deltas are
  dropped on receipt on the OpenAI-compatible path, never replayed or
  persisted.

## Tasks

| # | Task | State | Notes |
| --- | --- | --- | --- |
| 1 | Fork/branch workload with budgets from a fresh baseline | Done | Baseline `238ldi` taken before the product change; budgets in `agent-context-budgets.json` |
| 2 | Release closed-chat history; absolute budgets in both verifiers; reopen restores transcript | Partly done | Absolute target met for the budget verifier's chat (0 reply strings; 12 occurrences, all non-history owners). Long chat: release is partial; budgets tightened 700 → 400 markers plus 130 reply strings, not ≤ 5 (React/Solid internals). Reopen asserted in both |
| 3 | `--live --model` usage capture; dry-run proof with cached tokens | Done (dry run) | Live run moved to platform/live stories |
| 4 | Reasoning replay documented and pinned | Done | `edit`: 4 deltas sent, 0 replayed; `fork`: 0 replayed |
| 5 | Final reruns with run IDs | Done | See Verification |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Closed chats never unloaded (handles never collected), keeping messages and per-chat caches | recovered composer service `closeComposer` → `unloadComposer` path (`desktop/closed-chat-release.mjs`) | `735631b8` |
| 256-entry preview cache keeps streamed reply prefixes of closed chats | `stripMarkdownToPlainText` cache, cleared after release | `735631b8` |
| Disposed transcript row model keeps row content caches | transcript row model disposal | `735631b8` |
| tiptap `extend()` keeps the last configured copy (closing over the last chat input) on the shared base extension | bundled tiptap core base class | `735631b8` |
| Context-budget verifier allowed 15 s for provider Save (discovery); container runs need longer | verifier harness (90 s, as `verify-responsiveness`) | `4bab83cc` |

## Verification

Host: 4 CPUs, 15 GB RAM, no other native verifier running at the same time.
Native runs as user `ov`:
`runuser -u ov -- env HOME=/home/ov PATH=/opt/nvm/versions/node/v24.18.0/bin:/usr/bin:/bin <wrapper> <command>`,
where the wrapper runs
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- bash -c 'echo -n "<password>" | gnome-keyring-daemon --unlock --components=secrets; "$@"'`.
Package installed for this: `gnome-keyring` and `libsecret-tools` (apt).
Without a Secret Service, Electron's `safeStorage` was unavailable
(`basic_text`) and **Add Provider → Save never completed and never contacted
the fixture**; main's own verifier failed the same way (`agent-context-zyBUR1`).

Unit suites:

| Command | Result |
| --- | --- |
| `npm run test:agent-context` | 36/36 |
| `npm run test:agent-retry` | 36/36 |
| `node --test desktop/responsiveness-measure.test.mjs` | 6/6 |

Native runs (first-time results; no run was retried to obtain a pass):

| Purpose | Command | Run | Result |
| --- | --- | --- | --- |
| Fresh baseline (unchanged build) | `node desktop/verify-agent-context-budget.mjs --no-budgets` | `agent-context-238ldi` | recorded; fork restart check 0 (helper defect, fixed; profile reopened with the fixed helper) |
| Baseline, long chat | `verify:responsiveness -- --phases=closedChat --save-closed-snapshot` | `responsiveness-N68nJK` | 203 marker / 93 reply strings after 75 s |
| Release (no tiptap step) | `--no-budgets --heap-strings` | `agent-context-n6kU7t`, `-O1NbdE` | 24 / 6 |
| Release | `--no-budgets --heap-strings` | `agent-context-DO8srr` | 12 / 0, reopen 1 |
| Release, long chat smoke | `--phases=closedChat --save-closed-snapshot` | `responsiveness-XA86OV` (two steps), `-E8Ehcc` | 125 / 39; 126 / 40 |
| Release, long chat full | `--full --phases=closedChat` | `responsiveness-Av9fiJ` | 364 / 118 of 670 / 309 |
| Usage dry run | `npm run verify:agent-context-usage:dry-run` | `agent-context-BPYUaS`, `agent-context-1KfyPj` | 13/13 requests with usage and cached tokens |
| Final (changed verifier, run 1) | `npm run verify:agent-context-budget` | `agent-context-gkebJY` | all budgets pass; 12 / 0 after release, reopen 1, forks 1/1 |
| Final (changed verifier, run 2) | `npm run verify:agent-context-budget -- --heap-strings` | `agent-context-DkBHlY` | all budgets pass; 12 / 0, reopen 1 |
| Final (changed verifier, ×2) | `npm run verify:responsiveness -- --phases=closedChat` | `responsiveness-6fa4SW`, `-4NLhm5` | all budgets pass; 125 / 39 both, reopen 1 |
| Final | `npm run verify:agent` | `agent-verification-5fcuQA` | success; restart resume, review, command checks, upstream cancellation 186 ms; hosts exit 0 |

Also: `npm run docs:check` (no failures) and `npm run status:features`
(exit 0). Every final run passed on its first attempt; no retries. The fork
byte counts were identical cold and warm in every run (82,026 bytes). Timings
in the final runs: Stop → socket close ≤ 89 ms, chat close → socket close
90 ms, window close 255–256 ms (budgets 250 / 250 / 900 ms). Run IDs are
`logs/<id>/` folders of this container; logs are not published.

## Round 2: long closed chats (20 October 2026)

Owner decision (`docs/planning/owner-decisions.md`, OV-1001): the long-chat
remainder is a leak, not a framework limit. The branch was reset to
`origin/main` (`95dd887d`) and rebuilt cleanly
(`rm -rf source electron-host backups/bundle-customizations build/source-build.json build/namespace-journal.json build/cache && npm run build:desktop`;
`prepare:desktop` is not needed once `build/recovery` exists and refuses to
run then). Native runs as `ov` with `XDG_RUNTIME_DIR=/run/user/<uid>`, Xvfb,
`dbus-run-session` and an unlocked gnome-keyring Secret Service.

**Owners found** (heap-snapshot retaining paths with closure source
positions, `responsiveness-6i5Fng`: 412/669 marker and 142/309 reply strings
kept on the clean main build):

| Owner | Fix (commit `87534dde`) |
| --- | --- |
| `MCPService` constructor creates three Solid roots; `createRoot` copies the current owner's context, and the service is created while a chat view renders, so the roots and an effect observing the settings signal kept that view's context (props, conversation proxies) for the window's life | Those three roots pass `detachedOwner = null` (exact pattern: `const { dispose } = createRoot(...)` registered on the service; 3 in each variant) |
| React DOM `rootWithNestedUpdates` keeps the last root with nested sync updates; its container held the closed transcript's DOM and listeners | Cleared whenever React resets the nested-update count; consecutive nested commits still counted |

**Budget accounting** (commit after `87534dde`): on `main`, the owner-decided
`CodebaseSearch` tool (OV-502) adds exactly 4,675 schema bytes and 1,302
estimated tokens per request, so `fork` and warm `single` exceeded their byte
budgets (`agent-context-B0ISB4`). Each byte/token budget now includes exactly
that cost per request; a new `maxToolSchemaBytes` budget pins the 20-tool
schema at 60,790 bytes per request.

Round 2 verification (all first-time passes; no retries):

| Command | Run | Result |
| --- | --- | --- |
| Diagnostic, clean main build: `verify:responsiveness -- --full --phases=closedChat --save-closed-snapshot` | `responsiveness-6i5Fng` | 412 marker / 142 reply strings (fails 400/130) |
| After the fix: same command | `responsiveness-1sgNdr` | 74 / 3 |
| **Clean rebuild of `87534dde`**, `npm run verify:responsiveness -- --full --phases=closedChat` ×3 | `responsiveness-9WablJ`, `-qLP3nu`, `-diY3Wa` | all budgets pass, 74 / 3 each, reopen restores turn 110 |
| `npm run verify:responsiveness -- --full` (all phases) | `responsiveness-YqoF5E` | closedChat 74 / 3, reopen 1. Fails two OV-1002 timing budgets on this GPU-less host (`scroll.frameP95Ms` 83.3 > 50, `editorLarge.longTaskTotalMs` 396 > 300), owned by OV-1002's reference-host rerun |
| `npm run verify:agent-context-budget` (before the schema accounting) | `agent-context-B0ISB4` | session and heap budgets pass; byte budgets fail on `fork`, warm `single` (CodebaseSearch) |
| `npm run verify:agent-context-budget` | `agent-context-YKBanZ` | all budgets pass; 12 / 0 after release, reopen 1, forks reopen after restart |
| `npm run verify:agent-context-budget -- --heap-strings` | `agent-context-j5O0jj` | all budgets pass; 12 / 0 |
| `npm run verify:agent` | `agent-verification-mHn17l` | success |
| `npm run test:agent-context` / `test:agent-retry` | — | 39/39, 40/40 |
| `npm run docs:check`, `npm run status:features` | — | no failures, exit 0 |

The 74 occurrences left in the 110-turn chat are prompt text in bounded
owners: the app-wide 50-entry generation cache, the 10-entry prompt-input
history and its two persisted copies, the chat title, subtitle and Chat
History header, and the markdown lexer's last input. The closedChat budget is
now absolute: ≤ 5 reply strings and ≤ 90 marker occurrences.

## Recommendation per story

**OV-1001: promote to Verified on Linux x64.** Every Linux clause listed for
this branch has a native verifier with budgets. On a clean rebuild of
`87534dde` the closed-chat budgets passed 3/3 first time on the 110-turn chat
(≤ 5 reply strings, measured 3; ≤ 90 marker occurrences, measured 74, all
bounded prompt owners; reopen restores the transcript). The other OV-1001
budgets passed twice (`YKBanZ`, `j5O0jj`), including fork, retry/loop,
tool-call and reasoning-replay pins, and `verify:agent` passed. Pending owner
decision only: `stream_options.include_usage` (live usage capture). Live,
Windows and macOS clauses are moved out (below).

## Moved to platform/live stories

- Live budget runs per model (`--live --model SAVED_ID`), including whether
  each provider reports streamed usage without `stream_options.include_usage`.
- Live fork/history run on Linux (`verify:agent:live -- --history`).
- Live DeepSeek (reasoning provider) replay check across tool calls and turns.
- Windows and macOS reruns of every verifier above.

## Defaults pending owner decision

- `reasoning_content` replay keeps the current behaviour (dropped on receipt,
  never replayed) until a provider-specific need is shown live.
- Agent requests are left without `stream_options.include_usage`; asking for
  usage would change every request body and needs per-provider evidence.
- Closed-chat release uses the recovered 60 s idle window (not immediate
  release on close), so a chat reopened within a minute stays loaded.
- The unreachable Agent host path and the unexercised multi-message loop stay
  recorded exclusions; retrieval context (OV-503) is out of OV-1001's
  "necessary context" scope.

## Open risks

- Other service constructors that create Solid roots while a view renders
  (for example `_availableDefaultModels`, `_disposeReactive`,
  `_isBlockingUserDecision`) were not changed: they did not appear as owners
  in the closed-chat snapshots and use a different pattern.
- Closing several long chats in one session was not measured; each closed
  chat is released by the same path, but accumulation was not tested.
- The React DOM change clears a reference React itself only replaces; it was
  verified by unit tests on the recovered code and by the native runs above,
  not by React's own test suite.
- Reply-string retention on the unchanged build varied between runs (2–27);
  the absolute budget rests on runs with the release, which measured 0.
- Unrelated defect (not fixed): with Electron `safeStorage` unavailable,
  Add Provider → Save stays pending with no message.
- Fork budgets come from one baseline run; cold and warm were byte-identical.
