import { init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_previous_request_id_initialized = false;
export function init_previous_request_id() {
if (__wakaru_init_previous_request_id_initialized) return;
__wakaru_init_previous_request_id_initialized = true;
"use strict";
init_agent_pb();

}
