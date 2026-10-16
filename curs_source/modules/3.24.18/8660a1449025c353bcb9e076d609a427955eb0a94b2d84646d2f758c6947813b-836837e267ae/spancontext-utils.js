import { y5a } from "./NonRecordingSpan.js";
import { b5a } from "./invalid-span-constants.js";
import { E } from "./tslib.es6.js";
var __wakaru_S5a_cache;
export function S5a() {
if (__wakaru_S5a_cache) return __wakaru_S5a_cache;
var t = {};
__wakaru_S5a_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
var e = b5a(), n = y5a(), i = /^([0-9a-f]{32})$/i, r = /^[0-9a-f]{16}$/i;
function s(c) {
    return i.test(c) && c !== e.INVALID_TRACEID;
}
t.isValidTraceId = s;
function o(c) {
    return r.test(c) && c !== e.INVALID_SPANID;
}
t.isValidSpanId = o;
function a(c) {
    return s(c.traceId) && o(c.spanId);
}
t.isSpanContextValid = a;
function l(c) {
    return new n.NonRecordingSpan(c);
}
t.wrapSpanContext = l;

return t;
}
