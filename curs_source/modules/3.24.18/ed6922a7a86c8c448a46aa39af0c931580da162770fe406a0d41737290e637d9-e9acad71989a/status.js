import { x } from "./tslib.es6.js";
var __wakaru_Ngv_cache;
export function Ngv() {
if (__wakaru_Ngv_cache) return __wakaru_Ngv_cache;
var e = {};
__wakaru_Ngv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.SpanStatusCode = void 0;
var t;
(function(n) {
    n[n.UNSET = 0] = "UNSET", n[n.OK = 1] = "OK", n[n.ERROR = 2] = "ERROR";
})(t = e.SpanStatusCode || (e.SpanStatusCode = {}));

return e;
}
