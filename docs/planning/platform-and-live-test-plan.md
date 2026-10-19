# Platform and live test plan (baseline v3)

Created 18 October 2026 with the [baseline v3 re-scope](eta-and-definition-of-done.md#re-scope-baseline-v3).
Every clause below was moved out of a Linux-judged story into one of four stories in
the [ledger](completion-sprints.md). Each one needs a real machine, a funded
provider or an official account, so it cannot be closed from the Linux host.

Rules for every run: use the current source (rebuild with `npm run build:desktop`),
record the commit, OS and architecture, and write a dated evidence report with run
IDs. A retry is recorded as a retry, not as a first-time pass. An unavailable machine
is a blocker, not a pass. Linux-only verifiers marked **port** need a platform
version before they can run.

## Tracking tickets

GitHub issues: [#1 OV-901 Windows](https://github.com/RemiPelloux/OpenVision/issues/1), [#2 OV-902 macOS](https://github.com/RemiPelloux/OpenVision/issues/2), [#3 OV-905 Linux matrix](https://github.com/RemiPelloux/OpenVision/issues/3), [#4 OV-205 live providers](https://github.com/RemiPelloux/OpenVision/issues/4), [#5 owner decisions](https://github.com/RemiPelloux/OpenVision/issues/5), plus defects [#6 keyring-less provider save hang](https://github.com/RemiPelloux/OpenVision/issues/6) and [#7 Quick Edit Ctrl+A](https://github.com/RemiPelloux/OpenVision/issues/7).

## OV-205 — live providers and official accounts

Prerequisite: Codex Easy balance (all three keys currently return HTTP 403
`INSUFFICIENT_BALANCE`). Commands are in [live provider Linux](../verification/live-provider-linux.md).
Run each item on Linux first, then on every claimed platform.

| From | Run |
| --- | --- |
| OV-102 | `npm run verify:providers:live -- --live --model <gpt-6.1-sol, deepseek-v4-flash, grok-4.7>`; `npm run verify:agent:live -- --live --model <each> --stop`, `--history-failure` (fork, real 401, retry), `--timeout headers` and `--timeout body`; `--retry-auth` (DeepSeek) and `--failure-restart` (GPT) ending in a successful retry. Record real upstream model and request IDs; resolve or record the DeepSeek High HTTP 400 and the Grok continuation 429 |
| OV-103 | `npm run verify:agent:live -- --live --model <each> --edit` |
| OV-104 | `npm run verify:agent:live -- --live --model gpt-6.1-sol --reasoning high --subagent`, plus child overrides to another provider/model; record the High continuation timeout `oJS37r` |
| OV-203 | Per advertised level for each model: `npm run verify:agent:live -- --live --model <id> --reasoning <level>`; live discovery metadata from real `/models` |
| OV-204 | Live provider rejection of real tool and image input |
| OV-301 | `npm run verify:agent:live -- --live --model <each> --rules` and `--memory` |
| OV-602 | `npm run verify:providers:live -- --live --mode completion` and `--mode completion-quality` (multi-language corpus); `npm run verify:completion -- --live --model <id>` per claimed model |
| OV-1001 | `npm run verify:agent-context-budget -- --live --model <id>` (provider-reported and cached tokens); live fork/history on Linux; DeepSeek reasoning replay with tools |
| OV-1002 | A live SSE stream through the responsiveness stream/typing phase |
| OV-501, OV-1005 | Optional signed-in account workload: which hosted calls the transport guard allows with a token, none of them telemetry |
| OV-502 | Embedding endpoint against a funded provider (if embeddings are claimed) |
| OV-604 | Next-edit quality and latency (if prediction is supported) |
| OV-704 | Live image-input quality; provider-backed image generation if included |
| OV-703 | A live-provider Agent session over a remote workspace |
| OV-903, OV-1004 | Account sign-ins (`verify:accounts`, onboarding); secret redaction with real keys |

## OV-901 — Windows x64

Prerequisite: the Windows x64 test host recorded in earlier evidence. Build from the
current source, then run in order (critical crashes first):

1. Diagnose the intermittent host exit 134 (`AYXW1r`) and the `UtilityProcessWorker`
   `0xC0000005` with native stderr captured.
2. Clean install of the packaged build on a clean machine; `Install-OpenVision.ps1`
   and `npm run test:installer`; OpenVision identity in dialogs, launchers and PE metadata.
3. Rerun after the October fixes:
   - Agent: `verify:agent` (with `--review-recovery`), `verify:agent-interruption`, `verify:agent-io-faults`, `verify:review-deletion`, `verify:review-storage`, `verify:provider-matrix`, `verify:provider-errors`, `verify:subagent-reasoning`, `verify:reasoning-capabilities`, `verify:model-menu`, `verify:provider-import`, `verify:agent-context-budget`.
   - Rules and MCP: `verify:local-rules`, `verify:rules:windows`, `verify:memory`, `verify:memory:filesystem`, `verify:legacy-memory` (`:stale`, `:windows`), `verify:inline-edit`, `verify:mcp-ownership`, `verify:mcp-cleanup` (`--persistent`), `verify:mcp-session` (`--direct`), `verify:mcp-http-cleanup` (`--pending`), `verify:agent -- --mcp`/`--mcp-stdio` (`--mcp-failures`).
   - Project and language: `verify:project:lifecycle`, `verify:project:scale`, `verify:development`, `verify:language-matrix`, `verify:language`, `verify:language-ui`, `verify:rename-race`, `setup:cpp` + `verify:cpp`, `verify:import`, `test:import`, `verify:extensions` (needs MSVC; add PE-header architecture diagnostics).
   - Autocomplete and performance: `verify:completion` (default, `--editing`, `--acceptance`), `verify:telemetry`, `verify:utility-listeners`, `benchmark:native`, `verify:local-startup`.
4. **Port** and run: `verify:explorer`, `verify:shutdown-cycles` (Windows close/kill cycles), `verify:global-paths` (USERPROFILE/APPDATA/LOCALAPPDATA), `verify:mcp-config-ownership` (no `/proc`), `verify:data-destinations` and `verify:telemetry:extended` (owned proxy plus ETW/netsh), `verify:idle-memory` (private working set, ConPTY release), the `verify:responsiveness --full` filesystem probe, `verify:profile-io-faults` (VHD-based full and read-only volume).
5. Windows installer upgrade, rollback and uninstall cells (OV-904); WSL (OV-703);
   computer-use sidecar (OV-704); retrieval verifiers (OV-502–OV-504); Windows helper
   variants (OV-803); MSVC rebuilds (OV-802); independent Windows build (OV-804);
   Authenticode signing if advertised.

## OV-902 — macOS

Prerequisite: a real Mac for each claimed architecture, or a formal owner decision
not to claim macOS (which removes this story). macOS packaging does not exist yet:
`desktop/package-portable.mjs` rejects darwin.

- Packaging and launch for x64/arm64, Keychain safeStorage, TCC permissions, sandbox, paths, native addons.
- The same verifier set as Windows step 3, with macOS ports of the Linux-only verifiers (APFS full/read-only volume, pf/dtrace capture, `~/Library` path isolation).
- macOS inventory and helper replacements (OV-801, OV-803), Xcode rebuilds (OV-802), independent build (OV-804), notarized updates (OV-904), computer-use sidecar and TCC (OV-704).

## OV-905 — other Linux distributions, displays and architectures

Verified so far: Arch/Omarchy on Hyprland Wayland (owner host) and Ubuntu 24.04 on
Xvfb X11 (cloud container). Still needed: run `npm run verify:critical` (added by
`ov/linux-completion`) on each claimed cell:

- Fedora, Debian and any other claimed distribution.
- Real GNOME and KDE sessions, including KWallet (`verify:linux-secrets`).
- Ubuntu desktop with its AppArmor unprivileged user-namespace policy (23.10+).
- ARM64, with its own pinned input.
