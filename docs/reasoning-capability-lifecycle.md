# Reasoning capabilities and saved selections

Windows native verification, 13 October 2026. This work advances OV-203; it does
not establish that every model accepts every reasoning level.

## User-visible behavior

Model settings and the native reasoning submenu distinguish **Provider-declared ·
Unverified** from **Compatibility hints · Unverified**. A declaration takes
precedence over compatibility hints. No menu tier is presented as live-verified
merely because discovery or a simulated request succeeded.

Successful discovery replaces the capabilities of each listed model. Omitted
metadata clears an old declaration; known endpoint/model hints may then apply.
An explicit empty list forbids those hints. Unlisted retained models keep their
previous metadata. Failed discovery continues to retain the saved catalog.
Malformed reasoning lists, entries, duplicate/reserved levels and invalid
capability containers now fail discovery atomically with a visible error. The
last valid catalog and selection remain usable and survive restart. Canonical
capability fields take precedence over aliases; malformed canonical declarations
cannot fall back to a lower-priority field or compatibility hints.

If the server removes a selected level, the trigger shows the exact saved value
with **(unavailable)**. Sending displays an actionable error and makes no inference
request. The preference survives restart until the user chooses another level.
**Provider default** remains selectable even when no explicit levels are declared;
it omits the upstream effort field. Choosing High sends High without substituting
another tier.

## Defects and ownership changes

The first native observation, `reasoning-capabilities-yxwM0P`, showed Ultra being
silently replaced with omitted effort after discovery removed it. Subsequent
checks exposed a separate stale native list: its comparator considered IDs and
enabled state but ignored changed capabilities. The shared native normalization,
submission and catalog comparison owners now preserve explicit local parameters
and refresh metadata. A singleton parameter control now permits an explicit
Provider default recovery choice.

The Agent also cached earlier discovery capabilities. Run `ODXeaF` selected High
correctly but then stalled in local retries after the encoder rejected that value
against the old list. The current saved provider snapshot now carries model-specific
wire values through Agent routing and overrides that stale runtime cache. Both
request encoders reject an unsupported explicit value before sending, rather than
silently removing it. Boundary checks cover child routing; full native subagent
error/retry behavior remains an OV-104/203 follow-up.

Catalog construction lives in `desktop/model-catalog.js`; reasoning choices and
their provenance share `desktop/model-reasoning.js`. The UI and request routing
consume the same parsed declarations. Build installation covers workbench, main
process and Agent helper imports, and preserves customization backups.

## Evidence

`logs/reasoning-capabilities-9vJaGo/result.json` passed in the actual Windows app
with a disposable profile and authenticated simulated HTTP server. It proves:

- Declared/unverified text is visible in settings and the native submenu.
- Malformed entries, a non-list declaration and null produce visible discovery
  errors; the last valid Ultra choice still works after a full process restart.
- Ultra reaches the fixture as `reasoning_effort: ultra`.
- Removing Ultra refreshes the trigger and blocks inference, including after restart.
- Choosing High recovers the same conversation and sends `high`.
- Empty and omitted declarations block stale explicit choices; selecting Provider
  default recovers and sends no effort field.
- Five expected inference requests, no blocked-choice inference requests, no page
  errors, and all three owned hosts exited with code 0.

Workbench SHA-256:
`8eeb9e43157c73f37ddecd669725133ad58956a882225cc49ca7c50a71e3363a`.
The native report also pins its verifier and catalog helpers. This is local UI
and routing evidence, **not real Codex Easy inference**.

`logs/model-menu-ZaaFkd/result.json` separately verifies visible unverified hints,
GPT/DeepSeek model-specific menus, search, selection and reasoning persistence
through restart/legacy-ID migration. The focused provider/identity suite passed
all 20 tests, including atomic rejection and restart retention for 12 malformed
declarations. The final desktop suite passed 100 tests, with no failures or skips.
Syntax/build and the browser settings-list check also passed.

`logs/large-model-menu-toaRTk/result.json` verifies the updated native picker with
10,000 synthetic saved models: 40 Agent rows / 340 menu elements and 80 settings
rows / 903 elements across two providers. Keyboard paging, full-catalog search,
accessible model name, selected-page reopening, focus restoration and failed
discovery retention passed. Initial opening took 332 ms on this workstation;
this single run is not a general latency or RAM guarantee.

The idle normal Windows window was reloaded and checked separately:
`logs/normal-reasoning-ui.json` records all 11 saved models across Codex Easy,
DeepSeek and Grok groups, the visible unverified notice, and unchanged saved
provider configuration/credential records. This was a UI refresh, not a new
live-inference check or a restart of the application's main process.

REA static Evidence
`ev_7d05f3f0c832270b3c5993ed47f4d4f42fcfe4a59888087d295efac156bb3337`
analyzed selected original normalization, catalog-comparison and parameter-control
functions alongside current helpers: eight parsed JavaScript files, zero parse
failures. `logs/reasoning-capability-evidence/provenance.json` retains original
offsets and source SHA-256
`5a447679d1f3b98e7da3e90c7dc3afe733fd949006e326e798a79a6dd1f2de27`.
Static analysis does not establish runtime or live-provider compatibility.

A separate real Codex Easy GPT 6.1 Sol High native run, `oJS37r`, returned a Read
call (HTTP 200), then timed out on the actual file-result continuation after
60 seconds. Both requests preserved High. This failed run remains evidence in
the live compatibility report and is not counted as a success.

## Limits and follow-up

OV-203 remains Partial pending its OV-104 dependency and remaining retry/resume
and provider cases. Malformed discovery and native child capability-change/error
behavior now have scoped evidence in [subagent verification](subagent-reasoning-verification.md). Real-provider successes and
failures remain in [live-provider-compatibility.md](live-provider-compatibility.md).
No new macOS/Linux or overall RAM claim is made.

### Subagent boundary investigation

REA Evidence
`ev_f09db4bd6d6ee08c9200b8036a2e449dd707cc091799fa9fb8ef803a2e947178`
analyzes seven exact recovered expressions plus the current model-identity helper:
eight parsed JavaScript files, zero parse failures. The ignored
`logs/subagent-reasoning-boundaries/provenance.json` retains byte and character
ranges in the original Agent-exec bundle, SHA-256
`0df300c9865f395a02337ac880339c216ac44b45ada445daa46cae4c80a6e5c2`.
The complete REA record is `logs/rea-subagent-reasoning-boundaries.json`.

Observed in these source expressions:

- `Wse` calls the Task configuration callback with both resolved model ID and
  subagent type. Local `IEe.getTaskToolConfig` consumes only the model ID and calls
  `Zxe` without model parameters. Its Explore override conversion also retains
  model ID without the stored parameters.
- The parent request passes `m.parameters` to `Zxe`, but its subsequent `wEe`
  configuration omits them. An inherited child therefore has no corresponding
  parent-parameter field at this local configuration boundary.
- `TEe` recognizes the native `Nwe` error hierarchy. `Lwe` supplies the
  non-retryable kind. The OpenVision model-selection helper currently creates a
  plain Error named LocalProviderError; that name alone does not make it an
  instance of this native hierarchy. Encoder rejection also creates a plain
  Error. The parent workbench wrapper handles its own selection error, but this
  is not proof of child/runtime retry behavior.

These are static findings, not observed child requests or a demonstrated retry
loop. Subsequent native checks supersede the inference that this omission breaks
the active Windows child path: inherited High already worked before edits, and
the restored settings control sends explicit Ultra to the selected child.
Unavailable levels terminate with a Task error and zero child requests. The
measured defect was a disabled model silently becoming inherited; that local
override conversion is fixed. See [subagent verification](subagent-reasoning-verification.md)
for native fixture and real GPT evidence, remaining alternate-path uncertainty,
and the explicit limits on retry/resume claims.

One rebuild found eight changed bytes in the local generated JavaScript-debugger
manifest, with an unchanged old modification time. Its cause is unknown. The
malformed file and hashes were retained under ignored `logs/`; the valid retained
recovered copy was restored and the build passed. See
`logs/js-debug-manifest-restoration.json`. No debugger acceptance is inferred.

Run locally without an external API:

```sh
npm run build:desktop
npm run verify:reasoning-capabilities
npm run verify:model-menu
npm run test:desktop
```

These checks use disposable profiles. No GitHub Actions are used.
