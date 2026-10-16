import { require_Observable } from "../Observable.js";
import { require_EmptyError } from "../util/EmptyError.js";
var __wakaru_require_throwIfEmpty_cache;
export function require_throwIfEmpty() {
if (__wakaru_require_throwIfEmpty_cache) return __wakaru_require_throwIfEmpty_cache;
var exports2 = {};
__wakaru_require_throwIfEmpty_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.throwIfEmpty = void 0;
var EmptyError_js_1 = require_EmptyError();
var Observable_js_1 = require_Observable();
function throwIfEmpty(errorFactory = defaultErrorFactory) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let hasValue = false;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    hasValue = true;
                    destination.next(value);
                },
                complete: ()=>hasValue ? destination.complete() : destination.error(errorFactory())
            }));
        });
}
exports2.throwIfEmpty = throwIfEmpty;
function defaultErrorFactory() {
    return new EmptyError_js_1.EmptyError();
}

return exports2;
}
