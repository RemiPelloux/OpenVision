import { init_classification } from "./classification.js";
import { init_privacy_context } from "./privacy-context.js";
import { init_privacy_mode } from "./privacy-mode.js";
var __wakaru_init_shouldRedact_initialized = false;
export function init_shouldRedact() {
if (__wakaru_init_shouldRedact_initialized) return;
__wakaru_init_shouldRedact_initialized = true;
"use strict";
init_classification();
init_privacy_context();
init_privacy_mode();

}
