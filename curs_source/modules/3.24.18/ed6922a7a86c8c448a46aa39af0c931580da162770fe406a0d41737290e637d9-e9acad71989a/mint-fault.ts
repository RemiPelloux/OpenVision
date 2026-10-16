import { rrr } from "./fault-facet.ts";
import { x } from "./tslib.es6.js";
var y6h, S6h, k6h, w6h, C6h, srr, T6h;
export { C6h, S6h, T6h, k6h, srr, w6h, y6h };
var __wakaru_E6h_initialized = false;
export function E6h() {
if (__wakaru_E6h_initialized) return;
__wakaru_E6h_initialized = true;
"use strict";
x(), rrr(), y6h = [
    "not_configured",
    "unsupported_model",
    "rejected",
    "unreachable",
    "malformed_response"
], S6h = [
    "429",
    "401",
    "403",
    "503"
], k6h = "voice_mint_refusal", w6h = "voice_mint_limit", C6h = "daily", srr = "voice_mint_", T6h = (()=>{
    const e = new Map;
    for (const t of y6h){
        e.set(`${srr}${t}`, {
            reason: t,
            http: "absent"
        });
        for (const n of S6h)e.set(`${srr}${t}_${n}`, {
            reason: t,
            http: n
        });
    }
    return e;
})();

}
