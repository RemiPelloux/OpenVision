import { gNu } from "./trace_flags.js";
import { x } from "./tslib.es6.js";
var __wakaru_zKs_cache;
export function zKs() {
if (__wakaru_zKs_cache) return __wakaru_zKs_cache;
var e = {};
__wakaru_zKs_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = void 0;
var t = gNu();
e.INVALID_SPANID = "0000000000000000", e.INVALID_TRACEID = "00000000000000000000000000000000", e.INVALID_SPAN_CONTEXT = {
    traceId: e.INVALID_TRACEID,
    spanId: e.INVALID_SPANID,
    traceFlags: t.TraceFlags.NONE
};

return e;
}
