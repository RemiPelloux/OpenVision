# Next sprint: platform validation (Windows first) and the preview.8 release candidate

Planned **24 October 2026**, after Linux x64 reached **36/44 (81.82 %)**. Every story
that Linux can still close needs either another machine, a funded provider or the
release gate, and **no October fix is in a download yet** (latest: 0.2.0-preview.7).
This sprint moves the product to the other platforms and to a signed release.

The ETA is counted in acceptance stories and gates, never calendar time. Commands,
per-story clause lists and earlier run IDs are in the
[platform and live test plan](platform-and-live-test-plan.md).

## Goal

| Track | Stories | Outcome if it passes |
| --- | --- | --- |
| **A. Windows x64** (first) | OV-901 | +1, and every Windows clause moved out of the other stories closed |
| B. Reference host | OV-1002, OV-1003 | +2 (Linux ceiling 39/44 with C) |
| C. preview.8 and the release gate | OV-1004 | A signed Linux download with the October fixes now; +1 after Track B |
| D. Live providers | OV-205 | +1 |
| E. Linux matrix | OV-905 | +1 |
| F. macOS | OV-902 | +1, or a formal decision to drop the claim |
| G. Engineering follow-ups | — | Faster warm builds, no known flaky test, #7 fixed |

OV-804 (independent build) stays with the owner and legal advice and is outside this
sprint.

## Entry criteria (owner-provided)

- **Windows x64 host** with Node 24.18.0, Git, Python 3, the MSVC Build Tools (for
  `verify:extensions`, `setup:cpp` and addon rebuilds), PowerShell 7 and at least
  40 GB free. The Windows Cursor 3.21.13 input used by earlier Windows evidence.
- **Reference-class Linux host with a GPU** for OV-1002 and OV-1003.
- **Codex Easy balance** (or another funded provider for each claimed model) for OV-205.
- **Fedora, Debian, real GNOME and KDE sessions, an Ubuntu 23.10+ desktop and an ARM64
  machine** for OV-905 (VMs are acceptable where the clause allows).
- **A Mac** per claimed architecture, or a decision not to claim macOS (#2).
- **The release signing key**, used by the owner offline; it never enters the
  repository or a worker session.

Cloud worker sessions are Linux containers, so Windows, macOS and GPU runs happen on
the owner's machines. The coordinator prepares the runners, reviews the evidence and
updates the ledger.

## Track A — Windows x64 (OV-901)

Run in order. A phase that fails opens a defect issue with captured diagnostics and
blocks only the clauses it covers.

| Phase | Work | Exit |
| --- | --- | --- |
| W0 Build | `npm ci` (root and `tooling/`), `npm run prepare:desktop`, `npm run build:desktop` twice (the second run must restore from `build/cache`; checks the zstd cache and atomic renames on NTFS), `npm run package:windows`, `npm run test:desktop` | Clean build and package; the cache restores; unit suites green |
| W1 Crash triage | Diagnose the intermittent host exit 134 (`AYXW1r`) and the `UtilityProcessWorker` `0xC0000005` with native stderr and a local crash dump | Root cause fixed, or a defect with dump and stack |
| W2 Critical suite | `npm run verify:critical` with every entry that lists `win32-x64` (18 of 20: welcome, project-home, project, explorer, development, git, agent, completion, extensions, review-storage, model-discovery, model-discovery-host, mcp-session, local-metadata, local-startup, onboarding, account-switch, account-picker) | 18/18 twice, first time, no retries counted |
| W3 October reruns | The Windows step-3 list in the [test plan](platform-and-live-test-plan.md#ov-901--windows-x64), plus the verifiers added since: `verify:agent-tool-calls`, `verify:agent-timeout`, `verify:agent-history`, `verify:image-input`, `verify:browser-automation`, `verify:modes-probe`, `verify:customization-lifecycle` (`--precedence`, `--invalid`, `--watchers`), `verify:mcp-auth` (and `--secrets` with DPAPI), `verify:retrieval` (`-incremental`, `-recovery`), `verify:corrupt-state`, `verify:crash-recovery`, `verify:authority`, `verify:import-faults`, `verify:save-all`, `verify:paste`, `verify:project-clone`, `verify:project-themes`, `verify:rules-isolation`, `verify:statsig-cache`, `verify:provider-identity`, `verify:catalog-retention` | Each passes first time, or has a defect |
| W4 Ports | Linux-only verifiers that need a Windows version: `verify:explorer` probes, `verify:shutdown-cycles`, `verify:global-paths` (USERPROFILE, APPDATA, LOCALAPPDATA), `verify:mcp-config-ownership` (no `/proc`), `verify:data-destinations` and `verify:telemetry:extended` (owned proxy plus ETW or `netsh trace`), `verify:idle-memory` (private working set, ConPTY release), `verify:startup-traversal`, `verify:profile-io-faults` (VHD full and read-only volume), `verify:helper-contracts` and `verify:native-inventory` / `verify:native-loaded` (PE images) | Port committed with unit tests; Windows run passes |
| W5 Install and update | `Install-OpenVision.ps1`, `npm run test:installer`, OpenVision identity in dialogs, launchers and PE metadata; Windows upgrade, rollback and uninstall cells (OV-904) | Install, upgrade, rollback and uninstall keep the profile |
| W6 Remaining Windows clauses | WSL (OV-703), the computer-use sidecar (OV-704), Windows helper variants (OV-803), MSVC addon rebuilds (OV-802), Authenticode if advertised | Each clause passes or is recorded as excluded by an owner decision |

**Track A exit:** OV-901 Verified when W0–W5 pass and every W6 clause is either
passing or excluded in [owner decisions](owner-decisions.md); evidence in a dated
`docs/verification/windows-x64-<date>.md` with commit, Windows build number and run IDs.

## Track B — reference host (OV-1002, OV-1003)

On a GPU machine of the class the budgets were set on: `verify:responsiveness -- --full`
and the smoke set ×3, `verify:idle-memory` and the idle-CPU budget ×3, on a clean
build of the sprint commit. Budgets stay as recorded; this container's results are
not the reference.

## Track C — preview.8 release candidate and the release gate (OV-1004)

The release does not wait for other platforms; the gate waits for the reference host.

1. **preview.8 (can start now).** One clean build of the sprint commit with
   `OPENVISION_NO_BUILD_CACHE=1`; on that build the Linux critical subset, the
   release-safety matrices (`verify:corrupt-state`, `verify:crash-recovery`,
   `verify:authority`, `verify:utility-listeners`, `verify:profile-io-faults` under
   load), `verify:telemetry:extended`, `verify:data-destinations` and
   `check:secrets --require-targets`. Then `npm run release:linux` produces
   `OpenVision-0.2.0-preview.8-linux-x64.tar.zst` and its manifest, the owner signs it
   offline, and `release:verify --deep` passes. Release notes and
   [release claims](../verification/release-claims.md) list exactly what is packaged.
   Windows packages ship only for what Track A verified.
2. **OV-1004 promotion.** OV-1004 is promoted last
   ([owner decisions](owner-decisions.md)): once OV-1002 and OV-1003 pass on the
   reference host, rerun the same release-safety set on the final build and promote.

## Track D — live providers (OV-205)

The OV-205 table in the [test plan](platform-and-live-test-plan.md#ov-205--live-providers-and-official-accounts),
per claimed model, with the provider balance in place. Image generation stays hidden
and next-edit prediction excluded unless an owner decision reopens them.

## Track E — Linux matrix (OV-905)

`npm run verify:critical` on Fedora, Debian, real GNOME and KDE (with KWallet for
`verify:linux-secrets`), an Ubuntu 23.10+ desktop (AppArmor user-namespace policy) and
ARM64 with its own pinned input.

## Track F — macOS (OV-902)

Packaging does not exist yet (`package-portable.mjs` rejects darwin). Either the owner
decides not to claim macOS, which removes OV-902 and its clauses, or this track starts
with packaging for each claimed architecture.

## Track G — engineering follow-ups (Linux, workers)

- Move the ~60 remaining customizations onto the restorable build cache (warm clean
  build 132 s → target under 60 s), keeping cold/warm byte-identical trees.
- ~~Make the retrieval unit test that failed once under full CPU load deterministic.~~ Done 24 October.
- ~~[#7](https://github.com/RemiPelloux/OpenVision/issues/7) Quick Edit Ctrl+A.~~ Fixed 24 October.
- ~~Close the issues already fixed on `main` (#6, #8, #9, #10).~~ Closed 24 October.

## Sprint Definition of Done

- Every story moved to Verified meets the [story DoD](eta-and-definition-of-done.md#story-dod-promotion-to-verified),
  including first-time passes on a clean build of the merged commit.
- Every failing clause has a GitHub issue with diagnostics; nothing is marked
  passing on a retry.
- A signed 0.2.0-preview.8 Linux release meets the
  [release DoD](eta-and-definition-of-done.md#release-dod-a-downloadable-version).
- Ledger, status page, progress, roadmap and README updated; `status:features` and
  `docs:check` pass; everything pushed to `main`.

## ETA

| If the owner provides | Stories | Count |
| --- | --- | --- |
| Nothing new | preview.8 signed Linux release (release DoD), Track G | 36/44 |
| + GPU reference host | + OV-1002, OV-1003, then OV-1004 | 39/44 (Linux ceiling) |
| + Windows host | + OV-901 | 40/44 |
| + provider balance, Linux matrix machines | + OV-205, OV-905 | 42/44 |
| + Mac (or the decision to drop it) | + OV-902 | 43/44 (or 43/43) |
| + OV-804 rights decision | + OV-804 | 44/44 |

Track A is the longest: W0–W2 decide whether the Windows build is healthy, and the W4
ports are new code. Each failing phase adds one fix-and-rerun round.
