"use strict";
const r = require(56970), { pipeline: s } = require(57075), o = require("./module-55201.js"), { RequestContentLengthMismatchError: n, RequestAbortedError: i, SocketError: a, InformationalError: Q } = require("./module-38238.js"), { kUrl: g, kReset: E, kClient: B, kRunning: c, kPending: I, kQueue: C, kPendingIdx: h, kRunningIdx: l, kError: u, kSocket: d, kStrictContentLength: f, kOnError: w, kMaxConcurrentStreams: y, kHTTP2Session: D, kResume: p, kSize: k, kHTTPContext: R } = require("./module-76992.js"), F = Symbol("open streams");
let m, b, N = !1;
try {
    b = require(32467);
} catch  {
    b = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: S, HTTP2_HEADER_METHOD: M, HTTP2_HEADER_PATH: U, HTTP2_HEADER_SCHEME: L, HTTP2_HEADER_CONTENT_LENGTH: T, HTTP2_HEADER_EXPECT: Y, HTTP2_HEADER_STATUS: G } } = b;
function J(A) {
    r("ERR_TLS_CERT_ALTNAME_INVALID" !== A.code), this[d][u] = A, this[B][w](A);
}
function v(A, e, t) {
    if (0 === t) {
        const t = new Q(`HTTP/2: "frameError" received - type ${A}, code ${e}`);
        this[d][u] = t, this[B][w](t);
    }
}
function H() {
    const A = new a("other side closed", o.getSocketInfo(this[d]));
    this.destroy(A), o.destroy(this[d], A);
}
function V(A) {
    const e = this[u] || new a(`HTTP/2: "GOAWAY" frame received with code ${A}`, o.getSocketInfo(this)), t = this[B];
    if (t[d] = null, t[R] = null, null != this[D] && (this[D].destroy(e), this[D] = null), o.destroy(this[d], e), t[l] < t[C].length) {
        const A = t[C][t[l]];
        t[C][t[l]++] = null, o.errorRequest(t, A, e), t[h] = t[l];
    }
    r(0 === t[c]), t.emit("disconnect", t[g], [
        t
    ], e), t[p]();
}
function x(A, e, t, s, n, i, a, Q) {
    try {
        null != t && o.isBuffer(t) && (r(a === t.byteLength, "buffer body must have content length"), e.cork(), e.write(t), e.uncork(), e.end(), n.onBodySent(t)), Q || (i[E] = !0), n.onRequestSent(), s[p]();
    } catch (e) {
        A(e);
    }
}
async function W(A, e, t, s, o, n, i, a) {
    r(0 !== i || 0 === s[c], "iterator body cannot be pipelined");
    let Q = null;
    function g() {
        if (Q) {
            const A = Q;
            Q = null, A();
        }
    }
    const B = ()=>new Promise((A, e)=>{
            r(null === Q), n[u] ? e(n[u]) : Q = A;
        });
    e.on("close", g).on("drain", g);
    try {
        for await (const A of t){
            if (n[u]) throw n[u];
            const t = e.write(A);
            o.onBodySent(A), t || await B();
        }
        e.end(), o.onRequestSent(), a || (n[E] = !0), s[p]();
    } catch (e) {
        A(e);
    } finally{
        e.off("close", g).off("drain", g);
    }
}
module.exports = async function(A, e) {
    A[d] = e, N || (N = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
        code: "UNDICI-H2"
    }));
    const R = b.connect(A[g], {
        createConnection: ()=>e,
        peerMaxConcurrentStreams: A[y]
    });
    R[F] = 0, R[B] = A, R[d] = e, o.addListener(R, "error", J), o.addListener(R, "frameError", v), o.addListener(R, "end", H), o.addListener(R, "goaway", V), o.addListener(R, "close", function() {
        const { [B]: A } = this, { [d]: e } = A, t = this[d][u] || this[u] || new a("closed", o.getSocketInfo(e));
        if (A[D] = null, A.destroyed) {
            r(0 === A[I]);
            const e = A[C].splice(A[l]);
            for(let r = 0; r < e.length; r++){
                const s = e[r];
                o.errorRequest(A, s, t);
            }
        }
    }), R.unref(), A[D] = R, e[D] = R, o.addListener(e, "error", function(A) {
        r("ERR_TLS_CERT_ALTNAME_INVALID" !== A.code), this[u] = A, this[B][w](A);
    }), o.addListener(e, "end", function() {
        o.destroy(this, new a("other side closed", o.getSocketInfo(this)));
    }), o.addListener(e, "close", function() {
        const e = this[u] || new a("closed", o.getSocketInfo(this));
        A[d] = null, null != this[D] && this[D].destroy(e), A[h] = A[l], r(0 === A[c]), A.emit("disconnect", A[g], [
            A
        ], e), A[p]();
    });
    let O = !1;
    return e.on("close", ()=>{
        O = !0;
    }), {
        version: "h2",
        defaultPipelining: 1 / 0,
        write: (...e)=>(function(A, e) {
                const a = A[D], { method: B, path: I, host: u, upgrade: w, expectContinue: y, signal: k, headers: R } = e;
                let { body: b } = e;
                if (w) return o.errorRequest(A, e, new Error("Upgrade not supported for H2")), !1;
                const N = {};
                for(let A = 0; A < R.length; A += 2){
                    const e = R[A + 0], t = R[A + 1];
                    if (Array.isArray(t)) for(let A = 0; A < t.length; A++)N[e] ? N[e] += `,${t[A]}` : N[e] = t[A];
                    else N[e] = t;
                }
                let J;
                const { hostname: v, port: H } = A[g];
                N[S] = u || `${v}${H ? `:${H}` : ""}`, N[M] = B;
                const V = (t)=>{
                    e.aborted || e.completed || (t = t || new i, o.errorRequest(A, e, t), null != J && o.destroy(J, t), o.destroy(b, t), A[C][A[l]++] = null, A[p]());
                };
                try {
                    e.onConnect(V);
                } catch (t) {
                    o.errorRequest(A, e, t);
                }
                if (e.aborted) return !1;
                if ("CONNECT" === B) return a.ref(), J = a.request(N, {
                    endStream: !1,
                    signal: k
                }), J.id && !J.pending ? (e.onUpgrade(null, null, J), ++a[F], A[C][A[l]++] = null) : J.once("ready", ()=>{
                    e.onUpgrade(null, null, J), ++a[F], A[C][A[l]++] = null;
                }), J.once("close", ()=>{
                    a[F] -= 1, 0 === a[F] && a.unref();
                }), !0;
                N[U] = I, N[L] = "https";
                const O = "PUT" === B || "POST" === B || "PATCH" === B;
                b && "function" == typeof b.read && b.read(0);
                let P = o.bodyLength(b);
                if (o.isFormDataLike(b)) {
                    m ??= require("./module-33095.js").extractBody;
                    const [A, e] = m(b);
                    N["content-type"] = e, b = A.stream, P = A.length;
                }
                null == P && (P = e.contentLength);
                0 !== P && O || (P = null);
                if (function(A) {
                    return "GET" !== A && "HEAD" !== A && "OPTIONS" !== A && "TRACE" !== A && "CONNECT" !== A;
                }(B) && P > 0 && null != e.contentLength && e.contentLength !== P) {
                    if (A[f]) return o.errorRequest(A, e, new n), !1;
                    process.emitWarning(new n);
                }
                null != P && (r(b, "no body must not have content length"), N[T] = `${P}`);
                a.ref();
                const q = "GET" === B || "HEAD" === B || null === b;
                y ? (N[Y] = "100-continue", J = a.request(N, {
                    endStream: q,
                    signal: k
                }), J.once("continue", Z)) : (J = a.request(N, {
                    endStream: q,
                    signal: k
                }), Z());
                return ++a[F], J.once("response", (t)=>{
                    const { [G]: r, ...s } = t;
                    if (e.onResponseStarted(), e.aborted) {
                        const t = new i;
                        return o.errorRequest(A, e, t), void o.destroy(J, t);
                    }
                    !1 === e.onHeaders(Number(r), function(A) {
                        const e = [];
                        for (const [t, r] of Object.entries(A))if (Array.isArray(r)) for (const A of r)e.push(Buffer.from(t), Buffer.from(A));
                        else e.push(Buffer.from(t), Buffer.from(r));
                        return e;
                    }(s), J.resume.bind(J), "") && J.pause(), J.on("data", (A)=>{
                        !1 === e.onData(A) && J.pause();
                    });
                }), J.once("end", ()=>{
                    (null == J.state?.state || J.state.state < 6) && e.onComplete([]), 0 === a[F] && a.unref(), V(new Q("HTTP/2: stream half-closed (remote)")), A[C][A[l]++] = null, A[h] = A[l], A[p]();
                }), J.once("close", ()=>{
                    a[F] -= 1, 0 === a[F] && a.unref();
                }), J.once("error", function(A) {
                    V(A);
                }), J.once("frameError", (A, e)=>{
                    V(new Q(`HTTP/2: "frameError" received - type ${A}, code ${e}`));
                }), !0;
                function Z() {
                    b && 0 !== P ? o.isBuffer(b) ? x(V, J, b, A, e, A[d], P, O) : o.isBlobLike(b) ? "function" == typeof b.stream ? W(V, J, b.stream(), A, e, A[d], P, O) : async function(A, e, t, s, o, i, a, Q) {
                        r(a === t.size, "blob body must have content length");
                        try {
                            if (null != a && a !== t.size) throw new n;
                            const A = Buffer.from(await t.arrayBuffer());
                            e.cork(), e.write(A), e.uncork(), e.end(), o.onBodySent(A), o.onRequestSent(), Q || (i[E] = !0), s[p]();
                        } catch (e) {
                            A(e);
                        }
                    }(V, J, b, A, e, A[d], P, O) : o.isStream(b) ? function(A, e, t, n, i, a, Q, g) {
                        r(0 !== g || 0 === a[c], "stream body cannot be pipelined");
                        const B = s(i, n, (r)=>{
                            r ? (o.destroy(B, r), A(r)) : (o.removeAllListeners(B), Q.onRequestSent(), t || (e[E] = !0), a[p]());
                        });
                        function I(A) {
                            Q.onBodySent(A);
                        }
                        o.addListener(B, "data", I);
                    }(V, A[d], O, J, b, A, e, P) : o.isIterable(b) ? W(V, J, b, A, e, A[d], P, O) : r(!1) : x(V, J, null, A, e, A[d], P, O);
                }
            })(A, ...e),
        resume () {
            !function(A) {
                const e = A[d];
                !1 === e?.destroyed && (0 === A[k] && 0 === A[y] ? (e.unref(), A[D].unref()) : (e.ref(), A[D].ref()));
            }(A);
        },
        destroy (A, t) {
            O ? queueMicrotask(t) : e.destroy(A).on("close", t);
        },
        get destroyed () {
            return e.destroyed;
        },
        busy: ()=>!1
    };
};
