import { lN1 } from "./metrics.js";
import { E } from "./tslib.es6.js";
var __wakaru_cN1_cache;
export function cN1() {
if (__wakaru_cN1_cache) return __wakaru_cN1_cache;
var t = {};
__wakaru_cN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.metrics = void 0;
var e = lN1();
t.metrics = e.MetricsAPI.getInstance();

return t;
}
