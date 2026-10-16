import { init_mcp_url_utils } from "./transport/mcp-url-utils.js";
var __wakaru_init_environment_mcp_policy_initialized = false;
export function init_environment_mcp_policy() {
if (__wakaru_init_environment_mcp_policy_initialized) return;
__wakaru_init_environment_mcp_policy_initialized = true;
"use strict";
init_mcp_url_utils();

}
