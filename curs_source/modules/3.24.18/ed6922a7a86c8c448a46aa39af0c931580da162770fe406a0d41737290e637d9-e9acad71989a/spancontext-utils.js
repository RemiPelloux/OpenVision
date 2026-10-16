import { KKs } from "./NonRecordingSpan.js";
import { zKs } from "./invalid-span-constants.js";
import { x } from "./tslib.es6.js";
var __wakaru_YKs_cache;
export function YKs() {
if (__wakaru_YKs_cache) return __wakaru_YKs_cache;
var e = {};
__wakaru_YKs_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.wrapSpanContext = e.isSpanContextValid = e.isValidSpanId = e.isValidTraceId = void 0;
var t = zKs(), n = KKs(), i = /^([0-9a-f]{32})$/i, r = /^[0-9a-f]{16}$/i;
function s(l) {
    return i.test(l) && l !== t.INVALID_TRACEID;
}
e.isValidTraceId = s;
function o(l) {
    return r.test(l) && l !== t.INVALID_SPANID;
}
e.isValidSpanId = o;
function a(l) {
    return s(l.traceId) && o(l.spanId);
}
e.isSpanContextValid = a;
function c(l) {
    return new n.NonRecordingSpan(l);
}
e.wrapSpanContext = c;

return e;
}
