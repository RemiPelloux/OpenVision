import { init_mcp_reconnect_config } from "./mcp-reconnect-config.js";
var DEFAULT_KEEPALIVE_PROBE_DELAY_MS;
export { DEFAULT_KEEPALIVE_PROBE_DELAY_MS };
var __wakaru_init_mcp_fsm_timing_config_initialized = false;
export function init_mcp_fsm_timing_config() {
if (__wakaru_init_mcp_fsm_timing_config_initialized) return;
__wakaru_init_mcp_fsm_timing_config_initialized = true;
"use strict";
init_mcp_reconnect_config();
DEFAULT_KEEPALIVE_PROBE_DELAY_MS = 5 * 6e4;

}
