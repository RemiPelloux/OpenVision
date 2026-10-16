import { E } from "./tslib.es6.js";
var dCe, oGt, k6;
export { dCe, k6, oGt };
var __wakaru_Gae_initialized = false;
export function Gae() {
if (__wakaru_Gae_initialized) return;
__wakaru_Gae_initialized = true;
"use strict";
E(), dCe = (t)=>typeof t == "string", oGt = (t)=>t !== null && typeof t == "object" && !Array.isArray(t), k6 = (t, e = [])=>({
        isValid: t,
        errors: e
    });

}
