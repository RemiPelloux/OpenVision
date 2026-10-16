import { Bfh, Ffh, Ofh, _Zy, bZy, fZy, gZy, hZy, mZy, pZy, vZy } from "./LYd.js";
import { cR } from "./index_68.js";
import { E } from "./tslib.es6.js";
var Ufh, Cra, Tra, Era, jfh, Ira, xra, fWe, dFe, s1t;
export { Cra, Era, Ira, Tra, Ufh, dFe, fWe, jfh, s1t, xra };
var __wakaru_yZy_initialized = false;
export function yZy() {
if (__wakaru_yZy_initialized) return;
__wakaru_yZy_initialized = true;
for(E(), cR(), Ufh = {
    tokenize: gZy,
    partial: !0
}, Cra = {
    tokenize: fZy,
    partial: !0
}, Tra = {
    tokenize: vZy,
    partial: !0
}, Era = {
    tokenize: _Zy,
    partial: !0
}, jfh = {
    tokenize: bZy,
    partial: !0
}, Ira = {
    name: "wwwAutolink",
    tokenize: pZy,
    previous: Ofh
}, xra = {
    name: "protocolAutolink",
    tokenize: mZy,
    previous: Ffh
}, fWe = {
    name: "emailAutolink",
    tokenize: hZy,
    previous: Bfh
}, dFe = {}, s1t = 48; s1t < 123;)dFe[s1t] = fWe, s1t++, s1t === 58 ? s1t = 65 : s1t === 91 && (s1t = 97);
dFe[43] = fWe, dFe[45] = fWe, dFe[46] = fWe, dFe[95] = fWe, dFe[72] = [
    fWe,
    xra
], dFe[104] = [
    fWe,
    xra
], dFe[87] = [
    fWe,
    Ira
], dFe[119] = [
    fWe,
    Ira
];

}
