import { init_mcp_loader_with_custom_clients } from "./mcp-loader-with-custom-clients.js";
var __wakaru_init_mcp6_initialized = false;
export function init_mcp6() {
if (__wakaru_init_mcp6_initialized) return;
__wakaru_init_mcp6_initialized = true;
"use strict";
init_mcp_loader_with_custom_clients();

}
