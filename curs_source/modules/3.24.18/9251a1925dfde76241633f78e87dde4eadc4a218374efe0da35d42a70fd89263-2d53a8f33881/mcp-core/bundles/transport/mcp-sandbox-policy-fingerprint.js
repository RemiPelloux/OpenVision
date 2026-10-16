import { init_mcp_url_utils } from "./mcp-url-utils.js";
var PROXY_MEDIATED_ALLOW_ALL2;
export { PROXY_MEDIATED_ALLOW_ALL2 };
var __wakaru_init_mcp_sandbox_policy_fingerprint_initialized = false;
export function init_mcp_sandbox_policy_fingerprint() {
if (__wakaru_init_mcp_sandbox_policy_fingerprint_initialized) return;
__wakaru_init_mcp_sandbox_policy_fingerprint_initialized = true;
"use strict";
init_mcp_url_utils();
PROXY_MEDIATED_ALLOW_ALL2 = [
    "0.0.0.0/0",
    "::/0"
];

}
