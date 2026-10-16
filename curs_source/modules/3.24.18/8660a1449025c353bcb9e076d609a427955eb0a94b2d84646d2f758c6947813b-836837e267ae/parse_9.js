import { mn1 } from "./index_179.js";
import { E } from "./tslib.es6.js";
var zpp, SEa, Vpp, kEa, Kpp;
export { Kpp, SEa, Vpp, kEa, zpp };
var __wakaru_wEa_initialized = false;
export function wEa() {
if (__wakaru_wEa_initialized) return;
__wakaru_wEa_initialized = true;
"use strict";
E(), mn1(), zpp = (t)=>t.trim().toLowerCase(), SEa = (t, e)=>{
    if (t.length !== e.length) return !1;
    for(let n = 0; n < t.length; n++)if (t[n] !== e[n]) return !1;
    return !0;
}, Vpp = (t, e)=>t === void 0 || e === void 0 ? t === e : SEa(t, e), kEa = (t, e)=>{
    const n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (const r of n)if (!Object.hasOwn(e, r) || t[r] !== e[r]) return !1;
    return !0;
}, Kpp = (t, e)=>t === e ? !0 : t === void 0 || e === void 0 ? !1 : t.CLIENT_ID === e.CLIENT_ID && t.CLIENT_SECRET === e.CLIENT_SECRET && Vpp(t.scopes, e.scopes);

}
