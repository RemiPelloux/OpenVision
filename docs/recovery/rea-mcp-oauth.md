# MCP OAuth: owners, storage and verified flows

19 October 2026. OV-304. **Linux x64 only** (cloud container, Ubuntu 24.04,
Xvfb, gnome-keyring 46.1 Secret Service, Node 24.18.0), source build of the
3.21.13 runtime on the coordinator base that already carries the
[shared-process MCP route](rea-mcp-ownership-matrix.md). All OAuth traffic is a
loopback fixture and all inference is a controlled loopback provider; no hosted
MCP server, account or live model was used. Windows and macOS were not run.

## Supported flows (owner decision pending)

| Mode | Configuration | Credentials |
| --- | --- | --- |
| OAuth 2.1 authorization code with PKCE (S256), dynamic client registration (RFC 7591), refresh tokens | `url` only; the server answers 401 with `WWW-Authenticate: Bearer resource_metadata=…` (RFC 9728) | Encrypted in application storage through the Secret Service, per user-data directory |
| OAuth with a pre-registered client | `url` plus `auth: { CLIENT_ID, CLIENT_SECRET?, scopes? }` | The secret is stored encrypted as client information; it also remains in mcp.json, which the user wrote |
| Static header | `headers: { Authorization: "Bearer ${env:NAME}" }` | Resolved in memory by the configuration resolver; never written back |

These are the conservative defaults chosen for OV-304 and are listed in the
[worker report](../verification/worker-reports/mcp-auth.md) as pending an owner
decision. Tokens are per user-data directory; named profiles in one directory
use a `[profile:<hash>]` key prefix.

## Owners

Observed in the recovered bundles (minified identifiers, 3.21.13):

- **MCP utility process** (`mcpProcessMain.js`) owns OAuth whenever the
  shared-process route is latched, which is now the case for fresh local
  profiles. Provider factory `LT()`, wrapped by `Fv()`; it uses the bundled
  `@modelcontextprotocol/sdk` 1.25.1 `client/auth.js` with Cursor patches.
  `redirectToAuthorization` only publishes the URL as server status
  `needsAuth`; it never opens a browser.
- **Workbench** connect flow (`Qno`/`hBf`, "mcpConnectFlow.js") runs when the
  user chooses **Authenticate** (Customize → MCPs row, `[data-mcp-connect]`) or
  **Connect** (composer tray). It clears the server's OAuth state, reloads it,
  and on `needsAuth` opens the authorization URL with
  `openerService.open(url, { openExternal: true })`, which reaches Electron
  `shell.openExternal` in the main process. Startup never opens it.
- **Callback**: redirect URI `openvision-local://anysphere.cursor-mcp/oauth/callback`
  (`product.urlProtocol` is `openvision-local`). A second instance started with
  `--open-url -- <url>` forwards it to the running instance
  (`LaunchMainService.parseOpenUrl`). The workbench handler registered by
  `updateOAuthCallbackForwarding(true)` matches authority
  `anysphere.cursor-mcp` and path `/oauth/callback`, which is a trusted
  protocol handler, so there is no "open URI" dialog. It forwards the query and
  the owning workspace to the utility's `handleOAuthCallback`, which validates
  `state` (base64url JSON with the attempt id), exchanges the code, saves
  tokens and reloads the server. Callbacks for another window's workspace are
  routed to that window.
- **Main process** `McpOAuthStoreMainService` (IPC channel `mcpOAuthStore`)
  stores values in application storage, `<user-data>/User/globalStorage/state.vscdb`:
  - `mcpOAuth.secret.<base64url(logical key)>`: encrypted with
    `encryptionMainService` (Electron `safeStorage`). With the Secret Service the
    ciphertext starts with `v11`.
  - `mcpOAuth.global.<base64url(logical key)>`: non-secret JSON.
  - `cursorDiskKV` `mcp_oauth_refresh_lock::<id>`: the cross-process refresh lease.
  - Attempt records `<globalStorage>/mcp-oauth-attempts/<attemptId>.json` without
    secrets; one-hour time-to-live.

  Secret logical keys: `[<id>] mcp_tokens`, `[<id>] mcp_client_information`,
  `[<id>] mcp_code_verifier`, and per attempt `[oauth-attempt:<attempt>] mcp_code_verifier`
  and `… mcp_oauth_attempt_client_secret`. `<id>` is the server identifier,
  for example `user-ov-oauth`.
- **Legacy extension owner** (`cursor-mcp` class `Uw`, `context.secrets`) only
  runs when the shared-process route is off (remote windows, or a failed
  migration latch). It keeps the PKCE verifier in plain extension `globalState`
  and attempt files. OV-304 did not exercise it; see Limitations.

## Refresh, failure and cancellation

- There is no proactive refresh: `expires_in` is only logged. A 401 on any MCP
  request runs SDK `auth()`: refresh under the disk lease, save the tokens, then
  resend the same rejected message once. A second 401 is an error.
- `invalid_grant` deletes `[<id>] mcp_tokens` and starts a new authorization;
  the in-flight operation fails with `Unauthorized`. `invalid_client` clears all
  credentials. Network errors keep tokens.
- **Defect (fixed):** a rejected refresh on an already connected server never
  returned to `needsAuth`. The utility routes runtime auth events only for a
  fixed list of "lazy auth" hosts, so for other servers the failed call marked the
  credentials expired and the row showed **Error - Show Output** without
  **Authenticate**. The [OAuth customization](../../desktop/mcp-oauth-customization.mjs)
  accepts runtime auth events for HTTP transports, so the server shows
  **Needs authentication** with a fresh attempt. Superseded attempts are still
  ignored and nothing reopens the browser or retries the call.
- **Defect (fixed):** a callback carrying `error=access_denied` (RFC 6749
  §4.1.2.1) was handled as an internal `missing_code`, logged only, and the
  connect flow waited for its two-minute timeout while the server stayed in
  `needsAuth`. The same customization now reports
  `Could not connect to MCP server "<name>": Authorization was denied (<code>: <description>). No credentials were saved; choose Authenticate to try again.`
  through the existing connect-flow notification, discards the attempt and
  reloads so **Authenticate** starts a fresh attempt. Server-supplied text is
  reduced to bounded printable ASCII.
- Cancel from the progress chip calls `mcp.cancelOAuthAuthorization`; the
  connect flow also ends after 30 s without a server response and two minutes
  without a callback. Those timeouts were not changed or exercised here.

## Native verification

```sh
npm run build:desktop
xvfb-run -a dbus-run-session -- npm run verify:mcp-auth
xvfb-run -a dbus-run-session -- npm run verify:mcp-auth -- --secrets
```

The [verifier](../../desktop/verify-mcp-auth.mjs) uses one disposable profile
and project under `logs/`, the [OAuth fixture](../../desktop/verify-mcp-oauth-fixture.mjs)
and the controlled provider from the configuration-ownership verifier. It
replaces `shell.openExternal` in the main process to capture the authorization
URL, fetches it without a browser, and delivers the redirect through a real
second `--open-url` instance. It needs a Secret Service with a default
collection; it starts `gnome-keyring-daemon --foreground --components=secrets`
in the D-Bus session when none is running, and never creates or unlocks a
keyring. The secret checks are in
[verify-mcp-auth-secrets.mjs](../../desktop/verify-mcp-auth-secrets.mjs).

Results are in [Native results](#native-results).

## Native results

Reproduced before the fixes: run `mLCwou` (denied consent: no notification
within 20 s, the server kept waiting) and run `Vu2ngC` (after a rejected
refresh the row showed **Error - Show Output** with no **Authenticate**, and
the tool result was `{"error":"Unauthorized"}`).

Final build: MCP utility
`1fa646b47964b4b69f4df18027cf144b46c3bcca10c4a6096ee215d33255ba18`, workbench
`d3b3feb53af5ded9f6b8e0e5074217be46573d4da797c943fd20d1ec9eabb73e`. Four
consecutive first-time passes: `mcp-auth-eSLKOA`, `mcp-auth-mpxBTy`,
`mcp-auth-secrets-OqghaX` and `mcp-auth-secrets-1hNu0j`.

The later customization fixes changed the workbench and main process but not
the MCP utility. On that final build (workbench
`8eb135c660873d56b4f9281d9282655fa5452df45234be82e652ee57cae80330`, main
`8f48d3e9456918efd32952550c033781e964d62384b3668e41cbc836eeb6f06a`, same utility)
the same verifier passed four more times: `mcp-auth-4fjMBW`, `mcp-auth-ideoqE`,
`mcp-auth-secrets-1cnCpg` and `mcp-auth-secrets-olBQNh`.

| Clause | Observation |
| --- | --- |
| Discovery | The unauthenticated server answers 401; the row shows **Needs authentication** and **Authenticate**. Nothing opens a page at startup |
| PKCE and registration | The authorization URL carries `code_challenge_method=S256` and the `openvision-local` redirect. Registration asks for `token_endpoint_auth_method: none`, `client_name: "Cursor"` and four redirect URIs; the code exchange passes the fixture's S256 check |
| Denied consent | `Could not connect to MCP server "ov-oauth": Authorization was denied (access_denied: …)` appears 2.8–3.9 s after the redirect is delivered. No token or code exchange happens, and **Authenticate** returns |
| Retry | The next **Authenticate** completes; the row turns connected |
| Tool call | An approved Agent `CallMcpTool` returns the fixture's marker; exactly one authorized `tools/call` |
| Expiry | One 401 on `tools/call`, exactly one refresh request, the rejected request is resent once and the tool executes once. No page opens |
| Refresh rejected | One `invalid_grant` refresh, no retry loop. The tool never executes and is not replayed (unchanged after 3 s). The row returns to **Needs authentication**; nothing opens until the user chooses **Authenticate**, after which the next call succeeds |
| Restart | The stored token is reused: no consent, code exchange or new token. One unauthenticated `initialize` precedes the authorized one |
| Secret Service | Electron `safeStorage` uses `gnome_libsecret`. `mcp_tokens`, `mcp_client_information` and `mcp_code_verifier` are `mcpOAuth.secret.*` rows starting with `v11`; the token row decrypts in the app to the live token (compared by digest) |
| Disk and argv | 271–273 files (30 MB) under the profile and project, the profile `argv.json`, and the argv of 17 host processes contain no access token, refresh token, authorization code or exchanged PKCE verifier, in UTF-8, UTF-16 or base64 |
| `${env:}` header | mcp.json keeps `Bearer ${env:OV_MCP_STATIC_TOKEN}`; the expanded header (`Bearer <token>`) is not on disk. See the terminal-environment finding below |

Two further observations, recorded by the verifier and not caused by the MCP
OAuth path:

- **Persisted terminal environment.** The variable itself
  (`"OV_MCP_STATIC_TOKEN":"<token>"`) is in workspace `state.vscdb`: the Agent's
  hidden terminal saves its full launch environment in
  `terminal.integrated.bufferState`. Any secret exported in the environment that
  starts OpenVision is persisted the same way. This is a terminal-persistence
  defect outside OV-304's MCP owner; it is reported, not fixed here.
- **Legacy owner start-up race.** At start-up the legacy extension owner briefly
  connects before routing moves to the utility. On restart it registered a
  client in 3 of 9 recorded restarts (`siU5KR`, `1hNu0j`, `ideoqE`; `siU5KR`
  failed an earlier, stricter registration-count assertion for this reason).
  It keeps the PKCE verifier of its own start-up attempt as a plain
  `[identifier:v1:…] mcp_code_verifier` global value; every `--secrets` run found
  one such row. That attempt is never opened or exchanged, so the verifier is
  unusable without a matching code, but it is plain text and the registration
  is a wasted request.

## Limitations

- Linux x64 only. Windows and macOS secret storage and their URL-handler
  registration (`setAsDefaultProtocolClient`, macOS `open-url`) are moved to the
  platform stories. A live hosted OAuth MCP server is moved to the live stories.
- The Linux desktop-file URL handler registration is not exercised; the
  verifier delivers the URL with the same `--open-url` arguments directly.
- The legacy extension OAuth owner, the loopback redirect variant, the
  cancel button and the two-minute timeout were not exercised.
- Expiry is simulated by the fixture rejecting the current access token
  (`invalid_token`), equivalent to the token's lifetime ending. Because the
  runtime never refreshes proactively, waiting for `expires_in` behaves the same.
