# OpenVision ETA, remaining work and Definition of Done

Checkpoint: **17 October 2026**, after the 16–17 October Linux sessions
([session report](../verification/linux-session-2026-10-16.md)). Ledger owner:
[completion sprints](completion-sprints.md); order owner: [roadmap](roadmap.md).

**18 October re-scope:** the current counts (13/44 Verified, baseline v3) and the
running Linux work are in [§10](#10-re-scope--18-october-2026); §1–§9 keep the
17–18 October record as written.

Per [`objective.md`](../../objective.md), the ETA is expressed as **acceptance
stories, provisional complexity points and blocking gates**, never calendar or
engineer time. Points are provisional sizes of whole stories: they only "burn
down" when a story is promoted to Verified, so a session that closes many gates
can leave the point total unchanged.

## 1. Where we are

| Measure | Value |
| --- | --- |
| Accepted local-feature stories | 42 |
| Verified | **6** (OV-101, OV-105, OV-201, OV-202, OV-404, OV-601), **14.29%** |
| Partial / Planned / Unknown | 23 / 12 / 1 |
| Unfinished points | **322** (P0 81 · P1 87 · P2 47 · P3 42 · P4 39 · P5 26) |
| 80% milestone | 34 Verified: **28 more promotions** |
| Full objective | 42 Verified plus every release gate and a verified distributable |
| Latest download | 0.2.0-preview.7. **None of the 16–17 October fixes are in it.** |

What the two sessions changed: more than 25 reproduced defects were fixed in the
source, each with a native Linux verifier (agent edits, reviews, interruptions,
provider failures, profile storage, MCP, rules/skills/home isolation, data leaks,
shutdown, Explorer, language rename, autocomplete undo, agent request waste,
terminal release). No story was promoted, because every Partial story still has
at least one clause that needs another platform, a live provider or work not yet
done.

## 2. What blocks promotion: four kinds of gates

| Gate type | What it needs | Stories mainly blocked |
| --- | --- | --- |
| **L: Linux work** | Code plus native verification on this host | Most P1–P3 and P5 stories, and the remaining P0 sub-cases |
| **W: Windows rerun** | The Windows x64 test host recorded in earlier evidence; this Linux host cannot prove Windows | Almost every Partial story re-verified after the October fixes; OV-403 exit 134 and the worker `0xC0000005`; OV-901 |
| **M: macOS** | A real Mac (none available), or an explicit decision not to claim macOS | OV-902, plus every story whose claimed platforms include macOS |
| **$: Live provider** | Codex Easy balance (all three keys currently return HTTP 403 `INSUFFICIENT_BALANCE`) | OV-102, OV-103 (live edit on Linux), OV-104, OV-203, OV-204, OV-602, OV-1001 (live budgets) |

## 3. Remaining work by story (ranked)

Status after the 17 October merges. "Next" lists the concrete remaining gates.

### P0 — protect work, make Agent dependable · 81 points

| Rank | Story | Pts | Done on Linux this round | Next (gate types) |
| ---: | --- | ---: | --- | --- |
| 1 | OV-103 Agent editing | 8 | Full-disk/partial-write durability, interruption matrix, review deletion/group/menu cleanup | Live edit on Linux ($); Windows rerun of the new verifiers (W); power loss/EIO not producible (documented) |
| 2 | OV-102 Chat, Stop, retry | 8 | Failure persists across restart; no automatic stream repeats; loop retry capped | Live GPT/DeepSeek/Grok retry/Stop/history/fork ($); W |
| 3 | OV-204 Provider failures | 5 | Cert expiry/hostname, malformed/mid-stream, capability, balance/quota messages | Live cells ($); W |
| 4 | OV-302 Config isolation | 8 | Rules, skills, hooks and home writers moved into the profile; two installations | `.bash_history` written to HOME on graceful shell exit (L, policy); daemon/MCP discovery reads (L); W |
| 5 | OV-303 MCP ownership | 5 | Window-close and profile-switch child release | Simultaneous project+profile edits, HTTP same-name, same-named folders (L); W |
| 6 | OV-301 Rules and memories | 5 | Atomic memories, acknowledged profile writes | Read-only-profile UX (L); W |
| 7 | OV-403 Terminals/tasks/shutdown | 8 | pty fd inheritance, pty host on quit, debuggee journal, killed-terminal release | Windows exit 134 and worker crash (W) |
| 8 | OV-501 Project-data destinations | 13 | Native canary capture; Quick Edit rerank leak and file sync blocked | Merge the telemetry fix so TypeScript type acquisition stops (L, see §6); W; M |
| 9 | OV-1005 Telemetry | 8 | 40 → 0 automatic destinations (branch `telemetry-ov1005-blocked`) | Fix its regression (project customizations hidden), then merge (L); signed-in workloads; W; M |
| 10 | OV-1004 Failure/release safety | 13 | — | Runs last: secret/permission/crash matrix across all accepted stories |

### P1 — daily development and efficiency · 87 points

| Rank | Story | Pts | Done this round | Next |
| ---: | --- | ---: | --- | --- |
| 11 | OV-1003 Idle RAM | 8 | Process inventory, idle/long-session verifier, killed-terminal release; 1.9 GiB cold peak explained (js-debug scan in a verifier layout) | Re-measure once the always-local idle loop is fixed (185 hosted calls/min, the largest idle owner); renderer history bounds (L); W; M |
| 12 | OV-1001 Agent context | 8 | Budgets set and enforced; loop retries and closed-chat requests fixed | Live token budgets ($); closed-chat history still retained in memory (L) |
| 13 | OV-1002 Responsive editing/chat | 8 | — | Frame/input latency, transcript virtualization measurements (L) |
| 14 | OV-401 Explorer | 5 | **Every clause passes on Linux**; symlink-cycle fix | Windows cells only (W) |
| 15 | OV-402 Language tools | 8 | Pinned Linux matrix; stale-rename corruption fixed | Linux C/C++ (clangd) setup; Python/Go/Rust decision; W |
| 16 | OV-603 Safe autocomplete | 8 | Acceptance safety matrix; full-accept undo fixed | Intermittent multiline Tab; IME, split editors (L); W |
| 17 | OV-602 Useful autocomplete | 8 | — | Live quality across languages ($) |
| 18 | OV-104 Subagents | 8 | — | Live overrides and child status ($) |
| 19 | OV-203 Model reasoning | 5 | Manual capability overrides and pi import | Live advertised efforts ($) |
| 20 | OV-701 Import/restore | 5 | pi provider import | Interrupted import, I/O rollback matrix (L, W) |
| 21 | OV-702 Extension lifecycle | 8 | — | Install/update/uninstall, native addons (L, W) |
| 22 | OV-304 Authenticated MCP | 8 | — | OAuth consent/refresh/expiry, secret storage (L) |

### P2 — independently buildable · 47 points

OV-801 native/WASM inventory (13), OV-802 buildable host and addons (13),
OV-803 owned helper replacements (13), OV-804 clean independent build (8). All
are **L** work plus pinned toolchains. Until OV-804 passes, every build depends
on the prepared 3.21.13 recovery input, so **no release can be called
independent**.

### P3 — retrieval and prediction · 42 points

OV-502 relevant retrieval (13), OV-503 incremental indexing (8), OV-504 index
recovery and resources (8), OV-604 next-edit prediction (13). Mostly **L**;
quality measurements need live models ($).

### P4 — distribution · 39 points

OV-901 Windows release (8, W), OV-903 Linux completion (5, L: distribution,
display and architecture matrix), OV-902 macOS (13, M), OV-904 updates and
rollback (13, L+W). Each depends on OV-804.

### P5 — broader modes · 26 points

OV-703 SSH/WSL/containers (13), OV-704 image/browser/computer modes (13).

## 4. ETA

| Target | Promotions still needed | Points to burn | Hard prerequisites |
| --- | ---: | ---: | --- |
| Nearest promotions | OV-401 first, then OV-403, OV-303, OV-603 | 26 | A Windows rerun (W); for OV-403, the exit-134 diagnosis |
| P0 complete | 10 | 81 | Live balance ($), Windows reruns (W), the telemetry regression fix; OV-1004 last |
| 80% milestone | 28 | depends on which 28 | P0 + P1 + most of P2/P4; impossible without W, and without M unless macOS is dropped from claims |
| Full objective | 36 | 322 | All of the above, plus OV-804 independent build, packaged and verified distributables, and accurate docs |

Honest reading: on Linux alone, with no live balance, **no story can currently
be promoted**. Every Partial story has a W or $ clause. Closing Linux gates still
matters (it removes defects and makes each later promotion a rerun rather than
new work), but the burn-down starts only when W and $ are available.

## 5. Definition of Done

### Story DoD (promotion to Verified)

1. Every clause of the story in [completion-sprints.md](completion-sprints.md)
   passes **on every platform the story claims**.
2. Each clause has a committed, rerunnable verifier or test, and a dated evidence
   report with run IDs, exact commands, and observations kept separate from
   inferences.
3. Native checks use the real UI, files, storage and processes. Controlled
   fixtures are labeled; live clauses use real authenticated providers.
4. Failure, cancel, retry, restart, concurrency and cleanup paths are covered
   where the clause involves them.
5. No known open defect in the story's scope; residual exclusions are explicitly
   accepted in the ledger.
6. Performance-related stories meet numeric budgets that were set from baselines
   before any optimization.
7. Ledger, roadmap, progress and README are updated; `status:features` and
   `docs:check` pass; the change is committed, pushed and the remote hash is
   confirmed.

### Release DoD (a downloadable version)

1. Built from the commit being released, with a clean rebuild; after OV-804, built
   without the prepared recovery input.
2. Packaged artifacts pass the critical native suite on each claimed
   platform/architecture.
3. Zero automatic outbound destinations in the extended telemetry capture.
   Data-destination capture shows project content goes only to configured
   providers.
4. Secret scan of the artifacts and docs; no credentials, logs or profile data.
5. Release notes and [release claims](../verification/release-claims.md) say
   exactly which fixes are packaged and which are source-only; checksums are
   published.
6. Install, upgrade, rollback and uninstall keep user data (OV-904); signed where
   advertised.
7. No GitHub Actions or hosted CI; local packaging is reproducible.

### Project DoD ("perfect")

All 42 stories Verified on their claimed platforms; OV-1004 passes across all of
them; the release DoD holds for every claimed platform; critical verifiers have
no unexplained flakes; numeric budgets are enforced by verifiers; and the docs
describe exactly the delivered product.

## 6. Everything still needed (beyond code)

**External prerequisites (owner: you)**

1. **Codex Easy balance**, to unblock every live clause. The commands are listed
   in [live provider Linux](../verification/live-provider-linux.md).
2. **A Windows x64 test session** to rerun the new verifiers after the October
   fixes, and to diagnose exit 134 and the worker crash with stderr captured.
3. **macOS**: provide a Mac, or decide formally not to claim macOS. That removes
   OV-902 from scope and the macOS cells from other stories.
4. **Signing**, if signed releases will be advertised: a Windows Authenticode
   certificate, an Apple Developer ID and notarization.
5. **Product decisions**:
   - parent-folder rule inheritance (currently off);
   - the terminal Claude/Codex status setting (off by default);
   - Python/Go/Rust: ship language servers or declare them syntax-only;
   - which Linux distributions, displays and architectures to claim.

**Known engineering items not yet closed**

- Telemetry branch `telemetry-ov1005-blocked` (commit `5ea2d86a`) hides
  project-level skills, commands and rules in Customize. A bisect confirmed it.
  Fix, then merge; that also stops TypeScript type acquisition (OV-501), and
  likely the always-local idle loop (OV-1003).
- Integrated or Agent shells write `~/.bash_history` into HOME on graceful exit
  (OV-302 policy).
- `verify:utility-listeners` fails on Linux (never verified there).
- Timing-sensitive checks: causes found and fixed in the harnesses (18 October), see [verifier stability](../verification/verifier-stability-linux.md).
- Startup whole-tree scans: `cursorsandbox --preflight-only` ×5 and ripgrep ×30;
  per-root config polling every 5 s; a system-wide process scan every 10 s.
- Closed chats keep their history in renderer memory.

**Process**

- Merge parallel work one branch at a time, with a clean rebuild and a native
  run after each merge. Two of this round's regressions were only caught that
  way.
- Keep the shared recovery input on disk, not in `/tmp`: a reboot wiped the
  first copy.
- Run heavy native verifiers with less parallel load, or mark them load-sensitive.

## 7. Verification of this checkpoint (merged `main`, 17 October 2026, Linux x64)

Clean rebuild from the prepared 3.21.13 input, run sequentially with no other
native workload.

- **Unit and integration suites (28 commands):** all pass, 0 failures. This
  includes `test:desktop` 171/171, `test:agent-review` 95/95,
  `test:provider-storage` 72/72, `test:completion` 43/43 and `test:shutdown` 34/34.
- **Native, passed first time:** `verify:explorer`, `verify:agent-context-budget`,
  `verify:shutdown-cycles`, `verify:agent -- --review-recovery`,
  `verify:provider-matrix`.
- **Native, passed on rerun after one intermittent failure:**
  `verify:language-matrix`; `verify:completion -- --acceptance` (the known
  intermittent multiline Tab); `verify:data-destinations` (an unexplained clean
  app quit during idle indexing, seen once before). These are recorded as open
  flakiness, not as passes on first attempt.
- **Native, known failure:** `verify:global-paths` reports only `~/.bash_history`,
  which was already present before these merges (OV-302 item in §6). Project and
  profile customizations are listed correctly.
- **Data destinations, without the held telemetry fix:** `api2.cursor.sh`,
  `registry.npmjs.org` and the spellcheck download remain. That is expected until
  `telemetry-ov1005-blocked` is fixed and merged.

## 8. Update — 18 October 2026 (Linux x64, source build)

Merged and verified on `main`:

| Story | Result |
| --- | --- |
| OV-1005 / OV-501 | The telemetry branch is merged. The hidden Customize project scope came from a feature flag that only Cursor's servers used to switch on; it is now set locally. `verify:data-destinations` shows 0 non-provider requests (18 before); `verify:telemetry:extended` shows 0 non-user destinations over 600 s idle. The TypeScript registry gate is closed on Linux. The always-local idle loop (about 185 hosted calls per minute) is gone. |
| OV-302 | `~/.bash_history` is resolved. Agent state shells have history switched off in all 7 bundled copies. The user's own terminal history is allowed only when attributed. `verify:global-paths` passes. |
| OV-702 | All 16 lifecycle cases pass. Fixed: replacement of protected bundled extensions, misleading wrong-architecture addon errors, and junk left behind by manifests without a publisher. |
| OV-1002 | Streaming and the transcript were already batched and virtualized. A 12.4 MB model list is no longer rewritten into stored settings on every save (record 13.7 MB → 1.3 MB). `verify:responsiveness` failed one timing budget under host load (small-file typing p95 365.9 > 360 ms) and passed on rerun. |

Combined verification:

- Clean rebuild, then 12 suites with 0 failures (`test:desktop` 197/197).
- Native checks passed first time: `verify:global-paths`, `verify:data-destinations`, `verify:telemetry`, `verify:extensions`, `verify:shutdown-cycles`, `verify:development`, `verify:agent -- --review-recovery`.
- `verify:responsiveness` passed on rerun.
- Ledger unchanged at 6/42: every story still has W, M or $ gates.

The §6 items for the telemetry regression and `.bash_history` are closed. New open
items:

- flag drift: 206 server-controlled feature-flag defaults differ from the anonymous server response, and have not been assessed;
- `verify:model-menu:large` uses a stale selector;
- closed chats keep their history in renderer memory;
- intermittent verifiers (stabilization in progress).

## 9. Pause checkpoint — 18 October 2026

[Verifier stability](../verification/verifier-stability-linux.md) is merged. Five
intermittent checks are fixed in the harness; none was a product defect and no
budget was raised. Wall time is cut for focused runs: interruption `write-kill`
499 s → 50 s, multiline Tab 65 s → 21 s, responsiveness smoke 330 s → 224 s
(`--full` keeps the original datasets).

Verified on merged `main`: suites with 0 failures (`test:desktop` 198/198), plus
`verify:completion -- --acceptance`, `verify:language-matrix`,
`verify:agent-interruption -- --cases=write-kill` and `verify:model-menu:large`.

Still open: `stream.lastChunkToPaintMs` failed once in smoke mode (1789 > 1000);
a keystroke during the async Tab accept could be misplaced (untested).

The ledger is unchanged: **6/42 Verified, 36 stories and 322 points remaining.**
Work is paused here.

## 10. Re-scope — 18 October 2026

**Why the percentage barely moved before this checkpoint.** A story counted only when
every clause passed on every platform it claimed. Almost every Partial story had at
least one Windows, macOS or live-provider clause, and none of those could be run from
the Linux host. So the 16–18 October sessions fixed more than 25 defects and promoted
nothing. That was the rule working as written, not a lack of progress.

**Owner decision (baseline v3, `feature-acceptance.json` version 3).** Platform and
live clauses move out of every story into four dedicated stories:

| Story | Owns |
| --- | --- |
| OV-901 Windows (repurposed) | Install plus every Windows clause of every story; exit 134 and worker `0xC0000005`; Windows ports of Linux-only verifiers (`verify:explorer`, `verify:shutdown-cycles`, `verify:global-paths`, `verify:mcp-config-ownership`, `verify:data-destinations`, `verify:telemetry:extended`, `verify:idle-memory`, `verify:responsiveness` filesystem probe) |
| OV-902 macOS (repurposed) | Every macOS clause; removed entirely if the owner decides not to claim macOS |
| OV-905 Linux matrix (new) | Other distributions, real GNOME/KDE/KWallet sessions, Ubuntu desktop AppArmor policy, ARM64 |
| OV-205 Live providers and accounts (new) | Every live GPT/DeepSeek/Grok clause and optional signed-in account workloads; needs Codex Easy balance |

Other stories are promoted when all remaining clauses pass on Linux x64. The
denominator grows from 42 to **44**; 80% needs **36**. The exact commands for the
four platform/live stories are in the [platform and live test plan](platform-and-live-test-plan.md).

**Result so far:** OV-702 is Verified (Ubuntu/X11 runs `qQAjRu` and `zdi9V9` on merged
`main`, after Arch/Wayland `B5m8yT`). Ledger: **7/44 Verified (15.91%)**.

**The audit after the re-scope.** Eight read-only agents audited all 36 unfinished
stories clause by clause. Only OV-401, OV-403 and OV-702 were Linux-complete. Every
other story still has real Linux work or an owner decision, not just platform gates.
The rerun of OV-401 and OV-403 in an Ubuntu 24.04/X11 container then found four new
failures, so those two stay Partial until fixed:

- `test:shutdown`: `pty-exec.test.mjs` "missing executable" returns status `null`, not 1 (Ubuntu's `/bin/sh` is dash).
- `verify:explorer`: `externalEdit.probesPerRootPerSecond` 4.33 exceeds the budget of 4.
- `verify:project:lifecycle`: hot-exit restore of unsaved editors timed out.
- `verify:shutdown-cycles` (`PYZ4Nx`): terminal history not restored in cycles 3 and 7.

Passed first time in the same rerun: `test:desktop`, `test:extensions`,
`verify:extensions`, `verify:project`, `verify:project:scale`, `verify:development`.

**Linux implementation sessions (started 18 October).** One isolated cloud session per
story cluster, each on its own branch. Each builds from the pinned input, verifies
natively under Xvfb as a non-root user, and writes a report under
`docs/verification/worker-reports/`. Branches are merged one at a time, each followed
by a clean rebuild and a native run.

| Branch | Stories | Main Linux work |
| --- | --- | --- |
| `ov/agent-chat-failures` | OV-102, OV-204 | Fixture Fork/history verifier, full-duration fixture timeouts, custom-header secret matrix, oversized stream cell |
| `ov/agent-editing` | OV-103 | Stale review bar, "Edited" on unapplied write, Undo All resume, full-volume Reject/Undo, orphan temp sweep |
| `ov/subagent-reasoning` | OV-104, OV-203 | Child status label, child and parent retry/resume, profile subagents |
| `ov/rules-memories` | OV-301 | Read-only profile dialog, Linux memory-filesystem verifier, first-request rule fixture, two-window runs |
| `ov/config-isolation` | OV-302 | Editor/daemon MCP discovery from HOME, plugin ownership, gated roots, migration check, second packaged installation |
| `ov/mcp-safety` | OV-303 | Agent MCP failure modes on Linux, HTTP cleanup port, simultaneous edits, HTTP same-name, same basename |
| `ov/mcp-auth` | OV-304 | OAuth trace, OAuth fixture verifier, secret storage, precedence, invalid config, watcher disposal |
| `ov/language-tools` | OV-402 | In-flight edits, rename race on Linux, large-project budgets, Linux clangd |
| `ov/import-restore` | OV-701 | Stronger native import checks, realistic profile, interrupted/ENOSPC/EROFS rollback, exclusions |
| `ov/autocomplete-safety` | OV-603 | Keystroke during async accept, split editors, IME, latency budgets |
| `ov/autocomplete-quality` | OV-602 | Multi-language quality corpus and scorer, live-mode editor acceptance (fixture dry run) |
| `ov/agent-context` | OV-1001 | Fork workload, closed-chat renderer release, live usage capture, reasoning replay pinning |
| `ov/idle-resources` | OV-1003 | `verify:utility-listeners` on Linux, inert proclist scan, numeric idle budgets, startup traversal dedup |
| `ov/responsiveness` | OV-1002 | `lastChunkToPaintMs` cause, incremental-edit proof, scroll p95 |
| `ov/data-telemetry` | OV-501, OV-1005 | Extra capture workloads, loaded-addon inventory, clean-quit flake, 206 drifted gates |
| `ov/linux-completion` | OV-903 | Package verifier, X11 cell, headless Wayland, never-run verifiers, critical-suite runner |
| `ov/release-safety` | OV-1004 | Secret scanner, corrupt-state, crash-recovery and authority matrices, recovery guide |
| `ov/updates-rollback` | OV-904 | Signed release pipeline, side-by-side install/upgrade/rollback, native upgrade verifier |
| `ov/native-inventory` | OV-801 | Linux native/WASM inventory, loaded roles, dispositions, esbuild.wasm evidence |
| `ov/upstream-host` | OV-802 | Upstream Electron 42.10.0 host option, rebuilt storage/terminal/watcher addons, provenance |
| `ov/helper-replacement` | OV-803 | Measured helper ranking, crepectl/cursorsandbox contracts, tree-chunk and file_service harnesses |
| `ov/retrieval-index` | OV-502, OV-503, OV-504 | Owned FTS5 retrieval, quality corpus, incremental indexer, durable storage, native verifiers |
| `ov/modes-inventory` | OV-704, OV-604 prep | Specialized-mode inventory and probe, image input matrix, next-edit decision paper |
| `ov/remote-ssh` | OV-703 | Pinned and branded remote server, SSH verifier against a local sshd |
| `ov/ubuntu-rerun-fixes` | OV-401, OV-403 | The four Ubuntu/X11 failures above, plus the OV-403 Linux clause table |

Each session applies conservative defaults where an owner decision is needed and
lists them in its report. None of those defaults is final until the owner accepts it.

**Owner decisions still needed** (none blocks the Linux sessions):

1. macOS: claim it (needs a Mac) or drop it (removes OV-902).
2. OV-804: where the application JavaScript comes from. Publishing the recovered
   3.21.13 source as an OpenVision-owned input is a distribution-rights question;
   without it, "independent build" cannot pass on Linux even after every native is rebuilt.
3. OV-604 next-edit prediction: support it through the configured provider, or record an exclusion.
4. OV-502: whether lexical (FTS5) retrieval is enough for the release, or semantic embeddings are required.
5. Python/Go/Rust: ship language servers or declare them syntax-only.
6. Whether a story may be promoted while a story it depends on is still Partial (for example OV-702 depends on OV-402).
7. Update strategy and signing-key custody for OV-904.
8. Which drifted server-controlled features (from the 206) ship on by default.

**Update, 19 October.** All 25 sessions stopped within an hour on the shared account
usage limit, and only 3 pushed partial work. They now run 5 at a time, pushing after
each task. `ov/ubuntu-rerun-fixes` fixed the four Ubuntu/X11 failures above (one
product defect in the pty wrapper, three harness defects). After a coordinator rebuild
and a first-time rerun, OV-401 and OV-403 are Verified. Ledger: **9/44 Verified (20.45%)**. Then `ov/subagent-reasoning` (OV-104, OV-203) merged and reran first-time: **11/44 (25.00%)**. Then `ov/rules-memories` (OV-301): **12/44 (27.27%)**. Then `ov/config-isolation` (OV-302): **13/44 (29.55%)**.
