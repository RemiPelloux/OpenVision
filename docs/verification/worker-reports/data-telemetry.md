# Worker report: OV-501 and OV-1005 data destinations and telemetry (Linux x64)

Branch `ov/data-telemetry`, 18–19 October 2026. Stories:

- **OV-501:** where project data is processed.
- **OV-1005:** built-in telemetry never collects or uploads.

Linux x64 only, in a cloud container:

- **Host:** Ubuntu 24.04, kernel 6.18, 4 CPUs, 15 GB RAM, no swap,
  Node 24.18.0, Xvfb 1920×1080, no systemd-resolved.
- **Runs:** every native verifier ran as the unprivileged `ov` user, one at a
  time, inside `xvfb-run` + `dbus-run-session` with a plaintext gnome-keyring.
- **Fixtures:** all inference used controlled loopback fixtures.
- **Not used:** no live provider, Cursor account, Windows or macOS.
- **Packages installed:** `iproute2`, `tcpdump`, `gnome-keyring`,
  `libsecret-tools`, `sqlite3` (apt).
- **Merged branch:** `ov/mcp-safety` (OV-303) is merged into this branch. Its
  local experiment initialization is a prerequisite here (see Defects).

## Summary

All six Linux tasks are implemented and verified natively on the final build.

- **Native verification:** `verify:data-destinations` now covers terminal,
  commit-message generation, JS debug, MCP STDIO and local VSIX install, with
  canaries.
  - It inventories every loaded native addon per process.
  - It passed 14 of 14 full runs on the final build: 1 + a 10-run
    `--signal-trace` series + 3 final, all first-time passes.
  - Every run had 0 non-provider requests, connections, names and direct
    connects.
- **Product leaks fixed at their owners:**
  - A local VSIX install sent the extension's identity to the Marketplace.
  - A profile's cached Statsig bootstrap kept 208 server-set gate values
    forever.
- **Capture defects fixed:** four defects made the Linux capture blind or
  hung the Agent.
- **Clean-quit flake:** reproduced exactly by an external SIGTERM. It is not
  caused by verifier reaping, and the verifier now names the sender.
- **Gate drift:** 209 drifted gates are classified and pinned. Three local
  defaults are proposed but not applied.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Data-destination capture of terminal (echo + git commit), commit-message generation, JS debug, MCP STDIO tool call, local VSIX install; canaries only to the provider or local fixtures; 0 non-provider requests | **Done.** All five workloads have their own canaries and checks. Final runs: 0 non-provider requests, connections, names and direct connects. Provider canaries in Agent, Tab, Quick Edit, commit message and MCP only |
| 2 | Per-process native addon inventory (`addonsInventoried`, `noAddonDirectSockets`) | **Done.** `/proc/<pid>/maps` of the whole family every 3 s. Records path, SHA-256, roles, pids, direct connects; strace thread ids resolved to processes. 13 addons/shared objects, all known (`desktop/fixtures/linux-x64-addons-3.21.13.json`), none with a direct connect |
| 3 | Clean-quit flake during idle indexing | **Done (attributed, hardened).** 10 consecutive `--signal-trace` runs: no unrequested exit, main never signalled, no memory pressure. A SIGTERM to the main process reproduces the exact signature; killing only the verifier does not (the app outlives it). Exit recording fixed and sender attribution added |
| 4 | Extended telemetry workloads | **Done.** Tab, Quick Edit, commit-message generation + commit, JS debug, second window, MCP STDIO. Gate unchanged (0 non-user destinations). Name observer added for hosts without systemd-resolved |
| 5 | Drifted client-gate defaults | **Done.** Fixture of stock defaults + anonymous bootstrap values (djb2), classification pinned in a unit test, proposed local defaults not enabled. Cached bootstrap measured as applied, then fixed |
| 6 | Final reruns with run IDs | **Done.** See Verification |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| **Product:** a local VSIX install queried `marketplace.cursorapi.com/_apis/public/gallery/extensionquery` with the extension's `publisher.name`: the shared-process install task's `updateMetadata` (`daLpz9`), then the workbench's `matchInstalledExtensionsWithGallery` preflight (`bzFObc`) | `desktop/network-defaults.mjs` section "Local VSIX installs": shared process + CLI, desktop + Glass workbench | `fix(data-destinations): local VSIX installs make no Marketplace lookup`; `… leave local VSIX installs out of the workbench Marketplace match` |
| **Product:** a profile's cached `workbench.experiments.statsigBootstrap` was applied at every start with no expiry. 208 of 209 drifted gates differed from a fresh profile (`statsig-cache-qoYduc`) | `desktop/network-defaults.mjs` section "Cached Statsig bootstrap", both workbench bundles | `fix(telemetry): ignore a profile's cached Statsig bootstrap` |
| **Harness:** the capture DNS socket on `0.0.0.0` answered `127.0.0.53` queries from `127.0.0.1`, so Chromium dropped them. Names were recorded, but the requests never reached the capture (`1K5w71`) | `desktop/capture-network.mjs` | `fix(data-destinations): make the capture namespaces resolve names…` |
| **Harness:** with only loopback configured, glibc's `AI_ADDRCONFIG` sent no IPv4 query | `desktop/data-destinations-namespace.sh`, `desktop/verify-telemetry-extended.sh` | same |
| **Harness:** strace without `--seccomp-bpf` hung the BYOK Agent turn after "Using agent backend" in 4 of 5 runs (`V57pK6`: 300 s). Without strace it answered in 1.6 s (`kYpbAA`) | `desktop/verify-data-destinations.mjs` | same |
| **Harness:** the telemetry verifier had no name observer without systemd-resolved | `desktop/verify-telemetry-extended.{sh,mjs}` (recording NXDOMAIN resolver) | same |
| **Harness:** addon/connect attribution compared strace thread ids with process ids, so a worker-thread connect never matched the addon's process | `desktop/addon-inventory.mjs` (`threadGroups`) | `feat(data-destinations): inventory mapped native addons…` |
| **Harness:** a host that quit on its own was recorded as a requested exit (the window closes before main exits) | `desktop/verify-data-destinations.mjs` | `fix(data-destinations): attribute an unrequested host exit and its signal sender` |
| **Harness, environment:** `tcpdump` needs `-Z root` in the user namespace. Inherited proxy variables would hide Node clients behind a loopback proxy | namespace script; `desktop/capture-harness.mjs` | `test(data-destinations): capture terminal…` |
| **Prerequisite:** with no hosted bootstrap the experiment service never initialized, so each MCP routing decision waited 30 s | fixed on `ov/mcp-safety` (OV-303); merged here | merge commit |

## Verification

All on the final build of this branch (clean rebuild after the last owner
change). "First time" means the run's first attempt on that build.

**Unit suites:**

- `npm run test:data-destinations`: 20 pass, 1 pre-existing skip (needs the
  recovered file-sync extension).
- `npm run test:telemetry`: 48 of 48 pass.
- `npm run test:import`: 16 of 16 pass.
- `npm run test:portable`: 30 pass, 1 macOS skip.
- `npm run docs:check` and `npm run status:features` pass.

| Command | Run IDs (`logs/…`) | Result |
| --- | --- | --- |
| `npm run verify:data-destinations` | `data-destinations-fNkZXe` | Pass, first time, 18 of 18 checks |
| `node desktop/verify-data-destinations.mjs --signal-trace` ×10, consecutive | `jfA9IJ`, `t25YKC`, `5ltB4D`, `53UQsE`, `Hg5QsV`, `XmSgeo`, `G7nAF7`, `5WYHh6`, `okrbs5`, `ThMm72` | 10 of 10 pass first time. 11 provider requests each; 0 non-provider requests, connections, names, direct connects; no unrequested exit; main never signalled; min `MemAvailable` 8.7–12.8 GiB; PSI 0 |
| Flake experiments (`logs/probes/reap.sh`, `term.sh`) | `FEIxhG` (verifier killed), `nr1GT2`, `70cXzZ` (main SIGTERM) | Expected failures, by design. See [the OV-501 report](../../recovery/rea-project-data-destinations.md#clean-quit-flake-during-idle-indexing-0niein-17-october) |
| `npm run verify:data-destinations` ×3 (final) | `data-destinations-PvCKfo`, `DOBY9j`, `W8SO9C` | 3 of 3 pass first time, 18 of 18 checks each. 11 provider requests; 0 non-provider requests, connections, names, direct connects; 13 known addons; first Agent request 1.8–1.9 s |
| `npm run verify:statsig-cache` | before the fix: `statsig-cache-qoYduc`. After: `DSSkBi`, then final `ONwJ29`, `1xB7FJ` | Before: 208 differences, cached bootstrap applied. After: 0 differences, pass |
| `npm run verify:telemetry` | `telemetry-verification-uPe0gw` | Pass, first time (no HTTP URLs, no telemetry matches) |
| `npm run verify:telemetry:extended -- --idle-seconds 600` ×2 | `telemetry-extended-XE8H2u`; `fXnIJA` (stopped) | Run 1 passed first time with every phase and a 600 s idle: 0 non-user destinations, 0 telemetry matches, 0 direct remote sockets, family drained (57 processes), no device-id file, 12 recorded lookups (all the gallery in the Extensions phase). Run 2 was **stopped on the owner's stop request** during its idle period and is not counted |
| `verify:telemetry:extended --idle-seconds 20` (development) | `telemetry-extended-rHzUxH` | Pass. All new phases; 12 recorded lookups, all the gallery during the Extensions phase |

**Development runs that failed** and led to the fixes above:

- Agent stall: `Zkbnby`, `ab1x4Q`, `Squ8Ql`, `H20vGF`, `V57pK6`.
- Workload selectors: `cMwokx`, `gemIo7`, `fl0ygl`.
- Capture blindness: `1K5w71`.
- VSIX leak: `daLpz9`, `bzFObc`.
- Telemetry development: `kb5nNB`, `p0IZI8`.

None is counted as a pass.

**Host notes:**

- The verifiers ran in a single cloud container with no other native workload.
- The capture namespaces need unprivileged user, network and mount namespaces,
  nftables and ptrace. All of these were available.
- IPv6 is not available in this kernel, so the `::/0` local route fails. The
  script tolerates this, and AAAA queries get empty answers.

## Recommendation per story

- **OV-501: promote to Verified on Linux x64.**
  - Every workload clause now runs natively with canaries: the 16 October set
    plus terminal, commit message, debug, MCP and VSIX.
  - 14 of 14 full runs on the final build passed with 0 non-provider traffic.
  - Every loaded addon is inventoried and none makes a direct connect.
  - Remaining non-Linux items: Windows/macOS captures and signed-in workloads
    (moved below).
  - The VSIX owner change needs an owner decision (below), but it is reversible
    and conservative.
- **OV-1005: promote to Verified on Linux x64 for the local profile.** The
  second required `--idle-seconds 600` run passed on the merged clean build
  (`OfXO1m`; see "Completion on the merged build").
- Windows and macOS captures of every workload above.
- Workloads with a signed-in Cursor account, where hosted calls are
  user-configured.
- The packaged release (portable payload) capture. This evidence covers the
  source build.

## Defaults pending owner decision

- **Scope:** OV-501/OV-1005 cover the local profile only.
- **Inferred upload paths:** paths that need a positive server answer (file
  sync, uploads) are recorded as "inferred from code, unreachable by owner
  fix".
- **Accepted residual:** extensions and MCP servers that users install
  themselves.
- **No drifted gate switched on.** `instant_grep_indexing`,
  `custom_agents_enabled` and `customize_global_search` are proposed
  (`proposedLocalGateDefaults`) but not applied.
- **Local VSIX installs:** no Marketplace metadata lookup and no Marketplace
  match. Consequence: a VSIX-installed extension is not linked to its
  Marketplace listing for update checks. To revert, remove
  `skipVsixGalleryMetadata` and `skipVsixGalleryMatch` from `installNetworkDefaults`.
- **Cached Statsig bootstrap is ignored, not deleted.** Users whose profiles
  held server-enabled gates now see the bundled and local defaults. To revert,
  remove `ignoreCachedStatsigBootstrap`.
- **Explicit proxy is opt-in for `verify:data-destinations` (`--proxy`).** With
  `--proxy-server` the BYOK Agent stalls (also recorded for OV-1005). The
  transparent capture is complete without it.

## Open risks

- **The `--proxy-server` Agent stall is not root-caused.** Users behind a
  system proxy may hit it. It belongs to the provider owner (OV-102).
- **The original clean-quit sender is unknown.** The attribution to an external
  SIGTERM is inferred from an exact reproduction and 12 traced clean runs.
- **Coarse roles:** process roles identify Chromium type and utility sub-type.
  Extension-host instances are not told apart by name. Pids are recorded.
- **Single bootstrap sample:** the gate fixture holds one anonymous bootstrap
  captured on 18 October from this container (one anonymous request; no
  identifiers committed). Server values can change.
- **Orphaned `tcpdump`:** if the namespace wrapper itself is killed, its
  `tcpdump` is orphaned. This was seen once, when an experiment's pattern
  matched the wrapper. When only the verifier dies, the wrapper still stops
  `tcpdump`.

## Status at stop (owner stop request, 19 October 2026)

- **Done:** tasks 1–6. Code, fixes, fixtures, unit tests and docs are committed
  and pushed.
- **Partly done:** task 6 needs a second `verify:telemetry:extended --
  --idle-seconds 600` run on this build. Run 2 (`fXnIJA`) was stopped cleanly
  during its idle period because of the stop request: the main process got
  SIGTERM, matched by its run directory. It is not counted.
- **Not started:** none.
- **Last verified runs:**
  - `data-destinations-PvCKfo`, `DOBY9j`, `W8SO9C`
  - the 10-run series ending `ThMm72`
  - `statsig-cache-ONwJ29`, `1xB7FJ`
  - `telemetry-verification-uPe0gw`
  - `telemetry-extended-XE8H2u`
- **Uncommitted findings:** none.
- **tcpdump (coordinator note):** on this branch `tcpdump -Z root` runs as the
  namespace's mapped root and does listen. In the final runs, for example
  `W8SO9C/tcpdump.log`, it listened on `lo` and captured 0 packets, consistent
  with 0 non-loopback traffic. Without `-Z root`, as user `ov`, it exits
  immediately and the pcap is empty. The coordinator's tolerant `kill` line
  (`ffcca576`) is adopted verbatim.
- **ETA for the remainder:** one task, the second 600 s extended telemetry run
  (about 25 minutes of native time). It fits in a fraction of one worker
  session or quota round, including the rebuild (about 15 minutes).

## Completion on the merged build (19 October 2026)

The owner asked to finish after the stop. Branch reset (fast-forward) to the
merged `origin/ccr-a39d6f13-jurmdv` at `2b61fcbc`, which contains all of this
branch. Clean rebuild with Node 24.18.0, then one run of each verifier, in
sequence, all first-time passes:

| Command | Run | Result |
| --- | --- | --- |
| `npm run verify:data-destinations` | `logs/data-destinations-vnUHoK` | Pass, 18 of 18 checks. 11 provider requests; 0 non-provider requests, connections, names, direct connects; no unrequested exit; 13 addons, none unknown |
| `npm run verify:telemetry` | `logs/telemetry-verification-ww5ScF` | Pass |
| `npm run verify:telemetry:extended -- --idle-seconds 600` | `logs/telemetry-extended-OfXO1m` | Pass with every phase and a 600 s idle. 0 non-user destinations, 0 telemetry matches, 0 direct remote sockets, family drained (51 processes), no device-id file. 12 recorded lookups, all the gallery in the Extensions phase |

With `XE8H2u`, two `--idle-seconds 600` runs have now passed. Task 6 is complete.
**Recommendation: promote OV-501 and OV-1005 to Verified on Linux x64** (local
profile). The owner decisions and the moved platform/live items above still
apply.
