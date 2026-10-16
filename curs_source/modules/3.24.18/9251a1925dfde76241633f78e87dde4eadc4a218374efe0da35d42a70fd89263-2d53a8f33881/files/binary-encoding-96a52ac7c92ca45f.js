import { assertFloat32, assertInt32, assertUInt32, varint32read, varint32write, varint64read, varint64write } from "../../../../../../../../external_exports.js";
import { init_varint } from "./google/varint.js";
import { init_assert } from "./private/assert.js";
import { init_proto_int64, protoInt64 } from "./proto-int64.js";
var WireType, BinaryWriter, BinaryReader;
export { BinaryReader, BinaryWriter, WireType };
var __wakaru_init_binary_encoding_initialized = false;
export function init_binary_encoding() {
if (__wakaru_init_binary_encoding_initialized) return;
__wakaru_init_binary_encoding_initialized = true;
init_varint();
init_assert();
init_proto_int64();
(function(WireType2) {
    WireType2[WireType2["Varint"] = 0] = "Varint";
    WireType2[WireType2["Bit64"] = 1] = "Bit64";
    WireType2[WireType2["LengthDelimited"] = 2] = "LengthDelimited";
    WireType2[WireType2["StartGroup"] = 3] = "StartGroup";
    WireType2[WireType2["EndGroup"] = 4] = "EndGroup";
    WireType2[WireType2["Bit32"] = 5] = "Bit32";
})(WireType || (WireType = {}));
BinaryWriter = class {
    constructor(textEncoder2){
        this.stack = [];
        this.textEncoder = textEncoder2 !== null && textEncoder2 !== void 0 ? textEncoder2 : new TextEncoder();
        this.chunks = [];
        this.buf = [];
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let len = 0;
        for(let i = 0; i < this.chunks.length; i++)len += this.chunks[i].length;
        let bytes = new Uint8Array(len);
        let offset = 0;
        for(let i = 0; i < this.chunks.length; i++){
            bytes.set(this.chunks[i], offset);
            offset += this.chunks[i].length;
        }
        this.chunks = [];
        return bytes;
    }
    fork() {
        this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        });
        this.chunks = [];
        this.buf = [];
        return this;
    }
    join() {
        let chunk = this.finish();
        let prev = this.stack.pop();
        if (!prev) throw new Error("invalid state, fork stack empty");
        this.chunks = prev.chunks;
        this.buf = prev.buf;
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
    }
    tag(fieldNo, type2) {
        return this.uint32((fieldNo << 3 | type2) >>> 0);
    }
    raw(chunk) {
        if (this.buf.length) {
            this.chunks.push(new Uint8Array(this.buf));
            this.buf = [];
        }
        this.chunks.push(chunk);
        return this;
    }
    uint32(value) {
        assertUInt32(value);
        while(value > 127){
            this.buf.push(value & 127 | 128);
            value = value >>> 7;
        }
        this.buf.push(value);
        return this;
    }
    int32(value) {
        assertInt32(value);
        varint32write(value, this.buf);
        return this;
    }
    bool(value) {
        this.buf.push(value ? 1 : 0);
        return this;
    }
    bytes(value) {
        this.uint32(value.byteLength);
        return this.raw(value);
    }
    string(value) {
        let chunk = this.textEncoder.encode(value);
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
    }
    float(value) {
        assertFloat32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setFloat32(0, value, true);
        return this.raw(chunk);
    }
    double(value) {
        let chunk = new Uint8Array(8);
        new DataView(chunk.buffer).setFloat64(0, value, true);
        return this.raw(chunk);
    }
    fixed32(value) {
        assertUInt32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setUint32(0, value, true);
        return this.raw(chunk);
    }
    sfixed32(value) {
        assertInt32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setInt32(0, value, true);
        return this.raw(chunk);
    }
    sint32(value) {
        assertInt32(value);
        value = (value << 1 ^ value >> 31) >>> 0;
        varint32write(value, this.buf);
        return this;
    }
    sfixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.enc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
    }
    fixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.uEnc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
    }
    int64(value) {
        let tc = protoInt64.enc(value);
        varint64write(tc.lo, tc.hi, this.buf);
        return this;
    }
    sint64(value) {
        let tc = protoInt64.enc(value), sign = tc.hi >> 31, lo2 = tc.lo << 1 ^ sign, hi2 = (tc.hi << 1 | tc.lo >>> 31) ^ sign;
        varint64write(lo2, hi2, this.buf);
        return this;
    }
    uint64(value) {
        let tc = protoInt64.uEnc(value);
        varint64write(tc.lo, tc.hi, this.buf);
        return this;
    }
};
BinaryReader = class {
    constructor(buf, textDecoder3){
        this.varint64 = varint64read;
        this.uint32 = varint32read;
        this.buf = buf;
        this.len = buf.length;
        this.pos = 0;
        this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
        this.textDecoder = textDecoder3 !== null && textDecoder3 !== void 0 ? textDecoder3 : new TextDecoder();
    }
    tag() {
        let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5) throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [
            fieldNo,
            wireType
        ];
    }
    skip(wireType, fieldNo) {
        let start = this.pos;
        switch(wireType){
            case WireType.Varint:
                while(this.buf[this.pos++] & 128){}
                break;
            case WireType.Bit64:
                this.pos += 4;
            case WireType.Bit32:
                this.pos += 4;
                break;
            case WireType.LengthDelimited:
                let len = this.uint32();
                this.pos += len;
                break;
            case WireType.StartGroup:
                for(;;){
                    const [fn, wt2] = this.tag();
                    if (wt2 === WireType.EndGroup) {
                        if (fieldNo !== void 0 && fn !== fieldNo) {
                            throw new Error("invalid end group tag");
                        }
                        break;
                    }
                    this.skip(wt2, fn);
                }
                break;
            default:
                throw new Error("cant skip wire type " + wireType);
        }
        this.assertBounds();
        return this.buf.subarray(start, this.pos);
    }
    assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
        return this.uint32() | 0;
    }
    sint32() {
        let zze = this.uint32();
        return zze >>> 1 ^ -(zze & 1);
    }
    int64() {
        return protoInt64.dec(...this.varint64());
    }
    uint64() {
        return protoInt64.uDec(...this.varint64());
    }
    sint64() {
        let [lo2, hi2] = this.varint64();
        let s3 = -(lo2 & 1);
        lo2 = (lo2 >>> 1 | (hi2 & 1) << 31) ^ s3;
        hi2 = hi2 >>> 1 ^ s3;
        return protoInt64.dec(lo2, hi2);
    }
    bool() {
        let [lo2, hi2] = this.varint64();
        return lo2 !== 0 || hi2 !== 0;
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
    }
    fixed64() {
        return protoInt64.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
        return protoInt64.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    bytes() {
        let len = this.uint32(), start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
};

}
