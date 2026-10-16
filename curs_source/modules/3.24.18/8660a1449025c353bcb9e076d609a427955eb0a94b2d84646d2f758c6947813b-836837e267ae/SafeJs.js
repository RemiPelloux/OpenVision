import { E } from "./tslib.es6.js";
var E6t, cgr, xZn, ugr, GQu, qQu, zQu;
export { E6t, GQu, cgr, qQu, ugr, xZn, zQu };
var __wakaru_I6t_initialized = false;
export function I6t() {
if (__wakaru_I6t_initialized) return;
__wakaru_I6t_initialized = true;
"use strict";
E(), E6t = ()=>typeof window < "u" ? window : null, cgr = ()=>E6t()?.document ?? null, xZn = ()=>{
    if (cgr() !== null) return !1;
    const t = typeof process < "u" && process.versions != null && process.versions.node != null;
    return typeof EdgeRuntime == "string" || t;
}, ugr = (t, e)=>{
    const n = E6t();
    typeof n?.addEventListener == "function" && n.addEventListener(t, e);
}, GQu = (t, e)=>{
    const n = cgr();
    typeof n?.addEventListener == "function" && n.addEventListener(t, e);
}, qQu = ()=>{
    try {
        return E6t()?.location.href.split(/[?#]/)[0];
    } catch  {
        return;
    }
}, zQu = ()=>{
    const t = E6t();
    return t && "onpagehide" in t ? "pagehide" : "beforeunload";
};

}
