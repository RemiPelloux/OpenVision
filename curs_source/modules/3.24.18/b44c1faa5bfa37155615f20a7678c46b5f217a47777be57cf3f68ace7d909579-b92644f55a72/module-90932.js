"use strict";
require.d(exports, {
    H: ()=>m,
    s: ()=>p
});
var n = require("./module-36038.js"), s = require("./module-92801.js"), o = require("./module-84959.js"), i = require("./module-6682.js"), a = require("./module-8207.js"), c = function(e) {
    return this instanceof c ? (this.v = e, this) : new c(e);
}, l = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, u);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function i(e, t) {
        s[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
                o.push([
                    e,
                    t,
                    r,
                    n
                ]) > 1 || a(e, t);
            });
        }, t && (n[e] = t(n[e])));
    }
    function a(e, t) {
        try {
            (r = s[e](t)).value instanceof c ? Promise.resolve(r.value.v).then(l, u) : d(o[0][2], r);
        } catch (e) {
            d(o[0][3], e);
        }
        var r;
    }
    function l(e) {
        a("next", e);
    }
    function u(e) {
        a("throw", e);
    }
    function d(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
}, u = function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, r = e[Symbol.asyncIterator];
    return r ? r.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this;
    }, t);
    function n(r) {
        t[r] = e[r] && function(t) {
            return new Promise(function(n, s) {
                (function(e, t, r, n) {
                    Promise.resolve(n).then(function(t) {
                        e({
                            value: t,
                            done: r
                        });
                    }, t);
                })(n, s, (t = e[r](t)).done, t.value);
            });
        };
    }
}, d = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(e) {
        throw e;
    }), n("return"), t[Symbol.iterator] = function() {
        return this;
    }, t;
    function n(n, s) {
        t[n] = e[n] ? function(t) {
            return (r = !r) ? {
                value: c(e[n](t)),
                done: !1
            } : s ? s(t) : t;
        } : s;
    }
};
async function p(e, t, r, n) {
    const s = (0, a.$)(async (r)=>({
            message: (0, i.S)(e.method.O, await e.impl(r.message, Object.assign(Object.assign({}, t), {
                service: r.service,
                method: r.method,
                requestHeader: r.header,
                values: r.contextValues,
                signal: r.signal
            }))),
            stream: !1,
            service: r.service,
            method: r.method,
            header: t.responseHeader,
            trailer: t.responseTrailer
        }), n), { message: o } = await s({
        init: {
            method: t.requestMethod
        },
        message: r,
        url: t.url,
        signal: t.signal,
        service: e.service,
        method: e.method,
        header: t.requestHeader,
        contextValues: t.values,
        stream: !1
    });
    return o;
}
function m(e, t, r) {
    switch(e.kind){
        case n.MethodKind.Unary:
            return function(n) {
                return l(this, arguments, function*() {
                    const l = n[Symbol.asyncIterator](), u = yield c(l.next());
                    if (!0 === u.done) throw new s.T("protocol error: missing input message for unary method", o.C.Unimplemented);
                    const d = (0, a.$)(async (r)=>({
                            message: (0, i.S)(e.method.O, await e.impl(r.message, Object.assign(Object.assign({}, t), {
                                service: r.service,
                                method: r.method,
                                requestHeader: r.header,
                                values: r.contextValues,
                                signal: r.signal
                            }))),
                            stream: !1,
                            service: r.service,
                            method: r.method,
                            header: t.responseHeader,
                            trailer: t.responseTrailer
                        }), r), { message: p, header: m, trailer: f } = yield c(d({
                        init: {
                            method: t.requestMethod
                        },
                        message: u.value,
                        url: t.url,
                        signal: t.signal,
                        service: e.service,
                        method: e.method,
                        header: t.requestHeader,
                        contextValues: t.values,
                        stream: !1
                    }));
                    h(m, t.responseHeader), h(f, t.responseTrailer), yield yield c(p);
                    if (!0 !== (yield c(l.next())).done) throw new s.T("protocol error: received extra input message for unary method", o.C.Unimplemented);
                });
            };
        case n.MethodKind.ServerStreaming:
            return function(n) {
                return l(this, arguments, function*() {
                    const l = n[Symbol.asyncIterator](), p = yield c(l.next());
                    if (!0 === p.done) throw new s.T("protocol error: missing input message for server-streaming method", o.C.Unimplemented);
                    const m = (0, a.$)(async (r)=>({
                            message: (0, i.u)(e.method.O, e.impl(r.message, Object.assign(Object.assign({}, t), {
                                service: r.service,
                                method: r.method,
                                requestHeader: r.header,
                                values: r.contextValues,
                                signal: r.signal
                            }))),
                            stream: !0,
                            service: r.service,
                            method: r.method,
                            header: t.responseHeader,
                            trailer: t.responseTrailer
                        }), r), { message: f, header: g, trailer: y } = yield c(m({
                        init: {
                            method: t.requestMethod
                        },
                        message: p.value,
                        url: t.url,
                        signal: t.signal,
                        service: e.service,
                        method: e.method,
                        header: t.requestHeader,
                        contextValues: t.values,
                        stream: !1
                    }));
                    h(g, t.responseHeader), h(y, t.responseTrailer), yield c((yield* d(u(f))));
                    if (!0 !== (yield c(l.next())).done) throw new s.T("protocol error: received extra input message for server-streaming method", o.C.Unimplemented);
                });
            };
        case n.MethodKind.ClientStreaming:
            return function(n) {
                return l(this, arguments, function*() {
                    const s = (0, a.$)(async (r)=>({
                            message: (0, i.S)(e.method.O, await e.impl(r.message, Object.assign(Object.assign({}, t), {
                                service: r.service,
                                method: r.method,
                                requestHeader: r.header,
                                values: r.contextValues,
                                signal: r.signal
                            }))),
                            stream: !1,
                            service: r.service,
                            method: r.method,
                            header: t.responseHeader,
                            trailer: t.responseTrailer
                        }), r), { message: o, header: l, trailer: u } = yield c(s({
                        init: {
                            method: t.requestMethod
                        },
                        message: n,
                        url: t.url,
                        signal: t.signal,
                        service: e.service,
                        method: e.method,
                        header: t.requestHeader,
                        contextValues: t.values,
                        stream: !0
                    }));
                    h(l, t.responseHeader), h(u, t.responseTrailer), yield yield c(o);
                });
            };
        case n.MethodKind.BiDiStreaming:
            return function(n) {
                return l(this, arguments, function*() {
                    const s = (0, a.$)(async (r)=>({
                            message: (0, i.u)(e.method.O, e.impl(r.message, Object.assign(Object.assign({}, t), {
                                service: r.service,
                                method: r.method,
                                requestHeader: r.header,
                                values: r.contextValues,
                                signal: r.signal
                            }))),
                            stream: !0,
                            service: r.service,
                            method: r.method,
                            header: t.responseHeader,
                            trailer: t.responseTrailer
                        }), r), { message: o, header: l, trailer: p } = yield c(s({
                        init: {
                            method: t.requestMethod
                        },
                        message: n,
                        url: t.url,
                        signal: t.signal,
                        service: e.service,
                        method: e.method,
                        header: t.requestHeader,
                        contextValues: t.values,
                        stream: !0
                    }));
                    h(l, t.responseHeader), h(p, t.responseTrailer), yield c((yield* d(u(o))));
                });
            };
    }
}
function h(e, t) {
    e !== t && (t.forEach((e, r)=>{
        t.delete(r);
    }), e.forEach((e, r)=>{
        t.set(r, e);
    }));
}
