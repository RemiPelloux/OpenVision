var n = {};
(()=>{
    "use strict";
    require.r(n), require.d(n, {
        activate: ()=>Jg
    });
    const e = require("vscode");
    class A {
        static init() {
            A.output = e.window.createOutputChannel("Shadow Workspace", {
                log: !0
            });
        }
        static error(e, ...t) {
            void 0 === A.output && A.init(), A.output?.error(e, ...t);
        }
        static warn(e, ...t) {
            void 0 === A.output && A.init(), A.output?.warn(e, ...t);
        }
        static info(e, ...t) {
            void 0 === A.output && A.init(), A.output?.info(e, ...t);
        }
        static debug(e, ...t) {
            void 0 === A.output && A.init(), A.output?.debug(e, ...t);
        }
        static trace(e, ...t) {
            void 0 === A.output && A.init(), A.output?.trace(e, ...t);
        }
    }
    var r = require("./module-5853.js");
    const [o] = process.versions.node.split(".").map((e)=>parseInt(e, 10));
    o < 18 && void 0 === globalThis.Headers && (globalThis.Headers = r.Headers);
    var s, a = require("./module-3106.js"), i = require("./module-9023.js");
    function c(e) {
        const A = s[e];
        return "string" != typeof A ? e.toString() : A[0].toLowerCase() + A.substring(1).replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
    }
    let l;
    !function(e) {
        e[e.Canceled = 1] = "Canceled", e[e.Unknown = 2] = "Unknown", e[e.InvalidArgument = 3] = "InvalidArgument", e[e.DeadlineExceeded = 4] = "DeadlineExceeded", e[e.NotFound = 5] = "NotFound", e[e.AlreadyExists = 6] = "AlreadyExists", e[e.PermissionDenied = 7] = "PermissionDenied", e[e.ResourceExhausted = 8] = "ResourceExhausted", e[e.FailedPrecondition = 9] = "FailedPrecondition", e[e.Aborted = 10] = "Aborted", e[e.OutOfRange = 11] = "OutOfRange", e[e.Unimplemented = 12] = "Unimplemented", e[e.Internal = 13] = "Internal", e[e.Unavailable = 14] = "Unavailable", e[e.DataLoss = 15] = "DataLoss", e[e.Unauthenticated = 16] = "Unauthenticated";
    }(s || (s = {}));
    class g extends Error {
        constructor(e, A = s.Unknown, t, n, r){
            super(function(e, A) {
                return e.length ? `[${c(A)}] ${e}` : `[${c(A)}]`;
            }(e, A)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e, this.code = A, this.metadata = new Headers(null != t ? t : {}), this.details = null != n ? n : [], this.cause = r;
        }
        static from(e, A = s.Unknown) {
            return e instanceof g ? e : e instanceof Error ? "AbortError" == e.name ? new g(e.message, s.Canceled) : new g(e.message, A, void 0, void 0, e) : new g(String(e), A, void 0, void 0, e);
        }
        static [Symbol.hasInstance](e) {
            return e instanceof Error && (Object.getPrototypeOf(e) === g.prototype || "ConnectError" === e.name && "code" in e && "number" == typeof e.code && "metadata" in e && "details" in e && Array.isArray(e.details) && "rawMessage" in e && "string" == typeof e.rawMessage && "cause" in e);
        }
        findDetails(e) {
            const A = "typeName" in e ? {
                findMessage: (A)=>A === e.typeName ? e : void 0
            } : e, t = [];
            for (const e of this.details){
                if ("getType" in e) {
                    A.findMessage(e.getType().typeName) && t.push(e);
                    continue;
                }
                const n = A.findMessage(e.type);
                if (n) try {
                    t.push(n.fromBinary(e.value));
                } catch (e) {}
            }
            return t;
        }
    }
    function E(e) {
        let A = s.Internal;
        const t = (function(e) {
            const A = [];
            for(; e instanceof Error && !A.includes(e) && (A.push(e), "cause" in e);)e = e.cause;
            return A;
        })(e).map(u);
        t.some((e)=>"ERR_STREAM_WRITE_AFTER_END" == e.code) || t.some((e)=>"ERR_STREAM_DESTROYED" == e.code || "ERR_HTTP2_INVALID_STREAM" == e.code || "ECONNRESET" == e.code) ? A = s.Aborted : t.some((e)=>"ETIMEDOUT" == e.code || "ENOTFOUND" == e.code || "EAI_AGAIN" == e.code || "ECONNREFUSED" == e.code) && (A = s.Unavailable);
        const n = g.from(e, A);
        return n !== e && (n.cause = e), n;
    }
    function u(e) {
        const A = {};
        return e instanceof Error && ("code" in e && "string" == typeof e.code && (A.code = e.code), "syscall" in e && "string" == typeof e.syscall && (A.syscall = e.syscall)), A;
    }
    var d;
    !function(e) {
        e[e.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", e[e.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", e[e.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", e[e.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", e[e.STREAM_CLOSED = 5] = "STREAM_CLOSED", e[e.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", e[e.REFUSED_STREAM = 7] = "REFUSED_STREAM", e[e.CANCEL = 8] = "CANCEL", e[e.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", e[e.CONNECT_ERROR = 10] = "CONNECT_ERROR", e[e.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", e[e.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", e[e.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
    }(d || (d = {}));
    const I = (0, i.promisify)(a.gzip), h = (0, i.promisify)(a.gunzip), Q = (0, i.promisify)(a.brotliCompress), m = (0, i.promisify)(a.brotliDecompress), C = {
        name: "gzip",
        compress: (e)=>I(e, {}),
        decompress: (e, A)=>0 == e.length ? Promise.resolve(new Uint8Array(0)) : p(h(e, {
                maxOutputLength: A
            }), A)
    }, B = {
        name: "br",
        compress: (e)=>Q(e, {}),
        decompress: (e, A)=>0 == e.length ? Promise.resolve(new Uint8Array(0)) : p(m(e, {
                maxOutputLength: A
            }), A)
    };
    function p(e, A) {
        return e.catch((e)=>{
            const t = u(e);
            let n = s.Internal, r = "decompression failed";
            switch(t.code){
                case "ERR_BUFFER_TOO_LARGE":
                    n = s.ResourceExhausted, r = `message is larger than configured readMaxBytes ${A} after decompression`;
                    break;
                case "Z_DATA_ERROR":
                case "ERR_PADDING_2":
                    n = s.InvalidArgument;
                    break;
                default:
                    void 0 !== t.code && t.code.startsWith("ERR__ERROR_FORMAT_") && (n = s.InvalidArgument);
            }
            return Promise.reject(new g(r, n, void 0, void 0, e));
        });
    }
    require("./module-5675.js"), require("./module-8611.js");
    require("https");
    var f = require("./module-6038.js");
    function y(...e) {
        const A = new AbortController, t = e.filter((e)=>void 0 !== e).concat(A.signal);
        for (const e of t){
            if (e.aborted) {
                n.apply(e);
                break;
            }
            e.addEventListener("abort", n);
        }
        function n() {
            A.signal.aborted || A.abort(function(e) {
                if (!e.aborted) return;
                if (void 0 !== e.reason) return e.reason;
                const A = new Error("This operation was aborted");
                return A.name = "AbortError", A;
            }(this));
            for (const e of t)e.removeEventListener("abort", n);
        }
        return A;
    }
    function T(e) {
        var A;
        let t;
        if (void 0 !== e.timeoutMs) {
            const A = new Date(Date.now() + e.timeoutMs);
            t = ()=>A.getTime() - Date.now();
        } else t = ()=>{};
        const n = function(e) {
            const A = new AbortController, t = ()=>{
                A.abort(new g("the operation timed out", s.DeadlineExceeded));
            };
            let n;
            return void 0 !== e && (e <= 0 ? t() : n = setTimeout(t, e)), {
                signal: A.signal,
                cleanup: ()=>clearTimeout(n)
            };
        }(e.timeoutMs), r = y(n.signal, e.requestSignal, e.shutdownSignal);
        return Object.assign(Object.assign({}, e), {
            signal: r.signal,
            timeoutMs: t,
            requestHeader: new Headers(e.requestHeader),
            responseHeader: new Headers(e.responseHeader),
            responseTrailer: new Headers(e.responseTrailer),
            abort (e) {
                n.cleanup(), r.abort(e);
            },
            values: null !== (A = e.contextValues) && void 0 !== A ? A : {
                get (e) {
                    return e.id in this ? this[e.id] : e.defaultValue;
                },
                set (e, A) {
                    return this[e.id] = A, this;
                },
                delete (e) {
                    return delete this[e.id], this;
                }
            }
        });
    }
    function k(e, A, t) {
        return {
            kind: A.kind,
            service: e,
            method: A,
            impl: t
        };
    }
    const w = 128;
    function N(e) {
        const A = new Headers, t = (new TextDecoder).decode(e).split("\r\n");
        for (const e of t){
            if ("" === e) continue;
            const t = e.indexOf(":");
            if (t > 0) {
                const n = e.substring(0, t).trim(), r = e.substring(t + 1).trim();
                A.append(n, r);
            }
        }
        return A;
    }
    function D(e) {
        const A = [];
        return e.forEach((e, t)=>{
            A.push(`${t}: ${e}\r\n`);
        }), (new TextEncoder).encode(A.join(""));
    }
    const R = "Content-Type", S = "Grpc-Encoding", b = "Grpc-Accept-Encoding", F = "Grpc-Timeout", _ = "Grpc-Status", v = /^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, L = "application/grpc-web+proto", U = "application/grpc-web+json";
    function M(e, A) {
        if (null === e) return {};
        const t = /^(\d{1,8})([HMSmun])$/.exec(e);
        if (null === t) return {
            error: new g(`protocol error: invalid grpc timeout value: ${e}`, s.InvalidArgument)
        };
        const n = {
            H: 36e5,
            M: 6e4,
            S: 1e3,
            m: 1,
            u: .001,
            n: 1e-6
        }[t[2]] * parseInt(t[1]);
        return n > A ? {
            timeoutMs: n,
            error: new g(`timeout ${n}ms must be <= ${A}`, s.InvalidArgument)
        } : {
            timeoutMs: n
        };
    }
    class O extends f.Message {
        constructor(e){
            super(), this.code = 0, this.message = "", this.details = [], f.proto3.util.initPartial(e, this);
        }
        static fromBinary(e, A) {
            return (new O).fromBinary(e, A);
        }
        static fromJson(e, A) {
            return (new O).fromJson(e, A);
        }
        static fromJsonString(e, A) {
            return (new O).fromJsonString(e, A);
        }
        static equals(e, A) {
            return f.proto3.util.equals(O, e, A);
        }
    }
    O.runtime = f.proto3, O.typeName = "google.rpc.Status", O.fields = f.proto3.util.newFieldList(()=>[
            {
                no: 1,
                name: "code",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "details",
                kind: "message",
                T: f.Any,
                repeated: !0
            }
        ]);
    const J = "0";
    function Y(e, A) {
        if (A) {
            if (e.set(_, A.code.toString(10)), e.set("Grpc-Message", encodeURIComponent(A.rawMessage)), A.details.length > 0) {
                const t = new O({
                    code: A.code,
                    message: A.rawMessage,
                    details: A.details.map((e)=>"getType" in e ? f.Any.pack(e) : new f.Any({
                            typeUrl: `type.googleapis.com/${e.type}`,
                            value: e.value
                        }))
                });
                e.set("Grpc-Status-Details-Bin", function(e) {
                    let A;
                    return A = "object" == typeof e && "getType" in e ? e.toBinary() : "string" == typeof e ? (new TextEncoder).encode(e) : e instanceof Uint8Array ? e : new Uint8Array(e), f.protoBase64.enc(A).replace(/=+$/, "");
                }(t));
            }
        } else e.set(_, J.toString());
        return e;
    }
    function P(e, A, t, n) {
        let r, o = null, a = null;
        if (null !== A && "identity" !== A) {
            const t = e.find((e)=>e.name === A);
            if (t) o = t;
            else {
                const t = e.map((e)=>e.name).join(",");
                r = new g(`unknown compression "${A}": supported encodings are ${t}`, s.Unimplemented, {
                    [n]: t
                });
            }
        }
        if (null === t || "" === t) a = o;
        else {
            const A = t.split(",").map((e)=>e.trim());
            for (const t of A){
                const A = e.find((e)=>e.name === t);
                if (A) {
                    a = A;
                    break;
                }
            }
        }
        return {
            request: o,
            response: a,
            error: r
        };
    }
    const G = 4294967295, V = G;
    function x(e, A, t = !1) {
        if (A > e) {
            let n = `message size is larger than configured readMaxBytes ${e}`;
            throw t && (n = `message size ${A} is larger than configured readMaxBytes ${e}`), new g(n, s.ResourceExhausted);
        }
    }
    function H(e) {
        return new q(e);
    }
    class q {
        constructor(e){
            this.readMaxBytes = e, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
        }
        get byteLength() {
            return this.buf.reduce((e, A)=>e + A.byteLength, 0);
        }
        decode(e) {
            this.buf.push(e);
            const A = [];
            for(;;){
                let e = this.pop();
                if (!e) break;
                A.push(e);
            }
            return A;
        }
        pop() {
            if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
                const e = this.env;
                return this.env = void 0, e;
            }
        }
        head() {
            if (!this.cons(this.header)) return;
            const e = this.headerView.getUint8(0), A = this.headerView.getUint32(1);
            return x(this.readMaxBytes, A, !0), {
                flags: e,
                data: new Uint8Array(A)
            };
        }
        cons(e) {
            const A = e.byteLength;
            if (this.byteLength < A) return !1;
            let t = 0;
            for(; t < A;){
                const n = this.buf.shift();
                n.byteLength > A - t ? (e.set(n.subarray(0, A - t), t), this.buf.unshift(n.subarray(A - t)), t += A - t) : (e.set(n, t), t += n.byteLength);
            }
            return !0;
        }
    }
    async function W(e, A, t) {
        let { flags: n, data: r } = e;
        if (!(1 & ~n)) throw new g("invalid envelope, already compressed", s.Internal);
        return A && r.byteLength >= t && (r = await A.compress(r), n |= 1), {
            data: r,
            flags: n
        };
    }
    async function j(e, A, t) {
        let { flags: n, data: r } = e;
        if (!(1 & ~n)) {
            if (!A) throw new g("received compressed envelope, but do not know how to decompress", s.Internal);
            r = await A.decompress(r, t), n ^= 1;
        }
        return {
            data: r,
            flags: n
        };
    }
    function X(e, A) {
        const t = new Uint8Array(A.length + 5);
        t.set(A, 5);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.setUint8(0, e), n.setUint32(1, A.length), t;
    }
    var K = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var A, t = e[Symbol.asyncIterator];
        return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), A = {}, n("next"), n("throw"), n("return"), A[Symbol.asyncIterator] = function() {
            return this;
        }, A);
        function n(t) {
            A[t] = e[t] && function(A) {
                return new Promise(function(n, r) {
                    (function(e, A, t, n) {
                        Promise.resolve(n).then(function(A) {
                            e({
                                value: A,
                                done: t
                            });
                        }, A);
                    })(n, r, (A = e[t](A)).done, A.value);
                });
            };
        }
    }, Z = function(e) {
        return this instanceof Z ? (this.v = e, this) : new Z(e);
    }, z = function(e, A, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, r = t.apply(e, A || []), o = [];
        return n = {}, s("next"), s("throw"), s("return", function(e) {
            return function(A) {
                return Promise.resolve(A).then(e, c);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function s(e, A) {
            r[e] && (n[e] = function(A) {
                return new Promise(function(t, n) {
                    o.push([
                        e,
                        A,
                        t,
                        n
                    ]) > 1 || a(e, A);
                });
            }, A && (n[e] = A(n[e])));
        }
        function a(e, A) {
            try {
                (t = r[e](A)).value instanceof Z ? Promise.resolve(t.value.v).then(i, c) : l(o[0][2], t);
            } catch (e) {
                l(o[0][3], e);
            }
            var t;
        }
        function i(e) {
            a("next", e);
        }
        function c(e) {
            a("throw", e);
        }
        function l(e, A) {
            e(A), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
    }, $ = function(e) {
        var A, t;
        return A = {}, n("next"), n("throw", function(e) {
            throw e;
        }), n("return"), A[Symbol.iterator] = function() {
            return this;
        }, A;
        function n(n, r) {
            A[n] = e[n] ? function(A) {
                return (t = !t) ? {
                    value: Z(e[n](A)),
                    done: !1
                } : r ? r(A) : A;
            } : r;
        }
    };
    function ee(e, ...A) {
        return z(this, arguments, function*() {
            var t;
            const [n, r] = function(e) {
                let A;
                "function" != typeof e[e.length - 1] && (A = e.pop());
                return [
                    e,
                    A
                ];
            }(A);
            let o;
            const s = e[Symbol.asyncIterator]();
            let a = {
                [Symbol.asyncIterator]: ()=>s
            };
            !0 === (null == r ? void 0 : r.propagateDownStreamError) && (a = o = ge(a));
            for (const e of n)a = e(a);
            const i = a[Symbol.asyncIterator]();
            try {
                for(;;){
                    const e = yield Z(i.next());
                    if (!0 === e.done) break;
                    if (o) try {
                        yield yield Z(e.value);
                    } catch (e) {
                        throw yield Z(o.abort(e)), e;
                    }
                    else yield yield Z(e.value);
                }
            } finally{
                !0 === (null == r ? void 0 : r.propagateDownStreamError) && (null === (t = s.return) || void 0 === t || t.call(s).catch(()=>{}));
            }
        });
    }
    function Ae(e) {
        return function(A) {
            return z(this, arguments, function*() {
                let t;
                const n = A[Symbol.asyncIterator]();
                for(;;){
                    let e;
                    try {
                        e = yield Z(n.next());
                    } catch (e) {
                        t = e;
                        break;
                    }
                    if (!0 === e.done) break;
                    yield yield Z(e.value);
                }
                const r = yield Z(e(t));
                void 0 !== r && (yield yield Z(r));
            });
        };
    }
    function te(e) {
        return function(A) {
            return z(this, arguments, function*() {
                var t, n, r, o;
                const s = yield Z(e());
                void 0 !== s && (yield yield Z(s));
                try {
                    for(var a, i = !0, c = K(A); !(t = (a = yield Z(c.next())).done); i = !0){
                        o = a.value, i = !1;
                        const e = o;
                        yield yield Z(e);
                    }
                } catch (e) {
                    n = {
                        error: e
                    };
                } finally{
                    try {
                        i || t || !(r = c.return) || (yield Z(r.call(c)));
                    } finally{
                        if (n) throw n.error;
                    }
                }
            });
        };
    }
    function ne(e, A, t) {
        return void 0 === A || void 0 === t ? function(A) {
            return z(this, arguments, function*() {
                var t, n, r, o;
                try {
                    for(var s, a = !0, i = K(A); !(t = (s = yield Z(i.next())).done); a = !0){
                        o = s.value, a = !1;
                        const A = o, t = e.serialize(A);
                        yield yield Z({
                            flags: 0,
                            data: t
                        });
                    }
                } catch (e) {
                    n = {
                        error: e
                    };
                } finally{
                    try {
                        a || t || !(r = i.return) || (yield Z(r.call(i)));
                    } finally{
                        if (n) throw n.error;
                    }
                }
            });
        } : function(n) {
            return z(this, arguments, function*() {
                var r, o, s, a;
                try {
                    for(var i, c = !0, l = K(n); !(r = (i = yield Z(l.next())).done); c = !0){
                        a = i.value, c = !1;
                        const n = a;
                        let r, o = 0;
                        n.end ? (o |= A, r = t.serialize(n.value)) : r = e.serialize(n.value), yield yield Z({
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
                        c || r || !(s = l.return) || (yield Z(s.call(l)));
                    } finally{
                        if (o) throw o.error;
                    }
                }
            });
        };
    }
    function re(e, A, t) {
        return t && void 0 !== A ? function(n) {
            return z(this, arguments, function*() {
                var r, o, s, a;
                try {
                    for(var i, c = !0, l = K(n); !(r = (i = yield Z(l.next())).done); c = !0){
                        a = i.value, c = !1;
                        const { flags: n, data: r } = a;
                        (n & A) === A ? yield yield Z({
                            value: t.parse(r),
                            end: !0
                        }) : yield yield Z({
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
                        c || r || !(s = l.return) || (yield Z(s.call(l)));
                    } finally{
                        if (o) throw o.error;
                    }
                }
            });
        } : function(n) {
            return z(this, arguments, function*() {
                var r, o, a, i;
                try {
                    for(var c, l = !0, E = K(n); !(r = (c = yield Z(E.next())).done); l = !0){
                        i = c.value, l = !1;
                        const { flags: n, data: r } = i;
                        if (void 0 === A || (n & A) !== A) yield yield Z(e.parse(r));
                        else if (null === t) throw new g("unexpected end flag", s.InvalidArgument);
                    }
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally{
                    try {
                        l || r || !(a = E.return) || (yield Z(a.call(E)));
                    } finally{
                        if (o) throw o.error;
                    }
                }
            });
        };
    }
    function oe(e, A) {
        return function(t) {
            return z(this, arguments, function*() {
                var n, r, o, s;
                try {
                    for(var a, i = !0, c = K(t); !(n = (a = yield Z(c.next())).done); i = !0){
                        s = a.value, i = !1;
                        const t = s;
                        yield yield Z((yield Z(W(t, e, A))));
                    }
                } catch (e) {
                    r = {
                        error: e
                    };
                } finally{
                    try {
                        i || n || !(o = c.return) || (yield Z(o.call(c)));
                    } finally{
                        if (r) throw r.error;
                    }
                }
            });
        };
    }
    function se(e, A) {
        return function(t) {
            return z(this, arguments, function*() {
                var n, r, o, s;
                try {
                    for(var a, i = !0, c = K(t); !(n = (a = yield Z(c.next())).done); i = !0){
                        s = a.value, i = !1;
                        const t = s;
                        yield yield Z((yield Z(j(t, e, A))));
                    }
                } catch (e) {
                    r = {
                        error: e
                    };
                } finally{
                    try {
                        i || n || !(o = c.return) || (yield Z(o.call(c)));
                    } finally{
                        if (r) throw r.error;
                    }
                }
            });
        };
    }
    function ae() {
        return function(e) {
            return z(this, arguments, function*() {
                var A, t, n, r;
                try {
                    for(var o, s = !0, a = K(e); !(A = (o = yield Z(a.next())).done); s = !0){
                        r = o.value, s = !1;
                        const { flags: e, data: A } = r;
                        yield yield Z(X(e, A));
                    }
                } catch (e) {
                    t = {
                        error: e
                    };
                } finally{
                    try {
                        s || A || !(n = a.return) || (yield Z(n.call(a)));
                    } finally{
                        if (t) throw t.error;
                    }
                }
            });
        };
    }
    function ie(e) {
        return function(A) {
            return z(this, arguments, function*() {
                var t, n, r, o;
                const a = H(e);
                try {
                    for(var i, c = !0, l = K(A); !(t = (i = yield Z(l.next())).done); c = !0){
                        o = i.value, c = !1;
                        const e = o;
                        for (const A of a.decode(e))yield yield Z(A);
                    }
                } catch (e) {
                    n = {
                        error: e
                    };
                } finally{
                    try {
                        c || t || !(r = l.return) || (yield Z(r.call(l)));
                    } finally{
                        if (n) throw n.error;
                    }
                }
                if (a.byteLength > 0) throw new g("protocol error: incomplete envelope", s.InvalidArgument);
            });
        };
    }
    async function ce(e, A, t) {
        var n, r, o, a, i, c, l, E;
        const [u, d] = function(e) {
            if (null == e) return [
                !1,
                0
            ];
            const A = "string" == typeof e ? parseInt(e, 10) : e;
            if (!Number.isSafeInteger(A) || A < 0) return [
                !1,
                A
            ];
            return [
                !0,
                A
            ];
        }(t);
        if (u) {
            d > A && x(A, d, !0);
            const t = new Uint8Array(d);
            let i = 0;
            try {
                for(var I, h = !0, Q = K(e); !(n = (I = await Q.next()).done); h = !0){
                    a = I.value, h = !1;
                    const e = a;
                    if (i + e.byteLength > d) throw new g(`protocol error: promised ${d} bytes, received ${i + e.byteLength}`, s.InvalidArgument);
                    t.set(e, i), i += e.byteLength;
                }
            } catch (e) {
                r = {
                    error: e
                };
            } finally{
                try {
                    h || n || !(o = Q.return) || await o.call(Q);
                } finally{
                    if (r) throw r.error;
                }
            }
            if (i < d) throw new g(`protocol error: promised ${d} bytes, received ${i}`, s.InvalidArgument);
            return t;
        }
        const m = [];
        let C = 0;
        try {
            for(var B, p = !0, f = K(e); !(i = (B = await f.next()).done); p = !0){
                E = B.value, p = !1;
                const e = E;
                C += e.byteLength, x(A, C), m.push(e);
            }
        } catch (e) {
            c = {
                error: e
            };
        } finally{
            try {
                p || i || !(l = f.return) || await l.call(f);
            } finally{
                if (c) throw c.error;
            }
        }
        const y = new Uint8Array(C);
        let T = 0;
        for(let e = m.shift(); e; e = m.shift())y.set(e, T), T += e.byteLength;
        return y;
    }
    async function le(e) {
        const A = e[Symbol.asyncIterator]();
        let t = await A.next();
        return {
            [Symbol.asyncIterator] () {
                const e = {
                    async next () {
                        if (null !== t) {
                            const e = t;
                            return t = null, e;
                        }
                        return await A.next();
                    }
                };
                return void 0 !== A.throw && (e.throw = (e)=>A.throw(e)), void 0 !== A.return && (e.return = (e)=>A.return(e)), e;
            }
        };
    }
    function ge(e) {
        const A = e[Symbol.asyncIterator]();
        if (void 0 === A.throw) throw new Error("AsyncIterable does not implement throw");
        const t = A;
        let n, r, o = {
            next: ()=>(r = t.next().finally(()=>{
                    r = void 0;
                }), r),
            throw: (e)=>t.throw(e)
        };
        void 0 !== A.return && (o = Object.assign(Object.assign({}, o), {
            return: (e)=>t.return(e)
        }));
        let s = !1;
        return {
            abort (e) {
                if (n) return n.state;
                const A = ()=>t.throw(e).then((e)=>!0 === e.done ? "completed" : "caught", ()=>"rethrown");
                return r ? (n = {
                    reason: e,
                    state: r.then(A, A)
                }, n.state) : (n = {
                    reason: e,
                    state: A()
                }, n.state);
            },
            [Symbol.asyncIterator] () {
                if (s) throw new Error("AsyncIterable cannot be re-used");
                return s = !0, o;
            }
        };
    }
    function Ee(e) {
        return z(this, arguments, function*() {
            yield Z((yield* $(K(e))));
        });
    }
    function ue(...e) {
        const A = new Map, t = e.reduce((e, A)=>e.concat("supported" in A ? A.supported : A), []);
        function n(e) {
            if (null === e || 0 == e.length) return !1;
            const n = A.get(e);
            if (void 0 !== n) return n;
            const r = t.some((A)=>A.test(e));
            return A.size < 1024 && A.set(e, r), r;
        }
        return n.supported = t, n;
    }
    function de(e, A, t) {
        const n = "string" == typeof A ? A : A.typeName, r = "string" == typeof t ? t : t.name;
        return e.toString().replace(/\/?$/, `/${n}/${r}`);
    }
    function Ie(e, A) {
        return A instanceof e ? A : new e(A);
    }
    function he(e, A) {
        function t(A) {
            return !0 === A.done ? A : {
                done: A.done,
                value: Ie(e, A.value)
            };
        }
        return {
            [Symbol.asyncIterator] () {
                const e = A[Symbol.asyncIterator](), n = {
                    next: ()=>e.next().then(t)
                };
                return void 0 !== e.throw && (n.throw = (A)=>e.throw(A).then(t)), void 0 !== e.return && (n.return = (A)=>e.return(A).then(t)), n;
            }
        };
    }
    function Qe(e, A) {
        var t;
        return null !== (t = null == A ? void 0 : A.concat().reverse().reduce((e, A)=>A(e), e)) && void 0 !== t ? t : e;
    }
    var me = function(e) {
        return this instanceof me ? (this.v = e, this) : new me(e);
    }, Ce = function(e, A, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, r = t.apply(e, A || []), o = [];
        return n = {}, s("next"), s("throw"), s("return", function(e) {
            return function(A) {
                return Promise.resolve(A).then(e, c);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function s(e, A) {
            r[e] && (n[e] = function(A) {
                return new Promise(function(t, n) {
                    o.push([
                        e,
                        A,
                        t,
                        n
                    ]) > 1 || a(e, A);
                });
            }, A && (n[e] = A(n[e])));
        }
        function a(e, A) {
            try {
                (t = r[e](A)).value instanceof me ? Promise.resolve(t.value.v).then(i, c) : l(o[0][2], t);
            } catch (e) {
                l(o[0][3], e);
            }
            var t;
        }
        function i(e) {
            a("next", e);
        }
        function c(e) {
            a("throw", e);
        }
        function l(e, A) {
            e(A), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
    }, Be = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var A, t = e[Symbol.asyncIterator];
        return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), A = {}, n("next"), n("throw"), n("return"), A[Symbol.asyncIterator] = function() {
            return this;
        }, A);
        function n(t) {
            A[t] = e[t] && function(A) {
                return new Promise(function(n, r) {
                    (function(e, A, t, n) {
                        Promise.resolve(n).then(function(A) {
                            e({
                                value: A,
                                done: t
                            });
                        }, A);
                    })(n, r, (A = e[t](A)).done, A.value);
                });
            };
        }
    }, pe = function(e) {
        var A, t;
        return A = {}, n("next"), n("throw", function(e) {
            throw e;
        }), n("return"), A[Symbol.iterator] = function() {
            return this;
        }, A;
        function n(n, r) {
            A[n] = e[n] ? function(A) {
                return (t = !t) ? {
                    value: me(e[n](A)),
                    done: !1
                } : r ? r(A) : A;
            } : r;
        }
    };
    function fe(e, A, t) {
        switch(e.kind){
            case f.MethodKind.Unary:
                return function(n) {
                    return Ce(this, arguments, function*() {
                        const r = n[Symbol.asyncIterator](), o = yield me(r.next());
                        if (!0 === o.done) throw new g("protocol error: missing input message for unary method", s.Unimplemented);
                        const a = Qe(async (t)=>({
                                message: Ie(e.method.O, await e.impl(t.message, Object.assign(Object.assign({}, A), {
                                    service: t.service,
                                    method: t.method,
                                    requestHeader: t.header,
                                    values: t.contextValues,
                                    signal: t.signal
                                }))),
                                stream: !1,
                                service: t.service,
                                method: t.method,
                                header: A.responseHeader,
                                trailer: A.responseTrailer
                            }), t), { message: i, header: c, trailer: l } = yield me(a({
                            init: {
                                method: A.requestMethod
                            },
                            message: o.value,
                            url: A.url,
                            signal: A.signal,
                            service: e.service,
                            method: e.method,
                            header: A.requestHeader,
                            contextValues: A.values,
                            stream: !1
                        }));
                        ye(c, A.responseHeader), ye(l, A.responseTrailer), yield yield me(i);
                        if (!0 !== (yield me(r.next())).done) throw new g("protocol error: received extra input message for unary method", s.Unimplemented);
                    });
                };
            case f.MethodKind.ServerStreaming:
                return function(n) {
                    return Ce(this, arguments, function*() {
                        const r = n[Symbol.asyncIterator](), o = yield me(r.next());
                        if (!0 === o.done) throw new g("protocol error: missing input message for server-streaming method", s.Unimplemented);
                        const a = Qe(async (t)=>({
                                message: he(e.method.O, e.impl(t.message, Object.assign(Object.assign({}, A), {
                                    service: t.service,
                                    method: t.method,
                                    requestHeader: t.header,
                                    values: t.contextValues,
                                    signal: t.signal
                                }))),
                                stream: !0,
                                service: t.service,
                                method: t.method,
                                header: A.responseHeader,
                                trailer: A.responseTrailer
                            }), t), { message: i, header: c, trailer: l } = yield me(a({
                            init: {
                                method: A.requestMethod
                            },
                            message: o.value,
                            url: A.url,
                            signal: A.signal,
                            service: e.service,
                            method: e.method,
                            header: A.requestHeader,
                            contextValues: A.values,
                            stream: !1
                        }));
                        ye(c, A.responseHeader), ye(l, A.responseTrailer), yield me((yield* pe(Be(i))));
                        if (!0 !== (yield me(r.next())).done) throw new g("protocol error: received extra input message for server-streaming method", s.Unimplemented);
                    });
                };
            case f.MethodKind.ClientStreaming:
                return function(n) {
                    return Ce(this, arguments, function*() {
                        const r = Qe(async (t)=>({
                                message: Ie(e.method.O, await e.impl(t.message, Object.assign(Object.assign({}, A), {
                                    service: t.service,
                                    method: t.method,
                                    requestHeader: t.header,
                                    values: t.contextValues,
                                    signal: t.signal
                                }))),
                                stream: !1,
                                service: t.service,
                                method: t.method,
                                header: A.responseHeader,
                                trailer: A.responseTrailer
                            }), t), { message: o, header: s, trailer: a } = yield me(r({
                            init: {
                                method: A.requestMethod
                            },
                            message: n,
                            url: A.url,
                            signal: A.signal,
                            service: e.service,
                            method: e.method,
                            header: A.requestHeader,
                            contextValues: A.values,
                            stream: !0
                        }));
                        ye(s, A.responseHeader), ye(a, A.responseTrailer), yield yield me(o);
                    });
                };
            case f.MethodKind.BiDiStreaming:
                return function(n) {
                    return Ce(this, arguments, function*() {
                        const r = Qe(async (t)=>({
                                message: he(e.method.O, e.impl(t.message, Object.assign(Object.assign({}, A), {
                                    service: t.service,
                                    method: t.method,
                                    requestHeader: t.header,
                                    values: t.contextValues,
                                    signal: t.signal
                                }))),
                                stream: !0,
                                service: t.service,
                                method: t.method,
                                header: A.responseHeader,
                                trailer: A.responseTrailer
                            }), t), { message: o, header: s, trailer: a } = yield me(r({
                            init: {
                                method: A.requestMethod
                            },
                            message: n,
                            url: A.url,
                            signal: A.signal,
                            service: e.service,
                            method: e.method,
                            header: A.requestHeader,
                            contextValues: A.values,
                            stream: !0
                        }));
                        ye(s, A.responseHeader), ye(a, A.responseTrailer), yield me((yield* pe(Be(o))));
                    });
                };
        }
    }
    function ye(e, A) {
        e !== A && (A.forEach((e, t)=>{
            A.delete(t);
        }), e.forEach((e, t)=>{
            A.set(t, e);
        }));
    }
    function Te(e, A, t, n) {
        const r = ke(we(e.I, A), n), o = ke(Ne(e.I, t), n), s = ke(we(e.O, A), n), a = ke(Ne(e.O, t), n);
        return {
            getI: (e)=>e ? r : o,
            getO: (e)=>e ? s : a
        };
    }
    function ke(e, A) {
        return {
            serialize (t) {
                const n = e.serialize(t);
                return function(e, A) {
                    if (A > e) throw new g(`message size ${A} is larger than configured writeMaxBytes ${e}`, s.ResourceExhausted);
                }(A.writeMaxBytes, n.byteLength), n;
            },
            parse: (t)=>(x(A.readMaxBytes, t.byteLength, !0), e.parse(t))
        };
    }
    function we(e, A) {
        return {
            parse (t) {
                try {
                    return e.fromBinary(t, A);
                } catch (e) {
                    const A = e instanceof Error ? e.message : String(e);
                    throw new g(`parse binary: ${A}`, s.Internal);
                }
            },
            serialize (e) {
                try {
                    return e.toBinary(A);
                } catch (e) {
                    const A = e instanceof Error ? e.message : String(e);
                    throw new g(`serialize binary: ${A}`, s.Internal);
                }
            }
        };
    }
    function Ne(e, A) {
        var t, n;
        const r = null !== (t = null == A ? void 0 : A.textEncoder) && void 0 !== t ? t : new TextEncoder, o = null !== (n = null == A ? void 0 : A.textDecoder) && void 0 !== n ? n : new TextDecoder, a = function(e) {
            var A;
            const t = Object.assign({}, e);
            return null !== (A = t.ignoreUnknownFields) && void 0 !== A || (t.ignoreUnknownFields = !0), t;
        }(A);
        return {
            parse (A) {
                try {
                    const t = o.decode(A);
                    return e.fromJsonString(t, a);
                } catch (e) {
                    throw g.from(e, s.InvalidArgument);
                }
            },
            serialize (e) {
                try {
                    const A = e.toJsonString(a);
                    return r.encode(A);
                } catch (e) {
                    throw g.from(e, s.Internal);
                }
            }
        };
    }
    function De(e) {
        if ("object" != typeof e.body || null === e.body || !(Symbol.asyncIterator in e.body)) throw new Error("byte stream required, but received JSON");
    }
    const Re = {
        status: 200
    }, Se = 404, be = {
        status: 415
    }, Fe = {
        status: 405
    }, _e = {
        status: 505
    };
    function ve(e) {
        var A, t, n;
        null != e || (e = {});
        const r = e.acceptCompression ? [
            ...e.acceptCompression
        ] : [], o = null !== (A = e.requireConnectProtocolHeader) && void 0 !== A && A, a = null !== (t = e.maxTimeoutMs) && void 0 !== t ? t : Number.MAX_SAFE_INTEGER;
        return Object.assign(Object.assign({
            acceptCompression: r
        }, function(e, A, t) {
            if (null != A || (A = V), null != e || (e = G), null != t || (t = 1024), A < 1 || A > V) throw new g(`writeMaxBytes ${A} must be >= 1 and <= 4294967295`, s.Internal);
            if (e < 1 || e > G) throw new g(`readMaxBytes ${e} must be >= 1 and <= 4294967295`, s.Internal);
            return {
                readMaxBytes: e,
                writeMaxBytes: A,
                compressMinBytes: t
            };
        }(e.readMaxBytes, e.writeMaxBytes, e.compressMinBytes)), {
            jsonOptions: e.jsonOptions,
            binaryOptions: e.binaryOptions,
            maxTimeoutMs: a,
            shutdownSignal: e.shutdownSignal,
            requireConnectProtocolHeader: o,
            interceptors: null !== (n = e.interceptors) && void 0 !== n ? n : []
        });
    }
    function Le(e, A) {
        return function(e) {
            if (0 == e.length) throw new g("at least one protocol is required", s.Internal);
            const A = e[0].service, t = e[0].method, n = e[0].requestPath;
            if (e.some((e)=>e.service !== A || e.method !== t)) throw new g("cannot negotiate protocol for different RPCs", s.Internal);
            if (e.some((e)=>e.requestPath !== n)) throw new g("cannot negotiate protocol for different requestPaths", s.Internal);
            async function r(A) {
                var n;
                if (t.kind == f.MethodKind.BiDiStreaming && A.httpVersion.startsWith("1.")) return Object.assign(Object.assign({}, _e), {
                    header: new Headers({
                        Connection: "close"
                    })
                });
                const r = null !== (n = A.header.get("Content-Type")) && void 0 !== n ? n : "", o = e.filter((e)=>e.allowedMethods.includes(A.method));
                if (0 == o.length) return Fe;
                if (1 == o.length && "" === r) {
                    return (0, o[0])(A);
                }
                const s = o.filter((e)=>e.supportedContentType(r));
                if (0 == s.length) return be;
                return (0, s[0])(A);
            }
            return Object.assign(r, {
                service: A,
                method: t,
                requestPath: n,
                supportedContentType: ue(...e.map((e)=>e.supportedContentType)),
                protocolNames: e.flatMap((e)=>e.protocolNames).filter((e, A, t)=>t.indexOf(e) === A),
                allowedMethods: e.flatMap((e)=>e.allowedMethods).filter((e, A, t)=>t.indexOf(e) === A)
            });
        }(A.map((A)=>A(e)));
    }
    const Ue = "grpc-web", Me = "POST";
    function Oe(e) {
        const A = ve(e), t = {
            serialize: D,
            parse: N
        };
        function n(e) {
            const n = function(e, A, t) {
                const n = Te(t.method, e.binaryOptions, e.jsonOptions, e);
                return async function(r) {
                    De(r);
                    const o = function(e) {
                        const A = null == e ? void 0 : e.match(v);
                        if (!A) return;
                        return {
                            text: !!A[1],
                            binary: !A[2]
                        };
                    }(r.header.get(R));
                    if (null == o || o.text) return be;
                    if (r.method !== Me) return Fe;
                    const a = M(r.header.get(F), e.maxTimeoutMs), i = T(Object.assign(Object.assign({}, t), {
                        requestMethod: r.method,
                        protocolName: Ue,
                        timeoutMs: a.timeoutMs,
                        shutdownSignal: e.shutdownSignal,
                        requestSignal: r.signal,
                        requestHeader: r.header,
                        url: r.url,
                        responseHeader: {
                            [R]: o.binary ? L : U
                        },
                        responseTrailer: {
                            [_]: J
                        },
                        contextValues: r.contextValues
                    })), c = P(e.acceptCompression, r.header.get(S), r.header.get(b), b);
                    c.response && i.responseHeader.set(S, c.response.name);
                    const l = ee(r.body, te(()=>{
                        if (c.error) throw c.error;
                        if (a.error) throw a.error;
                    }), ie(e.readMaxBytes), se(c.request, e.readMaxBytes), re(n.getI(o.binary), w)), E = fe(t, i, e.interceptors)(l)[Symbol.asyncIterator](), u = ee({
                        [Symbol.asyncIterator]: ()=>({
                                next: ()=>E.next(),
                                throw: (e)=>{
                                    var A, t;
                                    return i.abort(e), null !== (t = null === (A = E.throw) || void 0 === A ? void 0 : A.call(E, e)) && void 0 !== t ? t : Promise.reject({
                                        done: !0
                                    });
                                },
                                return: (e)=>{
                                    var A, t;
                                    return i.abort(), null !== (t = null === (A = E.return) || void 0 === A ? void 0 : A.call(E, e)) && void 0 !== t ? t : Promise.resolve({
                                        done: !0,
                                        value: e
                                    });
                                }
                            })
                    }, ne(n.getO(o.binary)), Ae((e)=>(i.abort(), e instanceof g ? Y(i.responseTrailer, e) : void 0 !== e && Y(i.responseTrailer, new g("internal error", s.Internal, void 0, void 0, e)), {
                            flags: w,
                            data: A.serialize(i.responseTrailer)
                        })), oe(c.response, e.compressMinBytes), ae(), {
                        propagateDownStreamError: !0
                    });
                    return Object.assign(Object.assign({}, Re), {
                        body: await le(u),
                        header: i.responseHeader
                    });
                };
            }(A, t, e);
            return Object.assign(n, {
                protocolNames: [
                    Ue
                ],
                allowedMethods: [
                    Me
                ],
                supportedContentType: ue(v),
                requestPath: de("/", e.service, e.method),
                service: e.service,
                method: e.method
            });
        }
        return n.protocolName = Ue, n;
    }
    const Je = /^application\/grpc(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, Ye = "application/grpc+proto", Pe = "application/grpc+json";
    const Ge = "grpc", Ve = "POST";
    function xe(e) {
        const A = ve(e);
        function t(e) {
            const t = function(e, A) {
                const t = Te(A.method, e.binaryOptions, e.jsonOptions, e);
                return async function(n) {
                    De(n);
                    const r = function(e) {
                        const A = null == e ? void 0 : e.match(Je);
                        if (!A) return;
                        return {
                            binary: !A[1]
                        };
                    }(n.header.get(R));
                    if (null == r) return be;
                    if (n.method !== Ve) return Fe;
                    const o = M(n.header.get(F), e.maxTimeoutMs), a = T(Object.assign(Object.assign({}, A), {
                        requestMethod: n.method,
                        protocolName: Ge,
                        timeoutMs: o.timeoutMs,
                        shutdownSignal: e.shutdownSignal,
                        requestSignal: n.signal,
                        requestHeader: n.header,
                        url: n.url,
                        responseHeader: {
                            [R]: r.binary ? Ye : Pe
                        },
                        responseTrailer: {
                            [_]: J
                        },
                        contextValues: n.contextValues
                    })), i = P(e.acceptCompression, n.header.get(S), n.header.get(b), b);
                    i.response && a.responseHeader.set(S, i.response.name);
                    const c = ee(n.body, te(()=>{
                        if (i.error) throw i.error;
                        if (o.error) throw o.error;
                    }), ie(e.readMaxBytes), se(i.request, e.readMaxBytes), re(t.getI(r.binary))), l = fe(A, a, e.interceptors)(c)[Symbol.asyncIterator](), E = ee({
                        [Symbol.asyncIterator]: ()=>({
                                next: ()=>l.next(),
                                throw: (e)=>{
                                    var A, t;
                                    return a.abort(e), null !== (t = null === (A = l.throw) || void 0 === A ? void 0 : A.call(l, e)) && void 0 !== t ? t : Promise.reject({
                                        done: !0
                                    });
                                },
                                return: (e)=>{
                                    var A, t;
                                    return a.abort(), null !== (t = null === (A = l.return) || void 0 === A ? void 0 : A.call(l, e)) && void 0 !== t ? t : Promise.resolve({
                                        done: !0,
                                        value: e
                                    });
                                }
                            })
                    }, ne(t.getO(r.binary)), oe(i.response, e.compressMinBytes), ae(), Ae((e)=>{
                        a.abort(), e instanceof g ? Y(a.responseTrailer, e) : void 0 !== e && Y(a.responseTrailer, new g("internal error", s.Internal, void 0, void 0, e));
                    }), {
                        propagateDownStreamError: !0
                    });
                    return Object.assign(Object.assign({}, Re), {
                        body: await le(E),
                        header: a.responseHeader,
                        trailer: a.responseTrailer
                    });
                };
            }(A, e);
            return Object.assign(t, {
                protocolNames: [
                    Ge
                ],
                allowedMethods: [
                    Ve
                ],
                supportedContentType: ue(Je),
                requestPath: de("/", e.service, e.method),
                service: e.service,
                method: e.method
            });
        }
        return t.protocolName = Ge, t;
    }
    const He = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i, qe = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i, We = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$|^text\/event-stream$/i, je = "application/proto", Xe = "application/json", Ke = "application/connect+proto", Ze = "application/connect+json";
    function ze(e) {
        if ("text/event-stream" === e) return {
            stream: !0,
            binary: !0
        };
        const A = null == e ? void 0 : e.match(He);
        if (!A) return;
        return {
            stream: !!A[1],
            binary: !!A[3]
        };
    }
    var $e = function(e, A) {
        var t = {};
        for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && A.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for(n = Object.getOwnPropertySymbols(e); r < n.length; r++)A.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
        }
        return t;
    };
    function eA(e, A, t) {
        var n;
        if (A && new Headers(A).forEach((e, A)=>t.metadata.append(A, e)), "object" != typeof e || null == e || Array.isArray(e)) throw t;
        let r = t.code;
        "code" in e && "string" == typeof e.code && (r = null !== (n = function(e) {
            if (!l) {
                l = {};
                for (const e of Object.values(s))"string" != typeof e && (l[c(e)] = e);
            }
            return l[e];
        }(e.code)) && void 0 !== n ? n : r);
        const o = e.message;
        if (null != o && "string" != typeof o) throw t;
        const a = new g(null != o ? o : "", r, A);
        if ("details" in e && Array.isArray(e.details)) for (const A of e.details){
            if (null === A || "object" != typeof A || Array.isArray(A) || "string" != typeof A.type || "string" != typeof A.value) throw t;
            try {
                a.details.push({
                    type: A.type,
                    value: f.protoBase64.dec(A.value),
                    debug: A.debug
                });
            } catch (e) {
                throw t;
            }
        }
        return a;
    }
    function AA(e, A) {
        const t = {
            code: c(e.code)
        };
        return e.rawMessage.length > 0 && (t.message = e.rawMessage), e.details.length > 0 && (t.details = e.details.map((e)=>{
            if ("getType" in e) {
                const t = {
                    type: e.getType().typeName,
                    value: e.toBinary()
                };
                try {
                    t.debug = e.toJson(A);
                } catch (e) {}
                return t;
            }
            return e;
        }).map((e)=>{
            var { value: A } = e, t = $e(e, [
                "value"
            ]);
            return Object.assign(Object.assign({}, t), {
                value: f.protoBase64.enc(A).replace(/=+$/, "")
            });
        })), t;
    }
    function tA(e, A, t) {
        const n = {};
        void 0 !== A && (n.error = AA(A, t), e = function(...e) {
            const A = new Headers;
            for (const t of e)t.forEach((e, t)=>{
                A.append(t, e);
            });
            return A;
        }(e, A.metadata));
        let r = !1;
        const o = {};
        return e.forEach((e, A)=>{
            r = !0, o[A] = [
                e
            ];
        }), r && (n.metadata = o), n;
    }
    function nA(e) {
        const A = new TextEncoder;
        return {
            serialize (t) {
                try {
                    const n = tA(t.metadata, t.error, e), r = JSON.stringify(n);
                    return A.encode(r);
                } catch (e) {
                    const A = e instanceof Error ? e.message : String(e);
                    throw new g(`failed to serialize EndStreamResponse: ${A}`, s.Internal);
                }
            },
            parse (e) {
                try {
                    return function(e) {
                        const A = new g("invalid end stream", s.Unknown);
                        let t;
                        try {
                            t = JSON.parse("string" == typeof e ? e : (new TextDecoder).decode(e));
                        } catch (e) {
                            throw A;
                        }
                        if ("object" != typeof t || null == t || Array.isArray(t)) throw A;
                        const n = new Headers;
                        if ("metadata" in t) {
                            if ("object" != typeof t.metadata || null == t.metadata || Array.isArray(t.metadata)) throw A;
                            for (const [e, r] of Object.entries(t.metadata)){
                                if (!Array.isArray(r) || r.some((e)=>"string" != typeof e)) throw A;
                                for (const A of r)n.append(e, A);
                            }
                        }
                        return {
                            metadata: n,
                            error: "error" in t && null != t.error ? eA(t.error, n, A) : void 0
                        };
                    }(e);
                } catch (e) {
                    const A = e instanceof Error ? e.message : String(e);
                    throw new g(`failed to parse EndStreamResponse: ${A}`, s.InvalidArgument);
                }
            }
        };
    }
    const rA = "Content-Type", oA = "Content-Length", sA = "Content-Encoding", aA = "Connect-Content-Encoding", iA = "Accept-Encoding", cA = "Connect-Accept-Encoding", lA = "Connect-Timeout-Ms", gA = "Connect-Protocol-Version";
    function EA(e, A) {
        if (null === e) return {};
        const t = /^\d{1,10}$/.exec(e);
        if (null === t) return {
            error: new g(`protocol error: invalid connect timeout value: ${e}`, s.InvalidArgument)
        };
        const n = parseInt(t[0]);
        return n > A ? {
            timeoutMs: n,
            error: new g(`timeout ${n}ms must be <= ${A}`, s.InvalidArgument)
        } : {
            timeoutMs: parseInt(t[0])
        };
    }
    const uA = "connect", dA = "encoding", IA = "compression", hA = "base64", QA = "message";
    const mA = "1";
    function CA(e) {
        const A = e.get(gA);
        if (null === A) throw new g(`missing required header: set ${gA} to "${mA}"`, s.InvalidArgument);
        if (A !== mA) throw new g(`${gA} must be "${mA}": got "${A}"`, s.InvalidArgument);
    }
    const BA = "connect", pA = "POST", fA = "GET";
    function yA(e) {
        const A = ve(e), t = nA(A.jsonOptions);
        function n(e) {
            let n, r;
            const o = Te(e.method, A.binaryOptions, A.jsonOptions, A);
            if (e.kind === f.MethodKind.Unary) r = qe, n = function(e, A, t) {
                return async function(n) {
                    const r = n.method == fA;
                    if (r && A.method.idempotency != f.MethodIdempotency.NoSideEffects) return Fe;
                    const o = new URL(n.url).searchParams, a = r ? o.get(IA) : n.header.get(sA), i = r ? function(e) {
                        switch(e){
                            case "proto":
                                return {
                                    stream: !1,
                                    binary: !0
                                };
                            case "json":
                                return {
                                    stream: !1,
                                    binary: !1
                                };
                            default:
                                return;
                        }
                    }(o.get(dA)) : ze(n.header.get(rA));
                    if (null == i || i.stream) return be;
                    const c = EA(n.header.get(lA), e.maxTimeoutMs), l = T(Object.assign(Object.assign({}, A), {
                        requestMethod: n.method,
                        protocolName: BA,
                        timeoutMs: c.timeoutMs,
                        shutdownSignal: e.shutdownSignal,
                        requestSignal: n.signal,
                        requestHeader: n.header,
                        url: n.url,
                        responseHeader: {
                            [rA]: i.binary ? je : Xe
                        },
                        contextValues: n.contextValues
                    })), E = P(e.acceptCompression, a, n.header.get(iA), iA);
                    let u, d = Re.status;
                    try {
                        if (e.requireConnectProtocolHeader && (r ? function(e) {
                            const A = e.get(uA);
                            if (null === A) throw new g(`missing required parameter: set ${uA} to "v${mA}"`, s.InvalidArgument);
                            if (A !== `v${mA}`) throw new g(`${uA} must be "v${mA}": got "${A}"`, s.InvalidArgument);
                        }(o) : CA(n.header)), E.error) throw E.error;
                        if (c.error) throw c.error;
                        let a;
                        a = r ? await async function(e, A, t) {
                            var n;
                            const r = t.get(hA), o = null !== (n = t.get(QA)) && void 0 !== n ? n : "";
                            let s;
                            s = "1" === r ? f.protoBase64.dec(o) : (new TextEncoder).encode(o);
                            A && (s = await A.decompress(s, e));
                            return s;
                        }(e.readMaxBytes, E.request, o) : await async function(e, A, t) {
                            if ("object" == typeof t.body && null !== t.body && Symbol.asyncIterator in t.body) {
                                let n = await ce(t.body, e, t.header.get(oA));
                                return A && (n = await A.decompress(n, e)), n;
                            }
                            return t.body;
                        }(e.readMaxBytes, E.request, n);
                        const d = function(e, A, t, n) {
                            if (n instanceof Uint8Array) return t.getI(A).parse(n);
                            if (A) throw new g("received parsed JSON request body, but content-type indicates binary format", s.Internal);
                            try {
                                return e.I.fromJson(n);
                            } catch (e) {
                                throw g.from(e, s.InvalidArgument);
                            }
                        }(A.method, i.binary, t, a), I = await async function(e, A, t, n) {
                            const r = Qe(async (t)=>({
                                    message: Ie(e.method.O, await e.impl(t.message, Object.assign(Object.assign({}, A), {
                                        service: t.service,
                                        method: t.method,
                                        requestHeader: t.header,
                                        values: t.contextValues,
                                        signal: t.signal
                                    }))),
                                    stream: !1,
                                    service: t.service,
                                    method: t.method,
                                    header: A.responseHeader,
                                    trailer: A.responseTrailer
                                }), n), { message: o } = await r({
                                init: {
                                    method: A.requestMethod
                                },
                                message: t,
                                url: A.url,
                                signal: A.signal,
                                service: e.service,
                                method: e.method,
                                header: A.requestHeader,
                                contextValues: A.values,
                                stream: !1
                            });
                            return o;
                        }(A, l, d, e.interceptors);
                        u = t.getO(i.binary).serialize(I);
                    } catch (A) {
                        let t;
                        t = A instanceof g ? A : new g("internal error", s.Internal, void 0, void 0, A), d = function(e) {
                            switch(e){
                                case s.Canceled:
                                    return 499;
                                case s.Unknown:
                                    return 500;
                                case s.InvalidArgument:
                                    return 400;
                                case s.DeadlineExceeded:
                                    return 504;
                                case s.NotFound:
                                    return 404;
                                case s.AlreadyExists:
                                    return 409;
                                case s.PermissionDenied:
                                    return 403;
                                case s.ResourceExhausted:
                                    return 429;
                                case s.FailedPrecondition:
                                    return 400;
                                case s.Aborted:
                                    return 409;
                                case s.OutOfRange:
                                    return 400;
                                case s.Unimplemented:
                                    return 501;
                                case s.Internal:
                                    return 500;
                                case s.Unavailable:
                                    return 503;
                                case s.DataLoss:
                                    return 500;
                                case s.Unauthenticated:
                                    return 401;
                                default:
                                    return 500;
                            }
                        }(t.code), l.responseHeader.set(rA, Xe), t.metadata.forEach((e, A)=>{
                            l.responseHeader.set(A, e);
                        }), u = function(e, A) {
                            const t = new TextEncoder;
                            try {
                                const n = AA(e, A), r = JSON.stringify(n);
                                return t.encode(r);
                            } catch (e) {
                                const A = e instanceof Error ? e.message : String(e);
                                throw new g(`failed to serialize Connect Error: ${A}`, s.Internal);
                            }
                        }(t, e.jsonOptions);
                    } finally{
                        l.abort();
                    }
                    E.response && u.byteLength >= e.compressMinBytes && (u = await E.response.compress(u), l.responseHeader.set(sA, E.response.name));
                    const I = function(e, A) {
                        const t = new Headers(e);
                        return A.forEach((e, A)=>{
                            t.append(`trailer-${A}`, e);
                        }), t;
                    }(l.responseHeader, l.responseTrailer);
                    return I.set(oA, u.byteLength.toString(10)), {
                        status: d,
                        body: Ee([
                            u
                        ]),
                        header: I
                    };
                };
            }(A, e, o);
            else r = We, n = function(e, A, t, n) {
                return async function(r) {
                    De(r);
                    const o = ze(r.header.get(rA));
                    if (null == o || !o.stream) return be;
                    if (r.method !== pA) return Fe;
                    const a = EA(r.header.get(lA), e.maxTimeoutMs), i = T(Object.assign(Object.assign({}, A), {
                        requestMethod: r.method,
                        protocolName: BA,
                        timeoutMs: a.timeoutMs,
                        shutdownSignal: e.shutdownSignal,
                        requestSignal: r.signal,
                        requestHeader: r.header,
                        url: r.url,
                        responseHeader: {
                            [rA]: o.binary ? Ke : Ze
                        },
                        contextValues: r.contextValues
                    })), c = P(e.acceptCompression, r.header.get(aA), r.header.get(cA), cA);
                    c.response && i.responseHeader.set(aA, c.response.name);
                    const l = ee(r.body, te(()=>{
                        if (e.requireConnectProtocolHeader && CA(r.header), c.error) throw c.error;
                        if (a.error) throw a.error;
                    }), ie(e.readMaxBytes), se(c.request, e.readMaxBytes), re(t.getI(o.binary), 2)), E = fe(A, i, e.interceptors)(l)[Symbol.asyncIterator](), u = ee({
                        [Symbol.asyncIterator]: ()=>({
                                next: ()=>E.next(),
                                throw: (e)=>{
                                    var A, t;
                                    return i.abort(e), null !== (t = null === (A = E.throw) || void 0 === A ? void 0 : A.call(E, e)) && void 0 !== t ? t : Promise.reject({
                                        done: !0
                                    });
                                },
                                return: (e)=>{
                                    var A, t;
                                    return i.abort(), null !== (t = null === (A = E.return) || void 0 === A ? void 0 : A.call(E, e)) && void 0 !== t ? t : Promise.resolve({
                                        done: !0,
                                        value: e
                                    });
                                }
                            })
                    }, ne(t.getO(o.binary)), Ae((e)=>{
                        i.abort();
                        const A = {
                            metadata: i.responseTrailer
                        };
                        return e instanceof g ? A.error = e : void 0 !== e && (A.error = new g("internal error", s.Internal, void 0, void 0, e)), {
                            flags: 2,
                            data: n.serialize(A)
                        };
                    }), oe(c.response, e.compressMinBytes), ae(), {
                        propagateDownStreamError: !0
                    });
                    return Object.assign(Object.assign({}, Re), {
                        body: await le(u),
                        header: i.responseHeader
                    });
                };
            }(A, e, o, t);
            const a = [
                pA
            ];
            return e.method.idempotency === f.MethodIdempotency.NoSideEffects && a.push(fA), Object.assign(n, {
                protocolNames: [
                    BA
                ],
                supportedContentType: ue(r),
                allowedMethods: a,
                requestPath: de("/", e.service, e.method),
                service: e.service,
                method: e.method
            });
        }
        return n.protocolName = BA, n;
    }
    function TA(e) {
        const A = kA(e), t = [];
        return {
            handlers: t,
            service (e, n, r) {
                const { protocols: o } = kA(r, A);
                return t.push(...function(e, A) {
                    return Object.entries(e.methods).map(([, e])=>Le(e, A));
                }(function(e, A) {
                    const t = {
                        service: e,
                        methods: {}
                    };
                    for (const [n, r] of Object.entries(e.methods)){
                        let o = A[n];
                        if ("function" == typeof o) o = o.bind(A);
                        else {
                            const A = `${e.typeName}.${r.name} is not implemented`;
                            o = function() {
                                throw new g(A, s.Unimplemented);
                            };
                        }
                        t.methods[n] = k(e, r, o);
                    }
                    return t;
                }(e, n), o)), this;
            },
            rpc (e, n, r, o) {
                let s, a, i, c;
                "typeName" in e ? (s = e, a = n, i = r, c = o) : (s = Object.assign(Object.assign({}, e.service), {
                    methods: {}
                }), a = e, i = n, c = r);
                const { protocols: l } = kA(c, A);
                return t.push(Le(k(s, a, i), l)), this;
            }
        };
    }
    function kA(e, A) {
        if (A && !e) return A;
        const t = A ? Object.assign(Object.assign({}, ve(A.options)), e) : Object.assign(Object.assign({}, e), ve(null != e ? e : {})), n = [];
        if (!1 !== (null == e ? void 0 : e.grpc) && n.push(xe(t)), !1 !== (null == e ? void 0 : e.grpcWeb) && n.push(Oe(t)), !1 !== (null == e ? void 0 : e.connect) && n.push(yA(t)), 0 === n.length) throw new g("cannot create handler, all protocols are disabled", s.InvalidArgument);
        return {
            options: t,
            protocols: n
        };
    }
    function wA(e) {
        const A = new Headers;
        for (const [t, n] of Object.entries(e))if (!t.startsWith(":") && void 0 !== n) if ("string" == typeof n) A.append(t, n);
        else if ("number" == typeof n) A.append(t, String(n));
        else for (const e of n)A.append(t, e);
        return A;
    }
    function NA(e, A) {
        if (void 0 === e && void 0 === A) return;
        const t = Object.create(null);
        if (void 0 !== A) for (const [e, n] of Object.entries(A))Array.isArray(n) ? t[e] = n.concat() : void 0 !== n && (t[e] = n);
        if (void 0 !== e) if (Array.isArray(e)) for (const [A, n] of e)DA(t, A, n);
        else if ("forEach" in e) "function" == typeof e.forEach && e.forEach((e, A)=>{
            DA(t, A, e);
        });
        else for (const [A, n] of Object.entries(e))DA(t, A, n);
        return t;
    }
    function DA(e, A, t) {
        const n = e[A = A.toLowerCase()];
        Array.isArray(n) ? n.push(t) : e[A] = void 0 === n ? t : [
            n.toString(),
            t
        ];
    }
    var RA = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var A, t = e[Symbol.asyncIterator];
        return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), A = {}, n("next"), n("throw"), n("return"), A[Symbol.asyncIterator] = function() {
            return this;
        }, A);
        function n(t) {
            A[t] = e[t] && function(A) {
                return new Promise(function(n, r) {
                    (function(e, A, t, n) {
                        Promise.resolve(n).then(function(A) {
                            e({
                                value: A,
                                done: t
                            });
                        }, A);
                    })(n, r, (A = e[t](A)).done, A.value);
                });
            };
        }
    }, SA = function(e) {
        return this instanceof SA ? (this.v = e, this) : new SA(e);
    }, bA = function(e, A, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, r = t.apply(e, A || []), o = [];
        return n = {}, s("next"), s("throw"), s("return", function(e) {
            return function(A) {
                return Promise.resolve(A).then(e, c);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function s(e, A) {
            r[e] && (n[e] = function(A) {
                return new Promise(function(t, n) {
                    o.push([
                        e,
                        A,
                        t,
                        n
                    ]) > 1 || a(e, A);
                });
            }, A && (n[e] = A(n[e])));
        }
        function a(e, A) {
            try {
                (t = r[e](A)).value instanceof SA ? Promise.resolve(t.value.v).then(i, c) : l(o[0][2], t);
            } catch (e) {
                l(o[0][3], e);
            }
            var t;
        }
        function i(e) {
            a("next", e);
        }
        function c(e) {
            a("throw", e);
        }
        function l(e, A) {
            e(A), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
    };
    function FA(e, ...A) {
        var t, n;
        const r = 3 === A.length ? A[0] : void 0, o = 3 === A.length ? A[1] : A[0], a = 3 === A.length ? A[2] : A[1], i = "encrypted" in e.socket && e.socket.encrypted ? "https" : "http", c = "authority" in e ? e.authority : e.headers.host, l = null !== (t = e.url) && void 0 !== t ? t : "";
        if (void 0 === c) throw new g("unable to determine request authority from Node.js server request", s.Internal);
        const u = void 0 !== o ? o : function(e) {
            return bA(this, arguments, function*() {
                var A, t, n, r;
                const o = e.iterator({
                    destroyOnReturn: !1
                });
                try {
                    for(var s, a = !0, i = RA(o); !(A = (s = yield SA(i.next())).done); a = !0){
                        r = s.value, a = !1;
                        const e = r;
                        yield yield SA(e);
                    }
                } catch (e) {
                    t = {
                        error: e
                    };
                } finally{
                    try {
                        a || A || !(n = i.return) || (yield SA(n.call(i)));
                    } finally{
                        if (t) throw t.error;
                    }
                }
            });
        }(e), I = new AbortController;
        if ("stream" in e) e.once("close", ()=>{
            const A = function(e) {
                switch(e){
                    case d.PROTOCOL_ERROR:
                    case d.INTERNAL_ERROR:
                    case d.FLOW_CONTROL_ERROR:
                    case d.SETTINGS_TIMEOUT:
                    case d.FRAME_SIZE_ERROR:
                    case d.COMPRESSION_ERROR:
                    case d.CONNECT_ERROR:
                        return new g(`http/2 stream closed with error code ${d[e]} (0x${e.toString(16)})`, s.Internal);
                    case d.REFUSED_STREAM:
                        return new g(`http/2 stream closed with error code ${d[e]} (0x${e.toString(16)})`, s.Unavailable);
                    case d.CANCEL:
                        return new g(`http/2 stream closed with error code ${d[e]} (0x${e.toString(16)})`, s.Canceled);
                    case d.ENHANCE_YOUR_CALM:
                        return new g(`http/2 stream closed with error code ${d[e]} (0x${e.toString(16)})`, s.ResourceExhausted);
                    case d.INADEQUATE_SECURITY:
                    case d.HTTP_1_1_REQUIRED:
                        return new g(`http/2 stream closed with error code ${d[e]} (0x${e.toString(16)})`, s.PermissionDenied);
                    case d.STREAM_CLOSED:
                }
            }(e.stream.rstCode);
            void 0 !== A ? I.abort(A) : I.abort();
        });
        else {
            const A = null != r ? r : e, t = (r)=>{
                e.off("error", t), A.off("close", n), I.abort(E(r));
            }, n = ()=>{
                e.off("error", t), A.off("close", n), I.abort(e.errored ? E(e.errored) : void 0);
            };
            e.once("error", t), A.once("close", n);
        }
        return {
            httpVersion: e.httpVersion,
            method: null !== (n = e.method) && void 0 !== n ? n : "",
            url: new URL(l, `${i}://${c}`).toString(),
            header: wA(e.headers),
            body: u,
            signal: I.signal,
            contextValues: a
        };
    }
    function _A(e, A) {
        return new Promise((t, n)=>{
            if (e.errored) return o(e.errored);
            e.once("error", o), e.once("drain", s);
            const r = e.write(A, "binary", function(A) {
                A && !r && (o(A), e.once("error", ()=>{}));
            });
            function o(A) {
                e.off("error", o), e.off("drain", s), n(A);
            }
            function s() {
                e.off("error", o), e.off("drain", s), t();
            }
            r && s();
        });
    }
    function vA(e) {
        var A;
        void 0 === e.acceptCompression && (e.acceptCompression = [
            C,
            B
        ]);
        const t = TA(e);
        e.routes(t);
        const n = null !== (A = e.requestPathPrefix) && void 0 !== A ? A : "", r = new Map;
        for (const e of t.handlers)r.set(n + e.requestPath, e);
        return function(A, t) {
            var n, o, a, i;
            const c = r.get(null !== (o = null === (n = A.url) || void 0 === n ? void 0 : n.split("?", 2)[0]) && void 0 !== o ? o : "");
            if (!c) return void (null !== (a = e.fallback) && void 0 !== a ? a : LA)(A, t);
            const l = FA(A, t, void 0, null === (i = e.contextValues) || void 0 === i ? void 0 : i.call(e, A));
            c(l).then((e)=>(async function(e, A) {
                    var t, n, r;
                    const o = null === (t = e.body) || void 0 === t ? void 0 : t[Symbol.asyncIterator]();
                    let s = !1;
                    try {
                        if (void 0 !== o) {
                            let t = await o.next();
                            for(s = !0, A.writeHead(e.status, NA(e.header)), s = !1; !0 !== t.done; t = await o.next())s = !0, await _A(A, t.value), "flush" in A && "function" == typeof A.flush && A.flush(), s = !1;
                        }
                        A.headersSent || A.writeHead(e.status, NA(e.header)), e.trailer && A.addTrailers(NA(e.trailer)), await new Promise((e)=>{
                            A.once("end", e), A.end();
                        });
                    } catch (e) {
                        throw s && (null === (n = null == o ? void 0 : o.throw) || void 0 === n || n.call(o, e).catch(()=>{})), E(e);
                    } finally{
                        null === (r = null == o ? void 0 : o.return) || void 0 === r || r.call(o).catch(()=>{});
                    }
                })(e, t)).catch((e)=>{
                g.from(e).code != s.Aborted && console.error(`handler for rpc ${c.method.name} of ${c.service.typeName} failed`, e);
            });
        };
    }
    const LA = (e, A)=>{
        A.writeHead(Se), A.end();
    }, UA = require("node:http");
    function MA(e, A) {
        if (!e) throw new Error(A);
    }
    function OA(e) {
        if ("number" != typeof e) throw new Error("invalid int 32: " + typeof e);
        if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648) throw new Error("invalid int 32: " + e);
    }
    function JA(e) {
        if ("number" != typeof e) throw new Error("invalid uint 32: " + typeof e);
        if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw new Error("invalid uint 32: " + e);
    }
    function YA(e) {
        if ("number" != typeof e) throw new Error("invalid float 32: " + typeof e);
        if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22)) throw new Error("invalid float 32: " + e);
    }
    const PA = Symbol("@bufbuild/protobuf/enum-type");
    function GA(e) {
        const A = e[PA];
        return MA(A, "missing enum type on enum object"), A;
    }
    function VA(e, A, t, n) {
        e[PA] = xA(A, t.map((A)=>({
                no: A.no,
                name: A.name,
                localName: e[A.no]
            })), n);
    }
    function xA(e, A, t) {
        const n = Object.create(null), r = Object.create(null), o = [];
        for (const e of A){
            const A = qA(e);
            o.push(A), n[e.name] = A, r[e.no] = A;
        }
        return {
            typeName: e,
            values: o,
            findName: (e)=>n[e],
            findNumber: (e)=>r[e]
        };
    }
    function HA(e, A, t) {
        const n = {};
        for (const e of A){
            const A = qA(e);
            n[A.localName] = A.no, n[A.no] = A.localName;
        }
        return VA(n, e, A, t), n;
    }
    function qA(e) {
        return "localName" in e ? e : {
            ...e,
            localName: e.name
        };
    }
    class WA {
        equals(e) {
            return this.getType().runtime.util.equals(this.getType(), this, e);
        }
        clone() {
            return this.getType().runtime.util.clone(this);
        }
        fromBinary(e, A) {
            const t = this.getType().runtime.bin, n = t.makeReadOptions(A);
            return t.readMessage(this, n.readerFactory(e), e.byteLength, n), this;
        }
        fromJson(e, A) {
            const t = this.getType(), n = t.runtime.json, r = n.makeReadOptions(A);
            return n.readMessage(t, e, r, this), this;
        }
        fromJsonString(e, A) {
            let t;
            try {
                t = JSON.parse(e);
            } catch (e) {
                throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
            }
            return this.fromJson(t, A);
        }
        toBinary(e) {
            const A = this.getType().runtime.bin, t = A.makeWriteOptions(e), n = t.writerFactory();
            return A.writeMessage(this, n, t), n.finish();
        }
        toJson(e) {
            const A = this.getType().runtime.json, t = A.makeWriteOptions(e);
            return A.writeMessage(this, t);
        }
        toJsonString(e) {
            const A = this.toJson(e);
            return JSON.stringify(A, null, e?.prettySpaces ?? 0);
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
    function jA() {
        let e = 0, A = 0;
        for(let t = 0; t < 28; t += 7){
            let n = this.buf[this.pos++];
            if (e |= (127 & n) << t, !(128 & n)) return this.assertBounds(), [
                e,
                A
            ];
        }
        let t = this.buf[this.pos++];
        if (e |= (15 & t) << 28, A = (112 & t) >> 4, !(128 & t)) return this.assertBounds(), [
            e,
            A
        ];
        for(let t = 3; t <= 31; t += 7){
            let n = this.buf[this.pos++];
            if (A |= (127 & n) << t, !(128 & n)) return this.assertBounds(), [
                e,
                A
            ];
        }
        throw new Error("invalid varint");
    }
    function XA(e, A, t) {
        for(let n = 0; n < 28; n += 7){
            const r = e >>> n, o = !(r >>> 7 == 0 && 0 == A), s = 255 & (o ? 128 | r : r);
            if (t.push(s), !o) return;
        }
        const n = e >>> 28 & 15 | (7 & A) << 4, r = !!(A >> 3);
        if (t.push(255 & (r ? 128 | n : n)), r) {
            for(let e = 3; e < 31; e += 7){
                const n = A >>> e, r = !(n >>> 7 == 0), o = 255 & (r ? 128 | n : n);
                if (t.push(o), !r) return;
            }
            t.push(A >>> 31 & 1);
        }
    }
    const KA = 4294967296;
    function ZA(e) {
        const A = "-" === e[0];
        A && (e = e.slice(1));
        const t = 1e6;
        let n = 0, r = 0;
        function o(A, o) {
            const s = Number(e.slice(A, o));
            r *= t, n = n * t + s, n >= KA && (r += n / KA | 0, n %= KA);
        }
        return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), A ? et(n, r) : $A(n, r);
    }
    function zA(e, A) {
        if ({ lo: e, hi: A } = function(e, A) {
            return {
                lo: e >>> 0,
                hi: A >>> 0
            };
        }(e, A), A <= 2097151) return String(KA * A + e);
        const t = 16777215 & (e >>> 24 | A << 8), n = A >> 16 & 65535;
        let r = (16777215 & e) + 6777216 * t + 6710656 * n, o = t + 8147497 * n, s = 2 * n;
        const a = 1e7;
        return r >= a && (o += Math.floor(r / a), r %= a), o >= a && (s += Math.floor(o / a), o %= a), s.toString() + At(o) + At(r);
    }
    function $A(e, A) {
        return {
            lo: 0 | e,
            hi: 0 | A
        };
    }
    function et(e, A) {
        return A = ~A, e ? e = 1 + ~e : A += 1, $A(e, A);
    }
    const At = (e)=>{
        const A = String(e);
        return "0000000".slice(A.length) + A;
    };
    function tt(e, A) {
        if (e >= 0) {
            for(; e > 127;)A.push(127 & e | 128), e >>>= 7;
            A.push(e);
        } else {
            for(let t = 0; t < 9; t++)A.push(127 & e | 128), e >>= 7;
            A.push(1);
        }
    }
    function nt() {
        let e = this.buf[this.pos++], A = 127 & e;
        if (!(128 & e)) return this.assertBounds(), A;
        if (e = this.buf[this.pos++], A |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), A;
        if (e = this.buf[this.pos++], A |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), A;
        if (e = this.buf[this.pos++], A |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), A;
        e = this.buf[this.pos++], A |= (15 & e) << 28;
        for(let A = 5; 128 & e && A < 10; A++)e = this.buf[this.pos++];
        if (128 & e) throw new Error("invalid varint");
        return this.assertBounds(), A >>> 0;
    }
    const rt = function() {
        const e = new DataView(new ArrayBuffer(8));
        if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
            const A = BigInt("-9223372036854775808"), t = BigInt("9223372036854775807"), n = BigInt("0"), r = BigInt("18446744073709551615");
            return {
                zero: BigInt(0),
                supported: !0,
                parse (e) {
                    const n = "bigint" == typeof e ? e : BigInt(e);
                    if (n > t || n < A) throw new Error(`int64 invalid: ${e}`);
                    return n;
                },
                uParse (e) {
                    const A = "bigint" == typeof e ? e : BigInt(e);
                    if (A > r || A < n) throw new Error(`uint64 invalid: ${e}`);
                    return A;
                },
                enc (A) {
                    return e.setBigInt64(0, this.parse(A), !0), {
                        lo: e.getInt32(0, !0),
                        hi: e.getInt32(4, !0)
                    };
                },
                uEnc (A) {
                    return e.setBigInt64(0, this.uParse(A), !0), {
                        lo: e.getInt32(0, !0),
                        hi: e.getInt32(4, !0)
                    };
                },
                dec: (A, t)=>(e.setInt32(0, A, !0), e.setInt32(4, t, !0), e.getBigInt64(0, !0)),
                uDec: (A, t)=>(e.setInt32(0, A, !0), e.setInt32(4, t, !0), e.getBigUint64(0, !0))
            };
        }
        const A = (e)=>MA(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`), t = (e)=>MA(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
        return {
            zero: "0",
            supported: !1,
            parse: (e)=>("string" != typeof e && (e = e.toString()), A(e), e),
            uParse: (e)=>("string" != typeof e && (e = e.toString()), t(e), e),
            enc: (e)=>("string" != typeof e && (e = e.toString()), A(e), ZA(e)),
            uEnc: (e)=>("string" != typeof e && (e = e.toString()), t(e), ZA(e)),
            dec: (e, A)=>(function(e, A) {
                    let t = $A(e, A);
                    const n = 2147483648 & t.hi;
                    n && (t = et(t.lo, t.hi));
                    const r = zA(t.lo, t.hi);
                    return n ? "-" + r : r;
                })(e, A),
            uDec: (e, A)=>zA(e, A)
        };
    }();
    var ot = ((e)=>(e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(ot || {}), st = ((e)=>(e[e.BIGINT = 0] = "BIGINT", e[e.STRING = 1] = "STRING", e))(st || {});
    function at(e, A, t) {
        if (A === t) return !0;
        if (e == ot.BYTES) {
            if (!(A instanceof Uint8Array && t instanceof Uint8Array)) return !1;
            if (A.length !== t.length) return !1;
            for(let e = 0; e < A.length; e++)if (A[e] !== t[e]) return !1;
            return !0;
        }
        switch(e){
            case ot.UINT64:
            case ot.FIXED64:
            case ot.INT64:
            case ot.SFIXED64:
            case ot.SINT64:
                return A == t;
        }
        return !1;
    }
    function it(e, A) {
        switch(e){
            case ot.BOOL:
                return !1;
            case ot.UINT64:
            case ot.FIXED64:
            case ot.INT64:
            case ot.SFIXED64:
            case ot.SINT64:
                return 0 == A ? rt.zero : "0";
            case ot.DOUBLE:
            case ot.FLOAT:
                return 0;
            case ot.BYTES:
                return new Uint8Array(0);
            case ot.STRING:
                return "";
            default:
                return 0;
        }
    }
    function ct(e, A) {
        switch(e){
            case ot.BOOL:
                return !1 === A;
            case ot.STRING:
                return "" === A;
            case ot.BYTES:
                return A instanceof Uint8Array && !A.byteLength;
            default:
                return 0 == A;
        }
    }
    function lt(e) {
        const A = e.field.localName, t = Object.create(null);
        return t[A] = function(e) {
            const A = e.field;
            if (A.repeated) return [];
            if (void 0 !== A.default) return A.default;
            switch(A.kind){
                case "enum":
                    return A.T.values[0].no;
                case "scalar":
                    return it(A.T, A.L);
                case "message":
                    const e = A.T, t = new e;
                    return e.fieldWrapper ? e.fieldWrapper.unwrapField(t) : t;
                case "map":
                    throw "map fields are not allowed to be extensions";
            }
        }(e), [
            t,
            ()=>t[A]
        ];
    }
    let gt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Et = [];
    for(let e = 0; e < gt.length; e++)Et[gt[e].charCodeAt(0)] = e;
    Et["-".charCodeAt(0)] = gt.indexOf("+"), Et["_".charCodeAt(0)] = gt.indexOf("/");
    const ut = {
        dec (e) {
            let A = 3 * e.length / 4;
            "=" == e[e.length - 2] ? A -= 2 : "=" == e[e.length - 1] && (A -= 1);
            let t, n = new Uint8Array(A), r = 0, o = 0, s = 0;
            for(let A = 0; A < e.length; A++){
                if (t = Et[e.charCodeAt(A)], void 0 === t) switch(e[A]){
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
                        s = t, o = 1;
                        break;
                    case 1:
                        n[r++] = s << 2 | (48 & t) >> 4, s = t, o = 2;
                        break;
                    case 2:
                        n[r++] = (15 & s) << 4 | (60 & t) >> 2, s = t, o = 3;
                        break;
                    case 3:
                        n[r++] = (3 & s) << 6 | t, o = 0;
                }
            }
            if (1 == o) throw Error("invalid base64 string.");
            return n.subarray(0, r);
        },
        enc (e) {
            let A, t = "", n = 0, r = 0;
            for(let o = 0; o < e.length; o++)switch(A = e[o], n){
                case 0:
                    t += gt[A >> 2], r = (3 & A) << 4, n = 1;
                    break;
                case 1:
                    t += gt[r | A >> 4], r = (15 & A) << 2, n = 2;
                    break;
                case 2:
                    t += gt[r | A >> 6], t += gt[63 & A], n = 0;
            }
            return n && (t += gt[r], t += "=", 1 == n && (t += "=")), t;
        }
    };
    function dt(e, A, t) {
        Qt(A, e);
        const n = A.runtime.bin.makeReadOptions(t), r = function(e, A) {
            if (!A.repeated && ("enum" == A.kind || "scalar" == A.kind)) {
                for(let t = e.length - 1; t >= 0; --t)if (e[t].no == A.no) return [
                    e[t]
                ];
                return [];
            }
            return e.filter((e)=>e.no === A.no);
        }(e.getType().runtime.bin.listUnknownFields(e), A.field), [o, s] = lt(A);
        for (const e of r)A.runtime.bin.readField(o, n.readerFactory(e.data), A.field, e.wireType, n);
        return s();
    }
    function It(e, A, t, n) {
        Qt(A, e);
        const r = A.runtime.bin.makeReadOptions(n), o = A.runtime.bin.makeWriteOptions(n);
        if (ht(e, A)) {
            const t = e.getType().runtime.bin.listUnknownFields(e).filter((e)=>e.no != A.field.no);
            e.getType().runtime.bin.discardUnknownFields(e);
            for (const A of t)e.getType().runtime.bin.onUnknownField(e, A.no, A.wireType, A.data);
        }
        const s = o.writerFactory();
        let a = A.field;
        a.opt || a.repeated || "enum" != a.kind && "scalar" != a.kind || (a = {
            ...A.field,
            opt: !0
        }), A.runtime.bin.writeField(a, t, s, o);
        const i = r.readerFactory(s.finish());
        for(; i.pos < i.len;){
            const [A, t] = i.tag(), n = i.skip(t, A);
            e.getType().runtime.bin.onUnknownField(e, A, t, n);
        }
    }
    function ht(e, A) {
        const t = e.getType();
        return A.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(e).find((e)=>e.no == A.field.no);
    }
    function Qt(e, A) {
        MA(e.extendee.typeName == A.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
    }
    function mt(e, A) {
        const t = e.localName;
        if (e.repeated) return A[t].length > 0;
        if (e.oneof) return A[e.oneof.localName].case === t;
        switch(e.kind){
            case "enum":
            case "scalar":
                return e.opt || e.req ? void 0 !== A[t] : "enum" == e.kind ? A[t] !== e.T.values[0].no : !ct(e.T, A[t]);
            case "message":
                return void 0 !== A[t];
            case "map":
                return Object.keys(A[t]).length > 0;
        }
    }
    function Ct(e, A) {
        const t = e.localName, n = !e.opt && !e.req;
        if (e.repeated) A[t] = [];
        else if (e.oneof) A[e.oneof.localName] = {
            case: void 0
        };
        else switch(e.kind){
            case "map":
                A[t] = {};
                break;
            case "enum":
                A[t] = n ? e.T.values[0].no : void 0;
                break;
            case "scalar":
                A[t] = n ? it(e.T, e.L) : void 0;
                break;
            case "message":
                A[t] = void 0;
        }
    }
    function Bt(e, A) {
        if (null === e || "object" != typeof e) return !1;
        if (!Object.getOwnPropertyNames(WA.prototype).every((A)=>A in e && "function" == typeof e[A])) return !1;
        const t = e.getType();
        return null !== t && "function" == typeof t && "typeName" in t && "string" == typeof t.typeName && (void 0 === A || t.typeName == A.typeName);
    }
    function pt(e, A) {
        const t = Bt(A);
        return t || e.fieldWrapper ? t || !e.fieldWrapper ? A : e.fieldWrapper.wrapField(A) : new e(A);
    }
    ot.DOUBLE, ot.FLOAT, ot.INT64, ot.UINT64, ot.INT32, ot.UINT32, ot.BOOL, ot.STRING, ot.BYTES;
    const ft = {
        ignoreUnknownFields: !1
    }, yt = {
        emitDefaultValues: !1,
        enumAsInteger: !1,
        useProtoFieldName: !1,
        prettySpaces: 0
    };
    function Tt(e) {
        return e ? {
            ...ft,
            ...e
        } : ft;
    }
    function kt(e) {
        return e ? {
            ...yt,
            ...e
        } : yt;
    }
    const wt = Symbol(), Nt = Symbol();
    function Dt(e) {
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
    function Rt(e, A, t, n, r) {
        let o = t.localName;
        if (t.repeated) {
            if (MA("map" != t.kind), null === A) return;
            if (!Array.isArray(A)) throw new Error(`cannot decode field ${r.typeName}.${t.name} from JSON: ${Dt(A)}`);
            const s = e[o];
            for (const e of A){
                if (null === e) throw new Error(`cannot decode field ${r.typeName}.${t.name} from JSON: ${Dt(e)}`);
                switch(t.kind){
                    case "message":
                        s.push(t.T.fromJson(e, n));
                        break;
                    case "enum":
                        const A = Ft(t.T, e, n.ignoreUnknownFields, !0);
                        A !== Nt && s.push(A);
                        break;
                    case "scalar":
                        try {
                            s.push(bt(t.T, e, t.L, !0));
                        } catch (A) {
                            let n = `cannot decode field ${r.typeName}.${t.name} from JSON: ${Dt(e)}`;
                            throw A instanceof Error && A.message.length > 0 && (n += `: ${A.message}`), new Error(n);
                        }
                }
            }
        } else if ("map" == t.kind) {
            if (null === A) return;
            if ("object" != typeof A || Array.isArray(A)) throw new Error(`cannot decode field ${r.typeName}.${t.name} from JSON: ${Dt(A)}`);
            const s = e[o];
            for (const [e, o] of Object.entries(A)){
                if (null === o) throw new Error(`cannot decode field ${r.typeName}.${t.name} from JSON: map value null`);
                let a;
                try {
                    a = St(t.K, e);
                } catch (e) {
                    let n = `cannot decode map key for field ${r.typeName}.${t.name} from JSON: ${Dt(A)}`;
                    throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                }
                switch(t.V.kind){
                    case "message":
                        s[a] = t.V.T.fromJson(o, n);
                        break;
                    case "enum":
                        const e = Ft(t.V.T, o, n.ignoreUnknownFields, !0);
                        e !== Nt && (s[a] = e);
                        break;
                    case "scalar":
                        try {
                            s[a] = bt(t.V.T, o, st.BIGINT, !0);
                        } catch (e) {
                            let n = `cannot decode map value for field ${r.typeName}.${t.name} from JSON: ${Dt(A)}`;
                            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                        }
                }
            }
        } else switch(t.oneof && (e = e[t.oneof.localName] = {
            case: o
        }, o = "value"), t.kind){
            case "message":
                const s = t.T;
                if (null === A && "google.protobuf.Value" != s.typeName) return;
                let a = e[o];
                Bt(a) ? a.fromJson(A, n) : (e[o] = a = s.fromJson(A, n), s.fieldWrapper && !t.oneof && (e[o] = s.fieldWrapper.unwrapField(a)));
                break;
            case "enum":
                const i = Ft(t.T, A, n.ignoreUnknownFields, !1);
                switch(i){
                    case wt:
                        Ct(t, e);
                        break;
                    case Nt:
                        break;
                    default:
                        e[o] = i;
                }
                break;
            case "scalar":
                try {
                    const n = bt(t.T, A, t.L, !1);
                    if (n === wt) Ct(t, e);
                    else e[o] = n;
                } catch (e) {
                    let n = `cannot decode field ${r.typeName}.${t.name} from JSON: ${Dt(A)}`;
                    throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                }
        }
    }
    function St(e, A) {
        if (e === ot.BOOL) switch(A){
            case "true":
                A = !0;
                break;
            case "false":
                A = !1;
        }
        return bt(e, A, st.BIGINT, !0).toString();
    }
    function bt(e, A, t, n) {
        if (null === A) return n ? it(e, t) : wt;
        switch(e){
            case ot.DOUBLE:
            case ot.FLOAT:
                if ("NaN" === A) return Number.NaN;
                if ("Infinity" === A) return Number.POSITIVE_INFINITY;
                if ("-Infinity" === A) return Number.NEGATIVE_INFINITY;
                if ("" === A) break;
                if ("string" == typeof A && A.trim().length !== A.length) break;
                if ("string" != typeof A && "number" != typeof A) break;
                const n = Number(A);
                if (Number.isNaN(n)) break;
                if (!Number.isFinite(n)) break;
                return e == ot.FLOAT && YA(n), n;
            case ot.INT32:
            case ot.FIXED32:
            case ot.SFIXED32:
            case ot.SINT32:
            case ot.UINT32:
                let r;
                if ("number" == typeof A ? r = A : "string" == typeof A && A.length > 0 && A.trim().length === A.length && (r = Number(A)), void 0 === r) break;
                return e == ot.UINT32 || e == ot.FIXED32 ? JA(r) : OA(r), r;
            case ot.INT64:
            case ot.SFIXED64:
            case ot.SINT64:
                if ("number" != typeof A && "string" != typeof A) break;
                const o = rt.parse(A);
                return t ? o.toString() : o;
            case ot.FIXED64:
            case ot.UINT64:
                if ("number" != typeof A && "string" != typeof A) break;
                const s = rt.uParse(A);
                return t ? s.toString() : s;
            case ot.BOOL:
                if ("boolean" != typeof A) break;
                return A;
            case ot.STRING:
                if ("string" != typeof A) break;
                try {
                    encodeURIComponent(A);
                } catch (e) {
                    throw new Error("invalid UTF8");
                }
                return A;
            case ot.BYTES:
                if ("" === A) return new Uint8Array(0);
                if ("string" != typeof A) break;
                return ut.dec(A);
        }
        throw new Error;
    }
    function Ft(e, A, t, n) {
        if (null === A) return "google.protobuf.NullValue" == e.typeName ? 0 : n ? e.values[0].no : wt;
        switch(typeof A){
            case "number":
                if (Number.isInteger(A)) return A;
                break;
            case "string":
                const n = e.findName(A);
                if (void 0 !== n) return n.no;
                if (t) return Nt;
        }
        throw new Error(`cannot decode enum ${e.typeName} from JSON: ${Dt(A)}`);
    }
    function _t(e) {
        return !(!e.repeated && "map" != e.kind) || !e.oneof && "message" != e.kind && !e.opt && !e.req;
    }
    function vt(e, A, t) {
        if ("map" == e.kind) {
            MA("object" == typeof A && null != A);
            const n = {}, r = Object.entries(A);
            switch(e.V.kind){
                case "scalar":
                    for (const [A, t] of r)n[A.toString()] = Ut(e.V.T, t);
                    break;
                case "message":
                    for (const [e, A] of r)n[e.toString()] = A.toJson(t);
                    break;
                case "enum":
                    const A = e.V.T;
                    for (const [e, o] of r)n[e.toString()] = Lt(A, o, t.enumAsInteger);
            }
            return t.emitDefaultValues || r.length > 0 ? n : void 0;
        }
        if (e.repeated) {
            MA(Array.isArray(A));
            const n = [];
            switch(e.kind){
                case "scalar":
                    for(let t = 0; t < A.length; t++)n.push(Ut(e.T, A[t]));
                    break;
                case "enum":
                    for(let r = 0; r < A.length; r++)n.push(Lt(e.T, A[r], t.enumAsInteger));
                    break;
                case "message":
                    for(let e = 0; e < A.length; e++)n.push(A[e].toJson(t));
            }
            return t.emitDefaultValues || n.length > 0 ? n : void 0;
        }
        switch(e.kind){
            case "scalar":
                return Ut(e.T, A);
            case "enum":
                return Lt(e.T, A, t.enumAsInteger);
            case "message":
                return pt(e.T, A).toJson(t);
        }
    }
    function Lt(e, A, t) {
        if (MA("number" == typeof A), "google.protobuf.NullValue" == e.typeName) return null;
        if (t) return A;
        const n = e.findNumber(A);
        return n?.name ?? A;
    }
    function Ut(e, A) {
        switch(e){
            case ot.INT32:
            case ot.SFIXED32:
            case ot.SINT32:
            case ot.FIXED32:
            case ot.UINT32:
                return MA("number" == typeof A), A;
            case ot.FLOAT:
            case ot.DOUBLE:
                return MA("number" == typeof A), Number.isNaN(A) ? "NaN" : A === Number.POSITIVE_INFINITY ? "Infinity" : A === Number.NEGATIVE_INFINITY ? "-Infinity" : A;
            case ot.STRING:
                return MA("string" == typeof A), A;
            case ot.BOOL:
                return MA("boolean" == typeof A), A;
            case ot.UINT64:
            case ot.FIXED64:
            case ot.INT64:
            case ot.SFIXED64:
            case ot.SINT64:
                return MA("bigint" == typeof A || "string" == typeof A || "number" == typeof A), A.toString();
            case ot.BYTES:
                return MA(A instanceof Uint8Array), ut.enc(A);
        }
    }
    var Mt = ((e)=>(e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32", e))(Mt || {});
    class Ot {
        constructor(e){
            this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = [];
        }
        finish() {
            this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
            let e = 0;
            for(let A = 0; A < this.chunks.length; A++)e += this.chunks[A].length;
            let A = new Uint8Array(e), t = 0;
            for(let e = 0; e < this.chunks.length; e++)A.set(this.chunks[e], t), t += this.chunks[e].length;
            return this.chunks = [], A;
        }
        fork() {
            return this.stack.push({
                chunks: this.chunks,
                buf: this.buf
            }), this.chunks = [], this.buf = [], this;
        }
        join() {
            let e = this.finish(), A = this.stack.pop();
            if (!A) throw new Error("invalid state, fork stack empty");
            return this.chunks = A.chunks, this.buf = A.buf, this.uint32(e.byteLength), this.raw(e);
        }
        tag(e, A) {
            return this.uint32((e << 3 | A) >>> 0);
        }
        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
        }
        uint32(e) {
            for(JA(e); e > 127;)this.buf.push(127 & e | 128), e >>>= 7;
            return this.buf.push(e), this;
        }
        int32(e) {
            return OA(e), tt(e, this.buf), this;
        }
        bool(e) {
            return this.buf.push(e ? 1 : 0), this;
        }
        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e);
        }
        string(e) {
            let A = this.textEncoder.encode(e);
            return this.uint32(A.byteLength), this.raw(A);
        }
        float(e) {
            YA(e);
            let A = new Uint8Array(4);
            return new DataView(A.buffer).setFloat32(0, e, !0), this.raw(A);
        }
        double(e) {
            let A = new Uint8Array(8);
            return new DataView(A.buffer).setFloat64(0, e, !0), this.raw(A);
        }
        fixed32(e) {
            JA(e);
            let A = new Uint8Array(4);
            return new DataView(A.buffer).setUint32(0, e, !0), this.raw(A);
        }
        sfixed32(e) {
            OA(e);
            let A = new Uint8Array(4);
            return new DataView(A.buffer).setInt32(0, e, !0), this.raw(A);
        }
        sint32(e) {
            return OA(e), tt(e = (e << 1 ^ e >> 31) >>> 0, this.buf), this;
        }
        sfixed64(e) {
            let A = new Uint8Array(8), t = new DataView(A.buffer), n = rt.enc(e);
            return t.setInt32(0, n.lo, !0), t.setInt32(4, n.hi, !0), this.raw(A);
        }
        fixed64(e) {
            let A = new Uint8Array(8), t = new DataView(A.buffer), n = rt.uEnc(e);
            return t.setInt32(0, n.lo, !0), t.setInt32(4, n.hi, !0), this.raw(A);
        }
        int64(e) {
            let A = rt.enc(e);
            return XA(A.lo, A.hi, this.buf), this;
        }
        sint64(e) {
            let A = rt.enc(e), t = A.hi >> 31;
            return XA(A.lo << 1 ^ t, (A.hi << 1 | A.lo >>> 31) ^ t, this.buf), this;
        }
        uint64(e) {
            let A = rt.uEnc(e);
            return XA(A.lo, A.hi, this.buf), this;
        }
    }
    class Jt {
        constructor(e, A){
            this.varint64 = jA, this.uint32 = nt, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = A ?? new TextDecoder;
        }
        tag() {
            let e = this.uint32(), A = e >>> 3, t = 7 & e;
            if (A <= 0 || t < 0 || t > 5) throw new Error("illegal tag: field no " + A + " wire type " + t);
            return [
                A,
                t
            ];
        }
        skip(e, A) {
            let t = this.pos;
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
                    let t = this.uint32();
                    this.pos += t;
                    break;
                case 3:
                    for(;;){
                        const [e, t] = this.tag();
                        if (4 === t) {
                            if (void 0 !== A && e !== A) throw new Error("invalid end group tag");
                            break;
                        }
                        this.skip(t, e);
                    }
                    break;
                default:
                    throw new Error("cant skip wire type " + e);
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos);
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
            return rt.dec(...this.varint64());
        }
        uint64() {
            return rt.uDec(...this.varint64());
        }
        sint64() {
            let [e, A] = this.varint64(), t = -(1 & e);
            return e = (e >>> 1 | (1 & A) << 31) ^ t, A = A >>> 1 ^ t, rt.dec(e, A);
        }
        bool() {
            let [e, A] = this.varint64();
            return 0 !== e || 0 !== A;
        }
        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0);
        }
        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0);
        }
        fixed64() {
            return rt.uDec(this.sfixed32(), this.sfixed32());
        }
        sfixed64() {
            return rt.dec(this.sfixed32(), this.sfixed32());
        }
        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0);
        }
        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0);
        }
        bytes() {
            let e = this.uint32(), A = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(A, A + e);
        }
        string() {
            return this.textDecoder.decode(this.bytes());
        }
    }
    const Yt = Symbol("@bufbuild/protobuf/unknown-fields"), Pt = {
        readUnknownFields: !0,
        readerFactory: (e)=>new Jt(e)
    }, Gt = {
        writeUnknownFields: !0,
        writerFactory: ()=>new Ot
    };
    function Vt(e) {
        return e ? {
            ...Pt,
            ...e
        } : Pt;
    }
    function xt(e) {
        return e ? {
            ...Gt,
            ...e
        } : Gt;
    }
    function Ht(e, A, t, n, r) {
        let { repeated: o, localName: s } = t;
        switch(t.oneof && ((e = e[t.oneof.localName]).case != s && delete e.value, e.case = s, s = "value"), t.kind){
            case "scalar":
            case "enum":
                const a = "enum" == t.kind ? ot.INT32 : t.T;
                let i = jt;
                if ("scalar" == t.kind && t.L > 0 && (i = Wt), o) {
                    let t = e[s];
                    if (n == Mt.LengthDelimited && a != ot.STRING && a != ot.BYTES) {
                        let e = A.uint32() + A.pos;
                        for(; A.pos < e;)t.push(i(A, a));
                    } else t.push(i(A, a));
                } else e[s] = i(A, a);
                break;
            case "message":
                const c = t.T;
                o ? e[s].push(qt(A, new c, r, t)) : Bt(e[s]) ? qt(A, e[s], r, t) : (e[s] = qt(A, new c, r, t), !c.fieldWrapper || t.oneof || t.repeated || (e[s] = c.fieldWrapper.unwrapField(e[s])));
                break;
            case "map":
                let [l, g] = function(e, A, t) {
                    const n = A.uint32(), r = A.pos + n;
                    let o, s;
                    for(; A.pos < r;){
                        const [n] = A.tag();
                        switch(n){
                            case 1:
                                o = jt(A, e.K);
                                break;
                            case 2:
                                switch(e.V.kind){
                                    case "scalar":
                                        s = jt(A, e.V.T);
                                        break;
                                    case "enum":
                                        s = A.int32();
                                        break;
                                    case "message":
                                        s = qt(A, new e.V.T, t, void 0);
                                }
                        }
                    }
                    void 0 === o && (o = it(e.K, st.BIGINT));
                    "string" != typeof o && "number" != typeof o && (o = o.toString());
                    if (void 0 === s) switch(e.V.kind){
                        case "scalar":
                            s = it(e.V.T, st.BIGINT);
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
                }(t, A, r);
                e[s][l] = g;
        }
    }
    function qt(e, A, t, n) {
        const r = A.getType().runtime.bin, o = n?.delimited;
        return r.readMessage(A, e, o ? n.no : e.uint32(), t, o), A;
    }
    function Wt(e, A) {
        const t = jt(e, A);
        return "bigint" == typeof t ? t.toString() : t;
    }
    function jt(e, A) {
        switch(A){
            case ot.STRING:
                return e.string();
            case ot.BOOL:
                return e.bool();
            case ot.DOUBLE:
                return e.double();
            case ot.FLOAT:
                return e.float();
            case ot.INT32:
                return e.int32();
            case ot.INT64:
                return e.int64();
            case ot.UINT64:
                return e.uint64();
            case ot.FIXED64:
                return e.fixed64();
            case ot.BYTES:
                return e.bytes();
            case ot.FIXED32:
                return e.fixed32();
            case ot.SFIXED32:
                return e.sfixed32();
            case ot.SFIXED64:
                return e.sfixed64();
            case ot.SINT64:
                return e.sint64();
            case ot.UINT32:
                return e.uint32();
            case ot.SINT32:
                return e.sint32();
        }
    }
    function Xt(e, A, t, n) {
        MA(void 0 !== A);
        const r = e.repeated;
        switch(e.kind){
            case "scalar":
            case "enum":
                let o = "enum" == e.kind ? ot.INT32 : e.T;
                if (r) if (MA(Array.isArray(A)), e.packed) !function(e, A, t, n) {
                    if (!n.length) return;
                    e.tag(t, Mt.LengthDelimited).fork();
                    let [, r] = $t(A);
                    for(let A = 0; A < n.length; A++)e[r](n[A]);
                    e.join();
                }(t, o, e.no, A);
                else for (const n of A)zt(t, o, e.no, n);
                else zt(t, o, e.no, A);
                break;
            case "message":
                if (r) {
                    MA(Array.isArray(A));
                    for (const r of A)Zt(t, n, e, r);
                } else Zt(t, n, e, A);
                break;
            case "map":
                MA("object" == typeof A && null != A);
                for (const [r, o] of Object.entries(A))Kt(t, n, e, r, o);
        }
    }
    function Kt(e, A, t, n, r) {
        e.tag(t.no, Mt.LengthDelimited), e.fork();
        let o = n;
        switch(t.K){
            case ot.INT32:
            case ot.FIXED32:
            case ot.UINT32:
            case ot.SFIXED32:
            case ot.SINT32:
                o = Number.parseInt(n);
                break;
            case ot.BOOL:
                MA("true" == n || "false" == n), o = "true" == n;
        }
        switch(zt(e, t.K, 1, o), t.V.kind){
            case "scalar":
                zt(e, t.V.T, 2, r);
                break;
            case "enum":
                zt(e, ot.INT32, 2, r);
                break;
            case "message":
                MA(void 0 !== r), e.tag(2, Mt.LengthDelimited).bytes(r.toBinary(A));
        }
        e.join();
    }
    function Zt(e, A, t, n) {
        const r = pt(t.T, n);
        t.delimited ? e.tag(t.no, Mt.StartGroup).raw(r.toBinary(A)).tag(t.no, Mt.EndGroup) : e.tag(t.no, Mt.LengthDelimited).bytes(r.toBinary(A));
    }
    function zt(e, A, t, n) {
        MA(void 0 !== n);
        let [r, o] = $t(A);
        e.tag(t, r)[o](n);
    }
    function $t(e) {
        let A = Mt.Varint;
        switch(e){
            case ot.BYTES:
            case ot.STRING:
                A = Mt.LengthDelimited;
                break;
            case ot.DOUBLE:
            case ot.FIXED64:
            case ot.SFIXED64:
                A = Mt.Bit64;
                break;
            case ot.FIXED32:
            case ot.SFIXED32:
            case ot.FLOAT:
                A = Mt.Bit32;
        }
        return [
            A,
            ot[e].toLowerCase()
        ];
    }
    function en(e) {
        if (void 0 === e) return e;
        if (Bt(e)) return e.clone();
        if (e instanceof Uint8Array) {
            const A = new Uint8Array(e.byteLength);
            return A.set(e), A;
        }
        return e;
    }
    function An(e) {
        return e instanceof Uint8Array ? e : new Uint8Array(e);
    }
    function tn(e, A, t) {
        return {
            syntax: e,
            json: {
                makeReadOptions: Tt,
                makeWriteOptions: kt,
                readMessage (e, A, t, n) {
                    if (null == A || Array.isArray(A) || "object" != typeof A) throw new Error(`cannot decode message ${e.typeName} from JSON: ${Dt(A)}`);
                    n = n ?? new e;
                    const r = new Map, o = t.typeRegistry;
                    for (const [s, a] of Object.entries(A)){
                        const A = e.fields.findJsonName(s);
                        if (A) {
                            if (A.oneof) {
                                if (null === a && "scalar" == A.kind) continue;
                                const t = r.get(A.oneof);
                                if (void 0 !== t) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${A.oneof.name}" present: "${t}", "${s}"`);
                                r.set(A.oneof, s);
                            }
                            Rt(n, a, A, t, e);
                        } else {
                            let A = !1;
                            if (o?.findExtension && s.startsWith("[") && s.endsWith("]")) {
                                const r = o.findExtension(s.substring(1, s.length - 1));
                                if (r && r.extendee.typeName == e.typeName) {
                                    A = !0;
                                    const [e, o] = lt(r);
                                    Rt(e, a, r.field, t, r), It(n, r, o(), t);
                                }
                            }
                            if (!A && !t.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${s}" is unknown`);
                        }
                    }
                    return n;
                },
                writeMessage (e, A) {
                    const t = e.getType(), n = {};
                    let r;
                    try {
                        for (r of t.fields.byNumber()){
                            if (!mt(r, e)) {
                                if (r.req) throw "required field not set";
                                if (!A.emitDefaultValues) continue;
                                if (!_t(r)) continue;
                            }
                            const t = vt(r, r.oneof ? e[r.oneof.localName].value : e[r.localName], A);
                            void 0 !== t && (n[A.useProtoFieldName ? r.name : r.jsonName] = t);
                        }
                        const o = A.typeRegistry;
                        if (o?.findExtensionFor) for (const r of t.runtime.bin.listUnknownFields(e)){
                            const s = o.findExtensionFor(t.typeName, r.no);
                            if (s && ht(e, s)) {
                                const t = dt(e, s, A), r = vt(s.field, t, A);
                                void 0 !== r && (n[s.field.jsonName] = r);
                            }
                        }
                    } catch (e) {
                        const A = r ? `cannot encode field ${t.typeName}.${r.name} to JSON` : `cannot encode message ${t.typeName} to JSON`, n = e instanceof Error ? e.message : String(e);
                        throw new Error(A + (n.length > 0 ? `: ${n}` : ""));
                    }
                    return n;
                },
                readScalar: (e, A, t)=>bt(e, A, t ?? st.BIGINT, !0),
                writeScalar (e, A, t) {
                    if (void 0 !== A) return t || ct(e, A) ? Ut(e, A) : void 0;
                },
                debug: Dt
            },
            bin: {
                makeReadOptions: Vt,
                makeWriteOptions: xt,
                listUnknownFields: (e)=>e[Yt] ?? [],
                discardUnknownFields (e) {
                    delete e[Yt];
                },
                writeUnknownFields (e, A) {
                    const t = e[Yt];
                    if (t) for (const e of t)A.tag(e.no, e.wireType).raw(e.data);
                },
                onUnknownField (e, A, t, n) {
                    const r = e;
                    Array.isArray(r[Yt]) || (r[Yt] = []), r[Yt].push({
                        no: A,
                        wireType: t,
                        data: new Uint8Array(n)
                    });
                },
                readMessage (e, A, t, n, r) {
                    const o = e.getType(), s = r ? A.len : A.pos + t;
                    let a, i;
                    for(; A.pos < s && ([a, i] = A.tag(), !0 !== r || i != Mt.EndGroup);){
                        const t = o.fields.find(a);
                        if (!t) {
                            const t = A.skip(i, a);
                            n.readUnknownFields && this.onUnknownField(e, a, i, t);
                            continue;
                        }
                        Ht(e, A, t, i, n);
                    }
                    if (r && (i != Mt.EndGroup || a !== t)) throw new Error("invalid end group tag");
                },
                readField: Ht,
                writeMessage (e, A, t) {
                    const n = e.getType();
                    for (const r of n.fields.byNumber())if (mt(r, e)) Xt(r, r.oneof ? e[r.oneof.localName].value : e[r.localName], A, t);
                    else if (r.req) throw new Error(`cannot encode field ${n.typeName}.${r.name} to binary: required field not set`);
                    return t.writeUnknownFields && this.writeUnknownFields(e, A), A;
                },
                writeField (e, A, t, n) {
                    void 0 !== A && Xt(e, A, t, n);
                }
            },
            util: {
                ...{
                    setEnumType: VA,
                    initPartial (e, A) {
                        if (void 0 === e) return;
                        const t = A.getType();
                        for (const n of t.fields.byMember()){
                            const t = n.localName, r = A, o = e;
                            if (null != o[t]) switch(n.kind){
                                case "oneof":
                                    const e = o[t].case;
                                    if (void 0 === e) continue;
                                    const A = n.findField(e);
                                    let s = o[t].value;
                                    A && "message" == A.kind && !Bt(s, A.T) ? s = new A.T(s) : A && "scalar" === A.kind && A.T === ot.BYTES && (s = An(s)), r[t] = {
                                        case: e,
                                        value: s
                                    };
                                    break;
                                case "scalar":
                                case "enum":
                                    let a = o[t];
                                    n.T === ot.BYTES && (a = n.repeated ? a.map(An) : An(a)), r[t] = a;
                                    break;
                                case "map":
                                    switch(n.V.kind){
                                        case "scalar":
                                        case "enum":
                                            if (n.V.T === ot.BYTES) for (const [e, A] of Object.entries(o[t]))r[t][e] = An(A);
                                            else Object.assign(r[t], o[t]);
                                            break;
                                        case "message":
                                            const e = n.V.T;
                                            for (const A of Object.keys(o[t])){
                                                let n = o[t][A];
                                                e.fieldWrapper || (n = new e(n)), r[t][A] = n;
                                            }
                                    }
                                    break;
                                case "message":
                                    const i = n.T;
                                    if (n.repeated) r[t] = o[t].map((e)=>Bt(e, i) ? e : new i(e));
                                    else {
                                        const e = o[t];
                                        i.fieldWrapper ? "google.protobuf.BytesValue" === i.typeName ? r[t] = An(e) : r[t] = e : r[t] = Bt(e, i) ? e : new i(e);
                                    }
                            }
                        }
                    },
                    equals: (e, A, t)=>A === t || !(!A || !t) && e.fields.byMember().every((e)=>{
                            const n = A[e.localName], r = t[e.localName];
                            if (e.repeated) {
                                if (n.length !== r.length) return !1;
                                switch(e.kind){
                                    case "message":
                                        return n.every((A, t)=>e.T.equals(A, r[t]));
                                    case "scalar":
                                        return n.every((A, t)=>at(e.T, A, r[t]));
                                    case "enum":
                                        return n.every((e, A)=>at(ot.INT32, e, r[A]));
                                }
                                throw new Error(`repeated cannot contain ${e.kind}`);
                            }
                            switch(e.kind){
                                case "message":
                                    return e.T.equals(n, r);
                                case "enum":
                                    return at(ot.INT32, n, r);
                                case "scalar":
                                    return at(e.T, n, r);
                                case "oneof":
                                    if (n.case !== r.case) return !1;
                                    const A = e.findField(n.case);
                                    if (void 0 === A) return !0;
                                    switch(A.kind){
                                        case "message":
                                            return A.T.equals(n.value, r.value);
                                        case "enum":
                                            return at(ot.INT32, n.value, r.value);
                                        case "scalar":
                                            return at(A.T, n.value, r.value);
                                    }
                                    throw new Error(`oneof cannot contain ${A.kind}`);
                                case "map":
                                    const t = Object.keys(n).concat(Object.keys(r));
                                    switch(e.V.kind){
                                        case "message":
                                            const A = e.V.T;
                                            return t.every((e)=>A.equals(n[e], r[e]));
                                        case "enum":
                                            return t.every((e)=>at(ot.INT32, n[e], r[e]));
                                        case "scalar":
                                            const o = e.V.T;
                                            return t.every((e)=>at(o, n[e], r[e]));
                                    }
                            }
                        }),
                    clone (e) {
                        const A = e.getType(), t = new A, n = t;
                        for (const t of A.fields.byMember()){
                            const A = e[t.localName];
                            let r;
                            if (t.repeated) r = A.map(en);
                            else if ("map" == t.kind) {
                                r = n[t.localName];
                                for (const [e, t] of Object.entries(A))r[e] = en(t);
                            } else r = "oneof" == t.kind ? t.findField(A.case) ? {
                                case: A.case,
                                value: en(A.value)
                            } : {
                                case: void 0
                            } : en(A);
                            n[t.localName] = r;
                        }
                        for (const t of A.runtime.bin.listUnknownFields(e))A.runtime.bin.onUnknownField(n, t.no, t.wireType, t.data);
                        return t;
                    }
                },
                newFieldList: A,
                initFields: t
            },
            makeMessageType (e, A, t) {
                return function(e, A, t, n) {
                    const r = n?.localName ?? A.substring(A.lastIndexOf(".") + 1), o = {
                        [r]: function(A) {
                            e.util.initFields(this), e.util.initPartial(A, this);
                        }
                    }[r];
                    return Object.setPrototypeOf(o.prototype, new WA), Object.assign(o, {
                        runtime: e,
                        typeName: A,
                        fields: e.util.newFieldList(t),
                        fromBinary: (e, A)=>(new o).fromBinary(e, A),
                        fromJson: (e, A)=>(new o).fromJson(e, A),
                        fromJsonString: (e, A)=>(new o).fromJsonString(e, A),
                        equals: (A, t)=>e.util.equals(o, A, t)
                    }), o;
                }(this, e, A, t);
            },
            makeEnum: HA,
            makeEnumType: xA,
            getEnumType: GA,
            makeExtension (e, A, t) {
                return function(e, A, t, n) {
                    let r;
                    return {
                        typeName: A,
                        extendee: t,
                        get field () {
                            if (!r) {
                                const t = "function" == typeof n ? n() : n;
                                t.name = A.split(".").pop(), t.jsonName = `[${A}]`, r = e.util.newFieldList([
                                    t
                                ]).list()[0];
                            }
                            return r;
                        },
                        runtime: e
                    };
                }(this, e, A, t);
            }
        };
    }
    class nn {
        constructor(e, A){
            this._fields = e, this._normalizer = A;
        }
        findJsonName(e) {
            if (!this.jsonNames) {
                const e = {};
                for (const A of this.list())e[A.jsonName] = e[A.name] = A;
                this.jsonNames = e;
            }
            return this.jsonNames[e];
        }
        find(e) {
            if (!this.numbers) {
                const e = {};
                for (const A of this.list())e[A.no] = A;
                this.numbers = e;
            }
            return this.numbers[e];
        }
        list() {
            return this.all || (this.all = this._normalizer(this._fields)), this.all;
        }
        byNumber() {
            return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, A)=>e.no - A.no)), this.numbersAsc;
        }
        byMember() {
            if (!this.members) {
                this.members = [];
                const e = this.members;
                let A;
                for (const t of this.list())t.oneof ? t.oneof !== A && (A = t.oneof, e.push(A)) : e.push(t);
            }
            return this.members;
        }
    }
    function rn(e, A) {
        const t = an(e);
        return A ? t : un(En(t));
    }
    function on(e) {
        return rn(e, !1);
    }
    const sn = an;
    function an(e) {
        let A = !1;
        const t = [];
        for(let n = 0; n < e.length; n++){
            let r = e.charAt(n);
            switch(r){
                case "_":
                    A = !0;
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
                    t.push(r), A = !1;
                    break;
                default:
                    A && (A = !1, r = r.toUpperCase()), t.push(r);
            }
        }
        return t.join("");
    }
    const cn = new Set([
        "constructor",
        "toString",
        "toJSON",
        "valueOf"
    ]), ln = new Set([
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
    ]), gn = (e)=>`${e}$`, En = (e)=>ln.has(e) ? gn(e) : e, un = (e)=>cn.has(e) ? gn(e) : e;
    class dn {
        constructor(e){
            this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = on(e);
        }
        addField(e) {
            MA(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
        }
        findField(e) {
            if (!this._lookup) {
                this._lookup = Object.create(null);
                for(let e = 0; e < this.fields.length; e++)this._lookup[this.fields[e].localName] = this.fields[e];
            }
            return this._lookup[e];
        }
    }
    function In(e, A) {
        const t = [];
        let n;
        for (const r of "function" == typeof e ? e() : e){
            const e = r;
            if (e.localName = rn(r.name, void 0 !== r.oneof), e.jsonName = r.jsonName ?? sn(r.name), e.repeated = r.repeated ?? !1, "scalar" == r.kind && (e.L = r.L ?? st.BIGINT), e.delimited = r.delimited ?? !1, e.req = r.req ?? !1, e.opt = r.opt ?? !1, void 0 === r.packed && (e.packed = !!A && ("enum" == r.kind || "scalar" == r.kind && r.T != ot.BYTES && r.T != ot.STRING)), void 0 !== r.oneof) {
                const A = "string" == typeof r.oneof ? r.oneof : r.oneof.name;
                n && n.name == A || (n = new dn(A)), e.oneof = n, n.addField(e);
            }
            t.push(e);
        }
        return t;
    }
    const hn = tn("proto3", (e)=>new nn(e, (e)=>In(e, !0)), (e)=>{
        for (const A of e.getType().fields.byMember()){
            if (A.opt) continue;
            const t = A.localName, n = e;
            if (A.repeated) n[t] = [];
            else switch(A.kind){
                case "oneof":
                    n[t] = {
                        case: void 0
                    };
                    break;
                case "enum":
                    n[t] = 0;
                    break;
                case "map":
                    n[t] = {};
                    break;
                case "scalar":
                    n[t] = it(A.T, A.L);
            }
        }
    }), Qn = tn("proto2", (e)=>new nn(e, (e)=>In(e, !1)), (e)=>{
        for (const A of e.getType().fields.byMember()){
            const t = A.localName, n = e;
            if (A.repeated) n[t] = [];
            else switch(A.kind){
                case "oneof":
                    n[t] = {
                        case: void 0
                    };
                    break;
                case "map":
                    n[t] = {};
            }
        }
    });
    Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
    var mn = ((e)=>(e[e.Unary = 0] = "Unary", e[e.ServerStreaming = 1] = "ServerStreaming", e[e.ClientStreaming = 2] = "ClientStreaming", e[e.BiDiStreaming = 3] = "BiDiStreaming", e))(mn || {}), Cn = ((e)=>(e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX", e))(Cn || {});
    Qn.util.setEnumType(Cn, "google.protobuf.Edition", [
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
    const Bn = class e extends WA {
        constructor(e){
            super(), this.file = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Bn.runtime = Qn, Bn.typeName = "google.protobuf.FileDescriptorSet", Bn.fields = Qn.util.newFieldList(()=>[
            {
                no: 1,
                name: "file",
                kind: "message",
                T: fn,
                repeated: !0
            }
        ]);
    const pn = class e extends WA {
        constructor(e){
            super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    pn.runtime = Qn, pn.typeName = "google.protobuf.FileDescriptorProto", pn.fields = Qn.util.newFieldList(()=>[
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
                T: Tn,
                repeated: !0
            },
            {
                no: 5,
                name: "enum_type",
                kind: "message",
                T: Pn,
                repeated: !0
            },
            {
                no: 6,
                name: "service",
                kind: "message",
                T: Wn,
                repeated: !0
            },
            {
                no: 7,
                name: "extension",
                kind: "message",
                T: Ln,
                repeated: !0
            },
            {
                no: 8,
                name: "options",
                kind: "message",
                T: Zn,
                opt: !0
            },
            {
                no: 9,
                name: "source_code_info",
                kind: "message",
                T: Or,
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
                T: Qn.getEnumType(Cn),
                opt: !0
            }
        ]);
    let fn = pn;
    const yn = class e extends WA {
        constructor(e){
            super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    yn.runtime = Qn, yn.typeName = "google.protobuf.DescriptorProto", yn.fields = Qn.util.newFieldList(()=>[
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
                T: Ln,
                repeated: !0
            },
            {
                no: 6,
                name: "extension",
                kind: "message",
                T: Ln,
                repeated: !0
            },
            {
                no: 3,
                name: "nested_type",
                kind: "message",
                T: yn,
                repeated: !0
            },
            {
                no: 4,
                name: "enum_type",
                kind: "message",
                T: Pn,
                repeated: !0
            },
            {
                no: 5,
                name: "extension_range",
                kind: "message",
                T: wn,
                repeated: !0
            },
            {
                no: 8,
                name: "oneof_decl",
                kind: "message",
                T: Jn,
                repeated: !0
            },
            {
                no: 7,
                name: "options",
                kind: "message",
                T: er,
                opt: !0
            },
            {
                no: 9,
                name: "reserved_range",
                kind: "message",
                T: Dn,
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
    let Tn = yn;
    const kn = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    kn.runtime = Qn, kn.typeName = "google.protobuf.DescriptorProto.ExtensionRange", kn.fields = Qn.util.newFieldList(()=>[
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
                T: Sn,
                opt: !0
            }
        ]);
    let wn = kn;
    const Nn = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Nn.runtime = Qn, Nn.typeName = "google.protobuf.DescriptorProto.ReservedRange", Nn.fields = Qn.util.newFieldList(()=>[
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
    let Dn = Nn;
    const Rn = class e extends WA {
        constructor(e){
            super(), this.uninterpretedOption = [], this.declaration = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Rn.runtime = Qn, Rn.typeName = "google.protobuf.ExtensionRangeOptions", Rn.fields = Qn.util.newFieldList(()=>[
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: yr,
                repeated: !0
            },
            {
                no: 2,
                name: "declaration",
                kind: "message",
                T: _n,
                repeated: !0
            },
            {
                no: 50,
                name: "features",
                kind: "message",
                T: Nr,
                opt: !0
            },
            {
                no: 3,
                name: "verification",
                kind: "enum",
                T: Qn.getEnumType(bn),
                opt: !0,
                default: 1
            }
        ]);
    let Sn = Rn;
    var bn = ((e)=>(e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED", e))(bn || {});
    Qn.util.setEnumType(bn, "google.protobuf.ExtensionRangeOptions.VerificationState", [
        {
            no: 0,
            name: "DECLARATION"
        },
        {
            no: 1,
            name: "UNVERIFIED"
        }
    ]);
    const Fn = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Fn.runtime = Qn, Fn.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", Fn.fields = Qn.util.newFieldList(()=>[
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
    let _n = Fn;
    const vn = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    vn.runtime = Qn, vn.typeName = "google.protobuf.FieldDescriptorProto", vn.fields = Qn.util.newFieldList(()=>[
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
                T: Qn.getEnumType(Mn),
                opt: !0
            },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: Qn.getEnumType(Un),
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
                T: tr,
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
    let Ln = vn;
    var Un = ((e)=>(e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(Un || {});
    Qn.util.setEnumType(Un, "google.protobuf.FieldDescriptorProto.Type", [
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
    var Mn = ((e)=>(e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED", e))(Mn || {});
    Qn.util.setEnumType(Mn, "google.protobuf.FieldDescriptorProto.Label", [
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
    const On = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    On.runtime = Qn, On.typeName = "google.protobuf.OneofDescriptorProto", On.fields = Qn.util.newFieldList(()=>[
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
                T: Er,
                opt: !0
            }
        ]);
    let Jn = On;
    const Yn = class e extends WA {
        constructor(e){
            super(), this.value = [], this.reservedRange = [], this.reservedName = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Yn.runtime = Qn, Yn.typeName = "google.protobuf.EnumDescriptorProto", Yn.fields = Qn.util.newFieldList(()=>[
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
                T: Hn,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: dr,
                opt: !0
            },
            {
                no: 4,
                name: "reserved_range",
                kind: "message",
                T: Vn,
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
    let Pn = Yn;
    const Gn = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Gn.runtime = Qn, Gn.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", Gn.fields = Qn.util.newFieldList(()=>[
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
    let Vn = Gn;
    const xn = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    xn.runtime = Qn, xn.typeName = "google.protobuf.EnumValueDescriptorProto", xn.fields = Qn.util.newFieldList(()=>[
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
                T: hr,
                opt: !0
            }
        ]);
    let Hn = xn;
    const qn = class e extends WA {
        constructor(e){
            super(), this.method = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    qn.runtime = Qn, qn.typeName = "google.protobuf.ServiceDescriptorProto", qn.fields = Qn.util.newFieldList(()=>[
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
                T: Xn,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: mr,
                opt: !0
            }
        ]);
    let Wn = qn;
    const jn = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    jn.runtime = Qn, jn.typeName = "google.protobuf.MethodDescriptorProto", jn.fields = Qn.util.newFieldList(()=>[
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
                T: Br,
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
    let Xn = jn;
    const Kn = class e extends WA {
        constructor(e){
            super(), this.uninterpretedOption = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Kn.runtime = Qn, Kn.typeName = "google.protobuf.FileOptions", Kn.fields = Qn.util.newFieldList(()=>[
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
                T: Qn.getEnumType(zn),
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
                T: Nr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: yr,
                repeated: !0
            }
        ]);
    let Zn = Kn;
    var zn = ((e)=>(e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME", e))(zn || {});
    Qn.util.setEnumType(zn, "google.protobuf.FileOptions.OptimizeMode", [
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
    const $n = class e extends WA {
        constructor(e){
            super(), this.uninterpretedOption = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    $n.runtime = Qn, $n.typeName = "google.protobuf.MessageOptions", $n.fields = Qn.util.newFieldList(()=>[
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
                T: Nr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: yr,
                repeated: !0
            }
        ]);
    let er = $n;
    const Ar = class e extends WA {
        constructor(e){
            super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Ar.runtime = Qn, Ar.typeName = "google.protobuf.FieldOptions", Ar.fields = Qn.util.newFieldList(()=>[
            {
                no: 1,
                name: "ctype",
                kind: "enum",
                T: Qn.getEnumType(nr),
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
                T: Qn.getEnumType(rr),
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
                T: Qn.getEnumType(or),
                opt: !0
            },
            {
                no: 19,
                name: "targets",
                kind: "enum",
                T: Qn.getEnumType(sr),
                repeated: !0
            },
            {
                no: 20,
                name: "edition_defaults",
                kind: "message",
                T: ir,
                repeated: !0
            },
            {
                no: 21,
                name: "features",
                kind: "message",
                T: Nr,
                opt: !0
            },
            {
                no: 22,
                name: "feature_support",
                kind: "message",
                T: lr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: yr,
                repeated: !0
            }
        ]);
    let tr = Ar;
    var nr = ((e)=>(e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE", e))(nr || {});
    Qn.util.setEnumType(nr, "google.protobuf.FieldOptions.CType", [
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
    var rr = ((e)=>(e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER", e))(rr || {});
    Qn.util.setEnumType(rr, "google.protobuf.FieldOptions.JSType", [
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
    var or = ((e)=>(e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e))(or || {});
    Qn.util.setEnumType(or, "google.protobuf.FieldOptions.OptionRetention", [
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
    var sr = ((e)=>(e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e))(sr || {});
    Qn.util.setEnumType(sr, "google.protobuf.FieldOptions.OptionTargetType", [
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
    const ar = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    ar.runtime = Qn, ar.typeName = "google.protobuf.FieldOptions.EditionDefault", ar.fields = Qn.util.newFieldList(()=>[
            {
                no: 3,
                name: "edition",
                kind: "enum",
                T: Qn.getEnumType(Cn),
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
    let ir = ar;
    const cr = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    cr.runtime = Qn, cr.typeName = "google.protobuf.FieldOptions.FeatureSupport", cr.fields = Qn.util.newFieldList(()=>[
            {
                no: 1,
                name: "edition_introduced",
                kind: "enum",
                T: Qn.getEnumType(Cn),
                opt: !0
            },
            {
                no: 2,
                name: "edition_deprecated",
                kind: "enum",
                T: Qn.getEnumType(Cn),
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
                T: Qn.getEnumType(Cn),
                opt: !0
            }
        ]);
    let lr = cr;
    const gr = class e extends WA {
        constructor(e){
            super(), this.uninterpretedOption = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    gr.runtime = Qn, gr.typeName = "google.protobuf.OneofOptions", gr.fields = Qn.util.newFieldList(()=>[
            {
                no: 1,
                name: "features",
                kind: "message",
                T: Nr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: yr,
                repeated: !0
            }
        ]);
    let Er = gr;
    const ur = class e extends WA {
        constructor(e){
            super(), this.uninterpretedOption = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    ur.runtime = Qn, ur.typeName = "google.protobuf.EnumOptions", ur.fields = Qn.util.newFieldList(()=>[
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
                T: Nr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: yr,
                repeated: !0
            }
        ]);
    let dr = ur;
    const Ir = class e extends WA {
        constructor(e){
            super(), this.uninterpretedOption = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Ir.runtime = Qn, Ir.typeName = "google.protobuf.EnumValueOptions", Ir.fields = Qn.util.newFieldList(()=>[
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
                T: Nr,
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
                T: lr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: yr,
                repeated: !0
            }
        ]);
    let hr = Ir;
    const Qr = class e extends WA {
        constructor(e){
            super(), this.uninterpretedOption = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Qr.runtime = Qn, Qr.typeName = "google.protobuf.ServiceOptions", Qr.fields = Qn.util.newFieldList(()=>[
            {
                no: 34,
                name: "features",
                kind: "message",
                T: Nr,
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
                T: yr,
                repeated: !0
            }
        ]);
    let mr = Qr;
    const Cr = class e extends WA {
        constructor(e){
            super(), this.uninterpretedOption = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Cr.runtime = Qn, Cr.typeName = "google.protobuf.MethodOptions", Cr.fields = Qn.util.newFieldList(()=>[
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
                T: Qn.getEnumType(pr),
                opt: !0,
                default: 0
            },
            {
                no: 35,
                name: "features",
                kind: "message",
                T: Nr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: yr,
                repeated: !0
            }
        ]);
    let Br = Cr;
    var pr = ((e)=>(e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT", e))(pr || {});
    Qn.util.setEnumType(pr, "google.protobuf.MethodOptions.IdempotencyLevel", [
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
    const fr = class e extends WA {
        constructor(e){
            super(), this.name = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    fr.runtime = Qn, fr.typeName = "google.protobuf.UninterpretedOption", fr.fields = Qn.util.newFieldList(()=>[
            {
                no: 2,
                name: "name",
                kind: "message",
                T: kr,
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
    let yr = fr;
    const Tr = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Tr.runtime = Qn, Tr.typeName = "google.protobuf.UninterpretedOption.NamePart", Tr.fields = Qn.util.newFieldList(()=>[
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
    let kr = Tr;
    const wr = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    wr.runtime = Qn, wr.typeName = "google.protobuf.FeatureSet", wr.fields = Qn.util.newFieldList(()=>[
            {
                no: 1,
                name: "field_presence",
                kind: "enum",
                T: Qn.getEnumType(Dr),
                opt: !0
            },
            {
                no: 2,
                name: "enum_type",
                kind: "enum",
                T: Qn.getEnumType(Rr),
                opt: !0
            },
            {
                no: 3,
                name: "repeated_field_encoding",
                kind: "enum",
                T: Qn.getEnumType(Sr),
                opt: !0
            },
            {
                no: 4,
                name: "utf8_validation",
                kind: "enum",
                T: Qn.getEnumType(br),
                opt: !0
            },
            {
                no: 5,
                name: "message_encoding",
                kind: "enum",
                T: Qn.getEnumType(Fr),
                opt: !0
            },
            {
                no: 6,
                name: "json_format",
                kind: "enum",
                T: Qn.getEnumType(_r),
                opt: !0
            }
        ]);
    let Nr = wr;
    var Dr = ((e)=>(e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e))(Dr || {});
    Qn.util.setEnumType(Dr, "google.protobuf.FeatureSet.FieldPresence", [
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
    var Rr = ((e)=>(e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED", e))(Rr || {});
    Qn.util.setEnumType(Rr, "google.protobuf.FeatureSet.EnumType", [
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
    var Sr = ((e)=>(e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED", e))(Sr || {});
    Qn.util.setEnumType(Sr, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
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
    var br = ((e)=>(e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE", e))(br || {});
    Qn.util.setEnumType(br, "google.protobuf.FeatureSet.Utf8Validation", [
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
    var Fr = ((e)=>(e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED", e))(Fr || {});
    Qn.util.setEnumType(Fr, "google.protobuf.FeatureSet.MessageEncoding", [
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
    var _r = ((e)=>(e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e))(_r || {});
    Qn.util.setEnumType(_r, "google.protobuf.FeatureSet.JsonFormat", [
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
    const vr = class e extends WA {
        constructor(e){
            super(), this.defaults = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    vr.runtime = Qn, vr.typeName = "google.protobuf.FeatureSetDefaults", vr.fields = Qn.util.newFieldList(()=>[
            {
                no: 1,
                name: "defaults",
                kind: "message",
                T: Ur,
                repeated: !0
            },
            {
                no: 4,
                name: "minimum_edition",
                kind: "enum",
                T: Qn.getEnumType(Cn),
                opt: !0
            },
            {
                no: 5,
                name: "maximum_edition",
                kind: "enum",
                T: Qn.getEnumType(Cn),
                opt: !0
            }
        ]);
    const Lr = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Lr.runtime = Qn, Lr.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", Lr.fields = Qn.util.newFieldList(()=>[
            {
                no: 3,
                name: "edition",
                kind: "enum",
                T: Qn.getEnumType(Cn),
                opt: !0
            },
            {
                no: 4,
                name: "overridable_features",
                kind: "message",
                T: Nr,
                opt: !0
            },
            {
                no: 5,
                name: "fixed_features",
                kind: "message",
                T: Nr,
                opt: !0
            }
        ]);
    let Ur = Lr;
    const Mr = class e extends WA {
        constructor(e){
            super(), this.location = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Mr.runtime = Qn, Mr.typeName = "google.protobuf.SourceCodeInfo", Mr.fields = Qn.util.newFieldList(()=>[
            {
                no: 1,
                name: "location",
                kind: "message",
                T: Yr,
                repeated: !0
            }
        ]);
    let Or = Mr;
    const Jr = class e extends WA {
        constructor(e){
            super(), this.path = [], this.span = [], this.leadingDetachedComments = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Jr.runtime = Qn, Jr.typeName = "google.protobuf.SourceCodeInfo.Location", Jr.fields = Qn.util.newFieldList(()=>[
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
    let Yr = Jr;
    const Pr = class e extends WA {
        constructor(e){
            super(), this.annotation = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Pr.runtime = Qn, Pr.typeName = "google.protobuf.GeneratedCodeInfo", Pr.fields = Qn.util.newFieldList(()=>[
            {
                no: 1,
                name: "annotation",
                kind: "message",
                T: xr,
                repeated: !0
            }
        ]);
    let Gr = Pr;
    const Vr = class e extends WA {
        constructor(e){
            super(), this.path = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Vr.runtime = Qn, Vr.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", Vr.fields = Qn.util.newFieldList(()=>[
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
                T: Qn.getEnumType(Hr),
                opt: !0
            }
        ]);
    let xr = Vr;
    var Hr = ((e)=>(e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS", e))(Hr || {});
    Qn.util.setEnumType(Hr, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
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
    Un.DOUBLE, ot.DOUBLE, Un.FLOAT, ot.FLOAT, Un.INT64, ot.INT64, Un.UINT64, ot.UINT64, Un.INT32, ot.INT32, Un.FIXED64, ot.FIXED64, Un.FIXED32, ot.FIXED32, Un.BOOL, ot.BOOL, Un.STRING, ot.STRING, Un.GROUP, Un.MESSAGE, Un.BYTES, ot.BYTES, Un.UINT32, ot.UINT32, Un.ENUM, Un.SFIXED32, ot.SFIXED32, Un.SFIXED64, ot.SFIXED64, Un.SINT32, ot.SINT32, Un.SINT64, ot.SINT64;
    const qr = class e extends WA {
        constructor(e){
            super(), this.seconds = rt.zero, this.nanos = 0, hn.util.initPartial(e, this);
        }
        fromJson(e, A) {
            if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${hn.json.debug(e)}`);
            const t = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
            if (!t) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            const n = Date.parse(t[1] + "-" + t[2] + "-" + t[3] + "T" + t[4] + ":" + t[5] + ":" + t[6] + (t[8] ? t[8] : "Z"));
            if (Number.isNaN(n)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            return this.seconds = rt.parse(n / 1e3), this.nanos = 0, t[7] && (this.nanos = parseInt("1" + t[7] + "0".repeat(9 - t[7].length)) - 1e9), this;
        }
        toJson(e) {
            const A = 1e3 * Number(this.seconds);
            if (A < Date.parse("0001-01-01T00:00:00Z") || A > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
            let t = "Z";
            if (this.nanos > 0) {
                const e = (this.nanos + 1e9).toString().substring(1);
                t = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z";
            }
            return new Date(A).toISOString().replace(".000Z", t);
        }
        toDate() {
            return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
        }
        static now() {
            return e.fromDate(new Date);
        }
        static fromDate(A) {
            const t = A.getTime();
            return new e({
                seconds: rt.parse(Math.floor(t / 1e3)),
                nanos: t % 1e3 * 1e6
            });
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    qr.runtime = hn, qr.typeName = "google.protobuf.Timestamp", qr.fields = hn.util.newFieldList(()=>[
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
    let Wr = qr;
    const jr = class e extends WA {
        constructor(e){
            super(), this.seconds = rt.zero, this.nanos = 0, hn.util.initPartial(e, this);
        }
        fromJson(e, A) {
            if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${hn.json.debug(e)}`);
            const t = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
            if (null === t) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${hn.json.debug(e)}`);
            const n = Number(t[1]);
            if (n > 315576e6 || n < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${hn.json.debug(e)}`);
            if (this.seconds = rt.parse(n), "string" == typeof t[2]) {
                const e = t[2] + "0".repeat(9 - t[2].length);
                this.nanos = parseInt(e), (n < 0 || Object.is(n, -0)) && (this.nanos = -this.nanos);
            }
            return this;
        }
        toJson(e) {
            if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
            let A = this.seconds.toString();
            if (0 !== this.nanos) {
                let e = Math.abs(this.nanos).toString();
                e = "0".repeat(9 - e.length) + e, "000000" === e.substring(3) ? e = e.substring(0, 3) : "000" === e.substring(6) && (e = e.substring(0, 6)), A += "." + e, this.nanos < 0 && 0 == Number(this.seconds) && (A = "-" + A);
            }
            return A + "s";
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    jr.runtime = hn, jr.typeName = "google.protobuf.Duration", jr.fields = hn.util.newFieldList(()=>[
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
    const Xr = class e extends WA {
        constructor(e){
            super(), this.typeUrl = "", this.value = new Uint8Array(0), hn.util.initPartial(e, this);
        }
        toJson(e) {
            if ("" === this.typeUrl) return {};
            const A = this.typeUrlToName(this.typeUrl), t = e?.typeRegistry?.findMessage(A);
            if (!t) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
            let n = t.fromBinary(this.value).toJson(e);
            return (A.startsWith("google.protobuf.") || null === n || Array.isArray(n) || "object" != typeof n) && (n = {
                value: n
            }), n["@type"] = this.typeUrl, n;
        }
        fromJson(e, A) {
            if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
            if (0 == Object.keys(e).length) return this;
            const t = e["@type"];
            if ("string" != typeof t || "" == t) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
            const n = this.typeUrlToName(t), r = A?.typeRegistry?.findMessage(n);
            if (!r) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${t} is not in the type registry`);
            let o;
            if (n.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) o = r.fromJson(e.value, A);
            else {
                const t = Object.assign({}, e);
                delete t["@type"], o = r.fromJson(t, A);
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
            const A = e.findMessage(this.typeUrlToName(this.typeUrl));
            return A ? A.fromBinary(this.value) : void 0;
        }
        is(e) {
            if ("" === this.typeUrl) return !1;
            const A = this.typeUrlToName(this.typeUrl);
            let t = "";
            return t = "string" == typeof e ? e : e.typeName, A === t;
        }
        typeNameToUrl(e) {
            return `type.googleapis.com/${e}`;
        }
        typeUrlToName(e) {
            if (!e.length) throw new Error(`invalid type url: ${e}`);
            const A = e.lastIndexOf("/"), t = A >= 0 ? e.substring(A + 1) : e;
            if (!t.length) throw new Error(`invalid type url: ${e}`);
            return t;
        }
        static pack(A) {
            const t = new e;
            return t.packFrom(A), t;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    Xr.runtime = hn, Xr.typeName = "google.protobuf.Any", Xr.fields = hn.util.newFieldList(()=>[
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
    let Kr = Xr;
    const Zr = class e extends WA {
        constructor(e){
            super(), hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    Zr.runtime = hn, Zr.typeName = "google.protobuf.Empty", Zr.fields = hn.util.newFieldList(()=>[]);
    const zr = class e extends WA {
        constructor(e){
            super(), this.paths = [], hn.util.initPartial(e, this);
        }
        toJson(e) {
            return this.paths.map((e)=>{
                if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e + '" is irreversible');
                return function(e) {
                    let A = !1;
                    const t = [];
                    for(let n = 0; n < e.length; n++){
                        let r = e.charAt(n);
                        switch(r){
                            case "_":
                                A = !0;
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
                                t.push(r), A = !1;
                                break;
                            default:
                                A && (A = !1, r = r.toUpperCase()), t.push(r);
                        }
                    }
                    return t.join("");
                }(e);
            }).join(",");
        }
        fromJson(e, A) {
            if ("string" != typeof e) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + hn.json.debug(e));
            if ("" === e) return this;
            return this.paths = e.split(",").map(function(e) {
                if (e.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
                const A = e.replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
                return "_" === A[0] ? A.substring(1) : A;
            }), this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    zr.runtime = hn, zr.typeName = "google.protobuf.FieldMask", zr.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    var $r = ((e)=>(e[e.NULL_VALUE = 0] = "NULL_VALUE", e))($r || {});
    hn.util.setEnumType($r, "google.protobuf.NullValue", [
        {
            no: 0,
            name: "NULL_VALUE"
        }
    ]);
    const eo = class e extends WA {
        constructor(e){
            super(), this.fields = {}, hn.util.initPartial(e, this);
        }
        toJson(e) {
            const A = {};
            for (const [t, n] of Object.entries(this.fields))A[t] = n.toJson(e);
            return A;
        }
        fromJson(e, A) {
            if ("object" != typeof e || null == e || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + hn.json.debug(e));
            for (const [A, t] of Object.entries(e))this.fields[A] = no.fromJson(t);
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    eo.runtime = hn, eo.typeName = "google.protobuf.Struct", eo.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "fields",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: no
                }
            }
        ]);
    let Ao = eo;
    const to = class e extends WA {
        constructor(e){
            super(), this.kind = {
                case: void 0
            }, hn.util.initPartial(e, this);
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
        fromJson(e, A) {
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
                        value: oo.fromJson(e)
                    } : this.kind = {
                        case: "structValue",
                        value: Ao.fromJson(e)
                    };
                    break;
                default:
                    throw new Error("cannot decode google.protobuf.Value from JSON " + hn.json.debug(e));
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    to.runtime = hn, to.typeName = "google.protobuf.Value", to.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "null_value",
                kind: "enum",
                T: hn.getEnumType($r),
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
                T: Ao,
                oneof: "kind"
            },
            {
                no: 6,
                name: "list_value",
                kind: "message",
                T: oo,
                oneof: "kind"
            }
        ]);
    let no = to;
    const ro = class e extends WA {
        constructor(e){
            super(), this.values = [], hn.util.initPartial(e, this);
        }
        toJson(e) {
            return this.values.map((e)=>e.toJson());
        }
        fromJson(e, A) {
            if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + hn.json.debug(e));
            for (let A of e)this.values.push(no.fromJson(A));
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    ro.runtime = hn, ro.typeName = "google.protobuf.ListValue", ro.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "values",
                kind: "message",
                T: no,
                repeated: !0
            }
        ]);
    let oo = ro;
    const so = class e extends WA {
        constructor(e){
            super(), this.value = 0, hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.DOUBLE, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.DOUBLE, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.DoubleValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    so.runtime = hn, so.typeName = "google.protobuf.DoubleValue", so.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 1
            }
        ]), so.fieldWrapper = {
        wrapField: (e)=>new so({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const ao = class e extends WA {
        constructor(e){
            super(), this.value = 0, hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.FLOAT, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.FLOAT, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.FloatValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    ao.runtime = hn, ao.typeName = "google.protobuf.FloatValue", ao.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 2
            }
        ]), ao.fieldWrapper = {
        wrapField: (e)=>new ao({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const io = class e extends WA {
        constructor(e){
            super(), this.value = rt.zero, hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.INT64, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.INT64, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.Int64Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    io.runtime = hn, io.typeName = "google.protobuf.Int64Value", io.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 3
            }
        ]), io.fieldWrapper = {
        wrapField: (e)=>new io({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const co = class e extends WA {
        constructor(e){
            super(), this.value = rt.zero, hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.UINT64, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.UINT64, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.UInt64Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    co.runtime = hn, co.typeName = "google.protobuf.UInt64Value", co.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 4
            }
        ]), co.fieldWrapper = {
        wrapField: (e)=>new co({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const lo = class e extends WA {
        constructor(e){
            super(), this.value = 0, hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.INT32, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.INT32, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.Int32Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    lo.runtime = hn, lo.typeName = "google.protobuf.Int32Value", lo.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 5
            }
        ]), lo.fieldWrapper = {
        wrapField: (e)=>new lo({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const go = class e extends WA {
        constructor(e){
            super(), this.value = 0, hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.UINT32, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.UINT32, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.UInt32Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    go.runtime = hn, go.typeName = "google.protobuf.UInt32Value", go.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 13
            }
        ]), go.fieldWrapper = {
        wrapField: (e)=>new go({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const Eo = class e extends WA {
        constructor(e){
            super(), this.value = !1, hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.BOOL, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.BOOL, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.BoolValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    Eo.runtime = hn, Eo.typeName = "google.protobuf.BoolValue", Eo.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 8
            }
        ]), Eo.fieldWrapper = {
        wrapField: (e)=>new Eo({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const uo = class e extends WA {
        constructor(e){
            super(), this.value = "", hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.STRING, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.STRING, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.StringValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    uo.runtime = hn, uo.typeName = "google.protobuf.StringValue", uo.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }
        ]), uo.fieldWrapper = {
        wrapField: (e)=>new uo({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    const Io = class e extends WA {
        constructor(e){
            super(), this.value = new Uint8Array(0), hn.util.initPartial(e, this);
        }
        toJson(e) {
            return hn.json.writeScalar(ot.BYTES, this.value, !0);
        }
        fromJson(e, A) {
            try {
                this.value = hn.json.readScalar(ot.BYTES, e);
            } catch (e) {
                let A = 'cannot decode message google.protobuf.BytesValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (A += `: ${e.message}`), new Error(A);
            }
            return this;
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    Io.runtime = hn, Io.typeName = "google.protobuf.BytesValue", Io.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 12
            }
        ]), Io.fieldWrapper = {
        wrapField: (e)=>new Io({
                value: e
            }),
        unwrapField: (e)=>e.value
    };
    GA($r);
    const ho = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    ho.runtime = Qn, ho.typeName = "google.protobuf.compiler.Version", ho.fields = Qn.util.newFieldList(()=>[
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
    let Qo = ho;
    const mo = class e extends WA {
        constructor(e){
            super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    mo.runtime = Qn, mo.typeName = "google.protobuf.compiler.CodeGeneratorRequest", mo.fields = Qn.util.newFieldList(()=>[
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
                T: fn,
                repeated: !0
            },
            {
                no: 17,
                name: "source_file_descriptors",
                kind: "message",
                T: fn,
                repeated: !0
            },
            {
                no: 3,
                name: "compiler_version",
                kind: "message",
                T: Qo,
                opt: !0
            }
        ]);
    const Co = class e extends WA {
        constructor(e){
            super(), this.file = [], Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    Co.runtime = Qn, Co.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Co.fields = Qn.util.newFieldList(()=>[
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
                T: fo,
                repeated: !0
            }
        ]);
    var Bo = ((e)=>(e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e))(Bo || {});
    Qn.util.setEnumType(Bo, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
    const po = class e extends WA {
        constructor(e){
            super(), Qn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return Qn.util.equals(e, A, t);
        }
    };
    po.runtime = Qn, po.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", po.fields = Qn.util.newFieldList(()=>[
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
                T: Gr,
                opt: !0
            }
        ]);
    let fo = po;
    const yo = class e extends WA {
        constructor(e){
            super(), this.fileName = "", hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    yo.runtime = hn, yo.typeName = "google.protobuf.SourceContext", yo.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "file_name",
                kind: "scalar",
                T: 9
            }
        ]);
    let To = yo;
    var ko = ((e)=>(e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS", e))(ko || {});
    hn.util.setEnumType(ko, "google.protobuf.Syntax", [
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
    const wo = class e extends WA {
        constructor(e){
            super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    wo.runtime = hn, wo.typeName = "google.protobuf.Type", wo.fields = hn.util.newFieldList(()=>[
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
                T: Do,
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
                T: Lo,
                repeated: !0
            },
            {
                no: 5,
                name: "source_context",
                kind: "message",
                T: To
            },
            {
                no: 6,
                name: "syntax",
                kind: "enum",
                T: hn.getEnumType(ko)
            },
            {
                no: 7,
                name: "edition",
                kind: "scalar",
                T: 9
            }
        ]);
    const No = class e extends WA {
        constructor(e){
            super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    No.runtime = hn, No.typeName = "google.protobuf.Field", No.fields = hn.util.newFieldList(()=>[
            {
                no: 1,
                name: "kind",
                kind: "enum",
                T: hn.getEnumType(Ro)
            },
            {
                no: 2,
                name: "cardinality",
                kind: "enum",
                T: hn.getEnumType(So)
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
                T: Lo,
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
    let Do = No;
    var Ro = ((e)=>(e[e.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e[e.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e[e.TYPE_FLOAT = 2] = "TYPE_FLOAT", e[e.TYPE_INT64 = 3] = "TYPE_INT64", e[e.TYPE_UINT64 = 4] = "TYPE_UINT64", e[e.TYPE_INT32 = 5] = "TYPE_INT32", e[e.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e[e.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e[e.TYPE_BOOL = 8] = "TYPE_BOOL", e[e.TYPE_STRING = 9] = "TYPE_STRING", e[e.TYPE_GROUP = 10] = "TYPE_GROUP", e[e.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e[e.TYPE_BYTES = 12] = "TYPE_BYTES", e[e.TYPE_UINT32 = 13] = "TYPE_UINT32", e[e.TYPE_ENUM = 14] = "TYPE_ENUM", e[e.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e[e.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e[e.TYPE_SINT32 = 17] = "TYPE_SINT32", e[e.TYPE_SINT64 = 18] = "TYPE_SINT64", e))(Ro || {});
    hn.util.setEnumType(Ro, "google.protobuf.Field.Kind", [
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
    var So = ((e)=>(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REQUIRED = 2] = "REQUIRED", e[e.REPEATED = 3] = "REPEATED", e))(So || {});
    hn.util.setEnumType(So, "google.protobuf.Field.Cardinality", [
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
    const bo = class e extends WA {
        constructor(e){
            super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    bo.runtime = hn, bo.typeName = "google.protobuf.Enum", bo.fields = hn.util.newFieldList(()=>[
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
                T: _o,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: Lo,
                repeated: !0
            },
            {
                no: 4,
                name: "source_context",
                kind: "message",
                T: To
            },
            {
                no: 5,
                name: "syntax",
                kind: "enum",
                T: hn.getEnumType(ko)
            },
            {
                no: 6,
                name: "edition",
                kind: "scalar",
                T: 9
            }
        ]);
    const Fo = class e extends WA {
        constructor(e){
            super(), this.name = "", this.number = 0, this.options = [], hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    Fo.runtime = hn, Fo.typeName = "google.protobuf.EnumValue", Fo.fields = hn.util.newFieldList(()=>[
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
                T: Lo,
                repeated: !0
            }
        ]);
    let _o = Fo;
    const vo = class e extends WA {
        constructor(e){
            super(), this.name = "", hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    vo.runtime = hn, vo.typeName = "google.protobuf.Option", vo.fields = hn.util.newFieldList(()=>[
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
                T: Kr
            }
        ]);
    let Lo = vo;
    const Uo = class e extends WA {
        constructor(e){
            super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = ko.PROTO2, hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    Uo.runtime = hn, Uo.typeName = "google.protobuf.Api", Uo.fields = hn.util.newFieldList(()=>[
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
                T: Oo,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: Lo,
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
                T: To
            },
            {
                no: 6,
                name: "mixins",
                kind: "message",
                T: Yo,
                repeated: !0
            },
            {
                no: 7,
                name: "syntax",
                kind: "enum",
                T: hn.getEnumType(ko)
            }
        ]);
    const Mo = class e extends WA {
        constructor(e){
            super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = ko.PROTO2, hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    Mo.runtime = hn, Mo.typeName = "google.protobuf.Method", Mo.fields = hn.util.newFieldList(()=>[
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
                T: Lo,
                repeated: !0
            },
            {
                no: 7,
                name: "syntax",
                kind: "enum",
                T: hn.getEnumType(ko)
            }
        ]);
    let Oo = Mo;
    const Jo = class e extends WA {
        constructor(e){
            super(), this.name = "", this.root = "", hn.util.initPartial(e, this);
        }
        static fromBinary(A, t) {
            return (new e).fromBinary(A, t);
        }
        static fromJson(A, t) {
            return (new e).fromJson(A, t);
        }
        static fromJsonString(A, t) {
            return (new e).fromJsonString(A, t);
        }
        static equals(A, t) {
            return hn.util.equals(e, A, t);
        }
    };
    Jo.runtime = hn, Jo.typeName = "google.protobuf.Mixin", Jo.fields = hn.util.newFieldList(()=>[
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
    let Yo = Jo;
    const Po = hn.makeMessageType("agent.v1.Range", ()=>[
            {
                no: 1,
                name: "start",
                kind: "message",
                T: Go
            },
            {
                no: 2,
                name: "end",
                kind: "message",
                T: Go
            }
        ]), Go = hn.makeMessageType("agent.v1.Position", ()=>[
            {
                no: 1,
                name: "line",
                kind: "scalar",
                T: 13
            },
            {
                no: 2,
                name: "column",
                kind: "scalar",
                T: 13
            }
        ]), Vo = hn.makeMessageType("agent.v1.OutputLocation", ()=>[
            {
                no: 1,
                name: "file_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "size_bytes",
                kind: "scalar",
                T: 3
            },
            {
                no: 3,
                name: "line_count",
                kind: "scalar",
                T: 3
            }
        ]), xo = hn.makeEnum("agent.v1.DiagnosticSeverity", [
        {
            no: 0,
            name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "DIAGNOSTIC_SEVERITY_ERROR",
            localName: "ERROR"
        },
        {
            no: 2,
            name: "DIAGNOSTIC_SEVERITY_WARNING",
            localName: "WARNING"
        },
        {
            no: 3,
            name: "DIAGNOSTIC_SEVERITY_INFORMATION",
            localName: "INFORMATION"
        },
        {
            no: 4,
            name: "DIAGNOSTIC_SEVERITY_HINT",
            localName: "HINT"
        }
    ]), Ho = hn.makeMessageType("agent.v1.DiagnosticsArgs", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "tool_call_id",
                kind: "scalar",
                T: 9
            }
        ]), qo = hn.makeMessageType("agent.v1.DiagnosticsResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "message",
                T: Wo,
                oneof: "result"
            },
            {
                no: 2,
                name: "error",
                kind: "message",
                T: Xo,
                oneof: "result"
            },
            {
                no: 3,
                name: "rejected",
                kind: "message",
                T: Ko,
                oneof: "result"
            },
            {
                no: 4,
                name: "file_not_found",
                kind: "message",
                T: Zo,
                oneof: "result"
            },
            {
                no: 5,
                name: "permission_denied",
                kind: "message",
                T: zo,
                oneof: "result"
            }
        ]), Wo = hn.makeMessageType("agent.v1.DiagnosticsSuccess", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "diagnostics",
                kind: "message",
                T: jo,
                repeated: !0
            },
            {
                no: 3,
                name: "total_diagnostics",
                kind: "scalar",
                T: 5
            }
        ]), jo = hn.makeMessageType("agent.v1.Diagnostic", ()=>[
            {
                no: 1,
                name: "severity",
                kind: "enum",
                T: hn.getEnumType(xo)
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: Po
            },
            {
                no: 3,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "source",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "code",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "is_stale",
                kind: "scalar",
                T: 8
            }
        ]), Xo = hn.makeMessageType("agent.v1.DiagnosticsError", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "error",
                kind: "scalar",
                T: 9
            }
        ]), Ko = hn.makeMessageType("agent.v1.DiagnosticsRejected", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "reason",
                kind: "scalar",
                T: 9
            }
        ]), Zo = hn.makeMessageType("agent.v1.DiagnosticsFileNotFound", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            }
        ]), zo = hn.makeMessageType("agent.v1.DiagnosticsPermissionDenied", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            }
        ]), $o = hn.makeEnum("aiserver.v1.EmbeddingModel", [
        {
            no: 0,
            name: "EMBEDDING_MODEL_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "EMBEDDING_MODEL_VOYAGE_CODE_2",
            localName: "VOYAGE_CODE_2"
        },
        {
            no: 2,
            name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3",
            localName: "TEXT_EMBEDDINGS_LARGE_3"
        },
        {
            no: 3,
            name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM",
            localName: "QWEN_1_5B_CUSTOM"
        },
        {
            no: 4,
            name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR",
            localName: "MOCK_CHUNKER_ERROR"
        },
        {
            no: 5,
            name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM",
            localName: "QWEN_1_5B_0618_CUSTOM"
        },
        {
            no: 6,
            name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM",
            localName: "QWEN_1_5B_0618_FP8_MM_CUSTOM"
        }
    ]), es = hn.makeMessageType("aiserver.v1.CursorPosition", ()=>[
            {
                no: 1,
                name: "line",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "column",
                kind: "scalar",
                T: 5
            }
        ]), As = hn.makeMessageType("aiserver.v1.EnvironmentInfo", ()=>[
            {
                no: 1,
                name: "exthost_platform",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "exthost_arch",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "exthost_release",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "exthost_shell",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "local_timestamp",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "workspace_uris",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 7,
                name: "cursor_version",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "is_remote",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 9,
                name: "local_os_type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "home_directory",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 11,
                name: "local_timezone",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), ts = hn.makeMessageType("aiserver.v1.LineRange", ()=>[
            {
                no: 1,
                name: "start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "end_line_number_inclusive",
                kind: "scalar",
                T: 5
            }
        ]), ns = hn.makeMessageType("aiserver.v1.CursorRange", ()=>[
            {
                no: 1,
                name: "start_position",
                kind: "message",
                T: es
            },
            {
                no: 2,
                name: "end_position",
                kind: "message",
                T: es
            }
        ]), rs = hn.makeMessageType("aiserver.v1.DetailedLine", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "line_number",
                kind: "scalar",
                T: 2
            },
            {
                no: 3,
                name: "is_signature",
                kind: "scalar",
                T: 8
            }
        ]), os = hn.makeMessageType("aiserver.v1.CodeBlock", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "file_contents",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "file_contents_length",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "range",
                kind: "message",
                T: ns
            },
            {
                no: 4,
                name: "contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "signatures",
                kind: "message",
                T: ss
            },
            {
                no: 6,
                name: "override_contents",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "original_contents",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "detailed_lines",
                kind: "message",
                T: rs,
                repeated: !0
            },
            {
                no: 10,
                name: "file_git_context",
                kind: "message",
                T: is
            }
        ]), ss = hn.makeMessageType("aiserver.v1.CodeBlock.Signatures", ()=>[
            {
                no: 1,
                name: "ranges",
                kind: "message",
                T: ns,
                repeated: !0
            }
        ], {
        localName: "CodeBlock_Signatures"
    }), as = hn.makeMessageType("aiserver.v1.GitCommit", ()=>[
            {
                no: 1,
                name: "commit",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "author",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "date",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "message",
                kind: "scalar",
                T: 9
            }
        ]), is = hn.makeMessageType("aiserver.v1.FileGit", ()=>[
            {
                no: 1,
                name: "commits",
                kind: "message",
                T: as,
                repeated: !0
            }
        ]), cs = hn.makeMessageType("aiserver.v1.File", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "file_git_context",
                kind: "message",
                T: is
            }
        ]), ls = hn.makeEnum("aiserver.v1.Diagnostic.DiagnosticSeverity", [
        {
            no: 0,
            name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "DIAGNOSTIC_SEVERITY_ERROR",
            localName: "ERROR"
        },
        {
            no: 2,
            name: "DIAGNOSTIC_SEVERITY_WARNING",
            localName: "WARNING"
        },
        {
            no: 3,
            name: "DIAGNOSTIC_SEVERITY_INFORMATION",
            localName: "INFORMATION"
        },
        {
            no: 4,
            name: "DIAGNOSTIC_SEVERITY_HINT",
            localName: "HINT"
        }
    ]), gs = hn.makeMessageType("aiserver.v1.Diagnostic.RelatedInformation", ()=>[
            {
                no: 1,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: ns
            }
        ], {
        localName: "Diagnostic_RelatedInformation"
    }), Es = hn.makeMessageType("aiserver.v1.LinterError", ()=>[
            {
                no: 1,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: ns
            },
            {
                no: 3,
                name: "source",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "related_information",
                kind: "message",
                T: gs,
                repeated: !0
            },
            {
                no: 5,
                name: "severity",
                kind: "enum",
                T: hn.getEnumType(ls),
                opt: !0
            },
            {
                no: 6,
                name: "is_stale",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), us = hn.makeMessageType("aiserver.v1.LinterErrors", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "errors",
                kind: "message",
                T: Es,
                repeated: !0
            },
            {
                no: 3,
                name: "file_contents",
                kind: "scalar",
                T: 9
            }
        ]), ds = hn.makeMessageType("aiserver.v1.CursorRule", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "description",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "body",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "is_from_glob",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 5,
                name: "always_apply",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "attach_to_background_agents",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 7,
                name: "full_path",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "environments",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 9,
                name: "disabled_environments",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 10,
                name: "plugin",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 11,
                name: "marketplace",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Is = hn.makeMessageType("aiserver.v1.ExplicitContext", ()=>[
            {
                no: 1,
                name: "context",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "repo_context",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "rules",
                kind: "message",
                T: ds,
                repeated: !0
            },
            {
                no: 4,
                name: "mode_specific_context",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "mcp_instructions",
                kind: "message",
                T: hs,
                repeated: !0
            }
        ]), hs = hn.makeMessageType("aiserver.v1.MCPInstructions", ()=>[
            {
                no: 1,
                name: "server_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "server_identifier",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "instructions",
                kind: "scalar",
                T: 9
            }
        ]), Qs = hn.makeMessageType("aiserver.v1.ImageProto", ()=>[
            {
                no: 1,
                name: "data",
                kind: "scalar",
                T: 12
            },
            {
                no: 2,
                name: "dimension",
                kind: "message",
                T: ms
            },
            {
                no: 3,
                name: "uuid",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "task_specific_description",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), ms = hn.makeMessageType("aiserver.v1.ImageProto.Dimension", ()=>[
            {
                no: 1,
                name: "width",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "height",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "ImageProto_Dimension"
    }), Cs = hn.makeMessageType("agent.v1.NetworkPolicyLoggingConfig", ()=>[
            {
                no: 1,
                name: "decision_log_path",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "log_format",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Bs = hn.makeMessageType("agent.v1.NetworkPolicy", ()=>[
            {
                no: 1,
                name: "version",
                kind: "scalar",
                T: 13,
                opt: !0
            },
            {
                no: 2,
                name: "default_action",
                kind: "enum",
                T: hn.getEnumType(ps),
                opt: !0
            },
            {
                no: 3,
                name: "deny",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 4,
                name: "allow",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 5,
                name: "logging",
                kind: "message",
                T: Cs,
                opt: !0
            }
        ]), ps = hn.makeEnum("agent.v1.NetworkPolicy.DefaultAction", [
        {
            no: 0,
            name: "DEFAULT_ACTION_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "DEFAULT_ACTION_ALLOW",
            localName: "ALLOW"
        },
        {
            no: 2,
            name: "DEFAULT_ACTION_DENY",
            localName: "DENY"
        }
    ]), fs = hn.makeMessageType("agent.v1.SandboxPolicy", ()=>[
            {
                no: 1,
                name: "type",
                kind: "enum",
                T: hn.getEnumType(ys)
            },
            {
                no: 2,
                name: "network_access",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "additional_readwrite_paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 4,
                name: "additional_readonly_paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 5,
                name: "debug_output_dir",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "disable_tmp_write",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 8,
                name: "allowlist_escalated",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 9,
                name: "enable_shared_build_cache",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 10,
                name: "network_policy",
                kind: "message",
                T: Bs,
                opt: !0
            },
            {
                no: 11,
                name: "network_policy_strict",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 12,
                name: "capture_denies",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 13,
                name: "skip_statsig_defaults",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 14,
                name: "read_boundary",
                kind: "enum",
                T: hn.getEnumType(Ts)
            },
            {
                no: 15,
                name: "additional_read_paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), ys = hn.makeEnum("agent.v1.SandboxPolicy.Type", [
        {
            no: 0,
            name: "TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "TYPE_INSECURE_NONE",
            localName: "INSECURE_NONE"
        },
        {
            no: 2,
            name: "TYPE_WORKSPACE_READWRITE",
            localName: "WORKSPACE_READWRITE"
        },
        {
            no: 3,
            name: "TYPE_WORKSPACE_READONLY",
            localName: "WORKSPACE_READONLY"
        }
    ]), Ts = hn.makeEnum("agent.v1.SandboxPolicy.ReadBoundaryMode", [
        {
            no: 0,
            name: "READ_BOUNDARY_MODE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "READ_BOUNDARY_MODE_SYSTEM",
            localName: "SYSTEM"
        },
        {
            no: 2,
            name: "READ_BOUNDARY_MODE_WORKSPACE",
            localName: "WORKSPACE"
        }
    ]), ks = hn.makeMessageType("agent.v1.CommandClassifierResult", ()=>[
            {
                no: 1,
                name: "commands",
                kind: "message",
                T: Ns,
                repeated: !0
            },
            {
                no: 2,
                name: "suggested_sandbox_mode",
                kind: "enum",
                T: hn.getEnumType(ws)
            },
            {
                no: 3,
                name: "classification_failed",
                kind: "scalar",
                T: 8
            }
        ]), ws = hn.makeEnum("agent.v1.CommandClassifierResult.SuggestedSandboxMode", [
        {
            no: 0,
            name: "SUGGESTED_SANDBOX_MODE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "SUGGESTED_SANDBOX_MODE_SANDBOX",
            localName: "SANDBOX"
        },
        {
            no: 2,
            name: "SUGGESTED_SANDBOX_MODE_NO_SANDBOX",
            localName: "NO_SANDBOX"
        },
        {
            no: 3,
            name: "SUGGESTED_SANDBOX_MODE_UNDETERMINED",
            localName: "UNDETERMINED"
        }
    ]), Ns = hn.makeMessageType("agent.v1.CommandClassifierResult.ClassifiedCommand", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "arguments",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "suggested_allowlist_entry",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "subcommand_tokens",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ], {
        localName: "CommandClassifierResult_ClassifiedCommand"
    }), Ds = hn.makeMessageType("agent.v1.WriteShellStdinArgs", ()=>[
            {
                no: 1,
                name: "shell_id",
                kind: "scalar",
                T: 13
            },
            {
                no: 2,
                name: "chars",
                kind: "scalar",
                T: 9
            }
        ]), Rs = hn.makeMessageType("agent.v1.WriteShellStdinResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "message",
                T: Ss,
                oneof: "result"
            },
            {
                no: 2,
                name: "error",
                kind: "message",
                T: bs,
                oneof: "result"
            }
        ]), Ss = hn.makeMessageType("agent.v1.WriteShellStdinSuccess", ()=>[
            {
                no: 1,
                name: "shell_id",
                kind: "scalar",
                T: 13
            },
            {
                no: 2,
                name: "terminal_file_length_before_input_written",
                kind: "scalar",
                T: 13
            }
        ]), bs = hn.makeMessageType("agent.v1.WriteShellStdinError", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9
            }
        ]), Fs = hn.makeEnum("agent.v1.RecordingMode", [
        {
            no: 0,
            name: "RECORDING_MODE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "RECORDING_MODE_START_RECORDING",
            localName: "START_RECORDING"
        },
        {
            no: 2,
            name: "RECORDING_MODE_SAVE_RECORDING",
            localName: "SAVE_RECORDING"
        },
        {
            no: 3,
            name: "RECORDING_MODE_DISCARD_RECORDING",
            localName: "DISCARD_RECORDING"
        }
    ]), _s = hn.makeEnum("agent.v1.RequestedFilePathRejectedReason", [
        {
            no: 0,
            name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED",
            localName: "SLASHES_NOT_ALLOWED"
        }
    ]), vs = hn.makeMessageType("agent.v1.RecordScreenArgs", ()=>[
            {
                no: 1,
                name: "mode",
                kind: "enum",
                T: hn.getEnumType(Fs)
            },
            {
                no: 2,
                name: "tool_call_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "save_as_filename",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Ls = hn.makeMessageType("agent.v1.RecordScreenResult", ()=>[
            {
                no: 1,
                name: "start_success",
                kind: "message",
                T: Us,
                oneof: "result"
            },
            {
                no: 2,
                name: "save_success",
                kind: "message",
                T: Ms,
                oneof: "result"
            },
            {
                no: 3,
                name: "discard_success",
                kind: "message",
                T: Os,
                oneof: "result"
            },
            {
                no: 4,
                name: "failure",
                kind: "message",
                T: Js,
                oneof: "result"
            }
        ]), Us = hn.makeMessageType("agent.v1.RecordScreenStartSuccess", ()=>[
            {
                no: 1,
                name: "was_prior_recording_cancelled",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "was_save_as_filename_ignored",
                kind: "scalar",
                T: 8
            }
        ]), Ms = hn.makeMessageType("agent.v1.RecordScreenSaveSuccess", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "recording_duration_ms",
                kind: "scalar",
                T: 3
            },
            {
                no: 3,
                name: "requested_file_path_rejected_reason",
                kind: "enum",
                T: hn.getEnumType(_s),
                opt: !0
            }
        ]), Os = hn.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []), Js = hn.makeMessageType("agent.v1.RecordScreenFailure", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9
            }
        ]), Ys = hn.makeMessageType("agent.v1.ApplyAgentDiffResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "message",
                T: Ps,
                oneof: "result"
            },
            {
                no: 2,
                name: "error",
                kind: "message",
                T: xs,
                oneof: "result"
            }
        ]), Ps = hn.makeMessageType("agent.v1.ApplyAgentDiffSuccess", ()=>[
            {
                no: 1,
                name: "applied_changes",
                kind: "message",
                T: Gs,
                repeated: !0
            }
        ]), Gs = hn.makeMessageType("agent.v1.AppliedAgentChange", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "change_type",
                kind: "enum",
                T: hn.getEnumType(Vs)
            },
            {
                no: 3,
                name: "before_content",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "after_content",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "error",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "message_for_model",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Vs = hn.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [
        {
            no: 0,
            name: "CHANGE_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "CHANGE_TYPE_CREATED",
            localName: "CREATED"
        },
        {
            no: 2,
            name: "CHANGE_TYPE_MODIFIED",
            localName: "MODIFIED"
        },
        {
            no: 3,
            name: "CHANGE_TYPE_DELETED",
            localName: "DELETED"
        }
    ]), xs = hn.makeMessageType("agent.v1.ApplyAgentDiffError", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "applied_changes",
                kind: "message",
                T: Gs,
                repeated: !0
            }
        ]), Hs = hn.makeMessageType("agent.v1.GenerateImageResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "message",
                T: qs,
                oneof: "result"
            },
            {
                no: 2,
                name: "error",
                kind: "message",
                T: Ws,
                oneof: "result"
            }
        ]), qs = hn.makeMessageType("agent.v1.GenerateImageSuccess", ()=>[
            {
                no: 1,
                name: "file_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "image_data",
                kind: "scalar",
                T: 9
            }
        ]), Ws = hn.makeMessageType("agent.v1.GenerateImageError", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9
            }
        ]), js = hn.makeMessageType("agent.v1.AiAttributionResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "message",
                T: Xs,
                oneof: "result"
            },
            {
                no: 2,
                name: "error",
                kind: "message",
                T: Ks,
                oneof: "result"
            }
        ]), Xs = hn.makeMessageType("agent.v1.AiAttributionSuccess", ()=>[
            {
                no: 1,
                name: "attribution_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "output_location",
                kind: "message",
                T: Vo,
                opt: !0
            }
        ]), Ks = hn.makeMessageType("agent.v1.AiAttributionError", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9
            }
        ]), Zs = hn.makeEnum("aiserver.v1.DatabaseProvider", [
        {
            no: 0,
            name: "DATABASE_PROVIDER_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "DATABASE_PROVIDER_AURORA",
            localName: "AURORA"
        },
        {
            no: 2,
            name: "DATABASE_PROVIDER_PLANETSCALE",
            localName: "PLANETSCALE"
        }
    ]), zs = hn.makeMessageType("aiserver.v1.CodeResult", ()=>[
            {
                no: 1,
                name: "code_block",
                kind: "message",
                T: os
            },
            {
                no: 2,
                name: "score",
                kind: "scalar",
                T: 2
            }
        ]), $s = hn.makeMessageType("aiserver.v1.RepositoryInfo", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "remote_urls",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "remote_names",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 4,
                name: "repo_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "repo_owner",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "is_tracked",
                kind: "scalar",
                T: 8
            },
            {
                no: 7,
                name: "is_local",
                kind: "scalar",
                T: 8
            },
            {
                no: 8,
                name: "num_files",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 9,
                name: "orthogonal_transform_seed",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 10,
                name: "preferred_embedding_model",
                kind: "enum",
                T: hn.getEnumType($o),
                opt: !0
            },
            {
                no: 11,
                name: "workspace_uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 12,
                name: "preferred_db_provider",
                kind: "enum",
                T: hn.getEnumType(Zs),
                opt: !0
            }
        ]), ea = hn.makeEnum("agent.v1.TaskMode", [
        {
            no: 0,
            name: "TASK_MODE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "TASK_MODE_AGENT",
            localName: "AGENT"
        },
        {
            no: 2,
            name: "TASK_MODE_PLAN",
            localName: "PLAN"
        }
    ]), Aa = hn.makeMessageType("agent.v1.TerminalMetadata", ()=>[
            {
                no: 1,
                name: "cwd",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "last_commands",
                kind: "message",
                T: ta,
                repeated: !0
            },
            {
                no: 3,
                name: "last_modified_ms",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 4,
                name: "current_command",
                kind: "message",
                T: ta,
                opt: !0
            }
        ]), ta = hn.makeMessageType("agent.v1.TerminalMetadata.Command", ()=>[
            {
                no: 1,
                name: "command",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "exit_code",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "timestamp_ms",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 4,
                name: "duration_ms",
                kind: "scalar",
                T: 3,
                opt: !0
            }
        ], {
        localName: "TerminalMetadata_Command"
    }), na = hn.makeEnum("agent.v1.MouseButton", [
        {
            no: 0,
            name: "MOUSE_BUTTON_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "MOUSE_BUTTON_LEFT",
            localName: "LEFT"
        },
        {
            no: 2,
            name: "MOUSE_BUTTON_RIGHT",
            localName: "RIGHT"
        },
        {
            no: 3,
            name: "MOUSE_BUTTON_MIDDLE",
            localName: "MIDDLE"
        },
        {
            no: 4,
            name: "MOUSE_BUTTON_BACK",
            localName: "BACK"
        },
        {
            no: 5,
            name: "MOUSE_BUTTON_FORWARD",
            localName: "FORWARD"
        }
    ]), ra = hn.makeEnum("agent.v1.ScrollDirection", [
        {
            no: 0,
            name: "SCROLL_DIRECTION_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "SCROLL_DIRECTION_UP",
            localName: "UP"
        },
        {
            no: 2,
            name: "SCROLL_DIRECTION_DOWN",
            localName: "DOWN"
        },
        {
            no: 3,
            name: "SCROLL_DIRECTION_LEFT",
            localName: "LEFT"
        },
        {
            no: 4,
            name: "SCROLL_DIRECTION_RIGHT",
            localName: "RIGHT"
        }
    ]), oa = hn.makeEnum("agent.v1.KeyStroke", [
        {
            no: 0,
            name: "KEY_STROKE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "KEY_STROKE_TAP",
            localName: "TAP"
        },
        {
            no: 2,
            name: "KEY_STROKE_DOWN",
            localName: "DOWN"
        },
        {
            no: 3,
            name: "KEY_STROKE_UP",
            localName: "UP"
        }
    ]), sa = hn.makeEnum("agent.v1.ComputerUseSettleOutcome", [
        {
            no: 0,
            name: "COMPUTER_USE_SETTLE_OUTCOME_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "COMPUTER_USE_SETTLE_OUTCOME_NONE",
            localName: "NONE"
        },
        {
            no: 2,
            name: "COMPUTER_USE_SETTLE_OUTCOME_FIXED",
            localName: "FIXED"
        },
        {
            no: 3,
            name: "COMPUTER_USE_SETTLE_OUTCOME_STABLE",
            localName: "STABLE"
        },
        {
            no: 4,
            name: "COMPUTER_USE_SETTLE_OUTCOME_CAP",
            localName: "CAP"
        },
        {
            no: 5,
            name: "COMPUTER_USE_SETTLE_OUTCOME_CAPTURE_FAILED",
            localName: "CAPTURE_FAILED"
        }
    ]), aa = hn.makeMessageType("agent.v1.Coordinate", ()=>[
            {
                no: 1,
                name: "x",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "y",
                kind: "scalar",
                T: 5
            }
        ]), ia = hn.makeMessageType("agent.v1.ComputerUseAction", ()=>[
            {
                no: 1,
                name: "mouse_move",
                kind: "message",
                T: ca,
                oneof: "action"
            },
            {
                no: 2,
                name: "click",
                kind: "message",
                T: la,
                oneof: "action"
            },
            {
                no: 3,
                name: "mouse_down",
                kind: "message",
                T: ga,
                oneof: "action"
            },
            {
                no: 4,
                name: "mouse_up",
                kind: "message",
                T: Ea,
                oneof: "action"
            },
            {
                no: 5,
                name: "drag",
                kind: "message",
                T: ua,
                oneof: "action"
            },
            {
                no: 6,
                name: "scroll",
                kind: "message",
                T: da,
                oneof: "action"
            },
            {
                no: 7,
                name: "type",
                kind: "message",
                T: Ia,
                oneof: "action"
            },
            {
                no: 8,
                name: "key",
                kind: "message",
                T: ha,
                oneof: "action"
            },
            {
                no: 9,
                name: "wait",
                kind: "message",
                T: Qa,
                oneof: "action"
            },
            {
                no: 10,
                name: "screenshot",
                kind: "message",
                T: ma,
                oneof: "action"
            },
            {
                no: 11,
                name: "cursor_position",
                kind: "message",
                T: Ca,
                oneof: "action"
            }
        ]), ca = hn.makeMessageType("agent.v1.MouseMoveAction", ()=>[
            {
                no: 1,
                name: "coordinate",
                kind: "message",
                T: aa
            }
        ]), la = hn.makeMessageType("agent.v1.ClickAction", ()=>[
            {
                no: 1,
                name: "coordinate",
                kind: "message",
                T: aa,
                opt: !0
            },
            {
                no: 2,
                name: "button",
                kind: "enum",
                T: hn.getEnumType(na)
            },
            {
                no: 3,
                name: "count",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "modifier_keys",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), ga = hn.makeMessageType("agent.v1.MouseDownAction", ()=>[
            {
                no: 1,
                name: "button",
                kind: "enum",
                T: hn.getEnumType(na)
            }
        ]), Ea = hn.makeMessageType("agent.v1.MouseUpAction", ()=>[
            {
                no: 1,
                name: "button",
                kind: "enum",
                T: hn.getEnumType(na)
            }
        ]), ua = hn.makeMessageType("agent.v1.DragAction", ()=>[
            {
                no: 1,
                name: "path",
                kind: "message",
                T: aa,
                repeated: !0
            },
            {
                no: 2,
                name: "button",
                kind: "enum",
                T: hn.getEnumType(na)
            },
            {
                no: 3,
                name: "modifier_keys",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), da = hn.makeMessageType("agent.v1.ScrollAction", ()=>[
            {
                no: 1,
                name: "coordinate",
                kind: "message",
                T: aa,
                opt: !0
            },
            {
                no: 2,
                name: "direction",
                kind: "enum",
                T: hn.getEnumType(ra)
            },
            {
                no: 3,
                name: "amount",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "modifier_keys",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Ia = hn.makeMessageType("agent.v1.TypeAction", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            }
        ]), ha = hn.makeMessageType("agent.v1.KeyAction", ()=>[
            {
                no: 1,
                name: "key",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "hold_duration_ms",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "stroke",
                kind: "enum",
                T: hn.getEnumType(oa)
            }
        ]), Qa = hn.makeMessageType("agent.v1.WaitAction", ()=>[
            {
                no: 1,
                name: "duration_ms",
                kind: "scalar",
                T: 5
            }
        ]), ma = hn.makeMessageType("agent.v1.ScreenshotAction", []), Ca = hn.makeMessageType("agent.v1.CursorPositionAction", []), Ba = hn.makeMessageType("agent.v1.ComputerUseSuccess", ()=>[
            {
                no: 1,
                name: "action_count",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "duration_ms",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "screenshot",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "log",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "screenshot_path",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "cursor_position",
                kind: "message",
                T: aa,
                opt: !0
            },
            {
                no: 7,
                name: "settle_ms",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 8,
                name: "settle_outcome",
                kind: "enum",
                T: hn.getEnumType(sa),
                opt: !0
            }
        ]), pa = hn.makeMessageType("agent.v1.ComputerUseError", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "action_count",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "duration_ms",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "log",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "screenshot",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "screenshot_path",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), fa = hn.makeEnum("agent.v1.BugfixVerdict", [
        {
            no: 0,
            name: "BUGFIX_VERDICT_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "BUGFIX_VERDICT_FIXED",
            localName: "FIXED"
        },
        {
            no: 2,
            name: "BUGFIX_VERDICT_FALSE_POSITIVE",
            localName: "FALSE_POSITIVE"
        },
        {
            no: 3,
            name: "BUGFIX_VERDICT_COULD_NOT_FIX",
            localName: "COULD_NOT_FIX"
        },
        {
            no: 4,
            name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX",
            localName: "RESOLVED_BY_OTHER_FIX"
        }
    ]), ya = hn.makeMessageType("agent.v1.BugfixResultItem", ()=>[
            {
                no: 1,
                name: "bug_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "bug_title",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "verdict",
                kind: "enum",
                T: hn.getEnumType(fa)
            },
            {
                no: 4,
                name: "explanation",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "severity",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Ta = hn.makeMessageType("agent.v1.ReportBugfixResultsSuccess", ()=>[
            {
                no: 1,
                name: "results",
                kind: "message",
                T: ya,
                repeated: !0
            }
        ]), ka = hn.makeMessageType("agent.v1.ReportBugfixResultsError", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9
            }
        ]), wa = hn.makeEnum("aiserver.v1.ClientSideToolV2", [
        {
            no: 0,
            name: "CLIENT_SIDE_TOOL_V2_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES",
            localName: "READ_SEMSEARCH_FILES"
        },
        {
            no: 3,
            name: "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH",
            localName: "RIPGREP_SEARCH"
        },
        {
            no: 5,
            name: "CLIENT_SIDE_TOOL_V2_READ_FILE",
            localName: "READ_FILE"
        },
        {
            no: 6,
            name: "CLIENT_SIDE_TOOL_V2_LIST_DIR",
            localName: "LIST_DIR"
        },
        {
            no: 7,
            name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE",
            localName: "EDIT_FILE"
        },
        {
            no: 8,
            name: "CLIENT_SIDE_TOOL_V2_FILE_SEARCH",
            localName: "FILE_SEARCH"
        },
        {
            no: 9,
            name: "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL",
            localName: "SEMANTIC_SEARCH_FULL"
        },
        {
            no: 11,
            name: "CLIENT_SIDE_TOOL_V2_DELETE_FILE",
            localName: "DELETE_FILE"
        },
        {
            no: 12,
            name: "CLIENT_SIDE_TOOL_V2_REAPPLY",
            localName: "REAPPLY"
        },
        {
            no: 15,
            name: "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2",
            localName: "RUN_TERMINAL_COMMAND_V2"
        },
        {
            no: 16,
            name: "CLIENT_SIDE_TOOL_V2_FETCH_RULES",
            localName: "FETCH_RULES"
        },
        {
            no: 18,
            name: "CLIENT_SIDE_TOOL_V2_WEB_SEARCH",
            localName: "WEB_SEARCH"
        },
        {
            no: 19,
            name: "CLIENT_SIDE_TOOL_V2_MCP",
            localName: "MCP"
        },
        {
            no: 23,
            name: "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS",
            localName: "SEARCH_SYMBOLS"
        },
        {
            no: 24,
            name: "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP",
            localName: "BACKGROUND_COMPOSER_FOLLOWUP"
        },
        {
            no: 25,
            name: "CLIENT_SIDE_TOOL_V2_KNOWLEDGE_BASE",
            localName: "KNOWLEDGE_BASE"
        },
        {
            no: 26,
            name: "CLIENT_SIDE_TOOL_V2_FETCH_PULL_REQUEST",
            localName: "FETCH_PULL_REQUEST"
        },
        {
            no: 27,
            name: "CLIENT_SIDE_TOOL_V2_DEEP_SEARCH",
            localName: "DEEP_SEARCH"
        },
        {
            no: 28,
            name: "CLIENT_SIDE_TOOL_V2_CREATE_DIAGRAM",
            localName: "CREATE_DIAGRAM"
        },
        {
            no: 29,
            name: "CLIENT_SIDE_TOOL_V2_FIX_LINTS",
            localName: "FIX_LINTS"
        },
        {
            no: 30,
            name: "CLIENT_SIDE_TOOL_V2_READ_LINTS",
            localName: "READ_LINTS"
        },
        {
            no: 31,
            name: "CLIENT_SIDE_TOOL_V2_GO_TO_DEFINITION",
            localName: "GO_TO_DEFINITION"
        },
        {
            no: 32,
            name: "CLIENT_SIDE_TOOL_V2_TASK",
            localName: "TASK"
        },
        {
            no: 33,
            name: "CLIENT_SIDE_TOOL_V2_AWAIT_TASK",
            localName: "AWAIT_TASK"
        },
        {
            no: 34,
            name: "CLIENT_SIDE_TOOL_V2_TODO_READ",
            localName: "TODO_READ"
        },
        {
            no: 35,
            name: "CLIENT_SIDE_TOOL_V2_TODO_WRITE",
            localName: "TODO_WRITE"
        },
        {
            no: 38,
            name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE_V2",
            localName: "EDIT_FILE_V2"
        },
        {
            no: 39,
            name: "CLIENT_SIDE_TOOL_V2_LIST_DIR_V2",
            localName: "LIST_DIR_V2"
        },
        {
            no: 40,
            name: "CLIENT_SIDE_TOOL_V2_READ_FILE_V2",
            localName: "READ_FILE_V2"
        },
        {
            no: 41,
            name: "CLIENT_SIDE_TOOL_V2_RIPGREP_RAW_SEARCH",
            localName: "RIPGREP_RAW_SEARCH"
        },
        {
            no: 42,
            name: "CLIENT_SIDE_TOOL_V2_GLOB_FILE_SEARCH",
            localName: "GLOB_FILE_SEARCH"
        },
        {
            no: 43,
            name: "CLIENT_SIDE_TOOL_V2_CREATE_PLAN",
            localName: "CREATE_PLAN"
        },
        {
            no: 44,
            name: "CLIENT_SIDE_TOOL_V2_LIST_MCP_RESOURCES",
            localName: "LIST_MCP_RESOURCES"
        },
        {
            no: 45,
            name: "CLIENT_SIDE_TOOL_V2_READ_MCP_RESOURCE",
            localName: "READ_MCP_RESOURCE"
        },
        {
            no: 46,
            name: "CLIENT_SIDE_TOOL_V2_READ_PROJECT",
            localName: "READ_PROJECT"
        },
        {
            no: 47,
            name: "CLIENT_SIDE_TOOL_V2_UPDATE_PROJECT",
            localName: "UPDATE_PROJECT"
        },
        {
            no: 48,
            name: "CLIENT_SIDE_TOOL_V2_TASK_V2",
            localName: "TASK_V2"
        },
        {
            no: 49,
            name: "CLIENT_SIDE_TOOL_V2_CALL_MCP_TOOL",
            localName: "CALL_MCP_TOOL"
        },
        {
            no: 50,
            name: "CLIENT_SIDE_TOOL_V2_APPLY_AGENT_DIFF",
            localName: "APPLY_AGENT_DIFF"
        },
        {
            no: 51,
            name: "CLIENT_SIDE_TOOL_V2_ASK_QUESTION",
            localName: "ASK_QUESTION"
        },
        {
            no: 52,
            name: "CLIENT_SIDE_TOOL_V2_SWITCH_MODE",
            localName: "SWITCH_MODE"
        },
        {
            no: 53,
            name: "CLIENT_SIDE_TOOL_V2_GENERATE_IMAGE",
            localName: "GENERATE_IMAGE"
        },
        {
            no: 54,
            name: "CLIENT_SIDE_TOOL_V2_COMPUTER_USE",
            localName: "COMPUTER_USE"
        },
        {
            no: 55,
            name: "CLIENT_SIDE_TOOL_V2_WRITE_SHELL_STDIN",
            localName: "WRITE_SHELL_STDIN"
        },
        {
            no: 56,
            name: "CLIENT_SIDE_TOOL_V2_RECORD_SCREEN",
            localName: "RECORD_SCREEN"
        },
        {
            no: 57,
            name: "CLIENT_SIDE_TOOL_V2_WEB_FETCH",
            localName: "WEB_FETCH"
        },
        {
            no: 58,
            name: "CLIENT_SIDE_TOOL_V2_REPORT_BUGFIX_RESULTS",
            localName: "REPORT_BUGFIX_RESULTS"
        },
        {
            no: 59,
            name: "CLIENT_SIDE_TOOL_V2_AI_ATTRIBUTION",
            localName: "AI_ATTRIBUTION"
        },
        {
            no: 60,
            name: "CLIENT_SIDE_TOOL_V2_MCP_AUTH",
            localName: "MCP_AUTH"
        },
        {
            no: 61,
            name: "CLIENT_SIDE_TOOL_V2_REFLECT",
            localName: "REFLECT"
        },
        {
            no: 62,
            name: "CLIENT_SIDE_TOOL_V2_AWAIT",
            localName: "AWAIT"
        },
        {
            no: 63,
            name: "CLIENT_SIDE_TOOL_V2_GET_MCP_TOOLS",
            localName: "GET_MCP_TOOLS"
        },
        {
            no: 65,
            name: "CLIENT_SIDE_TOOL_V2_SEND_TO_USER",
            localName: "SEND_TO_USER"
        },
        {
            no: 66,
            name: "CLIENT_SIDE_TOOL_V2_CONNECT_SCM",
            localName: "CONNECT_SCM"
        }
    ]), Na = hn.makeEnum("aiserver.v1.RunTerminalCommandEndedReason", [
        {
            no: 0,
            name: "RUN_TERMINAL_COMMAND_ENDED_REASON_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_COMPLETED",
            localName: "EXECUTION_COMPLETED"
        },
        {
            no: 2,
            name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_ABORTED",
            localName: "EXECUTION_ABORTED"
        },
        {
            no: 3,
            name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_FAILED",
            localName: "EXECUTION_FAILED"
        },
        {
            no: 4,
            name: "RUN_TERMINAL_COMMAND_ENDED_REASON_ERROR_OCCURRED_CHECKING_REASON",
            localName: "ERROR_OCCURRED_CHECKING_REASON"
        },
        {
            no: 5,
            name: "RUN_TERMINAL_COMMAND_ENDED_REASON_IDLE_TIMEOUT",
            localName: "IDLE_TIMEOUT"
        }
    ]), Da = hn.makeMessageType("aiserver.v1.ReapplyParams", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            }
        ]), Ra = hn.makeMessageType("aiserver.v1.ApplyAgentDiffParams", ()=>[
            {
                no: 1,
                name: "agent_id",
                kind: "scalar",
                T: 9
            }
        ]), Sa = hn.makeMessageType("aiserver.v1.ReapplyResult", ()=>[
            {
                no: 1,
                name: "diff",
                kind: "message",
                T: ja
            },
            {
                no: 2,
                name: "is_applied",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "apply_failed",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "linter_errors",
                kind: "message",
                T: Es,
                repeated: !0
            },
            {
                no: 5,
                name: "rejected",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), ba = hn.makeMessageType("aiserver.v1.FetchRulesParams", ()=>[
            {
                no: 1,
                name: "rule_names",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), Fa = hn.makeMessageType("aiserver.v1.FetchRulesResult", ()=>[
            {
                no: 1,
                name: "rules",
                kind: "message",
                T: ds,
                repeated: !0
            }
        ]), _a = hn.makeMessageType("aiserver.v1.ToolResultError", ()=>[
            {
                no: 1,
                name: "client_visible_error_message",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "model_visible_error_message",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "edit_file_error_details",
                kind: "message",
                T: va,
                oneof: "error_details"
            },
            {
                no: 6,
                name: "search_replace_error_details",
                kind: "message",
                T: La,
                oneof: "error_details"
            }
        ]), va = hn.makeMessageType("aiserver.v1.ToolResultError.EditFileError", ()=>[
            {
                no: 1,
                name: "num_lines_in_file_before_edit",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "ToolResultError_EditFileError"
    }), La = hn.makeMessageType("aiserver.v1.ToolResultError.SearchReplaceError", ()=>[
            {
                no: 1,
                name: "num_lines_in_file_before_edit",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "ToolResultError_SearchReplaceError"
    }), Ua = hn.makeMessageType("aiserver.v1.ClientSideToolV2Call", ()=>[
            {
                no: 1,
                name: "tool",
                kind: "enum",
                T: hn.getEnumType(wa)
            },
            {
                no: 2,
                name: "read_semsearch_files_params",
                kind: "message",
                T: Oi,
                oneof: "params"
            },
            {
                no: 5,
                name: "ripgrep_search_params",
                kind: "message",
                T: li,
                oneof: "params"
            },
            {
                no: 8,
                name: "read_file_params",
                kind: "message",
                T: ii,
                oneof: "params"
            },
            {
                no: 12,
                name: "list_dir_params",
                kind: "message",
                T: oi,
                oneof: "params"
            },
            {
                no: 13,
                name: "edit_file_params",
                kind: "message",
                T: qa,
                oneof: "params"
            },
            {
                no: 16,
                name: "file_search_params",
                kind: "message",
                T: ti,
                oneof: "params"
            },
            {
                no: 17,
                name: "semantic_search_full_params",
                kind: "message",
                T: xi,
                oneof: "params"
            },
            {
                no: 19,
                name: "delete_file_params",
                kind: "message",
                T: qi,
                oneof: "params"
            },
            {
                no: 20,
                name: "reapply_params",
                kind: "message",
                T: Da,
                oneof: "params"
            },
            {
                no: 23,
                name: "run_terminal_command_v2_params",
                kind: "message",
                T: nc,
                oneof: "params"
            },
            {
                no: 24,
                name: "fetch_rules_params",
                kind: "message",
                T: ba,
                oneof: "params"
            },
            {
                no: 26,
                name: "web_search_params",
                kind: "message",
                T: ac,
                oneof: "params"
            },
            {
                no: 27,
                name: "mcp_params",
                kind: "message",
                T: lc,
                oneof: "params"
            },
            {
                no: 31,
                name: "search_symbols_params",
                kind: "message",
                T: yc,
                oneof: "params"
            },
            {
                no: 41,
                name: "gotodef_params",
                kind: "message",
                T: Ki,
                oneof: "params"
            },
            {
                no: 32,
                name: "background_composer_followup_params",
                kind: "message",
                T: wc,
                oneof: "params"
            },
            {
                no: 33,
                name: "knowledge_base_params",
                kind: "message",
                T: Dc,
                oneof: "params"
            },
            {
                no: 34,
                name: "fetch_pull_request_params",
                kind: "message",
                T: Sc,
                oneof: "params"
            },
            {
                no: 35,
                name: "deep_search_params",
                kind: "message",
                T: vc,
                oneof: "params"
            },
            {
                no: 36,
                name: "create_diagram_params",
                kind: "message",
                T: Uc,
                oneof: "params"
            },
            {
                no: 37,
                name: "fix_lints_params",
                kind: "message",
                T: Oc,
                oneof: "params"
            },
            {
                no: 38,
                name: "read_lints_params",
                kind: "message",
                T: Pc,
                oneof: "params"
            },
            {
                no: 42,
                name: "task_params",
                kind: "message",
                T: Vc,
                oneof: "params"
            },
            {
                no: 43,
                name: "await_task_params",
                kind: "message",
                T: al,
                oneof: "params"
            },
            {
                no: 44,
                name: "todo_read_params",
                kind: "message",
                T: ll,
                oneof: "params"
            },
            {
                no: 45,
                name: "todo_write_params",
                kind: "message",
                T: ul,
                oneof: "params"
            },
            {
                no: 50,
                name: "edit_file_v2_params",
                kind: "message",
                T: Ga,
                oneof: "params"
            },
            {
                no: 52,
                name: "list_dir_v2_params",
                kind: "message",
                T: Il,
                oneof: "params"
            },
            {
                no: 53,
                name: "read_file_v2_params",
                kind: "message",
                T: Cl,
                oneof: "params"
            },
            {
                no: 54,
                name: "ripgrep_raw_search_params",
                kind: "message",
                T: Xc,
                oneof: "params"
            },
            {
                no: 55,
                name: "glob_file_search_params",
                kind: "message",
                T: pl,
                oneof: "params"
            },
            {
                no: 56,
                name: "create_plan_params",
                kind: "message",
                T: Nl,
                oneof: "params"
            },
            {
                no: 57,
                name: "list_mcp_resources_params",
                kind: "message",
                T: dc,
                oneof: "params"
            },
            {
                no: 58,
                name: "read_mcp_resource_params",
                kind: "message",
                T: Qc,
                oneof: "params"
            },
            {
                no: 59,
                name: "read_project_params",
                kind: "message",
                T: Fl,
                oneof: "params"
            },
            {
                no: 60,
                name: "update_project_params",
                kind: "message",
                T: Ll,
                oneof: "params"
            },
            {
                no: 61,
                name: "task_v2_params",
                kind: "message",
                T: Wc,
                oneof: "params"
            },
            {
                no: 62,
                name: "call_mcp_tool_params",
                kind: "message",
                T: Cc,
                oneof: "params"
            },
            {
                no: 63,
                name: "apply_agent_diff_params",
                kind: "message",
                T: Ra,
                oneof: "params"
            },
            {
                no: 64,
                name: "ask_question_params",
                kind: "message",
                T: Ml,
                oneof: "params"
            },
            {
                no: 65,
                name: "switch_mode_params",
                kind: "message",
                T: Gl,
                oneof: "params"
            },
            {
                no: 66,
                name: "computer_use_params",
                kind: "message",
                T: xl,
                oneof: "params"
            },
            {
                no: 67,
                name: "write_shell_stdin_params",
                kind: "message",
                T: Ds,
                oneof: "params"
            },
            {
                no: 68,
                name: "record_screen_params",
                kind: "message",
                T: vs,
                oneof: "params"
            },
            {
                no: 69,
                name: "web_fetch_params",
                kind: "message",
                T: ql,
                oneof: "params"
            },
            {
                no: 70,
                name: "report_bugfix_results_params",
                kind: "message",
                T: jl,
                oneof: "params"
            },
            {
                no: 71,
                name: "mcp_auth_params",
                kind: "message",
                T: Kl,
                oneof: "params"
            },
            {
                no: 72,
                name: "get_mcp_tools_params",
                kind: "message",
                T: pc,
                oneof: "params"
            },
            {
                no: 73,
                name: "connect_scm_params",
                kind: "message",
                T: zl,
                oneof: "params"
            },
            {
                no: 3,
                name: "tool_call_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "timeout_ms",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 9,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 14,
                name: "is_streaming",
                kind: "scalar",
                T: 8
            },
            {
                no: 15,
                name: "is_last_message",
                kind: "scalar",
                T: 8
            },
            {
                no: 51,
                name: "internal",
                kind: "scalar",
                T: 8
            },
            {
                no: 10,
                name: "raw_args",
                kind: "scalar",
                T: 9
            },
            {
                no: 48,
                name: "tool_index",
                kind: "scalar",
                T: 13,
                opt: !0
            },
            {
                no: 49,
                name: "model_call_id",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Ma = hn.makeMessageType("aiserver.v1.ClientSideToolV2Result", ()=>[
            {
                no: 1,
                name: "tool",
                kind: "enum",
                T: hn.getEnumType(wa)
            },
            {
                no: 2,
                name: "read_semsearch_files_result",
                kind: "message",
                T: Vi,
                oneof: "result"
            },
            {
                no: 4,
                name: "ripgrep_search_result",
                kind: "message",
                T: Bi,
                oneof: "result"
            },
            {
                no: 6,
                name: "read_file_result",
                kind: "message",
                T: ci,
                oneof: "result"
            },
            {
                no: 9,
                name: "list_dir_result",
                kind: "message",
                T: si,
                oneof: "result"
            },
            {
                no: 10,
                name: "edit_file_result",
                kind: "message",
                T: Wa,
                oneof: "result"
            },
            {
                no: 11,
                name: "file_search_result",
                kind: "message",
                T: ni,
                oneof: "result"
            },
            {
                no: 18,
                name: "semantic_search_full_result",
                kind: "message",
                T: Hi,
                oneof: "result"
            },
            {
                no: 20,
                name: "delete_file_result",
                kind: "message",
                T: Wi,
                oneof: "result"
            },
            {
                no: 21,
                name: "reapply_result",
                kind: "message",
                T: Sa,
                oneof: "result"
            },
            {
                no: 24,
                name: "run_terminal_command_v2_result",
                kind: "message",
                T: sc,
                oneof: "result"
            },
            {
                no: 25,
                name: "fetch_rules_result",
                kind: "message",
                T: Fa,
                oneof: "result"
            },
            {
                no: 27,
                name: "web_search_result",
                kind: "message",
                T: ic,
                oneof: "result"
            },
            {
                no: 28,
                name: "mcp_result",
                kind: "message",
                T: uc,
                oneof: "result"
            },
            {
                no: 32,
                name: "search_symbols_result",
                kind: "message",
                T: Tc,
                oneof: "result"
            },
            {
                no: 33,
                name: "background_composer_followup_result",
                kind: "message",
                T: Nc,
                oneof: "result"
            },
            {
                no: 34,
                name: "knowledge_base_result",
                kind: "message",
                T: Rc,
                oneof: "result"
            },
            {
                no: 36,
                name: "fetch_pull_request_result",
                kind: "message",
                T: bc,
                oneof: "result"
            },
            {
                no: 37,
                name: "deep_search_result",
                kind: "message",
                T: Lc,
                oneof: "result"
            },
            {
                no: 38,
                name: "create_diagram_result",
                kind: "message",
                T: Mc,
                oneof: "result"
            },
            {
                no: 39,
                name: "fix_lints_result",
                kind: "message",
                T: Jc,
                oneof: "result"
            },
            {
                no: 40,
                name: "read_lints_result",
                kind: "message",
                T: Gc,
                oneof: "result"
            },
            {
                no: 41,
                name: "gotodef_result",
                kind: "message",
                T: zi,
                oneof: "result"
            },
            {
                no: 42,
                name: "task_result",
                kind: "message",
                T: xc,
                oneof: "result"
            },
            {
                no: 43,
                name: "await_task_result",
                kind: "message",
                T: il,
                oneof: "result"
            },
            {
                no: 44,
                name: "todo_read_result",
                kind: "message",
                T: El,
                oneof: "result"
            },
            {
                no: 45,
                name: "todo_write_result",
                kind: "message",
                T: dl,
                oneof: "result"
            },
            {
                no: 51,
                name: "edit_file_v2_result",
                kind: "message",
                T: Ha,
                oneof: "result"
            },
            {
                no: 52,
                name: "list_dir_v2_result",
                kind: "message",
                T: hl,
                oneof: "result"
            },
            {
                no: 53,
                name: "read_file_v2_result",
                kind: "message",
                T: Bl,
                oneof: "result"
            },
            {
                no: 54,
                name: "ripgrep_raw_search_result",
                kind: "message",
                T: Kc,
                oneof: "result"
            },
            {
                no: 55,
                name: "glob_file_search_result",
                kind: "message",
                T: fl,
                oneof: "result"
            },
            {
                no: 56,
                name: "create_plan_result",
                kind: "message",
                T: Dl,
                oneof: "result"
            },
            {
                no: 57,
                name: "list_mcp_resources_result",
                kind: "message",
                T: Ic,
                oneof: "result"
            },
            {
                no: 58,
                name: "read_mcp_resource_result",
                kind: "message",
                T: mc,
                oneof: "result"
            },
            {
                no: 59,
                name: "read_project_result",
                kind: "message",
                T: _l,
                oneof: "result"
            },
            {
                no: 60,
                name: "update_project_result",
                kind: "message",
                T: Ul,
                oneof: "result"
            },
            {
                no: 61,
                name: "task_v2_result",
                kind: "message",
                T: jc,
                oneof: "result"
            },
            {
                no: 62,
                name: "call_mcp_tool_result",
                kind: "message",
                T: Bc,
                oneof: "result"
            },
            {
                no: 63,
                name: "apply_agent_diff_result",
                kind: "message",
                T: Ys,
                oneof: "result"
            },
            {
                no: 64,
                name: "ask_question_result",
                kind: "message",
                T: Yl,
                oneof: "result"
            },
            {
                no: 65,
                name: "switch_mode_result",
                kind: "message",
                T: Vl,
                oneof: "result"
            },
            {
                no: 66,
                name: "computer_use_result",
                kind: "message",
                T: Hl,
                oneof: "result"
            },
            {
                no: 67,
                name: "generate_image_result",
                kind: "message",
                T: Hs,
                oneof: "result"
            },
            {
                no: 68,
                name: "write_shell_stdin_result",
                kind: "message",
                T: Rs,
                oneof: "result"
            },
            {
                no: 69,
                name: "record_screen_result",
                kind: "message",
                T: Ls,
                oneof: "result"
            },
            {
                no: 70,
                name: "web_fetch_result",
                kind: "message",
                T: Wl,
                oneof: "result"
            },
            {
                no: 71,
                name: "report_bugfix_results_result",
                kind: "message",
                T: Xl,
                oneof: "result"
            },
            {
                no: 72,
                name: "ai_attribution_result",
                kind: "message",
                T: js,
                oneof: "result"
            },
            {
                no: 73,
                name: "mcp_auth_result",
                kind: "message",
                T: Zl,
                oneof: "result"
            },
            {
                no: 74,
                name: "get_mcp_tools_result",
                kind: "message",
                T: fc,
                oneof: "result"
            },
            {
                no: 75,
                name: "connect_scm_result",
                kind: "message",
                T: Ag,
                oneof: "result"
            },
            {
                no: 35,
                name: "tool_call_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 8,
                name: "error",
                kind: "message",
                T: _a,
                opt: !0
            },
            {
                no: 48,
                name: "model_call_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 49,
                name: "tool_index",
                kind: "scalar",
                T: 13,
                opt: !0
            },
            {
                no: 50,
                name: "attachments",
                kind: "message",
                T: Ja,
                opt: !0
            }
        ]), Oa = hn.makeMessageType("aiserver.v1.NudgeMessage", ()=>[
            {
                no: 1,
                name: "raw_message",
                kind: "scalar",
                T: 9
            }
        ]), Ja = hn.makeMessageType("aiserver.v1.ToolResultAttachments", ()=>[
            {
                no: 1,
                name: "original_todos",
                kind: "message",
                T: gl,
                repeated: !0
            },
            {
                no: 2,
                name: "updated_todos",
                kind: "message",
                T: gl,
                repeated: !0
            },
            {
                no: 3,
                name: "nudge_messages",
                kind: "message",
                T: Oa,
                repeated: !0
            },
            {
                no: 4,
                name: "should_show_todo_write_reminder",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "todo_reminder_type",
                kind: "enum",
                T: hn.getEnumType(Ya)
            },
            {
                no: 6,
                name: "discovery_budget_reminder",
                kind: "message",
                T: Pa,
                opt: !0
            }
        ]), Ya = hn.makeEnum("aiserver.v1.ToolResultAttachments.TodoReminderType", [
        {
            no: 0,
            name: "TODO_REMINDER_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "TODO_REMINDER_TYPE_EVERY_10_TURNS",
            localName: "EVERY_10_TURNS"
        },
        {
            no: 2,
            name: "TODO_REMINDER_TYPE_AFTER_EDIT",
            localName: "AFTER_EDIT"
        }
    ]), Pa = hn.makeMessageType("aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder", ()=>[
            {
                no: 1,
                name: "discovery_rounds_remaining",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "discovery_effort",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ], {
        localName: "ToolResultAttachments_DiscoveryBudgetReminder"
    }), Ga = hn.makeMessageType("aiserver.v1.EditFileV2Params", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "contents_after_edit",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "waiting_for_file_contents",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "text",
                kind: "message",
                T: Va,
                oneof: "streaming_edit"
            },
            {
                no: 5,
                name: "code",
                kind: "message",
                T: xa,
                oneof: "streaming_edit"
            },
            {
                no: 6,
                name: "should_send_back_linter_errors",
                kind: "scalar",
                T: 8
            },
            {
                no: 7,
                name: "diff",
                kind: "message",
                T: ja,
                opt: !0
            },
            {
                no: 8,
                name: "result_for_model",
                kind: "scalar",
                T: 9
            },
            {
                no: 9,
                name: "streaming_content",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "no_codeblock",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 11,
                name: "cloud_agent_edit",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), Va = hn.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditText", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "EditFileV2Params_StreamingEditText"
    }), xa = hn.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditCode", ()=>[
            {
                no: 1,
                name: "code",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "EditFileV2Params_StreamingEditCode"
    }), Ha = hn.makeMessageType("aiserver.v1.EditFileV2Result", ()=>[
            {
                no: 1,
                name: "contents_before_edit",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "eol_sequence",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 11,
                name: "detected_language",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "file_was_created",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "diff",
                kind: "message",
                T: ja,
                opt: !0
            },
            {
                no: 4,
                name: "rejected",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 5,
                name: "linter_errors",
                kind: "message",
                T: Es,
                repeated: !0
            },
            {
                no: 6,
                name: "sent_back_linter_errors",
                kind: "scalar",
                T: 8
            },
            {
                no: 8,
                name: "should_auto_fix_lints",
                kind: "scalar",
                T: 8
            },
            {
                no: 7,
                name: "human_review_v2",
                kind: "message",
                T: Ai,
                opt: !0
            },
            {
                no: 10,
                name: "result_for_model",
                kind: "scalar",
                T: 9
            },
            {
                no: 12,
                name: "contents_after_edit",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 13,
                name: "before_content_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 14,
                name: "after_content_id",
                kind: "scalar",
                T: 9
            }
        ]), qa = hn.makeMessageType("aiserver.v1.EditFileParams", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "language",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "blocking",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "instructions",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 12,
                name: "should_edit_file_fail_for_large_files",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "old_string",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "new_string",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "allow_multiple_matches",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 10,
                name: "use_whitespace_insensitive_fallback",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 11,
                name: "use_did_you_mean_fuzzy_match",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 16,
                name: "gracefully_handle_recoverable_errors",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 9,
                name: "line_ranges",
                kind: "message",
                T: ts,
                repeated: !0
            },
            {
                no: 13,
                name: "notebook_cell_idx",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 14,
                name: "is_new_cell",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 15,
                name: "cell_language",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 17,
                name: "edit_category",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 18,
                name: "should_eagerly_process_lints",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), Wa = hn.makeMessageType("aiserver.v1.EditFileResult", ()=>[
            {
                no: 1,
                name: "diff",
                kind: "message",
                T: ja
            },
            {
                no: 2,
                name: "is_applied",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "apply_failed",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "linter_errors",
                kind: "message",
                T: Es,
                repeated: !0
            },
            {
                no: 5,
                name: "rejected",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "num_matches",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 7,
                name: "whitespace_insensitive_fallback_found_match",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 8,
                name: "no_match_found_in_line_ranges",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 11,
                name: "recoverable_error",
                kind: "message",
                T: Za,
                opt: !0
            },
            {
                no: 9,
                name: "num_lines_in_file",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 10,
                name: "is_subagent_edit",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 12,
                name: "diff_became_no_op_due_to_on_save_fixes",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 13,
                name: "human_review",
                kind: "message",
                T: $a,
                opt: !0
            },
            {
                no: 14,
                name: "human_feedback",
                kind: "message",
                T: ei,
                opt: !0
            },
            {
                no: 15,
                name: "should_eagerly_process_lints",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 16,
                name: "human_review_v2",
                kind: "message",
                T: Ai,
                opt: !0
            },
            {
                no: 17,
                name: "were_all_new_linter_errors_resolved_by_this_edit",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), ja = hn.makeMessageType("aiserver.v1.EditFileResult.FileDiff", ()=>[
            {
                no: 1,
                name: "chunks",
                kind: "message",
                T: Ka,
                repeated: !0
            },
            {
                no: 2,
                name: "editor",
                kind: "enum",
                T: hn.getEnumType(Xa)
            },
            {
                no: 3,
                name: "hit_timeout",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "EditFileResult_FileDiff"
    }), Xa = hn.makeEnum("aiserver.v1.EditFileResult.FileDiff.Editor", [
        {
            no: 0,
            name: "EDITOR_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "EDITOR_AI",
            localName: "AI"
        },
        {
            no: 2,
            name: "EDITOR_HUMAN",
            localName: "HUMAN"
        }
    ]), Ka = hn.makeMessageType("aiserver.v1.EditFileResult.FileDiff.ChunkDiff", ()=>[
            {
                no: 1,
                name: "diff_string",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "old_start",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "new_start",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "old_lines",
                kind: "scalar",
                T: 5
            },
            {
                no: 5,
                name: "new_lines",
                kind: "scalar",
                T: 5
            },
            {
                no: 6,
                name: "lines_removed",
                kind: "scalar",
                T: 5
            },
            {
                no: 7,
                name: "lines_added",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "EditFileResult_FileDiff_ChunkDiff"
    }), Za = hn.makeMessageType("aiserver.v1.EditFileResult.RecoverableError", ()=>[
            {
                no: 1,
                name: "error_type",
                kind: "enum",
                T: hn.getEnumType(za)
            },
            {
                no: 2,
                name: "model_message",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "EditFileResult_RecoverableError"
    }), za = hn.makeEnum("aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [
        {
            no: 0,
            name: "RECOVERABLE_ERROR_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "RECOVERABLE_ERROR_TYPE_SEARCH_STRING_NOT_FOUND",
            localName: "SEARCH_STRING_NOT_FOUND"
        },
        {
            no: 2,
            name: "RECOVERABLE_ERROR_TYPE_AMBIGUOUS_SEARCH_STRING",
            localName: "AMBIGUOUS_SEARCH_STRING"
        }
    ]), $a = hn.makeMessageType("aiserver.v1.EditFileResult.EditFileHumanReview", ()=>[
            {
                no: 1,
                name: "is_edit_accepted",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "text_result",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "stop_and_get_new_user_input",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "EditFileResult_EditFileHumanReview"
    }), ei = hn.makeMessageType("aiserver.v1.EditFileResult.HumanFeedback", ()=>[
            {
                no: 1,
                name: "selected_option",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "feedback_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "submit_feedback_as_new_message",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "bubble_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "EditFileResult_HumanFeedback"
    }), Ai = hn.makeMessageType("aiserver.v1.HumanReview", ()=>[
            {
                no: 1,
                name: "selected_option",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "feedback_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "submit_feedback_as_new_message",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "bubble_id",
                kind: "scalar",
                T: 9
            }
        ]), ti = hn.makeMessageType("aiserver.v1.ToolCallFileSearchParams", ()=>[
            {
                no: 1,
                name: "query",
                kind: "scalar",
                T: 9
            }
        ]), ni = hn.makeMessageType("aiserver.v1.ToolCallFileSearchResult", ()=>[
            {
                no: 1,
                name: "files",
                kind: "message",
                T: ri,
                repeated: !0
            },
            {
                no: 2,
                name: "limit_hit",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "num_results",
                kind: "scalar",
                T: 5
            }
        ]), ri = hn.makeMessageType("aiserver.v1.ToolCallFileSearchResult.File", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "ToolCallFileSearchResult_File"
    }), oi = hn.makeMessageType("aiserver.v1.ListDirParams", ()=>[
            {
                no: 1,
                name: "directory_path",
                kind: "scalar",
                T: 9
            }
        ]), si = hn.makeMessageType("aiserver.v1.ListDirResult", ()=>[
            {
                no: 1,
                name: "files",
                kind: "message",
                T: ai,
                repeated: !0
            },
            {
                no: 2,
                name: "directory_relative_workspace_path",
                kind: "scalar",
                T: 9
            }
        ]), ai = hn.makeMessageType("aiserver.v1.ListDirResult.File", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "is_directory",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "size",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 4,
                name: "last_modified",
                kind: "message",
                T: Wr,
                opt: !0
            },
            {
                no: 5,
                name: "num_children",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 6,
                name: "num_lines",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ], {
        localName: "ListDirResult_File"
    }), ii = hn.makeMessageType("aiserver.v1.ReadFileParams", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "read_entire_file",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "start_line_one_indexed",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "end_line_one_indexed_inclusive",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "file_is_allowed_to_be_read_entirely",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "max_lines",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 7,
                name: "max_chars",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 8,
                name: "min_lines",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]), ci = hn.makeMessageType("aiserver.v1.ReadFileResult", ()=>[
            {
                no: 1,
                name: "contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "did_downgrade_to_line_range",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "did_shorten_line_range",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "did_set_default_line_range",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "full_file_contents",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "outline",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "start_line_one_indexed",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 8,
                name: "end_line_one_indexed_inclusive",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 9,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 10,
                name: "did_shorten_char_range",
                kind: "scalar",
                T: 8
            },
            {
                no: 11,
                name: "read_full_file",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 12,
                name: "total_lines",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 13,
                name: "matching_cursor_rules",
                kind: "message",
                T: ds,
                repeated: !0
            },
            {
                no: 14,
                name: "file_git_context",
                kind: "message",
                T: is
            }
        ]), li = hn.makeMessageType("aiserver.v1.RipgrepSearchParams", ()=>[
            {
                no: 1,
                name: "options",
                kind: "message",
                T: ui
            },
            {
                no: 2,
                name: "pattern_info",
                kind: "message",
                T: gi
            }
        ]), gi = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto", ()=>[
            {
                no: 1,
                name: "pattern",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "is_reg_exp",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "is_word_match",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "word_separators",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "is_multiline",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "is_unicode",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 7,
                name: "is_case_sensitive",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 8,
                name: "notebook_info",
                kind: "message",
                T: Ei
            },
            {
                no: 9,
                name: "pattern_was_escaped",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ], {
        localName: "RipgrepSearchParams_IPatternInfoProto"
    }), Ei = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto", ()=>[
            {
                no: 1,
                name: "is_in_notebook_markdown_input",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 2,
                name: "is_in_notebook_markdown_preview",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "is_in_notebook_cell_input",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "is_in_notebook_cell_output",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ], {
        localName: "RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto"
    }), ui = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto", ()=>[
            {
                no: 1,
                name: "preview_options",
                kind: "message",
                T: mi
            },
            {
                no: 2,
                name: "file_encoding",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "surrounding_context",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "is_smart_case",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 5,
                name: "notebook_search_config",
                kind: "message",
                T: Ci
            },
            {
                no: 6,
                name: "exclude_pattern",
                kind: "message",
                T: Ii
            },
            {
                no: 7,
                name: "include_pattern",
                kind: "message",
                T: Qi
            },
            {
                no: 8,
                name: "expand_patterns",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 9,
                name: "max_results",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 10,
                name: "max_file_size",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 11,
                name: "disregard_ignore_files",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 12,
                name: "disregard_global_ignore_files",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 13,
                name: "disregard_parent_ignore_files",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 14,
                name: "disregard_exclude_settings",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 15,
                name: "disregard_search_exclude_settings",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 16,
                name: "ignore_symlinks",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 17,
                name: "only_open_editors",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 18,
                name: "only_file_scheme",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 19,
                name: "reason",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 20,
                name: "extra_file_resources",
                kind: "message",
                T: di
            }
        ], {
        localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto"
    }), di = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto", ()=>[
            {
                no: 1,
                name: "extra_file_resources",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ], {
        localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto"
    }), Ii = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto", ()=>[
            {
                no: 1,
                name: "exclude_pattern",
                kind: "message",
                T: hi,
                repeated: !0
            }
        ], {
        localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto"
    }), hi = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "pattern",
                kind: "message",
                T: Qi
            }
        ], {
        localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto"
    }), Qi = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto", ()=>[
            {
                no: 1,
                name: "pattern",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "patterns",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ], {
        localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto"
    }), mi = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto", ()=>[
            {
                no: 1,
                name: "match_lines",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "chars_per_line",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto"
    }), Ci = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto", ()=>[
            {
                no: 1,
                name: "include_markup_input",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "include_markup_preview",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "include_code_input",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "include_output",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto"
    }), Bi = hn.makeMessageType("aiserver.v1.RipgrepSearchResult", ()=>[
            {
                no: 1,
                name: "internal",
                kind: "message",
                T: pi
            }
        ]), pi = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal", ()=>[
            {
                no: 1,
                name: "results",
                kind: "message",
                T: Ti,
                repeated: !0
            },
            {
                no: 2,
                name: "exit",
                kind: "enum",
                T: hn.getEnumType(yi),
                opt: !0
            },
            {
                no: 3,
                name: "limit_hit",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "messages",
                kind: "message",
                T: Si,
                repeated: !0
            },
            {
                no: 5,
                name: "file_search_stats",
                kind: "message",
                T: bi,
                oneof: "stats"
            },
            {
                no: 6,
                name: "text_search_stats",
                kind: "message",
                T: _i,
                oneof: "stats"
            }
        ]), fi = hn.makeEnum("aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [
        {
            no: 0,
            name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_INFORMATION",
            localName: "INFORMATION"
        },
        {
            no: 2,
            name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_WARNING",
            localName: "WARNING"
        }
    ]), yi = hn.makeEnum("aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [
        {
            no: 0,
            name: "SEARCH_COMPLETION_EXIT_CODE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "SEARCH_COMPLETION_EXIT_CODE_NORMAL",
            localName: "NORMAL"
        },
        {
            no: 2,
            name: "SEARCH_COMPLETION_EXIT_CODE_NEW_SEARCH_STARTED",
            localName: "NEW_SEARCH_STARTED"
        }
    ]), Ti = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileMatch", ()=>[
            {
                no: 1,
                name: "resource",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "results",
                kind: "message",
                T: ki,
                repeated: !0
            }
        ], {
        localName: "RipgrepSearchResultInternal_IFileMatch"
    }), ki = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult", ()=>[
            {
                no: 1,
                name: "match",
                kind: "message",
                T: wi,
                oneof: "result"
            },
            {
                no: 2,
                name: "context",
                kind: "message",
                T: Ni,
                oneof: "result"
            }
        ], {
        localName: "RipgrepSearchResultInternal_ITextSearchResult"
    }), wi = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "range_locations",
                kind: "message",
                T: Di,
                repeated: !0
            },
            {
                no: 3,
                name: "preview_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "webview_index",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "cell_fragment",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ], {
        localName: "RipgrepSearchResultInternal_ITextSearchMatch"
    }), Ni = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "line_number",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "RipgrepSearchResultInternal_ITextSearchContext"
    }), Di = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing", ()=>[
            {
                no: 1,
                name: "source",
                kind: "message",
                T: Ri
            },
            {
                no: 2,
                name: "preview",
                kind: "message",
                T: Ri
            }
        ], {
        localName: "RipgrepSearchResultInternal_ISearchRangeSetPairing"
    }), Ri = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRange", ()=>[
            {
                no: 1,
                name: "start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "start_column",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "end_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "end_column",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "RipgrepSearchResultInternal_ISearchRange"
    }), Si = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "type",
                kind: "enum",
                T: hn.getEnumType(fi)
            },
            {
                no: 3,
                name: "trusted",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ], {
        localName: "RipgrepSearchResultInternal_ITextSearchCompleteMessage"
    }), bi = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats", ()=>[
            {
                no: 1,
                name: "from_cache",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "search_engine_stats",
                kind: "message",
                T: Li,
                oneof: "detail_stats"
            },
            {
                no: 3,
                name: "cached_search_stats",
                kind: "message",
                T: Ui,
                oneof: "detail_stats"
            },
            {
                no: 4,
                name: "file_search_provider_stats",
                kind: "message",
                T: Mi,
                oneof: "detail_stats"
            },
            {
                no: 5,
                name: "result_count",
                kind: "scalar",
                T: 5
            },
            {
                no: 6,
                name: "type",
                kind: "enum",
                T: hn.getEnumType(Fi)
            },
            {
                no: 7,
                name: "sorting_time",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ], {
        localName: "RipgrepSearchResultInternal_IFileSearchStats"
    }), Fi = hn.makeEnum("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [
        {
            no: 0,
            name: "FILE_SEARCH_PROVIDER_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "FILE_SEARCH_PROVIDER_TYPE_FILE_SEARCH_PROVIDER",
            localName: "FILE_SEARCH_PROVIDER"
        },
        {
            no: 2,
            name: "FILE_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS",
            localName: "SEARCH_PROCESS"
        }
    ]), _i = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats", ()=>[
            {
                no: 1,
                name: "type",
                kind: "enum",
                T: hn.getEnumType(vi)
            }
        ], {
        localName: "RipgrepSearchResultInternal_ITextSearchStats"
    }), vi = hn.makeEnum("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [
        {
            no: 0,
            name: "TEXT_SEARCH_PROVIDER_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "TEXT_SEARCH_PROVIDER_TYPE_TEXT_SEARCH_PROVIDER",
            localName: "TEXT_SEARCH_PROVIDER"
        },
        {
            no: 2,
            name: "TEXT_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS",
            localName: "SEARCH_PROCESS"
        },
        {
            no: 3,
            name: "TEXT_SEARCH_PROVIDER_TYPE_AI_TEXT_SEARCH_PROVIDER",
            localName: "AI_TEXT_SEARCH_PROVIDER"
        }
    ]), Li = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats", ()=>[
            {
                no: 1,
                name: "file_walk_time",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "directories_walked",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "files_walked",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "cmd_time",
                kind: "scalar",
                T: 5
            },
            {
                no: 5,
                name: "cmd_result_count",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ], {
        localName: "RipgrepSearchResultInternal_ISearchEngineStats"
    }), Ui = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats", ()=>[
            {
                no: 1,
                name: "cache_was_resolved",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "cache_lookup_time",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "cache_filter_time",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "cache_entry_count",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "RipgrepSearchResultInternal_ICachedSearchStats"
    }), Mi = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats", ()=>[
            {
                no: 1,
                name: "provider_time",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "post_process_time",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "RipgrepSearchResultInternal_IFileSearchProviderStats"
    }), Oi = hn.makeMessageType("aiserver.v1.ReadSemsearchFilesParams", ()=>[
            {
                no: 1,
                name: "repository_info",
                kind: "message",
                T: $s
            },
            {
                no: 2,
                name: "code_results",
                kind: "message",
                T: zs,
                repeated: !0
            },
            {
                no: 3,
                name: "query",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "pr_references",
                kind: "message",
                T: _c,
                repeated: !0
            },
            {
                no: 5,
                name: "pr_search_on",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), Ji = hn.makeMessageType("aiserver.v1.MissingFile", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "missing_reason",
                kind: "enum",
                T: hn.getEnumType(Yi)
            },
            {
                no: 3,
                name: "num_lines",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]), Yi = hn.makeEnum("aiserver.v1.MissingFile.MissingReason", [
        {
            no: 0,
            name: "MISSING_REASON_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "MISSING_REASON_TOO_LARGE",
            localName: "TOO_LARGE"
        },
        {
            no: 2,
            name: "MISSING_REASON_NOT_FOUND",
            localName: "NOT_FOUND"
        }
    ]), Pi = hn.makeMessageType("aiserver.v1.Knowledge", ()=>[
            {
                no: 1,
                name: "knowledge",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "title",
                kind: "scalar",
                T: 9
            }
        ]), Gi = hn.makeMessageType("aiserver.v1.ToolPullRequestResult", ()=>[
            {
                no: 1,
                name: "sha",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "full_pr_contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "score",
                kind: "scalar",
                T: 2
            },
            {
                no: 4,
                name: "title",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "summary",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "pr_number",
                kind: "scalar",
                T: 13,
                opt: !0
            },
            {
                no: 7,
                name: "changed_files",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 8,
                name: "author",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "date",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Vi = hn.makeMessageType("aiserver.v1.ReadSemsearchFilesResult", ()=>[
            {
                no: 1,
                name: "code_results",
                kind: "message",
                T: zs,
                repeated: !0
            },
            {
                no: 2,
                name: "all_files",
                kind: "message",
                T: cs,
                repeated: !0
            },
            {
                no: 3,
                name: "missing_files",
                kind: "message",
                T: Ji,
                repeated: !0
            },
            {
                no: 4,
                name: "knowledge_results",
                kind: "message",
                T: Pi,
                repeated: !0
            },
            {
                no: 5,
                name: "pr_results",
                kind: "message",
                T: Gi,
                repeated: !0
            },
            {
                no: 6,
                name: "git_remote_url",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "pr_hydration_timed_out",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), xi = hn.makeMessageType("aiserver.v1.SemanticSearchFullParams", ()=>[
            {
                no: 1,
                name: "repository_info",
                kind: "message",
                T: $s
            },
            {
                no: 2,
                name: "query",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "include_pattern",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "exclude_pattern",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "top_k",
                kind: "scalar",
                T: 5
            },
            {
                no: 6,
                name: "pr_references",
                kind: "message",
                T: _c,
                repeated: !0
            },
            {
                no: 7,
                name: "pr_search_on",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 8,
                name: "explanation",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "code_results",
                kind: "message",
                T: zs,
                repeated: !0
            }
        ]), Hi = hn.makeMessageType("aiserver.v1.SemanticSearchFullResult", ()=>[
            {
                no: 1,
                name: "code_results",
                kind: "message",
                T: zs,
                repeated: !0
            },
            {
                no: 2,
                name: "all_files",
                kind: "message",
                T: cs,
                repeated: !0
            },
            {
                no: 3,
                name: "missing_files",
                kind: "message",
                T: Ji,
                repeated: !0
            },
            {
                no: 4,
                name: "knowledge_results",
                kind: "message",
                T: Pi,
                repeated: !0
            },
            {
                no: 5,
                name: "pr_results",
                kind: "message",
                T: Gi,
                repeated: !0
            },
            {
                no: 6,
                name: "git_remote_url",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "pr_hydration_timed_out",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), qi = hn.makeMessageType("aiserver.v1.DeleteFileParams", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            }
        ]), Wi = hn.makeMessageType("aiserver.v1.DeleteFileResult", ()=>[
            {
                no: 1,
                name: "rejected",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "file_non_existent",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "file_deleted_successfully",
                kind: "scalar",
                T: 8
            }
        ]), ji = hn.makeMessageType("aiserver.v1.Range", ()=>[
            {
                no: 1,
                name: "start_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "start_character",
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
                name: "end_character",
                kind: "scalar",
                T: 5
            }
        ]), Xi = hn.makeMessageType("aiserver.v1.MatchRange", ()=>[
            {
                no: 1,
                name: "start",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "end",
                kind: "scalar",
                T: 5
            }
        ]), Ki = hn.makeMessageType("aiserver.v1.GotodefParams", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "symbol",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "start_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "end_line",
                kind: "scalar",
                T: 5
            }
        ]), Zi = hn.makeMessageType("aiserver.v1.GotodefDefinition", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "fully_qualified_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "symbol_kind",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "start_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 5,
                name: "end_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 6,
                name: "code_context_lines",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), zi = hn.makeMessageType("aiserver.v1.GotodefResult", ()=>[
            {
                no: 1,
                name: "definitions",
                kind: "message",
                T: Zi,
                repeated: !0
            }
        ]), $i = hn.makeMessageType("aiserver.v1.ShellCommandParsingResult", ()=>[
            {
                no: 1,
                name: "parsing_failed",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "executable_commands",
                kind: "message",
                T: Ac,
                repeated: !0
            },
            {
                no: 3,
                name: "has_redirects",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "has_command_substitution",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "all_redirects_are_dev_null",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "redirects",
                kind: "message",
                T: tc,
                repeated: !0
            }
        ]), ec = hn.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg", ()=>[
            {
                no: 1,
                name: "type",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "ShellCommandParsingResult_ExecutableCommandArg"
    }), Ac = hn.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommand", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "args",
                kind: "message",
                T: ec,
                repeated: !0
            },
            {
                no: 3,
                name: "full_text",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "ShellCommandParsingResult_ExecutableCommand"
    }), tc = hn.makeMessageType("aiserver.v1.ShellCommandParsingResult.Redirect", ()=>[
            {
                no: 1,
                name: "operator",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "destination_fds",
                kind: "scalar",
                T: 13,
                repeated: !0
            },
            {
                no: 3,
                name: "target_node_type",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "target_text",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ], {
        localName: "ShellCommandParsingResult_Redirect"
    }), nc = hn.makeMessageType("aiserver.v1.RunTerminalCommandV2Params", ()=>[
            {
                no: 1,
                name: "command",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "cwd",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "new_session",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "options",
                kind: "message",
                T: rc,
                opt: !0
            },
            {
                no: 5,
                name: "is_background",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "require_user_approval",
                kind: "scalar",
                T: 8
            },
            {
                no: 7,
                name: "parsing_result",
                kind: "message",
                T: $i,
                opt: !0
            },
            {
                no: 8,
                name: "idle_timeout_seconds",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 9,
                name: "requested_sandbox_policy",
                kind: "message",
                T: fs,
                opt: !0
            },
            {
                no: 10,
                name: "file_output_threshold_bytes",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 11,
                name: "command_description",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 12,
                name: "classifier_result",
                kind: "message",
                T: ks,
                opt: !0
            }
        ]), rc = hn.makeMessageType("aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions", ()=>[
            {
                no: 1,
                name: "timeout",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "skip_ai_check",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "command_run_timeout_ms",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "command_change_check_interval_ms",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "ai_finish_check_max_attempts",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 6,
                name: "ai_finish_check_interval_ms",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 7,
                name: "delayer_interval_ms",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 8,
                name: "ai_check_for_hangs",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ], {
        localName: "RunTerminalCommandV2Params_ExecutionOptions"
    }), oc = hn.makeMessageType("aiserver.v1.OutputLocation", ()=>[
            {
                no: 1,
                name: "file_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "size_bytes",
                kind: "scalar",
                T: 3
            },
            {
                no: 3,
                name: "line_count",
                kind: "scalar",
                T: 3
            }
        ]), sc = hn.makeMessageType("aiserver.v1.RunTerminalCommandV2Result", ()=>[
            {
                no: 1,
                name: "output",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "exit_code",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "rejected",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "popped_out_into_background",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "is_running_in_background",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "not_interrupted",
                kind: "scalar",
                T: 8
            },
            {
                no: 7,
                name: "resulting_working_directory",
                kind: "scalar",
                T: 9
            },
            {
                no: 8,
                name: "did_user_change",
                kind: "scalar",
                T: 8
            },
            {
                no: 9,
                name: "ended_reason",
                kind: "enum",
                T: hn.getEnumType(Na)
            },
            {
                no: 10,
                name: "exit_code_v2",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 11,
                name: "updated_command",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 12,
                name: "output_raw",
                kind: "scalar",
                T: 9
            },
            {
                no: 13,
                name: "human_review_v2",
                kind: "message",
                T: Ai,
                opt: !0
            },
            {
                no: 14,
                name: "effective_sandbox_policy",
                kind: "message",
                T: fs,
                opt: !0
            },
            {
                no: 15,
                name: "terminal_instance_id",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 16,
                name: "output_location",
                kind: "message",
                T: oc,
                opt: !0
            },
            {
                no: 17,
                name: "terminal_instance_path",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 18,
                name: "background_shell_id",
                kind: "scalar",
                T: 13,
                opt: !0
            }
        ]), ac = hn.makeMessageType("aiserver.v1.WebSearchParams", ()=>[
            {
                no: 1,
                name: "search_term",
                kind: "scalar",
                T: 9
            }
        ]), ic = hn.makeMessageType("aiserver.v1.WebSearchResult", ()=>[
            {
                no: 1,
                name: "references",
                kind: "message",
                T: cc,
                repeated: !0
            },
            {
                no: 2,
                name: "is_final",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "rejected",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), cc = hn.makeMessageType("aiserver.v1.WebSearchResult.WebReference", ()=>[
            {
                no: 1,
                name: "title",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "url",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "chunk",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "WebSearchResult_WebReference"
    }), lc = hn.makeMessageType("aiserver.v1.MCPParams", ()=>[
            {
                no: 1,
                name: "tools",
                kind: "message",
                T: gc,
                repeated: !0
            },
            {
                no: 2,
                name: "file_output_threshold_bytes",
                kind: "scalar",
                T: 3,
                opt: !0
            }
        ]), gc = hn.makeMessageType("aiserver.v1.MCPParams.Tool", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "description",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "parameters",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "server_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "transcript_display",
                kind: "message",
                T: Ec,
                opt: !0
            }
        ], {
        localName: "MCPParams_Tool"
    }), Ec = hn.makeMessageType("aiserver.v1.MCPParams.TranscriptDisplay", ()=>[
            {
                no: 1,
                name: "loading",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "success",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "error",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "MCPParams_TranscriptDisplay"
    }), uc = hn.makeMessageType("aiserver.v1.MCPResult", ()=>[
            {
                no: 1,
                name: "selected_tool",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "result",
                kind: "scalar",
                T: 9
            }
        ]), dc = hn.makeMessageType("aiserver.v1.ListMcpResourcesParams", ()=>[
            {
                no: 1,
                name: "server",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Ic = hn.makeMessageType("aiserver.v1.ListMcpResourcesResult", ()=>[
            {
                no: 1,
                name: "resources",
                kind: "message",
                T: hc,
                repeated: !0
            }
        ]), hc = hn.makeMessageType("aiserver.v1.ListMcpResourcesResult.MCPResource", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "description",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "mime_type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "server",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "annotations",
                kind: "map",
                K: 9,
                V: {
                    kind: "scalar",
                    T: 9
                }
            }
        ], {
        localName: "ListMcpResourcesResult_MCPResource"
    }), Qc = hn.makeMessageType("aiserver.v1.ReadMcpResourceParams", ()=>[
            {
                no: 1,
                name: "server",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "download_path",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), mc = hn.makeMessageType("aiserver.v1.ReadMcpResourceResult", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "description",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "mime_type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "text",
                kind: "scalar",
                T: 9,
                oneof: "content"
            },
            {
                no: 6,
                name: "blob",
                kind: "scalar",
                T: 12,
                oneof: "content"
            },
            {
                no: 7,
                name: "annotations",
                kind: "map",
                K: 9,
                V: {
                    kind: "scalar",
                    T: 9
                }
            }
        ]), Cc = hn.makeMessageType("aiserver.v1.CallMcpToolParams", ()=>[
            {
                no: 1,
                name: "server",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "tool_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "tool_args",
                kind: "message",
                T: Ao
            }
        ]), Bc = hn.makeMessageType("aiserver.v1.CallMcpToolResult", ()=>[
            {
                no: 1,
                name: "server",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "tool_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "result",
                kind: "message",
                T: Ao
            }
        ]), pc = hn.makeMessageType("aiserver.v1.GetMcpToolsParams", ()=>[
            {
                no: 1,
                name: "server",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "tool_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "pattern",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), fc = hn.makeMessageType("aiserver.v1.GetMcpToolsResult", ()=>[
            {
                no: 1,
                name: "content",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "output_file_path",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), yc = hn.makeMessageType("aiserver.v1.SearchSymbolsParams", ()=>[
            {
                no: 1,
                name: "query",
                kind: "scalar",
                T: 9
            }
        ]), Tc = hn.makeMessageType("aiserver.v1.SearchSymbolsResult", ()=>[
            {
                no: 1,
                name: "matches",
                kind: "message",
                T: kc,
                repeated: !0
            },
            {
                no: 2,
                name: "rejected",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), kc = hn.makeMessageType("aiserver.v1.SearchSymbolsResult.SymbolMatch", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "range",
                kind: "message",
                T: ji
            },
            {
                no: 4,
                name: "secondary_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "label_matches",
                kind: "message",
                T: Xi,
                repeated: !0
            },
            {
                no: 6,
                name: "description_matches",
                kind: "message",
                T: Xi,
                repeated: !0
            },
            {
                no: 7,
                name: "score",
                kind: "scalar",
                T: 1
            }
        ], {
        localName: "SearchSymbolsResult_SymbolMatch"
    }), wc = hn.makeMessageType("aiserver.v1.BackgroundComposerFollowupParams", ()=>[
            {
                no: 1,
                name: "proposed_followup",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "bc_id",
                kind: "scalar",
                T: 9
            }
        ]), Nc = hn.makeMessageType("aiserver.v1.BackgroundComposerFollowupResult", ()=>[
            {
                no: 1,
                name: "proposed_followup",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "is_sent",
                kind: "scalar",
                T: 8
            }
        ]), Dc = hn.makeMessageType("aiserver.v1.KnowledgeBaseParams", ()=>[
            {
                no: 1,
                name: "knowledge_to_store",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "title",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "existing_knowledge_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "action",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Rc = hn.makeMessageType("aiserver.v1.KnowledgeBaseResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "confirmation_message",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "id",
                kind: "scalar",
                T: 9
            }
        ]), Sc = hn.makeMessageType("aiserver.v1.FetchPullRequestParams", ()=>[
            {
                no: 1,
                name: "pull_number_or_commit_hash",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "repo",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "is_github",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), bc = hn.makeMessageType("aiserver.v1.FetchPullRequestResult", ()=>[
            {
                no: 1,
                name: "content",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "pr_number",
                kind: "scalar",
                T: 13
            },
            {
                no: 3,
                name: "title",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "body",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "author",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "date",
                kind: "scalar",
                T: 9
            },
            {
                no: 7,
                name: "diff",
                kind: "scalar",
                T: 9
            },
            {
                no: 8,
                name: "sha",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "external_link",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "url",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 11,
                name: "comments",
                kind: "message",
                T: Fc,
                repeated: !0
            },
            {
                no: 12,
                name: "labels",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 13,
                name: "assignees",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 14,
                name: "is_issue",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 15,
                name: "state",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 16,
                name: "prompt_connect_github",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), Fc = hn.makeMessageType("aiserver.v1.IssueComment", ()=>[
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 13
            },
            {
                no: 2,
                name: "body",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "author",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "created_at",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "updated_at",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "author_association",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), _c = hn.makeMessageType("aiserver.v1.PullRequestReference", ()=>[
            {
                no: 1,
                name: "sha",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "score",
                kind: "scalar",
                T: 2
            },
            {
                no: 3,
                name: "title",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "summary",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "pr_number",
                kind: "scalar",
                T: 13,
                opt: !0
            },
            {
                no: 6,
                name: "author",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "date",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "changed_files",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), vc = hn.makeMessageType("aiserver.v1.DeepSearchParams", ()=>[
            {
                no: 1,
                name: "query",
                kind: "scalar",
                T: 9
            }
        ]), Lc = hn.makeMessageType("aiserver.v1.DeepSearchResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "result",
                kind: "scalar",
                T: 9
            }
        ]), Uc = hn.makeMessageType("aiserver.v1.CreateDiagramParams", ()=>[
            {
                no: 1,
                name: "content",
                kind: "scalar",
                T: 9
            }
        ]), Mc = hn.makeMessageType("aiserver.v1.CreateDiagramResult", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Oc = hn.makeMessageType("aiserver.v1.FixLintsParams", []), Jc = hn.makeMessageType("aiserver.v1.FixLintsResult", ()=>[
            {
                no: 1,
                name: "file_results",
                kind: "message",
                T: Yc,
                repeated: !0
            }
        ]), Yc = hn.makeMessageType("aiserver.v1.FixLintsResult.FileResult", ()=>[
            {
                no: 1,
                name: "file_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "diff",
                kind: "message",
                T: ja
            },
            {
                no: 3,
                name: "is_applied",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "apply_failed",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "error",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "linter_errors",
                kind: "message",
                T: Es,
                repeated: !0
            }
        ], {
        localName: "FixLintsResult_FileResult"
    }), Pc = hn.makeMessageType("aiserver.v1.ReadLintsParams", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), Gc = hn.makeMessageType("aiserver.v1.ReadLintsResult", ()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "linter_errors",
                kind: "message",
                T: Es,
                repeated: !0
            },
            {
                no: 3,
                name: "linter_errors_by_file",
                kind: "message",
                T: us,
                repeated: !0
            }
        ]), Vc = hn.makeMessageType("aiserver.v1.TaskParams", ()=>[
            {
                no: 1,
                name: "task_description",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "task_title",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "async",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "allowed_write_directories",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 5,
                name: "model_override",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "max_mode_override",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 7,
                name: "default_expanded_while_running",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), xc = hn.makeMessageType("aiserver.v1.TaskResult", ()=>[
            {
                no: 1,
                name: "completed_task_result",
                kind: "message",
                T: Hc,
                oneof: "result"
            },
            {
                no: 2,
                name: "async_task_result",
                kind: "message",
                T: qc,
                oneof: "result"
            }
        ]), Hc = hn.makeMessageType("aiserver.v1.TaskResult.CompletedTaskResult", ()=>[
            {
                no: 1,
                name: "summary",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "file_results",
                kind: "message",
                T: Yc,
                repeated: !0
            },
            {
                no: 3,
                name: "user_aborted",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "subagent_errored",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "TaskResult_CompletedTaskResult"
    }), qc = hn.makeMessageType("aiserver.v1.TaskResult.AsyncTaskResult", ()=>[
            {
                no: 1,
                name: "task_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "user_aborted",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "subagent_errored",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "TaskResult_AsyncTaskResult"
    }), Wc = hn.makeMessageType("aiserver.v1.TaskV2Params", ()=>[
            {
                no: 1,
                name: "description",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "prompt",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "subagent_type",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "model",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "mode",
                kind: "enum",
                T: hn.getEnumType(ea)
            }
        ]), jc = hn.makeMessageType("aiserver.v1.TaskV2Result", ()=>[
            {
                no: 1,
                name: "agent_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "is_background",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "cloud_agent_bc_id",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Xc = hn.makeMessageType("aiserver.v1.RipgrepRawSearchParams", ()=>[
            {
                no: 1,
                name: "pattern",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "path",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "glob",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "output_mode",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "context_before",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 6,
                name: "context_after",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 7,
                name: "context",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 8,
                name: "case_insensitive",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 9,
                name: "type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "head_limit",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 11,
                name: "multiline",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 12,
                name: "sort",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 13,
                name: "sort_ascending",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 14,
                name: "ignore_globs",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 15,
                name: "offset",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]), Kc = hn.makeMessageType("aiserver.v1.RipgrepRawSearchResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "message",
                T: zc,
                oneof: "result"
            },
            {
                no: 2,
                name: "error",
                kind: "message",
                T: Zc,
                oneof: "result"
            }
        ]), Zc = hn.makeMessageType("aiserver.v1.RipgrepRawSearchError", ()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9
            }
        ]), zc = hn.makeMessageType("aiserver.v1.RipgrepRawSearchSuccess", ()=>[
            {
                no: 1,
                name: "pattern",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "path",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "output_mode",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "workspace_results",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: $c
                }
            },
            {
                no: 5,
                name: "active_editor_result",
                kind: "message",
                T: $c,
                opt: !0
            }
        ]), $c = hn.makeMessageType("aiserver.v1.RipgrepRawSearchUnionResult", ()=>[
            {
                no: 1,
                name: "count",
                kind: "message",
                T: el,
                oneof: "result"
            },
            {
                no: 2,
                name: "files",
                kind: "message",
                T: tl,
                oneof: "result"
            },
            {
                no: 3,
                name: "content",
                kind: "message",
                T: rl,
                oneof: "result"
            }
        ]), el = hn.makeMessageType("aiserver.v1.RipgrepRawSearchCountResult", ()=>[
            {
                no: 1,
                name: "counts",
                kind: "message",
                T: Al,
                repeated: !0
            },
            {
                no: 2,
                name: "total_files",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "total_matches",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "client_truncated",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "head_limit_applied",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 7,
                name: "offset_applied",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "ripgrep_truncated",
                kind: "scalar",
                T: 8
            }
        ]), Al = hn.makeMessageType("aiserver.v1.RipgrepRawSearchFileCount", ()=>[
            {
                no: 1,
                name: "file",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "count",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "is_dirty",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "is_out_of_workspace",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 5,
                name: "absolute_path",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), tl = hn.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult", ()=>[
            {
                no: 1,
                name: "files",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 2,
                name: "total_files",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "client_truncated",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "ripgrep_truncated",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "files_with_meta",
                kind: "message",
                T: nl,
                repeated: !0
            },
            {
                no: 6,
                name: "head_limit_applied",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 7,
                name: "offset_applied",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]), nl = hn.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult.FileEntry", ()=>[
            {
                no: 1,
                name: "file",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "is_dirty",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "is_out_of_workspace",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "absolute_path",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ], {
        localName: "RipgrepRawSearchFilesResult_FileEntry"
    }), rl = hn.makeMessageType("aiserver.v1.RipgrepRawSearchContentResult", ()=>[
            {
                no: 1,
                name: "matches",
                kind: "message",
                T: ol,
                repeated: !0
            },
            {
                no: 2,
                name: "total_lines",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "total_matched_lines",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "client_truncated",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "ripgrep_truncated",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "head_limit_applied",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 7,
                name: "offset_applied",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]), ol = hn.makeMessageType("aiserver.v1.RipgrepRawSearchFileMatch", ()=>[
            {
                no: 1,
                name: "file",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "matches",
                kind: "message",
                T: sl,
                repeated: !0
            },
            {
                no: 3,
                name: "is_dirty",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "is_out_of_workspace",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 5,
                name: "absolute_path",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), sl = hn.makeMessageType("aiserver.v1.RipgrepRawSearchContentMatch", ()=>[
            {
                no: 1,
                name: "line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "content",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "content_truncated",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "is_context_line",
                kind: "scalar",
                T: 8
            }
        ]), al = hn.makeMessageType("aiserver.v1.AwaitTaskParams", ()=>[
            {
                no: 1,
                name: "ids",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), il = hn.makeMessageType("aiserver.v1.AwaitTaskResult", ()=>[
            {
                no: 1,
                name: "task_results",
                kind: "message",
                T: cl,
                repeated: !0
            },
            {
                no: 2,
                name: "missing_task_ids",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), cl = hn.makeMessageType("aiserver.v1.AwaitTaskResult.TaskResultItem", ()=>[
            {
                no: 1,
                name: "task_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "result",
                kind: "message",
                T: Hc
            }
        ], {
        localName: "AwaitTaskResult_TaskResultItem"
    }), ll = hn.makeMessageType("aiserver.v1.TodoReadParams", ()=>[
            {
                no: 1,
                name: "read",
                kind: "scalar",
                T: 8
            }
        ]), gl = hn.makeMessageType("aiserver.v1.TodoItem", ()=>[
            {
                no: 1,
                name: "content",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "status",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "dependencies",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), El = hn.makeMessageType("aiserver.v1.TodoReadResult", ()=>[
            {
                no: 1,
                name: "todos",
                kind: "message",
                T: gl,
                repeated: !0
            }
        ]), ul = hn.makeMessageType("aiserver.v1.TodoWriteParams", ()=>[
            {
                no: 1,
                name: "todos",
                kind: "message",
                T: gl,
                repeated: !0
            },
            {
                no: 2,
                name: "merge",
                kind: "scalar",
                T: 8
            }
        ]), dl = hn.makeMessageType("aiserver.v1.TodoWriteResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "ready_task_ids",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "needs_in_progress_todos",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "final_todos",
                kind: "message",
                T: gl,
                repeated: !0
            },
            {
                no: 5,
                name: "initial_todos",
                kind: "message",
                T: gl,
                repeated: !0
            },
            {
                no: 6,
                name: "was_merge",
                kind: "scalar",
                T: 8
            }
        ]), Il = hn.makeMessageType("aiserver.v1.ListDirV2Params", ()=>[
            {
                no: 1,
                name: "target_directory",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "ignore_globs",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "should_enrich_terminal_metadata",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), hl = hn.makeMessageType("aiserver.v1.ListDirV2Result", ()=>[
            {
                no: 1,
                name: "directory_tree_root",
                kind: "message",
                T: Ql
            }
        ]), Ql = hn.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode", ()=>[
            {
                no: 1,
                name: "abs_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "children_dirs",
                kind: "message",
                T: Ql,
                repeated: !0
            },
            {
                no: 3,
                name: "children_files",
                kind: "message",
                T: ml,
                repeated: !0
            },
            {
                no: 4,
                name: "children_were_processed",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "full_subtree_extension_counts",
                kind: "map",
                K: 9,
                V: {
                    kind: "scalar",
                    T: 5
                }
            },
            {
                no: 6,
                name: "num_files",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "ListDirV2Result_DirectoryTreeNode"
    }), ml = hn.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode.File", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "terminal_metadata",
                kind: "message",
                T: Aa,
                opt: !0
            }
        ], {
        localName: "ListDirV2Result_DirectoryTreeNode_File"
    }), Cl = hn.makeMessageType("aiserver.v1.ReadFileV2Params", ()=>[
            {
                no: 1,
                name: "target_file",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "offset",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "limit",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "chars_limit",
                kind: "scalar",
                T: 5
            },
            {
                no: 5,
                name: "effective_uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "enable_line_numbers",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), Bl = hn.makeMessageType("aiserver.v1.ReadFileV2Result", ()=>[
            {
                no: 1,
                name: "contents",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "num_characters_in_requested_range",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "offset_is_bigger_than_number_of_lines_in_file",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "total_lines_in_file",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "matching_cursor_rules",
                kind: "message",
                T: ds,
                repeated: !0
            },
            {
                no: 6,
                name: "images",
                kind: "message",
                T: Qs,
                repeated: !0
            }
        ]), pl = hn.makeMessageType("aiserver.v1.GlobFileSearchParams", ()=>[
            {
                no: 1,
                name: "target_directory",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "glob_pattern",
                kind: "scalar",
                T: 9
            }
        ]), fl = hn.makeMessageType("aiserver.v1.GlobFileSearchResult", ()=>[
            {
                no: 1,
                name: "directories",
                kind: "message",
                T: Tl,
                repeated: !0
            }
        ]), yl = hn.makeMessageType("aiserver.v1.GlobFileSearchResult.File", ()=>[
            {
                no: 1,
                name: "rel_path",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "GlobFileSearchResult_File"
    }), Tl = hn.makeMessageType("aiserver.v1.GlobFileSearchResult.Directory", ()=>[
            {
                no: 1,
                name: "abs_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "files",
                kind: "message",
                T: yl,
                repeated: !0
            },
            {
                no: 3,
                name: "total_files",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "ripgrep_truncated",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "GlobFileSearchResult_Directory"
    }), kl = hn.makeMessageType("aiserver.v1.Step", ()=>[
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "title",
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
                name: "instructions",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "prerequisites",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 6,
                name: "sub_composer_id",
                kind: "scalar",
                T: 9
            }
        ]), wl = hn.makeMessageType("aiserver.v1.PlanPhase", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "todos",
                kind: "message",
                T: gl,
                repeated: !0
            }
        ]), Nl = hn.makeMessageType("aiserver.v1.CreatePlanParams", ()=>[
            {
                no: 1,
                name: "plan",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "title",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "summary",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "steps",
                kind: "message",
                T: kl,
                repeated: !0
            },
            {
                no: 5,
                name: "old_str",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "new_str",
                kind: "scalar",
                T: 9
            },
            {
                no: 7,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 8,
                name: "todos",
                kind: "message",
                T: gl,
                repeated: !0
            },
            {
                no: 9,
                name: "overview",
                kind: "scalar",
                T: 9
            },
            {
                no: 10,
                name: "is_spec",
                kind: "scalar",
                T: 8
            },
            {
                no: 11,
                name: "is_project",
                kind: "scalar",
                T: 8
            },
            {
                no: 12,
                name: "phases",
                kind: "message",
                T: wl,
                repeated: !0
            }
        ]), Dl = hn.makeMessageType("aiserver.v1.CreatePlanResult", ()=>[
            {
                no: 1,
                name: "accepted",
                kind: "message",
                T: Rl,
                oneof: "result"
            },
            {
                no: 2,
                name: "rejected",
                kind: "message",
                T: Sl,
                oneof: "result"
            },
            {
                no: 3,
                name: "modified",
                kind: "message",
                T: bl,
                oneof: "result"
            },
            {
                no: 4,
                name: "plan_uri",
                kind: "scalar",
                T: 9
            }
        ]), Rl = hn.makeMessageType("aiserver.v1.CreatePlanResult.Accepted", ()=>[
            {
                no: 1,
                name: "final_todos",
                kind: "message",
                T: gl,
                repeated: !0
            }
        ], {
        localName: "CreatePlanResult_Accepted"
    }), Sl = hn.makeMessageType("aiserver.v1.CreatePlanResult.Rejected", [], {
        localName: "CreatePlanResult_Rejected"
    }), bl = hn.makeMessageType("aiserver.v1.CreatePlanResult.Modified", ()=>[
            {
                no: 1,
                name: "new_plan",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "final_todos",
                kind: "message",
                T: gl,
                repeated: !0
            }
        ], {
        localName: "CreatePlanResult_Modified"
    }), Fl = hn.makeMessageType("aiserver.v1.ReadProjectParams", []), _l = hn.makeMessageType("aiserver.v1.ReadProjectResult", ()=>[
            {
                no: 1,
                name: "plan",
                kind: "scalar",
                T: 9
            }
        ]), vl = hn.makeMessageType("aiserver.v1.UpdateProjectStringReplacement", ()=>[
            {
                no: 1,
                name: "old_string",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "new_string",
                kind: "scalar",
                T: 9
            }
        ]), Ll = hn.makeMessageType("aiserver.v1.UpdateProjectParams", ()=>[
            {
                no: 1,
                name: "string_replacements",
                kind: "message",
                T: vl,
                repeated: !0
            },
            {
                no: 2,
                name: "summary",
                kind: "scalar",
                T: 9
            }
        ]), Ul = hn.makeMessageType("aiserver.v1.UpdateProjectResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "updated_plan",
                kind: "scalar",
                T: 9
            }
        ]), Ml = hn.makeMessageType("aiserver.v1.AskQuestionParams", ()=>[
            {
                no: 1,
                name: "title",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "questions",
                kind: "message",
                T: Ol,
                repeated: !0
            },
            {
                no: 3,
                name: "run_async",
                kind: "scalar",
                T: 8
            }
        ]), Ol = hn.makeMessageType("aiserver.v1.AskQuestionParams.Question", ()=>[
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "prompt",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: Jl,
                repeated: !0
            },
            {
                no: 4,
                name: "allow_multiple",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "AskQuestionParams_Question"
    }), Jl = hn.makeMessageType("aiserver.v1.AskQuestionParams.Option", ()=>[
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "label",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "AskQuestionParams_Option"
    }), Yl = hn.makeMessageType("aiserver.v1.AskQuestionResult", ()=>[
            {
                no: 1,
                name: "answers",
                kind: "message",
                T: Pl,
                repeated: !0
            },
            {
                no: 2,
                name: "is_async",
                kind: "scalar",
                T: 8
            }
        ]), Pl = hn.makeMessageType("aiserver.v1.AskQuestionResult.Answer", ()=>[
            {
                no: 1,
                name: "question_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "selected_option_ids",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "freeform_text",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ], {
        localName: "AskQuestionResult_Answer"
    }), Gl = hn.makeMessageType("aiserver.v1.SwitchModeParams", ()=>[
            {
                no: 1,
                name: "from_mode_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "to_mode_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "explanation",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Vl = hn.makeMessageType("aiserver.v1.SwitchModeResult", ()=>[
            {
                no: 1,
                name: "from_mode_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "to_mode_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "auto_approved",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "user_approved",
                kind: "scalar",
                T: 8
            }
        ]), xl = hn.makeMessageType("aiserver.v1.ComputerUseParams", ()=>[
            {
                no: 1,
                name: "actions",
                kind: "message",
                T: ia,
                repeated: !0
            }
        ]), Hl = hn.makeMessageType("aiserver.v1.ComputerUseResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "message",
                T: Ba,
                oneof: "result"
            },
            {
                no: 2,
                name: "error",
                kind: "message",
                T: pa,
                oneof: "result"
            }
        ]), ql = hn.makeMessageType("aiserver.v1.WebFetchParams", ()=>[
            {
                no: 1,
                name: "url",
                kind: "scalar",
                T: 9
            }
        ]), Wl = hn.makeMessageType("aiserver.v1.WebFetchResult", ()=>[
            {
                no: 1,
                name: "url",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "markdown",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "error",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), jl = hn.makeMessageType("aiserver.v1.ReportBugfixResultsParams", ()=>[
            {
                no: 1,
                name: "summary",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "results",
                kind: "message",
                T: ya,
                repeated: !0
            }
        ]), Xl = hn.makeMessageType("aiserver.v1.ReportBugfixResultsResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "message",
                T: Ta,
                oneof: "result"
            },
            {
                no: 2,
                name: "error",
                kind: "message",
                T: ka,
                oneof: "result"
            }
        ]), Kl = hn.makeMessageType("aiserver.v1.McpAuthParams", ()=>[
            {
                no: 1,
                name: "server_identifier",
                kind: "scalar",
                T: 9
            }
        ]), Zl = hn.makeMessageType("aiserver.v1.McpAuthResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "message",
                kind: "scalar",
                T: 9
            }
        ]), zl = hn.makeMessageType("aiserver.v1.ConnectScmParams", ()=>[
            {
                no: 1,
                name: "github",
                kind: "message",
                T: $l
            }
        ]), $l = hn.makeMessageType("aiserver.v1.ConnectScmGithub", ()=>[
            {
                no: 1,
                name: "repository",
                kind: "message",
                T: eg
            },
            {
                no: 2,
                name: "ghe_application",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), eg = hn.makeMessageType("aiserver.v1.ConnectScmGithubRepository", ()=>[
            {
                no: 1,
                name: "owner",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "repo",
                kind: "scalar",
                T: 9
            }
        ]), Ag = hn.makeMessageType("aiserver.v1.ConnectScmResult", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            },
            {
                no: 2,
                name: "message",
                kind: "scalar",
                T: 9
            }
        ]), tg = hn.makeMessageType("aiserver.v1.SwTrackModelRequest", ()=>[
            {
                no: 1,
                name: "absolute_path",
                kind: "scalar",
                T: 9
            }
        ]), ng = hn.makeMessageType("aiserver.v1.SwTrackModelResponse", []), rg = hn.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorRequest", ()=>[
            {
                no: 1,
                name: "diagnostics_args",
                kind: "message",
                T: Ho
            }
        ]), og = hn.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorResponse", ()=>[
            {
                no: 1,
                name: "diagnostics_result",
                kind: "message",
                T: qo
            }
        ]), sg = hn.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsRequest", ()=>[
            {
                no: 1,
                name: "absolute_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "new_contents",
                kind: "scalar",
                T: 9
            }
        ]), ag = hn.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsResponse", ()=>[
            {
                no: 1,
                name: "new_linter_errors",
                kind: "message",
                T: Es,
                repeated: !0
            }
        ]), ig = hn.makeMessageType("aiserver.v1.SwGetExplicitContextRequest", []), cg = hn.makeMessageType("aiserver.v1.SwGetExplicitContextResponse", ()=>[
            {
                no: 1,
                name: "explicit_context",
                kind: "message",
                T: Is
            }
        ]), lg = hn.makeMessageType("aiserver.v1.SwGetEnvironmentInfoRequest", []), gg = hn.makeMessageType("aiserver.v1.SwGetEnvironmentInfoResponse", ()=>[
            {
                no: 1,
                name: "environment_info",
                kind: "message",
                T: As
            }
        ]), Eg = hn.makeMessageType("aiserver.v1.SwGetLinterErrorsRequest", ()=>[
            {
                no: 1,
                name: "absolute_paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), ug = hn.makeMessageType("aiserver.v1.SwGetLinterErrorsResponse", ()=>[
            {
                no: 1,
                name: "linter_errors",
                kind: "message",
                T: us,
                repeated: !0
            }
        ]), dg = hn.makeMessageType("aiserver.v1.SwGetMcpToolsRequest", ()=>[
            {
                no: 1,
                name: "browser_integration_preference",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Ig = hn.makeMessageType("aiserver.v1.SwGetMcpToolsResponse", ()=>[
            {
                no: 1,
                name: "tools",
                kind: "message",
                T: gc,
                repeated: !0
            }
        ]), hg = hn.makeMessageType("aiserver.v1.SwCallClientSideV2ToolRequest", ()=>[
            {
                no: 1,
                name: "tool_call",
                kind: "message",
                T: Ua
            },
            {
                no: 2,
                name: "composer_id",
                kind: "scalar",
                T: 9
            }
        ]), Qg = hn.makeMessageType("aiserver.v1.SwCallClientSideV2ToolResponse", ()=>[
            {
                no: 1,
                name: "tool_result",
                kind: "message",
                T: Ma
            }
        ]), mg = hn.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsRequest", ()=>[
            {
                no: 1,
                name: "include_pattern",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "exclude_pattern",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "path_encryption_key",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "repository_info",
                kind: "message",
                T: $s
            }
        ]), Cg = hn.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsResponse", ()=>[
            {
                no: 1,
                name: "glob_filter",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "not_glob_filter",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Bg = hn.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenRequest", ()=>[
            {
                no: 1,
                name: "access_token",
                kind: "scalar",
                T: 9
            }
        ]), pg = hn.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenResponse", []), fg = hn.makeMessageType("aiserver.v1.ShadowHealthCheckRequest", []), yg = hn.makeMessageType("aiserver.v1.ShadowHealthCheckResponse", []), Tg = hn.makeMessageType("aiserver.v1.SwSyncIndexRequest", ()=>[
            {
                no: 1,
                name: "repository_info",
                kind: "message",
                T: $s
            },
            {
                no: 2,
                name: "path_encryption_key",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "indexing_progress_threshold",
                kind: "scalar",
                T: 1,
                opt: !0
            }
        ]), kg = hn.makeMessageType("aiserver.v1.SwSyncIndexResponse", []), wg = hn.makeMessageType("aiserver.v1.GetLintsForChangeRequest", ()=>[
            {
                no: 1,
                name: "files",
                kind: "message",
                T: Ng,
                repeated: !0
            },
            {
                no: 2,
                name: "include_quick_fixes",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "do_not_use_in_prod_new_files_should_be_temporarily_created_for_increased_accuracy",
                kind: "scalar",
                T: 8
            }
        ]), Ng = hn.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "initial_content",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "final_content",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "get_all_lints_not_just_delta_lints_for_ranges_in_final_model",
                kind: "message",
                T: Dg,
                opt: !0
            }
        ], {
        localName: "GetLintsForChangeRequest_File"
    }), Dg = hn.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.RangeCollection", ()=>[
            {
                no: 1,
                name: "ranges",
                kind: "message",
                T: Rg,
                repeated: !0
            }
        ], {
        localName: "GetLintsForChangeRequest_File_RangeCollection"
    }), Rg = hn.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.IRange", ()=>[
            {
                no: 1,
                name: "start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "start_column",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "end_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "end_column",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "GetLintsForChangeRequest_File_IRange"
    }), Sg = hn.makeMessageType("aiserver.v1.GetLintsForChangeResponse", ()=>[
            {
                no: 1,
                name: "lints",
                kind: "message",
                T: bg,
                repeated: !0
            }
        ]), bg = hn.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint", ()=>[
            {
                no: 1,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "severity",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "start_line_number_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 5,
                name: "start_column_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 6,
                name: "end_line_number_inclusive_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 7,
                name: "end_column_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 9,
                name: "quick_fixes",
                kind: "message",
                T: Fg,
                repeated: !0
            }
        ], {
        localName: "GetLintsForChangeResponse_Lint"
    }), Fg = hn.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix", ()=>[
            {
                no: 1,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "kind",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "is_preferred",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "edits",
                kind: "message",
                T: _g,
                repeated: !0
            }
        ], {
        localName: "GetLintsForChangeResponse_Lint_QuickFix"
    }), _g = hn.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "start_line_number_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "start_column_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 5,
                name: "end_line_number_inclusive_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 6,
                name: "end_column_one_indexed",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "GetLintsForChangeResponse_Lint_QuickFix_Edit"
    }), vg = {
        typeName: "aiserver.v1.ShadowWorkspaceService",
        methods: {
            getLintsForChange: {
                name: "GetLintsForChange",
                I: wg,
                O: Sg,
                kind: mn.Unary
            },
            shadowHealthCheck: {
                name: "ShadowHealthCheck",
                I: fg,
                O: yg,
                kind: mn.Unary
            },
            swSyncIndex: {
                name: "SwSyncIndex",
                I: Tg,
                O: kg,
                kind: mn.Unary
            },
            swProvideTemporaryAccessToken: {
                name: "SwProvideTemporaryAccessToken",
                I: Bg,
                O: pg,
                kind: mn.Unary
            },
            swCompileRepoIncludeExcludePatterns: {
                name: "SwCompileRepoIncludeExcludePatterns",
                I: mg,
                O: Cg,
                kind: mn.Unary
            },
            swCallClientSideV2Tool: {
                name: "SwCallClientSideV2Tool",
                I: hg,
                O: Qg,
                kind: mn.Unary
            },
            swGetExplicitContext: {
                name: "SwGetExplicitContext",
                I: ig,
                O: cg,
                kind: mn.Unary
            },
            swWriteTextFileWithLints: {
                name: "SwWriteTextFileWithLints",
                I: sg,
                O: ag,
                kind: mn.Unary
            },
            swGetEnvironmentInfo: {
                name: "SwGetEnvironmentInfo",
                I: lg,
                O: gg,
                kind: mn.Unary
            },
            swGetLinterErrors: {
                name: "SwGetLinterErrors",
                I: Eg,
                O: ug,
                kind: mn.Unary
            },
            swGetMcpTools: {
                name: "SwGetMcpTools",
                I: dg,
                O: Ig,
                kind: mn.Unary
            },
            swTrackModel: {
                name: "SwTrackModel",
                I: tg,
                O: ng,
                kind: mn.Unary
            },
            swCallDiagnosticsExecutor: {
                name: "SwCallDiagnosticsExecutor",
                I: rg,
                O: og,
                kind: mn.Unary
            }
        }
    }, Lg = require("fs"), Ug = require("path");
    class Mg {
        constructor(e, A){
            this.socketPath = e, this.shadowServer = A;
        }
        async start() {
            A.info("Starting shadow server", {
                socketPath: this.socketPath
            });
            if (!("win32" === process.platform)) {
                const e = Ug.dirname(this.socketPath);
                Lg.existsSync(e) || (Lg.mkdirSync(e, {
                    recursive: !0
                }), A.info("Created directory for socket path", {
                    directory: e
                })), Lg.existsSync(this.socketPath) && (Lg.unlinkSync(this.socketPath), A.info("Deleted existing socket file", {
                    socketPath: this.socketPath
                }));
            }
            const e = vA({
                routes: (e)=>e.service(vg, this.shadowServer)
            });
            this.server = UA.createServer(e), this.server.listen(this.socketPath), A.info("Listening on socket path", {
                socketPath: this.socketPath
            });
        }
        dispose() {
            this.server?.close();
        }
    }
    class Og {
        async start(e, t) {
            void 0 === this.server ? (this.server = new Mg(e, t), await this.server.start()) : A.warn("Shadow server already started; not starting again.");
        }
        dispose() {
            void 0 !== this.server && this.server.dispose();
        }
    }
    function Jg(A) {
        const t = new Og;
        A.subscriptions.push(t), A.subscriptions.push(e.cursor.registerShadowServerProvider(t));
    }
})();
var r = exports;
for(var o in n)r[o] = n[o];
n.__esModule && Object.defineProperty(r, "__esModule", {
    value: !0
});
