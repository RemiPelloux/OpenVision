import { i } from "./plugin-brand-icon.js";
import { useLayoutEffect as bui } from "./react-runtime/react/esm-index-production.js";
import { c as gui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as yui } from "./react-runtime/react/esm-index-production.js";
function t3(r) {
    const e = gui(3), a = yui(r);
    let s, l;
    return e[0] !== r ? (s = i(()=>{
        a.current = r;
    }, "t0"), l = [
        r
    ], e[0] = r, e[1] = s, e[2] = l) : (s = e[1], l = e[2]), bui(s, l), a;
}
export { t3 };
var __wakaru_Rme_initialized = false;
export function Rme() {
if (__wakaru_Rme_initialized) return;
__wakaru_Rme_initialized = true;
"use strict";
i(t3, "useLatestRef");

}
