import { UMu, ghv, hhv, mhv, phv } from "./De_3.js";
import { x } from "./tslib.es6.js";
var rMn, $Mu, sMn, HMu, WMu, GMu, Rzs, Dzs, Mzs;
export { $Mu, Dzs, GMu, HMu, Mzs, Rzs, WMu, rMn, sMn };
var __wakaru_fhv_initialized = false;
export function fhv() {
if (__wakaru_fhv_initialized) return;
__wakaru_fhv_initialized = true;
"use strict";
x(), rMn = "R_", $Mu = "MDEw", sMn = [
    146,
    0
], HMu = /^010:Repository([0-9]+)$/, WMu = BigInt("0xffffffffffffffff"), GMu = 64, Rzs = new Map([
    [
        204,
        1
    ],
    [
        205,
        2
    ],
    [
        206,
        4
    ],
    [
        207,
        8
    ]
]), Dzs = {
    decode: (e)=>{
        const t = UMu(e), n = t === void 0 ? null : HMu.exec(t);
        return n === null ? void 0 : BigInt(n[1]);
    },
    encode: (e)=>btoa(`010:Repository${e}`)
}, Mzs = {
    decode: (e)=>{
        const t = hhv(e.slice(rMn.length));
        if (!(t === void 0 || t.charCodeAt(0) !== sMn[0] || t.charCodeAt(1) !== sMn[1])) return ghv(t.slice(sMn.length));
    },
    encode: (e)=>{
        const t = String.fromCharCode(...sMn) + mhv(e);
        return `${rMn}${phv(t)}`;
    }
};

}
