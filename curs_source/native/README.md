# Native pseudocode

This folder contains actual C-style pseudocode produced by REA with Ghidra
12.1.4, plus the complete Evidence for each exported function. It also contains
PE metadata for the 52 native payload paths in the captured **3.21.13 Windows
installation** from 12 October 2026. This is a historical source snapshot. The
installed 3.24.18 snapshot is separate under `../snapshots/3.24.18/`; the native
coverage here must not be reported as coverage of that newer installation.

Read `manifest.json` for exact current coverage. For each module with pseudocode:

- `all-functions.c` contains its complete exported pseudocode in analysis order.
- `0x*.c` contains one procedure; `0x*.json` preserves its REA Evidence, target
  digest, analysis profile, provider, and limitations.
- `coverage.json` records every attempted internal procedure, including explicit
  failures and null results. `procedures.json`, when present, preserves the
  provider's complete discovered inventory, including imported externals.
- `origin.json` maps the output to its exact captured installation path and hash.

`export-hashes.json` records SHA-256 for every exported text/evidence file.

All 52 captured native payload SHA-256 digests were checked before this export.
New analyses use ephemeral databases with a 768 MiB Java heap limit. Target
files are read only, and the target programs are not executed. No native
executables, DLLs, addons, analysis databases, or personal profiles are included.

Pseudocode preserves compiler artifacts and uncertain types. It is not original
C/C++/Rust source or a compilable project. Attempting every function identified
by Ghidra does not establish exhaustive function discovery in optimized machine
code. Images marked `metadata-only` have no pseudocode export. This coverage is
independent of OpenVision feature acceptance.

`desktop/recovery-native-export.mjs` preserves existing process-list recovery and
can resume selected native analyses. It runs within the original REA workspace,
using its MCP SDK, REA launcher, captured installation, and configured Ghidra/JDK.
Pass exact inventory-relative paths or unambiguous addon filenames. Existing
function Evidence is reused only when target and analysis-profile hashes match.
The exporter records exact progress and closes its owned analysis session.

## Useful entry points

These are static observations of recovered code, not runtime tests:

| Module | Procedure | Observed code | REA Evidence |
| --- | --- | --- | --- |
| `cursor_proclist.node-928fbd09405c` | `0x180006e90` | Toolhelp process snapshot and enumeration | `ev_ca017c8ffe6e3876dbe52f6b40fff5bb1e4fb687566c8652ba4c363c11152652` |
| `cursor_proclist.node-928fbd09405c` | `0x180007b40` | Process CPU/memory counters and handle cleanup | `ev_b30902d3d5cb7994103507811391c8dbea3155f8c984ea677278db302a9bf4b8` |
| `iselevated.node-72d1f55fc3a2` | `0x180001050` | SID allocation, `CheckTokenMembership`, SID release and N-API boolean result | `ev_7cc02f200f3450bc08386f830ec2d8815942b3556bf9d0198010350a900f3c49` |
| `foreground_love.node-f81fc9dc7fa5` | `0x180001050` | Optional process argument, `AllowSetForegroundWindow`, N-API boolean/error result | `ev_fb74526593dfa3aadf1f63a0281cd232f437509ec7bc975339aeb0107a389a21` |
| `foreground_love.node-f81fc9dc7fa5` | `0x1800011b0` | Registers JavaScript `allowSetForegroundWindow` to the previous function | `ev_779208594a0ce3842392c47bdbbfea87da812af69f3676517bf2d829e53f4435` |
| `watchdog.node-851da12b0ebd` | `0x180001060` | Repeated process-open/wait/close with a one-second sleep while the wait reports timeout | `ev_eee636c2982020003ca99302496cc05fdca39847323bb3e92de89886762b0536` |

The separate `rust-metadata.json` records for historical language detection,
tree chunking, and file-service addons found no `.dep-v0` dependency section.
Read-only compiler paths in the latter two contain candidate rustc commit
`48a229ceaefd4985c50990b14116b6d856af0985`; this is an inference from file
content, not authenticated compiler identity or recovered Rust source.
