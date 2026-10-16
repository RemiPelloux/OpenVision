"use strict";
const n = require("./module-6333.js"), r = require("./module-9361.js"), { ReadableStreamFrom: o, isBlobLike: s, isReadableStreamLike: i, readableStreamClose: a, createDeferredPromise: c, fullyReadBody: l } = require("./module-5728.js"), { FormData: u } = require("./module-1606.js"), { kState: g } = require("./module-5899.js"), { webidl: E } = require("./module-8005.js"), { DOMException: h, structuredClone: d } = require("./module-6687.js"), { Blob: I, File: B } = require("./module-181.js"), { kBodyUsed: Q } = require("./module-8832.js"), f = require("./module-2613.js"), { isErrored: C } = require("./module-9361.js"), { isUint8Array: p, isArrayBuffer: m } = require("./module-8253.js"), { File: y } = require("./module-3322.js"), { parseMIMEType: w, serializeAMimeType: k } = require("./module-3631.js");
let b;
try {
    const e = require("./module-7598.js");
    b = (t)=>e.randomInt(0, t);
} catch  {
    b = (e)=>Math.floor(Math.random(e));
}
let N = globalThis.ReadableStream;
const T = B ?? y, D = new TextEncoder, S = new TextDecoder;
function R(e, t = !1) {
    N || (N = require("./module-3774.js").ReadableStream);
    let n = null;
    n = e instanceof N ? e : s(e) ? e.stream() : new N({
        async pull (e) {
            e.enqueue("string" == typeof l ? D.encode(l) : l), queueMicrotask(()=>a(e));
        },
        start () {},
        type: void 0
    }), f(i(n));
    let c = null, l = null, u = null, g = null;
    if ("string" == typeof e) l = e, g = "text/plain;charset=UTF-8";
    else if (e instanceof URLSearchParams) l = e.toString(), g = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (m(e)) l = new Uint8Array(e.slice());
    else if (ArrayBuffer.isView(e)) l = new Uint8Array(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength));
    else if (r.isFormDataLike(e)) {
        const t = `----formdata-undici-0${`${b(1e11)}`.padStart(11, "0")}`, A = `--${t}\r\nContent-Disposition: form-data`, n = (e)=>e.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), r = (e)=>e.replace(/\r?\n|\r/g, "\r\n"), o = [], s = new Uint8Array([
            13,
            10
        ]);
        u = 0;
        let i = !1;
        for (const [t, a] of e)if ("string" == typeof a) {
            const e = D.encode(A + `; name="${n(r(t))}"` + `\r\n\r\n${r(a)}\r\n`);
            o.push(e), u += e.byteLength;
        } else {
            const e = D.encode(`${A}; name="${n(r(t))}"` + (a.name ? `; filename="${n(a.name)}"` : "") + "\r\n" + `Content-Type: ${a.type || "application/octet-stream"}\r\n\r\n`);
            o.push(e, a, s), "number" == typeof a.size ? u += e.byteLength + a.size + s.byteLength : i = !0;
        }
        const a = D.encode(`--${t}--`);
        o.push(a), u += a.byteLength, i && (u = null), l = e, c = async function*() {
            for (const e of o)e.stream ? yield* e.stream() : yield e;
        }, g = "multipart/form-data; boundary=" + t;
    } else if (s(e)) l = e, u = e.size, e.type && (g = e.type);
    else if ("function" == typeof e[Symbol.asyncIterator]) {
        if (t) throw new TypeError("keepalive");
        if (r.isDisturbed(e) || e.locked) throw new TypeError("Response body object should not be disturbed or locked");
        n = e instanceof N ? e : o(e);
    }
    if (("string" == typeof l || r.isBuffer(l)) && (u = Buffer.byteLength(l)), null != c) {
        let t;
        n = new N({
            async start () {
                t = c(e)[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { value: A, done: r } = await t.next();
                return r ? queueMicrotask(()=>{
                    e.close();
                }) : C(n) || e.enqueue(new Uint8Array(A)), e.desiredSize > 0;
            },
            async cancel (e) {
                await t.return();
            },
            type: void 0
        });
    }
    return [
        {
            stream: n,
            source: l,
            length: u
        },
        g
    ];
}
async function* F(e) {
    if (e) if (p(e)) yield e;
    else {
        const t = e.stream;
        if (r.isDisturbed(t)) throw new TypeError("The body has already been consumed.");
        if (t.locked) throw new TypeError("The stream is locked.");
        t[Q] = !0, yield* t;
    }
}
function v(e) {
    if (e.aborted) throw new h("The operation was aborted.", "AbortError");
}
function M(e) {
    return {
        blob () {
            return U(this, (e)=>{
                let t = function(e) {
                    const { headersList: t } = e[g], A = t.get("content-type");
                    if (null === A) return "failure";
                    return w(A);
                }(this);
                return "failure" === t ? t = "" : t && (t = k(t)), new I([
                    e
                ], {
                    type: t
                });
            }, e);
        },
        arrayBuffer () {
            return U(this, (e)=>new Uint8Array(e).buffer, e);
        },
        text () {
            return U(this, L, e);
        },
        json () {
            return U(this, _, e);
        },
        async formData () {
            E.brandCheck(this, e), v(this[g]);
            const t = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(t)) {
                const e = {};
                for (const [t, A] of this.headers)e[t.toLowerCase()] = A;
                const t = new u;
                let A;
                try {
                    A = new n({
                        headers: e,
                        preservePath: !0
                    });
                } catch (e) {
                    throw new h(`${e}`, "AbortError");
                }
                A.on("field", (e, A)=>{
                    t.append(e, A);
                }), A.on("file", (e, A, n, r, o)=>{
                    const s = [];
                    if ("base64" === r || "base64" === r.toLowerCase()) {
                        let r = "";
                        A.on("data", (e)=>{
                            r += e.toString().replace(/[\r\n]/gm, "");
                            const t = r.length - r.length % 4;
                            s.push(Buffer.from(r.slice(0, t), "base64")), r = r.slice(t);
                        }), A.on("end", ()=>{
                            s.push(Buffer.from(r, "base64")), t.append(e, new T(s, n, {
                                type: o
                            }));
                        });
                    } else A.on("data", (e)=>{
                        s.push(e);
                    }), A.on("end", ()=>{
                        t.append(e, new T(s, n, {
                            type: o
                        }));
                    });
                });
                const r = new Promise((e, t)=>{
                    A.on("finish", e), A.on("error", (e)=>t(new TypeError(e)));
                });
                if (null !== this.body) for await (const e of F(this[g].body))A.write(e);
                return A.end(), await r, t;
            }
            if (/application\/x-www-form-urlencoded/.test(t)) {
                let e;
                try {
                    let t = "";
                    const A = new TextDecoder("utf-8", {
                        ignoreBOM: !0
                    });
                    for await (const e of F(this[g].body)){
                        if (!p(e)) throw new TypeError("Expected Uint8Array chunk");
                        t += A.decode(e, {
                            stream: !0
                        });
                    }
                    t += A.decode(), e = new URLSearchParams(t);
                } catch (e) {
                    throw Object.assign(new TypeError, {
                        cause: e
                    });
                }
                const t = new u;
                for (const [A, n] of e)t.append(A, n);
                return t;
            }
            throw await Promise.resolve(), v(this[g]), E.errors.exception({
                header: `${e.name}.formData`,
                message: "Could not parse content as FormData."
            });
        }
    };
}
async function U(e, t, A) {
    if (E.brandCheck(e, A), v(e[g]), null != (n = e[g].body) && (n.stream.locked || r.isDisturbed(n.stream))) throw new TypeError("Body is unusable");
    var n;
    const o = c(), s = (e)=>o.reject(e), i = (e)=>{
        try {
            o.resolve(t(e));
        } catch (e) {
            s(e);
        }
    };
    return null == e[g].body ? (i(new Uint8Array), o.promise) : (await l(e[g].body, i, s), o.promise);
}
function L(e) {
    if (0 === e.length) return "";
    239 === e[0] && 187 === e[1] && 191 === e[2] && (e = e.subarray(3));
    return S.decode(e);
}
function _(e) {
    return JSON.parse(L(e));
}
module.exports = {
    extractBody: R,
    safelyExtractBody: function(e, t = !1) {
        return N || (N = require("./module-3774.js").ReadableStream), e instanceof N && (f(!r.isDisturbed(e), "The body has already been consumed."), f(!e.locked, "The stream is locked.")), R(e, t);
    },
    cloneBody: function(e) {
        const [t, A] = e.stream.tee(), n = d(A, {
            transfer: [
                A
            ]
        }), [, r] = n.tee();
        return e.stream = t, {
            stream: r,
            length: e.length,
            source: e.source
        };
    },
    mixinBody: function(e) {
        Object.assign(e.prototype, M(e));
    }
};
