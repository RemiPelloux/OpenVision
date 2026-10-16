import { E } from "./tslib.es6.js";
var oOp;
export { oOp };
var __wakaru_w21_initialized = false;
export function w21() {
if (__wakaru_w21_initialized) return;
__wakaru_w21_initialized = true;
"use strict";
E(), oOp = {
    now: ()=>Date.now(),
    delay: (t, e)=>new Promise((n)=>{
            if (e?.aborted === !0) {
                n();
                return;
            }
            const i = ()=>{
                clearTimeout(r), n();
            }, r = setTimeout(()=>{
                e?.removeEventListener("abort", i), n();
            }, t);
            e?.addEventListener("abort", i, {
                once: !0
            });
        })
};

}
