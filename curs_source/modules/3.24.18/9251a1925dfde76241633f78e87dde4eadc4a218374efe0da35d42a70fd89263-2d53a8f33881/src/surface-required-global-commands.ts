import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_surface_owner } from "./surface-owner.ts";
var __wakaru_init_surface_required_global_commands_initialized = false;
export function init_surface_required_global_commands() {
if (__wakaru_init_surface_required_global_commands_initialized) return;
__wakaru_init_surface_required_global_commands_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_surface_owner();

}
