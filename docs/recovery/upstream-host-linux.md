# Upstream Electron/Node host on Linux x64

19 October 2026 · OV-802 · Linux x64 (Ubuntu 24.04.5, 4 CPUs, 15 GB) · controlled
fixtures only; no live provider, account or paid inference.

## What was built

`npm run build:desktop -- --upstream-host` runs the normal build, then writes
`build/upstream-host/OpenVision-linux-x64`: the portable package layout with every
host binary taken from the official Electron 42.10.0 release and the helper Node from
the official Node.js 24.18.1 release. `-- --upstream-addons` additionally replaces 13
addon targets (11 packages) with binaries rebuilt from pinned upstream sources by
`npm run build:native:linux`. The default build and `electron-host/` are not modified.
Each package carries `openvision-upstream-host.json` with the input digests, fuse wire,
host file comparison and every substitution (path, origin, SHA-256, recovered SHA-256).

Release archives are downloaded only when missing and accepted only at the pinned size
and SHA-256 copied from each release's `SHASUMS256.txt`
([inputs](native-provenance-linux.md#inputs)). Compiling Chromium or Node is out of
scope; the official release binaries count as the built host (owner default).

## Observations

- **The recovered Cursor host is the official Electron release.** `cursor` and
  `electron` from `electron-v42.10.0-linux-x64.zip` are byte-identical
  (`0636c96f…a8aff9`, same GNU build ID `ce01977e…04ad`). All 70 other release files
  (`chrome-sandbox`, `chrome_crashpad_handler`, `.so`, `.pak`, snapshots, ICU,
  `locales/`) are byte-identical too. Release-only files: `LICENSE` (kept),
  `version` and `resources/default_app.asar` (omitted). Recovered-only: the `bin/`
  Cursor CLI wrappers, `resources/completions` and the AppImage updater, which the
  portable package already excludes.
- **Fuses are untouched.** Both binaries carry wire `101100011` (RunAsNode,
  NodeOptions, NodeCliInspect, GrantFileProtocolExtraPrivileges and WasmTrapHandlers
  enabled; cookie encryption, ASAR integrity, OnlyLoadAppFromAsar and the
  browser-specific snapshot disabled). `desktop/upstream-host.mjs` reads the wire
  itself and cross-checks every fuse with `@electron/fuses` 2.1.3; the build refuses to
  substitute when the wires differ.
- **The helper Node differs from the release in exactly 3 bytes.** OV-801 recorded it
  as "not byte-identical". The difference is the `p_align` of two PT_LOAD segments
  (0x2000 and 0x200000 → 0x1000); code, build ID (`2b4b8482…1d7e`) and size are the
  same. The build applies that transform to the official binary and records it; the
  output equals the recovered helper (`7a2a2796…d2ef`).
- **Recovered addons were built with Chromium clang and libc++** (`std::__Cr` symbols,
  no `libstdc++` dependency, glibc floor 2.16–2.28), matching VS Code's Linux recipe.
- **Two Linux stubs behave identically** in the recovered fork and upstream:
  `@anysphere/policy-watcher` 1.3.2-cursor.2 and `@vscode/policy-watcher` 1.3.2 throw
  `Unsupported platform`; native-keymap returns no layout under Xvfb in both.

## Addon rebuild

`native/linux-x64/package.json` + `package-lock.json` pin node-pty 1.1.0-beta42,
@vscode/sqlite3 5.1.12-vscode, better-sqlite3 12.11.1, @parcel/watcher 2.5.1 (upstream
base of 2.5.1-cursor), @vscode/spdlog 0.15.8, native-keymap 3.3.5, native-watchdog
1.4.2, kerberos 2.1.1, @vscode/policy-watcher 1.3.2 (base of 1.3.2-cursor.2),
tree-sitter 0.21.1, tree-sitter-bash 0.21.0 and node-gyp 12.3.0. Install with
`npm ci --prefix native/linux-x64 --ignore-scripts --omit=optional`: no install
script or prebuilt binary is fetched or run. The rebuild refuses a host whose gcc, g++,
make, Python or Node version differs from `native/linux-x64/toolchain.json`, verifies
the Electron headers archive and `NODE_MODULE_VERSION 146`, and writes
`build/native/linux-x64/manifest.json` (sources, command, output digest, ELF ABI facts,
license, wrapper token diff against the recovered package).

Build deltas, all recorded in the manifest command: `-ffile-prefix-map` for the package
and header paths, `-static-libstdc++`, `--build-id=sha1`, and `-std=gnu++20` for
tree-sitter only (its `binding.gyp` pins C++17; Electron 42's V8 headers require C++20).
Two consecutive builds produced byte-identical output for all eleven packages.

ABI: ten packages register `napi_register_module_v1` and better-sqlite3 registers
`node_register_module_v146`, the same entry point as each recovered binary.

Wrapper delta (JavaScript compared as acorn token streams, so the recovered
reformatting is ignored; counts are tokens present on one side only): @vscode/spdlog
identical; @vscode/sqlite3 2/0 of 1,213; native-keymap 0/2; native-watchdog 0/2;
@vscode/policy-watcher 0/3; tree-sitter-bash 1/1; kerberos 0/16 of 1,680;
@parcel/watcher 0/9 of 566; node-pty 23/74 of 9,567. The Agent bundle copies of
better-sqlite3 (936/1,019 of 4,450) and tree-sitter (910/1,077 of 5,009) differ more:
same versions, but transformed by the bundler. Only binaries are substituted; the
recovered JavaScript wrappers stay in place. The @parcel/watcher and policy-watcher
fork deltas in native code are not measurable from JavaScript; the upstream base is
accepted because the fixtures below pass (owner default).

## Verification

All native runs used user `ov`, inside `scripts/linux-cell.sh x11` (private Xvfb,
D-Bus and disposable gnome-keyring) unless noted, one at a time.

| Run | Command | Result |
| --- | --- | --- |
| `native-abi-wJIEef` | `npm run verify:native-abi` (4 addons, no cell) | Failed: fixture defect — recovered better-sqlite3 loaded without `nativeBinding`, unlike the Agent bundle. Fixed the fixture. |
| `native-abi-QmnmdC` | same, after the fix | Pass, rebuilt and recovered |
| `native-abi-K0nDvD` | `verify:native-abi` (11 addons) | Failed in both variants: keymap and policy-watcher expectations were wrong (Linux stubs). Changed to parity with the recovered control. |
| `native-abi-FUin80` | same, after the change | Pass; rebuilt results equal recovered results for all 11 |
| `upstream-host-J5RsRH` (first wrapper run, no cell) | `verify:upstream-host` | welcome `Zzofv8`, project `V63q0r`, development `inZk5E` pass; linux-secrets `oubcHv` and agent `qTWYAx` failed: no Secret Service in a bare `dbus-run-session` |
| `agent-verification-sW5Gvr` | control: `verify:agent` on the default host in the cell | Pass |
| `upstream-host-A7CBx8` | `verify:upstream-host -- --only verify-linux-secrets,verify-agent` in the cell | Pass (`g1po2m`, `tJNCML`) |
| `upstream-host-ABXgW6` | `verify:upstream-host -- --critical` (host only) | 9/10 first-time pass: welcome `eIlKji`, project `eow0XF`, explorer `u4QkZO`, development `grLvbo`, git `LyVsZG`, agent `6Gv1CH`, completion `IvsiIc`, extensions `rdcKw4`, linux-secrets `sRfxv5`; package-linux `Rim5An` failed (see below) |
| `package-linux-verification-cg6RsZ` | control: `verify:package:linux` on the default host | Same failure: main defect, not the host |
| `verify:native-provenance` | after `--upstream-addons` | Pass: 86 substitutions, 17 records, 13 rebuilt targets |
| `upstream-host-54mpCj` | `--addons` suite + linux-critical on the rebuilt-addon package | 11/12 first-time pass; only `verify:package:linux` fails (main defect); details in the [worker report](../verification/worker-reports/upstream-host.md) |

`verify:package:linux` fails on `main` for every host: the updates-rollback change
added `profileFormat` and `updates` to `openvision-package.json`, while the verifier
still expects the old object (`desktop/verify-package-linux.mjs`, manifest assertion).
It is recorded for its owner, not fixed here.

## Limitations

- **glibc floor.** Rebuilt addons require glibc 2.38 (the build host's libc), against
  2.16–2.28 for the recovered addons, 2.25 for Electron and 2.28 for the helper Node.
  A package with them runs on Ubuntu 24.04/Debian 13-class systems, not older ones.
  VS Code's pinned glibc-2.28 sysroot (`x86_64-linux-gnu-glibc-2.28-gcc-10.5.0`,
  checksum matched) was tried: its gcc 10.5 lacks `<source_location>` for Electron 42's
  V8 headers, and host gcc 13 with that sysroot fails on libstdc++/glibc 2.28
  mismatches. Matching the recovered floor needs VS Code's Chromium clang + Electron
  libc++ recipe; not done.
- whichlang-node (Rust), Cursor's ripgrep fork and Cursor-only addons keep recovered
  binaries ([not substituted](native-provenance-linux.md#not-substituted)).
- Node's `SHASUMS256.txt.asc` signature was not checked against release keys.
- Fixtures are local and controlled; no distribution or display cell beyond Ubuntu
  24.04 X11/Xvfb was tested here.
