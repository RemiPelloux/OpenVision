import { x } from "./tslib.es6.js";
var __wakaru_Ogv_cache;
export function Ogv() {
if (__wakaru_Ogv_cache) return __wakaru_Ogv_cache;
var e = {};
__wakaru_Ogv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.validateValue = e.validateKey = void 0;
var t = "[_0-9a-z-*/]", n = `[a-z]${t}{0,255}`, i = `[a-z0-9]${t}{0,240}@[a-z]${t}{0,13}`, r = new RegExp(`^(?:${n}|${i})$`), s = /^[ -~]{0,255}[!-~]$/, o = /,|=/;
function a(l) {
    return r.test(l);
}
e.validateKey = a;
function c(l) {
    return s.test(l) && !o.test(l);
}
e.validateValue = c;

return e;
}
