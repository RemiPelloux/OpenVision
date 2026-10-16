"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let e = 0, t = 0;
    for(let r = 0; r < 28; r += 7){
        let n = this.buf[this.pos++];
        if (e |= (127 & n) << r, !(128 & n)) return this.assertBounds(), [
            e,
            t
        ];
    }
    let r = this.buf[this.pos++];
    if (e |= (15 & r) << 28, t = (112 & r) >> 4, !(128 & r)) return this.assertBounds(), [
        e,
        t
    ];
    for(let r = 3; r <= 31; r += 7){
        let n = this.buf[this.pos++];
        if (t |= (127 & n) << r, !(128 & n)) return this.assertBounds(), [
            e,
            t
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(e, t, r) {
    for(let n = 0; n < 28; n += 7){
        const s = e >>> n, o = !(s >>> 7 == 0 && 0 == t), i = 255 & (o ? 128 | s : s);
        if (r.push(i), !o) return;
    }
    const n = e >>> 28 & 15 | (7 & t) << 4, s = !!(t >> 3);
    if (r.push(255 & (s ? 128 | n : n)), s) {
        for(let e = 3; e < 31; e += 7){
            const n = t >>> e, s = !(n >>> 7 == 0), o = 255 & (s ? 128 | n : n);
            if (r.push(o), !s) return;
        }
        r.push(t >>> 31 & 1);
    }
};
const r = 4294967296;
function n(e, t) {
    if ({ lo: e, hi: t } = function(e, t) {
        return {
            lo: e >>> 0,
            hi: t >>> 0
        };
    }(e, t), t <= 2097151) return String(r * t + e);
    const n = 16777215 & (e >>> 24 | t << 8), s = t >> 16 & 65535;
    let o = (16777215 & e) + 6777216 * n + 6710656 * s, a = n + 8147497 * s, c = 2 * s;
    const l = 1e7;
    return o >= l && (a += Math.floor(o / l), o %= l), a >= l && (c += Math.floor(a / l), a %= l), c.toString() + i(a) + i(o);
}
function s(e, t) {
    return {
        lo: 0 | e,
        hi: 0 | t
    };
}
function o(e, t) {
    return t = ~t, e ? e = 1 + ~e : t += 1, s(e, t);
}
exports.int64FromString = function(e) {
    const t = "-" === e[0];
    t && (e = e.slice(1));
    const n = 1e6;
    let i = 0, a = 0;
    function c(t, s) {
        const o = Number(e.slice(t, s));
        a *= n, i = i * n + o, i >= r && (a += i / r | 0, i %= r);
    }
    return c(-24, -18), c(-18, -12), c(-12, -6), c(-6), t ? o(i, a) : s(i, a);
}, exports.int64ToString = function(e, t) {
    let r = s(e, t);
    const i = 2147483648 & r.hi;
    i && (r = o(r.lo, r.hi));
    const a = n(r.lo, r.hi);
    return i ? "-" + a : a;
}, exports.uInt64ToString = n;
const i = (e)=>{
    const t = String(e);
    return "0000000".slice(t.length) + t;
};
exports.varint32write = function(e, t) {
    if (e >= 0) {
        for(; e > 127;)t.push(127 & e | 128), e >>>= 7;
        t.push(e);
    } else {
        for(let r = 0; r < 9; r++)t.push(127 & e | 128), e >>= 7;
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
