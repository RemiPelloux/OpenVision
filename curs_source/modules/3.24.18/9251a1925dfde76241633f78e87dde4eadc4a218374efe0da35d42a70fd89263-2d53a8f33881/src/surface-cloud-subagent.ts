import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_durable_subagent_invocation_store } from "./durable-subagent-invocation-store.ts";
import { init_surface_owner } from "./surface-owner.ts";
var CLOUD_SUBAGENT_UNBOUND;
export { CLOUD_SUBAGENT_UNBOUND };
var __wakaru_init_surface_cloud_subagent_initialized = false;
export function init_surface_cloud_subagent() {
if (__wakaru_init_surface_cloud_subagent_initialized) return;
__wakaru_init_surface_cloud_subagent_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_durable_subagent_invocation_store();
init_surface_owner();
CLOUD_SUBAGENT_UNBOUND = "cloud_subagent surface is not bound";

}
