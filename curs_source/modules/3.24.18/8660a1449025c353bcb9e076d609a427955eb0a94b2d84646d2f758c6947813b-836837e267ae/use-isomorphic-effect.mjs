import { Am0, V_v } from "./is-browser.mjs";
import { E } from "./tslib.es6.js";
import { useEffect as Pm0 } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as Rm0 } from "./react-runtime/react/esm-index-production.js";
var cYl;
export { cYl };
var __wakaru_K_v_initialized = false;
export function K_v() {
if (__wakaru_K_v_initialized) return;
__wakaru_K_v_initialized = true;
"use client";
E(), Am0(), cYl = V_v ? Rm0 : Pm0;

}
