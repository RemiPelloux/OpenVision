import { init_cursor_rules_pb } from "../../../proto/dist/generated/agent/v1/cursor_rules_pb.js";
import { init_request_context_exec_pb } from "../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
var __wakaru_init_merge_request_context_overlay_initialized = false;
export function init_merge_request_context_overlay() {
if (__wakaru_init_merge_request_context_overlay_initialized) return;
__wakaru_init_merge_request_context_overlay_initialized = true;
"use strict";
init_cursor_rules_pb();
init_request_context_exec_pb();

}
