# Remote SSH: server input, resolver and key boundary

OV-703, SSH-to-Linux part. Written 19 October 2026 for the 3.21.13 runtime
input, Linux x64 client and Linux x64 host. User steps are in the
[Remote SSH guide](../guides/remote-ssh.md). Native evidence is in
[Remote SSH on Linux x64](../verification/remote-ssh-linux-2026-10-19.md).

## Scope

| Environment | State |
| --- | --- |
| SSH, Linux x64 client → Linux x64 host | Implemented and natively verified with a controlled local host |
| SSH from Windows or macOS clients, or to non-x64 hosts | Not covered. The resolver refuses hosts other than `Linux x86_64` |
| WSL | Windows only; moved to the Windows platform story |
| Dev containers | Not attempted: no container daemon in the Linux verification host, and no licence-compatible container resolver chosen |
| Agent in remote windows | Refused by design until local provider routing exists (see [Provider keys](#provider-keys-stay-local)) |

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
| `out/server-main.js` | Core telemetry (`disableCoreTelemetry`), machine-wide device id file (`disableDeviceIdFile`) |
| `out/vs/workbench/api/node/extensionHostProcess.js` | Core telemetry with the Sentry owner, extension-host telemetry |
| `extensions/cursor-always-local/dist/main.js` | Agent and completion telemetry, anonymous hosted calls refused |
| `extensions/cursor-agent-host/dist/main.js`, `…/agent-host-daemon/dist/bin/daemon.cjs` | Agent telemetry, anonymous hosted calls refused |
| `extensions/cursor-retrieval/dist/main.js`, `extensions/ms-vscode.js-debug/src/extension.js` | Codebase and debugger telemetry |
| `extensions/typescript-language-features`, `extensions/npm` manifests | Automatic type acquisition and npm package lookups off |
| `bin/cursor-server`, `bin/remote-cli/cursor` | Renamed to `bin/openvision-server` and `bin/remote-cli/openvision` |

The result is packed with sorted names, fixed owner and the input build date,
and gzip without a name or time. Two runs gave the same SHA-256
(`df3f62d1…4a3ff25`), before and after the 19 October `main` update.
`build/remote/manifest.json` records the input, the output hash and the
customized files.

The client profile-home isolation (`profile-home-paths.mjs`,
`global-paths.mjs`) and the Agent provider patches are **not** applied to the
server. They depend on `VSCODE_OPENVISION_PROFILE_HOME` and workbench commands
that a remote extension host does not have, and fail closed without them.
Remote extensions therefore keep their upstream data paths under the remote
user's home (for example `~/.cursor`). See Open risks in the
[worker report](../verification/worker-reports/remote-ssh.md).

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
