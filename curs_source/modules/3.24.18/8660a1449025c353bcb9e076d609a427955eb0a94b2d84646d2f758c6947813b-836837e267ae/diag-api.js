import { BCn } from "./diag.js";
import { E } from "./tslib.es6.js";
var __wakaru_oN1_cache;
export function oN1() {
if (__wakaru_oN1_cache) return __wakaru_oN1_cache;
var t = {};
__wakaru_oN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.diag = void 0;
var e = BCn();
t.diag = e.DiagAPI.instance();

return t;
}
