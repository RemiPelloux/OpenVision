# Extension lifecycle on Linux (OV-702)

Date: **18 October 2026**. Scope: **Linux x64 only.** Omarchy (Arch-based), kernel
7.2.5, Wayland, Electron 42.10.0 (Node 24.18.1, `NODE_MODULE_VERSION` 146), extension
API 1.128.0. Build: editable source build from the 3.21.13 runtime input, not a
packaged release. No marketplace request, paid inference or AI request was made.

OV-702 stays **Partial**: every clause passes on Linux x64, but the story covers the
supported platforms, and Windows and macOS have no lifecycle evidence yet (see
[remaining gates](#remaining-gates)).

## Commands

```sh
npm ci --prefix tooling
export OPENVISION_RECOVERY_DIR=<read-only recovery-3.21.13 directory>
npm run build:desktop
npm run verify:extensions      # new: five sequential launches, one disposable profile
npm run test:extensions        # new: fixtures, cases, native-addon and protected-extension guards
npm run test:desktop
npm run test:build-integrity
npm run check:desktop
npm run docs:check
```

`verify:extensions` needs a C/C++ compiler and the launcher's Node headers
(`<node prefix>/include/node` or the node-gyp cache). Each run writes its profile,
extensions directory, fixture VSIX files, screenshots and `result.json` under ignored
`logs/extension-lifecycle-*`.

## Method

[`desktop/extension-lifecycle.mjs`](../../desktop/extension-lifecycle.mjs) writes every
fixture as a local VSIX from source. Nothing is downloaded. The fixtures are:

- `lifecycle` 1.0.0 and 2.0.0, which contribute the setting `ovLifecycle.greeting`.
- `healthy`, `throws` (activation throws), `load-error` (a missing `require`).
- Three native-addon extensions, compiled at verify time with `cc`/`c++`:
  - `native-napi`, a Node-API addon.
  - `native-wrong-abi`, a classic addon built against Node 26 headers
    (`NODE_MODULE_VERSION` 147).
  - `native-wrong-arch`, the Node-API x64 shared object with its ELF machine field set
    to AArch64.
- `engine-incompatible` (`engines.vscode: ^99.0.0`), `malformed-json`,
  `missing-manifest` and `missing-identity` (no `publisher` or `name`).
- `language-pack-fr`, which translates one real NLS key: the Outline view title
  (`outline.view.contribution#name`, flat index 8414) becomes `OVTEST-Plan`.
- `protected`, with the identity `anysphere.cursor-mcp` 99.0.0 and only a new entry
  point.
- `protected-full`, version 99.0.1: every bundled `cursor-mcp` file byte for byte,
  plus a new entry point that reports `replaced: true`.

A driver extension ([`verify-extension-lifecycle-extension.cjs`](../../desktop/verify-extension-lifecycle-extension.cjs))
runs one plan per launch. It installs through `workbench.extensions.installExtension`
with a file URI and uninstalls through `workbench.extensions.uninstallExtension`, the
commands the Extensions view uses. It observes the results through the public
extension API. Between launches the verifier snapshots `extensions.json`, `.obsolete`,
the extension directories, `settings.json`, `languagepacks.json` and the profile
`argv.json`. To change the display language, it writes the `locale` key of
`<profile>/User/.openvision-local/argv.json`, the file the Configure Display Language
command edits. Before launch 3 it also registers a protected copy (99.0.2) directly in
`extensions.json`, standing in for state that an older build or an imported profile
left behind. [`extension-lifecycle-cases.mjs`](../../desktop/extension-lifecycle-cases.mjs)
holds the required outcomes, and missing observations make a case fail.

## Clause matrix

"Before" is the evidence that existed before this report. "Linux x64 result" comes from
the final run, `logs/extension-lifecycle-B5m8yT/result.json`, where all 16 cases pass,
every host exits 0 and there are no renderer page errors.

| Clause | Before | Linux x64 result |
| --- | --- | --- |
| Install from VSIX | Unverified | Pass: installed and activated as 1.0.0 |
| Update to a newer version | Unverified | Pass: 1.0.0 stays loaded until restart, then 2.0.0 runs. The registry holds 2.0.0 only, and 1.0.0 is marked obsolete |
| Downgrade | Unverified | Pass: installing 1.0.0 over 2.0.0 runs 1.0.0 after restart |
| Uninstall removes files, keeps settings | Unverified | Pass: the registry entry is removed at once and the files are gone at the next startup. `ovLifecycle.greeting` survives in `settings.json` and the configuration API |
| Reinstall after uninstall | Unverified | Pass: reinstalled 1.0.0 activates now and after restart |
| Language pack applies and reverts | Unverified | Pass: install offers the restart prompt and `languagepacks.json` lists `fr`. With `locale: fr`, `vscode.env.language` is `fr` and the UI shows `OVTEST-Plan`. Without it, `en` and the English title come back. Uninstall removes the pack |
| Native addon, supported ABI | Unverified | Pass: the Node-API addon loads in the extension host before and after restart |
| Native addon, wrong ABI | Unverified | Pass: the runtime's own error names `NODE_MODULE_VERSION` 147 against 146 |
| Native addon, wrong architecture | Unverified | **Defect, fixed**: the error now names arm64 and linux-x64 |
| Activation failure isolation | Unverified | Pass: four failing extensions; `healthy` and `native-napi` still activate in the same host process |
| Incompatible engine | Unverified | Pass: "Unable to install extension … as it is not compatible with VS Code '1.128.0'." |
| Malformed manifest | Unverified | Invalid JSON and a missing `package.json` already failed clearly. A manifest without an identity was a **defect, fixed** |
| Protected bundled extensions cannot be silently replaced | Unit test of the build-time hash table only | **Defect, fixed**: installs are refused, and an existing registered copy is skipped with a warning |
| Lifecycle across restart | Unverified | Pass: five sequential launches on one profile, each exiting 0 |
| Local integrity after assembly | [Build integrity](../engineering/runtime-build-integrity.md) | Unchanged; the new guards read the same integrity table |

## Defects established and fixed

### 1. Wrong-architecture addon error was misleading

Observed in the baseline run `logs/extension-lifecycle-TMRIqm`, before the fix:

```text
Activating extension 'openvision-lifecycle.native-wrong-arch' failed: …/native/addon.node: cannot open shared object file: No such file or directory.
```

The file exists. glibc skips an ELF object whose machine type does not match and
reports `ENOENT`. Owner: Node module loading in the extension host. The fix,
[`native-addon-diagnostics.mjs`](../../desktop/native-addon-diagnostics.mjs), installs a
self-contained `process.dlopen` wrapper at the top of
`out/vs/workbench/api/node/extensionHostProcess.js`. It changes only
`ERR_DLOPEN_FAILED` errors whose ELF or Mach-O header names another CPU, or files
that are not native libraries. It keeps the original text in parentheses.
Same-architecture failures, such as an ABI mismatch or missing symbols, pass through
unchanged. Observed after the fix:

```text
Cannot load native addon …/addon.node: it was built for arm64, but this extension host runs linux-x64. Install a build of this extension for linux-x64. (…: cannot open shared object file: No such file or directory).
```

### 2. Protected bundled extensions could be replaced

Observed in the baseline run:

- Installing the `protected` VSIX succeeded. After restart the user copy
  `anysphere.cursor-mcp-99.0.0` replaced the bundled extension. Upstream deduplication
  lets an equal-or-newer user copy override a builtin and inherit `isBuiltin`. The
  extension host's hash check then refused it ("Extension verification failed for
  anysphere.cursor-mcp: Missing files: dist/main.js"), so the bundled MCP extension was
  silently disabled.
- Installing `protected-full` also succeeded. After restart it activated and returned
  `replaced: true`. The integrity table hashes only `.js`/`.ts` files and ignores extra
  files. `package.json` is not hashed, so a new `main` entry point passed verification
  and ran with builtin status.

Owners: `ExtensionManagementService.install(vsix)` in the shared process and the CLI,
and the extension-set deduplication in both workbench bundles. The fix is
[`protected-extensions.mjs`](../../desktop/protected-extensions.mjs). It derives the
protected identifiers from the extension host integrity table, so there is no second
list. It refuses the install:

```text
Unable to install extension 'anysphere.cursor-mcp': it would replace an extension bundled with OpenVision. Remove the package or change its identifier.
```

At scan time it skips any user copy of a protected identifier and logs a warning:

```text
Skipping extension …/anysphere.cursor-mcp-99.0.2: it would replace the protected bundled extension …/source/app/extensions/cursor-mcp.
```

After the fix both installs are refused, and the seeded 99.0.2 copy is skipped. The
bundled `cursor-mcp` 0.0.1 runs from `source/app/extensions/cursor-mcp`. Ordinary
builtins, such as `vscode.git`, can still be overridden by a user install, as the
unit test checks. The integrity table itself is unchanged.

### 3. A manifest without an identity left a broken registration

Observed in the baseline run: the `missing-identity` install failed with "Cannot read
the extension from …/undefined_publisher.undefined-1.0.0". It had already extracted
that directory and added `undefined_publisher.undefined` to `extensions.json`. Both
remained there for all five launches. The same install guard now requires a
non-empty `publisher`, `name` and `version` before anything is extracted:

```text
Unable to install the extension package: its package.json must declare "publisher", "name".
```

The final run shows no leftover directory or registry entry.

### Patch discipline

Both guards follow the same rules:

- Each guard carries a marker and is idempotent. Unit tests check that a second
  build changes nothing.
- The first backup is kept, under `backups/native-addon-diagnostics/` and
  `backups/protected-extensions/`.
- Drift guards apply: each anchor must match exactly once, and a changed protected
  list refuses to build.
- `protected-extensions.test.mjs` asserts that the assembled build carries each
  marker exactly once.

## Observed facts and inferences

Observed in `logs/extension-lifecycle-B5m8yT`:

- Executable SHA-256: `0636c96f07de2c74a3eaf8692fc1743d81259c0bf66c8ebde7f7179211a8aff9`.
- Guarded extension host: `9e074f99…97dd2`.
- Shared process: `2250e22c…c63e1`.
- Desktop workbench: `742bff96…7dda42`.
- Input hashes were unchanged through the run.
- No modal dialog appeared, and every install and uninstall needed no confirmation.
- Uninstalled extension directories were already absent when the driver started on
  the following launch, at 0 ms and 1 ms.
- Activation failures appear as notifications naming the extension and the error. In
  every launch the driver's extension-host PID matched the PID that `healthy`
  reported, and it did not change.

The previous run, `logs/extension-lifecycle-kaAYth`, made before the seeded-copy case
was added, passed the other 15 cases. Its two 20-second steps are bounded waits for
changes that only take effect after a restart, recorded as observations.

Inferences, not verified:

- The CLI path (`--install-extension`) carries the same guard because
  `cliProcessMain.js` has the same install method. It was not launched.
- Marketplace (gallery) installs do not pass through `install(vsix)`. A protected
  identifier offered by a gallery would still be skipped at scan time, but its
  install would not be refused.
- Workspace and development-path (`--extensionDevelopmentPath`) extensions keep
  upstream override behavior.
- The Mach-O branch of the addon diagnostics is unit-tested only. Windows PE headers
  are not inspected.

## Remaining gates

- Windows x64 and macOS native runs of `verify:extensions`, which needs a compiler
  for the native fixtures and the platform-specific addon header checks.
- Representative third-party extensions with real webviews, prebuilt native modules
  and extension packs or dependencies.
- Gallery install and update behavior, and signature verification. These were not
  exercised, and network access to the marketplace is user-initiated.
- A source build only: preview.7 does not contain these fixes.
