import { i } from "./plugin-brand-icon.js";
import * as lui from "./react-runtime/react/esm-index-production.js";
function eg(r, e) {
    const a = lui.useRef(kTt);
    return a.current === kTt && (a.current = r(e)), a;
}
var kTt;
export { eg, kTt };
var __wakaru_C0_initialized = false;
export function C0() {
if (__wakaru_C0_initialized) return;
__wakaru_C0_initialized = true;
"use client";
kTt = {}, i(eg, "useRefWithInit");

}
