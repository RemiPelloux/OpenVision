import { E } from "./tslib.es6.js";
var mYl;
export { mYl };
var __wakaru_Gm0_initialized = false;
export function Gm0() {
if (__wakaru_Gm0_initialized) return;
__wakaru_Gm0_initialized = true;
E(), mYl = (t, e, n)=>{
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i;
};

}
