import { init_context_api } from "./context-api.js";
import { init_trace_api } from "./trace-api.js";
import { init_span_kind } from "./trace/span_kind.js";
import { init_spancontext_utils } from "./trace/spancontext-utils.js";
import { init_status } from "./trace/status.js";
var __wakaru_init_esm_initialized = false;
export function init_esm() {
if (__wakaru_init_esm_initialized) return;
__wakaru_init_esm_initialized = true;
init_span_kind();
init_status();
init_spancontext_utils();
init_context_api();
init_trace_api();

}
