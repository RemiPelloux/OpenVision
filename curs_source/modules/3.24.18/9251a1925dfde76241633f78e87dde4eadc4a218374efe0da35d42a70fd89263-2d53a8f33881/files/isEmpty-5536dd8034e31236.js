import { require_Observable } from "../Observable.js";
var __wakaru_require_isEmpty_cache;
export function require_isEmpty() {
if (__wakaru_require_isEmpty_cache) return __wakaru_require_isEmpty_cache;
var exports2 = {};
__wakaru_require_isEmpty_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.isEmpty = void 0;
var Observable_js_1 = require_Observable();
function isEmpty() {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: ()=>{
                    destination.next(false);
                    destination.complete();
                },
                complete: ()=>{
                    destination.next(true);
                    destination.complete();
                }
            }));
        });
}
exports2.isEmpty = isEmpty;

return exports2;
}
