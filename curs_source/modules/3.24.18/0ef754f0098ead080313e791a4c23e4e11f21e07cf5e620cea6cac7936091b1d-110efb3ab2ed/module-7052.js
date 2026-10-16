"use strict";
const t = require("./module-6333.js"), s = require("./module-9361.js"), { ReadableStreamFrom: o, isBlobLike: r, isReadableStreamLike: i, readableStreamClose: l, createDeferredPromise: d, fullyReadBody: m } = require("./module-5728.js"), { FormData: c } = require("./module-1606.js"), { kState: p } = require("./module-5899.js"), { webidl: A } = require("./module-8005.js"), { DOMException: u, structuredClone: g } = require("./module-6687.js"), { Blob: T, File: h } = require("./module-181.js"), { kBodyUsed: k } = require("./module-8832.js"), _ = require("./module-2613.js"), { isErrored: E } = require("./module-9361.js"), { isUint8Array: f, isArrayBuffer: C } = require("./module-8253.js"), { File: I } = require("./module-3322.js"), { parseMIMEType: v, serializeAMimeType: y } = require("./module-3631.js");
let S;
try {
    const e = require("./module-7598.js");
    S = (a)=>e.randomInt(0, a);
} catch  {
    S = (e)=>Math.floor(Math.random(e));
}
let R = globalThis.ReadableStream;
const N = h ?? I, B = new TextEncoder, w = new TextDecoder;
function b(e, a = !1) {
    R || (R = require("./module-3774.js").ReadableStream);
    let t = null;
    t = e instanceof R ? e : r(e) ? e.stream() : new R({
        async pull (e) {
            e.enqueue("string" == typeof m ? B.encode(m) : m), queueMicrotask(()=>l(e));
        },
        start () {},
        type: void 0
    }), _(i(t));
    let d = null, m = null, c = null, p = null;
    if ("string" == typeof e) m = e, p = "text/plain;charset=UTF-8";
    else if (e instanceof URLSearchParams) m = e.toString(), p = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (C(e)) m = new Uint8Array(e.slice());
    else if (ArrayBuffer.isView(e)) m = new Uint8Array(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength));
    else if (s.isFormDataLike(e)) {
        const a = `----formdata-undici-0${`${S(1e11)}`.padStart(11, "0")}`, n = `--${a}\r\nContent-Disposition: form-data`, t = (e)=>e.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s = (e)=>e.replace(/\r?\n|\r/g, "\r\n"), o = [], r = new Uint8Array([
            13,
            10
        ]);
        c = 0;
        let i = !1;
        for (const [a, l] of e)if ("string" == typeof l) {
            const e = B.encode(n + `; name="${t(s(a))}"` + `\r\n\r\n${s(l)}\r\n`);
            o.push(e), c += e.byteLength;
        } else {
            const e = B.encode(`${n}; name="${t(s(a))}"` + (l.name ? `; filename="${t(l.name)}"` : "") + "\r\n" + `Content-Type: ${l.type || "application/octet-stream"}\r\n\r\n`);
            o.push(e, l, r), "number" == typeof l.size ? c += e.byteLength + l.size + r.byteLength : i = !0;
        }
        const l = B.encode(`--${a}--`);
        o.push(l), c += l.byteLength, i && (c = null), m = e, d = async function*() {
            for (const e of o)e.stream ? yield* e.stream() : yield e;
        }, p = "multipart/form-data; boundary=" + a;
    } else if (r(e)) m = e, c = e.size, e.type && (p = e.type);
    else if ("function" == typeof e[Symbol.asyncIterator]) {
        if (a) throw new TypeError("keepalive");
        if (s.isDisturbed(e) || e.locked) throw new TypeError("Response body object should not be disturbed or locked");
        t = e instanceof R ? e : o(e);
    }
    if (("string" == typeof m || s.isBuffer(m)) && (c = Buffer.byteLength(m)), null != d) {
        let a;
        t = new R({
            async start () {
                a = d(e)[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { value: n, done: s } = await a.next();
                return s ? queueMicrotask(()=>{
                    e.close();
                }) : E(t) || e.enqueue(new Uint8Array(n)), e.desiredSize > 0;
            },
            async cancel (e) {
                await a.return();
            },
            type: void 0
        });
    }
    return [
        {
            stream: t,
            source: m,
            length: c
        },
        p
    ];
}
async function* Q(e) {
    if (e) if (f(e)) yield e;
    else {
        const a = e.stream;
        if (s.isDisturbed(a)) throw new TypeError("The body has already been consumed.");
        if (a.locked) throw new TypeError("The stream is locked.");
        a[k] = !0, yield* a;
    }
}
function D(e) {
    if (e.aborted) throw new u("The operation was aborted.", "AbortError");
}
function M(e) {
    return {
        blob () {
            return O(this, (e)=>{
                let a = function(e) {
                    const { headersList: a } = e[p], n = a.get("content-type");
                    if (null === n) return "failure";
                    return v(n);
                }(this);
                return "failure" === a ? a = "" : a && (a = y(a)), new T([
                    e
                ], {
                    type: a
                });
            }, e);
        },
        arrayBuffer () {
            return O(this, (e)=>new Uint8Array(e).buffer, e);
        },
        text () {
            return O(this, U, e);
        },
        json () {
            return O(this, F, e);
        },
        async formData () {
            A.brandCheck(this, e), D(this[p]);
            const a = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(a)) {
                const e = {};
                for (const [a, n] of this.headers)e[a.toLowerCase()] = n;
                const a = new c;
                let n;
                try {
                    n = new t({
                        headers: e,
                        preservePath: !0
                    });
                } catch (e) {
                    throw new u(`${e}`, "AbortError");
                }
                n.on("field", (e, n)=>{
                    a.append(e, n);
                }), n.on("file", (e, n, t, s, o)=>{
                    const r = [];
                    if ("base64" === s || "base64" === s.toLowerCase()) {
                        let s = "";
                        n.on("data", (e)=>{
                            s += e.toString().replace(/[\r\n]/gm, "");
                            const a = s.length - s.length % 4;
                            r.push(Buffer.from(s.slice(0, a), "base64")), s = s.slice(a);
                        }), n.on("end", ()=>{
                            r.push(Buffer.from(s, "base64")), a.append(e, new N(r, t, {
                                type: o
                            }));
                        });
                    } else n.on("data", (e)=>{
                        r.push(e);
                    }), n.on("end", ()=>{
                        a.append(e, new N(r, t, {
                            type: o
                        }));
                    });
                });
                const s = new Promise((e, a)=>{
                    n.on("finish", e), n.on("error", (e)=>a(new TypeError(e)));
                });
                if (null !== this.body) for await (const e of Q(this[p].body))n.write(e);
                return n.end(), await s, a;
            }
            if (/application\/x-www-form-urlencoded/.test(a)) {
                let e;
                try {
                    let a = "";
                    const n = new TextDecoder("utf-8", {
                        ignoreBOM: !0
                    });
                    for await (const e of Q(this[p].body)){
                        if (!f(e)) throw new TypeError("Expected Uint8Array chunk");
                        a += n.decode(e, {
                            stream: !0
                        });
                    }
                    a += n.decode(), e = new URLSearchParams(a);
                } catch (e) {
                    throw Object.assign(new TypeError, {
                        cause: e
                    });
                }
                const a = new c;
                for (const [n, t] of e)a.append(n, t);
                return a;
            }
            throw await Promise.resolve(), D(this[p]), A.errors.exception({
                header: `${e.name}.formData`,
                message: "Could not parse content as FormData."
            });
        }
    };
}
async function O(e, a, n) {
    if (A.brandCheck(e, n), D(e[p]), null != (t = e[p].body) && (t.stream.locked || s.isDisturbed(t.stream))) throw new TypeError("Body is unusable");
    var t;
    const o = d(), r = (e)=>o.reject(e), i = (e)=>{
        try {
            o.resolve(a(e));
        } catch (e) {
            r(e);
        }
    };
    return null == e[p].body ? (i(new Uint8Array), o.promise) : (await m(e[p].body, i, r), o.promise);
}
function U(e) {
    if (0 === e.length) return "";
    239 === e[0] && 187 === e[1] && 191 === e[2] && (e = e.subarray(3));
    return w.decode(e);
}
function F(e) {
    return JSON.parse(U(e));
}
module.exports = {
    extractBody: b,
    safelyExtractBody: function(e, a = !1) {
        return R || (R = require("./module-3774.js").ReadableStream), e instanceof R && (_(!s.isDisturbed(e), "The body has already been consumed."), _(!e.locked, "The stream is locked.")), b(e, a);
    },
    cloneBody: function(e) {
        const [a, n] = e.stream.tee(), t = g(n, {
            transfer: [
                n
            ]
        }), [, s] = t.tee();
        return e.stream = a, {
            stream: s,
            length: e.length,
            source: e.source
        };
    },
    mixinBody: function(e) {
        Object.assign(e.prototype, M(e));
    }
};
