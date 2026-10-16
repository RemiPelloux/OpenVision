import { require_Observable } from "../Observable.js";
var __wakaru_require_takeWhile_cache;
export function require_takeWhile() {
if (__wakaru_require_takeWhile_cache) return __wakaru_require_takeWhile_cache;
var exports2 = {};
__wakaru_require_takeWhile_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.takeWhile = void 0;
var Observable_js_1 = require_Observable();
function takeWhile(predicate, inclusive = false) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let index = 0;
            const operatorSubscriber = (0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    if (predicate(value, index++)) {
                        destination.next(value);
                    } else {
                        operatorSubscriber.unsubscribe();
                        if (inclusive) {
                            destination.next(value);
                        }
                        destination.complete();
                    }
                }
            });
            source.subscribe(operatorSubscriber);
        });
}
exports2.takeWhile = takeWhile;

return exports2;
}
