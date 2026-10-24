# OpenVision status, gaps, ETA and Definition of Done

Updated **24 October 2026** (`main` at `b64873ba`). This page is the single current view. The acceptance
clauses are in the [ledger](completion-sprints.md); the priority order is in the
[roadmap](roadmap.md). Dated checkpoints (16–19 October) are archived in
[planning history](history/checkpoints-2026-10.md). The next sprint is planned in
[next sprint](next-sprint.md). Run `npm run status:features`
for the authoritative count.

The ETA is given as acceptance stories, worker sessions and blocking gates, never
calendar or engineer time.

## Where we are

| Measure | Value |
| --- | --- |
| Accepted stories (baseline v3) | **44** |
| Verified | **36 (81.82%)** |
| Partial / Planned / Unknown | 3 / 5 / 0 |
| 80% target | 36 Verified: **reached** |
| Code on `main` | Every worker branch merged. Every Linux story that needs no reference host, release gate or external input is Verified on the coordinator's clean rebuild (23 October). Build and release infrastructure optimized on 24 October |
| Next sprint | [Platform validation (Windows first) and the preview.8 release candidate](next-sprint.md) |
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

### Verified (36)

- **Verified before the re-scope:** OV-101, 105, 201, 202, 404, 601.
- **Verified on Linux x64, 18–20 October:** OV-702, 401, 403, 104, 203, 301, 302, 102, 204, 701, 603, 602, 801, 501, 1005, 304, 502, 503, 504, 303, 904, 903, 604 (excluded by owner decision), 803, 402, 1001.
- **Verified on Linux x64, 23 October:** OV-704, OV-703, OV-802 and OV-103 (coordinator reruns on the integrated `main`).
- Evidence and run IDs are in each ledger row.

### Done 21–24 October

- **Stories Verified:** OV-704, OV-703, OV-802 and OV-103, each on a coordinator
  clean rebuild with first-time native passes (run IDs in the ledger).
- **Defects fixed:**
  - the local Agent retry now resets the turn before each replay, so a reply shown by
    a failed attempt is never duplicated (owner decision A; passes 5/5 under full CPU
    load);
  - unknown or malformed tool calls return a tool error and the turn finishes, instead
    of retrying and hanging (`verify:agent-tool-calls`);
  - the remote server stops when its last window closes (grace bounded to 5 minutes
    for genuine network loss);
  - image generation is hidden and refused tools never show a success label.
- **Build and release:**
  - `build:desktop` runs with a 6 GiB V8 heap (the default ran out of memory);
  - parallel source assembly and a restorable, zstd-compressed build cache: clean
    build 575 s → 459 s cold, **132 s** warm, byte-identical trees;
  - release archives are `.tar.zst`: 18 % smaller than gzip -9, compressed 2.4× faster,
    `.tar.gz` still installable; `verify:upgrade:linux` passes with them.
  - Details: [build performance](../performance/build-performance.md).
- **Workers:** all 25 worker sessions finished and were archived.

### Remaining stories

| Story | State on `main` | Gap to Verified | Gate | Remaining work |
| --- | --- | --- | --- | --- |
| OV-1004 Release safety | All Linux gates pass (corrupt state, crash recovery, authority, utility listeners, secrets scan 0 findings) | Release gate: promote last, on the same build as every other story | L | Final rerun once the others are Verified |
| OV-1003 Idle resources | Startup traversal (~1,250 / 1,300) and memory slope pass 3/3 | Idle CPU over budget on this host (the pre-merge build measures the same); absolute budgets stay | X | A reference-class host |
| OV-1002 Responsiveness | Stream, incremental-edit and model-menu budgets pass | Frame and scroll budgets fail without a GPU; software-rendering budgets not adopted | X | A reference-class host with a GPU |
| OV-804 Independent build | Not started | Distribution rights of the recovered source: owner and legal advice | D | Owner only; outside the 36/44 plan |
| OV-205 Live providers | — | Codex Easy balance | X | [#4](https://github.com/RemiPelloux/OpenVision/issues/4) |
| OV-901 Windows | — | Windows x64 host; exit 134 and worker crash | X | [#1](https://github.com/RemiPelloux/OpenVision/issues/1) |
| OV-902 macOS | — | A Mac, or drop the claim | X, D | [#2](https://github.com/RemiPelloux/OpenVision/issues/2) |
| OV-905 Linux matrix | — | Other distributions, real GNOME/KDE, ARM64 | X | [#3](https://github.com/RemiPelloux/OpenVision/issues/3) |

### Open defects

None known on Linux x64 (24 October). Fixed and closed:
[#6](https://github.com/RemiPelloux/OpenVision/issues/6), [#7](https://github.com/RemiPelloux/OpenVision/issues/7)
(Quick Edit Ctrl+A: a deferred prompt focus collapsed the selection; `verify:inline-edit`
`or5tNH`, `tHc0Ou`), [#8](https://github.com/RemiPelloux/OpenVision/issues/8),
[#9](https://github.com/RemiPelloux/OpenVision/issues/9) **(security)** and
[#10](https://github.com/RemiPelloux/OpenVision/issues/10); also the retrieval pause test that
failed under CPU load (it now waits for the worker's paused state; 3/3 under
`stress-ng`), the `check:secrets` Node 24 abort, the remote-window Marketplace lookup,
the duplicated reply on retry and the unknown-tool hang.

## ETA and next sprint

**36/44 is reached** (23 October). The next sprint is
[platform validation (Windows first) and the preview.8 release candidate](next-sprint.md):

| If the owner provides | Stories | Count |
| --- | --- | --- |
| Nothing new | Signed 0.2.0-preview.8 Linux release; build and test follow-ups | 36/44 |
| + GPU reference host | + OV-1002, OV-1003, then OV-1004 | 39/44 (Linux ceiling) |
| + Windows x64 host | + OV-901 | 40/44 |
| + provider balance and Linux matrix machines | + OV-205, OV-905 | 42/44 |
| + Mac, or the decision to drop it | + OV-902 | 43/44 (or 43/43) |
| + OV-804 rights decision | + OV-804 | 44/44 |

For reference, the 16 October baseline sized 9 of the remaining stories at
**92 provisional points** (OV-103 8, OV-703 13, OV-802 13, OV-1002 8,
OV-1003 8, OV-1004 13, OV-804 8, OV-901 8, OV-902 13); OV-103, OV-703 and OV-802
are now Verified.

## Working setup

These lessons from 18–19 October apply to every Linux run:

- **Build:** Node **24.18.0**. `build:desktop` runs with a 6 GiB V8 heap: the default (~2.2 GiB on a 4-CPU, 15 GiB host) runs out of memory during bundle customization. A clean rebuild with unchanged code restores customized bundles from `build/cache` (132 s instead of 459 s; see [build performance](../performance/build-performance.md)); `OPENVISION_NO_BUILD_CACHE=1` forces every transform to run. A clean rebuild removes `build/source-build.json`, `build/namespace-journal.json`, `source/` and `electron-host/`.
- **Native verifiers:**
  - run them as a non-root user under `xvfb-run` and `dbus-run-session`;
  - start gnome-keyring with a plaintext login keyring, otherwise provider Save prompts block;
  - host tools: `xdotool`, `imagemagick`, `sqlite3`, `iproute2`, `openssh-client`.
- **Workers:** at most 5 sessions at once, pushing after every task. 25 at once exhausted the quota in under an hour.
- **Merges:** rerun after merging. Two regressions appeared only once branches were combined.
- **Race-prone paths:** run retry, cancel and persistence-fault checks under `stress-ng --cpu $(nproc)` as well as unloaded; two defects appeared only under load.
- **Proxy CA:** a non-root runner needs a readable copy of the proxy CA bundle in `NODE_EXTRA_CA_CERTS` for verifiers that download pinned inputs.
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
7. The coordinator reproduces the passes: a clean build of the merged commit, then
   first-time native passes (a worker's own runs do not promote a story; a retry is
   never a first-time pass).
8. Retry, cancellation and persistence-fault paths also pass under full CPU load.
9. Ledger, roadmap, progress and README are updated; `status:features` and
   `docs:check` pass; the change is committed, pushed and the remote hash is
   confirmed.

### Release DoD (a downloadable version)

1. Built from the commit being released, with a clean rebuild and
   `OPENVISION_NO_BUILD_CACHE=1` (no restored outputs); after OV-804, built without
   the prepared recovery input.
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
   advertised. Linux releases are reproducible `.tar.zst` archives with a signed
   manifest; the signing key stays offline with the owner.
7. No GitHub Actions or hosted CI; local packaging is reproducible.

### Project DoD ("perfect")

All 44 stories Verified on their claimed platforms; OV-1004 passes across all of
them; the release DoD holds for every claimed platform; critical verifiers have
no unexplained flakes; numeric budgets are enforced by verifiers; and the docs
describe exactly the delivered product.

