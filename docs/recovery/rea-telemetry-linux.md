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

## Remaining gates (OV-1005 not promoted)

1. Fix the settings step selector (use `Preferences: Open User Settings`).
   Then complete the full workload with idle at 600 s or more.
2. Land the three prepared owner fixes (spellcheck downloads, extension control
   manifest, ATA/npm defaults) with drift guards, first backups and tests. Then
   rebuild and repeat the extended capture to zero automatic destinations. The
   fixes were not committed because they were not natively verified before the
   stop request.
3. Record a pid-to-command map in the result. Run authenticated/optional account
   integrations and the packaged release.
4. macOS native checks remain open. Windows evidence remains in the earlier audit.
