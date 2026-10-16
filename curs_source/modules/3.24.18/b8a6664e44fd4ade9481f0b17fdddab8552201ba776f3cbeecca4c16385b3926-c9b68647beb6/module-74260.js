"use strict";
const r = require(42613), { Readable: s } = require(2203), { RequestAbortedError: o, NotSupportedError: n, InvalidArgumentError: i } = require("./module-95521.js"), E = require("./module-9361.js"), { ReadableStreamFrom: Q, toUSVString: g } = require("./module-9361.js");
let C;
const B = Symbol("kConsume"), a = Symbol("kReading"), I = Symbol("kBody"), c = Symbol("abort"), h = Symbol("kContentType"), l = ()=>{};
function u(A) {
    return E.isDisturbed(A) || function(A) {
        return A[I] && !0 === A[I].locked || A[B];
    }(A);
}
async function d(A, e) {
    if (u(A)) throw new TypeError("unusable");
    return r(!A[B]), new Promise((t, r)=>{
        A[B] = {
            type: e,
            stream: A,
            resolve: t,
            reject: r,
            length: 0,
            body: []
        }, A.on("error", function(A) {
            R(this[B], A);
        }).on("close", function() {
            null !== this[B].body && R(this[B], new o);
        }), process.nextTick(f, A[B]);
    });
}
function f(A) {
    if (null === A.body) return;
    const { _readableState: e } = A.stream;
    for (const t of e.buffer)D(A, t);
    for(e.endEmitted ? y(this[B]) : A.stream.on("end", function() {
        y(this[B]);
    }), A.stream.resume(); null != A.stream.read(););
}
function y(A) {
    const { type: e, body: r, resolve: s, stream: o, length: n } = A;
    try {
        if ("text" === e) s(g(Buffer.concat(r)));
        else if ("json" === e) s(JSON.parse(Buffer.concat(r)));
        else if ("arrayBuffer" === e) {
            const A = new Uint8Array(n);
            let e = 0;
            for (const t of r)A.set(t, e), e += t.byteLength;
            s(A.buffer);
        } else "blob" === e && (C || (C = require(20181).Blob), s(new C(r, {
            type: o[h]
        })));
        R(A);
    } catch (A) {
        o.destroy(A);
    }
}
function D(A, e) {
    A.length += e.length, A.body.push(e);
}
function R(A, e) {
    null !== A.body && (e ? A.reject(e) : A.resolve(), A.type = null, A.stream = null, A.resolve = null, A.reject = null, A.length = 0, A.body = null);
}
module.exports = class extends s {
    constructor({ resume: A, abort: e, contentType: t = "", highWaterMark: r = 65536 }){
        super({
            autoDestroy: !0,
            read: A,
            highWaterMark: r
        }), this._readableState.dataEmitted = !1, this[c] = e, this[B] = null, this[I] = null, this[h] = t, this[a] = !1;
    }
    destroy(A) {
        return this.destroyed ? this : (A || this._readableState.endEmitted || (A = new o), A && this[c](), super.destroy(A));
    }
    emit(A, ...e) {
        return "data" === A ? this._readableState.dataEmitted = !0 : "error" === A && (this._readableState.errorEmitted = !0), super.emit(A, ...e);
    }
    on(A, ...e) {
        return "data" !== A && "readable" !== A || (this[a] = !0), super.on(A, ...e);
    }
    addListener(A, ...e) {
        return this.on(A, ...e);
    }
    off(A, ...e) {
        const t = super.off(A, ...e);
        return "data" !== A && "readable" !== A || (this[a] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), t;
    }
    removeListener(A, ...e) {
        return this.off(A, ...e);
    }
    push(A) {
        return this[B] && null !== A && 0 === this.readableLength ? (D(this[B], A), !this[a] || super.push(A)) : super.push(A);
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
    async arrayBuffer() {
        return d(this, "arrayBuffer");
    }
    async formData() {
        throw new n;
    }
    get bodyUsed() {
        return E.isDisturbed(this);
    }
    get body() {
        return this[I] || (this[I] = Q(this), this[B] && (this[I].getReader(), r(this[I].locked))), this[I];
    }
    dump(A) {
        let e = A && Number.isFinite(A.limit) ? A.limit : 262144;
        const t = A && A.signal;
        if (t) try {
            if ("object" != typeof t || !("aborted" in t)) throw new i("signal must be an AbortSignal");
            E.throwIfAborted(t);
        } catch (A) {
            return Promise.reject(A);
        }
        return this.closed ? Promise.resolve(null) : new Promise((A, r)=>{
            const s = t ? E.addAbortListener(t, ()=>{
                this.destroy();
            }) : l;
            this.on("close", function() {
                s(), t && t.aborted ? r(t.reason || Object.assign(new Error("The operation was aborted"), {
                    name: "AbortError"
                })) : A(null);
            }).on("error", l).on("data", function(A) {
                e -= A.length, e <= 0 && this.destroy();
            }).resume();
        });
    }
};
