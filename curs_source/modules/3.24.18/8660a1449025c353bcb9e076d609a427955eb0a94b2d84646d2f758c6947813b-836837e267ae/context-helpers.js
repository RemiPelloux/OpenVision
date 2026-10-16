import { Zqr } from "./context.js";
import { Qqr } from "./context_2.js";
import { E } from "./tslib.es6.js";
var __wakaru_dN1_cache;
export function dN1() {
if (__wakaru_dN1_cache) return __wakaru_dN1_cache;
var t = {};
__wakaru_dN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
var e = Qqr(), n = Zqr(), i = (0, n.createContextKey)("OpenTelemetry Baggage Key");
function r(l) {
    return l.getValue(i) || void 0;
}
t.getBaggage = r;
function s() {
    return r(e.ContextAPI.getInstance().active());
}
t.getActiveBaggage = s;
function o(l, c) {
    return l.setValue(i, c);
}
t.setBaggage = o;
function a(l) {
    return l.deleteValue(i);
}
t.deleteBaggage = a;

return t;
}
