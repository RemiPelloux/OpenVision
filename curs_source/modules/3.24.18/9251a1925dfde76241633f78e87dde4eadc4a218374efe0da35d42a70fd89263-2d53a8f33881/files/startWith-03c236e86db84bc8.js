import { require_Observable } from "../Observable.js";
var __wakaru_require_startWith_cache;
export function require_startWith() {
if (__wakaru_require_startWith_cache) return __wakaru_require_startWith_cache;
var exports2 = {};
__wakaru_require_startWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.startWith = void 0;
var Observable_js_1 = require_Observable();
function startWith(...values) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            (0, Observable_js_1.subscribeToArray)(values, (0, Observable_js_1.operate)({
                destination,
                complete: ()=>source.subscribe(destination)
            }));
        });
}
exports2.startWith = startWith;

return exports2;
}
