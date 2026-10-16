import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_background_task_completion_initialized = false;
export function init_background_task_completion() {
if (__wakaru_init_background_task_completion_initialized) return;
__wakaru_init_background_task_completion_initialized = true;
"use strict";
init_dist8();
init_agent_pb();

}
