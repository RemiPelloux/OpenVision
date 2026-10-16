"use strict";
const n = require("./module-6333.js"), r = require("./module-9361.js"), { ReadableStreamFrom: o, isBlobLike: s, isReadableStreamLike: a, readableStreamClose: i, createDeferredPromise: c, fullyReadBody: l } = require("./module-5728.js"), { FormData: g } = require("./module-1606.js"), { kState: E } = require("./module-5899.js"), { webidl: u } = require("./module-8005.js"), { DOMException: d, structuredClone: I } = require("./module-6687.js"), { Blob: h, File: Q } = require("./module-181.js"), { kBodyUsed: m } = require("./module-8832.js"), C = require("./module-2613.js"), { isErrored: B } = require("./module-9361.js"), { isUint8Array: p, isArrayBuffer: f } = require("./module-8253.js"), { File: y } = require("./module-3322.js"), { parseMIMEType: T, serializeAMimeType: k } = require("./module-3631.js");
let w;
try {
    const e = require("./module-7598.js");
    w = (A)=>e.randomInt(0, A);
} catch  {
    w = (e)=>Math.floor(Math.random(e));
}
let N = globalThis.ReadableStream;
const D = Q ?? y, R = new TextEncoder, S = new TextDecoder;
function b(e, A = !1) {
    N || (N = require("./module-3774.js").ReadableStream);
    let n = null;
    n = e instanceof N ? e : s(e) ? e.stream() : new N({
        async pull (e) {
            e.enqueue("string" == typeof l ? R.encode(l) : l), queueMicrotask(()=>i(e));
        },
        start () {},
        type: void 0
    }), C(a(n));
    let c = null, l = null, g = null, E = null;
    if ("string" == typeof e) l = e, E = "text/plain;charset=UTF-8";
    else if (e instanceof URLSearchParams) l = e.toString(), E = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (f(e)) l = new Uint8Array(e.slice());
    else if (ArrayBuffer.isView(e)) l = new Uint8Array(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength));
    else if (r.isFormDataLike(e)) {
        const A = `----formdata-undici-0${`${w(1e11)}`.padStart(11, "0")}`, t = `--${A}\r\nContent-Disposition: form-data`, n = (e)=>e.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), r = (e)=>e.replace(/\r?\n|\r/g, "\r\n"), o = [], s = new Uint8Array([
            13,
            10
        ]);
        g = 0;
        let a = !1;
        for (const [A, i] of e)if ("string" == typeof i) {
            const e = R.encode(t + `; name="${n(r(A))}"` + `\r\n\r\n${r(i)}\r\n`);
            o.push(e), g += e.byteLength;
        } else {
            const e = R.encode(`${t}; name="${n(r(A))}"` + (i.name ? `; filename="${n(i.name)}"` : "") + "\r\n" + `Content-Type: ${i.type || "application/octet-stream"}\r\n\r\n`);
            o.push(e, i, s), "number" == typeof i.size ? g += e.byteLength + i.size + s.byteLength : a = !0;
        }
        const i = R.encode(`--${A}--`);
        o.push(i), g += i.byteLength, a && (g = null), l = e, c = async function*() {
            for (const e of o)e.stream ? yield* e.stream() : yield e;
        }, E = "multipart/form-data; boundary=" + A;
    } else if (s(e)) l = e, g = e.size, e.type && (E = e.type);
    else if ("function" == typeof e[Symbol.asyncIterator]) {
        if (A) throw new TypeError("keepalive");
        if (r.isDisturbed(e) || e.locked) throw new TypeError("Response body object should not be disturbed or locked");
        n = e instanceof N ? e : o(e);
    }
    if (("string" == typeof l || r.isBuffer(l)) && (g = Buffer.byteLength(l)), null != c) {
        let A;
        n = new N({
            async start () {
                A = c(e)[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { value: t, done: r } = await A.next();
                return r ? queueMicrotask(()=>{
                    e.close();
                }) : B(n) || e.enqueue(new Uint8Array(t)), e.desiredSize > 0;
            },
            async cancel (e) {
                await A.return();
            },
            type: void 0
        });
    }
    return [
        {
            stream: n,
            source: l,
            length: g
        },
        E
    ];
}
async function* F(e) {
    if (e) if (p(e)) yield e;
    else {
        const A = e.stream;
        if (r.isDisturbed(A)) throw new TypeError("The body has already been consumed.");
        if (A.locked) throw new TypeError("The stream is locked.");
        A[m] = !0, yield* A;
    }
}
function _(e) {
    if (e.aborted) throw new d("The operation was aborted.", "AbortError");
}
function v(e) {
    return {
        blob () {
            return L(this, (e)=>{
                let A = function(e) {
                    const { headersList: A } = e[E], t = A.get("content-type");
                    if (null === t) return "failure";
                    return T(t);
                }(this);
                return "failure" === A ? A = "" : A && (A = k(A)), new h([
                    e
                ], {
                    type: A
                });
            }, e);
        },
        arrayBuffer () {
            return L(this, (e)=>new Uint8Array(e).buffer, e);
        },
        text () {
            return L(this, U, e);
        },
        json () {
            return L(this, M, e);
        },
        async formData () {
            u.brandCheck(this, e), _(this[E]);
            const A = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(A)) {
                const e = {};
                for (const [A, t] of this.headers)e[A.toLowerCase()] = t;
                const A = new g;
                let t;
                try {
                    t = new n({
                        headers: e,
                        preservePath: !0
                    });
                } catch (e) {
                    throw new d(`${e}`, "AbortError");
                }
                t.on("field", (e, t)=>{
                    A.append(e, t);
                }), t.on("file", (e, t, n, r, o)=>{
                    const s = [];
                    if ("base64" === r || "base64" === r.toLowerCase()) {
                        let r = "";
                        t.on("data", (e)=>{
                            r += e.toString().replace(/[\r\n]/gm, "");
                            const A = r.length - r.length % 4;
                            s.push(Buffer.from(r.slice(0, A), "base64")), r = r.slice(A);
                        }), t.on("end", ()=>{
                            s.push(Buffer.from(r, "base64")), A.append(e, new D(s, n, {
                                type: o
                            }));
                        });
                    } else t.on("data", (e)=>{
                        s.push(e);
                    }), t.on("end", ()=>{
                        A.append(e, new D(s, n, {
                            type: o
                        }));
                    });
                });
                const r = new Promise((e, A)=>{
                    t.on("finish", e), t.on("error", (e)=>A(new TypeError(e)));
                });
                if (null !== this.body) for await (const e of F(this[E].body))t.write(e);
                return t.end(), await r, A;
            }
            if (/application\/x-www-form-urlencoded/.test(A)) {
                let e;
                try {
                    let A = "";
                    const t = new TextDecoder("utf-8", {
                        ignoreBOM: !0
                    });
                    for await (const e of F(this[E].body)){
                        if (!p(e)) throw new TypeError("Expected Uint8Array chunk");
                        A += t.decode(e, {
                            stream: !0
                        });
                    }
                    A += t.decode(), e = new URLSearchParams(A);
                } catch (e) {
                    throw Object.assign(new TypeError, {
                        cause: e
                    });
                }
                const A = new g;
                for (const [t, n] of e)A.append(t, n);
                return A;
            }
            throw await Promise.resolve(), _(this[E]), u.errors.exception({
                header: `${e.name}.formData`,
                message: "Could not parse content as FormData."
            });
        }
    };
}
async function L(e, A, t) {
    if (u.brandCheck(e, t), _(e[E]), null != (n = e[E].body) && (n.stream.locked || r.isDisturbed(n.stream))) throw new TypeError("Body is unusable");
    var n;
    const o = c(), s = (e)=>o.reject(e), a = (e)=>{
        try {
            o.resolve(A(e));
        } catch (e) {
            s(e);
        }
    };
    return null == e[E].body ? (a(new Uint8Array), o.promise) : (await l(e[E].body, a, s), o.promise);
}
function U(e) {
    if (0 === e.length) return "";
    239 === e[0] && 187 === e[1] && 191 === e[2] && (e = e.subarray(3));
    return S.decode(e);
}
function M(e) {
    return JSON.parse(U(e));
}
module.exports = {
    extractBody: b,
    safelyExtractBody: function(e, A = !1) {
        return N || (N = require("./module-3774.js").ReadableStream), e instanceof N && (C(!r.isDisturbed(e), "The body has already been consumed."), C(!e.locked, "The stream is locked.")), b(e, A);
    },
    cloneBody: function(e) {
        const [A, t] = e.stream.tee(), n = I(t, {
            transfer: [
                t
            ]
        }), [, r] = n.tee();
        return e.stream = A, {
            stream: r,
            length: e.length,
            source: e.source
        };
    },
    mixinBody: function(e) {
        Object.assign(e.prototype, v(e));
    }
};
