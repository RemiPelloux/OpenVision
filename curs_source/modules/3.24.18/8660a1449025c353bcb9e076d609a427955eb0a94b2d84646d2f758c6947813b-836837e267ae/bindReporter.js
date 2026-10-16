import { E } from "./tslib.es6.js";
var QVu, zun;
export { QVu, zun };
var __wakaru_AXn_initialized = false;
export function AXn() {
if (__wakaru_AXn_initialized) return;
__wakaru_AXn_initialized = true;
"use strict";
E(), QVu = (t, e)=>t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good", zun = (t, e, n, i)=>{
    let r, s;
    return (o)=>{
        e.value >= 0 && (o || i) && (s = e.value - (r ?? 0), (s || r === void 0) && (r = e.value, e.delta = s, e.rating = QVu(e.value, n), t(e)));
    };
};

}
