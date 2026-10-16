import { init_local_loop_turn_telemetry } from "./local-loop-turn-telemetry.js";
import { init_managed_inference_context } from "./managed-inference-context.js";
var __wakaru_init_managed_local_prepare_attempt_context_initialized = false;
export function init_managed_local_prepare_attempt_context() {
if (__wakaru_init_managed_local_prepare_attempt_context_initialized) return;
__wakaru_init_managed_local_prepare_attempt_context_initialized = true;
"use strict";
init_local_loop_turn_telemetry();
init_managed_inference_context();

}
