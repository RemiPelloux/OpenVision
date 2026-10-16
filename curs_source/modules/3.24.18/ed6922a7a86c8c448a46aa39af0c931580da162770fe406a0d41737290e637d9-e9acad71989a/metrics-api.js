import { Wgv } from "./metrics.js";
import { x } from "./tslib.es6.js";
var __wakaru_Ggv_cache;
export function Ggv() {
if (__wakaru_Ggv_cache) return __wakaru_Ggv_cache;
var e = {};
__wakaru_Ggv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.metrics = void 0;
var t = Wgv();
e.metrics = t.MetricsAPI.getInstance();

return e;
}
