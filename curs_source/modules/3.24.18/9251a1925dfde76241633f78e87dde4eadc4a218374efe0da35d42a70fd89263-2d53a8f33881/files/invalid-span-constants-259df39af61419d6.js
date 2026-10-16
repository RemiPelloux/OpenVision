import { TraceFlags, init_trace_flags } from "./trace_flags.js";
var INVALID_SPANID, INVALID_TRACEID, INVALID_SPAN_CONTEXT;
export { INVALID_SPANID, INVALID_SPAN_CONTEXT, INVALID_TRACEID };
var __wakaru_init_invalid_span_constants_initialized = false;
export function init_invalid_span_constants() {
if (__wakaru_init_invalid_span_constants_initialized) return;
__wakaru_init_invalid_span_constants_initialized = true;
init_trace_flags();
INVALID_SPANID = "0000000000000000";
INVALID_TRACEID = "00000000000000000000000000000000";
INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: TraceFlags.NONE
};

}
