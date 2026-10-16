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
        for(let t = 0; t < this.chunks.length; t++)e += this.chunks[t].length;
        let t = new Uint8Array(e), A = 0;
        for(let e = 0; e < this.chunks.length; e++)t.set(this.chunks[e], A), A += this.chunks[e].length;
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
        let t = this.textEncoder.encode(e);
        return this.uint32(t.byteLength), this.raw(t);
    }
    float(e) {
        (0, r.assertFloat32)(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
    }
    double(e) {
        let t = new Uint8Array(8);
        return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
    }
    fixed32(e) {
        (0, r.assertUInt32)(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
    }
    sfixed32(e) {
        (0, r.assertInt32)(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
    }
    sint32(e) {
        return (0, r.assertInt32)(e), e = (e << 1 ^ e >> 31) >>> 0, (0, n.varint32write)(e, this.buf), this;
    }
    sfixed64(e) {
        let t = new Uint8Array(8), A = new DataView(t.buffer), n = o.protoInt64.enc(e);
        return A.setInt32(0, n.lo, !0), A.setInt32(4, n.hi, !0), this.raw(t);
    }
    fixed64(e) {
        let t = new Uint8Array(8), A = new DataView(t.buffer), n = o.protoInt64.uEnc(e);
        return A.setInt32(0, n.lo, !0), A.setInt32(4, n.hi, !0), this.raw(t);
    }
    int64(e) {
        let t = o.protoInt64.enc(e);
        return (0, n.varint64write)(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
        let t = o.protoInt64.enc(e), A = t.hi >> 31, r = t.lo << 1 ^ A, s = (t.hi << 1 | t.lo >>> 31) ^ A;
        return (0, n.varint64write)(r, s, this.buf), this;
    }
    uint64(e) {
        let t = o.protoInt64.uEnc(e);
        return (0, n.varint64write)(t.lo, t.hi, this.buf), this;
    }
};
exports.BinaryReader = class {
    constructor(e, t){
        this.varint64 = n.varint64read, this.uint32 = n.varint32read, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != t ? t : new TextDecoder;
    }
    tag() {
        let e = this.uint32(), t = e >>> 3, A = 7 & e;
        if (t <= 0 || A < 0 || A > 5) throw new Error("illegal tag: field no " + t + " wire type " + A);
        return [
            t,
            A
        ];
    }
    skip(e, t) {
        let A = this.pos;
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
                let A = this.uint32();
                this.pos += A;
                break;
            case s.StartGroup:
                for(;;){
                    const [e, A] = this.tag();
                    if (A === s.EndGroup) {
                        if (void 0 !== t && e !== t) throw new Error("invalid end group tag");
                        break;
                    }
                    this.skip(A, e);
                }
                break;
            default:
                throw new Error("cant skip wire type " + e);
        }
        return this.assertBounds(), this.buf.subarray(A, this.pos);
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
        let [e, t] = this.varint64(), A = -(1 & e);
        return e = (e >>> 1 | (1 & t) << 31) ^ A, t = t >>> 1 ^ A, o.protoInt64.dec(e, t);
    }
    bool() {
        let [e, t] = this.varint64();
        return 0 !== e || 0 !== t;
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
        let e = this.uint32(), t = this.pos;
        return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
};
