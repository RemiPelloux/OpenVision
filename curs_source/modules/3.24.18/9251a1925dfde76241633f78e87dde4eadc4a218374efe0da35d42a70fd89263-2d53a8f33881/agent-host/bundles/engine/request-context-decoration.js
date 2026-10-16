import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_request_context_from_action } from "../agentAdapter/shared/request-context-from-action.js";
import { init_merge_request_context_overlay } from "./merge-request-context-overlay.js";
var __wakaru_init_request_context_decoration_initialized = false;
export function init_request_context_decoration() {
if (__wakaru_init_request_context_decoration_initialized) return;
__wakaru_init_request_context_decoration_initialized = true;
"use strict";
init_dist8();
init_request_context_from_action();
init_merge_request_context_overlay();
init_request_context_from_action();
init_merge_request_context_overlay();

}
