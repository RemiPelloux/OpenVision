import { Wa } from "./base64url.ts";
import { Qe } from "./mcp-url-utils.ts";
import { h } from "./tslib.es6.js";
var te;
export { te };
var __wakaru_Ka_initialized = false;
export function Ka() {
if (__wakaru_Ka_initialized) return;
__wakaru_Ka_initialized = true;
"use strict";
h(), Qe(), Wa(), Wa(), te = {
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
