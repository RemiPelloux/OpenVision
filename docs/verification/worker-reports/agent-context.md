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
  Long 110-turn chat: partial (364/670 marker strings, previously 642–647),
  the rest held by React DOM and Solid internals.
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

## Recommendation per story

**OV-1001: not yet Verified on Linux x64.** Every Linux clause listed for
this branch now has a native verifier with budgets that pass twice, except
the closed-chat release in long chats: the 110-turn chat keeps 118 of 309
reply strings 75 s after close (held by React DOM's nested-update root and a
Solid observer), so the ≤ 5 absolute target holds only for the verifier's
three-turn chat. Remaining Linux gaps: (1) release or bound the long-chat
remainder and decide whether the Solid observer accumulates per closed chat
(multi-chat close test); (2) owner decision on `stream_options.include_usage`.
The live, Windows and macOS clauses are moved out (below). If the owner
accepts the long-chat remainder as framework-bounded under OV-1003, OV-1001's
Linux scope could be promoted on this evidence.

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

- Long chats keep part of their history after close (React DOM's
  nested-update root reference, a Solid observer of a module-level signal).
  Whether the Solid observer accumulates per closed chat was not measured.
- Reply-string retention on the unchanged build varied between runs (2–27);
  the absolute budget rests on runs with the release, which measured 0.
- Unrelated defect (not fixed): with Electron `safeStorage` unavailable,
  Add Provider → Save stays pending with no message.
- Fork budgets come from one baseline run; cold and warm were byte-identical.
