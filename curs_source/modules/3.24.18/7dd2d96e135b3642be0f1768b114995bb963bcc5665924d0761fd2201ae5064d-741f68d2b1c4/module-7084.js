"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, n = 0;
    for(let t = 0; t < 28; t += 7){
        let a = this.buf[this.pos++];
        if (e |= (127 & a) << t, !(128 & a)) return this.assertBounds(), [
            e,
            n
        ];
    }
    let t = this.buf[this.pos++];
    if (e |= (15 & t) << 28, n = (112 & t) >> 4, !(128 & t)) return this.assertBounds(), [
        e,
        n
    ];
    for(let t = 3; t <= 31; t += 7){
        let a = this.buf[this.pos++];
        if (n |= (127 & a) << t, !(128 & a)) return this.assertBounds(), [
            e,
            n
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, n, t) {
    for(let a = 0; a < 28; a += 7){
        const s = e >>> a, o = !(s >>> 7 == 0 && 0 == n), r = 255 & (o ? 128 | s : s);
        if (t.push(r), !o) return;
    }
    const a = e >>> 28 & 15 | (7 & n) << 4, s = !!(n >> 3);
    if (t.push(255 & (s ? 128 | a : a)), s) {
        for(let e = 3; e < 31; e += 7){
            const a = n >>> e, s = !(a >>> 7 == 0), o = 255 & (s ? 128 | a : a);
            if (t.push(o), !s) return;
        }
        t.push(n >>> 31 & 1);
    }
};
const t = 4294967296;
function a(e, n) {
    if ({ lo: e, hi: n } = function(e, n) {
        return {
            lo: e >>> 0,
            hi: n >>> 0
        };
    }(e, n), n <= 2097151) return String(t * n + e);
    const a = 16777215 & (e >>> 24 | n << 8), s = n >> 16 & 65535;
    let o = (16777215 & e) + 6777216 * a + 6710656 * s, i = a + 8147497 * s, A = 2 * s;
    const c = 1e7;
    return o >= c && (i += Math.floor(o / c), o %= c), i >= c && (A += Math.floor(i / c), i %= c), A.toString() + r(i) + r(o);
}
function s(e, n) {
    return {
        lo: 0 | e,
        hi: 0 | n
    };
}
function o(e, n) {
    return n = ~n, e ? e = 1 + ~e : n += 1, s(e, n);
}
exports.int64FromString = function(e) {
    const n = "-" === e[0];
    n && (e = e.slice(1));
    const a = 1e6;
    let r = 0, i = 0;
    function A(n, s) {
        const o = Number(e.slice(n, s));
        i *= a, r = r * a + o, r >= t && (i += r / t | 0, r %= t);
    }
    return A(-24, -18), A(-18, -12), A(-12, -6), A(-6), n ? o(r, i) : s(r, i);
}, exports.int64ToString = function(e, n) {
    let t = s(e, n);
    const r = 2147483648 & t.hi;
    r && (t = o(t.lo, t.hi));
    const i = a(t.lo, t.hi);
    return r ? "-" + i : i;
}, exports.uInt64ToString = a;
const r = (e)=>{
    const n = String(e);
    return "0000000".slice(n.length) + n;
};
exports.varint32write = function(e, n) {
    if (e >= 0) {
        for(; e > 127;)n.push(127 & e | 128), e >>>= 7;
        n.push(e);
    } else {
        for(let t = 0; t < 9; t++)n.push(127 & e | 128), e >>= 7;
        n.push(1);
    }
}, exports.varint32read = function() {
    let e = this.buf[this.pos++], n = 127 & e;
    if (!(128 & e)) return this.assertBounds(), n;
    if (e = this.buf[this.pos++], n |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), n;
    if (e = this.buf[this.pos++], n |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), n;
    if (e = this.buf[this.pos++], n |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), n;
    e = this.buf[this.pos++], n |= (15 & e) << 28;
    for(let n = 5; 128 & e && n < 10; n++)e = this.buf[this.pos++];
    if (128 & e) throw new Error("invalid varint");
    return this.assertBounds(), n >>> 0;
};
