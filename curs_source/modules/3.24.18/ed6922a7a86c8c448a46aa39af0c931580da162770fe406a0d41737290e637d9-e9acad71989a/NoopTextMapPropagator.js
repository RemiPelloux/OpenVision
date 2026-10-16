import { x } from "./tslib.es6.js";
var __wakaru_Vgv_cache;
export function Vgv() {
if (__wakaru_Vgv_cache) return __wakaru_Vgv_cache;
var e = {};
__wakaru_Vgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.NoopTextMapPropagator = void 0;
var t = class {
    inject(n, i) {}
    extract(n, i) {
        return n;
    }
    fields() {
        return [];
    }
};
e.NoopTextMapPropagator = t;

return e;
}
