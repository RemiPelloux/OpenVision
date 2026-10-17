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

## Status

OV-1001 stays **Partial**. Passed here: fixed-workload measurement of input
bytes/estimated tokens, duplicate requests, retained history and Stop latency;
numeric budgets with a native verifier; upstream cancellation on Stop, chat
close and window close; retry and tool-call history preserved. Open: live
provider token and request measurements (tokenizer and prompt caching), branch
conversations, reasoning replay for reasoning providers, renderer release of
closed-chat history, the unreachable Agent host path, and Windows/macOS runs.
This is **source-build evidence**; the preview.7 portable package does not
contain these changes.
