import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_merge_request_context_overlay } from "./merge-request-context-overlay.js";
import { init_overlay_from_request_context } from "./overlay-from-request-context.js";
import { init_prefetch_request_context_files } from "./prefetch-request-context-files.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_request_context_exec_pb } from "../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
var OWN_REQUEST_CONTEXT_OVERLAY_GRACE_AFTER_BASE_MS, OWN_REQUEST_CONTEXT_FIRST_TURN_OVERLAY_WAIT_MS, FIRST_TURN_OVERLAY_MISSING_ERROR, logger119;
export { FIRST_TURN_OVERLAY_MISSING_ERROR, OWN_REQUEST_CONTEXT_FIRST_TURN_OVERLAY_WAIT_MS, OWN_REQUEST_CONTEXT_OVERLAY_GRACE_AFTER_BASE_MS, logger119 };
var __wakaru_init_resolve_host_owned_request_context_initialized = false;
export function init_resolve_host_owned_request_context() {
if (__wakaru_init_resolve_host_owned_request_context_initialized) return;
__wakaru_init_resolve_host_owned_request_context_initialized = true;
"use strict";
init_dist8();
init_dist();
init_request_context_exec_pb();
init_prefetch_request_context_files();
init_overlay_from_request_context();
init_merge_request_context_overlay();
OWN_REQUEST_CONTEXT_OVERLAY_GRACE_AFTER_BASE_MS = 25;
OWN_REQUEST_CONTEXT_FIRST_TURN_OVERLAY_WAIT_MS = 250;
FIRST_TURN_OVERLAY_MISSING_ERROR = "Request context overlay missing on the first turn: refusing to start without renderer policy fields.";
logger119 = createLogger("agent-host:own-request-context");

}
