# Repository layout

Start with the [documentation index](../README.md) for user guides and the
[progress dashboard](../progress.md) for percentages, remaining points and gates.
The folders below separate maintained implementation, recovered reference code,
release downloads and generated local state.

## Maintained project files

| Location | Responsibility |
| --- | --- |
| [desktop/](../../desktop/README.md) | Desktop preparation, customizations, launch/build tools and native verification |
| [src/](../../src/README.md) | Optional local HTTP control plane, configuration, MCP and REA adapters |
| [test/](../../test/README.md) | Control-plane integration tests, fixtures and helpers; desktop tests live beside their implementation |
| [tooling/](../../tooling/README.md) | Locked development dependencies, shared tooling and benchmarks |
| [scripts/recovery/](../../scripts/recovery/README.md) | Offline recovery capture, extraction, publication and archive verification |
| [assets/](../../assets/) | OpenVision visual identity |
| [config/](../../config/) | Shareable configuration examples; machine-specific configuration stays ignored |
| [examples/playground/](../../examples/README.md) | Small development project for manual workflows |
| [curs_source/](../../curs_source/README.md) | Versioned recovered reference code, native pseudocode and provenance; not an independent application build |
| [downloads/](../../downloads/README.md) | Versioned Windows portable payload parts and integrity metadata |
| [docs/](../README.md) | Guides, planning, engineering, performance, verification, recovery and release documentation |

Root launchers remain at the repository root so the documented installation and
launch commands stay stable. `package.json` owns the supported development
commands. The [contribution guide](../../CONTRIBUTING.md) explains validation and
publication rules.

## Documentation ownership

| Location | Owns |
| --- | --- |
| [guides/](../guides/README.md) | Installation, accounts, customization and day-to-day workflows |
| [planning/](../planning/README.md) | Feature scope, acceptance statuses, priorities, points and delivery gates |
| [planning/rust/](../planning/rust/README.md) | Rewrite decisions, migration contracts and verification plan |
| [engineering/](README.md) | Implementation contracts, resource ownership and developer workflows |
| [performance/](../performance/README.md) | Measured costs, optimization evidence and remaining performance checks |
| [verification/](../verification/README.md) | Executed checks, release claims and their limits |
| [recovery/](../recovery/README.md) | Shipped-artifact investigations, recovery coverage and unknowns |
| [releases/](../releases/README.md) | Version-specific release notes |

The [acceptance ledger](../planning/completion-sprints.md) owns story status;
its [baseline](../planning/feature-acceptance.json) fixes the denominator.
The [roadmap](../planning/roadmap.md) owns ordering and provisional points.
Recovery percentages use their own version and scope; they do not measure
feature implementation or verification. Historical reports retain their dates
and evidence boundaries.

## Generated and private local state

`source/`, `build/` and `electron-host/` are generated or recovered build inputs.
Make durable product changes in `desktop/`, then regenerate the application.
`OpenVision-portable/` is an extracted runnable package.

`data/`, `logs/`, `backups/`, local configuration and installed dependency
directories are ignored machine state. Recovery snapshots and large decoded
outputs remain ignored beneath `curs_source/`; its manifest identifies the
published subset. Do not move or delete local state as part of source cleanup.
