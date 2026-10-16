import { KKs } from "./NonRecordingSpan.js";
import { x8i } from "./context.js";
import { I8i } from "./context_2.js";
import { x } from "./tslib.es6.js";
var __wakaru_fNu_cache;
export function fNu() {
if (__wakaru_fNu_cache) return __wakaru_fNu_cache;
var e = {};
__wakaru_fNu_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.getSpanContext = e.setSpanContext = e.deleteSpan = e.setSpan = e.getActiveSpan = e.getSpan = void 0;
var t = x8i(), n = KKs(), i = I8i(), r = (0, t.createContextKey)("OpenTelemetry Context Key SPAN");
function s(h) {
    return h.getValue(r) || void 0;
}
e.getSpan = s;
function o() {
    return s(i.ContextAPI.getInstance().active());
}
e.getActiveSpan = o;
function a(h, p) {
    return h.setValue(r, p);
}
e.setSpan = a;
function c(h) {
    return h.deleteValue(r);
}
e.deleteSpan = c;
function l(h, p) {
    return a(h, new n.NonRecordingSpan(p));
}
e.setSpanContext = l;
function u(h) {
    var p;
    return (p = s(h)) === null || p === void 0 ? void 0 : p.spanContext();
}
e.getSpanContext = u;

return e;
}
