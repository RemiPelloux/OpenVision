"use strict";
const n = require("./module-2613.js"), { Readable: s } = require("./module-2203.js"), { RequestAbortedError: i, NotSupportedError: o, InvalidArgumentError: a } = require("./module-8762.js"), u = require("./module-3589.js"), { ReadableStreamFrom: c, toUSVString: l } = require("./module-3589.js");
let m;
const d = Symbol("kConsume"), f = Symbol("kReading"), p = Symbol("kBody"), h = Symbol("abort"), g = Symbol("kContentType"), A = ()=>{};
function _(t) {
    return u.isDisturbed(t) || function(t) {
        return t[p] && !0 === t[p].locked || t[d];
    }(t);
}
async function y(t, e) {
    if (_(t)) throw new TypeError("unusable");
    return n(!t[d]), new Promise((r, n)=>{
        t[d] = {
            type: e,
            stream: t,
            resolve: r,
            reject: n,
            length: 0,
            body: []
        }, t.on("error", function(t) {
            B(this[d], t);
        }).on("close", function() {
            null !== this[d].body && B(this[d], new i);
        }), process.nextTick(w, t[d]);
    });
}
function w(t) {
    if (null === t.body) return;
    const { _readableState: e } = t.stream;
    for (const r of e.buffer)J(t, r);
    for(e.endEmitted ? S(this[d]) : t.stream.on("end", function() {
        S(this[d]);
    }), t.stream.resume(); null != t.stream.read(););
}
function S(t) {
    const { type: e, body: n, resolve: s, stream: i, length: o } = t;
    try {
        if ("text" === e) s(l(Buffer.concat(n)));
        else if ("json" === e) s(JSON.parse(Buffer.concat(n)));
        else if ("arrayBuffer" === e) {
            const t = new Uint8Array(o);
            let e = 0;
            for (const r of n)t.set(r, e), e += r.byteLength;
            s(t.buffer);
        } else "blob" === e && (m || (m = require("./module-181.js").Blob), s(new m(n, {
            type: i[g]
        })));
        B(t);
    } catch (t) {
        i.destroy(t);
    }
}
function J(t, e) {
    t.length += e.length, t.body.push(e);
}
function B(t, e) {
    null !== t.body && (e ? t.reject(e) : t.resolve(), t.type = null, t.stream = null, t.resolve = null, t.reject = null, t.length = 0, t.body = null);
}
module.exports = class extends s {
    constructor({ resume: t, abort: e, contentType: r = "", highWaterMark: n = 65536 }){
        super({
            autoDestroy: !0,
            read: t,
            highWaterMark: n
        }), this._readableState.dataEmitted = !1, this[h] = e, this[d] = null, this[p] = null, this[g] = r, this[f] = !1;
    }
    destroy(t) {
        return this.destroyed ? this : (t || this._readableState.endEmitted || (t = new i), t && this[h](), super.destroy(t));
    }
    emit(t, ...e) {
        return "data" === t ? this._readableState.dataEmitted = !0 : "error" === t && (this._readableState.errorEmitted = !0), super.emit(t, ...e);
    }
    on(t, ...e) {
        return "data" !== t && "readable" !== t || (this[f] = !0), super.on(t, ...e);
    }
    addListener(t, ...e) {
        return this.on(t, ...e);
    }
    off(t, ...e) {
        const r = super.off(t, ...e);
        return "data" !== t && "readable" !== t || (this[f] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), r;
    }
    removeListener(t, ...e) {
        return this.off(t, ...e);
    }
    push(t) {
        return this[d] && null !== t && 0 === this.readableLength ? (J(this[d], t), !this[f] || super.push(t)) : super.push(t);
    }
    async text() {
        return y(this, "text");
    }
    async json() {
        return y(this, "json");
    }
    async blob() {
        return y(this, "blob");
    }
    async arrayBuffer() {
        return y(this, "arrayBuffer");
    }
    async formData() {
        throw new o;
    }
    get bodyUsed() {
        return u.isDisturbed(this);
    }
    get body() {
        return this[p] || (this[p] = c(this), this[d] && (this[p].getReader(), n(this[p].locked))), this[p];
    }
    dump(t) {
        let e = t && Number.isFinite(t.limit) ? t.limit : 262144;
        const r = t && t.signal;
        if (r) try {
            if ("object" != typeof r || !("aborted" in r)) throw new a("signal must be an AbortSignal");
            u.throwIfAborted(r);
        } catch (t) {
            return Promise.reject(t);
        }
        return this.closed ? Promise.resolve(null) : new Promise((t, n)=>{
            const s = r ? u.addAbortListener(r, ()=>{
                this.destroy();
            }) : A;
            this.on("close", function() {
                s(), r && r.aborted ? n(r.reason || Object.assign(new Error("The operation was aborted"), {
                    name: "AbortError"
                })) : t(null);
            }).on("error", A).on("data", function(t) {
                e -= t.length, e <= 0 && this.destroy();
            }).resume();
        });
    }
};
