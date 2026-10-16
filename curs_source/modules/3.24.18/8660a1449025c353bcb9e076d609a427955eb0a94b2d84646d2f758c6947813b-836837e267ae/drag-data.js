import { E } from "./tslib.es6.js";
var xph, Aph, tMr, nMr, Rph, Pph;
export { Aph, Pph, Rph, nMr, tMr, xph };
var __wakaru_XSt_initialized = false;
export function XSt() {
if (__wakaru_XSt_initialized) return;
__wakaru_XSt_initialized = true;
"use strict";
E(), xph = Object.defineProperty, Aph = (t, e, n)=>e in t ? xph(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, tMr = (t, e, n)=>Aph(t, typeof e != "symbol" ? e + "" : e, n), nMr = (t)=>t !== null && typeof t == "object" && !Array.isArray(t), Rph = {
    _zod: {
        output: {}
    },
    safeParse: (t)=>nMr(t) ? {
            success: !0
        } : {
            success: !1,
            error: new TypeError("drag payload must be an object")
        }
}, Pph = {
    boolean: (t)=>typeof t == "boolean",
    number: (t)=>typeof t == "number" && !Number.isNaN(t),
    record: (t)=>nMr(t),
    string: (t)=>typeof t == "string"
};

}
