import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_canvas_diagnostics_exec_pb } from "../proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js";
import { init_surface_hop_result } from "./surface-hop-result.ts";
var __wakaru_init_surface_canvas_initialized = false;
export function init_surface_canvas() {
if (__wakaru_init_surface_canvas_initialized) return;
__wakaru_init_surface_canvas_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_canvas_diagnostics_exec_pb();
init_surface_hop_result();

}
