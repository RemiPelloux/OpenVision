import { require_Observable } from "../Observable.js";
import { require_EmptyError } from "../util/EmptyError.js";
var __wakaru_require_first_cache;
export function require_first() {
if (__wakaru_require_first_cache) return __wakaru_require_first_cache;
var exports2 = {};
__wakaru_require_first_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.first = void 0;
var Observable_js_1 = require_Observable();
var EmptyError_js_1 = require_EmptyError();
function first(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let index = 0;
            const operatorSubscriber = (0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    const passed = predicate ? predicate(value, index++, source) : true;
                    if (passed) {
                        operatorSubscriber.unsubscribe();
                        destination.next(value);
                        destination.complete();
                    }
                },
                complete: ()=>{
                    if (hasDefaultValue) {
                        destination.next(defaultValue);
                        destination.complete();
                    } else {
                        destination.error(new EmptyError_js_1.EmptyError());
                    }
                }
            });
            source.subscribe(operatorSubscriber);
        });
}
exports2.first = first;

return exports2;
}
