import { require_Observable } from "../Observable.js";
import { require_EmptyError } from "../util/EmptyError.js";
var __wakaru_require_last_cache;
export function require_last() {
if (__wakaru_require_last_cache) return __wakaru_require_last_cache;
var exports2 = {};
__wakaru_require_last_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.last = void 0;
var Observable_js_1 = require_Observable();
var EmptyError_js_1 = require_EmptyError();
function last(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let index = 0;
            let found = false;
            let lastValue;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next (value) {
                    if (!predicate || predicate(value, index++, source)) {
                        found = true;
                        lastValue = value;
                    }
                },
                complete () {
                    if (found) {
                        destination.next(lastValue);
                        destination.complete();
                    } else if (hasDefaultValue) {
                        destination.next(defaultValue);
                        destination.complete();
                    } else {
                        destination.error(new EmptyError_js_1.EmptyError());
                    }
                }
            }));
        });
}
exports2.last = last;

return exports2;
}
