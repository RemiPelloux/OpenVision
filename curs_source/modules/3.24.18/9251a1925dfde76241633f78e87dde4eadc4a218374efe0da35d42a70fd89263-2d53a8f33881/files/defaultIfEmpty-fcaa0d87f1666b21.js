import { require_Observable } from "../Observable.js";
var __wakaru_require_defaultIfEmpty_cache;
export function require_defaultIfEmpty() {
if (__wakaru_require_defaultIfEmpty_cache) return __wakaru_require_defaultIfEmpty_cache;
var exports2 = {};
__wakaru_require_defaultIfEmpty_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.defaultIfEmpty = void 0;
var Observable_js_1 = require_Observable();
function defaultIfEmpty(defaultValue) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let hasValue = false;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    hasValue = true;
                    destination.next(value);
                },
                complete: ()=>{
                    if (!hasValue) {
                        destination.next(defaultValue);
                    }
                    destination.complete();
                }
            }));
        });
}
exports2.defaultIfEmpty = defaultIfEmpty;

return exports2;
}
