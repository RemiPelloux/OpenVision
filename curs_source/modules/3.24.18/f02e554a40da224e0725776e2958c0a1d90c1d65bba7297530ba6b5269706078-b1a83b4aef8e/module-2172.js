"use strict";
require.d(exports, {
    N: ()=>a
});
var n = require("./module-8032.js"), s = require("./module-328.js"), i = require("./module-8205.js"), o = require("./module-9983.js");
function a(t) {
    const e = new Map;
    for (const r of t)e.set(r.requestPath, r);
    return async (t)=>{
        var r, o, a;
        const c = new URL(t.url).pathname, l = e.get(c);
        if (!l) throw new s.T(`RouterHttpClient: no handler registered for ${c}`, n.C.Unimplemented);
        const m = null !== (r = t.signal) && void 0 !== r ? r : (new AbortController).signal, d = await u(m, l({
            body: null !== (o = t.body) && void 0 !== o ? o : (0, i.T$)([]),
            httpVersion: "2.0",
            method: t.method,
            url: t.url,
            header: t.header,
            signal: m
        })), f = null !== (a = d.body) && void 0 !== a ? a : (0, i.T$)([]);
        return {
            body: (0, i.Fs)(f, (t)=>({
                    [Symbol.asyncIterator] () {
                        const e = t[Symbol.asyncIterator](), r = {
                            next: ()=>u(m, e.next())
                        };
                        return void 0 !== e.throw && (r.throw = (t)=>e.throw(t)), void 0 !== e.return && (r.return = (t)=>e.return(t)), r;
                    }
                })),
            header: new Headers(d.header),
            status: d.status,
            trailer: new Headers(d.trailer)
        };
    };
}
function u(t, e) {
    let r;
    const n = new Promise((e, n)=>{
        const s = ()=>n((0, o.xz)(t));
        if (t.aborted) return s();
        t.addEventListener("abort", s), r = ()=>t.removeEventListener("abort", s);
    });
    return Promise.race([
        n,
        e
    ]).finally(r);
}
