import { h } from "./tslib.es6.js";
var K3, er, vt;
export { K3, er, vt };
var __wakaru_Wn_initialized = false;
export function Wn() {
if (__wakaru_Wn_initialized) return;
__wakaru_Wn_initialized = true;
"use strict";
h(), K3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, er = [];
for(let e = 0; e < 256; e++)er.push(e.toString(16).padStart(2, "0"));
vt = (function() {
    if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
    const e = new Uint8Array(16);
    return function() {
        crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
        let n = 0, r = "";
        return r += er[e[n++]], r += er[e[n++]], r += er[e[n++]], r += er[e[n++]], r += "-", r += er[e[n++]], r += er[e[n++]], r += "-", r += er[e[n++]], r += er[e[n++]], r += "-", r += er[e[n++]], r += er[e[n++]], r += "-", r += er[e[n++]], r += er[e[n++]], r += er[e[n++]], r += er[e[n++]], r += er[e[n++]], r += er[e[n++]], r;
    };
})();

}
