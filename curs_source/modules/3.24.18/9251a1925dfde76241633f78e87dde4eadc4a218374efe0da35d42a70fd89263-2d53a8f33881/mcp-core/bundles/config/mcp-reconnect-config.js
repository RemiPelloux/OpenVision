import { init_mcp_url_utils } from "../transport/mcp-url-utils.js";
var __wakaru_init_mcp_reconnect_config_initialized = false;
export function init_mcp_reconnect_config() {
if (__wakaru_init_mcp_reconnect_config_initialized) return;
__wakaru_init_mcp_reconnect_config_initialized = true;
"use strict";
init_mcp_url_utils();

}
