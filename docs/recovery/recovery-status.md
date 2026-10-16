# Recovery and product control

[Progress, percentages and gate-based ETA](../progress.md) ·
[Prioritized implementation roadmap](../planning/roadmap.md#ranked-rea-implementation-and-verification-work) ·
[Acceptance ledger](../planning/completion-sprints.md)

OpenVision runs editable recovered application JavaScript with a compiled native
Electron host and native addons. It is not a complete original-source rebuild.
This distinction also applies to the Agent and editor: local JavaScript behavior
can be changed, but a remote model's speed, implementation and capabilities
remain controlled by its provider.

The full original source is not tracked in Git or available locally. The
[`curs_source` archive](../../curs_source/README.md) now contains actual readable
application code, extracted modules, provenance and native pseudocode. Its
manifest identifies each representation and input version.

## Observed recovery coverage

The current Windows snapshot is **3.24.18**, captured on 2026-10-16. The separate
historical snapshot is **3.21.13**, captured on 2026-10-12. Counts describe
different representations; they cannot be added or presented as a percentage
of original source recovered.

| Layer | Evidence | Remaining limitation |
| --- | --- | --- |
| Current installation | 15,161 files captured; source hashes retained | Includes compiled artifacts and dependencies |
| Current readable files | 13,925 formatted; 916 application files published in Git | Installed dependencies remain local; formatting does not recover original names or TypeScript |
| Current JavaScript | All 237 selected inputs have structural results: 236 unchanged inputs, one derived input with a portable compiler filename label | [Final retry](javascript-bundles.md) returned 101 modules; original source and runnable module equivalence remain unproven |
| Original source maps | Zero present; zero embedded original sources recovered | Original comments, types and build inputs are missing |
| Current WebAssembly | 23 paths; all 15 distinct payloads validated and decoded to local WAT | Supplemental WABT decoding; not original source or complete REA WASM Evidence |
| Historical Windows native payloads | All 52 hashes checked; nine modules have pseudocode for 4,647 identified internal procedures | 43 images have metadata only; pseudocode cannot rebuild the native host |
| Current Windows native payloads | 53 paths inventoried by hash | No matching pseudocode in the historical export; versions must not be combined |
| Hosted services | Client request code is available | Server source is absent from the installation |

The [3.24.18 module index](../../curs_source/modules/3.24.18/README.md) is the
browsable source-level index for every selected JavaScript input; the
[manifest](../../curs_source/manifest.json) is authoritative for hashes and
representation provenance. The [native timeout report](rea-agent-timeout-recovery.md)
links this recovery boundary to the remaining OV-102/OV-204 feature gates.
The latest publication check passed for **30,111/30,111** files and
**237/237** selected inputs; use `npm run recovery:verify` to repeat the
published-text and historical-native checks from the repository root.

Published code and native Evidence live under `curs_source/javascript`,
`curs_source/modules`, and `curs_source/native`. Complete local captures,
dependency text, JavaScript Evidence and decoded WAT live in
`curs_source/snapshots/<version>` and remain ignored. The historical inputs also
remain in the sibling recovery directory. `curs_source/manifest.json` records
publication hashes, exact input identities and scoped REA results. No raw
binaries or installed dependency trees are added by this recovery publication.

Native overview evidence for the recovered addon:
`ev_18bcd712c61a4015319c4e46c63b1b742d8d0dfffb521ca60ead4ddbd68e8125`.
Even 626/626 pseudocode results refer only to the procedures that the analyzer
identified in that addon. They do not establish original-source completeness,
recompilability, or runtime parity.

## What is customizable today

The build applies durable, checked transformations to the recovered workbench,
Agent host and Agent execution modules. OpenVision owns its local profile UI,
branding, provider settings, model discovery, request relay, context invalidation,
local user-rule persistence, and local import tools. The
[REA follow-up](rea-local-rules.md) records the rule service replacement and
subagent parameter fix. Native host binaries and addons are still required from
matching platform inputs. The source tree is under `source/app`; build-time
customizations are under `desktop`.

Built-in telemetry collectors and upload paths are disabled in the core,
workbench and bundled extensions. Settings imports preserve the disabled policy.
The [telemetry audit](rea-telemetry-audit.md) records the implementation, 24 focused
tests, native Windows observation, and remaining network/platform assurance gaps.

Built-in extension checksums now describe the actual local extension files after
source assembly. Verification stays enabled. `build/extension-integrity.json`
records prior and current hashes; original host manifests are backed up. These
hashes establish local-build consistency, not upstream vendor authenticity.

## Unfinished product work

The [custom autocomplete adapter](rea-custom-autocomplete.md) now routes bounded
nearby code to a selected provider and uses native Tab acceptance/undo, verified
on Windows with a local HTTP fixture. [Global MCP configuration](rea-profile-isolation.md)
now follows the OpenVision data directory. [Project workflow checks](rea-project-workflows.md)
cover Unicode save/undo/redo, multi-root search and a configured native task.

The agreed 80% local-feature target is tracked by `npm run status:features` against
the fixed [42-story acceptance baseline](../planning/feature-acceptance.json). At least 34
stories must be fully verified. Individual passing assertions and partial stories
do not increase that score. This work does not change native decompilation totals.

See the [feature gap audit](feature-gap-audit.md) for measured recovery
percentages, feature-by-feature limitations, the native file checklist, and
acceptance gates for an independently buildable OpenVision product.

Full native source recovery, an independent native rebuild, replacement of
unavailable hosted services, and complete feature parity remain unfinished.
Third-party completion, tool use, vision and reasoning protocols require
separate live tests. Windows editor, import and model-routing checks do not
establish macOS/Linux runtime behavior. See [performance verification](../performance/performance.md)
for the narrower behavior actually tested in this optimization pass.
