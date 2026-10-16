import { E } from "./tslib.es6.js";
var nup, iup;
export { iup, nup };
var __wakaru_WZS_initialized = false;
export function WZS() {
if (__wakaru_WZS_initialized) return;
__wakaru_WZS_initialized = true;
E(), nup = (t, e)=>Math.abs(t - e) < 1.01, iup = (t, e, n)=>{
    let i;
    return function(...r) {
        t.clearTimeout(i), i = t.setTimeout(()=>e.apply(this, r), n);
    };
};

}
