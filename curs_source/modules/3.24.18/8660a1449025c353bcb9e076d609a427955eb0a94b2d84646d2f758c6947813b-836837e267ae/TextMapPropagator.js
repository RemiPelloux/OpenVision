import { E } from "./tslib.es6.js";
var __wakaru_B6p_cache;
export function B6p() {
if (__wakaru_B6p_cache) return __wakaru_B6p_cache;
var t = {};
__wakaru_B6p_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.defaultTextMapSetter = t.defaultTextMapGetter = void 0, t.defaultTextMapGetter = {
    get (e, n) {
        if (e != null) return e[n];
    },
    keys (e) {
        return e == null ? [] : Object.keys(e);
    }
}, t.defaultTextMapSetter = {
    set (e, n, i) {
        e != null && (e[n] = i);
    }
};

return t;
}
