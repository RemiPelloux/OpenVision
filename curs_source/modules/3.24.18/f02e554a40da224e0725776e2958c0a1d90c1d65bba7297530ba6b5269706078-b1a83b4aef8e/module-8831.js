"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BinaryReader = exports.BinaryWriter = exports.WireType = void 0;
const n = require("./module-7084.js"), s = require("./module-3098.js"), i = require("./module-1498.js");
var o;
!function(t) {
    t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32";
}(o || (exports.WireType = o = {}));
exports.BinaryWriter = class {
    constructor(t){
        this.stack = [], this.textEncoder = null != t ? t : new TextEncoder, this.chunks = [], this.buf = [];
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let t = 0;
        for(let e = 0; e < this.chunks.length; e++)t += this.chunks[e].length;
        let e = new Uint8Array(t), r = 0;
        for(let t = 0; t < this.chunks.length; t++)e.set(this.chunks[t], r), r += this.chunks[t].length;
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
        for((0, s.assertUInt32)(t); t > 127;)this.buf.push(127 & t | 128), t >>>= 7;
        return this.buf.push(t), this;
    }
    int32(t) {
        return (0, s.assertInt32)(t), (0, n.varint32write)(t, this.buf), this;
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
        (0, s.assertFloat32)(t);
        let e = new Uint8Array(4);
        return new DataView(e.buffer).setFloat32(0, t, !0), this.raw(e);
    }
    double(t) {
        let e = new Uint8Array(8);
        return new DataView(e.buffer).setFloat64(0, t, !0), this.raw(e);
    }
    fixed32(t) {
        (0, s.assertUInt32)(t);
        let e = new Uint8Array(4);
        return new DataView(e.buffer).setUint32(0, t, !0), this.raw(e);
    }
    sfixed32(t) {
        (0, s.assertInt32)(t);
        let e = new Uint8Array(4);
        return new DataView(e.buffer).setInt32(0, t, !0), this.raw(e);
    }
    sint32(t) {
        return (0, s.assertInt32)(t), t = (t << 1 ^ t >> 31) >>> 0, (0, n.varint32write)(t, this.buf), this;
    }
    sfixed64(t) {
        let e = new Uint8Array(8), r = new DataView(e.buffer), n = i.protoInt64.enc(t);
        return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(e);
    }
    fixed64(t) {
        let e = new Uint8Array(8), r = new DataView(e.buffer), n = i.protoInt64.uEnc(t);
        return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(e);
    }
    int64(t) {
        let e = i.protoInt64.enc(t);
        return (0, n.varint64write)(e.lo, e.hi, this.buf), this;
    }
    sint64(t) {
        let e = i.protoInt64.enc(t), r = e.hi >> 31, s = e.lo << 1 ^ r, o = (e.hi << 1 | e.lo >>> 31) ^ r;
        return (0, n.varint64write)(s, o, this.buf), this;
    }
    uint64(t) {
        let e = i.protoInt64.uEnc(t);
        return (0, n.varint64write)(e.lo, e.hi, this.buf), this;
    }
};
exports.BinaryReader = class {
    constructor(t, e){
        this.varint64 = n.varint64read, this.uint32 = n.varint32read, this.buf = t, this.len = t.length, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength), this.textDecoder = null != e ? e : new TextDecoder;
    }
    tag() {
        let t = this.uint32(), e = t >>> 3, r = 7 & t;
        if (e <= 0 || r < 0 || r > 5) throw new Error("illegal tag: field no " + e + " wire type " + r);
        return [
            e,
            r
        ];
    }
    skip(t, e) {
        let r = this.pos;
        switch(t){
            case o.Varint:
                for(; 128 & this.buf[this.pos++];);
                break;
            case o.Bit64:
                this.pos += 4;
            case o.Bit32:
                this.pos += 4;
                break;
            case o.LengthDelimited:
                let r = this.uint32();
                this.pos += r;
                break;
            case o.StartGroup:
                for(;;){
                    const [t, r] = this.tag();
                    if (r === o.EndGroup) {
                        if (void 0 !== e && t !== e) throw new Error("invalid end group tag");
                        break;
                    }
                    this.skip(r, t);
                }
                break;
            default:
                throw new Error("cant skip wire type " + t);
        }
        return this.assertBounds(), this.buf.subarray(r, this.pos);
    }
    assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
        return 0 | this.uint32();
    }
    sint32() {
        let t = this.uint32();
        return t >>> 1 ^ -(1 & t);
    }
    int64() {
        return i.protoInt64.dec(...this.varint64());
    }
    uint64() {
        return i.protoInt64.uDec(...this.varint64());
    }
    sint64() {
        let [t, e] = this.varint64(), r = -(1 & t);
        return t = (t >>> 1 | (1 & e) << 31) ^ r, e = e >>> 1 ^ r, i.protoInt64.dec(t, e);
    }
    bool() {
        let [t, e] = this.varint64();
        return 0 !== t || 0 !== e;
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
        return i.protoInt64.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
        return i.protoInt64.dec(this.sfixed32(), this.sfixed32());
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
