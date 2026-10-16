import { init_dist20 } from "../../../local-exec/dist/index.js";
import { init_agent_host_pb } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
var __wakaru_init_approval_request_map_initialized = false;
export function init_approval_request_map() {
if (__wakaru_init_approval_request_map_initialized) return;
__wakaru_init_approval_request_map_initialized = true;
"use strict";
init_dist20();
init_agent_host_pb();

}
