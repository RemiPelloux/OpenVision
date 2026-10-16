# WASM recovery follow-up

Historical results below are superseded for record counts by the
[14 October follow-up](rea-wasm-inventory.md): **14/15** complete REA records.

Audit date: 13 October 2026. Input: the existing Windows 3.21.13 installation
snapshot. This follow-up preserves the original artifacts and the earlier REA
records. It does not execute WASM or modify the native analysis databases.

## Measured coverage

| Measurement | Verified count | Meaning |
| --- | --- | --- |
| Inventoried WASM paths | 22 | Some paths contain identical bytes |
| Distinct WASM payloads validated and decoded to WAT | 15/15 | Existing WABT 1.0.42 results; all input and WAT hashes rechecked in this pass |
| Complete REA WASM Evidence records retained | 10/15 (66.7%) | Five remain blocked; this percentage describes records only |
| Missing payloads retried with the configured WABT and pinned Node | 5/5 | Four provider timeouts and one input-size rejection; zero new complete records |
| Decoded embedded HTTP-parser payloads matched to inventoried files | 2/2 | Static identity of the normal and SIMD parser byte strings |
| Original source recovered or independently rebuilt by this pass | 0 | WAT and package metadata do not establish either result |

The 15-payload denominator is the distinct `.wasm` file inventory. It is not a
complete search for every embedded binary in JavaScript, a feature denominator,
or a percentage of the original product recovered. No 95% product-completeness
claim follows from these numbers.

## Five remaining complete-record gaps

Paths below are relative to `resources/app` in the original installation.
Function counts are the WABT Function section's defined entries; imported
functions are separate. Import/export counts include every entry kind.

| Payload | Input bytes | WAT bytes | Defined functions | Imports / exports | Current REA outcome |
| --- | ---: | ---: | ---: | --- | --- |
| `extensions/node_modules/esbuild-wasm/esbuild.wasm` | 12,216,279 | 1,746,403,751 | 4,541 | 21 / 4 | Rejected by the 8 MiB input profile |
| `node_modules/@connectrpc/connect-node/node_modules/undici/lib/llhttp/llhttp.wasm` | 55,466 | 8,277,722 | 69 | 8 / 34 | 30-second producer deadline |
| `node_modules/@connectrpc/connect-node/node_modules/undici/lib/llhttp/llhttp_simd.wasm` | 55,450 | 8,277,541 | 69 | 8 / 34 | 30-second producer deadline |
| `node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-css.wasm` | 99,067 | 8,928,690 | 10 | 7 / 3 | 30-second producer deadline |
| `node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-typescript.wasm` | 1,429,463 | 9,184,012 | 11 | 6 / 3 | 30-second producer deadline |

The shipped inputs and previously decoded WAT were unchanged by SHA-256. REA's
current adapter uses a 32 MiB combined subprocess-output budget and fixed
30-second producer deadlines. Neither has a per-request override in the public
contract. The esbuild WAT alone is about 1.63 GiB, so raising only its input
limit would not make the current inline representation suitable. The safe next
step is a streamed, file-backed producer representation with retained digests,
bounded summaries and independently checked completeness. That requires REA
provider work; it is not implemented by changing OpenVision's product code.

The connected MCP server lacked `REA_WABT_BIN_DIRECTORY`. The follow-up instead
used the existing CLI, `.tools/node-v24.18.0-win-x64/node.exe`, and
`.tools/wabt-1.0.42/bin` from the parent workspace. The machine's ambient Node
22 launcher failed a stable-artifact identity check; it was not used for the
reported final outcomes. No tool installation, global configuration change,
provider-limit bypass, or invented Evidence record was needed.

## Dependency and binding provenance

These are observations from shipped package manifests, JavaScript and WABT
output, not verified upstream source-to-binary attribution.

| Payload family | Shipped package | Source/build lead | Remaining requirement |
| --- | --- | --- | --- |
| esbuild | `esbuild-wasm@0.25.9` | Manifest names `evanw/esbuild`; WASM imports use the `gojs` namespace and contains `go:buildid` and `producers` sections | Pin the actual source revision, Go toolchain and build flags; reproduce bytes or establish tested behavioral equivalence |
| HTTP parser, ordinary and SIMD | `undici@5.29.0` | Manifest names `nodejs/undici` and advertises `build/wasm.js --docker` | The advertised build script is absent from the installed package; recover the matching upstream build inputs and parser revision |
| Tree-sitter runtime and grammars | `@vscode/tree-sitter-wasm@0.1.4` | Manifest names `Microsoft/vscode-tree-sitter-wasm`, `ts-node ./build/main.ts`, and grammar dependency ranges | The build directory and lockfile are absent; resolve exact grammar revisions, CLI and Emscripten versions |
| Oniguruma | `vscode-oniguruma@1.7.0` | Manifest names `microsoft/vscode-oniguruma` and Emscripten build/package commands | Pin Oniguruma source, Emscripten toolchain and build flags before rebuilding |

The Tree-sitter `cgmanifest.json` identifies runtime commit
`fc15f621334a262039ffaded5937e2844f88da61` and version `0.25.1`.
It does not pin the CSS or TypeScript grammar revisions: their package metadata
contains `^0.23.0` ranges. Treat the runtime registration and grammar ranges as
different facts. Running the package's advertised `install-emsdk` command would
delete and replace a system directory; no such command was executed.

The HTTP client reads the two `llhttp*-wasm.js` base64 exports and calls
`WebAssembly.compile`, with a SIMD attempt and a fallback. Static decoding of
those literal exports produced exactly the corresponding `.wasm` digests:

- Ordinary: `ee82b848a5ca8e9f99fda109e59bbc20193d049a7f6bff93f4130cba5b68261c`.
- SIMD: `cd48aefa974e9fc21adec14ef0c73f0ad501b598078b12568ed129c320318154`.

This closes the byte-association question for those two embedded payloads.
It does not prove that a particular OpenVision session loads either branch.

## Retained evidence and next acceptance gates

The original ten complete records remain in the ignored
`../cursor/native/wasm-rea/evidence.json`. The Oniguruma record is present there
as `ev_14a61f42530b584aad102d6e96b3fb75cca6c9211f48ebe10c8a45200cd56c19`,
despite the earlier inline result having exceeded a transport limit. Counting
only successful inline responses would incorrectly report nine records.

New local files are retained under ignored `build/wasm-follow-up/`:

| File | SHA-256 | Contents |
| --- | --- | --- |
| `manifest.json` | `7cbb5c1ea626c0df8ce6039ba9e8d25b1747699126a701145db1d158a823f3ea` | Five retry outcomes, input hashes and saved CLI-output hashes |
| `provenance.json` | `80608802db0f2f117b3b19565b8c752dcd5e4cc4d018f33bcb6c20d502b6c0bf` | Fifteen payload/WAT hash checks, raw WABT import/export text, section counts, package identities and the two embedded-byte comparisons |
| `native-provenance.json` | `74597fc33a7688370754cdc763d3416212d3f724e92c36d0b2aa277d6bd55ccc` | Thirty addon paths and nearest shipped package metadata |

The latter two are ordinary static investigation reports, not REA Evidence.
All generated scripts, full outputs and artifacts remain ignored. Closing this
work requires a resource-safe REA result for each missing payload, pinned
upstream build inputs, and behavioral tests against the actual consumers.
Independent native rebuilding remains a separate gate in the
[native recovery inventory](native-recovery-inventory.md).
