var n = {};
(()=>{
    "use strict";
    require.r(n), require.d(n, {
        activate: ()=>gi,
        deactivate: ()=>Ei
    });
    const e = require("vscode");
    async function t(t) {
        const A = new URLSearchParams(t.query), n = A.get("name"), r = A.get("config");
        if (!n || !r) return void e.window.showErrorMessage('Missing "name" or "config" parameter in deep link.');
        let o;
        try {
            const e = (s = r, Buffer.from(s, "base64").toString("utf8"));
            o = JSON.parse(e);
        } catch (t) {
            return void e.window.showErrorMessage("Invalid server configuration provided: Not valid JSON.");
        }
        var s;
        if ("object" != typeof o || null === o) return void e.window.showErrorMessage("Invalid server configuration provided: Must be a JSON object.");
        const i = o;
        await e.commands.executeCommand("aiSettings.action.open", "mcp"), await e.commands.executeCommand("mcp.deeplinkInstall", n, i);
    }
    const r = 3e4;
    let o;
    function s() {
        const t = e.cursor.getCursorCreds()?.backendUrl, A = e.cursor.getCursorAuthToken();
        if (t && A) return {
            backendUrl: t,
            accessToken: A
        };
    }
    function i() {
        const t = s();
        return t ? Promise.resolve(t) : (o ??= (Promise.resolve(e.cursor.triggerRefreshCursorAuthToken()).catch(()=>{}), new Promise((t, A)=>{
            const n = [], o = setTimeout(()=>{
                i(), A(new Error("Timed out waiting for Cursor backend credentials"));
            }, r), i = ()=>{
                clearTimeout(o);
                for (const e of n)e.dispose();
            }, a = ()=>{
                const e = s();
                e && (i(), t(e));
            };
            n.push(e.cursor.onDidChangeCursorAuthToken(a), e.cursor.onDidChangeCursorCreds(a)), a();
        })).finally(()=>{
            o = void 0;
        }), o);
    }
    var a, c = require("./module-1609.js"), l = require("./module-6038.js");
    function u(e) {
        const t = a[e];
        return "string" != typeof t ? e.toString() : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
    }
    let g;
    !function(e) {
        e[e.Canceled = 1] = "Canceled", e[e.Unknown = 2] = "Unknown", e[e.InvalidArgument = 3] = "InvalidArgument", e[e.DeadlineExceeded = 4] = "DeadlineExceeded", e[e.NotFound = 5] = "NotFound", e[e.AlreadyExists = 6] = "AlreadyExists", e[e.PermissionDenied = 7] = "PermissionDenied", e[e.ResourceExhausted = 8] = "ResourceExhausted", e[e.FailedPrecondition = 9] = "FailedPrecondition", e[e.Aborted = 10] = "Aborted", e[e.OutOfRange = 11] = "OutOfRange", e[e.Unimplemented = 12] = "Unimplemented", e[e.Internal = 13] = "Internal", e[e.Unavailable = 14] = "Unavailable", e[e.DataLoss = 15] = "DataLoss", e[e.Unauthenticated = 16] = "Unauthenticated";
    }(a || (a = {}));
    class E extends Error {
        constructor(e, t = a.Unknown, A, n, r){
            super(function(e, t) {
                return e.length ? `[${u(t)}] ${e}` : `[${u(t)}]`;
            }(e, t)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e, this.code = t, this.metadata = new Headers(null != A ? A : {}), this.details = null != n ? n : [], this.cause = r;
        }
        static from(e, t = a.Unknown) {
            return e instanceof E ? e : e instanceof Error ? "AbortError" == e.name ? new E(e.message, a.Canceled) : new E(e.message, t, void 0, void 0, e) : new E(String(e), t, void 0, void 0, e);
        }
        static [Symbol.hasInstance](e) {
            return e instanceof Error && (Object.getPrototypeOf(e) === E.prototype || "ConnectError" === e.name && "code" in e && "number" == typeof e.code && "metadata" in e && "details" in e && Array.isArray(e.details) && "rawMessage" in e && "string" == typeof e.rawMessage && "cause" in e);
        }
        findDetails(e) {
            const t = "typeName" in e ? {
                findMessage: (t)=>t === e.typeName ? e : void 0
            } : e, A = [];
            for (const e of this.details){
                if ("getType" in e) {
                    t.findMessage(e.getType().typeName) && A.push(e);
                    continue;
                }
                const n = t.findMessage(e.type);
                if (n) try {
                    A.push(n.fromBinary(e.value));
                } catch (e) {}
            }
            return A;
        }
    }
    const h = 1;
    const d = 4294967295, I = d, B = 1024;
    function Q(e, t, A = !1) {
        if (t > e) {
            let n = `message size is larger than configured readMaxBytes ${e}`;
            throw A && (n = `message size ${t} is larger than configured readMaxBytes ${e}`), new E(n, a.ResourceExhausted);
        }
    }
    function f(e) {
        return new C(e);
    }
    class C {
        constructor(e){
            this.readMaxBytes = e, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
        }
        get byteLength() {
            return this.buf.reduce((e, t)=>e + t.byteLength, 0);
        }
        decode(e) {
            this.buf.push(e);
            const t = [];
            for(;;){
                let e = this.pop();
                if (!e) break;
                t.push(e);
            }
            return t;
        }
        pop() {
            if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
                const e = this.env;
                return this.env = void 0, e;
            }
        }
        head() {
            if (!this.cons(this.header)) return;
            const e = this.headerView.getUint8(0), t = this.headerView.getUint32(1);
            return Q(this.readMaxBytes, t, !0), {
                flags: e,
                data: new Uint8Array(t)
            };
        }
        cons(e) {
            const t = e.byteLength;
            if (this.byteLength < t) return !1;
            let A = 0;
            for(; A < t;){
                const n = this.buf.shift();
                n.byteLength > t - A ? (e.set(n.subarray(0, t - A), A), this.buf.unshift(n.subarray(t - A)), A += t - A) : (e.set(n, A), A += n.byteLength);
            }
            return !0;
        }
    }
    async function p(e, t, A) {
        let { flags: n, data: r } = e;
        if ((n & h) === h) throw new E("invalid envelope, already compressed", a.Internal);
        return t && r.byteLength >= A && (r = await t.compress(r), n |= h), {
            data: r,
            flags: n
        };
    }
    async function m(e, t, A) {
        let { flags: n, data: r } = e;
        if ((n & h) === h) {
            if (!t) throw new E("received compressed envelope, but do not know how to decompress", a.Internal);
            r = await t.decompress(r, A), n ^= h;
        }
        return {
            data: r,
            flags: n
        };
    }
    function y(e, t) {
        const A = new Uint8Array(t.length + 5);
        A.set(t, 5);
        const n = new DataView(A.buffer, A.byteOffset, A.byteLength);
        return n.setUint8(0, e), n.setUint32(1, t.length), A;
    }
    var w = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, A = e[Symbol.asyncIterator];
        return A ? A.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this;
        }, t);
        function n(A) {
            t[A] = e[A] && function(t) {
                return new Promise(function(n, r) {
                    (function(e, t, A, n) {
                        Promise.resolve(n).then(function(t) {
                            e({
                                value: t,
                                done: A
                            });
                        }, t);
                    })(n, r, (t = e[A](t)).done, t.value);
                });
            };
        }
    }, k = function(e) {
        return this instanceof k ? (this.v = e, this) : new k(e);
    }, b = function(e, t, A) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, r = A.apply(e, t || []), o = [];
        return n = {}, s("next"), s("throw"), s("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, c);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function s(e, t) {
            r[e] && (n[e] = function(t) {
                return new Promise(function(A, n) {
                    o.push([
                        e,
                        t,
                        A,
                        n
                    ]) > 1 || i(e, t);
                });
            }, t && (n[e] = t(n[e])));
        }
        function i(e, t) {
            try {
                (A = r[e](t)).value instanceof k ? Promise.resolve(A.value.v).then(a, c) : l(o[0][2], A);
            } catch (e) {
                l(o[0][3], e);
            }
            var A;
        }
        function a(e) {
            i("next", e);
        }
        function c(e) {
            i("throw", e);
        }
        function l(e, t) {
            e(t), o.shift(), o.length && i(o[0][0], o[0][1]);
        }
    }, N = function(e) {
        var t, A;
        return t = {}, n("next"), n("throw", function(e) {
            throw e;
        }), n("return"), t[Symbol.iterator] = function() {
            return this;
        }, t;
        function n(n, r) {
            t[n] = e[n] ? function(t) {
                return (A = !A) ? {
                    value: k(e[n](t)),
                    done: !1
                } : r ? r(t) : t;
            } : r;
        }
    };
    function T(e, ...t) {
        return b(this, arguments, function*() {
            var A;
            const [n, r] = function(e) {
                let t;
                "function" != typeof e[e.length - 1] && (t = e.pop());
                return [
                    e,
                    t
                ];
            }(t);
            let o;
            const s = e[Symbol.asyncIterator]();
            let i = {
                [Symbol.asyncIterator]: ()=>s
            };
            !0 === (null == r ? void 0 : r.propagateDownStreamError) && (i = o = M(i));
            for (const e of n)i = e(i);
            const a = i[Symbol.asyncIterator]();
            try {
                for(;;){
                    const e = yield k(a.next());
                    if (!0 === e.done) break;
                    if (o) try {
                        yield yield k(e.value);
                    } catch (e) {
                        throw yield k(o.abort(e)), e;
                    }
                    else yield yield k(e.value);
                }
            } finally{
                !0 === (null == r ? void 0 : r.propagateDownStreamError) && (null === (A = s.return) || void 0 === A || A.call(s).catch(()=>{}));
            }
        });
    }
    function D(e, t, A) {
        return void 0 === t || void 0 === A ? function(t) {
            return b(this, arguments, function*() {
                var A, n, r, o;
                try {
                    for(var s, i = !0, a = w(t); !(A = (s = yield k(a.next())).done); i = !0){
                        o = s.value, i = !1;
                        const t = o, A = e.serialize(t);
                        yield yield k({
                            flags: 0,
                            data: A
                        });
                    }
                } catch (e) {
                    n = {
                        error: e
                    };
                } finally{
                    try {
                        i || A || !(r = a.return) || (yield k(r.call(a)));
                    } finally{
                        if (n) throw n.error;
                    }
                }
            });
        } : function(n) {
            return b(this, arguments, function*() {
                var r, o, s, i;
                try {
                    for(var a, c = !0, l = w(n); !(r = (a = yield k(l.next())).done); c = !0){
                        i = a.value, c = !1;
                        const n = i;
                        let r, o = 0;
                        n.end ? (o |= t, r = A.serialize(n.value)) : r = e.serialize(n.value), yield yield k({
                            flags: o,
                            data: r
                        });
                    }
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally{
                    try {
                        c || r || !(s = l.return) || (yield k(s.call(l)));
                    } finally{
                        if (o) throw o.error;
                    }
                }
            });
        };
    }
    function S(e, t, A) {
        return A && void 0 !== t ? function(n) {
            return b(this, arguments, function*() {
                var r, o, s, i;
                try {
                    for(var a, c = !0, l = w(n); !(r = (a = yield k(l.next())).done); c = !0){
                        i = a.value, c = !1;
                        const { flags: n, data: r } = i;
                        (n & t) === t ? yield yield k({
                            value: A.parse(r),
                            end: !0
                        }) : yield yield k({
                            value: e.parse(r),
                            end: !1
                        });
                    }
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally{
                    try {
                        c || r || !(s = l.return) || (yield k(s.call(l)));
                    } finally{
                        if (o) throw o.error;
                    }
                }
            });
        } : function(n) {
            return b(this, arguments, function*() {
                var r, o, s, i;
                try {
                    for(var c, l = !0, u = w(n); !(r = (c = yield k(u.next())).done); l = !0){
                        i = c.value, l = !1;
                        const { flags: n, data: r } = i;
                        if (void 0 === t || (n & t) !== t) yield yield k(e.parse(r));
                        else if (null === A) throw new E("unexpected end flag", a.InvalidArgument);
                    }
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally{
                    try {
                        l || r || !(s = u.return) || (yield k(s.call(u)));
                    } finally{
                        if (o) throw o.error;
                    }
                }
            });
        };
    }
    function R(e, t) {
        return function(A) {
            return b(this, arguments, function*() {
                var n, r, o, s;
                try {
                    for(var i, a = !0, c = w(A); !(n = (i = yield k(c.next())).done); a = !0){
                        s = i.value, a = !1;
                        const A = s;
                        yield yield k((yield k(p(A, e, t))));
                    }
                } catch (e) {
                    r = {
                        error: e
                    };
                } finally{
                    try {
                        a || n || !(o = c.return) || (yield k(o.call(c)));
                    } finally{
                        if (r) throw r.error;
                    }
                }
            });
        };
    }
    function F(e, t) {
        return function(A) {
            return b(this, arguments, function*() {
                var n, r, o, s;
                try {
                    for(var i, a = !0, c = w(A); !(n = (i = yield k(c.next())).done); a = !0){
                        s = i.value, a = !1;
                        const A = s;
                        yield yield k((yield k(m(A, e, t))));
                    }
                } catch (e) {
                    r = {
                        error: e
                    };
                } finally{
                    try {
                        a || n || !(o = c.return) || (yield k(o.call(c)));
                    } finally{
                        if (r) throw r.error;
                    }
                }
            });
        };
    }
    async function v(e, t, A) {
        var n, r, o, s, i, c, l, u;
        const [g, h] = function(e) {
            if (null == e) return [
                !1,
                0
            ];
            const t = "string" == typeof e ? parseInt(e, 10) : e;
            if (!Number.isSafeInteger(t) || t < 0) return [
                !1,
                t
            ];
            return [
                !0,
                t
            ];
        }(A);
        if (g) {
            h > t && Q(t, h, !0);
            const A = new Uint8Array(h);
            let i = 0;
            try {
                for(var d, I = !0, B = w(e); !(n = (d = await B.next()).done); I = !0){
                    s = d.value, I = !1;
                    const e = s;
                    if (i + e.byteLength > h) throw new E(`protocol error: promised ${h} bytes, received ${i + e.byteLength}`, a.InvalidArgument);
                    A.set(e, i), i += e.byteLength;
                }
            } catch (e) {
                r = {
                    error: e
                };
            } finally{
                try {
                    I || n || !(o = B.return) || await o.call(B);
                } finally{
                    if (r) throw r.error;
                }
            }
            if (i < h) throw new E(`protocol error: promised ${h} bytes, received ${i}`, a.InvalidArgument);
            return A;
        }
        const f = [];
        let C = 0;
        try {
            for(var p, m = !0, y = w(e); !(i = (p = await y.next()).done); m = !0){
                u = p.value, m = !1;
                const e = u;
                C += e.byteLength, Q(t, C), f.push(e);
            }
        } catch (e) {
            c = {
                error: e
            };
        } finally{
            try {
                m || i || !(l = y.return) || await l.call(y);
            } finally{
                if (c) throw c.error;
            }
        }
        const k = new Uint8Array(C);
        let b = 0;
        for(let e = f.shift(); e; e = f.shift())k.set(e, b), b += e.byteLength;
        return k;
    }
    function M(e) {
        const t = e[Symbol.asyncIterator]();
        if (void 0 === t.throw) throw new Error("AsyncIterable does not implement throw");
        const A = t;
        let n, r, o = {
            next: ()=>(r = A.next().finally(()=>{
                    r = void 0;
                }), r),
            throw: (e)=>A.throw(e)
        };
        void 0 !== t.return && (o = Object.assign(Object.assign({}, o), {
            return: (e)=>A.return(e)
        }));
        let s = !1;
        return {
            abort (e) {
                if (n) return n.state;
                const t = ()=>A.throw(e).then((e)=>!0 === e.done ? "completed" : "caught", ()=>"rethrown");
                return r ? (n = {
                    reason: e,
                    state: r.then(t, t)
                }, n.state) : (n = {
                    reason: e,
                    state: t()
                }, n.state);
            },
            [Symbol.asyncIterator] () {
                if (s) throw new Error("AsyncIterable cannot be re-used");
                return s = !0, o;
            }
        };
    }
    function U(e) {
        return b(this, arguments, function*() {
            yield k((yield* N(w(e))));
        });
    }
    var L = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, A = e[Symbol.asyncIterator];
        return A ? A.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this;
        }, t);
        function n(A) {
            t[A] = e[A] && function(t) {
                return new Promise(function(n, r) {
                    (function(e, t, A, n) {
                        Promise.resolve(n).then(function(t) {
                            e({
                                value: t,
                                done: A
                            });
                        }, t);
                    })(n, r, (t = e[A](t)).done, t.value);
                });
            };
        }
    }, _ = function(e) {
        return this instanceof _ ? (this.v = e, this) : new _(e);
    }, J = function(e) {
        var t, A;
        return t = {}, n("next"), n("throw", function(e) {
            throw e;
        }), n("return"), t[Symbol.iterator] = function() {
            return this;
        }, t;
        function n(n, r) {
            t[n] = e[n] ? function(t) {
                return (A = !A) ? {
                    value: _(e[n](t)),
                    done: !1
                } : r ? r(t) : t;
            } : r;
        }
    }, O = function(e, t, A) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, r = A.apply(e, t || []), o = [];
        return n = {}, s("next"), s("throw"), s("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, c);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function s(e, t) {
            r[e] && (n[e] = function(t) {
                return new Promise(function(A, n) {
                    o.push([
                        e,
                        t,
                        A,
                        n
                    ]) > 1 || i(e, t);
                });
            }, t && (n[e] = t(n[e])));
        }
        function i(e, t) {
            try {
                (A = r[e](t)).value instanceof _ ? Promise.resolve(A.value.v).then(a, c) : l(o[0][2], A);
            } catch (e) {
                l(o[0][3], e);
            }
            var A;
        }
        function a(e) {
            i("next", e);
        }
        function c(e) {
            i("throw", e);
        }
        function l(e, t) {
            e(t), o.shift(), o.length && i(o[0][0], o[0][1]);
        }
    };
    function Y(e, t) {
        return function(e, t) {
            const A = {};
            for (const [n, r] of Object.entries(e.methods)){
                const o = t(Object.assign(Object.assign({}, r), {
                    localName: n,
                    service: e
                }));
                null != o && (A[n] = o);
            }
            return A;
        }(e, (A)=>{
            switch(A.kind){
                case l.MethodKind.Unary:
                    return function(e, t, A) {
                        return async function(n, r) {
                            var o, s;
                            const i = await e.unary(t, A, null == r ? void 0 : r.signal, null == r ? void 0 : r.timeoutMs, null == r ? void 0 : r.headers, n, null == r ? void 0 : r.contextValues);
                            return null === (o = null == r ? void 0 : r.onHeader) || void 0 === o || o.call(r, i.header), null === (s = null == r ? void 0 : r.onTrailer) || void 0 === s || s.call(r, i.trailer), i.message;
                        };
                    }(t, e, A);
                case l.MethodKind.ServerStreaming:
                    return function(e, t, A) {
                        return function(n, r) {
                            return P(e.stream(t, A, null == r ? void 0 : r.signal, null == r ? void 0 : r.timeoutMs, null == r ? void 0 : r.headers, U([
                                n
                            ]), null == r ? void 0 : r.contextValues), r);
                        };
                    }(t, e, A);
                case l.MethodKind.ClientStreaming:
                    return function(e, t, A) {
                        return async function(n, r) {
                            var o, s, i, c, l, u;
                            const g = await e.stream(t, A, null == r ? void 0 : r.signal, null == r ? void 0 : r.timeoutMs, null == r ? void 0 : r.headers, n, null == r ? void 0 : r.contextValues);
                            let h;
                            null === (l = null == r ? void 0 : r.onHeader) || void 0 === l || l.call(r, g.header);
                            let d = 0;
                            try {
                                for(var I, B = !0, Q = L(g.message); !(o = (I = await Q.next()).done); B = !0){
                                    c = I.value, B = !1;
                                    h = c, d++;
                                }
                            } catch (e) {
                                s = {
                                    error: e
                                };
                            } finally{
                                try {
                                    B || o || !(i = Q.return) || await i.call(Q);
                                } finally{
                                    if (s) throw s.error;
                                }
                            }
                            if (!h) throw new E("protocol error: missing response message", a.Unimplemented);
                            if (d > 1) throw new E("protocol error: received extra messages for client streaming method", a.Unimplemented);
                            return null === (u = null == r ? void 0 : r.onTrailer) || void 0 === u || u.call(r, g.trailer), h;
                        };
                    }(t, e, A);
                case l.MethodKind.BiDiStreaming:
                    return function(e, t, A) {
                        return function(n, r) {
                            return P(e.stream(t, A, null == r ? void 0 : r.signal, null == r ? void 0 : r.timeoutMs, null == r ? void 0 : r.headers, n, null == r ? void 0 : r.contextValues), r);
                        };
                    }(t, e, A);
                default:
                    return null;
            }
        });
    }
    function G(e, t) {
        return Y(e, t);
    }
    function P(e, t) {
        const A = (function() {
            return O(this, arguments, function*() {
                var A, n;
                const r = yield _(e);
                null === (A = null == t ? void 0 : t.onHeader) || void 0 === A || A.call(t, r.header), yield _((yield* J(L(r.message)))), null === (n = null == t ? void 0 : t.onTrailer) || void 0 === n || n.call(t, r.trailer);
            });
        })()[Symbol.asyncIterator]();
        return {
            [Symbol.asyncIterator]: ()=>({
                    next: ()=>A.next()
                })
        };
    }
    var V = require("./module-5853.js");
    const [x] = process.versions.node.split(".").map((e)=>parseInt(e, 10));
    x < 18 && void 0 === globalThis.Headers && (globalThis.Headers = V.Headers);
    var H, q = require("./module-3106.js"), W = require("./module-9023.js");
    function j(e) {
        let t = a.Internal;
        const A = K(e).map(X);
        A.some((e)=>"ERR_STREAM_WRITE_AFTER_END" == e.code) || A.some((e)=>"ERR_STREAM_DESTROYED" == e.code || "ERR_HTTP2_INVALID_STREAM" == e.code || "ECONNRESET" == e.code) ? t = a.Aborted : A.some((e)=>"ETIMEDOUT" == e.code || "ENOTFOUND" == e.code || "EAI_AGAIN" == e.code || "ECONNREFUSED" == e.code) && (t = a.Unavailable);
        const n = E.from(e, t);
        return n !== e && (n.cause = e), n;
    }
    function K(e) {
        const t = [];
        for(; e instanceof Error && !t.includes(e) && (t.push(e), "cause" in e);)e = e.cause;
        return t;
    }
    function X(e) {
        const t = {};
        return e instanceof Error && ("code" in e && "string" == typeof e.code && (t.code = e.code), "syscall" in e && "string" == typeof e.syscall && (t.syscall = e.syscall)), t;
    }
    !function(e) {
        e[e.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", e[e.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", e[e.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", e[e.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", e[e.STREAM_CLOSED = 5] = "STREAM_CLOSED", e[e.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", e[e.REFUSED_STREAM = 7] = "REFUSED_STREAM", e[e.CANCEL = 8] = "CANCEL", e[e.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", e[e.CONNECT_ERROR = 10] = "CONNECT_ERROR", e[e.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", e[e.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", e[e.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
    }(H || (H = {}));
    const Z = (0, W.promisify)(q.gzip), z = (0, W.promisify)(q.gunzip), $ = (0, W.promisify)(q.brotliCompress), ee = (0, W.promisify)(q.brotliDecompress), te = {
        name: "gzip",
        compress: (e)=>Z(e, {}),
        decompress: (e, t)=>0 == e.length ? Promise.resolve(new Uint8Array(0)) : ne(z(e, {
                maxOutputLength: t
            }), t)
    }, Ae = {
        name: "br",
        compress: (e)=>$(e, {}),
        decompress: (e, t)=>0 == e.length ? Promise.resolve(new Uint8Array(0)) : ne(ee(e, {
                maxOutputLength: t
            }), t)
    };
    function ne(e, t) {
        return e.catch((e)=>{
            const A = X(e);
            let n = a.Internal, r = "decompression failed";
            switch(A.code){
                case "ERR_BUFFER_TOO_LARGE":
                    n = a.ResourceExhausted, r = `message is larger than configured readMaxBytes ${t} after decompression`;
                    break;
                case "Z_DATA_ERROR":
                case "ERR_PADDING_2":
                    n = a.InvalidArgument;
                    break;
                default:
                    void 0 !== A.code && A.code.startsWith("ERR__ERROR_FORMAT_") && (n = a.InvalidArgument);
            }
            return Promise.reject(new E(r, n, void 0, void 0, e));
        });
    }
    var re = require("./module-5675.js"), oe = require("./module-8611.js");
    const se = require("https");
    function ie(e) {
        const t = new Headers;
        for (const [A, n] of Object.entries(e))if (!A.startsWith(":") && void 0 !== n) if ("string" == typeof n) t.append(A, n);
        else if ("number" == typeof n) t.append(A, String(n));
        else for (const e of n)t.append(A, e);
        return t;
    }
    function ae(e, t) {
        if (void 0 === e && void 0 === t) return;
        const A = Object.create(null);
        if (void 0 !== t) for (const [e, n] of Object.entries(t))Array.isArray(n) ? A[e] = n.concat() : void 0 !== n && (A[e] = n);
        if (void 0 !== e) if (Array.isArray(e)) for (const [t, n] of e)ce(A, t, n);
        else if ("forEach" in e) "function" == typeof e.forEach && e.forEach((e, t)=>{
            ce(A, t, e);
        });
        else for (const [t, n] of Object.entries(e))ce(A, t, n);
        return A;
    }
    function ce(e, t, A) {
        const n = e[t = t.toLowerCase()];
        Array.isArray(n) ? n.push(A) : e[t] = void 0 === n ? A : [
            n.toString(),
            A
        ];
    }
    function le(e) {
        if (!e.aborted) return;
        if (void 0 !== e.reason) return e.reason;
        const t = new Error("This operation was aborted");
        return t.name = "AbortError", t;
    }
    class ue {
        state() {
            return "ready" == this.s.t ? void 0 !== this.verifying ? "verifying" : this.s.streamCount() > 0 ? "open" : "idle" : this.s.t;
        }
        error() {
            if ("error" == this.s.t) return this.s.reason;
        }
        constructor(e, t, A){
            var n, r, o, s;
            this.s = {
                t: "closed"
            }, this.shuttingDown = [], this.authority = new URL(e).origin, this.http2SessionOptions = A, this.options = {
                pingIntervalMs: null !== (n = null == t ? void 0 : t.pingIntervalMs) && void 0 !== n ? n : Number.POSITIVE_INFINITY,
                pingTimeoutMs: null !== (r = null == t ? void 0 : t.pingTimeoutMs) && void 0 !== r ? r : 15e3,
                pingIdleConnection: null !== (o = null == t ? void 0 : t.pingIdleConnection) && void 0 !== o && o,
                idleConnectionTimeoutMs: null !== (s = null == t ? void 0 : t.idleConnectionTimeoutMs) && void 0 !== s ? s : 9e5
            };
        }
        async connect() {
            try {
                return (await this.gotoReady()).streamCount() > 0 ? "open" : "idle";
            } catch (e) {
                return "error";
            }
        }
        async request(e, t, A, n) {
            for(;;){
                const r = await this.gotoReady();
                try {
                    const o = r.conn.request(Object.assign(Object.assign({}, A), {
                        ":method": e,
                        ":path": t
                    }), n);
                    return r.registerRequest(o), o;
                } catch (e) {
                    if (r.conn.closed || r.conn.destroyed) continue;
                    throw e;
                }
            }
        }
        notifyResponseByteRead(e) {
            "ready" == this.s.t && this.s.responseByteRead(e);
            for (const t of this.shuttingDown)t.responseByteRead(e);
        }
        abort(e) {
            var t, A, n;
            const r = null != e ? e : new E("connection aborted", a.Canceled);
            null === (A = (t = this.s).abort) || void 0 === A || A.call(t, r);
            for (const e of this.shuttingDown)null === (n = e.abort) || void 0 === n || n.call(e, r);
            this.setState(ge(r));
        }
        abortCurrent(e) {
            var t, A;
            const n = this.s;
            if ("ready" === n.t && n.isShuttingDown()) return;
            const r = null != e ? e : new E("connection aborted", a.Canceled);
            null === (A = (t = n).abort) || void 0 === A || A.call(t, r);
        }
        captureSessions() {
            const e = [];
            "function" == typeof this.s.abort && e.push(this.s);
            for (const t of this.shuttingDown)-1 === e.indexOf(t) && e.push(t);
            return e;
        }
        async gotoReady() {
            var e;
            for("ready" == this.s.t ? this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed ? this.setState(Ee(this.authority, this.http2SessionOptions)) : this.s.requiresVerify() && await this.verify(this.s) : "closed" != this.s.t && "error" != this.s.t || this.setState(Ee(this.authority, this.http2SessionOptions)); "ready" !== this.s.t;){
                if ("error" === this.s.t) throw this.s.reason;
                if ("unavailable" === this.s.t) throw new E("expected h2 session, but ALPN protocol failed to negotiate", a.Unavailable, {
                    authority: this.authority,
                    issuer: null !== (e = this.s.issuer) && void 0 !== e ? e : "unknown"
                });
                "connecting" === this.s.t && await this.s.conn;
            }
            return this.s;
        }
        setState(e) {
            var t, A;
            if (null === (A = (t = this.s).onExitState) || void 0 === A || A.call(t), "ready" == this.s.t && this.s.isShuttingDown()) {
                const e = this.s;
                this.shuttingDown.push(e), e.onClose = e.onError = ()=>{
                    const t = this.shuttingDown.indexOf(e);
                    -1 !== t && this.shuttingDown.splice(t, 1);
                };
            }
            switch(e.t){
                case "connecting":
                    e.conn.then((e)=>{
                        this.setState(function(e, t) {
                            var A, n;
                            if (function(e) {
                                if (e.connecting) throw new E("expected open session, but it is connecting", a.Internal);
                                if (e.destroyed) throw new E("expected open session, but it is destroyed", a.Internal);
                                if (e.closed) throw new E("expected open session, but it is closed", a.Internal);
                            }(e), !0 === e.encrypted && "h2" !== e.alpnProtocol) {
                                var r = e.socket, o = null == r ? void 0 : r.getPeerCertificate, s = "function" == typeof o ? null === (n = null === (A = o.call(r)) || void 0 === A ? void 0 : A.issuer) || void 0 === n ? void 0 : n.CN : void 0;
                                return e.destroyed || e.destroy(), {
                                    t: "unavailable",
                                    issuer: s
                                };
                            }
                            e.unref();
                            let i, c, l, u = Date.now(), g = 0, h = !1, d = !1;
                            m();
                            const I = {
                                t: "ready",
                                conn: e,
                                streamCount: ()=>g,
                                requiresVerify: ()=>Date.now() - u > t.pingIntervalMs,
                                isShuttingDown: ()=>h,
                                onClose: void 0,
                                onError: void 0,
                                registerRequest (t) {
                                    g++, 1 == g && (e.ref(), B(), p()), t.once("response", ()=>{
                                        u = Date.now(), B();
                                    }), t.once("close", ()=>{
                                        g--, 0 == g && (e.unref(), B(), m());
                                    });
                                },
                                responseByteRead (t) {
                                    t.session === e && (e.closed || e.destroyed || g <= 0 || (u = Date.now(), B()));
                                },
                                verify: ()=>(e.ref(), new Promise((t)=>{
                                        C(()=>{
                                            0 == g && e.unref(), t(!0);
                                        }), e.once("error", ()=>t(!1));
                                    })),
                                abort (t) {
                                    e.destroyed || (e.once("error", ()=>{}), e.destroy(t, re.constants.NGHTTP2_CANCEL));
                                },
                                onExitState () {
                                    I.isShuttingDown() || (N(), this.onError = void 0, this.onClose = void 0);
                                }
                            };
                            function B() {
                                Q(), (g > 0 || t.pingIdleConnection) && (i = he(f, t.pingIntervalMs));
                            }
                            function Q() {
                                clearTimeout(i), clearTimeout(c);
                            }
                            function f() {
                                C(B);
                            }
                            function C(A) {
                                clearTimeout(c), c = he(()=>{
                                    e.destroy(new E("PING timed out", a.Unavailable), re.constants.NGHTTP2_CANCEL);
                                }, t.pingTimeoutMs), e.ping((n, r)=>{
                                    clearTimeout(c), null === n && (r > t.pingTimeoutMs ? e.destroy(new E("PING timed out", a.Unavailable), re.constants.NGHTTP2_CANCEL) : (u = Date.now(), A()));
                                });
                            }
                            function p() {
                                clearTimeout(l);
                            }
                            function m() {
                                l = he(y, t.idleConnectionTimeoutMs);
                            }
                            function y() {
                                e.close(), k();
                            }
                            function w(A, n, r) {
                                h = !0;
                                const o = Buffer.from("too_many_pings", "ascii");
                                if (A === re.constants.NGHTTP2_ENHANCE_YOUR_CALM && null != r && r.equals(o) && (t.pingIntervalMs = 2 * t.pingIntervalMs, d = !0), A === re.constants.NGHTTP2_NO_ERROR) {
                                    const t = parseInt(process.versions.node.split(".")[0], 10);
                                    0 == g && t >= 18 && e.destroy(new E("received GOAWAY without any open streams", a.Canceled), re.constants.NGHTTP2_NO_ERROR);
                                }
                            }
                            function k() {
                                var e;
                                N(), null === (e = I.onClose) || void 0 === e || e.call(I);
                            }
                            function b(e) {
                                var t, A;
                                if (N(), d) {
                                    const e = new E(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${re.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, a.ResourceExhausted);
                                    null === (t = I.onError) || void 0 === t || t.call(I, e);
                                } else null === (A = I.onError) || void 0 === A || A.call(I, j(e));
                            }
                            function N() {
                                Q(), p(), e.off("error", b), e.off("close", k), e.off("goaway", w);
                            }
                            return e.on("error", b), e.on("close", k), e.on("goaway", w), I;
                        }(e, this.options));
                    }, (e)=>{
                        this.setState(ge(e));
                    });
                    break;
                case "ready":
                    e.onClose = ()=>this.setState({
                            t: "closed"
                        }), e.onError = (e)=>this.setState(ge(e));
            }
            this.s = e;
        }
        verify(e) {
            return void 0 !== this.verifying || (this.verifying = e.verify().then((e)=>{
                e || this.setState(Ee(this.authority, this.http2SessionOptions));
            }, (e)=>{
                this.setState(ge(e));
            }).finally(()=>{
                this.verifying = void 0;
            })), this.verifying;
        }
    }
    function ge(e) {
        return e instanceof E && E.from(e).code == a.Canceled ? {
            t: "closed"
        } : function(e) {
            return {
                t: "error",
                reason: e
            };
        }(e);
    }
    function Ee(e, t) {
        let A, n;
        const r = new Promise((e, t)=>{
            A = e, n = t;
        }), o = re.connect(e, t);
        function s() {
            null == A || A(o), a();
        }
        function i(e) {
            null == n || n(j(e)), a();
        }
        function a() {
            o.off("connect", s), o.off("error", i);
        }
        return o.on("connect", s), o.on("error", i), {
            t: "connecting",
            conn: r,
            abort (e) {
                o.destroyed || o.destroy(void 0, re.constants.NGHTTP2_CANCEL), null == n || n(e);
            },
            onExitState () {
                a();
            }
        };
    }
    function he(e, t) {
        if (!(t > 2147483647)) return setTimeout(e, t).unref();
    }
    function de(e) {
        var t, A;
        if ("1.1" == e.httpVersion) return A = e.nodeOptions, async function(e) {
            const t = Ce(e.signal);
            return new Promise((n, r)=>{
                t.catch((e)=>{
                    r(e);
                }), function(e, t, A, n) {
                    let r;
                    r = new URL(t).protocol.startsWith("https") ? se.request(t, A) : oe.request(t, A), e.catch((e)=>r.destroy(j(e))), r.flushHeaders(), r.on("error", e.reject), r.on("socket", function(e) {
                        function t() {
                            e.off("connect", t), n(r);
                        }
                        "open" === e.readyState ? n(r) : e.on("connect", t);
                    });
                }(t, e.url, Object.assign(Object.assign({}, A), {
                    headers: ae(e.header, null == A ? void 0 : A.headers),
                    method: e.method
                }), (A)=>{
                    fe(e, A, t), A.on("response", (e)=>{
                        var A;
                        e.on("error", t.reject), t.catch((t)=>e.destroy(j(t)));
                        const r = new Headers;
                        n({
                            status: null !== (A = e.statusCode) && void 0 !== A ? A : 0,
                            header: ie(e.headers),
                            body: Ie(t, e, r),
                            trailer: r
                        });
                    });
                });
            });
        };
        return function(e) {
            return function(t) {
                const A = Ce(t.signal), n = e(t.url);
                return new Promise((e, r)=>{
                    A.catch((e)=>{
                        r(e);
                    }), function(e, t, A, n, r, o, s) {
                        const i = new URL(A);
                        if (i.origin !== t.authority) {
                            const A = `cannot make a request to ${i.origin}: the http2 session is connected to ${t.authority}`;
                            return void e.reject(new E(A, a.Internal));
                        }
                        t.request(n, i.pathname + i.search, r, {}).then((t)=>{
                            e.catch((e)=>{
                                if (t.closed) return;
                                const A = e instanceof E && e.code == a.Canceled ? H.CANCEL : H.INTERNAL_ERROR;
                                return new Promise((e)=>t.close(A, e));
                            }), t.on("error", function(A) {
                                t.writableEnded && K(A).map(X).some((e)=>"ERR_STREAM_WRITE_AFTER_END" == e.code) || e.reject(A);
                            }), t.on("close", function() {
                                const A = function(e) {
                                    switch(e){
                                        case H.PROTOCOL_ERROR:
                                        case H.INTERNAL_ERROR:
                                        case H.FLOW_CONTROL_ERROR:
                                        case H.SETTINGS_TIMEOUT:
                                        case H.FRAME_SIZE_ERROR:
                                        case H.COMPRESSION_ERROR:
                                        case H.CONNECT_ERROR:
                                            return new E(`http/2 stream closed with error code ${H[e]} (0x${e.toString(16)})`, a.Internal);
                                        case H.REFUSED_STREAM:
                                            return new E(`http/2 stream closed with error code ${H[e]} (0x${e.toString(16)})`, a.Unavailable);
                                        case H.CANCEL:
                                            return new E(`http/2 stream closed with error code ${H[e]} (0x${e.toString(16)})`, a.Canceled);
                                        case H.ENHANCE_YOUR_CALM:
                                            return new E(`http/2 stream closed with error code ${H[e]} (0x${e.toString(16)})`, a.ResourceExhausted);
                                        case H.INADEQUATE_SECURITY:
                                        case H.HTTP_1_1_REQUIRED:
                                            return new E(`http/2 stream closed with error code ${H[e]} (0x${e.toString(16)})`, a.PermissionDenied);
                                        case H.STREAM_CLOSED:
                                    }
                                }(t.rstCode);
                                A && e.reject(A);
                            }), s(t);
                        }, (t)=>{
                            e.reject(t);
                        });
                    }(A, n, t.url, t.method, ae(t.header), 0, (r)=>{
                        fe(t, r, A), r.on("response", (t)=>{
                            var o;
                            const s = {
                                status: null !== (o = t[":status"]) && void 0 !== o ? o : 0,
                                header: ie(t),
                                body: Qe(A, r, n),
                                trailer: Be(r)
                            };
                            e(s);
                        });
                    });
                });
            };
        }(null !== (t = e.sessionProvider) && void 0 !== t ? t : (e)=>new ue(e));
    }
    function Ie(e, t, A) {
        const n = t[Symbol.asyncIterator]();
        return {
            [Symbol.asyncIterator]: ()=>({
                    async next () {
                        const r = await e.race(n.next());
                        return !0 === r.done && (ie(t.trailers).forEach((e, t)=>{
                            A.set(t, e);
                        }), e.resolve(), await e), r;
                    },
                    throw (t) {
                        throw e.reject(t), t;
                    }
                })
        };
    }
    function Be(e) {
        const t = new Headers;
        return e.on("trailers", (e)=>{
            ie(e).forEach((e, A)=>{
                t.set(A, e);
            });
        }), t;
    }
    function Qe(e, t, A) {
        const n = t[Symbol.asyncIterator]();
        return {
            [Symbol.asyncIterator]: ()=>({
                    async next () {
                        const r = await e.race(n.next());
                        return !0 === r.done && (e.resolve(), await e), null == A || A.notifyResponseByteRead(t), r;
                    },
                    throw (t) {
                        throw e.reject(t), t;
                    }
                })
        };
    }
    async function fe(e, t, A) {
        if (void 0 === e.body) return void await new Promise((e)=>t.end(e));
        const n = e.body[Symbol.asyncIterator]();
        return new Promise((e)=>{
            !function r() {
                if (A.isRejected()) return;
                n.next().then((o)=>{
                    !0 !== o.done ? t.write(o.value, "binary", function(e) {
                        null != e ? (void 0 !== n.throw && n.throw(j(e)).catch(()=>{}), t.writableEnded && K(e).map(X).some((e)=>"ERR_STREAM_WRITE_AFTER_END" == e.code) || A.reject(e)) : r();
                    }) : t.end(e);
                }, (e)=>{
                    A.reject(e);
                });
            }();
        });
    }
    function Ce(e) {
        let t, A, n = !1, r = !1;
        const o = new Promise((e, n)=>{
            t = e, A = n;
        }), s = {
            resolve () {
                n || r || (n = !0, null == t || t());
            },
            isResolved: ()=>n,
            reject (e) {
                n || r || (r = !0, null == A || A(j(e)));
            },
            isRejected: ()=>r,
            async race (e) {
                const t = await Promise.race([
                    e,
                    o
                ]);
                if (void 0 === t && n) throw new E("sentinel completed early", a.Internal);
                return t;
            }
        }, i = Object.assign(o, s);
        function c() {
            s.reject(le(this));
        }
        return e && (e.aborted ? s.reject(le(e)) : e.addEventListener("abort", c), o.finally(()=>e.removeEventListener("abort", c)).catch(()=>{})), i;
    }
    function pe(e) {
        var t, A, n, r;
        let o;
        if ("2" == e.httpVersion) {
            let t;
            t = e.sessionManager ? e.sessionManager : new ue(e.baseUrl, {
                pingIntervalMs: e.pingIntervalMs,
                pingIdleConnection: e.pingIdleConnection,
                pingTimeoutMs: e.pingTimeoutMs,
                idleConnectionTimeoutMs: e.idleConnectionTimeoutMs
            }, e.nodeOptions), o = de({
                httpVersion: "2",
                sessionProvider: ()=>t
            });
        } else o = de({
            httpVersion: "1.1",
            nodeOptions: e.nodeOptions
        });
        return Object.assign(Object.assign(Object.assign({}, e), {
            httpClient: o,
            useBinaryFormat: null === (t = e.useBinaryFormat) || void 0 === t || t,
            interceptors: null !== (A = e.interceptors) && void 0 !== A ? A : [],
            sendCompression: null !== (n = e.sendCompression) && void 0 !== n ? n : null,
            acceptCompression: null !== (r = e.acceptCompression) && void 0 !== r ? r : [
                te,
                Ae
            ]
        }), function(e, t, A) {
            if (null != t || (t = I), null != e || (e = d), null != A || (A = B), t < 1 || t > I) throw new E(`writeMaxBytes ${t} must be >= 1 and <= ${I}`, a.Internal);
            if (e < 1 || e > d) throw new E(`readMaxBytes ${e} must be >= 1 and <= ${d}`, a.Internal);
            return {
                readMaxBytes: e,
                writeMaxBytes: t,
                compressMinBytes: A
            };
        }(e.readMaxBytes, e.writeMaxBytes, e.compressMinBytes));
    }
    const me = "Content-Type", ye = "Content-Length", we = "Content-Encoding", ke = "Connect-Content-Encoding", be = "Accept-Encoding", Ne = "Connect-Accept-Encoding", Te = "Connect-Timeout-Ms", De = "Connect-Protocol-Version", Se = "User-Agent", Re = "1";
    const Fe = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i, ve = "application/proto", Me = "application/json", Ue = "application/connect+proto", Le = "application/connect+json";
    function _e(e, t, A, n, r, o, s) {
        const i = function(e, t, A, n, r) {
            const o = new Headers(null != n ? n : {});
            return void 0 !== A && o.set(Te, `${A}`), o.set(me, e == l.MethodKind.Unary ? t ? ve : Me : t ? Ue : Le), o.set(De, Re), r && o.set(Se, "connect-es/1.6.1"), o;
        }(e, t, A, n, s);
        if (null != o) {
            const t = e == l.MethodKind.Unary ? we : ke;
            i.set(t, o.name);
        }
        if (r.length > 0) {
            const t = e == l.MethodKind.Unary ? be : Ne;
            i.set(t, r.map((e)=>e.name).join(","));
        }
        return i;
    }
    function Je(e, t, A, n) {
        const r = n.get(me), o = function(e) {
            if ("text/event-stream" === e) return {
                stream: !0,
                binary: !0
            };
            const t = null == e ? void 0 : e.match(Fe);
            if (!t) return;
            return {
                stream: !!t[1],
                binary: !!t[3]
            };
        }(r);
        if (200 !== A) {
            const t = new E(`HTTP ${A}`, function(e) {
                switch(e){
                    case 400:
                        return a.Internal;
                    case 401:
                        return a.Unauthenticated;
                    case 403:
                        return a.PermissionDenied;
                    case 404:
                        return a.Unimplemented;
                    case 429:
                    case 502:
                    case 503:
                    case 504:
                        return a.Unavailable;
                    default:
                        return a.Unknown;
                }
            }(A), n);
            if (e == l.MethodKind.Unary && o && !o.binary) return {
                isUnaryError: !0,
                unaryError: t
            };
            throw t;
        }
        const s = t, i = e !== l.MethodKind.Unary;
        if ((null == o ? void 0 : o.binary) !== s || o.stream !== i) throw new E(`unsupported content type ${r}`, void 0 === o ? a.Unknown : a.Internal, n);
        return {
            isUnaryError: !1
        };
    }
    function Oe(e, t, A, n, r) {
        let o;
        const s = r.get(e == l.MethodKind.Unary ? we : ke);
        if (null != s && "identity" !== s.toLowerCase() && (o = t.find((e)=>e.name === s), !o)) throw new E(`unsupported response encoding "${s}"`, a.Internal, r);
        return Object.assign({
            compression: o
        }, Je(e, A, n, r));
    }
    var Ye = function(e, t) {
        var A = {};
        for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (A[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for(n = Object.getOwnPropertySymbols(e); r < n.length; r++)t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (A[n[r]] = e[n[r]]);
        }
        return A;
    };
    function Ge(e, t, A) {
        var n;
        if (t && new Headers(t).forEach((e, t)=>A.metadata.append(t, e)), "object" != typeof e || null == e || Array.isArray(e)) throw A;
        let r = A.code;
        "code" in e && "string" == typeof e.code && (r = null !== (n = function(e) {
            if (!g) {
                g = {};
                for (const e of Object.values(a))"string" != typeof e && (g[u(e)] = e);
            }
            return g[e];
        }(e.code)) && void 0 !== n ? n : r);
        const o = e.message;
        if (null != o && "string" != typeof o) throw A;
        const s = new E(null != o ? o : "", r, t);
        if ("details" in e && Array.isArray(e.details)) for (const t of e.details){
            if (null === t || "object" != typeof t || Array.isArray(t) || "string" != typeof t.type || "string" != typeof t.value) throw A;
            try {
                s.details.push({
                    type: t.type,
                    value: l.protoBase64.dec(t.value),
                    debug: t.debug
                });
            } catch (e) {
                throw A;
            }
        }
        return s;
    }
    function Pe(e, t) {
        const A = {
            code: u(e.code)
        };
        return e.rawMessage.length > 0 && (A.message = e.rawMessage), e.details.length > 0 && (A.details = e.details.map((e)=>{
            if ("getType" in e) {
                const A = {
                    type: e.getType().typeName,
                    value: e.toBinary()
                };
                try {
                    A.debug = e.toJson(t);
                } catch (e) {}
                return A;
            }
            return e;
        }).map((e)=>{
            var { value: t } = e, A = Ye(e, [
                "value"
            ]);
            return Object.assign(Object.assign({}, A), {
                value: l.protoBase64.enc(t).replace(/=+$/, "")
            });
        })), A;
    }
    function Ve(...e) {
        const t = new Headers;
        for (const A of e)A.forEach((e, A)=>{
            t.append(A, e);
        });
        return t;
    }
    const xe = 2;
    function He(e) {
        const t = new TextEncoder;
        return {
            serialize (A) {
                try {
                    const n = function(e, t, A) {
                        const n = {};
                        void 0 !== t && (n.error = Pe(t, A), e = Ve(e, t.metadata));
                        let r = !1;
                        const o = {};
                        return e.forEach((e, t)=>{
                            r = !0, o[t] = [
                                e
                            ];
                        }), r && (n.metadata = o), n;
                    }(A.metadata, A.error, e), r = JSON.stringify(n);
                    return t.encode(r);
                } catch (e) {
                    const t = e instanceof Error ? e.message : String(e);
                    throw new E(`failed to serialize EndStreamResponse: ${t}`, a.Internal);
                }
            },
            parse (e) {
                try {
                    return function(e) {
                        const t = new E("invalid end stream", a.Unknown);
                        let A;
                        try {
                            A = JSON.parse("string" == typeof e ? e : (new TextDecoder).decode(e));
                        } catch (e) {
                            throw t;
                        }
                        if ("object" != typeof A || null == A || Array.isArray(A)) throw t;
                        const n = new Headers;
                        if ("metadata" in A) {
                            if ("object" != typeof A.metadata || null == A.metadata || Array.isArray(A.metadata)) throw t;
                            for (const [e, r] of Object.entries(A.metadata)){
                                if (!Array.isArray(r) || r.some((e)=>"string" != typeof e)) throw t;
                                for (const t of r)n.append(e, t);
                            }
                        }
                        return {
                            metadata: n,
                            error: "error" in A && null != A.error ? Ge(A.error, n, t) : void 0
                        };
                    }(e);
                } catch (e) {
                    const t = e instanceof Error ? e.message : String(e);
                    throw new E(`failed to parse EndStreamResponse: ${t}`, a.InvalidArgument);
                }
            }
        };
    }
    const qe = "application/";
    function We(e, t, A) {
        let n = `?connect=v${Re}`;
        const r = e.header.get(me);
        0 === (null == r ? void 0 : r.indexOf(qe)) && (n += "&encoding=" + encodeURIComponent(r.slice(qe.length)));
        const o = e.header.get(we);
        null !== o && "identity" !== o && (n += "&compression=" + encodeURIComponent(o), A = !0), A && (n += "&base64=1"), n += "&message=" + function(e, t) {
            return t ? l.protoBase64.enc(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent((new TextDecoder).decode(e));
        }(t, A);
        const s = e.url + n, i = new Headers(e.header);
        return [
            De,
            me,
            ye,
            we,
            be
        ].forEach((e)=>i.delete(e)), Object.assign(Object.assign({}, e), {
            init: Object.assign(Object.assign({}, e.init), {
                method: "GET"
            }),
            url: s,
            header: i
        });
    }
    function je(e, t, A) {
        const n = "string" == typeof t ? t : t.typeName, r = "string" == typeof A ? A : A.name;
        return e.toString().replace(/\/?$/, `/${n}/${r}`);
    }
    function Ke(e, t) {
        var A;
        return null !== (A = null == t ? void 0 : t.concat().reverse().reduce((e, t)=>t(e), e)) && void 0 !== A ? A : e;
    }
    function Xe(e, t) {
        return t instanceof e ? t : new e(t);
    }
    function Ze(e, t) {
        function A(t) {
            return !0 === t.done ? t : {
                done: t.done,
                value: Xe(e, t.value)
            };
        }
        return {
            [Symbol.asyncIterator] () {
                const e = t[Symbol.asyncIterator](), n = {
                    next: ()=>e.next().then(A)
                };
                return void 0 !== e.throw && (n.throw = (t)=>e.throw(t).then(A)), void 0 !== e.return && (n.return = (t)=>e.return(t).then(A)), n;
            }
        };
    }
    function ze(e) {
        const { signal: t, cleanup: A } = function(e) {
            const t = new AbortController, A = ()=>{
                t.abort(new E("the operation timed out", a.DeadlineExceeded));
            };
            let n;
            return void 0 !== e && (e <= 0 ? A() : n = setTimeout(A, e)), {
                signal: t.signal,
                cleanup: ()=>clearTimeout(n)
            };
        }(e.timeoutMs), n = function(...e) {
            const t = new AbortController, A = e.filter((e)=>void 0 !== e).concat(t.signal);
            for (const e of A){
                if (e.aborted) {
                    n.apply(e);
                    break;
                }
                e.addEventListener("abort", n);
            }
            function n() {
                t.signal.aborted || t.abort(le(this));
                for (const e of A)e.removeEventListener("abort", n);
            }
            return t;
        }(e.signal, t);
        return [
            n.signal,
            function(e) {
                const r = E.from(t.aborted ? le(t) : e);
                return n.abort(r), A(), Promise.reject(r);
            },
            function() {
                A(), n.abort();
            }
        ];
    }
    function $e(e, t, A, n) {
        const r = et(tt(e.I, t), n), o = et(At(e.I, A), n), s = et(tt(e.O, t), n), i = et(At(e.O, A), n);
        return {
            getI: (e)=>e ? r : o,
            getO: (e)=>e ? s : i
        };
    }
    function et(e, t) {
        return {
            serialize (A) {
                const n = e.serialize(A);
                return function(e, t) {
                    if (t > e) throw new E(`message size ${t} is larger than configured writeMaxBytes ${e}`, a.ResourceExhausted);
                }(t.writeMaxBytes, n.byteLength), n;
            },
            parse: (A)=>(Q(t.readMaxBytes, A.byteLength, !0), e.parse(A))
        };
    }
    function tt(e, t) {
        return {
            parse (A) {
                try {
                    return e.fromBinary(A, t);
                } catch (e) {
                    const t = e instanceof Error ? e.message : String(e);
                    throw new E(`parse binary: ${t}`, a.Internal);
                }
            },
            serialize (e) {
                try {
                    return e.toBinary(t);
                } catch (e) {
                    const t = e instanceof Error ? e.message : String(e);
                    throw new E(`serialize binary: ${t}`, a.Internal);
                }
            }
        };
    }
    function At(e, t) {
        var A, n;
        const r = null !== (A = null == t ? void 0 : t.textEncoder) && void 0 !== A ? A : new TextEncoder, o = null !== (n = null == t ? void 0 : t.textDecoder) && void 0 !== n ? n : new TextDecoder, s = function(e) {
            var t;
            const A = Object.assign({}, e);
            return null !== (t = A.ignoreUnknownFields) && void 0 !== t || (A.ignoreUnknownFields = !0), A;
        }(t);
        return {
            parse (t) {
                try {
                    const A = o.decode(t);
                    return e.fromJsonString(A, s);
                } catch (e) {
                    throw E.from(e, a.InvalidArgument);
                }
            },
            serialize (e) {
                try {
                    const t = e.toJsonString(s);
                    return r.encode(t);
                } catch (e) {
                    throw E.from(e, a.Internal);
                }
            }
        };
    }
    function nt() {
        return {
            get (e) {
                return e.id in this ? this[e.id] : e.defaultValue;
            },
            set (e, t) {
                return this[e.id] = t, this;
            },
            delete (e) {
                return delete this[e.id], this;
            }
        };
    }
    var rt = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, A = e[Symbol.asyncIterator];
        return A ? A.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this;
        }, t);
        function n(A) {
            t[A] = e[A] && function(t) {
                return new Promise(function(n, r) {
                    (function(e, t, A, n) {
                        Promise.resolve(n).then(function(t) {
                            e({
                                value: t,
                                done: A
                            });
                        }, t);
                    })(n, r, (t = e[A](t)).done, t.value);
                });
            };
        }
    }, ot = function(e) {
        return this instanceof ot ? (this.v = e, this) : new ot(e);
    }, st = function(e, t, A) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, r = A.apply(e, t || []), o = [];
        return n = {}, s("next"), s("throw"), s("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, c);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function s(e, t) {
            r[e] && (n[e] = function(t) {
                return new Promise(function(A, n) {
                    o.push([
                        e,
                        t,
                        A,
                        n
                    ]) > 1 || i(e, t);
                });
            }, t && (n[e] = t(n[e])));
        }
        function i(e, t) {
            try {
                (A = r[e](t)).value instanceof ot ? Promise.resolve(A.value.v).then(a, c) : l(o[0][2], A);
            } catch (e) {
                l(o[0][3], e);
            }
            var A;
        }
        function a(e) {
            i("next", e);
        }
        function c(e) {
            i("throw", e);
        }
        function l(e, t) {
            e(t), o.shift(), o.length && i(o[0][0], o[0][1]);
        }
    };
    function it(e) {
        return {
            async unary (t, A, n, r, o, s, i) {
                const a = $e(A, e.binaryOptions, e.jsonOptions, e);
                return r = void 0 === r ? e.defaultTimeoutMs : r <= 0 ? void 0 : r, await function(e) {
                    const t = Ke(e.next, e.interceptors), [A, n, r] = ze(e);
                    return t(Object.assign(Object.assign({}, e.req), {
                        message: Xe(e.req.method.I, e.req.message),
                        signal: A
                    })).then((e)=>(r(), e), n);
                }({
                    interceptors: e.interceptors,
                    signal: n,
                    timeoutMs: r,
                    req: {
                        stream: !1,
                        service: t,
                        method: A,
                        url: je(e.baseUrl, t, A),
                        init: {},
                        header: _e(A.kind, e.useBinaryFormat, r, o, e.acceptCompression, e.sendCompression, !0),
                        contextValues: null != i ? i : nt(),
                        message: s
                    },
                    next: async (n)=>{
                        var r;
                        let o = a.getI(e.useBinaryFormat).serialize(n.message);
                        e.sendCompression && o.byteLength > e.compressMinBytes ? (o = await e.sendCompression.compress(o), n.header.set(we, e.sendCompression.name)) : n.header.delete(we);
                        let s;
                        !0 === e.useHttpGet && A.idempotency === l.MethodIdempotency.NoSideEffects ? n = We(n, o, e.useBinaryFormat) : (s = U([
                            o
                        ]), 0 === o.length && n.header.set("Content-Length", "0"));
                        const i = await e.httpClient({
                            url: n.url,
                            method: null !== (r = n.init.method) && void 0 !== r ? r : "POST",
                            header: n.header,
                            signal: n.signal,
                            body: s
                        }), { compression: c, isUnaryError: u, unaryError: g } = Oe(A.kind, e.acceptCompression, e.useBinaryFormat, i.status, i.header), [E, h] = function(e) {
                            const t = new Headers, A = new Headers;
                            return e.forEach((e, n)=>{
                                n.toLowerCase().startsWith("trailer-") ? A.append(n.substring(8), e) : t.append(n, e);
                            }), [
                                t,
                                A
                            ];
                        }(i.header);
                        let d = await function(e, ...t) {
                            const [A, n, r] = function(e) {
                                let t;
                                "function" != typeof e[e.length - 1] && (t = e.pop());
                                const A = e.pop();
                                return [
                                    e,
                                    A,
                                    t
                                ];
                            }(t);
                            let o, s = e;
                            return !0 === (null == r ? void 0 : r.propagateDownStreamError) && (s = o = M(s)), s = T(s, ...A, {
                                propagateDownStreamError: !1
                            }), n(s).catch((e)=>o ? o.abort(e).then(()=>Promise.reject(e)) : Promise.reject(e));
                        }(i.body, (I = e.readMaxBytes, B = i.header.get(ye), async function(e) {
                            return await v(e, I, B);
                        }), {
                            propagateDownStreamError: !1
                        });
                        var I, B;
                        if (c && (d = await c.decompress(d, e.readMaxBytes)), u) throw function(e, t, A) {
                            let n;
                            try {
                                n = JSON.parse((new TextDecoder).decode(e));
                            } catch (e) {
                                throw A;
                            }
                            return Ge(n, t, A);
                        }(d, Ve(E, h), g);
                        return {
                            stream: !1,
                            service: t,
                            method: A,
                            header: E,
                            message: a.getO(e.useBinaryFormat).parse(d),
                            trailer: h
                        };
                    }
                });
            },
            async stream (t, A, n, r, o, s, i) {
                const c = $e(A, e.binaryOptions, e.jsonOptions, e), l = He(e.jsonOptions);
                return r = void 0 === r ? e.defaultTimeoutMs : r <= 0 ? void 0 : r, function(e) {
                    const t = Ke(e.next, e.interceptors), [A, n, r] = ze(e), o = Object.assign(Object.assign({}, e.req), {
                        message: Ze(e.req.method.I, e.req.message),
                        signal: A
                    });
                    let s = !1;
                    return A.addEventListener("abort", function() {
                        var t, A;
                        const n = e.req.message[Symbol.asyncIterator]();
                        s || null === (t = n.throw) || void 0 === t || t.call(n, this.reason).catch(()=>{}), null === (A = n.return) || void 0 === A || A.call(n).catch(()=>{});
                    }), t(o).then((e)=>Object.assign(Object.assign({}, e), {
                            message: {
                                [Symbol.asyncIterator] () {
                                    const t = e.message[Symbol.asyncIterator]();
                                    return {
                                        next: ()=>t.next().then((e)=>(1 == e.done && (s = !0, r()), e), n)
                                    };
                                }
                            }
                        }), n);
                }({
                    interceptors: e.interceptors,
                    signal: n,
                    timeoutMs: r,
                    req: {
                        stream: !0,
                        service: t,
                        method: A,
                        url: je(e.baseUrl, t, A),
                        init: {
                            method: "POST",
                            redirect: "error",
                            mode: "cors"
                        },
                        header: _e(A.kind, e.useBinaryFormat, r, o, e.acceptCompression, e.sendCompression, !0),
                        contextValues: null != i ? i : nt(),
                        message: s
                    },
                    next: async (t)=>{
                        const n = await e.httpClient({
                            url: t.url,
                            method: "POST",
                            header: t.header,
                            signal: t.signal,
                            body: T(t.message, D(c.getI(e.useBinaryFormat)), R(e.sendCompression, e.compressMinBytes), function(e) {
                                return b(this, arguments, function*() {
                                    var t, A, n, r;
                                    try {
                                        for(var o, s = !0, i = w(e); !(t = (o = yield k(i.next())).done); s = !0){
                                            r = o.value, s = !1;
                                            const { flags: e, data: t } = r;
                                            yield yield k(y(e, t));
                                        }
                                    } catch (e) {
                                        A = {
                                            error: e
                                        };
                                    } finally{
                                        try {
                                            s || t || !(n = i.return) || (yield k(n.call(i)));
                                        } finally{
                                            if (A) throw A.error;
                                        }
                                    }
                                });
                            }, {
                                propagateDownStreamError: !0
                            })
                        }), { compression: r } = Oe(A.kind, e.acceptCompression, e.useBinaryFormat, n.status, n.header), o = Object.assign(Object.assign({}, t), {
                            header: n.header,
                            trailer: new Headers,
                            message: T(n.body, (s = e.readMaxBytes, function(e) {
                                return b(this, arguments, function*() {
                                    var t, A, n, r;
                                    const o = f(s);
                                    try {
                                        for(var i, c = !0, l = w(e); !(t = (i = yield k(l.next())).done); c = !0){
                                            r = i.value, c = !1;
                                            const e = r;
                                            for (const t of o.decode(e))yield yield k(t);
                                        }
                                    } catch (e) {
                                        A = {
                                            error: e
                                        };
                                    } finally{
                                        try {
                                            c || t || !(n = l.return) || (yield k(n.call(l)));
                                        } finally{
                                            if (A) throw A.error;
                                        }
                                    }
                                    if (o.byteLength > 0) throw new E("protocol error: incomplete envelope", a.InvalidArgument);
                                });
                            }), F(null != r ? r : null, e.readMaxBytes), S(c.getO(e.useBinaryFormat), xe, l), function(e) {
                                return st(this, arguments, function*() {
                                    var t, A, r, s;
                                    let i = !1;
                                    try {
                                        for(var c, l = !0, u = rt(e); !(t = (c = yield ot(u.next())).done); l = !0){
                                            s = c.value, l = !1;
                                            const e = s;
                                            if (e.end) {
                                                if (i) throw new E("protocol error: received extra EndStreamResponse", a.InvalidArgument);
                                                if (i = !0, e.value.error) {
                                                    const t = e.value.error;
                                                    throw n.header.forEach((e, A)=>{
                                                        t.metadata.append(A, e);
                                                    }), t;
                                                }
                                                e.value.metadata.forEach((e, t)=>o.trailer.set(t, e));
                                            } else {
                                                if (i) throw new E("protocol error: received extra message after EndStreamResponse", a.InvalidArgument);
                                                yield yield ot(e.value);
                                            }
                                        }
                                    } catch (e) {
                                        A = {
                                            error: e
                                        };
                                    } finally{
                                        try {
                                            l || t || !(r = u.return) || (yield ot(r.call(u)));
                                        } finally{
                                            if (A) throw A.error;
                                        }
                                    }
                                    if (!i) throw new E("protocol error: missing EndStreamResponse", a.InvalidArgument);
                                });
                            }, {
                                propagateDownStreamError: !0
                            })
                        });
                        var s;
                        return o;
                    }
                });
            }
        };
    }
    function at(e) {
        return it(pe(e));
    }
    function ct(e, t) {
        if (!e) throw new Error(t);
    }
    function lt(e) {
        if ("number" != typeof e) throw new Error("invalid int 32: " + typeof e);
        if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648) throw new Error("invalid int 32: " + e);
    }
    function ut(e) {
        if ("number" != typeof e) throw new Error("invalid uint 32: " + typeof e);
        if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw new Error("invalid uint 32: " + e);
    }
    function gt(e) {
        if ("number" != typeof e) throw new Error("invalid float 32: " + typeof e);
        if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22)) throw new Error("invalid float 32: " + e);
    }
    const Et = Symbol("@bufbuild/protobuf/enum-type");
    function ht(e) {
        const t = e[Et];
        return ct(t, "missing enum type on enum object"), t;
    }
    function dt(e, t, A, n) {
        e[Et] = It(t, A.map((t)=>({
                no: t.no,
                name: t.name,
                localName: e[t.no]
            })), n);
    }
    function It(e, t, A) {
        const n = Object.create(null), r = Object.create(null), o = [];
        for (const e of t){
            const t = Qt(e);
            o.push(t), n[e.name] = t, r[e.no] = t;
        }
        return {
            typeName: e,
            values: o,
            findName: (e)=>n[e],
            findNumber: (e)=>r[e]
        };
    }
    function Bt(e, t, A) {
        const n = {};
        for (const e of t){
            const t = Qt(e);
            n[t.localName] = t.no, n[t.no] = t.localName;
        }
        return dt(n, e, t, A), n;
    }
    function Qt(e) {
        return "localName" in e ? e : {
            ...e,
            localName: e.name
        };
    }
    class ft {
        equals(e) {
            return this.getType().runtime.util.equals(this.getType(), this, e);
        }
        clone() {
            return this.getType().runtime.util.clone(this);
        }
        fromBinary(e, t) {
            const A = this.getType().runtime.bin, n = A.makeReadOptions(t);
            return A.readMessage(this, n.readerFactory(e), e.byteLength, n), this;
        }
        fromJson(e, t) {
            const A = this.getType(), n = A.runtime.json, r = n.makeReadOptions(t);
            return n.readMessage(A, e, r, this), this;
        }
        fromJsonString(e, t) {
            let A;
            try {
                A = JSON.parse(e);
            } catch (e) {
                throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
            }
            return this.fromJson(A, t);
        }
        toBinary(e) {
            const t = this.getType().runtime.bin, A = t.makeWriteOptions(e), n = A.writerFactory();
            return t.writeMessage(this, n, A), n.finish();
        }
        toJson(e) {
            const t = this.getType().runtime.json, A = t.makeWriteOptions(e);
            return t.writeMessage(this, A);
        }
        toJsonString(e) {
            const t = this.toJson(e);
            return JSON.stringify(t, null, e?.prettySpaces ?? 0);
        }
        toJSON() {
            return this.toJson({
                emitDefaultValues: !0
            });
        }
        getType() {
            return Object.getPrototypeOf(this).constructor;
        }
    }
    function Ct() {
        let e = 0, t = 0;
        for(let A = 0; A < 28; A += 7){
            let n = this.buf[this.pos++];
            if (e |= (127 & n) << A, !(128 & n)) return this.assertBounds(), [
                e,
                t
            ];
        }
        let A = this.buf[this.pos++];
        if (e |= (15 & A) << 28, t = (112 & A) >> 4, !(128 & A)) return this.assertBounds(), [
            e,
            t
        ];
        for(let A = 3; A <= 31; A += 7){
            let n = this.buf[this.pos++];
            if (t |= (127 & n) << A, !(128 & n)) return this.assertBounds(), [
                e,
                t
            ];
        }
        throw new Error("invalid varint");
    }
    function pt(e, t, A) {
        for(let n = 0; n < 28; n += 7){
            const r = e >>> n, o = !(r >>> 7 == 0 && 0 == t), s = 255 & (o ? 128 | r : r);
            if (A.push(s), !o) return;
        }
        const n = e >>> 28 & 15 | (7 & t) << 4, r = !!(t >> 3);
        if (A.push(255 & (r ? 128 | n : n)), r) {
            for(let e = 3; e < 31; e += 7){
                const n = t >>> e, r = !(n >>> 7 == 0), o = 255 & (r ? 128 | n : n);
                if (A.push(o), !r) return;
            }
            A.push(t >>> 31 & 1);
        }
    }
    const mt = 4294967296;
    function yt(e) {
        const t = "-" === e[0];
        t && (e = e.slice(1));
        const A = 1e6;
        let n = 0, r = 0;
        function o(t, o) {
            const s = Number(e.slice(t, o));
            r *= A, n = n * A + s, n >= mt && (r += n / mt | 0, n %= mt);
        }
        return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), t ? bt(n, r) : kt(n, r);
    }
    function wt(e, t) {
        if ({ lo: e, hi: t } = function(e, t) {
            return {
                lo: e >>> 0,
                hi: t >>> 0
            };
        }(e, t), t <= 2097151) return String(mt * t + e);
        const A = 16777215 & (e >>> 24 | t << 8), n = t >> 16 & 65535;
        let r = (16777215 & e) + 6777216 * A + 6710656 * n, o = A + 8147497 * n, s = 2 * n;
        const i = 1e7;
        return r >= i && (o += Math.floor(r / i), r %= i), o >= i && (s += Math.floor(o / i), o %= i), s.toString() + Nt(o) + Nt(r);
    }
    function kt(e, t) {
        return {
            lo: 0 | e,
            hi: 0 | t
        };
    }
    function bt(e, t) {
        return t = ~t, e ? e = 1 + ~e : t += 1, kt(e, t);
    }
    const Nt = (e)=>{
        const t = String(e);
        return "0000000".slice(t.length) + t;
    };
    function Tt(e, t) {
        if (e >= 0) {
            for(; e > 127;)t.push(127 & e | 128), e >>>= 7;
            t.push(e);
        } else {
            for(let A = 0; A < 9; A++)t.push(127 & e | 128), e >>= 7;
            t.push(1);
        }
    }
    function Dt() {
        let e = this.buf[this.pos++], t = 127 & e;
        if (!(128 & e)) return this.assertBounds(), t;
        if (e = this.buf[this.pos++], t |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), t;
        if (e = this.buf[this.pos++], t |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), t;
        if (e = this.buf[this.pos++], t |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), t;
        e = this.buf[this.pos++], t |= (15 & e) << 28;
        for(let t = 5; 128 & e && t < 10; t++)e = this.buf[this.pos++];
        if (128 & e) throw new Error("invalid varint");
        return this.assertBounds(), t >>> 0;
    }
    const St = function() {
        const e = new DataView(new ArrayBuffer(8));
        if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
            const t = BigInt("-9223372036854775808"), A = BigInt("9223372036854775807"), n = BigInt("0"), r = BigInt("18446744073709551615");
            return {
                zero: BigInt(0),
                supported: !0,
                parse (e) {
                    const n = "bigint" == typeof e ? e : BigInt(e);
                    if (n > A || n < t) throw new Error(`int64 invalid: ${e}`);
                    return n;
                },
                uParse (e) {
                    const t = "bigint" == typeof e ? e : BigInt(e);
                    if (t > r || t < n) throw new Error(`uint64 invalid: ${e}`);
                    return t;
                },
                enc (t) {
                    return e.setBigInt64(0, this.parse(t), !0), {
                        lo: e.getInt32(0, !0),
                        hi: e.getInt32(4, !0)
                    };
                },
                uEnc (t) {
                    return e.setBigInt64(0, this.uParse(t), !0), {
                        lo: e.getInt32(0, !0),
                        hi: e.getInt32(4, !0)
                    };
                },
                dec: (t, A)=>(e.setInt32(0, t, !0), e.setInt32(4, A, !0), e.getBigInt64(0, !0)),
                uDec: (t, A)=>(e.setInt32(0, t, !0), e.setInt32(4, A, !0), e.getBigUint64(0, !0))
            };
        }
        const t = (e)=>ct(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`), A = (e)=>ct(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
        return {
            zero: "0",
            supported: !1,
            parse: (e)=>("string" != typeof e && (e = e.toString()), t(e), e),
            uParse: (e)=>("string" != typeof e && (e = e.toString()), A(e), e),
            enc: (e)=>("string" != typeof e && (e = e.toString()), t(e), yt(e)),
            uEnc: (e)=>("string" != typeof e && (e = e.toString()), A(e), yt(e)),
            dec: (e, t)=>(function(e, t) {
                    let A = kt(e, t);
                    const n = 2147483648 & A.hi;
                    n && (A = bt(A.lo, A.hi));
                    const r = wt(A.lo, A.hi);
                    return n ? "-" + r : r;
                })(e, t),
            uDec: (e, t)=>wt(e, t)
        };
    }();
    var Rt = ((e)=>(e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(Rt || {}), Ft = ((e)=>(e[e.BIGINT = 0] = "BIGINT", e[e.STRING = 1] = "STRING", e))(Ft || {});
    function vt(e, t, A) {
        if (t === A) return !0;
        if (e == Rt.BYTES) {
            if (!(t instanceof Uint8Array && A instanceof Uint8Array)) return !1;
            if (t.length !== A.length) return !1;
            for(let e = 0; e < t.length; e++)if (t[e] !== A[e]) return !1;
            return !0;
        }
        switch(e){
            case Rt.UINT64:
            case Rt.FIXED64:
            case Rt.INT64:
            case Rt.SFIXED64:
            case Rt.SINT64:
                return t == A;
        }
        return !1;
    }
    function Mt(e, t) {
        switch(e){
            case Rt.BOOL:
                return !1;
            case Rt.UINT64:
            case Rt.FIXED64:
            case Rt.INT64:
            case Rt.SFIXED64:
            case Rt.SINT64:
                return 0 == t ? St.zero : "0";
            case Rt.DOUBLE:
            case Rt.FLOAT:
                return 0;
            case Rt.BYTES:
                return new Uint8Array(0);
            case Rt.STRING:
                return "";
            default:
                return 0;
        }
    }
    function Ut(e, t) {
        switch(e){
            case Rt.BOOL:
                return !1 === t;
            case Rt.STRING:
                return "" === t;
            case Rt.BYTES:
                return t instanceof Uint8Array && !t.byteLength;
            default:
                return 0 == t;
        }
    }
    function Lt(e) {
        const t = e.field.localName, A = Object.create(null);
        return A[t] = function(e) {
            const t = e.field;
            if (t.repeated) return [];
            if (void 0 !== t.default) return t.default;
            switch(t.kind){
                case "enum":
                    return t.T.values[0].no;
                case "scalar":
                    return Mt(t.T, t.L);
                case "message":
                    const e = t.T, A = new e;
                    return e.fieldWrapper ? e.fieldWrapper.unwrapField(A) : A;
                case "map":
                    throw "map fields are not allowed to be extensions";
            }
        }(e), [
            A,
            ()=>A[t]
        ];
    }
    let _t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Jt = [];
    for(let e = 0; e < _t.length; e++)Jt[_t[e].charCodeAt(0)] = e;
    Jt["-".charCodeAt(0)] = _t.indexOf("+"), Jt["_".charCodeAt(0)] = _t.indexOf("/");
    const Ot = {
        dec (e) {
            let t = 3 * e.length / 4;
            "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
            let A, n = new Uint8Array(t), r = 0, o = 0, s = 0;
            for(let t = 0; t < e.length; t++){
                if (A = Jt[e.charCodeAt(t)], void 0 === A) switch(e[t]){
                    case "=":
                        o = 0;
                    case "\n":
                    case "\r":
                    case "\t":
                    case " ":
                        continue;
                    default:
                        throw Error("invalid base64 string.");
                }
                switch(o){
                    case 0:
                        s = A, o = 1;
                        break;
                    case 1:
                        n[r++] = s << 2 | (48 & A) >> 4, s = A, o = 2;
                        break;
                    case 2:
                        n[r++] = (15 & s) << 4 | (60 & A) >> 2, s = A, o = 3;
                        break;
                    case 3:
                        n[r++] = (3 & s) << 6 | A, o = 0;
                }
            }
            if (1 == o) throw Error("invalid base64 string.");
            return n.subarray(0, r);
        },
        enc (e) {
            let t, A = "", n = 0, r = 0;
            for(let o = 0; o < e.length; o++)switch(t = e[o], n){
                case 0:
                    A += _t[t >> 2], r = (3 & t) << 4, n = 1;
                    break;
                case 1:
                    A += _t[r | t >> 4], r = (15 & t) << 2, n = 2;
                    break;
                case 2:
                    A += _t[r | t >> 6], A += _t[63 & t], n = 0;
            }
            return n && (A += _t[r], A += "=", 1 == n && (A += "=")), A;
        }
    };
    function Yt(e, t, A) {
        Vt(t, e);
        const n = t.runtime.bin.makeReadOptions(A), r = function(e, t) {
            if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
                for(let A = e.length - 1; A >= 0; --A)if (e[A].no == t.no) return [
                    e[A]
                ];
                return [];
            }
            return e.filter((e)=>e.no === t.no);
        }(e.getType().runtime.bin.listUnknownFields(e), t.field), [o, s] = Lt(t);
        for (const e of r)t.runtime.bin.readField(o, n.readerFactory(e.data), t.field, e.wireType, n);
        return s();
    }
    function Gt(e, t, A, n) {
        Vt(t, e);
        const r = t.runtime.bin.makeReadOptions(n), o = t.runtime.bin.makeWriteOptions(n);
        if (Pt(e, t)) {
            const A = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != t.field.no);
            e.getType().runtime.bin.discardUnknownFields(e);
            for (const t of A)e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data);
        }
        const s = o.writerFactory();
        let i = t.field;
        i.opt || i.repeated || "enum" != i.kind && "scalar" != i.kind || (i = {
            ...t.field,
            opt: !0
        }), t.runtime.bin.writeField(i, A, s, o);
        const a = r.readerFactory(s.finish());
        for(; a.pos < a.len;){
            const [t, A] = a.tag(), n = a.skip(A, t);
            e.getType().runtime.bin.onUnknownField(e, t, A, n);
        }
    }
    function Pt(e, t) {
        const A = e.getType();
        return t.extendee.typeName === A.typeName && !!A.runtime.bin.listUnknownFields(e).find((e)=>e.no == t.field.no);
    }
    function Vt(e, t) {
        ct(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
    }
    function xt(e, t) {
        const A = e.localName;
        if (e.repeated) return t[A].length > 0;
        if (e.oneof) return t[e.oneof.localName].case === A;
        switch(e.kind){
            case "enum":
            case "scalar":
                return e.opt || e.req ? void 0 !== t[A] : "enum" == e.kind ? t[A] !== e.T.values[0].no : !Ut(e.T, t[A]);
            case "message":
                return void 0 !== t[A];
            case "map":
                return Object.keys(t[A]).length > 0;
        }
    }
    function Ht(e, t) {
        const A = e.localName, n = !e.opt && !e.req;
        if (e.repeated) t[A] = [];
        else if (e.oneof) t[e.oneof.localName] = {
            case: void 0
        };
        else switch(e.kind){
            case "map":
                t[A] = {};
                break;
            case "enum":
                t[A] = n ? e.T.values[0].no : void 0;
                break;
            case "scalar":
                t[A] = n ? Mt(e.T, e.L) : void 0;
                break;
            case "message":
                t[A] = void 0;
        }
    }
    function qt(e, t) {
        if (null === e || "object" != typeof e) return !1;
        if (!Object.getOwnPropertyNames(ft.prototype).every((t)=>t in e && "function" == typeof e[t])) return !1;
        const A = e.getType();
        return null !== A && "function" == typeof A && "typeName" in A && "string" == typeof A.typeName && (void 0 === t || A.typeName == t.typeName);
    }
    function Wt(e, t) {
        const A = qt(t);
        return A || e.fieldWrapper ? A || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t) : new e(t);
    }
    Rt.DOUBLE, Rt.FLOAT, Rt.INT64, Rt.UINT64, Rt.INT32, Rt.UINT32, Rt.BOOL, Rt.STRING, Rt.BYTES;
    const jt = {
        ignoreUnknownFields: !1
    }, Kt = {
        emitDefaultValues: !1,
        enumAsInteger: !1,
        useProtoFieldName: !1,
        prettySpaces: 0
    };
    function Xt(e) {
        return e ? {
            ...jt,
            ...e
        } : jt;
    }
    function Zt(e) {
        return e ? {
            ...Kt,
            ...e
        } : Kt;
    }
    const zt = Symbol(), $t = Symbol();
    function eA(e) {
        if (null === e) return "null";
        switch(typeof e){
            case "object":
                return Array.isArray(e) ? "array" : "object";
            case "string":
                return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
            default:
                return String(e);
        }
    }
    function tA(e, t, A, n, r) {
        let o = A.localName;
        if (A.repeated) {
            if (ct("map" != A.kind), null === t) return;
            if (!Array.isArray(t)) throw new Error(`cannot decode field ${r.typeName}.${A.name} from JSON: ${eA(t)}`);
            const s = e[o];
            for (const e of t){
                if (null === e) throw new Error(`cannot decode field ${r.typeName}.${A.name} from JSON: ${eA(e)}`);
                switch(A.kind){
                    case "message":
                        s.push(A.T.fromJson(e, n));
                        break;
                    case "enum":
                        const t = rA(A.T, e, n.ignoreUnknownFields, !0);
                        t !== $t && s.push(t);
                        break;
                    case "scalar":
                        try {
                            s.push(nA(A.T, e, A.L, !0));
                        } catch (t) {
                            let n = `cannot decode field ${r.typeName}.${A.name} from JSON: ${eA(e)}`;
                            throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
                        }
                }
            }
        } else if ("map" == A.kind) {
            if (null === t) return;
            if ("object" != typeof t || Array.isArray(t)) throw new Error(`cannot decode field ${r.typeName}.${A.name} from JSON: ${eA(t)}`);
            const s = e[o];
            for (const [e, o] of Object.entries(t)){
                if (null === o) throw new Error(`cannot decode field ${r.typeName}.${A.name} from JSON: map value null`);
                let i;
                try {
                    i = AA(A.K, e);
                } catch (e) {
                    let n = `cannot decode map key for field ${r.typeName}.${A.name} from JSON: ${eA(t)}`;
                    throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                }
                switch(A.V.kind){
                    case "message":
                        s[i] = A.V.T.fromJson(o, n);
                        break;
                    case "enum":
                        const e = rA(A.V.T, o, n.ignoreUnknownFields, !0);
                        e !== $t && (s[i] = e);
                        break;
                    case "scalar":
                        try {
                            s[i] = nA(A.V.T, o, Ft.BIGINT, !0);
                        } catch (e) {
                            let n = `cannot decode map value for field ${r.typeName}.${A.name} from JSON: ${eA(t)}`;
                            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                        }
                }
            }
        } else switch(A.oneof && (e = e[A.oneof.localName] = {
            case: o
        }, o = "value"), A.kind){
            case "message":
                const s = A.T;
                if (null === t && "google.protobuf.Value" != s.typeName) return;
                let i = e[o];
                qt(i) ? i.fromJson(t, n) : (e[o] = i = s.fromJson(t, n), s.fieldWrapper && !A.oneof && (e[o] = s.fieldWrapper.unwrapField(i)));
                break;
            case "enum":
                const a = rA(A.T, t, n.ignoreUnknownFields, !1);
                switch(a){
                    case zt:
                        Ht(A, e);
                        break;
                    case $t:
                        break;
                    default:
                        e[o] = a;
                }
                break;
            case "scalar":
                try {
                    const n = nA(A.T, t, A.L, !1);
                    if (n === zt) Ht(A, e);
                    else e[o] = n;
                } catch (e) {
                    let n = `cannot decode field ${r.typeName}.${A.name} from JSON: ${eA(t)}`;
                    throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                }
        }
    }
    function AA(e, t) {
        if (e === Rt.BOOL) switch(t){
            case "true":
                t = !0;
                break;
            case "false":
                t = !1;
        }
        return nA(e, t, Ft.BIGINT, !0).toString();
    }
    function nA(e, t, A, n) {
        if (null === t) return n ? Mt(e, A) : zt;
        switch(e){
            case Rt.DOUBLE:
            case Rt.FLOAT:
                if ("NaN" === t) return Number.NaN;
                if ("Infinity" === t) return Number.POSITIVE_INFINITY;
                if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
                if ("" === t) break;
                if ("string" == typeof t && t.trim().length !== t.length) break;
                if ("string" != typeof t && "number" != typeof t) break;
                const n = Number(t);
                if (Number.isNaN(n)) break;
                if (!Number.isFinite(n)) break;
                return e == Rt.FLOAT && gt(n), n;
            case Rt.INT32:
            case Rt.FIXED32:
            case Rt.SFIXED32:
            case Rt.SINT32:
            case Rt.UINT32:
                let r;
                if ("number" == typeof t ? r = t : "string" == typeof t && t.length > 0 && t.trim().length === t.length && (r = Number(t)), void 0 === r) break;
                return e == Rt.UINT32 || e == Rt.FIXED32 ? ut(r) : lt(r), r;
            case Rt.INT64:
            case Rt.SFIXED64:
            case Rt.SINT64:
                if ("number" != typeof t && "string" != typeof t) break;
                const o = St.parse(t);
                return A ? o.toString() : o;
            case Rt.FIXED64:
            case Rt.UINT64:
                if ("number" != typeof t && "string" != typeof t) break;
                const s = St.uParse(t);
                return A ? s.toString() : s;
            case Rt.BOOL:
                if ("boolean" != typeof t) break;
                return t;
            case Rt.STRING:
                if ("string" != typeof t) break;
                try {
                    encodeURIComponent(t);
                } catch (e) {
                    throw new Error("invalid UTF8");
                }
                return t;
            case Rt.BYTES:
                if ("" === t) return new Uint8Array(0);
                if ("string" != typeof t) break;
                return Ot.dec(t);
        }
        throw new Error;
    }
    function rA(e, t, A, n) {
        if (null === t) return "google.protobuf.NullValue" == e.typeName ? 0 : n ? e.values[0].no : zt;
        switch(typeof t){
            case "number":
                if (Number.isInteger(t)) return t;
                break;
            case "string":
                const n = e.findName(t);
                if (void 0 !== n) return n.no;
                if (A) return $t;
        }
        throw new Error(`cannot decode enum ${e.typeName} from JSON: ${eA(t)}`);
    }
    function oA(e) {
        return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
    }
    function sA(e, t, A) {
        if ("map" == e.kind) {
            ct("object" == typeof t && null != t);
            const n = {}, r = Object.entries(t);
            switch(e.V.kind){
                case "scalar":
                    for (const [t, A] of r)n[t.toString()] = aA(e.V.T, A);
                    break;
                case "message":
                    for (const [e, t] of r)n[e.toString()] = t.toJson(A);
                    break;
                case "enum":
                    const t = e.V.T;
                    for (const [e, o] of r)n[e.toString()] = iA(t, o, A.enumAsInteger);
            }
            return A.emitDefaultValues || r.length > 0 ? n : void 0;
        }
        if (e.repeated) {
            ct(Array.isArray(t));
            const n = [];
            switch(e.kind){
                case "scalar":
                    for(let A = 0; A < t.length; A++)n.push(aA(e.T, t[A]));
                    break;
                case "enum":
                    for(let r = 0; r < t.length; r++)n.push(iA(e.T, t[r], A.enumAsInteger));
                    break;
                case "message":
                    for(let e = 0; e < t.length; e++)n.push(t[e].toJson(A));
            }
            return A.emitDefaultValues || n.length > 0 ? n : void 0;
        }
        switch(e.kind){
            case "scalar":
                return aA(e.T, t);
            case "enum":
                return iA(e.T, t, A.enumAsInteger);
            case "message":
                return Wt(e.T, t).toJson(A);
        }
    }
    function iA(e, t, A) {
        if (ct("number" == typeof t), "google.protobuf.NullValue" == e.typeName) return null;
        if (A) return t;
        const n = e.findNumber(t);
        return n?.name ?? t;
    }
    function aA(e, t) {
        switch(e){
            case Rt.INT32:
            case Rt.SFIXED32:
            case Rt.SINT32:
            case Rt.FIXED32:
            case Rt.UINT32:
                return ct("number" == typeof t), t;
            case Rt.FLOAT:
            case Rt.DOUBLE:
                return ct("number" == typeof t), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
            case Rt.STRING:
                return ct("string" == typeof t), t;
            case Rt.BOOL:
                return ct("boolean" == typeof t), t;
            case Rt.UINT64:
            case Rt.FIXED64:
            case Rt.INT64:
            case Rt.SFIXED64:
            case Rt.SINT64:
                return ct("bigint" == typeof t || "string" == typeof t || "number" == typeof t), t.toString();
            case Rt.BYTES:
                return ct(t instanceof Uint8Array), Ot.enc(t);
        }
    }
    var cA = ((e)=>(e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32", e))(cA || {});
    class lA {
        constructor(e){
            this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = [];
        }
        finish() {
            this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
            let e = 0;
            for(let t = 0; t < this.chunks.length; t++)e += this.chunks[t].length;
            let t = new Uint8Array(e), A = 0;
            for(let e = 0; e < this.chunks.length; e++)t.set(this.chunks[e], A), A += this.chunks[e].length;
            return this.chunks = [], t;
        }
        fork() {
            return this.stack.push({
                chunks: this.chunks,
                buf: this.buf
            }), this.chunks = [], this.buf = [], this;
        }
        join() {
            let e = this.finish(), t = this.stack.pop();
            if (!t) throw new Error("invalid state, fork stack empty");
            return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e);
        }
        tag(e, t) {
            return this.uint32((e << 3 | t) >>> 0);
        }
        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
        }
        uint32(e) {
            for(ut(e); e > 127;)this.buf.push(127 & e | 128), e >>>= 7;
            return this.buf.push(e), this;
        }
        int32(e) {
            return lt(e), Tt(e, this.buf), this;
        }
        bool(e) {
            return this.buf.push(e ? 1 : 0), this;
        }
        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e);
        }
        string(e) {
            let t = this.textEncoder.encode(e);
            return this.uint32(t.byteLength), this.raw(t);
        }
        float(e) {
            gt(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
        }
        double(e) {
            let t = new Uint8Array(8);
            return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
        }
        fixed32(e) {
            ut(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
        }
        sfixed32(e) {
            lt(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
        }
        sint32(e) {
            return lt(e), Tt(e = (e << 1 ^ e >> 31) >>> 0, this.buf), this;
        }
        sfixed64(e) {
            let t = new Uint8Array(8), A = new DataView(t.buffer), n = St.enc(e);
            return A.setInt32(0, n.lo, !0), A.setInt32(4, n.hi, !0), this.raw(t);
        }
        fixed64(e) {
            let t = new Uint8Array(8), A = new DataView(t.buffer), n = St.uEnc(e);
            return A.setInt32(0, n.lo, !0), A.setInt32(4, n.hi, !0), this.raw(t);
        }
        int64(e) {
            let t = St.enc(e);
            return pt(t.lo, t.hi, this.buf), this;
        }
        sint64(e) {
            let t = St.enc(e), A = t.hi >> 31;
            return pt(t.lo << 1 ^ A, (t.hi << 1 | t.lo >>> 31) ^ A, this.buf), this;
        }
        uint64(e) {
            let t = St.uEnc(e);
            return pt(t.lo, t.hi, this.buf), this;
        }
    }
    class uA {
        constructor(e, t){
            this.varint64 = Ct, this.uint32 = Dt, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder;
        }
        tag() {
            let e = this.uint32(), t = e >>> 3, A = 7 & e;
            if (t <= 0 || A < 0 || A > 5) throw new Error("illegal tag: field no " + t + " wire type " + A);
            return [
                t,
                A
            ];
        }
        skip(e, t) {
            let A = this.pos;
            switch(e){
                case 0:
                    for(; 128 & this.buf[this.pos++];);
                    break;
                case 1:
                    this.pos += 4;
                case 5:
                    this.pos += 4;
                    break;
                case 2:
                    let A = this.uint32();
                    this.pos += A;
                    break;
                case 3:
                    for(;;){
                        const [e, A] = this.tag();
                        if (4 === A) {
                            if (void 0 !== t && e !== t) throw new Error("invalid end group tag");
                            break;
                        }
                        this.skip(A, e);
                    }
                    break;
                default:
                    throw new Error("cant skip wire type " + e);
            }
            return this.assertBounds(), this.buf.subarray(A, this.pos);
        }
        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF");
        }
        int32() {
            return 0 | this.uint32();
        }
        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(1 & e);
        }
        int64() {
            return St.dec(...this.varint64());
        }
        uint64() {
            return St.uDec(...this.varint64());
        }
        sint64() {
            let [e, t] = this.varint64(), A = -(1 & e);
            return e = (e >>> 1 | (1 & t) << 31) ^ A, t = t >>> 1 ^ A, St.dec(e, t);
        }
        bool() {
            let [e, t] = this.varint64();
            return 0 !== e || 0 !== t;
        }
        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0);
        }
        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0);
        }
        fixed64() {
            return St.uDec(this.sfixed32(), this.sfixed32());
        }
        sfixed64() {
            return St.dec(this.sfixed32(), this.sfixed32());
        }
        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0);
        }
        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0);
        }
        bytes() {
            let e = this.uint32(), t = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
        }
        string() {
            return this.textDecoder.decode(this.bytes());
        }
    }
    const gA = Symbol("@bufbuild/protobuf/unknown-fields"), EA = {
        readUnknownFields: !0,
        readerFactory: (e)=>new uA(e)
    }, hA = {
        writeUnknownFields: !0,
        writerFactory: ()=>new lA
    };
    function dA(e) {
        return e ? {
            ...EA,
            ...e
        } : EA;
    }
    function IA(e) {
        return e ? {
            ...hA,
            ...e
        } : hA;
    }
    function BA(e, t, A, n, r) {
        let { repeated: o, localName: s } = A;
        switch(A.oneof && ((e = e[A.oneof.localName]).case != s && delete e.value, e.case = s, s = "value"), A.kind){
            case "scalar":
            case "enum":
                const i = "enum" == A.kind ? Rt.INT32 : A.T;
                let a = CA;
                if ("scalar" == A.kind && A.L > 0 && (a = fA), o) {
                    let A = e[s];
                    if (n == cA.LengthDelimited && i != Rt.STRING && i != Rt.BYTES) {
                        let e = t.uint32() + t.pos;
                        for(; t.pos < e;)A.push(a(t, i));
                    } else A.push(a(t, i));
                } else e[s] = a(t, i);
                break;
            case "message":
                const c = A.T;
                o ? e[s].push(QA(t, new c, r, A)) : qt(e[s]) ? QA(t, e[s], r, A) : (e[s] = QA(t, new c, r, A), !c.fieldWrapper || A.oneof || A.repeated || (e[s] = c.fieldWrapper.unwrapField(e[s])));
                break;
            case "map":
                let [l, u] = function(e, t, A) {
                    const n = t.uint32(), r = t.pos + n;
                    let o, s;
                    for(; t.pos < r;){
                        const [n] = t.tag();
                        switch(n){
                            case 1:
                                o = CA(t, e.K);
                                break;
                            case 2:
                                switch(e.V.kind){
                                    case "scalar":
                                        s = CA(t, e.V.T);
                                        break;
                                    case "enum":
                                        s = t.int32();
                                        break;
                                    case "message":
                                        s = QA(t, new e.V.T, A, void 0);
                                }
                        }
                    }
                    void 0 === o && (o = Mt(e.K, Ft.BIGINT));
                    "string" != typeof o && "number" != typeof o && (o = o.toString());
                    if (void 0 === s) switch(e.V.kind){
                        case "scalar":
                            s = Mt(e.V.T, Ft.BIGINT);
                            break;
                        case "enum":
                            s = e.V.T.values[0].no;
                            break;
                        case "message":
                            s = new e.V.T;
                    }
                    return [
                        o,
                        s
                    ];
                }(A, t, r);
                e[s][l] = u;
        }
    }
    function QA(e, t, A, n) {
        const r = t.getType().runtime.bin, o = n?.delimited;
        return r.readMessage(t, e, o ? n.no : e.uint32(), A, o), t;
    }
    function fA(e, t) {
        const A = CA(e, t);
        return "bigint" == typeof A ? A.toString() : A;
    }
    function CA(e, t) {
        switch(t){
            case Rt.STRING:
                return e.string();
            case Rt.BOOL:
                return e.bool();
            case Rt.DOUBLE:
                return e.double();
            case Rt.FLOAT:
                return e.float();
            case Rt.INT32:
                return e.int32();
            case Rt.INT64:
                return e.int64();
            case Rt.UINT64:
                return e.uint64();
            case Rt.FIXED64:
                return e.fixed64();
            case Rt.BYTES:
                return e.bytes();
            case Rt.FIXED32:
                return e.fixed32();
            case Rt.SFIXED32:
                return e.sfixed32();
            case Rt.SFIXED64:
                return e.sfixed64();
            case Rt.SINT64:
                return e.sint64();
            case Rt.UINT32:
                return e.uint32();
            case Rt.SINT32:
                return e.sint32();
        }
    }
    function pA(e, t, A, n) {
        ct(void 0 !== t);
        const r = e.repeated;
        switch(e.kind){
            case "scalar":
            case "enum":
                let o = "enum" == e.kind ? Rt.INT32 : e.T;
                if (r) if (ct(Array.isArray(t)), e.packed) !function(e, t, A, n) {
                    if (!n.length) return;
                    e.tag(A, cA.LengthDelimited).fork();
                    let [, r] = kA(t);
                    for(let t = 0; t < n.length; t++)e[r](n[t]);
                    e.join();
                }(A, o, e.no, t);
                else for (const n of t)wA(A, o, e.no, n);
                else wA(A, o, e.no, t);
                break;
            case "message":
                if (r) {
                    ct(Array.isArray(t));
                    for (const r of t)yA(A, n, e, r);
                } else yA(A, n, e, t);
                break;
            case "map":
                ct("object" == typeof t && null != t);
                for (const [r, o] of Object.entries(t))mA(A, n, e, r, o);
        }
    }
    function mA(e, t, A, n, r) {
        e.tag(A.no, cA.LengthDelimited), e.fork();
        let o = n;
        switch(A.K){
            case Rt.INT32:
            case Rt.FIXED32:
            case Rt.UINT32:
            case Rt.SFIXED32:
            case Rt.SINT32:
                o = Number.parseInt(n);
                break;
            case Rt.BOOL:
                ct("true" == n || "false" == n), o = "true" == n;
        }
        switch(wA(e, A.K, 1, o), A.V.kind){
            case "scalar":
                wA(e, A.V.T, 2, r);
                break;
            case "enum":
                wA(e, Rt.INT32, 2, r);
                break;
            case "message":
                ct(void 0 !== r), e.tag(2, cA.LengthDelimited).bytes(r.toBinary(t));
        }
        e.join();
    }
    function yA(e, t, A, n) {
        const r = Wt(A.T, n);
        A.delimited ? e.tag(A.no, cA.StartGroup).raw(r.toBinary(t)).tag(A.no, cA.EndGroup) : e.tag(A.no, cA.LengthDelimited).bytes(r.toBinary(t));
    }
    function wA(e, t, A, n) {
        ct(void 0 !== n);
        let [r, o] = kA(t);
        e.tag(A, r)[o](n);
    }
    function kA(e) {
        let t = cA.Varint;
        switch(e){
            case Rt.BYTES:
            case Rt.STRING:
                t = cA.LengthDelimited;
                break;
            case Rt.DOUBLE:
            case Rt.FIXED64:
            case Rt.SFIXED64:
                t = cA.Bit64;
                break;
            case Rt.FIXED32:
            case Rt.SFIXED32:
            case Rt.FLOAT:
                t = cA.Bit32;
        }
        return [
            t,
            Rt[e].toLowerCase()
        ];
    }
    function bA(e) {
        if (void 0 === e) return e;
        if (qt(e)) return e.clone();
        if (e instanceof Uint8Array) {
            const t = new Uint8Array(e.byteLength);
            return t.set(e), t;
        }
        return e;
    }
    function NA(e) {
        return e instanceof Uint8Array ? e : new Uint8Array(e);
    }
    function TA(e, t, A) {
        return {
            syntax: e,
            json: {
                makeReadOptions: Xt,
                makeWriteOptions: Zt,
                readMessage (e, t, A, n) {
                    if (null == t || Array.isArray(t) || "object" != typeof t) throw new Error(`cannot decode message ${e.typeName} from JSON: ${eA(t)}`);
                    n = n ?? new e;
                    const r = new Map, o = A.typeRegistry;
                    for (const [s, i] of Object.entries(t)){
                        const t = e.fields.findJsonName(s);
                        if (t) {
                            if (t.oneof) {
                                if (null === i && "scalar" == t.kind) continue;
                                const A = r.get(t.oneof);
                                if (void 0 !== A) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${A}", "${s}"`);
                                r.set(t.oneof, s);
                            }
                            tA(n, i, t, A, e);
                        } else {
                            let t = !1;
                            if (o?.findExtension && s.startsWith("[") && s.endsWith("]")) {
                                const r = o.findExtension(s.substring(1, s.length - 1));
                                if (r && r.extendee.typeName == e.typeName) {
                                    t = !0;
                                    const [e, o] = Lt(r);
                                    tA(e, i, r.field, A, r), Gt(n, r, o(), A);
                                }
                            }
                            if (!t && !A.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${s}" is unknown`);
                        }
                    }
                    return n;
                },
                writeMessage (e, t) {
                    const A = e.getType(), n = {};
                    let r;
                    try {
                        for (r of A.fields.byNumber()){
                            if (!xt(r, e)) {
                                if (r.req) throw "required field not set";
                                if (!t.emitDefaultValues) continue;
                                if (!oA(r)) continue;
                            }
                            const A = sA(r, r.oneof ? e[r.oneof.localName].value : e[r.localName], t);
                            void 0 !== A && (n[t.useProtoFieldName ? r.name : r.jsonName] = A);
                        }
                        const o = t.typeRegistry;
                        if (o?.findExtensionFor) for (const r of A.runtime.bin.listUnknownFields(e)){
                            const s = o.findExtensionFor(A.typeName, r.no);
                            if (s && Pt(e, s)) {
                                const A = Yt(e, s, t), r = sA(s.field, A, t);
                                void 0 !== r && (n[s.field.jsonName] = r);
                            }
                        }
                    } catch (e) {
                        const t = r ? `cannot encode field ${A.typeName}.${r.name} to JSON` : `cannot encode message ${A.typeName} to JSON`, n = e instanceof Error ? e.message : String(e);
                        throw new Error(t + (n.length > 0 ? `: ${n}` : ""));
                    }
                    return n;
                },
                readScalar: (e, t, A)=>nA(e, t, A ?? Ft.BIGINT, !0),
                writeScalar (e, t, A) {
                    if (void 0 !== t) return A || Ut(e, t) ? aA(e, t) : void 0;
                },
                debug: eA
            },
            bin: {
                makeReadOptions: dA,
                makeWriteOptions: IA,
                listUnknownFields: (e)=>e[gA] ?? [],
                discardUnknownFields (e) {
                    delete e[gA];
                },
                writeUnknownFields (e, t) {
                    const A = e[gA];
                    if (A) for (const e of A)t.tag(e.no, e.wireType).raw(e.data);
                },
                onUnknownField (e, t, A, n) {
                    const r = e;
                    Array.isArray(r[gA]) || (r[gA] = []), r[gA].push({
                        no: t,
                        wireType: A,
                        data: new Uint8Array(n)
                    });
                },
                readMessage (e, t, A, n, r) {
                    const o = e.getType(), s = r ? t.len : t.pos + A;
                    let i, a;
                    for(; t.pos < s && ([i, a] = t.tag(), !0 !== r || a != cA.EndGroup);){
                        const A = o.fields.find(i);
                        if (!A) {
                            const A = t.skip(a, i);
                            n.readUnknownFields && this.onUnknownField(e, i, a, A);
                            continue;
                        }
                        BA(e, t, A, a, n);
                    }
                    if (r && (a != cA.EndGroup || i !== A)) throw new Error("invalid end group tag");
                },
                readField: BA,
                writeMessage (e, t, A) {
                    const n = e.getType();
                    for (const r of n.fields.byNumber())if (xt(r, e)) pA(r, r.oneof ? e[r.oneof.localName].value : e[r.localName], t, A);
                    else if (r.req) throw new Error(`cannot encode field ${n.typeName}.${r.name} to binary: required field not set`);
                    return A.writeUnknownFields && this.writeUnknownFields(e, t), t;
                },
                writeField (e, t, A, n) {
                    void 0 !== t && pA(e, t, A, n);
                }
            },
            util: {
                ...{
                    setEnumType: dt,
                    initPartial (e, t) {
                        if (void 0 === e) return;
                        const A = t.getType();
                        for (const n of A.fields.byMember()){
                            const A = n.localName, r = t, o = e;
                            if (null != o[A]) switch(n.kind){
                                case "oneof":
                                    const e = o[A].case;
                                    if (void 0 === e) continue;
                                    const t = n.findField(e);
                                    let s = o[A].value;
                                    t && "message" == t.kind && !qt(s, t.T) ? s = new t.T(s) : t && "scalar" === t.kind && t.T === Rt.BYTES && (s = NA(s)), r[A] = {
                                        case: e,
                                        value: s
                                    };
                                    break;
                                case "scalar":
                                case "enum":
                                    let i = o[A];
                                    n.T === Rt.BYTES && (i = n.repeated ? i.map(NA) : NA(i)), r[A] = i;
                                    break;
                                case "map":
                                    switch(n.V.kind){
                                        case "scalar":
                                        case "enum":
                                            if (n.V.T === Rt.BYTES) for (const [e, t] of Object.entries(o[A]))r[A][e] = NA(t);
                                            else Object.assign(r[A], o[A]);
                                            break;
                                        case "message":
                                            const e = n.V.T;
                                            for (const t of Object.keys(o[A])){
                                                let n = o[A][t];
                                                e.fieldWrapper || (n = new e(n)), r[A][t] = n;
                                            }
                                    }
                                    break;
                                case "message":
                                    const a = n.T;
                                    if (n.repeated) r[A] = o[A].map((e)=>qt(e, a) ? e : new a(e));
                                    else {
                                        const e = o[A];
                                        a.fieldWrapper ? "google.protobuf.BytesValue" === a.typeName ? r[A] = NA(e) : r[A] = e : r[A] = qt(e, a) ? e : new a(e);
                                    }
                            }
                        }
                    },
                    equals: (e, t, A)=>t === A || !(!t || !A) && e.fields.byMember().every((e)=>{
                            const n = t[e.localName], r = A[e.localName];
                            if (e.repeated) {
                                if (n.length !== r.length) return !1;
                                switch(e.kind){
                                    case "message":
                                        return n.every((t, A)=>e.T.equals(t, r[A]));
                                    case "scalar":
                                        return n.every((t, A)=>vt(e.T, t, r[A]));
                                    case "enum":
                                        return n.every((e, t)=>vt(Rt.INT32, e, r[t]));
                                }
                                throw new Error(`repeated cannot contain ${e.kind}`);
                            }
                            switch(e.kind){
                                case "message":
                                    return e.T.equals(n, r);
                                case "enum":
                                    return vt(Rt.INT32, n, r);
                                case "scalar":
                                    return vt(e.T, n, r);
                                case "oneof":
                                    if (n.case !== r.case) return !1;
                                    const t = e.findField(n.case);
                                    if (void 0 === t) return !0;
                                    switch(t.kind){
                                        case "message":
                                            return t.T.equals(n.value, r.value);
                                        case "enum":
                                            return vt(Rt.INT32, n.value, r.value);
                                        case "scalar":
                                            return vt(t.T, n.value, r.value);
                                    }
                                    throw new Error(`oneof cannot contain ${t.kind}`);
                                case "map":
                                    const A = Object.keys(n).concat(Object.keys(r));
                                    switch(e.V.kind){
                                        case "message":
                                            const t = e.V.T;
                                            return A.every((e)=>t.equals(n[e], r[e]));
                                        case "enum":
                                            return A.every((e)=>vt(Rt.INT32, n[e], r[e]));
                                        case "scalar":
                                            const o = e.V.T;
                                            return A.every((e)=>vt(o, n[e], r[e]));
                                    }
                            }
                        }),
                    clone (e) {
                        const t = e.getType(), A = new t, n = A;
                        for (const A of t.fields.byMember()){
                            const t = e[A.localName];
                            let r;
                            if (A.repeated) r = t.map(bA);
                            else if ("map" == A.kind) {
                                r = n[A.localName];
                                for (const [e, A] of Object.entries(t))r[e] = bA(A);
                            } else r = "oneof" == A.kind ? A.findField(t.case) ? {
                                case: t.case,
                                value: bA(t.value)
                            } : {
                                case: void 0
                            } : bA(t);
                            n[A.localName] = r;
                        }
                        for (const A of t.runtime.bin.listUnknownFields(e))t.runtime.bin.onUnknownField(n, A.no, A.wireType, A.data);
                        return A;
                    }
                },
                newFieldList: t,
                initFields: A
            },
            makeMessageType (e, t, A) {
                return function(e, t, A, n) {
                    const r = n?.localName ?? t.substring(t.lastIndexOf(".") + 1), o = {
                        [r]: function(t) {
                            e.util.initFields(this), e.util.initPartial(t, this);
                        }
                    }[r];
                    return Object.setPrototypeOf(o.prototype, new ft), Object.assign(o, {
                        runtime: e,
                        typeName: t,
                        fields: e.util.newFieldList(A),
                        fromBinary: (e, t)=>(new o).fromBinary(e, t),
                        fromJson: (e, t)=>(new o).fromJson(e, t),
                        fromJsonString: (e, t)=>(new o).fromJsonString(e, t),
                        equals: (t, A)=>e.util.equals(o, t, A)
                    }), o;
                }(this, e, t, A);
            },
            makeEnum: Bt,
            makeEnumType: It,
            getEnumType: ht,
            makeExtension (e, t, A) {
                return function(e, t, A, n) {
                    let r;
                    return {
                        typeName: t,
                        extendee: A,
                        get field () {
                            if (!r) {
                                const A = "function" == typeof n ? n() : n;
                                A.name = t.split(".").pop(), A.jsonName = `[${t}]`, r = e.util.newFieldList([
                                    A
                                ]).list()[0];
                            }
                            return r;
                        },
                        runtime: e
                    };
                }(this, e, t, A);
            }
        };
    }
    class DA {
        constructor(e, t){
            this._fields = e, this._normalizer = t;
        }
        findJsonName(e) {
            if (!this.jsonNames) {
                const e = {};
                for (const t of this.list())e[t.jsonName] = e[t.name] = t;
                this.jsonNames = e;
            }
            return this.jsonNames[e];
        }
        find(e) {
            if (!this.numbers) {
                const e = {};
                for (const t of this.list())e[t.no] = t;
                this.numbers = e;
            }
            return this.numbers[e];
        }
        list() {
            return this.all || (this.all = this._normalizer(this._fields)), this.all;
        }
        byNumber() {
            return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t)=>e.no - t.no)), this.numbersAsc;
        }
        byMember() {
            if (!this.members) {
                this.members = [];
                const e = this.members;
                let t;
                for (const A of this.list())A.oneof ? A.oneof !== t && (t = A.oneof, e.push(t)) : e.push(A);
            }
            return this.members;
        }
    }
    function SA(e, t) {
        const A = vA(e);
        return t ? A : JA(_A(A));
    }
    function RA(e) {
        return SA(e, !1);
    }
    const FA = vA;
    function vA(e) {
        let t = !1;
        const A = [];
        for(let n = 0; n < e.length; n++){
            let r = e.charAt(n);
            switch(r){
                case "_":
                    t = !0;
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    A.push(r), t = !1;
                    break;
                default:
                    t && (t = !1, r = r.toUpperCase()), A.push(r);
            }
        }
        return A.join("");
    }
    const MA = new Set([
        "constructor",
        "toString",
        "toJSON",
        "valueOf"
    ]), UA = new Set([
        "getType",
        "clone",
        "equals",
        "fromBinary",
        "fromJson",
        "fromJsonString",
        "toBinary",
        "toJson",
        "toJsonString",
        "toObject"
    ]), LA = (e)=>`${e}$`, _A = (e)=>UA.has(e) ? LA(e) : e, JA = (e)=>MA.has(e) ? LA(e) : e;
    class OA {
        constructor(e){
            this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = RA(e);
        }
        addField(e) {
            ct(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
        }
        findField(e) {
            if (!this._lookup) {
                this._lookup = Object.create(null);
                for(let e = 0; e < this.fields.length; e++)this._lookup[this.fields[e].localName] = this.fields[e];
            }
            return this._lookup[e];
        }
    }
    function YA(e, t) {
        const A = [];
        let n;
        for (const r of "function" == typeof e ? e() : e){
            const e = r;
            if (e.localName = SA(r.name, void 0 !== r.oneof), e.jsonName = r.jsonName ?? FA(r.name), e.repeated = r.repeated ?? !1, "scalar" == r.kind && (e.L = r.L ?? Ft.BIGINT), e.delimited = r.delimited ?? !1, e.req = r.req ?? !1, e.opt = r.opt ?? !1, void 0 === r.packed && (e.packed = !!t && ("enum" == r.kind || "scalar" == r.kind && r.T != Rt.BYTES && r.T != Rt.STRING)), void 0 !== r.oneof) {
                const t = "string" == typeof r.oneof ? r.oneof : r.oneof.name;
                n && n.name == t || (n = new OA(t)), e.oneof = n, n.addField(e);
            }
            A.push(e);
        }
        return A;
    }
    const GA = TA("proto3", (e)=>new DA(e, (e)=>YA(e, !0)), (e)=>{
        for (const t of e.getType().fields.byMember()){
            if (t.opt) continue;
            const A = t.localName, n = e;
            if (t.repeated) n[A] = [];
            else switch(t.kind){
                case "oneof":
                    n[A] = {
                        case: void 0
                    };
                    break;
                case "enum":
                    n[A] = 0;
                    break;
                case "map":
                    n[A] = {};
                    break;
                case "scalar":
                    n[A] = Mt(t.T, t.L);
            }
        }
    }), PA = TA("proto2", (e)=>new DA(e, (e)=>YA(e, !1)), (e)=>{
        for (const t of e.getType().fields.byMember()){
            const A = t.localName, n = e;
            if (t.repeated) n[A] = [];
            else switch(t.kind){
                case "oneof":
                    n[A] = {
                        case: void 0
                    };
                    break;
                case "map":
                    n[A] = {};
            }
        }
    });
    Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
    var VA = ((e)=>(e[e.Unary = 0] = "Unary", e[e.ServerStreaming = 1] = "ServerStreaming", e[e.ClientStreaming = 2] = "ClientStreaming", e[e.BiDiStreaming = 3] = "BiDiStreaming", e))(VA || {}), xA = ((e)=>(e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX", e))(xA || {});
    PA.util.setEnumType(xA, "google.protobuf.Edition", [
        {
            no: 0,
            name: "EDITION_UNKNOWN"
        },
        {
            no: 900,
            name: "EDITION_LEGACY"
        },
        {
            no: 998,
            name: "EDITION_PROTO2"
        },
        {
            no: 999,
            name: "EDITION_PROTO3"
        },
        {
            no: 1e3,
            name: "EDITION_2023"
        },
        {
            no: 1001,
            name: "EDITION_2024"
        },
        {
            no: 1,
            name: "EDITION_1_TEST_ONLY"
        },
        {
            no: 2,
            name: "EDITION_2_TEST_ONLY"
        },
        {
            no: 99997,
            name: "EDITION_99997_TEST_ONLY"
        },
        {
            no: 99998,
            name: "EDITION_99998_TEST_ONLY"
        },
        {
            no: 99999,
            name: "EDITION_99999_TEST_ONLY"
        },
        {
            no: 2147483647,
            name: "EDITION_MAX"
        }
    ]);
    const HA = class e extends ft {
        constructor(e){
            super(), this.file = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    HA.runtime = PA, HA.typeName = "google.protobuf.FileDescriptorSet", HA.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "file",
                kind: "message",
                T: WA,
                repeated: !0
            }
        ]);
    const qA = class e extends ft {
        constructor(e){
            super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    qA.runtime = PA, qA.typeName = "google.protobuf.FileDescriptorProto", qA.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "package",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "dependency",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 10,
                name: "public_dependency",
                kind: "scalar",
                T: 5,
                repeated: !0
            },
            {
                no: 11,
                name: "weak_dependency",
                kind: "scalar",
                T: 5,
                repeated: !0
            },
            {
                no: 4,
                name: "message_type",
                kind: "message",
                T: KA,
                repeated: !0
            },
            {
                no: 5,
                name: "enum_type",
                kind: "message",
                T: En,
                repeated: !0
            },
            {
                no: 6,
                name: "service",
                kind: "message",
                T: fn,
                repeated: !0
            },
            {
                no: 7,
                name: "extension",
                kind: "message",
                T: sn,
                repeated: !0
            },
            {
                no: 8,
                name: "options",
                kind: "message",
                T: yn,
                opt: !0
            },
            {
                no: 9,
                name: "source_code_info",
                kind: "message",
                T: lr,
                opt: !0
            },
            {
                no: 12,
                name: "syntax",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 14,
                name: "edition",
                kind: "enum",
                T: PA.getEnumType(xA),
                opt: !0
            }
        ]);
    let WA = qA;
    const jA = class e extends ft {
        constructor(e){
            super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    jA.runtime = PA, jA.typeName = "google.protobuf.DescriptorProto", jA.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "field",
                kind: "message",
                T: sn,
                repeated: !0
            },
            {
                no: 6,
                name: "extension",
                kind: "message",
                T: sn,
                repeated: !0
            },
            {
                no: 3,
                name: "nested_type",
                kind: "message",
                T: jA,
                repeated: !0
            },
            {
                no: 4,
                name: "enum_type",
                kind: "message",
                T: En,
                repeated: !0
            },
            {
                no: 5,
                name: "extension_range",
                kind: "message",
                T: ZA,
                repeated: !0
            },
            {
                no: 8,
                name: "oneof_decl",
                kind: "message",
                T: un,
                repeated: !0
            },
            {
                no: 7,
                name: "options",
                kind: "message",
                T: bn,
                opt: !0
            },
            {
                no: 9,
                name: "reserved_range",
                kind: "message",
                T: $A,
                repeated: !0
            },
            {
                no: 10,
                name: "reserved_name",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    let KA = jA;
    const XA = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    XA.runtime = PA, XA.typeName = "google.protobuf.DescriptorProto.ExtensionRange", XA.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "start",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "end",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: tn,
                opt: !0
            }
        ]);
    let ZA = XA;
    const zA = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    zA.runtime = PA, zA.typeName = "google.protobuf.DescriptorProto.ReservedRange", zA.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "start",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "end",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]);
    let $A = zA;
    const en = class e extends ft {
        constructor(e){
            super(), this.uninterpretedOption = [], this.declaration = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    en.runtime = PA, en.typeName = "google.protobuf.ExtensionRangeOptions", en.fields = PA.util.newFieldList(()=>[
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            },
            {
                no: 2,
                name: "declaration",
                kind: "message",
                T: rn,
                repeated: !0
            },
            {
                no: 50,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 3,
                name: "verification",
                kind: "enum",
                T: PA.getEnumType(An),
                opt: !0,
                default: 1
            }
        ]);
    let tn = en;
    var An = ((e)=>(e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED", e))(An || {});
    PA.util.setEnumType(An, "google.protobuf.ExtensionRangeOptions.VerificationState", [
        {
            no: 0,
            name: "DECLARATION"
        },
        {
            no: 1,
            name: "UNVERIFIED"
        }
    ]);
    const nn = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    nn.runtime = PA, nn.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", nn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "number",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "full_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "reserved",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "repeated",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]);
    let rn = nn;
    const on = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    on.runtime = PA, on.typeName = "google.protobuf.FieldDescriptorProto", on.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "number",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "label",
                kind: "enum",
                T: PA.getEnumType(cn),
                opt: !0
            },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: PA.getEnumType(an),
                opt: !0
            },
            {
                no: 6,
                name: "type_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "extendee",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "default_value",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "oneof_index",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 10,
                name: "json_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "options",
                kind: "message",
                T: Tn,
                opt: !0
            },
            {
                no: 17,
                name: "proto3_optional",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]);
    let sn = on;
    var an = ((e)=>(e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(an || {});
    PA.util.setEnumType(an, "google.protobuf.FieldDescriptorProto.Type", [
        {
            no: 1,
            name: "TYPE_DOUBLE"
        },
        {
            no: 2,
            name: "TYPE_FLOAT"
        },
        {
            no: 3,
            name: "TYPE_INT64"
        },
        {
            no: 4,
            name: "TYPE_UINT64"
        },
        {
            no: 5,
            name: "TYPE_INT32"
        },
        {
            no: 6,
            name: "TYPE_FIXED64"
        },
        {
            no: 7,
            name: "TYPE_FIXED32"
        },
        {
            no: 8,
            name: "TYPE_BOOL"
        },
        {
            no: 9,
            name: "TYPE_STRING"
        },
        {
            no: 10,
            name: "TYPE_GROUP"
        },
        {
            no: 11,
            name: "TYPE_MESSAGE"
        },
        {
            no: 12,
            name: "TYPE_BYTES"
        },
        {
            no: 13,
            name: "TYPE_UINT32"
        },
        {
            no: 14,
            name: "TYPE_ENUM"
        },
        {
            no: 15,
            name: "TYPE_SFIXED32"
        },
        {
            no: 16,
            name: "TYPE_SFIXED64"
        },
        {
            no: 17,
            name: "TYPE_SINT32"
        },
        {
            no: 18,
            name: "TYPE_SINT64"
        }
    ]);
    var cn = ((e)=>(e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED", e))(cn || {});
    PA.util.setEnumType(cn, "google.protobuf.FieldDescriptorProto.Label", [
        {
            no: 1,
            name: "LABEL_OPTIONAL"
        },
        {
            no: 3,
            name: "LABEL_REPEATED"
        },
        {
            no: 2,
            name: "LABEL_REQUIRED"
        }
    ]);
    const ln = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    ln.runtime = PA, ln.typeName = "google.protobuf.OneofDescriptorProto", ln.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "options",
                kind: "message",
                T: Jn,
                opt: !0
            }
        ]);
    let un = ln;
    const gn = class e extends ft {
        constructor(e){
            super(), this.value = [], this.reservedRange = [], this.reservedName = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    gn.runtime = PA, gn.typeName = "google.protobuf.EnumDescriptorProto", gn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "value",
                kind: "message",
                T: Bn,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: Yn,
                opt: !0
            },
            {
                no: 4,
                name: "reserved_range",
                kind: "message",
                T: dn,
                repeated: !0
            },
            {
                no: 5,
                name: "reserved_name",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    let En = gn;
    const hn = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    hn.runtime = PA, hn.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", hn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "start",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "end",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]);
    let dn = hn;
    const In = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    In.runtime = PA, In.typeName = "google.protobuf.EnumValueDescriptorProto", In.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "number",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: Pn,
                opt: !0
            }
        ]);
    let Bn = In;
    const Qn = class e extends ft {
        constructor(e){
            super(), this.method = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Qn.runtime = PA, Qn.typeName = "google.protobuf.ServiceDescriptorProto", Qn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "method",
                kind: "message",
                T: pn,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: xn,
                opt: !0
            }
        ]);
    let fn = Qn;
    const Cn = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Cn.runtime = PA, Cn.typeName = "google.protobuf.MethodDescriptorProto", Cn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "input_type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "output_type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "options",
                kind: "message",
                T: qn,
                opt: !0
            },
            {
                no: 5,
                name: "client_streaming",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 6,
                name: "server_streaming",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            }
        ]);
    let pn = Cn;
    const mn = class e extends ft {
        constructor(e){
            super(), this.uninterpretedOption = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    mn.runtime = PA, mn.typeName = "google.protobuf.FileOptions", mn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "java_package",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "java_outer_classname",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "java_multiple_files",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 20,
                name: "java_generate_equals_and_hash",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 27,
                name: "java_string_check_utf8",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 9,
                name: "optimize_for",
                kind: "enum",
                T: PA.getEnumType(wn),
                opt: !0,
                default: 1
            },
            {
                no: 11,
                name: "go_package",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 16,
                name: "cc_generic_services",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 17,
                name: "java_generic_services",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 18,
                name: "py_generic_services",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 23,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 31,
                name: "cc_enable_arenas",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !0
            },
            {
                no: 36,
                name: "objc_class_prefix",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 37,
                name: "csharp_namespace",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 39,
                name: "swift_prefix",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 40,
                name: "php_class_prefix",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 41,
                name: "php_namespace",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 44,
                name: "php_metadata_namespace",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 45,
                name: "ruby_package",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 50,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            }
        ]);
    let yn = mn;
    var wn = ((e)=>(e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME", e))(wn || {});
    PA.util.setEnumType(wn, "google.protobuf.FileOptions.OptimizeMode", [
        {
            no: 1,
            name: "SPEED"
        },
        {
            no: 2,
            name: "CODE_SIZE"
        },
        {
            no: 3,
            name: "LITE_RUNTIME"
        }
    ]);
    const kn = class e extends ft {
        constructor(e){
            super(), this.uninterpretedOption = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    kn.runtime = PA, kn.typeName = "google.protobuf.MessageOptions", kn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "message_set_wire_format",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 2,
                name: "no_standard_descriptor_accessor",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 3,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 7,
                name: "map_entry",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 11,
                name: "deprecated_legacy_json_field_conflicts",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 12,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            }
        ]);
    let bn = kn;
    const Nn = class e extends ft {
        constructor(e){
            super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Nn.runtime = PA, Nn.typeName = "google.protobuf.FieldOptions", Nn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "ctype",
                kind: "enum",
                T: PA.getEnumType(Dn),
                opt: !0,
                default: 0
            },
            {
                no: 2,
                name: "packed",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "jstype",
                kind: "enum",
                T: PA.getEnumType(Sn),
                opt: !0,
                default: 0
            },
            {
                no: 5,
                name: "lazy",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 15,
                name: "unverified_lazy",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 3,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 10,
                name: "weak",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 16,
                name: "debug_redact",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 17,
                name: "retention",
                kind: "enum",
                T: PA.getEnumType(Rn),
                opt: !0
            },
            {
                no: 19,
                name: "targets",
                kind: "enum",
                T: PA.getEnumType(Fn),
                repeated: !0
            },
            {
                no: 20,
                name: "edition_defaults",
                kind: "message",
                T: Mn,
                repeated: !0
            },
            {
                no: 21,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 22,
                name: "feature_support",
                kind: "message",
                T: Ln,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            }
        ]);
    let Tn = Nn;
    var Dn = ((e)=>(e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE", e))(Dn || {});
    PA.util.setEnumType(Dn, "google.protobuf.FieldOptions.CType", [
        {
            no: 0,
            name: "STRING"
        },
        {
            no: 1,
            name: "CORD"
        },
        {
            no: 2,
            name: "STRING_PIECE"
        }
    ]);
    var Sn = ((e)=>(e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER", e))(Sn || {});
    PA.util.setEnumType(Sn, "google.protobuf.FieldOptions.JSType", [
        {
            no: 0,
            name: "JS_NORMAL"
        },
        {
            no: 1,
            name: "JS_STRING"
        },
        {
            no: 2,
            name: "JS_NUMBER"
        }
    ]);
    var Rn = ((e)=>(e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e))(Rn || {});
    PA.util.setEnumType(Rn, "google.protobuf.FieldOptions.OptionRetention", [
        {
            no: 0,
            name: "RETENTION_UNKNOWN"
        },
        {
            no: 1,
            name: "RETENTION_RUNTIME"
        },
        {
            no: 2,
            name: "RETENTION_SOURCE"
        }
    ]);
    var Fn = ((e)=>(e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e))(Fn || {});
    PA.util.setEnumType(Fn, "google.protobuf.FieldOptions.OptionTargetType", [
        {
            no: 0,
            name: "TARGET_TYPE_UNKNOWN"
        },
        {
            no: 1,
            name: "TARGET_TYPE_FILE"
        },
        {
            no: 2,
            name: "TARGET_TYPE_EXTENSION_RANGE"
        },
        {
            no: 3,
            name: "TARGET_TYPE_MESSAGE"
        },
        {
            no: 4,
            name: "TARGET_TYPE_FIELD"
        },
        {
            no: 5,
            name: "TARGET_TYPE_ONEOF"
        },
        {
            no: 6,
            name: "TARGET_TYPE_ENUM"
        },
        {
            no: 7,
            name: "TARGET_TYPE_ENUM_ENTRY"
        },
        {
            no: 8,
            name: "TARGET_TYPE_SERVICE"
        },
        {
            no: 9,
            name: "TARGET_TYPE_METHOD"
        }
    ]);
    const vn = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    vn.runtime = PA, vn.typeName = "google.protobuf.FieldOptions.EditionDefault", vn.fields = PA.util.newFieldList(()=>[
            {
                no: 3,
                name: "edition",
                kind: "enum",
                T: PA.getEnumType(xA),
                opt: !0
            },
            {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]);
    let Mn = vn;
    const Un = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Un.runtime = PA, Un.typeName = "google.protobuf.FieldOptions.FeatureSupport", Un.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "edition_introduced",
                kind: "enum",
                T: PA.getEnumType(xA),
                opt: !0
            },
            {
                no: 2,
                name: "edition_deprecated",
                kind: "enum",
                T: PA.getEnumType(xA),
                opt: !0
            },
            {
                no: 3,
                name: "deprecation_warning",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "edition_removed",
                kind: "enum",
                T: PA.getEnumType(xA),
                opt: !0
            }
        ]);
    let Ln = Un;
    const _n = class e extends ft {
        constructor(e){
            super(), this.uninterpretedOption = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    _n.runtime = PA, _n.typeName = "google.protobuf.OneofOptions", _n.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            }
        ]);
    let Jn = _n;
    const On = class e extends ft {
        constructor(e){
            super(), this.uninterpretedOption = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    On.runtime = PA, On.typeName = "google.protobuf.EnumOptions", On.fields = PA.util.newFieldList(()=>[
            {
                no: 2,
                name: "allow_alias",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 6,
                name: "deprecated_legacy_json_field_conflicts",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 7,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            }
        ]);
    let Yn = On;
    const Gn = class e extends ft {
        constructor(e){
            super(), this.uninterpretedOption = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Gn.runtime = PA, Gn.typeName = "google.protobuf.EnumValueOptions", Gn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 2,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 3,
                name: "debug_redact",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 4,
                name: "feature_support",
                kind: "message",
                T: Ln,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            }
        ]);
    let Pn = Gn;
    const Vn = class e extends ft {
        constructor(e){
            super(), this.uninterpretedOption = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Vn.runtime = PA, Vn.typeName = "google.protobuf.ServiceOptions", Vn.fields = PA.util.newFieldList(()=>[
            {
                no: 34,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 33,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            }
        ]);
    let xn = Vn;
    const Hn = class e extends ft {
        constructor(e){
            super(), this.uninterpretedOption = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Hn.runtime = PA, Hn.typeName = "google.protobuf.MethodOptions", Hn.fields = PA.util.newFieldList(()=>[
            {
                no: 33,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 34,
                name: "idempotency_level",
                kind: "enum",
                T: PA.getEnumType(Wn),
                opt: !0,
                default: 0
            },
            {
                no: 35,
                name: "features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Kn,
                repeated: !0
            }
        ]);
    let qn = Hn;
    var Wn = ((e)=>(e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT", e))(Wn || {});
    PA.util.setEnumType(Wn, "google.protobuf.MethodOptions.IdempotencyLevel", [
        {
            no: 0,
            name: "IDEMPOTENCY_UNKNOWN"
        },
        {
            no: 1,
            name: "NO_SIDE_EFFECTS"
        },
        {
            no: 2,
            name: "IDEMPOTENT"
        }
    ]);
    const jn = class e extends ft {
        constructor(e){
            super(), this.name = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    jn.runtime = PA, jn.typeName = "google.protobuf.UninterpretedOption", jn.fields = PA.util.newFieldList(()=>[
            {
                no: 2,
                name: "name",
                kind: "message",
                T: Zn,
                repeated: !0
            },
            {
                no: 3,
                name: "identifier_value",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "positive_int_value",
                kind: "scalar",
                T: 4,
                opt: !0
            },
            {
                no: 5,
                name: "negative_int_value",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 6,
                name: "double_value",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 7,
                name: "string_value",
                kind: "scalar",
                T: 12,
                opt: !0
            },
            {
                no: 8,
                name: "aggregate_value",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]);
    let Kn = jn;
    const Xn = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Xn.runtime = PA, Xn.typeName = "google.protobuf.UninterpretedOption.NamePart", Xn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name_part",
                kind: "scalar",
                T: 9,
                req: !0
            },
            {
                no: 2,
                name: "is_extension",
                kind: "scalar",
                T: 8,
                req: !0
            }
        ]);
    let Zn = Xn;
    const zn = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    zn.runtime = PA, zn.typeName = "google.protobuf.FeatureSet", zn.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "field_presence",
                kind: "enum",
                T: PA.getEnumType(er),
                opt: !0
            },
            {
                no: 2,
                name: "enum_type",
                kind: "enum",
                T: PA.getEnumType(tr),
                opt: !0
            },
            {
                no: 3,
                name: "repeated_field_encoding",
                kind: "enum",
                T: PA.getEnumType(Ar),
                opt: !0
            },
            {
                no: 4,
                name: "utf8_validation",
                kind: "enum",
                T: PA.getEnumType(nr),
                opt: !0
            },
            {
                no: 5,
                name: "message_encoding",
                kind: "enum",
                T: PA.getEnumType(rr),
                opt: !0
            },
            {
                no: 6,
                name: "json_format",
                kind: "enum",
                T: PA.getEnumType(or),
                opt: !0
            }
        ]);
    let $n = zn;
    var er = ((e)=>(e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e))(er || {});
    PA.util.setEnumType(er, "google.protobuf.FeatureSet.FieldPresence", [
        {
            no: 0,
            name: "FIELD_PRESENCE_UNKNOWN"
        },
        {
            no: 1,
            name: "EXPLICIT"
        },
        {
            no: 2,
            name: "IMPLICIT"
        },
        {
            no: 3,
            name: "LEGACY_REQUIRED"
        }
    ]);
    var tr = ((e)=>(e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED", e))(tr || {});
    PA.util.setEnumType(tr, "google.protobuf.FeatureSet.EnumType", [
        {
            no: 0,
            name: "ENUM_TYPE_UNKNOWN"
        },
        {
            no: 1,
            name: "OPEN"
        },
        {
            no: 2,
            name: "CLOSED"
        }
    ]);
    var Ar = ((e)=>(e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED", e))(Ar || {});
    PA.util.setEnumType(Ar, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
        {
            no: 0,
            name: "REPEATED_FIELD_ENCODING_UNKNOWN"
        },
        {
            no: 1,
            name: "PACKED"
        },
        {
            no: 2,
            name: "EXPANDED"
        }
    ]);
    var nr = ((e)=>(e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE", e))(nr || {});
    PA.util.setEnumType(nr, "google.protobuf.FeatureSet.Utf8Validation", [
        {
            no: 0,
            name: "UTF8_VALIDATION_UNKNOWN"
        },
        {
            no: 2,
            name: "VERIFY"
        },
        {
            no: 3,
            name: "NONE"
        }
    ]);
    var rr = ((e)=>(e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED", e))(rr || {});
    PA.util.setEnumType(rr, "google.protobuf.FeatureSet.MessageEncoding", [
        {
            no: 0,
            name: "MESSAGE_ENCODING_UNKNOWN"
        },
        {
            no: 1,
            name: "LENGTH_PREFIXED"
        },
        {
            no: 2,
            name: "DELIMITED"
        }
    ]);
    var or = ((e)=>(e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e))(or || {});
    PA.util.setEnumType(or, "google.protobuf.FeatureSet.JsonFormat", [
        {
            no: 0,
            name: "JSON_FORMAT_UNKNOWN"
        },
        {
            no: 1,
            name: "ALLOW"
        },
        {
            no: 2,
            name: "LEGACY_BEST_EFFORT"
        }
    ]);
    const sr = class e extends ft {
        constructor(e){
            super(), this.defaults = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    sr.runtime = PA, sr.typeName = "google.protobuf.FeatureSetDefaults", sr.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "defaults",
                kind: "message",
                T: ar,
                repeated: !0
            },
            {
                no: 4,
                name: "minimum_edition",
                kind: "enum",
                T: PA.getEnumType(xA),
                opt: !0
            },
            {
                no: 5,
                name: "maximum_edition",
                kind: "enum",
                T: PA.getEnumType(xA),
                opt: !0
            }
        ]);
    const ir = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    ir.runtime = PA, ir.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", ir.fields = PA.util.newFieldList(()=>[
            {
                no: 3,
                name: "edition",
                kind: "enum",
                T: PA.getEnumType(xA),
                opt: !0
            },
            {
                no: 4,
                name: "overridable_features",
                kind: "message",
                T: $n,
                opt: !0
            },
            {
                no: 5,
                name: "fixed_features",
                kind: "message",
                T: $n,
                opt: !0
            }
        ]);
    let ar = ir;
    const cr = class e extends ft {
        constructor(e){
            super(), this.location = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    cr.runtime = PA, cr.typeName = "google.protobuf.SourceCodeInfo", cr.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "location",
                kind: "message",
                T: gr,
                repeated: !0
            }
        ]);
    let lr = cr;
    const ur = class e extends ft {
        constructor(e){
            super(), this.path = [], this.span = [], this.leadingDetachedComments = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    ur.runtime = PA, ur.typeName = "google.protobuf.SourceCodeInfo.Location", ur.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 5,
                repeated: !0,
                packed: !0
            },
            {
                no: 2,
                name: "span",
                kind: "scalar",
                T: 5,
                repeated: !0,
                packed: !0
            },
            {
                no: 3,
                name: "leading_comments",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "trailing_comments",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "leading_detached_comments",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    let gr = ur;
    const Er = class e extends ft {
        constructor(e){
            super(), this.annotation = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Er.runtime = PA, Er.typeName = "google.protobuf.GeneratedCodeInfo", Er.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "annotation",
                kind: "message",
                T: Ir,
                repeated: !0
            }
        ]);
    let hr = Er;
    const dr = class e extends ft {
        constructor(e){
            super(), this.path = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    dr.runtime = PA, dr.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", dr.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 5,
                repeated: !0,
                packed: !0
            },
            {
                no: 2,
                name: "source_file",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "begin",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "end",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "semantic",
                kind: "enum",
                T: PA.getEnumType(Br),
                opt: !0
            }
        ]);
    let Ir = dr;
    var Br = ((e)=>(e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS", e))(Br || {});
    PA.util.setEnumType(Br, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
        {
            no: 0,
            name: "NONE"
        },
        {
            no: 1,
            name: "SET"
        },
        {
            no: 2,
            name: "ALIAS"
        }
    ]);
    an.DOUBLE, Rt.DOUBLE, an.FLOAT, Rt.FLOAT, an.INT64, Rt.INT64, an.UINT64, Rt.UINT64, an.INT32, Rt.INT32, an.FIXED64, Rt.FIXED64, an.FIXED32, Rt.FIXED32, an.BOOL, Rt.BOOL, an.STRING, Rt.STRING, an.GROUP, an.MESSAGE, an.BYTES, Rt.BYTES, an.UINT32, Rt.UINT32, an.ENUM, an.SFIXED32, Rt.SFIXED32, an.SFIXED64, Rt.SFIXED64, an.SINT32, Rt.SINT32, an.SINT64, Rt.SINT64;
    const Qr = class e extends ft {
        constructor(e){
            super(), this.seconds = St.zero, this.nanos = 0, GA.util.initPartial(e, this);
        }
        fromJson(e, t) {
            if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${GA.json.debug(e)}`);
            const A = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
            if (!A) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            const n = Date.parse(A[1] + "-" + A[2] + "-" + A[3] + "T" + A[4] + ":" + A[5] + ":" + A[6] + (A[8] ? A[8] : "Z"));
            if (Number.isNaN(n)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            return this.seconds = St.parse(n / 1e3), this.nanos = 0, A[7] && (this.nanos = parseInt("1" + A[7] + "0".repeat(9 - A[7].length)) - 1e9), this;
        }
        toJson(e) {
            const t = 1e3 * Number(this.seconds);
            if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
            let A = "Z";
            if (this.nanos > 0) {
                const e = (this.nanos + 1e9).toString().substring(1);
                A = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z";
            }
            return new Date(t).toISOString().replace(".000Z", A);
        }
        toDate() {
            return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
        }
        static now() {
            return e.fromDate(new Date);
        }
        static fromDate(t) {
            const A = t.getTime();
            return new e({
                seconds: St.parse(Math.floor(A / 1e3)),
                nanos: A % 1e3 * 1e6
            });
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Qr.runtime = GA, Qr.typeName = "google.protobuf.Timestamp", Qr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "seconds",
                kind: "scalar",
                T: 3
            },
            {
                no: 2,
                name: "nanos",
                kind: "scalar",
                T: 5
            }
        ]);
    const fr = class e extends ft {
        constructor(e){
            super(), this.seconds = St.zero, this.nanos = 0, GA.util.initPartial(e, this);
        }
        fromJson(e, t) {
            if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${GA.json.debug(e)}`);
            const A = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
            if (null === A) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${GA.json.debug(e)}`);
            const n = Number(A[1]);
            if (n > 315576e6 || n < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${GA.json.debug(e)}`);
            if (this.seconds = St.parse(n), "string" == typeof A[2]) {
                const e = A[2] + "0".repeat(9 - A[2].length);
                this.nanos = parseInt(e), (n < 0 || Object.is(n, -0)) && (this.nanos = -this.nanos);
            }
            return this;
        }
        toJson(e) {
            if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
            let t = this.seconds.toString();
            if (0 !== this.nanos) {
                let e = Math.abs(this.nanos).toString();
                e = "0".repeat(9 - e.length) + e, "000000" === e.substring(3) ? e = e.substring(0, 3) : "000" === e.substring(6) && (e = e.substring(0, 6)), t += "." + e, this.nanos < 0 && 0 == Number(this.seconds) && (t = "-" + t);
            }
            return t + "s";
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    fr.runtime = GA, fr.typeName = "google.protobuf.Duration", fr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "seconds",
                kind: "scalar",
                T: 3
            },
            {
                no: 2,
                name: "nanos",
                kind: "scalar",
                T: 5
            }
        ]);
    const Cr = class e extends ft {
        constructor(e){
            super(), this.typeUrl = "", this.value = new Uint8Array(0), GA.util.initPartial(e, this);
        }
        toJson(e) {
            if ("" === this.typeUrl) return {};
            const t = this.typeUrlToName(this.typeUrl), A = e?.typeRegistry?.findMessage(t);
            if (!A) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
            let n = A.fromBinary(this.value).toJson(e);
            return (t.startsWith("google.protobuf.") || null === n || Array.isArray(n) || "object" != typeof n) && (n = {
                value: n
            }), n["@type"] = this.typeUrl, n;
        }
        fromJson(e, t) {
            if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
            if (0 == Object.keys(e).length) return this;
            const A = e["@type"];
            if ("string" != typeof A || "" == A) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
            const n = this.typeUrlToName(A), r = t?.typeRegistry?.findMessage(n);
            if (!r) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${A} is not in the type registry`);
            let o;
            if (n.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) o = r.fromJson(e.value, t);
            else {
                const A = Object.assign({}, e);
                delete A["@type"], o = r.fromJson(A, t);
            }
            return this.packFrom(o), this;
        }
        packFrom(e) {
            this.value = e.toBinary(), this.typeUrl = this.typeNameToUrl(e.getType().typeName);
        }
        unpackTo(e) {
            return !!this.is(e.getType()) && (e.fromBinary(this.value), !0);
        }
        unpack(e) {
            if ("" === this.typeUrl) return;
            const t = e.findMessage(this.typeUrlToName(this.typeUrl));
            return t ? t.fromBinary(this.value) : void 0;
        }
        is(e) {
            if ("" === this.typeUrl) return !1;
            const t = this.typeUrlToName(this.typeUrl);
            let A = "";
            return A = "string" == typeof e ? e : e.typeName, t === A;
        }
        typeNameToUrl(e) {
            return `type.googleapis.com/${e}`;
        }
        typeUrlToName(e) {
            if (!e.length) throw new Error(`invalid type url: ${e}`);
            const t = e.lastIndexOf("/"), A = t >= 0 ? e.substring(t + 1) : e;
            if (!A.length) throw new Error(`invalid type url: ${e}`);
            return A;
        }
        static pack(t) {
            const A = new e;
            return A.packFrom(t), A;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Cr.runtime = GA, Cr.typeName = "google.protobuf.Any", Cr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "type_url",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 12
            }
        ]);
    let pr = Cr;
    const mr = class e extends ft {
        constructor(e){
            super(), GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    mr.runtime = GA, mr.typeName = "google.protobuf.Empty", mr.fields = GA.util.newFieldList(()=>[]);
    const yr = class e extends ft {
        constructor(e){
            super(), this.paths = [], GA.util.initPartial(e, this);
        }
        toJson(e) {
            return this.paths.map((e)=>{
                if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e + '" is irreversible');
                return function(e) {
                    let t = !1;
                    const A = [];
                    for(let n = 0; n < e.length; n++){
                        let r = e.charAt(n);
                        switch(r){
                            case "_":
                                t = !0;
                                break;
                            case "0":
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                            case "8":
                            case "9":
                                A.push(r), t = !1;
                                break;
                            default:
                                t && (t = !1, r = r.toUpperCase()), A.push(r);
                        }
                    }
                    return A.join("");
                }(e);
            }).join(",");
        }
        fromJson(e, t) {
            if ("string" != typeof e) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + GA.json.debug(e));
            if ("" === e) return this;
            return this.paths = e.split(",").map(function(e) {
                if (e.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
                const t = e.replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
                return "_" === t[0] ? t.substring(1) : t;
            }), this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    yr.runtime = GA, yr.typeName = "google.protobuf.FieldMask", yr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    var wr = ((e)=>(e[e.NULL_VALUE = 0] = "NULL_VALUE", e))(wr || {});
    GA.util.setEnumType(wr, "google.protobuf.NullValue", [
        {
            no: 0,
            name: "NULL_VALUE"
        }
    ]);
    const kr = class e extends ft {
        constructor(e){
            super(), this.fields = {}, GA.util.initPartial(e, this);
        }
        toJson(e) {
            const t = {};
            for (const [A, n] of Object.entries(this.fields))t[A] = n.toJson(e);
            return t;
        }
        fromJson(e, t) {
            if ("object" != typeof e || null == e || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + GA.json.debug(e));
            for (const [t, A] of Object.entries(e))this.fields[t] = Tr.fromJson(A);
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    kr.runtime = GA, kr.typeName = "google.protobuf.Struct", kr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "fields",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: Tr
                }
            }
        ]);
    let br = kr;
    const Nr = class e extends ft {
        constructor(e){
            super(), this.kind = {
                case: void 0
            }, GA.util.initPartial(e, this);
        }
        toJson(e) {
            switch(this.kind.case){
                case "nullValue":
                    return null;
                case "numberValue":
                    if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
                    return this.kind.value;
                case "boolValue":
                case "stringValue":
                    return this.kind.value;
                case "structValue":
                case "listValue":
                    return this.kind.value.toJson({
                        ...e,
                        emitDefaultValues: !0
                    });
            }
            throw new Error("google.protobuf.Value must have a value");
        }
        fromJson(e, t) {
            switch(typeof e){
                case "number":
                    this.kind = {
                        case: "numberValue",
                        value: e
                    };
                    break;
                case "string":
                    this.kind = {
                        case: "stringValue",
                        value: e
                    };
                    break;
                case "boolean":
                    this.kind = {
                        case: "boolValue",
                        value: e
                    };
                    break;
                case "object":
                    null === e ? this.kind = {
                        case: "nullValue",
                        value: 0
                    } : Array.isArray(e) ? this.kind = {
                        case: "listValue",
                        value: Sr.fromJson(e)
                    } : this.kind = {
                        case: "structValue",
                        value: br.fromJson(e)
                    };
                    break;
                default:
                    throw new Error("cannot decode google.protobuf.Value from JSON " + GA.json.debug(e));
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Nr.runtime = GA, Nr.typeName = "google.protobuf.Value", Nr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "null_value",
                kind: "enum",
                T: GA.getEnumType(wr),
                oneof: "kind"
            },
            {
                no: 2,
                name: "number_value",
                kind: "scalar",
                T: 1,
                oneof: "kind"
            },
            {
                no: 3,
                name: "string_value",
                kind: "scalar",
                T: 9,
                oneof: "kind"
            },
            {
                no: 4,
                name: "bool_value",
                kind: "scalar",
                T: 8,
                oneof: "kind"
            },
            {
                no: 5,
                name: "struct_value",
                kind: "message",
                T: br,
                oneof: "kind"
            },
            {
                no: 6,
                name: "list_value",
                kind: "message",
                T: Sr,
                oneof: "kind"
            }
        ]);
    let Tr = Nr;
    const Dr = class e extends ft {
        constructor(e){
            super(), this.values = [], GA.util.initPartial(e, this);
        }
        toJson(e) {
            return this.values.map((e)=>e.toJson());
        }
        fromJson(e, t) {
            if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + GA.json.debug(e));
            for (let t of e)this.values.push(Tr.fromJson(t));
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Dr.runtime = GA, Dr.typeName = "google.protobuf.ListValue", Dr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "values",
                kind: "message",
                T: Tr,
                repeated: !0
            }
        ]);
    let Sr = Dr;
    const Rr = class e extends ft {
        constructor(e){
            super(), this.value = 0, GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.DOUBLE, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.DOUBLE, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.DoubleValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Rr.runtime = GA, Rr.typeName = "google.protobuf.DoubleValue", Rr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 1
            }
        ]), Rr.fieldWrapper = {
        wrapField: (e)=>new Rr({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const Fr = class e extends ft {
        constructor(e){
            super(), this.value = 0, GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.FLOAT, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.FLOAT, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.FloatValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Fr.runtime = GA, Fr.typeName = "google.protobuf.FloatValue", Fr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 2
            }
        ]), Fr.fieldWrapper = {
        wrapField: (e)=>new Fr({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const vr = class e extends ft {
        constructor(e){
            super(), this.value = St.zero, GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.INT64, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.INT64, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.Int64Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    vr.runtime = GA, vr.typeName = "google.protobuf.Int64Value", vr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 3
            }
        ]), vr.fieldWrapper = {
        wrapField: (e)=>new vr({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const Mr = class e extends ft {
        constructor(e){
            super(), this.value = St.zero, GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.UINT64, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.UINT64, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.UInt64Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Mr.runtime = GA, Mr.typeName = "google.protobuf.UInt64Value", Mr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 4
            }
        ]), Mr.fieldWrapper = {
        wrapField: (e)=>new Mr({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const Ur = class e extends ft {
        constructor(e){
            super(), this.value = 0, GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.INT32, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.INT32, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.Int32Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Ur.runtime = GA, Ur.typeName = "google.protobuf.Int32Value", Ur.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 5
            }
        ]), Ur.fieldWrapper = {
        wrapField: (e)=>new Ur({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const Lr = class e extends ft {
        constructor(e){
            super(), this.value = 0, GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.UINT32, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.UINT32, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.UInt32Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Lr.runtime = GA, Lr.typeName = "google.protobuf.UInt32Value", Lr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 13
            }
        ]), Lr.fieldWrapper = {
        wrapField: (e)=>new Lr({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const _r = class e extends ft {
        constructor(e){
            super(), this.value = !1, GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.BOOL, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.BOOL, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.BoolValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    _r.runtime = GA, _r.typeName = "google.protobuf.BoolValue", _r.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 8
            }
        ]), _r.fieldWrapper = {
        wrapField: (e)=>new _r({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const Jr = class e extends ft {
        constructor(e){
            super(), this.value = "", GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.STRING, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.STRING, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.StringValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Jr.runtime = GA, Jr.typeName = "google.protobuf.StringValue", Jr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }
        ]), Jr.fieldWrapper = {
        wrapField: (e)=>new Jr({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const Or = class e extends ft {
        constructor(e){
            super(), this.value = new Uint8Array(0), GA.util.initPartial(e, this);
        }
        toJson(e) {
            return GA.json.writeScalar(Rt.BYTES, this.value, !0);
        }
        fromJson(e, t) {
            try {
                this.value = GA.json.readScalar(Rt.BYTES, e);
            } catch (e) {
                let t = 'cannot decode message google.protobuf.BytesValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t);
            }
            return this;
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Or.runtime = GA, Or.typeName = "google.protobuf.BytesValue", Or.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 12
            }
        ]), Or.fieldWrapper = {
        wrapField: (e)=>new Or({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    ht(wr);
    const Yr = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Yr.runtime = PA, Yr.typeName = "google.protobuf.compiler.Version", Yr.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "major",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "minor",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "patch",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "suffix",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]);
    let Gr = Yr;
    const Pr = class e extends ft {
        constructor(e){
            super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Pr.runtime = PA, Pr.typeName = "google.protobuf.compiler.CodeGeneratorRequest", Pr.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "file_to_generate",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 2,
                name: "parameter",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 15,
                name: "proto_file",
                kind: "message",
                T: WA,
                repeated: !0
            },
            {
                no: 17,
                name: "source_file_descriptors",
                kind: "message",
                T: WA,
                repeated: !0
            },
            {
                no: 3,
                name: "compiler_version",
                kind: "message",
                T: Gr,
                opt: !0
            }
        ]);
    const Vr = class e extends ft {
        constructor(e){
            super(), this.file = [], PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Vr.runtime = PA, Vr.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Vr.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "supported_features",
                kind: "scalar",
                T: 4,
                opt: !0
            },
            {
                no: 3,
                name: "minimum_edition",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "maximum_edition",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 15,
                name: "file",
                kind: "message",
                T: qr,
                repeated: !0
            }
        ]);
    var xr = ((e)=>(e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e))(xr || {});
    PA.util.setEnumType(xr, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
        {
            no: 0,
            name: "FEATURE_NONE"
        },
        {
            no: 1,
            name: "FEATURE_PROTO3_OPTIONAL"
        },
        {
            no: 2,
            name: "FEATURE_SUPPORTS_EDITIONS"
        }
    ]);
    const Hr = class e extends ft {
        constructor(e){
            super(), PA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return PA.util.equals(e, t, A);
        }
    };
    Hr.runtime = PA, Hr.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", Hr.fields = PA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "insertion_point",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 15,
                name: "content",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 16,
                name: "generated_code_info",
                kind: "message",
                T: hr,
                opt: !0
            }
        ]);
    let qr = Hr;
    const Wr = class e extends ft {
        constructor(e){
            super(), this.fileName = "", GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Wr.runtime = GA, Wr.typeName = "google.protobuf.SourceContext", Wr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "file_name",
                kind: "scalar",
                T: 9
            }
        ]);
    let jr = Wr;
    var Kr = ((e)=>(e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS", e))(Kr || {});
    GA.util.setEnumType(Kr, "google.protobuf.Syntax", [
        {
            no: 0,
            name: "SYNTAX_PROTO2"
        },
        {
            no: 1,
            name: "SYNTAX_PROTO3"
        },
        {
            no: 2,
            name: "SYNTAX_EDITIONS"
        }
    ]);
    const Xr = class e extends ft {
        constructor(e){
            super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Xr.runtime = GA, Xr.typeName = "google.protobuf.Type", Xr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "fields",
                kind: "message",
                T: zr,
                repeated: !0
            },
            {
                no: 3,
                name: "oneofs",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 4,
                name: "options",
                kind: "message",
                T: oo,
                repeated: !0
            },
            {
                no: 5,
                name: "source_context",
                kind: "message",
                T: jr
            },
            {
                no: 6,
                name: "syntax",
                kind: "enum",
                T: GA.getEnumType(Kr)
            },
            {
                no: 7,
                name: "edition",
                kind: "scalar",
                T: 9
            }
        ]);
    const Zr = class e extends ft {
        constructor(e){
            super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Zr.runtime = GA, Zr.typeName = "google.protobuf.Field", Zr.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "kind",
                kind: "enum",
                T: GA.getEnumType($r)
            },
            {
                no: 2,
                name: "cardinality",
                kind: "enum",
                T: GA.getEnumType(eo)
            },
            {
                no: 3,
                name: "number",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "type_url",
                kind: "scalar",
                T: 9
            },
            {
                no: 7,
                name: "oneof_index",
                kind: "scalar",
                T: 5
            },
            {
                no: 8,
                name: "packed",
                kind: "scalar",
                T: 8
            },
            {
                no: 9,
                name: "options",
                kind: "message",
                T: oo,
                repeated: !0
            },
            {
                no: 10,
                name: "json_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 11,
                name: "default_value",
                kind: "scalar",
                T: 9
            }
        ]);
    let zr = Zr;
    var $r = ((e)=>(e[e.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e[e.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e[e.TYPE_FLOAT = 2] = "TYPE_FLOAT", e[e.TYPE_INT64 = 3] = "TYPE_INT64", e[e.TYPE_UINT64 = 4] = "TYPE_UINT64", e[e.TYPE_INT32 = 5] = "TYPE_INT32", e[e.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e[e.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e[e.TYPE_BOOL = 8] = "TYPE_BOOL", e[e.TYPE_STRING = 9] = "TYPE_STRING", e[e.TYPE_GROUP = 10] = "TYPE_GROUP", e[e.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e[e.TYPE_BYTES = 12] = "TYPE_BYTES", e[e.TYPE_UINT32 = 13] = "TYPE_UINT32", e[e.TYPE_ENUM = 14] = "TYPE_ENUM", e[e.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e[e.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e[e.TYPE_SINT32 = 17] = "TYPE_SINT32", e[e.TYPE_SINT64 = 18] = "TYPE_SINT64", e))($r || {});
    GA.util.setEnumType($r, "google.protobuf.Field.Kind", [
        {
            no: 0,
            name: "TYPE_UNKNOWN"
        },
        {
            no: 1,
            name: "TYPE_DOUBLE"
        },
        {
            no: 2,
            name: "TYPE_FLOAT"
        },
        {
            no: 3,
            name: "TYPE_INT64"
        },
        {
            no: 4,
            name: "TYPE_UINT64"
        },
        {
            no: 5,
            name: "TYPE_INT32"
        },
        {
            no: 6,
            name: "TYPE_FIXED64"
        },
        {
            no: 7,
            name: "TYPE_FIXED32"
        },
        {
            no: 8,
            name: "TYPE_BOOL"
        },
        {
            no: 9,
            name: "TYPE_STRING"
        },
        {
            no: 10,
            name: "TYPE_GROUP"
        },
        {
            no: 11,
            name: "TYPE_MESSAGE"
        },
        {
            no: 12,
            name: "TYPE_BYTES"
        },
        {
            no: 13,
            name: "TYPE_UINT32"
        },
        {
            no: 14,
            name: "TYPE_ENUM"
        },
        {
            no: 15,
            name: "TYPE_SFIXED32"
        },
        {
            no: 16,
            name: "TYPE_SFIXED64"
        },
        {
            no: 17,
            name: "TYPE_SINT32"
        },
        {
            no: 18,
            name: "TYPE_SINT64"
        }
    ]);
    var eo = ((e)=>(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REQUIRED = 2] = "REQUIRED", e[e.REPEATED = 3] = "REPEATED", e))(eo || {});
    GA.util.setEnumType(eo, "google.protobuf.Field.Cardinality", [
        {
            no: 0,
            name: "CARDINALITY_UNKNOWN"
        },
        {
            no: 1,
            name: "CARDINALITY_OPTIONAL"
        },
        {
            no: 2,
            name: "CARDINALITY_REQUIRED"
        },
        {
            no: 3,
            name: "CARDINALITY_REPEATED"
        }
    ]);
    const to = class e extends ft {
        constructor(e){
            super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    to.runtime = GA, to.typeName = "google.protobuf.Enum", to.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "enumvalue",
                kind: "message",
                T: no,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: oo,
                repeated: !0
            },
            {
                no: 4,
                name: "source_context",
                kind: "message",
                T: jr
            },
            {
                no: 5,
                name: "syntax",
                kind: "enum",
                T: GA.getEnumType(Kr)
            },
            {
                no: 6,
                name: "edition",
                kind: "scalar",
                T: 9
            }
        ]);
    const Ao = class e extends ft {
        constructor(e){
            super(), this.name = "", this.number = 0, this.options = [], GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    Ao.runtime = GA, Ao.typeName = "google.protobuf.EnumValue", Ao.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "number",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: oo,
                repeated: !0
            }
        ]);
    let no = Ao;
    const ro = class e extends ft {
        constructor(e){
            super(), this.name = "", GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    ro.runtime = GA, ro.typeName = "google.protobuf.Option", ro.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "value",
                kind: "message",
                T: pr
            }
        ]);
    let oo = ro;
    const so = class e extends ft {
        constructor(e){
            super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Kr.PROTO2, GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    so.runtime = GA, so.typeName = "google.protobuf.Api", so.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "methods",
                kind: "message",
                T: ao,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: oo,
                repeated: !0
            },
            {
                no: 4,
                name: "version",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "source_context",
                kind: "message",
                T: jr
            },
            {
                no: 6,
                name: "mixins",
                kind: "message",
                T: lo,
                repeated: !0
            },
            {
                no: 7,
                name: "syntax",
                kind: "enum",
                T: GA.getEnumType(Kr)
            }
        ]);
    const io = class e extends ft {
        constructor(e){
            super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = Kr.PROTO2, GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    io.runtime = GA, io.typeName = "google.protobuf.Method", io.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "request_type_url",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "request_streaming",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "response_type_url",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "response_streaming",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "options",
                kind: "message",
                T: oo,
                repeated: !0
            },
            {
                no: 7,
                name: "syntax",
                kind: "enum",
                T: GA.getEnumType(Kr)
            }
        ]);
    let ao = io;
    const co = class e extends ft {
        constructor(e){
            super(), this.name = "", this.root = "", GA.util.initPartial(e, this);
        }
        static fromBinary(t, A) {
            return (new e).fromBinary(t, A);
        }
        static fromJson(t, A) {
            return (new e).fromJson(t, A);
        }
        static fromJsonString(t, A) {
            return (new e).fromJsonString(t, A);
        }
        static equals(t, A) {
            return GA.util.equals(e, t, A);
        }
    };
    co.runtime = GA, co.typeName = "google.protobuf.Mixin", co.fields = GA.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "root",
                kind: "scalar",
                T: 9
            }
        ]);
    let lo = co;
    const uo = GA.makeMessageType("aiserver.v1.User", ()=>[
            {
                no: 2,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "email",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "email_verified",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 5,
                name: "first_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "last_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "created_at",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "updated_at",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), go = GA.makeMessageType("aiserver.v1.Session", ()=>[
            {
                no: 1,
                name: "session_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "type",
                kind: "enum",
                T: GA.getEnumType(Eo)
            },
            {
                no: 3,
                name: "created_at",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "expires_at",
                kind: "scalar",
                T: 9
            }
        ]), Eo = GA.makeEnum("aiserver.v1.Session.SessionType", [
        {
            no: 0,
            name: "SESSION_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "SESSION_TYPE_WEB",
            localName: "WEB"
        },
        {
            no: 2,
            name: "SESSION_TYPE_CLIENT",
            localName: "CLIENT"
        },
        {
            no: 3,
            name: "SESSION_TYPE_BUGBOT",
            localName: "BUGBOT"
        },
        {
            no: 4,
            name: "SESSION_TYPE_BACKGROUND_AGENT",
            localName: "BACKGROUND_AGENT"
        },
        {
            no: 5,
            name: "SESSION_TYPE_SUPPORT_IMPERSONATION",
            localName: "SUPPORT_IMPERSONATION"
        },
        {
            no: 6,
            name: "SESSION_TYPE_API_KEY_TOKEN",
            localName: "API_KEY_TOKEN"
        },
        {
            no: 7,
            name: "SESSION_TYPE_TRAINING",
            localName: "TRAINING"
        },
        {
            no: 8,
            name: "SESSION_TYPE_EXEC_DAEMON",
            localName: "EXEC_DAEMON"
        },
        {
            no: 9,
            name: "SESSION_TYPE_GRAPHITE",
            localName: "GRAPHITE"
        },
        {
            no: 10,
            name: "SESSION_TYPE_MOBILE",
            localName: "MOBILE"
        },
        {
            no: 11,
            name: "SESSION_TYPE_SAND_MOBILE",
            localName: "SAND_MOBILE"
        }
    ]), ho = GA.makeMessageType("aiserver.v1.ListActiveSessionsRequest", []), Io = GA.makeMessageType("aiserver.v1.ListActiveSessionsResponse", ()=>[
            {
                no: 1,
                name: "sessions",
                kind: "message",
                T: go,
                repeated: !0
            }
        ]), Bo = GA.makeMessageType("aiserver.v1.RevokeSessionRequest", ()=>[
            {
                no: 1,
                name: "session_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "type",
                kind: "enum",
                T: GA.getEnumType(Eo)
            }
        ]), Qo = GA.makeMessageType("aiserver.v1.RevokeSessionResponse", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            }
        ]), fo = GA.makeMessageType("aiserver.v1.RevokeCurrentSessionRequest", []), Co = GA.makeMessageType("aiserver.v1.RevokeCurrentSessionResponse", []), po = GA.makeMessageType("aiserver.v1.GetSessionTokenRequest", ()=>[
            {
                no: 1,
                name: "user",
                kind: "message",
                T: uo
            },
            {
                no: 2,
                name: "destination",
                kind: "enum",
                T: GA.getEnumType(mo)
            },
            {
                no: 3,
                name: "stub",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "code",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "code_verifier",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "redirect_uri",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "issue_refresh_token",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), mo = GA.makeEnum("aiserver.v1.GetSessionTokenRequest.Destination", [
        {
            no: 0,
            name: "DESTINATION_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "DESTINATION_PORTAL",
            localName: "PORTAL"
        },
        {
            no: 2,
            name: "DESTINATION_AISERVER",
            localName: "AISERVER"
        },
        {
            no: 3,
            name: "DESTINATION_AUTH_PROXY",
            localName: "AUTH_PROXY"
        }
    ]), yo = GA.makeMessageType("aiserver.v1.GetSessionTokenResponse", ()=>[
            {
                no: 1,
                name: "session_token",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "should_show_trial",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "enable_trial_for_deep_control",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "was_auto_enrolled",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "refresh_token",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "workos_sso_required",
                kind: "message",
                T: wo,
                opt: !0
            },
            {
                no: 8,
                name: "workos_authkit_required",
                kind: "message",
                T: ko,
                opt: !0
            },
            {
                no: 9,
                name: "xai_sso_cookie_value",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "xai_sso_rw_cookie_value",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), wo = GA.makeMessageType("aiserver.v1.WorkosSsoRequiredContinuation", ()=>[
            {
                no: 1,
                name: "connection_ids",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), ko = GA.makeMessageType("aiserver.v1.WorkosAuthkitRequiredContinuation", []), bo = GA.makeMessageType("aiserver.v1.RefreshMobileSessionRequest", ()=>[
            {
                no: 1,
                name: "refresh_token",
                kind: "scalar",
                T: 9
            }
        ]), No = GA.makeMessageType("aiserver.v1.RefreshMobileSessionResponse", ()=>[
            {
                no: 1,
                name: "session_token",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "refresh_token",
                kind: "scalar",
                T: 9
            }
        ]), To = GA.makeMessageType("aiserver.v1.RevokeMobileSessionFamilyRequest", ()=>[
            {
                no: 1,
                name: "refresh_token",
                kind: "scalar",
                T: 9
            }
        ]), Do = GA.makeMessageType("aiserver.v1.RevokeMobileSessionFamilyResponse", []), So = GA.makeMessageType("aiserver.v1.ConvertMobileSessionToRefreshPairRequest", []), Ro = GA.makeMessageType("aiserver.v1.ConvertMobileSessionToRefreshPairResponse", ()=>[
            {
                no: 1,
                name: "session_token",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "refresh_token",
                kind: "scalar",
                T: 9
            }
        ]), Fo = GA.makeMessageType("aiserver.v1.CheckSessionTokenRequest", ()=>[
            {
                no: 1,
                name: "session_token",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "user",
                kind: "message",
                T: uo
            }
        ]), vo = GA.makeMessageType("aiserver.v1.CheckSessionTokenResponse", ()=>[
            {
                no: 1,
                name: "valid",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "validity",
                kind: "enum",
                T: GA.getEnumType(Mo)
            }
        ]), Mo = GA.makeEnum("aiserver.v1.CheckSessionTokenResponse.Validity", [
        {
            no: 0,
            name: "VALIDITY_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "VALIDITY_VALID",
            localName: "VALID"
        },
        {
            no: 2,
            name: "VALIDITY_INVALID",
            localName: "INVALID"
        }
    ]), Uo = GA.makeMessageType("aiserver.v1.CreateMobileSessionRequest", []), Lo = GA.makeMessageType("aiserver.v1.CreateMobileSessionResponse", ()=>[
            {
                no: 1,
                name: "session_token",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "auth_id",
                kind: "scalar",
                T: 9
            }
        ]), _o = GA.makeMessageType("aiserver.v1.UpgradeMobileSessionRequest", []), Jo = GA.makeMessageType("aiserver.v1.UpgradeMobileSessionResponse", ()=>[
            {
                no: 1,
                name: "session_token",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "workos_id",
                kind: "scalar",
                T: 9
            }
        ]), Oo = GA.makeMessageType("aiserver.v1.CustomerIdRequest", ()=>[
            {
                no: 1,
                name: "email",
                kind: "scalar",
                T: 9
            }
        ]), Yo = GA.makeMessageType("aiserver.v1.CustomerIdResponse", ()=>[
            {
                no: 1,
                name: "customer_id",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Go = GA.makeMessageType("aiserver.v1.MarkPrivacyRequest", ()=>[
            {
                no: 2,
                name: "current_privacy_mode",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "onboarding_privacy_mode",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "is_using_current_and_onboarding_format",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "onboarding_data_privacy_version",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "time_elapsed_since_onboarding",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 7,
                name: "first_after_waiting_period",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 8,
                name: "configured_privacy_mode_for_settings",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 1,
                name: "privacy",
                kind: "scalar",
                T: 8
            }
        ]), Po = GA.makeMessageType("aiserver.v1.MarkPrivacyResponse", []), Vo = GA.makeMessageType("aiserver.v1.GetEmailRequest", []), xo = GA.makeMessageType("aiserver.v1.GetEmailResponse", ()=>[
            {
                no: 1,
                name: "email",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "sign_up_type",
                kind: "enum",
                T: GA.getEnumType(Ho)
            },
            {
                no: 3,
                name: "job_role",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "is_recently_created_user",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 5,
                name: "use_case",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Ho = GA.makeEnum("aiserver.v1.GetEmailResponse.SignUpType", [
        {
            no: 0,
            name: "SIGN_UP_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "SIGN_UP_TYPE_AUTH_0",
            localName: "AUTH_0"
        },
        {
            no: 2,
            name: "SIGN_UP_TYPE_GITHUB",
            localName: "GITHUB"
        },
        {
            no: 3,
            name: "SIGN_UP_TYPE_GOOGLE",
            localName: "GOOGLE"
        },
        {
            no: 4,
            name: "SIGN_UP_TYPE_WORKOS",
            localName: "WORKOS"
        },
        {
            no: 5,
            name: "SIGN_UP_TYPE_GROK",
            localName: "GROK"
        },
        {
            no: 6,
            name: "SIGN_UP_TYPE_X",
            localName: "X"
        }
    ]), qo = GA.makeMessageType("aiserver.v1.GetUserMetaRequest", []), Wo = GA.makeMessageType("aiserver.v1.GetUserMetaResponse", ()=>[
            {
                no: 1,
                name: "email",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "sign_up_type",
                kind: "enum",
                T: GA.getEnumType(Ho)
            },
            {
                no: 3,
                name: "user_id",
                kind: "scalar",
                T: 3
            },
            {
                no: 4,
                name: "workos_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "profile_picture_url",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), jo = GA.makeMessageType("aiserver.v1.EmailValidRequest", ()=>[
            {
                no: 1,
                name: "email",
                kind: "scalar",
                T: 9
            }
        ]), Ko = GA.makeMessageType("aiserver.v1.EmailValidResponse", ()=>[
            {
                no: 1,
                name: "valid",
                kind: "scalar",
                T: 8
            }
        ]), Xo = GA.makeMessageType("aiserver.v1.SwitchCmdKFractionRequest", ()=>[
            {
                no: 1,
                name: "use_turbo",
                kind: "scalar",
                T: 8
            }
        ]), Zo = GA.makeMessageType("aiserver.v1.SwitchCmdKFractionResponse", []), zo = GA.makeMessageType("aiserver.v1.SetPrivacyModeRequest", ()=>[
            {
                no: 1,
                name: "privacy_mode_enabled",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "machine_identifier",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "new_onboarding_done",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "new_change_management_done",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "eligible_for_snippet_learning",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "timestamp_of_onboarding",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 7,
                name: "timestamp_of_change_management",
                kind: "scalar",
                T: 3,
                opt: !0
            }
        ]), $o = GA.makeMessageType("aiserver.v1.SetPrivacyModeResponse", []), es = GA.makeMessageType("aiserver.v1.ListJwtPublicKeysRequest", []), ts = GA.makeMessageType("aiserver.v1.JwtPublicKey", ()=>[
            {
                no: 1,
                name: "kid",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "public_key",
                kind: "scalar",
                T: 9
            }
        ]), As = GA.makeMessageType("aiserver.v1.ListJwtPublicKeysResponse", ()=>[
            {
                no: 1,
                name: "keys",
                kind: "message",
                T: ts,
                repeated: !0
            }
        ]), ns = GA.makeMessageType("aiserver.v1.IsDomainForcedToSsoRequest", ()=>[
            {
                no: 1,
                name: "domain",
                kind: "scalar",
                T: 9
            }
        ]), rs = GA.makeMessageType("aiserver.v1.IsDomainForcedToSsoResponse", ()=>[
            {
                no: 1,
                name: "forced_to_sso",
                kind: "scalar",
                T: 8
            }
        ]), os = {
        typeName: "aiserver.v1.AuthService",
        methods: {
            getEmail: {
                name: "GetEmail",
                I: Vo,
                O: xo,
                kind: VA.Unary
            },
            getUserMeta: {
                name: "GetUserMeta",
                I: qo,
                O: Wo,
                kind: VA.Unary
            },
            emailValid: {
                name: "EmailValid",
                I: jo,
                O: Ko,
                kind: VA.Unary
            },
            markPrivacy: {
                name: "MarkPrivacy",
                I: Go,
                O: Po,
                kind: VA.Unary
            },
            switchCmdKFraction: {
                name: "SwitchCmdKFraction",
                I: Xo,
                O: Zo,
                kind: VA.Unary
            },
            getCustomerId: {
                name: "GetCustomerId",
                I: Oo,
                O: Yo,
                kind: VA.Unary
            },
            setPrivacyMode: {
                name: "SetPrivacyMode",
                I: zo,
                O: $o,
                kind: VA.Unary
            },
            getSessionToken: {
                name: "GetSessionToken",
                I: po,
                O: yo,
                kind: VA.Unary
            },
            checkSessionToken: {
                name: "CheckSessionToken",
                I: Fo,
                O: vo,
                kind: VA.Unary
            },
            createMobileSession: {
                name: "CreateMobileSession",
                I: Uo,
                O: Lo,
                kind: VA.Unary
            },
            upgradeMobileSession: {
                name: "UpgradeMobileSession",
                I: _o,
                O: Jo,
                kind: VA.Unary
            },
            refreshMobileSession: {
                name: "RefreshMobileSession",
                I: bo,
                O: No,
                kind: VA.Unary
            },
            revokeMobileSessionFamily: {
                name: "RevokeMobileSessionFamily",
                I: To,
                O: Do,
                kind: VA.Unary
            },
            convertMobileSessionToRefreshPair: {
                name: "ConvertMobileSessionToRefreshPair",
                I: So,
                O: Ro,
                kind: VA.Unary
            },
            listActiveSessions: {
                name: "ListActiveSessions",
                I: ho,
                O: Io,
                kind: VA.Unary
            },
            revokeSession: {
                name: "RevokeSession",
                I: Bo,
                O: Qo,
                kind: VA.Unary
            },
            revokeCurrentSession: {
                name: "RevokeCurrentSession",
                I: fo,
                O: Co,
                kind: VA.Unary
            },
            listJwtPublicKeys: {
                name: "ListJwtPublicKeys",
                I: es,
                O: As,
                kind: VA.Unary
            },
            isDomainForcedToSso: {
                name: "IsDomainForcedToSso",
                I: ns,
                O: rs,
                kind: VA.Unary
            }
        }
    }, ss = GA.makeEnum("aiserver.v1.BugbotDeeplinkEventKind", [
        {
            no: 0,
            name: "BUGBOT_DEEPLINK_EVENT_KIND_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "BUGBOT_DEEPLINK_EVENT_KIND_CLICKED",
            localName: "CLICKED"
        },
        {
            no: 2,
            name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_DIALOG_SHOWN",
            localName: "HANDLED_DIALOG_SHOWN"
        },
        {
            no: 3,
            name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_CHAT_CREATED",
            localName: "HANDLED_CHAT_CREATED"
        },
        {
            no: 4,
            name: "BUGBOT_DEEPLINK_EVENT_KIND_ERROR",
            localName: "ERROR"
        },
        {
            no: 5,
            name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_FIX_IN_WEB",
            localName: "HANDLED_FIX_IN_WEB"
        }
    ]), is = GA.makeEnum("aiserver.v1.BugbotFeedbackReaction", [
        {
            no: 0,
            name: "BUGBOT_FEEDBACK_REACTION_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "BUGBOT_FEEDBACK_REACTION_THUMBS_UP",
            localName: "THUMBS_UP"
        },
        {
            no: 2,
            name: "BUGBOT_FEEDBACK_REACTION_THUMBS_DOWN",
            localName: "THUMBS_DOWN"
        }
    ]), as = GA.makeEnum("aiserver.v1.BugBotRunStatus", [
        {
            no: 0,
            name: "BUG_BOT_RUN_STATUS_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "BUG_BOT_RUN_STATUS_NO_RUN",
            localName: "NO_RUN"
        },
        {
            no: 2,
            name: "BUG_BOT_RUN_STATUS_IN_PROGRESS",
            localName: "IN_PROGRESS"
        },
        {
            no: 3,
            name: "BUG_BOT_RUN_STATUS_COMPLETED",
            localName: "COMPLETED"
        }
    ]), cs = GA.makeMessageType("aiserver.v1.BugLocation", ()=>[
            {
                no: 1,
                name: "file",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "start_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "end_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "code_lines",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), ls = GA.makeMessageType("aiserver.v1.BugReport", ()=>[
            {
                no: 1,
                name: "locations",
                kind: "message",
                T: cs,
                repeated: !0
            },
            {
                no: 2,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "description",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "confidence",
                kind: "scalar",
                T: 2,
                opt: !0
            },
            {
                no: 5,
                name: "category",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "severity",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "title",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "rationale",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "triggered_by_rule_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 11,
                name: "model_confidence",
                kind: "scalar",
                T: 2,
                opt: !0
            }
        ]), us = GA.makeMessageType("aiserver.v1.LogDeeplinkEventRequest", ()=>[
            {
                no: 1,
                name: "user_id",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "bug_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "comment_id",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 4,
                name: "event",
                kind: "enum",
                T: GA.getEnumType(ss)
            }
        ]), gs = GA.makeMessageType("aiserver.v1.LogDeeplinkEventResponse", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            }
        ]), Es = GA.makeMessageType("aiserver.v1.GetEncryptedBugDataRequest", ()=>[
            {
                no: 1,
                name: "redis_key",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "encryption_key",
                kind: "scalar",
                T: 9
            }
        ]), hs = GA.makeMessageType("aiserver.v1.GetEncryptedBugDataResponse", ()=>[
            {
                no: 1,
                name: "bug_report",
                kind: "message",
                T: ls
            }
        ]), ds = GA.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleRequest", ()=>[
            {
                no: 1,
                name: "redis_key",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "encryption_key",
                kind: "scalar",
                T: 9
            }
        ]), Is = GA.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleResponse", ()=>[
            {
                no: 1,
                name: "bug_reports",
                kind: "message",
                T: ls,
                repeated: !0
            }
        ]), Bs = GA.makeMessageType("aiserver.v1.AddBugbotFeedbackRequest", ()=>[
            {
                no: 1,
                name: "comment_id",
                kind: "scalar",
                T: 3
            },
            {
                no: 2,
                name: "reaction",
                kind: "enum",
                T: GA.getEnumType(is)
            },
            {
                no: 3,
                name: "feedback",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Qs = GA.makeMessageType("aiserver.v1.AddBugbotFeedbackResponse", ()=>[
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 3
            }
        ]), fs = GA.makeMessageType("aiserver.v1.GetBugBotRunEtaRequest", ()=>[
            {
                no: 1,
                name: "repository_owner",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "repository_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "pr_number",
                kind: "scalar",
                T: 5
            }
        ]), Cs = GA.makeMessageType("aiserver.v1.GetBugBotRunEtaResponse", ()=>[
            {
                no: 1,
                name: "status",
                kind: "enum",
                T: GA.getEnumType(as)
            },
            {
                no: 2,
                name: "estimated_completion_time_ms",
                kind: "scalar",
                T: 3,
                opt: !0
            }
        ]), ps = {
        typeName: "aiserver.v1.BugbotService",
        methods: {
            logDeeplinkEvent: {
                name: "LogDeeplinkEvent",
                I: us,
                O: gs,
                kind: VA.Unary
            },
            getEncryptedBugData: {
                name: "GetEncryptedBugData",
                I: Es,
                O: hs,
                kind: VA.Unary
            },
            getEncryptedBugDataMultiple: {
                name: "GetEncryptedBugDataMultiple",
                I: ds,
                O: Is,
                kind: VA.Unary
            },
            addBugbotFeedback: {
                name: "AddBugbotFeedback",
                I: Bs,
                O: Qs,
                kind: VA.Unary
            },
            getBugBotRunEta: {
                name: "GetBugBotRunEta",
                I: fs,
                O: Cs,
                kind: VA.Unary
            }
        }
    };
    var ms = ((e)=>(e.BUGBOT_FIX_IN_CURSOR = "BUGBOT_FIX_IN_CURSOR", e.BUGBOT_FIX_ALL_IN_CURSOR = "BUGBOT_FIX_ALL_IN_CURSOR", e))(ms || {});
    const ys = [
        0,
        1
    ];
    function ws(e) {
        if (!e || "object" != typeof e) return {
            success: !1,
            error: "invalid_structure",
            details: "Payload is not an object"
        };
        const t = e.version ?? 0;
        if (!ys.includes(t)) return {
            success: !1,
            error: "unsupported_version",
            version: t
        };
        if ("BUGBOT_FIX_ALL_IN_CURSOR" === e.type) return 1 !== t ? {
            success: !1,
            error: "unsupported_version",
            version: t
        } : function(e) {
            const t = [];
            e.data ? (e.data.redisKey || t.push("data.redisKey"), e.data.encryptionKey || t.push("data.encryptionKey")) : t.push("data");
            if (t.length > 0) return {
                success: !1,
                error: "missing_fields",
                fields: t
            };
            return {
                success: !0,
                payload: e
            };
        }(e);
        if ("BUGBOT_FIX_IN_CURSOR" !== e.type) return {
            success: !1,
            error: "invalid_structure",
            details: `Unsupported deeplink type: ${e.type}`
        };
        switch(t){
            case 0:
                return function(e) {
                    const t = [];
                    e.data ? e.data.bug || t.push("data.bug") : t.push("data");
                    if (t.length > 0) return {
                        success: !1,
                        error: "missing_fields",
                        fields: t
                    };
                    return {
                        success: !0,
                        payload: e
                    };
                }(e);
            case 1:
                return function(e) {
                    const t = [];
                    e.data ? (e.data.redisKey || t.push("data.redisKey"), e.data.encryptionKey || t.push("data.encryptionKey")) : t.push("data");
                    if (t.length > 0) return {
                        success: !1,
                        error: "missing_fields",
                        fields: t
                    };
                    return {
                        success: !0,
                        payload: e
                    };
                }(e);
            default:
                return {
                    success: !1,
                    error: "unsupported_version",
                    version: t
                };
        }
    }
    function ks(e) {
        if (e.success) return "";
        switch(e.error){
            case "unsupported_version":
                return void 0 === e.version || e.version > Math.max(...ys) ? "This deeplink requires a newer version of Cursor. Please update Cursor to the latest version to use this deeplink." : "This deeplink format is no longer supported.";
            case "invalid_structure":
                return `Invalid deeplink format: ${e.details}.`;
            case "missing_fields":
                return `Incomplete deeplink data (missing: ${e.fields.join(", ")}).`;
            default:
                return "Invalid deeplink format. Please ask the sender to create a new deeplink.";
        }
    }
    function bs(e) {
        return Buffer.from(e, "base64url").toString("utf8");
    }
    function Ns(e, t) {
        const A = [];
        if (t) {
            const e = (e)=>async (A)=>(A.header.set("Authorization", `Bearer ${t}`), await e(A));
            A.push(e);
        }
        const n = at({
            baseUrl: e,
            useBinaryFormat: !0,
            httpVersion: e.includes("api3.cursor") ? "2" : "1.1",
            interceptors: A
        });
        return G(ps, n);
    }
    async function Ts() {
        const e = await i();
        if (!e) throw new Error("Missing backend URL or access token");
        const t = function(e, t) {
            const A = [];
            if (t) {
                const e = (e)=>async (A)=>(A.header.set("Authorization", `Bearer ${t}`), await e(A));
                A.push(e);
            }
            const n = at({
                baseUrl: e,
                useBinaryFormat: !0,
                httpVersion: e.includes("api3.cursor") ? "2" : "1.1",
                interceptors: A
            });
            return G(os, n);
        }(e.backendUrl, e.accessToken);
        return (await t.listJwtPublicKeys(new es)).keys.map((e)=>({
                kid: e.kid,
                publicKey: e.publicKey
            }));
    }
    async function Ds(t) {
        const A = new URLSearchParams(t.query), n = A.get("link"), r = A.get("data");
        if (!n && !r) return;
        let o, s, a, l, u;
        if (n) try {
            const t = bs(n), A = ws(JSON.parse(t));
            if (!A.success) {
                const t = ks(A);
                return console.error("[cursor deeplink] Payload validation failed:", A), void e.window.showErrorMessage(t);
            }
            if (o = A.payload, !("version" in o) || 1 !== o.version) return console.error("[cursor deeplink] Unsigned deeplink must use v1 payload"), void e.window.showErrorMessage("This deeplink format is no longer supported.");
        } catch (t) {
            return console.error("[cursor deeplink] Invalid deeplink", t), void e.window.showErrorMessage("Invalid or expired deeplink.");
        }
        else try {
            const t = await Ts(), { kid: A, alg: n } = function(e) {
                const [t] = e.split("."), A = bs(t);
                return JSON.parse(A);
            }(r);
            if ("RS256" !== n) return void console.error(`[cursor deeplink] Unsupported JWT algorithm: ${n} for kid: ${A}`);
            const s = t.find((e)=>e.kid === A);
            if (!s) throw new Error("No matching public key for JWT");
            const i = (0, c.createVerifier)({
                key: s.publicKey,
                algorithms: [
                    "RS256"
                ],
                complete: !0,
                checkTyp: "JWT"
            }), { payload: a } = i(r), l = ws(a);
            if (!l.success) {
                const t = ks(l);
                return console.error("[cursor deeplink] Payload validation failed:", l), void e.window.showErrorMessage(t);
            }
            o = l.payload;
        } catch (t) {
            return console.error("[cursor deeplink] Invalid JWT", t), void e.window.showErrorMessage("Invalid or expired deeplink.");
        }
        if (o.type !== ms.BUGBOT_FIX_IN_CURSOR) {
            if (o.type === ms.BUGBOT_FIX_ALL_IN_CURSOR) {
                const { redisKey: t, encryptionKey: A, branch: n, repoOwner: r, repoName: s } = o.data;
                if (void 0 === t || "" === t || void 0 === A || "" === A) return console.error("[cursor deeplink] Missing redisKey or encryptionKey in Fix All payload"), void e.window.showErrorMessage("Invalid deeplink format.");
                try {
                    const o = await async function(e, t) {
                        const A = await i();
                        if (!A) throw new Error("Missing backend URL or access token");
                        const n = Ns(A.backendUrl, A.accessToken), r = new ds({
                            redisKey: e,
                            encryptionKey: t
                        }), o = await n.getEncryptedBugDataMultiple(r);
                        if (!o.bugReports || 0 === o.bugReports.length) throw new Error("No bug report data received");
                        return o.bugReports;
                    }(t, A);
                    await e.commands.executeCommand("composer.handleBugBotMultipleDeeplinks", o, n, {
                        repoOwner: r,
                        repoName: s
                    });
                } catch (t) {
                    console.error("[cursor deeplink] Failed to fetch multiple bug data:", t), e.window.showErrorMessage("Failed to load bug report data.");
                }
                return;
            }
            return void console.error("[cursor deeplink] Unsupported deeplink type");
        }
        if ("version" in o && 1 === o.version) {
            const t = o, { redisKey: A, encryptionKey: n, branch: r } = t.data;
            if (!A || !n) return console.error("[cursor deeplink] Missing redisKey or encryptionKey in V1 JWT payload"), void e.window.showErrorMessage("Invalid deeplink format.");
            try {
                s = await async function(e, t) {
                    const A = await i();
                    if (!A) throw new Error("Missing backend URL or access token");
                    const n = Ns(A.backendUrl, A.accessToken), r = new Es({
                        redisKey: e,
                        encryptionKey: t
                    }), o = await n.getEncryptedBugData(r);
                    if (!o.bugReport) throw new Error("No bug report data received");
                    return o.bugReport;
                }(A, n), a = r, l = t.data.repoOwner, u = t.data.repoName;
            } catch (t) {
                return console.error("[cursor deeplink] Failed to fetch bug data:", t), void e.window.showErrorMessage("Failed to load bug report data.");
            }
        } else {
            const t = o, { bug: A, branch: n } = t.data;
            if (!A) return console.error("[cursor deeplink] Missing bug data in V0 JWT payload"), void e.window.showErrorMessage("Invalid deeplink format.");
            try {
                s = JSON.parse(bs(A)), a = n;
            } catch (t) {
                return console.error("[cursor deeplink] Failed to parse bug data from V0 payload:", t), void e.window.showErrorMessage("Failed to parse bug report data.");
            }
        }
        await e.commands.executeCommand("composer.handleBugBotDeeplink", s, a, {
            repoOwner: l,
            repoName: u
        });
    }
    const Ss = require("path"), Rs = 1e4, Fs = "Invalid text for prompt", vs = /^(?!.*(?:\p{Cf}|\u007F))[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Z}\r\n\t !-~]+$/u;
    function Ms(e) {
        let t = e.toLowerCase();
        for(let e = 0; e < 2; e++)try {
            const e = decodeURIComponent(t);
            if (e === t) break;
            t = e;
        } catch  {
            break;
        }
        return t;
    }
    function Us(e) {
        let t = e;
        for(let e = 0; e < 2; e++)try {
            const e = decodeURIComponent(t);
            if (e === t) break;
            t = e;
        } catch  {
            break;
        }
        return t;
    }
    function Ls(e) {
        const t = e.split(/\s+/), A = [];
        for (const e of t)if (/^[A-Za-z0-9+/=]+$/.test(e) && e.length % 4 == 0) try {
            let t = "";
            const n = globalThis.Buffer;
            if (n) t = n.from(e, "base64").toString("utf8");
            else if ("undefined" != typeof atob) {
                const A = atob(e), n = new Uint8Array(A.length);
                for(let e = 0; e < A.length; e++)n[e] = A.charCodeAt(e);
                if ("undefined" != typeof TextDecoder) {
                    t = new TextDecoder("utf-8").decode(n);
                }
            }
            t && A.push(t.toLowerCase());
        } catch  {}
        return A.join(" ");
    }
    function _s(e) {
        if (!e || "" === e.trim()) return Fs;
        if (!function(e) {
            return vs.test(e);
        }(e)) return Fs;
        const t = function(e) {
            return 21 + encodeURIComponent(e).length;
        }(e);
        return t > Rs || function(e) {
            const t = e.toLowerCase(), A = Ms(t), n = Ms(A), r = Ls(e), o = Us(e), s = Ls(Us(o)), i = [
                t,
                A,
                n
            ];
            r && i.push(r), s && i.push(s);
            for (const e of i)if (/\.env(\b|\W)/.test(e)) return !0;
            const a = [
                /read.*\.env.*print/i,
                /cat.*\.ssh\/id_rsa/i,
                /upload.*passwords\.txt/i,
                /dump.*token/i,
                /dump.*password/i,
                /exfiltrate.*credential/i,
                /leak.*secret/i,
                /how.*extract.*credential/i
            ];
            for (const e of i)for (const t of a)if (t.test(e)) return !0;
            return !1;
        }(e) ? Fs : null;
    }
    const Js = 100;
    const Os = ".code-workspace", Ys = /&[a-zA-Z][a-zA-Z0-9_-]*=/;
    function Gs(e) {
        const t = e.replace(/\+/g, " ");
        try {
            return decodeURIComponent(t);
        } catch  {
            return t;
        }
    }
    function Ps(e, t) {
        if (!e) return null;
        const A = `${t}=`;
        let n = 0;
        for(; n <= e.length;){
            const t = e.indexOf(A, n);
            if (-1 === t) return null;
            if (!(0 === t || "&" === e[t - 1])) {
                n = t + A.length;
                continue;
            }
            const r = t + A.length;
            let o = e.length;
            const s = e.substring(r).match(Ys);
            s && "number" == typeof s.index && (o = r + s.index);
            const i = e.substring(r, o);
            return i ? Gs(i) : null;
        }
        return null;
    }
    async function Vs(t) {
        const A = function(e) {
            return Ps(e.query, "text");
        }(t);
        if (!A) throw new Error("Missing text parameter for prompt deeplink");
        const n = _s(A);
        if (n) throw new Error(n);
        const r = Ps(t.query, "workspace"), o = r?.trim();
        if (o) try {
            const A = function() {
                if (e.workspace.workspaceFile) return (0, Ss.basename)(e.workspace.workspaceFile.fsPath, Os);
                const t = e.workspace.workspaceFolders?.[0];
                return t ? (0, Ss.basename)(t.uri.fsPath) : void 0;
            }(), n = o.toLowerCase(), r = A?.toLowerCase();
            if (!(void 0 !== A && (A === o || r === n))) {
                if (await e.commands.executeCommand("deeplink.routeToWorkspaceName", o, t.toString())) return;
                console.warn(`[cursor deeplink] No window found with workspace name "${o}", continuing in current window`);
            }
        } catch (e) {
            console.error("[cursor deeplink] Error handling workspace parameter for prompt deeplink", e);
        }
        await e.commands.executeCommand("deeplink.prompt.prefill", {
            text: A,
            mode: Ps(t.query, "mode") ?? void 0
        });
    }
    function xs(e) {
        const t = e.replace(/\+/g, " ");
        try {
            return decodeURIComponent(t);
        } catch  {
            return t;
        }
    }
    async function Hs(t) {
        const A = function(e) {
            const t = e.query;
            if (!t) return null;
            const A = /&[a-zA-Z][a-zA-Z0-9_-]*=/, n = (e)=>{
                const n = `${e}=`;
                let r = 0;
                for(; r <= t.length;){
                    const e = t.indexOf(n, r);
                    if (-1 === e) return null;
                    if (0 !== e && "&" !== t[e - 1]) {
                        r = e + n.length;
                        continue;
                    }
                    const o = e + n.length;
                    let s = t.length;
                    const i = t.substring(o).match(A);
                    i && "number" == typeof i.index && (s = o + i.index);
                    const a = t.substring(o, s);
                    return a ? xs(a) : null;
                }
                return null;
            }, r = n("name"), o = n("text");
            return r && o ? {
                name: r,
                content: o
            } : null;
        }(t);
        if (!A) throw new Error("Missing name or text parameter for command deeplink");
        const { name: n, content: r } = A, o = function(e) {
            if (!e || 0 === e.trim().length) return "Command name is required";
            if (e.length > Js) return `Command name must be ${Js} characters or less`;
            const t = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;
            if (t.test(e)) return "Command name cannot contain control characters";
            let A = e;
            for(let e = 0; e < 3; e++)try {
                const e = decodeURIComponent(A);
                if (e === A) break;
                A = e;
            } catch  {
                break;
            }
            if (t.test(A)) return "Command name cannot contain control characters";
            const n = Ss.normalize(A);
            if (1 !== n.split(Ss.sep).length) return "Command name cannot contain path separators or directory traversal";
            if (n.includes("..")) return "Command name cannot contain path separators or directory traversal";
            if (A.includes("/") || A.includes("\\")) return "Command name cannot contain path separators or directory traversal";
            if ("." === A || ".." === A) return "Command name cannot contain path separators or directory traversal";
            const r = A.normalize("NFC");
            if (r !== A) {
                const e = Ss.normalize(r);
                if (1 !== e.split(Ss.sep).length || e.includes("..")) return "Command name cannot contain path separators or directory traversal";
            }
            return /^[a-zA-Z0-9._-]+$/.test(A) ? [
                "con",
                "prn",
                "aux",
                "nul",
                "com1",
                "com2",
                "com3",
                "com4",
                "com5",
                "com6",
                "com7",
                "com8",
                "com9",
                "lpt1",
                "lpt2",
                "lpt3",
                "lpt4",
                "lpt5",
                "lpt6",
                "lpt7",
                "lpt8",
                "lpt9"
            ].includes(A.toLowerCase()) ? "Command name is reserved and cannot be used" : null : "Command name can only contain letters, numbers, dots, hyphens, and underscores";
        }(n);
        if (o) throw new Error(`Invalid command name: ${o}`);
        const s = _s(r);
        if (s) throw new Error(s);
        const i = crypto.randomUUID();
        await e.commands.executeCommand("deeplink.command.create", {
            name: n,
            content: r,
            correlationId: i
        });
    }
    async function qs(t) {
        const A = function(e) {
            const t = e.query;
            if (!t) return null;
            let A = null, n = null;
            const r = t.indexOf("name=");
            if (-1 !== r) {
                const e = r + 5;
                let n = t.length;
                const o = t.substring(e).match(/&[a-zA-Z][a-zA-Z0-9_-]*=/);
                o && (n = e + o.index), A = t.substring(e, n), A = decodeURIComponent(A.replace(/\+/g, " "));
            }
            const o = t.indexOf("text=");
            if (-1 !== o) {
                const e = o + 5;
                let A = t.length;
                const r = t.substring(e).match(/&[a-zA-Z][a-zA-Z0-9_-]*=/);
                r && (A = e + r.index), n = t.substring(e, A), n = decodeURIComponent(n.replace(/\+/g, " "));
            }
            return A && n ? {
                name: A,
                content: n
            } : null;
        }(t);
        if (!A) throw new Error("Missing name or text parameter for rule deeplink");
        const { name: n, content: r } = A, o = function(e) {
            if (!e || 0 === e.trim().length) return "Rule name is required";
            if (e.length > Js) return `Rule name must be ${Js} characters or less`;
            const t = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;
            if (t.test(e)) return "Rule name cannot contain control characters";
            let A = e;
            for(let e = 0; e < 3; e++)try {
                const e = decodeURIComponent(A);
                if (e === A) break;
                A = e;
            } catch  {
                break;
            }
            if (t.test(A)) return "Rule name cannot contain control characters";
            const n = Ss.normalize(A);
            if (1 !== n.split(Ss.sep).length) return "Rule name cannot contain path separators or directory traversal";
            if (n.includes("..")) return "Rule name cannot contain path separators or directory traversal";
            if (A.includes("/") || A.includes("\\")) return "Rule name cannot contain path separators or directory traversal";
            if ("." === A || ".." === A) return "Rule name cannot contain path separators or directory traversal";
            const r = A.normalize("NFC");
            if (r !== A) {
                const e = Ss.normalize(r);
                if (1 !== e.split(Ss.sep).length || e.includes("..")) return "Rule name cannot contain path separators or directory traversal";
            }
            return /^[a-zA-Z0-9._-]+$/.test(A) ? [
                "con",
                "prn",
                "aux",
                "nul",
                "com1",
                "com2",
                "com3",
                "com4",
                "com5",
                "com6",
                "com7",
                "com8",
                "com9",
                "lpt1",
                "lpt2",
                "lpt3",
                "lpt4",
                "lpt5",
                "lpt6",
                "lpt7",
                "lpt8",
                "lpt9"
            ].includes(A.toLowerCase()) ? "Rule name is reserved and cannot be used" : null : "Rule name can only contain letters, numbers, dots, hyphens, and underscores";
        }(n);
        if (o) throw new Error(`Invalid rule name: ${o}`);
        const s = _s(r);
        if (s) throw new Error(s);
        const i = crypto.randomUUID();
        await e.commands.executeCommand("deeplink.rule.create", {
            name: n,
            content: r,
            correlationId: i
        });
    }
    const Ws = "workbench.action.openCustomizeEditor", js = "aiSettings.action.open", Ks = "/customize", Xs = "/customize/marketplace", Zs = new Set([
        "plugins",
        "mcps",
        "rules",
        "hooks"
    ]);
    async function zs(e, t) {
        void 0 !== e ? await t(js, function(e) {
            return "mcps" === e ? "mcp" : e;
        }(e)) : await t(js);
    }
    async function $s(t, A = {}) {
        const n = A.executeCommand ?? ((t, ...A)=>e.commands.executeCommand(t, ...A)), r = t.path === Xs, o = r ? function(e) {
            const t = new URLSearchParams(e), A = t.get("pluginId")?.trim();
            return A || void 0;
        }(t.query) : void 0, s = r ? void 0 : function(e) {
            const t = new URLSearchParams(e).get("tab");
            if (null === t || "" === t) return;
            const A = "mcp" === t ? "mcps" : t;
            return Zs.has(A) ? A : void 0;
        }(t.query);
        try {
            return void (r ? await async function(e, t) {
                void 0 === e ? await t(Ws, {
                    initialView: {
                        kind: "browse"
                    }
                }) : await t(Ws, {
                    initialView: {
                        kind: "detail",
                        pluginId: e
                    }
                });
            }(o, n) : await async function(e, t) {
                void 0 !== e ? await t(Ws, {
                    initialView: {
                        kind: "manage",
                        tab: e,
                        scope: "user"
                    }
                }) : await t(Ws);
            }(s, n));
        } catch (e) {
            if (!function(e, t) {
                return e instanceof Error && e.message.includes(t) && e.message.toLowerCase().includes("command");
            }(e, Ws)) throw e;
        }
        r ? await zs("plugins", n) : await zs(s, n);
    }
    const ei = "cursor.githubConnect.completeCallback", ti = [
        250,
        500,
        1e3,
        2e3,
        3500
    ];
    function Ai(e, t) {
        const A = e.get(t);
        return null === A || "" === A ? void 0 : A;
    }
    function ni(e) {
        return new Promise((t)=>setTimeout(t, e));
    }
    function ri(e) {
        return e instanceof Error && e.message.includes(ei) && e.message.toLowerCase().includes("command");
    }
    async function oi(t, A = {}) {
        const n = A.executeCommand ?? ((t, ...A)=>e.commands.executeCommand(t, ...A)), r = A.showErrorMessage ?? ((t)=>e.window.showErrorMessage(t)), o = A.sleep ?? ni, s = new URLSearchParams(t.query), i = s.get("state");
        if (null === i || "" === i) return void r("Missing GitHub connection state.");
        const a = {
            state: i,
            code: Ai(s, "code"),
            installationId: Ai(s, "installation_id"),
            setupAction: Ai(s, "setup_action"),
            gheApplication: Ai(s, "ghe_app"),
            error: Ai(s, "error"),
            errorDescription: Ai(s, "error_description")
        };
        await n("cursor.openOrFocusGlassWindow", {
            agentsWindowOpenSource: "github-connect-deeplink"
        }), await async function(e, t) {
            for(let A = 0; A <= ti.length; A++)try {
                return void await t.executeCommand(ei, e);
            } catch (e) {
                const n = ti[A];
                if (void 0 === n || !ri(e)) throw e;
                await t.sleep(n);
            }
        }(a, {
            executeCommand: n,
            showErrorMessage: r,
            sleep: o
        });
    }
    const si = "glass_automations_ui", ii = "custom_agents_enabled", ai = new Set([
        "prefill",
        "prefilljson",
        "prefillyaml",
        "prefillworkflowdata",
        "prefillworkflowdatajson"
    ]);
    async function ci(t) {
        const [A, n] = await Promise.all([
            li(si),
            li(ii)
        ]);
        if (!(A || n)) return void e.window.showWarningMessage("Automation deep links are not enabled.");
        !function(e) {
            for (const t of e.keys())if (ai.has(t.toLowerCase())) return !0;
            return !1;
        }(new URLSearchParams(t.query)) ? await e.commands.executeCommand("cursor.openOrFocusGlassWindow", {
            agentsWindowOpenSource: "deeplink",
            startupHandoff: !1,
            deeplinkUrl: t.toString(!0)
        }) : e.window.showWarningMessage("Automation deep links do not support raw prefill payloads. Use cursor-app-control.open_automation instead.");
    }
    async function li(t) {
        return await Promise.resolve(e.cursor.checkFeatureGate(t, {
            disableExposureLog: !0
        })).catch(()=>!1);
    }
    const ui = "glass_projects_enabled";
    function gi(A) {
        const n = {
            async handleUri (A) {
                try {
                    "/createchat" === A.path ? await Ds(A) : "/mcp/install" === A.path ? await t(A) : "/background-agent/setup" === A.path ? await e.commands.executeCommand("workbench.action.backgroundComposer.startSetup") : "/background-agent" === A.path || "/agent" === A.path ? await async function(t, A = {}) {
                        const n = A.executeCommand ?? ((t, ...A)=>e.commands.executeCommand(t, ...A));
                        await n("cursor.openOrFocusGlassWindow", {
                            agentsWindowOpenSource: "deeplink",
                            startupHandoff: !1,
                            deeplinkUrl: t.toString(!0)
                        });
                    }(A) : "/create-project" === A.path ? await async function(t) {
                        await Promise.resolve(e.cursor.checkFeatureGate(ui, {
                            disableExposureLog: !0
                        })).catch(()=>!1) ? await e.commands.executeCommand("cursor.openOrFocusGlassWindow", {
                            agentsWindowOpenSource: "deeplink",
                            startupHandoff: !1,
                            deeplinkUrl: t.toString(!0)
                        }) : e.window.showWarningMessage("You do not have access to Projects. If you are on an Enterprise account, please contact an admin.");
                    }(A) : "/automations" === A.path || A.path.startsWith("/automations/") ? await ci(A) : (n = A.path) === Ks || n === Xs ? await $s(A) : A.path.startsWith("/settings") ? await async function(t) {
                        t.path.startsWith("/settings/background-composer") ? await e.commands.executeCommand("aiSettings.action.open", "background-composer") : t.path.startsWith("/settings/plugins") ? await e.commands.executeCommand("aiSettings.action.open", "plugins") : t.path.startsWith("/settings/plan-usage") ? await e.commands.executeCommand("aiSettings.action.open", "plan-usage") : await e.commands.executeCommand("aiSettings.action.open");
                    }(A) : "/prompt" === A.path ? await Vs(A) : "/command" === A.path ? await Hs(A) : "/rule" === A.path ? await qs(A) : "/pr-review" === A.path ? await async function(t) {
                        const A = new URLSearchParams(t.query).get("url");
                        if (!A) return console.error("[cursor deeplink] Missing url parameter in PR review deep link"), void e.window.showErrorMessage("Missing PR URL in link.");
                        await e.window.withProgress({
                            location: e.ProgressLocation.Window,
                            title: "Opening PR Review",
                            cancellable: !1
                        }, async ()=>{
                            try {
                                await e.commands.executeCommand("deeplink.prReview.open", A);
                            } catch (t) {
                                console.error("[cursor deeplink] Failed to open PR review:", t), e.window.showErrorMessage(`Failed to open PR review: ${t instanceof Error ? t.message : String(t)}`);
                            }
                        });
                    }(A) : "/plugin/add" === A.path ? await async function(t) {
                        const A = new URLSearchParams(t.query), n = A.get("id")?.trim();
                        n ? await e.commands.executeCommand(Ws, {
                            initialView: {
                                kind: "detail",
                                pluginId: n
                            }
                        }) : e.window.showErrorMessage('Missing "id" parameter in deep link.');
                    }(A) : "/plugin/install-and-prompt" === A.path ? await async function(t) {
                        await e.commands.executeCommand("cursor.openOrFocusGlassWindow", {
                            agentsWindowOpenSource: "deeplink",
                            startupHandoff: !1,
                            deeplinkUrl: t.toString(!0)
                        });
                    }(A) : "/github-connect-callback" === A.path ? await oi(A) : "/glass" === A.path ? await async function(t, A = {}) {
                        const n = A.executeCommand ?? ((t, ...A)=>e.commands.executeCommand(t, ...A)), r = new URLSearchParams(t.query).get("target")?.trim().toLowerCase();
                        "cloud" !== r ? await n("cursor.openOrFocusGlassWindow", {
                            agentsWindowOpenSource: "deeplink"
                        }) : await n("cursor.openOrFocusGlassWindow", {
                            agentsWindowOpenSource: "deeplink",
                            startupHandoff: !1,
                            deeplinkUrl: t.toString(!0)
                        });
                    }(A) : "/" === A.path || "" === A.path || (console.warn("Unrecognized deeplink", A), e.window.showWarningMessage("Unrecognized deep link. Try updating Cursor"));
                } catch (t) {
                    console.error("[cursor deeplink] Error handling deep link", t), e.window.showErrorMessage(`Error handling deep link: ${t instanceof Error ? t.message : String(t)}`);
                }
                var n;
            }
        }, r = e.commands.registerCommand("cursor-deeplink.debug.triggerDeeplink", async ()=>{
            const t = await e.window.showInputBox({
                prompt: "Enter a deeplink URL to test (e.g., cursor://anysphere.cursor-deeplink/command/create?name=test&content=...)",
                placeHolder: "cursor://anysphere.cursor-deeplink/...",
                validateInput: (t)=>{
                    if (!t) return "Please enter a deeplink URL";
                    try {
                        const A = e.Uri.parse(t);
                        return "cursor" !== A.scheme || "anysphere.cursor-deeplink" !== A.authority ? "URL must start with cursor://anysphere.cursor-deeplink/" : null;
                    } catch  {
                        return "Invalid URL format";
                    }
                }
            });
            if (t) try {
                const A = e.Uri.parse(t);
                await n.handleUri(A);
            } catch (t) {
                e.window.showErrorMessage(`Error processing deeplink: ${t instanceof Error ? t.message : String(t)}`);
            }
        });
        A.subscriptions.push(e.window.registerUriHandler(n)), A.subscriptions.push(r);
    }
    async function Ei() {}
})();
var r = exports;
for(var o in n)r[o] = n[o];
n.__esModule && Object.defineProperty(r, "__esModule", {
    value: !0
});
