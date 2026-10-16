"use strict";
const r = require(56970), { Readable: s } = require(57075), { RequestAbortedError: o, NotSupportedError: n, InvalidArgumentError: i, AbortError: a } = require("./module-38238.js"), Q = require("./module-55201.js"), { ReadableStreamFrom: g } = require("./module-55201.js"), E = Symbol("kConsume"), B = Symbol("kReading"), c = Symbol("kBody"), I = Symbol("kAbort"), C = Symbol("kContentType"), h = Symbol("kContentLength"), l = ()=>{};
function u(A) {
    return Q.isDisturbed(A) || function(A) {
        return A[c] && !0 === A[c].locked || A[E];
    }(A);
}
async function d(A, e) {
    return r(!A[E]), new Promise((t, r)=>{
        if (u(A)) {
            const e = A._readableState;
            e.destroyed && !1 === e.closeEmitted ? A.on("error", (A)=>{
                r(A);
            }).on("close", ()=>{
                r(new TypeError("unusable"));
            }) : r(e.errored ?? new TypeError("unusable"));
        } else queueMicrotask(()=>{
            A[E] = {
                type: e,
                stream: A,
                resolve: t,
                reject: r,
                length: 0,
                body: []
            }, A.on("error", function(A) {
                p(this[E], A);
            }).on("close", function() {
                null !== this[E].body && p(this[E], new o);
            }), function(A) {
                if (null === A.body) return;
                const { _readableState: e } = A.stream;
                if (e.bufferIndex) {
                    const t = e.bufferIndex, r = e.buffer.length;
                    for(let s = t; s < r; s++)D(A, e.buffer[s]);
                } else for (const t of e.buffer)D(A, t);
                e.endEmitted ? y(this[E]) : A.stream.on("end", function() {
                    y(this[E]);
                });
                A.stream.resume();
                for(; null != A.stream.read(););
            }(A[E]);
        });
    });
}
function f(A, e) {
    if (0 === A.length || 0 === e) return "";
    const t = 1 === A.length ? A[0] : Buffer.concat(A, e), r = t.length, s = r > 2 && 239 === t[0] && 187 === t[1] && 191 === t[2] ? 3 : 0;
    return t.utf8Slice(s, r);
}
function w(A, e) {
    if (0 === A.length || 0 === e) return new Uint8Array(0);
    if (1 === A.length) return new Uint8Array(A[0]);
    const t = new Uint8Array(Buffer.allocUnsafeSlow(e).buffer);
    let r = 0;
    for(let e = 0; e < A.length; ++e){
        const s = A[e];
        t.set(s, r), r += s.length;
    }
    return t;
}
function y(A) {
    const { type: e, body: t, resolve: r, stream: s, length: o } = A;
    try {
        "text" === e ? r(f(t, o)) : "json" === e ? r(JSON.parse(f(t, o))) : "arrayBuffer" === e ? r(w(t, o).buffer) : "blob" === e ? r(new Blob(t, {
            type: s[C]
        })) : "bytes" === e && r(w(t, o)), p(A);
    } catch (A) {
        s.destroy(A);
    }
}
function D(A, e) {
    A.length += e.length, A.body.push(e);
}
function p(A, e) {
    null !== A.body && (e ? A.reject(e) : A.resolve(), A.type = null, A.stream = null, A.resolve = null, A.reject = null, A.length = 0, A.body = null);
}
module.exports = {
    Readable: class extends s {
        constructor({ resume: A, abort: e, contentType: t = "", contentLength: r, highWaterMark: s = 65536 }){
            super({
                autoDestroy: !0,
                read: A,
                highWaterMark: s
            }), this._readableState.dataEmitted = !1, this[I] = e, this[E] = null, this[c] = null, this[C] = t, this[h] = r, this[B] = !1;
        }
        destroy(A) {
            return A || this._readableState.endEmitted || (A = new o), A && this[I](), super.destroy(A);
        }
        _destroy(A, e) {
            this[B] ? e(A) : setImmediate(()=>{
                e(A);
            });
        }
        on(A, ...e) {
            return "data" !== A && "readable" !== A || (this[B] = !0), super.on(A, ...e);
        }
        addListener(A, ...e) {
            return this.on(A, ...e);
        }
        off(A, ...e) {
            const t = super.off(A, ...e);
            return "data" !== A && "readable" !== A || (this[B] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), t;
        }
        removeListener(A, ...e) {
            return this.off(A, ...e);
        }
        push(A) {
            return this[E] && null !== A ? (D(this[E], A), !this[B] || super.push(A)) : super.push(A);
        }
        async text() {
            return d(this, "text");
        }
        async json() {
            return d(this, "json");
        }
        async blob() {
            return d(this, "blob");
        }
        async bytes() {
            return d(this, "bytes");
        }
        async arrayBuffer() {
            return d(this, "arrayBuffer");
        }
        async formData() {
            throw new n;
        }
        get bodyUsed() {
            return Q.isDisturbed(this);
        }
        get body() {
            return this[c] || (this[c] = g(this), this[E] && (this[c].getReader(), r(this[c].locked))), this[c];
        }
        async dump(A) {
            let e = Number.isFinite(A?.limit) ? A.limit : 131072;
            const t = A?.signal;
            if (null != t && ("object" != typeof t || !("aborted" in t))) throw new i("signal must be an AbortSignal");
            return t?.throwIfAborted(), this._readableState.closeEmitted ? null : await new Promise((A, r)=>{
                this[h] > e && this.destroy(new a);
                const s = ()=>{
                    this.destroy(t.reason ?? new a);
                };
                t?.addEventListener("abort", s), this.on("close", function() {
                    t?.removeEventListener("abort", s), t?.aborted ? r(t.reason ?? new a) : A(null);
                }).on("error", l).on("data", function(A) {
                    e -= A.length, e <= 0 && this.destroy();
                }).resume();
            });
        }
    },
    chunksDecode: f
};
