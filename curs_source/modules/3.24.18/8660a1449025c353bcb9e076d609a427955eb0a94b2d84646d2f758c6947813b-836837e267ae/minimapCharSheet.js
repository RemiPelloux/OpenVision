import { E } from "./tslib.es6.js";
var l$d, c$d;
export { c$d, l$d };
var __wakaru_u$d_initialized = false;
export function u$d() {
if (__wakaru_u$d_initialized) return;
__wakaru_u$d_initialized = true;
"use strict";
E(), l$d = (()=>{
    const t = [];
    for(let e = 32; e <= 126; e++)t.push(e);
    return t.push(65533), t;
})(), c$d = (t, e)=>(t -= 32, t < 0 || t > 96 ? e <= 2 ? (t + 96) % 96 : 95 : t);

}
