# Worker report: OV-304 authenticated MCP and local customization (Linux x64)

Branch `ov/mcp-auth`, 19 October 2026, built on the coordinator branch
`ccr-a39d6f13-jurmdv` (which carries `ov/mcp-safety`, so fresh profiles use the
shared-process MCP route). Story OV-304: authenticated MCP servers and local
customization survive restart. Linux x64 only, in a cloud container: Ubuntu
24.04, kernel 6.18, 4 CPUs, Node 24.18.0, Xvfb 1920×1080. Every native verifier
ran as the unprivileged `ov` user, one at a time. All OAuth servers and all
inference are controlled loopback fixtures, labelled as such. No live provider,
hosted MCP server, Windows or macOS was used.

This report is written incrementally; sections marked *in progress* are not
final.

## Summary

The MCP OAuth path (tasks 1–3) is traced, documented, implemented where it was
defective and natively verified: four consecutive first-time passes of
`verify:mcp-auth` on the final OAuth build, two of them with `--secrets`. Two
product defects were reproduced and fixed in the MCP utility: a denied consent
was never reported, and a rejected refresh never returned to **Authenticate**.
Two further findings are recorded but not fixed here (see Open risks).

Customization precedence, invalid-configuration diagnostics and watcher
disposal (tasks 4–6): *in progress*.

## Tasks

| # | Task | State |
| --- | --- | --- |
| 1 | Trace the MCP OAuth path; write `docs/recovery/rea-mcp-oauth.md` | **Done.** [rea-mcp-oauth](../../recovery/rea-mcp-oauth.md) names the utility, workbench, main-process store and legacy extension owners, the redirect URI and callback route, every storage key, the refresh trigger and cancel handling |
| 2 | OAuth fixture and `verify:mcp-auth` | **Done; two defects fixed.** Consent then tool call, denied consent with a clear error and no token then a working retry, one silent refresh after expiry, a rejected refresh with a re-authentication prompt and no replay, and restart reusing the stored token |
| 3 | `verify:mcp-auth -- --secrets` | **Done.** Keyring-encrypted (`v11`) token rows through gnome-keyring; no OAuth secret in profile files, logs, mcp.json, `argv.json` or process argv; the `${env:}` header is never written expanded. The persisted terminal environment is reported separately |
| 4 | Customization discovery precedence and restart (`--precedence`) | *In progress* |
| 5 | Invalid customization diagnostics (`--invalid`) | *In progress* |
| 6 | Watcher disposal (`--watchers`) | *In progress* |

## Defects found and fixed

| Defect | Owner | Commit |
| --- | --- | --- |
| A callback with `error=access_denied` was handled as an internal `missing_code`, logged only; the server stayed in needs-auth and the connect flow waited for its two-minute timeout. Reproduced by `mcp-auth-mLCwou` | `desktop/mcp-oauth-customization.mjs` (new; MCP utility `handleOAuthCallback`) | `2428289c` |
| After a connection succeeded, runtime auth events reached the connection state machine only for a fixed list of "lazy auth" hosts. A refresh rejected with `invalid_grant` therefore left every other server in **Error - Show Output** without **Authenticate**. Reproduced by `mcp-auth-Vu2ngC` | same file (`activateRuntimeAuthEventSinkIfEligible`) | `2428289c` |

Unit tests: `desktop/mcp-oauth.test.mjs` executes the recovered methods before
and after the change (`npm run test:mcp-auth`).

## Verification

Environment notes. Installed with apt: `gnome-keyring libsecret-tools sqlite3`
(gnome-keyring 46.1-2ubuntu0.2). `ov` has a disposable plaintext `login`
keyring (`~/.local/share/keyrings/login.keyring`, `lock-on-idle=false`); the
verifier starts `gnome-keyring-daemon --foreground --components=secrets` inside
`dbus-run-session` when no Secret Service is running. `/root` is not readable by
`ov`, so the proxy CA bundle was copied to a readable path for the first
`npm ci`/AppImage download; verifiers use loopback fixtures only. The build
needed a writable `/home/user/OpenVision Projects` directory.

Every native command was run as:

```sh
runuser -u ov -- env HOME=/home/ov PATH=… bash -c 'cd <repo> && xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- npm run <script>'
```

| Command | Run ID | Result |
| --- | --- | --- |
| `verify:mcp-auth` (before the fixes) | `mcp-auth-mLCwou` | Failed as expected: denied consent not reported within 20 s |
| `verify:mcp-auth` (denial fix only) | `mcp-auth-FcpRkV`, `mcp-auth-Vu2ngC` | Failed: a fixture bookkeeping bug (fixed in the verifier), then the rejected-refresh defect |
| `verify:mcp-auth` (both fixes) | `mcp-auth-1aQJF8` | Failed: the verifier looked for an exact storage key; keys carry a scope suffix (fixed in the verifier) |
| `verify:mcp-auth -- --secrets` | `mcp-auth-secrets-DeDafF` | Failed: the static token was found in workspace `state.vscdb`; traced to the terminal environment (see Open risks); the scan now separates that copy from any header copy |
| `verify:mcp-auth -- --secrets` | `mcp-auth-secrets-cYLbOC`, `mcp-auth-secrets-h0kKZp` | Passed (development runs) |
| `verify:mcp-auth` | `mcp-auth-siU5KR` | Failed a registration-count assertion at restart: the legacy owner registered a client during start-up, with no consent or exchange. The assertion now checks the clause (no consent, exchange or token) and records registrations |
| `verify:mcp-auth` (final) | `mcp-auth-eSLKOA`, `mcp-auth-mpxBTy` | **Passed**, first-time, consecutive |
| `verify:mcp-auth -- --secrets` (final) | `mcp-auth-secrets-OqghaX`, `mcp-auth-secrets-1hNu0j` | **Passed**, first-time, consecutive |

Final OAuth build hashes: MCP utility
`1fa646b47964b4b69f4df18027cf144b46c3bcca10c4a6096ee215d33255ba18`, workbench
`d3b3feb53af5ded9f6b8e0e5074217be46573d4da797c943fd20d1ec9eabb73e`, main
`0d4f9f2e7ed812a3c942a959f3664d3a760cbfc32f6d2b485804874e62fcfe96`.

| Unit command | Result |
| --- | --- |
| `npm run test:mcp-auth` | 10/10 pass |

## Recommendation per story

OV-304: *pending tasks 4–6*.

## Moved to platform/live stories

- Windows and macOS secret storage (DPAPI, Keychain) for MCP OAuth rows.
- Windows and macOS URL-handler registration and callback delivery
  (`setAsDefaultProtocolClient`, macOS `open-url`).
- Optional live OAuth against a real hosted MCP server.

## Defaults pending owner decision

- Supported auth modes: OAuth 2.1 with PKCE and dynamic client registration,
  pre-registered clients through `auth.CLIENT_ID`/`CLIENT_SECRET`, and static
  headers with `${env:}` expansion.
- OAuth credentials are per user-data directory (named profiles get a key
  prefix).
- Denied consent is reported once and requires the user to choose
  **Authenticate** again; a rejected refresh returns to **Needs authentication**
  and never reopens the browser or retries the failed operation by itself.

## Open risks

- **Persisted terminal environment (not fixed here).** The Agent's hidden
  terminal saves its full launch environment in workspace `state.vscdb`
  (`terminal.integrated.bufferState`). Any secret exported in the environment
  that starts OpenVision, including a `${env:}` MCP token or a provider key, is
  therefore on disk in plain text. The MCP path itself never writes the expanded
  header. The owner is terminal persistence, outside OV-304.
- **Legacy owner start-up race (not fixed here).** The legacy `cursor-mcp`
  extension OAuth owner can connect briefly before routing reaches the utility.
  It may register an extra client and keeps that never-used attempt's PKCE
  verifier as plain global state. No consent, exchange or token results.
- Expiry is simulated by revoking the access token at the fixture, which is
  equivalent here because the runtime never refreshes proactively.
