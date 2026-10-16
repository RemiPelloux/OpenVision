import { x } from "./tslib.es6.js";
var Tde, nkt, wN;
export { Tde, nkt, wN };
var __wakaru_wX_initialized = false;
export function wX() {
if (__wakaru_wX_initialized) return;
__wakaru_wX_initialized = true;
"use strict";
x(), Tde = (e)=>typeof e == "string", nkt = (e)=>e !== null && typeof e == "object" && !Array.isArray(e), wN = (e, t = [])=>({
        isValid: e,
        errors: t
    });

}
