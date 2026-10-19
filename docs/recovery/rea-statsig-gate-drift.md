# Statsig client-gate drift (OV-1005)

Dated **19 October 2026**. Scope: **Linux x64**, OpenVision source build of
Cursor 3.21.13, local profile only. Story OV-1005 (follow-up to the "Open (gate
drift)" item in [rea-telemetry-linux](rea-telemetry-linux.md)).

Since the hosted experiment refresh (`AnalyticsService/BootstrapStatsig`) is
inert, a fresh local profile evaluates every client gate at its bundled default.
The anonymous bootstrap that Cursor's server used to return switched some gates
away from those defaults. This page records which ones, how they are classified
and what a profile that cached an old bootstrap does.

## Inputs (committed fixture)

`desktop/fixtures/statsig-gates-3.21.13.json`, produced by
`node desktop/statsig-gate-fixture.mjs <response.json> <captured-at>`:

- **Bundled defaults:** the generated client-gate table of the stock 3.21.13
  `workbench.desktop.main.js` (`clientGateTable` in `desktop/statsig-gates.mjs`;
  it reads quoted and multi-line entries, which the earlier count missed).
- **Anonymous bootstrap:** one `aiserver.v1.AnalyticsService/BootstrapStatsig`
  answer captured on 18 October 2026 at 21:33 UTC from this container, with no
  account, `operatingSystem: CLIENT_OS_LINUX` and client-version headers 3.21.13
  (the server evaluated it for app version 3.21.13). Gate names in it are
  djb2-hashed; `djb2` in `desktop/statsig-gates.mjs` matches the bundle's
  `Hashing.js`. Only gate names, hashes and boolean values are kept. The user
  object, IP address, rule identifiers and exposures are not committed.
- **Observed vs inferred:** the bootstrap is a single sample. The server can
  change it at any time, and an answer for another OS, version or account may
  differ. The classification is by gate name. Consumers were traced only for
  the proposed local defaults below.

## Counts

| | Gates |
| --- | --- |
| Declared client gates (stock 3.21.13 workbench) | 763 |
| Present in the anonymous bootstrap | 676 |
| Bootstrap value differs from the bundled default | **209** (195 switched on, 14 switched off) |
| Classified hosted-only | 148 (137 on, 11 off) |
| Classified local feature | 53 (51 on, 2 off) |
| Classified telemetry | 8 (7 on, 1 off) |

The 18 October report counted 752 / 665 / 206; that parser skipped entries with
quoted names or split over several lines.

`desktop/statsig-gates.test.mjs` (in `npm run test:telemetry`) pins every
classification, the counts, the djb2 hashes, and that no proposed default is
switched on.

## Classification

- **Telemetry (8):** `sand_anonymized_egress_telemetry`, `sand_audit_logs`,
  `local_request_tracing`, `issue_traces_enabled` (off),
  `analytics_batch_coalesce_watermark`, `mcp_structured_logging`,
  `codebase_telemetry_v1_deprecation`, `sand_codebase_telemetry`. None is
  switched on locally; collection and upload stay disabled at their owners.
- **Hosted-only (148):** cloud and background agents, Glass projects and
  environments, `sand_*` and `grok_bot_*` (hosted bot and mobile surfaces),
  Origin, Bugbot, team/admin, billing, referrals, Marketplace publishing, the
  Windows updater, voice and hosted model routing. The full list is in the
  fixture. None is switched on locally.
- **Local features (53):** behaviors that run in a local profile, for example
  `agent_goal_continuation`, `custom_agents_enabled`, `instant_grep_indexing`,
  `customize_page`, `customize_global_search`, `meta_mcp_tool`,
  `mcp_tool_allowlist_modes`, `explicit_subagent_models`,
  `tokenize_stream_code_blocks`, the Glass window UI gates, and the two applied
  below. The full list is in the fixture.

## Applied and proposed local defaults

**Applied** (`localGateDefaults` in `desktop/network-defaults.mjs`, kept at the
value the anonymous bootstrap gave them):

- `customize_manage_scope_multiselect` (18 October, project scopes in Customize).
- `mcp_shared_process_transports` (OV-303 branch `ov/mcp-safety`, merged here for
  native runs).

**Proposed, not applied (owner decision).** These are genuine local features
that the bootstrap switched on:

| Gate | Default → bootstrap | Consumer (stock 3.21.13 workbench) | Note |
| --- | --- | --- | --- |
| `instant_grep_indexing` | off → on | `PushRequestContextService` and Find in Files (with `instant_grep_user_search` and the repository's `indexingGrepEnabled`); also read by cursor-retrieval, cursor-always-local and cursor-agent-host | Interacts with indexing, which local mode disables. Needs its own data-destination capture before it is switched on |
| `custom_agents_enabled` | off → on | Glass mode constants and the new-composer action label | UI only on the paths read |
| `customize_global_search` | off → on | Customize page search | UI only on the paths read |

## Cached bootstrap: measured, then fixed

The experiment service applies the bootstrap a profile cached under
`workbench.experiments.statsigBootstrap` (application storage) at every start,
synchronously in its constructor, before and independent of the server refresh.
There is no expiry or version check. Only the "Clear Statsig Cache" command
removes it.

`npm run verify:statsig-cache` (`desktop/verify-statsig-cache.mjs`, in a
loopback-only network namespace) runs two launches of the same profile. Each
uses "Developer: Dump Feature Gates":

1. a fresh profile;
2. the same profile after writing a bootstrap built from the fixture's values
   into `User/globalStorage/state.vscdb`, as an older build would have left it.

| Run | Build | Drifted gates evaluated at the bootstrap value (fresh / cached) | Differences | Result |
| --- | --- | --- | --- | --- |
| `logs/statsig-cache-qoYduc` | before the fix | 1 / 209 | **208** | Cached bootstrap applied: an existing profile kept the server's values for every drifted gate |
| `logs/statsig-cache-DSSkBi` | with the fix | 2 / 2 | **0** | Existing and fresh profiles evaluate the same gates |

(The fresh launch's 1 or 2 matches are the applied local defaults.)

**Fix:** `ignoreCachedStatsigBootstrap` (`desktop/network-defaults.mjs`, its own
section, both workbench bundles). `_initFromCachedBootstrap` reports a cache
miss. The stored value is not deleted, so the change is reversible. It relies
on the local experiment initialization from `ov/mcp-safety`. Without it, a
service that reads no bootstrap never reports itself initialized. Fresh
profiles already had that state before this change.
