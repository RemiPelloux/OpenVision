import { Nde, QR } from "./Log_2.js";
import { E } from "./tslib.es6.js";
var i_t, $To, BQu, T6t, HTo, WTo, GTo, zdn;
export { $To, BQu, GTo, HTo, T6t, WTo, i_t, zdn };
var __wakaru_r_t_initialized = false;
export function r_t() {
if (__wakaru_r_t_initialized) return;
__wakaru_r_t_initialized = true;
"use strict";
E(), Nde(), i_t = ()=>{
    try {
        return typeof __STATSIG__ < "u" ? __STATSIG__ : zdn;
    } catch  {
        return zdn;
    }
}, $To = (t)=>i_t()[t], BQu = (t)=>{
    const e = i_t();
    return t ? e.instances && e.instances[t] : (e.instances && Object.keys(e.instances).length > 1 && QR.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key."), e.firstInstance);
}, T6t = "__STATSIG__", HTo = typeof window < "u" ? window : {}, WTo = typeof global < "u" ? global : {}, GTo = typeof globalThis < "u" ? globalThis : {}, zdn = HTo[T6t] ?? WTo[T6t] ?? GTo[T6t] ?? {
    instance: BQu
}, HTo[T6t] = zdn, WTo[T6t] = zdn, GTo[T6t] = zdn;

}
