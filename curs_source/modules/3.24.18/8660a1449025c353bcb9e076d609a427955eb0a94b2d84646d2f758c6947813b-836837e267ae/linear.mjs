import { E } from "./tslib.es6.js";
var GYl;
export { GYl };
var __wakaru_Wbv_initialized = false;
export function Wbv() {
if (__wakaru_Wbv_initialized) return;
__wakaru_Wbv_initialized = true;
E(), GYl = (t, e, n = 10)=>{
    let i = "";
    const r = Math.max(Math.round(e / n), 2);
    for(let s = 0; s < r; s++)i += Math.round(t(s / (r - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
};

}
