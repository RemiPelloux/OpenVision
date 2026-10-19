# OpenVision status, gaps, ETA and Definition of Done

Updated **19 October 2026**. This page is the single current view. The acceptance
clauses are in the [ledger](completion-sprints.md); the priority order is in the
[roadmap](roadmap.md). Dated checkpoints (16–19 October) are archived in
[planning history](history/checkpoints-2026-10.md). Run `npm run status:features`
for the authoritative count.

The ETA is given as acceptance stories, worker sessions and blocking gates, never
calendar or engineer time.

## Where we are

| Measure | Value |
| --- | --- |
| Accepted stories (baseline v3) | **44** |
| Verified | **22 (50.00%)** |
| Partial / Planned / Unknown | 8 / 13 / 1 |
| 80% target | 36 Verified: **14 more** |
| Code on `main` | All worker branches merged; clean build and 13 unit suites pass with 0 failures |
| Latest download | 0.2.0-preview.7. **None of the October fixes are in it.** |

## Re-scope (baseline v3)

Owner decision, 18 October: clauses that need Windows, macOS, other Linux
distributions/architectures, a funded live provider or an official account moved
into four dedicated stories:

- OV-901: Windows
- OV-902: macOS
- OV-905: other Linux distributions, displays and architectures
- OV-205: live providers and official accounts

Every other story is promoted on **Linux x64** evidence. No requirement was removed:
each moved clause is listed under its new story, with commands in the
[platform and live test plan](platform-and-live-test-plan.md) and tickets
[#1–#4](https://github.com/RemiPelloux/OpenVision/issues).

## Story status and gaps

Promotion requires a clean coordinator rebuild and first-time native passes on the
merged code. "Gate" is what blocks promotion:

| Gate | Meaning |
| --- | --- |
| L | Linux work |
| D | Owner decision ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)) |
| X | External: a machine, balance or account |

### Verified (22)

- **Verified before the re-scope:** OV-101, 105, 201, 202, 404, 601.
- **Verified on Linux x64, 18–19 October:** OV-702, 401, 403, 104, 203, 301, 302, 102, 204, 701, 603, 602, 801, 501, 1005, 304.
- Evidence and run IDs are in each ledger row.

### Remaining stories

| Story | State on `main` | Gap to Verified | Gate | Remaining work |
| --- | --- | --- | --- | --- |
| OV-103 Agent editing | All native checks pass | Owner accepts the residuals: unproducible faults, review returning as pending, untracked early-exit command, restore-save failure, untested Stop cases | D | Decision only |
| OV-402 Language tools | New checks pass | Large-file symbols 13.0 s > 10 s; renderer p95 259 > 250 ms on 4 CPUs; Python/Go/Rust syntax-only | D | Decision, or an optimization session |
| OV-1001 Agent context | Budgets pass | Long closed chats keep about half their history (React/Solid retainers) | D | Decision, or work under OV-1003 |
| OV-303 MCP safety | Merged | `--simultaneous` fails 5/5 on the merged clean build (re-approved child runs an old config) | L | Round 1 (running) |
| OV-1004 Release safety | Merged; 6 fixes, 3 verifiers written | Corrupt-state baseline fix; assertion runs ×2; evidence | L | Round 1 (running) |
| OV-903 Linux completion | Merged; keyring hang (#6) fixed | Explorer budget and `mcp-session` on the merged code; branding #8 | L | Round 2 |
| OV-1003 Idle resources | Merged | Startup traversal 1,394 > 1,300 listings; slope 15.7 > 15 MiB in 1 of 3 runs | L | Round 2 |
| OV-1002 Responsiveness | Merged; stream defect fixed | Incremental-edit and scroll budgets; frame budgets on a no-GPU host | L, D | Round 2 |
| OV-904 Updates and rollback | Merged; signed releases, installer | Second `verify:upgrade:linux` run | L | Round 2 |
| OV-502–504 Retrieval and indexing | Merged, unit-tested; the build hook is **not wired** | Fix the anchor, wire the hook, then 3 native verifiers | L | Round 2 (2–3 sessions) |
| OV-704 Specialized modes | Not started | Scope inventory, probe, image input, browser automation | L, D | Round 3 |
| OV-604 Next-edit prediction | Not started | Support it or exclude it | D | Decision paper in round 3 |
| OV-703 Remote (SSH) | Not started | Pinned and branded server, SSH verifier | L | Round 3 |
| OV-802 Buildable host | Not started | Upstream Electron host option, rebuilt addons | L | Round 3 |
| OV-803 Replaceable helpers | Not started | Measured ranking, sandbox and grep replacements | L | Round 3 |
| OV-804 Independent build | Not started | Where the application JavaScript comes from (distribution rights) | D | Decision first |
| OV-205 Live providers | — | Codex Easy balance | X | [#4](https://github.com/RemiPelloux/OpenVision/issues/4) |
| OV-901 Windows | — | Windows x64 host; exit 134 and worker crash | X | [#1](https://github.com/RemiPelloux/OpenVision/issues/1) |
| OV-902 macOS | — | A Mac, or drop the claim | X, D | [#2](https://github.com/RemiPelloux/OpenVision/issues/2) |
| OV-905 Linux matrix | — | Other distributions, real GNOME/KDE, ARM64 | X | [#3](https://github.com/RemiPelloux/OpenVision/issues/3) |

### Open defects

- [#9](https://github.com/RemiPelloux/OpenVision/issues/9) **(security)** and [#10](https://github.com/RemiPelloux/OpenVision/issues/10): fixed on `main` (19 October, OV-304 reruns); issues can be closed.
- `npm run check:secrets` aborts under Node 24.18.0 with "double free or corruption" (exit 134), reproducible on one Markdown file; Node 22.22.0 scans cleanly. Details in the [mcp-auth report](../verification/worker-reports/mcp-auth.md).
- [#8](https://github.com/RemiPelloux/OpenVision/issues/8): Cursor branding after a `--glass` start.
- [#7](https://github.com/RemiPelloux/OpenVision/issues/7): Quick Edit Ctrl+A.

## ETA

| Round | Work | Effect if it passes |
| --- | --- | --- |
| 1 (running) | MCP regression; release safety (OV-304, 501, 1005, 801 done: +4) | Up to +2: OV-303, 1004 |
| 2 | Linux completion; idle resources; responsiveness; upgrade rerun; retrieval | Up to +7: OV-903, 1003, 1002, 904, 502, 503, 504 |
| 3 | The four never-started groups (may need a second session each) | Up to +4: OV-704, 703, 802, 803 |
| Owner decisions (#5) | OV-103, 402, 1001, 604 | Up to +4 |

**Linux ceiling: 39/44.** The 36 target is reachable on Linux alone, but only with
the owner decisions. It takes about **3 quota rounds** of 5 worker sessions, plus a
coordinator rerun after each merge. The account's weekly usage limit is near its
warning level and may stretch this. The last 5 stories (OV-205, 901, 902, 905, 804)
need the owner: balance, a Windows host, a Mac, other Linux machines and the
source-distribution decision.

## Working setup

These lessons from 18–19 October apply to every Linux run:

- **Build:** Node **24.18.0**. A clean rebuild removes `build/source-build.json`, `build/namespace-journal.json`, `source/` and `electron-host/`.
- **Native verifiers:**
  - run them as a non-root user under `xvfb-run` and `dbus-run-session`;
  - start gnome-keyring with a plaintext login keyring, otherwise provider Save prompts block;
  - host tools: `xdotool`, `imagemagick`, `sqlite3`, `iproute2`, `openssh-client`.
- **Workers:** at most 5 sessions at once, pushing after every task. 25 at once exhausted the quota in under an hour.
- **Merges:** rerun after merging. Two regressions appeared only once branches were combined.

## Definition of Done

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

All 44 stories Verified on their claimed platforms; OV-1004 passes across all of
them; the release DoD holds for every claimed platform; critical verifiers have
no unexplained flakes; numeric budgets are enforced by verifiers; and the docs
describe exactly the delivered product.

