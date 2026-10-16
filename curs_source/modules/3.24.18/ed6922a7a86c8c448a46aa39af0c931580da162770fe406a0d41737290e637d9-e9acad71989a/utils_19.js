import { x } from "./tslib.es6.js";
var fJl, vJl;
export { fJl, vJl };
var __wakaru_RUf_initialized = false;
export function RUf() {
if (__wakaru_RUf_initialized) return;
__wakaru_RUf_initialized = true;
x(), fJl = (e, t)=>Math.abs(e - t) < 1.01, vJl = (e, t, n)=>{
    let i;
    return function(...r) {
        e.clearTimeout(i), i = e.setTimeout(()=>t.apply(this, r), n);
    };
};

}
