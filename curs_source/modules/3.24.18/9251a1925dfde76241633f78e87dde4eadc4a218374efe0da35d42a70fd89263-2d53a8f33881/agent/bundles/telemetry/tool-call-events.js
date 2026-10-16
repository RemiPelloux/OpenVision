import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_error_class_name } from "./error-class-name.js";
import { init_invocation_id } from "../utils/invocation-id.js";
import { init_request_id } from "../utils/request-id.js";
import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
var TOOL_CALL_EVENT_DEFERRED_ERROR_CLASS, TOOL_CALL_EVENT_RESULT_ERROR_CLASS, TOOL_CALL_EVENT_TOOL_NOT_FOUND_ERROR_CLASS, TOOL_CALL_EVENT_UNKNOWN_ERROR_CLASS, toolCallEventRecorderKey;
export { TOOL_CALL_EVENT_DEFERRED_ERROR_CLASS, TOOL_CALL_EVENT_RESULT_ERROR_CLASS, TOOL_CALL_EVENT_TOOL_NOT_FOUND_ERROR_CLASS, TOOL_CALL_EVENT_UNKNOWN_ERROR_CLASS, toolCallEventRecorderKey };
var __wakaru_init_tool_call_events_initialized = false;
export function init_tool_call_events() {
if (__wakaru_init_tool_call_events_initialized) return;
__wakaru_init_tool_call_events_initialized = true;
"use strict";
init_dist7();
init_dist();
init_invocation_id();
init_request_id();
init_error_class_name();
TOOL_CALL_EVENT_DEFERRED_ERROR_CLASS = "DeferredInteractionResponseError";
TOOL_CALL_EVENT_RESULT_ERROR_CLASS = "tool_result_error";
TOOL_CALL_EVENT_TOOL_NOT_FOUND_ERROR_CLASS = "tool_not_found";
TOOL_CALL_EVENT_UNKNOWN_ERROR_CLASS = "Error";
toolCallEventRecorderKey = createKey(Symbol("toolCallEventRecorder"), void 0);

}
