# OpenVision ETA, remaining work and Definition of Done

Checkpoint: **17 October 2026**, after the 16–17 October Linux sessions
([session report](../verification/linux-session-2026-10-16.md)). Ledger owner:
[completion sprints](completion-sprints.md); order owner: [roadmap](roadmap.md).

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
- Timing-sensitive checks under heavy parallel load: the interruption `write-kill`
  retry, the provider-deadline socket test, the multiline Tab acceptance.
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
