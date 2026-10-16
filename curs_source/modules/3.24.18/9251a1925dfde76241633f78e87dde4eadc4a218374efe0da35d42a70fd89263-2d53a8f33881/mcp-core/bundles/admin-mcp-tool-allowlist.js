import { init_mcp_tool_annotations } from "./mcp-tool-annotations.js";
import { init_mcp_url_utils } from "./transport/mcp-url-utils.js";
var __wakaru_init_admin_mcp_tool_allowlist_initialized = false;
export function init_admin_mcp_tool_allowlist() {
if (__wakaru_init_admin_mcp_tool_allowlist_initialized) return;
__wakaru_init_admin_mcp_tool_allowlist_initialized = true;
"use strict";
init_mcp_tool_annotations();
init_mcp_url_utils();

}
