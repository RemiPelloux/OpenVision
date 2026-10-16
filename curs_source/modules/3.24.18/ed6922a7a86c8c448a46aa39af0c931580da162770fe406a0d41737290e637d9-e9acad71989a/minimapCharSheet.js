import { x } from "./tslib.es6.js";
var K9c, Y9c;
export { K9c, Y9c };
var __wakaru_X9c_initialized = false;
export function X9c() {
if (__wakaru_X9c_initialized) return;
__wakaru_X9c_initialized = true;
"use strict";
x(), K9c = (()=>{
    const e = [];
    for(let t = 32; t <= 126; t++)e.push(t);
    return e.push(65533), e;
})(), Y9c = (e, t)=>(e -= 32, e < 0 || e > 96 ? t <= 2 ? (e + 96) % 96 : 95 : e);

}
