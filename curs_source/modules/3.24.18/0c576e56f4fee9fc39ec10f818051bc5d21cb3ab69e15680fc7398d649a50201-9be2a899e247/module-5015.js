"use strict";
require.d(exports, {
    Ez: ()=>i,
    Q2: ()=>a,
    SA: ()=>c
});
var n = require("./module-1771.js");
const o = 3e5, s = new Map;
async function i(e, t = fetch) {
    if (void 0 === (0, n.sr)(e)) return;
    const r = new URL(e), i = `${r.origin}/.well-known/oauth-protected-resource${r.pathname.replace(/\/+$/, "")}`, a = s.get(i);
    if (void 0 !== a && a.expiresAtMs > Date.now()) return a.metadata;
    let c;
    try {
        const e = await t(i);
        if (!e.ok) return;
        c = (0, n.vI)(await e.json());
    } catch  {
        return;
    }
    return s.set(i, {
        metadata: c,
        expiresAtMs: Date.now() + o
    }), c;
}
async function a(e) {
    const t = await i(e.serverUrl, e.fetchImpl);
    return (0, n.OY)({
        loopbackIpv4: !0 === t?.loopbackIpv4 || (0, n.HY)(e.serverUrl, e.ipv4Hosts),
        redirectUrl: e.redirectUrl
    });
}
function c(e, t) {
    return void 0 === e || void 0 === (0, n.sr)(e) ? n.U4 : async (r, o)=>{
        const s = await i(e, t);
        if (!0 !== s?.omitResourceIndicator) return (0, n.U4)(r, o);
    };
}
