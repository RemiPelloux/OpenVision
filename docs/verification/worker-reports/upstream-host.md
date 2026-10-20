# Worker report: upstream host (OV-802)

Branch `ov/upstream-host` · Linux x64 only (Ubuntu 24.04.5, 4 CPUs, 15 GB, Node
24.18.0). Evidence: [upstream host](../../recovery/upstream-host-linux.md) and
[native provenance](../../recovery/native-provenance-linux.md). Round 2 (20 October)
answers the owner decision in `docs/planning/owner-decisions.md`: the glibc 2.38 floor
was not accepted. Round 1 (18–19 October) is kept below as history.

## Round 2: glibc 2.28 rebuild (20 October)

Branch reset to `origin/main` `455bb056` (the round-1 code was already merged there,
byte-identical), Node 24.18.0, `npm ci` in `tooling/`.

### Summary

All twelve addon packages (14 targets) are now rebuilt with VS Code's Linux x64 client
recipe: Chromium clang `llvmorg-23-init-5669-g8a0be0bc-4` (Electron 42.10.0's
Chromium), Electron 42.10.0's libc++ (`Cr` namespace, ThinLTO, lld) and VS Code's
`x86_64-linux-gnu-glibc-2.28-gcc-10.5.0` sysroot. whichlang-node is rebuilt too, with
pinned Rust 1.97.0 and a committed Cargo.lock. The highest GLIBC symbol any addon
needs is **2.28**. No addon references GLIBCXX or needs a shared C++ runtime. Every
node-gyp addon has exactly its recovered binary's floor. Two clean builds are
byte-identical. All checks the coordinator asked for passed first time on a clean
rebuild: `verify:native-abi` ×2, `verify:native-provenance` ×2, and
`verify:upstream-host -- --addons --critical` ×2 (11/11 each).

### Tasks

| Task | State | Notes |
| --- | --- | --- |
| Build the 11 addons on the glibc 2.28 sysroot with the Chromium clang + libc++ recipe | **Done** | `native/linux-x64/toolchain.json` pins clang, sysroot, libc++ objects and headers (sizes and SHA-256); `desktop/native-rebuild.mjs` `compilerEnvironment()` |
| Pinned toolchain, reproducible repeat builds | **Done** | Two consecutive clean builds byte-identical for all 12 packages |
| Max GLIBC ≤ 2.28 per addon, objdump/readelf evidence | **Done** | Enforced by `assertPortable()` at build time; per-addon table in [upstream host](../../recovery/upstream-host-linux.md#addon-rebuild) |
| whichlang-node (Rust) on the same floor | **Done** | Commit `ae7131c0` (0.2.1), `native/linux-x64/whichlang-node/Cargo.lock`, Rust 1.97.0 components from static.rust-lang.org, linked by the pinned clang/lld against the sysroot. Max GLIBC 2.28 (recovered 2.14) |
| Rerun verify:native-abi ×2, verify:native-provenance ×2, `--addons --critical` ×2 first time on a clean rebuild | **Done** | Below; no retries |

### Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Host gcc 13 builds needed glibc 2.38 (owner rejected the floor) | `desktop/native-rebuild.mjs`, `native/linux-x64/toolchain.json` | `92e50f73` |
| native-keymap's `binding.gyp` ran host `pkg-config`; with the host `libxkbfile-dev` removed, the first clean build failed. pkg-config now resolves only sysroot packages | `desktop/native-rebuild.mjs` | `3debafcc` |
| tree-sitter 0.21.1 does not compile against Electron's libc++ (`std::char_traits<unsigned short>` was removed); `native/linux-x64/patches/tree-sitter-0.21.1-symbol-set.patch` replaces its `basic_string<TSSymbol>` with `std::vector` + `std::find` | `native/linux-x64/patches/`, `native-rebuild.mjs` | `3debafcc` |
| A repeat Rust build reused cargo's target directory, so it was not a real rebuild; the target directory is now emptied first | `desktop/native-rebuild.mjs` | `3debafcc` |

### Verification (round 2)

User `ov`, inside `scripts/linux-cell.sh x11 --` (private Xvfb, D-Bus and disposable
gnome-keyring) for native runs, one at a time. Host `libxkbfile-dev` and `libkrb5-dev`
were **removed** before the clean build. Host setup only: the `ov` wrapper sets
`GIT_SSL_CAINFO` and `CARGO_HTTP_CAINFO` to a CA bundle `ov` can read.

| Command | Run ID / log | Result |
| --- | --- | --- |
| Clean tree (source, electron-host, build state, `native/linux-x64/node_modules` removed); `npm ci --prefix tooling`, `prepare:desktop`, `build:desktop` | `clean-1..3` logs | Pass: 250 scripts, 124 manifests, 36 main-process modules |
| `npm ci --prefix native/linux-x64 --ignore-scripts --omit=optional` | `clean-4` | Pass |
| `npm run build:native:linux` (first clean attempt) | `clean-5` | **Failed** on native-keymap: host pkg-config (fixed above). Second attempt failed on tree-sitter's libc++ incompatibility (fixed above). Not counted |
| `npm run build:native:linux` ×2 after the fixes | `clean-5-native-1`, `clean-6-native-2` | Pass; 12/12 byte-identical across the two |
| `npm run build:desktop -- --upstream-addons` | `clean-7` | Pass; 87 substitutions, 14 rebuilt targets |
| `npm run verify:native-abi` ×2 | `native-abi-IZhksV`, `native-abi-v09AQX` | First-time pass both; rebuilt results equal recovered for all 12 (whichlang-node detects the same languages) |
| `npm run verify:native-provenance` ×2 | console | Pass both: 87 substitutions, 18 records, 0 problems |
| `verify:upstream-host -- --addons --critical` run 1 | `upstream-host-zqbgbJ` | **11/11 first-time pass**: package-linux `IQIN4e`, welcome `NHdxF1`, project-home `IxmAWS`, project `O2KUoR`, explorer `m2srPj`, development `qSBBIe`, git `BcmKyN`, agent `YdCf4n`, completion `YhS1cN`, extensions `shcrI0`, linux-secrets `0fQ6Pn` |
| `verify:upstream-host -- --addons --critical` run 2 | `upstream-host-HfohAF` | **11/11 first-time pass**: package-linux `aQZI2x`, welcome `JyX3hC`, project-home `psJXer`, project `QBchR5`, explorer `v3ohzf`, development `V0jf7A`, git `qYWHF5`, agent `OObsI8`, completion `gRz5s2`, extensions `9gCbm2`, linux-secrets `RrtOzT` |
| `test:upstream-host`, `test:portable`, `test:native-inventory`, `test:provider-storage`, `check:desktop` | `unit2-*` | 9, 42 (1 skipped), 10, 78 pass; 0 fail; check passes |
| `docs:check`, `status:features` | console | Pass; 30/44 Verified (unchanged by this branch) |

`verify:package:linux` passes now because `main` fixed its manifest assertion. With
`--native-host`, that verifier packages only the upstream host binaries; the other ten
verifiers run on the full rebuilt-addon package.

### Recommendation (round 2)

**OV-802: promote to Verified on Linux x64.** Every listed Linux clause has evidence:
- pinned host, addon, Rust and toolchain sources and lockfiles;
- all twelve open-source addons rebuilt on the glibc 2.28 floor;
- ABI and behaviour parity with the recovered binaries;
- a provenance record and verifier for every substituted file;
- reproducible repeat builds;
- two first-time passes of the linux-critical workflows on the substituted host.

Remaining items are outside the Linux story or owner calls:
- Redistribution terms are recorded, not accepted (owner/legal).
- Cursor's ripgrep fork and the Cursor-only addons stay recovered (OV-801/OV-803 dispositions).
- The Chromium clang archive has no published SHA-256. Its digest is pinned after an
  MD5 match with Google Cloud Storage.

### Defaults (round 2)

All round-1 defaults were accepted by the owner. New choices:
- whichlang-node dependency versions are pinned to those found in the recovered binary
  or declared by its Cargo.toml.
- The tree-sitter source patch keeps behaviour unchanged.

## Round 1 (18–19 October)

### Summary (round 1)

`npm run build:desktop -- --upstream-host` packages the editable application on the
official Electron 42.10.0 and Node.js 24.18.1 release binaries (SHA-256 pinned to the
release SHASUMS); `-- --upstream-addons` also swaps in 11 addon packages (13 targets)
rebuilt from a committed lockfile with a pinned toolchain against the Electron 42.10.0
headers. The default build and `electron-host/` are unchanged.

Main observation: the recovered Cursor host **is** the official Electron 42.10.0 Linux
release (all 71 shared files byte-identical, fuses unflipped). The helper Node differs
from the official release only in two PT_LOAD alignment fields (3 bytes), which the
build reproduces exactly. On the rebuilt-addon package, 11 of the 12 selected checks
(the linux-critical subset plus `verify:project:scale` and `test:provider-storage`)
passed first time. The remaining failure, `verify:package:linux`, fails identically on
the default host: it is a `main` defect, not a host defect.

### Tasks (round 1)

| # | Task | State | Notes |
| --- | --- | --- | --- |
| 1 | Upstream Electron + Node host, file/fuse diff, opt-in build, verifiers | **Done** | `desktop/upstream-host.mjs`, `upstream-host-build.mjs`, `verify:upstream-host` (`--critical`, `--addons`, `--only`); fuses read locally and with `@electron/fuses` 2.1.3 |
| 2 | Rebuild storage/terminal/watcher addons, lockfile, pinned toolchain, ABI, swap, verifiers | **Done, with a portability gap** | `native/linux-x64/{package.json,package-lock.json,toolchain.json}`, `build:native:linux`, `verify:native-abi`; glibc floor rises to 2.38 (below) |
| 3 | spdlog, native-keymap, native-watchdog, kerberos, policy-watcher, tree-sitter, tree-sitter-bash, whichlang-node, ripgrep | **Partly done** | First seven rebuilt and substituted; Linux policy-watcher stub handled. whichlang-node (Rust) not done; ripgrep not swapped: Cursor's `15.1.0-cursor5` is a fork (rev `c3e3c2f7ec`) of the official release (rev `af60c2de9d`) |
| 4 | Provenance record + `verify:native-provenance` | **Done** | [native-provenance-linux.md](../../recovery/native-provenance-linux.md); the verifier parses its table and re-hashes archive-level records against the extracted release |

Supporting changes: `verify:project`, `verify:development`, `verify:git` and
`verify:extensions` accept `--portable`; `verify:package:linux` and `package-portable`
accept `--native-host <dir>`; `downloadPinned` is exported from `linux-input.mjs`
instead of a second downloader.

### Defects found and fixed (round 1)

| Defect | Owner | Commit |
| --- | --- | --- |
| Extraction marker `.extracted` leaked into the packaged host (found on the first package) | `desktop/upstream-host.mjs` (this branch) | `4ab68a5c` |
| Fixture loaded recovered better-sqlite3 without `nativeBinding`, unlike the Agent bundle (`native-abi-wJIEef`) | `desktop/native-abi-fixture.cjs` (this branch) | `4ab68a5c` |
| Fixture expected real keymap/policy results; both are Linux stubs/X-dependent in recovered and rebuilt alike (`native-abi-K0nDvD`) — now requires parity with the recovered control | `desktop/native-abi-fixture.cjs`, `verify-native-abi.mjs` | `4ab68a5c` |
| tree-sitter 0.21.1 failed to compile: its `binding.gyp` pins C++17, Electron 42 V8 headers need C++20 | `desktop/native-rebuild.mjs` (`-std=gnu++20` for that addon, recorded) | `4ab68a5c` |

Recorded, not fixed (outside this story): **`verify:package:linux` fails on `main`** for
any host. `desktop/package-portable.mjs` now writes `profileFormat` and `updates` into
`openvision-package.json` (updates-rollback merge), but
`desktop/verify-package-linux.mjs` still deep-equals the older object. Control on the
default host: `package-linux-verification-cg6RsZ`.

### Verification (round 1)

All native runs as user `ov`, one at a time, inside `scripts/linux-cell.sh x11 --`
(private Xvfb, D-Bus, disposable gnome-keyring) unless noted. Packages installed for the
cell and builds: `gnome-keyring 46.1-2ubuntu0.2`, `xdotool 1:3.20160805.1-5build1`,
`x11-utils 7.7+6build2`, `libxkbfile-dev 1:1.1.0-1build4`, `libkrb5-dev
1.20.1-6ubuntu2.10`.

| Command | Run ID | Result |
| --- | --- | --- |
| `npm ci --prefix tooling && npm run prepare:desktop && npm run build:desktop` (fresh) | `logs/setup-build.log` | Pass: 249 scripts, 124 manifests, 35 main-process modules |
| `npm run build:native:linux` ×2 | `native-rebuild-1/2.log` | Pass; all 11 outputs byte-identical across the two builds |
| `npm run verify:native-abi` | `wJIEef` → `QmnmdC` (4 addons, no cell); `K0nDvD` → `FUin80`, `ofHZnR` (11 addons) | Failures were fixture defects (above); `FUin80` and `ofHZnR` pass with rebuilt = recovered for every addon |
| `npm run build:desktop -- --upstream-host` | `build-upstream-host.log` | Pass; 73 substitutions (71 identical, LICENSE, helper Node identical after transform) |
| `verify:upstream-host` (bare `dbus-run-session`, no keyring) | `upstream-host-J5RsRH` | welcome `Zzofv8`, project `V63q0r`, development `inZk5E` pass; linux-secrets `oubcHv`, agent `qTWYAx` fail: no Secret Service. Wrong environment, not counted |
| control `verify:agent`, default host | `agent-verification-sW5Gvr` | Pass |
| `verify:upstream-host -- --only verify-linux-secrets,verify-agent` | `upstream-host-A7CBx8` | Pass (`g1po2m`, `tJNCML`) — first runs in the correct cell |
| `verify:upstream-host -- --critical` (host only) | `upstream-host-ABXgW6` | 9/10 first-time pass: welcome `eIlKji`, project `eow0XF`, explorer `u4QkZO`, development `grLvbo`, git `LyVsZG`, agent `6Gv1CH`, completion `IvsiIc`, extensions `rdcKw4`, linux-secrets `sRfxv5`; package-linux `Rim5An` fails (main defect) |
| control `verify:package:linux`, default host | `package-linux-verification-cg6RsZ` | Same failure |
| `npm run build:desktop -- --upstream-addons` | `build-upstream-addons.log` | Pass; 86 substitutions incl. 13 rebuilt targets |
| `npm run verify:native-provenance` ×2 | console | Pass both: 86 substitutions, 17 records, 0 problems |
| `verify:upstream-host -- --addons --only <critical + verify:project:scale + test:provider-storage>` | `upstream-host-54mpCj` | 11/12 first-time pass: project:scale `7lRtgT`, test:provider-storage (78 tests), welcome `fiDxAw`, project `JwebfR`, explorer `Au185j`, development `HGjulR`, git `5Zl119`, agent `UR5NPb`, completion `b16V0Z`, extensions `ySMVox`, linux-secrets `QFIqxH`; package-linux `PWFubm` fails (main defect; with `--native-host` it re-packages host binaries only) |
| `verify:native-loaded -- --portable <addons package> --idle-minutes=1` | `native-loaded-rvJ8dY` | Exit 1 by design (16 "runtime file differs from inventory": the substitutions). Observation: rebuilt spdlog, Agent tree-sitter + tree-sitter-bash, @parcel/watcher, @vscode/sqlite3, native-keymap, node-pty and the helper Node were mapped; better-sqlite3, kerberos, watchdog, policy-watcher and the agent-host-daemon copies were never loaded in that workload |
| controls on the default host for changed verifiers | project `hGPlr5`, development `ezrP3o`, git `yco0zk`, extensions `ebdmYA` | Pass |
| `test:upstream-host`, `test:portable`, `test:native-inventory`, `test:provider-storage`, `test:installer`, `check:desktop` | `logs/unit-*.log` | 7, 38, 10, 78 pass, 0 fail; installer 5 skipped (Windows-only); check passes |
| `npm run docs:check`, `npm run status:features` | `logs/unit-*.log` | Pass after this report was added; 25/44 Verified (unchanged) |

Host notes: the verifiers that need a Secret Service fail outside a keyring cell; this
is the documented `linux-cell.sh` requirement. The build writes the sibling folder
`/home/user/OpenVision Projects`, which `ov` had to own.

### Recommendation per story (round 1)

**OV-802: hold (not yet Verified on Linux x64).** The build option, pinned inputs,
lockfile, toolchain check, ABI check, behavioural parity and provenance are in place,
and the substituted host passes the linux-critical workflows. Remaining Linux gaps:

1. glibc floor: rebuilt addons need glibc 2.38 (recovered 2.16–2.28; Electron 2.25).
   Close by building with VS Code's Chromium clang + Electron libc++ recipe on the
   glibc-2.28 sysroot, or by an owner decision that the floor may rise.
2. whichlang-node (Rust) is not rebuilt, and Cursor's ripgrep fork and Cursor-only
   addons stay recovered (OV-801 disposition).
3. `verify:package:linux` must pass on the substituted host once `main` fixes its
   manifest assertion.
4. better-sqlite3, kerberos, watchdog and policy-watcher are not loaded by any in-app
   workload; they rely on the Electron-hosted fixture alone.

## Moved to platform/live stories

Windows MSVC addon rebuilds and host substitution; macOS Xcode rebuilds, universal
binaries and notarization; signing provenance for any rebuilt binary.

### Defaults pending owner decision (round 1)

- Official SHA-pinned Electron/Node release binaries count as the built host; Chromium
  and Node are not compiled.
- The helper Node gets Cursor's PT_LOAD 4 KiB alignment transform so it equals the
  verified recovered file; shipping the unmodified release binary instead is a one-line
  change in `substituteHelperNode`.
- Cursor forks (@parcel/watcher 2.5.1-cursor, policy-watcher 1.3.2-cursor.2) are
  replaced by their upstream bases because the fixtures and workflows pass; only
  binaries are swapped, recovered JavaScript wrappers stay.
- Electron `LICENSE` is added to the package; `version` and `default_app.asar` are
  omitted. Redistribution terms are recorded, not decided.
- Addons link libstdc++ statically, as the recovered ones do (with libc++).

## Open risks

- (Closed in round 2) The round-1 rebuild needed glibc 2.38.
- The Node.js `SHASUMS256.txt.asc` signature is not verified against release keys;
  integrity relies on the HTTPS-served SHASUMS and pinned digests.
- Fork deltas in native code (watcher, policy-watcher) are not measured beyond
  behaviour; untested paths may differ.
- Only Ubuntu 24.04 X11/Xvfb was exercised.
