import { require_Observable } from "../Observable.js";
var __wakaru_require_defer_cache;
export function require_defer() {
if (__wakaru_require_defer_cache) return __wakaru_require_defer_cache;
var exports2 = {};
__wakaru_require_defer_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.defer = void 0;
var Observable_js_1 = require_Observable();
function defer2(observableFactory) {
    return new Observable_js_1.Observable((subscriber)=>{
        (0, Observable_js_1.from)(observableFactory()).subscribe(subscriber);
    });
}
exports2.defer = defer2;

return exports2;
}
