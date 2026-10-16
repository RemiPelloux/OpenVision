import { init_dist27 } from "../../redaction/dist/index.js";
var CHARS_PER_TOKEN, MESSAGE_OVERHEAD_CHARS, TOOL_CALL_OVERHEAD_CHARS;
export { CHARS_PER_TOKEN, MESSAGE_OVERHEAD_CHARS, TOOL_CALL_OVERHEAD_CHARS };
var __wakaru_init_token_estimate_initialized = false;
export function init_token_estimate() {
if (__wakaru_init_token_estimate_initialized) return;
__wakaru_init_token_estimate_initialized = true;
"use strict";
init_dist27();
CHARS_PER_TOKEN = 2.5;
MESSAGE_OVERHEAD_CHARS = 25;
TOOL_CALL_OVERHEAD_CHARS = 50;

}
