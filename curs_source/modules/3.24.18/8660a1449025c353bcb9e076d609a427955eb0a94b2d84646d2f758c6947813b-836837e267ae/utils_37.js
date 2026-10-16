import { E } from "./tslib.es6.js";
var J2v, ePv;
export { J2v, ePv };
var __wakaru_yM0_initialized = false;
export function yM0() {
if (__wakaru_yM0_initialized) return;
__wakaru_yM0_initialized = true;
E(), J2v = (t, e)=>Math.abs(t - e) < 1.01, ePv = (t, e, n)=>{
    let i;
    return function(...r) {
        t.clearTimeout(i), i = t.setTimeout(()=>e.apply(this, r), n);
    };
};

}
