"use strict";
const r = require("./module-76333.js"), s = require("./module-9361.js"), { ReadableStreamFrom: o, isBlobLike: n, isReadableStreamLike: i, readableStreamClose: E, createDeferredPromise: Q, fullyReadBody: g } = require("./module-75728.js"), { FormData: C } = require("./module-81606.js"), { kState: B } = require("./module-35899.js"), { webidl: a } = require("./module-48005.js"), { DOMException: I, structuredClone: c } = require("./module-96687.js"), { Blob: h, File: l } = require(20181), { kBodyUsed: u } = require("./module-58832.js"), d = require(42613), { isErrored: f } = require("./module-9361.js"), { isUint8Array: y, isArrayBuffer: D } = require(98253), { File: R } = require("./module-13322.js"), { parseMIMEType: w, serializeAMimeType: p } = require("./module-3631.js");
let k;
try {
    const A = require(77598);
    k = (e)=>A.randomInt(0, e);
} catch  {
    k = (A)=>Math.floor(Math.random(A));
}
let F = globalThis.ReadableStream;
const N = l ?? R, b = new TextEncoder, S = new TextDecoder;
function m(A, e = !1) {
    F || (F = require(63774).ReadableStream);
    let r = null;
    r = A instanceof F ? A : n(A) ? A.stream() : new F({
        async pull (A) {
            A.enqueue("string" == typeof g ? b.encode(g) : g), queueMicrotask(()=>E(A));
        },
        start () {},
        type: void 0
    }), d(i(r));
    let Q = null, g = null, C = null, B = null;
    if ("string" == typeof A) g = A, B = "text/plain;charset=UTF-8";
    else if (A instanceof URLSearchParams) g = A.toString(), B = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (D(A)) g = new Uint8Array(A.slice());
    else if (ArrayBuffer.isView(A)) g = new Uint8Array(A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength));
    else if (s.isFormDataLike(A)) {
        const e = `----formdata-undici-0${`${k(1e11)}`.padStart(11, "0")}`, t = `--${e}\r\nContent-Disposition: form-data`, r = (A)=>A.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s = (A)=>A.replace(/\r?\n|\r/g, "\r\n"), o = [], n = new Uint8Array([
            13,
            10
        ]);
        C = 0;
        let i = !1;
        for (const [e, E] of A)if ("string" == typeof E) {
            const A = b.encode(t + `; name="${r(s(e))}"` + `\r\n\r\n${s(E)}\r\n`);
            o.push(A), C += A.byteLength;
        } else {
            const A = b.encode(`${t}; name="${r(s(e))}"` + (E.name ? `; filename="${r(E.name)}"` : "") + "\r\n" + `Content-Type: ${E.type || "application/octet-stream"}\r\n\r\n`);
            o.push(A, E, n), "number" == typeof E.size ? C += A.byteLength + E.size + n.byteLength : i = !0;
        }
        const E = b.encode(`--${e}--`);
        o.push(E), C += E.byteLength, i && (C = null), g = A, Q = async function*() {
            for (const A of o)A.stream ? yield* A.stream() : yield A;
        }, B = "multipart/form-data; boundary=" + e;
    } else if (n(A)) g = A, C = A.size, A.type && (B = A.type);
    else if ("function" == typeof A[Symbol.asyncIterator]) {
        if (e) throw new TypeError("keepalive");
        if (s.isDisturbed(A) || A.locked) throw new TypeError("Response body object should not be disturbed or locked");
        r = A instanceof F ? A : o(A);
    }
    if (("string" == typeof g || s.isBuffer(g)) && (C = Buffer.byteLength(g)), null != Q) {
        let e;
        r = new F({
            async start () {
                e = Q(A)[Symbol.asyncIterator]();
            },
            async pull (A) {
                const { value: t, done: s } = await e.next();
                return s ? queueMicrotask(()=>{
                    A.close();
                }) : f(r) || A.enqueue(new Uint8Array(t)), A.desiredSize > 0;
            },
            async cancel (A) {
                await e.return();
            },
            type: void 0
        });
    }
    return [
        {
            stream: r,
            source: g,
            length: C
        },
        B
    ];
}
async function* U(A) {
    if (A) if (y(A)) yield A;
    else {
        const e = A.stream;
        if (s.isDisturbed(e)) throw new TypeError("The body has already been consumed.");
        if (e.locked) throw new TypeError("The stream is locked.");
        e[u] = !0, yield* e;
    }
}
function L(A) {
    if (A.aborted) throw new I("The operation was aborted.", "AbortError");
}
function M(A) {
    return {
        blob () {
            return Y(this, (A)=>{
                let e = function(A) {
                    const { headersList: e } = A[B], t = e.get("content-type");
                    if (null === t) return "failure";
                    return w(t);
                }(this);
                return "failure" === e ? e = "" : e && (e = p(e)), new h([
                    A
                ], {
                    type: e
                });
            }, A);
        },
        arrayBuffer () {
            return Y(this, (A)=>new Uint8Array(A).buffer, A);
        },
        text () {
            return Y(this, T, A);
        },
        json () {
            return Y(this, J, A);
        },
        async formData () {
            a.brandCheck(this, A), L(this[B]);
            const e = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(e)) {
                const A = {};
                for (const [e, t] of this.headers)A[e.toLowerCase()] = t;
                const e = new C;
                let t;
                try {
                    t = new r({
                        headers: A,
                        preservePath: !0
                    });
                } catch (A) {
                    throw new I(`${A}`, "AbortError");
                }
                t.on("field", (A, t)=>{
                    e.append(A, t);
                }), t.on("file", (A, t, r, s, o)=>{
                    const n = [];
                    if ("base64" === s || "base64" === s.toLowerCase()) {
                        let s = "";
                        t.on("data", (A)=>{
                            s += A.toString().replace(/[\r\n]/gm, "");
                            const e = s.length - s.length % 4;
                            n.push(Buffer.from(s.slice(0, e), "base64")), s = s.slice(e);
                        }), t.on("end", ()=>{
                            n.push(Buffer.from(s, "base64")), e.append(A, new N(n, r, {
                                type: o
                            }));
                        });
                    } else t.on("data", (A)=>{
                        n.push(A);
                    }), t.on("end", ()=>{
                        e.append(A, new N(n, r, {
                            type: o
                        }));
                    });
                });
                const s = new Promise((A, e)=>{
                    t.on("finish", A), t.on("error", (A)=>e(new TypeError(A)));
                });
                if (null !== this.body) for await (const A of U(this[B].body))t.write(A);
                return t.end(), await s, e;
            }
            if (/application\/x-www-form-urlencoded/.test(e)) {
                let A;
                try {
                    let e = "";
                    const t = new TextDecoder("utf-8", {
                        ignoreBOM: !0
                    });
                    for await (const A of U(this[B].body)){
                        if (!y(A)) throw new TypeError("Expected Uint8Array chunk");
                        e += t.decode(A, {
                            stream: !0
                        });
                    }
                    e += t.decode(), A = new URLSearchParams(e);
                } catch (A) {
                    throw Object.assign(new TypeError, {
                        cause: A
                    });
                }
                const e = new C;
                for (const [t, r] of A)e.append(t, r);
                return e;
            }
            throw await Promise.resolve(), L(this[B]), a.errors.exception({
                header: `${A.name}.formData`,
                message: "Could not parse content as FormData."
            });
        }
    };
}
async function Y(A, e, t) {
    if (a.brandCheck(A, t), L(A[B]), null != (r = A[B].body) && (r.stream.locked || s.isDisturbed(r.stream))) throw new TypeError("Body is unusable");
    var r;
    const o = Q(), n = (A)=>o.reject(A), i = (A)=>{
        try {
            o.resolve(e(A));
        } catch (A) {
            n(A);
        }
    };
    return null == A[B].body ? (i(new Uint8Array), o.promise) : (await g(A[B].body, i, n), o.promise);
}
function T(A) {
    if (0 === A.length) return "";
    239 === A[0] && 187 === A[1] && 191 === A[2] && (A = A.subarray(3));
    return S.decode(A);
}
function J(A) {
    return JSON.parse(T(A));
}
module.exports = {
    extractBody: m,
    safelyExtractBody: function(A, e = !1) {
        return F || (F = require(63774).ReadableStream), A instanceof F && (d(!s.isDisturbed(A), "The body has already been consumed."), d(!A.locked, "The stream is locked.")), m(A, e);
    },
    cloneBody: function(A) {
        const [e, t] = A.stream.tee(), r = c(t, {
            transfer: [
                t
            ]
        }), [, s] = r.tee();
        return A.stream = e, {
            stream: s,
            length: A.length,
            source: A.source
        };
    },
    mixinBody: function(A) {
        Object.assign(A.prototype, M(A));
    }
};
