import { x8i } from "./context.js";
import { I8i } from "./context_2.js";
import { x } from "./tslib.es6.js";
var __wakaru_jgv_cache;
export function jgv() {
if (__wakaru_jgv_cache) return __wakaru_jgv_cache;
var e = {};
__wakaru_jgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.deleteBaggage = e.setBaggage = e.getActiveBaggage = e.getBaggage = void 0;
var t = I8i(), n = x8i(), i = (0, n.createContextKey)("OpenTelemetry Baggage Key");
function r(c) {
    return c.getValue(i) || void 0;
}
e.getBaggage = r;
function s() {
    return r(t.ContextAPI.getInstance().active());
}
e.getActiveBaggage = s;
function o(c, l) {
    return c.setValue(i, l);
}
e.setBaggage = o;
function a(c) {
    return c.deleteValue(i);
}
e.deleteBaggage = a;

return e;
}
