import { Bgs } from "./fault-facet.ts";
import { E } from "./tslib.es6.js";
var Ntf, Ltf, Otf, Ftf, Btf, Ugs, Utf;
export { Btf, Ftf, Ltf, Ntf, Otf, Ugs, Utf };
var __wakaru_jtf_initialized = false;
export function jtf() {
if (__wakaru_jtf_initialized) return;
__wakaru_jtf_initialized = true;
"use strict";
E(), Bgs(), Ntf = [
    "not_configured",
    "unsupported_model",
    "rejected",
    "unreachable",
    "malformed_response"
], Ltf = [
    "429",
    "401",
    "403",
    "503"
], Otf = "voice_mint_refusal", Ftf = "voice_mint_limit", Btf = "daily", Ugs = "voice_mint_", Utf = (()=>{
    const t = new Map;
    for (const e of Ntf){
        t.set(`${Ugs}${e}`, {
            reason: e,
            http: "absent"
        });
        for (const n of Ltf)t.set(`${Ugs}${e}_${n}`, {
            reason: e,
            http: n
        });
    }
    return t;
})();

}
