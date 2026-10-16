import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_dist37 } from "../../../../chat-inference-proto/dist/index.js";
var __wakaru_init_managed_inference_context_initialized = false;
export function init_managed_inference_context() {
if (__wakaru_init_managed_inference_context_initialized) return;
__wakaru_init_managed_inference_context_initialized = true;
"use strict";
init_dist35();
init_dist37();

}
