# Windows portable verification — preview.4

Verified 14 October 2026 on Windows x64. This package updates repository cloning,
MCP cleanup ownership and duplicate Quick Edit context handling. Previous broader
workflows and their limitations remain recorded in [preview.3](portable-preview3.md).

## Artifact identity

| Fact | Value |
| --- | --- |
| Archive | `OpenVision-0.2.0-preview.4-win32-x64.zip` |
| Compressed bytes | 343,753,116 |
| Entries / uncompressed bytes | 18,048 / 1,107,107,958 |
| SHA-256 | `d1cbad83b963d8bd03fc5cfbb385b4cb8890bcf2ccbd48c532cb994e57660e28` |
| Git payload | Seven parts, at most 48 MiB each; per-part and archive hashes in `downloads/windows-x64/manifest.json` |
| License / notice / copyright filename matches | 676 retained |
| Private profile/output paths, environment files, state databases and certificate/key files | No matching entries in the archive audit |
| External filesystem links | Rejected by the packager |

The path audit is not a universal secret detector. Packaging explicitly excludes
the author profile, extension-installation data, logs and backups. Test profiles
and generated test certificates remain outside the archive. The source diff
contains no provider credentials.

## Native checks

Relocated portable run `logs/project-clone-verification-yjIqWO/result.json`
passed seven clone checks: URL validation/focus/Escape, 390-pixel layout,
destination cancellation with no writes, native Git failure followed by retry,
real local clone opening from the start window, another clone from editor
Project Home preserving the existing destination, and a real HTTPS clone of
`https://github.com/octocat/Hello-World.git`. HEAD matched
`7fd1a60b01f91b314f59955a4e4d4e80d8edf11d`; local fixture bytes and origins
matched too. The host exited 0 without renderer errors.

The harness supplies native folder-picker answers and dismisses the native Git
error alert. All Git operations and project-opening calls execute in the app.
Earlier portable runs `ouFZEq` and `9MWcFZ` left the error alert open and timed
out before the next destination picker. These failures remain retained; the
final verifier asserts the error message and dismisses it before retrying.

The repository installer verified every part and the full archive hash, extracted
into a fresh directory and reused it on a second invocation. Native run
`logs/project-clone-verification-WL393w/result.json` passed all six local/UI clone
checks on that reconstructed app, with host exit 0 and no renderer errors.
The installed clone dialog, service, welcome JS/CSS and MCP utility hashes match
the tested development runtime exactly. The public HTTPS check above was run on
the directly packaged copy; it was not repeated on the reconstruction.

The prepared development runtime separately passed final built MCP checks:
STDIO repeated close rejection (`X1V0rv`), HTTP rejection (`Yg9tPF`) and HTTP
pending close (`NCNwOT`). See [cleanup evidence](../recovery/rea-mcp-cleanup.md).
Native Quick Edit passed ten workflows (`4abAUo`, independently `dzbsRq`),
and real TLS trust rejection extended provider error checks to seventeen
scenarios (`PIRrCc`). Controlled local servers establish integration and failure
behavior, not live AI quality. These checks were not all rerun on the portable.

Nineteen focused Project Home/Quick Edit checks and thirty-six MCP/installer
checks passed. Desktop syntax and generated desktop/Glass build checks passed.
No new comparative RAM, CPU or token savings claim is made. The exact context
normalization cost is recorded in [Quick Edit evidence](../recovery/rea-inline-edit.md).

## Repeat and limits

```sh
npm run verify:project-clone -- --portable ./OpenVision-portable --remote https://github.com/octocat/Hello-World.git
npm run test:project-home
npm run test:inline-edit
npm run test:installer
npm run check:desktop
```

Git is needed for cloning. Private Git authentication, SSH transport and Stop
during a large transfer remain unverified. macOS/Linux/ARM64, signing, full
upgrade/rollback, independent native rebuilding and broader acceptance gates
remain open. The fixed score stays **6/42 Verified**; GitHub Actions is disabled.
