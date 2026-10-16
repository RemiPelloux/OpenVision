import { init_remote_hooks } from "../core/remote-hooks.js";
import { init_mcp_exec_pb } from "../../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
var __wakaru_init_backend_routed_mcp_hooks_initialized = false;
export function init_backend_routed_mcp_hooks() {
if (__wakaru_init_backend_routed_mcp_hooks_initialized) return;
__wakaru_init_backend_routed_mcp_hooks_initialized = true;
"use strict";
init_mcp_exec_pb();
init_remote_hooks();

}
