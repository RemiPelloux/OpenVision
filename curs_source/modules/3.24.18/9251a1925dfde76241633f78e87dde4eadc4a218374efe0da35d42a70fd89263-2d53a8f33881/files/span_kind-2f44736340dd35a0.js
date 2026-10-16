var SpanKind;
export { SpanKind };
var __wakaru_init_span_kind_initialized = false;
export function init_span_kind() {
if (__wakaru_init_span_kind_initialized) return;
__wakaru_init_span_kind_initialized = true;
(function(SpanKind3) {
    SpanKind3[SpanKind3["INTERNAL"] = 0] = "INTERNAL";
    SpanKind3[SpanKind3["SERVER"] = 1] = "SERVER";
    SpanKind3[SpanKind3["CLIENT"] = 2] = "CLIENT";
    SpanKind3[SpanKind3["PRODUCER"] = 3] = "PRODUCER";
    SpanKind3[SpanKind3["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));

}
