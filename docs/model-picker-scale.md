# Model picker scale and accessibility — 13 October 2026

The native Agent picker now mounts at most **40 model rows** at a time. Previous
and Next controls expose every result; search continues to examine the full
catalog. Reopening starts on the selected model's page. Native selection,
reasoning submenus and saved preferences retain their existing owners.

Provider sections have accessible names. The reasoning submenu uses the human
model name rather than its encoded routing identity. An unavailable selection
reads **Unavailable model** while preserving its exact identity for request
validation; it never silently selects a replacement.

## Native measurements

The verifier seeds 10,000 synthetic models across two providers in a disposable
Windows profile. It runs the actual OpenVision desktop and settings UI. It uses
no API keys or model inference. Its explicit failed-discovery check targets an
unreachable loopback address.

| Surface | Model rows mounted | Descendant DOM elements |
| --- | ---: | ---: |
| Agent picker before pagination | 10,000 | 70,023 |
| Agent picker after pagination | 40 | 300 |
| Settings, two provider sections | 80 (40 per provider) | 823 |

The measurements describe the initial menu/settings state; additional controls
and submenus can add elements. They are not total-process RAM measurements or
a bound independent of the number of settings providers. The Agent bound is
global across providers. The settings bound remains per provider.
Opening took about 10.2 seconds in the old run and under one second in the new
runs. This includes native readiness and click timing, so it is observational
evidence, not a controlled latency benchmark or a performance SLA.

The old section-grouping pass filtered the full result once per provider. Local
results now bypass that superseded grouping and group only the current page in
one pass. No search results or saved models are discarded to obtain the bounds.

## OV-202 acceptance

`logs/large-model-menu-ghYlES/result.json` passed these native checks:

- Provider group names and model menu-item names are exposed in Chromium's
  accessibility tree. The search field has an accessible name.
- Arrow keys reach Next and Previous; Enter changes pages without selecting a
  model. The number of model rows stays bounded.
- Searching for model 9,999 finds it; Enter selects it. Reopening shows its last
  page and the correct provider group. An unmatched query shows the empty state.
- Selection and Escape both return focus to the chat input after the native
  close transition, within the verifier's five-second deadline.
- Settings expose named provider regions. Keyboard paging restores focus to a
  navigation button; searching finds the last model without expanding the list.
- Failed discovery shows a useful connection error and retains the saved model.
  Disabling the selected entry produces the readable unavailable label.

`logs/model-menu-sUR6sT/result.json` also passed the small GPT/DeepSeek/Grok menu,
provider separators, search/keyboard selection, human-readable parameter-menu
label, model-specific reasoning choices and saved preference migration/restart.
The catalog-retention workflow in [the lifecycle report](provider-selection-lifecycle.md)
supplies native empty/malformed/reduced-catalog and unlisted-state evidence.
Both final picker runs reported no renderer errors and closed their owned hosts
with exit 0. The normal user profile was not used for these tests.

Workbench SHA-256:
`eae93e32aa09bda4a0798c6e4209cd87bd5670cab9fb5b352e0c641908797278`.
The large-run record separately hashes its renderer helpers, stylesheet,
settings module and verifier. Baseline record:
`logs/large-model-menu-vUI2Vj/result.json`.

Earlier failed harness records are retained. `DZ3rb2` toggled the chat before
startup finished; `44VmWx` used an ambiguous welcome action; `uJRNRa` assumed the
initial keyboard index. `ErEgz9` asserted focus before the close transition;
`igDG4b` inspected the submenu wrapper instead of its inner accessible menu.
The final checks wait for readiness and actual focus, navigate until the intended
native item is focused, and select the inner menu by its accessible role/name.

OV-202 is Verified for the accepted local Windows picker contract. This is not
a full screen-reader usability certification: no NVDA spoken-output or native
macOS/Linux session was tested. Platform gates, live-model reasoning acceptance
and broader message-rendering/resource budgets remain separate open stories.

## REA and reproducibility

REA Evidence
`ev_d65280a1e81feed5a974c4a4d8652cae0b319d2db2cbe215b8b63e49aec64b49`
parsed three original owner slices plus their provenance record: 9,346 bytes,
1,691 AST nodes, zero parse failures. The original workbench SHA-256 was
`5a447679d1f3b98e7da3e90c7dc3afe733fd949006e326e798a79a6dd1f2de27`.
Exact ranges and complete CLI evidence remain under `logs/rea-picker-pagination*`.
Static coverage is partial and does not establish execution outside those slices.

Run `npm run verify:model-menu:large` and `npm run verify:model-menu` against the
prepared Windows desktop. The first command's `--baseline` option records the
loaded implementation without enforcing the paged contract; it does not restore
an earlier build. Five focused boundary checks cover page identity coverage,
catalog shrinkage, nonlocal display behavior and patch ownership/idempotence.
