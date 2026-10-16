var __wakaru_require_SequenceError_cache;
export function require_SequenceError() {
if (__wakaru_require_SequenceError_cache) return __wakaru_require_SequenceError_cache;
var exports2 = {};
__wakaru_require_SequenceError_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.SequenceError = void 0;
var SequenceError = class extends Error {
    constructor(message){
        super(message);
        this.name = "SequenceError";
    }
};
exports2.SequenceError = SequenceError;

return exports2;
}
