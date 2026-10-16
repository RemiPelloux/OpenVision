import { x } from "./tslib.es6.js";
var __wakaru_Pgv_cache;
export function Pgv() {
if (__wakaru_Pgv_cache) return __wakaru_Pgv_cache;
var e = {};
__wakaru_Pgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.SamplingDecision = void 0;
var t;
(function(n) {
    n[n.NOT_RECORD = 0] = "NOT_RECORD", n[n.RECORD = 1] = "RECORD", n[n.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
})(t = e.SamplingDecision || (e.SamplingDecision = {}));

return e;
}
