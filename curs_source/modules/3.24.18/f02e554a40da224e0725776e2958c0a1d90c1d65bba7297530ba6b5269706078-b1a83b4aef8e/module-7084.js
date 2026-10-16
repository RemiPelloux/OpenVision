"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.varint32read = exports.varint32write = exports.uInt64ToString = exports.int64ToString = exports.int64FromString = exports.varint64write = exports.varint64read = void 0, exports.varint64read = function() {
    let t = 0, e = 0;
    for(let r = 0; r < 28; r += 7){
        let n = this.buf[this.pos++];
        if (t |= (127 & n) << r, !(128 & n)) return this.assertBounds(), [
            t,
            e
        ];
    }
    let r = this.buf[this.pos++];
    if (t |= (15 & r) << 28, e = (112 & r) >> 4, !(128 & r)) return this.assertBounds(), [
        t,
        e
    ];
    for(let r = 3; r <= 31; r += 7){
        let n = this.buf[this.pos++];
        if (e |= (127 & n) << r, !(128 & n)) return this.assertBounds(), [
            t,
            e
        ];
    }
    throw new Error("invalid varint");
}, exports.varint64write = function(t, e, r) {
    for(let n = 0; n < 28; n += 7){
        const s = t >>> n, i = !(s >>> 7 == 0 && 0 == e), o = 255 & (i ? 128 | s : s);
        if (r.push(o), !i) return;
    }
    const n = t >>> 28 & 15 | (7 & e) << 4, s = !!(e >> 3);
    if (r.push(255 & (s ? 128 | n : n)), s) {
        for(let t = 3; t < 31; t += 7){
            const n = e >>> t, s = !(n >>> 7 == 0), i = 255 & (s ? 128 | n : n);
            if (r.push(i), !s) return;
        }
        r.push(e >>> 31 & 1);
    }
};
const r = 4294967296;
function n(t, e) {
    if ({ lo: t, hi: e } = function(t, e) {
        return {
            lo: t >>> 0,
            hi: e >>> 0
        };
    }(t, e), e <= 2097151) return String(r * e + t);
    const n = 16777215 & (t >>> 24 | e << 8), s = e >> 16 & 65535;
    let i = (16777215 & t) + 6777216 * n + 6710656 * s, a = n + 8147497 * s, u = 2 * s;
    const c = 1e7;
    return i >= c && (a += Math.floor(i / c), i %= c), a >= c && (u += Math.floor(a / c), a %= c), u.toString() + o(a) + o(i);
}
function s(t, e) {
    return {
        lo: 0 | t,
        hi: 0 | e
    };
}
function i(t, e) {
    return e = ~e, t ? t = 1 + ~t : e += 1, s(t, e);
}
exports.int64FromString = function(t) {
    const e = "-" === t[0];
    e && (t = t.slice(1));
    const n = 1e6;
    let o = 0, a = 0;
    function u(e, s) {
        const i = Number(t.slice(e, s));
        a *= n, o = o * n + i, o >= r && (a += o / r | 0, o %= r);
    }
    return u(-24, -18), u(-18, -12), u(-12, -6), u(-6), e ? i(o, a) : s(o, a);
}, exports.int64ToString = function(t, e) {
    let r = s(t, e);
    const o = 2147483648 & r.hi;
    o && (r = i(r.lo, r.hi));
    const a = n(r.lo, r.hi);
    return o ? "-" + a : a;
}, exports.uInt64ToString = n;
const o = (t)=>{
    const e = String(t);
    return "0000000".slice(e.length) + e;
};
exports.varint32write = function(t, e) {
    if (t >= 0) {
        for(; t > 127;)e.push(127 & t | 128), t >>>= 7;
        e.push(t);
    } else {
        for(let r = 0; r < 9; r++)e.push(127 & t | 128), t >>= 7;
        e.push(1);
    }
}, exports.varint32read = function() {
    let t = this.buf[this.pos++], e = 127 & t;
    if (!(128 & t)) return this.assertBounds(), e;
    if (t = this.buf[this.pos++], e |= (127 & t) << 7, !(128 & t)) return this.assertBounds(), e;
    if (t = this.buf[this.pos++], e |= (127 & t) << 14, !(128 & t)) return this.assertBounds(), e;
    if (t = this.buf[this.pos++], e |= (127 & t) << 21, !(128 & t)) return this.assertBounds(), e;
    t = this.buf[this.pos++], e |= (15 & t) << 28;
    for(let e = 5; 128 & t && e < 10; e++)t = this.buf[this.pos++];
    if (128 & t) throw new Error("invalid varint");
    return this.assertBounds(), e >>> 0;
};
