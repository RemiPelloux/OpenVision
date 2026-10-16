import { require_Observable } from "../Observable.js";
var __wakaru_require_skipWhile_cache;
export function require_skipWhile() {
if (__wakaru_require_skipWhile_cache) return __wakaru_require_skipWhile_cache;
var exports2 = {};
__wakaru_require_skipWhile_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.skipWhile = void 0;
var Observable_js_1 = require_Observable();
function skipWhile(predicate) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let taking = false;
            let index = 0;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>(taking || (taking = !predicate(value, index++))) && destination.next(value)
            }));
        });
}
exports2.skipWhile = skipWhile;

return exports2;
}
