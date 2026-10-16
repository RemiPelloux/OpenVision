import { init_mcp_reconnect_config } from "./mcp-reconnect-config.js";
import { init_error_message_utils } from "../transport/error-message-utils.js";
var DEFAULT_MCP_TOOL_CALL_MAX_TOTAL_TIMEOUT_MS, LEGACY_MCP_TOOL_CALL_TIMEOUT_MS;
export { DEFAULT_MCP_TOOL_CALL_MAX_TOTAL_TIMEOUT_MS, LEGACY_MCP_TOOL_CALL_TIMEOUT_MS };
var __wakaru_init_mcp_tool_call_timeout_initialized = false;
export function init_mcp_tool_call_timeout() {
if (__wakaru_init_mcp_tool_call_timeout_initialized) return;
__wakaru_init_mcp_tool_call_timeout_initialized = true;
"use strict";
init_error_message_utils();
init_mcp_reconnect_config();
DEFAULT_MCP_TOOL_CALL_MAX_TOTAL_TIMEOUT_MS = 60 * 6e4;
LEGACY_MCP_TOOL_CALL_TIMEOUT_MS = 60 * 6e4;

}
