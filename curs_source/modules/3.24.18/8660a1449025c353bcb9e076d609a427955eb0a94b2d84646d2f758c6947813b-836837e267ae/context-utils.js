import { y5a } from "./NonRecordingSpan.js";
import { Zqr } from "./context.js";
import { Qqr } from "./context_2.js";
import { E } from "./tslib.es6.js";
var __wakaru_j6p_cache;
export function j6p() {
if (__wakaru_j6p_cache) return __wakaru_j6p_cache;
var t = {};
__wakaru_j6p_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
var e = Zqr(), n = y5a(), i = Qqr(), r = (0, e.createContextKey)("OpenTelemetry Context Key SPAN");
function s(d) {
    return d.getValue(r) || void 0;
}
t.getSpan = s;
function o() {
    return s(i.ContextAPI.getInstance().active());
}
t.getActiveSpan = o;
function a(d, h) {
    return d.setValue(r, h);
}
t.setSpan = a;
function l(d) {
    return d.deleteValue(r);
}
t.deleteSpan = l;
function c(d, h) {
    return a(d, new n.NonRecordingSpan(h));
}
t.setSpanContext = c;
function u(d) {
    var h;
    return (h = s(d)) === null || h === void 0 ? void 0 : h.spanContext();
}
t.getSpanContext = u;

return t;
}
