# Recovered source status

The complete original application source is **not available**. This directory
documents the recoverable code; it must not be described as a full decompilation
or an independently buildable source checkout.

The Git repository contains OpenVision's authored code in `desktop/`, `src/`,
`tooling/` and `assets/`. Its versioned Windows payload under
`downloads/windows-x64/` contains editable, bundled application JavaScript.
After extracting that payload, inspect `OpenVision-portable/electron-host/resources/app/out/`
and `OpenVision-portable/electron-host/resources/app/extensions/`. See the
[run guide](../docs/native-runtime.md) for the verified extraction and launch
path. The locally prepared build uses `source/app/`, which is generated and
ignored by Git. It may include changes newer than the versioned portable payload.

The 12 October 2026 recovery inventory reports 224 selected JavaScript bundles,
15,799 formatted files, and zero original source maps or embedded original
sources. Formatting and structural module extraction make shipped JavaScript
readable; they do not restore original TypeScript, names, comments, project files
or build inputs. Native executables, addons and WebAssembly retain compiled or
derived representations. Hosted server implementations are absent from the
installation. These counts do not establish a percentage of original source
recovered. See [recovery evidence](../docs/recovery-status.md) and the
[feature gap audit](../docs/feature-gap-audit.md).

No recovered bundles are duplicated here: the versioned payload is already in
Git, while local analysis outputs and generated build trees are excluded. There
is currently no verified process that can rebuild the entire product from
original source alone.
