# Upstream Electron/Node host on Linux x64

19–20 October 2026 · OV-802 · Linux x64 (Ubuntu 24.04.5, 4 CPUs, 15 GB) · controlled
fixtures only; no live provider, account or paid inference.

## What was built

`npm run build:desktop -- --upstream-host` runs the normal build, then writes
`build/upstream-host/OpenVision-linux-x64`: the portable package layout with every
host binary taken from the official Electron 42.10.0 release and the helper Node from
the official Node.js 24.18.1 release. `-- --upstream-addons` additionally replaces 14
addon targets (12 packages) with binaries rebuilt from pinned upstream sources by
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
script or prebuilt binary is fetched or run. whichlang-node 0.2.1 (Rust/napi-rs) is
built from its pinned git commit with the committed
`native/linux-x64/whichlang-node/Cargo.lock` (upstream ships none; napi 2.13.2,
napi-derive 2.13.0, napi-derive-backend 1.0.52, once_cell 1.18.0 and whichlang 0.1.0
match the recovered binary's strings or declared ranges).

**Toolchain (20 October, owner decision: glibc 2.28 floor).** The rebuild follows VS
Code's Linux x64 client recipe: Chromium clang `llvmorg-23-init-5669-g8a0be0bc-4`
(the revision of Electron 42.10.0's Chromium 148.0.7778.280), Electron 42.10.0's libc++
headers and objects (`Cr` namespace, ThinLTO, lld) and VS Code's
`x86_64-linux-gnu-glibc-2.28-gcc-10.5.0` sysroot, plus Rust 1.97.0 for whichlang-node.
All are downloaded at pinned sizes and digests ([inputs](native-provenance-linux.md#inputs)).
pkg-config resolves only sysroot packages; the host `libxkbfile-dev` and `libkrb5-dev`
packages were removed before the clean build to show nothing comes from the host. The
rebuild refuses a different clang, make, Python, Node or Rust, verifies the Electron
headers (`NODE_MODULE_VERSION 146`), fails any addon that needs a GLIBC symbol above
2.28, GLIBCXX symbols or a shared C++ runtime, and writes
`build/native/linux-x64/manifest.json` (sources, command, output digest, ELF facts,
license, wrapper token diff).

Build deltas, all recorded in the manifest: prefix maps for package, header and toolchain
paths; `--build-id=sha1`; `-std=gnu++20` for tree-sitter (its `binding.gyp` pins C++17,
Electron 42's V8 headers require C++20); and
`native/linux-x64/patches/tree-sitter-0.21.1-symbol-set.patch`, because Electron's
libc++ no longer provides `std::char_traits<unsigned short>` for tree-sitter's
`basic_string<TSSymbol>` symbol set (replaced by a `std::vector` with `std::find`, same
behaviour). Two consecutive clean builds produced byte-identical output for all twelve
packages (the Rust target directory is emptied first; the repeat recompiled 30 crates).

Highest required symbol versions (`objdump -T` and `readelf --dyn-syms`, both agree; no
addon references GLIBCXX or needs libstdc++/libc++):

| Package | Rebuilt SHA-256 (prefix) | Max GLIBC rebuilt | Max GLIBC recovered |
| --- | --- | --- | --- |
| node-pty 1.1.0-beta42 | `eda07a377fca7a64` | 2.28 | 2.28 |
| @vscode/sqlite3 5.1.12-vscode | `517b0fd7f4c071c6` | 2.28 | 2.28 |
| better-sqlite3 12.11.1 | `ec25084753e0676a` | 2.28 | 2.28 |
| @parcel/watcher 2.5.1 | `d5562368aef4e06d` | 2.17 | 2.17 |
| @vscode/spdlog 0.15.8 | `7793c459cf01e765` | 2.17 | 2.17 |
| native-keymap 3.3.5 | `55f71ddd47a09c79` | 2.16 | 2.16 |
| native-watchdog 1.4.2 | `d22f41e28ffc677f` | 2.2.5 | 2.2.5 |
| kerberos 2.1.1 | `8b462a720df4ac74` | 2.16 | 2.16 |
| @vscode/policy-watcher 1.3.2 | `a4c3c8759f001fba` | 2.16 | 2.16 |
| tree-sitter 0.21.1 | `aba1c9a9b2095a56` | 2.17 | 2.17 |
| tree-sitter-bash 0.21.0 | `05d353f003e0ad96` | 2.16 | 2.16 |
| whichlang-node 0.2.1 | `a3801799e514455a` | 2.28 | 2.14 |

Every node-gyp addon matches its recovered binary's floor exactly, which indicates the
recovered addons were built with this same recipe. Runtime libraries are the same set as
the recovered ones (libc, libm, libpthread, libgcc_s, ld-linux; native-keymap also
libX11 and libxkbfile; node-pty libutil; kerberos resolves GSS-API with `dlopen`).

ABI: eleven packages register `napi_register_module_v1` and better-sqlite3 registers
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

### Round 2 (20 October, glibc 2.28 toolchain)

Clean tree, user `ov`, linux-cell x11 with keyring, host `libxkbfile-dev`/`libkrb5-dev`
removed. No retries.

| Run | Command | Result |
| --- | --- | --- |
| `clean-5`/`clean-6` | `npm run build:native:linux` ×2 | 12/12 byte-identical (after the pkg-config and tree-sitter fixes; the two failed first attempts are not counted) |
| `native-abi-IZhksV`, `native-abi-v09AQX` | `verify:native-abi` ×2 | Pass, rebuilt = recovered for all 12 |
| console ×2 | `verify:native-provenance` | Pass: 87 substitutions, 18 records |
| `upstream-host-zqbgbJ`, `upstream-host-HfohAF` | `verify:upstream-host -- --addons --critical` ×2 | 11/11 first-time pass each (package-linux, welcome, project-home, project, explorer, development, git, agent, completion, extensions, linux-secrets) |

## Limitations

- **glibc floor (closed 20 October).** The 19 October rebuild with host gcc 13 needed
  glibc 2.38; the owner rejected that floor and the clang/libc++/sysroot recipe above
  replaced it. The highest requirement is now 2.28.
- The Chromium clang archive has no published SHA-256; its digest is pinned from the
  first download after the MD5 matched Google Cloud Storage's stored hash.
- Cursor's ripgrep fork and Cursor-only addons keep recovered binaries
  ([not substituted](native-provenance-linux.md#not-substituted)).
- Node's `SHASUMS256.txt.asc` signature was not checked against release keys.
- Fixtures are local and controlled; no distribution or display cell beyond Ubuntu
  24.04 X11/Xvfb was tested here.
