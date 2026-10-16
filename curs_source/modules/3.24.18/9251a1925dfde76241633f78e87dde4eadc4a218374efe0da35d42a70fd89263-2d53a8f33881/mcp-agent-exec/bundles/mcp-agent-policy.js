import { init_network_controls } from "./network-controls.js";
var __wakaru_init_mcp_agent_policy_initialized = false;
export function init_mcp_agent_policy() {
if (__wakaru_init_mcp_agent_policy_initialized) return;
__wakaru_init_mcp_agent_policy_initialized = true;
"use strict";
init_network_controls();

}
