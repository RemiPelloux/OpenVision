var TraceFlags;
export { TraceFlags };
var __wakaru_init_trace_flags_initialized = false;
export function init_trace_flags() {
if (__wakaru_init_trace_flags_initialized) return;
__wakaru_init_trace_flags_initialized = true;
(function(TraceFlags2) {
    TraceFlags2[TraceFlags2["NONE"] = 0] = "NONE";
    TraceFlags2[TraceFlags2["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));

}
