"use strict";
const a = require("./module-2613.js"), { Readable: s } = require("./module-2203.js"), { RequestAbortedError: o, NotSupportedError: r, InvalidArgumentError: i } = require("./module-7902.js"), A = require("./module-9361.js"), { ReadableStreamFrom: c, toUSVString: l } = require("./module-9361.js");
let d;
const m = Symbol("kConsume"), u = Symbol("kReading"), g = Symbol("kBody"), p = Symbol("abort"), E = Symbol("kContentType"), h = ()=>{};
function T(e) {
    return A.isDisturbed(e) || function(e) {
        return e[g] && !0 === e[g].locked || e[m];
    }(e);
}
async function k(e, n) {
    if (T(e)) throw new TypeError("unusable");
    return a(!e[m]), new Promise((t, a)=>{
        e[m] = {
            type: n,
            stream: e,
            resolve: t,
            reject: a,
            length: 0,
            body: []
        }, e.on("error", function(e) {
            C(this[m], e);
        }).on("close", function() {
            null !== this[m].body && C(this[m], new o);
        }), process.nextTick(f, e[m]);
    });
}
function f(e) {
    if (null === e.body) return;
    const { _readableState: n } = e.stream;
    for (const t of n.buffer)I(e, t);
    for(n.endEmitted ? _(this[m]) : e.stream.on("end", function() {
        _(this[m]);
    }), e.stream.resume(); null != e.stream.read(););
}
function _(e) {
    const { type: n, body: a, resolve: s, stream: o, length: r } = e;
    try {
        if ("text" === n) s(l(Buffer.concat(a)));
        else if ("json" === n) s(JSON.parse(Buffer.concat(a)));
        else if ("arrayBuffer" === n) {
            const e = new Uint8Array(r);
            let n = 0;
            for (const t of a)e.set(t, n), n += t.byteLength;
            s(e.buffer);
        } else "blob" === n && (d || (d = require("./module-181.js").Blob), s(new d(a, {
            type: o[E]
        })));
        C(e);
    } catch (e) {
        o.destroy(e);
    }
}
function I(e, n) {
    e.length += n.length, e.body.push(n);
}
function C(e, n) {
    null !== e.body && (n ? e.reject(n) : e.resolve(), e.type = null, e.stream = null, e.resolve = null, e.reject = null, e.length = 0, e.body = null);
}
module.exports = class extends s {
    constructor({ resume: e, abort: n, contentType: t = "", highWaterMark: a = 65536 }){
        super({
            autoDestroy: !0,
            read: e,
            highWaterMark: a
        }), this._readableState.dataEmitted = !1, this[p] = n, this[m] = null, this[g] = null, this[E] = t, this[u] = !1;
    }
    destroy(e) {
        return this.destroyed ? this : (e || this._readableState.endEmitted || (e = new o), e && this[p](), super.destroy(e));
    }
    emit(e, ...n) {
        return "data" === e ? this._readableState.dataEmitted = !0 : "error" === e && (this._readableState.errorEmitted = !0), super.emit(e, ...n);
    }
    on(e, ...n) {
        return "data" !== e && "readable" !== e || (this[u] = !0), super.on(e, ...n);
    }
    addListener(e, ...n) {
        return this.on(e, ...n);
    }
    off(e, ...n) {
        const t = super.off(e, ...n);
        return "data" !== e && "readable" !== e || (this[u] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), t;
    }
    removeListener(e, ...n) {
        return this.off(e, ...n);
    }
    push(e) {
        return this[m] && null !== e && 0 === this.readableLength ? (I(this[m], e), !this[u] || super.push(e)) : super.push(e);
    }
    async text() {
        return k(this, "text");
    }
    async json() {
        return k(this, "json");
    }
    async blob() {
        return k(this, "blob");
    }
    async arrayBuffer() {
        return k(this, "arrayBuffer");
    }
    async formData() {
        throw new r;
    }
    get bodyUsed() {
        return A.isDisturbed(this);
    }
    get body() {
        return this[g] || (this[g] = c(this), this[m] && (this[g].getReader(), a(this[g].locked))), this[g];
    }
    dump(e) {
        let n = e && Number.isFinite(e.limit) ? e.limit : 262144;
        const t = e && e.signal;
        if (t) try {
            if ("object" != typeof t || !("aborted" in t)) throw new i("signal must be an AbortSignal");
            A.throwIfAborted(t);
        } catch (e) {
            return Promise.reject(e);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e, a)=>{
            const s = t ? A.addAbortListener(t, ()=>{
                this.destroy();
            }) : h;
            this.on("close", function() {
                s(), t && t.aborted ? a(t.reason || Object.assign(new Error("The operation was aborted"), {
                    name: "AbortError"
                })) : e(null);
            }).on("error", h).on("data", function(e) {
                n -= e.length, n <= 0 && this.destroy();
            }).resume();
        });
    }
};
