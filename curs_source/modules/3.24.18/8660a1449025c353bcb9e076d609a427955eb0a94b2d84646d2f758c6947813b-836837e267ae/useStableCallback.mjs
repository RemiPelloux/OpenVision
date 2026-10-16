import { SLl, h3n } from "./safeReact.mjs";
import { E } from "./tslib.es6.js";
import { jxt } from "./useRefWithInit.mjs";
var TSs, xAf;
export { TSs, xAf };
var __wakaru_sce_initialized = false;
export function sce() {
if (__wakaru_sce_initialized) return;
__wakaru_sce_initialized = true;
"use client";
E(), SLl(), jxt(), TSs = h3n.useInsertionEffect, xAf = TSs && TSs !== h3n.useLayoutEffect ? TSs : (t)=>t();

}
