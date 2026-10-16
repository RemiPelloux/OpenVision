var DIFF_TRUNCATION_NOTICE, DIFF_NO_BUDGET_MESSAGE;
export { DIFF_NO_BUDGET_MESSAGE, DIFF_TRUNCATION_NOTICE };
var __wakaru_init_diff_processing_initialized = false;
export function init_diff_processing() {
if (__wakaru_init_diff_processing_initialized) return;
__wakaru_init_diff_processing_initialized = true;
"use strict";
DIFF_TRUNCATION_NOTICE = "\n\n[diff truncated due to size]";
DIFF_NO_BUDGET_MESSAGE = "[diff omitted due to size constraints]";

}
