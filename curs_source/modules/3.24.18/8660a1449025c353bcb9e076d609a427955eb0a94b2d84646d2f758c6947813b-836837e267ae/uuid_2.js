import { E } from "./tslib.es6.js";
var Ied, xed, cY, Ai;
export { Ai, Ied, cY, xed };
var __wakaru_Xo_initialized = false;
export function Xo() {
if (__wakaru_Xo_initialized) return;
__wakaru_Xo_initialized = true;
"use strict";
E(), Ied = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, xed = "00000000-0000-0000-0000-000000000000", cY = [];
for(let t = 0; t < 256; t++)cY.push(t.toString(16).padStart(2, "0"));
Ai = (function() {
    if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
    const t = new Uint8Array(16);
    return function() {
        crypto.getRandomValues(t), t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128;
        let n = 0, i = "";
        return i += cY[t[n++]], i += cY[t[n++]], i += cY[t[n++]], i += cY[t[n++]], i += "-", i += cY[t[n++]], i += cY[t[n++]], i += "-", i += cY[t[n++]], i += cY[t[n++]], i += "-", i += cY[t[n++]], i += cY[t[n++]], i += "-", i += cY[t[n++]], i += cY[t[n++]], i += cY[t[n++]], i += cY[t[n++]], i += cY[t[n++]], i += cY[t[n++]], i;
    };
})();

}
