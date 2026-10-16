import { init_mcp_url_utils } from "./transport/mcp-url-utils.js";
var CURSOR_MCP_PROVIDER_URL_PREFIX;
export { CURSOR_MCP_PROVIDER_URL_PREFIX };
var __wakaru_init_admin_mcp_policy_initialized = false;
export function init_admin_mcp_policy() {
if (__wakaru_init_admin_mcp_policy_initialized) return;
__wakaru_init_admin_mcp_policy_initialized = true;
"use strict";
init_mcp_url_utils();
CURSOR_MCP_PROVIDER_URL_PREFIX = "mcp-provider://";

}
