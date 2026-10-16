import { init_mcp_reconnect_config } from "./mcp-reconnect-config.js";
var FOCUS_RETRY_MINIMUM_COOLDOWN_MS;
export { FOCUS_RETRY_MINIMUM_COOLDOWN_MS };
var __wakaru_init_mcp_focus_retry_cooldown_initialized = false;
export function init_mcp_focus_retry_cooldown() {
if (__wakaru_init_mcp_focus_retry_cooldown_initialized) return;
__wakaru_init_mcp_focus_retry_cooldown_initialized = true;
"use strict";
init_mcp_reconnect_config();
FOCUS_RETRY_MINIMUM_COOLDOWN_MS = 5 * 6e4;

}
