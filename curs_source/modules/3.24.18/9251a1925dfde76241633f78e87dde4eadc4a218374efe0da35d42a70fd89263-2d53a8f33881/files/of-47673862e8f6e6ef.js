import { require_Observable } from "../Observable.js";
var __wakaru_require_of_cache;
export function require_of() {
if (__wakaru_require_of_cache) return __wakaru_require_of_cache;
var exports2 = {};
__wakaru_require_of_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.of = void 0;
var Observable_js_1 = require_Observable();
function of3(...values) {
    return (0, Observable_js_1.fromArrayLike)(values);
}
exports2.of = of3;

return exports2;
}
