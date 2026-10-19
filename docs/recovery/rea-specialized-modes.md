# Specialized modes: image, browser and computer use (OV-704)

Date: **19 October 2026**. Input: the Cursor **3.21.13** Linux x64 runtime
input, built from source on this branch (`ov/modes-inventory`). Linux x64 only.
This is a scope inventory for the owner's sign-off. It does not promote OV-704.

Everything below comes from static reading of the built `source/app` tree and
of the original extension `package.json` files. The deterministic inventory
(`npm run inventory:modes`) reproduces the decision-critical facts and fails if
any of them changes. The native probe (`npm run verify:modes-probe`) is written
but was **not executed** in this session: see [Not proved](#not-proved).

## Proposed scope

| Mode | Proposal | Why |
| --- | --- | --- |
| Image input in Agent chat | **Include** | It runs locally through the configured provider, and the existing image-capability gate already stops images going to text-only models. |
| Image generation | **Exclude** | The only trace is a server-side Agent tool result type, `generateImageToolCall`. There is no local producer and no provider adapter. |
| In-app browser editor | **Include** | It is an Electron `WebContentsView` with a sandboxed, isolated partition. No vendor service or download is involved. |
| Agent browser automation | **Include only if locally reachable** | The `cursor-ide-browser` MCP provider has no feature gate and drives the local `WebContentsView`. Whether the local Agent loop is offered these tools is **not yet proved natively**. |
| Computer use | **Explain unavailable (Linux)** | Backends exist only for macOS and Windows. On Linux the extension returns before it reads any gate, manifest or download. OpenVision now logs why. |
| Next-edit prediction (OV-604) | **Decision pending** | See [next-edit decision](next-edit-decision.md). |

## Inventory

### Image input

- **Owner.** The workbench Agent composer stores images under `selectedImages`
  on the user message. There are 80 references in
  `workbench.desktop.main.js`. Before sending,
  `getImagesFromImageSelection` → `resizeImage(image, onRemove, 1024)`
  downscales each image to a 1024-pixel bound.
- **Accepted types.** The bundle references `image/png`, `image/jpeg`,
  `image/gif`, `image/webp` and `image/svg+xml`. *Inference:* these are the
  accepted MIME types; a per-type native check is still open.
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

### Image generation

- **Owner.** `generateImageToolCall` (13 references) is a case of the
  server-defined Agent tool-call union. It is rendered when a hosted agent
  returns one.
- **Gates.** None found on the client.
- **Provider capability.** A hosted image-generation tool. Neither the local
  Agent runtime nor the OpenAI-compatible adapter produces this tool call.
- **Network.** Not reachable without the hosted backend.

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
  `desktop/computer-use-customization.mjs` logs this at the owner, before any
  gate or download:

  > [cursor-computer-use] Computer use is unavailable on this platform:
  > OpenVision has no local computer-use helper for it, so the Agent is offered
  > no computer-use tools and no helper is downloaded. (linux)

  The change is AST/regex-guarded, idempotent and backed up. macOS and Windows
  are unchanged; a unit test executes the patched function for all three
  platforms.

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

- the computer-use explanation (with the platform) appears in the profile
  logs or the renderer console;
- **zero** requests to `*.cursor.com` or any `computer-use-sidecar` path;
- no computer-use permission command and no image-generation command in the
  palette.

It also records the palette entries for "Browser" and every refused
non-loopback request.

## Not proved

- **No native run happened in this session.** `verify:modes-probe`,
  `verify:completion -- --next-edit-absent`, an image-input matrix and a
  browser-automation verifier need a non-root user. This container's
  permission policy refused both creating that user and running in a user
  namespace. The two scripts that exist passed `node --check`; they have
  never been run.
- **The image-input matrix** is not native-verified: paste, drag and attach;
  each MIME type; oversized and multiple images; queued messages; cancel
  during send; restart with images in history; temp-file cleanup. The
  text-only gate itself is native-verified in run `9bMq1n`.
- **Browser automation** has not been driven through the local Agent loop.
  It is unknown whether the local Agent is offered `cursor-ide-browser` tools,
  how approval appears, and whether tabs are cleaned up when a chat closes.
- **Image generation, macOS and Windows computer use**, and live image quality
  are out of Linux scope.
