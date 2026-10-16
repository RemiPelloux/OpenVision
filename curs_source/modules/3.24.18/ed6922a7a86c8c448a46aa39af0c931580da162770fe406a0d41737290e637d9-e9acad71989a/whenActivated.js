import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
var hpn;
export { hpn };
var __wakaru_Cpi_initialized = false;
export function Cpi() {
if (__wakaru_Cpi_initialized) return;
__wakaru_Cpi_initialized = true;
"use strict";
x(), fK(), hpn = (e)=>{
    by.document?.prerendering ? addEventListener("prerenderingchange", ()=>e(), !0) : e();
};

}
