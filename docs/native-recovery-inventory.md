# Native recovery checklist

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

## Source identity

Source: local recovery `native/inventory.json` (ignored evidence, not shipped
in this repository). Individual input digests remain in that source file.

Inventory file SHA-256: `d5782271de5a0b156de568fe93aae4a056532970f0695b19dae7a0d6e95e30bb`.
