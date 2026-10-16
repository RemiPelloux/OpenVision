import { init_error_message_utils } from "./error-message-utils.js";
var STDIO_CONNECT_STDERR_CAPTURE_MAX_BYTES;
export { STDIO_CONNECT_STDERR_CAPTURE_MAX_BYTES };
var __wakaru_init_reconnect_manager_initialized = false;
export function init_reconnect_manager() {
if (__wakaru_init_reconnect_manager_initialized) return;
__wakaru_init_reconnect_manager_initialized = true;
"use strict";
init_error_message_utils();
STDIO_CONNECT_STDERR_CAPTURE_MAX_BYTES = 8192;

}
