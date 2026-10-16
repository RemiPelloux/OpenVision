# Recovery tools

Run these commands from the repository root with Node.js 24.18.0. They operate
on the [versioned recovery archive](../../curs_source/README.md), separately from
OpenVision's runtime and customization build.

| Task | Command | Requirements |
| --- | --- | --- |
| Verify published JavaScript and provenance hashes | `node scripts/recovery/published-verify.mjs` | Git checkout only |
| Verify historical native pseudocode and Evidence | `node scripts/recovery/native-verify.mjs` | Git checkout only |
| Capture/resume current installation analysis | `node scripts/recovery/current.mjs <installation>` | Original REA workspace, existing recovery tools and supplied installation |
| Retry the commerce bundle with a portable analysis label | `node scripts/recovery/commerce.mjs` | Existing snapshot, Wakaru and REA workspace's Babel parser |
| Publish verified captured text | `node scripts/recovery/publish.mjs` | Complete local snapshot and producer reports |
| Decode captured WASM | `node scripts/recovery/wasm.mjs` | Existing local snapshot and WABT 1.0.42 |
| Export historical native analysis | `node scripts/recovery/native-export.mjs` | Historical capture, existing REA/Ghidra provider and matching inputs |
| Preserve the older text recovery | `node scripts/recovery/export-existing.mjs` | Original sibling recovery and recorded hashes |
| Inventory retained retries | `node scripts/recovery/retries.mjs` | Existing extended workbench retry reports; this does not initiate that retry |
| Check portable-label handling | `node --test scripts/recovery/portable-labels.test.mjs` | Original REA workspace's Babel parser |

`stage-verify.mjs` owns resumed-stage verification. `portable-labels.mjs` creates
an analysis-only input with equal-width filename labels; it rejects lossy UTF-8
and leaves the captured source unchanged. Reports record parser/engine identity,
original and derived input hashes, replacement ranges and output hashes.

These scripts were previously named `desktop/recovery-<name>.mjs`; they now live
here as `<name>.mjs`. In particular, the historical native archive's immutable
README mentions `desktop/recovery-native-export.mjs`; its current location is
`scripts/recovery/native-export.mjs`. The old provenance and pseudocode are kept
byte-for-byte. Verification tools require neither the target app nor a decompiler.

See the [coverage dashboard](../../docs/progress.md),
[final-bundle recovery report](../../docs/recovery/javascript-bundles.md) and
[repository layout](../../docs/engineering/repository-layout.md).
