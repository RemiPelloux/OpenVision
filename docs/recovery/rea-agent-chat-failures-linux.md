# Agent history, Fork Chat, timeouts and provider failures on Linux

19 October 2026. OV-102 (chat, Stop, retry, history and branching) and OV-204
(provider failure explanations). **Linux x64 only**: Ubuntu 24.04 container,
Xvfb display, private D-Bus session with a disposable unlocked gnome-keyring,
source build of the 3.21.13 runtime input. Windows and macOS were not run.

Every model response here comes from a **controlled loopback fixture**. None of
it is live inference or evidence of any provider's behaviour. No story is
promoted by this report; the ledger is owned by the
[completion sprints](../planning/completion-sprints.md).

## What was added

| Area | Verifier | Scope |
| --- | --- | --- |
| History and Fork Chat | `npm run verify:agent-history` (`-- --fork-status 503`) | Read, restart, same-chat recall, Fork Chat, fork-only follow-up, read-only SQLite isolation, fork failure then one explicit retry |
| Inference timeouts | `npm run verify:agent-timeout -- headers` / `-- body` | Stall at the **unchanged** 300,000 ms / 600,000 ms deadlines, restart, Try again answered by the fixture |
| Custom-header secrets | `npm run verify:provider-matrix -- --custom-header` | No API key; a custom `X-OpenVision-Auth` header reflected by the fixture into every error body, stream event and malformed chunk |
| Successful-stream shapes | `npm run verify:provider-matrix` | One unfinished event over 4 MiB on an open socket; a stream that ends cleanly in the middle of an event |

### Deterministic fixture behind the existing relay

`desktop/agent-fixture-provider.mjs` is an OpenAI-compatible Chat Completions
server. `verify-live-agent.mjs --fixture` puts it **behind the unchanged
verification relay** as the upstream provider, so the live verifier's relay
evidence and assertions (`verify-live-history.mjs`, `verify-live-retry.mjs`,
`verify-live-timeout.mjs`) apply without quota. The fixture decides only from
the actual request:

- the Read prompt gets one `Read` tool call for the project's `probe.txt`;
- a tool result gets the marker found in that result;
- a recall prompt gets `<prefix> <marker>` **only if the marker is in an
  outgoing assistant message**; otherwise it answers `FIXTURE_HISTORY_MISSING`.
  A marker in user text is never used;
- a wrong credential gets a real HTTP 401 from the fixture; `failNextRequest(503)`
  arms one 503. The relay forwards an armed failure and fails the probe on any
  other one.

The relay's single armed failure was generalised from 401 to any status
(`expectFailureOnNextRequest`); the live 401 path is unchanged.

## Defects found and fixed

### 1. Retried provider failures left an empty assistant turn (OV-102)

**Observed** (`agent-fixture-verification-p3qLAL`): a fork whose first recall
failed with 401 and then succeeded on **Try again** was saved as the source's 5
bubbles **plus 3**: the user turn, an empty assistant bubble and the answer.
The retry request itself was correct (identical roles, prompt once). The full
matrix showed the same empty bubble after every retried failure in the source
chat.

**Owner** (recovered workbench, desktop and glass). A terminal provider failure
appends `{ type: AI, text: "", errorDetails }`. A new submission called
`clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages`, which only
removes the error. The empty bubble stays in storage and is copied into forks.

**First correction and its failure.** Marking the bubble and deleting it in that
clearing loop fixed retries before restart, but not after restart:
`provider-matrix-zAj6Vk`, `28cLaC`, `Q5elBk` and `ta9uM8` stored the restored
placeholder, still flagged and still with its stale error, after a successful
retry. The recovered loop never reached a restored bubble. The stale error left
behind after restart is also pre-existing recovered behaviour.

**Final correction** (`desktop/provider-error-ui.mjs`, marker
`OpenVision drop retried provider-failure placeholder v3`). The chat-level
failure record, which already survives restart, now names the placeholder's
bubble id (`openvisionPlaceholderBubbleId`). The point in `submitChat` that
clears that record before a new submission deletes the named bubble.
`desktop/provider-failure-persistence.mjs` (v3) adds the id to its allowlist
and accepts only `[A-Za-z0-9-]{1,64}`. Earlier in-place patches are removed on
upgrade. A dismissed failure keeps the recovered behaviour: its empty bubble
stays.

### 2. The 4 MiB SSE event limit never applied in local mode (OV-204)

**Observed** (`provider-matrix-cRsXgr`): an unfinished event of 4,259,840 bytes
on an open socket left the Agent at **Stop** with no error after 30 s. The
socket stayed open; only the 10-minute inactivity deadline would end it.

**Owner.** The event budget lived in `desktop/agent-runtime.cjs`, which is
installed only into `cursor-agent-host`. Local mode runs `cursor-agent-exec`
(see the [failure matrix](rea-provider-failure-matrix.md#producer-paths)),
whose provider bodies pass through `watchBody` in
`desktop/provider-request-deadlines.cjs`.

**Correction.** `watchBody` now counts raw SSE bytes per event, with the same
rules as the host relay. LF and CRLF blank lines reset the count, also when
split across chunks. Non-SSE bodies are not counted. On overflow it delivers the
complete events of that chunk, fails the stream with
`OPENVISION_PROVIDER_STREAM_LIMIT` and cancels the reader. The error policy
adds guidance for that code. Production deadlines are unchanged.

### 3. Verification-harness defects (no product change)

- **Native launch race.** `verify-live-agent.mjs` evaluated in the Electron main
  process straight after launch. In 7 of 15 fixture runs on this host
  (`5F2ta3`, `EQd1CL`, `88Bp2S`, `hB8rMR`, `XqfsHO`, `SdKBdx`, `Z2jXXl`) that
  failed with `Execution context was destroyed`. The Node inspector reported
  `Debugger ending` before argv parsing, and the process exited 0 without a
  main log. The verifier now evaluates after the first window. The next 7 runs
  passed (`hXYCJ3`, `RRGV5Z`, `9UmR64`, `ZLiDZ4`, `8wzzel`, `1XTqth`,
  `8yXj6v`). After each owned close it also records surviving processes and
  checks that the profile's main IPC socket no longer accepts. It never did:
  the socket theory was ruled out. The underlying Electron/inspector cause is
  not isolated.
- **OpenSSL 3.0.** The expired-certificate fixture needed `x509 -not_before`
  (OpenSSL 3.4 or newer). On 3.0.13, `verify-provider-tls.mjs` now signs the
  same expired leaf with `openssl ca -startdate/-enddate`
  (run `provider-matrix-kkTLxZ` failed before this).

## Native results (final build)

Build parent `a94b5098`. Workbench
`e5099d4dd1337679759aee50645fb45e33f806ff911b4ddd73b936b7818ec622`, Agent
exec `7053c74f286634f130abd5d64691f146c32e799cd4072ae52d3c877262bb93b3`,
exec error helper `8a41fc7f705d2dd862b685865e0b6c8f1fe6b13445093c686f2a59675d6eb685`.
Run IDs name `logs/<verifier>-<id>/result.json`; logs are private and ignored.

### History and Fork Chat

Each run: Read → marker answer, restart → same chat →
`RESTORED: <marker>` (one request, marker present in the outgoing assistant
history, no tool call), **Fork Chat** → new chat id → fork recall fails once →
**0 automatic requests** in 2.5 s → **Try again** → exactly **1** request with
**identical roles** and the prompt once → `BRANCHED: <marker>`. A read-only
SQLite check then finds the source unchanged (no `BRANCHED:`), and the fork
equal to the source's 5 bubbles plus exactly 2 (user and answer). Each run makes
5 inference requests, and both owned launches exit 0.

| Run | Fork failure | Result |
| --- | --- | --- |
| `hXYCJ3`, `RRGV5Z`, `8wzzel` | 401 | Pass, consecutive |
| `9UmR64`, `ZLiDZ4` | 503 | Pass, consecutive |
| `GBeRi5`, `WM6exm` | 401 | Pass, consecutive |
| `aCTjft`, `tnqwon` | 503 | Pass, consecutive |
| `z4Yc8J` / `YLobr4` | 401 / 503 (final verifier `f29b98ff`) | Pass |

### Provider matrix, default and custom header

All 10 failure cells, Stop and the three restart cells pass, with **24 requests**
and four owned exits of 0. A raw-byte scan of **360 files** (profile, logs,
extensions, project), in UTF-8 and UTF-16LE, finds **0 matches**. The fixture
credential was also absent from the visible UI in every cell, after restart and
after dismissal.

| Run | Credential | First-time result |
| --- | --- | --- |
| `cgoqrk`, `D2B7dt` | Bearer API key reflected by the fixture | Pass, consecutive |
| `3KD9NH`, `xMexap` | No API key; `X-OpenVision-Auth` header reflected by the fixture | Pass, consecutive |

In custom-header mode every request, including each retry, carried the header,
and no `Authorization` header contained the value. Error bodies, the streamed
error event, the malformed chunk, the truncated event and the oversized event
all reflected it. Displayed text showed `[redacted]`. No leak was found, so no
custom-header code changed.

New cells in each of these runs:

| Cell | Observed |
| --- | --- |
| `oversized-event` (4,259,840-byte unfinished event, socket held open) | Stream-limit guidance; the **client closed the socket**; partial text kept; 1 request; **Resume** sends 1 with the prompt once and no empty assistant |
| `truncated-event` (content, then clean EOF inside a `data:` line) | Invalid-stream guidance with the JSON parse detail and `[redacted]`; partial text kept; 1 request; Resume sends 1 |
| Placeholder persistence | Before restart only the unresolved failure keeps an empty assistant bubble. After restart, Try again leaves the reply directly after its user turn |

### Inference timeouts

`verify:agent-timeout` runs the relay's controlled stall on the first request.
Production deadlines are unchanged: before creating the profile, the verifier
checks the exec deadline helper's digest against `provider-request-deadlines.cjs`.
The stall never reaches the fixture.

Each run then:

1. shows native timeout guidance with the production reason;
2. waits 2.5 s for **0 automatic requests**;
3. **restarts**, and the same chat restores the error, the deadline reason and
   **Try again** with **0 requests**;
4. on **Try again**, sends **1** request with the prompt once and the same roles
   as the stalled request;
5. continues with one Read tool call and its result, ending in the marker
   answer.

Every request carries exactly one copy of the prompt (`[1, 1, 1]`), and every
extra inference is explained by a distinct tool call.

| Run | Phase | Deadline | Socket closed after | Result |
| --- | --- | ---: | ---: | --- |
| `7AULA9` | headers | 300,000 ms | 299,986 ms | Pass |
| `0Kjmka` | headers | 300,000 ms | 300,213 ms | Pass, consecutive |
| `rBoXGp` | body (HTTP 200 + SSE comment, then silence) | 600,000 ms | 600,021 ms | Pass |
| `2hDiuw` | body | 600,000 ms | 600,013 ms | Pass, consecutive |
| `S5gATk`, `m3l7Zm` | headers (final verifier `f29b98ff`) | 300,000 ms | 299,984 / 299,989 ms | Pass, consecutive |
| `9RoJeu`, `4e39vc` | body (final verifier `f29b98ff`) | 600,000 ms | 600,017 / 600,022 ms | Pass, consecutive |

Packaged Undici was 7.25.0. The exec deadline helper hash is
`c744ad024583bb6b3b8d297d49307d5778f15372e1ddce4e90027012922bf96f`, and
proxy-fetch is `ba265204d9eb883a632835d919ea6da504e26478d491afec99ea0227abb0d6e0`
(the same as the Windows full-duration runs). Both owned launches exited 0 in
every run.

### `--proxy-server` Agent stall (recorded in the telemetry report)

[Telemetry on Linux](rea-telemetry-linux.md) recorded the BYOK Agent turn
stuck at **Preparing** with any `--proxy-server` (Hyprland/Wayland, strace,
loopback-only namespace). **It did not reproduce here:**

- `verify:agent-history -- --chromium-proxy` (`1XTqth`) and
  `-- --chromium-proxy-loopback` (`8yXj6v`) both pass the full history and fork
  flow with an owned loopback-only proxy.
- The extended telemetry verifier passed with `--proxy` (`JXZoyt`) and
  `--proxy --proxy-loopback` (`uRY9uZ`), in the host namespace and without
  strace. In both, the Agent request reached the fixture.
- In all four runs the owned proxy recorded **0 requests**. The extension
  host's provider fetch connected directly, even with `<-loopback>`.

Not established: the original environment (Wayland, strace, network namespace).
No provider-connectivity defect is confirmed, so nothing was changed.

## 23 October follow-up: tool calls the Agent cannot run

Linux x64, clean source build of the merged `main` (`c6d747c3`) plus this
branch at `f29f5a8f`. Controlled fixture responses only.

**Defect (OV-102/OV-204).** A model call to a tool that was not offered raised
`AI_NoSuchToolError` in the recovered AI SDK parser. The Agent retried the
stream and never drained the call's argument stream. Native run
`agent-fixture-verification-fLqRa3` (pre-fix build) sent **five identical
requests in 60 s** for one prompt, and the turn never finished. A call whose
arguments never parse as JSON was worse in a different way: the Chat
Completions stream adapter only emits a call once its arguments parse, so the
call vanished. The Agent then re-sent the turn as empty and ended silently
(`dvcCxy`, `qO98O8`). An earlier owner fix (modes-inventory) covered only the
hidden `GenerateImage` tool.

**Correction** (`desktop/agent-tool-call-customization.mjs`, every bundled Agent
runtime; it supersedes the GenerateImage-only handling, which is removed in
place):

- The stream adapter's `flush` emits a call whose arguments never parsed, at
  the end of a completed stream.
- The parser turns an unavailable tool, or invalid arguments, into a call
  carrying an OpenVision sentinel instead of throwing.
- The dispatcher checks the sentinel before looking the tool up, so a tool that
  is registered but not offered never runs. It drains the argument stream and
  answers `Tool <name> is not available. Available tools: …` as a tool error.
  `GenerateImage` keeps its specific reason.
- Tools that start from their streamed arguments use the runtime's own
  argument parser. That parser now refuses the sentinel with its existing
  wording, `Tool call arguments were not valid JSON (…). Re-issue the call …`.
  This also renders the failed **Read attempted** row.

Two intermediate builds failed natively, which is how the last two owners were
found. In `2lEup1` and `ieAo1x`, Read validated the sentinel itself and
answered `path: Required`.

**Native results** (`npm run verify:agent-tool-calls`, clean rebuild, first
time):

| Run | Unavailable tool | Malformed `Read` arguments | Then |
| --- | --- | --- | --- |
| `RCRkrN` | 2 requests (call and one continuation with the tool error), finished in 10.2 s | 2 requests, the runtime's not-valid-JSON error, failed **Read attempted** row, finished in 7.1 s | A normal Read roundtrip in the same chat passes; 6 requests in total; owned exit 0 |
| `2wHfix` | Same, 10.1 s | Same, 7.1 s | Same |

In both cases the continuation's last two roles are `assistant, tool`. The tool
message answers the actual call id, and the fixture's final reply quotes the
error. There are 0 automatic requests after the turn ends.

On the same build, `verify:agent` (`agent-verification-qUudMZ`) passed, and
`verify:image-input` (`image-input-IsI3hG`) passed: GenerateImage was not
offered, a call made anyway got its specific reason, and no request reached the
images endpoint.

**Not done: no tool row for an invented tool.** A call to a tool name the
Agent has never heard of produces no tool row; only the model's reply explains
it. Tool rows are emitted per tool type, and an invented name has none.
Rendering one would mean fabricating a tool-call UI record, for example as an
MCP-style row. That is left for an owner decision.

## Not covered here

- Live GPT, DeepSeek and Grok runs (`verify:agent:live`,
  `verify:providers:live`), and Windows or macOS reruns. These belong to the
  platform/live verification stories.
- The `cursor-agent-host` failure producer. It is still unreachable in local
  mode and stays an explicit exclusion; its guard test is kept.
- A pre-submit gate for tool-incapable models. Rejections keep their
  post-rejection guidance.
