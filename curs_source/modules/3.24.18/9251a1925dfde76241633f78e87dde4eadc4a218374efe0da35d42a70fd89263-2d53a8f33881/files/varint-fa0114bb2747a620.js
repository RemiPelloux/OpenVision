var __wakaru_require_varint_cache;
export function require_varint() {
if (__wakaru_require_varint_cache) return __wakaru_require_varint_cache;
var exports2 = {};
__wakaru_require_varint_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.varint32read = exports2.varint32write = exports2.uInt64ToString = exports2.int64ToString = exports2.int64FromString = exports2.varint64write = exports2.varint64read = void 0;
function varint64read2() {
    let lowBits = 0;
    let highBits = 0;
    for(let shift = 0; shift < 28; shift += 7){
        let b2 = this.buf[this.pos++];
        lowBits |= (b2 & 127) << shift;
        if ((b2 & 128) == 0) {
            this.assertBounds();
            return [
                lowBits,
                highBits
            ];
        }
    }
    let middleByte = this.buf[this.pos++];
    lowBits |= (middleByte & 15) << 28;
    highBits = (middleByte & 112) >> 4;
    if ((middleByte & 128) == 0) {
        this.assertBounds();
        return [
            lowBits,
            highBits
        ];
    }
    for(let shift = 3; shift <= 31; shift += 7){
        let b2 = this.buf[this.pos++];
        highBits |= (b2 & 127) << shift;
        if ((b2 & 128) == 0) {
            this.assertBounds();
            return [
                lowBits,
                highBits
            ];
        }
    }
    throw new Error("invalid varint");
}
exports2.varint64read = varint64read2;
function varint64write2(lo2, hi2, bytes) {
    for(let i = 0; i < 28; i = i + 7){
        const shift = lo2 >>> i;
        const hasNext = !(shift >>> 7 == 0 && hi2 == 0);
        const byte = (hasNext ? shift | 128 : shift) & 255;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    const splitBits = lo2 >>> 28 & 15 | (hi2 & 7) << 4;
    const hasMoreBits = !(hi2 >> 3 == 0);
    bytes.push((hasMoreBits ? splitBits | 128 : splitBits) & 255);
    if (!hasMoreBits) {
        return;
    }
    for(let i = 3; i < 31; i = i + 7){
        const shift = hi2 >>> i;
        const hasNext = !(shift >>> 7 == 0);
        const byte = (hasNext ? shift | 128 : shift) & 255;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    bytes.push(hi2 >>> 31 & 1);
}
exports2.varint64write = varint64write2;
var TWO_PWR_32_DBL2 = 4294967296;
function int64FromString2(dec) {
    const minus = dec[0] === "-";
    if (minus) {
        dec = dec.slice(1);
    }
    const base = 1e6;
    let lowBits = 0;
    let highBits = 0;
    function add1e6digit(begin, end) {
        const digit1e6 = Number(dec.slice(begin, end));
        highBits *= base;
        lowBits = lowBits * base + digit1e6;
        if (lowBits >= TWO_PWR_32_DBL2) {
            highBits = highBits + (lowBits / TWO_PWR_32_DBL2 | 0);
            lowBits = lowBits % TWO_PWR_32_DBL2;
        }
    }
    add1e6digit(-24, -18);
    add1e6digit(-18, -12);
    add1e6digit(-12, -6);
    add1e6digit(-6);
    return minus ? negate2(lowBits, highBits) : newBits2(lowBits, highBits);
}
exports2.int64FromString = int64FromString2;
function int64ToString2(lo2, hi2) {
    let bits = newBits2(lo2, hi2);
    const negative = bits.hi & 2147483648;
    if (negative) {
        bits = negate2(bits.lo, bits.hi);
    }
    const result = uInt64ToString2(bits.lo, bits.hi);
    return negative ? "-" + result : result;
}
exports2.int64ToString = int64ToString2;
function uInt64ToString2(lo2, hi2) {
    ({ lo: lo2, hi: hi2 } = toUnsigned2(lo2, hi2));
    if (hi2 <= 2097151) {
        return String(TWO_PWR_32_DBL2 * hi2 + lo2);
    }
    const low = lo2 & 16777215;
    const mid = (lo2 >>> 24 | hi2 << 8) & 16777215;
    const high = hi2 >> 16 & 65535;
    let digitA = low + mid * 6777216 + high * 6710656;
    let digitB = mid + high * 8147497;
    let digitC = high * 2;
    const base = 1e7;
    if (digitA >= base) {
        digitB += Math.floor(digitA / base);
        digitA %= base;
    }
    if (digitB >= base) {
        digitC += Math.floor(digitB / base);
        digitB %= base;
    }
    return digitC.toString() + decimalFrom1e7WithLeadingZeros2(digitB) + decimalFrom1e7WithLeadingZeros2(digitA);
}
exports2.uInt64ToString = uInt64ToString2;
function toUnsigned2(lo2, hi2) {
    return {
        lo: lo2 >>> 0,
        hi: hi2 >>> 0
    };
}
function newBits2(lo2, hi2) {
    return {
        lo: lo2 | 0,
        hi: hi2 | 0
    };
}
function negate2(lowBits, highBits) {
    highBits = ~highBits;
    if (lowBits) {
        lowBits = ~lowBits + 1;
    } else {
        highBits += 1;
    }
    return newBits2(lowBits, highBits);
}
var decimalFrom1e7WithLeadingZeros2 = (digit1e7)=>{
    const partial2 = String(digit1e7);
    return "0000000".slice(partial2.length) + partial2;
};
function varint32write2(value, bytes) {
    if (value >= 0) {
        while(value > 127){
            bytes.push(value & 127 | 128);
            value = value >>> 7;
        }
        bytes.push(value);
    } else {
        for(let i = 0; i < 9; i++){
            bytes.push(value & 127 | 128);
            value = value >> 7;
        }
        bytes.push(1);
    }
}
exports2.varint32write = varint32write2;
function varint32read2() {
    let b2 = this.buf[this.pos++];
    let result = b2 & 127;
    if ((b2 & 128) == 0) {
        this.assertBounds();
        return result;
    }
    b2 = this.buf[this.pos++];
    result |= (b2 & 127) << 7;
    if ((b2 & 128) == 0) {
        this.assertBounds();
        return result;
    }
    b2 = this.buf[this.pos++];
    result |= (b2 & 127) << 14;
    if ((b2 & 128) == 0) {
        this.assertBounds();
        return result;
    }
    b2 = this.buf[this.pos++];
    result |= (b2 & 127) << 21;
    if ((b2 & 128) == 0) {
        this.assertBounds();
        return result;
    }
    b2 = this.buf[this.pos++];
    result |= (b2 & 15) << 28;
    for(let readBytes = 5; (b2 & 128) !== 0 && readBytes < 10; readBytes++)b2 = this.buf[this.pos++];
    if ((b2 & 128) != 0) throw new Error("invalid varint");
    this.assertBounds();
    return result >>> 0;
}
exports2.varint32read = varint32read2;

return exports2;
}
