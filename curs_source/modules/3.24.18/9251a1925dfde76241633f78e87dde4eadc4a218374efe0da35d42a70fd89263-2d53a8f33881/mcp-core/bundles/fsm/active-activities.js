import { init_mcp_fsm_timing_config } from "../config/mcp-fsm-timing-config.js";
var __wakaru_init_active_activities_initialized = false;
export function init_active_activities() {
if (__wakaru_init_active_activities_initialized) return;
__wakaru_init_active_activities_initialized = true;
"use strict";
init_mcp_fsm_timing_config();

}
