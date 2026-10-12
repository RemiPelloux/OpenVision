# REA follow-up: local user rules and subagent reasoning

12 October 2026. The installed input is still Cursor 3.21.13. This pass deepens
the existing recovery; it does not import a newer upstream release.

## Findings and implementation

The recovered **New User Rule** action calls the knowledge-base service. That
service originally listed, added, updated and removed rules through cloud RPCs,
and refreshed on authentication changes. A separate Agent context producer
already reads the service's items and converts non-generated rules to global
user instructions in local mode.

OpenVision now replaces that service at its owning boundary. It retains the
native observable items, events and CRUD contract, while storing user rules in
the current local profile. The service has no authentication or cloud-client
dependency. Its synchronous initial load makes existing rules available to the
first Agent context request.

Each rule has its own machine-local storage key, avoiding whole-list overwrites
when different windows add unrelated rules. Storage events refresh other windows;
listeners follow the native service's disposal lifetime. Edits retain record
identity and metadata. Malformed saved records remain intact and report an error.
Existing legacy personal instructions migrate once, without deleting their
source; deleting the migrated rule does not make it reappear at startup.

User rules have profile scope. Generated memory entries retain their generated
flag and have workspace scope in OpenVision, so project notes do not silently
become global user instructions. This is OpenVision's explicit local storage
design; it does not claim to reproduce an unavailable server's Git-origin rules.
Existing hosted rules are not downloaded or migrated by this change.

The recovered subagent settings component also had a local-mode early return
that unconditionally replaced model parameters with an empty array. OpenVision
removes that discard in both workbench variants. Explicit parameters and saved
preferences now reach the existing model-capability validator and serializer.
Inherit/disabled selections remain parameterless; unsupported reasoning values
are still rejected by the validator. This does not prove that an upstream
provider accepts every advertised value.

## How to use it

After rebuilding and reloading OpenVision, run **Open Customize** from the
command palette, select **Rules**, then **New** to create a user rule.
The settings page also has an **Open Customize** action when its migration
banner is displayed.
User rules apply to local Agent contexts and persist in the OpenVision profile.
The storage remains in the application's normal local database; it does not
create or modify global rule files in another application's directory.

## Evidence and verification

REA analyzed the recovered `raw-bundles/4/knowledgeBaseService.js` module:

- Parent Evidence: `ev_dcc3e437b53f924450ccbe65b062fe5627b964a9bf0f246d9c78f61cc6b076b8`.
- Summary Evidence: `ev_b87fc6baf080f63a6e43c313c30c262cf46c3dbfe5b08ffd9b40bcbd68075acc`.
- One selected JavaScript source, 9,036 bytes, 1,425 visited AST nodes, zero parse
  failures. The other 4,307 inventoried files were outside this selected scope.
  Semantic coverage remains partial; these facts do not prove runtime execution.

Additional focused reading traced the native New User Rule action, the
`applyLocalModeNonFileRules` consumer and its mapper, and the subagent parameter
discard in both formatted workbench variants. Original source references are
`workbench.desktop.main.js` around lines 690160, 707647, 1464107 and 1474808 in
the preserved readable snapshot. Modified build line numbers differ.

REA also analyzed the recovered Agent directory owner `raw-bundles/0/module-76849.js`:
parent `ev_65cd2234ae9dd809b00c83f9edadfcaf1b8849e33595ffe6ba1a2ad9c79d8236`.
It honors `CURSOR_CONFIG_DIR` and `CURSOR_DATA_DIR`, but focused consumer reading
found other global MCP/skills/plugin paths independently use the original home
directory. Those environment switches alone do not establish full isolation.
No blanket home-directory or sandbox-path rewrite was applied.

Complete exported records remain local in the recovery directory under
`evidence/openvision-local-rules-20261012.bundle.json`. These inputs are derived
recovery representations with their upstream provenance preserved in the earlier
recovery manifests, rather than recovered original TypeScript source.

Regression tests execute the transformed service classes from both actual
workbench bundles, with fixture storage and the native Agent rule mapper.
They cover CRUD/reload, cross-window notification, disposal, legacy migration,
profile/workspace separation, malformed data and failed writes. Subagent tests
execute the recovered selection callback and verify that explicit/saved values
reach its validation boundary. These controlled tests use no live provider.

`npm run verify:local-rules` launches an owned test instance with a separate
profile and project under `logs`, exercises the native Customize UI, closes and
restarts that instance, and removes its test rule. It leaves the verification
profile and report available for inspection and does not use the working
profile's model keys. Existing global customization directories can still be
discovered by the recovered app; this fixture does not establish full isolation.

Verified on Windows with Node 24.18.0: native UI create/edit, persistence across
an actual process restart, and deletion through the confirmation dialog passed.
The report is `logs/local-rules-verification.json`; it recorded zero
renderer-observed knowledge-base RPCs. That network observation does not cover
every native process. No live model inference was tested in this pass.
Desktop tests: **52 passed**. Portable tests: **23 passed, one macOS-only skip**.
Syntax checks and the assembled desktop build passed. The final focused tests
also exercise transformation of the preserved original workbench sources.

## Remaining work

Native decompilation counts are unchanged. AI Tab, local indexing/retrieval,
MCP authentication and lifecycle, comprehensive global-profile isolation,
independent packaging and real macOS/Linux launches still require their own
investigation and acceptance tests. See the [feature gap audit](feature-gap-audit.md).
