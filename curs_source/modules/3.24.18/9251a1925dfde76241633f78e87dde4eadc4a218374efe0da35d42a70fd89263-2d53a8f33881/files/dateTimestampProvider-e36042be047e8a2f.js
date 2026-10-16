var __wakaru_require_dateTimestampProvider_cache;
export function require_dateTimestampProvider() {
if (__wakaru_require_dateTimestampProvider_cache) return __wakaru_require_dateTimestampProvider_cache;
var exports2 = {};
__wakaru_require_dateTimestampProvider_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.dateTimestampProvider = void 0;
exports2.dateTimestampProvider = {
    now () {
        return (exports2.dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
};

return exports2;
}
