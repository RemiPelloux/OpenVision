var __wakaru_require_symbols11_cache;
export function require_symbols11() {
if (__wakaru_require_symbols11_cache) return __wakaru_require_symbols11_cache;
var exports2 = {};
__wakaru_require_symbols11_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.kFieldCount = exports2.kResponseCountField = exports2.kRequestCountField = exports2.kQueueOptions = exports2.kValue = exports2.kTransferable = exports2.kMovable = void 0;
exports2.kMovable = Symbol("Piscina.kMovable");
exports2.kTransferable = Symbol.for("Piscina.transferable");
exports2.kValue = Symbol.for("Piscina.valueOf");
exports2.kQueueOptions = Symbol.for("Piscina.queueOptions");
exports2.kRequestCountField = 0;
exports2.kResponseCountField = 1;
exports2.kFieldCount = 2;

return exports2;
}
