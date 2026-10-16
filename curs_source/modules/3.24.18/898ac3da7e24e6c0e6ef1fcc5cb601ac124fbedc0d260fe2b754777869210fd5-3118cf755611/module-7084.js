"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, n = 0;
    for(let a = 0; a < 28; a += 7){
        let t = this.buf[this.pos++];
        if (e |= (127 & t) << a, !(128 & t)) return this.assertBounds(), [
            e,
            n
        ];
    }
    let a = this.buf[this.pos++];
    if (e |= (15 & a) << 28, n = (112 & a) >> 4, !(128 & a)) return this.assertBounds(), [
        e,
        n
    ];
    for(let a = 3; a <= 31; a += 7){
        let t = this.buf[this.pos++];
        if (n |= (127 & t) << a, !(128 & t)) return this.assertBounds(), [
            e,
            n
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, n, a) {
    for(let t = 0; t < 28; t += 7){
        const s = e >>> t, o = !(s >>> 7 == 0 && 0 == n), r = 255 & (o ? 128 | s : s);
        if (a.push(r), !o) return;
    }
    const t = e >>> 28 & 15 | (7 & n) << 4, s = !!(n >> 3);
    if (a.push(255 & (s ? 128 | t : t)), s) {
        for(let e = 3; e < 31; e += 7){
            const t = n >>> e, s = !(t >>> 7 == 0), o = 255 & (s ? 128 | t : t);
            if (a.push(o), !s) return;
        }
        a.push(n >>> 31 & 1);
    }
};
const a = 4294967296;
function t(e, n) {
    if ({ lo: e, hi: n } = function(e, n) {
        return {
            lo: e >>> 0,
            hi: n >>> 0
        };
    }(e, n), n <= 2097151) return String(a * n + e);
    const t = 16777215 & (e >>> 24 | n << 8), s = n >> 16 & 65535;
    let o = (16777215 & e) + 6777216 * t + 6710656 * s, i = t + 8147497 * s, A = 2 * s;
    const l = 1e7;
    return o >= l && (i += Math.floor(o / l), o %= l), i >= l && (A += Math.floor(i / l), i %= l), A.toString() + r(i) + r(o);
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
    const t = 1e6;
    let r = 0, i = 0;
    function A(n, s) {
        const o = Number(e.slice(n, s));
        i *= t, r = r * t + o, r >= a && (i += r / a | 0, r %= a);
    }
    return A(-24, -18), A(-18, -12), A(-12, -6), A(-6), n ? o(r, i) : s(r, i);
}, exports.int64ToString = function(e, n) {
    let a = s(e, n);
    const r = 2147483648 & a.hi;
    r && (a = o(a.lo, a.hi));
    const i = t(a.lo, a.hi);
    return r ? "-" + i : i;
}, exports.uInt64ToString = t;
const r = (e)=>{
    const n = String(e);
    return "0000000".slice(n.length) + n;
};
exports.varint32write = function(e, n) {
    if (e >= 0) {
        for(; e > 127;)n.push(127 & e | 128), e >>>= 7;
        n.push(e);
    } else {
        for(let a = 0; a < 9; a++)n.push(127 & e | 128), e >>= 7;
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
