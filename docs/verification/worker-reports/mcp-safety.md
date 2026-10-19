# Worker report: OV-303 MCP safety (Linux x64)

Branch `ov/mcp-safety`, 19 October 2026. Story OV-303: STDIO and HTTP MCP tools
used safely. Linux x64 only, in a cloud container: Ubuntu 24.04.5, kernel 6.18,
4 CPUs, Node 24.18.0, Xvfb 1920×1080. Every native verifier ran as the
unprivileged `ov` user, one at a time. All inference is controlled loopback
fixtures, labelled as such. No live provider, Windows or macOS was used.

## Summary

All six Linux gaps were implemented and natively verified, and three product
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

Each fix has unit tests next to the existing ones: `network-defaults.test.mjs`,
`mcp-project-approval.test.mjs` and `mcp-routing.test.mjs`. The latter two are
in `test:mcp-lazy`. Details and evidence are in the
[ownership matrix follow-up](../../recovery/rea-mcp-ownership-matrix.md#19-october-2026-linux-follow-up).

## Verification

Environment notes. `apt-get install gnome-keyring libsecret-tools` was run (gnome-keyring 46.1-2ubuntu0.2). Each verifier
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
| `npm run docs:check` | @@docs-check@@ |
| `npm run status:features` | @@status-features@@ |

Native runs on the final build (head `@@head@@` before docs), first-time
results in order, one at a time:

| Command | Run (`logs/`) | Result |
| --- | --- | --- |
@@final-table@@

Earlier runs on interim builds of this branch are recorded in the evidence
docs, failures included (`MIg5RP`, `a22JlK`, `af9fef`, `vieE2i`). None is
counted as a pass for the final build.

## Recommendation per story

**OV-303: @@recommendation@@** for the Linux x64 scope of this assignment.
Every Linux-doable clause listed for this branch has a final-build native pass:
Agent HTTP and STDIO with failures, HTTP cleanup with and without pending close,
cleanup, session, ownership and config ownership in all modes.
Promotion still depends on the coordinator's ledger rules for the platform and
live clauses moved out below.

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
