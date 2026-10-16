# Recovered application code

**This folder contains actual recovered code, extracted modules and native
pseudocode. It is not a complete original-source checkout or an independently
buildable application.** Original types, comments, names and build inputs
are not generally recoverable from shipped bundles. Server implementations are
absent from the installation.

## Browse the code

| Folder | Contents | Availability |
| --- | --- | --- |
| [`javascript/3.24.18`](javascript/3.24.18/) | Readable application and extension JavaScript, declarations, manifests, HTML and CSS | Tracked in Git; installed dependencies excluded |
| [`modules/3.24.18`](modules/3.24.18/README.md) | Smaller extracted files, resources and provenance, indexed by their input bundle | Tracked in Git |
| [`native`](native/README.md) | Historical 3.21.13 Ghidra pseudocode and per-function REA Evidence | Tracked in Git; exact coverage in its manifest |
| [`manifest.json`](manifest.json) | Exact input/output SHA-256 identities, publication paths, extraction attempts and current native inventory | Tracked in Git |
| `snapshots/3.24.18` | Captured current installation, readable dependencies, extraction attempts, REA Evidence and decoded WASM | Local analysis files; ignored by Git |
| `snapshots/3.21.13` | 67,595 hash-verified historical exports, including full module representations and Evidence | Local historical files; ignored by Git |

The publication keeps original installation paths in the manifest. For browsing,
`out` directory segments become `editor`, `dist` becomes `bundles`, and embedded
bundle paths named `node_modules` become `embedded`. Installed dependency trees
are excluded; library code extracted from inside bundles remains available.
Module directories combine input-content and input-path hashes: identical bundle
bytes at different paths can carry different provenance. Published file contents
match their recorded recovery outputs. Extracted filenames ending in `.ts` or
`.tsx` do not prove recovery of original TypeScript.
Deep extracted paths use a short filename plus a path digest under `files/` to
avoid Windows path-length failures; their original producer paths remain in the
manifest.

Useful application entry points:

- [Desktop main process](javascript/3.24.18/editor/main.js)
- [Editor workbench](javascript/3.24.18/editor/vs/workbench/workbench.desktop.main.js)
- [Agent execution](javascript/3.24.18/extensions/cursor-agent-exec/bundles/main.js)
- [Agent host](javascript/3.24.18/extensions/cursor-agent-host/bundles/main.js)
- [Local Agent runtime](javascript/3.24.18/extensions/cursor-local-agent-runtime/bundles/main.js)
- [Searchable bundle index](modules/3.24.18/README.md) for smaller files instead of large entry points

The [3.24.18 module index](modules/3.24.18/README.md) is generated from the
[publication manifest](manifest.json). Use the index to browse each selected
input, the manifest to verify its exact hashes and retry provenance, and the
[source-to-gap map](../docs/recovery/feature-gap-audit.md#source-index-to-implementation-gaps)
to connect recovered owners to maintained OpenVision code and acceptance gates.
The index currently covers **237/237** selected inputs; that is structural
extraction coverage, not a claim that the modules are independently runnable
or that the original feature set has been recovered.

## Current Windows snapshot: 3.24.18

The installed application was captured on 16 October 2026. Its executable
SHA-256 is `982b7d93952d3b156abb7cc4f0204b9055b1dd0f3c273aef0d58ec7abe0e7510`.

| Layer | Observed result | Boundary |
| --- | --- | --- |
| Installation | 15,161 files, 1,022,502,571 bytes; capture hashes checked | Includes compiled artifacts and installed dependencies |
| Readable text | 13,925/13,925 formatted; 916 application files published | Formatted installed dependencies remain local |
| Selected JavaScript | All 237 inputs have structural results: 236 unchanged inputs and one derived analysis input with a portable filename label | Static extraction is not a runnable module reconstruction ([final retry](../docs/recovery/javascript-bundles.md)) |
| Original maps | Zero parsed source maps and zero embedded original sources | Remote map references recorded without fetching |
| WebAssembly | 23 paths, 15 distinct payloads; all validated and decoded to WAT with WABT 1.0.42 | WAT is local low-level text, not original Rust/C++ source |
| Current native payloads | 53 executable/library/addon paths inventoried by hash | None has matching pseudocode in the historical native export |

Windows structural extraction uses Wakaru 1.14.0 alongside REA static analysis.
REA's JavaScript recovery provider supports Linux; it was not used to claim
Windows extraction. WABT decoding is likewise supplemental. REA operation IDs,
selected paths and coverage remain in the manifest and local Evidence.
`complete-within-view` describes a selected analysis view, not complete
application semantics.

The first extraction attempt failed because raw extraction and source-map
emission were combined. Its failure records remain locally. Corrected extraction
completed 235 inputs; an extended bounded retry completed the large workbench
bundle. The remaining input hit an invalid Windows output filename and received
a separate Babel statement extraction. A subsequent offset-preserving filename
label adjustment in an analysis copy produced 101 structural modules; the
original captured input remained unchanged. Both representations and their
attempts remain distinct. Published totals are 916 application files and 29,195
derived files, including the retained fallback.

## Historical native recovery: 3.21.13

Nine modules contain pseudocode for **4,647/4,647 Ghidra-identified internal
procedures**, with no explicit or empty-result failures. All 52 historical native
file identities were rechecked. The other 43 images have metadata only. See
[native coverage](native/manifest.json) for each target.

These figures apply to the older executable with SHA-256
`757a63d3fe143103f8525f322b890de625061e827711afde197d63f833142242`.
They must not be reported as native coverage of 3.24.18. Compiler artifacts,
uncertain types and incomplete machine-code function discovery remain possible.
The `.c` files are decompiler pseudocode and cannot rebuild the native host.

## Verify the Git checkout

From the repository root, using Node.js:

```sh
node scripts/recovery/published-verify.mjs
node scripts/recovery/native-verify.mjs
```

These check source hashes and native pseudocode against retained Evidence.
Neither an installed application nor a decompiler is required. Verification does
not establish runtime equivalence or original-source completeness. The local
Git attributes preserve exact recovery bytes across Windows/Linux/macOS clones.

The recovery-producing scripts additionally require this original REA workspace,
its pinned Node toolchain, matching captured inputs and existing analysis tools.
`scripts/recovery/current.mjs` captures and analyzes a supplied installation;
`scripts/recovery/publish.mjs` publishes verified local outputs. Retained reports
and applicable hashes are checked before orchestration resumes. Failures remain
recorded. No target code was executed to produce these recovery exports.

For progress and remaining work, see the
[percentages and gate-based ETA](../docs/progress.md),
[gap audit and documentation owners](../docs/recovery/feature-gap-audit.md#latest-documentation-and-source-reconciliation),
[source-to-implementation map](../docs/recovery/feature-gap-audit.md#source-index-to-implementation-gaps),
[prioritized implementation backlog](../docs/planning/roadmap.md#ranked-rea-implementation-and-verification-work),
[acceptance ledger](../docs/planning/completion-sprints.md) and
[Rust rewrite plan](../docs/planning/rust/rust-roadmap.md).

For the runnable OpenVision application, use the [run guide](../docs/guides/native-runtime.md).
Editing this archive does not automatically modify the prepared app; durable
OpenVision changes belong in its customization and build pipeline.
