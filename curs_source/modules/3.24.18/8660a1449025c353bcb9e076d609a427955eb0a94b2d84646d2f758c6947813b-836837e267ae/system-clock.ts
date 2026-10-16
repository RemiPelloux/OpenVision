import { E } from "./tslib.es6.js";
var ofs;
export { ofs };
var __wakaru_p8k_initialized = false;
export function p8k() {
if (__wakaru_p8k_initialized) return;
__wakaru_p8k_initialized = true;
"use strict";
E(), ofs = {
    now: ()=>Date.now(),
    setTimer: (t, e)=>{
        const n = setTimeout(t, e);
        return ()=>clearTimeout(n);
    }
};

}
