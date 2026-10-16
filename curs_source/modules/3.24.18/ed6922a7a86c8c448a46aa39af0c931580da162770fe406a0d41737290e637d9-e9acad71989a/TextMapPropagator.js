import { x } from "./tslib.es6.js";
var __wakaru_mNu_cache;
export function mNu() {
if (__wakaru_mNu_cache) return __wakaru_mNu_cache;
var e = {};
__wakaru_mNu_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.defaultTextMapSetter = e.defaultTextMapGetter = void 0, e.defaultTextMapGetter = {
    get (t, n) {
        if (t != null) return t[n];
    },
    keys (t) {
        return t == null ? [] : Object.keys(t);
    }
}, e.defaultTextMapSetter = {
    set (t, n, i) {
        t != null && (t[n] = i);
    }
};

return e;
}
