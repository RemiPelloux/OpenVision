"use strict";
require.d(exports, {
    N: ()=>a
});
var n = require("./module-84959.js"), s = require("./module-92801.js"), o = require("./module-2788.js"), i = require("./module-84672.js");
function a(e) {
    const t = new Map;
    for (const r of e)t.set(r.requestPath, r);
    return async (e)=>{
        var r, i, a;
        const l = new URL(e.url).pathname, u = t.get(l);
        if (!u) throw new s.T(`RouterHttpClient: no handler registered for ${l}`, n.C.Unimplemented);
        const d = null !== (r = e.signal) && void 0 !== r ? r : (new AbortController).signal, p = await c(d, u({
            body: null !== (i = e.body) && void 0 !== i ? i : (0, o.T$)([]),
            httpVersion: "2.0",
            method: e.method,
            url: e.url,
            header: e.header,
            signal: d
        })), m = null !== (a = p.body) && void 0 !== a ? a : (0, o.T$)([]);
        return {
            body: (0, o.Fs)(m, (e)=>({
                    [Symbol.asyncIterator] () {
                        const t = e[Symbol.asyncIterator](), r = {
                            next: ()=>c(d, t.next())
                        };
                        return void 0 !== t.throw && (r.throw = (e)=>t.throw(e)), void 0 !== t.return && (r.return = (e)=>t.return(e)), r;
                    }
                })),
            header: new Headers(p.header),
            status: p.status,
            trailer: new Headers(p.trailer)
        };
    };
}
function c(e, t) {
    let r;
    const n = new Promise((t, n)=>{
        const s = ()=>n((0, i.xz)(e));
        if (e.aborted) return s();
        e.addEventListener("abort", s), r = ()=>e.removeEventListener("abort", s);
    });
    return Promise.race([
        n,
        t
    ]).finally(r);
}
