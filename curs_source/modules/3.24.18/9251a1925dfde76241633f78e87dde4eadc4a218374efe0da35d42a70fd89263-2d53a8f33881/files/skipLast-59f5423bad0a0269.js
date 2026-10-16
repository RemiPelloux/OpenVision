import { require_Observable } from "../Observable.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_skipLast_cache;
export function require_skipLast() {
if (__wakaru_require_skipLast_cache) return __wakaru_require_skipLast_cache;
var exports2 = {};
__wakaru_require_skipLast_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.skipLast = void 0;
var identity_js_1 = require_identity();
var Observable_js_1 = require_Observable();
function skipLast(skipCount) {
    return skipCount <= 0 ? identity_js_1.identity : (source)=>new Observable_js_1.Observable((destination)=>{
            let ring = new Array(skipCount);
            let seen = 0;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    const valueIndex = seen++;
                    if (valueIndex < skipCount) {
                        ring[valueIndex] = value;
                    } else {
                        const index = valueIndex % skipCount;
                        const oldValue = ring[index];
                        ring[index] = value;
                        destination.next(oldValue);
                    }
                }
            }));
            return ()=>{
                ring = null;
            };
        });
}
exports2.skipLast = skipLast;

return exports2;
}
