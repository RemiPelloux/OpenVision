"use strict";
require.d(exports, {
    H: ()=>f,
    s: ()=>d
});
var n = require("./module-6038.js"), s = require("./module-328.js"), i = require("./module-8032.js"), o = require("./module-1097.js"), a = require("./module-6962.js"), u = function(t) {
    return this instanceof u ? (this.v = t, this) : new u(t);
}, c = function(t, e, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(t, e || []), i = [];
    return n = {}, o("next"), o("throw"), o("return", function(t) {
        return function(e) {
            return Promise.resolve(e).then(t, l);
        };
    }), n[Symbol.asyncIterator] = function() {
        return this;
    }, n;
    function o(t, e) {
        s[t] && (n[t] = function(e) {
            return new Promise(function(r, n) {
                i.push([
                    t,
                    e,
                    r,
                    n
                ]) > 1 || a(t, e);
            });
        }, e && (n[t] = e(n[t])));
    }
    function a(t, e) {
        try {
            (r = s[t](e)).value instanceof u ? Promise.resolve(r.value.v).then(c, l) : m(i[0][2], r);
        } catch (t) {
            m(i[0][3], t);
        }
        var r;
    }
    function c(t) {
        a("next", t);
    }
    function l(t) {
        a("throw", t);
    }
    function m(t, e) {
        t(e), i.shift(), i.length && a(i[0][0], i[0][1]);
    }
}, l = function(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e, r = t[Symbol.asyncIterator];
    return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
    }, e);
    function n(r) {
        e[r] = t[r] && function(e) {
            return new Promise(function(n, s) {
                (function(t, e, r, n) {
                    Promise.resolve(n).then(function(e) {
                        t({
                            value: e,
                            done: r
                        });
                    }, e);
                })(n, s, (e = t[r](e)).done, e.value);
            });
        };
    }
}, m = function(t) {
    var e, r;
    return e = {}, n("next"), n("throw", function(t) {
        throw t;
    }), n("return"), e[Symbol.iterator] = function() {
        return this;
    }, e;
    function n(n, s) {
        e[n] = t[n] ? function(e) {
            return (r = !r) ? {
                value: u(t[n](e)),
                done: !1
            } : s ? s(e) : e;
        } : s;
    }
};
async function d(t, e, r, n) {
    const s = (0, a.$)(async (r)=>({
            message: (0, o.S)(t.method.O, await t.impl(r.message, Object.assign(Object.assign({}, e), {
                service: r.service,
                method: r.method,
                requestHeader: r.header,
                values: r.contextValues,
                signal: r.signal
            }))),
            stream: !1,
            service: r.service,
            method: r.method,
            header: e.responseHeader,
            trailer: e.responseTrailer
        }), n), { message: i } = await s({
        init: {
            method: e.requestMethod
        },
        message: r,
        url: e.url,
        signal: e.signal,
        service: t.service,
        method: t.method,
        header: e.requestHeader,
        contextValues: e.values,
        stream: !1
    });
    return i;
}
function f(t, e, r) {
    switch(t.kind){
        case n.MethodKind.Unary:
            return function(n) {
                return c(this, arguments, function*() {
                    const c = n[Symbol.asyncIterator](), l = yield u(c.next());
                    if (!0 === l.done) throw new s.T("protocol error: missing input message for unary method", i.C.Unimplemented);
                    const m = (0, a.$)(async (r)=>({
                            message: (0, o.S)(t.method.O, await t.impl(r.message, Object.assign(Object.assign({}, e), {
                                service: r.service,
                                method: r.method,
                                requestHeader: r.header,
                                values: r.contextValues,
                                signal: r.signal
                            }))),
                            stream: !1,
                            service: r.service,
                            method: r.method,
                            header: e.responseHeader,
                            trailer: e.responseTrailer
                        }), r), { message: d, header: f, trailer: h } = yield u(m({
                        init: {
                            method: e.requestMethod
                        },
                        message: l.value,
                        url: e.url,
                        signal: e.signal,
                        service: t.service,
                        method: t.method,
                        header: e.requestHeader,
                        contextValues: e.values,
                        stream: !1
                    }));
                    p(f, e.responseHeader), p(h, e.responseTrailer), yield yield u(d);
                    if (!0 !== (yield u(c.next())).done) throw new s.T("protocol error: received extra input message for unary method", i.C.Unimplemented);
                });
            };
        case n.MethodKind.ServerStreaming:
            return function(n) {
                return c(this, arguments, function*() {
                    const c = n[Symbol.asyncIterator](), d = yield u(c.next());
                    if (!0 === d.done) throw new s.T("protocol error: missing input message for server-streaming method", i.C.Unimplemented);
                    const f = (0, a.$)(async (r)=>({
                            message: (0, o.u)(t.method.O, t.impl(r.message, Object.assign(Object.assign({}, e), {
                                service: r.service,
                                method: r.method,
                                requestHeader: r.header,
                                values: r.contextValues,
                                signal: r.signal
                            }))),
                            stream: !0,
                            service: r.service,
                            method: r.method,
                            header: e.responseHeader,
                            trailer: e.responseTrailer
                        }), r), { message: h, header: g, trailer: A } = yield u(f({
                        init: {
                            method: e.requestMethod
                        },
                        message: d.value,
                        url: e.url,
                        signal: e.signal,
                        service: t.service,
                        method: t.method,
                        header: e.requestHeader,
                        contextValues: e.values,
                        stream: !1
                    }));
                    p(g, e.responseHeader), p(A, e.responseTrailer), yield u((yield* m(l(h))));
                    if (!0 !== (yield u(c.next())).done) throw new s.T("protocol error: received extra input message for server-streaming method", i.C.Unimplemented);
                });
            };
        case n.MethodKind.ClientStreaming:
            return function(n) {
                return c(this, arguments, function*() {
                    const s = (0, a.$)(async (r)=>({
                            message: (0, o.S)(t.method.O, await t.impl(r.message, Object.assign(Object.assign({}, e), {
                                service: r.service,
                                method: r.method,
                                requestHeader: r.header,
                                values: r.contextValues,
                                signal: r.signal
                            }))),
                            stream: !1,
                            service: r.service,
                            method: r.method,
                            header: e.responseHeader,
                            trailer: e.responseTrailer
                        }), r), { message: i, header: c, trailer: l } = yield u(s({
                        init: {
                            method: e.requestMethod
                        },
                        message: n,
                        url: e.url,
                        signal: e.signal,
                        service: t.service,
                        method: t.method,
                        header: e.requestHeader,
                        contextValues: e.values,
                        stream: !0
                    }));
                    p(c, e.responseHeader), p(l, e.responseTrailer), yield yield u(i);
                });
            };
        case n.MethodKind.BiDiStreaming:
            return function(n) {
                return c(this, arguments, function*() {
                    const s = (0, a.$)(async (r)=>({
                            message: (0, o.u)(t.method.O, t.impl(r.message, Object.assign(Object.assign({}, e), {
                                service: r.service,
                                method: r.method,
                                requestHeader: r.header,
                                values: r.contextValues,
                                signal: r.signal
                            }))),
                            stream: !0,
                            service: r.service,
                            method: r.method,
                            header: e.responseHeader,
                            trailer: e.responseTrailer
                        }), r), { message: i, header: c, trailer: d } = yield u(s({
                        init: {
                            method: e.requestMethod
                        },
                        message: n,
                        url: e.url,
                        signal: e.signal,
                        service: t.service,
                        method: t.method,
                        header: e.requestHeader,
                        contextValues: e.values,
                        stream: !0
                    }));
                    p(c, e.responseHeader), p(d, e.responseTrailer), yield u((yield* m(l(i))));
                });
            };
    }
}
function p(t, e) {
    t !== e && (e.forEach((t, r)=>{
        e.delete(r);
    }), t.forEach((t, r)=>{
        e.set(r, t);
    }));
}
