# Worker report: OV-704 specialized modes and OV-604 decision prep (Linux x64)

Branch `ov/modes-inventory`, rebased onto `origin/main` at `eed4f19a` on
19 October 2026. The environment was a Linux x64 cloud container: Ubuntu
24.04, kernel 6.18, 4 CPUs, Node 24.18.0. The Cursor 3.21.13 AppImage was
built from source with `npm run prepare:desktop && npm run build:desktop`.
No live provider, account, Windows or macOS was used.

> **Current status, 20 October 2026.** See the
> [final follow-up](#follow-up-20-october-2026-owner-decisions-implemented)
> at the end. The owner decisions are implemented. Every OV-704 Linux check
> passes natively, first time and twice each, on a clean rebuild of
> `0a1ea475`. Earlier sections are kept as the record.

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
     [rea-specialized-modes](../../recovery/rea-specialized-modes.md#scope-owner-decided).
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

## Follow-up (20 October 2026): image-input matrix and browser reachability

The branch was reset to `origin/main` at `c2c28218`, which records the owner
decisions. It used Node 24.18.0 and `npm ci` in `tooling/`.

**Native runs became possible.**
- Native runs used the existing unprivileged `ubuntu` user, in a separate,
  ubuntu-owned copy of the tree. This repo's ownership and permissions were
  not changed.
- I installed `gnome-keyring` 46.1-2ubuntu0.2 with apt, to give each run an
  unlocked throwaway keyring.
- Each run had its own disposable `HOME` and `XDG_RUNTIME_DIR`, plus
  `xvfb-run` and `dbus-run-session`.
- For verifiers that record `git rev-parse HEAD`, the session points `GIT_DIR`
  read-only at this repo, with an env-scoped `safe.directory`. It resolves the
  same HEAD as the tree under test.
- Every check ran on a **clean rebuild**: everything was removed except the
  pinned AppImage, then re-extracted and rebuilt. Runs went one at a time.

### Results (each new check passed first time, twice)

| Verifier | Runs | Result |
| --- | --- | --- |
| `verify:image-input` (new) | `qj32Kz`, `qtQQC9` | pass |
| `verify:browser-automation` (new) | `PnBN8U`, `LKqHMF` | pass. Earlier passes `jeTh0Z` and `OAIa7U` came before the offered-tool assertion was added. |
| `verify:modes-probe` | `9MoX5V`, `990bje` | pass. The v2 computer-use explanation was found in `Computer Use.log`, with zero sidecar requests. This closes the `MtcfsB`/`cxZuad` failure. |
| `verify:provider-import` (regression) | `Ysef0m` | pass |
| `verify:agent -- --mcp` (regression; the MCP reconnect check changed) | `exWhfY` | pass |
| `verify:completion -- --next-edit-absent` (regression) | `js4dSq` | pass |

Runs that failed while the verifiers were being developed are listed in
[rea-specialized-modes](../../recovery/rea-specialized-modes.md#native-verification-20-october-2026).
None was counted as a pass.

### Defects found and fixed

1. **Browser automation: false reason.**
   - Symptom: `cursor-ide-browser` was refused with "Server is blocked by team
     admin" for every local profile.
   - Root cause: `MCPService.getMcpAdminBlockMessage` requires
     `isEnterprise === false`, and only a Cursor account's membership refresh
     sets it.
   - Owner: `desktop/browser-automation-customization.mjs`. It keeps the block
     and states the real reason. The reconnect path accepts the new reason.
   - Commit `5e87e284`.
2. **Image picker: silent failure.**
   - Symptom: an unreadable image chosen in the file picker was dropped with
     no message.
   - Fix: it now shows the paste/drop message.
   - Owner: `desktop/image-input-customization.mjs`. Commit `5e87e284`.
3. **Paste and drop: orphaned files.**
   - Symptom: a rejected image file stayed in workspace storage.
   - Fix: it is now deleted on failure.
   - Owner: `desktop/image-input-customization.mjs`. Commit `5e87e284`.

**Unit tests.** `npm run test:modes` passes 23/23. The new tests cover:
- the browser block decision, unchanged for every state;
- reconnect;
- the picker message;
- deleting rejected files;
- the fixture encoders.

### Scope facts that changed; owner decision needed

- **Browser automation.** It is *offered* to the local Agent but *refused*
  locally. The owner's "only if locally reachable" rule therefore resolves to
  **explain unavailable**, and that is what is implemented and verified.
  - Making it usable means relaxing Cursor's team-policy check for local
    profiles. This session's permission policy refused that change as
    security-weakening, so it needs the owner's explicit approval.
  - The reachable verifier branch (navigate, snapshot, type, click,
    screenshot, with approval) is written but has never run.
- **Image generation.** It is **not** "no local producer". The local Agent is
  offered `GenerateImage`, which calls `POST /v1/images/generations` on the
  configured provider. A provider without that endpoint fails visibly.
  - The accepted "excluded" decision rested on my wrong 19 October inventory.
    The owner should choose between two options:
    1. include it as provider-backed, with live quality moved to a live
       story;
    2. hide the tool from the local Agent.
  - Nothing was changed while that is open.

### Other findings (not fixed)

- **Tool-row labels.** Chat tool rows show fixed past-tense labels built from
  the arguments, whatever the outcome. A refused navigate reads "Navigated to
  <url>", and a failed generation reads "Generated image". Fixing this means
  changing the shared tool-call view model, which is outside OV-704.
- **Image storage.** Images removed before sending, and sent images, stay in
  workspace storage. Sent images are re-sent with later turns, which is
  expected. Bounding this needs a decision about chat deletion.
- **Unrelated: stale editable build.** An editable build first made from an
  older `main` (this repo's root tree) cannot be upgraded. It fails in
  `agent-write-durability-customization.mjs` with "Agent temporary sweep v1
  contract changed". A clean build succeeds. That file belongs to OV-103 work;
  it is recorded only.

### Recommendation

**OV-704: promote to Verified on Linux x64.** This assumes the owner accepts
both changed facts:
- browser automation stays *explain unavailable* as implemented;
- image generation gets a decision.

If the owner wants browser automation usable, or image generation hidden,
hold OV-704 for that change and the reachable-branch native runs.

**OV-604:** unchanged. The owner decision is recorded on `main`.

## Follow-up (20 October 2026): owner decisions implemented

The coordinator recorded two decisions in
[owner decisions](../../planning/owner-decisions.md):
- **(a)** Browser automation stays *explain unavailable*. The team-policy
  check is not relaxed.
- **(b)** Image generation is **hidden** for this release. It will be
  revisited with live providers in OV-205.

It also asked that refused or failed browser and image tools never show a
past-tense success. The branch was rebased onto `origin/main` at `64831b22`.

### Changes

| Change | Owner | Commit |
| --- | --- | --- |
| `GenerateImage` is no longer registered by any of the three bundled Agent runtimes (`cursor-agent-exec`, `cursor-local-agent-runtime`, `cursor-agent-host`). | `desktop/image-generation-customization.mjs` | `e52cc22f` |
| **Defect found natively.** With the tool hidden, a model that called it anyway hung the turn. The AI SDK threw `AI_NoSuchToolError` and the turn retried (`7Cg8M6`). After the parser fix, the dispatcher's not-found branch left the argument stream undrained (`y5G9dQ`). For hidden tools only, the parser now passes the call through, and the dispatcher drains the arguments and answers: "Image generation is not available in this OpenVision release…". Other unknown tools are unchanged. v1 builds are upgraded in place. | same module | `b7b95d08`, `0a1ea475` |
| Browser MCP rows on error read "Failed <tool>", where they used to read "Navigated to <url>". Running and successful rows are unchanged; other tools already used error labels. | `desktop/tool-row-status-customization.mjs` | `e52cc22f` |
| The inventory records image generation as **hidden (owner decision)**. Its decision facts include both new markers. | `desktop/specialized-modes.mjs` | `e52cc22f` |

All changes are marker-guarded and idempotent, with first backups.

**Unit tests.** `npm run test:modes` passes 33/33. It includes:
- the registration gate for every flag combination;
- a hidden call answered, with its arguments drained;
- other unknown tools unchanged;
- the v1 upgrade;
- the failed browser row, with success, running and other MCP rows
  unchanged.

### Native verification

The final set ran on a clean rebuild of `0a1ea475`, one at a time, as the
unprivileged `ubuntu` user. Every run passed first time:

| Verifier | Runs |
| --- | --- |
| `verify:image-input` | `ydTKFr`, `KQysjD` |
| `verify:browser-automation` (explanation branch) | `DpNng4`, `51gTCv` |
| `verify:modes-probe` | `0nOMVF`, `jImPqx` |
| `verify:agent -- --mcp` | `67rNvG` |
| `verify:provider-import` | `Rpg3B7` |

The "GenerateImage absent from the Agent's offered tools" check is part of
both new verifiers:
- image-input records `generateAdvertised: false`;
- browser-automation asserts that no Agent request lists `GenerateImage`.

**Failures recorded, not counted.** On the first clean build of `e52cc22f`:
- `verify:image-input` failed twice (`7Cg8M6`, `v6dmOQ`). This was the
  real hang defect above.
- `verify:browser-automation` failed twice (`sMGN6K`, `aSGmOo`). The cause
  was in the verifier: the row's action and details are separate elements.
  The product already showed "Failed browser_navigate" and the reason.

### Other checks

| Command | Result |
| --- | --- |
| `test:modes` | 33/33 |
| `test:completion` | 66/66 |
| `test:build-integrity` | 26/26 |
| `test:mcp-lazy` | 63/63 |
| `check:desktop` | pass |
| `docs:check` | pass |
| `status:features` | 31/44; OV-704 is not changed by this branch |

`git diff origin/main...HEAD` touches no shared planning file. It contains no
logs, profiles, `build/`, `source/` or `electron-host/`, and no secrets.

### Recommendation

**OV-704: promote to Verified on Linux x64.**
- Image input, the computer-use explanation, the browser-automation
  explanation and the hidden image generation are all native-verified,
  first time and twice each, on a clean rebuild.
- The regressions pass.

**Still open, as decided:**
- Browser automation stays unusable in local profiles. The reachable flow
  (navigate, snapshot, type, click, screenshot, with approval) is written but
  has never run.
- Image generation goes to OV-205.
- Windows and macOS computer use belong to the platform stories.

**Remaining risk.** A model calling a *different* unknown tool still hits
Cursor's original `AI_NoSuchToolError` retry-and-hang behaviour. This was
left unchanged on purpose; it is outside OV-704 and worth its own story.
