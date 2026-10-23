# OpenVision status, gaps, ETA and Definition of Done

Updated **23 October 2026** (`main` at `52c46dec`, last merge 20 October 14:47). This page is the single current view. The acceptance
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
| Verified | **35 (79.55%)** |
| Partial / Planned / Unknown | 4 / 5 / 0 |
| 80% target | 36 Verified: **1 more** |
| Code on `main` | Every remote worker branch merged (integration merge `52c46dec`, 20 October). The OV-103 fix is in progress and awaits the coordinator's clean rebuild and first-time native passes on the merged code |
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
| D | Owner decision ([#5](https://github.com/RemiPelloux/OpenVision/issues/5)); settled 20 October in [owner decisions](owner-decisions.md) |
| X | External: a machine, balance or account |

### Verified (35)

- **Verified before the re-scope:** OV-101, 105, 201, 202, 404, 601.
- **Verified on Linux x64, 18–20 October:** OV-702, 401, 403, 104, 203, 301, 302, 102, 204, 701, 603, 602, 801, 501, 1005, 304, 502, 503, 504, 303, 904, 903, 604 (excluded by owner decision), 803, 402, 1001.
- **Verified on Linux x64, 23 October:** OV-704, OV-703 and OV-802 (coordinator reruns on the integrated `main`).
- Evidence and run IDs are in each ledger row.

### Remaining stories

| Story | State on `main` | Gap to Verified | Gate | Remaining work |
| --- | --- | --- | --- | --- |
| OV-103 Agent editing | All 14 interruption cases pass ×2; the stream-coalescing fix (`436c305a`) is merged; 23 October coordinator rerun: `verify:agent-interruption` passed first time (`5AyLlA`) | `verify:profile-io-faults` failed first time on the merged build (`DBeFRw`): the verifier threw `TypeError` reading `trim` | L | Diagnose the verifier crash, then rerun |
| OV-1004 Release safety | All Linux gates pass (corrupt state, crash recovery, authority, utility listeners, secrets scan 0 findings) | Release gate: promote last, on the same build as every other story | L | Final rerun once the others are Verified |
| OV-1003 Idle resources | Startup traversal (~1,250 / 1,300) and memory slope pass 3/3 | Idle CPU over budget on this host (the pre-merge build measures the same); absolute budgets stay | X | A reference-class host |
| OV-1002 Responsiveness | Stream, incremental-edit and model-menu budgets pass | Frame and scroll budgets fail without a GPU; software-rendering budgets not adopted | X | A reference-class host with a GPU |
| OV-804 Independent build | Not started | Distribution rights of the recovered source: owner and legal advice | D | Owner only; outside the 36/44 plan |
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

Owner decisions were made on 20 October ([record](owner-decisions.md)). Nothing has
been pushed since the integration merge of 20 October. What remains:

| Step | Work | Effect if it passes |
| --- | --- | --- |
| **Next: coordinator rerun** | OV-704, OV-703 and OV-802 passed on 23 October. Still to rerun first time: OV-103 (after the local retry-reset fix, owner decision A) | +1: **36/44 (81.8%)** |
| Reference host | OV-1002 (frame/scroll budgets need a GPU) and OV-1003 (idle CPU budget) on a reference-class machine | Up to +2 |
| Release gate | OV-1004 last, on the same build as every other story | +1 |
| External | OV-205 Codex Easy balance, OV-901 Windows, OV-902 Mac (or drop the claim), OV-905 other Linux; OV-804 owner/legal | Up to +5 |

**36/44 needs 1 more:** OV-103, once the local Agent retry resets the turn before each
replay (worker running) and its checks pass on the coordinator's clean rebuild. The **Linux ceiling is
39/44**: the 36, then OV-1002 and OV-1003 on a reference host, then OV-1004. The
last 5 need a machine, a balance or an owner/legal decision.

For reference, the 16 October baseline sized 9 of the remaining 11 stories at
**92 provisional points** (OV-103 8, OV-703 13, OV-802 13, OV-1002 8,
OV-1003 8, OV-1004 13, OV-804 8, OV-901 8, OV-902 13). OV-205 and OV-905 were
created by the re-scope and have no size.

## Working setup

These lessons from 18–19 October apply to every Linux run:

- **Build:** Node **24.18.0**. `build:desktop` runs with a 6 GiB V8 heap: the default (~2.2 GiB on a 4-CPU, 15 GiB host) runs out of memory during bundle customization. A clean rebuild removes `build/source-build.json`, `build/namespace-journal.json`, `source/` and `electron-host/`.
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

