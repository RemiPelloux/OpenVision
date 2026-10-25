# Modelly, Jupyter and search integration assessment

Updated 25 October 2026. This note records what was actually found in the
local Git workspace and the safe integration path for OpenVision.

## Verified inventory

Modelly is available at
[`github.com/RemiPelloux/Modelly`](https://github.com/RemiPelloux/Modelly),
audited at commit `627459ae349045ccb525248626d16d030689714c`. Its package is
`modelly-abm`, requires Python 3.12+, and is licensed under Apache-2.0 with
the repository `NOTICE` file retained for redistribution. It is an agent-based
simulation framework. Its notebooks are ordinary IPython/Jupyter consumers;
Modelly does not provide a kernel or notebook execution service.

The OpenVision checkout contains two usable local subsystems:

| Capability | Current OpenVision owner | Verified state |
| --- | --- | --- |
| Jupyter execution | `desktop/jupyter-kernel.mjs` and `desktop/jupyter-extension/` | Five local Windows tests pass, including persistent state, rich outputs, interrupt/release and aggregate output bounds |
| Codebase search | `desktop/retrieval-index.mjs`, `retrieval-store.mjs`, `retrieval-service.mjs` | SQLite FTS5/BM25, incremental updates, bounded worker lifecycle and optional saved-provider embeddings |
| REA search tools | REA `analysisSearch` and provider-specific Hopper/Ghidra search contracts | Binary and artifact investigation semantics; not a drop-in codebase index |

The Modelly revision is now pinned for this review. Its runtime dependencies
include NumPy, pandas, SciPy and tqdm; visualization, geospatial, experiment
and distributed execution features are optional extras. Adding the whole
package to the desktop host would increase installation size and Python process
memory for a feature OpenVision already provides through its local kernel.

## What can be reused safely

1. **Modelly LLM policy concepts.** `modelly.llm.Client` centralizes provider
   adapters, deterministic request keys, replayable SQLite/JSONL responses,
   token/cost reservations, bounded concurrency and retry policy. These ideas
   map well to OpenVision's provider-routing boundary, but the implementation
   should be ported to the existing JavaScript runtime. Running Modelly as a
   Python sidecar for each Agent request would add process startup, IPC and
   duplicate memory costs.
2. **Model descriptors, if a future Modelly extension supplies them.** Any
   registry must feed OpenVision's existing provider/model catalog only through
   an adapter that preserves provider ID, model ID, capabilities, context
   limits and source evidence. It must not create a second catalog or silently
   replace saved selections.
3. **Jupyter notebook examples.** Modelly's notebooks can run unchanged in
   OpenVision's local Python kernel when the selected environment has
   `modelly-abm` installed. The optional `OpenVision Modelly support` extension
   exposes environment detection, a starter notebook, and an explicit
   install/remove flow. Installation is never automatic.
4. **Search indexes, only with a proven ownership contract.** A searcher may
   replace the lexical backend only if it supports incremental edits, renames,
   deletes, ignore rules, path-scoped queries, deterministic ordering and
   source-line provenance. Otherwise it belongs in an experiment, not the
   shipped index.

Modelly's spatial caches, vectorized NumPy paths and data collectors optimize
simulation workloads, not workspace file retrieval. The REA searchers are valuable for reverse-engineering evidence, but their
address/provenance and target-identity contracts differ from a workspace code
index. Wiring them directly into Agent code search would lose semantics and
would not be a performance improvement.

## Current performance evidence

The pinned Windows x64 runtime (Node 24.18.0, 12 CPUs, 16 GiB RAM) produced:

- Retrieval quality: recall@5 **0.947**, recall@10 **0.970**, MRR **0.865** on
  the 50-query corpus.
- 1,000-file cold index: **864 ms**, **11.8 MiB** peak worker heap,
  **83.8 MiB** peak process RSS.
- Warm queries: **10.4–29.9 ms** in the sample.
- One edited file: **1 read / 1 parse**, **327 ms**, without a full
  enumeration.
- Warm reopen: **0 file reads**, **330 ms**, stat reconciliation only.

These are subsystem measurements, not a whole-application RAM claim. They are
the baseline that any Modelly or replacement searcher must beat while keeping
the same result and evidence coverage.

## Implemented health fix

Jupyter output was previously bounded per message. The bridge now enforces the
2,000,000-byte budget across the complete cell, emits one `OutputLimit` error,
continues draining the kernel to idle, and returns `success: false`. This keeps
the desktop event array bounded when a cell prints many small messages. The
five-test Jupyter suite verifies this behavior.

## Optional plugin contract (implemented)

The Modelly integration is a separate, opt-in extension copied into source
builds at `source/app/extensions/openvision-modelly/`. Its pinned manifest is
maintained in `desktop/modelly-plugin-manifest.mjs`:

- repository commit: `627459ae349045ccb525248626d16d030689714c`
- package: `modelly-abm` `1.3.2`, Python `3.12+`
- archive: official GitHub source archive, verified with SHA-256
  `4350f64ff202128993dc9095348e2c0608c86cabda642fcab09174010b98e865`
- license: Apache-2.0; the upstream `NOTICE` remains part of the attribution
  record

The extension adds **Modelly: Install support**, **Modelly: Check Python
environment**, **Modelly: Remove support**, and **Modelly: Open starter
notebook**. Install chooses a Python executable, verifies the archive before
running pip, and installs Modelly with its declared dependencies. Remove
uninstalls only `modelly-abm`, preserving shared packages. Failed downloads,
checksum mismatches, unsupported Python versions and failed pip commands leave
no partial installation. The archive is cached in extension global storage and
is removed when Modelly support is removed.

The plugin is lazy: it starts no Python process until a user runs one of its
commands, and normal Agent/model requests never pass through Modelly.

## Recommended integration slices

| Slice | Decision | Reason |
| --- | --- | --- |
| Modelly as a Python runtime dependency of the desktop | Reject | Adds a second runtime and memory footprint without replacing a missing OpenVision capability |
| Modelly notebooks in OpenVision | **Optional plugin, implemented** | Local kernels execute notebooks; the plugin owns pinned download, install, status, removal and examples |
| Modelly LLM cache/budget/retry semantics | Port to JavaScript | Can reduce duplicate provider calls and make token limits explicit without a sidecar |
| Modelly plugin entry points | Reference only | Python packaging discovery does not map to the desktop extension host; use OpenVision's existing lazy extension lifecycle |
| Modelly spatial/vectorized algorithms | Reject for retrieval | Different data model and no evidence/provenance contract for source files |

## Integration gate for Modelly

For any Modelly-backed implementation, evaluate it in this order:

1. Keep the audited revision and Apache-2.0/NOTICE attribution in the
   integration record; record whether an optional Modelly LLM provider sends
   data to a hosted service.
2. Compare model/provider, kernel, and search contracts against the owners
   above. Add an adapter before changing application code.
3. Run the same Jupyter and retrieval correctness fixtures.
4. Measure cold and warm latency, CPU time, worker heap, process-family RSS,
   retained index size and cancellation/cleanup behavior.
5. Keep the current implementation unless the candidate improves a measured
   bottleneck without lowering recall, provenance, cancellation, or data
   destination guarantees.

The next implementation slice is a JavaScript provider-policy adapter with
bounded in-flight deduplication, explicit token reservations and replay-safe
request identities. The environment check and starter notebook are now part of
the Modelly plugin. OpenVision continues using its existing local Jupyter and
SQLite retrieval paths until any replacement adapter demonstrates equal
correctness and lower measured cost.
