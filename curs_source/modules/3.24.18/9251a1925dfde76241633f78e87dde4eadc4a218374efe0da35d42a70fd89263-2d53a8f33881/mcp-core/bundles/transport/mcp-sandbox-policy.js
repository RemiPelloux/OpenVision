import { init_mcp_url_utils } from "./mcp-url-utils.js";
var PROXY_MEDIATED_ALLOW_ALL;
export { PROXY_MEDIATED_ALLOW_ALL };
var __wakaru_init_mcp_sandbox_policy_initialized = false;
export function init_mcp_sandbox_policy() {
if (__wakaru_init_mcp_sandbox_policy_initialized) return;
__wakaru_init_mcp_sandbox_policy_initialized = true;
"use strict";
init_mcp_url_utils();
PROXY_MEDIATED_ALLOW_ALL = [
    "0.0.0.0/0",
    "::/0"
];

}
