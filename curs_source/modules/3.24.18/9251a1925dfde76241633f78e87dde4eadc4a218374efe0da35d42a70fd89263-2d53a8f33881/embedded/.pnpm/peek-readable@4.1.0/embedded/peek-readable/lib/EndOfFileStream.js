var __wakaru_require_EndOfFileStream_cache;
export function require_EndOfFileStream() {
if (__wakaru_require_EndOfFileStream_cache) return __wakaru_require_EndOfFileStream_cache;
var exports2 = {};
__wakaru_require_EndOfFileStream_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.EndOfStreamError = exports2.defaultMessages = void 0;
exports2.defaultMessages = "End-Of-Stream";
var EndOfStreamError = class extends Error {
    constructor(){
        super(exports2.defaultMessages);
    }
};
exports2.EndOfStreamError = EndOfStreamError;

return exports2;
}
