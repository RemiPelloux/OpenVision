# Startup workspace traversal on Linux

19 October 2026. Story **OV-1003**. **Linux x64 only**: a 4-CPU container with
Xvfb and Node 24.18.0, running a clean source build of the 3.21.13 runtime. This
is not the preview.7 package, and nothing here describes Windows or macOS.

The [Explorer report](../recovery/rea-explorer-linux.md) (run `BGF1KT`) recorded
whole-tree walks repeated during startup. It saw 5 `cursorsandbox
--preflight-only` runs and about 30 ripgrep scans on a three-root workspace,
and attributed them to owners from process names. This report adds a dedicated
verifier and a budget, removes the duplicate that could be removed safely,
and names the rest.

## Method

```sh
npm run build:desktop
npm run verify:startup-traversal     # desktop/verify-startup-traversal.mjs
npm run test:idle-memory             # includes desktop/startup-traversal.test.mjs
```

The verifier builds two roots, `alpha` and `beta`. Each root holds:

- 30 folders × 30 `.ts` files;
- `.cursor/rules/style.mdc`, `AGENTS.md`, `.cursorignore` and `tsconfig.json`;
- its own Git repository.

The launched program is `strace -f -y -s 512` (execve, getdents64, clone and
fork), so the tracer is the ancestor of every traced process. Nothing is
attached by PID.

The run is a cold start with a fresh profile. The verifier waits for the
Explorer to show `group-0`, settles for 45 s and quits. Each scanner is then
attributed in three steps:

1. **Purpose, from execve argv.** For example, a `--files` walk whose globs
   name `AGENTS.md` and `.claude/**` is rule discovery.
2. **Starting process.** Threads are walked back through clone to the nearest
   Electron process, named from `app.getAppMetrics()` (`extensionHost-N`).
3. **Extension-host contents.** These come from the renderer log's
   `Placing extension(s)` lines.

Directory listings are `getdents64` calls on fixture directories, counted per
owner. A full walk of both roots is 66 listings.

## Owners (observed)

The before run is `logs/startup-traversal-C8uQIG`, on this branch before the
deduplication change.

| Scanner | Count | Started by | Owner (code) | Why it repeats |
| --- | ---: | --- | --- | --- |
| `cursorsandbox --preflight-only` | 5 | Default host ×2; agent-exec, always-local and retrieval hosts ×1 each | `isSandboxHelperSupported` / `primeSandboxHelperSupport` in the shared extension-host runtime (`out/vs/workbench/api/node/extensionHostProcess.js`), which also exists in the agent-exec, agent-host, MCP and local-agent-runtime bundles | The verdict is cached in module state, one per process. It is re-probed when the working directory differs ("cached verdict … measured from a different directory"). The preflight itself made no fixture directory listings in these traces (correction of 19 October below) |
| `rg --files -g **/.cursorignore … --no-ignore-parent` | 2 | Default host | Workbench file-search provider (ignore-file discovery), one per root | Once per root. It is a different process from the next row |
| `rg --files --iglob **/.gitignore --iglob **/.cursorignore` | 2 | Agent-exec host | Agent ignore mapping (`findFilesWithRipgrep`, source `ignore_scan`), one per root | Once per root |
| `rg --files … --follow` (no include glob) | 2 | Default host | Workbench file index (quick-open cache), one per root | Once per root |
| `rg --files --follow --iglob */**/.openvision/** … AGENTS.md … CLAUDE.md` | **6** | Agent-exec host | `NestedExtensibilityService.discover` (rules, skills, agents, AGENTS/CLAUDE files) | **Three discovering services per root.** The static ripwalk cache already joins identical in-flight walks (20 s TTL). But `discover` deleted its cache entry as soon as its own walk ended, so the next identical discover walked the root again |
| `tsconfig` discovery | 0 | — | Not started in this fixture (no TypeScript editor opened) | — |
| Git | — | Default host | `git` status and config | 314 listings, within budget; not a duplicate walk |

The `BGF1KT` counts (14 rule discoveries, 7 `.cursorignore`, 6 file lists,
3 `tsconfig`) came from a three-root workspace with more extensions active.
They scale with roots and with the services that discover them; the owners
above are the same.

## Change

`coalesceNestedDiscovery` lives in
[`desktop/idle-services-customization.mjs`](../../desktop/idle-services-customization.mjs).
It applies to agent-exec, agent-host and the agent-host daemon.

`discover` now releases its shared walk **2 s** after its walk ends, instead
of at once. The startup burst of discovering services then shares one walk
per root. A discover more than 2 s later walks again, so a new rule, skill or
agent file is found by the next discovery as before. File events keep their
own path-level reloads (`reloadAtPath`, and the `.cursorignore` cache clear).

The timer is `unref`ed. The transform finds the walk and release through the
unique `source: "nested_extensibility"` options object. If the owner is
missing, ambiguous or changed, it fails the build. It is marker-guarded and
idempotent, and keeps first backups under `backups/idle-services/`.

**Correctness (inferred, then checked).**
- Inferred: within the 2 s window, a rule file created after a walk could be
  missed by a second discover in that window. The rules service's file
  watcher adds it through `reloadAtPath`.
- Checked natively: `verify:rules-isolation` and `verify:local-rules` on the
  final build (see the worker report). The unit test shows that a discover
  after the window walks again, and that the unpatched owner walks every time
  (control).

## Budget and results

The budget is declared in [`desktop/startup-traversal.mjs`](../../desktop/startup-traversal.mjs).
The run fails when a limit is exceeded or a measure is missing.

| Measure | Before `C8uQIG` | After `VLB0fF` | After `e2Icye` | Budget |
| --- | ---: | ---: | ---: | ---: |
| Rule-discovery walks | 6 | **2** | **2** | 2 (one per root) |
| `.cursorignore` walks | 4 | 4 | 4 | 4 |
| Sandbox preflights | 5 | 5 | 5 | 5 |
| Workspace file lists | 2 | 2 | 2 | 2 |
| Other ripgrep / sandboxed runs | 0 | 0 | 0 | 0 |
| Fixture directory listings | 1,520 | **1,248** | **1,261** | 1,300 |
| — of which rule discovery | 396 | 132 | 132 | — |
| Time to Explorer (traced, ms) | 15,240 | 15,456 | 16,166 | not budgeted (strace overhead) |

The before run fails this budget. Both after runs passed on the first
attempt. The budget is the result of the change, not a target that was
relaxed.

## Not changed (remaining gaps)

- **Sandbox preflight: 5, target 2 (one per root).** The verdict depends on
  the kernel, the helper binary and the working directory, but it is cached
  in each extension-host process separately. Sharing it needs a cross-process
  cache, for example a verdict file in the profile keyed by helper hash,
  kernel release and directory, with invalidation. That was not done: a wrong
  shared verdict would disable or wrongly enable command sandboxing. Owner: the shared
  extension-host runtime.
- **`.cursorignore`: 4, target 2.** Two owners in two processes, the workbench
  file-search provider and the agent ignore mapping, each walk once per root.
  Merging them needs a shared ignore-file index across processes. Not
  attempted.
- `tsconfig` discovery and quick-open lists run only when those features are
  used. This fixture does not open them.
- The 5 s polling of absent per-root configuration paths is upstream
  behaviour. It is accepted as a bounded residual (≤ 4 probes per root per
  second, budgeted in `verify:explorer`).

Run directories under `logs/` are private (`result.json`, `strace.log`).

[Performance index](README.md) · [Idle memory](idle-memory-linux.md) · [Explorer](../recovery/rea-explorer-linux.md)
