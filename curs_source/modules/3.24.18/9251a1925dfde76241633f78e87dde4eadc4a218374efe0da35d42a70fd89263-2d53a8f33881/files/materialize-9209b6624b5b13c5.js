import { require_Observable } from "../Observable.js";
var __wakaru_require_materialize_cache;
export function require_materialize() {
if (__wakaru_require_materialize_cache) return __wakaru_require_materialize_cache;
var exports2 = {};
__wakaru_require_materialize_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.materialize = void 0;
var Observable_js_1 = require_Observable();
function materialize2() {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    destination.next((0, Observable_js_1.nextNotification)(value));
                },
                error: (error3)=>{
                    destination.next((0, Observable_js_1.errorNotification)(error3));
                    destination.complete();
                },
                complete: ()=>{
                    destination.next(Observable_js_1.COMPLETE_NOTIFICATION);
                    destination.complete();
                }
            }));
        });
}
exports2.materialize = materialize2;

return exports2;
}
