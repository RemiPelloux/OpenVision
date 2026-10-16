import { init_agent_host_agent_store_pb } from "../../proto/dist/generated/agent/v1/agent_host_agent_store_pb.js";
import { init_agent_host_surface_pb } from "../../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
var __wakaru_init_surface_agent_store_initialized = false;
export function init_surface_agent_store() {
if (__wakaru_init_surface_agent_store_initialized) return;
__wakaru_init_surface_agent_store_initialized = true;
"use strict";
init_agent_host_agent_store_pb();
init_agent_host_surface_pb();

}
