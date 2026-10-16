import { x } from "./tslib.es6.js";
var GSt, rHi, tLn, sHi, rfd, sfd, ofd;
export { GSt, ofd, rHi, rfd, sHi, sfd, tLn };
var __wakaru_VSt_initialized = false;
export function VSt() {
if (__wakaru_VSt_initialized) return;
__wakaru_VSt_initialized = true;
"use strict";
x(), GSt = ()=>typeof window < "u" ? window : null, rHi = ()=>GSt()?.document ?? null, tLn = ()=>{
    if (rHi() !== null) return !1;
    const e = typeof process < "u" && process.versions != null && process.versions.node != null;
    return typeof EdgeRuntime == "string" || e;
}, sHi = (e, t)=>{
    const n = GSt();
    typeof n?.addEventListener == "function" && n.addEventListener(e, t);
}, rfd = (e, t)=>{
    const n = rHi();
    typeof n?.addEventListener == "function" && n.addEventListener(e, t);
}, sfd = ()=>{
    try {
        return GSt()?.location.href.split(/[?#]/)[0];
    } catch  {
        return;
    }
}, ofd = ()=>{
    const e = GSt();
    return e && "onpagehide" in e ? "pagehide" : "beforeunload";
};

}
