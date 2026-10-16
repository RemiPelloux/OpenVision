import { require_Observable } from "../Observable.js";
import { require_EmptyError } from "../util/EmptyError.js";
import { require_NotFoundError } from "../util/NotFoundError.js";
import { require_SequenceError } from "../util/SequenceError.js";
var __wakaru_require_single_cache;
export function require_single() {
if (__wakaru_require_single_cache) return __wakaru_require_single_cache;
var exports2 = {};
__wakaru_require_single_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.single = void 0;
var Observable_js_1 = require_Observable();
var EmptyError_js_1 = require_EmptyError();
var SequenceError_js_1 = require_SequenceError();
var NotFoundError_js_1 = require_NotFoundError();
function single(predicate) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let hasValue = false;
            let singleValue;
            let seenValue = false;
            let index = 0;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    seenValue = true;
                    if (!predicate || predicate(value, index++, source)) {
                        hasValue && destination.error(new SequenceError_js_1.SequenceError("Too many matching values"));
                        hasValue = true;
                        singleValue = value;
                    }
                },
                complete: ()=>{
                    if (hasValue) {
                        destination.next(singleValue);
                        destination.complete();
                    } else {
                        destination.error(seenValue ? new NotFoundError_js_1.NotFoundError("No matching values") : new EmptyError_js_1.EmptyError());
                    }
                }
            }));
        });
}
exports2.single = single;

return exports2;
}
