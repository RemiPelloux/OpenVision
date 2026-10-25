# Windows recovered-runtime upgrade and bounded rename

25 October 2026. Completed child story **OV-901.W0A**; parent **OV-901 stays
Partial**. This is scoped Windows evidence, not another top-level Verified story.
The baseline remains **36/44 (81.82%)**. Cloud and account flows are outside this
investigation. The current editable runtime now builds and packages with the
child fix; it is not yet a promoted public release.

## Story and acceptance

As a Windows user upgrading an existing recovered 3.21.13 runtime, I can rebuild
without discarding editable source, and multi-file rename validates its targets
with bounded filesystem work while preserving concurrent changes.

| Clause | Result and evidence |
| --- | --- |
| Upgrade the observed legacy version guard; preserve first backups; repeat safely | Producer integration tests cover both Node and worker hosts, original bytes and repeat-install identity |
| Recognize known disk-v1/cancellation guards without accepting semantic drift | Parsed rename owner and token comparison; both legacy shapes upgrade, unknown changes fail closed |
| Preserve loaded-document versions, document identity, cancellation and provider rejection | Recovered adapter executed in focused tests; native delayed-provider checks cover loaded document conflicts |
| Bound and deduplicate disk validation; stop admitting work on failure/cancel; join in-flight work | At most 8 checks, one stat per unopened URI; controlled deferred checks verify joining and cancellation |
| Reject a loaded document changed during disk validation | Version validation runs after filesystem awaits; producer regression rejects the whole result |
| Protect unopened files changed externally; preserve healthy rename/save/Undo/Redo | Native Windows runs `PYzJiy` and `Yk8mDP`, six scenarios each, both pass first attempt |
| Keep native non-Linux helpers intact | Defaults leave platform helpers untouched; explicit Linux-only replacement options fail clearly before writes |
| Rebuild the existing Windows runtime and measure the affected workload | `build:desktop`, `check:desktop`, build-integrity checks, `package:windows` and the Windows project lifecycle verifier pass; real-filesystem comparison below; no independent-build claim |

## Recovered boundary and provenance

The historical readable 3.21.13 dump's
`out/vs/workbench/api/node/extensionHostProcess.js`, SHA-256
`58e62f3efa4a7222188297344439c64d56e9b90f3cb7ce0f001a142eeba44262`,
contains `Yy = class sx` and `async provideRenameEdits` around line 128783. The
adapter awaits the extension provider, converts its edits through `Ft.from`,
and preserves a rejection reason. That recovered class, including its worker
counterpart, is executed by the focused tests with controlled dependencies.

REA analyzed exactly the selected Node bundle within the historical readable
tree. Parent Evidence:
`ev_e67531217585503809b7ec39c44b131bac56b9c421ab8d0149f0f3f487a7d4a7`.
Local export: `logs/rea-rename-2026-10-25.json`. The graph is **partial**:
15,787 inventoried files are unselected and semantic unknown retention reaches
its capacity. Neither that graph nor these tests establish whole-product parity.
The function-level conclusions above come from inspected source and executed
adapter/native checks, not inferred complete graph coverage.

## Root causes and fixes

The existing Windows runtime stopped rebuilding with `Rename version guard
shape changed`. An earlier generated v1 guard lacks the later `!before` term,
although both carry the same version marker. The disk customizer previously
matched exact multiline text across the entire bundle. It now selects the
parsed rename method, validates the snapshot and version loop by JavaScript
tokens, accepts only the two known legacy forms, and upgrades them at that owner.
The known disk-v1 body also upgrades while retaining its cancellation guard.

Disk validation previously created one promise per unique unopened target.
It now consumes one shared iterator through at most eight workers, stops queuing
on cancellation/failure and awaits every admitted check before settling. The
version loop moves after the disk awaits, closing a window where a loaded file
could change after its version had already been checked. The existing 50 ms
timestamp tolerance and no-Node-filesystem worker behavior are preserved.

After the rename correction, rebuilding exposed a second Windows blocker:
Linux helper replacement demanded extensionless `cursorsandbox`/`crepectl`
files. Its Linux-specific implementation is now platform-scoped. Defaults do
not inspect or mutate other platforms' helpers. An explicit unsupported
replacement fails rather than silently changing sandbox behavior. Linux's
missing-input failure is preserved; no new Linux native run is claimed.

Owners: [rename customization](../../desktop/rename-version-customization.mjs),
[helper options](../../desktop/helper-replacement-customization.mjs),
[adapter fixture](../../desktop/rename-adapter-fixture.mjs),
[native driver](../../desktop/verify-rename-race-extension.cjs).

## Executed verification

Source parent: `8bc4dfcc530052732297d78e6bad6c4fde4131c9`, with this change
uncommitted during measurement. Windows x64, Node 24.18.0.

- `npm run test:rename-version`: **18/18**, Node and worker recovered adapters.
- `node --test desktop/sandbox-helper.test.mjs`: **2 pass, 7 explicitly skipped**
  (Linux native cases); no Linux verification credit.
- `npm run build:desktop`: existing editable Windows runtime upgraded;
  repeat build also passes; **251 scripts, 125 manifests, 36 local main-process
  modules** validated.
- `npm run check:desktop`: pass.
- `npm run test:build-integrity`: **26/26**.
- `npm run verify:rename-race`: original four-scenario regression `Suaaid`
  passes; expanded six-scenario runs **`PYzJiy`, `Yk8mDP`** pass with
  **zero renderer errors and host exit 0**. Each result is retained under
  `logs/rename-race-<run>/result.json`.

The native runs share extension-host hash
`5109bb6cc962a382b4a1d721593ddd314769c2749f2d09d6f9d301532b2d3559`.
Expanded driver hash:
`bf555d20f6f95e9944a802730901d8bfe5b2191c82a6b0dcb1f751fdf064b63f`.
These are actual editor/extension-host/filesystem/Undo operations using a
deliberately delayed extension provider. They do not use AI or prove a real
language server's rename quality. Runs are on the upgraded existing source tree,
not a fresh recovery assembly or a newly packaged app.

## Measured resource bounds

`node desktop/benchmark-rename.mjs` (also `npm run benchmark:rename`) compares
the exact customizer at source parent `8bc4dfcc` with this implementation, in
separate child processes. Each rename returns **4,096 edits / 1,024 distinct
unopened files** and uses real Windows filesystem metadata. Full local results:
`logs/rename-benchmark-OUjlFG/result.json`.

| Metric | Before | After |
| --- | ---: | ---: |
| Peak in-flight stats | 1,024 | **8** |
| Stats per rename | 1,024 | 1,024 |
| First process-local rename, elapsed | 13.04 ms | 13.71 ms |
| Three warm runs, elapsed range | 12.09-12.98 ms | 13.38-14.08 ms |
| First-run CPU | 0 ms | 78 ms |
| Warm CPU samples | 31 / 94 / 78 ms | 47 / 63 / 0 ms |
| Child process high-water RSS after all runs | 121,104 KiB | 122,096 KiB |
| AI requests / model tokens | 0 / 0 | 0 / 0 |

This establishes a concurrency bound, **not a speed or whole-app RAM gain**.
The baseline already deduplicated URIs; there is no claim of reducing call count.
Process-cold is not cold disk: OS caches are uncontrolled. Windows CPU accounting
is coarse relative to these short tasks. Child high-water RSS includes source
parsing/setup; parent/coordinator memory and broader app costs are unmeasured.
All stat work is in the measured child, with no descendants during the rename.

## Current Windows build gate

The clean editable runtime completed the desktop build and produced
`build/packages/OpenVision-win32-x64-full-ov901/electron-host/OpenVision.exe`.
The Jupyter extension is present in the source tree and in the portable support
directory. `npm run verify:critical` recorded 16/18 applicable entries passing;
the Explorer entry is explicitly Linux-only, and the extension lifecycle entry
requires Node headers that are not installed on this host. Those are recorded as
unavailable gates rather than passes. `npm run verify:project:lifecycle` passes.

The fresh 25 October recovered input was assembled and preserved under the local
ignored `build/preserved-incomplete-*` directories, but its compact production
owners do not match several readable customizer contracts. The release build
therefore uses the previously preserved editable runtime; this is a reproducible
source-build boundary, not a claim that the fresh input has complete semantic
parity. The compact MCP lifecycle owner is marked unavailable and fails closed.

## Remaining gates

OV-901 still owns clean assembly from the retained input, packaging/cache-restore
verification, crash diagnosis, the complete Windows workflow matrix, platform
ports, install/upgrade and the other W0-W6 clauses in the
[next sprint](../planning/next-sprint.md#track-a--windows-x64-ov-901).
There is no new platform-wide, release-wide or 37/44 claim. Linux/macOS runtime
checks, physical faults, stress-load native runs and edits racing after this
adapter hands results to bulk edit are outside this child story's verification.
