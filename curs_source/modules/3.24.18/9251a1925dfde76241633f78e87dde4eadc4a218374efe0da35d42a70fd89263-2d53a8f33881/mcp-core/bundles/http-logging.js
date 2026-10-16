import { init_log_metadata } from "./log-metadata.js";
import { init_oauth_logging } from "./oauth-logging.js";
var MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES;
export { MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES };
var __wakaru_init_http_logging_initialized = false;
export function init_http_logging() {
if (__wakaru_init_http_logging_initialized) return;
__wakaru_init_http_logging_initialized = true;
"use strict";
init_log_metadata();
init_oauth_logging();
MAX_RESPONSE_ERROR_SUMMARY_LOG_BYTES = 4096;

}
