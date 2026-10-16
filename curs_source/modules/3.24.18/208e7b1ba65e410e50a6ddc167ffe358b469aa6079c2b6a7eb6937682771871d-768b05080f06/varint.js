import { h } from "./tslib.es6.js";
var wh, RM;
export { RM, wh };
var __wakaru_hj_initialized = false;
export function hj() {
if (__wakaru_hj_initialized) return;
__wakaru_hj_initialized = true;
"use strict";
h(), wh = 4294967296, RM = (e)=>{
    const t = String(e);
    return "0000000".slice(t.length) + t;
};

}
