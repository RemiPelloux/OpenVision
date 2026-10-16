"use strict";
require.d(exports, {
    L1: ()=>u,
    Lt: ()=>s,
    S$: ()=>i,
    ds: ()=>c,
    vL: ()=>a
});
var n = require("./module-768.js"), o = require("./module-9206.js");
const s = {
    CODE_VERIFIER: "mcp_code_verifier",
    SERVER_URL: "mcp_server_url",
    TOKENS: "mcp_tokens",
    CLIENT_INFORMATION: "mcp_client_information",
    OAUTH_RETENTION: "mcp_oauth_retention",
    OAUTH_ATTEMPT: "mcp_oauth_attempt",
    OAUTH_ATTEMPT_CLIENT_SECRET: "mcp_oauth_attempt_client_secret",
    UPDATED_AT: "mcp_oauth_updated_at_ms",
    GRANT_HOLD: "mcp_grant_hold"
};
function i({ baseKey: e, identifier: t }) {
    return `[${t}] ${e}`;
}
function a({ baseKey: e, serverUrl: t }) {
    const r = (0, n.Yl)(t);
    return `[url:${(0, o.$)(r)}] ${e}`;
}
function c(e) {
    return `[oauth-attempt:${e}] ${s.OAUTH_ATTEMPT_CLIENT_SECRET}`;
}
function u(e) {
    return `[oauth-attempt:${e}] ${s.CODE_VERIFIER}`;
}
