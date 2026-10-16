var MethodKind, MethodIdempotency;
export { MethodIdempotency, MethodKind };
var __wakaru_init_service_type_initialized = false;
export function init_service_type() {
if (__wakaru_init_service_type_initialized) return;
__wakaru_init_service_type_initialized = true;
(function(MethodKind2) {
    MethodKind2[MethodKind2["Unary"] = 0] = "Unary";
    MethodKind2[MethodKind2["ServerStreaming"] = 1] = "ServerStreaming";
    MethodKind2[MethodKind2["ClientStreaming"] = 2] = "ClientStreaming";
    MethodKind2[MethodKind2["BiDiStreaming"] = 3] = "BiDiStreaming";
})(MethodKind || (MethodKind = {}));
(function(MethodIdempotency2) {
    MethodIdempotency2[MethodIdempotency2["NoSideEffects"] = 1] = "NoSideEffects";
    MethodIdempotency2[MethodIdempotency2["Idempotent"] = 2] = "Idempotent";
})(MethodIdempotency || (MethodIdempotency = {}));

}
