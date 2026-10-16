import { x } from "./tslib.es6.js";
var __wakaru_gNu_cache;
export function gNu() {
if (__wakaru_gNu_cache) return __wakaru_gNu_cache;
var e = {};
__wakaru_gNu_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.TraceFlags = void 0;
var t;
(function(n) {
    n[n.NONE = 0] = "NONE", n[n.SAMPLED = 1] = "SAMPLED";
})(t = e.TraceFlags || (e.TraceFlags = {}));

return e;
}
