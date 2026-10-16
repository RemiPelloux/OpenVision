"use strict";
require.d(exports, {
    _9: ()=>a,
    rv: ()=>p,
    x$: ()=>d
});
var n = require("./module-17392.js"), s = require("./module-65716.js"), o = require("./module-77095.js"), i = require("./module-89117.js");
const a = 3e5, c = 1e4, l = 5e3, u = 6e4;
function d(e) {
    const t = Date.now() + a, r = new AbortController, n = new Set;
    let o, d = {
        kind: "waiting",
        baseUrl: e.baseUrl
    };
    const p = (e)=>{
        d = e;
        for (const e of [
            ...n
        ])e();
        n.clear();
    }, m = async ()=>("waiting" !== d.kind || r.signal.aborted || (o ??= (async ()=>{
            try {
                const t = await e.hydrate(c);
                r.signal.aborted || p({
                    kind: "active",
                    ...t
                });
            } catch (e) {
                if (r.signal.aborted) return;
                e instanceof i.ng ? Date.now() >= t ? p({
                    kind: "gave-up",
                    detail: `${e.message} Reload the window to try again.`
                }) : d = {
                    kind: "waiting",
                    baseUrl: e.baseUrl
                } : p({
                    kind: "failed",
                    detail: e instanceof Error ? e.message : String(e)
                });
            }
        })().finally(()=>{
            o = void 0;
        }), await o), d);
    return (async ()=>{
        let e = l;
        for(; "waiting" === d.kind && !r.signal.aborted;)await (0, s.st)(Math.min(e, Math.max(0, t - Date.now())), r.signal), await m(), e = Math.min(2 * e, u);
    })(), {
        state: ()=>d,
        onDidSettle: (e)=>(n.add(e), {
                dispose: ()=>{
                    n.delete(e);
                }
            }),
        retryNow: m,
        dispose: ()=>{
            r.abort(), n.clear();
        }
    };
}
function p(e, t, r) {
    let n;
    return async (s)=>{
        const i = await e.retryNow();
        switch(i.kind){
            case "active":
                return n ??= (0, o.Ti)(i.sessionProvider, i.catalog, t, r), n(s);
            case "waiting":
                throw m(s.attemptRequestId, `Could not reach your private inference gateway at ${i.baseUrl}. Check your network or VPN, then try again.`, !0);
            case "gave-up":
                throw m(s.attemptRequestId, i.detail, !1);
            case "failed":
                return (0, o.q1)(i.detail)(s);
        }
    };
}
function m(e, t, r) {
    return new n.SK("Private inference gateway unreachable", {
        requestId: e,
        displayInfo: {
            title: "Private inference gateway unreachable",
            detail: t,
            isRetryable: r
        }
    });
}
