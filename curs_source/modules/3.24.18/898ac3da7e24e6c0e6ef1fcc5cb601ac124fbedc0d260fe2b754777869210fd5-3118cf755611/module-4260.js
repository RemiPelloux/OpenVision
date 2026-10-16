"use strict";
const t = require("./module-2613.js"), { Readable: s } = require("./module-2203.js"), { RequestAbortedError: o, NotSupportedError: r, InvalidArgumentError: i } = require("./module-7902.js"), A = require("./module-9361.js"), { ReadableStreamFrom: l, toUSVString: c } = require("./module-9361.js");
let m;
const d = Symbol("kConsume"), g = Symbol("kReading"), u = Symbol("kBody"), E = Symbol("abort"), p = Symbol("kContentType"), T = ()=>{};
function k(e) {
    return A.isDisturbed(e) || function(e) {
        return e[u] && !0 === e[u].locked || e[d];
    }(e);
}
async function I(e, n) {
    if (k(e)) throw new TypeError("unusable");
    return t(!e[d]), new Promise((a, t)=>{
        e[d] = {
            type: n,
            stream: e,
            resolve: a,
            reject: t,
            length: 0,
            body: []
        }, e.on("error", function(e) {
            f(this[d], e);
        }).on("close", function() {
            null !== this[d].body && f(this[d], new o);
        }), process.nextTick(h, e[d]);
    });
}
function h(e) {
    if (null === e.body) return;
    const { _readableState: n } = e.stream;
    for (const a of n.buffer)C(e, a);
    for(n.endEmitted ? _(this[d]) : e.stream.on("end", function() {
        _(this[d]);
    }), e.stream.resume(); null != e.stream.read(););
}
function _(e) {
    const { type: n, body: t, resolve: s, stream: o, length: r } = e;
    try {
        if ("text" === n) s(c(Buffer.concat(t)));
        else if ("json" === n) s(JSON.parse(Buffer.concat(t)));
        else if ("arrayBuffer" === n) {
            const e = new Uint8Array(r);
            let n = 0;
            for (const a of t)e.set(a, n), n += a.byteLength;
            s(e.buffer);
        } else "blob" === n && (m || (m = require("./module-181.js").Blob), s(new m(t, {
            type: o[p]
        })));
        f(e);
    } catch (e) {
        o.destroy(e);
    }
}
function C(e, n) {
    e.length += n.length, e.body.push(n);
}
function f(e, n) {
    null !== e.body && (n ? e.reject(n) : e.resolve(), e.type = null, e.stream = null, e.resolve = null, e.reject = null, e.length = 0, e.body = null);
}
module.exports = class extends s {
    constructor({ resume: e, abort: n, contentType: a = "", highWaterMark: t = 65536 }){
        super({
            autoDestroy: !0,
            read: e,
            highWaterMark: t
        }), this._readableState.dataEmitted = !1, this[E] = n, this[d] = null, this[u] = null, this[p] = a, this[g] = !1;
    }
    destroy(e) {
        return this.destroyed ? this : (e || this._readableState.endEmitted || (e = new o), e && this[E](), super.destroy(e));
    }
    emit(e, ...n) {
        return "data" === e ? this._readableState.dataEmitted = !0 : "error" === e && (this._readableState.errorEmitted = !0), super.emit(e, ...n);
    }
    on(e, ...n) {
        return "data" !== e && "readable" !== e || (this[g] = !0), super.on(e, ...n);
    }
    addListener(e, ...n) {
        return this.on(e, ...n);
    }
    off(e, ...n) {
        const a = super.off(e, ...n);
        return "data" !== e && "readable" !== e || (this[g] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), a;
    }
    removeListener(e, ...n) {
        return this.off(e, ...n);
    }
    push(e) {
        return this[d] && null !== e && 0 === this.readableLength ? (C(this[d], e), !this[g] || super.push(e)) : super.push(e);
    }
    async text() {
        return I(this, "text");
    }
    async json() {
        return I(this, "json");
    }
    async blob() {
        return I(this, "blob");
    }
    async arrayBuffer() {
        return I(this, "arrayBuffer");
    }
    async formData() {
        throw new r;
    }
    get bodyUsed() {
        return A.isDisturbed(this);
    }
    get body() {
        return this[u] || (this[u] = l(this), this[d] && (this[u].getReader(), t(this[u].locked))), this[u];
    }
    dump(e) {
        let n = e && Number.isFinite(e.limit) ? e.limit : 262144;
        const a = e && e.signal;
        if (a) try {
            if ("object" != typeof a || !("aborted" in a)) throw new i("signal must be an AbortSignal");
            A.throwIfAborted(a);
        } catch (e) {
            return Promise.reject(e);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e, t)=>{
            const s = a ? A.addAbortListener(a, ()=>{
                this.destroy();
            }) : T;
            this.on("close", function() {
                s(), a && a.aborted ? t(a.reason || Object.assign(new Error("The operation was aborted"), {
                    name: "AbortError"
                })) : e(null);
            }).on("error", T).on("data", function(e) {
                n -= e.length, n <= 0 && this.destroy();
            }).resume();
        });
    }
};
