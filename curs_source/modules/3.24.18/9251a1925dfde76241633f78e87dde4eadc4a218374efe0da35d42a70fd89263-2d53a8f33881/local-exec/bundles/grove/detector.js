import { init_platform2 } from "./platform.js";
import { init_process } from "./process.js";
import { init_sources } from "./sources.js";
import { init_types10 } from "./types.js";
var STATUS_MAX_STDOUT_BYTES, STATUS_MAX_STDERR_BYTES;
export { STATUS_MAX_STDERR_BYTES, STATUS_MAX_STDOUT_BYTES };
var __wakaru_init_detector_initialized = false;
export function init_detector() {
if (__wakaru_init_detector_initialized) return;
__wakaru_init_detector_initialized = true;
"use strict";
init_platform2();
init_process();
init_sources();
init_types10();
STATUS_MAX_STDOUT_BYTES = 8 * 1024 * 1024;
STATUS_MAX_STDERR_BYTES = 64 * 1024;

}
