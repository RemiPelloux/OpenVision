import { init_dist9 } from "../../../agent-client/dist/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_conversation_root_compare_initialized = false;
export function init_conversation_root_compare() {
if (__wakaru_init_conversation_root_compare_initialized) return;
__wakaru_init_conversation_root_compare_initialized = true;
"use strict";
init_agent_pb();
init_dist9();

}
