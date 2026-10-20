# Worker report: OV-704 specialized modes and OV-604 decision prep (Linux x64)

Branch `ov/modes-inventory`, rebased onto `origin/main` at `eed4f19a` on
19 October 2026. The environment was a Linux x64 cloud container: Ubuntu
24.04, kernel 6.18, 4 CPUs, Node 24.18.0. The Cursor 3.21.13 AppImage was
built from source with `npm run prepare:desktop && npm run build:desktop`.
No live provider, account, Windows or macOS was used.

## Summary

Done:

- the static specialized-mode inventory, with a proposed scope for each mode;
- a deterministic inventory command whose decision facts fail on drift;
- one defect fixed at its owner: computer use was silent on Linux, and now
  logs why;
- a native probe (`verify:modes-probe`) and a `--next-edit-absent` mode for
  `verify:completion`, both written and syntax-checked;
- an OV-604 decision paper.

**No native verifier was executed.** The verifiers refuse root, because
Chromium will not sandbox as root. This container's permission policy denied
`useradd`, `chown` to the existing unprivileged `ubuntu` account, and an
unprivileged user namespace (`unshare --user`). Three tasks therefore remain
open: the image-input matrix, the browser-automation verifier, and every
native run. Neither story can be promoted from this branch.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Specialized-mode inventory, `inventory:modes`, `verify:modes-probe`, [rea-specialized-modes](../../recovery/rea-specialized-modes.md) | **Partly done.** The inventory, its decision facts and the document are done, and the inventory is byte-identical across runs. The probe is written but **not executed**. |
| 2 | Explain computer use as unavailable on Linux; zero sidecar requests | **Code done, native proof open.** The extension now logs the explanation before any gate, manifest or download. A unit test executes it on linux, darwin and win32. The probe asserts the explanation and zero `*.cursor.com` / `computer-use-sidecar` requests, but it has not run. Static facts: both gates default off, both manifests are empty, there is no Linux helper, and `computerUseSupported: !1`. |
| 3 | Image-input matrix (`verify:image-input`) | **Not done.** It needs native runs, which were blocked. Statically: images are downscaled to a 1024 px bound, and five image MIME types are referenced. Inline Edit already refuses images for every model, with an explanation. Tab autocomplete has no image path. The text-only Agent gate is native-verified elsewhere (run `9bMq1n`). |
| 4 | Browser automation through the fixture Agent | **Not done.** The `cursor-ide-browser` provider is ungated and local, which is statically reachable. Whether the *local* Agent loop is offered its tools is unproved, and no verifier was written. |
| 5 | OV-604 prep: `verify:completion -- --next-edit-absent` and [next-edit decision](../../recovery/next-edit-decision.md) | **Partly done.** The flag and paper are written. Unit tests prove the local provider cannot produce prediction events and that the workbench has no `StreamNextCursorPrediction` caller. The native run is open. |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Computer use returned silently on Linux; nothing explained the missing tools. | `extensions/cursor-computer-use` backend selection, via `desktop/computer-use-customization.mjs` (AST-guarded, idempotent, backed up, installed by `build-source.mjs`) | `eeb68daf` |

## Verification

All checks ran as root in this container. No native verifier ran.

| Command | Result |
| --- | --- |
| `npm run build:desktop` (three times; the second and third were idempotency checks) | pass. The first build logged "Computer use: unavailable-platform explanation logged…". Afterwards the marker appears exactly once. |
| `npm run test:modes` | 10/10 pass (new: inventory 4, computer use 3, next-edit absence 3) |
| `npm run inventory:modes` (run twice, outputs compared with `cmp`) | pass, no drifted facts, byte-identical |
| `npm run test:completion` | 66/66 |
| `npm run test:build-integrity` | 26/26 |
| `npm run check:desktop` | pass |
| `npm run docs:check` | pass |
| `npm run status:features` | 25/44 Verified. OV-704 is Unknown and OV-604 Planned; neither changed. |
| `node --check` on `verify-modes-probe.mjs`, `verify-completion.mjs` and `verify-completion-next-edit.mjs` | pass (syntax only) |

Native runs still owed, one at a time, as a non-root user under
`xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session`:

- `npm run verify:modes-probe`, twice, because it is new;
- `npm run verify:completion -- --next-edit-absent`, twice;
- `npm run verify:completion`, the unchanged default mode, as a regression
  check after the flag was added;
- `npm run verify:provider-import`, the image gate regression check.

## Recommendation per story

- **OV-704: not yet.** Remaining Linux gaps:
  1. Run `verify:modes-probe` twice.
  2. Owner sign-off on the scope table in
     [rea-specialized-modes](../../recovery/rea-specialized-modes.md#proposed-scope).
  3. Build and run `verify:image-input`, covering paste, drag and attach;
     MIME types; oversized and multiple images; queued messages; cancel during
     send; restart with history; temp cleanup.
  4. Determine whether the local Agent is offered `cursor-ide-browser` tools.
     If it is, build `verify:browser-automation` (navigate, snapshot, click,
     type, screenshot; approval; cancel mid-navigation; tab cleanup on chat
     close; no external network). If it is not, record browser automation as
     excluded or explained.
- **OV-604: not yet; it needs an owner decision.** Path A (record the
  exclusion) needs only the `--next-edit-absent` native runs. Path B is a new
  13-point implementation.

## Moved to platform/live stories

- macOS and Windows computer-use sidecars: signing, download, permissions.
- Live image quality on a real vision provider.
- Provider-backed image generation.

## Defaults pending owner decision

- Image input **included** (already gated by capability).
- Computer use **excluded on Linux**, with the logged explanation.
- Image generation **excluded**, since no local producer exists.
- In-app browser **included**. Browser automation **included only if locally
  reachable** without vendor services; that is not yet established.
- OV-604 **not implemented**. The paper recommends Path A.
- Browser tools are auto-approved when the user turns on auto-run, because
  `playwright_autorun` defaults on. OpenVision keeps "Ask Every Time" by
  default, so a fresh profile asks. Whether browser tools should require
  approval even under auto-run is left to the owner; nothing was changed.

## Open risks

- Neither new native script has ever run. Expect selector or timing fixes on
  the first run:
  - palette rows;
  - whether the extension-host `console.info` reaches the profile logs or the
    renderer console (the probe accepts either);
  - the ghost-text wait in `--next-edit-absent`.
- The probe's network view covers only Chromium traffic (`--proxy-server`)
  and extension-host traffic that honours `http.proxy`. A raw socket that
  ignores both would not appear. The process-family capture
  (`verify:telemetry:extended`) is the stronger check.
- The Glass variant's permissions UI says "Cursor Computer Use is not
  available in this build", with Cursor branding. That is outside this
  story's owners and is recorded here only.
- The environment blocker: other workers ran natively as user `ov`. This
  session could not create a non-root runner, so the coordinator should run
  the owed verifiers on a host where that is allowed.

## Follow-up (19 October 2026): `verify:modes-probe` failure fixed

The branch restarted from the coordinator branch `ccr-a39d6f13-jurmdv` at
`d94e6e32`, which already contains the commits above.

The coordinator's native results (non-root, Xvfb, dbus):

| Verifier | Result |
| --- | --- |
| `verify:completion -- --next-edit-absent` | passed first time, twice |
| default `verify:completion` | passed |
| `verify:provider-import` (`mLvLNG`) | passed |
| `verify:modes-probe` (`MtcfsB`, `cxZuad`) | **failed** both runs: "Computer use explanation not observed"; inventory and page errors were empty |

**Root cause.** The v1 explanation used only the extension's `console.info`.
In the 3.21.13 extension host:
- `ExtHostConsoleForwarder` forwards it to `MainThreadConsole`.
- `MainThreadConsole` writes to the window log service **only for `error`
  severity**.
- Other severities go only to the renderer devtools console.

So no log file held the message, and the probe had nothing to find. A
console-only message is also no real explanation for a user.

**Fix**, in `desktop/computer-use-customization.mjs` (v2):
- The same text is written to a **"Computer Use" log output channel**. Users
  see it in the Output panel, and it is stored as
  `<user-data>/logs/<session>/window<N>/exthost/cursor.cursor-computer-use/Computer Use.log`.
- It still goes to the console logger.
- The channel is disposed with the extension. A channel failure is logged as
  an error.
- v2 upgrades the v1 block in place, because editable builds keep it.
- The unit tests now execute the activation with a mocked API. They check the
  channel name, the `log: true` option, the text, the subscription, the
  channel-failure path, the v1 upgrade, and that macOS and Windows are
  unchanged.

**Probe changes.**
- It first asserts that `exthost.log` records `ExtensionService#_doActivateExtension
  cursor.cursor-computer-use`, which proves activation.
- It then polls for up to 60 seconds for the explanation in a log file under
  the extension's exthost folder.
- On failure it prints the activation lines, the files that matched, and
  any console lines that mention the extension. A rerun therefore tells apart
  "not activated" from "not written".

**Checks run here (as root; static and unit only).**
- `npm run build:desktop`: the v1 → v2 upgrade logged once. A second build
  changed nothing, and the extension holds one v2 marker and no v1.
- `npm run test:modes`: 11/11.
- `npm run inventory:modes`: pass.
- `npm run test:build-integrity`: 26/26.
- `npm run check:desktop` and `npm run docs:check`: pass.

**Native rerun still owed.** Run `npm run verify:modes-probe` twice as
non-root. If it fails again, the printed `computer_use.activation` shows
whether the extension activated.
