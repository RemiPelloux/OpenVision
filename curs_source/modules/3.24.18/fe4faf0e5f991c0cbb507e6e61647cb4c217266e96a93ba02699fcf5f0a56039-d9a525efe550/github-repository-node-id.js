import { i } from "./plugin-brand-icon.js";
function Onr(r) {
    return r.startsWith(sfe) ? r : znr(r) ?? r;
}
function znr(r) {
    if (r.length > Vnr) return;
    const e = r.startsWith(sfe) ? [
        AIt,
        EIt
    ] : r.startsWith(Wnr) ? [
        EIt,
        AIt
    ] : void 0;
    if (e === void 0) return;
    const [a, s] = e, l = a.decode(r);
    if (!(l === void 0 || l <= BigInt(0) || l > Znr || a.encode(l) !== r)) return s.encode(l);
}
function CIt(r) {
    try {
        return atob(r);
    } catch  {
        return;
    }
}
function Bnr(r) {
    return CIt(r.replaceAll("-", "+").replaceAll("_", "/"));
}
function qnr(r) {
    return btoa(r).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
function Unr(r) {
    if (r < BigInt(128)) return String.fromCharCode(Number(r));
    for (const [e, a] of SIt)if (r < BigInt(1) << BigInt(a * 8)) {
        let s = String.fromCharCode(e);
        for(let l = a - 1; l >= 0; l -= 1)s += String.fromCharCode(Number(r >> BigInt(l * 8) & BigInt(255)));
        return s;
    }
    throw new RangeError(`database id ${r} exceeds MessagePack uint 64`);
}
function Gnr(r) {
    if (r.length === 0) return;
    const e = r.charCodeAt(0);
    if (e < 128) return r.length === 1 ? BigInt(e) : void 0;
    const a = SIt.get(e);
    if (a === void 0 || r.length !== 1 + a) return;
    let s = BigInt(0);
    for(let l = 1; l <= a; l += 1)s = s << BigInt(8) | BigInt(r.charCodeAt(l));
    return s;
}
var sfe, Wnr, cfe, Hnr, Znr, Vnr, SIt, EIt, AIt;
export { AIt, Bnr, CIt, EIt, Gnr, Hnr, Onr, SIt, Unr, Vnr, Wnr, Znr, cfe, qnr, sfe, znr };
var __wakaru_$ki_initialized = false;
export function $ki() {
if (__wakaru_$ki_initialized) return;
__wakaru_$ki_initialized = true;
"use strict";
sfe = "R_", Wnr = "MDEw", cfe = [
    146,
    0
], Hnr = /^010:Repository([0-9]+)$/, Znr = BigInt("0xffffffffffffffff"), Vnr = 64, SIt = new Map([
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
]), EIt = {
    decode: i((r)=>{
        const e = CIt(r), a = e === void 0 ? null : Hnr.exec(e);
        return a === null ? void 0 : BigInt(a[1]);
    }, "decode"),
    encode: i((r)=>btoa(`010:Repository${r}`), "encode")
}, AIt = {
    decode: i((r)=>{
        const e = Bnr(r.slice(sfe.length));
        if (!(e === void 0 || e.charCodeAt(0) !== cfe[0] || e.charCodeAt(1) !== cfe[1])) return Gnr(e.slice(cfe.length));
    }, "decode"),
    encode: i((r)=>{
        const e = String.fromCharCode(...cfe) + Unr(r);
        return `${sfe}${qnr(e)}`;
    }, "encode")
}, i(Onr, "nextGithubRepositoryNodeId"), i(znr, "otherRepositoryNodeIdSpelling"), i(CIt, "decodeBase64Latin1"), i(Bnr, "decodeBase64UrlLatin1"), i(qnr, "encodeBase64UrlLatin1"), i(Unr, "messagePackUnsignedInteger"), i(Gnr, "readMessagePackUnsignedInteger");

}
