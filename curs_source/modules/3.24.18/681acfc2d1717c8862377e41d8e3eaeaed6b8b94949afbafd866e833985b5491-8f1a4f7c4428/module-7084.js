"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, t = 0;
    for(let A = 0; A < 28; A += 7){
        let n = this.buf[this.pos++];
        if (e |= (127 & n) << A, !(128 & n)) return this.assertBounds(), [
            e,
            t
        ];
    }
    let A = this.buf[this.pos++];
    if (e |= (15 & A) << 28, t = (112 & A) >> 4, !(128 & A)) return this.assertBounds(), [
        e,
        t
    ];
    for(let A = 3; A <= 31; A += 7){
        let n = this.buf[this.pos++];
        if (t |= (127 & n) << A, !(128 & n)) return this.assertBounds(), [
            e,
            t
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, t, A) {
    for(let n = 0; n < 28; n += 7){
        const r = e >>> n, o = !(r >>> 7 == 0 && 0 == t), s = 255 & (o ? 128 | r : r);
        if (A.push(s), !o) return;
    }
    const n = e >>> 28 & 15 | (7 & t) << 4, r = !!(t >> 3);
    if (A.push(255 & (r ? 128 | n : n)), r) {
        for(let e = 3; e < 31; e += 7){
            const n = t >>> e, r = !(n >>> 7 == 0), o = 255 & (r ? 128 | n : n);
            if (A.push(o), !r) return;
        }
        A.push(t >>> 31 & 1);
    }
};
const A = 4294967296;
function n(e, t) {
    if ({ lo: e, hi: t } = function(e, t) {
        return {
            lo: e >>> 0,
            hi: t >>> 0
        };
    }(e, t), t <= 2097151) return String(A * t + e);
    const n = 16777215 & (e >>> 24 | t << 8), r = t >> 16 & 65535;
    let o = (16777215 & e) + 6777216 * n + 6710656 * r, i = n + 8147497 * r, a = 2 * r;
    const c = 1e7;
    return o >= c && (i += Math.floor(o / c), o %= c), i >= c && (a += Math.floor(i / c), i %= c), a.toString() + s(i) + s(o);
}
function r(e, t) {
    return {
        lo: 0 | e,
        hi: 0 | t
    };
}
function o(e, t) {
    return t = ~t, e ? e = 1 + ~e : t += 1, r(e, t);
}
exports.int64FromString = function(e) {
    const t = "-" === e[0];
    t && (e = e.slice(1));
    const n = 1e6;
    let s = 0, i = 0;
    function a(t, r) {
        const o = Number(e.slice(t, r));
        i *= n, s = s * n + o, s >= A && (i += s / A | 0, s %= A);
    }
    return a(-24, -18), a(-18, -12), a(-12, -6), a(-6), t ? o(s, i) : r(s, i);
}, exports.int64ToString = function(e, t) {
    let A = r(e, t);
    const s = 2147483648 & A.hi;
    s && (A = o(A.lo, A.hi));
    const i = n(A.lo, A.hi);
    return s ? "-" + i : i;
}, exports.uInt64ToString = n;
const s = (e)=>{
    const t = String(e);
    return "0000000".slice(t.length) + t;
};
exports.varint32write = function(e, t) {
    if (e >= 0) {
        for(; e > 127;)t.push(127 & e | 128), e >>>= 7;
        t.push(e);
    } else {
        for(let A = 0; A < 9; A++)t.push(127 & e | 128), e >>= 7;
        t.push(1);
    }
}, exports.varint32read = function() {
    let e = this.buf[this.pos++], t = 127 & e;
    if (!(128 & e)) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), t;
    if (e = this.buf[this.pos++], t |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), t;
    e = this.buf[this.pos++], t |= (15 & e) << 28;
    for(let t = 5; 128 & e && t < 10; t++)e = this.buf[this.pos++];
    if (128 & e) throw new Error("invalid varint");
    return this.assertBounds(), t >>> 0;
};
