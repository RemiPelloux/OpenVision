"use strict";
const t = require("./module-2613.js"), { Readable: s } = require("./module-2203.js"), { RequestAbortedError: o, NotSupportedError: r, InvalidArgumentError: i } = require("./module-7902.js"), l = require("./module-9361.js"), { ReadableStreamFrom: d, toUSVString: m } = require("./module-9361.js");
let c;
const p = Symbol("kConsume"), A = Symbol("kReading"), u = Symbol("kBody"), g = Symbol("abort"), T = Symbol("kContentType"), h = ()=>{};
function k(e) {
    return l.isDisturbed(e) || function(e) {
        return e[u] && !0 === e[u].locked || e[p];
    }(e);
}
async function _(e, a) {
    if (k(e)) throw new TypeError("unusable");
    return t(!e[p]), new Promise((n, t)=>{
        e[p] = {
            type: a,
            stream: e,
            resolve: n,
            reject: t,
            length: 0,
            body: []
        }, e.on("error", function(e) {
            I(this[p], e);
        }).on("close", function() {
            null !== this[p].body && I(this[p], new o);
        }), process.nextTick(E, e[p]);
    });
}
function E(e) {
    if (null === e.body) return;
    const { _readableState: a } = e.stream;
    for (const n of a.buffer)C(e, n);
    for(a.endEmitted ? f(this[p]) : e.stream.on("end", function() {
        f(this[p]);
    }), e.stream.resume(); null != e.stream.read(););
}
function f(e) {
    const { type: a, body: t, resolve: s, stream: o, length: r } = e;
    try {
        if ("text" === a) s(m(Buffer.concat(t)));
        else if ("json" === a) s(JSON.parse(Buffer.concat(t)));
        else if ("arrayBuffer" === a) {
            const e = new Uint8Array(r);
            let a = 0;
            for (const n of t)e.set(n, a), a += n.byteLength;
            s(e.buffer);
        } else "blob" === a && (c || (c = require("./module-181.js").Blob), s(new c(t, {
            type: o[T]
        })));
        I(e);
    } catch (e) {
        o.destroy(e);
    }
}
function C(e, a) {
    e.length += a.length, e.body.push(a);
}
function I(e, a) {
    null !== e.body && (a ? e.reject(a) : e.resolve(), e.type = null, e.stream = null, e.resolve = null, e.reject = null, e.length = 0, e.body = null);
}
module.exports = class extends s {
    constructor({ resume: e, abort: a, contentType: n = "", highWaterMark: t = 65536 }){
        super({
            autoDestroy: !0,
            read: e,
            highWaterMark: t
        }), this._readableState.dataEmitted = !1, this[g] = a, this[p] = null, this[u] = null, this[T] = n, this[A] = !1;
    }
    destroy(e) {
        return this.destroyed ? this : (e || this._readableState.endEmitted || (e = new o), e && this[g](), super.destroy(e));
    }
    emit(e, ...a) {
        return "data" === e ? this._readableState.dataEmitted = !0 : "error" === e && (this._readableState.errorEmitted = !0), super.emit(e, ...a);
    }
    on(e, ...a) {
        return "data" !== e && "readable" !== e || (this[A] = !0), super.on(e, ...a);
    }
    addListener(e, ...a) {
        return this.on(e, ...a);
    }
    off(e, ...a) {
        const n = super.off(e, ...a);
        return "data" !== e && "readable" !== e || (this[A] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), n;
    }
    removeListener(e, ...a) {
        return this.off(e, ...a);
    }
    push(e) {
        return this[p] && null !== e && 0 === this.readableLength ? (C(this[p], e), !this[A] || super.push(e)) : super.push(e);
    }
    async text() {
        return _(this, "text");
    }
    async json() {
        return _(this, "json");
    }
    async blob() {
        return _(this, "blob");
    }
    async arrayBuffer() {
        return _(this, "arrayBuffer");
    }
    async formData() {
        throw new r;
    }
    get bodyUsed() {
        return l.isDisturbed(this);
    }
    get body() {
        return this[u] || (this[u] = d(this), this[p] && (this[u].getReader(), t(this[u].locked))), this[u];
    }
    dump(e) {
        let a = e && Number.isFinite(e.limit) ? e.limit : 262144;
        const n = e && e.signal;
        if (n) try {
            if ("object" != typeof n || !("aborted" in n)) throw new i("signal must be an AbortSignal");
            l.throwIfAborted(n);
        } catch (e) {
            return Promise.reject(e);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e, t)=>{
            const s = n ? l.addAbortListener(n, ()=>{
                this.destroy();
            }) : h;
            this.on("close", function() {
                s(), n && n.aborted ? t(n.reason || Object.assign(new Error("The operation was aborted"), {
                    name: "AbortError"
                })) : e(null);
            }).on("error", h).on("data", function(e) {
                a -= e.length, a <= 0 && this.destroy();
            }).resume();
        });
    }
};
