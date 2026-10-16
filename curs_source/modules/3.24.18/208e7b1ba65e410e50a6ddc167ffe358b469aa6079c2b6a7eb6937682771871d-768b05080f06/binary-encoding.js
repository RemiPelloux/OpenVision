import { $i, ij, nj, rj, sj, tj } from "./assert_2.js";
import { In, ho } from "./proto-int64.js";
import { h } from "./tslib.es6.js";
import { hj } from "./varint.js";
function YS(e) {
    if (typeof e != "number") throw new Error("invalid int 32: " + typeof e);
    if (!Number.isInteger(e) || e > sj || e < ij) throw new Error("invalid int 32: " + e);
}
function SM(e) {
    if (typeof e != "number") throw new Error("invalid uint 32: " + typeof e);
    if (!Number.isInteger(e) || e > rj || e < 0) throw new Error("invalid uint 32: " + e);
}
function ej(e) {
    if (typeof e != "number") throw new Error("invalid float 32: " + typeof e);
    if (Number.isFinite(e) && (e > tj || e < nj)) throw new Error("invalid float 32: " + e);
}
function Rje() {
    let e = 0, t = 0;
    for(let r = 0; r < 28; r += 7){
        let s = this.buf[this.pos++];
        if (e |= (s & 127) << r, (s & 128) == 0) return this.assertBounds(), [
            e,
            t
        ];
    }
    let n = this.buf[this.pos++];
    if (e |= (n & 15) << 28, t = (n & 112) >> 4, (n & 128) == 0) return this.assertBounds(), [
        e,
        t
    ];
    for(let r = 3; r <= 31; r += 7){
        let s = this.buf[this.pos++];
        if (t |= (s & 127) << r, (s & 128) == 0) return this.assertBounds(), [
            e,
            t
        ];
    }
    throw new Error("invalid varint");
}
function EM(e, t, n) {
    for(let i = 0; i < 28; i = i + 7){
        const a = e >>> i, o = !(!(a >>> 7) && t == 0), l = (o ? a | 128 : a) & 255;
        if (n.push(l), !o) return;
    }
    const r = e >>> 28 & 15 | (t & 7) << 4, s = t >> 3 != 0;
    if (n.push((s ? r | 128 : r) & 255), !!s) {
        for(let i = 3; i < 31; i = i + 7){
            const a = t >>> i, o = !!(a >>> 7), l = (o ? a | 128 : a) & 255;
            if (n.push(l), !o) return;
        }
        n.push(t >>> 31 & 1);
    }
}
function pj(e, t) {
    if (e >= 0) {
        for(; e > 127;)t.push(e & 127 | 128), e = e >>> 7;
        t.push(e);
    } else {
        for(let n = 0; n < 9; n++)t.push(e & 127 | 128), e = e >> 7;
        t.push(1);
    }
}
function Aje() {
    let e = this.buf[this.pos++], t = e & 127;
    if ((e & 128) == 0) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (e & 127) << 7, (e & 128) == 0) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (e & 127) << 14, (e & 128) == 0) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (e & 127) << 21, (e & 128) == 0) return this.assertBounds(), t;
    e = this.buf[this.pos++], t |= (e & 15) << 28;
    for(let n = 5; (e & 128) !== 0 && n < 10; n++)e = this.buf[this.pos++];
    if ((e & 128) != 0) throw new Error("invalid varint");
    return this.assertBounds(), t >>> 0;
}
var jr, Rj, Cj;
export { Aje, Cj, EM, Rj, Rje, SM, YS, ej, jr, pj };
var __wakaru_OM_initialized = false;
export function OM() {
if (__wakaru_OM_initialized) return;
__wakaru_OM_initialized = true;
"use strict";
h(), hj(), $i(), ho(), jr = ((e)=>(e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32", e))(jr || {}), Rj = class {
    constructor(e){
        this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = [];
    }
    finish() {
        this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
        let e = 0;
        for(let r = 0; r < this.chunks.length; r++)e += this.chunks[r].length;
        let t = new Uint8Array(e), n = 0;
        for(let r = 0; r < this.chunks.length; r++)t.set(this.chunks[r], n), n += this.chunks[r].length;
        return this.chunks = [], t;
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }), this.chunks = [], this.buf = [], this;
    }
    join() {
        let e = this.finish(), t = this.stack.pop();
        if (!t) throw new Error("invalid state, fork stack empty");
        return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e);
    }
    tag(e, t) {
        return this.uint32((e << 3 | t) >>> 0);
    }
    raw(e) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
    }
    uint32(e) {
        for(SM(e); e > 127;)this.buf.push(e & 127 | 128), e = e >>> 7;
        return this.buf.push(e), this;
    }
    int32(e) {
        return YS(e), pj(e, this.buf), this;
    }
    bool(e) {
        return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
        let t = this.textEncoder.encode(e);
        return this.uint32(t.byteLength), this.raw(t);
    }
    float(e) {
        ej(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
    }
    double(e) {
        let t = new Uint8Array(8);
        return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
    }
    fixed32(e) {
        SM(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
    }
    sfixed32(e) {
        YS(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
    }
    sint32(e) {
        return YS(e), e = (e << 1 ^ e >> 31) >>> 0, pj(e, this.buf), this;
    }
    sfixed64(e) {
        let t = new Uint8Array(8), n = new DataView(t.buffer), r = In.enc(e);
        return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t);
    }
    fixed64(e) {
        let t = new Uint8Array(8), n = new DataView(t.buffer), r = In.uEnc(e);
        return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t);
    }
    int64(e) {
        let t = In.enc(e);
        return EM(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
        let t = In.enc(e), n = t.hi >> 31, r = t.lo << 1 ^ n, s = (t.hi << 1 | t.lo >>> 31) ^ n;
        return EM(r, s, this.buf), this;
    }
    uint64(e) {
        let t = In.uEnc(e);
        return EM(t.lo, t.hi, this.buf), this;
    }
}, Cj = class {
    constructor(e, t){
        this.varint64 = Rje, this.uint32 = Aje, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder;
    }
    tag() {
        let e = this.uint32(), t = e >>> 3, n = e & 7;
        if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
        return [
            t,
            n
        ];
    }
    skip(e, t) {
        let n = this.pos;
        switch(e){
            case 0:
                for(; this.buf[this.pos++] & 128;);
                break;
            case 1:
                this.pos += 4;
            case 5:
                this.pos += 4;
                break;
            case 2:
                let r = this.uint32();
                this.pos += r;
                break;
            case 3:
                for(;;){
                    const [s, i] = this.tag();
                    if (i === 4) {
                        if (t !== void 0 && s !== t) throw new Error("invalid end group tag");
                        break;
                    }
                    this.skip(i, s);
                }
                break;
            default:
                throw new Error("cant skip wire type " + e);
        }
        return this.assertBounds(), this.buf.subarray(n, this.pos);
    }
    assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
        return this.uint32() | 0;
    }
    sint32() {
        let e = this.uint32();
        return e >>> 1 ^ -(e & 1);
    }
    int64() {
        return In.dec(...this.varint64());
    }
    uint64() {
        return In.uDec(...this.varint64());
    }
    sint64() {
        let [e, t] = this.varint64(), n = -(e & 1);
        return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, In.dec(e, t);
    }
    bool() {
        let [e, t] = this.varint64();
        return e !== 0 || t !== 0;
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
        return In.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
        return In.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
        let e = this.uint32(), t = this.pos;
        return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
};

}
