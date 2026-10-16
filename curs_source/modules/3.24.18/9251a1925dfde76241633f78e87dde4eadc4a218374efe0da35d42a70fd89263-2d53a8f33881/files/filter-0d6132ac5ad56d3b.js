import { require_Observable } from "../Observable.js";
var __wakaru_require_filter_cache;
export function require_filter() {
if (__wakaru_require_filter_cache) return __wakaru_require_filter_cache;
var exports2 = {};
__wakaru_require_filter_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.filter = void 0;
var Observable_js_1 = require_Observable();
function filter3(predicate, thisArg) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let index = 0;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>predicate.call(thisArg, value, index++) && destination.next(value)
            }));
        });
}
exports2.filter = filter3;

return exports2;
}
