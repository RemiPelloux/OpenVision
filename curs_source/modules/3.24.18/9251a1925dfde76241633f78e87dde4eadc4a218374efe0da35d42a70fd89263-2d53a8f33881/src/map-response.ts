import { init_agent_host_pb } from "../proto/dist/generated/agent/v1/agent_host_pb.js";
import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
var __wakaru_init_map_response_initialized = false;
export function init_map_response() {
if (__wakaru_init_map_response_initialized) return;
__wakaru_init_map_response_initialized = true;
"use strict";
init_agent_host_pb();
init_agent_host_surface_pb();

}
