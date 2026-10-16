var __wakaru_require_iterator_cache;
export function require_iterator() {
if (__wakaru_require_iterator_cache) return __wakaru_require_iterator_cache;
var exports2 = {};
__wakaru_require_iterator_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.iterator = exports2.getSymbolIterator = void 0;
function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
        return "@@iterator";
    }
    return Symbol.iterator;
}
exports2.getSymbolIterator = getSymbolIterator;
exports2.iterator = getSymbolIterator();

return exports2;
}
