import { TraceAPI, init_trace } from "./api/trace.js";
var trace;
export { trace };
var __wakaru_init_trace_api_initialized = false;
export function init_trace_api() {
if (__wakaru_init_trace_api_initialized) return;
__wakaru_init_trace_api_initialized = true;
init_trace();
trace = TraceAPI.getInstance();

}
