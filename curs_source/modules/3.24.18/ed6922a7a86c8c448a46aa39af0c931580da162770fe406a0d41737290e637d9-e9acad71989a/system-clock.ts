import { x } from "./tslib.es6.js";
var Crr;
export { Crr };
var __wakaru_Qm__initialized = false;
export function Qm_() {
if (__wakaru_Qm__initialized) return;
__wakaru_Qm__initialized = true;
"use strict";
x(), Crr = {
    now: ()=>Date.now(),
    setTimer: (e, t)=>{
        const n = setTimeout(e, t);
        return ()=>clearTimeout(n);
    }
};

}
