var __wakaru_require_ArgumentOutOfRangeError_cache;
export function require_ArgumentOutOfRangeError() {
if (__wakaru_require_ArgumentOutOfRangeError_cache) return __wakaru_require_ArgumentOutOfRangeError_cache;
var exports2 = {};
__wakaru_require_ArgumentOutOfRangeError_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.ArgumentOutOfRangeError = void 0;
var ArgumentOutOfRangeError = class extends Error {
    constructor(){
        super("argument out of range");
        this.name = "ArgumentOutOfRangeError";
    }
};
exports2.ArgumentOutOfRangeError = ArgumentOutOfRangeError;

return exports2;
}
