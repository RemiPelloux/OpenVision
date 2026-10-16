import { yh } from "./log-metadata.ts";
import { L$ } from "./mcp-oauth-keys.ts";
import { h } from "./tslib.es6.js";
var U$;
export { U$ };
var __wakaru_O$e_initialized = false;
export function O$e() {
if (__wakaru_O$e_initialized) return;
__wakaru_O$e_initialized = true;
"use strict";
h(), yh(), L$(), U$ = {
    mcp_oauth_callback_completion: "MCP OAuth callback exchange completed",
    mcp_oauth_token_save: "MCP OAuth tokens persisted",
    mcp_oauth_token_client_binding_mismatch: "MCP OAuth token client binding mismatch",
    mcp_oauth_tokens_returned: "MCP OAuth tokens returned to SDK",
    mcp_oauth_refresh_prepare: "MCP OAuth refresh prepared",
    mcp_oauth_refresh_error: "MCP OAuth refresh error",
    mcp_oauth_refresh_result: "MCP OAuth refresh result",
    mcp_oauth_refresh_lease_acquired: "MCP OAuth refresh lock acquired",
    mcp_oauth_refresh_lease_waiting: "MCP OAuth refresh lock held by sibling",
    mcp_oauth_refresh_lease_wait_complete: "MCP OAuth refresh lock released by sibling",
    mcp_oauth_refresh_lease_released: "MCP OAuth refresh lock released",
    mcp_oauth_refresh_lease_heartbeat_renewed: "MCP OAuth refresh lock heartbeat renewed",
    mcp_oauth_refresh_lease_heartbeat_lost: "MCP OAuth refresh lock heartbeat lost",
    mcp_oauth_sibling_refresh_detected: "MCP OAuth sibling already refreshed",
    mcp_oauth_invalidate_credentials_skipped: "MCP OAuth invalidate skipped \u2014 preserving tokens",
    mcp_oauth_sdk_refresh_catch_branch: "MCP OAuth SDK refresh catch branch",
    mcp_oauth_invalidate_credentials: "MCP OAuth credentials invalidated",
    mcp_oauth_credentials_cleared: "MCP OAuth credentials cleared (local housekeeping)",
    mcp_oauth_redirect: "MCP OAuth redirect"
};

}
