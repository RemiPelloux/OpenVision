import { init_system } from "../../../prompts/system.js";
import { init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var CI_INVESTIGATOR_SUBAGENT_TYPE;
export { CI_INVESTIGATOR_SUBAGENT_TYPE };
var __wakaru_init_ci_investigator_subagent_initialized = false;
export function init_ci_investigator_subagent() {
if (__wakaru_init_ci_investigator_subagent_initialized) return;
__wakaru_init_ci_investigator_subagent_initialized = true;
"use strict";
init_subagents_pb();
init_system();
CI_INVESTIGATOR_SUBAGENT_TYPE = "ci-investigator";

}
