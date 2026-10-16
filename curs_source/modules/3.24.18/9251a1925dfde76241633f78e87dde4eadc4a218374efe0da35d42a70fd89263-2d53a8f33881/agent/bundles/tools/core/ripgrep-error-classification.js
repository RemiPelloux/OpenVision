import { init_common9 } from "../common.js";
import { init_core5 } from "../core.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var UNEXPECTED_ENVIRONMENT_OS_ERROR_CODES;
export { UNEXPECTED_ENVIRONMENT_OS_ERROR_CODES };
var __wakaru_init_ripgrep_error_classification_initialized = false;
export function init_ripgrep_error_classification() {
if (__wakaru_init_ripgrep_error_classification_initialized) return;
__wakaru_init_ripgrep_error_classification_initialized = true;
"use strict";
init_dist3();
init_common9();
init_core5();
UNEXPECTED_ENVIRONMENT_OS_ERROR_CODES = new Set([
    1,
    2,
    3,
    5,
    13,
    32,
    33
]);

}
