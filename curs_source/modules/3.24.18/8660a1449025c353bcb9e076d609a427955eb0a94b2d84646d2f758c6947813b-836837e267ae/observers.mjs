import { E } from "./tslib.es6.js";
var TRs, ERs, akv, lkv;
export { ERs, TRs, akv, lkv };
var __wakaru_Cb0_initialized = false;
export function Cb0() {
if (__wakaru_Cb0_initialized) return;
__wakaru_Cb0_initialized = true;
E(), TRs = new WeakMap, ERs = new WeakMap, akv = (t)=>{
    const e = TRs.get(t.target);
    e && e(t);
}, lkv = (t)=>{
    t.forEach(akv);
};

}
