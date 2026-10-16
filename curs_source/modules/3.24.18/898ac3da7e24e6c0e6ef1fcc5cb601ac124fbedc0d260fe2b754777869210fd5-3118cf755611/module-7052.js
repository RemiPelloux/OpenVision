"use strict";
const t = require("./module-6333.js"), s = require("./module-9361.js"), { ReadableStreamFrom: o, isBlobLike: r, isReadableStreamLike: i, readableStreamClose: A, createDeferredPromise: l, fullyReadBody: c } = require("./module-5728.js"), { FormData: m } = require("./module-1606.js"), { kState: d } = require("./module-5899.js"), { webidl: g } = require("./module-8005.js"), { DOMException: u, structuredClone: E } = require("./module-6687.js"), { Blob: p, File: T } = require("./module-181.js"), { kBodyUsed: k } = require("./module-8832.js"), I = require("./module-2613.js"), { isErrored: h } = require("./module-9361.js"), { isUint8Array: _, isArrayBuffer: C } = require("./module-8253.js"), { File: f } = require("./module-3322.js"), { parseMIMEType: B, serializeAMimeType: Q } = require("./module-3631.js");
let y;
try {
    const e = require("./module-7598.js");
    y = (n)=>e.randomInt(0, n);
} catch  {
    y = (e)=>Math.floor(Math.random(e));
}
let R = globalThis.ReadableStream;
const N = T ?? f, v = new TextEncoder, S = new TextDecoder;
function D(e, n = !1) {
    R || (R = require("./module-3774.js").ReadableStream);
    let t = null;
    t = e instanceof R ? e : r(e) ? e.stream() : new R({
        async pull (e) {
            e.enqueue("string" == typeof c ? v.encode(c) : c), queueMicrotask(()=>A(e));
        },
        start () {},
        type: void 0
    }), I(i(t));
    let l = null, c = null, m = null, d = null;
    if ("string" == typeof e) c = e, d = "text/plain;charset=UTF-8";
    else if (e instanceof URLSearchParams) c = e.toString(), d = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (C(e)) c = new Uint8Array(e.slice());
    else if (ArrayBuffer.isView(e)) c = new Uint8Array(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength));
    else if (s.isFormDataLike(e)) {
        const n = `----formdata-undici-0${`${y(1e11)}`.padStart(11, "0")}`, a = `--${n}\r\nContent-Disposition: form-data`, t = (e)=>e.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s = (e)=>e.replace(/\r?\n|\r/g, "\r\n"), o = [], r = new Uint8Array([
            13,
            10
        ]);
        m = 0;
        let i = !1;
        for (const [n, A] of e)if ("string" == typeof A) {
            const e = v.encode(a + `; name="${t(s(n))}"` + `\r\n\r\n${s(A)}\r\n`);
            o.push(e), m += e.byteLength;
        } else {
            const e = v.encode(`${a}; name="${t(s(n))}"` + (A.name ? `; filename="${t(A.name)}"` : "") + "\r\n" + `Content-Type: ${A.type || "application/octet-stream"}\r\n\r\n`);
            o.push(e, A, r), "number" == typeof A.size ? m += e.byteLength + A.size + r.byteLength : i = !0;
        }
        const A = v.encode(`--${n}--`);
        o.push(A), m += A.byteLength, i && (m = null), c = e, l = async function*() {
            for (const e of o)e.stream ? yield* e.stream() : yield e;
        }, d = "multipart/form-data; boundary=" + n;
    } else if (r(e)) c = e, m = e.size, e.type && (d = e.type);
    else if ("function" == typeof e[Symbol.asyncIterator]) {
        if (n) throw new TypeError("keepalive");
        if (s.isDisturbed(e) || e.locked) throw new TypeError("Response body object should not be disturbed or locked");
        t = e instanceof R ? e : o(e);
    }
    if (("string" == typeof c || s.isBuffer(c)) && (m = Buffer.byteLength(c)), null != l) {
        let n;
        t = new R({
            async start () {
                n = l(e)[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { value: a, done: s } = await n.next();
                return s ? queueMicrotask(()=>{
                    e.close();
                }) : h(t) || e.enqueue(new Uint8Array(a)), e.desiredSize > 0;
            },
            async cancel (e) {
                await n.return();
            },
            type: void 0
        });
    }
    return [
        {
            stream: t,
            source: c,
            length: m
        },
        d
    ];
}
async function* w(e) {
    if (e) if (_(e)) yield e;
    else {
        const n = e.stream;
        if (s.isDisturbed(n)) throw new TypeError("The body has already been consumed.");
        if (n.locked) throw new TypeError("The stream is locked.");
        n[k] = !0, yield* n;
    }
}
function b(e) {
    if (e.aborted) throw new u("The operation was aborted.", "AbortError");
}
function M(e) {
    return {
        blob () {
            return F(this, (e)=>{
                let n = function(e) {
                    const { headersList: n } = e[d], a = n.get("content-type");
                    if (null === a) return "failure";
                    return B(a);
                }(this);
                return "failure" === n ? n = "" : n && (n = Q(n)), new p([
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
            g.brandCheck(this, e), b(this[d]);
            const n = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(n)) {
                const e = {};
                for (const [n, a] of this.headers)e[n.toLowerCase()] = a;
                const n = new m;
                let a;
                try {
                    a = new t({
                        headers: e,
                        preservePath: !0
                    });
                } catch (e) {
                    throw new u(`${e}`, "AbortError");
                }
                a.on("field", (e, a)=>{
                    n.append(e, a);
                }), a.on("file", (e, a, t, s, o)=>{
                    const r = [];
                    if ("base64" === s || "base64" === s.toLowerCase()) {
                        let s = "";
                        a.on("data", (e)=>{
                            s += e.toString().replace(/[\r\n]/gm, "");
                            const n = s.length - s.length % 4;
                            r.push(Buffer.from(s.slice(0, n), "base64")), s = s.slice(n);
                        }), a.on("end", ()=>{
                            r.push(Buffer.from(s, "base64")), n.append(e, new N(r, t, {
                                type: o
                            }));
                        });
                    } else a.on("data", (e)=>{
                        r.push(e);
                    }), a.on("end", ()=>{
                        n.append(e, new N(r, t, {
                            type: o
                        }));
                    });
                });
                const s = new Promise((e, n)=>{
                    a.on("finish", e), a.on("error", (e)=>n(new TypeError(e)));
                });
                if (null !== this.body) for await (const e of w(this[d].body))a.write(e);
                return a.end(), await s, n;
            }
            if (/application\/x-www-form-urlencoded/.test(n)) {
                let e;
                try {
                    let n = "";
                    const a = new TextDecoder("utf-8", {
                        ignoreBOM: !0
                    });
                    for await (const e of w(this[d].body)){
                        if (!_(e)) throw new TypeError("Expected Uint8Array chunk");
                        n += a.decode(e, {
                            stream: !0
                        });
                    }
                    n += a.decode(), e = new URLSearchParams(n);
                } catch (e) {
                    throw Object.assign(new TypeError, {
                        cause: e
                    });
                }
                const n = new m;
                for (const [a, t] of e)n.append(a, t);
                return n;
            }
            throw await Promise.resolve(), b(this[d]), g.errors.exception({
                header: `${e.name}.formData`,
                message: "Could not parse content as FormData."
            });
        }
    };
}
async function F(e, n, a) {
    if (g.brandCheck(e, a), b(e[d]), null != (t = e[d].body) && (t.stream.locked || s.isDisturbed(t.stream))) throw new TypeError("Body is unusable");
    var t;
    const o = l(), r = (e)=>o.reject(e), i = (e)=>{
        try {
            o.resolve(n(e));
        } catch (e) {
            r(e);
        }
    };
    return null == e[d].body ? (i(new Uint8Array), o.promise) : (await c(e[d].body, i, r), o.promise);
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
    extractBody: D,
    safelyExtractBody: function(e, n = !1) {
        return R || (R = require("./module-3774.js").ReadableStream), e instanceof R && (I(!s.isDisturbed(e), "The body has already been consumed."), I(!e.locked, "The stream is locked.")), D(e, n);
    },
    cloneBody: function(e) {
        const [n, a] = e.stream.tee(), t = E(a, {
            transfer: [
                a
            ]
        }), [, s] = t.tee();
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
