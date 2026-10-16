"use strict";
const r = require("./module-55201.js"), { ReadableStreamFrom: s, isBlobLike: o, isReadableStreamLike: n, readableStreamClose: i, createDeferredPromise: a, fullyReadBody: Q, extractMimeType: g, utf8DecodeBytes: E } = require("./module-48215.js"), { FormData: B } = require("./module-41445.js"), { kState: c } = require("./module-15978.js"), { webidl: I } = require("./module-43290.js"), { Blob: C } = require(4573), h = require(56970), { isErrored: l, isDisturbed: u } = require(57075), { isArrayBuffer: d } = require(73429), { serializeAMimeType: f } = require("./module-52603.js"), { multipartFormDataParser: w } = require("./module-72893.js");
let y;
try {
    const A = require(77598);
    y = (e)=>A.randomInt(0, e);
} catch  {
    y = (A)=>Math.floor(Math.random(A));
}
const D = new TextEncoder;
function p() {}
const k = globalThis.FinalizationRegistry && 0 !== process.version.indexOf("v18");
let R;
function F(A, e = !1) {
    let t = null;
    t = A instanceof ReadableStream ? A : o(A) ? A.stream() : new ReadableStream({
        async pull (A) {
            const e = "string" == typeof Q ? D.encode(Q) : Q;
            e.byteLength && A.enqueue(e), queueMicrotask(()=>i(A));
        },
        start () {},
        type: "bytes"
    }), h(n(t));
    let a = null, Q = null, g = null, E = null;
    if ("string" == typeof A) Q = A, E = "text/plain;charset=UTF-8";
    else if (A instanceof URLSearchParams) Q = A.toString(), E = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (d(A)) Q = new Uint8Array(A.slice());
    else if (ArrayBuffer.isView(A)) Q = new Uint8Array(A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength));
    else if (r.isFormDataLike(A)) {
        const e = `----formdata-undici-0${`${y(1e11)}`.padStart(11, "0")}`, t = `--${e}\r\nContent-Disposition: form-data`, r = (A)=>A.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s = (A)=>A.replace(/\r?\n|\r/g, "\r\n"), o = [], n = new Uint8Array([
            13,
            10
        ]);
        g = 0;
        let i = !1;
        for (const [e, a] of A)if ("string" == typeof a) {
            const A = D.encode(t + `; name="${r(s(e))}"` + `\r\n\r\n${s(a)}\r\n`);
            o.push(A), g += A.byteLength;
        } else {
            const A = D.encode(`${t}; name="${r(s(e))}"` + (a.name ? `; filename="${r(a.name)}"` : "") + "\r\n" + `Content-Type: ${a.type || "application/octet-stream"}\r\n\r\n`);
            o.push(A, a, n), "number" == typeof a.size ? g += A.byteLength + a.size + n.byteLength : i = !0;
        }
        const B = D.encode(`--${e}--\r\n`);
        o.push(B), g += B.byteLength, i && (g = null), Q = A, a = async function*() {
            for (const A of o)A.stream ? yield* A.stream() : yield A;
        }, E = `multipart/form-data; boundary=${e}`;
    } else if (o(A)) Q = A, g = A.size, A.type && (E = A.type);
    else if ("function" == typeof A[Symbol.asyncIterator]) {
        if (e) throw new TypeError("keepalive");
        if (r.isDisturbed(A) || A.locked) throw new TypeError("Response body object should not be disturbed or locked");
        t = A instanceof ReadableStream ? A : s(A);
    }
    if (("string" == typeof Q || r.isBuffer(Q)) && (g = Buffer.byteLength(Q)), null != a) {
        let e;
        t = new ReadableStream({
            async start () {
                e = a(A)[Symbol.asyncIterator]();
            },
            async pull (A) {
                const { value: r, done: s } = await e.next();
                if (s) queueMicrotask(()=>{
                    A.close(), A.byobRequest?.respond(0);
                });
                else if (!l(t)) {
                    const e = new Uint8Array(r);
                    e.byteLength && A.enqueue(e);
                }
                return A.desiredSize > 0;
            },
            async cancel (A) {
                await e.return();
            },
            type: "bytes"
        });
    }
    return [
        {
            stream: t,
            source: Q,
            length: g
        },
        E
    ];
}
async function m(A, e, t) {
    if (I.brandCheck(A, t), b(A)) throw new TypeError("Body is unusable: Body has already been read");
    !function(A) {
        if (A.aborted) throw new DOMException("The operation was aborted.", "AbortError");
    }(A[c]);
    const r = a(), s = (A)=>r.reject(A), o = (A)=>{
        try {
            r.resolve(e(A));
        } catch (A) {
            s(A);
        }
    };
    return null == A[c].body ? (o(Buffer.allocUnsafe(0)), r.promise) : (await Q(A[c].body, o, s), r.promise);
}
function b(A) {
    const e = A[c].body;
    return null != e && (e.stream.locked || r.isDisturbed(e.stream));
}
function N(A) {
    return JSON.parse(E(A));
}
function S(A) {
    const e = A[c].headersList, t = g(e);
    return "failure" === t ? null : t;
}
k && (R = new FinalizationRegistry((A)=>{
    const e = A.deref();
    !e || e.locked || u(e) || l(e) || e.cancel("Response object has been garbage collected").catch(p);
})), module.exports = {
    extractBody: F,
    safelyExtractBody: function(A, e = !1) {
        return A instanceof ReadableStream && (h(!r.isDisturbed(A), "The body has already been consumed."), h(!A.locked, "The stream is locked.")), F(A, e);
    },
    cloneBody: function(A, e) {
        const [t, r] = e.stream.tee();
        return e.stream = t, {
            stream: r,
            length: e.length,
            source: e.source
        };
    },
    mixinBody: function(A) {
        var e;
        Object.assign(A.prototype, (e = A, {
            blob () {
                return m(this, (A)=>{
                    let e = S(this);
                    return null === e ? e = "" : e && (e = f(e)), new C([
                        A
                    ], {
                        type: e
                    });
                }, e);
            },
            arrayBuffer () {
                return m(this, (A)=>new Uint8Array(A).buffer, e);
            },
            text () {
                return m(this, E, e);
            },
            json () {
                return m(this, N, e);
            },
            formData () {
                return m(this, (A)=>{
                    const e = S(this);
                    if (null !== e) switch(e.essence){
                        case "multipart/form-data":
                            {
                                const t = w(A, e);
                                if ("failure" === t) throw new TypeError("Failed to parse body as FormData.");
                                const r = new B;
                                return r[c] = t, r;
                            }
                        case "application/x-www-form-urlencoded":
                            {
                                const e = new URLSearchParams(A.toString()), t = new B;
                                for (const [A, r] of e)t.append(A, r);
                                return t;
                            }
                    }
                    throw new TypeError('Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded".');
                }, e);
            },
            bytes () {
                return m(this, (A)=>new Uint8Array(A), e);
            }
        }));
    },
    streamRegistry: R,
    hasFinalizationRegistry: k,
    bodyUnusable: b
};
