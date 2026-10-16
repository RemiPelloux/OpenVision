import { h } from "./tslib.es6.js";
var Pb, Pp, Ob;
export { Ob, Pb, Pp };
var __wakaru_Cb_initialized = false;
export function Cb() {
if (__wakaru_Cb_initialized) return;
__wakaru_Cb_initialized = true;
"use strict";
h(), Pb = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0")), Pp = new Uint8Array(1024), Ob = Pp.length;

}
