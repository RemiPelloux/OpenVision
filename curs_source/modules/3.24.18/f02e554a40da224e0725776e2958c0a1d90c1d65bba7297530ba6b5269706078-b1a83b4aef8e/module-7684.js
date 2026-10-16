"use strict";
require.d(exports, {
    $t: ()=>l,
    Fn: ()=>a,
    OO: ()=>f,
    V0: ()=>c,
    qb: ()=>m,
    zK: ()=>d
});
var n = require("./module-328.js"), s = require("./module-8032.js"), i = require("./module-3352.js"), o = require("./module-278.js");
function a(t) {
    return new u(t);
}
class u {
    constructor(t){
        this.readMaxBytes = t, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
    }
    get byteLength() {
        return this.buf.reduce((t, e)=>t + e.byteLength, 0);
    }
    decode(t) {
        this.buf.push(t);
        const e = [];
        for(;;){
            let t = this.pop();
            if (!t) break;
            e.push(t);
        }
        return e;
    }
    pop() {
        if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
            const t = this.env;
            return this.env = void 0, t;
        }
    }
    head() {
        if (!this.cons(this.header)) return;
        const t = this.headerView.getUint8(0), e = this.headerView.getUint32(1);
        return (0, o.kk)(this.readMaxBytes, e, !0), {
            flags: t,
            data: new Uint8Array(e)
        };
    }
    cons(t) {
        const e = t.byteLength;
        if (this.byteLength < e) return !1;
        let r = 0;
        for(; r < e;){
            const n = this.buf.shift();
            n.byteLength > e - r ? (t.set(n.subarray(0, e - r), r), this.buf.unshift(n.subarray(e - r)), r += e - r) : (t.set(n, r), r += n.byteLength);
        }
        return !0;
    }
}
function c(t) {
    let e;
    const r = a(4294967295);
    return new ReadableStream({
        start () {
            e = t.getReader();
        },
        async pull (t) {
            let i = !1;
            for(; !i;){
                const o = await e.read();
                if (o.done) r.byteLength > 0 && t.error(new n.T("protocol error: incomplete envelope", s.C.InvalidArgument)), t.close();
                else for (const e of r.decode(o.value))t.enqueue(e), i = !0;
            }
        }
    });
}
async function l(t, e, r) {
    let { flags: o, data: a } = t;
    if ((o & i.y) === i.y) throw new n.T("invalid envelope, already compressed", s.C.Internal);
    return e && a.byteLength >= r && (a = await e.compress(a), o |= i.y), {
        data: a,
        flags: o
    };
}
async function m(t, e, r) {
    let { flags: o, data: a } = t;
    if ((o & i.y) === i.y) {
        if (!e) throw new n.T("received compressed envelope, but do not know how to decompress", s.C.Internal);
        a = await e.decompress(a, r), o ^= i.y;
    }
    return {
        data: a,
        flags: o
    };
}
function d(t, e) {
    const r = new Uint8Array(e.length + 5);
    r.set(e, 5);
    const n = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return n.setUint8(0, t), n.setUint32(1, e.length), r;
}
function f(...t) {
    const e = t.reduce((t, e)=>t + e.data.length + 5, 0), r = new Uint8Array(e), n = new DataView(r.buffer);
    let s = 0;
    for (const e of t)n.setUint8(s, e.flags), n.setUint32(s + 1, e.data.length), r.set(e.data, s + 5), s += e.data.length + 5;
    return r;
}
