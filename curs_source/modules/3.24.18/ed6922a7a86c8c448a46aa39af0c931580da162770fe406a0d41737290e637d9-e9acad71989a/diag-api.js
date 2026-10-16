import { M$t } from "./diag.js";
import { x } from "./tslib.es6.js";
var __wakaru_$gv_cache;
export function $gv() {
if (__wakaru_$gv_cache) return __wakaru_$gv_cache;
var e = {};
__wakaru_$gv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.diag = void 0;
var t = M$t();
e.diag = t.DiagAPI.instance();

return e;
}
