var SpanStatusCode;
export { SpanStatusCode };
var __wakaru_init_status_initialized = false;
export function init_status() {
if (__wakaru_init_status_initialized) return;
__wakaru_init_status_initialized = true;
(function(SpanStatusCode2) {
    SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
    SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
    SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));

}
