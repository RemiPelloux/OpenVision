"use strict";
require.d(exports, {
    HF: ()=>v,
    OA: ()=>g,
    VI: ()=>b,
    b6: ()=>c,
    mJ: ()=>y,
    xd: ()=>_
});
var n = require("./module-30753.js"), o = require("./module-33002.js");
const s = (0, o.cF)(Symbol("otel.span"), void 0), i = (0, o.cF)(Symbol("otel.root_span"), void 0), a = (0, o.cF)(Symbol("otel.root_start_ms"), void 0), l = (0, o.cF)(Symbol("otel.suppress_child_spans"), !1), c = (0, o.cF)(Symbol("otel.inheritable_span_attributes"), {});
let u;
function d(e) {
    return e.name || "anonymous-context";
}
function p(e, t) {
    return !!t && (e.get(l) || (r = d(e), u?.(r) ?? !1));
    var r;
}
function h(e = "context-tracer") {
    return n.uP.getTracer(e);
}
function m(e, t) {
    const r = h(), o = e.get(s);
    if (p(e, o)) return e;
    const l = d(e);
    let u;
    if (o) {
        const e = n.uP.setSpan(n._O.active(), o);
        u = r.startSpan(l, t, e);
    } else u = r.startSpan(l, t);
    const m = e.get(c);
    for(const e in m)u.setAttribute(e, m[e]);
    const f = Date.now();
    let g = e.with(s, u);
    return o || (g = g.with(i, u).with(a, f)), g;
}
function f(e) {
    return e.get(s);
}
function g(e) {
    return e.with(l, !0);
}
function y(e) {
    try {
        const t = f(e);
        if (!t) return;
        const r = t.spanContext(), n = e.get(l);
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
Symbol.for("anysphere.context.activeOtelSpanAls");
function v(e, t) {
    try {
        const r = h(), o = f(e);
        if (!o) return;
        const s = n.uP.setSpan(n._O.active(), o), l = r.startSpan(t, void 0, s), u = e.get(c);
        for(const e in u)l.setAttribute(e, u[e]);
        const d = Date.now(), p = e.get(a), m = "number" == typeof p ? d - p : 0, g = `event.${t}`;
        (e.get(i) ?? o).setAttribute(g, m), l.setAttribute(g, m), l.end();
    } catch  {}
}
class w {
    constructor(e, t, r = !0){
        this.ctx = e, this.span = t, this.shouldEnd = r;
    }
    [Symbol.dispose]() {
        this.shouldEnd && this.span.end();
    }
}
function b(e, t) {
    const r = p(e, f(e)), n = m(e, t), o = f(n);
    return new w(n, o, !r);
}
function _(e, t, r) {
    const n = f(e);
    if (!n || p(e, n)) return;
    const o = f(m(e, t));
    return o.end(r), o;
}
