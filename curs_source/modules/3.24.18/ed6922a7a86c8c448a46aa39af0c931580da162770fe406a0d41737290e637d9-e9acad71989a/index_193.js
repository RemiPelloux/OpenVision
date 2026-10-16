import { Sgv } from "./globalThis.js";
import { gWr, x } from "./tslib.es6.js";
var __wakaru_kgv_cache;
export function kgv() {
if (__wakaru_kgv_cache) return __wakaru_kgv_cache;
var e = {};
__wakaru_kgv_cache = e;
"use strict";
x();
var t = e && e.__exportStar || function(n, i) {
    for(var r in n)r !== "default" && !Object.prototype.hasOwnProperty.call(i, r) && gWr(i, n, r);
};
Object.defineProperty(e, "__esModule", {
    value: !0
}), t(Sgv(), e);

return e;
}
