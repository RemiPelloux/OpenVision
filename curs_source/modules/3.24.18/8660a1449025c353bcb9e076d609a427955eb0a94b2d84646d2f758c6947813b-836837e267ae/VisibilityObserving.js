import { GQu, I6t, ugr, zQu } from "./SafeJs.js";
import { E } from "./tslib.es6.js";
var fgr, vgr, iEo, rEo, _gr, PZn, tJu, MZn;
export { MZn, PZn, _gr, fgr, iEo, rEo, tJu, vgr };
var __wakaru_sEo_initialized = false;
export function sEo() {
if (__wakaru_sEo_initialized) return;
__wakaru_sEo_initialized = true;
"use strict";
E(), I6t(), fgr = "foreground", vgr = "background", iEo = [], rEo = fgr, _gr = !1, PZn = ()=>_gr, tJu = (t)=>{
    iEo.unshift(t);
}, MZn = (t)=>{
    t !== rEo && (rEo = t, iEo.forEach((e)=>e(t)));
}, ugr("focus", ()=>{
    _gr = !1, MZn(fgr);
}), ugr("blur", ()=>MZn(vgr)), GQu("visibilitychange", ()=>{
    MZn(document.visibilityState === "visible" ? fgr : vgr);
}), ugr(zQu(), ()=>{
    _gr = !0, MZn(vgr);
});

}
