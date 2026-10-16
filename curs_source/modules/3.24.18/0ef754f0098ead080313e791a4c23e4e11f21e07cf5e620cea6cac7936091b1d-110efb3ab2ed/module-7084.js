"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, a = 0;
    for(let n = 0; n < 28; n += 7){
        let t = this.buf[this.pos++];
        if (e |= (127 & t) << n, !(128 & t)) return this.assertBounds(), [
            e,
            a
        ];
    }
    let n = this.buf[this.pos++];
    if (e |= (15 & n) << 28, a = (112 & n) >> 4, !(128 & n)) return this.assertBounds(), [
        e,
        a
    ];
    for(let n = 3; n <= 31; n += 7){
        let t = this.buf[this.pos++];
        if (a |= (127 & t) << n, !(128 & t)) return this.assertBounds(), [
            e,
            a
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, a, n) {
    for(let t = 0; t < 28; t += 7){
        const s = e >>> t, o = !(s >>> 7 == 0 && 0 == a), r = 255 & (o ? 128 | s : s);
        if (n.push(r), !o) return;
    }
    const t = e >>> 28 & 15 | (7 & a) << 4, s = !!(a >> 3);
    if (n.push(255 & (s ? 128 | t : t)), s) {
        for(let e = 3; e < 31; e += 7){
            const t = a >>> e, s = !(t >>> 7 == 0), o = 255 & (s ? 128 | t : t);
            if (n.push(o), !s) return;
        }
        n.push(a >>> 31 & 1);
    }
};
const n = 4294967296;
function t(e, a) {
    if ({ lo: e, hi: a } = function(e, a) {
        return {
            lo: e >>> 0,
            hi: a >>> 0
        };
    }(e, a), a <= 2097151) return String(n * a + e);
    const t = 16777215 & (e >>> 24 | a << 8), s = a >> 16 & 65535;
    let o = (16777215 & e) + 6777216 * t + 6710656 * s, i = t + 8147497 * s, l = 2 * s;
    const d = 1e7;
    return o >= d && (i += Math.floor(o / d), o %= d), i >= d && (l += Math.floor(i / d), i %= d), l.toString() + r(i) + r(o);
}
function s(e, a) {
    return {
        lo: 0 | e,
        hi: 0 | a
    };
}
function o(e, a) {
    return a = ~a, e ? e = 1 + ~e : a += 1, s(e, a);
}
exports.int64FromString = function(e) {
    const a = "-" === e[0];
    a && (e = e.slice(1));
    const t = 1e6;
    let r = 0, i = 0;
    function l(a, s) {
        const o = Number(e.slice(a, s));
        i *= t, r = r * t + o, r >= n && (i += r / n | 0, r %= n);
    }
    return l(-24, -18), l(-18, -12), l(-12, -6), l(-6), a ? o(r, i) : s(r, i);
}, exports.int64ToString = function(e, a) {
    let n = s(e, a);
    const r = 2147483648 & n.hi;
    r && (n = o(n.lo, n.hi));
    const i = t(n.lo, n.hi);
    return r ? "-" + i : i;
}, exports.uInt64ToString = t;
const r = (e)=>{
    const a = String(e);
    return "0000000".slice(a.length) + a;
};
exports.varint32write = function(e, a) {
    if (e >= 0) {
        for(; e > 127;)a.push(127 & e | 128), e >>>= 7;
        a.push(e);
    } else {
        for(let n = 0; n < 9; n++)a.push(127 & e | 128), e >>= 7;
        a.push(1);
    }
}, exports.varint32read = function() {
    let e = this.buf[this.pos++], a = 127 & e;
    if (!(128 & e)) return this.assertBounds(), a;
    if (e = this.buf[this.pos++], a |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), a;
    if (e = this.buf[this.pos++], a |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), a;
    if (e = this.buf[this.pos++], a |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), a;
    e = this.buf[this.pos++], a |= (15 & e) << 28;
    for(let a = 5; 128 & e && a < 10; a++)e = this.buf[this.pos++];
    if (128 & e) throw new Error("invalid varint");
    return this.assertBounds(), a >>> 0;
};
