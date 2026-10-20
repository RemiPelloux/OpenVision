# Worker report: `ov/remote-ssh` (OV-703, SSH to Linux)

18–20 October 2026. **Linux x64 client → Linux x64 host only.** One 4-CPU
container with 15 GiB RAM. Each run had Xvfb, a private D-Bus and its own
`XDG_RUNTIME_DIR`, with Node 24.18.0. The remote host is a controlled fixture:
an unprivileged sshd on 127.0.0.1 running as a separate unix account. There is
no live provider and no real network. Evidence:
[Remote SSH on Linux x64](../remote-ssh-linux-2026-10-19.md). Design:
[Remote SSH engineering](../../engineering/remote-ssh.md).

## Round 2 — 20 October 2026 (owner decisions)

The owner decided OV-703 on 20 October
([owner decisions](../../planning/owner-decisions.md)):

- The matrix is SSH to Linux x64.
- WSL moves to OV-901, and containers are excluded from this release.
- The Agent runs locally only in remote windows.
- The other round 1 defaults are accepted.

Two items were sent back. This round started from `main` `95dd887d`, where
round 1 is merged.

### Summary

- **Remote profile isolation.** The host no longer writes `~/.cursor`.
  - The server copies of the remote extension bundles get the client's
    profile-home transform; the drift counts are identical.
  - The resolver gives each local profile its own
    `VSCODE_OPENVISION_PROFILE_HOME` under `~/.openvision-server/profiles/<key>`.
    It travels through the extension-host environment, not the terminal
    environment.
  - The server launcher supplies a default inside the same folder.
  - Verified: the host starts and ends without `~/.cursor`. A second local
    profile gets a second remote profile home, and each remote extension host
    reports its own.
- **No Marketplace query.** With `main`'s OV-1005 changes, the query
  disappeared from the profile that installed the remote VSIX. A fresh profile
  opening the same host still sent the extension's identifier from the
  startup update check (`checkForUpdates`), traced to that call by a renderer
  stack.
  - `skipVsixUpdateCheck` now leaves VSIX installs out of that check, and the
    server skips the VSIX metadata lookup.
  - The verifier no longer tolerates any external connect or lookup, on
    either machine, in any phase.
- **Stronger checks.**
  - The client trace now appends across launches and must cover each one. In
    round 1 only one launch per run was checked after the second profile was
    added; that development run is not counted.
  - Each reconnect must complete a command round-trip to the same remote
    extension host.

### Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| The remote host wrote `~/.cursor` (agent projects, MCP state, plugins, sandbox policies), shared by every local profile | `desktop/remote-server.mjs` (`isolateNodeProfileHome` on server bundles, `remoteLauncher`), `desktop/remote-ssh-customization.mjs` (`remoteProfileHome`) | `ced8b4ce` |
| A fresh profile's startup update check sent a VSIX-installed extension's identifier to the Marketplace | `desktop/network-defaults.mjs` (`skipVsixUpdateCheck`); server `skipVsixGalleryMetadata` | `ced8b4ce` |
| The server's environment service and pty host resolved `argv.json` outside the server data folder | `isolateEnvironmentProfileHome` on `server-main.js` and `ptyHostMain.js` | `ced8b4ce` |
| Verifier: client trace truncated by each launch; heartbeat read raced its writer; heartbeat age measured after the reconnect round-trip | `desktop/verify-remote-ssh.mjs` | `ced8b4ce`, `4904e8d3` |

### Verification (round 2)

Clean rebuild: the build outputs were moved aside, then `prepare:remote` and
`build:desktop` ran from scratch on `fdc5164a` (tree identical to
`ced8b4ce`). The archive SHA-256 `01e1a243…3e11acf` is identical to the
earlier run of the same code. All native runs ran as `ov` under
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session` with
`XDG_RUNTIME_DIR=/run/user/30033`, one at a time.

| Command | Run | Result |
| --- | --- | --- |
| `npm run verify:remote-ssh` | `remote-ssh-6QqiYI` | **Pass 21/21**, first attempt on final code |
| `npm run verify:remote-ssh` | `remote-ssh-pduyIw` | **Pass 21/21**, first attempt on final code |
| `npm run verify:remote-ssh -- --agent` | `remote-ssh-agent-kkUoYa` | **Pass 25/25**, first attempt on final code |
| `npm run verify:remote-ssh -- --agent` | `remote-ssh-agent-3aUnmD` | **Pass 25/25**, first attempt on final code |
| Same clean build, verifier one commit earlier (`fdc5164a`) | `remote-ssh-jpVlBD` | **Fail**: the heartbeat age was measured after the reconnect round-trip, a verifier ordering bug fixed in `4904e8d3`. Every other check before it passed. Not counted |
| Same clean build, verifier one commit earlier | `remote-ssh-0D9XTK`, `remote-ssh-agent-47aZyO`, `remote-ssh-agent-Mayyo6` | Pass; not counted (earlier verifier) |
| Development, incremental builds | `DUhEzm` (Marketplace query from the second profile; led to `skipVsixUpdateCheck`), `2m3las` (heartbeat read race), `X8duW7` (window closed before the extension-host connection reconnected; led to the command round-trip), `u2WGA8` (pass, but its client trace covered only the last launch), `agent-ablDAi` (the same truncation), `agent-PC9Ryr` (pass) | Not counted |
| `npm run test:remote-ssh` | — | 37/37 |
| `npm run test:telemetry` (includes `network-defaults.test.mjs`) | — | 49/49 |
| `npm run test:desktop` | — | 222/222 |
| `npm run test:provider-storage` | — | 78/78 |
| `npm run test:data-destinations` | — | 21/22, 1 skipped (recovered file-sync extension not available; existing) |
| `npm run test:portable` | — | 42/43, 1 skipped (macOS only; existing) |
| `npm run check:desktop`, `npm run docs:check`, `npm run status:features` | — | Pass (status 28 verified, unchanged by this branch) |

What the four counted runs show (each):

- Upload-only install of the `01e1a243…` archive.
- Remote host traffic: 0 external connects and 0 lookups out of 219–232
  traced connects. Client traffic: 0 external connects or lookups across all
  3 launches, with the trace covering each launch.
- No `~/.cursor` on the host.
- Two profile homes per run under `~/.openvision-server/profiles/`, with 57
  and 8–9 entries. The keys differ per run because each run uses new profile
  directories.
- Every sshd session in the final lifetime closed (16–18 of 16–18).
- The fixture heartbeat continued 160–432 ms behind after the killed
  connection.
- `--agent`: the provider key was in none of 7,629 remote files, and the one
  provider connect was local.

Connect time was 54.8–61.0 s under strace on both sides, including the upload
and a cleared server folder.


### Recommendation (round 2)

**OV-703: promote to Verified on Linux x64** for the declared matrix (SSH,
Linux x64 client → Linux x64 host, Agent local-only). Every clause of that
matrix passes natively with first-attempt runs on a clean rebuild:

- **Connection:** connect and reconnect (killed connection, sshd restart,
  reload).
- **Files and terminals:** filesystem, Quick Open, and terminal Unicode,
  resize and Ctrl+C.
- **Extensions and isolation:** the remote extension host, and remote profile
  isolation.
- **Network and keys:** no server download and no external traffic on either
  machine. Provider keys stay local.
- **Cleanup:** process ownership and cleanup, by uid and by journal.

WSL (OV-901) and containers (excluded) are outside this story's declared
matrix by the owner's decision.

Not covered, and outside the Linux claim: Windows and macOS clients, real
network hosts, and live providers. Also see the open risks: the reconnection
grace on a close during reconnect, and remote shell history.


## Round 1 — 18–19 October 2026

Kept as history. Items superseded in round 2 are noted.

### Summary

- **Server input.** `npm run prepare:remote` pins the server built from the
  client's own editor commit (`e44a49c…014a0`) by size and SHA-256. It applies
  the client's telemetry, network and branding transforms, renames it to
  `openvision-server` / `.openvision-server`, and repacks it reproducibly
  (`df3f62d1…`, identical across runs). A stock VS Code server cannot be used:
  the server refuses other commits ("Client refused: version mismatch"), the
  RPC tables differ by 16/37 proxy identifiers, and Microsoft's build is
  licensed for VS Code only.
- **No server download anywhere.** The client uploads the archive over the
  established SSH connection and checks its SHA-256 on the host.
  `serverDownloadUrlTemplate` is the local-only `openvision-local:…`. Traces of
  both process families show no external connect, lookup or downloader during
  connect, use, reconnect or close.
- **Resolver.** open-remote-ssh 0.4.0 (MIT, Open VSX), pinned by hash and
  bundled as a built-in extension. It needed one security fix: it accepted
  any host key. It now verifies `known_hosts` and refuses unknown or changed
  keys.
- **Verifier.** `verify:remote-ssh` covers open folder, Quick Open,
  edit/save/rename, terminal Unicode/resize/Ctrl+C, and a fixture extension in
  the remote extension host. It also covers reload, reconnect after a killed
  connection and after an sshd restart, and close with no remote server or
  session left (by uid and journal). 2/2 first-attempt passes on the final
  code, `--agent` 2/2. Two runs one revision earlier failed on verifier
  parsing; both are recorded.
- **Provider keys stay local, Agent refused remotely.** In a remote window the
  Agent runtime runs on the host, and the workbench would send every
  provider's key there. A guard refuses before any key is read. The canary key
  is verified absent from the remote home and server data. Remote Agent
  read/edit/command is **not** implemented.

### Tasks

| # | Task | State | Notes |
| --- | --- | --- | --- |
| 1 | Pin and brand the remote server input; local-only template; unit tests; capture during connect | **Done** | The editor's own server build is required (reasons above). Telemetry, network and branding transforms are applied to formatted server bundles, including the three inline product literals. Capture: strace of client and remote families, phase-attributed |
| 2 | Licence-compatible resolver from a local VSIX, pinned by hash | **Done** | open-remote-ssh 0.4.0, MIT. vscode-sshfs is GPL-3.0 and only a file system provider; the anysphere/ms-vscode-remote resolvers are proprietary. Bundled as a built-in from the pinned VSIX, not installed by the user |
| 3 | `verify:remote-ssh` against a disposable sshd as a separate user | **Done** | openssh-server installed with apt. The host controller runs as `ovremote` instead of a sudoers rule; adding the sudoers rule was refused in this session as persistent privilege |
| 4 | Remote secrets, routing and Agent (`--agent`) | **Partly done** | Done: keys never reach the remote (guard plus scan); the only provider request (model discovery) originates locally, attributed by trace. Not done: Agent requests from a remote window routed locally, and Agent read/edit/command on remote files with approval and Stop. These need a local provider relay ([design note](../../engineering/remote-ssh.md#provider-keys-stay-local)) |

### Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Connecting would make the remote host download the server from the vendor blob store (`serverDownloadUrlTemplate`) | `desktop/remote-ssh-customization.mjs` (local upload, install-script branch), `desktop/remote-server.mjs` (local template) | `082325d1` |
| The resolver accepted any SSH host key (no `hostVerifier`), allowing silent man-in-the-middle | `desktop/remote-ssh-customization.mjs` (`verifyHostKeys`) | `082325d1` |
| In a remote window the workbench sends every configured provider key and custom header to the remote extension host, and the provider request originates there | `desktop/remote-provider-guard.mjs`, `desktop/model-providers.js` (`assertLocalProviderWindow`) | `082325d1` |
| The remote server stayed up 300 s after its last window closed | `localServerScript` (`--remote-auto-shutdown-without-delay`) | `082325d1` |
| Every connection opened a local SOCKS proxy into the remote network (manifest default and a call-site fallback) | `resolverDefaults`, `localServerUpload` | `dd1b373e` |
| Proprietary marketplace resolvers were offered as remote tips | `remoteClientProduct` | `082325d1` |

### Verification

All native runs ran as `ov` under
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session`, one at a time.

| Command | Run | Result |
| --- | --- | --- |
| `npm run prepare:remote` (twice, before and after the `main` update) | — | Same archive SHA-256 `df3f62d1…` |
| `npm run build:desktop` (fresh, then incremental) | — | Passes; `Remote SSH: bundled jeanp413.open-remote-ssh@0.4.0; server … uploaded on connect, never downloaded` |
| `npm run verify:remote-ssh` | `remote-ssh-Zi8ooY` | Pass 18/18, first attempt on final code |
| `npm run verify:remote-ssh` | `remote-ssh-KvsECX` | Pass 18/18, first attempt on final code |
| `npm run verify:remote-ssh -- --agent` | `remote-ssh-agent-EYoCFZ` | Pass 22/22, first attempt on final code |
| `npm run verify:remote-ssh -- --agent` | `remote-ssh-agent-kC7mRR` | Pass 22/22, first attempt on final code |
| `npm run verify:remote-ssh` (one revision earlier) | `remote-ssh-IeDqdT`, `remote-ssh-PKUsZd` | Fail; verifier parsing. Lookup lines with padded pids, and the `Read error from remote host` end-of-session form. Both fixed; causes in the evidence |
| Earlier revisions | `LYZgmQ`, `dTezSQ`, `OcLCdY`, `agent-5sfhpR`, `agent-aYwD2B`, `agent-blmssT`, `CLilbE` | Pass; not counted for the final code |
| Development runs | `qrx8uN`, `wK9aTH`, `MxYet0`, `JsUfWe`, `jRHoce`, `NZ8JMT`, `K9PKTo`, `4f0IB2`, `agent-cnHOjr` | Failures were in the verifier, controller or build skip logic; each cause is listed in the evidence. Not counted |
| `npm run verify:agent` (local regression for the guard) | `agent-verification-tknOvd` | Fail: no Secret Service in the Xvfb session, so the provider key was not saved (empty provider list, credential cleanup recorded). Environment, not this branch |
| `npm run verify:agent` with an unlocked gnome-keyring | `agent-verification-84U3Dz` | Pass |
| `npm run test:remote-ssh` | — | 34/34 |
| `npm run test:provider-storage` | — | 78/78 |
| `npm run test:desktop` | — | 222/222 |
| `npm run test:portable` | — | 38/39, 1 skipped (macOS-only, existing) |
| `npm run test:telemetry` | — | 48/48 |
| `npm run check:desktop`, `npm run docs:check`, `npm run status:features` | — | Pass |

Host notes: packages installed with apt: `openssh-server` (9.6p1), `gnome-keyring` and
`libsecret-tools` (only for the local `verify:agent` rerun). Created accounts:
`ov` and `ovremote`. The proxy CA was copied to a path `ov` can read. An
interrupted first build was moved, not deleted, to
`logs/incomplete-build-20261018` and `logs/stale-build-20261019`.

### Recommendation

*Superseded by round 2.* **OV-703: do not promote yet.** The SSH-to-Linux x64 part of the host matrix
is ready to declare (connect/reconnect, filesystem, remote extension host,
terminals, secrets, and process ownership and cleanup), with the evidence
above. The remaining Linux gaps for the story as written:

1. Custom-provider routing in remote windows: Agent turns are refused. Remote
   Agent read/edit/command with approval and Stop needs a local provider relay
   (main-process key injection behind a per-session token, SSH reverse
   forward on the resolver's connection) and a verifier extension. This is a
   product decision as well as work (see below).
2. Profile isolation on the host: remote extensions use upstream paths such
   as `~/.cursor` under the remote account. *(Fixed in round 2.)*
3. Containers: need a container daemon and a licence-compatible container
   resolver; not attempted.

If the owner limits OV-703's Linux claim to "SSH, Agent local-only", the SSH
row can be marked Verified on Linux x64 from these runs.

### Moved to platform/live stories

- WSL (OV-901).
- SSH from Windows and macOS clients, and to Windows or macOS hosts.
- Live-provider Agent over a remote window.
- Real network hosts: latency, jump hosts, `ProxyCommand`, password and
  agent authentication.

### Defaults (decided by the owner on 20 October; all accepted)

| Default | Chosen (conservative, reversible) |
| --- | --- |
| Claimed remote | SSH to Linux x64 hosts only; the resolver refuses other `uname -sm` |
| Server source | The pinned, locally prepared archive uploaded over SSH; never the vendor blob. A user-set `remote.SSH.serverDownloadUrlTemplate` still downloads, by explicit choice |
| Agent in remote windows | Refused; keys never leave the client |
| Host keys | Unknown and changed keys refused; only `StrictHostKeyChecking no` accepts unknown keys. No trust-on-first-use prompt |
| Server lifetime | Stops when its last window closes (no 300 s grace) |
| Dynamic forwarding | Off by default |
| Containers | Excluded from this release; WSL moved to OV-901 |
| Resolver version | 0.4.0, 13 days old at pinning, chosen over 0.3.1 for its local-port binding security fix |

### Open risks

- **Gallery lookups.** *Fixed in round 2:* VSIX installs are left out of
  the update check too, and the verifier allows no external traffic.
- **Reconnection grace.** Closing a window while its extension-host
  connection is still reconnecting leaves the server up for upstream's 3-hour
  grace period (5 minutes if another client connects). The same applies to
  reloading in the first seconds of a connection. Seen in development runs
  `X8duW7` and in a debug run. A shorter server grace would bound it, at the
  cost of losing the remote extension host state after a longer sleep. That is
  an owner decision; the default is unchanged.
- **Remote shell history.** Integrated terminals on the host write the remote
  user's own `~/.bash_history`, as an `ssh` session would.
- **Other tools' folders on the host.** `.cursor` and `.claude` joins are
  redirected to the profile home. Readers that the client redirects through
  workbench commands (for example `~/.codex` and `~/.agents` skill roots) are
  not redirected on the host. They only read; the run created no other home
  entries.
- **Error title.** The Agent refusal is shown under the generic "Choose an
  available model" title of the provider-selection wrapper.
- **Packaging.** `package-portable.mjs` copies `source/app`, so a package
  built after `prepare:remote` should carry the 120 MB server archive
  (`openvision-remote/`) and the resolver. A package built without it has no
  resolver. Neither case was run through `verify:package:linux` here.
- **Connect time.** About 46–52 s under strace on both sides, including the
  first upload; not measured without tracing.
- **Upstream sync.** The resolver patches anchor on 0.4.0's minified code;
  any version bump goes through the drift guards and the unit tests.
- **Fixture scope.** The host is a second account on the same machine.
  Host-side `sha256sum` absence, slow links and large workspaces are
  untested.

[Worker reports](README.md) · [Verification index](../README.md)
