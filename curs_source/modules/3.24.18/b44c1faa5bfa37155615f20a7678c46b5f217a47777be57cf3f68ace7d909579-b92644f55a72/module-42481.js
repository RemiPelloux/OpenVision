"use strict";
require.d(exports, {
    Pb: ()=>c,
    Zj: ()=>i,
    by: ()=>a
});
var n = require("./module-36038.js"), s = require("./module-92801.js"), o = require("./module-84959.js");
function i(e) {
    let t;
    return t = "object" == typeof e && "getType" in e ? e.toBinary() : "string" == typeof e ? (new TextEncoder).encode(e) : e instanceof Uint8Array ? e : new Uint8Array(e), n.protoBase64.enc(t).replace(/=+$/, "");
}
function a(e, t, r) {
    try {
        const s = n.protoBase64.dec(e);
        return t ? t.fromBinary(s, r) : s;
    } catch (e) {
        throw s.T.from(e, o.C.DataLoss);
    }
}
function c(...e) {
    const t = new Headers;
    for (const r of e)r.forEach((e, r)=>{
        t.append(r, e);
    });
    return t;
}
