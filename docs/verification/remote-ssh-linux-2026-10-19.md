# Remote SSH on Linux x64 — 19 October 2026

OV-703, SSH-to-Linux part. Branch `ov/remote-ssh`. The final runs used the
source build of this branch on top of `main` `eed4f19a`, with the verifier as
committed in the evidence commit. The design is in
[Remote SSH engineering](../engineering/remote-ssh.md); user steps are in the
[guide](../guides/remote-ssh.md).

## Round 2 — 20 October 2026

These changes follow the owner decisions ([worker report](worker-reports/remote-ssh.md#round-2--20-october-2026-owner-decisions)):

- Remote profile isolation.
- No Marketplace query for VSIX installs in any phase.
- Stricter capture and reconnect checks.

Clean rebuild of `fdc5164a` on `main` `95dd887d`; verifier `4904e8d3`.
Archive `01e1a24325d4dab44de289c3edd1ccedd02497eb24985e4133715bf1e3e11acf`
(121,069,938 bytes), reproduced exactly by the clean `prepare:remote`. Built
hashes: workbench `3c9bee267c03…`, resolver `b2f7004c7f44…`. Each run had its
own `XDG_RUNTIME_DIR`.

| Run | Mode | Result |
| --- | --- | --- |
| `remote-ssh-6QqiYI` | base | **Pass 21/21**, first attempt |
| `remote-ssh-pduyIw` | base | **Pass 21/21**, first attempt |
| `remote-ssh-agent-kkUoYa` | `--agent` | **Pass 25/25**, first attempt |
| `remote-ssh-agent-3aUnmD` | `--agent` | **Pass 25/25**, first attempt |
| `remote-ssh-jpVlBD` | base, previous verifier | Fail: heartbeat age measured after the reconnect round-trip (verifier ordering bug, fixed) |

New or changed checks in round 2:

| Check | What is required |
| --- | --- |
| `remoteExtensionHostActivation` | Also: the remote extension host's `VSCODE_OPENVISION_PROFILE_HOME` equals `~/.openvision-server/profiles/<sha256(local profile User directory)[0:16]>` |
| `reconnectAfterKilledConnection`, `reconnectAfterSshdRestart` | Also: a command run from the palette reaches the same remote extension host (pid), and that host beats after the drop |
| `separateRemoteProfileHomes` | A second local profile opening the same host gets a different remote profile home, reported by its own remote extension host |
| `noUpstreamDataFolderOnRemote` | The host starts without `~/.cursor` and ends without it. Home entries at the end: `.bash_history`, `.bash_logout`, `.bashrc`, `.openvision-fixture`, `.openvision-server`, `.ov-fixture`, `.profile`, `project` |
| `remoteProfileDataNamespaced` | The first profile's folder holds the remote extensions' data (57 entries: `.cursor/projects`, `plugins`, `sandbox-policies`, …) |
| `clientNoServerFetchOrExternalTraffic`, `remoteNoServerFetchOrExternalTraffic` | No external connect or DNS lookup in **any** phase; no tolerance for gallery lookups. The client trace must cover every launch (3 of 3) |

Observed across the four runs:

- **Remote traffic:** 219–232 traced connects, 0 external; client 0 external.
- **Sessions:** 16–18 accepted, all closed.
- **Heartbeat:** 160–432 ms behind after the killed connection.
- **Timings:** Quick Open ready in 2.8–4.6 s; connect 54.8–61.0 s under
  strace on both machines.

The sections below describe round 1 (19 October).

## Host and inputs

| Item | Value |
| --- | --- |
| Host | Linux 6.18.44 x64 container, 4 CPUs, 15 GiB RAM, no swap; Xvfb 1920×1080 and a private D-Bus per run |
| Client user | `ov` (uid 30033), unprivileged |
| Remote account | `ovremote` (uid 30034), created with `useradd --create-home ovremote` |
| Remote SSH server | OpenSSH 9.6p1 (`apt-get install openssh-server`), run unprivileged by `desktop/remote-ssh-host.mjs` on 127.0.0.1. No system service; key-only login; `LogLevel VERBOSE` journal |
| Tracing | strace 6.8 on both process families. Client: `strace -f` of the launched host. Remote: `strace -f` of the sshd listener, so the install script, server, extension hosts and terminals are all traced |
| Node | 24.18.0 |
| Runtime input | Cursor 3.21.13 AppImage, pinned (`prepare:desktop`) |
| Remote server input | `vscode-reh-linux-x64.tar.gz` for commit `e44a49c…014a0`, 118,681,163 bytes, SHA-256 `3ce1e778…edaff025` |
| Prepared archive | `openvision-server-e44a49c…014a0-linux-x64.tar.gz`, 120,162,873 bytes, SHA-256 `df3f62d1e73abdec2dff02398e4deba2a14a10ec12e23124b07075dbe4a3ff25` (identical on two `prepare:remote` runs) |
| Resolver | open-remote-ssh 0.4.0 VSIX, SHA-256 `4cf4d372…68b6634b` |
| Built hashes (all final runs) | Workbench `b59f3dd75795…`, resolver `f922714f0a71…`, install script `a04b87c5c64b…` |

These are controlled fixtures: a local "remote" account on the same machine,
fixture files, a fixture extension and a loopback model provider. No live
provider or real remote network is involved.

## Commands

```sh
npm run prepare:remote && npm run build:desktop     # as ov
sudo install -d -o ovremote -g ov -m 2770 logs/remote-ssh-control
sudo -u ovremote env -i HOME=/home/ovremote PATH=/usr/bin:/bin LANG=C.UTF-8 \
  node desktop/remote-ssh-host.mjs logs/remote-ssh-control &
xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- npm run verify:remote-ssh
xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- npm run verify:remote-ssh -- --agent
```

## Checks (each final run)

| Check | What is required | Result |
| --- | --- | --- |
| `changedHostKeyRefused` | A window whose `known_hosts` holds a different key for `[127.0.0.1]:port` logs "Host key changed" and installs nothing on the host | Pass |
| `openRemoteFolder` | `--folder-uri vscode-remote://ssh-remote+ovfixture/home/ovremote/project` shows the remote files; the status bar says `SSH: ovfixture` | Pass |
| `serverInstalledFromUpload` | The resolver log shows "Uploading the OpenVision server (120162873 bytes) over the SSH connection". The host has `~/.openvision-server/bin/<commit>/bin/openvision-server`, an empty upload folder, a product with `openvision-server`, `.openvision-server`, `openvision-local:${commit}/${os}-${arch}` and `OpenVision Server` and no update URL, and no `~/.cursor-server` | Pass |
| `noDynamicForwarding` | No SOCKS forwarder is created | Pass |
| `remoteQuickOpen` | Quick Open finds a remote file (2.0–4.2 s after the folder loaded) | Pass |
| `editSave`, `rename` | Typed text is on disk on the host after Ctrl+S; Explorer F2 renames the file on the host | Pass |
| `terminalUnicodeAsRemoteUser` | The integrated terminal prints `OV-42 OpenVision café 日本語 ovremote` | Pass |
| `terminalResize` | `stty size` on the host before/after a window resize: `13 74` → `13 52` | Pass |
| `terminalCtrlC` | Ctrl+C while `sleep 300` is the foreground job: that process (same pid and start time) is gone, the rest of the list is skipped, and `$?` is 130 | Pass |
| `remoteExtensionHostActivation` | A fixture VSIX installed with `openvision-server --install-extension` activates without a reload, as uid 30034 with `remoteName` `ssh-remote`, `extensionKind` Workspace, and the server's own `node` | Pass |
| `reloadReconnects` | Developer: Reload Window loads a new page, reconnects, and the fixture activates in a new remote extension host | Pass |
| `reconnectAfterKilledConnection` | SIGKILL of both sshd session processes; a new session appears, an edit saves, and the remote extension host pid is unchanged with a fresh heartbeat | Pass |
| `reconnectAfterSshdRestart` | sshd listener and session stopped, 3 s pause, restarted on the same port; reconnect, edit saved, same extension host | Pass |
| `windowCloseReleasesRemote` | After closing the window, no process of uid 30034 is a server, extension host, pty host or sshd session (polled by uid, start time and command line; nothing signalled) | Pass |
| `journalSessionsClosed` | Every session accepted by the final sshd instance has an end line in the sshd journal (3–10 of 3–10; saved as `sshd-journal.log`) | Pass |
| `clientNoServerFetchOrExternalTraffic` | No client connect or DNS lookup leaves the machine, except the reported gallery lookup below | Pass |
| `remoteNoServerFetchOrExternalTraffic` | No remote connect or lookup leaves the machine (164–179 loopback/unix connects), and no `wget`, `curl` or `fetch` runs | Pass |
| `--agent` `remoteAgentRefusedLocally` | Sending an Agent turn with the loopback provider selected shows "OpenVision does not send provider keys or Agent model requests to remote hosts" | Pass |
| `--agent` `noAgentRequestReachedProvider` | The fixture provider received only `GET /v1/models` (Settings discovery, with the key) and no Agent request | Pass |
| `--agent` `providerKeyNotOnRemote` | A scan of the remote home, including `~/.openvision-server` (7,617 files, about 453 MB), finds no copy of the canary key | Pass |
| `--agent` `providerRequestsOriginateLocally` | The client trace has the connect to the provider port; the remote trace has none | Pass |

Observation, not a pass condition: the connect took 46.1–51.6 s from launch
to the remote Explorer under strace on both sides, including the first upload
and server start. Not measured without strace.

### Gallery lookup (reported, not hidden)

Once the fixture extension (not built in) is installed on the host, the
client's network service resolves `marketplace.cursorapi.com` (the
`extensionsGallery` host in `product.json`) and opens one TLS connection to it.
This happens at install and again at workbench start after the reload. It is
the client's extension gallery, not a server download. The verifier tolerates
lookups of exactly that host only from the extension-install phase on, and
only by the process that resolved it. Every other external connect or lookup
fails the run. Before the install (connect, open, edit, terminal) neither side
made any.

## Runs

| Run | Mode | Code | Result |
| --- | --- | --- | --- |
| `remote-ssh-Zi8ooY` | base | final | **Pass**, 18/18, first attempt |
| `remote-ssh-KvsECX` | base | final | **Pass**, 18/18, first attempt |
| `remote-ssh-agent-EYoCFZ` | `--agent` | final | **Pass**, 22/22, first attempt |
| `remote-ssh-agent-kC7mRR` | `--agent` | final | **Pass**, 22/22, first attempt |
| `remote-ssh-IeDqdT` | base | one revision earlier | Fail: the lookup parser required one space after the pid, and strace pads short pids (`9404  1792…`). The gallery lookup was not attributed, so its TLS connect counted as unexpected. Fixed |
| `remote-ssh-PKUsZd` | base | one revision earlier | Fail: 1 of 11 sessions in the final sshd lifetime had no recognised end line. Later journals show OpenSSH's `Read error from remote host … port N` for abruptly closed sessions, so that form is now matched. No remote process remained (`windowCloseReleasesRemote` passed). The journal is now saved with every run |
| `remote-ssh-LYZgmQ`, `remote-ssh-dTezSQ`, `remote-ssh-OcLCdY`, `remote-ssh-agent-5sfhpR`, `remote-ssh-agent-aYwD2B`, `remote-ssh-agent-blmssT` | both | earlier revisions | Pass |
| `remote-ssh-CLilbE` | base | earlier verifier | Pass; the journal and provider checks changed afterwards |
| `qrx8uN`, `wK9aTH`, `MxYet0`, `JsUfWe`, `jRHoce`, `NZ8JMT`, `K9PKTo`, `4f0IB2`, `agent-cnHOjr` | development | earlier code | Failed. Each failure was in the verifier, the controller or the build's skip logic, and was fixed before the final runs. In order: editor click target; Quick Open asked before remote search was ready; the VSIX upload helper sent the script, and the build kept a previously patched resolver (now re-derived from the VSIX on every build); Ctrl+C sent while the shell, not a child, owned the terminal; the reload was not awaited, so the next phase saw a reloading window (two runs); activation records concatenated; strace kept the stopped listener's handle alive and DNS over connected UDP sockets went unattributed; no Secret Service for the fixture key. One product defect was found this way: the resolver's call-site default still opened a SOCKS proxy, fixed in `dd1b373e` |

Related: `verify:agent` (local window, guard built in) passed as
`agent-verification-84U3Dz` with an unlocked gnome-keyring
(`apt-get install gnome-keyring`). The earlier `agent-verification-tknOvd`
failed because this Xvfb session had no Secret Service (empty provider list
with a credential cleanup entry), not because of this branch.

## Limits

- One machine: the "remote" is a second account on 127.0.0.1. Network
  latency, real host keys, jump hosts, `ProxyCommand`, password and agent
  authentication, and hosts without `sha256sum` were not exercised.
- The Agent, Tab and inline edit were not run in a remote window beyond the
  refusal above. Remote Agent read/edit/command needs a local provider relay
  that is not built.
- Remote extensions keep upstream data paths (for example `~/.cursor`) on the
  host; the client's profile-home isolation does not apply there.
- Windows and macOS clients, WSL and containers are out of scope here.

[Verification index](README.md) · [Documentation index](../README.md)
