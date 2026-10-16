import { init_mcp_fsm_timing_config } from "../config/mcp-fsm-timing-config.js";
import { init_mcp_reconnect_runtime_policy } from "../config/mcp-reconnect-runtime-policy.js";
var __wakaru_init_connection_fsm_initialized = false;
export function init_connection_fsm() {
if (__wakaru_init_connection_fsm_initialized) return;
__wakaru_init_connection_fsm_initialized = true;
"use strict";
init_mcp_fsm_timing_config();
init_mcp_reconnect_runtime_policy();

}
