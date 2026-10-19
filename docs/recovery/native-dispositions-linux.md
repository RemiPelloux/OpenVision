# Linux x64 native and WASM dispositions

OV-801 · recorded 19 October 2026 · denominator: the pinned **Cursor 3.21.13
Linux x64 AppImage** (SHA-256 `285eaa38de049c44322ec9365ff9d48337ddacf43234041248a723cb44ade25b`),
extracted squashfs. **34 distinct native payloads** (39 paths: 38 ELF, 1 PE) and
**15 distinct WASM payloads** (22 paths). The machine-readable record is
[`native-inventory-linux-x64.json`](native-inventory-linux-x64.json); loaded roles
are in [native-loaded-roles-linux.md](native-loaded-roles-linux.md). This table
is checked by `npm run verify:native-inventory`: every distinct digest needs one
row with a non-empty upstream, ref, license, ABI and one class from the set below.

This is a Linux-only claim. It replaces the Windows "52 PE paths" wording for
Linux; the Windows and macOS mappings are separate platform stories. The
3.24.18 reference inventory stays informational.

## Classes

| Class | Meaning |
| --- | --- |
| `upstream-release` | Byte-identical to a named published artifact (digest match recorded) or reproduced byte for byte from pinned source |
| `rebuild-from-source` | Public source and version are named; the shipped bytes are a local build, not matched to a published artifact |
| `fork-delta` | Built from a downstream fork of a public project; the delta source is not published with the package |
| `proprietary-replace` | No public source or license grant; an owned replacement or a recovered interface is required if the role is needed |
| `remove-unused` | Not loaded by the measured Linux workload and outside OpenVision's product scope; candidate for exclusion |
| `dead-on-platform` | A Windows-only payload or a Linux stub with no entry point; cannot serve a role on Linux |

## Evidence used

- Digest matches: `node scripts/recovery/upstream-payload-match.mjs`, run
  `logs/upstream-payload-match-9c12us` (19 October 2026): 22 of 49 distinct
  payloads match a published artifact. All Electron/Chromium files, including the
  host executable, are byte-identical to `electron-v42.10.0-linux-x64.zip`
  (archive SHA-256 `edcfae0a8cf2a75ceee8a9842a0117521283164708b193495f4cb60ab2d6aa0d`).
  12 WASM payloads and 2 addons match the npm tarball for their manifest's exact
  `name@version`. `@cursor/ripgrep@15.1.0-cursor5` and `@parcel/watcher@2.5.1-cursor`
  are not published on npm.
- esbuild: rebuilt byte for byte from tag `v0.25.9` with Go 1.23.12
  (`npm run recovery:esbuild-wasm`, run `logs/esbuild-wasm-evidence-PzuSSB`).
- ABI from linkage: Node-API addons import `napi_*`; the one V8/NAN addon exports
  `node_register_module_v146`. The host reports Electron 42.10.0, Node 24.18.1,
  `modules` 146, N-API 10; the helper `node` reports Node 24.18.1, `modules` 137.
- Licenses are the shipped manifest's declared value; "not declared" means the
  manifest names none. Refs name the version the manifest declares; a tag is
  listed only where the version maps to a public tag, and commits only where one
  was read from the binary or verified (esbuild).

Inferences: a digest match proves byte identity with the published artifact, not
how that artifact was built. Classes for payloads never loaded in the measured
workload are recommendations; no file is removed by this record.

## Native payloads

| Digest | Payload | Upstream | Ref | License | ABI | Class |
| --- | --- | --- | --- | --- | --- | --- |
| `0636c96f07de2c74` | `cursor` (host executable) | electron/electron | v42.10.0 release zip (digest match) | MIT; Chromium third-party notices | Electron 42.10.0, Node 24.18.1, modules 146, N-API 10; glibc ≥ 2.25 | `upstream-release` |
| `2015304df43beff0` | `chrome-sandbox` | electron/electron | v42.10.0 (digest match) | BSD-3-Clause (Chromium) | setuid helper; glibc ≥ 2.4 | `upstream-release` |
| `c58f5478650638a4` | `chrome_crashpad_handler` | electron/electron | v42.10.0 (digest match) | Apache-2.0 (Crashpad) | executable; glibc ≥ 2.17 | `upstream-release` |
| `6aa1e796e006c8ca` | `libEGL.so` | electron/electron (ANGLE) | v42.10.0 (digest match) | BSD-3-Clause | shared library; glibc ≥ 2.16 | `upstream-release` |
| `510449f3c2f06f9d` | `libGLESv2.so` | electron/electron (ANGLE) | v42.10.0 (digest match) | BSD-3-Clause | shared library; glibc ≥ 2.17 | `upstream-release` |
| `033cbc12324fb7f5` | `libffmpeg.so` | electron/electron (FFmpeg) | v42.10.0 (digest match) | LGPL-2.1+ (FFmpeg) | shared library; glibc ≥ 2.17 | `upstream-release` |
| `aa70c5dcc2ae21aa` | `libvk_swiftshader.so` | electron/electron (SwiftShader) | v42.10.0 (digest match) | Apache-2.0 | shared library; glibc ≥ 2.17 | `upstream-release` |
| `d6b9a2888ffe0527` | `libvulkan.so.1` | electron/electron (Vulkan loader) | v42.10.0 (digest match) | Apache-2.0 | shared library; glibc ≥ 2.16 | `upstream-release` |
| `7a2a27967657ebbf` | `resources/helpers/node` | nodejs/node | v24.18.1 (reported version; not byte-identical to the nodejs.org tarball) | MIT (Node.js) | Node 24.18.1, modules 137, N-API 10; glibc ≥ 2.28 | `rebuild-from-source` |
| `a145cdb8b2a02351` | `resources/helpers/crepectl` | Cursor (unpublished) | Cursor 3.21.13 product commit e44a49c…014a2; no public source | not declared (proprietary) | static executable | `proprietary-replace` |
| `80fcddbf185f6444` | `resources/helpers/cursorsandbox` | Cursor (unpublished) | Cursor 3.21.13; rustc commit 48a229ce… read from the binary | not declared (proprietary) | static executable | `proprietary-replace` |
| `7da765fb84d9ce55` | `bin/code-tunnel`, `bin/cursor-tunnel` | Cursor fork of microsoft/vscode `cli/` | Cursor 3.21.13; rustc commit 48a229ce… read from the binary | MIT upstream; downstream build not published | executable; glibc ≥ 2.28 | `remove-unused` |
| `f1d187ac86ac3b89` | `resources/appimageupdatetool.AppImage` | AppImageCommunity/AppImageUpdate | continuous build; no version string recorded | MIT | nested AppImage; glibc ≥ 2.14 | `remove-unused` |
| `d42ae51b08e3a368` | `@vscode/ripgrep/bin/rg` | BurntSushi/ripgrep via `@cursor/ripgrep` | 15.1.0-cursor5 (binary reports rev c3e3c2f7ec) | MIT OR Unlicense | static-pie executable | `fork-delta` |
| `2451a5a2a1ba3c95` | `node-pty/…/pty.node` | microsoft/node-pty | 1.1.0-beta42 | MIT | Node-API; glibc ≥ 2.28 | `rebuild-from-source` |
| `5e73fa7d520e22cc` | `@parcel/watcher/…/watcher.node` | parcel-bundler/watcher (Cursor fork) | 2.5.1-cursor (not on npm) | MIT | Node-API; glibc ≥ 2.17 | `fork-delta` |
| `c2bf2adebcf6a710` | `@anysphere/policy-watcher/…/vscode-policy-watcher.node` | microsoft/vscode-policy-watcher (Cursor fork) | 1.3.2-cursor.2 | MIT | Node-API; glibc ≥ 2.16 | `fork-delta` |
| `6a4fb7705c05da9d` | `@vscode/spdlog/…/spdlog.node` | microsoft/node-spdlog | v0.15.8 | MIT | Node-API; glibc ≥ 2.17 | `rebuild-from-source` |
| `90a98b86a73b70a3` | `@vscode/sqlite3/…/vscode-sqlite3.node` | microsoft/vscode-node-sqlite3 | v5.1.12-vscode | BSD-3-Clause | Node-API; glibc ≥ 2.28 | `rebuild-from-source` |
| `92d870c953da1a4d` | `native-keymap/…/keymapping.node` | microsoft/node-native-keymap | v3.3.5 | MIT | Node-API; needs libX11, libxkbfile; glibc ≥ 2.16 | `rebuild-from-source` |
| `ff9195e571ec0625` | `native-watchdog/…/watchdog.node` | microsoft/node-native-watchdog | v1.4.2 | MIT | Node-API; glibc ≥ 2.2.5 | `rebuild-from-source` |
| `ad7190814fac9468` | `native-is-elevated/…/iselevated.node` | arkon/native-is-elevated | v0.7.0 | MIT | Node-API; glibc ≥ 2.2.5 | `rebuild-from-source` |
| `18892d0568c685c0` | `kerberos/…/kerberos.node` (2 paths) | mongodb-js/kerberos | v2.1.1 | Apache-2.0 | Node-API; glibc ≥ 2.16 | `rebuild-from-source` |
| `422adf6df5e85256` | `windows-foreground-love/…/foreground_love.node` (2 paths) | the-ress/node-windows-foreground-love | v0.5.0 | MIT | Node-API; Windows API wrapper | `dead-on-platform` |
| `f9530ee183f9ecd4` | `@vscode/deviceid/…/windows.node` | microsoft/vscode-deviceid | v0.1.1 | MIT | no addon entry point (Linux stub) | `dead-on-platform` |
| `fe26b77f6ef44c99` | `ms-vscode.js-debug/src/w32appcontainertokens-XTRA77NA.node` | microsoft/vscode-js-debug | extension v1.93.0 | MIT | PE32+ Windows DLL, Node-API | `dead-on-platform` |
| `19e3f28befb0a39d` | `cursor-proclist/…/cursor_proclist.node` | Cursor (unpublished) | 1.0.0; no public source | not declared (proprietary) | Node-API; glibc ≥ 2.16 | `proprietary-replace` |
| `3b0290b101e8d8f7` | `cursor-retrieval/…/file_service.linux-x64-gnu.node` | Cursor (unpublished) | @anysphere/file-service 0.0.0 | UNLICENSED | Node-API (napi-rs); glibc ≥ 2.16 | `proprietary-replace` |
| `6dbfb46f03a94867` | `tree-chunk-napi.linux-x64-gnu.node` (2 paths) | Cursor (unpublished) | @anysphere/tree-chunk-napi 0.0.0 | not declared (proprietary) | Node-API (napi-rs); glibc ≥ 2.28 | `proprietary-replace` |
| `36f84c1e420dab98` | `whichlang-node.linux-x64-gnu.node` | amehashi/whichlang-node | npm 0.2.1 (digest match) | MIT | Node-API; glibc ≥ 2.14 | `upstream-release` |
| `ad42dfe67a246713` | `cursor-agent-exec/…/better_sqlite3.node` | WiseLibs/better-sqlite3 | v12.11.1 | MIT | V8/NAN ABI 146 (Electron 42); glibc ≥ 2.28 | `rebuild-from-source` |
| `ddc2ba327b1838b6` | `tree-sitter/…/tree_sitter_runtime_binding.node` (2 paths) | tree-sitter/node-tree-sitter | v0.21.1 | MIT | Node-API; glibc ≥ 2.17 | `rebuild-from-source` |
| `8d16289ce35196a3` | `cursor-agent-exec/…/tree_sitter_bash_binding.node` | tree-sitter/tree-sitter-bash | v0.21.0 (local build) | MIT | Node-API; glibc ≥ 2.16 | `rebuild-from-source` |
| `5b313fbec62ec84f` | `cursor-agent-host/…/tree_sitter_bash_binding.node` | tree-sitter/tree-sitter-bash | npm 0.21.0 `prebuilds/linux-x64` (digest match) | MIT | Node-API; needs libstdc++; glibc ≥ 2.14 | `upstream-release` |

## WASM payloads

| Digest | Payload | Upstream | Ref | License | ABI | Class |
| --- | --- | --- | --- | --- | --- | --- |
| `c4f8ab7b1cd318f6` | `esbuild-wasm/esbuild.wasm` | evanw/esbuild | v0.25.9, commit 195e05c16f03a341390feef38b8ebf17d3075e14 (rebuilt byte for byte; npm digest match) | MIT | Go js/wasm (`gojs` imports), Go 1.23.12 | `upstream-release` |
| `ee82b848a5ca8e9f` | `undici/lib/llhttp/llhttp.wasm` | nodejs/undici (llhttp) | npm undici 5.29.0 (digest match) | MIT | `env` imports, 34 exports | `upstream-release` |
| `cd48aefa974e9fc2` | `undici/lib/llhttp/llhttp_simd.wasm` | nodejs/undici (llhttp) | npm undici 5.29.0 (digest match) | MIT | `env` imports, SIMD | `upstream-release` |
| `6bd21cdde74a9cf2` | `@vscode/tree-sitter-wasm/wasm/tree-sitter.wasm` | microsoft/vscode-tree-sitter-wasm | npm 0.1.4 (digest match); runtime 0.25.1 per cgmanifest | MIT | Emscripten: `env`, `wasi_snapshot_preview1`, `GOT.mem` | `upstream-release` |
| `3451e4e4bac92ba9` | `@vscode/tree-sitter-wasm/wasm/tree-sitter-css.wasm` | microsoft/vscode-tree-sitter-wasm | npm 0.1.4 (digest match) | MIT | Emscripten side module (`env`) | `upstream-release` |
| `d82edb24208ab7d0` | `@vscode/tree-sitter-wasm/wasm/tree-sitter-ini.wasm` | microsoft/vscode-tree-sitter-wasm | npm 0.1.4 (digest match) | MIT | Emscripten side module (`env`) | `upstream-release` |
| `89641aa4900d4e1a` | `@vscode/tree-sitter-wasm/wasm/tree-sitter-regex.wasm` | microsoft/vscode-tree-sitter-wasm | npm 0.1.4 (digest match) | MIT | Emscripten side module (`env`) | `upstream-release` |
| `b92b8f1b09429b26` | `@vscode/tree-sitter-wasm/wasm/tree-sitter-typescript.wasm` | microsoft/vscode-tree-sitter-wasm | npm 0.1.4 (digest match) | MIT | Emscripten side module (`env`) | `upstream-release` |
| `fd885c2d12e5951e` | `vscode-oniguruma/release/onig.wasm` | microsoft/vscode-oniguruma | npm 1.7.0 (digest match) | MIT | Emscripten: `env`, `wasi_snapshot_preview1` | `upstream-release` |
| `30fb52fa2a80166d` | `@jsquash/webp/codec/dec/webp_dec.wasm` (3 paths) | jamsinclair/jSquash | npm @jsquash/webp 1.5.0 (digest match) | Apache-2.0 (libwebp BSD-3-Clause) | Emscripten (`a` imports) | `upstream-release` |
| `b6085bb6702f144e` | `@jsquash/webp/codec/enc/webp_enc.wasm` (4 paths) | jamsinclair/jSquash | npm @jsquash/webp 1.5.0 (digest match) | Apache-2.0 (libwebp BSD-3-Clause) | Emscripten (`a` imports) | `upstream-release` |
| `39c279269ec1163b` | `@jsquash/webp/codec/enc/webp_enc_simd.wasm` (3 paths) | jamsinclair/jSquash | npm @jsquash/webp 1.5.0 (digest match) | Apache-2.0 (libwebp BSD-3-Clause) | Emscripten, SIMD (`a` imports) | `upstream-release` |
| `19154d9be73ea313` | `ms-vscode.js-debug/src/chromehash_bg.wasm` | microsoft/vscode-js-debug | extension v1.93.0 (rustc 1.59.0, wasm-bindgen 0.2.78) | MIT | wasm-bindgen | `rebuild-from-source` |
| `acf2b84255ecaef4` | `vscode-js-profile-table/out/a443ca1a….module.wasm` | microsoft/vscode-js-profile-visualizer | vscode-js-profile-table 1.0.11 (rustc 1.73.0, wasm-bindgen 0.2.88) | MIT | wasm-bindgen | `rebuild-from-source` |
| `b59a640a9416d53a` | `vscode-js-profile-table/out/dbd61d84….module.wasm` | microsoft/vscode-js-profile-visualizer | vscode-js-profile-table 1.0.11 (rustc 1.73.0, wasm-bindgen 0.2.88) | MIT | wasm-bindgen | `rebuild-from-source` |

## Remaining Linux work

- Rebuild and ABI-test each `rebuild-from-source` and `fork-delta` addon against
  Electron 42 (OV-802).
- Replace or recover interfaces for the loaded `proprietary-replace` helpers
  (OV-803); the measured roles decide priority.
- The two tunnel binaries and the AppImage update tool are `remove-unused`
  recommendations only; removal is an owner product decision.
