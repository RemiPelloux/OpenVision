import { VSt, ofd, rfd, sHi } from "./SafeJs.js";
import { x } from "./tslib.es6.js";
var dHi, hHi, Eto, xto, pHi, rLn, gfd, sLn;
export { Eto, dHi, gfd, hHi, pHi, rLn, sLn, xto };
var __wakaru_Ito_initialized = false;
export function Ito() {
if (__wakaru_Ito_initialized) return;
__wakaru_Ito_initialized = true;
"use strict";
x(), VSt(), dHi = "foreground", hHi = "background", Eto = [], xto = dHi, pHi = !1, rLn = ()=>pHi, gfd = (e)=>{
    Eto.unshift(e);
}, sLn = (e)=>{
    e !== xto && (xto = e, Eto.forEach((t)=>t(e)));
}, sHi("focus", ()=>{
    pHi = !1, sLn(dHi);
}), sHi("blur", ()=>sLn(hHi)), rfd("visibilitychange", ()=>{
    sLn(document.visibilityState === "visible" ? dHi : hHi);
}), sHi(ofd(), ()=>{
    pHi = !0, sLn(hHi);
});

}
