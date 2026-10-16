import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_request_context_exec_pb } from "../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_surface_channel_hub } from "./surface-channel-hub.ts";
var __wakaru_init_surface_request_context_initialized = false;
export function init_surface_request_context() {
if (__wakaru_init_surface_request_context_initialized) return;
__wakaru_init_surface_request_context_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_request_context_exec_pb();
init_surface_channel_hub();

}
