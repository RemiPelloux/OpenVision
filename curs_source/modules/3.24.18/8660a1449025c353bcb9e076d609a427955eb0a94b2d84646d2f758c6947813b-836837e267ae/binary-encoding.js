import { C$e } from "./assert_2.js";
import { R_t, X9 } from "./proto-int64.js";
import { E } from "./tslib.es6.js";
import { Bud } from "./varint.js";
import { Cud, FMo, Fud, NMo, vEy, yEy, z_r } from "./ze.js";
var Gse, zMo, VMo;
export { Gse, VMo, zMo };
var __wakaru_KMo_initialized = false;
export function KMo() {
if (__wakaru_KMo_initialized) return;
__wakaru_KMo_initialized = true;
"use strict";
E(), Bud(), C$e(), R_t(), Gse = ((t)=>(t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32", t))(Gse || {}), zMo = class {
    constructor(t){
        this.stack = [], this.textEncoder = t ?? new TextEncoder, this.chunks = [], this.buf = [];
    }
    finish() {
        this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
        let t = 0;
        for(let i = 0; i < this.chunks.length; i++)t += this.chunks[i].length;
        let e = new Uint8Array(t), n = 0;
        for(let i = 0; i < this.chunks.length; i++)e.set(this.chunks[i], n), n += this.chunks[i].length;
        return this.chunks = [], e;
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }), this.chunks = [], this.buf = [], this;
    }
    join() {
        let t = this.finish(), e = this.stack.pop();
        if (!e) throw new Error("invalid state, fork stack empty");
        return this.chunks = e.chunks, this.buf = e.buf, this.uint32(t.byteLength), this.raw(t);
    }
    tag(t, e) {
        return this.uint32((t << 3 | e) >>> 0);
    }
    raw(t) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(t), this;
    }
    uint32(t) {
        for(NMo(t); t > 127;)this.buf.push(t & 127 | 128), t = t >>> 7;
        return this.buf.push(t), this;
    }
    int32(t) {
        return z_r(t), Fud(t, this.buf), this;
    }
    bool(t) {
        return this.buf.push(t ? 1 : 0), this;
    }
    bytes(t) {
        return this.uint32(t.byteLength), this.raw(t);
    }
    string(t) {
        let e = this.textEncoder.encode(t);
        return this.uint32(e.byteLength), this.raw(e);
    }
    float(t) {
        Cud(t);
        let e = new Uint8Array(4);
        return new DataView(e.buffer).setFloat32(0, t, !0), this.raw(e);
    }
    double(t) {
        let e = new Uint8Array(8);
        return new DataView(e.buffer).setFloat64(0, t, !0), this.raw(e);
    }
    fixed32(t) {
        NMo(t);
        let e = new Uint8Array(4);
        return new DataView(e.buffer).setUint32(0, t, !0), this.raw(e);
    }
    sfixed32(t) {
        z_r(t);
        let e = new Uint8Array(4);
        return new DataView(e.buffer).setInt32(0, t, !0), this.raw(e);
    }
    sint32(t) {
        return z_r(t), t = (t << 1 ^ t >> 31) >>> 0, Fud(t, this.buf), this;
    }
    sfixed64(t) {
        let e = new Uint8Array(8), n = new DataView(e.buffer), i = X9.enc(t);
        return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(e);
    }
    fixed64(t) {
        let e = new Uint8Array(8), n = new DataView(e.buffer), i = X9.uEnc(t);
        return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(e);
    }
    int64(t) {
        let e = X9.enc(t);
        return FMo(e.lo, e.hi, this.buf), this;
    }
    sint64(t) {
        let e = X9.enc(t), n = e.hi >> 31, i = e.lo << 1 ^ n, r = (e.hi << 1 | e.lo >>> 31) ^ n;
        return FMo(i, r, this.buf), this;
    }
    uint64(t) {
        let e = X9.uEnc(t);
        return FMo(e.lo, e.hi, this.buf), this;
    }
}, VMo = class {
    constructor(t, e){
        this.varint64 = vEy, this.uint32 = yEy, this.buf = t, this.len = t.length, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength), this.textDecoder = e ?? new TextDecoder;
    }
    tag() {
        let t = this.uint32(), e = t >>> 3, n = t & 7;
        if (e <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + e + " wire type " + n);
        return [
            e,
            n
        ];
    }
    skip(t, e) {
        let n = this.pos;
        switch(t){
            case 0:
                for(; this.buf[this.pos++] & 128;);
                break;
            case 1:
                this.pos += 4;
            case 5:
                this.pos += 4;
                break;
            case 2:
                let i = this.uint32();
                this.pos += i;
                break;
            case 3:
                for(;;){
                    const [r, s] = this.tag();
                    if (s === 4) {
                        if (e !== void 0 && r !== e) throw new Error("invalid end group tag");
                        break;
                    }
                    this.skip(s, r);
                }
                break;
            default:
                throw new Error("cant skip wire type " + t);
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
        let t = this.uint32();
        return t >>> 1 ^ -(t & 1);
    }
    int64() {
        return X9.dec(...this.varint64());
    }
    uint64() {
        return X9.uDec(...this.varint64());
    }
    sint64() {
        let [t, e] = this.varint64(), n = -(t & 1);
        return t = (t >>> 1 | (e & 1) << 31) ^ n, e = e >>> 1 ^ n, X9.dec(t, e);
    }
    bool() {
        let [t, e] = this.varint64();
        return t !== 0 || e !== 0;
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
        return X9.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
        return X9.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
        let t = this.uint32(), e = this.pos;
        return this.pos += t, this.assertBounds(), this.buf.subarray(e, e + t);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
};

}
