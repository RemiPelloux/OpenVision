var __wakaru_require_abort_cache;
export function require_abort() {
if (__wakaru_require_abort_cache) return __wakaru_require_abort_cache;
var exports2 = {};
__wakaru_require_abort_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AbortError = void 0;
exports2.onabort = onabort;
var AbortError = class extends Error {
    constructor(reason){
        super("The task has been aborted", {
            cause: reason
        });
    }
    get name() {
        return "AbortError";
    }
};
exports2.AbortError = AbortError;
function onabort(abortSignal, listener) {
    if ("addEventListener" in abortSignal) {
        abortSignal.addEventListener("abort", listener, {
            once: true
        });
    } else {
        abortSignal.once("abort", listener);
    }
}

return exports2;
}
