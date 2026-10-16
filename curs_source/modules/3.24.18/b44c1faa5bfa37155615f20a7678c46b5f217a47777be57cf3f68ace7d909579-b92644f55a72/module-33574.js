"use strict";
require.d(exports, {
    o: ()=>C
});
var n = require("./module-36038.js"), s = require("./module-60284.js"), o = require("./module-42514.js"), i = require("./module-69068.js");
function a(e, t, r, a, c, l, u) {
    const d = function(e, t, r, a, c) {
        const l = new Headers(null != a ? a : {});
        return void 0 !== r && l.set(s.hR, `${r}`), l.set(s.Z_, e == n.MethodKind.Unary ? t ? i.Vs : i.Br : t ? i.Sg : i.yU), l.set(s._U, o.Xg), c && l.set(s.qy, "connect-es/1.6.1"), l;
    }(e, t, r, a, u);
    if (null != l) {
        const t = e == n.MethodKind.Unary ? s.kq : s.jL;
        d.set(t, l.name);
    }
    if (c.length > 0) {
        const t = e == n.MethodKind.Unary ? s.Eu : s.dk;
        d.set(t, c.map((e)=>e.name).join(","));
    }
    return d;
}
var c = require("./module-84959.js"), l = require("./module-54959.js"), u = require("./module-92801.js");
function d(e, t, r, o, a) {
    let d;
    const p = a.get(e == n.MethodKind.Unary ? s.kq : s.jL);
    if (null != p && "identity" !== p.toLowerCase() && (d = t.find((e)=>e.name === p), !d)) throw new u.T(`unsupported response encoding "${p}"`, c.C.Internal, a);
    return Object.assign({
        compression: d
    }, function(e, t, r, o) {
        const a = o.get(s.Z_), d = (0, i.xk)(a);
        if (200 !== r) {
            const t = new u.T(`HTTP ${r}`, (0, l.q)(r), o);
            if (e == n.MethodKind.Unary && d && !d.binary) return {
                isUnaryError: !0,
                unaryError: t
            };
            throw t;
        }
        const p = t, m = e !== n.MethodKind.Unary;
        if ((null == d ? void 0 : d.binary) !== p || d.stream !== m) throw new u.T(`unsupported content type ${a}`, void 0 === d ? c.C.Unknown : c.C.Internal, o);
        return {
            isUnaryError: !1
        };
    }(e, r, o, a));
}
var p = require("./module-22970.js"), m = require("./module-33751.js"), h = require("./module-37816.js");
const f = "application/";
function g(e, t, r) {
    let i = `?connect=v${o.Xg}`;
    const a = e.header.get(s.Z_);
    0 === (null == a ? void 0 : a.indexOf(f)) && (i += "&encoding=" + encodeURIComponent(a.slice(f.length)));
    const c = e.header.get(s.kq);
    null !== c && "identity" !== c && (i += "&compression=" + encodeURIComponent(c), r = !0), r && (i += "&base64=1"), i += "&message=" + function(e, t) {
        return t ? n.protoBase64.enc(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent((new TextDecoder).decode(e));
    }(t, r);
    const l = e.url + i, u = new Headers(e.header);
    return [
        s._U,
        s.Z_,
        s.qs,
        s.kq,
        s.Eu
    ].forEach((e)=>u.delete(e)), Object.assign(Object.assign({}, e), {
        init: Object.assign(Object.assign({}, e.init), {
            method: "GET"
        }),
        url: l,
        header: u
    });
}
var y = require("./module-42481.js"), w = require("./module-2788.js"), v = require("./module-12563.js"), _ = require("./module-98681.js"), A = require("./module-98433.js"), S = require("./module-84934.js"), b = function(e) {
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
}, E = function(e) {
    return this instanceof E ? (this.v = e, this) : new E(e);
}, I = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(e, t || []), o = [];
    return n = {}, i("next"), i("throw"), i("return", function(e) {
        return function(t) {
            return Promise.resolve(t).then(e, l);
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
            (r = s[e](t)).value instanceof E ? Promise.resolve(r.value.v).then(c, l) : u(o[0][2], r);
        } catch (e) {
            u(o[0][3], e);
        }
        var r;
    }
    function c(e) {
        a("next", e);
    }
    function l(e) {
        a("throw", e);
    }
    function u(e, t) {
        e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
};
function C(e) {
    return {
        async unary (t, r, o, i, c, l, u) {
            const h = (0, A.Qg)(r, e.binaryOptions, e.jsonOptions, e);
            return i = void 0 === i ? e.defaultTimeoutMs : i <= 0 ? void 0 : i, await (0, _.L)({
                interceptors: e.interceptors,
                signal: o,
                timeoutMs: i,
                req: {
                    stream: !1,
                    service: t,
                    method: r,
                    url: (0, v.j)(e.baseUrl, t, r),
                    init: {},
                    header: a(r.kind, e.useBinaryFormat, i, c, e.acceptCompression, e.sendCompression, !0),
                    contextValues: null != u ? u : (0, S.k)(),
                    message: l
                },
                next: async (o)=>{
                    var i;
                    let a = h.getI(e.useBinaryFormat).serialize(o.message);
                    e.sendCompression && a.byteLength > e.compressMinBytes ? (a = await e.sendCompression.compress(a), o.header.set(s.kq, e.sendCompression.name)) : o.header.delete(s.kq);
                    let c;
                    !0 === e.useHttpGet && r.idempotency === n.MethodIdempotency.NoSideEffects ? o = g(o, a, e.useBinaryFormat) : (c = (0, w.T$)([
                        a
                    ]), 0 === a.length && o.header.set("Content-Length", "0"));
                    const l = await e.httpClient({
                        url: o.url,
                        method: null !== (i = o.init.method) && void 0 !== i ? i : "POST",
                        header: o.header,
                        signal: o.signal,
                        body: c
                    }), { compression: u, isUnaryError: f, unaryError: v } = d(r.kind, e.acceptCompression, e.useBinaryFormat, l.status, l.header), [_, A] = (0, p.z)(l.header);
                    let S = await (0, w.WK)(l.body, (0, w.SM)(e.readMaxBytes, l.header.get(s.qs)), {
                        propagateDownStreamError: !1
                    });
                    if (u && (S = await u.decompress(S, e.readMaxBytes)), f) throw (0, m.O1)(S, (0, y.Pb)(_, A), v);
                    return {
                        stream: !1,
                        service: t,
                        method: r,
                        header: _,
                        message: h.getO(e.useBinaryFormat).parse(S),
                        trailer: A
                    };
                }
            });
        },
        async stream (t, r, n, s, o, i, l) {
            const p = (0, A.Qg)(r, e.binaryOptions, e.jsonOptions, e), m = (0, h.Q8)(e.jsonOptions);
            return s = void 0 === s ? e.defaultTimeoutMs : s <= 0 ? void 0 : s, (0, _.u)({
                interceptors: e.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !0,
                    service: t,
                    method: r,
                    url: (0, v.j)(e.baseUrl, t, r),
                    init: {
                        method: "POST",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: a(r.kind, e.useBinaryFormat, s, o, e.acceptCompression, e.sendCompression, !0),
                    contextValues: null != l ? l : (0, S.k)(),
                    message: i
                },
                next: async (t)=>{
                    const n = await e.httpClient({
                        url: t.url,
                        method: "POST",
                        header: t.header,
                        signal: t.signal,
                        body: (0, w.Fs)(t.message, (0, w.XO)(p.getI(e.useBinaryFormat)), (0, w.fM)(e.sendCompression, e.compressMinBytes), (0, w.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: s } = d(r.kind, e.acceptCompression, e.useBinaryFormat, n.status, n.header), o = Object.assign(Object.assign({}, t), {
                        header: n.header,
                        trailer: new Headers,
                        message: (0, w.Fs)(n.body, (0, w.pY)(e.readMaxBytes), (0, w.ew)(null != s ? s : null, e.readMaxBytes), (0, w.uv)(p.getO(e.useBinaryFormat), h.Cu, m), function(e) {
                            return I(this, arguments, function*() {
                                var t, r, s, i;
                                let a = !1;
                                try {
                                    for(var l, d = !0, p = b(e); !(t = (l = yield E(p.next())).done); d = !0){
                                        i = l.value, d = !1;
                                        const e = i;
                                        if (e.end) {
                                            if (a) throw new u.T("protocol error: received extra EndStreamResponse", c.C.InvalidArgument);
                                            if (a = !0, e.value.error) {
                                                const t = e.value.error;
                                                throw n.header.forEach((e, r)=>{
                                                    t.metadata.append(r, e);
                                                }), t;
                                            }
                                            e.value.metadata.forEach((e, t)=>o.trailer.set(t, e));
                                        } else {
                                            if (a) throw new u.T("protocol error: received extra message after EndStreamResponse", c.C.InvalidArgument);
                                            yield yield E(e.value);
                                        }
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    };
                                } finally{
                                    try {
                                        d || t || !(s = p.return) || (yield E(s.call(p)));
                                    } finally{
                                        if (r) throw r.error;
                                    }
                                }
                                if (!a) throw new u.T("protocol error: missing EndStreamResponse", c.C.InvalidArgument);
                            });
                        }, {
                            propagateDownStreamError: !0
                        })
                    });
                    return o;
                }
            });
        }
    };
}
