# Native language workflow evidence

`desktop/verify-language.mjs` starts the assembled Windows OpenVision desktop with a disposable project, user-data directory and extension directory. `desktop/verify-language-extension.cjs` is an explicitly declared test extension that drives the public VS Code API and native editor commands. It does **not** register a replacement language provider, synthesize diagnostics or mock TypeScript. The installed `vscode.typescript-language-features` extension and its bundled compiler execute the requests.

Run from the repository after desktop assembly:

```sh
node desktop/verify-language.mjs
```

The fixture disables automatic type acquisition and makes no AI-provider requests. It does not install extensions or dependencies. All synthetic source files, logs, profiles and screenshots stay in ignored `logs/language-verification-*`; the normal user profile is untouched. Only the Electron application launched by the verifier is closed.

## Pinned observed matrix

Successful complete run: `logs/language-verification-OLUigV/result.json`, 2026-10-14, Windows x64, launcher Node **24.18.0**. The native API reports **1.128.0**; the shipped TypeScript extension reports **10.0.0**. Both the compiler package and all three native tsserver logs report **6.0.3**. The tsserver runtime itself reports Node **24.18.1**, which is distinct from the launcher.

| Artifact | SHA-256 |
| --- | --- |
| Native OpenVision executable | `3332045e575c2d3995a570e19ec6fae3eedfaabfec8a24c6049b4926e3371b2a` |
| Desktop workbench | `2112b9f58f07c174d282a9ec2885df1b26a9bcfd56c8473904b8c203ae3f7b30` |
| TypeScript extension implementation | `0cd32f949c048c39614a224538f50ebe583e1d55151689ed19d5ce10d595b686` |
| Bundled `typescript.js` | `d204cbda8982ae6c1f8f2b507129b61354f27f77056679afffa48635d60e5e0d` |
| Verification extension | `cc65c99c0183d78df6e08ccabf11c824c9ce81f8781840e2284529f68275f8aa` |

The result records hashes for the build manifest, package manifests, every input fixture and every tsserver log. Selected build/driver hashes are checked again before the run is accepted; this prevents accepting results while another process rebuilds those selected files. This is not a hash inventory of every native addon.

| Operation | TypeScript | JavaScript |
| --- | --- | --- |
| Diagnostics | Native `ts` error 2322, exact source position | Native `ts` error 2322 with `@ts-check` and JSDoc number type |
| Incremental edit | Replace one string literal with `42`; error clears, undo restores it | Same bounded-edit and restored-diagnostic check |
| Definition/navigation | Cross-file provider target and actual `editor.action.revealDefinition` editor destination | Not exercised |
| References | Five locations across declaration and two consumer files | Not exercised |
| Rename | Five edits across three files, including an initially unopened file; exact saved UTF-8 contents | Not exercised |
| Rename undo/redo | One native undo restores all original bytes; redo restores all renamed bytes | Not exercised |
| Formatting | Native Format Document, exact saved output, undo and redo | Same native command and exact output checks |
| Large-file navigation | 25,003 lines / 802,853 bytes; correct cross-file definition | Not exercised |
| Conflicting external save | Save returns false, external bytes survive, dirty local buffer survives; explicit Revert loads external version | Not exercised |

The large-file definition request took **326 ms** in this run, after prior language operations warmed the service. The file itself was first opened at this stage and excluded from the configured project's initial include set. This is one observation, not a cold benchmark, latency guarantee or before/after optimization claim. CPU time, peak process-family memory, frame latency and model-token costs were not measured. No paid AI request is part of this verifier.

The complete native sequence ran from `11:59:19.345Z` to `11:59:26.855Z`, excluding desktop launch and teardown. A screenshot is retained as `native-language.png`. No renderer `pageerror` events occurred; this does not claim that every shutdown or process log is error-free.

## Incremental transport evidence

The native editor's `onDidChangeTextDocument` events contain bounded replacements, rather than replacement of the whole source document. The real tsserver logs independently contain `updateOpen` requests with `changedFiles[].textChanges`, a source range and the inserted text `42`, with zero reopened files in those requests. The verifier parses the logged JSON request lines and requires this evidence for both `consumer.ts` and `checked.js`.

For the TypeScript correction, the logged range is line 2, offsets 23–43. For the JavaScript correction it is line 3, offsets 15–38. Each inserts `42`. Full documents are sent on their initial open, which is expected. This proves bounded native editor-to-language-server updates for these edits. It does **not** prove that the compiler never rebuilds a program graph or scans dependencies internally; filesystem work and large-project rebuild policy still require measurement.

## Harness findings and retained failures

Earlier attempts remain as failed results, not rewritten successes:

- `F0xEvc`: the test extension's wildcard engine range was rejected before activation. The driver now requires `^1.90.0`.
- `tPeSwi`: renaming a reference to an imported binding returned a local import-alias edit. The cross-project test now renames the exported declaration, whose returned edit covers three files.
- `Oeya2Z` and `nRoshE`: `workspace.saveAll(false)` saved visible editor tabs but did not persist the changed, initially unopened `other.ts`. The verifier now explicitly opens each affected document through the document API and calls its `save()` after rename, undo and redo. It does not open a visible tab for that document.

The save-all finding is grounded in the selected recovered workbench: `$saveAll` at line 922014 delegates to the editor service; `saveAll` at line 1001783 calls `getAllModifiedEditors`; that function at line 1001804 enumerates editor groups and their editor tabs. The initial language run used explicit document saves. The subsequent [Save All fix](save-all-verification.md) removes that workaround: `logs/language-verification-eb6tNI/result.json` passes the full matrix using `workspace.saveAll(false)` for three-file rename/undo/redo. Its workbench hash is `f5e44f0c2a9cc9a682b9da9bb91f289bd08ba952cb2901826496b4ff54633aff`, driver hash `dfe54d0e76b735af676ab9afd818a9dee72e68d77d3725b8db345e0d0ec63bdf`, and observed large-file definition time 329 ms. Separate native checks cover the visible global Save All command. These are scoped checks, not proof of every possible extension/editor combination.

## Expanded JavaScript matrix, 14 October

`logs/language-verification-iAa69p/result.json` passes all 18 recorded checks on
the real Windows desktop, including three new JavaScript checks. The native
TypeScript extension and compiler identities match the versions above. Workbench
SHA-256 is `9251426f04943379ff29248049f3d2dbb3290e1a68172f852bbc180ead11a503`.

Two split editors receive insertion requests before either promise is awaited.
Both operations succeed, remain bounded insertions in native document events,
and save exact expected UTF-8 contents. Subsequent JavaScript definition and
reference requests resolve the exported function across its declaration and two
consumers, including shifted source lines. The native definition command opens
the target. A three-file rename then preserves those concurrent edits through
Save All, undo and redo, with exact disk-content comparisons at every step.

The existing TypeScript matrix, diagnostics in both languages, formatting,
large-file navigation and conflicting-save checks passed again. The native host
exited 0 with no renderer page errors; selected runtime and driver hashes remained
unchanged. The 25,003-line TypeScript navigation observation was 517 ms after prior
operations; it is not an isolated performance comparison. CPU time, peak
process-family memory and filesystem scan counts were not measured. No AI
inference or simulated language provider was used.

The shared `verify-language-cross-file.cjs` driver also exercises the
[C cross-file matrix](cpp-support.md). Concurrent here means overlapping edit
requests to separate documents in one native window. It does not establish
same-document conflict resolution or stale rename handling while a language
request remains in flight. All evidence is retained under ignored disposable
profiles; the normal profile is untouched.

## Remaining acceptance gates

OV-402 remains **Partial**. This narrows its previously missing evidence substantially, but does not finish its full acceptance contract:

- Additional explicitly supported languages and extension versions; JavaScript cross-file navigation/references/rename now have the scoped native evidence above.
- Native rename UI, reference-pane interactions and keyboard/menu accessibility beyond the command/API checks above.
- Conflict merge/retry/overwrite decisions, stale concurrent rename results, and edits while a language request is in flight.
- Large-project dependency changes, cancellation, indexing/watch invalidation, filesystem scan counts, CPU, RAM and responsiveness budgets.
- macOS/Linux native runs and unsupported/incompatible extension behavior.

The fixed acceptance denominator is unchanged. These checks establish existing native behavior; they do not establish complete original-product parity or recovery of compiled binaries into source.
