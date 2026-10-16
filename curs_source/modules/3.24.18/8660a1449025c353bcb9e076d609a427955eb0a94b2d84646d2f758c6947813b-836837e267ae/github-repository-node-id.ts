import { K21, V21, bOp, q21, z21 } from "./ipa.js";
import { E } from "./tslib.es6.js";
var rSi, yOp, sSi, SOp, kOp, wOp, ULa, jLa, $La;
export { $La, SOp, ULa, jLa, kOp, rSi, sSi, wOp, yOp };
var __wakaru_Y21_initialized = false;
export function Y21() {
if (__wakaru_Y21_initialized) return;
__wakaru_Y21_initialized = true;
"use strict";
E(), rSi = "R_", yOp = "MDEw", sSi = [
    146,
    0
], SOp = /^010:Repository([0-9]+)$/, kOp = BigInt("0xffffffffffffffff"), wOp = 64, ULa = new Map([
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
]), jLa = {
    decode: (t)=>{
        const e = bOp(t), n = e === void 0 ? null : SOp.exec(e);
        return n === null ? void 0 : BigInt(n[1]);
    },
    encode: (t)=>btoa(`010:Repository${t}`)
}, $La = {
    decode: (t)=>{
        const e = q21(t.slice(rSi.length));
        if (!(e === void 0 || e.charCodeAt(0) !== sSi[0] || e.charCodeAt(1) !== sSi[1])) return K21(e.slice(sSi.length));
    },
    encode: (t)=>{
        const e = String.fromCharCode(...sSi) + V21(t);
        return `${rSi}${z21(e)}`;
    }
};

}
