var MCP_AUTH_TOOL_NAME3, MCP_AUTH_TOOL_DESCRIPTION;
export { MCP_AUTH_TOOL_DESCRIPTION, MCP_AUTH_TOOL_NAME3 };
var __wakaru_init_mcp_auth_tool_initialized = false;
export function init_mcp_auth_tool() {
if (__wakaru_init_mcp_auth_tool_initialized) return;
__wakaru_init_mcp_auth_tool_initialized = true;
"use strict";
MCP_AUTH_TOOL_NAME3 = "mcp_auth";
MCP_AUTH_TOOL_DESCRIPTION = "Authenticate this MCP server. Call it with empty arguments when the server reports needsAuth or a tool call fails with an authentication error, then retry the original request.";

}
