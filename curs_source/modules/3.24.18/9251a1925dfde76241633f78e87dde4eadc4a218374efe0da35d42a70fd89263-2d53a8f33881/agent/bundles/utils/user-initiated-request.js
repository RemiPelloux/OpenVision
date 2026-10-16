import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_user_initiated_request_initialized = false;
export function init_user_initiated_request() {
if (__wakaru_init_user_initiated_request_initialized) return;
__wakaru_init_user_initiated_request_initialized = true;
"use strict";
init_agent_pb();

}
