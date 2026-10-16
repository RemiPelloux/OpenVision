"use strict";
require.d(exports, {
    Zj: ()=>f,
    iU: ()=>p
});
var n = require("./module-98875.js"), s = require("./module-84934.js"), o = require("./module-46421.js"), i = require("./module-30753.js");
const a = (0, s.n)(void 0, {
    description: "anysphere.callerContext"
});
function c(e) {
    return null !== e && "object" == typeof e && Symbol.asyncIterator in e;
}
function l(e) {
    return null !== e && "object" == typeof e && "then" in e && "function" == typeof e.then;
}
function u(e, t, r) {
    return {
        [Symbol.asyncIterator] () {
            const n = e[Symbol.asyncIterator]();
            let s = !1;
            const o = (e)=>{
                s || (s = !0, e ? (t?.recordException(e instanceof Error ? e : new Error(String(e))), t?.setStatus({
                    code: i.sY.ERROR,
                    message: e instanceof Error ? e.message : "Stream failed"
                })) : t?.setStatus({
                    code: i.sY.OK
                }), t?.end(), r?.());
            };
            return {
                async next () {
                    try {
                        const e = await n.next();
                        return e.done && o(), e;
                    } catch (e) {
                        throw o(e), e;
                    }
                },
                return: async (e)=>(o(), n.return ? n.return(e) : {
                        done: !0,
                        value: void 0
                    }),
                async throw (e) {
                    if (o(e), n.throw) return n.throw(e);
                    throw e;
                }
            };
        }
    };
}
function d(e) {
    try {
        const t = e.get("traceparent") || e.get("backend-traceparent");
        if (!t) return;
        const r = function(e) {
            const t = e.split("-");
            if (4 !== t.length) return null;
            const [r, n, s, o] = t;
            if ("00" !== r) return null;
            if (32 !== n.length || 16 !== s.length || 2 !== o.length) return null;
            const i = parseInt(o, 16);
            return Number.isNaN(i) ? null : {
                traceId: n,
                spanId: s,
                traceFlags: i
            };
        }(t);
        if (!r) return;
        return {
            traceId: r.traceId,
            spanId: r.spanId,
            traceFlags: r.traceFlags,
            isRemote: !0
        };
    } catch  {
        return;
    }
}
function p(e, t) {
    const r = d(t);
    return void 0 !== r && (0, i.YA)(r) ? e.with(n.Rm, i.uP.wrapSpanContext({
        ...r,
        isRemote: !1
    })) : e;
}
function m(...e) {
    const t = new Headers;
    for (const r of e)r && (r instanceof Headers ? r.forEach((e, r)=>{
        t.set(r, e);
    }) : Object.entries(r).forEach(([e, r])=>{
        t.set(e, r);
    }));
    return t;
}
function h(e, t) {
    const { injectTraceHeaders: r = !0, extractHeaders: o } = t;
    return new Proxy(e, {
        get (e, d) {
            const p = e[d];
            return "function" != typeof p ? p : (h, f, g = {})=>{
                const y = (0, n.fR)(h.withName(`rpc.${String(d)}`), {
                    kind: i.v8.CLIENT,
                    attributes: {
                        "rpc.method": String(d),
                        "rpc.system": "connect"
                    }
                }), w = (0, n.fU)(y);
                let v;
                try {
                    let d;
                    if (r && (d = function(e) {
                        const t = new Headers;
                        try {
                            const r = (0, n.fU)(e), s = r?.spanContext?.();
                            if (s?.traceId && s.spanId) {
                                const e = s.traceFlags ?? 0, r = `00-${s.traceId}-${s.spanId}-${e.toString(16).padStart(2, "0")}`;
                                if (t.set("traceparent", r), t.set("backend-traceparent", r), s.traceState) {
                                    const e = "function" == typeof s.traceState.serialize ? s.traceState.serialize() : String(s.traceState);
                                    t.set("tracestate", e);
                                }
                            }
                        } catch  {}
                        return t;
                    }(y)), o) {
                        const e = o(y);
                        e && (d = m(d, e));
                    }
                    const h = m(g.headers, d), { signal: _, cleanup: A } = !0 === t.enableAbortSignal ? function(e, t) {
                        if (void 0 === t || t === e) return {
                            signal: e
                        };
                        const r = new AbortController, n = ()=>{
                            r.abort(e.reason);
                        }, s = ()=>{
                            r.abort(t.reason);
                        };
                        e.addEventListener("abort", n, {
                            once: !0
                        }), t.addEventListener("abort", s, {
                            once: !0
                        }), e.aborted ? n() : t.aborted && s();
                        const o = ()=>{
                            e.removeEventListener("abort", n), t.removeEventListener("abort", s);
                        };
                        return {
                            signal: r.signal,
                            cleanup: o
                        };
                    }(y.signal, g.signal) : {
                        signal: g.signal,
                        cleanup: void 0
                    };
                    v = A;
                    const S = (g.contextValues ?? (0, s.k)()).set(a, y), b = {
                        ...g,
                        headers: h,
                        signal: _,
                        contextValues: S
                    }, E = p.call(e, f, b);
                    return c(E) ? u(E, w, v) : l(E) ? E.then((e)=>c(e) ? u(e, w, v) : (w?.setStatus({
                            code: i.sY.OK
                        }), w?.end(), v?.(), e)).catch((e)=>{
                        throw w?.recordException(e instanceof Error ? e : new Error(String(e))), w?.setStatus({
                            code: i.sY.ERROR,
                            message: e instanceof Error ? e.message : "RPC call failed"
                        }), w?.end(), v?.(), e;
                    }) : (w?.setStatus({
                        code: i.sY.OK
                    }), w?.end(), v?.(), E);
                } catch (e) {
                    throw w?.recordException(e instanceof Error ? e : new Error(String(e))), w?.setStatus({
                        code: i.sY.ERROR,
                        message: e instanceof Error ? e.message : "RPC call failed"
                    }), w?.end(), v?.(), e;
                }
            };
        }
    });
}
function f(e, t, r = {}) {
    return h((0, o.UU)(e, t), r);
}
