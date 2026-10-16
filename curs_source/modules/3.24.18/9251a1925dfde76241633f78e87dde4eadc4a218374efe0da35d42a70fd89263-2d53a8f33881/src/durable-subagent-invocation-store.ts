import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
var __wakaru_init_durable_subagent_invocation_store_initialized = false;
export function init_durable_subagent_invocation_store() {
if (__wakaru_init_durable_subagent_invocation_store_initialized) return;
__wakaru_init_durable_subagent_invocation_store_initialized = true;
"use strict";
init_agent_host_surface_pb();

}
