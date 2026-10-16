import { hWf } from "./index_173.js";
import { x } from "./tslib.es6.js";
var Nnu, cNs, Onu, lNs, Fnu;
export { Fnu, Nnu, Onu, cNs, lNs };
var __wakaru_uNs_initialized = false;
export function uNs() {
if (__wakaru_uNs_initialized) return;
__wakaru_uNs_initialized = true;
"use strict";
x(), hWf(), Nnu = (e)=>e.trim().toLowerCase(), cNs = (e, t)=>{
    if (e.length !== t.length) return !1;
    for(let n = 0; n < e.length; n++)if (e[n] !== t[n]) return !1;
    return !0;
}, Onu = (e, t)=>e === void 0 || t === void 0 ? e === t : cNs(e, t), lNs = (e, t)=>{
    const n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (const r of n)if (!Object.hasOwn(t, r) || e[r] !== t[r]) return !1;
    return !0;
}, Fnu = (e, t)=>e === t ? !0 : e === void 0 || t === void 0 ? !1 : e.CLIENT_ID === t.CLIENT_ID && e.CLIENT_SECRET === t.CLIENT_SECRET && Onu(e.scopes, t.scopes);

}
