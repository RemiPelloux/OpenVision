import { vNu } from "./NoopTracer.js";
import { x } from "./tslib.es6.js";
var __wakaru_Mgv_cache;
export function Mgv() {
if (__wakaru_Mgv_cache) return __wakaru_Mgv_cache;
var e = {};
__wakaru_Mgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.NoopTracerProvider = void 0;
var t = vNu(), n = class {
    getTracer(i, r, s) {
        return new t.NoopTracer;
    }
};
e.NoopTracerProvider = n;

return e;
}
