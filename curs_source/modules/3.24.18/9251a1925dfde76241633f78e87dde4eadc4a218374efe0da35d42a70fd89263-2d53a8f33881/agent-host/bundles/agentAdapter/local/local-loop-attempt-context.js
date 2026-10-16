import { init_calling_conversation_stream_metadata } from "../shared/calling-conversation-stream-metadata.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
var AUTO_MODEL_SLUG, PREMIUM_MODEL_SLUG, AUTO_SMART_MODEL_ID, OPTIMIZE_FOR_PARAMETER_ID, OPTIMIZE_FOR_COST;
export { AUTO_MODEL_SLUG, AUTO_SMART_MODEL_ID, OPTIMIZE_FOR_COST, OPTIMIZE_FOR_PARAMETER_ID, PREMIUM_MODEL_SLUG };
var __wakaru_init_local_loop_attempt_context_initialized = false;
export function init_local_loop_attempt_context() {
if (__wakaru_init_local_loop_attempt_context_initialized) return;
__wakaru_init_local_loop_attempt_context_initialized = true;
"use strict";
init_dist35();
init_calling_conversation_stream_metadata();
AUTO_MODEL_SLUG = "default";
PREMIUM_MODEL_SLUG = "premium";
AUTO_SMART_MODEL_ID = "auto-smart";
OPTIMIZE_FOR_PARAMETER_ID = "optimize_for";
OPTIMIZE_FOR_COST = "cost";

}
