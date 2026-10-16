import { require_Observable } from "../Observable.js";
var __wakaru_require_scanInternals_cache;
export function require_scanInternals() {
if (__wakaru_require_scanInternals_cache) return __wakaru_require_scanInternals_cache;
var exports2 = {};
__wakaru_require_scanInternals_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.scanInternals = void 0;
var Observable_js_1 = require_Observable();
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete, source, destination) {
    let hasState = hasSeed;
    let state = seed;
    let index = 0;
    source.subscribe((0, Observable_js_1.operate)({
        destination,
        next: (value)=>{
            const i = index++;
            state = hasState ? accumulator(state, value, i) : (hasState = true, value);
            emitOnNext && destination.next(state);
        },
        complete: emitBeforeComplete ? ()=>{
            hasState && destination.next(state);
            destination.complete();
        } : void 0
    }));
}
exports2.scanInternals = scanInternals;

return exports2;
}
