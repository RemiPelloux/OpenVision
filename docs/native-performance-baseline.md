# Native Windows performance baseline

13 October 2026. OV-101 measurement record; later optimizations must compare the
same workload and report scope changes. These numbers describe the current build,
not an improvement over the original product. Full efficiency and long-session
gates under OV-1001–1003 remain incomplete.

## Reproduce

Prepare the local desktop and use the pinned Node 24.18.0 runtime:

```sh
npm run test:native-baseline
npm run benchmark:native
```

The runner extends `verify:agent` with `--baseline`. It creates a disposable
profile/project and deterministic authenticated loopback provider, then drives
the real OpenVision UI. No real AI quota is used. Sequence: first streamed reply,
Read with actual file contents, two-file Undo All and Keep All, command denial,
approval and Stop, streaming Stop, app restart and conversation continuation.
The same assertions for saved files, request identity, history and process
cleanup still apply. Renderer errors and failed measurements fail the run.

Startup is wall time from launch invocation until the local-profile titlebar is
visible. It excludes the subsequent eight-second settle interval. The fresh
profile does **not** imply a cold disk/OS cache. Idle snapshots follow the settle
and another ten-second wait. Active and post-Stop snapshots surround the stream
cancellation; another snapshot follows ten seconds idle. The timer for Stop starts
after the active snapshot, so sampler time does not count as cancellation latency.

The sampler obtains the main process and creation time through the owned Electron
connection, checks them against Windows CIM, and follows observed ancestry. It
records PID, parent PID, birth time, process name, working set and private bytes
for that tree, plus Electron process roles. It does not collect command lines or
environment variables. Birth-time checks exclude children older than their sampled
parent; this observation never authorizes process termination. Exited/reparented
descendants can be absent, and the CIM snapshot is not atomic across all processes.

`PrivatePageCount` measures private committed bytes, including potentially paged
out memory. Summed working sets measure residency but can double-count shared
pages. Neither is an exact unique physical-RAM total. No forced GC, trimming or
memory caps are applied. Measurement overhead was 385–449 ms per snapshot.

## Observed result

Local record: `logs/agent-verification-FkFzEi/result.json` and `identity.json`.
Git base `b5d99b5d10fba6e1b50d18ead3c6d5ff1c42ec0b`; verifier/helper hashes pin
the uncommitted instrumentation used for this run. Host SHA-256
`3332045e575c2d3995a570e19ec6fae3eedfaabfec8a24c6049b4926e3371b2a`.
Original installation manifest SHA-256
`36150f127e95bb32cc573adab9c9a5b0bb8e9dae7711f4cfd04a8013ae9be972`;
readability manifest SHA-256
`77c3da7f638e61d55ee1ffbae4e57c75104121fe9516eaddb2a7ebd84ad79144`.
The original executable was rehashed and matched its inventory.

Windows x64 10.0.26200, AMD Ryzen 5 5500, 12 logical processors, 16,965,017,600
bytes installed memory reported by Node. Native host: Electron 42.10.0,
Chromium 148.0.7778.280, embedded Node 24.18.1. Fixture Node: 24.18.0.
Other desktop applications were running; this is one local observation, not a
controlled performance distribution or clean-machine minimum.
The host was launched through Playwright's Electron driver; inspector/automation
overhead is included. An ordinary uninstrumented user session was not compared.

| Check | Observation |
| --- | ---: |
| Fresh-profile titlebar visible | 5,027 ms |
| Same-profile restart titlebar visible | 3,588 ms |
| Stream Stop to fixture connection closed | 65 ms |
| Command Stop and owned process check | 164 ms |
| Agent inference requests, entire workload | 16 |
| First submission inference requests | 1 |
| Auxiliary AI title requests | 0 |
| Total UTF-8 request body bytes | 1,559,231 |
| Owned launched hosts | Both exited with code 0 |

| Snapshot | Observed processes | Private committed MiB | Summed working-set MiB |
| --- | ---: | ---: | ---: |
| Fresh idle, eight-second settle | 21 | 2,877.60 | 3,421.97 |
| Fresh idle, additional ten seconds | 21 | 2,740.65 | 3,393.94 |
| After first Agent reply | 21 | 2,829.93 | 3,471.22 |
| Active stream before Stop | 21 | 2,735.61 | 3,423.15 |
| Immediately after Stop | 21 | 2,753.61 | 3,440.84 |
| Ten seconds idle after Stop | 21 | 2,614.67 | 3,108.94 |
| Restarted, eight-second settle | 18 | 3,181.57 | 3,602.83 |
| After resumed reply | 19 | 3,280.07 | 3,774.95 |

Fresh idle included one workbench renderer, GPU, network/audio utilities, shared
process, MCP process, four extension hosts, file watcher and terminal host, plus
observed Node/shell descendants. The record retains per-process values. The large
footprint makes extension/MCP/terminal activation ownership a priority for the
next investigation; role names alone do not establish which services are unused.

Request counts by phase: reply 1, Read 2, two edit reviews 6, command denial 2,
command approval 2, slow command 1, slow stream 1, resume 1. A tool continuation is
an expected request, not an N+1 defect. The first request was 92,181 UTF-8 bytes:
36,027 message bytes and 56,059 tool-schema bytes, plus envelope fields. The resumed
request was 101,185 bytes, including 45,031 message bytes and the same schema size.
Input token counts remain **unknown**: the fixture has no model tokenizer or
provider-reported usage. Byte counts must not be presented as tokens saved.

## Comparison budgets and remaining gates

Use these initial investigation thresholds on this workstation/workload before
accepting subsequent efficiency changes. They are regression flags, not a claim
that the current footprint is an acceptable finished-product target:

- Fresh/restart titlebar: 7,541 / 5,382 ms ceilings (1.5× this observation).
- Memory at each named snapshot: at most 1.25× its private-byte baseline, while
  preserving the same enabled functionality and fixture data.
- Stream and command Stop: each under 1,000 ms, with actual connection/process
  release required; a hidden button alone is insufficient.
- First submit: exactly one inference and zero title requests. Full fixed sequence:
  16 expected requests; explain any change by operation before accepting it.
- First/resume body size: no more than 1.10× the recorded bytes unless a justified
  context/tool contract changes. No token budget can be evaluated yet.

These thresholds require comparison and investigation; the runner records values
and functional assertions but does not yet enforce machine-specific timing/memory
ceilings automatically. More repetitions are needed to determine stable variance.
Leak testing, delayed service disposal/reactivation, many conversations/projects,
frame/input latency, all native platforms and real-provider usage remain open.

Retained failed run `7G20h8` stopped before measurement because Windows disallowed
`.ps1` file execution; its owned host exited 0. The runner now submits the same
read-only sampler as a PowerShell command without changing execution policy.
This was a verifier limitation, not an observed product failure.
After the run, the ancestry collector was changed from repeated scans to a linear
child index. Its tests pass and replaying all eight retained process snapshots
produces identical memory sums. The original run's sampler digest is preserved.

## MCP startup comparison, 13 October

The [MCP startup follow-up](rea-mcp-startup.md) removes unconfigured MCP utility
startup while retaining on-demand routing. The final fixed-workload record is
`logs/agent-verification-eP9HUu/result.json`, with workbench SHA-256
`ea450599160ec528deea0219c159db46ebd66e714527670afa53922aa8cfd7e5`.
The original host, workstation, profile/project workload and enabled functionality
are unchanged. The ordinary user window remained open during these measurements.

| Check | Baseline `FkFzEi` | Final `eP9HUu` |
| --- | ---: | ---: |
| Fresh-profile titlebar | 5,027 ms | 5,064 ms |
| Same-profile restart titlebar | 3,588 ms | 3,599 ms |
| Fresh idle, additional ten seconds, private committed | 2,740.65 MiB | 2,585.36 MiB |
| Fresh idle observed process count | 21 | 20 |
| MCP utility present across the eight snapshots | 8/8 | 0/8 |
| Stream Stop | 65 ms | 87 ms |
| Command Stop and owned process check | 164 ms | 183 ms |
| Full workload inference requests | 16 | 16 |
| Auxiliary title requests | 0 | 0 |
| Total UTF-8 request body bytes | 1,559,231 | 1,559,231 |

The settled idle sample is **155.29 MiB lower (5.67%)**. This is a sampled
private-commit comparison, not a physical-RAM or universal speed claim. In the
original sample the MCP utility alone accounted for 130.50 MiB of private commit;
variation in other processes also contributes to the total difference. An earlier
intermediate build (`VHQAhM`) sampled 2,534.73 MiB, illustrating that variation.
The final run stayed within every initial comparison budget above, retained the
ordinary Agent assertions and exited both owned hosts with code 0.

This optimization avoids an unused process; it does not establish a long-session
leak fix or disposal after last use. Native MCP activation/approval evidence is
recorded separately so adding MCP tool calls does not change this fixed workload.
