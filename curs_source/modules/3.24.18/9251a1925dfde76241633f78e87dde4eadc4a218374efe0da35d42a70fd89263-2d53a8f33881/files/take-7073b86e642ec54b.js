import { require_Observable } from "../Observable.js";
import { require_empty } from "../observable/empty.js";
var __wakaru_require_take_cache;
export function require_take() {
if (__wakaru_require_take_cache) return __wakaru_require_take_cache;
var exports2 = {};
__wakaru_require_take_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.take = void 0;
var empty_js_1 = require_empty();
var Observable_js_1 = require_Observable();
function take(count2) {
    return count2 <= 0 ? ()=>empty_js_1.EMPTY : (source)=>new Observable_js_1.Observable((destination)=>{
            let seen = 0;
            const operatorSubscriber = (0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    if (++seen < count2) {
                        destination.next(value);
                    } else {
                        operatorSubscriber.unsubscribe();
                        destination.next(value);
                        destination.complete();
                    }
                }
            });
            source.subscribe(operatorSubscriber);
        });
}
exports2.take = take;

return exports2;
}
