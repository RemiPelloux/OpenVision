# Native recovery checklist

The original audit below is retained. The [14 October WASM follow-up](rea-wasm-inventory.md)
updates complete record coverage to **14/15**; decoded-WAT coverage remains **15/15**.

Audit snapshot: 12 October 2026. Original Windows installation: Cursor 3.21.13.
Read alongside the [feature gap audit](feature-gap-audit.md).

All 52 listed PE files have parsed metadata. Only the process-list addon has
pseudocode results in this recovery pass. None has an established buildable
native-source reconstruction. Files at separate paths count separately, even
where their content matches; this is not a distinct-code or feature denominator.

Paths are relative to the original installation, preserving evidence identity.
This inventory does not prove every file is loaded by OpenVision. Roles and
priorities require tracing actual callers before choosing replacements.

| Original relative path | Type | Pseudocode status |
| --- | --- | --- |
| `Cursor.exe` | `.exe` | Not recovered in this pass |
| `d3dcompiler_47.dll` | `.dll` | Not recovered in this pass |
| `dxcompiler.dll` | `.dll` | Not recovered in this pass |
| `dxil.dll` | `.dll` | Not recovered in this pass |
| `ffmpeg.dll` | `.dll` | Not recovered in this pass |
| `libEGL.dll` | `.dll` | Not recovered in this pass |
| `libGLESv2.dll` | `.dll` | Not recovered in this pass |
| `resources/app/bin/code-tunnel.exe` | `.exe` | Not recovered in this pass |
| `resources/app/bin/cursor-tunnel.exe` | `.exe` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-exec/dist/node_modules/@anysphere/tree-chunk-napi/tree-chunk-napi.win32-x64-msvc.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-exec/dist/node_modules/better-sqlite3/build/Release/better_sqlite3.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-exec/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-exec/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-exec/dist/node_modules/tree-sitter-bash/prebuilds/win32-x64/tree-sitter-bash.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-exec/dist/node_modules/whichlang-node-win32-x64-msvc/whichlang-node.win32-x64-msvc.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/tree-chunk-napi.win32-x64-msvc.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-agent-host/dist/agent-host-daemon/dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/cursor-retrieval/node_modules/@anysphere/file-service/file_service.win32-x64-msvc.node` | `.node` | Not recovered in this pass |
| `resources/app/extensions/ms-vscode.js-debug/src/w32appcontainertokens-XTRA77NA.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@anysphere/policy-watcher/build/Release/vscode-policy-watcher.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@parcel/watcher/build/Release/watcher.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@vscode/deviceid/build/Release/windows.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@vscode/ripgrep/bin/rg.exe` | `.exe` | Not recovered in this pass |
| `resources/app/node_modules/@vscode/spdlog/build/Release/spdlog.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@vscode/sqlite3/build/Release/vscode-sqlite3.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@vscode/windows-ca-certs/build/Release/crypt32.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@vscode/windows-mutex/build/Release/CreateMutex.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@vscode/windows-process-tree/build/Release/windows_process_tree.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/@vscode/windows-registry/build/Release/winregistry.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/cursor-proclist/build/Release/cursor_proclist.node` | `.node` | 626/626 identified procedures returned; full discovery unknown |
| `resources/app/node_modules/kerberos/build/Release/kerberos.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/keytar/build/Release/keytar.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/native-is-elevated/build/Release/iselevated.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/native-keymap/build/Release/keymapping.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/native-watchdog/build/Release/watchdog.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/node-pty/build/Release/conpty/conpty.dll` | `.dll` | Not recovered in this pass |
| `resources/app/node_modules/node-pty/build/Release/conpty/OpenConsole.exe` | `.exe` | Not recovered in this pass |
| `resources/app/node_modules/node-pty/build/Release/conpty.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/node-pty/build/Release/conpty_console_list.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/node-pty/build/Release/pty.node` | `.node` | Not recovered in this pass |
| `resources/app/node_modules/node-pty/build/Release/winpty-agent.exe` | `.exe` | Not recovered in this pass |
| `resources/app/node_modules/node-pty/build/Release/winpty.dll` | `.dll` | Not recovered in this pass |
| `resources/app/node_modules/windows-foreground-love/build/Release/foreground_love.node` | `.node` | Not recovered in this pass |
| `resources/app/resources/helpers/crepectl.exe` | `.exe` | Not recovered in this pass |
| `resources/app/resources/helpers/cursorsandbox.exe` | `.exe` | Not recovered in this pass |
| `resources/app/resources/helpers/node.exe` | `.exe` | Not recovered in this pass |
| `tools/inno_updater.exe` | `.exe` | Not recovered in this pass |
| `tools/vcruntime140.dll` | `.dll` | Not recovered in this pass |
| `unins000.exe` | `.exe` | Not recovered in this pass |
| `vk_swiftshader.dll` | `.dll` | Not recovered in this pass |
| `vulkan-1.dll` | `.dll` | Not recovered in this pass |

## WASM boundary

The separate inventory has 22 WASM file paths representing 15 distinct payloads.
All 15 were validated and decoded to WAT; 10 have complete REA records.
WAT decoding is not original-source recovery or proof of behavioral parity.

The [13 October follow-up](rea-wasm-follow-up.md) rechecked all 15 original
payload and WAT hashes, traced the two embedded HTTP-parser byte strings to
their exact `.wasm` counterparts, and identified the missing build inputs.
All five missing complete records were retried: four still hit REA's producer
deadline and esbuild exceeds its input profile. Complete-record coverage
therefore remains 10/15; the decoded-WAT coverage remains 15/15.

## Native build provenance follow-up

On 13 October, the nearest shipped `package.json` was inspected for all 30
`.node` paths in the 52-PE inventory. These paths map to 25 distinct package
name/version pairs. Twenty-five paths have a declared repository URL in their
nearest manifest. None of the 30 nearest package directories contains
`binding.gyp`; four contain a `src` directory, which alone does not establish
the presence of native implementation source. These counts describe package
metadata, not successful native rebuilds or confirmed binary ancestry.

Priority dependencies for an independent build include:

| Component | Shipped package/version | Remaining build question |
| --- | --- | --- |
| Terminal | `node-pty@1.1.0-beta42` | Match Electron ABI, platform toolchain, PTY implementations and bundled Windows console helpers |
| Filesystem notifications | `@parcel/watcher@2.5.1-cursor` | Recover the downstream changes as well as the named upstream source |
| Policy notifications | `@anysphere/policy-watcher@1.3.2-cursor.2` | Establish the downstream source delta and local policy contract |
| Agent syntax parsing | `tree-sitter@0.21.1`, `tree-sitter-bash@0.21.0` | Recover exact native binding inputs and reconcile the two shipped Bash addon layouts |
| Agent database | `better-sqlite3@12.11.1` | Pin the matching SQLite amalgamation, compile options and Node/Electron ABI |
| Process inventory | `cursor-proclist@1.0.0` | Reconstruct native implementation behind the observed JavaScript exports and validate process/memory behavior |
| Chunking and retrieval | `@anysphere/tree-chunk-napi@0.0.0`, `@anysphere/file-service@0.0.0` | Package versions do not identify source commits; native reconstruction or tested replacements remain required |

The process-list wrapper exposes `cursor_proclist_scan_async` and
`cursor_proclist_system_memory`. Its documented process tuples include PID,
parent PID, name, extension ID, CPU time, memory, arguments, owner agent ID and
request ID. Its memory wrapper documents a native result on macOS and fallback
elsewhere. These are shipped wrapper observations, not native runtime tests.
They supply an acceptance contract for a future replacement; the existing
626-procedure pseudocode result does not itself satisfy that contract.

Full local package paths and SHA-256 identities are in ignored
`build/wasm-follow-up/native-provenance.json`; its report digest is recorded in
the WASM follow-up. The native reconstruction count is unchanged: one addon
has pseudocode results, and zero of the 52 listed PE files has an established
independent source rebuild in this recovery pass.

## Source identity

Source: local recovery `native/inventory.json` (ignored evidence, not shipped
in this repository). Individual input digests remain in that source file.

Inventory file SHA-256: `d5782271de5a0b156de568fe93aae4a056532970f0695b19dae7a0d6e95e30bb`.
