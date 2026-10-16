var __wakaru_require_performanceTimestampProvider_cache;
export function require_performanceTimestampProvider() {
if (__wakaru_require_performanceTimestampProvider_cache) return __wakaru_require_performanceTimestampProvider_cache;
var exports2 = {};
__wakaru_require_performanceTimestampProvider_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.performanceTimestampProvider = void 0;
exports2.performanceTimestampProvider = {
    now () {
        return (exports2.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: void 0
};

return exports2;
}
