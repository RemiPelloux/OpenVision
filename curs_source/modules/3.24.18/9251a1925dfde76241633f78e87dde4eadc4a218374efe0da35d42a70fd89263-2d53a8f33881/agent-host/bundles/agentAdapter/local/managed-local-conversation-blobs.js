import { init_dist5 } from "../../../../agent-kv/dist/index.js";
import { init_agent_service_pb } from "../../../../proto/dist/generated/agent/v1/agent_service_pb.js";
var __wakaru_init_managed_local_conversation_blobs_initialized = false;
export function init_managed_local_conversation_blobs() {
if (__wakaru_init_managed_local_conversation_blobs_initialized) return;
__wakaru_init_managed_local_conversation_blobs_initialized = true;
"use strict";
init_dist5();
init_agent_service_pb();

}
