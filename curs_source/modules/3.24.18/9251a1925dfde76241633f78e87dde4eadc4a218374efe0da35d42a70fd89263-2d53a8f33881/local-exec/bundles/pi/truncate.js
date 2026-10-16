import { init_pi_common_pb } from "../../../proto/dist/generated/agent/v1/pi_common_pb.js";
var PI_DEFAULT_MAX_LINES, PI_DEFAULT_MAX_BYTES, PI_GREP_MAX_LINE_LENGTH;
export { PI_DEFAULT_MAX_BYTES, PI_DEFAULT_MAX_LINES, PI_GREP_MAX_LINE_LENGTH };
var __wakaru_init_truncate_initialized = false;
export function init_truncate() {
if (__wakaru_init_truncate_initialized) return;
__wakaru_init_truncate_initialized = true;
"use strict";
init_pi_common_pb();
PI_DEFAULT_MAX_LINES = 2e3;
PI_DEFAULT_MAX_BYTES = 50 * 1024;
PI_GREP_MAX_LINE_LENGTH = 500;

}
