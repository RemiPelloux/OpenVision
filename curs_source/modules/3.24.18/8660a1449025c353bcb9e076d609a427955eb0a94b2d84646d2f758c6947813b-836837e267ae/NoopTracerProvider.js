import { $6p } from "./NoopTracer.js";
import { E } from "./tslib.es6.js";
var __wakaru_Q31_cache;
export function Q31() {
if (__wakaru_Q31_cache) return __wakaru_Q31_cache;
var t = {};
__wakaru_Q31_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.NoopTracerProvider = void 0;
var e = $6p(), n = class {
    getTracer(i, r, s) {
        return new e.NoopTracer;
    }
};
t.NoopTracerProvider = n;

return t;
}
