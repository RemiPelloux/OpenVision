# Performance review — 2026-10-12

The [15 October autocomplete and stream review](autocomplete-stream-performance.md)
moves debounce ahead of document/hook preparation and bounds unfinished Agent
SSE events. It includes before/after measurements, native verification, parsing
overhead and remaining control-plane memory findings.

The [15 October account performance review](account-performance.md) fixes
unchanged-catalog route rebuilds, repeated failed-host queries and duplicate
retention of streamed output. It includes equivalent before/after measurements,
CPU and worker peak RSS. The subsequent [native utility listener fix](../engineering/utility-process-ownership.md)
removes reproduced completed-run listener accumulation; whole-app RAM savings
remain unmeasured.

The [13 October model-catalog follow-up](model-memory-optimization.md) removes
repeated provider parsing, eager autocomplete reasoning data, per-provider whole
catalog publication and quadratic manual-model merging. It includes reproducible
before/after heap and timing measurements with explicit scope and cache costs.

The [Agent workspace context follow-up](context-memory-optimization.md) bounds
foreground/background folder work and shares repeated Git reads per collection.
Its 2,000-folder synthetic workload reduced reads from 4,000 to 40 and sampled
JavaScript heap growth from 17.82 MiB to 2.01 MiB.

This pass reduces repeated build allocations, removes one JavaScript/TypeScript
server by default, and gives import previews an explicit lifetime.

## Measurements

Measured locally on Windows 11 x64, Ryzen 5 5500, 16 GB RAM, Node 24.18.0,
with the prepared OpenVision runtime. These are local observations, not
cross-platform benchmarks or guarantees for other projects.

| Measurement | Before | After |
| --- | ---: | ---: |
| Unchanged customization build duration | 6.806 s | 0.398–0.449 s |
| Build process sampled peak private memory | 1,147.6 MiB | 107.2–122.0 MiB |
| Editor process tree median private memory, language-server comparison | 2,246.6 MiB | 2,156.2 MiB |
| TypeScript server median private memory | 294.5 MiB across two servers | 194.5 MiB in one server |

Build measurements sample the build process every 50 ms: one existing-build
baseline and three cache-hit runs. The cache was populated before timing the
optimized runs. These figures describe the build step executed by `npm start`,
not total time to an interactive editor. First builds and changed bundles still
need parsing and can allocate substantially more memory.

The language-server comparison used the same running application, profile,
Playground workspace, and open JavaScript file. It switched the syntax-server
setting from `auto` to `never`, waited ten seconds after each change, then took
five samples two seconds apart. It did not restart the application. The result
is about 90 MiB less private memory for the full application process tree and
100 MiB less within the TypeScript servers. Other processes fluctuate.
Working sets include shared pages; private bytes are used for the comparison.
The application still uses about 2.1 GiB of private memory in this workload.

Raw local evidence is in ignored `logs/build-baseline.json`, `build-cached.json`,
and `memory-language-server-comparison.json`. An earlier comparison across an
application restart is not used to attribute runtime savings.

## Changes and tradeoffs

- One owner now applies local-profile, cloud-UI, and provider transformations to
  each bundle. Streaming SHA-256 checks skip unchanged bundles. The cache binds
  output content to customization code, its dependency lockfile, and Node version.
  Direct source edits invalidate it even when file size and timestamp match.
  Failed transformations do not create successful cache entries. Backups and
  transformation records remain local.
- JavaScript/TypeScript defaults to `js/ts.tsserver.useSyntaxServer: "never"`.
  Completion and diagnostics use the semantic server. Folding and symbols can
  wait behind expensive semantic work. Set `"auto"` to prefer responsiveness
  over this memory saving. Explicit current and legacy preferences are preserved;
  applying the default backs up the prior user settings.
- New starter workspaces include only Playground. Application source and tools
  are available in `OpenVision Development.code-workspace`. Builds preserve
  existing workspace folder choices. This machine's original three-folder
  workspace was backed up before removing its two application-development roots.
  No separate RAM reduction is attributed to this workspace change.
- Import previews release their plan and listeners on cancellation, changed
  inputs, replacement, apply, renderer navigation, and renderer destruction.
  A pending plan cannot repopulate a preview after its renderer disappears.
  Another renderer cannot consume or invalidate an owned preview by its token.

## Verification and remaining findings

Local syntax checks, portable tests (23 passed, one macOS-only skip), and desktop
tests (nine passed) completed. Regression coverage includes content/recipe cache
invalidation, failures, preview ownership and lifetime, workspace preservation,
and preservation of language-server preferences.

Live Windows checks passed for settings import/restore and custom-provider
discovery, secret storage, persistence, model picker, and inference using a local
fixture endpoint. Inferred JavaScript completion offered `language`, `name`, and
`ready` from the project's returned object in single-server mode. Temporary
editor changes were undone. Real macOS/Linux execution remains unverified.

The next review priorities are:

1. Several recovered built-in extensions fail their existing integrity checks
   (`Hash mismatch for files: dist/main.js`), including retrieval and MCP helpers.
   The same failures appear in logs from before this optimization. Source
   assembly currently substitutes readable recovered files for shipped extension
   bytes. Investigate that producing boundary and retain verifiable runtime
   inputs separately from readable analysis outputs. Successful chat inference
   does not establish parity for these extension-backed features.
2. The launcher records a spawned PID even when that process forwards its request
   to an existing application. Verification must establish the live process and
   debugging endpoint rather than assume the launch record proves ownership.
3. Provider search rebuilds all matching model rows per keystroke. Current
   catalogs are small; measure a large catalog before introducing virtualization.

The extension checksum issue is now addressed at the source-assembly boundary:
the local manifest is regenerated from the assembled extension files and the
existing runtime verification remains enabled. This establishes local build
consistency, not vendor signature authenticity. The launcher and native/source
coverage limitations remain as described in [Recovery and product control](../recovery/recovery-status.md).

The workbench already batches streamed text at a 16 ms frame boundary and
virtualizes transcript rows. OpenVision adds cancellation cleanup for discarded
generations so pending drain waiters and timers are released immediately. Model
settings independently mount at most 40 provider rows and search the full
catalog. A 10,000-model browser fixture mounted 40 rows while preserving all
models and saved state.

GitHub Actions remains disabled; all checks in this pass ran locally.
