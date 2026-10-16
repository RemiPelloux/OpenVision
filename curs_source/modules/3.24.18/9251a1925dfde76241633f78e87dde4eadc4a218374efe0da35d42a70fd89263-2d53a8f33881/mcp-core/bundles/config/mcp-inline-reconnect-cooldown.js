import { init_mcp_reconnect_config } from "./mcp-reconnect-config.js";
var DEFAULT_INLINE_RECONNECT_COOLDOWN_MS;
export { DEFAULT_INLINE_RECONNECT_COOLDOWN_MS };
var __wakaru_init_mcp_inline_reconnect_cooldown_initialized = false;
export function init_mcp_inline_reconnect_cooldown() {
if (__wakaru_init_mcp_inline_reconnect_cooldown_initialized) return;
__wakaru_init_mcp_inline_reconnect_cooldown_initialized = true;
"use strict";
init_mcp_reconnect_config();
DEFAULT_INLINE_RECONNECT_COOLDOWN_MS = 5 * 6e4;

}
