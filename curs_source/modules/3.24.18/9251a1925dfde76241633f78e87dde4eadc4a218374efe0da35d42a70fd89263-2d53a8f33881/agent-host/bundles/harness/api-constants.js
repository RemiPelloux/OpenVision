var HARNESS_INTERFACE_REVISION, HARNESS_CAPABILITIES, HARNESS_REQUIRED_CAPABILITIES, HARNESS_FAILURE_METADATA, HARNESS_LOOP_FAILURE, HARNESS_LOG_LEVELS;
export { HARNESS_CAPABILITIES, HARNESS_FAILURE_METADATA, HARNESS_INTERFACE_REVISION, HARNESS_LOG_LEVELS, HARNESS_LOOP_FAILURE, HARNESS_REQUIRED_CAPABILITIES };
var __wakaru_init_api_constants_initialized = false;
export function init_api_constants() {
if (__wakaru_init_api_constants_initialized) return;
__wakaru_init_api_constants_initialized = true;
"use strict";
HARNESS_INTERFACE_REVISION = 2;
HARNESS_CAPABILITIES = {
    managedLocalRun: "managed-local-run",
    seamRunOptions: "seam-run-options"
};
HARNESS_REQUIRED_CAPABILITIES = [
    HARNESS_CAPABILITIES.managedLocalRun
];
HARNESS_FAILURE_METADATA = "x-agent-harness-failure";
HARNESS_LOOP_FAILURE = "loop";
HARNESS_LOG_LEVELS = [
    "debug",
    "info",
    "warn",
    "error"
];

}
