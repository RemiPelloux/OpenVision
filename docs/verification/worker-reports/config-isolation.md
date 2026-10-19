# Worker report: OV-302 config isolation (Linux x64)

19 October 2026. Branch `ov/config-isolation`, from `main` at `b4f52a56`. Linux x64 only.

Runtime input: Cursor 3.21.13, a source build plus one `npm run package:linux` tree. Run
directories are under `logs/`; they are ignored and not committed. Detailed evidence:
[global path isolation, 19 October section](../../recovery/rea-global-path-isolation.md#19-october-2026-mcp-discovery-plugins-gated-roots-migration-and-a-packaged-second-installation-linux-x64-only).

## Summary

All six Linux gaps are closed in source and verified natively, except where a gate or an
offline limit is stated below.

- **Defect fixed:** alpha read `~/.openvision-local/policy.json` from HOME under
  `--__enable-file-policy`. Reproduced on the unfixed build.
- **Fixed in source, not reachable natively:**
  - Editor MCP discovery adapters. They are never instantiated in 3.21.13.
  - The agent-host daemon's `mcp.json`, approvals, XDG branch, policy and wrapped HOME
    paths. The daemon is off by default.
  - Retrieval roots and the `CLAUDE_CONFIG_DIR`/`CODEX_HOME` overrides. Gated.
  - Computer-use data.
  - Skill-store home arguments.
- **`verify:global-paths` extensions:**
  - An access-time HOME read detector.
  - MCP discovery, plugin and policy markers.
  - `--migrate`.
  - `--second-installation <dir>`.
- **Results.** The default, `--migrate` and `--second-installation` modes each passed
  twice, on their first attempt. `verify:rules-isolation` and `verify:local-rules` pass.
- **Unrelated failure.** `verify:mcp-config-ownership` fails on an account gate from
  main's telemetry work (below).

## Tasks

| # | Task | State | Notes |
| --- | --- | --- | --- |
| 1 | Editor MCP discovery and daemon `mcp.json`/XDG | **Done** | Discovery helper (`out/main.js`): profile home, no `APPDATA`/`XDG_CONFIG_HOME`. Daemon: user servers from `User/mcp.json`, approvals in the profile home, XDG branch ignored. Native: HOME and XDG discovery files seeded with discovery enabled; none read, listed or started |
| 2 | Plugin ownership with real content | **Done** | HOME seeded with a local plugin, Claude `installed_plugins.json` and cache, marketplaces, `known_marketplaces.json`, `enabledPlugins`, plugin cache and `github-plugins.json`. Only alpha lists its local plugin, its skill and its agent; beta and gamma (a separate installation, and a separately packaged tree) list none. No HOME plugin file is read. Each profile creates `User/.openvision/plugins/local`. No leak was found: the earlier redirect held. Marketplace clones and cache writes happen only on install, so none ran offline |
| 3 | Gated home roots | **Done (source + unit; native where reachable)** | Retrieval roots and worktree root use the profile home and ignore the other tools' overrides; unit test executes them. Daemon sites use the profile home; unit test. Developer `policy.json` is read from `appSettingsHome`, verified natively with the gate on (alpha reads its profile `policy.json`, never HOME's) |
| 4 | Native additive migration | **Done** | `--migrate`: legacy skill, subagent, plan and command copied (4); profile conflict kept and listed; HOME byte-identical; `home-import.json` written once; second run copies 0 and leaves the profile unchanged. Fix: `~/.openvision/agents` is now imported into `User/agents` |
| 5 | Separately packaged second installation | **Done** | `npm run package:linux -- build/second-installation`; gamma runs that tree's `electron-host/openvision` with its own `data/local` |
| 6 | Small items and reruns | **Done, except an unrelated failure** | zsh 5.9 installed. The real-zsh test reproduces history writing with the recovered template and none with the guard. Not native: no Agent session was run with zsh as the shell. Reruns below; `verify:mcp-config-ownership` fails for a reason outside this branch |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Developer file policy read from HOME (observed natively) | `desktop/profile-home-paths.mjs` (environment services) | `32da9d1c` |
| Discovery helper passes the OS home and `APPDATA`/`XDG_CONFIG_HOME` to adapters (code) | `desktop/profile-home-paths.mjs` (main) | `32da9d1c` |
| Daemon `mcp.json`, approvals, XDG branch, wrapped HOME joins, projects, skills default, sandbox (code; daemon off) | `desktop/profile-home-paths.mjs` | `32da9d1c` |
| Retrieval roots, the `CLAUDE_CONFIG_DIR`/`CODEX_HOME` overrides and the worktree root (code; gated) | `desktop/profile-home-paths.mjs` (new target) | `32da9d1c` |
| Computer-use data and skill-store `userHomeDirectory` in exec, host and runtime (code) | `desktop/profile-home-paths.mjs` | `32da9d1c` |
| Legacy `~/.openvision/agents` not imported | `desktop/migrate-profile-home.mjs` | `32da9d1c` |
| Verifier missed title-cased listings (a HOME plugin would have escaped) | `desktop/verify-global-paths.mjs` | `32da9d1c` |

## Verification

**Environment.**
- Node 24.18.0.
- Host: 4 CPUs.
- Native runs: user `ov`, under `xvfb-run` and `dbus-run-session`, with a clean
  environment (`env -i HOME PATH LANG`, no proxy variables).
- Secret Service: `gnome-keyring-daemon --unlock --components=secrets`, using a
  disposable password in ov's own home.
- Packages installed: `zsh` (5.9-6ubuntu2, existing `/etc/zsh/zshrc` kept), `gnome-keyring`
  (46.1) and `libsecret-tools`.

**Build.** `npm run build:desktop` passed from a clean `source/`, `electron-host/`,
`backups/` and `build/` (keeping `build/inputs`).
- Patch markers make an already-patched `source/` keep its old patch set, so a clean
  rebuild is required after changing a customization.
- The first incremental rebuild did not apply the new patches.

| Command | Run | Result | First time? |
| --- | --- | --- | --- |
| `verify:global-paths` (unfixed build) | `global-paths-O0sUv1`, `global-paths-chhehf` | Fail. HOME `policy.json` was read. The provider step failed: no Secret Service, and proxy variables in the environment. `O0sUv1` also wrote `~/.fontconfig` (host fontconfig fallback; the fixture now creates the XDG directories) | Before evidence |
| `verify:global-paths` | `global-paths-9p2hhi`, `global-paths-iDYzDy` | Pass, pass | Yes, both |
| `verify:global-paths -- --migrate` | `global-paths-migrate-jBdRLc`, `global-paths-migrate-BH0iPt` | Pass, pass | Yes, both |
| `npm run package:linux -- build/second-installation` | — | Pass (1.1 GB) | — |
| `verify:global-paths -- --second-installation build/second-installation` | `global-paths-b4SwwC`, `global-paths-nBepSr` | Pass, pass. The second run used the same package with `electron-host/data` removed | Yes, both |
| `verify:rules-isolation` | `rules-isolation-x6CyGv` | Pass | Yes |
| `verify:local-rules` | `local-rules-verification-U61P38` | Pass | Yes |
| `verify:mcp-config-ownership` | `mcp-config-ownership-BYujHc` | **Fail**: "Timed out waiting for global discovery". The `user-ov-same` client logs `OpenVision: Cursor service calls require a signed-in Cursor account` | Yes, failed |
| `npm run test:namespace` | — | 53/53 | — |
| `node --test desktop/shell-history-customization.test.mjs` | — | 6/6, including real zsh | — |
| `npm run docs:check` | — | Pass: 1,431 local targets, 0 failures | — |
| `npm run status:features` | — | Pass: ledger unchanged at 6/42 Verified (14.29%); not edited here | — |

**Not counted.** One `verify:global-paths` attempt blocked on a gnome-keyring
password-creation prompt, because the unlock password was empty. It was stopped by
stopping user `ov`'s processes. The run that followed (`9p2hhi`) is the first valid run on
the fixed build.

Every passing run recorded:
- HOME reads: only `.bash_profile` and `.bashrc`.
- HOME additions: only the attributed `.bash_history` (none in `--migrate`); no changes or
  removals.
- No server started.
- 12 authorized fixture requests in the full modes.
- All hosts exited 0.

## Recommendation per story

**OV-302: promote to Verified on Linux x64.** Every Linux clause in this task list has native
evidence, or a stated disposition where it cannot be reached natively:
- the discovery adapters are not instantiated;
- the daemon is off by default;
- retrieval is behind a server gate;
- plugin installs need a network or an account.

Remaining Linux items, for the coordinator to judge:
- A native run of the agent-host daemon and of gated retrieval. Both need host or server
  gates.
- Plugin cache writes on a real install.
- A native Agent session using zsh.

## Moved to platform/live stories

- Windows: `USERPROFILE`/`APPDATA` (the discovery helper now drops `APPDATA`; not run),
  argv/policy paths.
- macOS: `~/Library/Application Support` equivalents.
- Plugin marketplace or backend installs, which need the network or an account.

## Defaults pending owner decision

- VS Code named profiles inside one data directory share `User` (OpenVision
  customizations, `User/mcp.json`). This is now stated in the
  [guide](../../guides/project-configuration.md#agent-data-and-runtime-arguments).
- Parent-folder rule inheritance stays off.
- Legacy `.cursor` project inputs are read only through `migrate:project`.
- Terminal Claude/Codex status stays the explicit opt-in that reads HOME.
- The daemon's user MCP file is `User/mcp.json`, shared with the editor's MCP service,
  rather than `User/.openvision/mcp.json`.

## Open risks

- **Unrelated defect, not fixed here.** `verify:mcp-config-ownership` fails on this build.
  - `refuseAnonymousHostedCalls` (`desktop/network-defaults.mjs`, main commits
    `5ea2d86a`/`b8f2c31d`) throws for the MCP client's hosted call when no account is
    signed in. The profile `User/mcp.json` server then never connects.
  - Owners: OV-303 and OV-1005.
  - Inference: this branch does not touch that code. It was not rerun on a pure `main`
    build.
- **Clean rebuild required.** Incremental rebuilds do not reapply changed customization
  passes (marker idempotence). Anyone validating this branch must use a clean build.
- **Host dependency of the read detector.** It depends on `relatime` or `strictatime`. It
  checks a probe before each run and fails closed on `noatime`.
- **Host prerequisites.** Native verification on hosts without a Secret Service needs
  gnome-keyring as above, or provider saves hang.
