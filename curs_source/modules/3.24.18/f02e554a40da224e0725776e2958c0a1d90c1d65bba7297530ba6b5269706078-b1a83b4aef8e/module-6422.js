"use strict";
require.d(exports, {
    Pb: ()=>u,
    Zj: ()=>o,
    by: ()=>a
});
var n = require("./module-6038.js"), s = require("./module-328.js"), i = require("./module-8032.js");
function o(t) {
    let e;
    return e = "object" == typeof t && "getType" in t ? t.toBinary() : "string" == typeof t ? (new TextEncoder).encode(t) : t instanceof Uint8Array ? t : new Uint8Array(t), n.protoBase64.enc(e).replace(/=+$/, "");
}
function a(t, e, r) {
    try {
        const s = n.protoBase64.dec(t);
        return e ? e.fromBinary(s, r) : s;
    } catch (t) {
        throw s.T.from(t, i.C.DataLoss);
    }
}
function u(...t) {
    const e = new Headers;
    for (const r of t)r.forEach((t, r)=>{
        e.append(r, t);
    });
    return e;
}
