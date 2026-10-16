var __wakaru_require_not_cache;
export function require_not() {
if (__wakaru_require_not_cache) return __wakaru_require_not_cache;
var exports2 = {};
__wakaru_require_not_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.not = void 0;
function not(pred, thisArg) {
    return (value, index)=>!pred.call(thisArg, value, index);
}
exports2.not = not;

return exports2;
}
