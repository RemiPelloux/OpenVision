"use strict";
require.d(exports, {
    $t: ()=>u,
    Fn: ()=>a,
    OO: ()=>m,
    V0: ()=>l,
    qb: ()=>d,
    zK: ()=>p
});
var n = require("./module-92801.js"), s = require("./module-84959.js"), o = require("./module-59675.js"), i = require("./module-78503.js");
function a(e) {
    return new c(e);
}
class c {
    constructor(e){
        this.readMaxBytes = e, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
    }
    get byteLength() {
        return this.buf.reduce((e, t)=>e + t.byteLength, 0);
    }
    decode(e) {
        this.buf.push(e);
        const t = [];
        for(;;){
            let e = this.pop();
            if (!e) break;
            t.push(e);
        }
        return t;
    }
    pop() {
        if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
            const e = this.env;
            return this.env = void 0, e;
        }
    }
    head() {
        if (!this.cons(this.header)) return;
        const e = this.headerView.getUint8(0), t = this.headerView.getUint32(1);
        return (0, i.kk)(this.readMaxBytes, t, !0), {
            flags: e,
            data: new Uint8Array(t)
        };
    }
    cons(e) {
        const t = e.byteLength;
        if (this.byteLength < t) return !1;
        let r = 0;
        for(; r < t;){
            const n = this.buf.shift();
            n.byteLength > t - r ? (e.set(n.subarray(0, t - r), r), this.buf.unshift(n.subarray(t - r)), r += t - r) : (e.set(n, r), r += n.byteLength);
        }
        return !0;
    }
}
function l(e) {
    let t;
    const r = a(4294967295);
    return new ReadableStream({
        start () {
            t = e.getReader();
        },
        async pull (e) {
            let o = !1;
            for(; !o;){
                const i = await t.read();
                if (i.done) r.byteLength > 0 && e.error(new n.T("protocol error: incomplete envelope", s.C.InvalidArgument)), e.close();
                else for (const t of r.decode(i.value))e.enqueue(t), o = !0;
            }
        }
    });
}
async function u(e, t, r) {
    let { flags: i, data: a } = e;
    if ((i & o.y) === o.y) throw new n.T("invalid envelope, already compressed", s.C.Internal);
    return t && a.byteLength >= r && (a = await t.compress(a), i |= o.y), {
        data: a,
        flags: i
    };
}
async function d(e, t, r) {
    let { flags: i, data: a } = e;
    if ((i & o.y) === o.y) {
        if (!t) throw new n.T("received compressed envelope, but do not know how to decompress", s.C.Internal);
        a = await t.decompress(a, r), i ^= o.y;
    }
    return {
        data: a,
        flags: i
    };
}
function p(e, t) {
    const r = new Uint8Array(t.length + 5);
    r.set(t, 5);
    const n = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return n.setUint8(0, e), n.setUint32(1, t.length), r;
}
function m(...e) {
    const t = e.reduce((e, t)=>e + t.data.length + 5, 0), r = new Uint8Array(t), n = new DataView(r.buffer);
    let s = 0;
    for (const t of e)n.setUint8(s, t.flags), n.setUint32(s + 1, t.data.length), r.set(t.data, s + 5), s += t.data.length + 5;
    return r;
}
