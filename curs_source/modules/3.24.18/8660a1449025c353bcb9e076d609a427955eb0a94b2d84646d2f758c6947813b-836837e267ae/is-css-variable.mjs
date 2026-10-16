import { E } from "./tslib.es6.js";
var RYl, PYl, bbv, jAs, ybv;
export { PYl, RYl, bbv, jAs, ybv };
var __wakaru_aFi_initialized = false;
export function aFi() {
if (__wakaru_aFi_initialized) return;
__wakaru_aFi_initialized = true;
E(), RYl = (t)=>(e)=>typeof e == "string" && e.startsWith(t), PYl = RYl("--"), bbv = RYl("var(--"), jAs = (t)=>bbv(t) ? ybv.test(t.split("/*")[0].trim()) : !1, ybv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

}
