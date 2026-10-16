import { E } from "./tslib.es6.js";
var __wakaru_uN1_cache;
export function uN1() {
if (__wakaru_uN1_cache) return __wakaru_uN1_cache;
var t = {};
__wakaru_uN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.NoopTextMapPropagator = void 0;
var e = class {
    inject(n, i) {}
    extract(n, i) {
        return n;
    }
    fields() {
        return [];
    }
};
t.NoopTextMapPropagator = e;

return t;
}
