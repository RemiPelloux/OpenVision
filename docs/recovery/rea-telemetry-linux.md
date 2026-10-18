# Telemetry process-family capture: Linux x64

Dated **16 October 2026**. Scope: **Linux x64 only** (Omarchy/Hyprland,
Wayland, Node 26.8.1 tooling). The run used the editable source build
(`source/app`, built from 3.21.13 inputs). It was not a packaged release.
Story: OV-1005. **OV-1005 stays Partial.**

This report extends the [built-in telemetry audit](rea-telemetry-audit.md). Third-party
extensions the user installs and MCP servers the user configures are **out of scope**.
They can open their own network connections, and this capture does not assess them.

## Harness added

- `desktop/network-capture.mjs` provides four parts:
  - **Loopback proxy.** An owned proxy forwards loopback traffic and refuses
    every non-loopback `CONNECT` or absolute-URL request with HTTP 403, so it
    records attempted destinations without sending payloads off-host.
  - **Process tree.** It builds the owned process tree from `/proc/*/stat`.
  - **Socket sampling.** It matches `/proc/<owned pid>/fd` socket inodes to
    `/proc/<owned pid>/net/{tcp,tcp6,udp,udp6}` (per network namespace).
  - **Trace parsing.** It parses an `strace -f -yy` trace of
    connect/sendto/sendmsg/sendmmsg. That covers transport, destinations and
    systemd-resolved `ResolveHostname` queries, which serve as the DNS
    observer. UDP connects that send no datagram are route probes and are kept
    separate from traffic.
- `desktop/verify-telemetry-extended.mjs` (`npm run verify:telemetry:extended`)
  launches the host under `strace` and passes these flags:
  `--proxy-server=http://127.0.0.1:<owned port>`,
  `--proxy-bypass-list=<-loopback>`, `--log-net-log` and `--disable-telemetry`.
  It uses a disposable profile under `logs/`.
  - **Workload:** startup, open/edit/save a project file, settings, adding a
    loopback model provider, the Extensions view, Agent chat against a
    controlled loopback model fixture, a terminal, search, an idle period
    (`--idle-seconds`, default 600) and quit.
  - **Gate:** zero non-loopback destinations, zero telemetry matches, zero
    direct non-loopback traffic sockets, and a process family that drains
    after quit.
- `desktop/network-capture.test.mjs` is included in `npm run test:telemetry`.
  It covers trace parsing, the probe/traffic split, `/proc/net` decoding,
  classification, and proxy refusal.

## Commands

```sh
npm ci --prefix tooling
export OPENVISION_RECOVERY_DIR=<read-only 3.21.13 recovery>
npm run build:desktop
node desktop/verify-telemetry-extended.mjs --idle-seconds 20   # smoke run recorded below
npm run test:telemetry
```

## Observed (smoke run, `logs/telemetry-extended-WhpfVh/result.json`, not committed)

This was a short smoke run (idle requested as 20 s). It stopped in the
**settings** phase: Ctrl+, did not show `.settings-editor` within 20 s. The
startup and project phases completed and the edit was saved. The settings,
extensions, Agent, terminal, search and idle phases were **not** observed in
this run. The process family drained after quit.

Observer coverage:

- **Processes:** 35 owned processes, including `openvision` (main, GPU,
  utility and renderer), `MainThread`, `tsserver[6.0.3]`, `npm install typ…`,
  `rg`, `bash`, `cursorsandbox` and `strace`.
- **Proxy:** 7 events, all refused.
- **Chromium net log:** 2 URLs.
- **Trace:** 59 connects, 36 inet connects and 1 resolver query.

| Destination | Seen by | Phase | Classification | Disposition |
| --- | --- | --- | --- | --- |
| `api2.cursor.sh` `/extensions-control` | proxy CONNECT (refused), Chromium net log | startup, settings | Automatic vendor fetch (extension control manifest). Not configured or initiated by the user | **Open.** Fix prepared (remove `extensionsGallery.controlUrl`). The bundle guard `if (!this.extensionsControlUrl) return { malicious: [], … }` is confirmed in the shared process and workbench. Not yet verified natively |
| `redirector.gvt1.com` `/edgedl/chrome/dict/en-us-10-1.bdic` | proxy CONNECT (refused), Chromium net log | startup | Automatic: Electron session spellchecker dictionary download. Workbench windows set `spellcheck: false` | **Open.** Fix prepared: on `session-created`, disable the session spellchecker and its languages. Not yet verified natively |
| `registry.npmjs.org` | DNS query (systemd-resolved) | startup | Automatic: TypeScript Automatic Type Acquisition (tsserver typings installer). Sends package names derived from project files. ov501-data-destinations agrees OV-1005 owns this fix | **Open.** Fix prepared: change the bundled defaults to `js/ts.tsserver.automaticTypeAcquisition.enabled=false` and `typescript.disableAutomaticTypeAcquisition=true` (plus `npm.fetchOnlinePackageInfo=false`). Not yet verified natively |
| Cloudflare `104.16.x.34` / `2606:4700::6810:*` | strace connect | startup | Port-0 UDP connects are glibc address sorting (no datagram). One TCP-class connect to `[2606:4700::6810:422]:443` (direct, **bypassing the proxy**) came from the npm/ATA child (inferred from process names and timing) | Covered by the ATA item above |
| `2001:4860:4860::8888:443` | strace connect | startup | UDP route probe without a datagram (inferred: Chromium IPv6 reachability probe) | No traffic. Recorded only |
| `127.0.0.1` (proxy, fixture, DevTools/inspector, `127.0.0.53` resolver) | strace, `/proc` | all | Loopback, owned by the test harness | Allowed |

No Sentry, Statsig, Segment, Amplitude, Datadog, crashpad-upload or update-check
destination was observed in the phases that ran. Update checks stay disabled
(`updateUrl` removed, `--disable-updates`, `update.mode=none`). This is an
observation of startup and project phases only.

## Inferred, not observed

- Attribution of each pid to an owner was made from process names and timing. The
  result file does not yet record a pid-to-command mapping.
- The run refused non-loopback requests, so follow-up requests that would depend
  on their responses are not observed.
- Extension host, utility, GPU and crashpad activity were included in the traced
  family, but only for startup and project phases.


## Full workload before and after the owner fixes (16 October 2026, Linux x64 only)

### Changes

- **Capture boundary.** `desktop/verify-telemetry-extended.sh`
  (`npm run verify:telemetry:extended`) runs the verifier inside a
  **loopback-only network namespace** (`unshare -rn`, then back to the invoking
  uid/gid), so no packet from the owned process family can leave the host.
  The observers record every attempted destination: `strace -f -yy` connects,
  systemd-resolved hostname queries over its Unix socket, `/proc` sockets of the
  owned process tree, and the Chromium net log. Each process in the result has
  its command line (`processFamily.byPid`). `XDG_CACHE_HOME` points into the run
  directory so a machine-wide identifier write is detectable.
- **Proxy observer is opt-in.** Pass `--proxy` (and `--proxy-loopback` for
  `--proxy-bypass-list=<-loopback>`) to enable it. **Observed:** with any
  `--proxy-server`, the BYOK Agent turn stays at "Preparing" and never reaches
  the loopback model fixture. Reproduced three times, including with the fixture
  port bypassed. Without the proxy, in both the host and loopback-only
  namespaces, the same turn completes. The cause was not isolated. It may affect
  users behind a system proxy and is recorded for the provider owner (OV-102).
- **Workload steps.**
  - Settings now opens through the command palette (`Preferences: Open User
    Settings`).
  - The terminal uses a controlled `bash --noprofile --norc` profile and
    verifies a marker file.
  - Search runs through `Search: Find in Files`.
  - Opening the Extensions view is classified as an explicit Marketplace
    request. The gallery query counts as user-initiated only inside that phase,
    and only when every name resolved in it is the gallery host.
- **Owner fixes.** `desktop/network-defaults.mjs` is wired into `build:desktop`
  after the extension telemetry policy. Each fix has a drift guard, first
  backups under `backups/network-defaults/`, and idempotent markers. A repeat
  build kept `main.js`, `product.json` and the always-local bundle hashes
  unchanged.

| Owner | Change |
| --- | --- |
| `out/main.js` | On `session-created`, the session spellchecker is disabled and its language list emptied. This stops the Hunspell dictionary download from `redirector.gvt1.com` |
| `out/main.js`, `out/vs/code/node/cliProcessMain.js` | `getDevDeviceId` returns its own UUID fallback instead of `@vscode/deviceid`, which wrote `~/.cache/Microsoft/DeveloperTools/deviceid` (also found by OV-302) |
| `product.json` | `extensionsGallery.controlUrl` removed. The gallery's own guard returns an empty control manifest without a request. Marketplace browsing remains |
| Workbench (desktop and glass) | Experiment refresh (`AnalyticsService/BootstrapStatsig` polling) and `CppService/RecordCppFate` reporting are inert |
| Cursor backend transports (always-local, agent host, agent-host daemon) | An RPC is refused before sending when there is no Cursor access token or override and the base URL is not loopback. That covers `BootstrapStatsig`, `GetTeamAdminSettingsOrEmptyIfNotInTeam`, `ListMarketplacePlugins` and `GetKnownServers` in the local profile. Signed-in optional integrations are unchanged |
| Bundled TypeScript and npm extensions | Contributed defaults changed: Automatic Type Acquisition off, `npm.fetchOnlinePackageInfo` false. Users can re-enable them |

### Commands

```sh
npm run build:desktop                       # before: main 7ae32961 without the fixes
desktop/verify-telemetry-extended.sh --idle-seconds 600
npm run build:desktop                       # after: with desktop/network-defaults.mjs
desktop/verify-telemetry-extended.sh --idle-seconds 600
```

Both runs cover the full workload:
1. startup
2. project file edit and save
3. VS Code and OpenVision settings, including adding a loopback provider
4. Extensions view
5. Agent chat with the controlled loopback fixture (1 model request)
6. terminal
7. search
8. 600 s idle
9. quit, with the process family drained

Each run took 11 minutes. The model response was a controlled fixture, not live
inference.

### Observed

| Destination | Before (`logs/telemetry-extended-LKe2nT`) | After (`logs/telemetry-extended-5MABkY`) | Classification |
| --- | --- | --- | --- |
| `api2.cursor.sh` (resolved; connects to 3.92.129.183, 34.225.159.174, 52.21.130.202) | Startup, Agent and idle. Chromium `extensions-control`, plus Node RPCs from the always-local extension host and an agent-host utility process | None | Automatic vendor calls. Removed |
| `redirector.gvt1.com` (Google 66.102.1.x, 2a00:1450:…) | Startup, Chromium network service | None | Automatic spellcheck dictionary download. Removed |
| `registry.npmjs.org` (Cloudflare 104.16.x.34, 2606:4700::6810:*) | Startup, `npm install types-registry@latest` from the TypeScript typings installer | None | Automatic project-derived package fetch. Removed |
| `marketplace.cursorapi.com` (Cloudflare 104.20.38.66, 172.66.144.201, 2606:4700:10::…) | Extensions phase only | Extensions phase only | User-initiated: the Extensions Marketplace view was opened. Kept |
| Loopback (fixture, DevTools/inspector, IPC) | All phases | All phases | Owned harness. Allowed |

Totals:
- **Before:** 40 non-user destinations, 67 direct non-loopback socket attempts,
  4 automatic hostnames resolved, 85 processes.
- **After:** 0 non-user destinations, 0 direct remote sockets, 0 telemetry
  matches, 1 hostname resolved (the gallery, in the Extensions phase), 65
  processes, no `Microsoft/DeveloperTools/deviceid` written. The verifier
  passed.

The after capture also covers the destinations ov501-data-destinations found
with a decrypting proxy: `RecordCppFate`, `BootstrapStatsig`, the spellcheck
download and the ATA registry calls. Its `CmdKService/RerankCmdKContext` fix is
OV-501's own change.

### Inferred, not observed

- Attribution of api2.cursor.sh RPC names to the Node connects comes from the
  structured logs ("Authorization omitted" entries name each RPC) and from
  process command lines. The trace does not decode TLS.
- Quick Edit/Cursor Tab was not part of this workload. `RecordCppFate` removal
  is established by the owner change and its unit test, not by a native trigger.

### Remaining gates (OV-1005 stays Partial)

- macOS native checks.
- The packaged release. This evidence covers the source build (`source/app`)
  only, and preview.7 does not contain these fixes.
- Workloads with a signed-in optional account integration, where hosted calls
  are user-configured.
- The `--proxy-server` Agent stall above.

Third-party extensions the user installs and MCP servers the user configures
remain out of scope.

## Customize project scopes and re-verification (18 October 2026, Linux x64 only)

### Regression and cause

**Observed.** On a build with `5ea2d86a`, `verify:global-paths` reported
`project-openvision-skill`, `-command` and `-rule` missing for every profile
(`logs/global-paths-McEy0V`), and a single-window probe reproduced it. In
Customize, the scope selector showed only **User**. Passing runs before the
change showed **All**, with User and 1 Workspace.

**Not the transport refusal.** With the `refuseAnonymousHostedCalls` guard
disabled in all three transports, the items were still missing. The refused
calls already reject through the renderer's Connect transport (`ConnectError
[unknown]`), and their callers treat that as an unavailable service.

**Cause.** The selector depends on the Statsig client gate
`customize_manage_scope_multiselect`. Its bundled default is off, which renders
the single-scope ("User") manager and hides workspace items. The anonymous
`BootstrapStatsig` response used to turn it on. A profile from a pre-change run
holds that response in `workbench.experiments.statsigBootstrap` (gate names are
djb2-hashed), and there the gate is `true`. With the refresh inert, a fresh
profile gets the bundled default. Changing only this default restored all three
items.

**Fix.** `setLocalGateDefaults` in `desktop/network-defaults.mjs` sets that
gate's default to on in both workbench bundles. It is guarded (exactly one table
entry) and idempotent. The transport guard is unchanged.

**Open (gate drift).** The 3.21.13 workbench declares 752 client gates. 665 are
in the anonymous bootstrap, and in **206** of them the server value differs from
the bundled default. Most are cloud, Grok, mobile or hosted features. Some local
ones are among them (`instant_grep_indexing`, `custom_agents_enabled`,
`customize_global_search`). Only the gate above is shown to break a local
feature. The others were not assessed. Whether an existing profile's cached
bootstrap is still applied was not measured.

### Results (clean rebuild of `b8f2c31d`)

| Check | Before (`5ea2d86a`) | After |
| --- | --- | --- |
| `verify:global-paths` (`logs/global-paths-xdMUU3`) | Project items missing ×3 | Missing `[]`, leaked `[]` for alpha, beta and gamma. All five session steps pass. Fails only on the known `~/.bash_history` (OV-302) |
| `verify:telemetry:extended --idle-seconds 600` (`logs/telemetry-extended-6Jd60o`) | — | Passes. 0 non-user destinations, 0 direct remote sockets, 0 telemetry matches, 1 hostname (the gallery, Extensions phase), 45 processes, family drained, no device-id file |
| `verify:telemetry` (`logs/telemetry-verification-rQMiuT`) | — | Passes. No HTTP URLs, no telemetry matches |
| `verify:data-destinations` (`logs/data-destinations-GTNpzM`) | 18 non-provider requests, 16 connections (`62y0eg`, main before the merge) | **0 requests, 0 connections, no host**: no `registry.npmjs.org`, no `redirector.gvt1.com`, no `api2.cursor.sh`. All 9 checks pass, provider 8 requests |

**Always-local idle loop (OV-1003).** The probe used a fresh profile, a project
with 122 files, a 150 s settle and then a 600 s idle window, with host networking.
Per-process CPU came from the idle-memory verifier's process-family helper
(`/proc`). A never-pausing conditional breakpoint on the transport guard in
extension host 4 counted refused calls by RPC.
- **0 refused or attempted hosted calls** in the 600 s idle window. No
  `AgentService/Run` call was made. Before, there were about 185 per minute.
- Positive control: opening Customize afterwards counted
  `DashboardService/ListMarketplacePlugins` ×1 at the guard.
- Extension host 4 used **2.54 CPU s per 10 minutes**, against 25.08 before
  (`idle-memory-linux.md`, a different run with a workload). That is level with
  hosts 2, 3 and 5 (2.52–2.56). Its private memory was flat (112.9 → 112.5 MiB
  USS + swap). Before, it grew 264 → 420 MiB in 10 minutes of idle.
- The whole family used 20.46 CPU s. The host load average was about 5.9, with
  11.4 GiB available and 16 GiB of swap in use by other work.
- Inferred, not shown: the loop stops at its source and does not just fail
  faster. The guard never ran during idle, so whatever drove `Run` was not
  triggered, possibly because of a gate that now stays at its default. The
  trigger was not identified.

OV-1005 stays **Partial**: macOS, the packaged release and signed-in workloads
remain, as listed above.
