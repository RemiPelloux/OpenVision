# Specialized modes: image, browser and computer use (OV-704)

Dates: inventory **19 October 2026**, native verification **20 October 2026**.
Input: the Cursor **3.21.13** Linux x64 runtime input, built from source on
this branch (`ov/modes-inventory`). Linux x64 only.

The owner accepted the scope on 20 October 2026; see
[owner decisions](../planning/owner-decisions.md). The native runs below
change two of the facts that decision rested on:
- **Browser automation:** the local Agent is offered the browser tools, but it
  cannot use them.
- **Image generation:** it does have a local, provider-backed producer.

Both are flagged for the owner in [Proposed scope](#proposed-scope).

The inventory comes from static reading of the built `source/app` tree and the
original extension `package.json` files. `npm run inventory:modes` reproduces
the decision-critical facts and fails if any of them changes. The native
verifiers and their run IDs are listed in
[Native verification](#native-verification-20-october-2026).

## Proposed scope

| Mode | Proposal | Why |
| --- | --- | --- |
| Image input in Agent chat | **Include** | It runs locally through the configured provider, and the existing image-capability gate already stops images going to text-only models. |
| Image generation | **Owner decision needed** (was *exclude*) | Corrected by native runs. The local Agent is offered a `GenerateImage` tool. It calls the **configured provider** at `POST /v1/images/generations` (body: `model`, `prompt`, `n`, `aspect_ratio`, `resolution`, `response_format`). A provider without that endpoint fails visibly: "Failed to generate image, error: Provider request failed: 404 Not Found". Nothing is hidden or silently sent elsewhere. Options: include it as provider-backed (live quality goes to a live story), or hide the tool from the local Agent. |
| In-app browser editor | **Include** | It is an Electron `WebContentsView` with a sandboxed, isolated partition. No vendor service or download is involved. |
| Agent browser automation | **Explain unavailable** (the "only if locally reachable" branch) | Proved natively. The local Agent is offered `cursor-ide-browser` and its 16 tools, but Cursor's `MCPService` refuses the server for any profile without a Cursor account. It used to give the false reason "Server is blocked by team admin". OpenVision keeps the block and states the real reason. Making it usable means changing a Cursor team-policy check; that is the owner's call. |
| Computer use | **Explain unavailable (Linux)** | Backends exist only for macOS and Windows. On Linux the extension returns before it reads any gate, manifest or download. OpenVision now explains why, in a "Computer Use" output channel. |
| Next-edit prediction (OV-604) | **Decision pending** | See [next-edit decision](next-edit-decision.md). |

## Inventory

### Image input

- **Owner.** The workbench Agent composer stores images under `selectedImages`
  on the user message. There are 80 references in
  `workbench.desktop.main.js`. Before sending,
  `getImagesFromImageSelection` → `resizeImage(image, onRemove, 1024)`
  downscales each image to a 1024-pixel bound.
- **Accepted types.** PNG, JPEG, WebP and GIF were attached natively, and each
  was sent with its declared type matching its bytes. The bundle also
  references `image/svg+xml`, which was not exercised.
- **Storage.** Paste, drop and attach all write the image to
  `<user-data>/User/workspaceStorage/<workspace>/images/<name>-<uuid>.<ext>`,
  then reference it by path.
  - At send time `generateImageProtos` re-reads the file. Anything over
    1024 px or 1 MiB is re-encoded as JPEG, shrinking until it fits in 1 MiB.
  - A 2400×2400 noise PNG (17 MB) was sent as a JPEG of about 572 KB.
  - The 10 MB limit in the composer applies to documents, not images.
- **Gate.** `desktop/provider-routing.mjs` (`imageInputGate`) counts the images
  on the message and on queued messages. When the selected model is explicitly
  text-only, it refuses with the non-retryable error "Image input is off for
  this model", before credentials are read or any request is sent. Evidence:
  [provider import on Linux](../verification/provider-import-linux.md#native-verifier-npm-run-verifyprovider-import).
- **Inline Edit.** `desktop/inline-edit-context.js` refuses images for **every**
  model and says why: "Inline edit currently supports text and code
  attachments. Use Agent for images, links or documentation." No
  capability-specific explanation is needed there.
- **Tab autocomplete.** No image path exists. The local provider
  (`desktop/completion-provider.js`) sends only text context.
- **Provider capability.** Vision input on the configured model. Discovery or
  the user can set "Image input" per model.
- **Network.** Only the configured provider.
- **Defects fixed** (`desktop/image-input-customization.mjs`):
  1. An unreadable image chosen in the **file picker** was dropped silently:
     its `Image.onerror` only revoked the object URL. It now shows "Failed to
     add image. The image format is not supported.", as paste and drop already
     did.
  2. **Paste and drop** wrote an unreadable file into workspace storage before
     decoding it, and left it there after rejecting it. The file is now
     deleted on failure.
- **Retention (observed, unchanged).**
  - An image removed from the composer before sending stays in workspace
    storage.
  - Sent images stay too, because later turns re-send them: after a restart
    the follow-up request carried all 9 earlier images.
  - Nothing deletes these files while their conversation exists. Bounding
    that storage needs an owner decision about chat deletion.

### Image generation

- **Owner.**
  - `generateImageToolCall` (13 references) is the workbench's rendering of
    the tool call.
  - The producer is the local Agent runtime: `cursor-agent-exec` offers
    `GenerateImage` to the model. The 20 October native runs observed it.
- **Gates.** None found on the client.
- **Provider capability.** An OpenAI-compatible `POST /v1/images/generations`
  on the configured provider.
- **Network.** Only the configured provider.
- **UI caveat.** The tool row's label is a fixed past-tense summary
  ("Generated image"), whatever the outcome.

### In-app browser

- **Owner.** Main process `browserViewMainService` → `createBrowserView`, which
  creates a `WebContentsView` with `contextIsolation`, no Node integration,
  `sandbox: true` and a `persist:…-browser` partition. The permissions it
  grants are limited to `pointerLock`, `clipboard-sanitized-write` and
  `local-network`.
- **Entry points.** `workbench.action.openBrowserEditor`. `simple-browser`
  (activation `onCommand:simpleBrowser.show`, `onCommand:simpleBrowser.api.open`
  and `onOpenExternalUri:http(s)`) redirects to that editor.
- **Network.** Only the pages the user opens. `simple-browser` contains one
  placeholder `https://example.com`.

### Agent browser automation

- **Owner.** `extensions/cursor-browser-automation` (UI extension, activated
  `onStartupFinished`) registers the MCP provider `cursor-ide-browser` with
  `featureGateName` undefined, so no gate applies.
- **Tools.** `browser_navigate`, `browser_snapshot`, `browser_click`,
  `browser_type`, `browser_take_screenshot`, `browser_cdp` and others (18 in
  total).
- **Calls.** The tools run workbench commands `cursor.browserView.*`, and from
  there the main process. Screenshots use `capturePage`. They are returned as
  MCP image content and shrunk by 0.8 per step until they fit in 1 MiB.
- **Gate defaults** (bundled):
  - `playwright_autorun` **on**;
  - `playwright_mcp_provider` on;
  - `browser_subagent` on;
  - `browser_features_access_control` off.
- **Approval.** When Agent auto-run is enabled, browser tools are auto-approved
  unless the per-composer `playwrightProtection` is set.
  `playwrightProtection` defaults to `!playwright_autorun`, which is **false**.
  OpenVision keeps "Ask Every Time" as the auto-run default
  (`desktop/autorun-customization.mjs`), so a fresh profile asks.
- **Network.** No fixed hosts, apart from never-fetched sourcemap comments
  (`http://go/...`). It reaches only the pages the Agent navigates to.
- **Native result (20 October 2026).**
  - The local Agent's `GetMcpTools` lists `cursor-ide-browser` with 16 tools,
    but with status `error`. A `CallMcpTool` → `browser_navigate` is refused
    before any page load.
  - **Root cause:** `MCPService.getMcpAdminBlockMessage` allows the browser
    server only when `isEnterprise === false`, or when an enterprise admin
    enabled browser features. Only Cursor's membership refresh writes
    `isEnterprise`, and that needs a signed-in Cursor account. A local
    profile leaves it `undefined`, which counts as enterprise without
    permission.
  - The refusal text was "Server is blocked by team admin", which is false for
    a profile with no team. `desktop/browser-automation-customization.mjs`
    keeps every block decision and only replaces the reason, for local
    profiles with no membership answer:

    > Browser automation is unavailable in OpenVision local profiles: Cursor
    > allows its built-in browser server only through Cursor account and team
    > settings, which a local profile does not have.

  - The blocked-server reconnect path compares the error text, so it accepts
    this reason too. If a later Cursor sign-in clears the block, the server
    still reconnects.
  - A unit test runs every combination of local mode, membership, browser
    feature and `disableAll`, and checks that the block decision is the same
    before and after.
- **UI caveats (not fixed; outside this story).**
  - The chat's tool row says "Navigated to <url>" even for the refused call.
    Tool-row labels are fixed past-tense summaries built from the arguments,
    not the result.
  - Settings → Browser & Network shows "Browser Automation: Connected to
    Browser Tab". That describes the browser editor's connection mode, not
    the MCP server.

### Computer use

- **Owner.** `extensions/cursor-computer-use` (UI extension, activated
  `onStartupFinished`, no `contributes`).
  - Activation calls a backend factory that switches on `process.platform`:
    `darwin` and `win32` only.
  - Any other platform returns at once. That is before `checkFeatureGate`,
    before the sidecar manifest, and before the
    `vscode.cursor.registerMcpProvider({ id: "cursor-computer-use" })` call.
- **Gates.**
  - `local_computer_use` (Windows) and `mac_computer_use` (macOS) both
    default **off**.
  - The sidecar manifests `mac_computer_use_sidecar_manifest`
    (`{ sidecarManifestUrl: "" }`) and `windows_computer_use_sidecar_manifest`
    (`{ x64: "", arm64: "" }`) default to empty.
  - The desktop chat request hard-codes `computerUseSupported: !1`.
- **Helpers.**
  - macOS embeds "Cursor Computer Use.app".
  - Windows downloads a signed executable listed in a manifest from
    `downloads.cursor.com/computer-use-sidecar/…`.
  - The Linux `resources/helpers` holds only `crepectl`, `cursorsandbox` and
    `node`.
- **Defect, fixed.** On Linux the extension returned silently, so nothing
  recorded why the Agent never offers computer-use tools.
  `desktop/computer-use-customization.mjs` explains this at the owner, before
  any gate or download:

  > Computer use is unavailable on this platform: OpenVision has no local
  > computer-use helper for it, so the Agent is offered no computer-use tools
  > and no helper is downloaded. (linux)

  The text goes to the **"Computer Use" log output channel**. Users see it in
  the Output panel, and it is also written to
  `<user-data>/logs/<session>/window<N>/exthost/cursor.cursor-computer-use/Computer Use.log`.
  It is also sent to the extension's `[cursor-computer-use]` console logger.

  The change is AST/regex-guarded, idempotent and backed up. macOS and Windows
  are unchanged; a unit test executes the patched function for all three
  platforms.

  **v1 → v2 (first native run failed).** The first version wrote only to
  `console.info`, and the coordinator's native probe runs `MtcfsB` and
  `cxZuad` failed with "Computer use explanation not observed". Root cause, from
  the 3.21.13 extension host:
  - `ExtHostConsoleForwarder` sends `console.info` to the renderer's
    `MainThreadConsole.$logExtensionHostMessage`.
  - That writes to the **log service only for `error` severity** (`FRv`).
  - Anything else goes only to the renderer devtools console (`NRv`).
  - So no log file ever held the message, and a console-only explanation is
    not something a user can find.

  v2 writes a file-backed log channel instead. It upgrades the v1 block in
  place, which matters because editable builds keep it.

## Deterministic inventory: `npm run inventory:modes`

`desktop/specialized-modes.mjs` reads the built input and writes
`logs/modes-inventory/inventory.json`. The file holds:

- SHA-256 hashes of the inputs;
- symbol counts;
- bundled gate defaults and dynamic-config fallbacks;
- extension manifests and the hosts each extension references;
- the bundled helpers;
- the proposal for each mode.

It contains no timestamps or machine paths, so two runs over the same build
are byte-identical (checked with `cmp`).

It then asserts the facts the proposal depends on, and exits 1 if any has
changed:

- the computer-use gates are off;
- both sidecar manifests are empty;
- the explanation is installed;
- `computerUseSupported: !1` is present;
- no computer-use helper is bundled;
- the image gate is installed;
- the local Tab configuration disables fused prediction;
- `generateImageToolCall` is still present;
- browser automation has no fixed network host;
- the desktop and glass gate defaults agree.

## Native probe: `npm run verify:modes-probe`

What the probe does:

- Runs the static inventory first.
- Launches the app with a disposable profile, behind the owned loopback-only
  proxy from `desktop/network-capture.mjs`. Chromium uses `--proxy-server`;
  extension-host Node uses `http.proxy` with `http.proxySupport: override`.
  Non-loopback requests are recorded and refused.
- Waits for `onStartupFinished` extensions.

It asserts:

- `exthost.log` records `ExtensionService#_doActivateExtension
  cursor.cursor-computer-use`, so the extension was activated;
- the explanation, with the platform, appears in a log file under the
  `cursor.cursor-computer-use` exthost folder (the "Computer Use" channel). The
  probe polls for up to 60 seconds, and on failure it prints what it observed;
- **zero** requests to `*.cursor.com` or any `computer-use-sidecar` path;
- no computer-use permission command and no image-generation command in the
  palette.

It also records the palette entries for "Browser" and every refused
non-loopback request.

## Native verification (20 October 2026)

**Host and setup.**
- Linux x64 cloud container: Ubuntu 24.04, 4 CPUs, Node 24.18.0.
- The runs used the existing unprivileged `ubuntu` user, in a separate copy
  of this branch's tree.
- That copy was built clean: the pinned AppImage was re-extracted and every
  customization applied from scratch.
- Each run used its own disposable `HOME` and `XDG_RUNTIME_DIR`, `xvfb-run`,
  `dbus-run-session` and an unlocked throwaway gnome-keyring.
- Runs went one at a time.
- Every model was a loopback fixture. None of this is live inference.

| Verifier | Runs (first time, both pass) | What it proves |
| --- | --- | --- |
| `verify:image-input` | `qj32Kz`, `qtQQC9` | See the image-input list below. |
| `verify:browser-automation` | `PnBN8U`, `LKqHMF` | See the browser-automation list below. |
| `verify:modes-probe` | `9MoX5V`, `990bje` | `exthost.log` shows the computer-use extension activated. The explanation is in `exthost/cursor.cursor-computer-use/Computer Use.log`. No sidecar or `*.cursor.com` request was made. The palette shows no computer-use permission command and no image-generation command. |

**`verify:image-input`** checks that:
- paste, drag and file attach each send their image;
- four attached formats (PNG, JPEG, WebP, GIF) are sent with matching types;
- the oversized PNG is sent as a JPEG of about 572 KB;
- a corrupt file is not sent and is explained, through the picker and through
  drop, and the rejected file is not left in storage;
- an image removed before sending is not sent;
- Stop closes the in-flight image request (202 ms and 198 ms);
- the text-only model gets **0** requests and "Image input is off for this
  model" is shown;
- `GenerateImage` goes to `/v1/images/generations` on the provider and its
  failure is reported;
- after a restart, the history is shown with 3 image pills, and a follow-up
  works and re-sends 9 earlier images;
- both host exits are 0.

**`verify:browser-automation`** checks that:
- the local Agent is offered `cursor-ide-browser`, with 16 tools and status
  `error`;
- `browser_navigate` is refused with the explanation, not "blocked by team
  admin";
- there are 0 page loads and nothing to approve;
- there is no non-loopback request;
- the host exits 0.

Runs `jeTh0Z` and `OAIa7U` were the same checks before the verifier also
recorded the offered tool list. They passed too.

**Regression runs on the same clean build:**

| Verifier | Run | Result |
| --- | --- | --- |
| `verify:provider-import` | `Ysef0m` | Pass, including the image gate. |
| `verify:agent -- --mcp` | `exWhfY` | Pass. This covers the MCP reconnect path. |
| `verify:completion -- --next-edit-absent` | `js4dSq` | Pass. |

**Getting the verifiers right took earlier runs on the same branch.** They
were not counted as passes:
- `verify:browser-automation`: runs `PH1Q2d`, `zKqkoR`, `eJ5IhR`, `dalMJ1`,
  `2ptRax` and `gbular` were diagnosis. `RJeGBf` and `6m3OKv` were the first
  passes before the clean rebuild.
- `verify:image-input`: runs `3H4kMK`, `mYGshY`, `QmZ1QN`, `B4iFci`,
  `1DqI83`, `4SQeHO`, `6uh1cp` and `nFiWza` failed on verifier selectors and
  measurement. Two of them, `3H4kMK` and `mYGshY`, also exposed the picker
  and storage defects. `axcWxa` and `lz7FlF` passed before the clean
  rebuild.

The run directories, with profiles and screenshots, stay under the ignored
`logs/` of the ubuntu tree. They are not published.

## Not proved

- **The reachable browser-automation branch.** `verify:browser-automation`
  contains a navigate → snapshot → type → click → snapshot → screenshot flow,
  with approval. It never ran, because the server is refused for local
  profiles. Approval, cancel mid-navigation and tab cleanup would need that
  branch, so they remain open if the owner chooses to allow the server.
- **The probe's network view** covers only Chromium (`--proxy-server`) and
  extension-host traffic that honours `http.proxy`. It saw **0** proxied
  requests in total. That means nothing was attempted through either route;
  it does not prove that no raw socket was opened. The process-family capture
  (`verify:telemetry:extended`) is the stronger check.
- **SVG input, queued messages with images, and Inline Edit with an image.**
  Inline Edit rejects images for every model; that is unchanged and was not
  re-run here.
- **Image generation, macOS and Windows computer use**, and live image quality
  belong to platform/live stories.
