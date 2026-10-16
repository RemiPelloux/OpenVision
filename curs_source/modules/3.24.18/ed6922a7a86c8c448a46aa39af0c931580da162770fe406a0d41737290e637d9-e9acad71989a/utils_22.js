import { Fgv } from "./tracestate-impl.js";
import { x } from "./tslib.es6.js";
var __wakaru_Bgv_cache;
export function Bgv() {
if (__wakaru_Bgv_cache) return __wakaru_Bgv_cache;
var e = {};
__wakaru_Bgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.createTraceState = void 0;
var t = Fgv();
function n(i) {
    return new t.TraceStateImpl(i);
}
e.createTraceState = n;

return e;
}
