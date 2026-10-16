"use strict";
const n = require("./module-53097.js"), s = require("./module-83589.js"), { ReadableStreamFrom: o, isBlobLike: i, isReadableStreamLike: a, readableStreamClose: c, createDeferredPromise: l, fullyReadBody: u } = require("./module-98116.js"), { FormData: d } = require("./module-66522.js"), { kState: p } = require("./module-77271.js"), { webidl: m } = require("./module-18193.js"), { DOMException: h, structuredClone: f } = require("./module-22955.js"), { Blob: g, File: y } = require("./module-20181.js"), { kBodyUsed: w } = require("./module-15532.js"), v = require("./module-42613.js"), { isErrored: _ } = require("./module-83589.js"), { isUint8Array: A, isArrayBuffer: S } = require("./module-98253.js"), { File: b } = require("./module-18142.js"), { parseMIMEType: E, serializeAMimeType: I } = require("./module-64387.js");
let C;
try {
    const e = require("./module-77598.js");
    C = (t)=>e.randomInt(0, t);
} catch  {
    C = (e)=>Math.floor(Math.random(e));
}
let k = globalThis.ReadableStream;
const x = y ?? b, T = new TextEncoder, R = new TextDecoder;
function B(e, t = !1) {
    k || (k = require("./module-63774.js").ReadableStream);
    let n = null;
    n = e instanceof k ? e : i(e) ? e.stream() : new k({
        async pull (e) {
            e.enqueue("string" == typeof u ? T.encode(u) : u), queueMicrotask(()=>c(e));
        },
        start () {},
        type: void 0
    }), v(a(n));
    let l = null, u = null, d = null, p = null;
    if ("string" == typeof e) u = e, p = "text/plain;charset=UTF-8";
    else if (e instanceof URLSearchParams) u = e.toString(), p = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (S(e)) u = new Uint8Array(e.slice());
    else if (ArrayBuffer.isView(e)) u = new Uint8Array(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength));
    else if (s.isFormDataLike(e)) {
        const t = `----formdata-undici-0${`${C(1e11)}`.padStart(11, "0")}`, r = `--${t}\r\nContent-Disposition: form-data`, n = (e)=>e.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s = (e)=>e.replace(/\r?\n|\r/g, "\r\n"), o = [], i = new Uint8Array([
            13,
            10
        ]);
        d = 0;
        let a = !1;
        for (const [t, c] of e)if ("string" == typeof c) {
            const e = T.encode(r + `; name="${n(s(t))}"` + `\r\n\r\n${s(c)}\r\n`);
            o.push(e), d += e.byteLength;
        } else {
            const e = T.encode(`${r}; name="${n(s(t))}"` + (c.name ? `; filename="${n(c.name)}"` : "") + "\r\n" + `Content-Type: ${c.type || "application/octet-stream"}\r\n\r\n`);
            o.push(e, c, i), "number" == typeof c.size ? d += e.byteLength + c.size + i.byteLength : a = !0;
        }
        const c = T.encode(`--${t}--`);
        o.push(c), d += c.byteLength, a && (d = null), u = e, l = async function*() {
            for (const e of o)e.stream ? yield* e.stream() : yield e;
        }, p = "multipart/form-data; boundary=" + t;
    } else if (i(e)) u = e, d = e.size, e.type && (p = e.type);
    else if ("function" == typeof e[Symbol.asyncIterator]) {
        if (t) throw new TypeError("keepalive");
        if (s.isDisturbed(e) || e.locked) throw new TypeError("Response body object should not be disturbed or locked");
        n = e instanceof k ? e : o(e);
    }
    if (("string" == typeof u || s.isBuffer(u)) && (d = Buffer.byteLength(u)), null != l) {
        let t;
        n = new k({
            async start () {
                t = l(e)[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { value: r, done: s } = await t.next();
                return s ? queueMicrotask(()=>{
                    e.close();
                }) : _(n) || e.enqueue(new Uint8Array(r)), e.desiredSize > 0;
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
            source: u,
            length: d
        },
        p
    ];
}
async function* P(e) {
    if (e) if (A(e)) yield e;
    else {
        const t = e.stream;
        if (s.isDisturbed(t)) throw new TypeError("The body has already been consumed.");
        if (t.locked) throw new TypeError("The stream is locked.");
        t[w] = !0, yield* t;
    }
}
function J(e) {
    if (e.aborted) throw new h("The operation was aborted.", "AbortError");
}
function M(e) {
    return {
        blob () {
            return q(this, (e)=>{
                let t = function(e) {
                    const { headersList: t } = e[p], r = t.get("content-type");
                    if (null === r) return "failure";
                    return E(r);
                }(this);
                return "failure" === t ? t = "" : t && (t = I(t)), new g([
                    e
                ], {
                    type: t
                });
            }, e);
        },
        arrayBuffer () {
            return q(this, (e)=>new Uint8Array(e).buffer, e);
        },
        text () {
            return q(this, D, e);
        },
        json () {
            return q(this, O, e);
        },
        async formData () {
            m.brandCheck(this, e), J(this[p]);
            const t = this.headers.get("Content-Type");
            if (/multipart\/form-data/.test(t)) {
                const e = {};
                for (const [t, r] of this.headers)e[t.toLowerCase()] = r;
                const t = new d;
                let r;
                try {
                    r = new n({
                        headers: e,
                        preservePath: !0
                    });
                } catch (e) {
                    throw new h(`${e}`, "AbortError");
                }
                r.on("field", (e, r)=>{
                    t.append(e, r);
                }), r.on("file", (e, r, n, s, o)=>{
                    const i = [];
                    if ("base64" === s || "base64" === s.toLowerCase()) {
                        let s = "";
                        r.on("data", (e)=>{
                            s += e.toString().replace(/[\r\n]/gm, "");
                            const t = s.length - s.length % 4;
                            i.push(Buffer.from(s.slice(0, t), "base64")), s = s.slice(t);
                        }), r.on("end", ()=>{
                            i.push(Buffer.from(s, "base64")), t.append(e, new x(i, n, {
                                type: o
                            }));
                        });
                    } else r.on("data", (e)=>{
                        i.push(e);
                    }), r.on("end", ()=>{
                        t.append(e, new x(i, n, {
                            type: o
                        }));
                    });
                });
                const s = new Promise((e, t)=>{
                    r.on("finish", e), r.on("error", (e)=>t(new TypeError(e)));
                });
                if (null !== this.body) for await (const e of P(this[p].body))r.write(e);
                return r.end(), await s, t;
            }
            if (/application\/x-www-form-urlencoded/.test(t)) {
                let e;
                try {
                    let t = "";
                    const r = new TextDecoder("utf-8", {
                        ignoreBOM: !0
                    });
                    for await (const e of P(this[p].body)){
                        if (!A(e)) throw new TypeError("Expected Uint8Array chunk");
                        t += r.decode(e, {
                            stream: !0
                        });
                    }
                    t += r.decode(), e = new URLSearchParams(t);
                } catch (e) {
                    throw Object.assign(new TypeError, {
                        cause: e
                    });
                }
                const t = new d;
                for (const [r, n] of e)t.append(r, n);
                return t;
            }
            throw await Promise.resolve(), J(this[p]), m.errors.exception({
                header: `${e.name}.formData`,
                message: "Could not parse content as FormData."
            });
        }
    };
}
async function q(e, t, r) {
    if (m.brandCheck(e, r), J(e[p]), null != (n = e[p].body) && (n.stream.locked || s.isDisturbed(n.stream))) throw new TypeError("Body is unusable");
    var n;
    const o = l(), i = (e)=>o.reject(e), a = (e)=>{
        try {
            o.resolve(t(e));
        } catch (e) {
            i(e);
        }
    };
    return null == e[p].body ? (a(new Uint8Array), o.promise) : (await u(e[p].body, a, i), o.promise);
}
function D(e) {
    if (0 === e.length) return "";
    239 === e[0] && 187 === e[1] && 191 === e[2] && (e = e.subarray(3));
    return R.decode(e);
}
function O(e) {
    return JSON.parse(D(e));
}
module.exports = {
    extractBody: B,
    safelyExtractBody: function(e, t = !1) {
        return k || (k = require("./module-63774.js").ReadableStream), e instanceof k && (v(!s.isDisturbed(e), "The body has already been consumed."), v(!e.locked, "The stream is locked.")), B(e, t);
    },
    cloneBody: function(e) {
        const [t, r] = e.stream.tee(), n = f(r, {
            transfer: [
                r
            ]
        }), [, s] = n.tee();
        return e.stream = t, {
            stream: s,
            length: e.length,
            source: e.source
        };
    },
    mixinBody: function(e) {
        Object.assign(e.prototype, M(e));
    }
};
