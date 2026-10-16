import { init_dist8 } from "../../agent-exec/dist/index.js";
import { init_classifier_contract } from "./auto-review-shared/classifier-contract.js";
import { init_smart_mode_classifier_context } from "./smart-mode-classifier-context.js";
import { init_smart_mode_classifier_error_metadata } from "./utils/smart-mode-classifier-error-metadata.js";
import { init_smart_mode_classifier_measurement } from "./utils/smart-mode-classifier-measurement.js";
import { init_dist32 } from "../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_smart_mode_classifier3_initialized = false;
export function init_smart_mode_classifier3() {
if (__wakaru_init_smart_mode_classifier3_initialized) return;
__wakaru_init_smart_mode_classifier3_initialized = true;
"use strict";
init_jsx_runtime();
init_dist8();
init_dist32();
init_classifier_contract();
init_smart_mode_classifier_context();
init_smart_mode_classifier_error_metadata();
init_smart_mode_classifier_measurement();

}
