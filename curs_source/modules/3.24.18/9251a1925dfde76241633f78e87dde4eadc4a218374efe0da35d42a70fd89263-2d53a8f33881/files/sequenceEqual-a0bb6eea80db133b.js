import { require_Observable } from "../Observable.js";
var __wakaru_require_sequenceEqual_cache;
export function require_sequenceEqual() {
if (__wakaru_require_sequenceEqual_cache) return __wakaru_require_sequenceEqual_cache;
var exports2 = {};
__wakaru_require_sequenceEqual_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.sequenceEqual = void 0;
var Observable_js_1 = require_Observable();
function sequenceEqual(compareTo, comparator = (a, b2)=>a === b2) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            const aState = createState();
            const bState = createState();
            const emit2 = (isEqual2)=>{
                destination.next(isEqual2);
                destination.complete();
            };
            const createSubscriber = (selfState, otherState)=>{
                const sequenceEqualSubscriber = (0, Observable_js_1.operate)({
                    destination,
                    next: (a)=>{
                        const { buffer, complete } = otherState;
                        if (buffer.length === 0) {
                            complete ? emit2(false) : selfState.buffer.push(a);
                        } else {
                            !comparator(a, buffer.shift()) && emit2(false);
                        }
                    },
                    complete: ()=>{
                        selfState.complete = true;
                        const { complete, buffer } = otherState;
                        complete && emit2(buffer.length === 0);
                        sequenceEqualSubscriber?.unsubscribe();
                    }
                });
                return sequenceEqualSubscriber;
            };
            source.subscribe(createSubscriber(aState, bState));
            (0, Observable_js_1.from)(compareTo).subscribe(createSubscriber(bState, aState));
        });
}
exports2.sequenceEqual = sequenceEqual;
function createState() {
    return {
        buffer: [],
        complete: false
    };
}

return exports2;
}
