"use strict";
require.d(exports, {
    o: ()=>C
});
var n = require("./module-6038.js"), s = require("./module-1187.js"), i = require("./module-6229.js"), o = require("./module-129.js");
function a(t, e, r, a, u, c, l) {
    const m = function(t, e, r, a, u) {
        const c = new Headers(null != a ? a : {});
        return void 0 !== r && c.set(s.hR, `${r}`), c.set(s.Z_, t == n.MethodKind.Unary ? e ? o.Vs : o.Br : e ? o.Sg : o.yU), c.set(s._U, i.Xg), u && c.set(s.qy, "connect-es/1.6.1"), c;
    }(t, e, r, a, l);
    if (null != c) {
        const e = t == n.MethodKind.Unary ? s.kq : s.jL;
        m.set(e, c.name);
    }
    if (u.length > 0) {
        const e = t == n.MethodKind.Unary ? s.Eu : s.dk;
        m.set(e, u.map((t)=>t.name).join(","));
    }
    return m;
}
var u = require("./module-8032.js"), c = require("./module-6536.js"), l = require("./module-328.js");
function m(t, e, r, i, a) {
    let m;
    const d = a.get(t == n.MethodKind.Unary ? s.kq : s.jL);
    if (null != d && "identity" !== d.toLowerCase() && (m = e.find((t)=>t.name === d), !m)) throw new l.T(`unsupported response encoding "${d}"`, u.C.Internal, a);
    return Object.assign({
        compression: m
    }, function(t, e, r, i) {
        const a = i.get(s.Z_), m = (0, o.xk)(a);
        if (200 !== r) {
            const e = new l.T(`HTTP ${r}`, (0, c.q)(r), i);
            if (t == n.MethodKind.Unary && m && !m.binary) return {
                isUnaryError: !0,
                unaryError: e
            };
            throw e;
        }
        const d = e, f = t !== n.MethodKind.Unary;
        if ((null == m ? void 0 : m.binary) !== d || m.stream !== f) throw new l.T(`unsupported content type ${a}`, void 0 === m ? u.C.Unknown : u.C.Internal, i);
        return {
            isUnaryError: !1
        };
    }(t, r, i, a));
}
var d = require("./module-7645.js"), f = require("./module-9726.js"), p = require("./module-685.js");
const h = "application/";
function g(t, e, r) {
    let o = `?connect=v${i.Xg}`;
    const a = t.header.get(s.Z_);
    0 === (null == a ? void 0 : a.indexOf(h)) && (o += "&encoding=" + encodeURIComponent(a.slice(h.length)));
    const u = t.header.get(s.kq);
    null !== u && "identity" !== u && (o += "&compression=" + encodeURIComponent(u), r = !0), r && (o += "&base64=1"), o += "&message=" + function(t, e) {
        return e ? n.protoBase64.enc(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent((new TextDecoder).decode(t));
    }(e, r);
    const c = t.url + o, l = new Headers(t.header);
    return [
        s._U,
        s.Z_,
        s.qs,
        s.kq,
        s.Eu
    ].forEach((t)=>l.delete(t)), Object.assign(Object.assign({}, t), {
        init: Object.assign(Object.assign({}, t.init), {
            method: "GET"
        }),
        url: c,
        header: l
    });
}
var A = require("./module-6422.js"), _ = require("./module-8205.js"), y = require("./module-7572.js"), w = require("./module-1304.js"), S = require("./module-878.js"), J = require("./module-3621.js"), B = function(t) {
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
}, E = function(t) {
    return this instanceof E ? (this.v = t, this) : new E(t);
}, I = function(t, e, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, s = r.apply(t, e || []), i = [];
    return n = {}, o("next"), o("throw"), o("return", function(t) {
        return function(e) {
            return Promise.resolve(e).then(t, c);
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
            (r = s[t](e)).value instanceof E ? Promise.resolve(r.value.v).then(u, c) : l(i[0][2], r);
        } catch (t) {
            l(i[0][3], t);
        }
        var r;
    }
    function u(t) {
        a("next", t);
    }
    function c(t) {
        a("throw", t);
    }
    function l(t, e) {
        t(e), i.shift(), i.length && a(i[0][0], i[0][1]);
    }
};
function C(t) {
    return {
        async unary (e, r, i, o, u, c, l) {
            const p = (0, S.Qg)(r, t.binaryOptions, t.jsonOptions, t);
            return o = void 0 === o ? t.defaultTimeoutMs : o <= 0 ? void 0 : o, await (0, w.L)({
                interceptors: t.interceptors,
                signal: i,
                timeoutMs: o,
                req: {
                    stream: !1,
                    service: e,
                    method: r,
                    url: (0, y.j)(t.baseUrl, e, r),
                    init: {},
                    header: a(r.kind, t.useBinaryFormat, o, u, t.acceptCompression, t.sendCompression, !0),
                    contextValues: null != l ? l : (0, J.k)(),
                    message: c
                },
                next: async (i)=>{
                    var o;
                    let a = p.getI(t.useBinaryFormat).serialize(i.message);
                    t.sendCompression && a.byteLength > t.compressMinBytes ? (a = await t.sendCompression.compress(a), i.header.set(s.kq, t.sendCompression.name)) : i.header.delete(s.kq);
                    let u;
                    !0 === t.useHttpGet && r.idempotency === n.MethodIdempotency.NoSideEffects ? i = g(i, a, t.useBinaryFormat) : (u = (0, _.T$)([
                        a
                    ]), 0 === a.length && i.header.set("Content-Length", "0"));
                    const c = await t.httpClient({
                        url: i.url,
                        method: null !== (o = i.init.method) && void 0 !== o ? o : "POST",
                        header: i.header,
                        signal: i.signal,
                        body: u
                    }), { compression: l, isUnaryError: h, unaryError: y } = m(r.kind, t.acceptCompression, t.useBinaryFormat, c.status, c.header), [w, S] = (0, d.z)(c.header);
                    let J = await (0, _.WK)(c.body, (0, _.SM)(t.readMaxBytes, c.header.get(s.qs)), {
                        propagateDownStreamError: !1
                    });
                    if (l && (J = await l.decompress(J, t.readMaxBytes)), h) throw (0, f.O1)(J, (0, A.Pb)(w, S), y);
                    return {
                        stream: !1,
                        service: e,
                        method: r,
                        header: w,
                        message: p.getO(t.useBinaryFormat).parse(J),
                        trailer: S
                    };
                }
            });
        },
        async stream (e, r, n, s, i, o, c) {
            const d = (0, S.Qg)(r, t.binaryOptions, t.jsonOptions, t), f = (0, p.Q8)(t.jsonOptions);
            return s = void 0 === s ? t.defaultTimeoutMs : s <= 0 ? void 0 : s, (0, w.u)({
                interceptors: t.interceptors,
                signal: n,
                timeoutMs: s,
                req: {
                    stream: !0,
                    service: e,
                    method: r,
                    url: (0, y.j)(t.baseUrl, e, r),
                    init: {
                        method: "POST",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: a(r.kind, t.useBinaryFormat, s, i, t.acceptCompression, t.sendCompression, !0),
                    contextValues: null != c ? c : (0, J.k)(),
                    message: o
                },
                next: async (e)=>{
                    const n = await t.httpClient({
                        url: e.url,
                        method: "POST",
                        header: e.header,
                        signal: e.signal,
                        body: (0, _.Fs)(e.message, (0, _.XO)(d.getI(t.useBinaryFormat)), (0, _.fM)(t.sendCompression, t.compressMinBytes), (0, _.yQ)(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: s } = m(r.kind, t.acceptCompression, t.useBinaryFormat, n.status, n.header), i = Object.assign(Object.assign({}, e), {
                        header: n.header,
                        trailer: new Headers,
                        message: (0, _.Fs)(n.body, (0, _.pY)(t.readMaxBytes), (0, _.ew)(null != s ? s : null, t.readMaxBytes), (0, _.uv)(d.getO(t.useBinaryFormat), p.Cu, f), function(t) {
                            return I(this, arguments, function*() {
                                var e, r, s, o;
                                let a = !1;
                                try {
                                    for(var c, m = !0, d = B(t); !(e = (c = yield E(d.next())).done); m = !0){
                                        o = c.value, m = !1;
                                        const t = o;
                                        if (t.end) {
                                            if (a) throw new l.T("protocol error: received extra EndStreamResponse", u.C.InvalidArgument);
                                            if (a = !0, t.value.error) {
                                                const e = t.value.error;
                                                throw n.header.forEach((t, r)=>{
                                                    e.metadata.append(r, t);
                                                }), e;
                                            }
                                            t.value.metadata.forEach((t, e)=>i.trailer.set(e, t));
                                        } else {
                                            if (a) throw new l.T("protocol error: received extra message after EndStreamResponse", u.C.InvalidArgument);
                                            yield yield E(t.value);
                                        }
                                    }
                                } catch (t) {
                                    r = {
                                        error: t
                                    };
                                } finally{
                                    try {
                                        m || e || !(s = d.return) || (yield E(s.call(d)));
                                    } finally{
                                        if (r) throw r.error;
                                    }
                                }
                                if (!a) throw new l.T("protocol error: missing EndStreamResponse", u.C.InvalidArgument);
                            });
                        }, {
                            propagateDownStreamError: !0
                        })
                    });
                    return i;
                }
            });
        }
    };
}
