import { init_dist32 } from "../../../../prompt-jsx/dist/index.js";
var DEBUG_LOG_PATH;
export { DEBUG_LOG_PATH };
var __wakaru_init_debug_initialized = false;
export function init_debug() {
if (__wakaru_init_debug_initialized) return;
__wakaru_init_debug_initialized = true;
"use strict";
init_dist32();
DEBUG_LOG_PATH = "/opt/cursor/logs/debug.log";

}
