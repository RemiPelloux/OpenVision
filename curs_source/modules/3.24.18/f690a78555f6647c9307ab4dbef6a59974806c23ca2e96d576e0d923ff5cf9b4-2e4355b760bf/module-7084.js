"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, A = 0;
    for(let t = 0; t < 28; t += 7){
        let n = this.buf[this.pos++];
        if (e |= (127 & n) << t, !(128 & n)) return this.assertBounds(), [
            e,
            A
        ];
    }
    let t = this.buf[this.pos++];
    if (e |= (15 & t) << 28, A = (112 & t) >> 4, !(128 & t)) return this.assertBounds(), [
        e,
        A
    ];
    for(let t = 3; t <= 31; t += 7){
        let n = this.buf[this.pos++];
        if (A |= (127 & n) << t, !(128 & n)) return this.assertBounds(), [
            e,
            A
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, A, t) {
    for(let n = 0; n < 28; n += 7){
        const r = e >>> n, o = !(r >>> 7 == 0 && 0 == A), s = 255 & (o ? 128 | r : r);
        if (t.push(s), !o) return;
    }
    const n = e >>> 28 & 15 | (7 & A) << 4, r = !!(A >> 3);
    if (t.push(255 & (r ? 128 | n : n)), r) {
        for(let e = 3; e < 31; e += 7){
            const n = A >>> e, r = !(n >>> 7 == 0), o = 255 & (r ? 128 | n : n);
            if (t.push(o), !r) return;
        }
        t.push(A >>> 31 & 1);
    }
};
const t = 4294967296;
function n(e, A) {
    if ({ lo: e, hi: A } = function(e, A) {
        return {
            lo: e >>> 0,
            hi: A >>> 0
        };
    }(e, A), A <= 2097151) return String(t * A + e);
    const n = 16777215 & (e >>> 24 | A << 8), r = A >> 16 & 65535;
    let o = (16777215 & e) + 6777216 * n + 6710656 * r, a = n + 8147497 * r, i = 2 * r;
    const c = 1e7;
    return o >= c && (a += Math.floor(o / c), o %= c), a >= c && (i += Math.floor(a / c), a %= c), i.toString() + s(a) + s(o);
}
function r(e, A) {
    return {
        lo: 0 | e,
        hi: 0 | A
    };
}
function o(e, A) {
    return A = ~A, e ? e = 1 + ~e : A += 1, r(e, A);
}
exports.int64FromString = function(e) {
    const A = "-" === e[0];
    A && (e = e.slice(1));
    const n = 1e6;
    let s = 0, a = 0;
    function i(A, r) {
        const o = Number(e.slice(A, r));
        a *= n, s = s * n + o, s >= t && (a += s / t | 0, s %= t);
    }
    return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), A ? o(s, a) : r(s, a);
}, exports.int64ToString = function(e, A) {
    let t = r(e, A);
    const s = 2147483648 & t.hi;
    s && (t = o(t.lo, t.hi));
    const a = n(t.lo, t.hi);
    return s ? "-" + a : a;
}, exports.uInt64ToString = n;
const s = (e)=>{
    const A = String(e);
    return "0000000".slice(A.length) + A;
};
exports.varint32write = function(e, A) {
    if (e >= 0) {
        for(; e > 127;)A.push(127 & e | 128), e >>>= 7;
        A.push(e);
    } else {
        for(let t = 0; t < 9; t++)A.push(127 & e | 128), e >>= 7;
        A.push(1);
    }
}, exports.varint32read = function() {
    let e = this.buf[this.pos++], A = 127 & e;
    if (!(128 & e)) return this.assertBounds(), A;
    if (e = this.buf[this.pos++], A |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), A;
    if (e = this.buf[this.pos++], A |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), A;
    if (e = this.buf[this.pos++], A |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), A;
    e = this.buf[this.pos++], A |= (15 & e) << 28;
    for(let A = 5; 128 & e && A < 10; A++)e = this.buf[this.pos++];
    if (128 & e) throw new Error("invalid varint");
    return this.assertBounds(), A >>> 0;
};
