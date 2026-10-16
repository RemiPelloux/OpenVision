import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_canvas_diagnostics_exec_pb } from "../proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js";
import { init_mcp_allowlist_precheck_exec_pb } from "../proto/dist/generated/agent/v1/mcp_allowlist_precheck_exec_pb.js";
var DEBUG_CANVAS_PATH;
export { DEBUG_CANVAS_PATH };
var __wakaru_init_surface_canvas_mcp_writer_fixtures_initialized = false;
export function init_surface_canvas_mcp_writer_fixtures() {
if (__wakaru_init_surface_canvas_mcp_writer_fixtures_initialized) return;
__wakaru_init_surface_canvas_mcp_writer_fixtures_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_canvas_diagnostics_exec_pb();
init_mcp_allowlist_precheck_exec_pb();
DEBUG_CANVAS_PATH = "/tmp/debug-canvas/.cursor/projects/ws/canvases/demo.canvas.tsx";

}
