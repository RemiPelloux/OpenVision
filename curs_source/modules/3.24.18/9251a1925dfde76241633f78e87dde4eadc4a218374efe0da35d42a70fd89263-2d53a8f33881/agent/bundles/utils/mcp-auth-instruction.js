var MCP_AUTH_INSTRUCTION;
export { MCP_AUTH_INSTRUCTION };
var __wakaru_init_mcp_auth_instruction_initialized = false;
export function init_mcp_auth_instruction() {
if (__wakaru_init_mcp_auth_instruction_initialized) return;
__wakaru_init_mcp_auth_instruction_initialized = true;
"use strict";
MCP_AUTH_INSTRUCTION = "If a relevant server is marked as needing authentication, or if an MCP tool call fails with an authentication/authorization error, call `mcp_auth` for that server, then inspect that server again and retry the original request if appropriate. Do not call `mcp_auth` just because it is listed, and do not repeatedly call it if authentication did not fix the failure. Do not call `mcp_auth` in parallel; authenticate only one server at a time.";

}
