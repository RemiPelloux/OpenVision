var MCP_AUTH_VIRTUAL_TOOL_NAME, MCP_INVOCATION_TOOL_NAMES;
export { MCP_AUTH_VIRTUAL_TOOL_NAME, MCP_INVOCATION_TOOL_NAMES };
var __wakaru_init_mcp_auth_invocation_initialized = false;
export function init_mcp_auth_invocation() {
if (__wakaru_init_mcp_auth_invocation_initialized) return;
__wakaru_init_mcp_auth_invocation_initialized = true;
"use strict";
MCP_AUTH_VIRTUAL_TOOL_NAME = "mcp_auth";
MCP_INVOCATION_TOOL_NAMES = new Set([
    "callmcptool",
    "mcp",
    "calldynamictool"
]);

}
