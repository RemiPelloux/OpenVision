"use strict";
require.d(exports, {
    HF: ()=>k,
    Mf: ()=>y,
    OA: ()=>g,
    V5: ()=>x,
    VI: ()=>I,
    b6: ()=>l,
    fU: ()=>f,
    mJ: ()=>w,
    r2: ()=>E,
    uj: ()=>S,
    xd: ()=>T
});
var n = require("./module-30753.js"), s = require("./module-33002.js");
const o = (0, s.cF)(Symbol("otel.span"), void 0), i = (0, s.cF)(Symbol("otel.root_span"), void 0), a = (0, s.cF)(Symbol("otel.root_start_ms"), void 0), c = (0, s.cF)(Symbol("otel.suppress_child_spans"), !1), l = (0, s.cF)(Symbol("otel.inheritable_span_attributes"), {});
let u;
function d(e) {
    return e.name || "anonymous-context";
}
function p(e, t) {
    return !!t && (e.get(c) || (r = d(e), u?.(r) ?? !1));
    var r;
}
function m(e = "context-tracer") {
    return n.uP.getTracer(e);
}
function h(e, t) {
    const r = m(), s = e.get(o);
    if (p(e, s)) return e;
    const c = d(e);
    let u;
    if (s) {
        const e = n.uP.setSpan(n._O.active(), s);
        u = r.startSpan(c, t, e);
    } else u = r.startSpan(c, t);
    const h = e.get(l);
    for(const e in h)u.setAttribute(e, h[e]);
    const f = Date.now();
    let g = e.with(o, u);
    return s || (g = g.with(i, u).with(a, f)), g;
}
function f(e) {
    return e.get(o);
}
function g(e) {
    return e.with(c, !0);
}
function y(e, t, r) {
    const n = e.get(l), s = f(e);
    return s && s.setAttribute(t, r), e.with(l, {
        ...n,
        [t]: r
    });
}
function w(e) {
    try {
        const t = f(e);
        if (!t) return;
        const r = t.spanContext(), n = e.get(c);
        return {
            traceId: r.traceId,
            spanId: r.spanId,
            traceFlags: n ? 0 : r.traceFlags,
            traceState: r.traceState?.toString()
        };
    } catch  {
        return;
    }
}
const v = Symbol.for("anysphere.context.activeOtelSpanAls");
function _() {
    return globalThis[v];
}
function b(e, t) {
    const r = ()=>n._O.with(n.uP.setSpan(n._O.active(), e), t), s = _();
    return void 0 === s ? r() : s.run(e, r);
}
async function S(e, t, r) {
    const n = f(e);
    if (n && p(e, n)) return b(n, ()=>t(e, n));
    const s = h(e, r), o = f(s);
    try {
        const e = await b(o, ()=>t(s, o));
        return o.setStatus({
            code: 1
        }), e;
    } catch (e) {
        const t = function(e) {
            if (e instanceof Error) return e.message;
            if ("string" == typeof e) return e;
            if (null == e) return String(e);
            if ("object" == typeof e) {
                const t = e.message;
                if ("string" == typeof t && t.length > 0) return t;
                try {
                    const t = JSON.stringify(e);
                    if (void 0 !== t && "{}" !== t) return t;
                } catch  {}
            }
            return String(e);
        }(e);
        throw o.recordException(e instanceof Error ? e : new Error(t)), o.setStatus({
            code: 2,
            message: t
        }), e;
    } finally{
        o.end();
    }
}
function k(e, t) {
    try {
        const r = m(), s = f(e);
        if (!s) return;
        const o = n.uP.setSpan(n._O.active(), s), c = r.startSpan(t, void 0, o), u = e.get(l);
        for(const e in u)c.setAttribute(e, u[e]);
        const d = Date.now(), p = e.get(a), h = "number" == typeof p ? d - p : 0, g = `event.${t}`;
        (e.get(i) ?? s).setAttribute(g, h), c.setAttribute(g, h), c.end();
    } catch  {}
}
function x(e, t, r) {
    const i = m(), a = {
        traceId: e.traceId,
        spanId: e.spanId,
        traceFlags: e.traceFlags,
        isRemote: !0
    }, c = n.uP.setSpanContext(n._O.active(), a), l = t || "child.span", u = i.startSpan(l, {
        kind: n.v8.INTERNAL
    }, c), d = r ?? (0, s.q6)();
    return (t ? d.withName(t) : d).with(o, u);
}
class E {
    constructor(e, t, r = !0){
        this.ctx = e, this.span = t, this.shouldEnd = r;
    }
    [Symbol.dispose]() {
        this.shouldEnd && this.span.end();
    }
}
function I(e, t) {
    const r = p(e, f(e)), n = h(e, t), s = f(n);
    return new E(n, s, !r);
}
function T(e, t, r) {
    const n = f(e);
    if (!n || p(e, n)) return;
    const s = f(h(e, t));
    return s.end(r), s;
}
