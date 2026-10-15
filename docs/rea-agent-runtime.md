# Native Agent runtime verification

13 October 2026, Windows x64. `npm run verify:agent` launches an owned fresh
OpenVision profile and disposable JavaScript project. It adds a controlled HTTP
provider through Models settings and drives the actual Agent input and picker.
No external model or real API credential is used. The verifier closes its owned
app, including the busy-Agent quit confirmation if needed.

## Observed behavior

The 13 October baseline is retained at `logs/agent-verification-8cOFXC/result.json` with
`agent.png`, edit/command screenshots, tool schemas and tool results. It runs
commit `29ae0c7` plus the owned-process implementation in this change.
`identity.json` records Windows x64 build `10.0.26200`, Node `24.18.0` and SHA-256
digests of the host, workbench, Agent bundles, native manifest and verifier inputs.
It established:

- One first submit produces exactly one authenticated streaming Agent request
  to the selected model/URL. The streamed reply appears in the native UI.
- Chat naming creates no extra request after the
  [local-title transformation](rea-local-chat-titles.md).
- A returned `Read` tool call reads the disposable `hello.js`; the next request
  contains its actual `export const answer = 42;` contents and the model reply
  appears in the UI. This executes the real local Agent tool loop, not a stubbed
  filesystem reader.
- Two sequential `StrReplace` calls update `hello.js` and `second.js`. The second
  replacement includes `café 日本語`. Exact disk contents are checked after both
  calls, while an unrelated file must retain its exact original contents.
- The native **Undo All → Confirm** interaction restores both original files.
  Repeating the two edits and choosing **Keep All** retains both changed files.
  The helper checks every file until the asynchronous updates settle, then asserts
  their exact contents. It never implements the edit or undo itself.
- After a complete owned-app shutdown and relaunch with the same local profile,
  the recent reply is visible, both kept edits remain, and the unrelated file is
  unchanged. Submitting a new message makes one authenticated request to the saved
  model, with the previous edit instruction present in its conversation context.
- Clicking the native Stop control closes the server's streaming response.
  This run measured **88 ms** from before the click to the server close event;
  earlier runs measured 102–164 ms. These are local loopback observations, not
  provider latency guarantees.
- Native command approval blocks execution before **Run**. **Skip** returns a
  rejection and creates no fixture output. **Run** creates the expected output
  file with the selected cwd and Unicode contents. Stopping a running command
  closes its authenticated fixture connection in **161 ms** and its registered
  process is no longer live. The [command ownership report](rea-command-cancellation.md)
  explains the observed failure, Job Object fix and detached-descendant tests.
- No renderer page errors occurred during this run.
- Both captured Electron host process objects report exit code 0 after closing.
  Results are written after cleanup; a cleanup failure makes the run unsuccessful.
  This does not establish cleanup of every descendant process.

Before the naming change, `agent-verification-ywoavU` recorded a distinct
`localAgent.nameAgent` request plus the Agent request for the first submit.
The recorded system prompt specifically asks for a short chat title. This was
auxiliary work, not a duplicate Agent submission. Local titles eliminate that
extra inference while retaining the recovered bounded fallback naming behavior.

## Review-handler investigation

The first rejection run, `agent-verification-YvDEBE`, clicked **Undo All** once
and failed the disk assertion. This was a verifier omission: the recovered review
toolbar changes that control to **Confirm** and requires a second click. Native
runs `sacdY3`, `4DGUOU` and the final run prove the confirmed rollback path. No
product handler was changed to make the check pass.

REA's attempt to analyze the 58,977,499-byte workbench source exhausted its
2 GiB worker heap during parsing. Parent Evidence
`ev_74d0bea292b5a13b937f2d07f83965a57930642f02c2cf4c98984144fc81d772`
is explicitly partial, with zero parsed JavaScript files; the complete returned
summary is retained in `logs/rea-agent-review-summary.json`.

An Acorn-delimited exact slice of function `MIb` was then analyzed separately:

| Provenance | Value |
| --- | --- |
| Source | `source/app/out/vs/workbench/workbench.desktop.main.js` |
| Source SHA-256 | `c2e62f77f4febc14585cba93cb98f36f3dcf4df4d3d1bca8ef9095c87ec7030f` |
| Selected range | UTF-16 offsets `[40782743, 40808530)`, starts at line 1033628 |
| Slice SHA-256 | `cf20ae9b1b819f264c9d0193f1aa63d0e6f359efaa31e855184bb24a5024abb8` |
| REA parent Evidence | `ev_b915441f54b53ebaba4b4b232ad51f0afe988d177f7fdb56619c7e4f149d1184` |

The slice parse succeeds with 3,577 visited AST nodes. It is an analyst-selected
subset of modified recovered source; external callees and the rest of the bundle
remain outside that analysis. The application-graph string trace returned no match
(`ev_7b7882427e7483c99cf6c5e730dd816149c8281d9e4bf23c3797d18b26e1b2c4`),
so it does not independently prove the handler relationship. Direct source
inspection identifies the confirmation branch; the native run proves the tested
UI behavior. Original slices, provenance and full REA results remain in ignored
`logs/rea-agent-review-*` artifacts.

## Limits

OV-102, OV-103 and OV-1001 remain Partial. The fixture does not establish real
GPT/DeepSeek/Grok support, command behavior outside the tested Windows x64
PowerShell path, search tools, editor undo after kept changes, retries, malformed-stream handling,
branch persistence, remote hosts, or macOS/Linux execution. Restart evidence
covers a normally closed conversation with kept edits, not crash recovery or
interrupted writes. The fixed 42-story denominator and two fully Verified stories
are unchanged; these additional clauses do not close all OV-102/103 gates.
Provider token counts, retained conversation memory and long-session budgets
remain unmeasured. Saved results contain fixture model names and authentication
booleans; no transport key is recorded.

The search and editor-undo gaps above describe that historical baseline. The
[15 October edit-history follow-up](rea-agent-edit-history.md) records later
native coverage, two reproduced defects and the corresponding fixes. Its full
20-request workload includes search and cannot be treated as the same workload
as earlier request/memory baselines. The current ledger is **6/42 Verified**;
these subcases do not promote OV-103 or replace its dependency gates.

## Real provider history and branching

15 October 2026, Windows x64, commit `8121c4c`. The native history verifier used
the saved **Codex Easy** provider at `https://codex-easy.ai/v1` with model
`gpt-6.1-sol`; request bodies were forwarded to the real endpoint and the
credential was read from the existing local profile without being written to the
result. The disposable project contained a unique file marker.

`logs/live-history-gpt61.txt` records a successful run. The Agent read the file
once, recalled the exact marker after a complete application restart with one
new request and no tool reread, then used the native **Fork Chat** command. The
fork received a distinct composer identity, recalled the same marker, and its
SQLite transcript contained the original messages plus exactly one new exchange.
The source transcript did not contain the fork reply. Both owned application
processes exited 0, the provider returned HTTP 200, and the recorded model was
`gpt-6.1-sol`.

This closes the real GPT history/restart/fork subcase for OV-102. It does not
close retry/timeout/Stop, DeepSeek/Grok history, branch error handling, or the
remaining provider and platform gates. The test consumed real provider quota;
future runs must remain explicit and use disposable profiles.

The separate real cancellation run `logs/live-stop-gpt61.txt` used the same
saved provider/model and passed native Stop, upstream HTTP cancellation and
same-chat resubmission. Stop closed the live request in **143 ms**; the relay's
abort settled in **3 ms**. The resubmission preserved the earlier file-read
history and returned the marker without rereading the file. The single owned host
exited 0. This is one live Codex Easy workload, not a provider-wide latency or
quality claim.

Earlier harness failures are retained: the native picker uses the short model
name, and Stop is a styled div without a button accessibility role. The verifier
selects the observed control; its missing role remains an accessibility gap.
