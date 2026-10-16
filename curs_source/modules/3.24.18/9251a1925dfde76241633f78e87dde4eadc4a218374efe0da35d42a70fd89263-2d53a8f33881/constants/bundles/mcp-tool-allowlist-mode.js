var TOOL_ALLOWLIST_MODES;
export { TOOL_ALLOWLIST_MODES };
var __wakaru_init_mcp_tool_allowlist_mode_initialized = false;
export function init_mcp_tool_allowlist_mode() {
if (__wakaru_init_mcp_tool_allowlist_mode_initialized) return;
__wakaru_init_mcp_tool_allowlist_mode_initialized = true;
"use strict";
TOOL_ALLOWLIST_MODES = [
    "all",
    "reads",
    "custom"
];

}
