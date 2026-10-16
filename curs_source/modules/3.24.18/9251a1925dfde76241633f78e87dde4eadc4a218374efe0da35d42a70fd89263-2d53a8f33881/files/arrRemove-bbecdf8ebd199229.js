var __wakaru_require_arrRemove_cache;
export function require_arrRemove() {
if (__wakaru_require_arrRemove_cache) return __wakaru_require_arrRemove_cache;
var exports2 = {};
__wakaru_require_arrRemove_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.arrRemove = void 0;
function arrRemove(arr, item) {
    if (arr) {
        const index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
exports2.arrRemove = arrRemove;

return exports2;
}
