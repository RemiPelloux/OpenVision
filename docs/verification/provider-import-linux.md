# Provider import from pi and user-specified capabilities on Linux

Date: **16 October 2026**. **Linux x64 only**: Omarchy/Hyprland on Wayland,
with the gnome-keyring Secret Service and Node 26.8.1 tooling. The 3.21.13
runtime input was built from source on parent `b09f4cd3`, plus this change.
Nothing was packaged. Windows and macOS were not run.

Every run used **fixtures only**: a disposable `HOME` holding a fixture pi
config with random fake keys, and a loopback OpenAI-compatible provider. The
user's real `~/.pi` files and keys were not read by any test or verifier. No
live inference took place. No acceptance story is promoted by this report.

User guide: [Import providers from pi and set model capabilities](../guides/provider-import.md).

## Defect reproduced first: images reached text-only models

The recovered workbench defines `doesModelSupportImages` but never calls it,
and the catalog's `supportsImages` has no other consumer. A native run before
the gate existed (`verify:provider-import -- --reproduce`, run `zvpl7T`) went
like this:

1. Import `fixture-text`, declared `input: ["text"]`.
2. Select it, paste a 32×32 image and send.

The provider received **one** `/v1/chat/completions` request with **one**
`image_url` part.

**Fix.** `desktop/provider-routing.mjs` adds a gate at the start of the
workbench's `runLocalAgentInExtensionHost`, in both the desktop and glass
variants.

- It counts the images on the user message, and on any user messages queued
  ahead of it.
- If the selected model's effective image capability is explicitly `false`, it
  throws the native non-retryable error before credentials are read or any
  request is sent. That capability can come from discovery or be set by the
  user.
- When the capability is unknown, the provider still decides, as before. This
  keeps the [provider failure matrix](../recovery/rea-provider-failure-matrix.md)
  image-rejection case intact. Account-integration models are not gated.

## Native verifier: `npm run verify:provider-import`

Final run `9bMq1n`, exit 0, three owned launches, each of which exited 0:

| Clause | Observed |
| --- | --- |
| Preview | Lists 3 new providers and 1 not importable. `fixture-anthropic` (`anthropic-messages`) is **Not supported**, with a reason, and offers no checkbox. `fixture-oauth` shows "OAuth sign-in is not imported". Each model's capabilities are listed. No fake key appears in the page. |
| Confirm | "Imported from pi: fixture-chat (2 models, key stored encrypted); fixture-responses (1 models, key stored encrypted); fixture-oauth (0 models, no key)." |
| Encryption | Saved as `secret://openvision.provider.<id>` with prefix **`v11`** (Secret Service) for both keyed providers. No secret was saved for the OAuth provider. |
| Plaintext | A raw scan of **163 profile files** for every fake key, in UTF-8 and UTF-16LE, found **0 hits**. The verifier's own output is also checked. |
| Restart | All 3 providers and their user-specified rows were restored. |
| Idempotent | The re-run preview shows "0 new, 3 already imported". Nothing is selected, and Import with nothing selected is refused. Still 3 providers. |
| Reasoning menu | Fixture Thinker shows Provider default, Low, Medium, High and Extra High. The menu description starts "User-specified" and lists images, context and max output as user-specified. Fixture Text shows only Provider default. |
| Image gate | Fixture Text with a pasted image: **0 requests**. The message shown is "Image input is off for this model · This model is set to text-only input…". |
| Manual capabilities | Through **Edit Model** (screenshot `manual-capabilities.png`): Reasoning "low, high", Image input "Text and images", Context 64,000. The row then reads "User-specified · reasoning low/high · text + images · 64,000 context · 4,096 max output". The menu now shows Low and High, and no Medium. |
| Follows the user | Choosing High and sending an image gives **1 request**: `reasoning_effort: high`, image parts present, authorized by the imported key. The values survive a restart. |
| CLI | `--pi` preview and `--pi --apply --replace fixture-chat` print no key. The queued request file holds no key. On the next launch, Models settings opens the queued import with only `fixture-chat` selected. Import adds no duplicate, removes the queued request, and keeps the user's manual override. |
| pi files | SHA-256 of `models.json` and `auth.json` is unchanged after the run. |

Hashes from that run: host `0636c96f…a8aff9`. The workbench and settings
hashes are recorded in the run's private `result.json`, under `logs/`.

## Unit tests added

`desktop/pi-import.test.mjs` (4 tests, part of `test:provider-storage`) covers:

- API-type mapping and unsupported reasons;
- reasoning-level mapping, including duplicate wire values;
- skipping duplicate and invalid models;
- that no plan, IPC preview or CLI output contains key material;
- that `auth.json` OAuth and `!command` keys are never imported;
- that a stale preview digest blocks key release;
- encrypted-store-only key writes, idempotent re-runs, name conflicts, and
  updates that preserve user values;
- user-specified overrides feeding the catalog, reasoning routes and the image
  gate;
- validation of saved capability data.

`desktop/reasoning-transport.test.mjs` adds a gate test. It runs the patched
method with image and non-image actions, and checks that the patch is
idempotent.

## Checks

```text
npm run test:provider-storage          72/72
npm run test:model-discovery           39/39
npm run test:provider-probe            10/10
npm run test:build-integrity           26/26
npm run test:desktop                   162/162
npm run check:desktop                  pass
npm run docs:check                     pass
npm run build:desktop                  pass (239 scripts, 124 manifests, 32 main-process modules)
npm run verify:provider-import         pass (9bMq1n); --reproduce zvpl7T recorded the defect
npm run verify:model-menu              pass
npm run verify:provider-identity       pass
npm run verify:reasoning-capabilities  pass after a selector fix (below)
npm run verify:catalog-retention       pass after the same selector fix
```

`verify:reasoning-capabilities` first failed. The visible message was correct,
but the verifier looked for the status line as a direct child of
`.openvision-model-settings`. Commit `658b8f4d` moved that line into
`.openvision-api-settings`. Both verifiers now select that same element. No
assertion changed. `verify-profile-io-faults.mjs` uses the same old selector;
it belongs to other work and was left unchanged.

## Not proved

- **Context window and max output tokens.** They are stored, validated and
  shown, but Agent requests do not use them yet. The exec still reads these
  values from the provider's `/models` response.
- **Images without a gate.** Inline Edit, autocomplete and account models are
  not gated. Inline Edit already rejects images.
- **Real pi configs.** Behaviour with the user's own pi configs and keys, and
  with live providers, is not covered.
- **Other platforms.** Windows, macOS and packaged builds were not run.
- **`openai-responses` providers.** They are imported as OpenAI-compatible.
  OpenVision's own choice of request format was not checked against a
  Responses-only server.
