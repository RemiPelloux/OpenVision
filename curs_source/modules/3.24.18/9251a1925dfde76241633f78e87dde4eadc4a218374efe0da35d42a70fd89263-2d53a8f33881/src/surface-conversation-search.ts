import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_conversation_search_exec_pb } from "../proto/dist/generated/agent/v1/conversation_search_exec_pb.js";
import { init_surface_channel_hub } from "./surface-channel-hub.ts";
var __wakaru_init_surface_conversation_search_initialized = false;
export function init_surface_conversation_search() {
if (__wakaru_init_surface_conversation_search_initialized) return;
__wakaru_init_surface_conversation_search_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_conversation_search_exec_pb();
init_surface_channel_hub();

}
