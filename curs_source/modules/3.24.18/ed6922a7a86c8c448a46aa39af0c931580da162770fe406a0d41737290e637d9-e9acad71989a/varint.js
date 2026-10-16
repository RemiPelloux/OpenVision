import { x } from "./tslib.es6.js";
var S_n, nss;
export { S_n, nss };
var __wakaru_tGc_initialized = false;
export function tGc() {
if (__wakaru_tGc_initialized) return;
__wakaru_tGc_initialized = true;
"use strict";
x(), S_n = 4294967296, nss = (e)=>{
    const t = String(e);
    return "0000000".slice(t.length) + t;
};

}
