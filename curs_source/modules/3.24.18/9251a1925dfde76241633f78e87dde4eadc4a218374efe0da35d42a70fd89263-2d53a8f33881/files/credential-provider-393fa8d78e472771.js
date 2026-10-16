import { init_credential_helper } from "./credential-helper.js";
var DEFAULT_CREDENTIAL_HELPER_TIMEOUT_MS, DEFAULT_CREDENTIAL_HELPER_MAX_OUTPUT_BYTES;
export { DEFAULT_CREDENTIAL_HELPER_MAX_OUTPUT_BYTES, DEFAULT_CREDENTIAL_HELPER_TIMEOUT_MS };
var __wakaru_init_credential_provider_initialized = false;
export function init_credential_provider() {
if (__wakaru_init_credential_provider_initialized) return;
__wakaru_init_credential_provider_initialized = true;
"use strict";
init_credential_helper();
DEFAULT_CREDENTIAL_HELPER_TIMEOUT_MS = 1e4;
DEFAULT_CREDENTIAL_HELPER_MAX_OUTPUT_BYTES = 1024 * 1024;

}
