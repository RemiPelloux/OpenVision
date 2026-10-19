# Next-edit prediction: release-scope decision paper (OV-604)

Date: **19 October 2026**. Input: Cursor **3.21.13** Linux x64 runtime input,
built from source on `ov/modes-inventory`. This paper prepares an **owner
decision**. It does not make one, and nothing here implements predictions.

## What the recovered client needs

The recovered client has two prediction producers. Both are static
observations from the built `workbench.desktop.main.js`.

**1. Fused prediction inside the Tab stream.**
- The `StreamCpp` response can carry `cursorPredictionTarget`: a relative path,
  a one-indexed line number, the expected content and a retrigger flag.
- The stream consumer maps it to a `fusedCursorPrediction` event.
  `immediatelyShowNextCursorPrediction` then shows it as a jump hint
  (`span.cursor-prediction-hint-line-widget`) with dimmed preview lines
  (`cursor-prediction-dimmed-line`).
- That happens when the edit suggestion is suppressed or is a no-op.
- Several heuristics suppress it, among them "too close to a previously
  accepted suggestion" and "Tab would not accept it".
- It is enabled by `cppConfig.isFusedCursorPredictionModel`.

**2. Separate RPC.**
- `aiserver.v1.AiService.StreamNextCursorPrediction` (server streaming) is
  declared in the service descriptor.
- The 3.21.13 desktop workbench has **no direct caller**:
  `.streamNextCursorPrediction(` occurs zero times.

## What OpenVision does today

- **Configuration.** In local mode `desktop/completion-customization.mjs`
  writes `cppConfig` with `isFusedCursorPredictionModel: false`.
- **Provider output.** The local provider (`desktop/completion-provider.js`)
  yields only `modelInfo` (with `isFusedCursorPredictionModel: false`),
  `rangeToReplaceOneIndexed` and `text`. No prediction event can reach the
  consumer.
- **Hosted RPCs.** Anonymous hosted RPCs from Node transports are refused
  (`desktop/network-defaults.mjs`).

Checks for this:

- **Unit tests** (`desktop/next-edit-absence.test.mjs`, in `npm run test:modes`):
  - the provider's event cases are exactly those three;
  - the built workbench has no RPC caller;
  - the local configuration disables fused prediction;
  - the traffic classifier matches both producers.
- **Native verifier, not yet run here:**
  `npm run verify:completion -- --next-edit-absent`.
  - It types, edits two separate sites, accepts suggestions and moves between
    them.
  - Throughout, a `MutationObserver` watches for the prediction DOM, and every
    renderer request is matched against
    `StreamNextCursorPrediction|CppService|StreamCpp`.
  - It must see zero of each while at least two local completion requests are
    served.

## Options

### Path A: record the exclusion

Ship without next-edit prediction and say so in the release claims and the Tab
guide. Ordinary Tab suggestions are unaffected.

- **Work:** the decision record, a guide sentence, and the
  `--next-edit-absent` native run as the regression gate.
- **Risk:** low. The fused path stays off by configuration, and the provider
  cannot produce prediction events.
- **Cost:** none ongoing, beyond keeping the decision fact in
  `inventory:modes` and the unit test green.
- **Loss:** a feature hosted Cursor users know. Any user expectation needs a
  clear sentence in the docs.

### Path B: an adapter on the configured provider

Make the local provider ask the configured model for a predicted next edit
location, then emit `fusedCursorPrediction`.

- **Contract work:**
  - a prompt and response schema for the target: path, one-indexed line,
    expected content;
  - validation against the current document version and content, so stale
    targets are rejected;
  - handling of targets in other files (open or closed, ignored files) and of
    CRLF and UTF-16 columns;
  - setting `isFusedCursorPredictionModel: true` only when the selected model
    is marked capable.
- **Verification:**
  - navigation and range correctness;
  - stale results after typing;
  - cancellation;
  - suppression heuristics;
  - first and subsequent latency;
  - acceptance quality on a fixed workload.
  - The roadmap sizes OV-604 at 13 points; this path is most of that.
- **Running cost:**
  - at least one extra model request per accepted or suppressed suggestion,
    or a larger completion response;
  - more tokens and latency on every Tab cycle with a general chat model;
  - quality depends on the provider. No OpenAI-compatible model is trained
    for this protocol, so live quality evidence would be needed before any
    claim.
- **Unknowns:** the hosted model's exact behavior and training are not
  recoverable. Parity cannot be claimed, only a documented OpenVision contract.

## Recommendation for the owner

Path A is the conservative default and matches `objective.md`: no silent
exclusion, and nothing claimed that has not been verified. It takes two steps:

1. Record the exclusion.
2. Run `--next-edit-absent` on Linux as its gate.

Path B can follow later as a separate, opt-in story, once a provider and model
have been chosen for quality measurement.
