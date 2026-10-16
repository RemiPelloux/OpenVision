var __wakaru_require_EmptyError_cache;
export function require_EmptyError() {
if (__wakaru_require_EmptyError_cache) return __wakaru_require_EmptyError_cache;
var exports2 = {};
__wakaru_require_EmptyError_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.EmptyError = void 0;
var EmptyError = class extends Error {
    constructor(){
        super("no elements in sequence");
        this.name = "EmptyError";
    }
};
exports2.EmptyError = EmptyError;

return exports2;
}
