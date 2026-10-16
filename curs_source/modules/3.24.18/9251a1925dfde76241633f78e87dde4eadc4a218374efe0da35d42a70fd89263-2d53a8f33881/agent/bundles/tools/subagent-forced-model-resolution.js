import { init_composer_subagent_resolution } from "./composer-subagent-resolution.js";
import { init_subagent_model_force_policy } from "./subagent-model-force-policy.js";
var __wakaru_init_subagent_forced_model_resolution_initialized = false;
export function init_subagent_forced_model_resolution() {
if (__wakaru_init_subagent_forced_model_resolution_initialized) return;
__wakaru_init_subagent_forced_model_resolution_initialized = true;
"use strict";
init_composer_subagent_resolution();
init_subagent_model_force_policy();

}
