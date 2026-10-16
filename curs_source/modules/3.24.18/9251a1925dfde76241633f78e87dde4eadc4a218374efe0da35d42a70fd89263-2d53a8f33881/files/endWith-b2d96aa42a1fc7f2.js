import { require_Observable } from "../Observable.js";
var __wakaru_require_endWith_cache;
export function require_endWith() {
if (__wakaru_require_endWith_cache) return __wakaru_require_endWith_cache;
var exports2 = {};
__wakaru_require_endWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.endWith = void 0;
var Observable_js_1 = require_Observable();
function endWith(...values) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                complete: ()=>{
                    (0, Observable_js_1.subscribeToArray)(values, destination);
                }
            }));
        });
}
exports2.endWith = endWith;

return exports2;
}
