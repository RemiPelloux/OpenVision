# Worker report: OV-303 MCP safety (Linux x64)

Branch `ov/mcp-safety`, 19 October 2026. Story OV-303: STDIO and HTTP MCP tools
used safely. Linux x64 only, in a cloud container: Ubuntu 24.04.5, kernel 6.18,
4 CPUs, Node 24.18.0, Xvfb 1920×1080. Every native verifier ran as the
unprivileged `ov` user, one at a time. All inference is controlled loopback
fixtures, labelled as such. No live provider, Windows or macOS was used.

## Summary

All six Linux gaps were implemented and natively verified, and four product
defects were found and fixed at their owners. One of them meant that a fresh
profile never used the shared MCP utility at all. Since 16 October, every
utility-owned OV-303 fix (attempt cleanup, window and profile release, failed
close) had been bypassed on fresh profiles. All final-build runs are listed
under Verification. One unrelated control-plane unit test fails on this host
and on the untouched `src/` code (see Open risks).

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | `verify:agent` with `--mcp` and `--mcp-stdio`, each with and without `--mcp-failures`, on Linux | **Done.** Denial with Skip, Stop through the shared utility, real output, disconnect during a call, production idle timeout, no replay and restart pass for both transports. Linux needed a Secret Service for provider keys (environment, see Verification). Run IDs are recorded in [rea-mcp-lifecycle](../../recovery/rea-mcp-lifecycle.md#linux-x64-rerun-19-october-2026) and [rea-mcp-recovery](../../recovery/rea-mcp-recovery.md#linux-x64-rerun-19-october-2026) |
| 2 | Port `verify-mcp-http-cleanup.mjs` to Linux and add `npm run verify:mcp-http-cleanup` | **Done.** Directory symlink, namespace-sandbox flag, `/proc` socket ownership at each phase and after exit. Covers two consecutive rejections, pending close then release, the bounded acknowledgement and no replacement before release |
| 3 | Simultaneous project and profile edits with two windows (`--simultaneous`) | **Done.** Approval is revoked and re-requested, no unapproved or duplicate child, no orphans in `/proc`, final children serve the next calls, one-sided edits leave the other owner's child |
| 4 | HTTP same-name and dedupe ownership (`--http`) | **Done.** Identifiers, approval gate, per-server attribution, dedupe of profile servers by URL only, and retirement of only the owning transport on window close, named-profile close and profile switch. The utility never sends HTTP `DELETE`; see Open risks |
| 5 | Same-basename projects (`--same-basename`) | **Done; defect fixed.** Process keys and children were already separate. The application-wide approval key collided |
| 6 | Final reruns with run IDs | **Done**, on the final build (table below) |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| Fresh profiles never latched shared-process MCP routing: the experiment service stayed uninitialized after the hosted bootstrap was disabled, and `mcp_shared_process_transports` defaults to off. Reproduced by `agent-verification-MIg5RP` | `desktop/network-defaults.mjs` | `2883160d` |
| Project MCP approvals collided across folders with the same basename: opening `/b/app` revoked `/a/app` (`mcp-config-ownership-same-basename-a22JlK`), and an identical config in another `app` folder inherited approval | `desktop/mcp-project-approval-customization.mjs` (new, both workbench bundles) | `46a4a394` |
| A legacy client's `connected` status survived the routing reset, so the server never subscribed to the utility (`af9fef`, `vieE2i`, trace probe 1 of 6 launches) | `desktop/mcp-routing-customization.mjs` | `3a5e0597` |
| A legacy (extension-host) connect in flight when routing latched survived the reset's delete, orphaning a STDIO child; cause of the intermittent `--simultaneous` failures (`1ACuUN`; coordinator `EPeEu8`; trace `pNm0qf`) | `desktop/mcp-routing-customization.mjs` | `e68c9258` |
| The anonymous hosted-call guard refused the team-policy read that legacy-route STDIO connections make: `require a signed-in Cursor account` (coordinator report `BYujHc`; reproduced as `CZr5WO` with main's routing restored in an overlay) | `desktop/network-defaults.mjs` | `2bfe8491` |

Each fix has unit tests next to the existing ones: `network-defaults.test.mjs`,
`mcp-project-approval.test.mjs` and `mcp-routing.test.mjs`. The latter two are
in `test:mcp-lazy`. Details and evidence are in the
[ownership matrix follow-up](../../recovery/rea-mcp-ownership-matrix.md#19-october-2026-linux-follow-up).

## Verification

Environment notes. Installed with apt: `gnome-keyring libsecret-tools` (gnome-keyring 46.1-2ubuntu0.2) and `iproute2` (for `verify:data-destinations`). Each verifier
runs under `xvfb-run … dbus-run-session -- session.sh`, where `session.sh`
unlocks a disposable login keyring (`gnome-keyring-daemon --unlock
--components=secrets`, fixed throwaway password, ov's own home). Without it,
Chromium selects `basic_text` with encryption unavailable, and provider
**Save** never completes (runs `JB66lO`, `3CTR1k`; a harness environment issue,
not product). Proxy variables and `NODE_EXTRA_CA_CERTS` were unset for the
verifiers, since all fixtures are loopback. `npm run build:desktop` needs a
writable `../OpenVision Projects` directory.

Unit and static checks on the final tree:

| Command | Result |
| --- | --- |
| `npm run test:mcp-lazy` | 56/56 pass |
| `node --test desktop/network-defaults.test.mjs` | 10/10 pass |
| `npm run check:desktop` | Pass |
| `npm run test:build-integrity` | 26/26 pass |
| `npm run test:mcp` | 49/50. `control-plane-mcp.mjs` "public MCP call route cancels upstream on browser disconnect" fails with `control-plane fixture timed out` every time, as root and as `ov`, with and without proxy variables. `src/` and `test/` are unchanged on this branch |
| `npm run docs:check` | Pass (0 failures) |
| `npm run status:features` | Pass; ledger unchanged (6 Verified, OV-303 Partial; the ledger is the coordinator's to update) |
| `npm run verify:telemetry` (after `2bfe8491`) | Pass, `telemetry-verification-2bMD8u`: `http_urls` and `telemetry_matches` empty |
| `npm run verify:data-destinations` (after `2bfe8491`) | **Not completed.** `data-destinations-QvKv4B` failed inside its own Agent step under strace ("Taking longer than expected"). It was then stopped at the 30-minute background limit. The first attempt, `YjhYW5`, failed because `ip` was missing. Its 0-non-provider-request claim is not re-established by this branch |

Native runs on build 5 (head `3a5e0597`, all three MCP fixes), first-time
results in order, one at a time:

| Command | Run (`logs/`) | Result |
| --- | --- | --- |
| `verify:mcp-cleanup` / `-- --persistent` | `mcp-cleanup-verification-upj00Z` / `-dEOdpJ` | Pass / pass |
| `verify:mcp-session` / `-- --direct` | `mcp-session-verification-yC0ipd` / `-mdZQwE` | Pass / pass |
| `verify:mcp-ownership` | `mcp-ownership-verification-I8pJwN` | Pass |
| `verify:mcp-http-cleanup` ×2 | `mcp-http-cleanup-verification-eZOzw8`, `-b1kVPw` | Pass, pass |
| `verify:mcp-http-cleanup -- --pending` ×2 | `-Nrh5MN`, `-yG2vCB` | Pass, pass (acknowledgement at 5,000 ms) |
| `verify:mcp-config-ownership` | `mcp-config-ownership-AUw5EJ`; after the harness change `-tyQU3g` | Pass, pass |
| `… -- --failed-close` | `…-failed-close-geq2MB`; after the harness change `-8O6yhn` | Pass, pass |
| `… -- --simultaneous` ×3 | `…-simultaneous-1ACuUN`, `-6P0KLQ`, `-X9DGJw` | **Fail**, pass, pass. The 1ACuUN failure came after a project-only edit, during the profile-call probe; its assertion text was lost because the run hung in cleanup. Cause unexplained; harness fixed in `e4f19d59` to keep the next one diagnosable |
| `… -- --http` ×2 | `…-http-ena9EB`, `-79tdKk` | Pass, pass |
| `… -- --same-basename` ×2 | `…-same-basename-UuZTb7`, `-raQ1Bj` | Pass, pass |
| `verify:agent -- --mcp` | `agent-verification-MPSAKJ` | Pass (Stop 268 ms) |
| `verify:agent -- --mcp-stdio` | `agent-verification-NexIMM` | Pass (Stop 293 ms, child PIDs absent) |
| `verify:agent -- --mcp --mcp-failures` | `agent-verification-aAapbu` | Pass (disconnect 7,632 ms, timeout 127,699 ms, each executed once) |
| `verify:agent -- --mcp-stdio --mcp-failures` | `agent-verification-VavYuB` | Pass (disconnect 7,751 ms, timeout 127,933 ms, each executed once) |

Build 6 (adds `2bfe8491`; head `4a2c5f0e`), first-time results:

| Command | Run (`logs/`) | Result |
| --- | --- | --- |
| `verify:mcp-cleanup -- --persistent` | `mcp-cleanup-verification-iiuqvi` | Pass |
| `verify:mcp-http-cleanup -- --pending` | `mcp-http-cleanup-verification-XqPbKH` | Pass |
| `verify:mcp-config-ownership` (default, `--simultaneous`, `--http`, `--same-basename`) | `mcp-config-ownership-Soyhuh`, `-simultaneous-XjCzHm`, `-http-l3eO6u`, `-same-basename-pXZUtK` | All pass |
| `verify:agent -- --mcp --mcp-failures` / `--mcp-stdio --mcp-failures` | `agent-verification-nq39Vn` / `-0aeXVE` | Pass / pass |

Earlier runs on interim builds of this branch are recorded in the evidence
docs, failures included (`MIg5RP`, `a22JlK`, `af9fef`, `vieE2i`). None is
counted as a pass for the final build.

## Recommendation per story

**OV-303: promote to Verified on Linux x64** for the Linux x64 scope of this assignment.
Every Linux-doable clause listed for this branch has a final-build native pass:
Agent HTTP and STDIO with failures, HTTP cleanup with and without pending close,
cleanup, session, ownership and config ownership in all modes.
One caveat: one of three simultaneous-edit runs failed with an unexplained
cause (see Verification). Promotion still depends on the coordinator's ledger
rules for that flake and for the platform and live clauses moved out below.

## Moved to platform/live stories

- Windows reruns of every verifier above with the three fixes, including the
  pre-existing Windows `verify:agent` MCP records.
- A `/proc`-free Windows port of `verify:mcp-config-ownership` (all modes).
- The utility worker `0xC0000005` exit seen after pending close on Windows
  (OV-403).
- macOS runs.
- OAuth MCP (OV-304), remote hosts (OV-703), long-session growth (OV-1003).

## Defaults pending owner decision

1. **Shared-process MCP transports on by default**
   (`mcp_shared_process_transports: true` in local gate defaults), and the
   experiment service reports initialized with local defaults when the hosted
   refresh is refused. This restores the behaviour all OV-303 evidence assumed.
   To revert, remove the gate from `localGateDefaults`.
2. **Existing project approvals are asked again once.** Approvals stored before
   this change are unscoped, and no record says which folder granted them, so
   they are not migrated. The conservative choice is re-approval. Identifier-only
   legacy approvals keep their existing upstream migration.
3. **Approval scope is the workspace folder URI.** Keys are stored in
   application storage, which already holds recent workspace paths.

## Open risks

- Simultaneous-edit flake: 1 of 4 final-build `--simultaneous` runs
  (`1ACuUN`) failed; cause unknown, recorded and not counted as a pass.
- `verify:data-destinations` could not be re-established in this container
  after the `network-defaults.mjs` changes. The changes send no request, but
  that is not proven natively here.
- `desktop/network-defaults.mjs` is also the OV-1005 telemetry owner, so
  `2883160d` and `2bfe8491` may overlap a telemetry branch on merge.

- `test:mcp` control-plane failure above: unrelated to this branch, recorded,
  not fixed.
- Streamable HTTP sessions are never terminated with `DELETE`: the recovered
  utility does not call `terminateSession`. Retirement closes the client only.
  A server that keeps per-session state keeps it until its own expiry.
- A second window's short-lived legacy route sends one stray `initialize` to
  HTTP servers before its routing latches. It is observed and harmless here,
  but it reaches a server the user configured.
- The experiment-initialization change affects every consumer that waits on
  `isInitialized()`, not only MCP. They now see bundled or local gate defaults
  immediately, where before they waited or timed out. That is the same values
  they used after a timeout. No other feature was re-verified for it on this
  branch.

## Follow-up: intermittent `--simultaneous` (19 October 2026, coordinator base)

The coordinator's combined rerun on `ccr-a39d6f13-jurmdv` failed `--simultaneous`
once (`EPeEu8`), which made 2 failures in 7 runs together with `1ACuUN`. The branch
was reset onto that base. The verifier now records child revisions when the
final-child wait times out (`21d8f86a`). A trace-logged loop passed 7 runs and
failed the 8th (`pNm0qf`), which showed the root cause. It was a product race,
not a harness wait: a legacy connect still in flight when routing latched was
never deleted (defect above, fixed in `e68c9258`). The fix is unit-tested against
the recovered reset method for both bundles (`mcp-routing.test.mjs`).

After the fix, the acceptance runs passed first time, in order:

| Mode | Runs (`logs/mcp-config-ownership-…`) |
| --- | --- |
| `--simultaneous` ×5, consecutive | `simultaneous-pAmDg8`, `-KOWitL`, `-lpb0tm`, `-92df1T`, `-EWYscL` |
| default, `--failed-close`, `--http`, `--same-basename` | `wtmVXP`, `failed-close-WoPFav`, `http-AfqFq3`, `same-basename-jxqt7r` |

Each of the five `--simultaneous` runs logs the extension handling
`DeleteClient` for both windows' legacy clients. The failing trace had none.
Updated recommendation: **promote OV-303 to Verified on Linux x64**. The earlier
caveat about the unexplained simultaneous failure is resolved by this root cause.


## Status at stop (19 October 2026)

Stopped on the owner's request while investigating the coordinator's report that
`--simultaneous` fails deterministically on the integrated branch
`ccr-a39d6f13-jurmdv` at `523ff1d6`. The failure is "Re-approved child runs
the final project configuration 5 !== 8", 5 of 5 runs (`qAAPrr`, `gXdN6B`,
`ix689u`, `zWzc6x`, `nq9ayd`, coordinator logs).

**Done.** All six Linux tasks for OV-303 and five product fixes: experiments
initialize locally (`2883160d`), project approvals are scoped to the workspace
folder (`46a4a394`), stale connected status is recreated after a routing reset
(`3a5e0597`), the anonymous team-settings read returns the empty answer
(`2bfe8491`), and an in-flight legacy client is released after the reset
(`e68c9258`). On base `5a7e579f` plus these fixes, 5 consecutive first-time
`--simultaneous` passes plus all other modes passed (see the follow-up above).

**Partly done: the integrated-branch regression.** On `523ff1d6` with an
incremental rebuild here, `--simultaneous` passed twice first time: under
trace (`simultaneous-JjaE4p`) and with the official verifier
(`simultaneous-N6IXBT`). So the coordinator's 5/5 failure did not reproduce in
this container. A clean rebuild, matching the coordinator's, was started to
test that difference and was stopped by this request before it finished. No
run on it exists. The local `source/` and `electron-host/` are therefore
partial and must be rebuilt before any further native run.

Current hypothesis: the failure depends on the clean build. Either a
customization applies differently, or one merged after `5a7e579f`
(import-restore, agent-context, language-tools, idle-resources,
autocomplete-safety, autocomplete-quality) changes how project
`.openvision/mcp.json` change events reach the window. In the failure, the
re-approved project server uses the configuration of revision 5 of 8, so the
window missed the last project file events or re-read a stale parse.

Ruled out so far:
- My own fixes on their own: 5/5 passes on `5a7e579f`, with the same verifier.
- Incremental builds of `523ff1d6`: 2/2 passes.
- From diff reading, idle-services (process sampling, nested-discovery
  coalescing) and the import extension-folder watcher do not touch MCP config
  parsing or watching. Not proven natively.

Not started: bisecting the six merges on clean builds.

Last verified runs on `523ff1d6`: `mcp-config-ownership-simultaneous-JjaE4p`
(trace copy) and `-N6IXBT`. Uncommitted findings: none; everything is in this
report.

ETA for the remainder, as tasks:
1. Clean rebuild of `523ff1d6` and reproduction of the 5 !== 8 failure: one
   quota round (about 15 minutes of build plus 2–3 native runs).
2. If it reproduces, bisect the six merges with clean builds (about 3 builds),
   then fix at the owner: one to two worker sessions.
3. Acceptance: 5 consecutive `--simultaneous` plus one run of each other mode,
   about 1 hour of serialized native runs: one quota round.

In total, one to two worker sessions. If the failure does not reproduce on a
clean build here, it may be specific to the coordinator's host. That needs
their run directories (the `observations.finalProfileChildTimeout` records
and the project file watcher logs) to decide.

## Resume after stop: integrated-branch regression (19 October 2026)

Base: `origin/ccr-a39d6f13-jurmdv` at `2b61fcbc`, clean rebuild with Node
24.18.0. The coordinator's deterministic "5 !== 8" did not reproduce here, even
on the clean build (`simultaneous-zYxik0` passed). Code reading found the cause
anyway: overlapping reloads of one MCP config file finished out of order, and
the last to finish replaced the window's server list (a stale revision could
win). A unit test reproduces it against the recovered method shape. Fixed at
the owner by queuing reloads per file (`1be9473e`,
`desktop/mcp-config-reload-customization.mjs`).

The first acceptance pass then failed the default mode once (`ZXltUn`): two
profile children at startup with no `DeleteClient`. The reset-time hook from
`e68c9258` had missed the race. Fixed in `d24abbe4`: the legacy connect's own
completion deletes a client whose route was replaced. Newer legacy replacements
and process clients are left alone. Unit tests cover all five cases.

Acceptance on the final build, all first-time passes: `--simultaneous` ×5
consecutive (`n10ncg`, `V2CSfX`, `B4Pzue`, `hYnfnE`, `vZ2R8T`), default
`DbaFcn`, `--failed-close` `lTAgrt`, `--http` `Ysf9Uw`, `--same-basename`
`eXwZFV`, and `verify:agent -- --mcp-stdio --mcp-failures` `Bic7oL`. Unit
tests: `test:mcp-lazy` 63/63.

Recommendation: **promote OV-303 to Verified on Linux x64.** One caveat: the
coordinator-host "5 !== 8" failure was not reproduced here, so its fix is
evidenced by code reading, a unit reproduction and passing native runs. A
confirming run on the coordinator host would close that.

