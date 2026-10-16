import { x } from "./tslib.es6.js";
var ddl, hdl, VTi, jTi, pdl, mdl;
export { VTi, ddl, hdl, jTi, mdl, pdl };
var __wakaru_Ukn_initialized = false;
export function Ukn() {
if (__wakaru_Ukn_initialized) return;
__wakaru_Ukn_initialized = true;
"use strict";
x(), ddl = Object.defineProperty, hdl = (e, t, n)=>t in e ? ddl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, VTi = (e, t, n)=>hdl(e, typeof t != "symbol" ? t + "" : t, n), jTi = (e)=>e !== null && typeof e == "object" && !Array.isArray(e), pdl = {
    _zod: {
        output: {}
    },
    safeParse: (e)=>jTi(e) ? {
            success: !0
        } : {
            success: !1,
            error: new TypeError("drag payload must be an object")
        }
}, mdl = {
    boolean: (e)=>typeof e == "boolean",
    number: (e)=>typeof e == "number" && !Number.isNaN(e),
    record: (e)=>jTi(e),
    string: (e)=>typeof e == "string"
};

}
