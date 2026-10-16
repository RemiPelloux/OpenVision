import { mN1 } from "./trace_2.js";
import { E } from "./tslib.es6.js";
var __wakaru_gN1_cache;
export function gN1() {
if (__wakaru_gN1_cache) return __wakaru_gN1_cache;
var t = {};
__wakaru_gN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.trace = void 0;
var e = mN1();
t.trace = e.TraceAPI.getInstance();

return t;
}
