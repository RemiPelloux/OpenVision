import { Zro } from "./A3u.js";
import { wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var yMd;
export { yMd };
var __wakaru_zkv_initialized = false;
export function zkv() {
if (__wakaru_zkv_initialized) return;
__wakaru_zkv_initialized = true;
"use strict";
x(), wX(), VU(), yMd = (e)=>{
    const t = [], n = R6(e);
    return n.isValid ? (Zro(e.additional_context, "additional_context", t), wN(t.length === 0, t)) : n;
};

}
