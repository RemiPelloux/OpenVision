import { U6p } from "./trace_flags.js";
import { E } from "./tslib.es6.js";
var __wakaru_b5a_cache;
export function b5a() {
if (__wakaru_b5a_cache) return __wakaru_b5a_cache;
var t = {};
__wakaru_b5a_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
var e = U6p();
t.INVALID_SPANID = "0000000000000000", t.INVALID_TRACEID = "00000000000000000000000000000000", t.INVALID_SPAN_CONTEXT = {
    traceId: t.INVALID_TRACEID,
    spanId: t.INVALID_SPANID,
    traceFlags: e.TraceFlags.NONE
};

return t;
}
