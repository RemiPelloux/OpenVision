import { init_mcp_focus_retry_cooldown } from "./mcp-focus-retry-cooldown.js";
import { init_mcp_reconnect_config } from "./mcp-reconnect-config.js";
var __wakaru_init_mcp_network_resume_reconnect_policy_initialized = false;
export function init_mcp_network_resume_reconnect_policy() {
if (__wakaru_init_mcp_network_resume_reconnect_policy_initialized) return;
__wakaru_init_mcp_network_resume_reconnect_policy_initialized = true;
"use strict";
init_mcp_focus_retry_cooldown();
init_mcp_reconnect_config();

}
