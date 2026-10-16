"use strict";
const n = require("./module-3097.js"), s = require("./module-3589.js"), { ReadableStreamFrom: i, isBlobLike: o, isReadableStreamLike: a, readableStreamClose: u, createDeferredPromise: c, fullyReadBody: l } = require("./module-8116.js"), { FormData: m } = require("./module-6522.js"), { kState: d } = require("./module-7271.js"), { webidl: f } = require("./module-8193.js"), { DOMException: p, structuredClone: h } = require("./module-2955.js"), { Blob: g, File: A } = require("./module-181.js"), { kBodyUsed: _ } = require("./module-5532.js"), y = require("./module-2613.js"), { isErrored: w } = require("./module-3589.js"), { isUint8Array: S, isArrayBuffer: J } = require("./module-8253.js"), { File: B } = require("./module-8142.js"), { parseMIMEType: E, serializeAMimeType: I } = require("./module-4387.js");
let C;
try {
    const t = require("./module-7598.js");
    C = (e)=>t.randomInt(0, e);
} catch  {
    C = (t)=>Math.floor(Math.random(t));
}
let b = globalThis.ReadableStream;
const k = A ?? B, v = new TextEncoder, q = new TextDecoder;
function R(t, e = !1) {
    b || (b = require("./module-3774.js").ReadableStream);
    let n = null;
    n = t instanceof b ? t : o(t) ? t.stream() : new b({
        async pull (t) {
            t.enqueue("string" == typeof l ? v.encode(l) : l), queueMicrotask(()=>u(t));
        },
        start () {},
        type: void 0
    }), y(a(n));
    let c = null, l = null, m = null, d = null;
    if ("string" == typeof t) l = t, d = "text/plain;charset=UTF-8";
    else if (t instanceof URLSearchParams) l = t.toString(), d = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (J(t)) l = new Uint8Array(t.slice());
    else if (ArrayBuffer.isView(t)) l = new Uint8Array(t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength));
    else if (s.isFormDataLike(t)) {
        const e = `----formdata-undici-0${`${C(1e11)}`.padStart(11, "0")}`, r = `--${e}\r\nContent-Disposition: form-data`, n = (t)=>t.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s = (t)=>t.replace(/\r?\n|\r/g, "\r\n"), i = [], o = new Uint8Array([
            13,
            10
        ]);
        m = 0;
        let a = !1;
        for (const [e, u] of t)if ("string" == typeof u) {
            const t = v.encode(r + `; name="${n(s(e))}"` + `\r\n\r\n${s(u)}\r\n`);
            i.push(t), m += t.byteLength;
        } else {
            const t = v.encode(`${r}; name="${n(s(e))}"` + (u.name ? `; filename="${n(u.name)}"` : "") + "\r\n" + `Content-Type: ${u.type || "application/octet-stream"}\r\n\r\n`);
            i.push(t, u, o), "number" == typeof u.size ? m += t.byteLength + u.size + o.byteLength : a = !0;
        }
        const u = v.encode(`--${e}--`);
        i.push(u), m += u.byteLength, a && (m = null), l = t, c = async function*() {
            for (const t of i)t.stream ? yield* t.stream() : yield t;
        }, d = "multipart/form-data; boundary=" + e;
    } else if (o(t)) l = t, m = t.size, t.type && (d = t.type);
    else if ("function" == typeof t[Symbol.asyncIterator]) {
        if (e) throw new TypeError("keepalive");
        if (s.isDisturbed(t) || t.locked) throw new TypeError("Response body object should not be disturbed or locked");
        n = t instanceof b ? t : i(t);
    }
    if (("string" == typeof l || s.isBuffer(l)) && (m = Buffer.byteLength(l)), null != c) {
        let e;
        n = new b({
            async start () {
                e = c(t)[Symbol.asyncIterator]();
            },
            async pull (t) {
                const { value: r, done: s } = await e.next();
                return s ? queueMicrotask(()=>{
                    t.close();
                }) : w(n) || t.enqueue(new Uint8Array(r)), t.desiredSize > 0;
            },
            async cancel (t) {
                await e.return();
            },
            type: void 0
        });
    }
    return [
        {
            stream: n,
            source: l,
            length: m
        },
        d
    ];
}
async function* P(t) {
    if (t) if (S(t)) yield t;
    else {
        const e = t.stream;
        if (s.isDisturbed(e)) throw new TypeError("The body has already been consumed.");
        if (e.locked) throw new TypeError("The stream is locked.");
        e[_] = !0, yield* e;
    }
}
function T(t) {
    if (t.aborted) throw new p("The operation was aborted.", "AbortError");
}
function x(t) {
    return {
        blob () {
            return N(this, (t)=>{
                let e = function(t) {
                    const { headersList: e } = t[d], r = e.get("content-type");
                    if (null === r) return "failure";
                    return E(r);
                }(this);
                return "failure" === e ? e = "" : e && (e = I(e)), new g([
                    t
                ], {
                    type: e
                });
            }, t);
        },
        arrayBuffer () {
            return N(this, (t)=>new Uint8Array(t).buffer, t);
        },
        text () {
            return N(this, D, t);
        },
        json () {
            return N(this, U, t);
        },
        async formData () {
            f.brandCheck(this, t), T(this[d]);
            const e = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(e)) {
                const t = {};
                for (const [e, r] of this.headers)t[e.toLowerCase()] = r;
                const e = new m;
                let r;
                try {
                    r = new n({
                        headers: t,
                        preservePath: !0
                    });
                } catch (t) {
                    throw new p(`${t}`, "AbortError");
                }
                r.on("field", (t, r)=>{
                    e.append(t, r);
                }), r.on("file", (t, r, n, s, i)=>{
                    const o = [];
                    if ("base64" === s || "base64" === s.toLowerCase()) {
                        let s = "";
                        r.on("data", (t)=>{
                            s += t.toString().replace(/[\r\n]/gm, "");
                            const e = s.length - s.length % 4;
                            o.push(Buffer.from(s.slice(0, e), "base64")), s = s.slice(e);
                        }), r.on("end", ()=>{
                            o.push(Buffer.from(s, "base64")), e.append(t, new k(o, n, {
                                type: i
                            }));
                        });
                    } else r.on("data", (t)=>{
                        o.push(t);
                    }), r.on("end", ()=>{
                        e.append(t, new k(o, n, {
                            type: i
                        }));
                    });
                });
                const s = new Promise((t, e)=>{
                    r.on("finish", t), r.on("error", (t)=>e(new TypeError(t)));
                });
                if (null !== this.body) for await (const t of P(this[d].body))r.write(t);
                return r.end(), await s, e;
            }
            if (/application\/x-www-form-urlencoded/.test(e)) {
                let t;
                try {
                    let e = "";
                    const r = new TextDecoder("utf-8", {
                        ignoreBOM: !0
                    });
                    for await (const t of P(this[d].body)){
                        if (!S(t)) throw new TypeError("Expected Uint8Array chunk");
                        e += r.decode(t, {
                            stream: !0
                        });
                    }
                    e += r.decode(), t = new URLSearchParams(e);
                } catch (t) {
                    throw Object.assign(new TypeError, {
                        cause: t
                    });
                }
                const e = new m;
                for (const [r, n] of t)e.append(r, n);
                return e;
            }
            throw await Promise.resolve(), T(this[d]), f.errors.exception({
                header: `${t.name}.formData`,
                message: "Could not parse content as FormData."
            });
        }
    };
}
async function N(t, e, r) {
    if (f.brandCheck(t, r), T(t[d]), null != (n = t[d].body) && (n.stream.locked || s.isDisturbed(n.stream))) throw new TypeError("Body is unusable");
    var n;
    const i = c(), o = (t)=>i.reject(t), a = (t)=>{
        try {
            i.resolve(e(t));
        } catch (t) {
            o(t);
        }
    };
    return null == t[d].body ? (a(new Uint8Array), i.promise) : (await l(t[d].body, a, o), i.promise);
}
function D(t) {
    if (0 === t.length) return "";
    239 === t[0] && 187 === t[1] && 191 === t[2] && (t = t.subarray(3));
    return q.decode(t);
}
function U(t) {
    return JSON.parse(D(t));
}
module.exports = {
    extractBody: R,
    safelyExtractBody: function(t, e = !1) {
        return b || (b = require("./module-3774.js").ReadableStream), t instanceof b && (y(!s.isDisturbed(t), "The body has already been consumed."), y(!t.locked, "The stream is locked.")), R(t, e);
    },
    cloneBody: function(t) {
        const [e, r] = t.stream.tee(), n = h(r, {
            transfer: [
                r
            ]
        }), [, s] = n.tee();
        return t.stream = e, {
            stream: s,
            length: t.length,
            source: t.source
        };
    },
    mixinBody: function(t) {
        Object.assign(t.prototype, x(t));
    }
};
