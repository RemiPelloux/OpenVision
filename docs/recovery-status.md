# Recovery and product control

OpenVision runs editable recovered application JavaScript with a compiled native
Electron host and native addons. It is not a complete original-source rebuild.
This distinction also applies to the Agent and editor: local JavaScript behavior
can be changed, but a remote model's speed, implementation and capabilities
remain controlled by its provider.

## Observed recovery coverage

The local recovery reports describe the Windows input snapshot reviewed on
2026-10-12. Counts describe different representations, so they must not be added
or presented as a percentage of original source recovered.

| Layer | Evidence | Remaining limitation |
| --- | --- | --- |
| Installation snapshot | 17,092 files captured; source hashes retained | Captured files include compiled artifacts |
| Readable files | 15,799 formatted; six unchanged fallback files | Formatting does not recover original variable names or TypeScript |
| JavaScript bundles | 224 selected; six large bundles retried successfully from raw inputs | Module recovery is an analysis representation, not original source |
| Original source maps | Zero present; zero embedded original sources recovered | Original comments, types and build inputs are missing |
| WebAssembly | All 15 distinct payloads validated and decoded to WAT | WAT is a derived low-level representation |
| Windows native payloads | All 52 have PE metadata; one addon has pseudocode for 626 identified procedures | 51 payloads have no pseudocode coverage; complete function discovery is not established |
| Hosted services | Client request code is available | Server source is absent from the installation |

Local evidence lives in the recovery directory: `reports/summary.json`,
`reports/installation-manifest.json`, `reports/rea-coverage.json`,
`reports/rea-ledger.json`, `native/summary.json`, `native/inventory.json`, and
`native/cursor-proclist/coverage.json`. This machine's recovery directory is the
sibling `cursor` directory. Generated code, binaries and evidence remain outside
Git. Preparation of another input version requires its own matching analysis.

Native overview evidence for the recovered addon:
`ev_18bcd712c61a4015319c4e46c63b1b742d8d0dfffb521ca60ead4ddbd68e8125`.
Even 626/626 pseudocode results refer only to the procedures that the analyzer
identified in that addon. They do not establish original-source completeness,
recompilability, or runtime parity.

## What is customizable today

The build applies durable, checked transformations to the recovered workbench,
Agent host and Agent execution modules. OpenVision owns its local profile UI,
branding, provider settings, model discovery, request relay, context invalidation,
and local import tools. Native host binaries and addons are still required from
matching platform inputs. The source tree is under `source/app`; build-time
customizations are under `desktop`.

Built-in extension checksums now describe the actual local extension files after
source assembly. Verification stays enabled. `build/extension-integrity.json`
records prior and current hashes; original host manifests are backed up. These
hashes establish local-build consistency, not upstream vendor authenticity.

## Unfinished product work

Full native source recovery, an independent native rebuild, replacement of
unavailable hosted services, and complete feature parity remain unfinished.
Third-party completion, tool use, vision and reasoning protocols require
separate live tests. Windows editor, import and model-routing checks do not
establish macOS/Linux runtime behavior. See [performance verification](performance.md)
for the narrower behavior actually tested in this optimization pass.
