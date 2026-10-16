"use strict";
const n = require("./module-2613.js"), { Readable: r } = require("./module-2203.js"), { RequestAbortedError: o, NotSupportedError: s, InvalidArgumentError: a } = require("./module-7902.js"), i = require("./module-9361.js"), { ReadableStreamFrom: c, toUSVString: l } = require("./module-9361.js");
let g;
const E = Symbol("kConsume"), u = Symbol("kReading"), d = Symbol("kBody"), I = Symbol("abort"), h = Symbol("kContentType"), Q = ()=>{};
function m(e) {
    return i.isDisturbed(e) || function(e) {
        return e[d] && !0 === e[d].locked || e[E];
    }(e);
}
async function C(e, A) {
    if (m(e)) throw new TypeError("unusable");
    return n(!e[E]), new Promise((t, n)=>{
        e[E] = {
            type: A,
            stream: e,
            resolve: t,
            reject: n,
            length: 0,
            body: []
        }, e.on("error", function(e) {
            y(this[E], e);
        }).on("close", function() {
            null !== this[E].body && y(this[E], new o);
        }), process.nextTick(B, e[E]);
    });
}
function B(e) {
    if (null === e.body) return;
    const { _readableState: A } = e.stream;
    for (const t of A.buffer)f(e, t);
    for(A.endEmitted ? p(this[E]) : e.stream.on("end", function() {
        p(this[E]);
    }), e.stream.resume(); null != e.stream.read(););
}
function p(e) {
    const { type: A, body: n, resolve: r, stream: o, length: s } = e;
    try {
        if ("text" === A) r(l(Buffer.concat(n)));
        else if ("json" === A) r(JSON.parse(Buffer.concat(n)));
        else if ("arrayBuffer" === A) {
            const e = new Uint8Array(s);
            let A = 0;
            for (const t of n)e.set(t, A), A += t.byteLength;
            r(e.buffer);
        } else "blob" === A && (g || (g = require("./module-181.js").Blob), r(new g(n, {
            type: o[h]
        })));
        y(e);
    } catch (e) {
        o.destroy(e);
    }
}
function f(e, A) {
    e.length += A.length, e.body.push(A);
}
function y(e, A) {
    null !== e.body && (A ? e.reject(A) : e.resolve(), e.type = null, e.stream = null, e.resolve = null, e.reject = null, e.length = 0, e.body = null);
}
module.exports = class extends r {
    constructor({ resume: e, abort: A, contentType: t = "", highWaterMark: n = 65536 }){
        super({
            autoDestroy: !0,
            read: e,
            highWaterMark: n
        }), this._readableState.dataEmitted = !1, this[I] = A, this[E] = null, this[d] = null, this[h] = t, this[u] = !1;
    }
    destroy(e) {
        return this.destroyed ? this : (e || this._readableState.endEmitted || (e = new o), e && this[I](), super.destroy(e));
    }
    emit(e, ...A) {
        return "data" === e ? this._readableState.dataEmitted = !0 : "error" === e && (this._readableState.errorEmitted = !0), super.emit(e, ...A);
    }
    on(e, ...A) {
        return "data" !== e && "readable" !== e || (this[u] = !0), super.on(e, ...A);
    }
    addListener(e, ...A) {
        return this.on(e, ...A);
    }
    off(e, ...A) {
        const t = super.off(e, ...A);
        return "data" !== e && "readable" !== e || (this[u] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), t;
    }
    removeListener(e, ...A) {
        return this.off(e, ...A);
    }
    push(e) {
        return this[E] && null !== e && 0 === this.readableLength ? (f(this[E], e), !this[u] || super.push(e)) : super.push(e);
    }
    async text() {
        return C(this, "text");
    }
    async json() {
        return C(this, "json");
    }
    async blob() {
        return C(this, "blob");
    }
    async arrayBuffer() {
        return C(this, "arrayBuffer");
    }
    async formData() {
        throw new s;
    }
    get bodyUsed() {
        return i.isDisturbed(this);
    }
    get body() {
        return this[d] || (this[d] = c(this), this[E] && (this[d].getReader(), n(this[d].locked))), this[d];
    }
    dump(e) {
        let A = e && Number.isFinite(e.limit) ? e.limit : 262144;
        const t = e && e.signal;
        if (t) try {
            if ("object" != typeof t || !("aborted" in t)) throw new a("signal must be an AbortSignal");
            i.throwIfAborted(t);
        } catch (e) {
            return Promise.reject(e);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e, n)=>{
            const r = t ? i.addAbortListener(t, ()=>{
                this.destroy();
            }) : Q;
            this.on("close", function() {
                r(), t && t.aborted ? n(t.reason || Object.assign(new Error("The operation was aborted"), {
                    name: "AbortError"
                })) : e(null);
            }).on("error", Q).on("data", function(e) {
                A -= e.length, A <= 0 && this.destroy();
            }).resume();
        });
    }
};
