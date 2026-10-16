var __wakaru_require_interceptor_cache;
export function require_interceptor() {
if (__wakaru_require_interceptor_cache) return __wakaru_require_interceptor_cache;
var exports2 = {};
__wakaru_require_interceptor_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.applyInterceptors = applyInterceptors2;
function applyInterceptors2(next, interceptors) {
    var _a18;
    return (_a18 = interceptors === null || interceptors === void 0 ? void 0 : interceptors.concat().reverse().reduce((n, i)=>i(n), next)) !== null && _a18 !== void 0 ? _a18 : next;
}

return exports2;
}
