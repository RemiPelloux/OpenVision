import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_subagent_exec_pb } from "../proto/dist/generated/agent/v1/subagent_exec_pb.js";
var __wakaru_init_surface_cloud_subagent_fixtures_initialized = false;
export function init_surface_cloud_subagent_fixtures() {
if (__wakaru_init_surface_cloud_subagent_fixtures_initialized) return;
__wakaru_init_surface_cloud_subagent_fixtures_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_subagent_exec_pb();

}
