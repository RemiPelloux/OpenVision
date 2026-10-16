import { Qwo } from "./constants_7.js";
import { qxe } from "./gen-ai-attributes.js";
import { QH } from "./semanticAttributes.js";
import { E } from "./tslib.es6.js";
var Jje, gve;
export { Jje, gve };
var __wakaru_Gfy_initialized = false;
export function Gfy() {
if (__wakaru_Gfy_initialized) return;
__wakaru_Gfy_initialized = true;
"use strict";
E(), QH(), qxe(), Qwo(), Jje = (t, e, n)=>{
    n != null && (t[e] = n);
}, gve = (t, e, n)=>{
    const i = Number(n);
    Number.isNaN(i) || (t[e] = i);
};

}
