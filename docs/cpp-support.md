# C and C++ in OpenVision

The prepared Windows x64 profile now has **clangd 23.1.0** and the official
**llvm-vs-code-extensions.vscode-clangd 0.6.0** extension. Opening a C/C++ file
activates the language service. It supplies diagnostics, code completion,
definitions, references, rename and formatting. Use **F12** for definition,
**F2** for rename and **Format Document** from the command palette.

To reproduce the installation in another prepared Windows x64 checkout:

```sh
npm run setup:cpp
npm start
```

Setup downloads only these two pinned packages into `data/tools/cpp`, checks
their published SHA-256 hashes, and installs the extension into
`data/local-extensions`. It backs up settings under `backups/cpp-settings` before
adding missing clangd settings. Existing settings are preserved. Two consecutive
local setup runs preserved identical settings bytes on the second run.
No global PATH, compiler, Node, Java or system execution policy is changed.
An existing custom clangd path/arguments remains authoritative; inspect it if
your results differ from the verified configuration below.

For your real project, supply its **compile_commands.json** from its build system.
This gives clangd the actual compiler, include paths, defines and language standard.
Without it, clangd uses fallback flags and can report missing headers or inaccurate
diagnostics. The installed MSVC Build Tools remain the compiler; clangd is the
language server. This setup does not install or configure a debugger or a project's
build tasks. Those remain separate from language support.

The default arguments use two workers, disk-backed preambles and background
indexing. This trades some parallelism/disk I/O for bounded worker concurrency;
no before/after RAM or speed improvement has been measured. Automatic clangd
update checks are disabled. Normal setup does not enable verbose protocol logs.

## Windows file identity fix

The actual server returned two identical rename edits for `main.cpp`, one under
`file:///C:/...` from the compilation database and another under `file:///c:/...`
from the editor. The client correctly rejected the resulting overlapping edits.
The captured response is retained in the native clangd log of
`logs/cpp-verification-gH7r8a`.

OpenVision configures clangd's built-in path mappings with URI-body drive roots,
for example `--path-mappings=/c:=/C:`. All Windows drive letters use this rule.
This aligns incoming file identities before indexing and maps responses back to
the editor. It does not discard edits in the test or monkey-patch the extension.
The exact root syntax follows the pinned upstream
[PathMapping.cpp](https://github.com/llvm/llvm-project/blob/ea7d852a70e8bdfaf601d6626a760f9771b2c4b4/clang-tools-extra/clangd/PathMapping.cpp).
Mappings ending in a slash do not match descendants under that implementation's
boundary check; the earlier `dW2jvn` attempt remains a recorded failure.

## Native verification

Run `npm run verify:cpp`. It uses disposable profiles and synthetic C/C++ files,
the real packaged extension and server, and public editor APIs/native commands.
It sends **no AI requests**. The current compiler fixture expects the existing
MSVC 14.44.35207 Build Tools installation; other compiler paths need an explicit
fixture update, not a claimed pass.

`logs/cpp-verification-QJcyFS/result.json` passed on 14 October 2026:

| Check | Observed result |
| --- | --- |
| C and C++ diagnostics | Real clang errors; bounded replacement clears them; undo restores them |
| C and C++ completion | Real provider returns `addNumbers(int a, int b)` |
| C++ definition | Correct cross-file provider target and native F12 command opens it |
| C++ references | Locations in declaration, implementation and consumer |
| C++ rename | Exact disk bytes in all three files through public Save All |
| Rename undo/redo | Exact original and renamed disk bytes restored |
| C and C++ formatting | Native Format Document changes content; undo/redo succeeds |
| Build/run | Renamed C++ program compiles with installed MSVC; executable exits 0 |
| Renderer | No recorded page errors |

The native language sequence took 6.58 seconds after activation, excluding
desktop setup/launch and compilation. This is one warm-machine observation, not
a benchmark or latency guarantee. CPU time, peak process-family RAM and energy
were not measured. No inference tokens were used by the verifier.

| Pinned input | SHA-256 |
| --- | --- |
| Official clangd Windows ZIP | `23412a240756a162e7b98a282f36aa2a23a88db5ce16a0cbc4fef7253768c810` |
| Open VSX extension VSIX | `32030694fa6c0ef438f4e4219f84677cd32f603c7faa4c71a283efc1f5b51751` |
| Executed clangd.exe | `dbd52c13d21ef9d284f4f0627efe76c81adf2fe0998f230127f554a54fc9dde7` |
| Extension bundle | `55e37b5a799c5e2702a9d20512a9dda90a793e74e01588feca0e5aecf75afd2d` |

Earlier run `s4ywVD` failed because its diagnostic assertion was case-sensitive;
`mKKBWe`, `7qgejj` and `gH7r8a` retain the actual duplicate-rename failure. Run
`JwmA5W` first passed the corrected mapping before completion and rename undo/redo
checks were added. Failure artifacts are preserved.

OV-402 remains Partial: large C++ repositories, complete standard-library/SDK
configurations, cancellation and concurrent edits, C cross-file rename, UNC or
case-sensitive Windows directories, debugging, and native macOS/Linux still need
verification. The small fixture's standard-library indexing logs include an
incomplete-index warning; it is not proof of full SDK/header coverage.
