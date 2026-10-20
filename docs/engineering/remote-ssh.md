# Remote SSH: server input, resolver and key boundary

OV-703, SSH-to-Linux part. Written 19 October 2026, updated 20 October after the owner decisions, for the 3.21.13 runtime
input, Linux x64 client and Linux x64 host. User steps are in the
[Remote SSH guide](../guides/remote-ssh.md). Native evidence is in
[Remote SSH on Linux x64](../verification/remote-ssh-linux-2026-10-19.md).

## Scope

| Environment | State |
| --- | --- |
| SSH, Linux x64 client → Linux x64 host | The declared matrix (owner decision, 20 October). Implemented and natively verified with a controlled local host |
| SSH from Windows or macOS clients, or to non-x64 hosts | Not covered. The resolver refuses hosts other than `Linux x86_64` |
| WSL | Moved to OV-901 (owner decision) |
| Dev containers | Excluded from this release (owner decision): no supported daemon path |
| Agent in remote windows | Local only (owner decision): refused in remote windows so keys never leave the client (see [Provider keys](#provider-keys-stay-local)) |

## Why the server is the editor's own build

The 3.21.13 input's `product.json` names `commit`
`e44a49c17e334d442e58bbde931d791200f014a0`, `vscodeVersion` 1.128.0 and a
vendor download template
`https://cursor.blob.core.windows.net/remote-releases/${commit}/vscode-reh-${os}-${arch}.tar.gz`.

A stock VS Code 1.128.0 server (Microsoft build `fc3def67…`) cannot serve this
client. This was checked against both archives on 18 October:

| Observation | Consequence |
| --- | --- |
| Both servers refuse a client whose commit differs: `if (m && v && m !== v) return u("Client refused: version mismatch: renderer: … !== server: …")` in `out/server-main.js` | The server commit must equal the client commit, `e44a49c…014a0` |
| The client's extension-host RPC table has 16 proxy identifiers the stock server lacks (for example `MainThreadCursor`, `MainThreadCursorAgentHost`, `ExtHostShellExec`, `MainThreadSocketProvider`); the stock server has 37 the client lacks | Proxy identifiers are assigned in declaration order, so even a forced handshake would misroute every call |
| Microsoft's server build is licensed for use with Visual Studio Code only | Not usable for OpenVision regardless of compatibility |

So `npm run prepare:remote` uses the server built from the same commit as the
runtime input, the same way `prepare:desktop` uses the pinned AppImage:
downloaded once at preparation time, with size (118,681,163 bytes) and SHA-256
(`3ce1e778…edaff025`) pinned in `desktop/remote-server.mjs`. It is never
fetched while connecting.

## Server customization (`desktop/remote-server.mjs`)

The archive is extracted into `build/remote/stage` from the verified input on
every run. The listed bundles are formatted with oxfmt (the anchors the client
customizations use) and transformed:

| Target | Transform (shared with the client build) |
| --- | --- |
| `product.json` | Branding (`OpenVision Server`, `openvision`), `serverApplicationName` `openvision-server`, `serverDataFolderName` `.openvision-server`, `tunnelApplicationName` `openvision-tunnel`, local-only `serverDownloadUrlTemplate`, telemetry product keys (`telemetryProduct`), extension-control URL removed. Update, download, release-notes, issue and tip URLs removed |
| Inline product literal in `out/server-main.js`, `out/vs/workbench/api/node/extensionHostProcess.js`, `out/vs/platform/terminal/node/ptyHostMain.js` | Replaced by the customized product (`inlineServerProduct`; exactly one literal per bundle carrying the pinned commit) |
| `out/server-main.js` | Core telemetry (`disableCoreTelemetry`), machine-wide device id file (`disableDeviceIdFile`), argv.json in the server data folder (`isolateEnvironmentProfileHome`), no Marketplace metadata lookup for VSIX installs (`skipVsixGalleryMetadata`) |
| `out/vs/platform/terminal/node/ptyHostMain.js` | argv.json in the server data folder |
| The remote extension bundles in `nodeTargets` (agent exec and host, daemon, local agent runtime, retrieval, MCP, browser automation, NDJSON ingest, extension host) | Profile home (`isolateNodeProfileHome`); the server copies match the client drift counts exactly |
| `out/vs/workbench/api/node/extensionHostProcess.js` | Core telemetry with the Sentry owner, extension-host telemetry |
| `extensions/cursor-always-local/dist/main.js` | Agent and completion telemetry, anonymous hosted calls refused |
| `extensions/cursor-agent-host/dist/main.js`, `…/agent-host-daemon/dist/bin/daemon.cjs` | Agent telemetry, anonymous hosted calls refused |
| `extensions/cursor-retrieval/dist/main.js`, `extensions/ms-vscode.js-debug/src/extension.js` | Codebase and debugger telemetry |
| `extensions/typescript-language-features`, `extensions/npm` manifests | Automatic type acquisition and npm package lookups off |
| `bin/cursor-server`, `bin/remote-cli/cursor` | Renamed to `bin/openvision-server` and `bin/remote-cli/openvision`. The launcher sets a default `VSCODE_OPENVISION_PROFILE_HOME` of `<server data>/profiles/default` (`remoteLauncher`) |

The result is packed with sorted names, fixed owner and the input build date,
and gzip without a name or time. Repeated runs give the same SHA-256. With
the profile isolation (20 October) it is `01e1a243…3e11acf`, 121,069,938
bytes; before it, `df3f62d1…4a3ff25`.
`build/remote/manifest.json` records the input, the output hash and the
customized files.

### Remote profile isolation

On the client, agent data, MCP state, plugins and sandbox policies resolve
from the profile home, `<user-data-dir>/User` (`profile-home-paths.mjs`), not
`~/.cursor`. The remote extension host runs the same extensions on the host,
where they wrote `~/.cursor` under the remote account. Separate local profiles
also shared it there.

Now:

- The server copies of the `nodeTargets` bundles get the same
  `isolateNodeProfileHome` transform. They read `VSCODE_OPENVISION_PROFILE_HOME`
  and fail closed without an absolute path.
- The resolver (`remoteProfileHome`) computes
  `<remote home>/<serverDataFolderName>/profiles/<key>` per window. `<key>` is
  the first 16 hex digits of the SHA-256 of the local profile directory, taken
  from the resolver's own `globalStorageUri`, so each local user-data folder
  or named profile gets its own key. It is passed through the resolved
  authority's `extensionHostEnv`, after the loop that exports the forwarded
  agent socket to terminals, so it reaches only the remote extension host.
- The launcher default (`profiles/default`) covers a server started without
  it (for example by `remote.SSH.serverDownloadUrlTemplate` set by the user).
- The workbench-command-based global-path patches (`global-paths.mjs`,
  `subagent-paths.mjs`) are not applied on the server. They would resolve the
  client's path. Their readers fall back to the `.cursor`-joined paths that
  the transform above already redirects (`.cursor` and `.claude` joins).
  Reads of other tools' roots on the host (for example `~/.codex`) are
  unchanged.

Verified: the host starts without `~/.cursor` and ends without it; two local
profiles get two different remote profile homes, matching the computed keys,
and the remote extension host reports its own.

## Resolver choice

| Candidate | Licence | Result |
| --- | --- | --- |
| `jeanp413.open-remote-ssh` 0.4.0 (Open VSX, 5 October 2026) | MIT (`LICENSE.txt` in the VSIX) | **Chosen.** Full remote extension host over `ssh2`; reads `serverApplicationName`, `serverDataFolderName` and `serverDownloadUrlTemplate` from `product.json`. 0.4.0 includes a security fix (#360, local tunnel port bound to the local address) |
| `Kelvin.vscode-sshfs` 1.27.0 | GPL-3.0 | Not a remote extension host (file system provider only) |
| `ms-vscode-remote.remote-ssh`, `anysphere.remote-ssh` | Proprietary, product-restricted | Excluded |

The VSIX is pinned by size (198,903 bytes) and SHA-256
(`4cf4d372…68b6634b`, matching Open VSX's published `.sha256`). The build
(`desktop/remote-ssh-customization.mjs`) re-extracts it into
`source/app/extensions/open-remote-ssh` every time and applies these changes,
each with a drift guard:

| Change | Why |
| --- | --- |
| `openvisionUploadServer` runs before the Linux install script | Verifies the bundled archive against `product.json` (`openvisionRemoteServer.sha256`). It refuses hosts other than `uname -sm` = `Linux x86_64`, skips if the server binary already exists, and otherwise streams the archive over an exec channel of the existing connection with `umask 077`. It checks `sha256sum` on the host before moving the archive into place |
| Install script: `openvision-local:` template branch | Moves the uploaded archive into place instead of `wget`/`curl`/`fetch`. A user-set URL template still downloads, by explicit choice |
| `--remote-auto-shutdown-without-delay` | The server stops when its last extension host closes, instead of 300 s later |
| `hostVerifier` at both connection sites (jump hosts and final host) | 0.4.0 accepts **any** host key. OpenVision checks `UserKnownHostsFile` (default `~/.ssh/known_hosts`, `known_hosts2`) and `/etc/ssh/ssh_known_hosts`, including hashed entries, `[host]:port`, `HostKeyAlias`, negated patterns and `@revoked`. Unknown or changed keys are refused with the fingerprint. Only `StrictHostKeyChecking no` accepts an unknown key; a changed key is always refused |
| `remote.SSH.enableDynamicForwarding` default `false` (manifest and call-site fallback) | Otherwise every connection opens a local SOCKS proxy into the remote network |

The client `product.json` gets the OpenVision server names, the local-only
template, `openvisionRemoteServer` (archive path, hash, size and commit), the
`resolvers` and `contribViewsRemote` proposals for the resolver, and a single
remote tip pointing at the bundled resolver. The original tips pointed at
proprietary marketplace resolvers. Without a prepared archive, the build
removes the resolver and the tips, and keeps the local-only template.

## Provider keys stay local

A remote window registers the Agent runtime (`cursor-agent-exec`, workspace
kind) in the remote extension host. The workbench builds its provider
configuration in `getLocalAgentProviderConfig` and
`getLocalInferenceProviderConfig`. That configuration carries the selected
key, every configured provider's key in `openvisionProviders`, custom headers,
and the stored-key fallback. The workbench then sends it over extension-host
RPC (`$startLocalAgentRun`, `$runLocalInference`, `$fetchLocalProviderModels`).
The provider request would then originate on the remote host.

`desktop/remote-provider-guard.mjs` puts `assertLocalProviderWindow()`
(`desktop/model-providers.js`) first in both methods. It goes inside the
provider-selection error wrapper whichever transform runs first. In a window
with a `remoteAuthority` it throws `LocalProviderError` before any key is read,
and the chat shows "OpenVision does not send provider keys or Agent model
requests to remote hosts. Use the Agent from a local window." Local windows are
unchanged (`verify:agent` passes with the guard built in). Provider model
discovery from Settings uses main-process IPC and stays local.

Remote Agent support needs a local provider relay. One design: the main
process holds the key and injects it, the remote extension host gets only a
per-session token, and the route is an SSH reverse forward (`forwardIn`) on
the resolver's connection. Agent tools must also keep running remotely
(read/edit/command with approval and Stop). Neither is built.

## No Marketplace query for VSIX installs

OV-1005's decision is that local VSIX installs make no Marketplace lookup.
`main` already skipped the install-time metadata lookup and the
installed-extension match for VSIX installs (`skipVsixGalleryMetadata`,
`skipVsixGalleryMatch`). A third path remained, shown by a fresh local profile
opening a host where a VSIX is installed: the startup and periodic update
check (`checkForUpdates`, `extensions.autoCheckUpdates`) POSTed the
extension's identifier to `marketplace.cursorapi.com/_apis/public/gallery/extensionquery`.
The stack, captured in the renderer, is `checkForUpdates` →
`galleryService.getExtensions`. `skipVsixUpdateCheck`
(`desktop/network-defaults.mjs`) leaves `source === "vsix"` out of that list in
both workbenches, and the server skips the metadata lookup for VSIX installs.
Extensions installed from the Marketplace are still checked. The verifier
now fails on any connect or lookup that leaves either machine, in every phase.

## Reconnection grace

The server keeps a disconnected extension host for 3 hours
(`reconnectionGraceTime`), shortened to 5 minutes only when another client
connects, so that a laptop can sleep and resume. A window closed while its
extension-host connection is still reconnecting cannot send a graceful
disconnect. The same applies to a window reloaded in the first seconds of a
connection. In both cases the server then stays up for that grace period (seen
in development runs). Closing an established window stops it at once. The
verifier waits for a command round-trip to the same remote extension host
after each reconnect before closing.

## Verification hooks

`desktop/remote-ssh-host.mjs` runs as the separate remote account for one
session. It starts an unprivileged `sshd` on 127.0.0.1 (key-only, own host key,
`LogLevel VERBOSE` journal, optional `strace -f` of the whole sshd family). It
lists processes by uid with start time and command line, and signals only rows
re-read unchanged. It also scans the remote home for canaries and resets the
installed server. `desktop/verify-remote-ssh.mjs` drives the client and
traces it; the [evidence](../verification/remote-ssh-linux-2026-10-19.md)
lists the checks.

[Engineering index](README.md) · [Documentation index](../README.md)
