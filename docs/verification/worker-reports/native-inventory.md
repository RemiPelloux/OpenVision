# Worker report: native-inventory (OV-801, Linux x64)

Branch `ov/native-inventory`, based on the coordinator branch
`ccr-a39d6f13-jurmdv` (`523ff1d6`). Recorded 19 October 2026. Stopped early at
the owner's request, after the planned native runs had finished.

## Summary

All four Linux tasks are implemented and verified natively in this container:

- A committed inventory of the pinned 3.21.13 AppImage with a verifier:
  39 native paths (34 distinct) and 22 WASM paths (15 distinct).
- Dispositions for all 49 distinct payloads.
- A measured loaded-role record from two full passing runs.
- esbuild.wasm rebuilt byte for byte from `v0.25.9` with Go 1.23.12.

The audit's "35 distinct natives / 23 WASM paths" was not reproduced. The
measured counts are 34 distinct natives and 22 WASM paths; the scanner
recognizes files by their bytes as well as their extension.

Notable findings:

- The host executable and every Chromium library are byte-identical to the
  official `electron-v42.10.0-linux-x64.zip`. 22 of the 49 distinct payloads
  match a published artifact.
- With the product launch flags, 41 of 61 inventory paths never load. The
  loaded proprietary pieces are `cursor_proclist.node` (main),
  `file_service.node` and `tree-chunk-napi` (extension host), and
  `cursorsandbox` (executed twice by the extension host at startup).

## Tasks

| Task | Status | Evidence |
| --- | --- | --- |
| 1. Inventory and `verify:native-inventory` | Done | `desktop/native-inventory.mjs`, `docs/recovery/native-inventory-linux-x64.json`, `desktop/native-inventory.test.mjs` (5 tests, cross-checked against `readelf`) |
| 2. Measured loaded roles and `verify:native-loaded` | Done | `desktop/verify-native-loaded.mjs`, `desktop/native-loaded.mjs` (+5 tests), `docs/recovery/native-loaded-roles-linux.md` |
| 3. Dispositions | Done | `docs/recovery/native-dispositions-linux.md` (49 rows; the schema is enforced by the task-1 verifier); `scripts/recovery/upstream-payload-match.mjs` |
| 4. esbuild.wasm evidence | Done | `scripts/recovery/esbuild-wasm-evidence.mjs` (+2 tests); finding added to `docs/recovery/rea-wasm-inventory.md` |

## Defects found and fixed

No product defects were found. The verifier defects below were found in smoke
runs and fixed before the counted runs:

- The Explorer step lost `hello.js` in the virtualized tree.
- The strace C-escape decoder rejected octal escapes.
- An executed shell script was counted as an unknown native.
- `esbuild-wasm-evidence` used `GOPROXY=off`, which cannot resolve esbuild's
  single `go.mod` requirement. It now uses `-mod=readonly`, and the module is
  checked against `go.sum`.

These fixes are folded into commits `91a9077c` and `abb5c145`.

## Verification

Every native verifier ran as user `ov`.

| Command | Run ID | Result |
| --- | --- | --- |
| `npm run verify:native-inventory` | console | pass: 39/34 native, 22/15 WASM, 49 dispositions, 0 failures; pinned AppImage digest matched (once, as `ov`) |
| `npm run recovery:esbuild-wasm` | `logs/esbuild-wasm-evidence-PzuSSB` | pass, digest identical, first full run from a fresh download. The earlier run `OmDGR7` failed on the GOPROXY defect above |
| `node scripts/recovery/upstream-payload-match.mjs` | `logs/upstream-payload-match-9c12us` | 22/49 matched. The first run `SH47u1` failed to extract the Node tarball (script defect, fixed) |
| `verify:native-loaded` (10 min idle) | `logs/native-loaded-3wUtyh` | pass, first full run (head `29cb989e` + the verifier as later committed) |
| `verify:native-loaded` (10 min idle) | `logs/native-loaded-XCwv4L` | pass, repeat run on clean `91a9077c`; identical state, roles and trigger for all 61 paths |
| `node --test desktop/native-inventory.test.mjs desktop/native-loaded.test.mjs` | – | 10/10 pass |
| `npm run test:recovery` | – | 2/3 pass. The esbuild tests pass; `portable-labels.test.mjs` fails before and after this branch because `@babel/parser` is not installed at the repo root |
| `npm run docs:check`, `npm run status:features` | – | docs:check pass (0 failures); status:features ran |

Run `logs/native-loaded-*` cells with `linux-cell.sh x11` from
`ov/linux-completion` (a copy outside the repo), Xvfb, a private D-Bus session
and a plaintext gnome-keyring.

Host notes:

- Installed packages: `gnome-keyring` and `libsecret-tools`.
- On the coordinator base, `prepare:desktop` failed with `EEXIST` because
  `build/recovery` already existed. Moving it aside fixed this. It is unrelated
  to OV-801 and not fixed here.

## Recommendation per story

**OV-801: promote to Verified on Linux x64**, subject to the owner accepting
the defaults below. Every Linux path and distinct payload has a digest,
format/ABI, package/license, measured role (or never-loaded) and disposition.
The esbuild record gap is closed by a byte-identical rebuild.

The remaining items are follow-on stories, not Linux OV-801 gaps:

- Rebuild and ABI-test the addons (OV-802).
- Replace the loaded proprietary helpers (OV-803).

## Moved to platform/live stories

- Windows: the 52-PE loaded-role mapping.
- macOS: the bundle inventory.
- Wayland: loaded-role run.

## Defaults pending owner decision

- The Linux denominator is the pinned Linux x64 3.21.13 AppImage set
  (34 distinct natives + 15 WASM). It replaces the Windows "52 PE" wording for
  the Linux claim.
- Non-REA evidence (bounded summary + byte-identical rebuild) is accepted for
  esbuild.wasm.
- The 3.24.18 reference inventory stays informational.
- The `remove-unused` classes for the tunnel binaries and the AppImage update
  tool are recommendations only. Nothing was removed.

## Open risks

- Never-loaded is workload-relative. Canvas, computer use, image tools,
  Kerberos proxy authentication and policy files were not exercised.
- `strace` overhead changes timing. Short-lived mappings between 1 s samples
  show only as opens.
- `helpers/node` reports Node 24.18.1 but is not byte-identical to the
  nodejs.org build; its build configuration is unknown.

## Status at stop

- **Done:** tasks 1–4. Both counted `verify:native-loaded` runs pass
  (`3wUtyh`, `XCwv4L`).
- **Partly done:** the final checks are incomplete.
  - `verify:native-inventory` ran once as `ov` on the final inventory and
    dispositions. The second run was not done, to honor the stop request.
  - `docs:check` passed at stop (1,563 targets, 210 fragments, 0 failures).
    `status:features` ran without error.
- **Not started:** none.
- **Uncommitted findings:** none. Everything is in this commit.
- **ETA for the remainder:** one short quota round in one worker session:
  - one more `verify:native-inventory` run (seconds);
  - coordinator integration of the shared planning files (OV-801 status,
    counts wording).

  OV-802 and OV-803 are separate stories.
