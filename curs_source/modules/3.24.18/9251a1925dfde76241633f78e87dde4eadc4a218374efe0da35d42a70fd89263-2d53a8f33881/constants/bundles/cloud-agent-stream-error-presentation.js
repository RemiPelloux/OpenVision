import { init_cloud_agent_startup_errors } from "./cloud-agent-startup-errors.js";
var CLOUD_AGENT_RETRYABLE_ERROR_RECOVERY_MESSAGE, CLOUD_AGENT_TRANSIENT_ERROR_TITLE, NON_RETRYABLE_TERMINAL_ERROR_CODES;
export { CLOUD_AGENT_RETRYABLE_ERROR_RECOVERY_MESSAGE, CLOUD_AGENT_TRANSIENT_ERROR_TITLE, NON_RETRYABLE_TERMINAL_ERROR_CODES };
var __wakaru_init_cloud_agent_stream_error_presentation_initialized = false;
export function init_cloud_agent_stream_error_presentation() {
if (__wakaru_init_cloud_agent_stream_error_presentation_initialized) return;
__wakaru_init_cloud_agent_stream_error_presentation_initialized = true;
"use strict";
init_cloud_agent_startup_errors();
CLOUD_AGENT_RETRYABLE_ERROR_RECOVERY_MESSAGE = "This run hit an unexpected error. Retry or send a follow-up below.";
CLOUD_AGENT_TRANSIENT_ERROR_TITLE = "Retrying automatically";
NON_RETRYABLE_TERMINAL_ERROR_CODES = new Set([
    "MODEL_BLOCKED"
]);

}
