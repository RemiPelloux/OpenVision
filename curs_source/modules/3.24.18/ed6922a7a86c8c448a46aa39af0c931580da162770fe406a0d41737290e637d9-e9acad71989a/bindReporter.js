import { x } from "./tslib.es6.js";
var DTc, HLt;
export { DTc, HLt };
var __wakaru_lpn_initialized = false;
export function lpn() {
if (__wakaru_lpn_initialized) return;
__wakaru_lpn_initialized = true;
"use strict";
x(), DTc = (e, t)=>e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good", HLt = (e, t, n, i)=>{
    let r, s;
    return (o)=>{
        t.value >= 0 && (o || i) && (s = t.value - (r ?? 0), (s || r === void 0) && (r = t.value, t.delta = s, t.rating = DTc(t.value, n), e(t)));
    };
};

}
