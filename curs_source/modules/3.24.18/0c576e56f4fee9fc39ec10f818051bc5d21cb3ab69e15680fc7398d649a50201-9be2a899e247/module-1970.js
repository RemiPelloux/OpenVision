"use strict";
require.d(exports, {
    $y: ()=>c,
    qY: ()=>i,
    tB: ()=>s
});
var n = require("./module-4792.js"), o = require("./module-9465.js");
function s(e, t) {
    const r = e?.access_token, n = "string" == typeof r ? r.length : 0, o = Boolean(e?.refresh_token), s = "number" == typeof e?.expires_in && Number.isFinite(e.expires_in) ? e.expires_in : null;
    return {
        accessTokenLen: n,
        refreshTokenPresent: o,
        expiresAtTimestamp: t?.expiresInIsFresh && null !== s ? Date.now() + Math.round(1e3 * s) : null,
        grantedScope: "string" == typeof e?.scope && e.scope.length > 0 ? e.scope : null
    };
}
function i(e) {
    return e.includes(o.Lt.TOKENS) ? "tokens" : e.includes(o.Lt.CLIENT_INFORMATION) ? "client_information" : e.includes(o.Lt.CODE_VERIFIER) ? "verifier" : "multiple";
}
const a = {
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
    mcp_oauth_invalidate_credentials_skipped: "MCP OAuth invalidate skipped — preserving tokens",
    mcp_oauth_sdk_refresh_catch_branch: "MCP OAuth SDK refresh catch branch",
    mcp_oauth_invalidate_credentials: "MCP OAuth credentials invalidated",
    mcp_oauth_credentials_cleared: "MCP OAuth credentials cleared (local housekeeping)",
    mcp_oauth_redirect: "MCP OAuth redirect"
};
function c(e) {
    !function(e) {
        (0, n.EL)({
            identifier: e.identifier,
            level: e.level ?? "info",
            message: e.message ?? a[e.event],
            metadata: (0, n.Qt)({
                event: e.event,
                commandsVersion: e.commandsVersion ?? "process",
                mcpOAuthOwner: e.mcpOAuthOwner ?? "mcp_process",
                ...e.fields ?? {}
            }),
            error: e.error
        });
    }({
        identifier: e.identifier,
        event: "mcp_oauth_credentials_cleared",
        level: e.level ?? "debug",
        commandsVersion: e.commandsVersion,
        mcpOAuthOwner: e.mcpOAuthOwner,
        fields: {
            reason: e.reason,
            clearScope: e.clearScope,
            storageKey: e.storageKey,
            hadRefreshToken: e.hadRefreshToken,
            ...e.fields ?? {}
        }
    });
}
