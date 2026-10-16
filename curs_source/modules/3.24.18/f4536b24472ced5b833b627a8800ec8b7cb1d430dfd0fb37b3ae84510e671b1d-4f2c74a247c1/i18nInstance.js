import { a } from "./business-error.js";
var P1, _1, ta;
export { P1, _1, ta };
var __wakaru_hi_initialized = false;
export function hi() {
if (__wakaru_hi_initialized) return;
__wakaru_hi_initialized = true;
_1 = a((e)=>{
    P1 = e;
}, "setI18n"), ta = a(()=>P1, "getI18n");

}
