import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_inference_pb } from "../../../../proto/dist/generated/aiserver/v1/inference_pb.js";
var __wakaru_init_local_routing_conversation_initialized = false;
export function init_local_routing_conversation() {
if (__wakaru_init_local_routing_conversation_initialized) return;
__wakaru_init_local_routing_conversation_initialized = true;
"use strict";
init_dist35();
init_inference_pb();

}
