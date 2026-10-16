import { require_Observable } from "../Observable.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_distinctUntilChanged_cache;
export function require_distinctUntilChanged() {
if (__wakaru_require_distinctUntilChanged_cache) return __wakaru_require_distinctUntilChanged_cache;
var exports2 = {};
__wakaru_require_distinctUntilChanged_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.distinctUntilChanged = void 0;
var identity_js_1 = require_identity();
var Observable_js_1 = require_Observable();
function distinctUntilChanged(comparator, keySelector = identity_js_1.identity) {
    comparator = comparator ?? defaultCompare;
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let previousKey;
            let first = true;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    const currentKey = keySelector(value);
                    if (first || !comparator(previousKey, currentKey)) {
                        first = false;
                        previousKey = currentKey;
                        destination.next(value);
                    }
                }
            }));
        });
}
exports2.distinctUntilChanged = distinctUntilChanged;
function defaultCompare(a, b2) {
    return a === b2;
}

return exports2;
}
