import { E } from "./tslib.es6.js";
var __wakaru_nN1_cache;
export function nN1() {
if (__wakaru_nN1_cache) return __wakaru_nN1_cache;
var t = {};
__wakaru_nN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.validateValue = t.validateKey = void 0;
var e = "[_0-9a-z-*/]", n = `[a-z]${e}{0,255}`, i = `[a-z0-9]${e}{0,240}@[a-z]${e}{0,13}`, r = new RegExp(`^(?:${n}|${i})$`), s = /^[ -~]{0,255}[!-~]$/, o = /,|=/;
function a(c) {
    return r.test(c);
}
t.validateKey = a;
function l(c) {
    return s.test(c) && !o.test(c);
}
t.validateValue = l;

return t;
}
