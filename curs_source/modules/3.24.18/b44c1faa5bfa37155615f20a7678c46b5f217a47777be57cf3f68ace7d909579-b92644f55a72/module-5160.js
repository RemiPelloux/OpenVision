"use strict";
const n = require("./module-42613.js"), { Readable: s } = require("./module-2203.js"), { RequestAbortedError: o, NotSupportedError: i, InvalidArgumentError: a } = require("./module-48762.js"), c = require("./module-83589.js"), { ReadableStreamFrom: l, toUSVString: u } = require("./module-83589.js");
let d;
const p = Symbol("kConsume"), m = Symbol("kReading"), h = Symbol("kBody"), f = Symbol("abort"), g = Symbol("kContentType"), y = ()=>{};
function w(e) {
    return c.isDisturbed(e) || function(e) {
        return e[h] && !0 === e[h].locked || e[p];
    }(e);
}
async function v(e, t) {
    if (w(e)) throw new TypeError("unusable");
    return n(!e[p]), new Promise((r, n)=>{
        e[p] = {
            type: t,
            stream: e,
            resolve: r,
            reject: n,
            length: 0,
            body: []
        }, e.on("error", function(e) {
            b(this[p], e);
        }).on("close", function() {
            null !== this[p].body && b(this[p], new o);
        }), process.nextTick(_, e[p]);
    });
}
function _(e) {
    if (null === e.body) return;
    const { _readableState: t } = e.stream;
    for (const r of t.buffer)S(e, r);
    for(t.endEmitted ? A(this[p]) : e.stream.on("end", function() {
        A(this[p]);
    }), e.stream.resume(); null != e.stream.read(););
}
function A(e) {
    const { type: t, body: n, resolve: s, stream: o, length: i } = e;
    try {
        if ("text" === t) s(u(Buffer.concat(n)));
        else if ("json" === t) s(JSON.parse(Buffer.concat(n)));
        else if ("arrayBuffer" === t) {
            const e = new Uint8Array(i);
            let t = 0;
            for (const r of n)e.set(r, t), t += r.byteLength;
            s(e.buffer);
        } else "blob" === t && (d || (d = require("./module-20181.js").Blob), s(new d(n, {
            type: o[g]
        })));
        b(e);
    } catch (e) {
        o.destroy(e);
    }
}
function S(e, t) {
    e.length += t.length, e.body.push(t);
}
function b(e, t) {
    null !== e.body && (t ? e.reject(t) : e.resolve(), e.type = null, e.stream = null, e.resolve = null, e.reject = null, e.length = 0, e.body = null);
}
module.exports = class extends s {
    constructor({ resume: e, abort: t, contentType: r = "", highWaterMark: n = 65536 }){
        super({
            autoDestroy: !0,
            read: e,
            highWaterMark: n
        }), this._readableState.dataEmitted = !1, this[f] = t, this[p] = null, this[h] = null, this[g] = r, this[m] = !1;
    }
    destroy(e) {
        return this.destroyed ? this : (e || this._readableState.endEmitted || (e = new o), e && this[f](), super.destroy(e));
    }
    emit(e, ...t) {
        return "data" === e ? this._readableState.dataEmitted = !0 : "error" === e && (this._readableState.errorEmitted = !0), super.emit(e, ...t);
    }
    on(e, ...t) {
        return "data" !== e && "readable" !== e || (this[m] = !0), super.on(e, ...t);
    }
    addListener(e, ...t) {
        return this.on(e, ...t);
    }
    off(e, ...t) {
        const r = super.off(e, ...t);
        return "data" !== e && "readable" !== e || (this[m] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), r;
    }
    removeListener(e, ...t) {
        return this.off(e, ...t);
    }
    push(e) {
        return this[p] && null !== e && 0 === this.readableLength ? (S(this[p], e), !this[m] || super.push(e)) : super.push(e);
    }
    async text() {
        return v(this, "text");
    }
    async json() {
        return v(this, "json");
    }
    async blob() {
        return v(this, "blob");
    }
    async arrayBuffer() {
        return v(this, "arrayBuffer");
    }
    async formData() {
        throw new i;
    }
    get bodyUsed() {
        return c.isDisturbed(this);
    }
    get body() {
        return this[h] || (this[h] = l(this), this[p] && (this[h].getReader(), n(this[h].locked))), this[h];
    }
    dump(e) {
        let t = e && Number.isFinite(e.limit) ? e.limit : 262144;
        const r = e && e.signal;
        if (r) try {
            if ("object" != typeof r || !("aborted" in r)) throw new a("signal must be an AbortSignal");
            c.throwIfAborted(r);
        } catch (e) {
            return Promise.reject(e);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e, n)=>{
            const s = r ? c.addAbortListener(r, ()=>{
                this.destroy();
            }) : y;
            this.on("close", function() {
                s(), r && r.aborted ? n(r.reason || Object.assign(new Error("The operation was aborted"), {
                    name: "AbortError"
                })) : e(null);
            }).on("error", y).on("data", function(e) {
                t -= e.length, t <= 0 && this.destroy();
            }).resume();
        });
    }
};
