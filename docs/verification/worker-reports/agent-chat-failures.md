# Worker report: agent-chat-failures (OV-102, OV-204)

Branch `ov/agent-chat-failures`, 18–19 October 2026. Linux x64 only, with
controlled loopback fixtures; no live inference. The full evidence is in
[Agent history, Fork Chat, timeouts and provider failures on Linux](../../recovery/rea-agent-chat-failures-linux.md).

## Summary

All four audit gaps are implemented and pass natively on Linux:

- fixture-mode history and Fork Chat;
- fixture-only full-duration timeouts;
- the native custom-header secret matrix;
- oversized and truncated successful-stream cells.

The new native checks turned up two product defects, both fixed at their
owners:

- a retried provider failure left an empty assistant turn in the saved chat
  and in every fork, also after restart;
- the 4 MiB SSE event limit never applied on local mode's exec transport.

Two verification-harness defects were also fixed: a Linux launch race in the
Agent verifier, and an OpenSSL 3.0 incompatibility in the TLS fixture. The
`--proxy-server` stall did not reproduce. No live, Windows or macOS work was
attempted.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Fixture history + Fork Chat verifier (`verify:agent-history`) | **Done.** 401 and 503 fork failures, read-only SQLite isolation; passes repeatedly (below) |
| 2 | Fixture-only timeout cells (`verify:agent-timeout -- headers\|body`) | **Done.** Unchanged 300,000 / 600,000 ms deadlines, restart before Try again; 2× each |
| 3 | Native custom-header secret matrix (`verify:provider-matrix -- --custom-header`) | **Done.** No leak found, so no code fix was needed |
| 4 | Oversized and truncated successful-stream cells | **Done.** The oversized cell exposed defect 2 (fixed) |
| 5 | Regression reruns on the final build | **Done.** All pass first time (below) |
| — | `--proxy-server` "Preparing" stall | **Investigated.** Not reproduced in 4 runs; no change |

## Defects found and fixed

| Defect | Owner | Commits |
| --- | --- | --- |
| Retried provider failure left an empty assistant bubble in the saved transcript and forks; after restart it also kept its stale error | `desktop/provider-error-ui.mjs` (workbench `submitChat`); allowlist in `desktop/provider-failure-persistence.mjs` | `21ef5fd3` and `5cb7c178` (bubble-level attempts; failed after restart), `a94b5098` (final) |
| Unfinished SSE event over 4 MiB buffered until the 10-minute inactivity deadline (limit installed only in the unreachable host bundle) | `desktop/provider-request-deadlines.cjs` (`watchBody`), guidance in `desktop/provider-error-policy.js` | `451e713f` |
| Agent verifier evaluated in the Electron main before its first window: `Execution context was destroyed` in 7 of 15 runs | `desktop/verify-live-agent.mjs` | `398da9b9` |
| Expired-certificate fixture required OpenSSL 3.4 | `desktop/verify-provider-tls.mjs` | `4d9a5bf7` |

## Verification

Host: 4 CPUs, 15 GB RAM, Ubuntu 24.04 container, Node 24.18.0, Xvfb. Native
runs were serialized and run as the unprivileged user `ov` under
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session`. Each D-Bus session
started a **disposable, unlocked gnome-keyring**: a plaintext test keyring under
`/home/ov`, holding only fixture secrets. Without a Secret Service the provider
dialog never finished saving (`agent-fixture-verification-BzaV1X`). Without a
default collection the app blocked on a keyring prompt (`MDgJrw`).

Packages installed: `gnome-keyring` and `libsecret-tools` (apt). The build also
needed `/home/user/OpenVision Projects` owned by `ov`.

### Final build

The final product build is parent `a94b5098`; later commits change only
verifiers and docs. Its hashes:

| Item | SHA-256 |
| --- | --- |
| Workbench | `e5099d4d…ec622` |
| Agent exec | `7053c74f…5b93b3` |
| Exec error helper | `8a41fc7f…eb685` |

Run IDs name ignored `logs/<verifier>-<id>/` directories. "First-time" means
the first run of that verifier on the final build and final verifier, with no
rerun discarded.

### Unit suites (final tree)

| Command | Result |
| --- | --- |
| `npm run test:agent-retry` | 39/39 |
| `npm run test:agent-timeout` | 44/44 |
| `npm run test:provider-errors` | 53/53 |
| `npm run test:provider-storage` | 72/72 |
| `npm run test:build-integrity` | 26/26 |
| `node --test desktop/agent-stream-limit.test.mjs desktop/agent-runtime.test.mjs` | 19/19 |
| `npm run check:desktop` | Pass |
| `npm run build:desktop` | Pass |

### Native verifiers

| Command | Run IDs | Result |
| --- | --- | --- |
| `npm run verify:agent-history` | `GBeRi5`, `WM6exm` | Pass ×2, consecutive, first-time |
| `npm run verify:agent-history -- --fork-status 503` | `aCTjft`, `tnqwon` | Pass ×2, consecutive, first-time |
| `npm run verify:agent-timeout -- headers` | `7AULA9` (299,986 ms), `0Kjmka` (300,213 ms) | Pass ×2, consecutive, first-time |
| `npm run verify:agent-timeout -- body` | `rBoXGp` (600,021 ms), `2hDiuw` (600,013 ms) | Pass ×2, consecutive, first-time |
| `npm run verify:provider-matrix` | `cgoqrk`, `D2B7dt` | Pass ×2, consecutive, first-time: 10 cells, Stop, 3 restart cells, 24 requests, 0 of 360 files |
| `npm run verify:provider-matrix -- --custom-header` | `3KD9NH`, `xMexap` | Pass ×2, consecutive, first-time; 0 of 360 files, 0 in the UI |
| `npm run verify:agent` | `agent-verification-IpHIu5` | Pass, first-time |
| `npm run verify:agent -- --review-recovery` | `agent-verification-LLWgqu` | Pass, first-time |
| `npm run verify:provider-errors` | `provider-errors-NX5Rmp` | Pass, first-time: 17/17, 38 requests, 0 matches in 42 log files |
| `npm run verify:provider-import` | `provider-import-9giOxV` | Pass, first-time |
| `npm run verify:agent-history -- --chromium-proxy` and `--chromium-proxy-loopback` | `1XTqth`, `8yXj6v` | Pass; 0 proxied requests |
| `node desktop/verify-telemetry-extended.mjs --proxy [--proxy-loopback] --no-strace --idle-seconds 10` | `telemetry-extended-JXZoyt`, `uRY9uZ` | Pass; Agent request reached the fixture |

After the last verifier change (`f29b98ff`, which restricts the main-socket
probe to owned sockets), the changed verifier's cells were run again on that
commit. All six passed first-time:

| Command | Run IDs |
| --- | --- |
| `npm run verify:agent-history` | `z4Yc8J` |
| `npm run verify:agent-history -- --fork-status 503` | `YLobr4` |
| `npm run verify:agent-timeout -- headers` | `S5gATk` (299,984 ms), `m3l7Zm` (299,989 ms) |
| `npm run verify:agent-timeout -- body` | `9RoJeu` (600,017 ms), `4e39vc` (600,022 ms) |

Every run restored the failure with 0 requests. Each history run kept the
source at 5 bubbles and the fork at 7, and both owned launches exited 0.

`npm run docs:check` (0 failures) and `npm run status:features` (6/42
Verified, unchanged) were run on the final tree.

### Earlier failing or diagnostic runs (kept, not counted as passes)

| Run(s) | What it showed |
| --- | --- |
| `provider-matrix-kkTLxZ` | OpenSSL 3.0 could not build the expired leaf |
| `provider-matrix-cRsXgr` | Oversized-event defect: Stop stayed visible, no error |
| `provider-matrix-rlFQSs` | The truncated-event expectation was set from this observed classification |
| `agent-fixture-verification-p3qLAL` | Empty-placeholder defect: fork had 8 bubbles where 7 were expected |
| `provider-matrix-zAj6Vk`, `28cLaC`, `Q5elBk`, `ta9uM8` | The bubble-level fix failed after restart |
| `provider-matrix-hbXX8q` | Focused pass of the final fix |
| `5F2ta3`, `EQd1CL`, `88Bp2S`, `hB8rMR`, `XqfsHO`, `SdKBdx`, `Z2jXXl` | Launch race (7 of 15). The same window also had passes: `jcW50v`, `IUXoog`, `C51JLH`, `ztmQNQ`, `u1Dwli`, `j7Jtci`, `S7Ba3b` |
| `hXYCJ3`, `RRGV5Z`, `9UmR64`, `ZLiDZ4`, `8wzzel` | Passes after the race fix, before the final verifier commit |

## Recommendation per story

**OV-102: not yet Verified on Linux x64.** The fixture-level clauses now pass
natively on Linux:

- stream, Stop, explicit retry and no duplicate submission;
- full-duration header and body timeouts;
- restart history and recall;
- Fork Chat, with isolation checked in storage;
- failure persistence and dismissal.

Promotion still needs the live GPT, DeepSeek and Grok runs, with actual model
and request identity. Those are moved to the live story. No Linux-only gap
remains in the listed clauses, apart from the explicit host-producer exclusion
pending owner sign-off.

**OV-204: not yet Verified on Linux x64.** The following now pass natively with
fixtures:

- 401/403/429/5xx, offline/DNS/TLS/certificate cases;
- malformed, truncated and oversized streams;
- capability rejections and context limits;
- custom-header secret handling in logs, profile files and the UI;
- socket release on cancellation, overflow and timeout.

Remaining:

- live-provider failures (moved);
- the image capability check before submission (a product decision; not
  changed);
- process-wide header and log redaction beyond the Agent path (only the Agent
  path was scanned here).

The no-Secret-Service provider-save hang (see Open risks) needs triage before
any Linux claim that covers keyring-less desktops.

## Moved to platform/live stories

- Live GPT, DeepSeek and Grok: `verify:agent:live` (`--history`,
  `--history-failure`, `--timeout`, `--stop`, `--retry-auth`,
  `--failure-restart`) and `verify:providers:live`.
- Windows x64 and macOS reruns of every cell here: history and fork, timeouts,
  custom-header matrix, oversized and truncated streams, placeholder removal
  after restart.
- The `--proxy-server` stall in its original environment (Hyprland/Wayland
  desktop with strace and a loopback-only namespace).

## Defaults pending owner decision

- **Host failure producer.** The unreachable `cursor-agent-host` failure
  producer stays an explicit exclusion. Local mode uses the exec producer; the
  existing guard test is kept. The host bundle's own 4 MiB relay limit is also
  kept, and still unreachable.
- **Tool-incapable models.** They keep post-rejection guidance; no pre-submit
  gate was added.
- **Dismissed failures.** A dismissed failure keeps its empty placeholder
  bubble, as recovered. Only a retry or a new submission removes it. Choosing
  to also delete it on dismissal would be a one-line change at the same owner.
- **Truncated event at EOF.** It is classified as invalid streaming data, with
  the parser detail and Resume, rather than as an incomplete stream.

## Open risks

- **Launch race cause.** The root cause of the Electron/inspector race is not
  isolated. The verifier now avoids it. Other verifiers that evaluate in the
  main process straight after launch may hit it on Linux; the matrix verifier
  does not.
- **Stale error after restart.** A restored error bubble that is dismissed,
  rather than retried, still keeps its stale `errorDetails` in storage. This is
  pre-existing recovered behaviour. The bubble is empty and hidden.
- **Event-budget allocation.** The budget is a bound on one unfinished event,
  not on total output or process memory, and it rejects a legitimate single
  event over 4 MiB. The transport still allocates each received chunk.
- **Keyring setup.** Results depend on the disposable keyring setup above. The
  no-Secret-Service save hang was not investigated, because it is outside
  OV-102/OV-204. It may deserve a Linux keyring story.
