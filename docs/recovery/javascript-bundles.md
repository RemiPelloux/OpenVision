# Selected JavaScript bundle recovery

**16 October 2026 · Windows input 3.24.18 · static recovery only.**

All **237 selected JavaScript inputs** now have structural extraction results:
**236** from unchanged captured inputs and **one** from an analysis copy with a
portable compiler filename label. This closes the selected-bundle extraction
gap; it does not establish full application semantics, original TypeScript,
runtime equivalence or an independent build.

The [bundle index](../../curs_source/modules/3.24.18/README.md) links every input
to its extracted files. The [publication manifest](../../curs_source/manifest.json)
preserves input identities, output hashes, earlier failures and the new
`selection_coverage` counts. The [progress dashboard](../progress.md) keeps these
counts separate from feature verification.

## Final input and the Windows filename failure

`out/vs/workbench/workbench.xai-commerce-prepaid.js` has SHA-256
`f4536b24472ced5b833b627a8800ec8b7cb1d430dfd0fb37b3ae84510e671b1d`.
Its esbuild factory label begins with `import("../messages/**/*.json")` and
continues with a dependency path. Wakaru 1.14.0 used that label as an output
filename; Windows rejected its quotes and wildcard characters. This was a
filesystem publication failure, not a missing bundle.

The retry parses a separate copy and replaces that one object-method label with
an ASCII filename derived from its SHA-256. Replacement byte width equals the
original width, preserving UTF-8 byte and UTF-16 source positions. No other input
bytes change. The captured source's hash is checked before and after extraction.
This transformation is specifically recorded; it is not represented as extraction
from an unchanged input or as a runtime-safe rewrite.

The retry returned **101 modules**, zero failed modules, and one structural
provenance file. All 102 published output hashes are retained. The earlier
2,939-statement Babel fallback remains available as a historical representation;
the bundle index now selects the structural result. The earlier failed attempts
are retained locally rather than rewritten as successes.

## Verification and reproduction

The [recovery tools](../../scripts/recovery/README.md) describe prerequisites.
From the repository root:

```sh
node --test scripts/recovery/portable-labels.test.mjs
node scripts/recovery/commerce.mjs
node scripts/recovery/publish.mjs
node scripts/recovery/published-verify.mjs
```

The first three commands require the original recovery workspace and local
inputs. The final command checks the public checkout without those inputs.
Supplemental Wakaru extraction is separate from REA's scoped static Evidence;
no new REA-provider coverage or live application parity is claimed.
