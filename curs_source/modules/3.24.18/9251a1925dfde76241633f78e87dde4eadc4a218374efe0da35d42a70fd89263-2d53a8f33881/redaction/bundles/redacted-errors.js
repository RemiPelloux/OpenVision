import { init_classification } from "./classification.js";
import { init_factory } from "./factory.js";
import { init_privacy_mode } from "./privacy-mode.js";
var __wakaru_init_redacted_errors_initialized = false;
export function init_redacted_errors() {
if (__wakaru_init_redacted_errors_initialized) return;
__wakaru_init_redacted_errors_initialized = true;
"use strict";
init_classification();
init_factory();
init_privacy_mode();

}
