import { E } from "./tslib.es6.js";
var __wakaru_J31_cache;
export function J31() {
if (__wakaru_J31_cache) return __wakaru_J31_cache;
var t = {};
__wakaru_J31_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.SamplingDecision = void 0;
var e;
(function(n) {
    n[n.NOT_RECORD = 0] = "NOT_RECORD", n[n.RECORD = 1] = "RECORD", n[n.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
})(e = t.SamplingDecision || (t.SamplingDecision = {}));

return t;
}
