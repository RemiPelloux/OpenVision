# WebAssembly recovery evidence

Verified 14 October 2026 against the retained shipped-byte inventory. **14 of 15
distinct payloads now have complete REA inspection records (93.33%)**, up from
10. All 15 already had validated decoded WAT; this work closes four evidence
record gaps, not four previously missing application features. The 42-story
acceptance denominator and feature-verification score do not change.

## What was completed

The ten historical records were authenticated through REA's bundle importer.
They include the regex engine record whose original complete MCP response
exceeded the transport budget: its complete Evidence had been exported already,
so analysis was not repeated. Four previously timed-out modules completed using
the existing REA 6.4.0 CLI and caller-supplied WABT 1.0.42. Their complete JSON was
written to local files rather than returned as large inline messages.

The connected MCP server lacked `REA_WABT_BIN_DIRECTORY`. The CLI fallback set
that variable only for its process environment, using the installed toolchain;
no machine configuration or packages were changed. Historical failed attempts
remain intact. The cause of their old timeouts has not been established.

| Newly completed module | Source bytes | Imports / exports | Exact Evidence ID |
| --- | ---: | ---: | --- |
| HTTP parser | 55,466 | 8 / 34 | `ev_148c85cc027288e36b5f3c433d808f353a463f7c9ad1e2d24d4d8785b68e8315` |
| HTTP parser SIMD variant | 55,450 | 8 / 34 | `ev_05cbeaa094e2232d15d5d400fec33eb0a1609a44be39e58e8f3b1ce726c5378f` |
| CSS parser | 99,067 | 7 / 3 | `ev_62a12553d8860fc16728b32237eb1c402b41906c5f3bf37fbd4b3125b3742fa9` |
| TypeScript parser | 1,429,463 | 6 / 3 | `ev_7fcadfa7a363303203573f510f29b2cc818fec49e1fdec24eeb57c3337f38e7f` |

These four records report valid modules and complete typed import/export
interfaces. The older ten records retain complete WAT/import/export evidence
under their historical contract, but do not contain the newer typed-interface
facet. Historical report completeness does not imply that missing facet was
examined.

## Exact identity and verification

All 22 inventoried shipped paths were hashed again and matched their 15
recorded payload digests. All 15 saved WAT files also matched their recorded
digests. For each complete record, its embedded WAT digest matched the saved
WAT digest, and the current tool executables matched the record's tool digests.
The four new records were added to the historical ten using REA's authenticated
bundle implementation; the MCP importer accepted all 14 records.

| Module | Input SHA-256 | WAT SHA-256 |
| --- | --- | --- |
| HTTP parser | `ee82b848a5ca8e9f99fda109e59bbc20193d049a7f6bff93f4130cba5b68261c` | `c561e467b9ed3e1d99a90ca92680a83fe011029940805d879746c981de15dbb6` |
| HTTP parser SIMD | `cd48aefa974e9fc21adec14ef0c73f0ad501b598078b12568ed129c320318154` | `14448d9988a5acacb835e5e76fb8868822189db142b9b891ba2c0c24622b8d07` |
| CSS parser | `3451e4e4bac92ba9a76998bc168f33d993cf87b947f7dd5509221a78fc2b93ca` | `e540caeebba23c8488424fa48114584fd07983ee9e71eab6c076f96542ac5678` |
| TypeScript parser | `b92b8f1b09429b26953a73928a40c56496eedfb373dc19a84bde3e205de7f438` | `3e889d1fae7023e879ddaa9b5e2d82ee506af90a03bacd7f2c4366bab343b5a1` |

WABT reports release **1.0.42**, source commit
`ff0ef7e0009402740c805a9744c09b05be063e48`. Observed executable SHA-256 values:

- `wasm-validate.exe`: `4939f4bcc66b8b0370685f656c1a33df068f5d1b245b75c94b10c74ffdd946a3`
- `wasm-objdump.exe`: `7f9cf21ca410d867261f719e01f2a0f7b5f13eb83abf0efa975a207307069ac8`
- `wasm2wat.exe`: `9ccce93d1000e4d3ba7e5c365bd1e3b5d909dea2f72c7511d584f8a8e9108873`

The retained record includes exact executable paths, banners and arguments:
validation/decoding with `--enable-all`, and section/detail inspection with
`-h -x`. Digests establish byte identity, not publisher authenticity.

Local recovery evidence is under `native/wasm-rea-20261014/` in the ignored
recovery workspace: complete per-module JSON, diagnostics, `summary.json`, and
`evidence.json`. The combined bundle contains 14 records, occupies 70,125,034
bytes, and has SHA-256
`134ea3dcb9d13186b2a3ef07cdf3f1809a07fc1ff29988ce7fdcc5d62bb1fada`.
Raw artifacts and recovery evidence are not committed to this repository.

## Remaining record and implementation work

The build helper `esbuild.wasm` is **12,216,279 bytes**, exceeding REA's current
**8,388,608-byte input limit**. The CLI rejects it before analysis. Its input
digest remains `c4f8ab7b1cd318f6423b737c5da275c57c24489fe0ea926adc04d62e58394103`.
The already retained WABT output is **1,746,403,751 bytes**, with digest
`11754b62f1ea0187d6c553d867e20e3fd0b27786876aad64ee5dd2461091662b`;
that also exceeds REA's **33,554,432-byte subprocess-output budget**. The report
continues to count this as a missing complete REA record. No limit was disabled,
and no partial record was presented as complete. Supporting it requires a
separately reviewed, bounded large-artifact/output workflow; merely increasing
the input limit would not solve the output expansion.

WAT is low-level decoded text. It does not recover original source, build
recipes, runtime bindings or complete behavior. This inspection executed WABT
only: no WASM module execution, implicit network fetch or live application
verification occurred. Recovering or replacing matching upstream implementations,
testing the JavaScript bindings, and independently rebuilding the runtime remain
separate roadmap work. No performance advantage is inferred from these records.

## 19 October Linux follow-up: esbuild without REA limits

The remaining record gap now has non-REA evidence (OV-801; acceptance of this
evidence instead of a REA record is a default pending owner decision):

- The Linux x64 3.21.13 payload has the same digest
  (`c4f8ab7b1cd318f6423b737c5da275c57c24489fe0ea926adc04d62e58394103`) and is
  byte-identical to `esbuild.wasm` in the npm `esbuild-wasm@0.25.9` tarball.
- Its embedded Go module information names `github.com/evanw/esbuild`,
  `vcs.revision=195e05c16f03a341390feef38b8ebf17d3075e14` (tag `v0.25.9`),
  `-trimpath`, `GOOS=js GOARCH=wasm`; its producers section names Go 1.23.12.
- `npm run recovery:esbuild-wasm` rebuilt it from a fresh clone of the tag with
  the pinned Go 1.23.12 archive (`go build -ldflags=-s -w -trimpath ./cmd/esbuild`,
  as in the tag's `scripts/esbuild.js`). Run `logs/esbuild-wasm-evidence-PzuSSB`:
  12,216,279 bytes, **digest identical**.
- Callers: the Agent canvas renderer in `cursor-agent-exec` and
  `cursor-agent-host` lazily imports `esbuild-wasm` to transform canvas JSX.
  The measured Linux workload did not read it
  ([loaded roles](native-loaded-roles-linux.md)).

The bounded summary (V8 validation, section headers, imports/exports, producers,
`go:buildid`) is in the run's `result.json` and the committed
[inventory](native-inventory-linux-x64.json). No WAT was produced.
