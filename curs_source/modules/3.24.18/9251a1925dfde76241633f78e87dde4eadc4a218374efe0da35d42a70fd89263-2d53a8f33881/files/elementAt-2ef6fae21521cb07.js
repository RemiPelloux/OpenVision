import { require_Observable } from "../Observable.js";
import { require_ArgumentOutOfRangeError } from "../util/ArgumentOutOfRangeError.js";
var __wakaru_require_elementAt_cache;
export function require_elementAt() {
if (__wakaru_require_elementAt_cache) return __wakaru_require_elementAt_cache;
var exports2 = {};
__wakaru_require_elementAt_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.elementAt = void 0;
var ArgumentOutOfRangeError_js_1 = require_ArgumentOutOfRangeError();
var Observable_js_1 = require_Observable();
function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError_js_1.ArgumentOutOfRangeError();
    }
    const hasDefaultValue = arguments.length >= 2;
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let i = 0;
            const operatorSubscriber = (0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    if (i++ === index) {
                        operatorSubscriber.unsubscribe();
                        destination.next(value);
                        destination.complete();
                    }
                },
                complete: ()=>{
                    if (!hasDefaultValue) {
                        destination.error(new ArgumentOutOfRangeError_js_1.ArgumentOutOfRangeError());
                    } else {
                        destination.next(defaultValue);
                        destination.complete();
                    }
                }
            });
            source.subscribe(operatorSubscriber);
        });
}
exports2.elementAt = elementAt;

return exports2;
}
