var __wakaru_require_isDate_cache;
export function require_isDate() {
if (__wakaru_require_isDate_cache) return __wakaru_require_isDate_cache;
var exports2 = {};
__wakaru_require_isDate_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.isValidDate = void 0;
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
exports2.isValidDate = isValidDate;

return exports2;
}
