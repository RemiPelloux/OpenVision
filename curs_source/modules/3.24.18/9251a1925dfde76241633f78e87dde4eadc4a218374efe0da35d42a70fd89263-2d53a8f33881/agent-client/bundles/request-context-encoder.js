import { init_dist8 } from "../../agent-exec/dist/index.js";
import { init_dist5 } from "../../agent-kv/dist/index.js";
import { init_request_context_exec_pb } from "../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
var __wakaru_init_request_context_encoder_initialized = false;
export function init_request_context_encoder() {
if (__wakaru_init_request_context_encoder_initialized) return;
__wakaru_init_request_context_encoder_initialized = true;
"use strict";
init_dist8();
init_dist5();
init_request_context_exec_pb();

}
