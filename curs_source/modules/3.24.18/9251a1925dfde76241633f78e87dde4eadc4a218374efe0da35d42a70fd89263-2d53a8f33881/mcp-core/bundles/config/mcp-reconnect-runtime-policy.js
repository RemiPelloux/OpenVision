import { init_mcp_reconnect_config } from "./mcp-reconnect-config.js";
var __wakaru_init_mcp_reconnect_runtime_policy_initialized = false;
export function init_mcp_reconnect_runtime_policy() {
if (__wakaru_init_mcp_reconnect_runtime_policy_initialized) return;
__wakaru_init_mcp_reconnect_runtime_policy_initialized = true;
"use strict";
init_mcp_reconnect_config();

}
