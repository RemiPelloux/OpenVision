"use strict";
const a = require("./module-6333.js"), s = require("./module-9361.js"), { ReadableStreamFrom: o, isBlobLike: r, isReadableStreamLike: i, readableStreamClose: A, createDeferredPromise: c, fullyReadBody: l } = require("./module-5728.js"), { FormData: d } = require("./module-1606.js"), { kState: m } = require("./module-5899.js"), { webidl: u } = require("./module-8005.js"), { DOMException: g, structuredClone: p } = require("./module-6687.js"), { Blob: E, File: h } = require("./module-181.js"), { kBodyUsed: T } = require("./module-8832.js"), k = require("./module-2613.js"), { isErrored: f } = require("./module-9361.js"), { isUint8Array: _, isArrayBuffer: I } = require("./module-8253.js"), { File: C } = require("./module-3322.js"), { parseMIMEType: y, serializeAMimeType: B } = require("./module-3631.js");
let Q;
try {
    const e = require("./module-7598.js");
    Q = (n)=>e.randomInt(0, n);
} catch  {
    Q = (e)=>Math.floor(Math.random(e));
}
let v = globalThis.ReadableStream;
const R = h ?? C, N = new TextEncoder, S = new TextDecoder;
function w(e, n = !1) {
    v || (v = require("./module-3774.js").ReadableStream);
    let a = null;
    a = e instanceof v ? e : r(e) ? e.stream() : new v({
        async pull (e) {
            e.enqueue("string" == typeof l ? N.encode(l) : l), queueMicrotask(()=>A(e));
        },
        start () {},
        type: void 0
    }), k(i(a));
    let c = null, l = null, d = null, m = null;
    if ("string" == typeof e) l = e, m = "text/plain;charset=UTF-8";
    else if (e instanceof URLSearchParams) l = e.toString(), m = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (I(e)) l = new Uint8Array(e.slice());
    else if (ArrayBuffer.isView(e)) l = new Uint8Array(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength));
    else if (s.isFormDataLike(e)) {
        const n = `----formdata-undici-0${`${Q(1e11)}`.padStart(11, "0")}`, t = `--${n}\r\nContent-Disposition: form-data`, a = (e)=>e.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s = (e)=>e.replace(/\r?\n|\r/g, "\r\n"), o = [], r = new Uint8Array([
            13,
            10
        ]);
        d = 0;
        let i = !1;
        for (const [n, A] of e)if ("string" == typeof A) {
            const e = N.encode(t + `; name="${a(s(n))}"` + `\r\n\r\n${s(A)}\r\n`);
            o.push(e), d += e.byteLength;
        } else {
            const e = N.encode(`${t}; name="${a(s(n))}"` + (A.name ? `; filename="${a(A.name)}"` : "") + "\r\n" + `Content-Type: ${A.type || "application/octet-stream"}\r\n\r\n`);
            o.push(e, A, r), "number" == typeof A.size ? d += e.byteLength + A.size + r.byteLength : i = !0;
        }
        const A = N.encode(`--${n}--`);
        o.push(A), d += A.byteLength, i && (d = null), l = e, c = async function*() {
            for (const e of o)e.stream ? yield* e.stream() : yield e;
        }, m = "multipart/form-data; boundary=" + n;
    } else if (r(e)) l = e, d = e.size, e.type && (m = e.type);
    else if ("function" == typeof e[Symbol.asyncIterator]) {
        if (n) throw new TypeError("keepalive");
        if (s.isDisturbed(e) || e.locked) throw new TypeError("Response body object should not be disturbed or locked");
        a = e instanceof v ? e : o(e);
    }
    if (("string" == typeof l || s.isBuffer(l)) && (d = Buffer.byteLength(l)), null != c) {
        let n;
        a = new v({
            async start () {
                n = c(e)[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { value: t, done: s } = await n.next();
                return s ? queueMicrotask(()=>{
                    e.close();
                }) : f(a) || e.enqueue(new Uint8Array(t)), e.desiredSize > 0;
            },
            async cancel (e) {
                await n.return();
            },
            type: void 0
        });
    }
    return [
        {
            stream: a,
            source: l,
            length: d
        },
        m
    ];
}
async function* b(e) {
    if (e) if (_(e)) yield e;
    else {
        const n = e.stream;
        if (s.isDisturbed(n)) throw new TypeError("The body has already been consumed.");
        if (n.locked) throw new TypeError("The stream is locked.");
        n[T] = !0, yield* n;
    }
}
function D(e) {
    if (e.aborted) throw new g("The operation was aborted.", "AbortError");
}
function M(e) {
    return {
        blob () {
            return F(this, (e)=>{
                let n = function(e) {
                    const { headersList: n } = e[m], t = n.get("content-type");
                    if (null === t) return "failure";
                    return y(t);
                }(this);
                return "failure" === n ? n = "" : n && (n = B(n)), new E([
                    e
                ], {
                    type: n
                });
            }, e);
        },
        arrayBuffer () {
            return F(this, (e)=>new Uint8Array(e).buffer, e);
        },
        text () {
            return F(this, O, e);
        },
        json () {
            return F(this, U, e);
        },
        async formData () {
            u.brandCheck(this, e), D(this[m]);
            const n = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(n)) {
                const e = {};
                for (const [n, t] of this.headers)e[n.toLowerCase()] = t;
                const n = new d;
                let t;
                try {
                    t = new a({
                        headers: e,
                        preservePath: !0
                    });
                } catch (e) {
                    throw new g(`${e}`, "AbortError");
                }
                t.on("field", (e, t)=>{
                    n.append(e, t);
                }), t.on("file", (e, t, a, s, o)=>{
                    const r = [];
                    if ("base64" === s || "base64" === s.toLowerCase()) {
                        let s = "";
                        t.on("data", (e)=>{
                            s += e.toString().replace(/[\r\n]/gm, "");
                            const n = s.length - s.length % 4;
                            r.push(Buffer.from(s.slice(0, n), "base64")), s = s.slice(n);
                        }), t.on("end", ()=>{
                            r.push(Buffer.from(s, "base64")), n.append(e, new R(r, a, {
                                type: o
                            }));
                        });
                    } else t.on("data", (e)=>{
                        r.push(e);
                    }), t.on("end", ()=>{
                        n.append(e, new R(r, a, {
                            type: o
                        }));
                    });
                });
                const s = new Promise((e, n)=>{
                    t.on("finish", e), t.on("error", (e)=>n(new TypeError(e)));
                });
                if (null !== this.body) for await (const e of b(this[m].body))t.write(e);
                return t.end(), await s, n;
            }
            if (/application\/x-www-form-urlencoded/.test(n)) {
                let e;
                try {
                    let n = "";
                    const t = new TextDecoder("utf-8", {
                        ignoreBOM: !0
                    });
                    for await (const e of b(this[m].body)){
                        if (!_(e)) throw new TypeError("Expected Uint8Array chunk");
                        n += t.decode(e, {
                            stream: !0
                        });
                    }
                    n += t.decode(), e = new URLSearchParams(n);
                } catch (e) {
                    throw Object.assign(new TypeError, {
                        cause: e
                    });
                }
                const n = new d;
                for (const [t, a] of e)n.append(t, a);
                return n;
            }
            throw await Promise.resolve(), D(this[m]), u.errors.exception({
                header: `${e.name}.formData`,
                message: "Could not parse content as FormData."
            });
        }
    };
}
async function F(e, n, t) {
    if (u.brandCheck(e, t), D(e[m]), null != (a = e[m].body) && (a.stream.locked || s.isDisturbed(a.stream))) throw new TypeError("Body is unusable");
    var a;
    const o = c(), r = (e)=>o.reject(e), i = (e)=>{
        try {
            o.resolve(n(e));
        } catch (e) {
            r(e);
        }
    };
    return null == e[m].body ? (i(new Uint8Array), o.promise) : (await l(e[m].body, i, r), o.promise);
}
function O(e) {
    if (0 === e.length) return "";
    239 === e[0] && 187 === e[1] && 191 === e[2] && (e = e.subarray(3));
    return S.decode(e);
}
function U(e) {
    return JSON.parse(O(e));
}
module.exports = {
    extractBody: w,
    safelyExtractBody: function(e, n = !1) {
        return v || (v = require("./module-3774.js").ReadableStream), e instanceof v && (k(!s.isDisturbed(e), "The body has already been consumed."), k(!e.locked, "The stream is locked.")), w(e, n);
    },
    cloneBody: function(e) {
        const [n, t] = e.stream.tee(), a = p(t, {
            transfer: [
                t
            ]
        }), [, s] = a.tee();
        return e.stream = n, {
            stream: s,
            length: e.length,
            source: e.source
        };
    },
    mixinBody: function(e) {
        Object.assign(e.prototype, M(e));
    }
};
