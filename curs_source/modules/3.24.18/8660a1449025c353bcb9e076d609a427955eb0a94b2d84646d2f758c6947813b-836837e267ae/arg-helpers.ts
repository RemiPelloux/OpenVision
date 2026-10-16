import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var EMs, B3v;
export { B3v, EMs };
var __wakaru_bic_initialized = false;
export function bic() {
if (__wakaru_bic_initialized) return;
__wakaru_bic_initialized = true;
"use strict";
E(), iv(), EMs = ze.lazy(()=>ze.union([
        ze.string(),
        ze.number(),
        ze.boolean(),
        ze.null(),
        ze.array(EMs),
        ze.record(ze.string(), EMs)
    ])), B3v = ze.preprocess((t)=>{
    if (t === void 0) return null;
    try {
        const e = JSON.stringify(t);
        return e === void 0 ? String(t) : JSON.parse(e);
    } catch  {
        return String(t);
    }
}, EMs.catch(null));

}
