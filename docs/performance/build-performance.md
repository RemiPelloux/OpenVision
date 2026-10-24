# Build performance (Linux x64)

Measured 24 October 2026 on the coordinator host (4 CPUs, 15 GiB, Node 24.18.0),
`npm run build:desktop` from a clean tree (`source/`, `electron-host/`,
`build/source-build.json` and `build/namespace-journal.json` removed).

| Build | Before | After |
| --- | --- | --- |
| Clean, cold cache (`build/cache` empty) | 575 s | **459 s** |
| Clean, warm cache (same code, same inputs) | 575 s | **132 s** |
| Peak V8 heap | ~2.0 GiB (OOM at the 2.2 GiB default) | ~2.0 GiB, under the 6 GiB `build:desktop` limit |

## What changed

- **Parallel source assembly.** The 17,026 recovered files are copied, hashed and
  transformed through a pool of 16 instead of one at a time: 111 s → ~9 s. Build-flag
  records keep manifest order, so `build/source-build.json` is unchanged in content.
- **Restorable build cache.** `cachedFile` (33 call sites, every heavy bundle
  customization) now keeps each output in `build/cache/objects/`, compressed with zstd
  level 3 (≈5× on minified bundles; 56 MB restores in ~0.15 s). A clean rebuild that
  re-assembles the same input restores the output instead of re-running the transform.
  - The restore key is the call site's recipe, its exact input SHA-256 **and** a
    fingerprint of every customization module, the parser and its lockfile and the Node
    version, so any code change re-runs the transforms.
  - Restored bytes are checked against the recorded SHA-256; a missing or corrupt
    object falls back to the transform.
  - All 33 call sites were audited: each writes only its target, plus `backups/` and
    `build/` side files that persist across clean builds.
  - Stale objects are pruned at the end of each build (≈500 MB for 96 outputs).
  - `OPENVISION_NO_BUILD_CACHE=1` forces every transform to run (use for release builds
    when in doubt).
- **Verification.** A cold and a warm clean build produced byte-identical trees: all
  17,142 files under `source/` and `electron-host/` have the same SHA-256.

## Remaining cost

A warm build spends its time in ~60 smaller customizations that do not use `cachedFile`
yet (2–11 s each, `installNetworkDefaults` the largest) and in assembly I/O.

## Release archive compression

Release archives are `.tar.zst` (Node's bundled libzstd, level 12, 128 MiB
long-distance window, frame checksum). Measured on the 1.1 GiB Linux package:

| Codec | Size | Compress | Decompress |
| --- | --- | --- | --- |
| gzip -9 (previous) | 396 MB | 131 s | 7.9 s |
| **zstd 12, long window (current)** | **325 MB** | **55 s** | ~2 s |
| xz -6 (rejected) | 308 MB | 133 s | 4.4 s |
| zstd 19, long window | 304 MB | 215 s | 1.8 s |

xz was rejected because its output differs between single- and multi-threaded runs,
which would break reproducible releases; zstd output does not depend on the thread
count. The installer and `release:verify` pick the decoder from the archive's magic
bytes, so `.tar.gz` releases still install, and no system zstd is required.
Native check: `verify:upgrade:linux` (`0pCpVD`) passes with zstd releases (install,
SIGKILL at every phase, upgrade, rollback, uninstall, purge).
