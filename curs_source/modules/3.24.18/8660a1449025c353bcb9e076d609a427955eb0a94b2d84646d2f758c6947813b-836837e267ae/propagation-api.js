import { hN1 } from "./propagation.js";
import { E } from "./tslib.es6.js";
var __wakaru_pN1_cache;
export function pN1() {
if (__wakaru_pN1_cache) return __wakaru_pN1_cache;
var t = {};
__wakaru_pN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.propagation = void 0;
var e = hN1();
t.propagation = e.PropagationAPI.getInstance();

return t;
}
