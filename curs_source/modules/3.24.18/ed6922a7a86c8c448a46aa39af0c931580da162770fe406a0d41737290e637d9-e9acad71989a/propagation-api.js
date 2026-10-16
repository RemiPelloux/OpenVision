import { qgv } from "./propagation.js";
import { x } from "./tslib.es6.js";
var __wakaru_zgv_cache;
export function zgv() {
if (__wakaru_zgv_cache) return __wakaru_zgv_cache;
var e = {};
__wakaru_zgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.propagation = void 0;
var t = qgv();
e.propagation = t.PropagationAPI.getInstance();

return e;
}
