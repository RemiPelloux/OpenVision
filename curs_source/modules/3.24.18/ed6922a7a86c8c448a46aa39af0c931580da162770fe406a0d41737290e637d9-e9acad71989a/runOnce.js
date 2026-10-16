import { x } from "./tslib.es6.js";
var kpi;
export { kpi };
var __wakaru_wjr_initialized = false;
export function wjr() {
if (__wakaru_wjr_initialized) return;
__wakaru_wjr_initialized = true;
"use strict";
x(), kpi = (e)=>{
    let t = !1;
    return ()=>{
        t || (e(), t = !0);
    };
};

}
