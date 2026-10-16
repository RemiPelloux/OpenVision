import { x } from "./tslib.es6.js";
var _2c, b2c, O7, zn;
export { O7, _2c, b2c, zn };
var __wakaru_Js_initialized = false;
export function Js() {
if (__wakaru_Js_initialized) return;
__wakaru_Js_initialized = true;
"use strict";
x(), _2c = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, b2c = "00000000-0000-0000-0000-000000000000", O7 = [];
for(let e = 0; e < 256; e++)O7.push(e.toString(16).padStart(2, "0"));
zn = (function() {
    if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
    const e = new Uint8Array(16);
    return function() {
        crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
        let n = 0, i = "";
        return i += O7[e[n++]], i += O7[e[n++]], i += O7[e[n++]], i += O7[e[n++]], i += "-", i += O7[e[n++]], i += O7[e[n++]], i += "-", i += O7[e[n++]], i += O7[e[n++]], i += "-", i += O7[e[n++]], i += O7[e[n++]], i += "-", i += O7[e[n++]], i += O7[e[n++]], i += O7[e[n++]], i += O7[e[n++]], i += O7[e[n++]], i += O7[e[n++]], i;
    };
})();

}
