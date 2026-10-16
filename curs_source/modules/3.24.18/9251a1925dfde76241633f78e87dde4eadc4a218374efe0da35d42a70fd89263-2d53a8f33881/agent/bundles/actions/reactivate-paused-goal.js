import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_goal_tool_pb } from "../../../proto/dist/generated/agent/v1/goal_tool_pb.js";
var __wakaru_init_reactivate_paused_goal_initialized = false;
export function init_reactivate_paused_goal() {
if (__wakaru_init_reactivate_paused_goal_initialized) return;
__wakaru_init_reactivate_paused_goal_initialized = true;
"use strict";
init_dist7();
init_goal_tool_pb();

}
