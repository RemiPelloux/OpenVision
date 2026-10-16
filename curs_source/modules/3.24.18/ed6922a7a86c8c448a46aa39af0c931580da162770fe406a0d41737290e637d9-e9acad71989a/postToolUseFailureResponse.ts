import { Zro } from "./A3u.js";
import { wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var bMd;
export { bMd };
var __wakaru_qkv_initialized = false;
export function qkv() {
if (__wakaru_qkv_initialized) return;
__wakaru_qkv_initialized = true;
"use strict";
x(), wX(), VU(), bMd = (e)=>{
    const t = R6(e);
    if (!t.isValid) return t;
    const n = [];
    return Zro(e.additional_context, "additional_context", n), wN(n.length === 0, n);
};

}
