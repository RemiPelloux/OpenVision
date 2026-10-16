import { init_dist9 } from "../../../agent-client/dist/index.js";
import { init_request_context_exec_pb } from "../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
var SEAM_LENT_CONTEXT_HEADER, SEAM_STALL_ADVISORY_TIMEOUT_HEADER, SEAM_STALL_FAIL_TIMEOUT_HEADER, SEAM_HEADERS;
export { SEAM_HEADERS, SEAM_LENT_CONTEXT_HEADER, SEAM_STALL_ADVISORY_TIMEOUT_HEADER, SEAM_STALL_FAIL_TIMEOUT_HEADER };
var __wakaru_init_seam_run_options_initialized = false;
export function init_seam_run_options() {
if (__wakaru_init_seam_run_options_initialized) return;
__wakaru_init_seam_run_options_initialized = true;
"use strict";
init_dist9();
init_request_context_exec_pb();
SEAM_LENT_CONTEXT_HEADER = "x-local-loop-lent-context";
SEAM_STALL_ADVISORY_TIMEOUT_HEADER = "x-local-loop-stall-advisory-ms";
SEAM_STALL_FAIL_TIMEOUT_HEADER = "x-local-loop-stall-fail-ms";
SEAM_HEADERS = new Set([
    SEAM_LENT_CONTEXT_HEADER,
    SEAM_STALL_ADVISORY_TIMEOUT_HEADER,
    SEAM_STALL_FAIL_TIMEOUT_HEADER
]);

}
