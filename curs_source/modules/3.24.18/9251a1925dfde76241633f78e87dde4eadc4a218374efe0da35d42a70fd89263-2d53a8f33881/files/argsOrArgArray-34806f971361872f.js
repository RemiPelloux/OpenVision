var __wakaru_require_argsOrArgArray_cache;
export function require_argsOrArgArray() {
if (__wakaru_require_argsOrArgArray_cache) return __wakaru_require_argsOrArgArray_cache;
var exports2 = {};
__wakaru_require_argsOrArgArray_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.argsOrArgArray = void 0;
var { isArray } = Array;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
exports2.argsOrArgArray = argsOrArgArray;

return exports2;
}
