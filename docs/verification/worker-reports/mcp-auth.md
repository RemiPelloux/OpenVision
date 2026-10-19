# Worker report: OV-304 authenticated MCP and local customization (Linux x64)

Branch `ov/mcp-auth`, 19 October 2026, built on the coordinator branch
`ccr-a39d6f13-jurmdv` (which carries `ov/mcp-safety`, so fresh profiles use the
shared-process MCP route). Story OV-304: authenticated MCP servers and local
customization survive restart. Linux x64 only, in a cloud container: Ubuntu
24.04, kernel 6.18, 4 CPUs, Node 24.18.0, Xvfb 1920×1080. Every native verifier
ran as the unprivileged `ov` user, one at a time. All OAuth servers and all
inference are controlled loopback fixtures, labelled as such. No live provider,
hosted MCP server, Windows or macOS was used.

## Summary

All six tasks are implemented and natively verified on Linux x64. Seven product
defects were reproduced and fixed at their owners: two in MCP OAuth, two in
customization precedence, one group of missing diagnostics, one stale MCP list
and one main-process watcher leak. A hosted-only cloud watcher was also turned
off. On the final build every verifier mode passed twice in a row, first time:
`verify:mcp-auth` (four runs, two with `--secrets`) and
`verify:customization-lifecycle` with `--precedence`, `--invalid` and `--watchers`.
Two OV-303 regression verifiers were also rerun (see Verification). Three
findings outside OV-304's owners are reported, not fixed (see Open risks).

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Trace the MCP OAuth path; write `docs/recovery/rea-mcp-oauth.md` | **Done.** [rea-mcp-oauth](../../recovery/rea-mcp-oauth.md) covers the utility, workbench, main-process store and legacy extension owners. It names the redirect URI and callback route, every storage key, the refresh trigger and cancel handling |
| 2 | OAuth fixture and `verify:mcp-auth` | **Done; two defects fixed.** Covered: consent then a tool call; denied consent with a clear error and no token, then a working retry; one silent refresh after expiry; a rejected refresh with a re-authentication prompt and no replay; restart reusing the stored token without new consent |
| 3 | `verify:mcp-auth -- --secrets` | **Done.** Token rows are keyring-encrypted (`v11`) through gnome-keyring. No OAuth secret is in profile files, logs, mcp.json, `argv.json` or process argv. The `${env:}` header is never written expanded. The persisted terminal environment is a separate finding |
| 4 | Discovery precedence and restart (`--precedence`) | **Done; two defects fixed.** Same-named skill, subagent and command in project, profile and a local plugin. Customize lists each scope, the Agent uses the project item, and both hold after restart. See [customization evidence](../../recovery/rea-customization-lifecycle.md) |
| 5 | Invalid customization diagnostics (`--invalid`) | **Done; defect fixed.** Covered: malformed JSONC, wrong types, unknown transport, missing command or url, invalid `SKILL.md`, malformed subagents and a bad plugin manifest. Each shows a warning naming the file and reason, siblings load, no page error, and fixing in place recovers without a restart |
| 6 | Watcher disposal (`--watchers`) | **Done; two defects fixed.** Covered: live add, rename and delete of skills, subagents and `mcp.json`; window close; workspace switch; profile switch. No stale reload. Per-role inotify counts return to the baseline apart from two recorded, explained differences |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| A callback with `error=access_denied` was handled as an internal `missing_code` and logged only. The server stayed in needs-auth and the connect flow waited for its two-minute timeout. Reproduced by `mcp-auth-mLCwou` | `desktop/mcp-oauth-customization.mjs` (new; MCP utility `handleOAuthCallback`) | `2428289c` |
| Runtime auth events reached the connection state machine only for a fixed list of "lazy auth" hosts. A refresh rejected with `invalid_grant` therefore left every other server in **Error - Show Output** without **Authenticate**. Reproduced by `mcp-auth-Vu2ngC` | same file (`activateRuntimeAuthEventSinkIfEligible`) | `2428289c` |
| Skill de-duplication keys sliced a hard-coded 9 characters (`/.cursor/`). After the namespace rename, the `.openvision` and `.claude` copies of one skill both survived. Reproduced by `customization-precedence-Zc7HKV` | `desktop/customization-precedence-customization.mjs` (new; agent-exec, agent-host, local-agent-runtime) | `25fca5d1` |
| Same-named skills from project, profile and plugin all reached the Agent. The workbench rule cache kept one per name (the last pushed), so Customize hid the project skill. Profile commands silently replaced project commands. Reproduced by `Zc7HKV`, `qEi2Et` | same file (agent-exec merged skills, both workbench bundles) | `25fca5d1` |
| Invalid MCP configuration was kept in a signal nothing read; one `null` entry dropped every server in its file. Invalid skills, subagents and plugin manifests were skipped with debug logging only. Reproduced by `customization-invalid-9tkEWN` | `desktop/customization-diagnostics-customization.mjs` (new; both workbench bundles and agent-exec) | `2ff672b6`, `81c51c93` |
| After a configuration-file change the Customize MCP list never refreshed: a removed server stayed listed as connected although the utility had stopped it. Reproduced by `customization-watchers-JSHBzL`, `oPpChR` | same file (MCP service `onDidFilesChange`) | `81c51c93` |
| On window close the main process disposed the window's watcher session, but its in-process Node.js watcher never stopped its `fs.watch` handles. The closed project's folders stayed watched until exit. Reproduced by `vwbhZP`, `q2Muhw`, `GCXnVT` and a trace overlay probe | `desktop/watcher-dispose-customization.mjs` (new; `out/main.js`) | `d54f456f` |
| Related cleanup: every main window set up hosted cloud-agent repository readiness: a watch on `.openvision/environment.json`, a git-status hook and a five-minute poll. Found while tracing the leak; it was not the root cause | `desktop/cloud-features.mjs` | `725454bc` |

Every fix has unit tests that execute the recovered code before and after the
change: `mcp-oauth.test.mjs`, `customization-precedence.test.mjs`,
`customization-diagnostics.test.mjs`, `watcher-dispose.test.mjs` and the extended
`local-workbench.test.mjs`. They run under `npm run test:mcp-auth` (plus
`node --test desktop/local-workbench.test.mjs`).

## Verification

Environment notes:

- Installed with apt: `gnome-keyring libsecret-tools sqlite3` (gnome-keyring
  46.1-2ubuntu0.2). `sqlite3` was only used for manual inspection; the verifier
  uses `node:sqlite`.
- `ov` has a disposable plaintext `login` keyring
  (`~/.local/share/keyrings/login.keyring`, `lock-on-idle=false`). The OAuth
  verifier starts `gnome-keyring-daemon --foreground --components=secrets` in its
  D-Bus session when no Secret Service is running.
- `/root` is not readable by `ov`, so the proxy CA bundle was copied to a
  readable path for the first `npm ci` and AppImage download. Verifiers use
  loopback fixtures only.
- The build needed a writable `/home/user/OpenVision Projects` folder. Each
  rebuild after a customization change removed `source/`, `electron-host/`,
  `build/source-build.json` and `build/namespace-journal.json` first.

Every native command was run as:

```sh
runuser -u ov -- env HOME=/home/ov PATH=… bash -c 'cd <repo> && xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- npm run <script>'
```

Final build (source at `d54f456f`; later commits change verifiers and docs only):
host `0636c96f…`, MCP utility
`1fa646b47964b4b69f4df18027cf144b46c3bcca10c4a6096ee215d33255ba18`, workbench
`8eb135c660873d56b4f9281d9282655fa5452df45234be82e652ee57cae80330`, agent-exec
`c843808eacdc006f659c27446025864d21540406b0c2a9863cfa3d1d29c741ab`, main
`8f48d3e9456918efd32952550c033781e964d62384b3668e41cbc836eeb6f06a`.

### Final runs (all first-time passes, consecutive on that build and verifier)

| Command | Runs |
| --- | --- |
| `verify:mcp-auth` | `mcp-auth-4fjMBW`, `mcp-auth-ideoqE` |
| `verify:mcp-auth -- --secrets` | `mcp-auth-secrets-1cnCpg`, `mcp-auth-secrets-olBQNh` |
| `verify:customization-lifecycle -- --precedence` | `customization-precedence-7Xzhti`, `customization-precedence-z7teKr` |
| `verify:customization-lifecycle -- --invalid` | `customization-invalid-QPkVUY`, `customization-invalid-ivFqmU` |
| `verify:customization-lifecycle -- --watchers` | `customization-watchers-48mlmS`, `customization-watchers-UN2UNt` |

On the earlier OAuth-only build, `verify:mcp-auth` also passed four consecutive
times (`eSLKOA`, `mpxBTy`, `secrets-OqghaX`, `secrets-1hNu0j`).

### Earlier runs, failures and reruns (in order)

| Command | Run | Result |
| --- | --- | --- |
| `verify:mcp-auth` | `mLCwou` | Failed as expected: denied consent not reported (defect reproduced) |
| `verify:mcp-auth` | `FcpRkV`, `Vu2ngC` | Failed: a fixture bookkeeping bug (fixed in the fixture), then the rejected-refresh defect |
| `verify:mcp-auth` | `1aQJF8` | Failed: the verifier expected an exact storage key; keys carry a scope suffix |
| `verify:mcp-auth -- --secrets` | `DeDafF` | Failed: the static token was found in workspace `state.vscdb`. Traced to the terminal environment (Open risks); the scan now separates that copy from any header copy |
| `verify:mcp-auth -- --secrets` | `cYLbOC`, `h0kKZp` | Passed (development) |
| `verify:mcp-auth` | `siU5KR` | Failed a registration-count assertion at restart: the legacy owner registered a client during start-up, with no consent or exchange. The assertion now checks the clause and records registrations |
| `--precedence` | `RExTjO`, `nmdbUa`, `jHURlk`, `6P6Qbx` | Failed: harness selectors (plugin row name, slash menu, command chip); observations recorded the defects |
| `--precedence` | `Zc7HKV`, `qEi2Et` | Failed as expected on the unfixed build (defects reproduced) |
| `--precedence` | `Nz1orC`, `41G49f` | Passed (earlier verifier versions) |
| `--invalid` | `9tkEWN` | Failed as expected: no diagnostic at all |
| `--invalid` | `qUHnIE` | All seven diagnostics shown; failed on a vague plugin reason ("invalid fields"), so the message now quotes the validator |
| `--invalid` | `AoXzk1` | Failed: an open conversation kept its skill list, so the fixed skill was missing from the follow-up. The check now records that and asks in a new chat |
| `--watchers` | `JSHBzL`, `oPpChR` | Failed: stale MCP row after removal (defect) |
| `--watchers` | `vwbhZP`, `q2Muhw`, `GCXnVT` | Failed: a closed window's `.openvision` stayed watched by the main process (defect) |
| `--watchers` | `WlHFvI`, `MWhJFf`, `SNQqxu`, `srYbaj` | Failed: first-run setup in the named profile, then unexplained per-role differences (attributed to the new profile folder and the idle MCP utility) |
| `--watchers` | `Op2aM4`, `Ghelmg` | Passed (earlier verifier versions) |

Probes (not verifiers) are under `logs/probe/` (`watch-*`, `watch2-*`). They used
`--log trace` and a disposable runtime overlay of `out/main.js` that logs watch
sessions. The normal runtime was not modified.

### Regression checks (OV-303)

| Command | Run | Result |
| --- | --- | --- |
| `verify:mcp-config-ownership` | `mcp-config-ownership-cXapq4` | **Passed**, first time, on the final build |
| `verify:agent -- --mcp` | `agent-verification-uB4ZVV` | **Passed**, first time, on the final build |

### Unit and static checks

| Command | Result |
| --- | --- |
| `npm run test:mcp-auth` (OAuth fixture, secrets scan, OAuth, precedence, diagnostics and watcher customizations) | 20/20 pass |
| `npm run test:mcp-lazy` | 56/56 pass |
| `node --test desktop/local-workbench.test.mjs desktop/subagent-paths.test.mjs desktop/generated-artifact-integrity.test.mjs desktop/process-family-linux.test.mjs` | 21/21 pass |
| `npm run docs:check` | 0 failures |
| `npm run status:features` | Runs. It still reports OV-304 as Planned: the ledger is the coordinator's to update |

## Recommendation per story

**OV-304: promote to Verified on Linux x64.** Every clause in the sprint row has
native Linux x64 evidence on the final build: supported auth and OAuth
(including canceled consent, expiry and refresh), secret storage, discovery
precedence, invalid-config diagnostics and watcher disposal. Each mode passed
twice, first time. The scope stays Linux x64; the platform and live items below
are not claimed.

## Moved to platform/live stories

- Windows and macOS secret storage (DPAPI, Keychain) for MCP OAuth rows.
- Windows and macOS URL-handler registration and callback delivery
  (`setAsDefaultProtocolClient`, macOS `open-url`). On Linux the verifier
  delivers the callback with the same `--open-url` arguments; desktop-file
  registration is not exercised.
- Optional live OAuth against a real hosted MCP server.

## Defaults pending owner decision

- Supported auth modes: OAuth 2.1 with PKCE and dynamic client registration,
  pre-registered clients through `auth.CLIENT_ID`/`CLIENT_SECRET`, and static
  headers with `${env:}` expansion. Tokens are per user-data directory, with a
  key prefix for named profiles.
- Denied consent is reported once and needs **Authenticate** again. A rejected
  refresh returns to **Needs authentication** and never reopens the browser or
  retries the failed operation by itself.
- Precedence: list same-named items from every scope with scope labels, and let
  the project item win when the Agent uses one (project, then profile, then
  plugin). Subagents and commands keep one item per name, so the shadowed
  profile item is not listed. The recovered runtime already used one namespace
  for both; listing shadowed items would need new service state.
- An MCP entry with an unknown `type`/`transport` is reported and skipped.
  Before, it was silently treated as HTTP.
- Hosted cloud-agent repository readiness no longer runs in local windows.

## Open risks

- **Persisted terminal environment (not fixed; outside OV-304's owners).** The
  Agent's hidden terminal saves its full launch environment in workspace
  `state.vscdb` (`terminal.integrated.bufferState`). Any secret exported in the
  environment that starts OpenVision is therefore on disk in plain text,
  including a `${env:}` MCP token or a provider key. The MCP path never writes
  the expanded header.
- **Legacy OAuth owner start-up race (not fixed).** The legacy `cursor-mcp`
  extension owner can connect briefly before routing reaches the utility. It
  registered a client in 3 of 9 restarts, and in every `--secrets` run it left
  its start-up attempt's PKCE verifier as plain global state. No consent,
  exchange or token results.
- **Custom subagent body not observed in the child request.** Task selects the
  project subagent, but in no run did the child request contain the subagent's
  body (`subagentBodyInChild` is empty). Whether custom subagent instructions
  reach a local provider belongs to the subagent stories.
- The MCP utility stays alive idle after its last server is removed; idle
  disposal is tracked under OV-1003.
- Expiry is simulated by revoking the access token at the fixture. This is
  equivalent because the runtime never refreshes proactively.
- Extension warnings (subagents, plugin manifests) stay in the notification
  center after a fix; the Agent and Customize recover regardless.
