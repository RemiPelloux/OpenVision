import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_local_loop_ineligible_turn_error } from "./local-loop-ineligible-turn-error.js";
import { init_managed_inference_session } from "./managed-inference-session.js";
import { init_private_inference_context } from "./private-inference-context.js";
import { init_private_inference_model } from "./private-inference-model.js";
import { init_private_inference_subagent_models } from "./private-inference-subagent-models.js";
var REASONING_PARAMETER_ID, REASONING_PARAMETER_IDS;
export { REASONING_PARAMETER_ID, REASONING_PARAMETER_IDS };
var __wakaru_init_private_inference_session_initialized = false;
export function init_private_inference_session() {
if (__wakaru_init_private_inference_session_initialized) return;
__wakaru_init_private_inference_session_initialized = true;
"use strict";
init_dist9();
init_local_loop_ineligible_turn_error();
init_managed_inference_session();
init_private_inference_context();
init_private_inference_model();
init_private_inference_subagent_models();
REASONING_PARAMETER_ID = "reasoning";
REASONING_PARAMETER_IDS = [
    REASONING_PARAMETER_ID,
    "effort",
    "thought_level"
];

}
