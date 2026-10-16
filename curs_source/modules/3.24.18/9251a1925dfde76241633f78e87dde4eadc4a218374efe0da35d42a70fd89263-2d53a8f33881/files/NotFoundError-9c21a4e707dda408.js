var __wakaru_require_NotFoundError_cache;
export function require_NotFoundError() {
if (__wakaru_require_NotFoundError_cache) return __wakaru_require_NotFoundError_cache;
var exports2 = {};
__wakaru_require_NotFoundError_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.NotFoundError = void 0;
var NotFoundError = class extends Error {
    constructor(message){
        super(message);
        this.name = "NotFoundError";
    }
};
exports2.NotFoundError = NotFoundError;

return exports2;
}
