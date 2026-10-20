# Linux x64 native provenance (upstream host)

19 October 2026 · OV-802 · Linux x64 only. Windows MSVC, macOS Xcode and signing
provenance belong to the platform stories.

This records where every native file **substituted** by
`npm run build:desktop -- --upstream-host` or `-- --upstream-addons` comes from.
`npm run verify:native-provenance` reads the table below and fails unless every
substitution listed in the package's `openvision-upstream-host.json` has a row with
a source, toolchain, command and license, and either the exact output SHA-256 or,
for unmodified release files, the SHA-256 of the verified release archive (the
verifier then re-hashes each file against the extracted archive). It complements the
OV-801 [dispositions](native-dispositions-linux.md) and
[inventory](native-inventory-linux-x64.json), which cover every shipped payload.

Distribution terms are recorded here, not decided: the Electron, Chromium and Node.js
notices travel with the files named below; whether OpenVision may redistribute them
under its own release process is an owner decision.

## Inputs

| Input | Official source | SHA-256 (from the release SHASUMS256.txt) |
| --- | --- | --- |
| Electron 42.10.0 linux-x64 | <https://github.com/electron/electron/releases/download/v42.10.0/electron-v42.10.0-linux-x64.zip> | `edcfae0a8cf2a75ceee8a9842a0117521283164708b193495f4cb60ab2d6aa0d` |
| Node.js 24.18.1 linux-x64 | <https://nodejs.org/dist/v24.18.1/node-v24.18.1-linux-x64.tar.xz> | `d6c664df3f3f61458e8c277585571328522d705166723a7c7823a9253a4d15a0` |
| Electron 42.10.0 headers | <https://artifacts.electronjs.org/headers/dist/v42.10.0/node-v42.10.0-headers.tar.gz> | `cba478aba2a335d45e75e855a1c91da0267a968a7624b4c0c945b70da1d104d7` |
| Addon sources | npm tarballs pinned by `native/linux-x64/package-lock.json` (`resolved` + `integrity`) | lockfile `a328d4e0ca5e61b67d07cca15f124062789446ce384ba12a8763484fc391bc0e` |

The Node.js `SHASUMS256.txt.asc` signature was downloaded but not checked against the
Node.js release keys; the digests above were compared with the HTTPS-served
SHASUMS256.txt only.

Addon toolchain (`native/linux-x64/toolchain.json`, enforced by `desktop/native-rebuild.mjs`),
following VS Code's Linux x64 client recipe (`build/azure-pipelines/linux/setup-env.sh`):

| Input | Source | SHA-256 |
| --- | --- | --- |
| Chromium clang `llvmorg-23-init-5669-g8a0be0bc-4` (clang 23.0.0git, LLVM `8a0be0bc`) | `CLANG_REVISION` of Chromium 148.0.7778.280 (Electron 42.10.0's Chromium), <https://commondatastorage.googleapis.com/chromium-browser-clang/Linux_x64/clang-llvmorg-23-init-5669-g8a0be0bc-4.tar.xz> | `bd3a3d7e98cc9037daf24bd7b48f52ba0f0ea5e435c1c707e381034ee4b3c1d6` — no published digest; pinned from the first download, whose MD5 matched the bucket's `x-goog-hash` |
| glibc 2.28 sysroot with gcc 10.5.0 runtime | VS Code `build/checksums/vscode-sysroot.txt`, <https://github.com/microsoft/vscode-linux-build-agent/releases/download/v20260212-405735/x86_64-linux-gnu-glibc-2.28-gcc-10.5.0.tar.gz> | `ac4b6b14b4cec027a22a51bbbb049b3504958a78106c8a8d5cec144206b767d1` (matches VS Code's checksum file) |
| libc++ objects, libc++ and libc++abi headers | Electron 42.10.0 release (`libcxx-objects-v42.10.0-linux-x64.zip`, `libcxx_headers.zip`, `libcxxabi_headers.zip`) | `7d407127…1102`, `3bd22124…e48b`, `176f64da…a0c` (Electron SHASUMS256.txt) |
| Rust 1.97.0 (`2d8144b78`) rustc, cargo, rust-std | <https://static.rust-lang.org/dist/> | `0a878730…cad0`, `5c5bc94a…7129`, `0c436181…8712` (`.sha256` beside each archive) |

The build runs on Ubuntu 24.04.5 with GNU make 4.3, Python 3.13.16 and Node 24.18.0
(node-gyp 12.3.0) against the Electron 42.10.0 headers (`NODE_MODULE_VERSION` 146).
Headers and libraries come only from the sysroot: pkg-config is pointed at it and the
host `libxkbfile-dev` and `libkrb5-dev` packages were removed before the clean build.
C++ uses Electron's libc++ in the `Cr` namespace, statically linked with ThinLTO and
lld, so no addon needs `libstdc++` or a shared libc++. The build fails if any addon
requires a GLIBC symbol above 2.28. Paths are prefix-mapped, the Rust target directory
is emptied before each build, and two consecutive clean builds produced byte-identical
output for all twelve packages.

## Records

| Path | SHA-256 | Source | Toolchain | Command | License |
| --- | --- | --- | --- | --- | --- |
| `electron-host/openvision` | `0636c96f07de2c74a3eaf8692fc1743d81259c0bf66c8ebde7f7179211a8aff9` | Electron 42.10.0 release `electron` | Official Electron release build (not rebuilt; Chromium is out of scope) | `unzip`; rename `electron` → `openvision`; fuses unchanged (`101100011`, read by both readers) | MIT (Electron `LICENSE`); Chromium and third parties in `LICENSES.chromium.html` |
| `electron-host/*` | `archive:edcfae0a8cf2a75ceee8a9842a0117521283164708b193495f4cb60ab2d6aa0d` | Electron 42.10.0 release, same relative path | Official Electron release build | `unzip`; copy unchanged (`version` and `resources/default_app.asar` omitted) | MIT (Electron `LICENSE`); Chromium, ANGLE, SwiftShader, FFmpeg, Vulkan loader and ICU notices in `LICENSES.chromium.html` |
| `electron-host/locales/*.pak` | `archive:edcfae0a8cf2a75ceee8a9842a0117521283164708b193495f4cb60ab2d6aa0d` | Electron 42.10.0 release `locales/` | Official Electron release build | `unzip`; copy unchanged | Chromium (BSD-3-Clause), `LICENSES.chromium.html` |
| `electron-host/resources/app/resources/helpers/node` | `7a2a27967657ebbfc6967b7e6af5bb5186f103e05405cac0a46ae8198d5ad2ef` | Node.js 24.18.1 release `bin/node` (`f3432a45b03b2da0d270095fdd8813dc34cbea73f5fc8b18c7a384b7cf9b333a`) | Official Node.js release build plus `alignLoadSegments` (desktop/upstream-host.mjs) | Extract; set PT_LOAD `p_align` 0x2000 and 0x200000 → 0x1000 (segments 3 and 4) | MIT (Node.js `LICENSE`, with bundled third-party notices) |
| `electron-host/resources/app/node_modules/node-pty/build/Release/pty.node` | `eda07a377fca7a64cd60b4ffb8775298898a1fc74eb56fb735df1690e6eacb62` | npm `node-pty@1.1.0-beta42` (microsoft/node-pty) | Pinned addon toolchain above | `npm run build:native:linux` (node-gyp rebuild `--runtime=electron --target=42.10.0`) | MIT (`LICENSE` a3d60eaf32d2) |
| `electron-host/resources/app/node_modules/@vscode/sqlite3/build/Release/vscode-sqlite3.node` | `517b0fd7f4c071c6174abdeca328b3a0f88ed318cdfeb6a88034fdb0be743a2e` | npm `@vscode/sqlite3@5.1.12-vscode` (microsoft/vscode-node-sqlite3, bundled SQLite amalgamation) | Pinned addon toolchain above | `npm run build:native:linux` | BSD-3-Clause (`LICENSE` 7686f81e580c); SQLite public domain |
| `electron-host/resources/app/extensions/cursor-agent-exec/dist/node_modules/better-sqlite3/build/Release/better_sqlite3.node` | `ec25084753e0676a35f5e69b02d3daf483054ca1d8ac18efcc4db4755fbea506` | npm `better-sqlite3@12.11.1` (WiseLibs/better-sqlite3 `4cbc39ca`) | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 09856b52897c); SQLite public domain |
| `electron-host/resources/app/node_modules/@parcel/watcher/build/Release/watcher.node` | `d5562368aef4e06d9276274cd8b3656ba00d8378ef450c927c99a547e1ef87a3` | npm `@parcel/watcher@2.5.1` (parcel-bundler/watcher `119f1ff0`); upstream base of Cursor's 2.5.1-cursor fork | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 5cfba9d57112) |
| `electron-host/resources/app/node_modules/@vscode/spdlog/build/Release/spdlog.node` | `7793c459cf01e765379ba8c22424779e1c910fe3947f7cb91904e00022ffc840` | npm `@vscode/spdlog@0.15.8` (microsoft/node-spdlog, bundled spdlog) | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 27ebda9d51f0) |
| `electron-host/resources/app/node_modules/native-keymap/build/Release/keymapping.node` | `55f71ddd47a09c7904e58f9556150f680adb38b4ba69aa373fad987345a3b9a6` | npm `native-keymap@3.3.5` (microsoft/node-native-keymap) | Pinned addon toolchain above; links `libX11.so.6`, `libxkbfile.so.1` from the sysroot | `npm run build:native:linux` | MIT (`License.txt` 31bec773a6a3, `ThirdPartyNotices.txt`) |
| `electron-host/resources/app/node_modules/native-watchdog/build/Release/watchdog.node` | `d22f41e28ffc677ff5d12c1a73a6669763717a02f189f52b5d20cec345b320ce` | npm `native-watchdog@1.4.2` (microsoft/node-native-watchdog) | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 27ebda9d51f0) |
| `electron-host/resources/app/node_modules/kerberos/build/Release/kerberos.node` | `8b462a720df4ac74ea3838fe3946a6ab7d99fe8f56e9b6e4505a174baa1592b1` | npm `kerberos@2.1.1` (mongodb-js/kerberos `c2acb189`) | Pinned addon toolchain above; GSS-API resolved at run time (`dlopen`) | `npm run build:native:linux` | Apache-2.0 (`LICENSE` c71d239df917) |
| `electron-host/resources/app/node_modules/@anysphere/policy-watcher/build/Release/vscode-policy-watcher.node` | `a4c3c8759f001fba9e7cc18b981eb597b1bfeae0ff1e4d8a439dc490e78dc9b9` | npm `@vscode/policy-watcher@1.3.2` (microsoft/vscode-policy-watcher); upstream base of `@anysphere/policy-watcher@1.3.2-cursor.2`, a Linux stub in both | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` c2cfccb812fe) |
| `electron-host/resources/app/extensions/cursor-agent-exec/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node` | `aba1c9a9b2095a569356a4d1d4c539378444fafe690eda17ae630ee772e36289` | npm `tree-sitter@0.21.1` (tree-sitter/node-tree-sitter `bbdba663`) | Pinned addon toolchain above with `-std=gnu++20` appended (binding.gyp pins C++17; Electron 42 V8 headers require C++20) and `native/linux-x64/patches/tree-sitter-0.21.1-symbol-set.patch` | `npm run build:native:linux` | MIT (`LICENSE` d39420a10860) |
| `electron-host/resources/app/extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node` | `aba1c9a9b2095a569356a4d1d4c539378444fafe690eda17ae630ee772e36289` | Same build as the row above | Same as above | `npm run build:native:linux` (one output, two targets) | MIT (`LICENSE` d39420a10860) |
| `electron-host/resources/app/extensions/cursor-agent-exec/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node` | `05d353f003e0ad966339bdf6e3ffffafe98ba8cf4c0d21062b13b460725837c1` | npm `tree-sitter-bash@0.21.0` (tree-sitter/tree-sitter-bash `f3f26f47`) | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 49bf33cf78ef) |
| `electron-host/resources/app/extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node` | `05d353f003e0ad966339bdf6e3ffffafe98ba8cf4c0d21062b13b460725837c1` | Same build as the row above | Same as above | `npm run build:native:linux` (one output, two targets) | MIT (`LICENSE` 49bf33cf78ef) |
| `electron-host/resources/app/extensions/cursor-agent-exec/dist/node_modules/whichlang-node-linux-x64-gnu/whichlang-node.linux-x64-gnu.node` | `a3801799e514455a775b89b5b3a2862e9c7f0e5e3e7a3c03549b46644a1b3fe0` | git `https://github.com/amehashi/whichlang-node` commit `ae7131c0` (0.2.1) with the committed `native/linux-x64/whichlang-node/Cargo.lock` | Rust 1.97.0 (pinned components) linked by the pinned clang/lld against the glibc 2.28 sysroot | `npm run build:native:linux` (`cargo build --release --locked`) | MIT (`LICENSE` 02965ed67e29); crates per Cargo.lock |

## Not substituted

These Linux x64 natives keep their recovered binaries in both upstream modes:

- `@vscode/ripgrep` `rg` 15.1.0-cursor5 — Cursor's fork (`rev c3e3c2f7ec`) differs from the
  official ripgrep 15.1.0 musl release (`rev af60c2de9d`, archive
  `1c9297be4a084eea7ecaedf93eb03d058d6faae29bbc57ecdaf5063921491599`); OV-803 keeps indexed grep.
- Cursor-only addons with no public source: `@anysphere/file-service`, `@anysphere/tree-chunk-napi`,
  `cursor-proclist`, helpers `crepectl` and `cursorsandbox` (OV-801 dispositions).
- `kerberos/build/Release/obj.target/kerberos.node`, an intermediate link output nothing loads.
