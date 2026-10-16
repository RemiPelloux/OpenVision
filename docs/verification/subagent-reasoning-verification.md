# Subagent model and reasoning verification

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
