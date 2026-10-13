# Saved models survive discovery changes

13 October 2026. A successful `/models` response previously replaced the saved
catalog, retaining absent entries only when they had been added/edited manually.
An empty or reduced catalog could therefore remove a saved model from the picker.
This code path is established by source inspection; it does not prove the cause
of the user's earlier live-catalog reduction.

The `ModelProviders.fetchModels` owner now merges discovery into the saved
catalog. Absent entries retain their exact IDs, names, enabled states and
capabilities, with `discoveryStatus: unlisted`. Returning entries regain
`discoveryStatus: listed`. Malformed responses still fail before mutation, and
results from replaced providers cannot overwrite the new provider configuration.
No normal profile or credentials were edited for verification.

Settings show **Not in latest catalog** with an explanation that the saved model
remains selectable. This status describes the discovery response; it does not
claim that inference is supported or that the provider disabled the model.
Removal remains an explicit user action. The change adds metadata to the existing
storage schema and does not require a destructive migration.

## Native Windows evidence

`npm run verify:catalog-retention` launches a disposable native app and local
HTTP provider. Run `logs/catalog-retention-F4jnEX/result.json` passed:

- Real authenticated discovery and malformed-catalog rejection retain three rows.
- Empty discovery retains all three saved models, including a disabled entry and
  a custom name, and displays the unlisted labels.
- The enabled, nonmanual, unlisted `gamma` model remains in the Agent picker and
  reaches the configured endpoint with the exact `gamma` wire ID.
- Normal app shutdown and restart retain the saved catalog and unlisted status.
- Replacing the key through settings changes the credentials used by subsequent
  discovery and inference. The fixture records authorization booleans only.
- Reduced discovery adds a new model, restores a returning model's listed status,
  and preserves the custom name and disabled model.
- Explicit model removal persists in the saved database after shutdown.

Both inference turns made exactly one inference request each. Both owned app
hosts exited 0; there were no renderer errors. The saved configuration was read
through a read-only SQLite connection after shutdown. The settings screenshot
was inspected for readable labels and retained controls.

The result records the commit, OS, verifier and installed module hashes. Installed
provider owner SHA-256:
`3c5331f668631fcd4075f3a8332cf1791473d504a1c3454ab37b071904af0249`.
Installed settings module:
`a215d9c75aceb827f307988b705db1c14b6fdcb6cce458ff187c7984f5444091`.

The first run `7t02D1` clicked settings after titlebar visibility but before
workbench action registration. Its failure screenshot and result are retained.
The verifier now uses the same eight-second startup settle interval as the native
Agent workflow. This is a harness precondition, not a claim that immediate
startup interactions are fixed in the product.

## Remaining gates

The 81 desktop and 21 completion/profile tests pass, along with desktop syntax,
the production build and the acceptance-denominator check. Focused tests cover persistence, returning models, disabled/manual choices,
malformed responses, concurrent discovery and stale-provider responses. Native
fixture results do not establish live-provider availability, cross-platform
support or all OV-201/202 requirements.

Duplicate raw model IDs across providers still collapse to the first enabled
provider in the catalog/routing owner. Provider-scoped model identity and its
Agent/subagent/autocomplete transport mapping remain required. Native Agent
10,000-row bounds and complete accessibility remain open. OV-201 and OV-202
remain Partial; no acceptance story is promoted by this change.
