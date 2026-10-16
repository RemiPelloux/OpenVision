import { $E, Pee } from "./Log_3.js";
import { x } from "./tslib.es6.js";
var xJe, uto, Qgd, WSt, dto, hto, pto, mHt;
export { Qgd, WSt, dto, hto, mHt, pto, uto, xJe };
var __wakaru_IJe_initialized = false;
export function IJe() {
if (__wakaru_IJe_initialized) return;
__wakaru_IJe_initialized = true;
"use strict";
x(), Pee(), xJe = ()=>{
    try {
        return typeof __STATSIG__ < "u" ? __STATSIG__ : mHt;
    } catch  {
        return mHt;
    }
}, uto = (e)=>xJe()[e], Qgd = (e)=>{
    const t = xJe();
    return e ? t.instances && t.instances[e] : (t.instances && Object.keys(t.instances).length > 1 && $E.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key."), t.firstInstance);
}, WSt = "__STATSIG__", dto = typeof window < "u" ? window : {}, hto = typeof global < "u" ? global : {}, pto = typeof globalThis < "u" ? globalThis : {}, mHt = dto[WSt] ?? hto[WSt] ?? pto[WSt] ?? {
    instance: Qgd
}, dto[WSt] = mHt, hto[WSt] = mHt, pto[WSt] = mHt;

}
