import { init_agent_host_pb } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
var BROWSER_MCP_PROVIDER_IDS2;
export { BROWSER_MCP_PROVIDER_IDS2 };
var __wakaru_init_overlay_from_request_context_initialized = false;
export function init_overlay_from_request_context() {
if (__wakaru_init_overlay_from_request_context_initialized) return;
__wakaru_init_overlay_from_request_context_initialized = true;
"use strict";
init_agent_host_pb();
BROWSER_MCP_PROVIDER_IDS2 = [
    "cursor-ide-browser",
    "cursor-browser-extension"
];

}
