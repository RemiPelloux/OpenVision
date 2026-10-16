"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BinaryReader = exports.BinaryWriter = exports.WireType = void 0;
const a = require("./module-7084.js"), s = require("./module-3098.js"), o = require("./module-1498.js");
var r;
!function(e) {
    e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32";
}(r || (exports.WireType = r = {}));
exports.BinaryWriter = class {
    constructor(e){
        this.stack = [], this.textEncoder = null != e ? e : new TextEncoder, this.chunks = [], this.buf = [];
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for(let n = 0; n < this.chunks.length; n++)e += this.chunks[n].length;
        let n = new Uint8Array(e), t = 0;
        for(let e = 0; e < this.chunks.length; e++)n.set(this.chunks[e], t), t += this.chunks[e].length;
        return this.chunks = [], n;
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }), this.chunks = [], this.buf = [], this;
    }
    join() {
        let e = this.finish(), n = this.stack.pop();
        if (!n) throw new Error("invalid state, fork stack empty");
        return this.chunks = n.chunks, this.buf = n.buf, this.uint32(e.byteLength), this.raw(e);
    }
    tag(e, n) {
        return this.uint32((e << 3 | n) >>> 0);
    }
    raw(e) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
    }
    uint32(e) {
        for((0, s.assertUInt32)(e); e > 127;)this.buf.push(127 & e | 128), e >>>= 7;
        return this.buf.push(e), this;
    }
    int32(e) {
        return (0, s.assertInt32)(e), (0, a.varint32write)(e, this.buf), this;
    }
    bool(e) {
        return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
        let n = this.textEncoder.encode(e);
        return this.uint32(n.byteLength), this.raw(n);
    }
    float(e) {
        (0, s.assertFloat32)(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
    }
    double(e) {
        let n = new Uint8Array(8);
        return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
    }
    fixed32(e) {
        (0, s.assertUInt32)(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
    }
    sfixed32(e) {
        (0, s.assertInt32)(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
    }
    sint32(e) {
        return (0, s.assertInt32)(e), e = (e << 1 ^ e >> 31) >>> 0, (0, a.varint32write)(e, this.buf), this;
    }
    sfixed64(e) {
        let n = new Uint8Array(8), t = new DataView(n.buffer), a = o.protoInt64.enc(e);
        return t.setInt32(0, a.lo, !0), t.setInt32(4, a.hi, !0), this.raw(n);
    }
    fixed64(e) {
        let n = new Uint8Array(8), t = new DataView(n.buffer), a = o.protoInt64.uEnc(e);
        return t.setInt32(0, a.lo, !0), t.setInt32(4, a.hi, !0), this.raw(n);
    }
    int64(e) {
        let n = o.protoInt64.enc(e);
        return (0, a.varint64write)(n.lo, n.hi, this.buf), this;
    }
    sint64(e) {
        let n = o.protoInt64.enc(e), t = n.hi >> 31, s = n.lo << 1 ^ t, r = (n.hi << 1 | n.lo >>> 31) ^ t;
        return (0, a.varint64write)(s, r, this.buf), this;
    }
    uint64(e) {
        let n = o.protoInt64.uEnc(e);
        return (0, a.varint64write)(n.lo, n.hi, this.buf), this;
    }
};
exports.BinaryReader = class {
    constructor(e, n){
        this.varint64 = a.varint64read, this.uint32 = a.varint32read, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != n ? n : new TextDecoder;
    }
    tag() {
        let e = this.uint32(), n = e >>> 3, t = 7 & e;
        if (n <= 0 || t < 0 || t > 5) throw new Error("illegal tag: field no " + n + " wire type " + t);
        return [
            n,
            t
        ];
    }
    skip(e, n) {
        let t = this.pos;
        switch(e){
            case r.Varint:
                for(; 128 & this.buf[this.pos++];);
                break;
            case r.Bit64:
                this.pos += 4;
            case r.Bit32:
                this.pos += 4;
                break;
            case r.LengthDelimited:
                let t = this.uint32();
                this.pos += t;
                break;
            case r.StartGroup:
                for(;;){
                    const [e, t] = this.tag();
                    if (t === r.EndGroup) {
                        if (void 0 !== n && e !== n) throw new Error("invalid end group tag");
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
        let [e, n] = this.varint64(), t = -(1 & e);
        return e = (e >>> 1 | (1 & n) << 31) ^ t, n = n >>> 1 ^ t, o.protoInt64.dec(e, n);
    }
    bool() {
        let [e, n] = this.varint64();
        return 0 !== e || 0 !== n;
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
        let e = this.uint32(), n = this.pos;
        return this.pos += e, this.assertBounds(), this.buf.subarray(n, n + e);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
};
