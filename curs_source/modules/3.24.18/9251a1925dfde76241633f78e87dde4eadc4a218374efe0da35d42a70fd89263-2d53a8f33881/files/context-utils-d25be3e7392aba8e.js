import { init_context2 } from "../api/context.js";
import { init_context } from "../context/context.js";
import { init_NonRecordingSpan } from "./NonRecordingSpan.js";
function createContextKey(description3) {
    return Symbol.for(description3);
}
var SPAN_KEY;
export { SPAN_KEY, createContextKey };
var __wakaru_init_context_utils_initialized = false;
export function init_context_utils() {
if (__wakaru_init_context_utils_initialized) return;
__wakaru_init_context_utils_initialized = true;
init_context();
init_NonRecordingSpan();
init_context2();
SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");

}
