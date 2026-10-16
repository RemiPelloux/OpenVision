import { iN1 } from "./tracestate-impl.js";
import { E } from "./tslib.es6.js";
var __wakaru_rN1_cache;
export function rN1() {
if (__wakaru_rN1_cache) return __wakaru_rN1_cache;
var t = {};
__wakaru_rN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.createTraceState = void 0;
var e = iN1();
function n(i) {
    return new e.TraceStateImpl(i);
}
t.createTraceState = n;

return t;
}
