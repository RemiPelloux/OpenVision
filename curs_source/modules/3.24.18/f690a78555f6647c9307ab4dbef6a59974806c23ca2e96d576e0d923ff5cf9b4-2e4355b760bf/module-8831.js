"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BinaryReader = exports.BinaryWriter = exports.WireType = void 0;
const n = require("./module-7084.js"), r = require("./module-3098.js"), o = require("./module-1498.js");
var s;
!function(e) {
    e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32";
}(s || (exports.WireType = s = {}));
exports.BinaryWriter = class {
    constructor(e){
        this.stack = [], this.textEncoder = null != e ? e : new TextEncoder, this.chunks = [], this.buf = [];
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for(let A = 0; A < this.chunks.length; A++)e += this.chunks[A].length;
        let A = new Uint8Array(e), t = 0;
        for(let e = 0; e < this.chunks.length; e++)A.set(this.chunks[e], t), t += this.chunks[e].length;
        return this.chunks = [], A;
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }), this.chunks = [], this.buf = [], this;
    }
    join() {
        let e = this.finish(), A = this.stack.pop();
        if (!A) throw new Error("invalid state, fork stack empty");
        return this.chunks = A.chunks, this.buf = A.buf, this.uint32(e.byteLength), this.raw(e);
    }
    tag(e, A) {
        return this.uint32((e << 3 | A) >>> 0);
    }
    raw(e) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
    }
    uint32(e) {
        for((0, r.assertUInt32)(e); e > 127;)this.buf.push(127 & e | 128), e >>>= 7;
        return this.buf.push(e), this;
    }
    int32(e) {
        return (0, r.assertInt32)(e), (0, n.varint32write)(e, this.buf), this;
    }
    bool(e) {
        return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
        let A = this.textEncoder.encode(e);
        return this.uint32(A.byteLength), this.raw(A);
    }
    float(e) {
        (0, r.assertFloat32)(e);
        let A = new Uint8Array(4);
        return new DataView(A.buffer).setFloat32(0, e, !0), this.raw(A);
    }
    double(e) {
        let A = new Uint8Array(8);
        return new DataView(A.buffer).setFloat64(0, e, !0), this.raw(A);
    }
    fixed32(e) {
        (0, r.assertUInt32)(e);
        let A = new Uint8Array(4);
        return new DataView(A.buffer).setUint32(0, e, !0), this.raw(A);
    }
    sfixed32(e) {
        (0, r.assertInt32)(e);
        let A = new Uint8Array(4);
        return new DataView(A.buffer).setInt32(0, e, !0), this.raw(A);
    }
    sint32(e) {
        return (0, r.assertInt32)(e), e = (e << 1 ^ e >> 31) >>> 0, (0, n.varint32write)(e, this.buf), this;
    }
    sfixed64(e) {
        let A = new Uint8Array(8), t = new DataView(A.buffer), n = o.protoInt64.enc(e);
        return t.setInt32(0, n.lo, !0), t.setInt32(4, n.hi, !0), this.raw(A);
    }
    fixed64(e) {
        let A = new Uint8Array(8), t = new DataView(A.buffer), n = o.protoInt64.uEnc(e);
        return t.setInt32(0, n.lo, !0), t.setInt32(4, n.hi, !0), this.raw(A);
    }
    int64(e) {
        let A = o.protoInt64.enc(e);
        return (0, n.varint64write)(A.lo, A.hi, this.buf), this;
    }
    sint64(e) {
        let A = o.protoInt64.enc(e), t = A.hi >> 31, r = A.lo << 1 ^ t, s = (A.hi << 1 | A.lo >>> 31) ^ t;
        return (0, n.varint64write)(r, s, this.buf), this;
    }
    uint64(e) {
        let A = o.protoInt64.uEnc(e);
        return (0, n.varint64write)(A.lo, A.hi, this.buf), this;
    }
};
exports.BinaryReader = class {
    constructor(e, A){
        this.varint64 = n.varint64read, this.uint32 = n.varint32read, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != A ? A : new TextDecoder;
    }
    tag() {
        let e = this.uint32(), A = e >>> 3, t = 7 & e;
        if (A <= 0 || t < 0 || t > 5) throw new Error("illegal tag: field no " + A + " wire type " + t);
        return [
            A,
            t
        ];
    }
    skip(e, A) {
        let t = this.pos;
        switch(e){
            case s.Varint:
                for(; 128 & this.buf[this.pos++];);
                break;
            case s.Bit64:
                this.pos += 4;
            case s.Bit32:
                this.pos += 4;
                break;
            case s.LengthDelimited:
                let t = this.uint32();
                this.pos += t;
                break;
            case s.StartGroup:
                for(;;){
                    const [e, t] = this.tag();
                    if (t === s.EndGroup) {
                        if (void 0 !== A && e !== A) throw new Error("invalid end group tag");
                        break;
                    }
                    this.skip(t, e);
                }
                break;
            default:
                throw new Error("cant skip wire type " + e);
        }
        return this.assertBounds(), this.buf.subarray(t, this.pos);
    }
    assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
        return 0 | this.uint32();
    }
    sint32() {
        let e = this.uint32();
        return e >>> 1 ^ -(1 & e);
    }
    int64() {
        return o.protoInt64.dec(...this.varint64());
    }
    uint64() {
        return o.protoInt64.uDec(...this.varint64());
    }
    sint64() {
        let [e, A] = this.varint64(), t = -(1 & e);
        return e = (e >>> 1 | (1 & A) << 31) ^ t, A = A >>> 1 ^ t, o.protoInt64.dec(e, A);
    }
    bool() {
        let [e, A] = this.varint64();
        return 0 !== e || 0 !== A;
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
        return o.protoInt64.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
        return o.protoInt64.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
        let e = this.uint32(), A = this.pos;
        return this.pos += e, this.assertBounds(), this.buf.subarray(A, A + e);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
};
