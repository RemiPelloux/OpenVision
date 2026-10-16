import { init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_subagents_pb } from "../../proto/dist/generated/agent/v1/subagents_pb.js";
var __wakaru_init_subagent_run_completion_initialized = false;
export function init_subagent_run_completion() {
if (__wakaru_init_subagent_run_completion_initialized) return;
__wakaru_init_subagent_run_completion_initialized = true;
"use strict";
init_agent_pb();
init_subagents_pb();

}
