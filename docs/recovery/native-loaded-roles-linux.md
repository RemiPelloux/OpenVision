# Linux x64 measured loaded roles

OV-801 · measured 19 October 2026 · Linux x64 source build (Cursor 3.21.13
AppImage inputs) under Xvfb, private D-Bus session and a disposable plaintext
Secret Service keyring · controlled fixtures: loopback model server and a local
VSIX. Inventory: [native-inventory-linux-x64.json](native-inventory-linux-x64.json);
dispositions: [native-dispositions-linux.md](native-dispositions-linux.md).

## Method

`npm run verify:native-loaded` launches the owned host through
`strace -f -ff -qq -ttt -s 512 --status=successful -e trace=execve,execveat,openat,clone,clone3,fork,vfork`
and samples `/proc/<pid>/maps` for every member of the owned process family
(1 s during active phases, 15 s during idle). Roles come from Electron's
`app.getAppMetrics()` names and process command lines; the parent of an executed
helper comes from the traced `clone` tree. Launch flags match the product
launcher (`desktop/launch.mjs`): `--disable-crash-reporter` and, for a
user-owned `chrome-sandbox`, `--disable-setuid-sandbox`.

Fixed workload, in order: startup (window, workspace tree, driver extension
ready, 30 s settle) → Explorer (expand `src/`, open `hello.js`) → terminal
(bash command, kill) → task (shell task, exit 0) → debugger (`pwa-node` launch
of a script to completion) → Agent (add a loopback provider, then a reply, a
`Read` tool call and a `Grep` tool call) → search (workbench text search and
`workspace.findFiles`) → extension install (local VSIX via
`workbench.extensions.installExtension`) → 10 min idle → shutdown.

States: **mapped** (file-backed mapping seen in a process), **executed**
(successful `execve`), **read** (a `.wasm` file opened; compilation itself is
not observable this way), **opened-not-mapped** (a shared object opened but no
mapping sampled), **never-loaded**. Frequency counts distinct processes and
1 s samples that mapped the path, executions and opens.

The verifier fails on any loaded native or WASM under the runtime roots without
an inventory record, any runtime file whose digest differs from the inventory,
an unclean shutdown or surviving owned process, and on instrument canaries
(`pty.node` during the terminal phase, at least one `rg` execution, the host
executable mapped).

## Runs

| Run | Head | Result | Notes |
| --- | --- | --- | --- |
| `logs/native-loaded-3wUtyh` | `29cb989e` + uncommitted verifier (committed unchanged as `91a9077c`) | pass, first full run | 630 trace files, 32,529 lines, 248 executions, 133 samples; clean exit, no survivors |
| `logs/native-loaded-XCwv4L` | `91a9077c` (clean) | pass, repeat run | 619 trace files, 32,910 lines, 247 executions, 133 samples; same 15/2/2/1/41 states; clean exit, no survivors |

Earlier short smoke runs (0.2 min idle) found and fixed verifier defects: the
Explorer step lost `hello.js` in the virtualized tree, the Agent provider dialog
needs a Secret Service, the strace string decoder rejected octal escapes, and
an executed shell script (`out/vs/base/node/cpuUsage.sh`, 3 executions) was
miscounted as an unknown native. They are not counted as passes.

## Results

Of 61 inventory paths: **15 mapped, 2 executed, 2 WASM read, 1 opened but not
mapped, 41 never loaded**. Of 49 distinct payloads, 17 were loaded or read.

| Path | Digest | State | Roles | Trigger | Phases seen | Frequency |
| --- | --- | --- | --- | --- | --- | --- |
| `bin/code-tunnel` | `7da765fb84d9` | never-loaded | – | – | – | – |
| `bin/cursor-tunnel` | `7da765fb84d9` | never-loaded | – | – | – | – |
| `chrome-sandbox` | `2015304df43b` | never-loaded | – | – | – | – |
| `chrome_crashpad_handler` | `c58f54786506` | never-loaded | – | – | – | – |
| `cursor` | `0636c96f07de` | mapped | child:openvision, child:shell, extension-host, file-watcher, gpu, main, pty-host, renderer, shared-process, utility:Audio Service, utility:Network Service, zygote; parent: extension-host, main, pty-host, shared-process | startup | all workload phases | 14 proc, 1642 samples, 11 exec, 0 open |
| `libEGL.so` | `6aa1e796e006` | mapped | gpu | startup | all workload phases | 1 proc, 130 samples, 0 exec, 1 open |
| `libGLESv2.so` | `510449f3c2f0` | mapped | gpu | startup | all workload phases | 1 proc, 130 samples, 0 exec, 1 open |
| `libffmpeg.so` | `033cbc12324f` | mapped | child:openvision, child:shell, extension-host, file-watcher, gpu, main, process-not-sampled, pty-host, renderer, shared-process, utility:Audio Service, utility:Network Service, zygote | startup | all workload phases | 14 proc, 1642 samples, 0 exec, 17 open |
| `libvk_swiftshader.so` | `aa70c5dcc2ae` | never-loaded | – | – | – | – |
| `libvulkan.so.1` | `d6b9a2888ffe` | opened-not-mapped | gpu | startup | startup | 0 proc, 0 samples, 0 exec, 1 open |
| `extensions/cursor-agent-exec/dist/node_modules/@anysphere/tree-chunk-napi/tree-chunk-napi.linux-x64-gnu.node` | `6dbfb46f03a9` | mapped | extension-host | agent | agent, extension-install, idle, search | 1 proc, 62 samples, 0 exec, 1 open |
| `extensions/cursor-agent-exec/dist/node_modules/better-sqlite3/build/Release/better_sqlite3.node` | `ad42dfe67a24` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-exec/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node` | `ddc2ba327b18` | mapped | extension-host | startup | all workload phases | 1 proc, 118 samples, 0 exec, 1 open |
| `extensions/cursor-agent-exec/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node` | `8d16289ce351` | mapped | extension-host | startup | all workload phases | 1 proc, 118 samples, 0 exec, 1 open |
| `extensions/cursor-agent-exec/dist/node_modules/whichlang-node-linux-x64-gnu/whichlang-node.linux-x64-gnu.node` | `36f84c1e420d` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/tree-chunk-napi.linux-x64-gnu.node` | `6dbfb46f03a9` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node` | `ddc2ba327b18` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node` | `5b313fbec62e` | never-loaded | – | – | – | – |
| `extensions/cursor-retrieval/node_modules/@anysphere/file-service/file_service.linux-x64-gnu.node` | `3b0290b101e8` | mapped | extension-host | startup | all workload phases | 1 proc, 115 samples, 0 exec, 1 open |
| `extensions/ms-vscode.js-debug/src/w32appcontainertokens-XTRA77NA.node` | `fe26b77f6ef4` | never-loaded | – | – | – | – |
| `node_modules/@anysphere/policy-watcher/build/Release/vscode-policy-watcher.node` | `c2bf2adebcf6` | never-loaded | – | – | – | – |
| `node_modules/@parcel/watcher/build/Release/watcher.node` | `5e73fa7d520e` | mapped | file-watcher | startup | all workload phases | 1 proc, 122 samples, 0 exec, 1 open |
| `node_modules/@vscode/deviceid/build/Release/windows.node` | `f9530ee183f9` | never-loaded | – | – | – | – |
| `node_modules/@vscode/ripgrep/bin/rg` | `d42ae51b08e3` | executed | child:rg; parent: extension-host | startup | agent, search, startup, terminal | 0 proc, 0 samples, 11 exec, 0 open |
| `node_modules/@vscode/spdlog/build/Release/spdlog.node` | `6a4fb7705c05` | mapped | extension-host, main, pty-host | startup | all workload phases | 3 proc, 369 samples, 0 exec, 3 open |
| `node_modules/@vscode/sqlite3/build/Release/vscode-sqlite3.node` | `90a98b86a73b` | mapped | main | startup | all workload phases | 1 proc, 130 samples, 0 exec, 1 open |
| `node_modules/cursor-proclist/build/Release/cursor_proclist.node` | `19e3f28befb0` | mapped | main | startup | all workload phases | 1 proc, 130 samples, 0 exec, 1 open |
| `node_modules/kerberos/build/Release/kerberos.node` | `18892d0568c6` | never-loaded | – | – | – | – |
| `node_modules/kerberos/build/Release/obj.target/kerberos.node` | `18892d0568c6` | never-loaded | – | – | – | – |
| `node_modules/native-is-elevated/build/Release/iselevated.node` | `ad7190814fac` | never-loaded | – | – | – | – |
| `node_modules/native-keymap/build/Release/keymapping.node` | `92d870c953da` | mapped | main | startup | all workload phases | 1 proc, 129 samples, 0 exec, 1 open |
| `node_modules/native-watchdog/build/Release/watchdog.node` | `ff9195e571ec` | never-loaded | – | – | – | – |
| `node_modules/node-pty/build/Release/pty.node` | `2451a5a2a1ba` | mapped | pty-host | startup | all workload phases | 1 proc, 120 samples, 0 exec, 1 open |
| `node_modules/windows-foreground-love/build/Release/foreground_love.node` | `422adf6df5e8` | never-loaded | – | – | – | – |
| `node_modules/windows-foreground-love/build/Release/obj.target/foreground_love.node` | `422adf6df5e8` | never-loaded | – | – | – | – |
| `resources/helpers/crepectl` | `a145cdb8b2a0` | never-loaded | – | – | – | – |
| `resources/helpers/cursorsandbox` | `80fcddbf185f` | executed | child:cursorsandbox; parent: extension-host | startup | startup | 0 proc, 0 samples, 2 exec, 0 open |
| `resources/helpers/node` | `7a2a27967657` | mapped | child:tsserver; parent: extension-host | explorer | agent, debugger, explorer, extension-install, idle, search, task, terminal | 2 proc, 172 samples, 2 exec, 0 open |
| `resources/appimageupdatetool.AppImage` | `f1d187ac86ac` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-exec/dist/node_modules/@jsquash/webp/codec/dec/webp_dec.wasm` | `30fb52fa2a80` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-exec/dist/node_modules/@jsquash/webp/codec/enc/webp_enc.wasm` | `b6085bb6702f` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-exec/dist/node_modules/@jsquash/webp/codec/enc/webp_enc_simd.wasm` | `39c279269ec1` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-host/dist/node_modules/@jsquash/webp/codec/dec/webp_dec.wasm` | `30fb52fa2a80` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-host/dist/node_modules/@jsquash/webp/codec/enc/webp_enc.wasm` | `b6085bb6702f` | never-loaded | – | – | – | – |
| `extensions/cursor-agent-host/dist/node_modules/@jsquash/webp/codec/enc/webp_enc_simd.wasm` | `39c279269ec1` | never-loaded | – | – | – | – |
| `extensions/cursor-computer-use/dist/webp_enc.wasm` | `b6085bb6702f` | never-loaded | – | – | – | – |
| `extensions/cursor-local-agent-runtime/dist/node_modules/@jsquash/webp/codec/dec/webp_dec.wasm` | `30fb52fa2a80` | never-loaded | – | – | – | – |
| `extensions/cursor-local-agent-runtime/dist/node_modules/@jsquash/webp/codec/enc/webp_enc.wasm` | `b6085bb6702f` | never-loaded | – | – | – | – |
| `extensions/cursor-local-agent-runtime/dist/node_modules/@jsquash/webp/codec/enc/webp_enc_simd.wasm` | `39c279269ec1` | never-loaded | – | – | – | – |
| `extensions/ms-vscode.js-debug/src/chromehash_bg.wasm` | `19154d9be73e` | read | extension-host | debugger | debugger | 0 proc, 0 samples, 0 exec, 2 open |
| `extensions/ms-vscode.vscode-js-profile-table/out/a443ca1a33b96237dd48.module.wasm` | `acf2b84255ec` | never-loaded | – | – | – | – |
| `extensions/ms-vscode.vscode-js-profile-table/out/dbd61d846b1102299709.module.wasm` | `b59a640a9416` | never-loaded | – | – | – | – |
| `extensions/node_modules/esbuild-wasm/esbuild.wasm` | `c4f8ab7b1cd3` | never-loaded | – | – | – | – |
| `node_modules/@connectrpc/connect-node/node_modules/undici/lib/llhttp/llhttp.wasm` | `ee82b848a5ca` | never-loaded | – | – | – | – |
| `node_modules/@connectrpc/connect-node/node_modules/undici/lib/llhttp/llhttp_simd.wasm` | `cd48aefa974e` | never-loaded | – | – | – | – |
| `node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-css.wasm` | `3451e4e4bac9` | never-loaded | – | – | – | – |
| `node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-ini.wasm` | `d82edb24208a` | never-loaded | – | – | – | – |
| `node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-regex.wasm` | `89641aa4900d` | never-loaded | – | – | – | – |
| `node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-typescript.wasm` | `b92b8f1b0942` | never-loaded | – | – | – | – |
| `node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter.wasm` | `6bd21cdde74a` | never-loaded | – | – | – | – |
| `node_modules/vscode-oniguruma/release/onig.wasm` | `fd885c2d12e5` | read | main | explorer | explorer | 0 proc, 0 samples, 0 exec, 2 open |

## Observations and inferences

Observed:

- Host and Chromium: the host executable and `libffmpeg.so` are mapped by every
  Electron process; ANGLE (`libEGL.so`, `libGLESv2.so`) only by the GPU process;
  `libvulkan.so.1` is opened by the GPU process at startup but no mapping was
  sampled; SwiftShader, `chrome-sandbox` and `chrome_crashpad_handler` never load
  with the product launch flags.
- Main process: `vscode-sqlite3.node`, `native-keymap`, `cursor_proclist.node`
  and `spdlog.node` from startup. `spdlog.node` is also in the extension host and
  PTY host; `pty.node` only in the PTY host; `watcher.node` only in the file
  watcher utility.
- Extension host at startup: the Agent execution extension's `tree-sitter` and
  `tree-sitter-bash` bindings and the retrieval `file_service` addon. The Agent
  phase adds `tree-chunk-napi`. `cursorsandbox` is executed twice by the
  extension host during startup. `rg` is executed 11 times by the extension
  host (startup, terminal, Agent and search phases). The helper `node` runs
  TypeScript server processes from the Explorer phase onward.
- WASM: only `onig.wasm` (opened by the main process when the editor opens
  `hello.js`) and the debugger's `chromehash_bg.wasm` (extension host, debugger
  phase). `esbuild.wasm`, the HTTP parser, Tree-sitter and WebP payloads were
  not read.
- The Agent host daemon copies (`cursor-agent-host/…`), `better-sqlite3`,
  `whichlang`, `policy-watcher`, `kerberos`, `native-watchdog`,
  `native-is-elevated`, `crepectl`, both tunnel binaries and the AppImage update
  tool were never loaded.

Inferences (not proven by this run):

- `onig.wasm` is opened by the main process because it serves `vscode-file:`
  requests for the renderer, which then compiles it.
- `esbuild.wasm` is reached only through the Agent canvas renderer's lazy
  `import("esbuild-wasm")` (see the [esbuild evidence](native-dispositions-linux.md#evidence-used));
  the workload has no canvas, so never-loaded here does not mean unreachable.
- Never-loaded means not loaded by this workload. Features outside it (canvas,
  computer use, image tools, profile tables, Kerberos proxy authentication,
  policy files, elevated saves, remote tunnels) may load more.

## Limitations

- One host launch per run, one Linux x64 configuration (X11 under Xvfb); no
  Wayland cell, GPU driver or real account. Agent requests use the loopback
  model fixture; no hosted service was contacted.
- Short-lived processes between 1 s samples are visible only through `execve`
  and `openat`; a library mapped and unmapped between samples would appear as
  opened-not-mapped.
- `strace` slows the traced host; durations in the run results are not
  performance measurements.
- Windows (52 PE) loaded-role mapping and the macOS bundle inventory are moved
  to their platform stories.
