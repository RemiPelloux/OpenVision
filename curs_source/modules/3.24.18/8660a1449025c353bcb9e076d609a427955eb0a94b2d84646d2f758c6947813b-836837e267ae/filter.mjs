import { DYl } from "./float-regex.mjs";
import { $De, Uut } from "./index_13.mjs";
import { Nf0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
var aSv, lSv, cRs;
export { aSv, cRs, lSv };
var __wakaru_cSv_initialized = false;
export function cSv() {
if (__wakaru_cSv_initialized) return;
__wakaru_cSv_initialized = true;
E(), Uut(), DYl(), aSv = new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
]), lSv = /\b([a-z-]*)\(.*?\)/gu, cRs = {
    ...$De,
    getAnimatableNone: (t)=>{
        const e = t.match(lSv);
        return e ? e.map(Nf0).join(" ") : t;
    }
};

}
