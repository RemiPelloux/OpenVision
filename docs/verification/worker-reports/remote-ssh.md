# Worker report: `ov/remote-ssh` (OV-703, SSH to Linux)

18–19 October 2026. **Linux x64 client → Linux x64 host only.** One 4-CPU
container with 15 GiB RAM, Xvfb and a private D-Bus per run, Node 24.18.0, a
clean source build of the 3.21.13 input on `main` `eed4f19a`. The remote host
is a controlled fixture: an unprivileged sshd on 127.0.0.1 running as a
separate unix account. There is no live provider and no real network. Evidence:
[Remote SSH on Linux x64](../remote-ssh-linux-2026-10-19.md). Design:
[Remote SSH engineering](../../engineering/remote-ssh.md).

## Summary

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

## Tasks

| # | Task | State | Notes |
| --- | --- | --- | --- |
| 1 | Pin and brand the remote server input; local-only template; unit tests; capture during connect | **Done** | The editor's own server build is required (reasons above). Telemetry, network and branding transforms are applied to formatted server bundles, including the three inline product literals. Capture: strace of client and remote families, phase-attributed |
| 2 | Licence-compatible resolver from a local VSIX, pinned by hash | **Done** | open-remote-ssh 0.4.0, MIT. vscode-sshfs is GPL-3.0 and only a file system provider; the anysphere/ms-vscode-remote resolvers are proprietary. Bundled as a built-in from the pinned VSIX, not installed by the user |
| 3 | `verify:remote-ssh` against a disposable sshd as a separate user | **Done** | openssh-server installed with apt. The host controller runs as `ovremote` instead of a sudoers rule; adding the sudoers rule was refused in this session as persistent privilege |
| 4 | Remote secrets, routing and Agent (`--agent`) | **Partly done** | Done: keys never reach the remote (guard plus scan); the only provider request (model discovery) originates locally, attributed by trace. Not done: Agent requests from a remote window routed locally, and Agent read/edit/command on remote files with approval and Stop. These need a local provider relay ([design note](../../engineering/remote-ssh.md#provider-keys-stay-local)) |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Connecting would make the remote host download the server from the vendor blob store (`serverDownloadUrlTemplate`) | `desktop/remote-ssh-customization.mjs` (local upload, install-script branch), `desktop/remote-server.mjs` (local template) | `082325d1` |
| The resolver accepted any SSH host key (no `hostVerifier`), allowing silent man-in-the-middle | `desktop/remote-ssh-customization.mjs` (`verifyHostKeys`) | `082325d1` |
| In a remote window the workbench sends every configured provider key and custom header to the remote extension host, and the provider request originates there | `desktop/remote-provider-guard.mjs`, `desktop/model-providers.js` (`assertLocalProviderWindow`) | `082325d1` |
| The remote server stayed up 300 s after its last window closed | `localServerScript` (`--remote-auto-shutdown-without-delay`) | `082325d1` |
| Every connection opened a local SOCKS proxy into the remote network (manifest default and a call-site fallback) | `resolverDefaults`, `localServerUpload` | `dd1b373e` |
| Proprietary marketplace resolvers were offered as remote tips | `remoteClientProduct` | `082325d1` |

## Verification

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

## Recommendation

**OV-703: do not promote yet.** The SSH-to-Linux x64 part of the host matrix
is ready to declare (connect/reconnect, filesystem, remote extension host,
terminals, secrets, and process ownership and cleanup), with the evidence
above. The remaining Linux gaps for the story as written:

1. Custom-provider routing in remote windows: Agent turns are refused. Remote
   Agent read/edit/command with approval and Stop needs a local provider relay
   (main-process key injection behind a per-session token, SSH reverse
   forward on the resolver's connection) and a verifier extension. This is a
   product decision as well as work (see below).
2. Profile isolation on the host: remote extensions use upstream paths such
   as `~/.cursor` under the remote account.
3. Containers: need a container daemon and a licence-compatible container
   resolver; not attempted.

If the owner limits OV-703's Linux claim to "SSH, Agent local-only", the SSH
row can be marked Verified on Linux x64 from these runs.

## Moved to platform/live stories

- WSL (Windows).
- SSH from Windows and macOS clients, and to Windows or macOS hosts.
- Live-provider Agent over a remote window.
- Real network hosts: latency, jump hosts, `ProxyCommand`, password and
  agent authentication.

## Defaults pending owner decision

| Default | Chosen (conservative, reversible) |
| --- | --- |
| Claimed remote | SSH to Linux x64 hosts only; the resolver refuses other `uname -sm` |
| Server source | The pinned, locally prepared archive uploaded over SSH; never the vendor blob. A user-set `remote.SSH.serverDownloadUrlTemplate` still downloads, by explicit choice |
| Agent in remote windows | Refused; keys never leave the client |
| Host keys | Unknown and changed keys refused; only `StrictHostKeyChecking no` accepts unknown keys. No trust-on-first-use prompt |
| Server lifetime | Stops when its last window closes (no 300 s grace) |
| Dynamic forwarding | Off by default |
| Containers | Deferred (no daemon); WSL moved to the Windows story |
| Resolver version | 0.4.0, 13 days old at pinning, chosen over 0.3.1 for its local-port binding security fix |

## Open risks

- **Gallery lookups.** A remote extension that is not built in makes the
  client resolve `marketplace.cursorapi.com` and open a TLS connection, at
  install and at each workbench start. It is the configured extension gallery
  rather than a server fetch. It probably also happens for local VSIX
  installs; that was not checked here. Reported for OV-1005, not changed.
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
