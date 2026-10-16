import { init_classification } from "./classification.js";
import { init_privacy_mode } from "./privacy-mode.js";
var __wakaru_init_privacy_context_initialized = false;
export function init_privacy_context() {
if (__wakaru_init_privacy_context_initialized) return;
__wakaru_init_privacy_context_initialized = true;
"use strict";
init_classification();
init_privacy_mode();

}
