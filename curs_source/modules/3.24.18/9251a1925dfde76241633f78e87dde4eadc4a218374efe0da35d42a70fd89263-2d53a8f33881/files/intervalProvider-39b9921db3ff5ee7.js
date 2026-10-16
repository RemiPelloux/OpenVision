var __wakaru_require_intervalProvider_cache;
export function require_intervalProvider() {
if (__wakaru_require_intervalProvider_cache) return __wakaru_require_intervalProvider_cache;
var exports2 = {};
__wakaru_require_intervalProvider_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.intervalProvider = void 0;
exports2.intervalProvider = {
    setInterval (handler, timeout2, ...args) {
        const { delegate } = exports2.intervalProvider;
        if (delegate?.setInterval) {
            return delegate.setInterval(handler, timeout2, ...args);
        }
        return setInterval(handler, timeout2, ...args);
    },
    clearInterval (handle) {
        const { delegate } = exports2.intervalProvider;
        return (delegate?.clearInterval || clearInterval)(handle);
    },
    delegate: void 0
};

return exports2;
}
