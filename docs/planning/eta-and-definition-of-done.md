# OpenVision status, gaps, ETA and Definition of Done

Updated **20 October 2026**. This page is the single current view. The acceptance
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
| Verified | **28 (63.64%)** |
| Partial / Planned / Unknown | 6 / 9 / 1 |
| 80% target | 36 Verified: **8 more** |
| Code on `main` | Every worker branch merged (20 October); clean build, unit suites and the Linux critical subset pass |
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

### Verified (28)

- **Verified before the re-scope:** OV-101, 105, 201, 202, 404, 601.
- **Verified on Linux x64, 18–20 October:** OV-702, 401, 403, 104, 203, 301, 302, 102, 204, 701, 603, 602, 801, 501, 1005, 304, 502, 503, 504, 303, 904, 903.
- Evidence and run IDs are in each ledger row.

### Remaining stories

| Story | State on `main` | Gap to Verified | Gate | Remaining work |
| --- | --- | --- | --- | --- |
| OV-103 Agent editing | All native checks pass | Owner accepts the residuals: unproducible faults, review returning as pending, untracked early-exit command, restore-save failure, untested Stop cases | D | Decision only |
| OV-402 Language tools | New checks pass | Large-file symbols 13.0 s > 10 s; renderer p95 259 > 250 ms on 4 CPUs; Python/Go/Rust syntax-only | D | Decision, or an optimization session |
| OV-1001 Agent context | Budgets pass | Long closed chats keep about half their history (React/Solid retainers) | D | Decision, or work under OV-1003 |
| OV-1004 Release safety | All Linux gates pass (corrupt state, crash recovery, authority, utility listeners, secrets scan 0 findings) | Release gate: promote last, on the same build as every other story | L | Final rerun once the others are Verified |
| OV-1003 Idle resources | Startup traversal (~1,250 / 1,300) and memory slope pass 3/3 | Idle CPU 17–18 % renderer / 24–26 % extension hosts against 15 / 20; an A/B run shows the pre-merge build measures the same on this host | D, X | A comparable host, or a host-normalized CPU budget |
| OV-1002 Responsiveness | Stream, incremental-edit and model-menu budgets pass | Smoke/full frame budgets and scroll fail on a no-GPU host | D, X | A GPU host, or adopt the proposed software-rendering budgets (then one session) |
| OV-704 Specialized modes | Inventory, computer-use explanation and probe pass natively (`oxnQvd`, `tizi1z`) | Image-input matrix; whether browser tools reach the local Agent; scope sign-off | L, D | One session after the scope decision |
| OV-604 Next-edit prediction | Absence check passes ×2 | Support (adapter) or exclude: [decision paper](../recovery/next-edit-decision.md) recommends excluding | D | Decision only if excluded |
| OV-703 Remote (SSH) | SSH to Linux x64 passes 18/18 and 22/22 ×2 (pinned branded server, strict host keys) | Accept "Agent local-only" in remote windows; or remote Agent relay, remote profile isolation; containers deferred | D, L | Decision, or one session |
| OV-802 Buildable host | Upstream Electron 42.10.0 host passes the critical subset; 11 addons rebuilt reproducibly | Rebuilt addons need glibc 2.38 (recovered: 2.28); whichlang and ripgrep fork not rebuilt | D, L | Accept the floor, or a clang/libc++ sysroot session |
| OV-803 Replaceable helpers | Ranking measured; Landlock and none sandbox options pass; tree-chunk lazy | Indexed grep (GrepClient + crepectl) replace-or-remove; hosted contracts; defaults | D, L | Decision, then one session |
| OV-804 Independent build | Not started | Where the application JavaScript comes from (distribution rights) | D | Decision first |
| OV-205 Live providers | — | Codex Easy balance | X | [#4](https://github.com/RemiPelloux/OpenVision/issues/4) |
| OV-901 Windows | — | Windows x64 host; exit 134 and worker crash | X | [#1](https://github.com/RemiPelloux/OpenVision/issues/1) |
| OV-902 macOS | — | A Mac, or drop the claim | X, D | [#2](https://github.com/RemiPelloux/OpenVision/issues/2) |
| OV-905 Linux matrix | — | Other distributions, real GNOME/KDE, ARM64 | X | [#3](https://github.com/RemiPelloux/OpenVision/issues/3) |

### Open defects

- [#9](https://github.com/RemiPelloux/OpenVision/issues/9) **(security)**, [#10](https://github.com/RemiPelloux/OpenVision/issues/10), [#8](https://github.com/RemiPelloux/OpenVision/issues/8) and [#6](https://github.com/RemiPelloux/OpenVision/issues/6): fixed on `main`; the issues can be closed.
- `check:secrets` Node 24.18.0 abort (odd-length UTF-16LE decode): fixed by release-safety.
- [#7](https://github.com/RemiPelloux/OpenVision/issues/7): Quick Edit Ctrl+A.
- The client queries the Marketplace gallery when a non-built-in extension is installed in a remote window (remote-ssh report; OV-1005 follow-up).

## ETA

All worker rounds are finished (19–20 October). What remains is decisions and
hardware, not open Linux work:

| Step | Work | Effect if it passes |
| --- | --- | --- |
| Owner decisions (#5) | OV-103, 402, 1001, 604 (decision only); OV-703, 802, 803, 704 (decision, then at most one session each) | Up to +8 |
| Host or budget decision | OV-1002 and OV-1003: a GPU/comparable host, or host-normalized budgets | Up to +2 |
| Release gate | OV-1004 last, on the same build | +1 |
| External | OV-205 balance, OV-901 Windows, OV-902 Mac, OV-905 other Linux, OV-804 distribution decision | Up to +5 |

**Linux ceiling: 39/44.** The 36 target needs owner decisions: with the four
decision-only stories and two of the decision-then-session groups it is reached
in about **1–2 more quota rounds**.

## Working setup

These lessons from 18–19 October apply to every Linux run:

- **Build:** Node **24.18.0**. A clean rebuild removes `build/source-build.json`, `build/namespace-journal.json`, `source/` and `electron-host/`.
- **Native verifiers:**
  - run them as a non-root user under `xvfb-run` and `dbus-run-session`;
  - start gnome-keyring with a plaintext login keyring, otherwise provider Save prompts block;
  - host tools: `xdotool`, `imagemagick`, `sqlite3`, `iproute2`, `openssh-client`.
- **Workers:** at most 5 sessions at once, pushing after every task. 25 at once exhausted the quota in under an hour.
- **Merges:** rerun after merging. Two regressions appeared only once branches were combined.
- **Coordinator runner:** set `XDG_RUNTIME_DIR` (otherwise the main IPC socket lands in the profile and deep test paths exceed 107 characters), install `x11-utils` (`xprop`), point `OPENVISION_BROWSER_PATH` at Chromium, run `npm ci` in `tooling/` after merges, and keep 4 GiB free (`logs/` is ignored and grows by ~1 GiB per package run).

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

