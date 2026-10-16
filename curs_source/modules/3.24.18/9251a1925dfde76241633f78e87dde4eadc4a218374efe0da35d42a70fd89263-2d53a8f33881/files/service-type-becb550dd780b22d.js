var __wakaru_require_service_type_cache;
export function require_service_type() {
if (__wakaru_require_service_type_cache) return __wakaru_require_service_type_cache;
var exports2 = {};
__wakaru_require_service_type_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.MethodIdempotency = exports2.MethodKind = void 0;
var MethodKind2;
(function(MethodKind3) {
    MethodKind3[MethodKind3["Unary"] = 0] = "Unary";
    MethodKind3[MethodKind3["ServerStreaming"] = 1] = "ServerStreaming";
    MethodKind3[MethodKind3["ClientStreaming"] = 2] = "ClientStreaming";
    MethodKind3[MethodKind3["BiDiStreaming"] = 3] = "BiDiStreaming";
})(MethodKind2 || (exports2.MethodKind = MethodKind2 = {}));
var MethodIdempotency2;
(function(MethodIdempotency3) {
    MethodIdempotency3[MethodIdempotency3["NoSideEffects"] = 1] = "NoSideEffects";
    MethodIdempotency3[MethodIdempotency3["Idempotent"] = 2] = "Idempotent";
})(MethodIdempotency2 || (exports2.MethodIdempotency = MethodIdempotency2 = {}));

return exports2;
}
