# Worker report: OV-501 and OV-1005 data destinations and telemetry (Linux x64)

Branch `ov/data-telemetry`, 18–19 October 2026. Stories OV-501 (where project
data is processed) and OV-1005 (built-in telemetry never collects or uploads).
Linux x64 only, in a cloud container: Ubuntu 24.04, kernel 6.18, 4 CPUs,
15 GB RAM, no swap, Node 24.18.0, Xvfb 1920×1080. Every native verifier ran
as the unprivileged `ov` user, one at a time. All inference is controlled
loopback fixtures. No live provider, Windows or macOS was used.

**Status: in progress.** This report is written incrementally; sections marked
_pending_ are filled in as runs complete.

## Summary

_pending_

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Data-destination capture of terminal, commit-message generation, JS debug, MCP STDIO and local VSIX workloads | Implemented; native runs pending |
| 2 | Per-process native addon inventory (`addonsInventoried`, `noAddonDirectSockets`) | Implemented; first native inventory recorded (10 addons) |
| 3 | Clean-quit flake during idle indexing | Recording implemented; 10-run series pending |
| 4 | Missing `verify:telemetry:extended` workloads | Implemented; native runs pending |
| 5 | Drifted client-gate defaults | Fixture, classification and test committed; cached bootstrap measured as applied and fixed; rerun pending |
| 6 | Final reruns | Pending |

## Defects found and fixed

_pending_

## Verification

_pending_

## Recommendation per story

_pending_

## Moved to platform/live stories

- Windows and macOS captures of every workload above.
- Workloads with a signed-in Cursor account.

## Defaults pending owner decision

- OV-501/OV-1005 scope is the local profile only.
- Upload paths that need a positive server answer are recorded as "inferred
  from code, unreachable by owner fix".
- User-installed extensions and MCP servers are an accepted residual.
- No drifted gate is switched on without owner approval.

## Open risks

_pending_
