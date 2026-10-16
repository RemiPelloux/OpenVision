import { require_Observable } from "../Observable.js";
var __wakaru_require_finalize_cache;
export function require_finalize() {
if (__wakaru_require_finalize_cache) return __wakaru_require_finalize_cache;
var exports2 = {};
__wakaru_require_finalize_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.finalize = void 0;
var Observable_js_1 = require_Observable();
function finalize(callback) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            source.subscribe(subscriber);
            subscriber.add(callback);
        });
}
exports2.finalize = finalize;

return exports2;
}
