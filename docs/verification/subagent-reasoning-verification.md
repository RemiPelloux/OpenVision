# Subagent model and reasoning verification

## Linux x64 update, 19 October 2026

Native checks on Linux x64 (container, Xvfb, private D-Bus, disposable
gnome-keyring Secret Service), built from source on `main` `b4f52a56` plus this
branch. Every request went to a **loopback fixture**; no live inference. The
worker report [subagent-reasoning](worker-reports/subagent-reasoning.md) lists every
command and run ID.

### Defect fixed: the child status said Provider default while High was sent

Reproduced with the new label assertion and the fix neutralized (run `teXGow`):
the inherited general-purpose row read **"Parent Thinker · Provider default"**
while the child request carried `reasoning_effort: high`.

Observed cause: a Task child runs as its own local chat whose saved selection
has no parameters (the persisted child chats in baseline run `lNAHwI` all hold
`parameters: []`). Its request therefore uses
`resolveModelParametersForSubmission`, which falls back to the saved per-model
choice: High for the inherited parent model, the Task Models choice for Explore.
The row label (`taskSubagentModelDisplay`) instead resolved the model through the
catalog with no parameters and showed the default variant. A temporary probe of
the agent-host parameter lookup confirmed that host path is not used for these
children: it recorded no calls during a full run.

Fix: `desktop/subagent-model-customization.mjs` (`subagentStatusReasoning`) makes
the label call the same submission resolver, in both workbench variants, so it
names exactly what the child request sends. It changes only local mode; without
services or outside local mode the recovered behavior is unchanged.

### What `verify:subagent-reasoning` now proves (run `gTyHaw`, then two final runs)

Each Task row label is compared with the observed child request:

| Case | Request (model, effort) | Visible status |
| --- | --- | --- |
| Inherited general-purpose | parent-thinker, high | row: Parent Thinker · High |
| Explicit Explore | child-thinker, ultra | hover: Child Thinker · Ultra |
| Profile-defined subagent | agent-thinker, medium | hover: Agent Thinker · Medium |
| After restart | child-thinker, ultra | hover: Child Thinker · Ultra |
| Recovery to Low | child-thinker, low | hover: Child Thinker · Low |

Retry, resume and restart:

- **Child failure.** A child 503, and a child stream that ends without a finish
  reason, each produce exactly one child request (child-thinker, ultra). There is
  no automatic child retry and no parent-model fallback. The parent (High)
  receives the failure as the Task result and continues.
- **Parent Try again / Resume after a Task.** The parent continuation fails (503 →
  Try again; partial stream → Resume). The recovery sends exactly one parent
  request (parent-thinker, high) that replays the existing child result. No
  duplicate child request is made.
- **Restart with a failed Task turn.** Restoring sends 0 requests. Try again then
  sends one parent High request and does not re-run the child.
- **Restart while a child is running.** The child socket closes. Restoring sends
  0 requests. The next Task again uses child-thinker / ultra.
- **Native Task `resume`.** Resuming the earlier Explore child, before and after a
  restart, keeps child-thinker / ultra and continues its saved conversation (3 → 5
  → 7 messages).
- **Profile-defined subagent.** `<profile>/User/agents/fixture-reviewer.md` declares
  `model: agent-thinker`. Its child uses that model with the model's saved Medium
  choice, while the parent keeps High.
  - The earlier static concern was that `IEe.getTaskToolConfig` drops parameters.
    That code is not on this path: local children do not call it.

The pre-existing cases (unavailable level, explicit recovery, disabled model,
Explore set to None) still pass unchanged. Across all cases no explicit child
used the parent model.

### Observations, not fixed here

- **"Stopped" for a failed child.** A failed child's Task row says "Stopped", and
  opening the child chat shows only its prompt. It offers no error and no Try
  again. Recovery is through the parent, or through the Task `resume` parameter.
- **Settings after an interrupted Task.** Runs `JpMjRo` and `SrclIo`:
  1. Restart while a Task child is outstanding.
  2. The restored chat shows the unanswered message in edit state.
  3. The titlebar Settings button then did not open Settings within 15 seconds,
     even after three clicks.

  After one follow-up message, Settings opened normally. The verifier opens
  Settings only after that follow-up. The cause was not established.
- **Child chat header.** It shows the provider and model name ("<provider> ·
  Child Thinker") without a reasoning level.
- **`modelSelectionError` is a plain `Error`.** Statically, it is not an instance
  of the native error hierarchy, so the exec retry classifier would treat it as
  retryable. On the measured local paths it is not reached:
  - the parent's selection errors are wrapped by the workbench;
  - unavailable child choices fail with a Task error and zero child requests,
    promptly.

  No retry loop was observed.

## Windows checks, 13 October 2026

Windows native checks, 13 October 2026. OV-104 and OV-203 remain Partial; these
results advance their local gates without claiming complete provider acceptance.

## Behavior delivered

**Settings → Models → Task Models** now exposes the Explore subagent selector.
It offers provider-specific reasoning choices, Inherit from parent, and None.
The local provider settings replacement previously hid this control, and the
recovered local-mode mapper removed its reasoning definitions and variants.
The mapper is now removed; the selector consumes the same catalog as the Agent.

The selector subscribes to capability changes as well as model IDs. Removed
reasoning levels remain selected with an unavailable label and an actionable
status message. Disabled/deleted model choices remain explicit until replaced.
The local Agent override conversion previously changed an unavailable Explore
model to inherit. It now preserves that identity so request validation rejects
it without using the parent's model or another provider.

No change to child reasoning transport was necessary for the tested active
Windows route. The earlier static finding of omitted parameters in
`IEe.getTaskToolConfig` was insufficient to establish a runtime failure. Native
inherited High already worked before this change. Alternate Task execution paths
remain unverified; the static excerpts are retained in
[the capability investigation](../engineering/reasoning-capability-lifecycle.md).

## Native simulated-provider evidence

`logs/subagent-reasoning-PfAdns/result.json` passed in the actual Windows desktop,
using a disposable profile, project and authenticated simulated HTTP API:

| Case | Observed inference |
| --- | --- |
| Inherited general-purpose child | Parent High → child High → parent High |
| Explicit Explore model/Ultra | Parent High → different child model Ultra → parent High |
| Full application restart | Saved child model and Ultra preserved in UI and requests |
| Discovery removes Ultra | Visible unavailable notice; parent receives a reasoning error; zero child requests |
| Explicit recovery to Low | Child uses Low, parent retains High, actual child marker returns |
| Disable selected child model | Visible unavailable notice; parent receives a model error; zero child requests |
| Select None for Explore | Explore removed from allowed types; attempted Explore call rejected with zero child requests |

There were 18 inference requests, no page errors, and both owned hosts exited 0.
Each tool-result assertion binds to the current Task call ID, so a marker in an
older conversation cannot count as current child success. The fixture model's
final sentence is not evidence of success: the verifier independently checks
child requests and the Task result.

The preceding run `eg0Pxl` failed because disabling the child model caused a
parent-model child request. The final fix changes that measured behavior.
Earlier run `dZ59Ca` established inherited High before any product edits.

Final fixture digests:

- Workbench: `047118fa803934bb610f8b6cccc9cfa420c8aac846022c2e2fc1b55b4d110245`
- Agent: `c1101ec3366135728aadb696ad2e5eb64ac2d2674d09e1cab5fd766060b71766`

## Real Codex Easy evidence

`logs/live-agent-verification-wnAlDa/result.json` passed with the saved Codex Easy
connection at `https://codex-easy.ai/v1`, GPT 6.1 Sol and High reasoning:

1. The real provider emitted a Task call: HTTP 200, 5,189 ms.
2. The child emitted a Read call: HTTP 200, 6,008 ms.
3. The child consumed the actual disposable file result and returned its unique
   marker: HTTP 200, 3,668 ms.
4. The parent consumed that Task result and returned the same marker in the
   visible answer: HTTP 200, 3,247 ms.

All four native inference bodies reached the real provider unchanged with
`reasoning_effort: high`. A loopback relay supplies a synthetic catalog matching
saved hints and swaps transport authentication in memory. This proves real
inference for this workflow; it does not prove live discovery metadata.
The file remained unchanged and the owned host exited 0. The relay records call
IDs/names and marker-presence booleans, not tool arguments, keys or reasoning text.

The previous real High timeout `oJS37r` remains a failure in the compatibility
report. One successful child workflow does not establish reliability or resolve
the timeout's cause. Explicit child overrides against real providers, retry and
resume behavior, additional models/tiers, and DeepSeek/Grok child acceptance are
still open. A native child status label can say Provider default while inherited
High reaches the wire; that display discrepancy remains a follow-up.

## Run locally

```sh
npm run build:desktop
npm run verify:subagent-reasoning
npm run test:desktop
npm run test:agent-relay
```

The first verifier is simulated. This separate opt-in command uses real quota
and the saved key with only a generated disposable file:

```sh
npm run verify:agent:live -- --live --model gpt-6.1-sol --reasoning high --subagent
```

Desktop tests passed 101/101; relay tests passed 6/6. Syntax checks and the
production assembly passed. No GitHub Actions are used. No macOS/Linux or
overall RAM claim is added.

The 10,000-model regression `logs/large-model-menu-TR2rHS/result.json` also
passed with the new settings layout: 40 Agent model rows / 340 menu elements,
80 provider-settings rows / 903 elements. That check covers the Agent and
provider lists; it does not establish the new Explore selector's large-catalog
performance.
