# Agent context, duplicate requests and session disposal on Linux

17 October 2026. P1 work on OV-1001 (necessary context and prompt
cancellation). **Linux x64 only** (Omarchy/Hyprland Wayland, source build of
the 3.21.13 runtime input, Node 26.8.1 tooling). Windows and macOS were not run.
Every model response comes from a **controlled loopback fixture**; this is
**not live inference**, and no provider's tokenizer, pricing or caching was
exercised. OV-1001 is **not promoted**; it stays Partial.

## What was measured

`npm run verify:agent-context-budget` (`desktop/verify-agent-context-budget.mjs`)
launches the native application with a disposable profile and a local
OpenAI-compatible fixture. The fixture writes every request body to
`logs/agent-context-*/requests/` exactly as received. `desktop/agent-context-measure.mjs`
splits each body into parts:

| Part | Definition |
| --- | --- |
| System | `system`/`developer` messages |
| Tools | the `tools` array (tool schemas) |
| History | messages before the latest user message (includes the first user message carrying `<user_info>`, rules and the MCP catalog) |
| Current user | the latest user message (query plus the recently-viewed-files block) |
| Current turn | assistant tool calls and tool results after the latest user message |
| File context | whole-file bytes of each fixture file found in message text (by its unique first line) |

Bytes are exact UTF-8 sizes. **Token counts are estimates** from the tokenx
1.6.0 heuristic (no model vocabulary), already installed in `tooling/`; they
are not provider-reported usage. A *duplicate* is a request whose model,
messages and tools equal an earlier one; a *near duplicate* repeats an already
answered scripted step.

Fixed workloads, each in a new chat, run twice in one application session:
**cold** is the first Agent work after a fresh-profile launch; **warm** is the
same workloads again in new chats of the same running application.

| Workload | Fixture script |
| --- | --- |
| `single` | One question, no tools |
| `reads` | 3 turns: Read `alpha.js`; Read `alpha.js` again and `beta.js`; plain answer |
| `edit` | 1 turn: Read two files, StrReplace both (with reasoning deltas), answer |
| `long` | 22 plain turns with fixed-size, non-repeating replies |

Session checks: three Stops on held streams; a model that keeps repeating one
sentence (`loop`); closing a running chat's tab; closing the window during a
request. Renderer retention is the number of heap-snapshot strings containing
a unique marker of the closed chat (Chrome DevTools Protocol, after forced GC).

## Baseline and result

Baseline of record: `logs/agent-context-9tfmzH`, a clean rebuild of commit
`935771e4` (Agent exec `bfd110f9…`, workbench `37291db0…`). Result:
`logs/agent-context-9xRAhN`, clean rebuild with this change (Agent exec
`8dda1766…`, workbench `2a26532e…`). Budgets were set earlier from baseline
`logs/agent-context-5IGIXx` (same commit and hashes).

### Input per workload (observed)

Cold and warm values are identical except `single` (warm adds the completed
Git warm-up text). The changes in this report do not alter request content.

| Workload | Requests | Input bytes before → after | Est. tokens before → after | Duplicates / near / auxiliary |
| --- | ---: | ---: | ---: | --- |
| single, cold | 1 → 1 | 74,363 → 74,363 | 19,782 → 19,780 | 0 / 0 / 0 |
| single, warm | 1 → 1 | 75,060 → 75,126 | 20,022 → 20,044 | 0 / 0 / 0 |
| reads | 6 → 6 | 491,259 → 491,655 | 134,355 → 134,487 | 0 / 0 / 0 |
| edit | 5 → 5 | 398,716 → 399,046 | 108,979 → 109,089 | 0 / 0 / 0 |
| long | 22 → 22 | 1,903,173 → 1,904,625 | 512,160 → 512,644 | 0 / 0 / 0 |

The 66-byte-per-request differences are run-specific environment text; the
first baseline `5IGIXx` matches the result byte for byte (491,655 / 399,046 /
1,904,625).

### Where the bytes go (observed, cold, result run)

| Workload | System | Tools | History | Current user | Current turn | File context | Largest request | Last history |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| single | 9,686 (13.0%) | 56,115 (75.5%) | 7,800 | 661 | 0 | 0 | 74,363 | 7,800 |
| reads | 58,116 | 336,690 (68.5%) | 77,370 | 3,812 | 15,031 | 30,220 | 87,752 | 21,208 |
| edit | 48,430 | 280,575 (70.3%) | 42,815 | 3,305 | 23,396 | 17,150 | 82,486 | 8,563 |
| long | 213,092 | 1,234,530 (64.8%) | 439,610 | 14,709 | 0 | 0 | 98,085 | 31,472 |

19 tool schemas (56,097 bytes of JSON) are sent with every request. The
largest are Shell 13,137, Task 8,367, TodoWrite 4,996, SwitchMode 3,480,
Grep 3,368 and EditNotebook 3,153 bytes. History grows linearly in `long`:
1,083–1,097 bytes per turn, 7,800 → 31,472 bytes over 22 turns; no
summarization triggers at this size. Retained history on disk (SQLite
`composerData` plus bubbles) is 181,429–181,670 bytes for `long`, 33,512 for
`reads`, 25,630 for `edit` and 9,782–10,385 for `single`. In `edit`, all four
tool calls are replayed in the final request before and after. The fixture's
`reasoning_content` deltas are not replayed in later requests either before or
after (0 in both); this change keeps that behaviour and does not establish
whether it is correct for reasoning providers.

### Session behaviour

| Check | Before (`9tfmzH`) | After (`9xRAhN`) |
| --- | --- | --- |
| Stop → upstream socket closed (3 Stops) | 57, 60, 73 ms; 0 extra requests | 48, 51, 69 ms; 0 extra requests |
| Looping model: requests for one submission | **14** in the measured window (7 attempts, 12 exact duplicate bodies; last at 138.8 s), and a 15th at 205 s | **2** (first answer + the built-in reminder retry), done in 0.84 s |
| Looping model: explicit recovery | Try again after the repeats | Try again with guidance; **1** request when clicked |
| Close a running chat's tab (after confirming) | In-flight request **not cancelled** (no socket close within 5 s) | Socket closed **52 ms** after confirmation |
| Renderer marker strings: before close → after close → after 75 s | 55 → 44 → 44 | 55 → 45 → 45 |
| Close the window during a request | socket closed 134 ms after close; host exit 0 | 226 ms; host exit 0 |
| Unscripted requests | 1 (the 15th loop request) | 0 |

The window-close latency includes Playwright's close handshake; both values
are under the budget.

## Waste found and fixed

**Loop exhaustion repeated paid inference (fixed).** The Agent's single-message
loop detector already applies its own mitigation: one retry with a
`<system_reminder>`, then `AgentLoopError` ("looped_again"). The local turn
retry classifier `TEe` treated that error as transient, so the whole step was
repeated with backoff up to `maxRetries: 10` (observed in `9tfmzH`: attempts at
0, 2.9, 8.0, 17.4, 35.0, 73.4 and 138.1 s, and an eighth at 205 s; derived
ceiling 11 attempts, 22 requests). In an exploratory run whose reply repeated
itself across turns (`e5XWw4`), each repeat also carried more reminder and
assistant text than the last. `desktop/agent-loop-retry-customization.mjs`
makes single-message loop exhaustion terminal for automatic turn retries and
reports it with the local provider error type, so the workbench shows guidance
and **Try again** (one explicit request) and keeps it across restart through the
existing failure persistence. Provider failures, transport retries and the
built-in reminder retry are unchanged; multi-message (`assistantMessage`) loops
keep the recovered behaviour (not exercised). Tests run the recovered `TEe`
before and after.

**Closing a running chat did not release its request (fixed).** The Close Tab
action (tab close control and Ctrl+W) asks "The chat is currently running. Are
you sure you want to close it?" and then only hid the composer
(`closeComposer`); the provider stream stayed open, so a closed chat could keep
generating and running tools. `desktop/chat-close-cancellation.mjs` cancels
through `cancelCurrentStep`, the method Stop and Cancel Chat use, after the
user confirms, then closes. Cancel, idle chats and chats exempt from the dialog
keep recovered behaviour; a failed cancellation is logged and the tab still
closes. Both workbench variants are patched; tests execute the recovered
`run` method from each.

## Measured but not changed

These were inspected and left alone because the evidence does not show they
are unnecessary:

- **Tool schemas (65–76% of input).** Every tool has a local executor. A probe
  (`--probe-tools`) showed WebSearch and GenerateImage call the configured
  provider (`An error occurred while searching the web`; `Provider request
  failed: 404 Not Found` from the fixture), so they depend on provider
  capability rather than being dead. Removing schemas would remove features;
  capability-based gating needs per-provider evidence.
- **Built-in browser MCP catalog** (about 5.2 KB inside the first user
  message, so in every request of a chat). It appeared in all runs; one earlier
  run (`1Cz01C`) had a 2,493-byte `<user_info>` instead of 7,672, so its size
  depends on startup timing (observed). Whether the browser tools work in
  OpenVision is unverified.
- **Re-reading an unchanged file.** History holds both copies because the
  model asked twice; the Agent adds no duplication (3 extra occurrences in
  `reads`, budgeted).
- **Recently-viewed-files block** (~630 bytes per user turn). Removing it from
  older turns would change earlier messages and defeat provider prefix caching
  (inferred); not changed.
- **Auxiliary requests.** None in any workload: local chat titles and no
  summary requests (observed).

## Session disposal

Window close releases everything owned by the window (socket closed, owned
host exit 0). Chat close now releases its in-flight request. **Renderer
retention after chat close is not fixed:** 44–45 of 55 marker strings remained
75 s after close, before and after this change (above the recovered composer
handle cache's 60 s idle window). A diagnostic snapshot (`agent-context-U9mysZ`,
`--heap-strings`) showed about 19 KB for the closed three-turn chat: user turns,
several streaming prefixes of each reply, the chat header and editor state. The
retainers seen include a 256-entry bounded module cache and the storage item
cache (inferred from retainer paths); others were not identified. This is
recorded for OV-1003. One diagnostic run (`Cn0owg`) lost its window during the
75 s wait while the host exited 0; it was not reproduced in four later runs.
The owners were identified and released on 19 October; see
[Closed-chat release](#closed-chat-release-19-october-2026).

## Budgets

`desktop/agent-context-budgets.json` holds the budgets and
`npm run verify:agent-context-budget` fails when any is exceeded or unmeasured.
They were set from baseline `5IGIXx` before the fixes were accepted and apply to
cold and warm passes. Bytes/tokens: larger cold/warm baseline + 5% for
run-specific environment text. Requests, duplicates and tool-history: exact.

| Workload | Requests | Input bytes | Est. tokens | Largest request | Other |
| --- | ---: | ---: | ---: | ---: | --- |
| single | ≤ 1 | ≤ 78,883 | ≤ 21,047 | ≤ 78,883 | 0 duplicates, near duplicates, auxiliary |
| reads | ≤ 6 | ≤ 516,238 | ≤ 141,212 | ≤ 92,140 | ≤ 3 repeated file copies; ≥ 3 tool calls replayed |
| edit | ≤ 5 | ≤ 418,999 | ≤ 114,544 | ≤ 86,611 | ≥ 4 tool calls replayed |
| long | ≤ 22 | ≤ 1,999,857 | ≤ 538,277 | ≤ 102,990 | last history ≤ 33,046; persisted ≤ 190,747 bytes |

Session: Stop → socket close ≤ 250 ms (5× baseline maximum), 0 extra requests
after Stop; looping model ≤ 2 requests and 0 duplicates (the recovered
single-reminder design), exactly 1 request for its Try again; 0 unscripted
requests; closing a running chat cancels it, ≤ 250 ms from confirmation;
renderer marker strings ≤ 46 after close and after release (non-regression);
window close cancels the request ≤ 900 ms; owned host exits 0.

Baseline `9tfmzH` fails 5 session budgets (loop requests and duplicates,
unscripted request, chat-close cancellation); `9xRAhN` passes all.

## Commands

```sh
npm ci --prefix tooling
export OPENVISION_RECOVERY_DIR=<prepared 3.21.13 input>
npm run build:desktop
npm run verify:agent-context-budget            # logs/agent-context-9xRAhN: all budgets pass
node desktop/verify-agent-context-budget.mjs --no-budgets   # record a baseline without checking
# diagnostics: --probe-tools, --skip-loop, --workloads=single,reads, --heap-strings
# 19 October: fork workload and closed-chat release budgets are part of the default run
npm run verify:agent-context-usage:dry-run     # relay usage capture against the fixture (synthetic usage)
node desktop/verify-agent-context-budget.mjs --live --model SAVED_ID   # real quota: single and reads
node desktop/heap-retainers.mjs logs/agent-context-<id>/heap-after-release.heapsnapshot <marker> out.json [--depth=60]
npm run test:agent-context      # 19/19
npm run test:agent-retry        # 35/35
npm run test:agent-review       # 95/95
npm run test:context-work       # 8/8
npm run test:build-integrity    # 26/26
npm run benchmark:context       # 4,000 → 40 reads, unchanged
npm run check:desktop && npm run docs:check
npm run verify:agent            # logs/agent-verification-qtaXMF: success, provider Stop 135 ms
npm run verify:provider-matrix  # logs/provider-matrix-lgYyQk: 8/8 + Stop + restart cells, 20 requests
npm run build:desktop           # clean rebuild before the result run
```

The baseline was rebuilt from a clean `source/` without the two build hooks;
its Agent and workbench hashes equal the original baseline's.

## Forks (19 October 2026)

The verifier now forks the finished `edit` chat with the native **Fork Chat**
command and sends one more turn in the fork (`fork` workload, cold and warm).
It records, for the fork request, how many user messages carry the source
chat's prompt, the tool calls replayed and reasoning replayed; after the
application closes it compares the source transcript on disk (SQLite
`composerData` headers and bubble text) with a copy taken before the fork, and
checks that the fork starts with the source transcript plus one exchange. The
application is then relaunched and each fork is reopened from **Chat History**
(its persisted title in the history search box) with its reply and the source
prompt visible.

Fresh baseline before any change in this work: `logs/agent-context-238ldi`
(build of `b4f52a56`). Observed, cold and warm identical:

| Fork measurement | Value |
| --- | --- |
| Requests for the fork turn | 1 (0 duplicate, 0 near duplicate, 0 auxiliary) |
| Fork request | 82,026 bytes, ~22,659 estimated tokens (the last `edit` request: 81,239 bytes) |
| History in the fork request | 15,383 bytes: the whole source turn, including both Read results |
| Source prompt copies in the fork request | 1 |
| Tool calls replayed | 4 (2 Read, 2 StrReplace) |
| Reasoning replayed | 0 (see [Reasoning replay](#reasoning-replay-19-october-2026)) |
| Source transcript on disk | 6 entries before the fork and after the application closed; unchanged; no fork text |
| Fork transcript on disk | 8 entries: the 6 source entries, then the fork prompt and reply |
| Fork after restart | reopened from Chat History with the source prompt and its reply (`agent-context-O1NbdE`, `-DO8srr`) |

The baseline's restart check reported 0 because its history helper looked for
a sidebar cell instead of the history menu; the same baseline profile reopened
both forks with the corrected helper in a separate launch, and every later run
reports 1. Fork budgets (`desktop/agent-context-budgets.json`): 1 request;
bytes and tokens the baseline plus 5% (86,128 / 23,792); source history
exactly once; ≥ 4 tool calls replayed; 0 reasoning replayed; source unchanged;
fork keeps the source and adds exactly 2 entries; reopens after restart.

## Closed-chat release (19 October 2026)

**Owners (observed in heap snapshots, inferred roles).** A new diagnostic,
`node desktop/heap-retainers.mjs SNAPSHOT MARKER`, prints the shortest strong
retaining path of every string containing a marker; WeakMap entries are
followed only when both the table and the key are reachable. On the unchanged
build (`agent-context-sDtPqn`, `responsiveness-N68nJK`):

- No chat handle opened in the session was ever collected. The recovered
  handle manager unloads a chat only after its handle is garbage-collected
  (60 s LRU, then a sweep), but handles stay reachable from per-view state
  stores and from the bundled tiptap core: `extend()` stores every configured
  copy on the shared, module-level base extension (`this.child = copy`), and
  the Placeholder copy closes over the last chat input (handle, headers,
  editor document). So closed chats were never finalized, and their messages
  stayed in the loaded-composer store and `_loadedConversationCacheByComposerId`.
- The 256-entry plain-text preview cache (`stripMarkdownToPlainText`) held one
  entry per streamed reply prefix (60 of 93 retained reply strings in the
  smoke responsiveness chat).
- A disposed transcript row model kept `lastMarkdownRowById` and
  `contentCacheByRowId` (24 strings).
- Bounded owners that are not chat history: the prompt-input history (10
  prompts, also persisted in workspace storage), the chat title, subtitle and
  Chat History header row, and the markdown lexer's last input.

**Change** (`desktop/closed-chat-release.mjs`, both workbench variants, three
marker-guarded idempotent steps): after `closeComposer`, a release is
scheduled for the recovered 60 s idle window. If the chat is still closed,
idle and none of its sub-chats is open, it is unloaded through the recovered
`unloadComposer` path (pending messages persisted, store entry and per-chat
caches dropped) and the preview cache is cleared; a running chat is checked
again later, and a chat reopened within the window is left loaded. Disposing a
transcript row model clears its two content caches. The tiptap base class no
longer stores the write-only `child` back reference (`parent` is unchanged;
no reader of `child` exists in the bundle). Reopening loads the chat from
SQLite as for any chat that is not loaded.

**Result (observed).** Marker strings in the renderer for the closed chat
(three turns, then an in-flight request cancelled by closing):

| Run | Build | Before close | 3 s after | 75 s after | Reply strings 75 s after | Reopen |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `agent-context-238ldi` | unchanged | 55 | 45 | 45 | 2 | not measured |
| `agent-context-sDtPqn` | unchanged | 56 | 45 | 45 | 27 (from the saved strings) | not measured |
| `agent-context-O1NbdE` | release without the tiptap step | 55 | 45 | 24 | 6 | full transcript |
| `agent-context-DO8srr` | release | 55 | 41 | 12 | 0 | full transcript |

The 12 occurrences left in `DO8srr` are 8 strings: four prompts in the
prompt-input history, the persisted prompt-history JSON, the chat title, its
subtitle (the in-flight partial) and the Chat History header. Reply-string
retention before the change varied between runs (2–27), consistent with
handles that are only sometimes still referenced; with the release it is 0.

In the long chat of `verify:responsiveness -- --phases=closedChat` the
19 October release was partial: smoke `N68nJK` → `E8Ehcc` 203 → 126 marker and
93 → 40 reply strings; full `responsiveness-Av9fiJ` 364 of 670 marker and 118
of 309 reply strings (previous evidence: 642–647 marker strings retained). The
owner did not accept this as a framework limit (20 October).

### Long chats (20 October 2026)

On a clean rebuild of `main` (`95dd887d`), the full 110-turn chat kept 412 of
669 marker and 142 of 309 reply strings 75 s after closing
(`responsiveness-6i5Fng`). The heap-retainer report now prints closure source
positions, which named two owners:

- **`MCPService`'s Solid roots.** Its constructor creates three roots and
  disposes them with the service. Solid's `createRoot` copies the current
  owner's context when no detached owner is given, and the service is created
  lazily while a chat view renders. Those roots, and an effect in them still
  observing the module-level settings signal, therefore kept that view's
  context (its `agentRef` memo, props and conversation-map proxies) for the
  life of the window. They now pass `detachedOwner = null` (no owner, no
  context); they belong to the service. Exactly these three roots match the
  pattern `const { dispose } = createRoot(...)` followed by
  `this._register({ dispose })` in both workbench variants.
- **React DOM's `rootWithNestedUpdates`.** React keeps the last root that had
  nested synchronous updates until another root has some; that root's
  container held the closed transcript's DOM, whose listeners close over the
  view (headers memo, row model). It is now cleared whenever React resets the
  nested-update count (`react-runtime/react-dom/esm-client-production.js`);
  consecutive nested commits of one root are still counted, so the
  infinite-update guard is unchanged.

Result on a clean rebuild of `87534dde`, full dataset, three consecutive runs:
`responsiveness-9WablJ`, `-qLP3nu`, `-diY3Wa` each kept **74 of 669–671 marker
and 3 of 309–310 reply strings**, and each reopened the chat with its 110th
reply. The 74 occurrences are prompt text in bounded owners: the app-wide
50-entry generation cache (`generationCache`, prompt descriptions only), the
10-entry prompt-input history and two persisted copies of it, the chat title,
subtitle and Chat History header, and the markdown lexer's last input.

Budgets: `verify:agent-context-budget` ≤ 5 reply strings and ≤ 14 marker
occurrences 75 s after close, and the reopened chat must show every prompt and
reply; `verify:responsiveness` closed chat ≤ 5 reply strings and ≤ 90 marker
occurrences (the bounded owners above: 50 + 10 + 2 × 10 + about 5), and the
chat must reopen with its last reply. Both are absolute.

### CodebaseSearch schema in the byte budgets (20 October 2026)

On `main`, the owner-decided `CodebaseSearch` tool (OV-502, retrieval) is sent
with every Agent request. It adds exactly 4,675 schema bytes and 1,302
estimated tokens per request (`agent-context-B0ISB4` against `-DO8srr`); the
other parts did not grow. `fork` and warm `single` therefore exceeded their
byte budgets. Each byte and token budget now includes exactly that cost per
request (the largest-request budget, one schema), and a new
`maxToolSchemaBytes` budget pins the 20-tool schema at 60,790 bytes per
request, so any further tool or schema change fails until it is accounted
for. Tool schemas are now 77% of a single-question request (60,790 of
78,739 bytes).

## Reasoning replay (19 October 2026)

The `edit` workload's fixture sends one `reasoning_content` delta before each
of its four tool calls. Observed in every run: none of the four is present in
any later request of the same turn (tool-call sub-turns), in the fork turn
(a later turn), or in the persisted chat (`allThinkingBlocks` empty; no
reasoning text anywhere in `cursorDiskKV` or `ItemTable`). The Agent exec
bundle has no reader for `reasoning_content` on the OpenAI-compatible stream
path (it reads Bedrock's `reasoningContent` only), so these deltas are dropped
on receipt (inferred from the bundle; whether they are displayed was not
checked). Budgets pin this: `edit` 4 reasoning deltas sent and 0 replayed;
`fork` 0 replayed. Whether a reasoning provider needs its reasoning replayed
across tool calls is not established; that is a live check.

## Provider usage capture (19 October 2026)

`node desktop/verify-agent-context-budget.mjs --live --model SAVED_ID` runs
the `single` and `reads` workloads (cold pass only, no session checks or
budgets) through the live relay to the saved provider, using real quota, and
records the provider-reported prompt, completion, cached and reasoning tokens
for every request next to the tokenx estimate (`result.usage`). The relay
copies the usage block exactly as reported (final Chat Completions chunk or
Responses `response.completed`; DeepSeek's `prompt_cache_hit_tokens` is read
as cached tokens) and never estimates missing fields.

`npm run verify:agent-context-usage:dry-run` runs the same relay path against
this controlled fixture, which appends a usage chunk with **synthetic values**
(prompt and completion tokens are tokenx estimates; cached tokens are the
estimate of the byte prefix shared with the previous request). It proves
capture, not provider numbers: `logs/agent-context-BPYUaS` recorded usage,
including cached tokens, for 13 of 13 requests.

Observed: Agent requests set `stream: true` but no
`stream_options.include_usage`. OpenAI-compatible providers that report
streamed usage only when asked will therefore report none, and a live run
records that as missing usage. Changing the request is an owner decision.

## Status

OV-1001 stays **Partial** in this document. Passed here: fixed-workload
measurement of input bytes/estimated tokens, duplicate requests, retained
history and Stop latency; numeric budgets with a native verifier; upstream
cancellation on Stop, chat close and window close; retry and tool-call history
preserved; fork requests carry the source history once with tool calls and
leave the source unchanged across restart (19 October); closed-chat history is
released from the renderer for the verifier's chat (19 October) and for the
110-turn chat (20 October); reasoning
replay behaviour pinned; usage capture proven on a labelled dry run. Open:
live provider token and request measurements (tokenizer and prompt caching),
live fork/history and reasoning-provider checks, the unreachable Agent host
path, and Windows/macOS runs.
This is **source-build evidence**; the preview.7 portable package does not
contain these changes.
