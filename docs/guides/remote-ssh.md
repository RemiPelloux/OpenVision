# Remote SSH (Linux x64 hosts)

OpenVision can open a folder on a Linux x64 machine over SSH. The editor UI,
your profile and your provider keys stay on your computer; files, terminals,
language servers and workspace extensions run on the remote host in the
OpenVision server.

Supported: a Linux x64 client opening folders on Linux x64 hosts, verified
with a controlled local host
([evidence](../verification/remote-ssh-linux-2026-10-19.md)). WSL is planned
with the Windows work, and containers are not part of this release. The Agent
runs only in local windows (see [Agent and provider keys](#agent-and-provider-keys)).

## Prepare once

```sh
npm run prepare:remote   # pinned server and resolver inputs, verified by SHA-256
npm run build:desktop    # bundles them into the OpenVision build
```

`prepare:remote` downloads two pinned inputs once and refuses any file whose
size or SHA-256 differs:

| Input | Why | Licence |
| --- | --- | --- |
| Remote server built from the same editor commit as the 3.21.13 input (`e44a49c…014a0`) | The server refuses any other client commit, and its extension-host protocol carries editor-specific calls, so a stock VS Code server cannot serve this client | Same terms as the runtime input |
| [open-remote-ssh](https://github.com/jeanp413/open-remote-ssh) 0.4.0 from Open VSX | Resolves `ssh-remote+` folders | MIT |

The server is customized like the desktop build (telemetry and anonymous
hosted calls disabled, update and download URLs removed), renamed to
`openvision-server`, and repacked as
`build/remote/openvision-server-<commit>-linux-x64.tar.gz`. The repack is
reproducible: the same input gives the same archive hash.

## Connect

1. Make sure you can log in with `ssh <host>` from a terminal. OpenVision
   reads `~/.ssh/config` (or `remote.SSH.configFile`) and your keys or agent.
2. Run **Remote-SSH: Connect to Host…** (or the remote indicator in the status
   bar) and choose the host.

On the first connection OpenVision uploads the prepared server over the SSH
connection into `~/.openvision-server` on the host and checks its SHA-256
there. Neither your computer nor the host downloads a server. Later
connections reuse the installed server.

### What is stored on the host

Everything OpenVision puts on the host lives in `~/.openvision-server`:

| Path | Contents |
| --- | --- |
| `bin/<commit>/` | The installed server |
| `extensions/` | Extensions installed on the host |
| `data/` | Server settings and logs |
| `profiles/<key>/` | Data of remote extensions (agent projects, MCP state, plugins), one folder per local OpenVision profile |

Nothing is written to `~/.cursor`, and two OpenVision profiles that connect to
the same host do not share their remote data. Your shell's own history in
the integrated terminal behaves as it would over `ssh`.

### Host keys

The host key must already be in `~/.ssh/known_hosts` (or the configured
`UserKnownHostsFile`). Unknown or changed keys are refused and the log names
the key fingerprint. Connect once with `ssh <host>` to review and record the
key. Only an explicit `StrictHostKeyChecking no` for that host accepts an
unknown key; a changed key is always refused.

### When the window closes

Closing the last window stops the remote server immediately, and its SSH
connection ends. If the network drops, the window reconnects. It also
reconnects after the host's SSH server restarts, and the remote extension host
keeps running while it waits.

## Agent and provider keys

Provider keys and model requests never leave your computer. In a remote window
the Agent runtime would run on the host and need your keys there, so the Agent
refuses to start and shows "OpenVision does not send provider keys or Agent
model requests to remote hosts". Use the Agent from a local window. Tab
completion and inline edit have not been verified in remote windows yet.

## Settings

| Setting | Effect |
| --- | --- |
| `remote.SSH.configFile` | SSH configuration file instead of `~/.ssh/config` |
| `remote.SSH.serverInstallPath` | Per-host install directory instead of `~/.openvision-server` |
| `remote.SSH.serverDownloadUrlTemplate` | Leave unset. Setting a URL makes the host download a server from it instead of using the uploaded one |

## Verifying on Linux

The native verifier needs a second unix account for the host. Run these once
as an administrator (the paths are relative to the repository):

```sh
sudo apt-get install -y openssh-server strace   # sshd binary; no system service is needed
sudo useradd --create-home ovremote
sudo install -d -o ovremote -g "$(id -gn)" -m 2770 logs/remote-ssh-control
```

For each verification session, start the host controller as that account. It
runs an unprivileged `sshd` on 127.0.0.1 with key-only login, keeps the sshd
log as the session journal and traces the remote process family:

```sh
sudo -u ovremote env -i HOME=/home/ovremote PATH=/usr/bin:/bin LANG=C.UTF-8 \
  node desktop/remote-ssh-host.mjs logs/remote-ssh-control &
xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- npm run verify:remote-ssh
xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- npm run verify:remote-ssh -- --agent
```

Each run writes `logs/remote-ssh-*/result.json`. To stop the controller, send
it SIGTERM or stop it from the verifier user with
`node -e "import('./desktop/remote-ssh-host.mjs').then(m => m.hostRequest('logs/remote-ssh-control', 'shutdown'))"`.
