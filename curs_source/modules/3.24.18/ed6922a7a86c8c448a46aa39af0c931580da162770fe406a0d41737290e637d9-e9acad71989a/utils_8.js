import { hjr } from "./constants_7.js";
import { sge } from "./gen-ai-attributes.js";
import { W9 } from "./semanticAttributes.js";
import { x } from "./tslib.es6.js";
var fAe, Fie;
export { Fie, fAe };
var __wakaru_rcg_initialized = false;
export function rcg() {
if (__wakaru_rcg_initialized) return;
__wakaru_rcg_initialized = true;
"use strict";
x(), W9(), sge(), hjr(), fAe = (e, t, n)=>{
    n != null && (e[t] = n);
}, Fie = (e, t, n)=>{
    const i = Number(n);
    Number.isNaN(i) || (e[t] = i);
};

}
