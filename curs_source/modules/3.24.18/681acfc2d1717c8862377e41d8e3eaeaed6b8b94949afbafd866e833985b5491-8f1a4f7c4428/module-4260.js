"use strict";
const n = require("./module-2613.js"), { Readable: r } = require("./module-2203.js"), { RequestAbortedError: o, NotSupportedError: s, InvalidArgumentError: i } = require("./module-7902.js"), a = require("./module-9361.js"), { ReadableStreamFrom: c, toUSVString: l } = require("./module-9361.js");
let u;
const g = Symbol("kConsume"), E = Symbol("kReading"), h = Symbol("kBody"), d = Symbol("abort"), I = Symbol("kContentType"), B = ()=>{};
function Q(e) {
    return a.isDisturbed(e) || function(e) {
        return e[h] && !0 === e[h].locked || e[g];
    }(e);
}
async function f(e, t) {
    if (Q(e)) throw new TypeError("unusable");
    return n(!e[g]), new Promise((A, n)=>{
        e[g] = {
            type: t,
            stream: e,
            resolve: A,
            reject: n,
            length: 0,
            body: []
        }, e.on("error", function(e) {
            y(this[g], e);
        }).on("close", function() {
            null !== this[g].body && y(this[g], new o);
        }), process.nextTick(C, e[g]);
    });
}
function C(e) {
    if (null === e.body) return;
    const { _readableState: t } = e.stream;
    for (const A of t.buffer)m(e, A);
    for(t.endEmitted ? p(this[g]) : e.stream.on("end", function() {
        p(this[g]);
    }), e.stream.resume(); null != e.stream.read(););
}
function p(e) {
    const { type: t, body: n, resolve: r, stream: o, length: s } = e;
    try {
        if ("text" === t) r(l(Buffer.concat(n)));
        else if ("json" === t) r(JSON.parse(Buffer.concat(n)));
        else if ("arrayBuffer" === t) {
            const e = new Uint8Array(s);
            let t = 0;
            for (const A of n)e.set(A, t), t += A.byteLength;
            r(e.buffer);
        } else "blob" === t && (u || (u = require("./module-181.js").Blob), r(new u(n, {
            type: o[I]
        })));
        y(e);
    } catch (e) {
        o.destroy(e);
    }
}
function m(e, t) {
    e.length += t.length, e.body.push(t);
}
function y(e, t) {
    null !== e.body && (t ? e.reject(t) : e.resolve(), e.type = null, e.stream = null, e.resolve = null, e.reject = null, e.length = 0, e.body = null);
}
module.exports = class extends r {
    constructor({ resume: e, abort: t, contentType: A = "", highWaterMark: n = 65536 }){
        super({
            autoDestroy: !0,
            read: e,
            highWaterMark: n
        }), this._readableState.dataEmitted = !1, this[d] = t, this[g] = null, this[h] = null, this[I] = A, this[E] = !1;
    }
    destroy(e) {
        return this.destroyed ? this : (e || this._readableState.endEmitted || (e = new o), e && this[d](), super.destroy(e));
    }
    emit(e, ...t) {
        return "data" === e ? this._readableState.dataEmitted = !0 : "error" === e && (this._readableState.errorEmitted = !0), super.emit(e, ...t);
    }
    on(e, ...t) {
        return "data" !== e && "readable" !== e || (this[E] = !0), super.on(e, ...t);
    }
    addListener(e, ...t) {
        return this.on(e, ...t);
    }
    off(e, ...t) {
        const A = super.off(e, ...t);
        return "data" !== e && "readable" !== e || (this[E] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), A;
    }
    removeListener(e, ...t) {
        return this.off(e, ...t);
    }
    push(e) {
        return this[g] && null !== e && 0 === this.readableLength ? (m(this[g], e), !this[E] || super.push(e)) : super.push(e);
    }
    async text() {
        return f(this, "text");
    }
    async json() {
        return f(this, "json");
    }
    async blob() {
        return f(this, "blob");
    }
    async arrayBuffer() {
        return f(this, "arrayBuffer");
    }
    async formData() {
        throw new s;
    }
    get bodyUsed() {
        return a.isDisturbed(this);
    }
    get body() {
        return this[h] || (this[h] = c(this), this[g] && (this[h].getReader(), n(this[h].locked))), this[h];
    }
    dump(e) {
        let t = e && Number.isFinite(e.limit) ? e.limit : 262144;
        const A = e && e.signal;
        if (A) try {
            if ("object" != typeof A || !("aborted" in A)) throw new i("signal must be an AbortSignal");
            a.throwIfAborted(A);
        } catch (e) {
            return Promise.reject(e);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e, n)=>{
            const r = A ? a.addAbortListener(A, ()=>{
                this.destroy();
            }) : B;
            this.on("close", function() {
                r(), A && A.aborted ? n(A.reason || Object.assign(new Error("The operation was aborted"), {
                    name: "AbortError"
                })) : e(null);
            }).on("error", B).on("data", function(e) {
                t -= e.length, t <= 0 && this.destroy();
            }).resume();
        });
    }
};
