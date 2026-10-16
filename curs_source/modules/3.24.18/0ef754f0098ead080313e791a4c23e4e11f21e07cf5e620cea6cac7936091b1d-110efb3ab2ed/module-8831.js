"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BinaryReader = exports.BinaryWriter = exports.WireType = void 0;
const t = require("./module-7084.js"), s = require("./module-3098.js"), o = require("./module-1498.js");
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
        for(let a = 0; a < this.chunks.length; a++)e += this.chunks[a].length;
        let a = new Uint8Array(e), n = 0;
        for(let e = 0; e < this.chunks.length; e++)a.set(this.chunks[e], n), n += this.chunks[e].length;
        return this.chunks = [], a;
    }
    fork() {
        return this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        }), this.chunks = [], this.buf = [], this;
    }
    join() {
        let e = this.finish(), a = this.stack.pop();
        if (!a) throw new Error("invalid state, fork stack empty");
        return this.chunks = a.chunks, this.buf = a.buf, this.uint32(e.byteLength), this.raw(e);
    }
    tag(e, a) {
        return this.uint32((e << 3 | a) >>> 0);
    }
    raw(e) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
    }
    uint32(e) {
        for((0, s.assertUInt32)(e); e > 127;)this.buf.push(127 & e | 128), e >>>= 7;
        return this.buf.push(e), this;
    }
    int32(e) {
        return (0, s.assertInt32)(e), (0, t.varint32write)(e, this.buf), this;
    }
    bool(e) {
        return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
        let a = this.textEncoder.encode(e);
        return this.uint32(a.byteLength), this.raw(a);
    }
    float(e) {
        (0, s.assertFloat32)(e);
        let a = new Uint8Array(4);
        return new DataView(a.buffer).setFloat32(0, e, !0), this.raw(a);
    }
    double(e) {
        let a = new Uint8Array(8);
        return new DataView(a.buffer).setFloat64(0, e, !0), this.raw(a);
    }
    fixed32(e) {
        (0, s.assertUInt32)(e);
        let a = new Uint8Array(4);
        return new DataView(a.buffer).setUint32(0, e, !0), this.raw(a);
    }
    sfixed32(e) {
        (0, s.assertInt32)(e);
        let a = new Uint8Array(4);
        return new DataView(a.buffer).setInt32(0, e, !0), this.raw(a);
    }
    sint32(e) {
        return (0, s.assertInt32)(e), e = (e << 1 ^ e >> 31) >>> 0, (0, t.varint32write)(e, this.buf), this;
    }
    sfixed64(e) {
        let a = new Uint8Array(8), n = new DataView(a.buffer), t = o.protoInt64.enc(e);
        return n.setInt32(0, t.lo, !0), n.setInt32(4, t.hi, !0), this.raw(a);
    }
    fixed64(e) {
        let a = new Uint8Array(8), n = new DataView(a.buffer), t = o.protoInt64.uEnc(e);
        return n.setInt32(0, t.lo, !0), n.setInt32(4, t.hi, !0), this.raw(a);
    }
    int64(e) {
        let a = o.protoInt64.enc(e);
        return (0, t.varint64write)(a.lo, a.hi, this.buf), this;
    }
    sint64(e) {
        let a = o.protoInt64.enc(e), n = a.hi >> 31, s = a.lo << 1 ^ n, r = (a.hi << 1 | a.lo >>> 31) ^ n;
        return (0, t.varint64write)(s, r, this.buf), this;
    }
    uint64(e) {
        let a = o.protoInt64.uEnc(e);
        return (0, t.varint64write)(a.lo, a.hi, this.buf), this;
    }
};
exports.BinaryReader = class {
    constructor(e, a){
        this.varint64 = t.varint64read, this.uint32 = t.varint32read, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != a ? a : new TextDecoder;
    }
    tag() {
        let e = this.uint32(), a = e >>> 3, n = 7 & e;
        if (a <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + a + " wire type " + n);
        return [
            a,
            n
        ];
    }
    skip(e, a) {
        let n = this.pos;
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
                let n = this.uint32();
                this.pos += n;
                break;
            case r.StartGroup:
                for(;;){
                    const [e, n] = this.tag();
                    if (n === r.EndGroup) {
                        if (void 0 !== a && e !== a) throw new Error("invalid end group tag");
                        break;
                    }
                    this.skip(n, e);
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
        let [e, a] = this.varint64(), n = -(1 & e);
        return e = (e >>> 1 | (1 & a) << 31) ^ n, a = a >>> 1 ^ n, o.protoInt64.dec(e, a);
    }
    bool() {
        let [e, a] = this.varint64();
        return 0 !== e || 0 !== a;
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
        let e = this.uint32(), a = this.pos;
        return this.pos += e, this.assertBounds(), this.buf.subarray(a, a + e);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
};
