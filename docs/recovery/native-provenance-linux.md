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

Addon toolchain (`native/linux-x64/toolchain.json`, enforced by `desktop/native-rebuild.mjs`):
Ubuntu 24.04.5 x86_64, gcc/g++ 13.3.0 (`13.3.0-6ubuntu2~24.04.1`), GNU make 4.3,
Python 3.13.16, Node 24.18.0 running node-gyp 12.3.0, Electron 42.10.0 headers
(`NODE_MODULE_VERSION` 146). Headers from Ubuntu `libxkbfile-dev 1:1.1.0-1build4`
(native-keymap) and `libkrb5-dev 1.20.1-6ubuntu2.10` (kerberos). Every addon is built
with `-ffile-prefix-map` for the package and header directories, `-static-libstdc++`
and `--build-id=sha1`; two consecutive builds produced byte-identical output for all
eleven.

## Records

| Path | SHA-256 | Source | Toolchain | Command | License |
| --- | --- | --- | --- | --- | --- |
| `electron-host/openvision` | `0636c96f07de2c74a3eaf8692fc1743d81259c0bf66c8ebde7f7179211a8aff9` | Electron 42.10.0 release `electron` | Official Electron release build (not rebuilt; Chromium is out of scope) | `unzip`; rename `electron` → `openvision`; fuses unchanged (`101100011`, read by both readers) | MIT (Electron `LICENSE`); Chromium and third parties in `LICENSES.chromium.html` |
| `electron-host/*` | `archive:edcfae0a8cf2a75ceee8a9842a0117521283164708b193495f4cb60ab2d6aa0d` | Electron 42.10.0 release, same relative path | Official Electron release build | `unzip`; copy unchanged (`version` and `resources/default_app.asar` omitted) | MIT (Electron `LICENSE`); Chromium, ANGLE, SwiftShader, FFmpeg, Vulkan loader and ICU notices in `LICENSES.chromium.html` |
| `electron-host/locales/*.pak` | `archive:edcfae0a8cf2a75ceee8a9842a0117521283164708b193495f4cb60ab2d6aa0d` | Electron 42.10.0 release `locales/` | Official Electron release build | `unzip`; copy unchanged | Chromium (BSD-3-Clause), `LICENSES.chromium.html` |
| `electron-host/resources/app/resources/helpers/node` | `7a2a27967657ebbfc6967b7e6af5bb5186f103e05405cac0a46ae8198d5ad2ef` | Node.js 24.18.1 release `bin/node` (`f3432a45b03b2da0d270095fdd8813dc34cbea73f5fc8b18c7a384b7cf9b333a`) | Official Node.js release build plus `alignLoadSegments` (desktop/upstream-host.mjs) | Extract; set PT_LOAD `p_align` 0x2000 and 0x200000 → 0x1000 (segments 3 and 4) | MIT (Node.js `LICENSE`, with bundled third-party notices) |
| `electron-host/resources/app/node_modules/node-pty/build/Release/pty.node` | `f1610e70170cb90ca18c4c96f856d877726a0e8df678dbe3d83ab071626c03ef` | npm `node-pty@1.1.0-beta42` (microsoft/node-pty) | Pinned addon toolchain above | `npm run build:native:linux` (node-gyp rebuild `--runtime=electron --target=42.10.0`) | MIT (`LICENSE` a3d60eaf32d2) |
| `electron-host/resources/app/node_modules/@vscode/sqlite3/build/Release/vscode-sqlite3.node` | `5e55004ad6af7b499f4f68e14902f138b8635c9e7d49015dfb52122b39c374ff` | npm `@vscode/sqlite3@5.1.12-vscode` (microsoft/vscode-node-sqlite3, bundled SQLite amalgamation) | Pinned addon toolchain above | `npm run build:native:linux` | BSD-3-Clause (`LICENSE` 7686f81e580c); SQLite public domain |
| `electron-host/resources/app/extensions/cursor-agent-exec/dist/node_modules/better-sqlite3/build/Release/better_sqlite3.node` | `60770715ecbce8e0d88bca5fdff8dc1b71e2810bd762d50c860e4ff86000b3af` | npm `better-sqlite3@12.11.1` (WiseLibs/better-sqlite3 `4cbc39ca`) | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 09856b52897c); SQLite public domain |
| `electron-host/resources/app/node_modules/@parcel/watcher/build/Release/watcher.node` | `b7bebd71953b07734e6a89b8a23090d6786c2ccf8df40b682aabeae2bd444097` | npm `@parcel/watcher@2.5.1` (parcel-bundler/watcher `119f1ff0`); upstream base of Cursor's 2.5.1-cursor fork | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 5cfba9d57112) |
| `electron-host/resources/app/node_modules/@vscode/spdlog/build/Release/spdlog.node` | `d76ba703d1fdee7ef0943c1450ae82a40606d0ad3a494af1703efaf7ed570c6f` | npm `@vscode/spdlog@0.15.8` (microsoft/node-spdlog, bundled spdlog) | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 27ebda9d51f0) |
| `electron-host/resources/app/node_modules/native-keymap/build/Release/keymapping.node` | `b3445d7150c785bf62971ddf595d54e5893f04a7156999a73f17c83c0796a9cd` | npm `native-keymap@3.3.5` (microsoft/node-native-keymap) | Pinned addon toolchain above; links system `libX11.so.6`, `libxkbfile.so.1` | `npm run build:native:linux` | MIT (`License.txt` 31bec773a6a3, `ThirdPartyNotices.txt`) |
| `electron-host/resources/app/node_modules/native-watchdog/build/Release/watchdog.node` | `040712f6fcfab56bcbdfb364a1c8fdc4cdf755660b84bc3a5f8d3a219679c4d7` | npm `native-watchdog@1.4.2` (microsoft/node-native-watchdog) | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 27ebda9d51f0) |
| `electron-host/resources/app/node_modules/kerberos/build/Release/kerberos.node` | `e21be60f3526801cc3e3c0eb3ee47072d3fca180eb197a92270e81bf74885d2d` | npm `kerberos@2.1.1` (mongodb-js/kerberos `c2acb189`) | Pinned addon toolchain above; GSS-API resolved at run time (`dlopen`) | `npm run build:native:linux` | Apache-2.0 (`LICENSE` c71d239df917) |
| `electron-host/resources/app/node_modules/@anysphere/policy-watcher/build/Release/vscode-policy-watcher.node` | `fa118f15bf9a05ac95fa8f51436bc34e3e94b75ca027bb98d65c40d02736027f` | npm `@vscode/policy-watcher@1.3.2` (microsoft/vscode-policy-watcher); upstream base of `@anysphere/policy-watcher@1.3.2-cursor.2`, a Linux stub in both | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` c2cfccb812fe) |
| `electron-host/resources/app/extensions/cursor-agent-exec/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node` | `8705cf875ee257549c58a87a6b930e8bfcdfa14d073ebcd6597ec32fc09a4bea` | npm `tree-sitter@0.21.1` (tree-sitter/node-tree-sitter `bbdba663`) | Pinned addon toolchain above with `-std=gnu++20` appended (binding.gyp pins C++17; Electron 42 V8 headers require C++20) | `npm run build:native:linux` | MIT (`LICENSE` d39420a10860) |
| `electron-host/resources/app/extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node` | `8705cf875ee257549c58a87a6b930e8bfcdfa14d073ebcd6597ec32fc09a4bea` | Same build as the row above | Same as above | `npm run build:native:linux` (one output, two targets) | MIT (`LICENSE` d39420a10860) |
| `electron-host/resources/app/extensions/cursor-agent-exec/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node` | `4b989d29ab60a887f2574d72a6590b2023a9b9d74c24b8650f0996fb88097e95` | npm `tree-sitter-bash@0.21.0` (tree-sitter/tree-sitter-bash `f3f26f47`) | Pinned addon toolchain above | `npm run build:native:linux` | MIT (`LICENSE` 49bf33cf78ef) |
| `electron-host/resources/app/extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node` | `4b989d29ab60a887f2574d72a6590b2023a9b9d74c24b8650f0996fb88097e95` | Same build as the row above | Same as above | `npm run build:native:linux` (one output, two targets) | MIT (`LICENSE` 49bf33cf78ef) |

## Not substituted

These Linux x64 natives keep their recovered binaries in both upstream modes:

- `whichlang-node` 0.2.1 (Rust/napi-rs) — no pinned Rust toolchain was set up.
- `@vscode/ripgrep` `rg` 15.1.0-cursor5 — Cursor's fork (`rev c3e3c2f7ec`) differs from the
  official ripgrep 15.1.0 musl release (`rev af60c2de9d`, archive
  `1c9297be4a084eea7ecaedf93eb03d058d6faae29bbc57ecdaf5063921491599`); not swapped without
  search fixtures for the fork delta.
- Cursor-only addons with no public source: `@anysphere/file-service`, `@anysphere/tree-chunk-napi`,
  `cursor-proclist`, helpers `crepectl` and `cursorsandbox` (OV-801 dispositions).
- `kerberos/build/Release/obj.target/kerberos.node`, an intermediate link output nothing loads.
