var __wakaru_require_formatDate_cache;
export function require_formatDate() {
if (__wakaru_require_formatDate_cache) return __wakaru_require_formatDate_cache;
var exports2 = {};
__wakaru_require_formatDate_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.formatDate = formatDate;
function formatDate(date4) {
    return date4.toUTCString();
}

return exports2;
}
