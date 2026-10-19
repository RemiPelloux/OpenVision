# Project-data destinations (OV-501)

**Linux x64 only** (Omarchy, Hyprland Wayland, Node 26.8.1). Source-build scope:
no portable package was tested and the preview.7 payload is unchanged.
Windows and macOS behavior is not covered by this evidence.

**OV-501: Unknown → Partial.** Native capture now covers every workload clause
on Linux, and two hosted project-data paths are blocked at their owners.
The story is not Verified, because project-derived package names still reach
`registry.npmjs.org` through TypeScript Automatic Type Acquisition. That fix
belongs to OV-1005. Other platforms are also uncaptured.

## 19 October 2026 — extended workloads, addon inventory and capture fixes

**Linux x64 only**, in a cloud container: Ubuntu 24.04, kernel 6.18, 4 CPUs,
15 GB RAM, Xvfb, Node 24.18.0. Source build of 3.21.13 with every change on
branch `ov/data-telemetry`, including the merged `ov/mcp-safety`. Controlled
loopback fixtures only. Worker report:
[data-telemetry](../verification/worker-reports/data-telemetry.md).

### What the verifier now covers

`npm run verify:data-destinations` keeps the 16 October method and workload.
The run then adds these steps, each with its own canary:

| Phase | Action | Canary |
| --- | --- | --- |
| terminal | Controlled `bash --noprofile --norc`: `echo` into a marker file, then `git add` and `git commit -m` | `OVC-TERM-…`, `OVC-TCOMMIT-…` |
| commit-message | Stage a file, run **Generate Commit Message**, then **Git: Commit Staged** | `OVC-STAGED-…` (staged diff) |
| debug | **Debug: Start Debugging** of a project `.cjs` file (js-debug, `internalConsole`) | `OVC-DEBUG-…` |
| mcp | Write an MCP STDIO fixture into the profile's `mcp.json`, then have the Agent call `memory_probe` (approved with Run) | the fixture's per-run output marker |
| vsix-install | **Extensions: Install from VSIX…** of a local fixture package (simple file dialog) | `ovc-vsix-…` (extension name and code) |

New checks: `terminal`, `commitMessage` (the staged canary reaches the provider
and the commit uses the generated message), `debug`, `mcp`, `vsixInstall`,
`addonsInventoried`, `noAddonDirectSockets`, `noNonProviderTraffic` (0 captured
requests, 0 connections, 0 direct connects) and `hostExitRequested`.

**Native addon inventory.** The verifier reads `/proc/<pid>/maps` of the whole
owned family every 3 s, so short-lived processes and late loads are counted. It
records every mapped `.node` file, and every `.so` shipped in the application
tree or the Electron host directory, with path, SHA-256, owning roles and pids.
strace thread ids are mapped to their process through clone records, so a
connect from a worker thread is attributed to the process that maps the addon.
The 16 October check compared thread ids with process ids, so a connect from a
worker thread could not match. The known list is
`desktop/fixtures/linux-x64-addons-3.21.13.json`. An addon missing from it, or
with a different digest, is unknown. An unknown addon in a process that makes
a direct connect fails `noAddonDirectSockets`.

**Host exits.** Every host exit is recorded with phase, code, signal and whether
the verifier requested it. A `heartbeat.json` (phase, `MemAvailable`, memory PSI)
is written every 5 s and outlives a verifier that is itself stopped.
`--signal-trace` adds signal deliveries, `kill`/`tgkill` calls and process exits
of the whole family to the strace log.

### Capture defects found and fixed (harness)

1. **Names resolved but never connected (observed).** The capture DNS socket was
   bound to `0.0.0.0`. Replies to queries sent to `127.0.0.53` therefore left
   from `127.0.0.1`, and Chromium's connected UDP resolver dropped them. The name
   was recorded, but the request never reached the capture
   (`logs/data-destinations-1K5w71`: 12 lookups of `marketplace.cursorapi.com`,
   0 connections). The resolver address now has its own socket.
2. **Lookups suppressed (observed in a scratch namespace).** With only
   `127.0.0.1` configured, glibc's `AI_ADDRCONFIG` sent no IPv4 query at all. The
   namespace now adds `198.18.0.2/32` on `lo`. Both namespaces still have no route
   off the machine.
3. **strace hung the Agent (observed).** Stopping on every syscall of the family
   left the BYOK Agent turn after "Using agent backend" with no connect attempt in
   4 of 5 runs (`V57pK6`: 300 s). Without strace it answered in 1.6 s (`kYpbAA`).
   strace now uses `--seccomp-bpf`. With it, the Agent answered in about 2 s in
   every later run.
4. **Explicit proxy made opt-in (`--proxy`).** With `--proxy-server` the Agent
   turn also stalled (`Zkbnby`; the documented OV-1005 proxy stall). The
   transparent catch-alls terminate TLS by SNI, so the capture needs no proxy.
5. `tcpdump` needs `-Z root` in the user namespace. Inherited proxy variables
   (`HTTPS_PROXY`, `NO_PROXY`, `npm_config_*proxy`, …) are removed from the app
   environment; otherwise Node clients would reach a host proxy on loopback,
   where the capture sees only a loopback connection.

### Product leak found and fixed (owner change)

**Local VSIX install → Marketplace (observed).** Installing a local VSIX made two
Marketplace queries (`logs/data-destinations-daLpz9`):

- The shared-process install task's `updateMetadata` sent
  `POST https://marketplace.cursorapi.com/_apis/public/gallery/extensionquery`
  with `filterType 7 = "openvision-fixture.ovc-vsix-…"`. That is the identity of
  a possibly private, locally built extension.
- The workbench's `matchInstalledExtensionsWithGallery` sent a CORS preflight
  for the same query (`bzFObc`). Its POST was never sent because the capture
  answered 503.

Owner fix (`desktop/network-defaults.mjs`, section "Local VSIX installs"):
`skipVsixGalleryMetadata` (shared process and CLI) and `skipVsixGalleryMatch`
(desktop and Glass workbench). A local install records no Marketplace metadata,
and the workbench leaves `source: "vsix"` extensions out of the Marketplace
match. Installs from the Marketplace are unchanged. Owner decision pending: a
VSIX-installed extension is no longer linked to its Marketplace listing for
update checks.

No project data was in these requests. The canary was the extension's own name.

### Result (final build)

`logs/data-destinations-fNkZXe` (default timing: 60 s indexing idle, 30 s final
idle), the series below and the three final runs `PvCKfo`, `DOBY9j` and
`W8SO9C` (`npm run verify:data-destinations`, all first-time passes). Every check passed, including all ten workload
checks. Observed:

- **Provider:** 11 requests, 459,388 B (1 model list, 5 Agent, 1 Tab, 1 Quick
  Edit, 1 commit message, 2 Agent turns for MCP). Canaries reached it during
  Agent, Tab, Quick Edit, commit-message generation and MCP: the staged diff
  and the MCP tool output.
- **Everything else:** 0 non-provider requests, 0 connections, 0 DNS names,
  0 SNI names, 0 direct connects (strace, 295–306 processes).
  - The terminal echo, the terminal commit, the debug output and the VSIX
    reached only local fixtures (marker files, the project's Git history, the
    profile's extensions directory).
  - The MCP STDIO child talked only to its loopback fixture.
- **Addons:** 13 inventoried, all known, none in a process with a direct
  connect.
  - Main process: `spdlog`, `vscode-sqlite3`, `cursor_proclist`, `keymapping`.
  - Extension and utility hosts: `file_service` (retrieval host only,
    `3b0290b1…`, unchanged), the agent-exec `tree-chunk-napi` and tree-sitter
    bindings, `watcher`, `pty`.
  - Electron host shared objects: `libffmpeg.so`, and `libEGL.so` /
    `libGLESv2.so` in the GPU process.
- **Local mode:** `Local mode enabled — codebase indexing disabled`. The Agent
  tool list again has no semantic or codebase search tool.

### Clean-quit flake during idle indexing (`0nIEiN`, 17 October)

**Ten consecutive runs** with `--signal-trace` and default timing, on the final
build: `jfA9IJ`, `t25YKC`, `5ltB4D`, `53UQsE`, `Hg5QsV`, `XmSgeo`, `G7nAF7`,
`5WYHh6`, `okrbs5`, `ThMm72`.

- **10 of 10 passed first time**, with all 18 checks each time.
- Each run: 11 provider requests and 0 non-provider requests, connections, names
  or direct connects.
- No unrequested host exit occurred. The Electron main process received no
  signal and exited with code 0 at the requested quit.
- Heartbeats show at least 8.7 GiB `MemAvailable` and memory PSI `some avg10`
  of 0.
- First Agent provider request: 1.6–2.2 s after the prompt.

**Controlled reproductions** (helper scripts under the ignored `logs/probes/`;
only processes of the owned run were matched, by command line):

| Experiment | Run | What happened |
| --- | --- | --- |
| Stop only the verifier process (SIGKILL) 40 s into idle indexing | `logs/data-destinations-FEIxhG` | Heartbeat stops at `idle-indexing`, no `result.json`. **The app did not quit:** 12 owned processes were still running 300 s later. The main process exited with code 1 only when the Xvfb session ended |
| Send SIGTERM to the Electron main process 40 s into idle indexing | `nr1GT2`, then `70cXzZ` with the recording fix | **Same signature as `0nIEiN`:** a clean quit with code 0 within 0.6 s. The main log shows only extension hosts exiting with code 0. The verifier fails with "Target page … has been closed" during `idle-indexing` |

**Attribution (inferred):** the reported symptom is an external SIGTERM (or an
equivalent quit request) to the owned app. A product self-quit is not
indicated: none was seen in 12 traced full runs. A reaped verifier is not
either: the app outlives it. That is consistent with the agent-harness
stop recorded for `verify:idle-memory`. In `0nIEiN` the verifier stayed alive
and recorded the quit, so the signal reached the app and not the verifier. The
sender of the original events was never recorded and remains unknown.

**Hardening:**

- Every host exit is recorded. An exit after the window closed on its own is
  recorded as unrequested. The first run (`nr1GT2`) had mislabelled it
  "requested", because the renderer closes before the main process exits.
- The phase is kept (`windowClosedBeforeRequest`).
- `heartbeat.json` outlives a stopped verifier.
- `--signal-trace` names the main process's signal, its sender and whether the
  sender is outside the traced family (`70cXzZ`: SIGTERM from a pid outside the
  family, main exit 0 at +0.56 s).
- A recurrence now fails `hostExitRequested` and shows its cause.

### Still open

- Windows and macOS captures (moved to the platform stories).
- Signed-in account workloads (moved to the live/account story).
- Upload paths that need a positive server answer remain inferred from code. The
  owner fixes make them unreachable whatever the server answers.
- Extensions and MCP servers that users install themselves can open their own
  connections. This is an accepted residual. The MCP fixture here is a
  controlled STDIO child.

## 16 October 2026 — native capture and owner fixes

### Method

`npm run verify:data-destinations` (`desktop/verify-data-destinations.mjs`)
re-runs itself inside `desktop/data-destinations-namespace.sh`:

- an unprivileged user + network + mount namespace with no off-machine route.
  Every IPv4/IPv6 address is local (AnyIP).
- the verifier answers all DNS with `198.18.0.1`. Host resolver sockets
  (`systemd-resolved`, Avahi, machined) are masked, because without that mask
  lookups escaped the namespace through the filesystem.
- the app is launched with `--proxy-server` pointing to an owned decrypting
  proxy (CONNECT + TLS + HTTP/1.1/HTTP/2). Transparent catch-alls take
  ports 443 and 80, and nftables redirects every other TCP port to a raw
  catch-all.
- a per-run CA. Chromium uses `--ignore-certificate-errors`; Node uses
  `NODE_EXTRA_CA_CERTS` and `http.proxyStrictSSL: false`. A client that rejects
  the certificate is still recorded with its SNI and wire bytes.
- `strace -f -e trace=execve,connect,sendto` across the whole process family
  for attribution, `/proc/<pid>/maps` for addon loading, and `tcpdump` of any
  non-loopback packet.
- **Nothing is forwarded.** Every captured request receives a local 503.
  Behavior that would follow a real server answer is inferred from code and
  labeled that way.

The owned project contains a unique canary per run: file name, directory name,
file content, Git commit message, Git branch name and typed Quick Edit text.
Payloads are searched in every view (raw, content-decoded, each
Connect/gRPC envelope and its decompressed form). Each canary is searched as
UTF-8, UTF-16LE, base64 and URL encoding, plus SHA-256/SHA-1/MD5 of the file
content (hex, raw, base64). DNS names and SNI are searched too.

Fixed workload, in order: startup; idle indexing (60 s); Find in Files for the
content canary; Quick Open of the canary file; adding a loopback model provider
and selecting it for Tab; Agent (Read, Grep and Glob over the canary file);
Tab completion; Quick Edit with the typed canary; final idle (30 s); quit.

### Observed destinations (final run, `logs/data-destinations-62y0eg`, all checks pass)

| Destination | Calls in workload | Data observed | Class | Disposition |
| --- | --- | --- | --- | --- |
| `127.0.0.1` loopback provider fixture | 8 requests, 309,612 B (1 model list, 5 Agent, 1 Tab, 1 Quick Edit) | Canaries during Agent, Tab and Quick Edit only | Configured model provider, user-initiated | Allowed |
| `api2.cursor.sh` `/extensions-control` | 1 | None (GET) | Original hosted service | No project data; open, outside OV-501 |
| `api2.cursor.sh` `MCPRegistryService/GetKnownServers`, `DashboardService/ListMarketplacePlugins`, `GetTeamAdminSettingsOrEmptyIfNotInTeam` (×6), `GetTeamReposOrEmptyIfNotInTeam`, `GetUsageBasedPremiumRequests` | 10 | Empty bodies; client headers only (OS, arch, version, timezone, device memory, client key) | Original hosted service | No project data; open |
| `api2.cursor.sh` `AnalyticsService/BootstrapStatsig` | 2 | 2-byte body | Telemetry | Reported to OV-1005 |
| `api2.cursor.sh` `CppService/RecordCppFate` | 1 | Session UUID and file extension (`.js`) | Telemetry / project metadata | Reported to OV-1005 |
| `registry.npmjs.org` (`npm install types-registry`; `/-/npm/v1/security/advisories/bulk` in other runs) | 3 | Package names derived from the project and Node typings | Project-derived metadata | TypeScript ATA; OV-1005 owns the default change; blocks Verified |
| `redirector.gvt1.com` `/edgedl/chrome/dict/en-us-10-1.bdic` | 1 | None | Chromium spellcheck download | No project data; open |

DNS names observed: only `registry.npmjs.org` (npm resolves directly). Chromium
and the extension host used the proxy. SNI names observed:
`api2.cursor.sh`, `registry.npmjs.org` and `redirector.gvt1.com`. No canary appeared
in any DNS name or SNI.

**Process attribution (strace, 298 processes):** the only connections that
bypassed the proxy came from the TypeScript ATA `npm install` child (3 connects
to port 443). The extension host made 13 proxy connections and the main process
made 2. The extension host is the only process that maps
`file_service.linux-x64-gnu.node` (`/proc/<pid>/maps`), and it made **no
direct socket connection**. All its traffic went through the proxy, which the
addon's own rustls/hyper stack does not use. On this workload the native
file-service addon is loaded and opens no sockets.

**Local mode:** the retrieval log records
`[FastIndexer] Local mode enabled — codebase indexing disabled`. No
`RepositoryService` (handshake, Merkle sync, `FastUpdateFileV2`, index
creation), semantic-search or `CodebaseSnapshotService` request was seen in any run.
The Agent tool list contains no semantic or codebase search tool (Shell, Glob, Grep,
AwaitShell, Read, Delete, StrReplace, Write, EditNotebook, TodoWrite, WebSearch,
WebFetch, GenerateImage, AskQuestion, Task, GetMcpTools, FetchMcpResource,
SwitchMode, CallMcpTool). Find in Files and Quick Open caused no outbound request.

### Leaks found and fixed

1. **`CmdKService/RerankCmdKContext` → `api2.cursor.sh` (observed).**
   Quick Edit uses the configured provider, but its context gatherer also sent
   the open file's contents, the canary file and directory names, and the typed
   instruction to the hosted reranker. This happened 3 times during the edit,
   and twice more during the following idle period (18,955 B decrypted,
   `logs/data-destinations-beLulW`). Owner fix: the `rerankCmdK` and
   `rerankTerminalCmdK` methods (desktop and glass workbench) now refuse locally
   before any client is created. The callers already tolerate a failed rerank
   and keep the local context order. Quick Edit still completes natively, so
   this needs no UI explanation; the feature remains available.
2. **`FileSyncService/FSIsEnabledForUser` → `api2.cursor.sh` (observed; upload
   inferred).** It ran during Tab (38-byte body: a client UUID; no credential
   header). Per the recovered owner, a positive answer would enable
   `FSUploadFile`/`FSSyncFile`, which send file bodies and paths (inferred,
   because the capture never answers positively). Owner fix:
   `isEnabledForUserFromServer` in `cursor-always-local` answers "disabled"
   locally. Upload, sync and config already check that value; the log now shows
   `File sync is disabled`. Tab uses the configured provider and is unaffected.

Implementation: `desktop/project-data-customization.mjs`, installed by
`build:desktop` before extension-integrity regeneration. Both transforms are
AST-located and refuse missing, ambiguous or changed contracts. The first
change keeps an immutable backup under ignored `backups/project-data/`. The
installer is idempotent: a repeat build leaves the workbench SHA-256 unchanged
(`5bb5827626a8a917e75f810831670ab791eeb3e31c9967963fb2e5bd947b07d2`).
Patched `cursor-always-local` SHA-256:
`1a263b53c3b27d577c9f76cb17b9c89df051ef88ce0ec0ba16ae51e20e170114`.
Retrieval entry: `139ebdbf586cac364fc502bfc03891dccfd6e744d1a6e3414a7139e33cdd4e10`.
File-service addon: `3b0290b101e8d8f772b829689e5cdc1b082608a4596be0627f3d86c3a76b7cb0`.

### Measurements (fixed workload, outbound to non-provider hosts)

| Run | Build | Timing | Decrypted requests / bytes | Connections / wire bytes sent | Hosted requests with canaries |
| --- | --- | --- | --- | --- | --- |
| `beLulW` (before) | No owner fix | 20 s idle, 5 s final | 21 / 33,642 B | 19 / 42,957 B | 5 rerank (content, names, typed text) |
| `MkQ6ju` | Rerank fix | 20 s idle, 5 s final | 18 / 15,705 B | 16 / 25,903 B | 0 |
| `c9gdPW` | Rerank fix | 60 s idle, 30 s final | 17 / 15,744 B | 15 / 23,046 B | 0 (one `FSIsEnabledForUser`) |
| `62y0eg` (after) | Rerank + file-sync fixes | 60 s idle, 30 s final | 18 / 15,705 B | 16 / 25,903 B | 0; no file-sync request |

On the same short timing, the rerank fix removes 3 requests and 17,937
decrypted bytes (−53%), and 17,054 wire bytes. On the longer run it
removes five rerank requests (18,955 B). Provider traffic is unchanged at 8 requests and
309,612 B. ATA requests vary between runs (`types-registry` GET versus advisory
POST), so per-host counts differ by ±1. One full-length attempt
(`0nIEiN`) ended when the owned app quit cleanly about 50 s into the idle phase,
with no logged cause. The immediate repeat passed; the event is recorded,
not explained.

### Commands

```sh
npm ci --prefix tooling
OPENVISION_RECOVERY_DIR=<recovery-3.21.13> npm run build:desktop   # twice; idempotent
npm run test:data-destinations      # 13 tests
npm run verify:data-destinations    # optional: OV501_IDLE_MS, OV501_FINAL_IDLE_MS, --no-strace
```

### Open gates

1. ~~TypeScript ATA sends project-derived package names to `registry.npmjs.org`.~~
   **Closed on Linux x64, 18 October 2026.** With the OV-1005 network defaults
   (ATA off), `logs/data-destinations-GTNpzM` shows 0 non-provider requests,
   0 connections and no host. All 9 checks pass. See the
   [telemetry report](rea-telemetry-linux.md).
2. Hosted non-project calls (extensions control, MCP registry, marketplace,
   team/usage dashboard) and the Chromium spellcheck download. No project data
   was observed in them. In the same 18 October run, none of them was made.
3. Windows and macOS captures; workloads beyond this fixed set (debugger,
   terminals, Git commit-message generation, MCP, extensions).
4. A real-server answer was never allowed. Upload paths that depend on one are
   inferred from code; the owner fixes make those paths unreachable whatever the
   server would answer.

## 16 October 2026 — static trace (first pass)

| Operation / owner | Possible project data | Destination in code | Status in OpenVision build | Evidence class |
| --- | --- | --- | --- | --- |
| Codebase indexing (`cursor-retrieval` FastIndexer): `RepositoryService/FastRepoInitHandshakeV2`, `SyncMerkleSubtreeV2`, `FastUpdateFileV2`, `FastRepoSyncComplete`, `EnsureIndexCreated` | File contents, relative paths (plaintext or AES-256-CTR), Merkle hashes | Credential-supplied `repoBackendUrl` (`repo42.cursor.sh` in the bundle) | Disabled by `buildFlags.localMode = true`; **now observed natively** | Static + native |
| Semantic search (`SearchRepositoryV2`, `SemSearchFast`, `SemSearch`) | Query, encrypted path filters | Same repository backend | Depends on indexing; no Agent tool exposes it; not observed | Static + native absence |
| File sync for Tab (`FileSyncService/*`) | File body, filename, edit history | Cursor backend | Enablement query observed, now blocked at owner | Static + native |
| Codebase snapshot upload (native `CodebaseSnapshotClient`) | Repository packfiles | Credential-supplied `backendUrl` | Never registered (telemetry customization); not observed | Static + native absence |
| Native `@anysphere/file-service` addon | Anything its clients are given | Links `socket`/`connect`/`getaddrinfo`/`send`; contains rustls/hyper strings | Loaded in the extension host; no direct sockets observed | Static + native |
| `cursor-file-service` extension | None | None | `dist/main.js` exports only `DUMMY = 1` | Static |
| Cmd-K (`CmdKService/*`) | Instruction, selection, file context | Cursor backend | Reranker observed leaking and now blocked; streaming edit uses the provider | Static + native |

Recovered retrieval bundle SHA-256 (3.21.13 readable):
`abf50fc1197106c937360ca4369e477dd6fd85912ba4eee469def5b67d81872d`.
