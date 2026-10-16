import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var FSD_SUBAGENT_TYPE, FSD_SUBAGENT_DESCRIPTION;
export { FSD_SUBAGENT_DESCRIPTION, FSD_SUBAGENT_TYPE };
var __wakaru_init_fsd_subagent_initialized = false;
export function init_fsd_subagent() {
if (__wakaru_init_fsd_subagent_initialized) return;
__wakaru_init_fsd_subagent_initialized = true;
"use strict";
init_agent_pb();
init_subagents_pb();
FSD_SUBAGENT_TYPE = "fsd";
FSD_SUBAGENT_DESCRIPTION = "Use for Full Self Driving PR triage and merge-readiness work. When launching this subagent, set the Task description to a short PR summary. Pass only the FSD trigger description for this turn in the Task prompt (for example `check_suite (completed) with conclusion failure` or `pull_request (synchronize)`); the server rebuilds the full turn prompt with triage context and mode instructions. Do not pass the full turn prompt. This subagent is single-shot and does not support `resume`; start a fresh subagent for each FSD turn.";

}
