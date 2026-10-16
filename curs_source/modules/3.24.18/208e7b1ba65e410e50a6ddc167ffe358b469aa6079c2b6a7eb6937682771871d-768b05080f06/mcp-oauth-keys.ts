import { O$ } from "./base64url.ts";
import { Vs } from "./mcp-url-utils.ts";
import { h } from "./tslib.es6.js";
var Cr;
export { Cr };
var __wakaru_L$_initialized = false;
export function L$() {
if (__wakaru_L$_initialized) return;
__wakaru_L$_initialized = true;
"use strict";
h(), Vs(), O$(), O$(), Cr = {
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

}
