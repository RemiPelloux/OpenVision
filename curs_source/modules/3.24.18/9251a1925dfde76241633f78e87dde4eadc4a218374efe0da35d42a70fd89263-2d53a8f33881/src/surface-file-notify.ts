import { init_dist20 } from "../local-exec/dist/index.js";
import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
var __wakaru_init_surface_file_notify_initialized = false;
export function init_surface_file_notify() {
if (__wakaru_init_surface_file_notify_initialized) return;
__wakaru_init_surface_file_notify_initialized = true;
"use strict";
init_dist20();
init_agent_host_surface_pb();

}
